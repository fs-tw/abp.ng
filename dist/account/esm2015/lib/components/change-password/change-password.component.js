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
const { minLength, required, maxLength } = Validators;
/** @type {?} */
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
export class ChangePasswordComponent {
    /**
     * @param {?} fb
     * @param {?} store
     * @param {?} toasterService
     */
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (/**
         * @param {?} errors
         * @param {?} groupErrors
         * @param {?} control
         * @return {?}
         */
        (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                return errors;
            return errors.concat(groupErrors.filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ key }) => key === 'passwordMismatch')));
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const passwordRules = this.store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        /** @type {?} */
        const passwordRulesArr = (/** @type {?} */ ([]));
        /** @type {?} */
        let requiredLength = 1;
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            passwordRulesArr.push('capital');
        }
        if ((passwordRules['Abp.Identity.Password.RequireNonAlphanumeric'] || '').toLowerCase() === 'true') {
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
    }
    /**
     * @return {?}
     */
    onSubmit() {
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
        () => (this.inProgress = false))))
            .subscribe({
            next: (/**
             * @return {?}
             */
            () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', {
                    life: 5000,
                });
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            err => {
                this.toasterService.error(snq((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            }),
        });
    }
}
ChangePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-change-password-form',
                template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
                exportAs: 'abpChangePasswordForm'
            }] }
];
/** @nocollapse */
ChangePasswordComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: Store },
    { type: ToasterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTZCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO01BR3BDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVOztNQUUvQyxlQUFlLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUM7QUFPNUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBWWxDLFlBQ1UsRUFBZSxFQUNmLEtBQVksRUFDWixjQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVR4QyxnQkFBVzs7Ozs7O1FBQTJCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUNyRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FB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QUksQ0FBQyxRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FBQzthQUMvQyxTQUFTLENBQUM7WUFDVCxJQUFJOzs7WUFBRSxHQUFHLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsU0FBUyxFQUFFO29CQUMzRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxLQUFLOzs7O1lBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQ3ZCLEdBQUc7OztnQkFBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUUsaUNBQWlDLENBQUMsRUFDckUsT0FBTyxFQUNQO29CQUNFLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQWhIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsbWpEQUErQztnQkFDL0MsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7OztZQWZRLFdBQVc7WUFFWCxLQUFLO1lBSkwsY0FBYzs7OztJQW9CckIsdUNBQWdCOztJQUVoQiw2Q0FBb0I7O0lBRXBCLDhDQUlFOzs7OztJQUdBLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQW9COzs7OztJQUNwQixpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCwgQ29uZmlnU3RhdGUsIEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmRzLCBWYWxpZGF0aW9uLCBQYXNzd29yZFJ1bGVzLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudCc7XHJcblxyXG5jb25zdCB7IG1pbkxlbmd0aCwgcmVxdWlyZWQsIG1heExlbmd0aCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbmNvbnN0IFBBU1NXT1JEX0ZJRUxEUyA9IFsnbmV3UGFzc3dvcmQnLCAncmVwZWF0TmV3UGFzc3dvcmQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicENoYW5nZVBhc3N3b3JkRm9ybScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50SW5wdXRzLCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50T3V0cHV0cyB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBpblByb2dyZXNzOiBib29sZWFuO1xyXG5cclxuICBtYXBFcnJvcnNGbjogVmFsaWRhdGlvbi5NYXBFcnJvcnNGbiA9IChlcnJvcnMsIGdyb3VwRXJyb3JzLCBjb250cm9sKSA9PiB7XHJcbiAgICBpZiAoUEFTU1dPUkRfRklFTERTLmluZGV4T2YoU3RyaW5nKGNvbnRyb2wubmFtZSkpIDwgMCkgcmV0dXJuIGVycm9ycztcclxuXHJcbiAgICByZXR1cm4gZXJyb3JzLmNvbmNhdChncm91cEVycm9ycy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ3Bhc3N3b3JkTWlzbWF0Y2gnKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkUnVsZXM6IEFCUC5EaWN0aW9uYXJ5PHN0cmluZz4gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRTZXR0aW5ncygnSWRlbnRpdHkuUGFzc3dvcmQnKSxcclxuICAgICk7XHJcbiAgICBjb25zdCBwYXNzd29yZFJ1bGVzQXJyID0gW10gYXMgUGFzc3dvcmRSdWxlcztcclxuICAgIGxldCByZXF1aXJlZExlbmd0aCA9IDE7XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZURpZ2l0J10gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ251bWJlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVMb3dlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnc21hbGwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHBhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlVXBwZXJjYXNlJ10gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ2NhcGl0YWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZU5vbkFscGhhbnVtZXJpYyddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcclxuICAgICkge1xyXG4gICAgICBwYXNzd29yZFJ1bGVzQXJyLnB1c2goJ3NwZWNpYWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcigrcGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkTGVuZ3RoJ10pKSB7XHJcbiAgICAgIHJlcXVpcmVkTGVuZ3RoID0gK3Bhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlZExlbmd0aCddO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXNzd29yZDogWycnLCByZXF1aXJlZF0sXHJcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFJ1bGVzQXJyKSxcclxuICAgICAgICAgICAgICBtaW5MZW5ndGgocmVxdWlyZWRMZW5ndGgpLFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aCgxMjgpLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlcGVhdE5ld1Bhc3N3b3JkOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yczogW1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmRSdWxlc0FyciksXHJcbiAgICAgICAgICAgICAgbWluTGVuZ3RoKHJlcXVpcmVkTGVuZ3RoKSxcclxuICAgICAgICAgICAgICBtYXhMZW5ndGgoMTI4KSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbGlkYXRvcnM6IFtjb21wYXJlUGFzc3dvcmRzKFBBU1NXT1JEX0ZJRUxEUyldLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSByZXR1cm47XHJcbiAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgbmV3IENoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgICAgIGN1cnJlbnRQYXNzd29yZDogdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc3VjY2VzcygnQWJwQWNjb3VudDo6UGFzc3dvcmRDaGFuZ2VkTWVzc2FnZScsICdTdWNjZXNzJywge1xyXG4gICAgICAgICAgICBsaWZlOiA1MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgICAgIHNucSgoKSA9PiBlcnIuZXJyb3IuZXJyb3IubWVzc2FnZSwgJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2UnKSxcclxuICAgICAgICAgICAgJ0Vycm9yJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZmU6IDcwMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=