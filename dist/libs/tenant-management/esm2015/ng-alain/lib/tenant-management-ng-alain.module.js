/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import { Store } from '@ngxs/store';
export class TenantManagementNgAlainModule {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: TenantsComponent, key: 'TenantManagement.TenantsComponent' }));
    }
}
TenantManagementNgAlainModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TenantsComponent],
                entryComponents: [TenantsComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    TenantManagementModule,
                    FeatureManagementNgAlainModule
                ]
            },] }
];
/** @nocollapse */
TenantManagementNgAlainModule.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3RlbmFudC1tYW5hZ2VtZW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUNoRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBWXBDLE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFDdEMsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzSCxDQUFDOzs7WUFiSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsOEJBQThCO2lCQUNqQzthQUNKOzs7O1lBWFEsS0FBSzs7Ozs7OztJQWFFLDhDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRNb2R1bGUgfSBmcm9tICdAZnMvdGVuYW50LW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFRlbmFudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB9IGZyb20gJ0Bmcy9mZWF0dXJlLW1hbmFnZW1lbnQvbmctYWxhaW4nXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbVGVuYW50c0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICAgICAgVGVuYW50TWFuYWdlbWVudE1vZHVsZSxcclxuICAgICAgICBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBUZW5hbnRzQ29tcG9uZW50LCBrZXk6ICdUZW5hbnRNYW5hZ2VtZW50LlRlbmFudHNDb21wb25lbnQnIH0pKTtcclxuICAgIH0gICAgXHJcbiB9XHJcbiJdfQ==