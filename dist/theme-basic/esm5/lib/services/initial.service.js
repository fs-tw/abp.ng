/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/initial.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomInsertionService, AddReplaceableComponent, CONTENT_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import styles from '../constants/styles';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
var InitialService = /** @class */ (function () {
    function InitialService(domInsertion, store) {
        this.domInsertion = domInsertion;
        this.store = store;
        this.appendStyle();
        this.store.dispatch([
            new AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: ApplicationLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: AccountLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: EmptyLayoutComponent,
            }),
        ]);
    }
    /**
     * @return {?}
     */
    InitialService.prototype.appendStyle = /**
     * @return {?}
     */
    function () {
        this.domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    };
    InitialService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InitialService.ctorParameters = function () { return [
        { type: DomInsertionService },
        { type: Store }
    ]; };
    /** @nocollapse */ InitialService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function InitialService_Factory() { return new InitialService(i0.ɵɵinject(i1.DomInsertionService), i0.ɵɵinject(i2.Store)); }, token: InitialService, providedIn: "root" });
    return InitialService;
}());
export { InitialService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.domInsertion;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7O0FBR3pGO0lBRUUsd0JBQW9CLFlBQWlDLEVBQVUsS0FBWTtRQUF2RCxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNsQixJQUFJLHVCQUF1QixDQUFDO2dCQUMxQixHQUFHLDREQUF5QztnQkFDNUMsU0FBUyxFQUFFLDBCQUEwQjthQUN0QyxDQUFDO1lBQ0YsSUFBSSx1QkFBdUIsQ0FBQztnQkFDMUIsR0FBRyxvREFBcUM7Z0JBQ3hDLFNBQVMsRUFBRSxzQkFBc0I7YUFDbEMsQ0FBQztZQUNGLElBQUksdUJBQXVCLENBQUM7Z0JBQzFCLEdBQUcsZ0RBQW1DO2dCQUN0QyxTQUFTLEVBQUUsb0JBQW9CO2FBQ2hDLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkF2QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFUekIsbUJBQW1CO2dCQUVuQixLQUFLOzs7eUJBRmQ7Q0FpQ0MsQUF4QkQsSUF3QkM7U0F2QlksY0FBYzs7Ozs7O0lBQ2Isc0NBQXlDOzs7OztJQUFFLCtCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbUluc2VydGlvblNlcnZpY2UsIEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LCBDT05URU5UX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb25zdGFudHMvc3R5bGVzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWxheW91dC9hcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3VudExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWNjb3VudC1sYXlvdXQvYWNjb3VudC1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2VtcHR5LWxheW91dC9lbXB0eS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZVRoZW1lQmFzaWNDb21wb25lbnRzIH0gZnJvbSAnLi4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgSW5pdGlhbFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tSW5zZXJ0aW9uOiBEb21JbnNlcnRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgdGhpcy5hcHBlbmRTdHlsZSgpO1xyXG5cclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goW1xyXG4gICAgICBuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoe1xyXG4gICAgICAgIGtleTogZVRoZW1lQmFzaWNDb21wb25lbnRzLkFwcGxpY2F0aW9uTGF5b3V0LFxyXG4gICAgICAgIGNvbXBvbmVudDogQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQsXHJcbiAgICAgIH0pLFxyXG4gICAgICBuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoe1xyXG4gICAgICAgIGtleTogZVRoZW1lQmFzaWNDb21wb25lbnRzLkFjY291bnRMYXlvdXQsXHJcbiAgICAgICAgY29tcG9uZW50OiBBY2NvdW50TGF5b3V0Q29tcG9uZW50LFxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAgICBrZXk6IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5FbXB0eUxheW91dCxcclxuICAgICAgICBjb21wb25lbnQ6IEVtcHR5TGF5b3V0Q29tcG9uZW50LFxyXG4gICAgICB9KSxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kU3R5bGUoKSB7XHJcbiAgICB0aGlzLmRvbUluc2VydGlvbi5pbnNlcnRDb250ZW50KENPTlRFTlRfU1RSQVRFR1kuQXBwZW5kU3R5bGVUb0hlYWQoc3R5bGVzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==