import { ABP, TrackByService } from '@abp/ng.core';
import { ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormProp } from '../../models/form-props';
import { PropData } from '../../models/props';
export declare class ExtensibleFormPropComponent implements OnChanges {
    readonly cdRef: ChangeDetectorRef;
    readonly track: TrackByService;
    data: PropData;
    prop: FormProp;
    options$: Observable<ABP.Option<any>[]>;
    validators: ValidatorFn[];
    readonly: boolean;
    disabled: boolean;
    constructor(cdRef: ChangeDetectorRef, track: TrackByService);
    get asterisk(): string;
    getComponent(prop: FormProp): string;
    getType(prop: FormProp): string;
    ngOnChanges({ prop }: SimpleChanges): void;
}
