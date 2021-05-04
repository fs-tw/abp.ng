import { ListService, LocalizationService } from '@abp/ng.core';
import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTableComponent, NzTableQueryParams } from 'ng-zorro-antd/table';
import { skip } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line
  selector: 'nz-table[list]',
  exportAs: 'nzTableList',
})
export class NzTableListDirective implements OnChanges, OnDestroy, OnInit {
  private subscription = new Subscription();
  private querySubscription = new Subscription();
  private loadingSubscription = new Subscription();

  @Input() list: ListService;

  constructor(
    //private body:NzTbodyComponent,
    private table: NzTableComponent,
    private cdRef: ChangeDetectorRef
  ) {
    this.setInitialValues();
  }

  private setInitialValues() {
    this.table.nzSize = 'small';
    this.table.nzFrontPagination = false;
    this.table.nzBordered = true;
    this.table.nzShowSizeChanger=true;
  }

  private subscribeToPage() {
    const sub = this.table.nzQueryParams
    .pipe(skip(1))
    .subscribe(
      (params: NzTableQueryParams) => {
        var self = this;
        var sort = params.sort
          .filter((x) => !!x.value)
          .map((x) => {
            return { key: x.key, order: x.value === 'ascend' ? 'asc' : 'desc' };
          })[0];
        var sortChanged = isParamsChange();

        if (!!sort) {
          this.list.sortKey = sort.key;
          this.list.sortOrder = sort.order;
        } else {
          this.list.sortKey = '';
          this.list.sortOrder = '';
        }
        this.list.maxResultCount=params.pageSize;

        if (sortChanged) {
          this.list.page = 0;
        } else {
          this.list.page = params.pageIndex - 1;
        }
        this.cdRef.detectChanges();
        function isParamsChange() {
          var currentSortKey = `${self.list.sortKey}-${self.list.sortOrder}-${self.list.maxResultCount}`;
          var changeSortKey = `--${params.pageSize}`;
          if (!!sort) {
            changeSortKey = `${sort.key}-${sort.order}-${params.pageSize}`;
          }
          return currentSortKey !== changeSortKey;
        }
      }
    );
    this.subscription.add(sub);
  }
  private subscribeToLoading() {
    if (!this.loadingSubscription.closed)
      this.loadingSubscription.unsubscribe();

    this.loadingSubscription = this.list.isLoading$.subscribe((x) => {
      this.table.nzLoading = x;
    });
  }

  private subscribeToQuery() {
    if (!this.querySubscription.closed) this.querySubscription.unsubscribe();
    this.querySubscription = this.list.query$.subscribe((q) => {
      this.table.onPageIndexChange(this.list.page + 1);
      this.table.onPageSizeChange(this.list.maxResultCount);
    });
  }

  ngOnChanges({ list }: SimpleChanges) {
    this.subscribeToQuery();
    if (!list.firstChange) return;
    const { maxResultCount, page } = list.currentValue;
    this.table.onPageSizeChange(maxResultCount);
    this.table.onPageIndexChange(page + 1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

  ngOnInit() {
    this.subscribeToPage();
    this.subscribeToLoading();
  }
}
