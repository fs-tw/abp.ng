import { ListService, PagedResultDto } from '@abp/ng.core';
import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { tap } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { NzSelectLoadingComponent } from './nz-select-loading.component';

import { TemplateRef } from '@angular/core';
import {
  NzSelectOptionInterface,
  NzSelectTopControlComponent,
} from 'ng-zorro-antd/select';

export class NzSelectOption<R> implements NzSelectOptionInterface {
  constructor(
    public record: R,
    public value = 'id',
    public label = 'displayName'
  ) {}
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string | number | TemplateRef<any>;
  item: R;
}

@Directive({
  // tslint:disable-next-line
  selector: 'nz-select[default]',
  exportAs: 'nzSelectDefault',
  providers: [ListService],
})
export class NzSelectDefaultDirective<R = any> implements OnDestroy, OnInit {
  private subscription = new Subscription();
  private static componentRef: ComponentRef<NzSelectLoadingComponent> = null;

  @Input('default') streamCreator: (
    query
  ) => Observable<PagedResultDto<NzSelectOption<R>>>;
  @Output() selectedItemChange = new EventEmitter<
    NzSelectOption<R> | NzSelectOption<R>[]
  >();

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  set isLoading(value: boolean) {
    this.select.nzLoading = value;
    this.isLoading$.next(value);
  }

  count: number = 0;
  datas: NzSelectOption<R>[] = [];

  @ViewChild(NzSelectTopControlComponent) template: NzSelectTopControlComponent;

  constructor(
    private select: NzSelectComponent,
    private ngModel: NgModel,
    private list: ListService,
    private injector: Injector
  ) {
    this.setInitialValues();
  }

  private setInitialValues() {
    const el = this.injector.get(ElementRef);
    el.nativeElement.style = 'width:100%';
    this.select.nzShowSearch = true;
    this.select.nzAllowClear = true;
    this.select.nzServerSearch = true;
    this.select.nzLoading = true;
  }

  ngOnInit() {
    this.hookToQuery();
    this.hookToView();
  }
  ngAfterViewInit(): void {
    const resolver = this.injector.get(ComponentFactoryResolver);
    const vcr = this.injector.get(ViewContainerRef);
    const componentRef = getComponentRef();
    componentRef.instance.isLoading$ = this.isLoading$;

    this.select.nzDropdownRender = componentRef.instance.loading;

    function getComponentRef() {
      if (!NzSelectDefaultDirective.componentRef) {
        const factory = resolver.resolveComponentFactory(
          NzSelectLoadingComponent
        );
        NzSelectDefaultDirective.componentRef = vcr.createComponent(factory);
      }

      return NzSelectDefaultDirective.componentRef;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hookToView() {
    this.subscription.add(
      this.select.nzOnSearch
        .pipe(
          tap(($event) => {
            this.datas = [];
            this.list.filter = $event;
          })
        )
        .subscribe()
    );
    this.subscription.add(
      this.select.nzScrollToBottom
        .pipe(
          tap(() => {
            if (this.count <= this.datas.length) return;
            this.list.page++;
          })
        )
        .subscribe()
    );
    this.subscription.add(
      this.ngModel.update
        .pipe(
          tap(($event) => {
            let result: any;
            if (!Array.isArray($event)) {
              result = this.datas.filter((d) => {
                return $event === d.value;
              });
            } else {
              result = this.datas.filter((d) => {
                return $event.includes(d.value);
              });
            }
            this.selectedItemChange.emit(result);
          })
        )
        .subscribe()
    );
  }

  hookToQuery() {
    this.subscription.add(
      this.list.query$.subscribe((x) => {
        this.isLoading = true;
      })
    );

    this.subscription.add(
      this.list
        .hookToQuery(this.streamCreator)
        .pipe(
          tap((res) => {
            let filtered = res.items.filter(
              (x) => this.datas.findIndex((y) => y.value == x.value) == -1
            );

            this.datas = [...this.datas, ...filtered];
            this.count = res.totalCount;

            this.select.nzOptions = this.datas;
            this.select.ngOnChanges({
              nzOptions: {
                previousValue: [],
                currentValue: this.datas,
                firstChange: true,
                isFirstChange: () => true,
              },
            });
          })
        )
        .subscribe((res) => {
          this.isLoading = false;
          const cdr = this.injector.get(ChangeDetectorRef);
          cdr.detectChanges();
        })
    );
  }
}
