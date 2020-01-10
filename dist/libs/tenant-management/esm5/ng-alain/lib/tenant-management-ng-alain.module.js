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
var TenantManagementNgAlainModule = /** @class */ (function () {
    function TenantManagementNgAlainModule(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: TenantsComponent, key: 'TenantManagement.TenantsComponent' }));
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
    TenantManagementNgAlainModule.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return TenantManagementNgAlainModule;
}());
export { TenantManagementNgAlainModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3RlbmFudC1tYW5hZ2VtZW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUNoRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDO0lBV0ksdUNBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0gsQ0FBQzs7Z0JBYkosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDbkMsT0FBTyxFQUFFO3dCQUNMLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLDhCQUE4QjtxQkFDakM7aUJBQ0o7Ozs7Z0JBWFEsS0FBSzs7SUFnQmIsb0NBQUM7Q0FBQSxBQWRGLElBY0U7U0FKVyw2QkFBNkI7Ozs7OztJQUMxQiw4Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50TW9kdWxlIH0gZnJvbSAnQGZzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSwgQWRkUmVwbGFjZWFibGVDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBUZW5hbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudHMvdGVuYW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluJ1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUZW5hbnRzQ29tcG9uZW50XSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGUsXHJcbiAgICAgICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgICAgIFRlbmFudE1hbmFnZW1lbnRNb2R1bGUsXHJcbiAgICAgICAgRmVhdHVyZU1hbmFnZW1lbnROZ0FsYWluTW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7IGNvbXBvbmVudDogVGVuYW50c0NvbXBvbmVudCwga2V5OiAnVGVuYW50TWFuYWdlbWVudC5UZW5hbnRzQ29tcG9uZW50JyB9KSk7XHJcbiAgICB9ICAgIFxyXG4gfVxyXG4iXX0=