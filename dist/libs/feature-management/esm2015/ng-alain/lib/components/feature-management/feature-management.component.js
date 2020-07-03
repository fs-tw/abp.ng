import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
let FeatureManagementComponent = class FeatureManagementComponent extends AbpFeatureManagementComponent {
    constructor(_store) {
        super(_store);
        this._store = _store;
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
FeatureManagementComponent = __decorate([
    Component({
        selector: 'ng-alain-feature-management',
        template: "<nz-modal [(nzVisible)]=\"visible\"\r\n          [nzTitle]=\"modalTitle\"\r\n          [nzContent]=\"modalContent\"\r\n          [nzFooter]=\"modalFooter\"\r\n          (nzOnCancel)=\"visible=false\"\r\n>\r\n  <ng-template #modalTitle>\r\n    <h3>{{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"row my-3\"\r\n           *ngFor=\"let feature of features$ | async; let i = index\"\r\n           [ngSwitch]=\"feature.valueType.name\">\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpFeatureManagement::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n"
    }),
    __metadata("design:paramtypes", [Store])
], FeatureManagementComponent);
export { FeatureManagementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsMEJBQTBCLElBQUksNkJBQTZCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUt6RyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEyQixTQUFRLDZCQUE2QjtJQXFCM0UsWUFBb0IsTUFBYTtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFESSxXQUFNLEdBQU4sTUFBTSxDQUFPO0lBRWpDLENBQUM7SUFiRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FLRixDQUFBO0FBdEJDO0lBREMsS0FBSyxFQUFFOzsrREFDWTtBQUdwQjtJQURDLEtBQUssRUFBRTs7Z0VBQ2E7QUFLckI7SUFEQyxLQUFLLEVBQUU7Ozt5REFHUDtBQVpVLDBCQUEwQjtJQUp0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLDJuREFBa0Q7S0FDbkQsQ0FBQztxQ0FzQjRCLEtBQUs7R0FyQnRCLDBCQUEwQixDQXdCdEM7U0F4QlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnQgYXMgQWJwRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctYWxhaW4tZmVhdHVyZS1tYW5hZ2VtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1hbmFnZW1lbnRDb21wb25lbnQgZXh0ZW5kcyBBYnBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwcm92aWRlcktleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHByb3ZpZGVyTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgX3Zpc2libGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlKSB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuICAgIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3JlOiBTdG9yZSkge1xyXG4gICAgc3VwZXIoX3N0b3JlKTtcclxuICB9XHJcbn1cclxuIl19