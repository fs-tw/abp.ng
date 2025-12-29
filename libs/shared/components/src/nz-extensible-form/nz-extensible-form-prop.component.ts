import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnChanges,
  Optional,
  signal,
  SimpleChanges,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { LocalizationModule, ABP } from '@abp/ng.core';
import { ePropType, FormProp, PropData } from '@abp/ng.components/extensible';

// ng-zorro
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';

// selfFactory from ABP
function selfFactory(container: ControlContainer) {
  return container;
}

@Component({
  selector: 'fs-extensible-form-prop',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzToolTipModule,
    NzIconModule,
  ],
  template: `
    @switch (componentType) {
      <!-- Hidden -->
      @case ('hidden') {
        <input type="hidden" [formControlName]="prop.name" />
      }

      <!-- Checkbox / Boolean -->
      @case ('checkbox') {
        <nz-form-item>
          <nz-form-control>
            <label nz-checkbox [formControlName]="prop.name">
              {{ prop.displayName | abpLocalization }}
            </label>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Select / Enum -->
      @case ('select') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-select
              [formControlName]="prop.name"
              [nzPlaceHolder]="'AbpUi::PleaseSelect' | abpLocalization"
              nzAllowClear
            >
              @for (option of options(); track option.value) {
                <nz-option [nzValue]="option.value" [nzLabel]="option.key"></nz-option>
              }
            </nz-select>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- MultiSelect -->
      @case ('multiselect') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-select
              [formControlName]="prop.name"
              nzMode="multiple"
              [nzPlaceHolder]="'AbpUi::PleaseSelect' | abpLocalization"
            >
              @for (option of options(); track option.value) {
                <nz-option [nzValue]="option.value" [nzLabel]="option.key"></nz-option>
              }
            </nz-select>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Number -->
      @case ('number') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-input-number
              [formControlName]="prop.name"
              [nzId]="prop.name"
              style="width: 100%"
            ></nz-input-number>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Date -->
      @case ('date') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-date-picker
              [formControlName]="prop.name"
              [nzId]="prop.name"
              style="width: 100%"
            ></nz-date-picker>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- DateTime -->
      @case ('datetime') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-date-picker
              [formControlName]="prop.name"
              [nzId]="prop.name"
              nzShowTime
              style="width: 100%"
            ></nz-date-picker>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Time -->
      @case ('time') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-time-picker
              [ngModel]="getTimeValue(prop.name)"
              (ngModelChange)="setTimeValue(prop.name, $event)"
              [ngModelOptions]="{standalone: true}"
              [nzId]="prop.name"
              [nzDefaultOpenValue]="defaultTimeValue"
              [nzAllowEmpty]="true"
              style="width: 100%"
            ></nz-time-picker>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Textarea -->
      @case ('textarea') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <textarea
              nz-input
              [formControlName]="prop.name"
              [id]="prop.name"
              [rows]="4"
            ></textarea>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Password -->
      @case ('password') {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <nz-input-group [nzSuffix]="suffixTpl">
              <input
                [type]="passwordVisible() ? 'text' : 'password'"
                nz-input
                [formControlName]="prop.name"
                [id]="prop.name"
              />
            </nz-input-group>
            <ng-template #suffixTpl>
              @if (passwordVisible()) {
                <span nz-icon nzType="eye" nzTheme="outline" (click)="togglePasswordVisibility()" style="cursor: pointer"></span>
              } @else {
                <span nz-icon nzType="eye-invisible" nzTheme="outline" (click)="togglePasswordVisibility()" style="cursor: pointer"></span>
              }
            </ng-template>
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }

      <!-- Default: Input (String, Email, etc.) -->
      @default {
        <nz-form-item>
          <nz-form-label [nzFor]="prop.name" [nzRequired]="isRequired">
            {{ prop.displayName | abpLocalization }}
          </nz-form-label>
          <nz-form-control [nzErrorTip]="errorTpl">
            <input
              nz-input
              [formControlName]="prop.name"
              [id]="prop.name"
              [type]="inputType"
            />
            <ng-template #errorTpl let-control>
              @if (control.hasError('required')) {
                {{ 'AbpValidation::ThisFieldIsRequired.' | abpLocalization }}
              }
              @if (control.hasError('email')) {
                {{ 'AbpValidation::ThisFieldIsNotAValidEmailAddress.' | abpLocalization }}
              }
            </ng-template>
          </nz-form-control>
        </nz-form-item>
      }
    }
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
export class NzExtensibleFormPropComponent implements OnChanges {
  private readonly container = inject(ControlContainer);

  // Inputs
  @Input() prop!: FormProp;
  @Input() data!: PropData;

  // State
  options = signal<ABP.Option<any>[]>([]);
  passwordVisible = signal(false);
  isRequired = false;
  componentType = 'input';
  inputType = 'text';

  // Default time value for nz-time-picker (prevents "Invalid Date" error)
  defaultTimeValue = new Date(2000, 0, 1, 0, 0, 0);

  // Get form from ControlContainer
  get form(): UntypedFormGroup {
    return (this.container?.control as UntypedFormGroup) || null;
  }

  ngOnChanges({ prop, data }: SimpleChanges) {
    const currentProp = prop?.currentValue as FormProp;
    if (!currentProp) return;

    // Calculate componentType
    this.componentType = this.getComponentType(currentProp.type);

    // Calculate inputType
    this.inputType = this.getInputType(currentProp.type);

    // Calculate isRequired
    this.isRequired = this.calcIsRequired(currentProp);

    // Load options
    if (currentProp.options) {
      const currentData = data?.currentValue as PropData;
      const options$ = currentProp.options(currentData);
      if (options$) {
        options$.subscribe((opts) => {
          this.options.set(opts);
        });
      }
    }
  }

  private getComponentType(type: ePropType): string {
    switch (type) {
      case ePropType.Hidden:
        return 'hidden';
      case ePropType.Boolean:
        return 'checkbox';
      case ePropType.Enum:
        return 'select';
      case ePropType.MultiSelect:
        return 'multiselect';
      case ePropType.Number:
        return 'number';
      case ePropType.Date:
        return 'date';
      case ePropType.DateTime:
        return 'datetime';
      case ePropType.Time:
        return 'time';
      case ePropType.Text:
        return 'textarea';
      case ePropType.Password:
      case ePropType.PasswordInputGroup:
        return 'password';
      case ePropType.Typeahead:
        return 'select';
      default:
        return 'input';
    }
  }

  private getInputType(type: ePropType): string {
    switch (type) {
      case ePropType.Email:
        return 'email';
      case ePropType.Number:
        return 'number';
      default:
        return 'text';
    }
  }

  private calcIsRequired(prop: FormProp): boolean {
    const validators = prop.validators;
    if (!validators) return false;

    const validatorFns =
      typeof validators === 'function' ? validators({} as any) : [];
    return validatorFns.some((v: any) => {
      const testControl = { value: null } as any;
      const result = v(testControl);
      return result && result['required'];
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible.update((v) => !v);
  }

  // Helper methods for nz-time-picker to handle invalid Date values
  getTimeValue(controlName: string): Date | null {
    const control = this.form?.get(controlName);
    if (!control) return null;

    const value = control.value;
    if (!value) return null;

    // If it's already a valid Date, return it
    if (value instanceof Date && !isNaN(value.getTime())) {
      return value;
    }

    // If it's a string, try to parse it
    if (typeof value === 'string') {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }

    // Return null for invalid values
    return null;
  }

  setTimeValue(controlName: string, value: Date | null): void {
    const control = this.form?.get(controlName);
    if (control) {
      control.setValue(value);
      control.markAsDirty();
    }
  }
}
