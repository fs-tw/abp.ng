import { __decorate, __metadata } from "tslib";
import { ConfigState, takeUntilDestroy } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
let AuthWrapperComponent = class AuthWrapperComponent {
    constructor(store) {
        this.store = store;
        this.enableLocalLogin = true;
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
    }
    ngOnInit() {
        this.store
            .select(ConfigState.getSetting('Abp.Account.EnableLocalLogin'))
            .pipe(takeUntilDestroy(this))
            .subscribe(value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        });
    }
    ngOnDestroy() { }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "mainContentRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "cancelContentRef", void 0);
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], AuthWrapperComponent.prototype, "isMultiTenancyEnabled$", void 0);
AuthWrapperComponent = __decorate([
    Component({
        selector: 'abp-auth-wrapper',
        template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
        exportAs: 'abpAuthWrapper'
    }),
    __metadata("design:paramtypes", [Store])
], AuthWrapperComponent);
export { AuthWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVNsQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW1CL0IsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFKaEMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRXhCLGlCQUFZLGdEQUFnQztJQUVULENBQUM7SUFFcEMsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLO2FBQ1AsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFJLENBQUM7Q0FDakIsQ0FBQTtBQTFCQztJQURDLEtBQUssRUFBRTs4QkFDaUIsV0FBVzs0REFBTTtBQUcxQztJQURDLEtBQUssRUFBRTs4QkFDbUIsV0FBVzs4REFBTTtBQUc1QztJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7OEJBQzlCLFVBQVU7b0VBQVU7QUFiakMsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIscS9CQUE0QztRQUM1QyxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7cUNBb0IyQixLQUFLO0dBbkJyQixvQkFBb0IsQ0FpQ2hDO1NBakNZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ1N0YXRlLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuaW1wb3J0IHsgZUFjY291bnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1hdXRoLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnYWJwQXV0aFdyYXBwZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFdyYXBwZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50SW5wdXRzLFxyXG4gICAgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudE91dHB1dHMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgY2FuY2VsQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXREZWVwKCdtdWx0aVRlbmFuY3kuaXNFbmFibGVkJykpXHJcbiAgaXNNdWx0aVRlbmFuY3lFbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgZW5hYmxlTG9jYWxMb2dpbiA9IHRydWU7XHJcblxyXG4gIHRlbmFudEJveEtleSA9IGVBY2NvdW50Q29tcG9uZW50cy5UZW5hbnRCb3g7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5FbmFibGVMb2NhbExvZ2luJykpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5lbmFibGVMb2NhbExvZ2luID0gdmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ2ZhbHNlJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcbiJdfQ==