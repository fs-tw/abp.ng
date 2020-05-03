/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangePassword } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { comparePasswords } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import snq from 'snq';
var required = Validators.required;
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
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
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
        var passwordValidations = getPasswordValidators(this.store);
        this.form = this.fb.group({
            password: ['', required],
            newPassword: [
                '',
                {
                    validators: tslib_1.__spread([required], passwordValidations),
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: tslib_1.__spread([required], passwordValidations),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFHZCxJQUFBLDhCQUFROztJQUVWLGVBQWUsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztBQUU1RDtJQWlCRSxpQ0FDVSxFQUFlLEVBQ2YsS0FBWSxFQUNaLGNBQThCO1FBRjlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVHhDLGdCQUFXOzs7Ozs7UUFBMkIsVUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU87WUFDakUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sTUFBTSxDQUFDO1lBRXJFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsRUFBTztvQkFBTCxZQUFHO2dCQUFPLE9BQUEsR0FBRyxLQUFLLGtCQUFrQjtZQUExQixDQUEwQixFQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLEVBQUM7SUFNQyxDQUFDOzs7O0lBRUosMENBQVE7OztJQUFSOztZQUNRLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDdkI7WUFDRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDO1lBQ3hCLFdBQVcsRUFBRTtnQkFDWCxFQUFFO2dCQUNGO29CQUNFLFVBQVUsb0JBQUcsUUFBUSxHQUFLLG1CQUFtQixDQUFDO2lCQUMvQzthQUNGO1lBQ0QsaUJBQWlCLEVBQUU7Z0JBQ2pCLEVBQUU7Z0JBQ0Y7b0JBQ0UsVUFBVSxvQkFBRyxRQUFRLEdBQUssbUJBQW1CLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDaEQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUs7YUFDUCxRQUFRLENBQ1AsSUFBSSxjQUFjLENBQUM7WUFDakIsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUs7WUFDaEQsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUs7U0FDaEQsQ0FBQyxDQUNIO2FBQ0EsSUFBSSxDQUFDLFFBQVE7OztRQUFDLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQzthQUMvQyxTQUFTLENBQUM7WUFDVCxJQUFJOzs7WUFBRTtnQkFDSixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsRUFBRSxTQUFTLEVBQUU7b0JBQzNFLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtZQUNELEtBQUs7Ozs7WUFBRSxVQUFBLEdBQUc7Z0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQ3ZCLEdBQUc7OztnQkFBQyxjQUFNLE9BQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUF2QixDQUF1QixHQUFFLGlDQUFpQyxDQUFDLEVBQ3JFLE9BQU8sRUFDUDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUNGLENBQUM7WUFDSixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLG1qREFBK0M7b0JBQy9DLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQWZRLFdBQVc7Z0JBRVgsS0FBSztnQkFKa0IsY0FBYzs7SUEwRjlDLDhCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0F4RVksdUJBQXVCOzs7SUFFbEMsdUNBQWdCOztJQUVoQiw2Q0FBb0I7O0lBRXBCLDhDQUlFOzs7OztJQUdBLHFDQUF1Qjs7Ozs7SUFDdkIsd0NBQW9COzs7OztJQUNwQixpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGdldFBhc3N3b3JkVmFsaWRhdG9ycywgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZHMsIFZhbGlkYXRpb24gfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuXHJcbmNvbnN0IHsgcmVxdWlyZWQgfSA9IFZhbGlkYXRvcnM7XHJcblxyXG5jb25zdCBQQVNTV09SRF9GSUVMRFMgPSBbJ25ld1Bhc3N3b3JkJywgJ3JlcGVhdE5ld1Bhc3N3b3JkJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jaGFuZ2UtcGFzc3dvcmQtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBDaGFuZ2VQYXNzd29yZEZvcm0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudElucHV0cywgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudE91dHB1dHMge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgbWFwRXJyb3JzRm46IFZhbGlkYXRpb24uTWFwRXJyb3JzRm4gPSAoZXJyb3JzLCBncm91cEVycm9ycywgY29udHJvbCkgPT4ge1xyXG4gICAgaWYgKFBBU1NXT1JEX0ZJRUxEUy5pbmRleE9mKFN0cmluZyhjb250cm9sLm5hbWUpKSA8IDApIHJldHVybiBlcnJvcnM7XHJcblxyXG4gICAgcmV0dXJuIGVycm9ycy5jb25jYXQoZ3JvdXBFcnJvcnMuZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdwYXNzd29yZE1pc21hdGNoJykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gZ2V0UGFzc3dvcmRWYWxpZGF0b3JzKHRoaXMuc3RvcmUpO1xyXG5cclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXNzd29yZDogWycnLCByZXF1aXJlZF0sXHJcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbcmVxdWlyZWQsIC4uLnBhc3N3b3JkVmFsaWRhdGlvbnNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHJlcGVhdE5ld1Bhc3N3b3JkOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yczogW3JlcXVpcmVkLCAuLi5wYXNzd29yZFZhbGlkYXRpb25zXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbGlkYXRvcnM6IFtjb21wYXJlUGFzc3dvcmRzKFBBU1NXT1JEX0ZJRUxEUyldLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSByZXR1cm47XHJcbiAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgbmV3IENoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgICAgIGN1cnJlbnRQYXNzd29yZDogdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc3VjY2VzcygnQWJwQWNjb3VudDo6UGFzc3dvcmRDaGFuZ2VkTWVzc2FnZScsICdTdWNjZXNzJywge1xyXG4gICAgICAgICAgICBsaWZlOiA1MDAwLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgICAgIHNucSgoKSA9PiBlcnIuZXJyb3IuZXJyb3IubWVzc2FnZSwgJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2UnKSxcclxuICAgICAgICAgICAgJ0Vycm9yJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxpZmU6IDcwMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=