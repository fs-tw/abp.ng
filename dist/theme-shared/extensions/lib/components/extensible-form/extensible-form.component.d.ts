import { TrackByService } from '@abp/ng.core';
import { ChangeDetectorRef, QueryList } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormPropList } from '../../models/form-props';
import { ExtensionsService } from '../../services/extensions.service';
import { ExtensibleFormPropComponent } from './extensible-form-prop.component';
export declare class ExtensibleFormComponent<R = any> {
    readonly cdRef: ChangeDetectorRef;
    readonly track: TrackByService;
    private container;
    private extensions;
    private identifier;
    formProps: QueryList<ExtensibleFormPropComponent>;
    set selectedRecord(record: R);
    extraPropertiesKey: string;
    propList: FormPropList<R>;
    record: R;
    get form(): FormGroup;
    get extraProperties(): FormGroup;
    constructor(cdRef: ChangeDetectorRef, track: TrackByService, container: ControlContainer, extensions: ExtensionsService, identifier: string);
}
