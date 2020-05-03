/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangePassword } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { comparePasswords } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import snq from 'snq';
const { required } = Validators;
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
        const passwordValidations = getPasswordValidators(this.store);
        this.form = this.fb.group({
            password: ['', required],
            newPassword: [
                '',
                {
                    validators: [required, ...passwordValidations],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [required, ...passwordValidations],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBYyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztNQUdoQixFQUFFLFFBQVEsRUFBRSxHQUFHLFVBQVU7O01BRXpCLGVBQWUsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztBQU81RCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFZbEMsWUFDVSxFQUFlLEVBQ2YsS0FBWSxFQUNaLGNBQThCO1FBRjlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVHhDLGdCQUFXOzs7Ozs7UUFBMkIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3JFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUVyRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxFQUFDO0lBTUMsQ0FBQzs7OztJQUVKLFFBQVE7O2NBQ0EsbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU3RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN2QjtZQUNFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7WUFDeEIsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0Y7b0JBQ0UsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsbUJBQW1CLENBQUM7aUJBQy9DO2FBQ0Y7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsRUFBRTtnQkFDRjtvQkFDRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQztpQkFDL0M7YUFDRjtTQUNGLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoRCxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSzthQUNQLFFBQVEsQ0FDUCxJQUFJLGNBQWMsQ0FBQztZQUNqQixlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztZQUNoRCxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztTQUNoRCxDQUFDLENBQ0g7YUFDQSxJQUFJLENBQUMsUUFBUTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFDLENBQUM7YUFDL0MsU0FBUyxDQUFDO1lBQ1QsSUFBSTs7O1lBQUUsR0FBRyxFQUFFO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLFNBQVMsRUFBRTtvQkFDM0UsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBQ0QsS0FBSzs7OztZQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUN2QixHQUFHOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFFLGlDQUFpQyxDQUFDLEVBQ3JFLE9BQU8sRUFDUDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUNGLENBQUM7WUFDSixDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUE1RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG1qREFBK0M7Z0JBQy9DLFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFmUSxXQUFXO1lBRVgsS0FBSztZQUprQixjQUFjOzs7O0lBb0I1Qyx1Q0FBZ0I7O0lBRWhCLDZDQUFvQjs7SUFFcEIsOENBSUU7Ozs7O0lBR0EscUNBQXVCOzs7OztJQUN2Qix3Q0FBb0I7Ozs7O0lBQ3BCLGlEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0UGFzc3dvcmRWYWxpZGF0b3JzLCBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkcywgVmFsaWRhdGlvbiB9IGZyb20gJ0BuZ3gtdmFsaWRhdGUvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjY291bnQnO1xyXG5cclxuY29uc3QgeyByZXF1aXJlZCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbmNvbnN0IFBBU1NXT1JEX0ZJRUxEUyA9IFsnbmV3UGFzc3dvcmQnLCAncmVwZWF0TmV3UGFzc3dvcmQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ2FicENoYW5nZVBhc3N3b3JkRm9ybScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50SW5wdXRzLCBBY2NvdW50LkNoYW5nZVBhc3N3b3JkQ29tcG9uZW50T3V0cHV0cyB7XHJcbiAgZm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBpblByb2dyZXNzOiBib29sZWFuO1xyXG5cclxuICBtYXBFcnJvcnNGbjogVmFsaWRhdGlvbi5NYXBFcnJvcnNGbiA9IChlcnJvcnMsIGdyb3VwRXJyb3JzLCBjb250cm9sKSA9PiB7XHJcbiAgICBpZiAoUEFTU1dPUkRfRklFTERTLmluZGV4T2YoU3RyaW5nKGNvbnRyb2wubmFtZSkpIDwgMCkgcmV0dXJuIGVycm9ycztcclxuXHJcbiAgICByZXR1cm4gZXJyb3JzLmNvbmNhdChncm91cEVycm9ycy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ3Bhc3N3b3JkTWlzbWF0Y2gnKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBnZXRQYXNzd29yZFZhbGlkYXRvcnModGhpcy5zdG9yZSk7XHJcblxyXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cChcclxuICAgICAge1xyXG4gICAgICAgIHBhc3N3b3JkOiBbJycsIHJlcXVpcmVkXSxcclxuICAgICAgICBuZXdQYXNzd29yZDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtyZXF1aXJlZCwgLi4ucGFzc3dvcmRWYWxpZGF0aW9uc10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVwZWF0TmV3UGFzc3dvcmQ6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiBbcmVxdWlyZWQsIC4uLnBhc3N3b3JkVmFsaWRhdGlvbnNdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsaWRhdG9yczogW2NvbXBhcmVQYXNzd29yZHMoUEFTU1dPUkRfRklFTERTKV0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHJldHVybjtcclxuICAgIHRoaXMuaW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICB0aGlzLnN0b3JlXHJcbiAgICAgIC5kaXNwYXRjaChcclxuICAgICAgICBuZXcgQ2hhbmdlUGFzc3dvcmQoe1xyXG4gICAgICAgICAgY3VycmVudFBhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMuZm9ybS5nZXQoJ25ld1Bhc3N3b3JkJykudmFsdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIClcclxuICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4gKHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlKSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5zdWNjZXNzKCdBYnBBY2NvdW50OjpQYXNzd29yZENoYW5nZWRNZXNzYWdlJywgJ1N1Y2Nlc3MnLCB7XHJcbiAgICAgICAgICAgIGxpZmU6IDUwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvci5tZXNzYWdlLCAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgICAnRXJyb3InLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGlmZTogNzAwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==