import { TrackByService } from '@abp/ng.core';
import { ChangeDetectorRef } from '@angular/core';
import { FormProp } from '../../models/form-props';
import { PropData } from '../../models/props';
export declare class ExtensibleFormPropComponent {
    readonly cdRef: ChangeDetectorRef;
    readonly track: TrackByService;
    data: PropData;
    prop: FormProp;
    constructor(cdRef: ChangeDetectorRef, track: TrackByService);
    getAsterisk(prop: FormProp, data: PropData): string;
    getComponent(prop: FormProp): string;
    getType(prop: FormProp): string;
}
