import { RestService, GetAppConfiguration, TrackByService, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Directive, Input, HostBinding, ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Component, Output, NgModule } from '@angular/core';
import { Store, Action, Selector, State, NgxsModule } from '@ngxs/store';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { finalize, tap } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';

const INPUT_TYPES = {
    numeric: 'number',
    default: 'text',
};
class FreeTextInputDirective {
    set feature(val) {
        this._feature = val;
        this.setInputType();
    }
    get feature() {
        return this._feature;
    }
    setInputType() {
        var _a, _b, _c, _d;
        const validatorType = (_c = (_b = (_a = this.feature) === null || _a === void 0 ? void 0 : _a.valueType) === null || _b === void 0 ? void 0 : _b.validator) === null || _c === void 0 ? void 0 : _c.name.toLowerCase();
        this.type = (_d = INPUT_TYPES[validatorType]) !== null && _d !== void 0 ? _d : INPUT_TYPES.default;
    }
}
FreeTextInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[abpFeatureManagementFreeText]',
                exportAs: 'inputAbpFeatureManagementFreeText',
            },] }
];
FreeTextInputDirective.propDecorators = {
    feature: [{ type: Input, args: ['abpFeatureManagementFreeText',] }],
    type: [{ type: HostBinding, args: ['type',] }]
};

class FeaturesService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'AbpFeatureManagement';
        this.get = (providerName, providerKey) => this.restService.request({
            method: 'GET',
            url: '/api/feature-management/features',
            params: { providerName, providerKey },
        }, { apiName: this.apiName });
        this.update = (providerName, providerKey, input) => this.restService.request({
            method: 'PUT',
            url: '/api/feature-management/features',
            params: { providerName, providerKey },
            body: input,
        }, { apiName: this.apiName });
    }
}
FeaturesService.ɵprov = ɵɵdefineInjectable({ factory: function FeaturesService_Factory() { return new FeaturesService(ɵɵinject(RestService)); }, token: FeaturesService, providedIn: "root" });
FeaturesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FeaturesService.ctorParameters = () => [
    { type: RestService }
];

var ValueTypes;
(function (ValueTypes) {
    ValueTypes["ToggleStringValueType"] = "ToggleStringValueType";
    ValueTypes["FreeTextStringValueType"] = "FreeTextStringValueType";
    ValueTypes["SelectionStringValueType"] = "SelectionStringValueType";
})(ValueTypes || (ValueTypes = {}));
class FeatureManagementComponent {
    constructor(track, service, store) {
        this.track = track;
        this.service = service;
        this.store = store;
        this.groups = [];
        this.valueTypes = ValueTypes;
        this.visibleChange = new EventEmitter();
        this.modalBusy = false;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (this._visible === value)
            return;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
    openModal() {
        if (!this.providerName) {
            throw new Error('providerName is required.');
        }
        this.getFeatures();
    }
    getFeatures() {
        this.service.get(this.providerName, this.providerKey).subscribe(res => {
            this.groups = res.groups.map(({ name, displayName }) => ({ name, displayName }));
            this.selectedGroupDisplayName = this.groups[0].displayName;
            this.features = res.groups.reduce((acc, val) => (Object.assign(Object.assign({}, acc), { [val.name]: mapFeatures(val.features, document.body.dir) })), {});
        });
    }
    save() {
        if (this.modalBusy)
            return;
        const changedFeatures = [];
        Object.keys(this.features).forEach(key => {
            this.features[key].forEach(feature => {
                if (feature.value !== feature.initialValue)
                    changedFeatures.push({ name: feature.name, value: feature.value });
            });
        });
        if (!changedFeatures.length) {
            this.visible = false;
            return;
        }
        this.modalBusy = true;
        this.service
            .update(this.providerName, this.providerKey, { features: changedFeatures })
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(() => {
            this.visible = false;
            if (!this.providerKey) {
                // to refresh host's features
                this.store.dispatch(new GetAppConfiguration());
            }
        });
    }
    onCheckboxClick(val, feature) {
        if (val) {
            this.checkToggleAncestors(feature);
        }
        else {
            this.uncheckToggleDescendants(feature);
        }
    }
    uncheckToggleDescendants(feature) {
        this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(node => this.setFeatureValue(node, false));
    }
    checkToggleAncestors(feature) {
        this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(node => this.setFeatureValue(node, true));
    }
    findAllAncestorsOfByType(feature, type) {
        let parent = this.findParentByType(feature, type);
        const ancestors = [];
        while (parent) {
            ancestors.push(parent);
            parent = this.findParentByType(parent, type);
        }
        return ancestors;
    }
    findAllDescendantsOfByType(feature, type) {
        const descendants = [];
        const queue = [feature];
        while (queue.length) {
            const node = queue.pop();
            const newDescendants = this.findChildrenByType(node, type);
            descendants.push(...newDescendants);
            queue.push(...newDescendants);
        }
        return descendants;
    }
    findParentByType(feature, type) {
        return this.getCurrentGroup().find(f => f.valueType.name === type && f.name === feature.parentName);
    }
    findChildrenByType(feature, type) {
        return this.getCurrentGroup().filter(f => f.valueType.name === type && f.parentName === feature.name);
    }
    getCurrentGroup() {
        var _a;
        return (_a = this.features[this.selectedGroupDisplayName]) !== null && _a !== void 0 ? _a : [];
    }
    setFeatureValue(feature, val) {
        feature.value = val;
    }
}
FeatureManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-feature-management',
                template: "<abp-modal *ngIf=\"visible\" size=\"lg\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <ul\r\n          ngbNav\r\n          #nav=\"ngbNav\"\r\n          [(activeId)]=\"selectedGroupDisplayName\"\r\n          class=\"nav-pills\"\r\n          orientation=\"vertical\"\r\n        >\r\n          <li\r\n            *ngFor=\"let group of groups; trackBy: track.by('name')\"\r\n            [ngbNavItem]=\"group.displayName\"\r\n          >\r\n            <a ngbNavLink>{{ group.displayName }}</a>\r\n            <ng-template ngbNavContent>\r\n              <h4>{{ selectedGroupDisplayName }}</h4>\r\n              <hr class=\"mt-2 mb-3\" />\r\n\r\n              <div\r\n                class=\"mt-2\"\r\n                *ngFor=\"let feature of features[group.name]; let i = index; trackBy: track.by('id')\"\r\n                [ngStyle]=\"feature.style\"\r\n                [ngSwitch]=\"feature.valueType?.name\"\r\n                (keyup.enter)=\"save()\"\r\n              >\r\n                <ng-container *ngSwitchCase=\"valueTypes.ToggleStringValueType\">\r\n                  <div class=\"custom-checkbox custom-control\">\r\n                    <input\r\n                      class=\"custom-control-input\"\r\n                      type=\"checkbox\"\r\n                      [id]=\"feature.name\"\r\n                      [(ngModel)]=\"feature.value\"\r\n                      (ngModelChange)=\"onCheckboxClick($event, feature)\"\r\n                    />\r\n\r\n                    <label class=\"custom-control-label\" [htmlFor]=\"feature.name\">{{\r\n                      feature.displayName\r\n                    }}</label>\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                    ></ng-container>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"valueTypes.FreeTextStringValueType\">\r\n                  <div class=\"form-group\">\r\n                    <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      type=\"text\"\r\n                      [id]=\"feature.name\"\r\n                      [(ngModel)]=\"feature.value\"\r\n                      [abpFeatureManagementFreeText]=\"feature\"\r\n                    />\r\n\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                    ></ng-container>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"valueTypes.SelectionStringValueType\">\r\n                  <ng-container *ngIf=\"feature.valueType.itemSource?.items?.length\">\r\n                    <div class=\"form-group\">\r\n                      <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\r\n                      <select\r\n                        class=\"form-control custom-select\"\r\n                        [id]=\"feature.name\"\r\n                        [(ngModel)]=\"feature.value\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"\r\n                            let item of feature.valueType.itemSource?.items;\r\n                            trackBy: track.by('value')\r\n                          \"\r\n                          [ngValue]=\"item.value\"\r\n                        >\r\n                          {{\r\n                            item.displayText?.resourceName + '::' + item.displayText?.name\r\n                              | abpLocalization\r\n                          }}</option\r\n                        >\r\n                      </select>\r\n                      <ng-container\r\n                        *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                      ></ng-container>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n                <ng-container *ngSwitchDefault>{{ feature.displayName }}</ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <ng-template #descTmp let-description>\r\n        <small *ngIf=\"description\" class=\"form-text text-muted\">{{ description }}</small>\r\n      </ng-template>\r\n\r\n      <div class=\"col-md-8\"><div [ngbNavOutlet]=\"nav\"></div></div>\r\n\r\n      <div class=\"mx-3\" *ngIf=\"!groups.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button\r\n      *ngIf=\"groups.length\"\r\n      iconClass=\"fa fa-check\"\r\n      [disabled]=\"modalBusy\"\r\n      (click)=\"save()\"\r\n    >\r\n      {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n    </abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n",
                exportAs: 'abpFeatureManagement'
            },] }
];
FeatureManagementComponent.ctorParameters = () => [
    { type: TrackByService },
    { type: FeaturesService },
    { type: Store }
];
FeatureManagementComponent.propDecorators = {
    providerKey: [{ type: Input }],
    providerName: [{ type: Input }],
    visible: [{ type: Input }],
    visibleChange: [{ type: Output }]
};
function mapFeatures(features, dir) {
    const margin = `margin-${dir === 'rtl' ? 'right' : 'left'}.px`;
    return features.map(feature => {
        var _a;
        const value = ((_a = feature.valueType) === null || _a === void 0 ? void 0 : _a.name) === ValueTypes.ToggleStringValueType
            ? (feature.value || '').toLowerCase() === 'true'
            : feature.value;
        return Object.assign(Object.assign({}, feature), { value, initialValue: value, style: { [margin]: feature.depth * 20 } });
    });
}

/**
 * @deprecated To be deleted in v4.0.
 */
class GetFeatures {
    constructor(payload) {
        this.payload = payload;
    }
}
GetFeatures.type = '[FeatureManagement] Get Features';
/**
 * @deprecated To be deleted in v4.0.
 */
class UpdateFeatures {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateFeatures.type = '[FeatureManagement] Update Features';

/**
 * @deprecated Use FeaturesService instead. To be deleted in v4.0.
 */
class FeatureManagementService {
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
}
FeatureManagementService.ɵprov = ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: FeatureManagementService, providedIn: "root" });
FeatureManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FeatureManagementService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];

/**
 * @deprecated To be deleted in v4.0.
 */
let FeatureManagementState = class FeatureManagementState {
    constructor(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    static getFeatures({ features }) {
        return features || [];
    }
    getFeatures({ patchState }, { payload }) {
        return this.featureManagementService.getFeatures(payload).pipe(tap(({ features = [] }) => patchState({
            features,
        })));
    }
    updateFeatures(_, { payload }) {
        return this.featureManagementService.updateFeatures(payload);
    }
};
FeatureManagementState.decorators = [
    { type: Injectable }
];
FeatureManagementState.ctorParameters = () => [
    { type: FeatureManagementService }
];
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
    __metadata("design:paramtypes", [FeatureManagementService])
], FeatureManagementState);

const exported = [FeatureManagementComponent, FreeTextInputDirective];
class FeatureManagementModule {
}
FeatureManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...exported],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbNavModule,
                    NgxsModule.forFeature([FeatureManagementState]),
                ],
                exports: [...exported],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementComponent, FeatureManagementModule, FeaturesService, FeatureManagementComponent as ɵa, FeaturesService as ɵb, FreeTextInputDirective as ɵc, FeatureManagementState as ɵd, FeatureManagementService as ɵe, GetFeatures as ɵf, UpdateFeatures as ɵg };
//# sourceMappingURL=abp-ng.feature-management.js.map
