import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
import * as i0 from "@angular/core";
export declare class FeatureManagementComponent extends AbpFeatureManagementComponent {
    private _store;
    providerKey: string;
    providerName: string;
    protected _visible: any;
    get visible(): boolean;
    set visible(value: boolean);
    constructor(_store: Store);
    static ɵfac: i0.ɵɵFactoryDef<FeatureManagementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeatureManagementComponent, "ng-alain-feature-management", never, { "providerKey": "providerKey"; "providerName": "providerName"; "visible": "visible"; }, {}, never, never>;
}
