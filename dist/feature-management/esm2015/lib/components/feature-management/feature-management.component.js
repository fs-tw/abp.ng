import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetFeatures, UpdateFeatures } from '../../actions';
import { FeatureManagementState } from '../../states';
import { FormGroup, FormControl } from '@angular/forms';
import { pluck, finalize } from 'rxjs/operators';
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
        features = features.map((feature, i) => (Object.assign(Object.assign({}, feature), { value: this.form.value[i] })));
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
        template: "<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\r\n      <div\r\n        class=\"row my-3\"\r\n        *ngFor=\"let feature of features$ | async; let i = index\"\r\n        [ngSwitch]=\"feature.valueType.name\"\r\n      >\r\n        <div class=\"mr-2\">{{ feature.displayName }}</div>\r\n        <div *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(features$ | async)?.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <ng-container *ngIf=\"(features$ | async)?.length\">\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\r\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n      </abp-button>\r\n    </ng-container>\r\n  </ng-template>\r\n</abp-modal>\r\n",
        exportAs: 'abpFeatureManagement'
    }),
    __metadata("design:paramtypes", [Store])
], FeatureManagementComponent);
export { FeatureManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2ZlYXR1cmUtbWFuYWdlbWVudC9zcmMvbGliL2NvbXBvbmVudHMvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmUtbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9qRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWlDckMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFUYixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFLL0QsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUlpQixDQUFDO0lBcEJwQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxD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QzJCLEtBQUs7R0FqQ3JCLDBCQUEwQixDQTRGdEM7U0E1RlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdldEZlYXR1cmVzLCBVcGRhdGVGZWF0dXJlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudCB9IGZyb20gJy4uLy4uL21vZGVscy9mZWF0dXJlLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZmVhdHVyZS1tYW5hZ2VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicEZlYXR1cmVNYW5hZ2VtZW50JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50c1xyXG4gICAgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnRJbnB1dHMsXHJcbiAgICBGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudE91dHB1dHMge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJvdmlkZXJLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwcm92aWRlck5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIF92aXNpYmxlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICAgIGlmICh2YWx1ZSkgdGhpcy5vcGVuTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAU2VsZWN0KEZlYXR1cmVNYW5hZ2VtZW50U3RhdGUuZ2V0RmVhdHVyZXMpXHJcbiAgZmVhdHVyZXMkOiBPYnNlcnZhYmxlPEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVbXT47XHJcblxyXG4gIG1vZGFsQnVzeSA9IGZhbHNlO1xyXG5cclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvdmlkZXJLZXkgfHwgIXRoaXMucHJvdmlkZXJOYW1lKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZXIgS2V5IGFuZCBQcm92aWRlciBOYW1lIGFyZSByZXF1aXJlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEZlYXR1cmVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGZWF0dXJlcygpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBHZXRGZWF0dXJlcyh7XHJcbiAgICAgICAgICBwcm92aWRlcktleTogdGhpcy5wcm92aWRlcktleSxcclxuICAgICAgICAgIHByb3ZpZGVyTmFtZTogdGhpcy5wcm92aWRlck5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUocGx1Y2soJ0ZlYXR1cmVNYW5hZ2VtZW50U3RhdGUnLCAnZmVhdHVyZXMnKSlcclxuICAgICAgLnN1YnNjcmliZShmZWF0dXJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5idWlsZEZvcm0oZmVhdHVyZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybShmZWF0dXJlcykge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwT2JqID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtR3JvdXBPYmpbaV0gPSBuZXcgRm9ybUNvbnRyb2woZmVhdHVyZXNbaV0udmFsdWUgPT09ICdmYWxzZScgPyBudWxsIDogZmVhdHVyZXNbaV0udmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZm9ybUdyb3VwT2JqKTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbEJ1c3kpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLm1vZGFsQnVzeSA9IHRydWU7XHJcblxyXG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChGZWF0dXJlTWFuYWdlbWVudFN0YXRlLmdldEZlYXR1cmVzKTtcclxuXHJcbiAgICBmZWF0dXJlcyA9IGZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKHtcclxuICAgICAgLi4uZmVhdHVyZSxcclxuICAgICAgdmFsdWU6IHRoaXMuZm9ybS52YWx1ZVtpXSxcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICBuZXcgVXBkYXRlRmVhdHVyZXMoe1xyXG4gICAgICAgICAgcHJvdmlkZXJLZXk6IHRoaXMucHJvdmlkZXJLZXksXHJcbiAgICAgICAgICBwcm92aWRlck5hbWU6IHRoaXMucHJvdmlkZXJOYW1lLFxyXG4gICAgICAgICAgZmVhdHVyZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMubW9kYWxCdXN5ID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=