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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQU8sTUFBTSxjQUFjLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTZCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2xDLElBQUEsZ0NBQVMsRUFBRSw4QkFBUSxFQUFFLGdDQUFTOztJQUVoQyxlQUFlLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUM7QUFFNUQ7SUFpQkUsaUNBQ1UsRUFBZSxFQUNmLEtBQVksRUFDWixjQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVR4QyxnQkFBVzs7Ozs7O1FBQTJCLFVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPO1lBQ2pFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUU3RCxPQUFP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Y0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO2FBQy9DLFNBQVMsQ0FBQztZQUNULElBQUk7OztZQUFFO2dCQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLFNBQVMsRUFBRTtvQkFDM0UsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsS0FBSzs7OztZQUFFLFVBQUEsR0FBRztnQkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FDdkIsR0FBRzs7O2dCQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXZCLENBQXVCLEdBQUUsaUNBQWlDLENBQUMsRUFDckUsT0FBTyxFQUNQO29CQUNFLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQWhIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsbWpEQUErQztvQkFDL0MsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBZlEsV0FBVztnQkFFWCxLQUFLO2dCQUpMLGNBQWM7O0lBOEh2Qiw4QkFBQztDQUFBLEFBakhELElBaUhDO1NBNUdZLHVCQUF1Qjs7O0lBRWxDLHVDQUFnQjs7SUFFaEIsNkNBQW9COztJQUVwQiw4Q0FJRTs7Ozs7SUFHQSxxQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUFvQjs7Ozs7SUFDcEIsaURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQsIENvbmZpZ1N0YXRlLCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkcywgVmFsaWRhdGlvbiwgUGFzc3dvcmRSdWxlcywgdmFsaWRhdGVQYXNzd29yZCB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjY291bnQnO1xyXG5cclxuY29uc3QgeyBtaW5MZW5ndGgsIHJlcXVpcmVkLCBtYXhMZW5ndGggfSA9IFZhbGlkYXRvcnM7XHJcblxyXG5jb25zdCBQQVNTV09SRF9GSUVMRFMgPSBbJ25ld1Bhc3N3b3JkJywgJ3JlcGVhdE5ld1Bhc3N3b3JkJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jaGFuZ2UtcGFzc3dvcmQtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBDaGFuZ2VQYXNzd29yZEZvcm0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudElucHV0cywgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudE91dHB1dHMge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgbWFwRXJyb3JzRm46IFZhbGlkYXRpb24uTWFwRXJyb3JzRm4gPSAoZXJyb3JzLCBncm91cEVycm9ycywgY29udHJvbCkgPT4ge1xyXG4gICAgaWYgKFBBU1NXT1JEX0ZJRUxEUy5pbmRleE9mKGNvbnRyb2wubmFtZSkgPCAwKSByZXR1cm4gZXJyb3JzO1xyXG5cclxuICAgIHJldHVybiBlcnJvcnMuY29uY2F0KGdyb3VwRXJyb3JzLmZpbHRlcigoeyBrZXkgfSkgPT4ga2V5ID09PSAncGFzc3dvcmRNaXNtYXRjaCcpKTtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFzc3dvcmRSdWxlczogQUJQLkRpY3Rpb25hcnk8c3RyaW5nPiA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoXHJcbiAgICAgIENvbmZpZ1N0YXRlLmdldFNldHRpbmdzKCdJZGVudGl0eS5QYXNzd29yZCcpLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkUnVsZXNBcnIgPSBbXSBhcyBQYXNzd29yZFJ1bGVzO1xyXG4gICAgbGV0IHJlcXVpcmVkTGVuZ3RoID0gMTtcclxuXHJcbiAgICBpZiAoKHBhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlRGlnaXQnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnbnVtYmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKChwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZUxvd2VyY2FzZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgcGFzc3dvcmRSdWxlc0Fyci5wdXNoKCdzbWFsbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgocGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVVcHBlcmNhc2UnXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnY2FwaXRhbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgKHBhc3N3b3JkUnVsZXNbJ0FicC5JZGVudGl0eS5QYXNzd29yZC5SZXF1aXJlTm9uQWxwaGFudW1lcmljJ10gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJ1xyXG4gICAgKSB7XHJcbiAgICAgIHBhc3N3b3JkUnVsZXNBcnIucHVzaCgnc3BlY2lhbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKCtwYXNzd29yZFJ1bGVzWydBYnAuSWRlbnRpdHkuUGFzc3dvcmQuUmVxdWlyZWRMZW5ndGgnXSkpIHtcclxuICAgICAgcmVxdWlyZWRMZW5ndGggPSArcGFzc3dvcmRSdWxlc1snQWJwLklkZW50aXR5LlBhc3N3b3JkLlJlcXVpcmVkTGVuZ3RoJ107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cChcclxuICAgICAge1xyXG4gICAgICAgIHBhc3N3b3JkOiBbJycsIHJlcXVpcmVkXSxcclxuICAgICAgICBuZXdQYXNzd29yZDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtcclxuICAgICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgICB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkUnVsZXNBcnIpLFxyXG4gICAgICAgICAgICAgIG1pbkxlbmd0aChyZXF1aXJlZExlbmd0aCksXHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoKDEyOCksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVwZWF0TmV3UGFzc3dvcmQ6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFJ1bGVzQXJyKSxcclxuICAgICAgICAgICAgICBtaW5MZW5ndGgocmVxdWlyZWRMZW5ndGgpLFxyXG4gICAgICAgICAgICAgIG1heExlbmd0aCgxMjgpLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yczogW2NvbXBhcmVQYXNzd29yZHMoUEFTU1dPUkRfRklFTERTKV0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHJldHVybjtcclxuICAgIHRoaXMuaW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICBuZXcgQ2hhbmdlUGFzc3dvcmQoe1xyXG4gICAgICAgICAgY3VycmVudFBhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMuZm9ybS5nZXQoJ25ld1Bhc3N3b3JkJykudmFsdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5zdWNjZXNzKCdBYnBBY2NvdW50OjpQYXNzd29yZENoYW5nZWRNZXNzYWdlJywgJ1N1Y2Nlc3MnLCB7XHJcbiAgICAgICAgICAgIGxpZmU6IDUwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvci5tZXNzYWdlLCAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgICAnRXJyb3InLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlmZTogNzAwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==