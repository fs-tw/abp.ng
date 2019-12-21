/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangePasswordComponent as AbpChangePasswordComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
var ChangePasswordComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChangePasswordComponent, _super);
    function ChangePasswordComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    ChangePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-change-password-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"password\" id=\"current-password\" placeholder=\"{{'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization}}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"newPassword\" id=\"new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"repeatNewPassword\" id=\"confirm-new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n\r\n</form>\r\n\r\n\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return ChangePasswordComponent;
}(AbpChangePasswordComponent));
export { ChangePasswordComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9hY2NvdW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixJQUFJLDBCQUEwQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEM7SUFLNkMsbURBQTBCO0lBRW5FLGlDQUFvQixHQUFnQixFQUFVLE1BQWEsRUFBVSxlQUErQjtRQUFwRyxZQUNJLGtCQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLFNBQ3RDO1FBRm1CLFNBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUscUJBQWUsR0FBZixlQUFlLENBQWdCOztJQUVwRyxDQUFDOztnQkFUSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsdS9DQUErQzs7aUJBRWxEOzs7O2dCQVBRLFdBQVc7Z0JBQ1gsS0FBSztnQkFITCxjQUFjOztJQWdCdkIsOEJBQUM7Q0FBQSxBQVhELENBSzZDLDBCQUEwQixHQU10RTtTQU5ZLHVCQUF1Qjs7Ozs7O0lBRXBCLHNDQUF3Qjs7Ozs7SUFBRSx5Q0FBcUI7Ozs7O0lBQUUsa0RBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgYXMgQWJwQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWFsYWluLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgQWJwQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLCBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19