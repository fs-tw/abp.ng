/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangePassword, ConfigState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { comparePasswords, validatePassword } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import snq from 'snq';
import { finalize } from 'rxjs/operators';
var minLength = Validators.minLength, required = Validators.required, maxLength = Validators.maxLength;
/** @type {?} */
var PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (/**
         * @param {?} errors
         * @param {?} groupErrors
         * @param {?} control
         * @return {?}
         */
        function (errors, groupErrors, control) {
            if (PASSWORD_FIELDS.indexOf(control.name) < 0)
                return errors;
            return errors.concat(groupErrors.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key;
                return key === 'passwordMismatch';
            })));
        });
    }
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var passwordRules = this.store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        /** @type {?} */
        var passwordRulesArr = (/** @type {?} */ ([]));
        /** @type {?} */
        var requiredLength = 1;
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            requiredLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
        this.form = this.fb.group({
            password: ['', required],
            newPassword: [
                '',
                {
                    validators: [
                        required,
                        validatePassword(passwordRulesArr),
                        minLength(requiredLength),
                        maxLength(128),
                    ],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [
                        required,
                        validatePassword(passwordRulesArr),
                        minLength(requiredLength),
                        maxLength(128),
                    ],
                },
            ],
        }, {
            validators: [comparePasswords(PASSWORD_FIELDS)],
        });
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword({
            currentPassword: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
        }))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return (_this.inProgress = false); })))
            .subscribe({
            next: (/**
             * @return {?}
             */
            function () {
                _this.form.reset();
                _this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', {
                    life: 5000,
                });
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.toasterService.error(snq((/**
                 * @return {?}
                 */
                function () { return err.error.error.message; }), 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            }),
        });
    };
    ChangePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-change-password-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
                    exportAs: 'abpChangePasswordForm'
                }] }
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
if (false) {
    /** @type {?} */
    ChangePasswordComponent.prototype.form;
    /** @type {?} */
    ChangePasswordComponent.prototype.inProgress;
    /** @type {?} */
    ChangePasswordComponent.prototype.mapErrorsFn;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTZCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xDLElBQUEsZ0NBQVMsRUFBRSw4QkFBUSxFQUFFLGdDQUFTOztJQUVoQyxlQUFlLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUM7QUFFNUQ7SUFpQkUsaUNBQ1UsRUFBZSxFQUNmLEtBQVksRUFDWixjQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVR4QyxnQkFBVzs7Ozs7O1FBQTJCLFVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPO1lBQ2pFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUU3RCxPQUFP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Q0FBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7YUFDL0MsU0FBUyxDQUFDO1lBQ1QsSUFBSTs7O1lBQUU7Z0JBQ0osS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsU0FBUyxFQUFFO29CQUMzRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxLQUFLOzs7O1lBQUUsVUFBQSxHQUFHO2dCQUNSLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUN2QixHQUFHOzs7Z0JBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBdkIsQ0FBdUIsR0FBRSxpQ0FBaUMsQ0FBQyxFQUNyRSxPQUFPLEVBQ1A7b0JBQ0UsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBOUdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxtakRBQStDO29CQUMvQyxRQUFRLEVBQUUsdUJBQXVCO2lCQUNsQzs7OztnQkFmUSxXQUFXO2dCQUVYLEtBQUs7Z0JBSkwsY0FBYzs7SUE0SHZCLDhCQUFDO0NBQUEsQUEvR0QsSUErR0M7U0ExR1ksdUJBQXVCOzs7SUFFbEMsdUNBQWdCOztJQUVoQiw2Q0FBb0I7O0lBRXBCLDhDQUlFOzs7OztJQUdBLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQW9COzs7OztJQUNwQixpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCwgQ29uZmlnU3RhdGUsIEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmRzLCBWYWxpZGF0aW9uLCBQYXNzd29yZFJ1bGVzLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudCc7XHJcblxyXG5jb25zdCB7IG1pbkxlbmd0aCwgcmVxdWlyZWQsIG1heExlbmd0aCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbmNvbnN0IFBBU1NXT1JEX0ZJRUxEUyA9IFsnbmV3UGFzc3dvcmQnLCAncmVwZWF0TmV3UGFzc3dvcmQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicENoYW5nZVBhc3N3b3JkRm9ybScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50SW5wdXRzLCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50T3V0cHV0cyB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBpblByb2dyZXNzOiBib29sZWFuO1xyXG5cclxuICBtYXBFcnJvcnNGbjogVmFsaWRhdGlvbi5NYXBFcnJvcnNGbiA9IChlcnJvcnMsIGdyb3VwRXJyb3JzLCBjb250cm9sKSA9PiB7XHJcbiAgICBpZiAoUEFTU1dPUkRfRklFTERTLmluZGV4T2YoY29udHJvbC5uYW1lKSA8IDApIHJldHVybiBlcnJvcnM7XHJcblxyXG4gICAgcmV0dXJuIGVycm9ycy5jb25jYXQoZ3JvdXBFcnJvcnMuZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdwYXNzd29yZE1pc21hdGNoJykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXNzd29yZFJ1bGVzOiBBQlAuRGljdGlvbmFyeTxzdHJpbmc+ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChcclxuICAgICAgQ29uZmlnU3RhdGUuZ2V0U2V0dGluZ3MoJ0lkZW50aXR5LlBhc3N3b3JkJyksXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGFzc3dvcmRSdWxlc0FyciA9IFtdIGFzIFBhc3N3b3JkUnVsZXM7XHJcbiAgICBsZXQgcmVxdWlyZWRMZW5ndGggPSAxO1xyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVEaWdpdCddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgcGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdudW1iZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHBhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlTG93ZXJjYXNlJ10gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NtYWxsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZVVwcGVyY2FzZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgcGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdjYXBpdGFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCsocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkVW5pcXVlQ2hhcnMnXSB8fCAwKSA+IDApIHtcclxuICAgICAgcGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdzcGVjaWFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoK3Bhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlZExlbmd0aCddKSkge1xyXG4gICAgICByZXF1aXJlZExlbmd0aCA9ICtwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZWRMZW5ndGgnXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFsnJywgcmVxdWlyZWRdLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yczogW1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmRSdWxlc0FyciksXHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoKHJlcXVpcmVkTGVuZ3RoKSxcclxuICAgICAgICAgICAgICBtYXhMZW5ndGgoMTI4KSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXBlYXROZXdQYXNzd29yZDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcclxuICAgICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkUnVsZXNBcnIpLFxyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aChyZXF1aXJlZExlbmd0aCksXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoKDEyOCksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWxpZGF0b3JzOiBbY29tcGFyZVBhc3N3b3JkcyhQQVNTV09SRF9GSUVMRFMpXSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5pblByb2dyZXNzID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBDaGFuZ2VQYXNzd29yZCh7XHJcbiAgICAgICAgICBjdXJyZW50UGFzc3dvcmQ6IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUsXHJcbiAgICAgICAgICBuZXdQYXNzd29yZDogdGhpcy5mb3JtLmdldCgnbmV3UGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5pblByb2dyZXNzID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoJ0FicEFjY291bnQ6OlBhc3N3b3JkQ2hhbmdlZE1lc3NhZ2UnLCAnU3VjY2VzcycsIHtcclxuICAgICAgICAgICAgbGlmZTogNTAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKFxyXG4gICAgICAgICAgICBzbnEoKCkgPT4gZXJyLmVycm9yLmVycm9yLm1lc3NhZ2UsICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyksXHJcbiAgICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWZlOiA3MDAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19