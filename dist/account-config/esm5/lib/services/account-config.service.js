/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AccountConfigService = /** @class */ (function () {
    function AccountConfigService() {
        addAbpRoutes({
            name: "AbpAccount::Menu:Account" /* Account */,
            path: 'account',
            invisible: true,
            layout: "application" /* application */,
            children: [
                { path: 'login', name: "AbpAccount::Login" /* Login */, order: 1 },
                { path: 'register', name: "AbpAccount::Register" /* Register */, order: 2 },
                { path: 'manage-profile', name: "AbpAccount::ManageYourProfile" /* ManageProfile */, order: 3 },
            ],
        });
    }
    AccountConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AccountConfigService.ctorParameters = function () { return []; };
    /** @nocollapse */ AccountConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccountConfigService_Factory() { return new AccountConfigService(); }, token: AccountConfigService, providedIn: "root" });
    return AccountConfigService;
}());
export { AccountConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC5jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0M7SUFJRTtRQUNFLFlBQVksQ0FBQztZQUNYLElBQUksMENBQTRCO1lBQ2hDLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLGlDQUF5QjtZQUMvQixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQTBCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0QsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksdUNBQTZCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDakUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxxREFBa0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2FBQzdFO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OytCQU5EO0NBcUJDLEFBakJELElBaUJDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkQWJwUm91dGVzLCBlTGF5b3V0VHlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZUFjY291bnRSb3V0ZU5hbWVzIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBhZGRBYnBSb3V0ZXMoe1xyXG4gICAgICBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuQWNjb3VudCxcclxuICAgICAgcGF0aDogJ2FjY291bnQnLFxyXG4gICAgICBpbnZpc2libGU6IHRydWUsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuTG9naW4sIG9yZGVyOiAxIH0sXHJcbiAgICAgICAgeyBwYXRoOiAncmVnaXN0ZXInLCBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuUmVnaXN0ZXIsIG9yZGVyOiAyIH0sXHJcbiAgICAgICAgeyBwYXRoOiAnbWFuYWdlLXByb2ZpbGUnLCBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuTWFuYWdlUHJvZmlsZSwgb3JkZXI6IDMgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=