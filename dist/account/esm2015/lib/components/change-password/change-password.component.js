import { __decorate, __metadata } from "tslib";
import { ChangePassword } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword({
            currentPassword: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
        }))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe({
            next: () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', {
                    life: 5000,
                });
            },
            error: err => {
                this.toasterService.error(snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            },
        });
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'abp-change-password-form',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
        exportAs: 'abpChangePasswordForm'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Store,
        ToasterService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FjY291bnQvc3JjL2xpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBR3RCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxVQUFVLENBQUM7QUFFaEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQU83RCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQVlsQyxZQUNVLEVBQWUsRUFDZixLQUFZLEVBQ1osY0FBOEI7UUFGOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUeEMsZ0JBQVcsR0FBMkIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3JFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUVyRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDO0lBTUMsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN2QjtZQUNFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7WUFDeEIsV0FBVyxFQUFFO2dCQUNYLEVBQUU7Z0JBQ0Y7b0JBQ0UsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsbUJBQW1CLENBQUM7aUJBQy9DO2FBQ0Y7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsRUFBRTtnQkFDRjtvQkFDRSxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQztpQkFDL0M7YUFDRjtTQUNGLEVBQ0Q7WUFDRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNoRCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSzthQUNQLFFBQVEsQ0FDUCxJQUFJLGNBQWMsQ0FBQztZQUNqQixlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztZQUNoRCxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSztTQUNoRCxDQUFDLENBQ0g7YUFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQy9DLFNBQVMsQ0FBQztZQUNULElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLEVBQUUsU0FBUyxFQUFFO29CQUMzRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUN2QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGlDQUFpQyxDQUFDLEVBQ3JFLE9BQU8sRUFDUDtvQkFDRSxJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUNGLENBQUM7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUE7QUF4RVksdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsbWpEQUErQztRQUMvQyxRQUFRLEVBQUUsdUJBQXVCO0tBQ2xDLENBQUM7cUNBY2MsV0FBVztRQUNSLEtBQUs7UUFDSSxjQUFjO0dBZjdCLHVCQUF1QixDQXdFbkM7U0F4RVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBnZXRQYXNzd29yZFZhbGlkYXRvcnMsIFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmRzLCBWYWxpZGF0aW9uIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudCc7XHJcblxyXG5jb25zdCB7IHJlcXVpcmVkIH0gPSBWYWxpZGF0b3JzO1xyXG5cclxuY29uc3QgUEFTU1dPUkRfRklFTERTID0gWyduZXdQYXNzd29yZCcsICdyZXBlYXROZXdQYXNzd29yZCddO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtY2hhbmdlLXBhc3N3b3JkLWZvcm0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnYWJwQ2hhbmdlUGFzc3dvcmRGb3JtJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFjY291bnQuQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRJbnB1dHMsIEFjY291bnQuQ2hhbmdlUGFzc3dvcmRDb21wb25lbnRPdXRwdXRzIHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcblxyXG4gIG1hcEVycm9yc0ZuOiBWYWxpZGF0aW9uLk1hcEVycm9yc0ZuID0gKGVycm9ycywgZ3JvdXBFcnJvcnMsIGNvbnRyb2wpID0+IHtcclxuICAgIGlmIChQQVNTV09SRF9GSUVMRFMuaW5kZXhPZihTdHJpbmcoY29udHJvbC5uYW1lKSkgPCAwKSByZXR1cm4gZXJyb3JzO1xyXG5cclxuICAgIHJldHVybiBlcnJvcnMuY29uY2F0KGdyb3VwRXJyb3JzLmZpbHRlcigoeyBrZXkgfSkgPT4ga2V5ID09PSAncGFzc3dvcmRNaXNtYXRjaCcpKTtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IGdldFBhc3N3b3JkVmFsaWRhdG9ycyh0aGlzLnN0b3JlKTtcclxuXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFsnJywgcmVxdWlyZWRdLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yczogW3JlcXVpcmVkLCAuLi5wYXNzd29yZFZhbGlkYXRpb25zXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICByZXBlYXROZXdQYXNzd29yZDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFtyZXF1aXJlZCwgLi4ucGFzc3dvcmRWYWxpZGF0aW9uc10sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWxpZGF0b3JzOiBbY29tcGFyZVBhc3N3b3JkcyhQQVNTV09SRF9GSUVMRFMpXSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5pblByb2dyZXNzID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBDaGFuZ2VQYXNzd29yZCh7XHJcbiAgICAgICAgICBjdXJyZW50UGFzc3dvcmQ6IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUsXHJcbiAgICAgICAgICBuZXdQYXNzd29yZDogdGhpcy5mb3JtLmdldCgnbmV3UGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKVxyXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiAodGhpcy5pblByb2dyZXNzID0gZmFsc2UpKSlcclxuICAgICAgLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoJ0FicEFjY291bnQ6OlBhc3N3b3JkQ2hhbmdlZE1lc3NhZ2UnLCAnU3VjY2VzcycsIHtcclxuICAgICAgICAgICAgbGlmZTogNTAwMCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmVycm9yKFxyXG4gICAgICAgICAgICBzbnEoKCkgPT4gZXJyLmVycm9yLmVycm9yLm1lc3NhZ2UsICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyksXHJcbiAgICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaWZlOiA3MDAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19