/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { addAbpRoutes } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AccountConfigService {
    constructor() {
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
}
AccountConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AccountConfigService.ctorParameters = () => [];
/** @nocollapse */ AccountConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccountConfigService_Factory() { return new AccountConfigService(); }, token: AccountConfigService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC5jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQjtRQUNFLFlBQVksQ0FBQztZQUNYLElBQUksMENBQTRCO1lBQ2hDLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLGlDQUF5QjtZQUMvQixRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksaUNBQTBCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDM0QsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksdUNBQTZCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDakUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxxREFBa0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2FBQzdFO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEFicFJvdXRlcywgZUxheW91dFR5cGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVBY2NvdW50Um91dGVOYW1lcyB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbmZpZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgYWRkQWJwUm91dGVzKHtcclxuICAgICAgbmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLkFjY291bnQsXHJcbiAgICAgIHBhdGg6ICdhY2NvdW50JyxcclxuICAgICAgaW52aXNpYmxlOiB0cnVlLFxyXG4gICAgICBsYXlvdXQ6IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHsgcGF0aDogJ2xvZ2luJywgbmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLkxvZ2luLCBvcmRlcjogMSB9LFxyXG4gICAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgbmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLlJlZ2lzdGVyLCBvcmRlcjogMiB9LFxyXG4gICAgICAgIHsgcGF0aDogJ21hbmFnZS1wcm9maWxlJywgbmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLk1hbmFnZVByb2ZpbGUsIG9yZGVyOiAzIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19