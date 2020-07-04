import { ChangeDetectorRef } from '@angular/core';
import { NgbInputDatepicker, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormProp } from '../../models/form-props';
export declare class DateTimePickerComponent {
    readonly cdRef: ChangeDetectorRef;
    prop: FormProp;
    date: NgbInputDatepicker;
    time: NgbTimepicker;
    constructor(cdRef: ChangeDetectorRef);
    setDate(datestr: string): void;
    setTime(datestr: string): void;
}
