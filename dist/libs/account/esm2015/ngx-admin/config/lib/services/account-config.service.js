/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestService, addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@abp/ng.core";
export class AccountConfigService {
    /**
     * @param {?} router
     * @param {?} restService
     */
    constructor(router, restService) {
        this.router = router;
        this.restService = restService;
        addAbpRoutes({
            name: 'AbpAccount::Menu:Account',
            path: 'account',
            invisible: true,
            layout: "account" /* account */,
            children: [
                { path: 'login', name: 'AbpAccount::Login', order: 1 },
                { path: 'register', name: 'AbpAccount::Register', order: 2 },
                { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3, layout: "application" /* application */ },
            ],
        });
    }
}
AccountConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AccountConfigService.ctorParameters = () => [
    { type: Router },
    { type: RestService }
];
/** @nocollapse */ AccountConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccountConfigService_Factory() { return new AccountConfigService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RestService)); }, token: AccountConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountConfigService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AccountConfigService.prototype.restService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9hY2NvdW50L25neC1hZG1pbi9jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBQy9CLFlBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEUsWUFBWSxDQUFDO1lBQ1gsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSx5QkFBcUI7WUFDM0IsUUFBUSxFQUFFO2dCQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFHO2dCQUM3RCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxNQUFNLGlDQUF5QixFQUFHO2FBQzdHO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLE1BQU07WUFGTyxXQUFXOzs7Ozs7OztJQVFuQixzQ0FBc0I7Ozs7O0lBQUUsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZUxheW91dFR5cGUsIFJlc3RTZXJ2aWNlLCBhZGRBYnBSb3V0ZXMgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlKSB7XHJcbiAgICBhZGRBYnBSb3V0ZXMoe1xyXG4gICAgICBuYW1lOiAnQWJwQWNjb3VudDo6TWVudTpBY2NvdW50JyxcclxuICAgICAgcGF0aDogJ2FjY291bnQnLFxyXG4gICAgICBpbnZpc2libGU6IHRydWUsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYWNjb3VudCxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHBhdGg6ICdsb2dpbicsIG5hbWU6ICdBYnBBY2NvdW50OjpMb2dpbicsIG9yZGVyOiAxIH0sXHJcbiAgICAgICAgeyBwYXRoOiAncmVnaXN0ZXInLCBuYW1lOiAnQWJwQWNjb3VudDo6UmVnaXN0ZXInLCBvcmRlcjogMiAgfSxcclxuICAgICAgICB7IHBhdGg6ICdtYW5hZ2UtcHJvZmlsZScsIG5hbWU6ICdBYnBBY2NvdW50OjpNYW5hZ2VZb3VyUHJvZmlsZScsIG9yZGVyOiAzLGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24gIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19