import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Injector,
  Input,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensionsService,
  FormProp,
  PropData,
} from '@abp/ng.components/extensible';

// ng-zorro
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzExtensibleFormPropComponent } from './nz-extensible-form-prop.component';

// selfFactory from ABP
function selfFactory(container: ControlContainer) {
  return container;
}

@Component({
  selector: 'fs-extensible-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    NzExtensibleFormPropComponent,
  ],
  template: `
    <form nz-form [formGroup]="form" nzLayout="vertical">
      @for (prop of propList; track prop.name) {
        @if (isVisible(prop)) {
          <fs-extensible-form-prop
            [prop]="prop"
            [data]="createPropData(prop)"
          ></fs-extensible-form-prop>
        }
      }
    </form>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: selfFactory,
      deps: [[new Optional(), new SkipSelf(), ControlContainer]],
    },
  ],
})
export class NzExtensibleFormComponent<R = any> {
  private readonly cdRef = inject(ChangeDetectorRef);
  private readonly container = inject(ControlContainer);
  private readonly extensions = inject(ExtensionsService);
  private readonly identifier = inject(EXTENSIONS_IDENTIFIER);
  private readonly injector = inject(Injector);

  propList: FormProp<R>[] = [];
  record!: R;

  @Input()
  set selectedRecord(record: R) {
    // Determine create or edit mode based on record
    const type =
      !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
    const formPropsData = (this.extensions as any)[`${type}FormProps`].get(
      this.identifier
    );

    if (formPropsData?.props) {
      this.propList = [];
      formPropsData.props.forEach((item: { value: FormProp<R> }) => {
        this.propList.push(item.value);
      });
    }

    this.record = record;
    this.cdRef.markForCheck();
  }

  get form(): UntypedFormGroup {
    return (
      this.container ? this.container.control : { controls: {} }
    ) as UntypedFormGroup;
  }

  isVisible(prop: FormProp<R>): boolean {
    if (typeof prop.visible !== 'function') {
      return true;
    }
    const data = this.createPropData(prop);
    return prop.visible(data);
  }

  createPropData(prop: FormProp<R>): PropData<R> {
    return {
      getInjected: <T>(token: any) => this.injector.get(token),
      record: this.record,
      index: this.propList.indexOf(prop),
    } as PropData<R>;
  }
}
