import { __decorate, __metadata } from "tslib";
import { ConfigState, SubscriptionService, MultiTenancyService } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
let AuthWrapperComponent = class AuthWrapperComponent {
    constructor(multiTenancy, store, subscription) {
        this.multiTenancy = multiTenancy;
        this.store = store;
        this.subscription = subscription;
        this.enableLocalLogin = true;
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
    }
    ngOnInit() {
        this.subscription.addOne(this.store.select(ConfigState.getSetting('Abp.Account.EnableLocalLogin')), value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        });
    }
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
        template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"(isMultiTenancyEnabled$ | async) && multiTenancy.isTenantBoxVisible\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
        exportAs: 'abpAuthWrapper',
        providers: [SubscriptionService]
    }),
    __metadata("design:paramtypes", [MultiTenancyService,
        Store,
        SubscriptionService])
], AuthWrapperComponent);
export { AuthWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBVWxDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBZS9CLFlBQ2tCLFlBQWlDLEVBQ3pDLEtBQVksRUFDWixZQUFpQztRQUZ6QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDekMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQVAzQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIsaUJBQVksZ0RBQWdDO0lBTXpDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxFQUN6RSxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTVCQztJQURDLEtBQUssRUFBRTs4QkFDaUIsV0FBVzs0REFBTTtBQUcxQztJQURDLEtBQUssRUFBRTs4QkFDbUIsV0FBVzs4REFBTTtBQUc1QztJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7OEJBQzlCLFVBQVU7b0VBQVU7QUFUakMsb0JBQW9CO0lBTmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsMGhDQUE0QztRQUM1QyxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDLENBQUM7cUNBaUJnQyxtQkFBbUI7UUFDbEMsS0FBSztRQUNFLG1CQUFtQjtHQWxCaEMsb0JBQW9CLENBK0JoQztTQS9CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdTdGF0ZSwgU3Vic2NyaXB0aW9uU2VydmljZSwgTXVsdGlUZW5hbmN5U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBlQWNjb3VudENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9lbnVtcy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWF1dGgtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBBdXRoV3JhcHBlcicsXHJcbiAgcHJvdmlkZXJzOiBbU3Vic2NyaXB0aW9uU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoV3JhcHBlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudElucHV0cywgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudE91dHB1dHMsIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBtYWluQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBjYW5jZWxDb250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ211bHRpVGVuYW5jeS5pc0VuYWJsZWQnKSlcclxuICBpc011bHRpVGVuYW5jeUVuYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBlbmFibGVMb2NhbExvZ2luID0gdHJ1ZTtcclxuXHJcbiAgdGVuYW50Qm94S2V5ID0gZUFjY291bnRDb21wb25lbnRzLlRlbmFudEJveDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbXVsdGlUZW5hbmN5OiBNdWx0aVRlbmFuY3lTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKFxyXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5FbmFibGVMb2NhbExvZ2luJykpLFxyXG4gICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZUxvY2FsTG9naW4gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==