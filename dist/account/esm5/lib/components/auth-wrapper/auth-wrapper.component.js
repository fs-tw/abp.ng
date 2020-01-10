/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { Select } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';
import { Observable } from 'rxjs';
var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
    AuthWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-auth-wrapper',
                    template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <abp-tenant-box\r\n      *abpReplaceableTemplate=\"{ componentKey: 'Account.TenantBoxComponent' }\"\r\n    ></abp-tenant-box>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"(enableLocalLogin$ | async) !== 'False'; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
                    exportAs: 'abpAuthWrapper'
                }] }
    ];
    AuthWrapperComponent.propDecorators = {
        mainContentRef: [{ type: Input }],
        cancelContentRef: [{ type: Input }]
    };
    tslib_1.__decorate([
        Select(ConfigState.getSetting('Abp.Account.EnableLocalLogin')),
        tslib_1.__metadata("design:type", Observable)
    ], AuthWrapperComponent.prototype, "enableLocalLogin$", void 0);
    return AuthWrapperComponent;
}());
export { AuthWrapperComponent };
if (false) {
    /** @type {?} */
    AuthWrapperComponent.prototype.enableLocalLogin$;
    /** @type {?} */
    AuthWrapperComponent.prototype.mainContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.cancelContentRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQztJQUFBO0lBZUEsQ0FBQzs7Z0JBZkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLHE5QkFBNEM7b0JBQzVDLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7aUNBTUUsS0FBSzttQ0FHTCxLQUFLOztJQUxOO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzswQ0FDNUMsVUFBVTttRUFBbUI7SUFPbEQsMkJBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSxvQkFBb0I7OztJQUUvQixpREFDZ0Q7O0lBRWhELDhDQUMwQzs7SUFFMUMsZ0RBQzRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWF1dGgtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBBdXRoV3JhcHBlcicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoV3JhcHBlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudElucHV0cywgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudE91dHB1dHMge1xyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0U2V0dGluZygnQWJwLkFjY291bnQuRW5hYmxlTG9jYWxMb2dpbicpKVxyXG4gIGVuYWJsZUxvY2FsTG9naW4kOiBPYnNlcnZhYmxlPCdUcnVlJyB8ICdGYWxzZSc+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IG1haW5Db250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IGNhbmNlbENvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbn1cclxuIl19