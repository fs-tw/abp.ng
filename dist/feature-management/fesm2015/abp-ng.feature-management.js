import { __decorate, __metadata } from 'tslib';
import { RestService, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { Store, Action, Selector, State, Select, NgxsModule } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap, pluck, finalize } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

class GetFeatures {
    constructor(payload) {
        this.payload = payload;
    }
}
GetFeatures.type = '[FeatureManagement] Get Features';
class UpdateFeatures {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateFeatures.type = '[FeatureManagement] Update Features';

let FeatureManagementService = class FeatureManagementService {
    constructor(rest, store) {
        this.rest = rest;
        this.store = store;
        this.apiName = 'FeatureManagement';
    }
    getFeatures(params) {
        const request = {
            method: 'GET',
            url: '/api/feature-management/features',
            params,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateFeatures({ features, providerKey, providerName, }) {
        const request = {
            method: 'PUT',
            url: '/api/feature-management/features',
            body: { features },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
};
FeatureManagementService.ɵprov = ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: FeatureManagementService, providedIn: "root" });
FeatureManagementService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService, Store])
], FeatureManagementService);

let FeatureManagementState = class FeatureManagementState {
    constructor(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    static getFeatures({ features }) {
        return features || [];
    }
    getFeatures({ patchState }, { payload }) {
        return this.featureManagementService.getFeatures(payload).pipe(tap(({ features }) => patchState({
            features,
        })));
    }
    updateFeatures(_, { payload }) {
        return this.featureManagementService.updateFeatures(payload);
    }
};
__decorate([
    Action(GetFeatures),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetFeatures]),
    __metadata("design:returntype", void 0)
], FeatureManagementState.prototype, "getFeatures", null);
__decorate([
    Action(UpdateFeatures),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateFeatures]),
    __metadata("design:returntype", void 0)
], FeatureManagementState.prototype, "updateFeatures", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FeatureManagementState, "getFeatures", null);
FeatureManagementState = __decorate([
    State({
        name: 'FeatureManagementState',
        defaults: { features: {} },
    }),
    Injectable(),
    __metadata("design:paramtypes", [FeatureManagementService])
], FeatureManagementState);

let FeatureManagementComponent = class FeatureManagementComponent {
    constructor(store) {
        this.store = store;
        this.visibleChange = new EventEmitter();
        this.modalBusy = false;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
    openModal() {
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        this.getFeatures();
    }
    getFeatures() {
        this.store
            .dispatch(new GetFeatures({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(pluck('FeatureManagementState', 'features'))
            .subscribe(features => {
            this.buildForm(features);
        });
    }
    buildForm(features) {
        const formGroupObj = {};
        for (let i = 0; i < features.length; i++) {
            formGroupObj[i] = new FormControl(features[i].value === 'false' ? null : features[i].value);
        }
        this.form = new FormGroup(formGroupObj);
    }
    save() {
        if (this.modalBusy)
            return;
        this.modalBusy = true;
        let features = this.store.selectSnapshot(FeatureManagementState.getFeatures);
        features = features.map((feature, i) => ({
            name: feature.name,
            value: !this.form.value[i] || this.form.value[i] === 'false' ? null : this.form.value[i],
        }));
        this.store
            .dispatch(new UpdateFeatures({
            providerKey: this.providerKey,
            providerName: this.providerName,
            features,
        }))
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.visible = false;
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], FeatureManagementComponent.prototype, "providerKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FeatureManagementComponent.prototype, "providerName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FeatureManagementComponent.prototype, "visible", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FeatureManagementComponent.prototype, "visibleChange", void 0);
__decorate([
    Select(FeatureManagementState.getFeatures),
    __metadata("design:type", Observable)
], FeatureManagementComponent.prototype, "features$", void 0);
FeatureManagementComponent = __decorate([
    Component({
        selector: 'abp-feature-management',
        template: "<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\r\n      <div\r\n        class=\"row my-3\"\r\n        *ngFor=\"let feature of features$ | async; let i = index\"\r\n        [ngSwitch]=\"feature.valueType.name\"\r\n      >\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(features$ | async)?.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <ng-container *ngIf=\"(features$ | async)?.length\">\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\r\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n      </abp-button>\r\n    </ng-container>\r\n  </ng-template>\r\n</abp-modal>\r\n",
        exportAs: 'abpFeatureManagement'
    }),
    __metadata("design:paramtypes", [Store])
], FeatureManagementComponent);

let FeatureManagementModule = class FeatureManagementModule {
};
FeatureManagementModule = __decorate([
    NgModule({
        declarations: [FeatureManagementComponent],
        imports: [CoreModule, ThemeSharedModule, NgxsModule.forFeature([FeatureManagementState])],
        exports: [FeatureManagementComponent],
    })
], FeatureManagementModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementComponent, FeatureManagementModule, FeatureManagementComponent as ɵa, FeatureManagementState as ɵb, FeatureManagementState as ɵc, FeatureManagementService as ɵd, GetFeatures as ɵe, UpdateFeatures as ɵf };
//# sourceMappingURL=abp-ng.feature-management.js.map
