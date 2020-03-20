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
}
AccountConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AccountConfigService.ctorParameters = () => [];
/** @nocollapse */ AccountConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AccountConfigService_Factory() { return new AccountConfigService(); }, token: AccountConfigService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC5jb25maWcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWNjb3VudC1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQjtRQUNFLFlBQVksQ0FBQztZQUNYLElBQUksRUFBRSwwQkFBMEI7WUFDaEMsSUFBSSxFQUFFLFNBQVM7WUFDZixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0saUNBQXlCO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3RELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDNUQsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7YUFDNUU7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkQWJwUm91dGVzLCBlTGF5b3V0VHlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29uZmlnU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBhZGRBYnBSb3V0ZXMoe1xyXG4gICAgICBuYW1lOiAnQWJwQWNjb3VudDo6TWVudTpBY2NvdW50JyxcclxuICAgICAgcGF0aDogJ2FjY291bnQnLFxyXG4gICAgICBpbnZpc2libGU6IHRydWUsXHJcbiAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBuYW1lOiAnQWJwQWNjb3VudDo6TG9naW4nLCBvcmRlcjogMSB9LFxyXG4gICAgICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgbmFtZTogJ0FicEFjY291bnQ6OlJlZ2lzdGVyJywgb3JkZXI6IDIgfSxcclxuICAgICAgICB7IHBhdGg6ICdtYW5hZ2UtcHJvZmlsZScsIG5hbWU6ICdBYnBBY2NvdW50OjpNYW5hZ2VZb3VyUHJvZmlsZScsIG9yZGVyOiAzIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19