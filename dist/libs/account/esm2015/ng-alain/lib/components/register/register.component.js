import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { AuthService } from '@abp/ng.core';
let UserRegisterComponent = class UserRegisterComponent extends RegisterComponent {
    constructor(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _accountService, _oauthService, _store, _toasterService, _authService);
        this._fb = _fb;
        this._accountService = _accountService;
        this._oauthService = _oauthService;
        this._store = _store;
        this._toasterService = _toasterService;
        this._authService = _authService;
    }
};
UserRegisterComponent = __decorate([
    Component({
        selector: 'fs-register',
        template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h3>{{ 'AbpAccount::Register' | abpLocalization }}</h3>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"username\" placeholder=\"{{ 'AbpAccount::UserName' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"email\" placeholder=\"{{ 'AbpAccount::EmailAddress' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"inProgress\" class=\"submit\">\r\n          {{ 'AbpAccount::Register' | abpLocalization }}\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
        styles: [":host{display:block;margin:0 auto;width:368px}:host ::ng-deep h3{font-size:16px;margin-bottom:20px}:host ::ng-deep .submit{width:50%}:host ::ng-deep .login{float:right;line-height:40px}::ng-deep .register-password-cdk .error,::ng-deep .register-password-cdk .success,::ng-deep .register-password-cdk .warning{transition:color .3s}::ng-deep .register-password-cdk .success{color:#52c41a}::ng-deep .register-password-cdk .warning{color:#faad14}::ng-deep .register-password-cdk .error{color:#ff4d4f}::ng-deep .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AccountService,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], UserRegisterComponent);
export { UserRegisterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFhLFdBQVcsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPM0MsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDeEQsWUFDWSxHQUFnQixFQUNoQixlQUErQixFQUMvQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsWUFBeUI7UUFFakMsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBQyxlQUFlLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFQeEUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUd2QyxDQUFDO0NBQ0YsQ0FBQTtBQVhZLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2Qiw0bERBQXdDOztLQUV6QyxDQUFDO3FDQUdtQixXQUFXO1FBQ0MsY0FBYztRQUNoQixZQUFZO1FBQ25CLEtBQUs7UUFDSSxjQUFjO1FBQ2pCLFdBQVc7R0FQNUIscUJBQXFCLENBV2pDO1NBWFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmcy1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyQ29tcG9uZW50IGV4dGVuZHMgUmVnaXN0ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2FjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9vYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUsXHJcbiAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKF9mYiwgX2FjY291bnRTZXJ2aWNlLCBfb2F1dGhTZXJ2aWNlLCBfc3RvcmUsX3RvYXN0ZXJTZXJ2aWNlLF9hdXRoU2VydmljZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==