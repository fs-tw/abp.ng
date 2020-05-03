/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class RegisterComponent {
    /**
     * @param {?} fb
     * @param {?} accountService
     * @param {?} oauthService
     * @param {?} store
     * @param {?} toasterService
     * @param {?} authService
     */
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
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        /** @type {?} */
        const newUser = (/** @type {?} */ ({
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        }));
        this.accountService
            .register(newUser)
            .pipe(switchMap((/**
         * @return {?}
         */
        () => this.authService.login(newUser.userName, newUser.password))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.toasterService.error(snq((/**
             * @return {?}
             */
            () => err.error.error_description)) ||
                snq((/**
                 * @return {?}
                 */
                () => err.error.error.message), 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        })), finalize((/**
         * @return {?}
         */
        () => (this.inProgress = false))))
            .subscribe();
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-register',
                template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form\r\n    *ngIf=\"isSelfRegistrationEnabled\"\r\n    [formGroup]=\"form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    validateOnSubmit\r\n    class=\"mt-4\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n"
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AccountService },
    { type: OAuthService },
    { type: Store },
    { type: ToasterService },
    { type: AuthService }
];
if (false) {
    /** @type {?} */
    RegisterComponent.prototype.form;
    /** @type {?} */
    RegisterComponent.prototype.inProgress;
    /** @type {?} */
    RegisterComponent.prototype.isSelfRegistrationEnabled;
    /** @type {?} */
    RegisterComponent.prototype.authWrapperKey;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.accountService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.toasterService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5hY2NvdW50LyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7TUFFMUQsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLFVBQVU7QUFNakQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7O0lBUzVCLFlBQ1UsRUFBZSxFQUNmLGNBQThCLEVBQzlCLFlBQTBCLEVBQzFCLEtBQVksRUFDWixjQUE4QixFQUM5QixXQUF3QjtRQUx4QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixtQkFB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WUFEWixLQUFLO1lBSGtCLGNBQWM7WUFEckMsV0FBVzs7OztJQW1CbEIsaUNBQWdCOztJQUVoQix1Q0FBb0I7O0lBRXBCLHNEQUFpQzs7SUFFakMsMkNBQWdEOzs7OztJQUc5QywrQkFBdUI7Ozs7O0lBQ3ZCLDJDQUFzQzs7Ozs7SUFDdEMseUNBQWtDOzs7OztJQUNsQyxrQ0FBb0I7Ozs7O0lBQ3BCLDJDQUFzQzs7Ozs7SUFDdEMsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZ2V0UGFzc3dvcmRWYWxpZGF0b3JzLCBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgUmVnaXN0ZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBlQWNjb3VudENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9lbnVtcy9jb21wb25lbnRzJztcclxuY29uc3QgeyBtYXhMZW5ndGgsIHJlcXVpcmVkLCBlbWFpbCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgaW5Qcm9ncmVzczogYm9vbGVhbjtcclxuXHJcbiAgaXNTZWxmUmVnaXN0cmF0aW9uRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gIGF1dGhXcmFwcGVyS2V5ID0gZUFjY291bnRDb21wb25lbnRzLkF1dGhXcmFwcGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzU2VsZlJlZ2lzdHJhdGlvbkVuYWJsZWQgPVxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChcclxuICAgICAgICAgIENvbmZpZ1N0YXRlLmdldFNldHRpbmcoJ0FicC5BY2NvdW50LklzU2VsZlJlZ2lzdHJhdGlvbkVuYWJsZWQnKSxcclxuICAgICAgICApIHx8ICcnXHJcbiAgICAgICkudG9Mb3dlckNhc2UoKSAhPT0gJ2ZhbHNlJztcclxuICAgIGlmICghdGhpcy5pc1NlbGZSZWdpc3RyYXRpb25FbmFibGVkKSB7XHJcbiAgICAgIHRoaXMudG9hc3RlclNlcnZpY2Uud2FybihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpTZWxmUmVnaXN0cmF0aW9uRGlzYWJsZWRNZXNzYWdlJyxcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ1NlbGYgcmVnaXN0cmF0aW9uIGlzIGRpc2FibGVkLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIHsgbGlmZTogMTAwMDAgfSxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB1c2VybmFtZTogWycnLCBbcmVxdWlyZWQsIG1heExlbmd0aCgyNTUpXV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFtyZXF1aXJlZCwgLi4uZ2V0UGFzc3dvcmRWYWxpZGF0b3JzKHRoaXMuc3RvcmUpXV0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFtyZXF1aXJlZCwgZW1haWxdXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IG5ld1VzZXIgPSB7XHJcbiAgICAgIHVzZXJOYW1lOiB0aGlzLmZvcm0uZ2V0KCd1c2VybmFtZScpLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgZW1haWxBZGRyZXNzOiB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlLFxyXG4gICAgICBhcHBOYW1lOiAnQW5ndWxhcicsXHJcbiAgICB9IGFzIFJlZ2lzdGVyUmVxdWVzdDtcclxuXHJcbiAgICB0aGlzLmFjY291bnRTZXJ2aWNlXHJcbiAgICAgIC5yZWdpc3RlcihuZXdVc2VyKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5hdXRoU2VydmljZS5sb2dpbihuZXdVc2VyLnVzZXJOYW1lLCBuZXdVc2VyLnBhc3N3b3JkKSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5lcnJvcihcclxuICAgICAgICAgICAgc25xKCgpID0+IGVyci5lcnJvci5lcnJvcl9kZXNjcmlwdGlvbikgfHxcclxuICAgICAgICAgICAgICBzbnEoKCkgPT4gZXJyLmVycm9yLmVycm9yLm1lc3NhZ2UsICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyksXHJcbiAgICAgICAgICAgICdFcnJvcicsXHJcbiAgICAgICAgICAgIHsgbGlmZTogNzAwMCB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4gKHRoaXMuaW5Qcm9ncmVzcyA9IGZhbHNlKSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=