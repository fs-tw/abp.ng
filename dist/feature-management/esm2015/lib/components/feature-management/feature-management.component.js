import { TrackByService, GetAppConfiguration } from '@abp/ng.core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import { FeaturesService } from '../../proxy/feature-management/features.service';
var ValueTypes;
(function (ValueTypes) {
    ValueTypes["ToggleStringValueType"] = "ToggleStringValueType";
    ValueTypes["FreeTextStringValueType"] = "FreeTextStringValueType";
    ValueTypes["SelectionStringValueType"] = "SelectionStringValueType";
})(ValueTypes || (ValueTypes = {}));
export class FeatureManagementComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ZlYXR1cmUtbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmUtbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU9sRixJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDYiw2REFBK0MsQ0FBQTtJQUMvQyxpRUFBbUQsQ0FBQTtJQUNuRCxtRUFBcUQsQ0FBQTtBQUN2RCxDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQU9ELE1BQU0sT0FBTywwQkFBMEI7SUF1Q3JDLFlBQ2tCLEtBQXFCLEVBQzNCLE9BQXdCLEVBQ3hCLEtBQVk7UUFGTixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBOUJ4QixXQUFNLEdBQW9ELEVBQUUsQ0FBQztRQU03RCxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBaUJMLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUvRCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTWYsQ0FBQztJQXJCSixJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxR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LEdBQVk7UUFDdkQsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFVLENBQUM7SUFDN0IsQ0FBQzs7O1lBcktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxnMEtBQWtEO2dCQUNsRCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7WUF2QlEsY0FBYztZQU1kLGVBQWU7WUFIZixLQUFLOzs7MEJBeUJYLEtBQUs7MkJBR0wsS0FBSztzQkFlTCxLQUFLOzRCQWFMLE1BQU07O0FBZ0lULFNBQVMsV0FBVyxDQUFDLFFBQXNCLEVBQUUsR0FBb0I7SUFDL0QsTUFBTSxNQUFNLEdBQUcsVUFBVSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO0lBRS9ELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTs7UUFDNUIsTUFBTSxLQUFLLEdBQ1QsT0FBQSxPQUFPLENBQUMsU0FBUywwQ0FBRSxJQUFJLE1BQUssVUFBVSxDQUFDLHFCQUFxQjtZQUMxRCxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU07WUFDaEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFcEIsdUNBQ0ssT0FBTyxLQUNWLEtBQUssRUFDTCxZQUFZLEVBQUUsS0FBSyxFQUNuQixLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQ3ZDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhY2tCeVNlcnZpY2UsIEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBMb2NhbGVEaXJlY3Rpb24gfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmVhdHVyZS1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgRmVhdHVyZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJveHkvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIEZlYXR1cmVEdG8sXHJcbiAgRmVhdHVyZUdyb3VwRHRvLFxyXG4gIFVwZGF0ZUZlYXR1cmVEdG8sXHJcbn0gZnJvbSAnLi4vLi4vcHJveHkvZmVhdHVyZS1tYW5hZ2VtZW50L21vZGVscyc7XHJcblxyXG5lbnVtIFZhbHVlVHlwZXMge1xyXG4gIFRvZ2dsZVN0cmluZ1ZhbHVlVHlwZSA9ICdUb2dnbGVTdHJpbmdWYWx1ZVR5cGUnLFxyXG4gIEZyZWVUZXh0U3RyaW5nVmFsdWVUeXBlID0gJ0ZyZWVUZXh0U3RyaW5nVmFsdWVUeXBlJyxcclxuICBTZWxlY3Rpb25TdHJpbmdWYWx1ZVR5cGUgPSAnU2VsZWN0aW9uU3RyaW5nVmFsdWVUeXBlJyxcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZmVhdHVyZS1tYW5hZ2VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicEZlYXR1cmVNYW5hZ2VtZW50JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50c1xyXG4gICAgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnRJbnB1dHMsXHJcbiAgICBGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudE91dHB1dHMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgc2VsZWN0ZWRHcm91cERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblxyXG4gIGdyb3VwczogUGljazxGZWF0dXJlR3JvdXBEdG8sICduYW1lJyB8ICdkaXNwbGF5TmFtZSc+W10gPSBbXTtcclxuXHJcbiAgZmVhdHVyZXM6IHtcclxuICAgIFtncm91cDogc3RyaW5nXTogQXJyYXk8RmVhdHVyZUR0byAmIHsgc3R5bGU/OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9OyBpbml0aWFsVmFsdWU6IGFueSB9PjtcclxuICB9O1xyXG5cclxuICB2YWx1ZVR5cGVzID0gVmFsdWVUeXBlcztcclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpYmxlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX3Zpc2libGUgPT09IHZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlKSB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSB0cmFjazogVHJhY2tCeVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogRmVhdHVyZXNTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZSxcclxuICApIHt9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIGlmICghdGhpcy5wcm92aWRlck5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwcm92aWRlck5hbWUgaXMgcmVxdWlyZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRGZWF0dXJlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmVhdHVyZXMoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0KHRoaXMucHJvdmlkZXJOYW1lLCB0aGlzLnByb3ZpZGVyS2V5KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5ncm91cHMgPSByZXMuZ3JvdXBzLm1hcCgoeyBuYW1lLCBkaXNwbGF5TmFtZSB9KSA9PiAoeyBuYW1lLCBkaXNwbGF5TmFtZSB9KSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cERpc3BsYXlOYW1lID0gdGhpcy5ncm91cHNbMF0uZGlzcGxheU5hbWU7XHJcbiAgICAgIHRoaXMuZmVhdHVyZXMgPSByZXMuZ3JvdXBzLnJlZHVjZShcclxuICAgICAgICAoYWNjLCB2YWwpID0+ICh7XHJcbiAgICAgICAgICAuLi5hY2MsXHJcbiAgICAgICAgICBbdmFsLm5hbWVdOiBtYXBGZWF0dXJlcyh2YWwuZmVhdHVyZXMsIGRvY3VtZW50LmJvZHkuZGlyIGFzIExvY2FsZURpcmVjdGlvbiksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAge30sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEJ1c3kpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VkRmVhdHVyZXMgPSBbXSBhcyBVcGRhdGVGZWF0dXJlRHRvW107XHJcblxyXG4gICAgT2JqZWN0LmtleXModGhpcy5mZWF0dXJlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICB0aGlzLmZlYXR1cmVzW2tleV0uZm9yRWFjaChmZWF0dXJlID0+IHtcclxuICAgICAgICBpZiAoZmVhdHVyZS52YWx1ZSAhPT0gZmVhdHVyZS5pbml0aWFsVmFsdWUpXHJcbiAgICAgICAgICBjaGFuZ2VkRmVhdHVyZXMucHVzaCh7IG5hbWU6IGZlYXR1cmUubmFtZSwgdmFsdWU6IGZlYXR1cmUudmFsdWUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VkRmVhdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb2RhbEJ1c3kgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC51cGRhdGUodGhpcy5wcm92aWRlck5hbWUsIHRoaXMucHJvdmlkZXJLZXksIHsgZmVhdHVyZXM6IGNoYW5nZWRGZWF0dXJlcyB9KVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5tb2RhbEJ1c3kgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3ZpZGVyS2V5KSB7XHJcbiAgICAgICAgICAvLyB0byByZWZyZXNoIGhvc3QncyBmZWF0dXJlc1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DaGVja2JveENsaWNrKHZhbDogYm9vbGVhbiwgZmVhdHVyZTogRmVhdHVyZUR0bykge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLmNoZWNrVG9nZ2xlQW5jZXN0b3JzKGZlYXR1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51bmNoZWNrVG9nZ2xlRGVzY2VuZGFudHMoZmVhdHVyZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuY2hlY2tUb2dnbGVEZXNjZW5kYW50cyhmZWF0dXJlOiBGZWF0dXJlRHRvKSB7XHJcbiAgICB0aGlzLmZpbmRBbGxEZXNjZW5kYW50c09mQnlUeXBlKGZlYXR1cmUsIFZhbHVlVHlwZXMuVG9nZ2xlU3RyaW5nVmFsdWVUeXBlKS5mb3JFYWNoKG5vZGUgPT5cclxuICAgICAgdGhpcy5zZXRGZWF0dXJlVmFsdWUobm9kZSwgZmFsc2UpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tUb2dnbGVBbmNlc3RvcnMoZmVhdHVyZTogRmVhdHVyZUR0bykge1xyXG4gICAgdGhpcy5maW5kQWxsQW5jZXN0b3JzT2ZCeVR5cGUoZmVhdHVyZSwgVmFsdWVUeXBlcy5Ub2dnbGVTdHJpbmdWYWx1ZVR5cGUpLmZvckVhY2gobm9kZSA9PlxyXG4gICAgICB0aGlzLnNldEZlYXR1cmVWYWx1ZShub2RlLCB0cnVlKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRBbGxBbmNlc3RvcnNPZkJ5VHlwZShmZWF0dXJlOiBGZWF0dXJlRHRvLCB0eXBlOiBWYWx1ZVR5cGVzKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50QnlUeXBlKGZlYXR1cmUsIHR5cGUpO1xyXG4gICAgY29uc3QgYW5jZXN0b3JzID0gW107XHJcbiAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgIGFuY2VzdG9ycy5wdXNoKHBhcmVudCk7XHJcbiAgICAgIHBhcmVudCA9IHRoaXMuZmluZFBhcmVudEJ5VHlwZShwYXJlbnQsIHR5cGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFuY2VzdG9ycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZEFsbERlc2NlbmRhbnRzT2ZCeVR5cGUoZmVhdHVyZTogRmVhdHVyZUR0bywgdHlwZTogVmFsdWVUeXBlcykge1xyXG4gICAgY29uc3QgZGVzY2VuZGFudHMgPSBbXTtcclxuICAgIGNvbnN0IHF1ZXVlID0gW2ZlYXR1cmVdO1xyXG5cclxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpO1xyXG4gICAgICBjb25zdCBuZXdEZXNjZW5kYW50cyA9IHRoaXMuZmluZENoaWxkcmVuQnlUeXBlKG5vZGUsIHR5cGUpO1xyXG4gICAgICBkZXNjZW5kYW50cy5wdXNoKC4uLm5ld0Rlc2NlbmRhbnRzKTtcclxuICAgICAgcXVldWUucHVzaCguLi5uZXdEZXNjZW5kYW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kUGFyZW50QnlUeXBlKGZlYXR1cmU6IEZlYXR1cmVEdG8sIHR5cGU6IFZhbHVlVHlwZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRHcm91cCgpLmZpbmQoXHJcbiAgICAgIGYgPT4gZi52YWx1ZVR5cGUubmFtZSA9PT0gdHlwZSAmJiBmLm5hbWUgPT09IGZlYXR1cmUucGFyZW50TmFtZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRDaGlsZHJlbkJ5VHlwZShmZWF0dXJlOiBGZWF0dXJlRHRvLCB0eXBlOiBWYWx1ZVR5cGVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50R3JvdXAoKS5maWx0ZXIoXHJcbiAgICAgIGYgPT4gZi52YWx1ZVR5cGUubmFtZSA9PT0gdHlwZSAmJiBmLnBhcmVudE5hbWUgPT09IGZlYXR1cmUubmFtZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEN1cnJlbnRHcm91cCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzW3RoaXMuc2VsZWN0ZWRHcm91cERpc3BsYXlOYW1lXSA/PyBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmVhdHVyZVZhbHVlKGZlYXR1cmU6IEZlYXR1cmVEdG8sIHZhbDogYm9vbGVhbikge1xyXG4gICAgZmVhdHVyZS52YWx1ZSA9IHZhbCBhcyBhbnk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBGZWF0dXJlcyhmZWF0dXJlczogRmVhdHVyZUR0b1tdLCBkaXI6IExvY2FsZURpcmVjdGlvbikge1xyXG4gIGNvbnN0IG1hcmdpbiA9IGBtYXJnaW4tJHtkaXIgPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0J30ucHhgO1xyXG5cclxuICByZXR1cm4gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICBmZWF0dXJlLnZhbHVlVHlwZT8ubmFtZSA9PT0gVmFsdWVUeXBlcy5Ub2dnbGVTdHJpbmdWYWx1ZVR5cGVcclxuICAgICAgICA/IChmZWF0dXJlLnZhbHVlIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcclxuICAgICAgICA6IGZlYXR1cmUudmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZmVhdHVyZSxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGluaXRpYWxWYWx1ZTogdmFsdWUsXHJcbiAgICAgIHN0eWxlOiB7IFttYXJnaW5dOiBmZWF0dXJlLmRlcHRoICogMjAgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuIl19