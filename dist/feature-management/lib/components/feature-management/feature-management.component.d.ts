import { TrackByService } from '@abp/ng.core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagement } from '../../models/feature-management';
import { FeaturesService } from '../../proxy/feature-management/features.service';
import { FeatureDto, FeatureGroupDto } from '../../proxy/feature-management/models';
declare enum ValueTypes {
    ToggleStringValueType = "ToggleStringValueType",
    FreeTextStringValueType = "FreeTextStringValueType",
    SelectionStringValueType = "SelectionStringValueType"
}
export declare class FeatureManagementComponent implements FeatureManagement.FeatureManagementComponentInputs, FeatureManagement.FeatureManagementComponentOutputs {
    readonly track: TrackByService;
    protected service: FeaturesService;
    protected store: Store;
    providerKey: string;
    providerName: string;
    selectedGroupDisplayName: string;
    groups: Pick<FeatureGroupDto, 'name' | 'displayName'>[];
    features: {
        [group: string]: Array<FeatureDto & {
            style?: {
                [key: string]: number;
            };
            initialValue: any;
        }>;
    };
    valueTypes: typeof ValueTypes;
    protected _visible: any;
    get visible(): boolean;
    set visible(value: boolean);
    readonly visibleChange: EventEmitter<boolean>;
    modalBusy: boolean;
    constructor(track: TrackByService, service: FeaturesService, store: Store);
    openModal(): void;
    getFeatures(): void;
    save(): void;
    onCheckboxClick(val: boolean, feature: FeatureDto): void;
    private uncheckToggleDescendants;
    private checkToggleAncestors;
    private findAllAncestorsOfByType;
    private findAllDescendantsOfByType;
    private findParentByType;
    private findChildrenByType;
    private getCurrentGroup;
    private setFeatureValue;
}
export {};
