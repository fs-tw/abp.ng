import { __decorate, __metadata } from "tslib";
import { ChangePassword, ProfileState } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { comparePasswords } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/operators';
import snq from 'snq';
const { required } = Validators;
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                return errors;
            return errors.concat(groupErrors.filter(({ key }) => key === 'passwordMismatch'));
        };
    }
    ngOnInit() {
        this.hideCurrentPassword = !this.store.selectSnapshot(ProfileState.getProfile).hasPassword;
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
        if (this.hideCurrentPassword)
            this.form.removeControl('password');
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword(Object.assign(Object.assign({}, (!this.hideCurrentPassword && { currentPassword: this.form.get('password').value })), { newPassword: this.form.get('newPassword').value })))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe({
            next: () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', '', {
                    life: 5000,
                });
                if (this.hideCurrentPassword) {
                    this.hideCurrentPassword = false;
                    this.form.addControl('password', new FormControl('', [required]));
                }
            },
            error: err => {
                this.toasterService.error(snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'));
            },
        });
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'abp-change-password-form',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div *ngIf=\"!hideCurrentPassword\" class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
        exportAs: 'abpChangePasswordForm'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Store,
        ToasterService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQWMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFHdEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLFVBQVUsQ0FBQztBQUVoQyxNQUFNLGVBQWUsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBTzdELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBY2xDLFlBQ1UsRUFBZSxFQUNmLEtBQVksRUFDWixjQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVR4QyxnQkFBVyxHQUEyQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDckUsSUFBSSxlQUFlLENBQUMsT0FB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QztDQUNGLENBQUE7QUEvRVksdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsa2xEQUErQztRQUMvQyxRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDLENBQUM7cUNBZ0JjLFdBQVc7UUFDUixLQUFLO1FBQ0ksY0FBYztHQWpCN0IsdUJBQXVCLENBK0VuQztTQS9FWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCwgUHJvZmlsZVN0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0UGFzc3dvcmRWYWxpZGF0b3JzLCBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZHMsIFZhbGlkYXRpb24gfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuXHJcbmNvbnN0IHsgcmVxdWlyZWQgfSA9IFZhbGlkYXRvcnM7XHJcblxyXG5jb25zdCBQQVNTV09SRF9GSUVMRFMgPSBbJ25ld1Bhc3N3b3JkJywgJ3JlcGVhdE5ld1Bhc3N3b3JkJ107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jaGFuZ2UtcGFzc3dvcmQtZm9ybScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBDaGFuZ2VQYXNzd29yZEZvcm0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudElucHV0cywgQWNjb3VudC5DaGFuZ2VQYXNzd29yZENvbXBvbmVudE91dHB1dHMge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgaGlkZUN1cnJlbnRQYXNzd29yZDogYm9vbGVhbjtcclxuXHJcbiAgbWFwRXJyb3JzRm46IFZhbGlkYXRpb24uTWFwRXJyb3JzRm4gPSAoZXJyb3JzLCBncm91cEVycm9ycywgY29udHJvbCkgPT4ge1xyXG4gICAgaWYgKFBBU1NXT1JEX0ZJRUxEUy5pbmRleE9mKFN0cmluZyhjb250cm9sLm5hbWUpKSA8IDApIHJldHVybiBlcnJvcnM7XHJcblxyXG4gICAgcmV0dXJuIGVycm9ycy5jb25jYXQoZ3JvdXBFcnJvcnMuZmlsdGVyKCh7IGtleSB9KSA9PiBrZXkgPT09ICdwYXNzd29yZE1pc21hdGNoJykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpZGVDdXJyZW50UGFzc3dvcmQgPSAhdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQcm9maWxlU3RhdGUuZ2V0UHJvZmlsZSkuaGFzUGFzc3dvcmQ7XHJcblxyXG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IGdldFBhc3N3b3JkVmFsaWRhdG9ycyh0aGlzLnN0b3JlKTtcclxuXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFsnJywgcmVxdWlyZWRdLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yczogW3JlcXVpcmVkLCAuLi5wYXNzd29yZFZhbGlkYXRpb25zXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXBlYXROZXdQYXNzd29yZDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtyZXF1aXJlZCwgLi4ucGFzc3dvcmRWYWxpZGF0aW9uc10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWxpZGF0b3JzOiBbY29tcGFyZVBhc3N3b3JkcyhQQVNTV09SRF9GSUVMRFMpXSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGlkZUN1cnJlbnRQYXNzd29yZCkgdGhpcy5mb3JtLnJlbW92ZUNvbnRyb2woJ3Bhc3N3b3JkJyk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5pblByb2dyZXNzID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBDaGFuZ2VQYXNzd29yZCh7XHJcbiAgICAgICAgICAuLi4oIXRoaXMuaGlkZUN1cnJlbnRQYXNzd29yZCAmJiB7IGN1cnJlbnRQYXNzd29yZDogdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSB9KSxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+ICh0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc3VjY2VzcygnQWJwQWNjb3VudDo6UGFzc3dvcmRDaGFuZ2VkTWVzc2FnZScsICcnLCB7XHJcbiAgICAgICAgICAgIGxpZmU6IDUwMDAsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5oaWRlQ3VycmVudFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUN1cnJlbnRQYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgncGFzc3dvcmQnLCBuZXcgRm9ybUNvbnRyb2woJycsIFtyZXF1aXJlZF0pKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvci5tZXNzYWdlLCAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19