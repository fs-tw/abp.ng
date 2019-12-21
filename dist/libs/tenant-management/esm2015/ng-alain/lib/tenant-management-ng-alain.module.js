/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantManagementNgAlainRoutingModule } from './tenant-management-ng-alain-routing.module';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
export class TenantManagementNgAlainModule {
}
TenantManagementNgAlainModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TenantsComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    TenantManagementNgAlainRoutingModule,
                    TenantManagementModule,
                    FeatureManagementNgAlainModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL3RlbmFudC1tYW5hZ2VtZW50L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQVloRixNQUFNLE9BQU8sNkJBQTZCOzs7WUFWekMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLG9DQUFvQztvQkFDcEMsc0JBQXNCO29CQUN0Qiw4QkFBOEI7aUJBQ2pDO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50TW9kdWxlIH0gZnJvbSAnQGZzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnROZ0FsYWluUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUZW5hbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudHMvdGVuYW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluJ1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGUsXHJcbiAgICAgICAgTmdBbGFpbkJhc2ljTW9kdWxlLFxyXG4gICAgICAgIFRlbmFudE1hbmFnZW1lbnROZ0FsYWluUm91dGluZ01vZHVsZSxcclxuICAgICAgICBUZW5hbnRNYW5hZ2VtZW50TW9kdWxlLFxyXG4gICAgICAgIEZlYXR1cmVNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgeyB9XHJcbiJdfQ==