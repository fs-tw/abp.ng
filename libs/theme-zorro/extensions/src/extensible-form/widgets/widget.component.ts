import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  ReplaceableComponents,
  TrackByService,
  AbpValidators,
} from '@abp/ng.core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormProp, PropData } from '@abp/ng.theme.shared/extensions';
import { Observable, of } from 'rxjs';
import { ABP } from '@abp/ng.core';

@Component({
  template: `<ng-template #label let-input>
  <label [htmlFor]="prop.id"
    >{{ prop.displayName | abpLocalization }} {{ asterisk }}</label
  >
</ng-template>`,
})
export class WidgetComponentRef{
  @ViewChild('label') 
  labelRef: TemplateRef<any>;
  @Input()
  prop:FormProp
  @Input()
  asterisk: string = '';
}

@Component({
  template: ''
})
export class WidgetComponent {
  private _selfRef: ComponentRef<WidgetComponentRef> = null;

  protected replaceableData: ReplaceableComponents.ReplaceableTemplateData<
    any,
    any
  > = null;
  public readonly track: TrackByService = null;

  options$: Observable<ABP.Option<any>[]> = of([]);

  validators: ValidatorFn[] = [];

  readonly: boolean;

  disabled: boolean;

  asterisk: string = '';

  get form(): FormGroup {
    if (this.replaceableData) return this.replaceableData.inputs.form;
  }

  get data(): PropData {
    if (this.replaceableData) return this.replaceableData.inputs.data;
  }

  get prop(): FormProp {
    if (this.replaceableData) return this.replaceableData.inputs.prop;
  }

  get first(): boolean {
    if (this.replaceableData) return this.replaceableData.inputs.first;
  }

  get label(): TemplateRef<any> {
    return this._selfRef?.instance?.labelRef;
  }

  protected field: ElementRef<HTMLElement>;

  constructor(protected injector: Injector) {
    this.replaceableData = injector.get<
      ReplaceableComponents.ReplaceableTemplateData<any, any>
    >('REPLACEABLE_DATA' as any);

    this.track = injector.get(TrackByService);

    this.onPropChanges();
  }
  
  protected ngAfterViewInit(): void {
    const resolver = this.injector.get(ComponentFactoryResolver);
    const vcr = this.injector.get(ViewContainerRef);
    if (!this._selfRef) {
      const factory = resolver.resolveComponentFactory(
        WidgetComponentRef
      );
      this._selfRef = vcr.createComponent(factory);
      this._selfRef.instance.asterisk = this.asterisk;
      this._selfRef.instance.prop = this.prop
    }
    if (this.first && this.field) {
      this.field.nativeElement.focus();
    }
  }
  //todo add subject by replaceComponent
  onPropChanges() {
    const { options, readonly, disabled, validators } = this.prop || {};

    if (options) this.options$ = options(this.data);
    if (readonly) this.readonly = readonly(this.data);
    if (disabled) this.disabled = disabled(this.data);
    if (validators) {
      this.validators = validators(this.data);
      this.asterisk = this.validators.some(isRequired) ? '*' : '';
    }
  }
}

function isRequired(validator: ValidatorFn) {
  return (
    validator === Validators.required || validator === AbpValidators.required
  );
}
