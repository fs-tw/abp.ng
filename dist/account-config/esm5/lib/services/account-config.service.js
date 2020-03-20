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
            name: 'AbpAccount::Menu:Account',
            path: 'account',
            invisible: true,
            layout: "application" /* application */,
            children: [
                { path: 'login', name: 'AbpAccount::Login', order: 1 },
                { path: 'register', name: 'AbpAccount::Register', order: 2 },
                { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3 },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC5jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFJRTtRQUNFLFlBQVksQ0FBQztZQUNYLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsSUFBSSxFQUFFLFNBQVM7WUFDZixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0saUNBQXlCO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3RELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDNUQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7YUFDNUU7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFoQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7K0JBTEQ7Q0FvQkMsQUFqQkQsSUFpQkM7U0FkWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRBYnBSb3V0ZXMsIGVMYXlvdXRUeXBlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRDb25maWdTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGFkZEFicFJvdXRlcyh7XHJcbiAgICAgIG5hbWU6ICdBYnBBY2NvdW50OjpNZW51OkFjY291bnQnLFxyXG4gICAgICBwYXRoOiAnYWNjb3VudCcsXHJcbiAgICAgIGludmlzaWJsZTogdHJ1ZSxcclxuICAgICAgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbixcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHBhdGg6ICdsb2dpbicsIG5hbWU6ICdBYnBBY2NvdW50OjpMb2dpbicsIG9yZGVyOiAxIH0sXHJcbiAgICAgICAgeyBwYXRoOiAncmVnaXN0ZXInLCBuYW1lOiAnQWJwQWNjb3VudDo6UmVnaXN0ZXInLCBvcmRlcjogMiB9LFxyXG4gICAgICAgIHsgcGF0aDogJ21hbmFnZS1wcm9maWxlJywgbmFtZTogJ0FicEFjY291bnQ6Ok1hbmFnZVlvdXJQcm9maWxlJywgb3JkZXI6IDMgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=