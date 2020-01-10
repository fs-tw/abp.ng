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
export class AuthWrapperComponent {
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
if (false) {
    /** @type {?} */
    AuthWrapperComponent.prototype.enableLocalLogin$;
    /** @type {?} */
    AuthWrapperComponent.prototype.mainContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.cancelContentRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU9sQyxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHE5QkFBNEM7Z0JBQzVDLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs2QkFNRSxLQUFLOytCQUdMLEtBQUs7O0FBTE47SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3NDQUM1QyxVQUFVOytEQUFtQjs7O0lBRGhELGlEQUNnRDs7SUFFaEQsOENBQzBDOztJQUUxQyxnREFDNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjY291bnQnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYXV0aC13cmFwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicEF1dGhXcmFwcGVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhXcmFwcGVyQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50SW5wdXRzLCBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50T3V0cHV0cyB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5FbmFibGVMb2NhbExvZ2luJykpXHJcbiAgZW5hYmxlTG9jYWxMb2dpbiQ6IE9ic2VydmFibGU8J1RydWUnIHwgJ0ZhbHNlJz47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgY2FuY2VsQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxufVxyXG4iXX0=