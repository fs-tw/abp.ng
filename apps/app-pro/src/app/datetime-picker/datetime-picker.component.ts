import { Component, forwardRef, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbDateStruct,
  NgbDateStructAdapter,
  NgbPopoverModule,
  NgbTimepicker,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateTimeAdapter, TimeAdapter } from '@abp/ng.theme.shared';
import { AbstractNgModelComponent } from '@abp/ng.core';

@Component({
  selector: 'fs-tw-datetime-picker',
  standalone: true,
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    NgbTimepicker,
    NgbPopoverModule,
  ],
  templateUrl: './datetime-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimePickerComponent),
      multi: true,
    },
    { provide: DateTimeAdapter, useClass: DateTimeAdapter },
    { provide: TimeAdapter, useClass: TimeAdapter },
    { provide: NgbDateAdapter, useClass: NgbDateStructAdapter },
  ],
})
export class DatetimePickerComponent extends AbstractNgModelComponent<string> {
  protected dateTimeAdapter = inject(DateTimeAdapter);
  protected timeAdapter = inject(TimeAdapter);
  protected formatter = inject(NgbDateParserFormatter);
  protected separator = ' - ';

  date: NgbDateStruct | null | undefined;
  time: NgbTimeStruct | null | undefined;
  formattedValue = '';

  _onChange(event: Event) {
    const input = event.target as HTMLInputElement | null;

    if (!input) {
      return;
    }

    this.onChange?.(input.value);
  }

  setTime(val: NgbTimeStruct | null | undefined) {
    this.time = val;
    this.change();
  }

  setDate(val: NgbDateStruct | null | undefined) {
    this.date = val;
    this.change();
  }

  change() {
    if (!this.date) {
      return;
    }
    this.value = this.dateTimeAdapter.toModel({ ...this.date, ...this.time });
    const date = this.formatter.format(this.date);
    const time = this.timeAdapter.toModel(this.time ?? null);
    this.formattedValue = [date, time].filter((x) => !!x).join(this.separator);
  }
}
