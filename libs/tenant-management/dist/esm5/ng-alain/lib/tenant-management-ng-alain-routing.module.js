/**
 * @fileoverview added by tsickle
 * Generated from: lib/tenant-management-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
var ɵ0 = { requiredPolicy: 'AbpTenantManagement.Tenants' };
/** @type {?} */
var routes = [
    { path: '', redirectTo: 'tenants', pathMatch: 'full' },
    {
        path: 'tenants',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: ɵ0,
        children: [{ path: '', component: TenantsComponent }],
    },
];
var TenantManagementNgAlainRoutingModule = /** @class */ (function () {
    function TenantManagementNgAlainRoutingModule() {
    }
    TenantManagementNgAlainRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return TenantManagementNgAlainRoutingModule;
}());
export { TenantManagementNgAlainRoutingModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvdGVuYW50LW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvdGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQTBCLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7U0FRNUQsRUFBRSxjQUFjLEVBQUUsNkJBQTZCLEVBQUU7O0lBTnpELE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3REO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7UUFDekMsSUFBSSxJQUFtRDtRQUN2RCxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLENBQUM7S0FDeEQ7Q0FDSjtBQUVEO0lBQUE7SUFJb0QsQ0FBQzs7Z0JBSnBELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCOztJQUNtRCwyQ0FBQztDQUFBLEFBSnJELElBSXFEO1NBQXhDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCwgQXV0aEd1YXJkLCBQZXJtaXNzaW9uR3VhcmQgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ3RlbmFudHMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZW5hbnRzJyxcclxuICAgICAgICBjb21wb25lbnQ6IExheW91dERlZmF1bHRDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIFBlcm1pc3Npb25HdWFyZF0sXHJcbiAgICAgICAgZGF0YTogeyByZXF1aXJlZFBvbGljeTogJ0FicFRlbmFudE1hbmFnZW1lbnQuVGVuYW50cycgfSxcclxuICAgICAgICBjaGlsZHJlbjogW3sgcGF0aDogJycsIGNvbXBvbmVudDogVGVuYW50c0NvbXBvbmVudCB9XSxcclxuICAgIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudE5nQWxhaW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=