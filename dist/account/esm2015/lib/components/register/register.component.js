import { __decorate, __metadata } from "tslib";
import { AuthService, ConfigState } from '@abp/ng.core';
import { getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import snq from 'snq';
import { AccountService } from '../../services/account.service';
const { maxLength, required, email } = Validators;
let RegisterComponent = class RegisterComponent {
    constructor(fb, accountService, oauthService, store, toasterService, authService) {
        this.fb = fb;
        this.accountService = accountService;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (this.store.selectSnapshot(ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled')) || '').toLowerCase() !== 'false';
        if (!this.isSelfRegistrationEnabled) {
            this.toasterService.warn({
                key: 'AbpAccount::SelfRegistrationDisabledMessage',
                defaultValue: 'Self registration is disabled.',
            }, null, { life: 10000 });
            return;
        }
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, ...getPasswordValidators(this.store)]],
            email: ['', [required, email]],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        const newUser = {
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        };
        this.accountService
            .register(newUser)
            .pipe(switchMap(() => this.authService.login(newUser.userName, newUser.password)), catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe();
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'abp-register',
        template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form\r\n    *ngIf=\"isSelfRegistrationEnabled\"\r\n    [formGroup]=\"form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    validateOnSubmit\r\n    class=\"mt-4\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AccountService,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNjb3VudC9zcmMvbGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRXRCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxVQUFVLENBQUM7QUFNbEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFTNUIsWUFDVSxFQUFlLEVBQ2YsY0FBOEIsRUFDOUIsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLGNBQThCLEVBQzlCLFdBQXdCO1FBTHhCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIs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QVdjLFdBQVc7UUFDQyxjQUFjO1FBQ2hCLFlBQVk7UUFDbkIsS0FBSztRQUNJLGNBQWM7UUFDakIsV0FBVztHQWZ2QixpQkFBaUIsQ0F5RTdCO1NBekVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGdldFBhc3N3b3JkVmFsaWRhdG9ycywgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaW5hbGl6ZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZUFjY291bnRDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZW51bXMvY29tcG9uZW50cyc7XHJcbmNvbnN0IHsgbWF4TGVuZ3RoLCByZXF1aXJlZCwgZW1haWwgfSA9IFZhbGlkYXRvcnM7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcblxyXG4gIGlzU2VsZlJlZ2lzdHJhdGlvbkVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICBhdXRoV3JhcHBlcktleSA9IGVBY2NvdW50Q29tcG9uZW50cy5BdXRoV3JhcHBlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc1NlbGZSZWdpc3RyYXRpb25FbmFibGVkID1cclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoXHJcbiAgICAgICAgICBDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5Jc1NlbGZSZWdpc3RyYXRpb25FbmFibGVkJyksXHJcbiAgICAgICAgKSB8fCAnJ1xyXG4gICAgICApLnRvTG93ZXJDYXNlKCkgIT09ICdmYWxzZSc7XHJcbiAgICBpZiAoIXRoaXMuaXNTZWxmUmVnaXN0cmF0aW9uRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLndhcm4oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6U2VsZlJlZ2lzdHJhdGlvbkRpc2FibGVkTWVzc2FnZScsXHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdTZWxmIHJlZ2lzdHJhdGlvbiBpcyBkaXNhYmxlZC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICB7IGxpZmU6IDEwMDAwIH0sXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW3JlcXVpcmVkLCBtYXhMZW5ndGgoMjU1KV1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBbcmVxdWlyZWQsIC4uLmdldFBhc3N3b3JkVmFsaWRhdG9ycyh0aGlzLnN0b3JlKV1dLFxyXG4gICAgICBlbWFpbDogWycnLCBbcmVxdWlyZWQsIGVtYWlsXV0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5pblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBuZXdVc2VyID0ge1xyXG4gICAgICB1c2VyTmFtZTogdGhpcy5mb3JtLmdldCgndXNlcm5hbWUnKS52YWx1ZSxcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWUsXHJcbiAgICAgIGVtYWlsQWRkcmVzczogdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZSxcclxuICAgICAgYXBwTmFtZTogJ0FuZ3VsYXInLFxyXG4gICAgfSBhcyBSZWdpc3RlclJlcXVlc3Q7XHJcblxyXG4gICAgdGhpcy5hY2NvdW50U2VydmljZVxyXG4gICAgICAucmVnaXN0ZXIobmV3VXNlcilcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuYXV0aFNlcnZpY2UubG9naW4obmV3VXNlci51c2VyTmFtZSwgbmV3VXNlci5wYXNzd29yZCkpLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3IoXHJcbiAgICAgICAgICAgIHNucSgoKSA9PiBlcnIuZXJyb3IuZXJyb3JfZGVzY3JpcHRpb24pIHx8XHJcbiAgICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvci5tZXNzYWdlLCAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgICAnRXJyb3InLFxyXG4gICAgICAgICAgICB7IGxpZmU6IDcwMDAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZpbmFsaXplKCgpID0+ICh0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZSkpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19