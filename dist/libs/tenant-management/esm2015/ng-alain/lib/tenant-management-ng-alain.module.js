import { TenantManagementWrapModule } from '@fs/tenant-management/wrap';
import { LazyModuleFactory } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import * as i0 from "@angular/core";
export class TenantManagementNgAlainModule {
    static forChild() {
        return {
            ngModule: TenantManagementNgAlainModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(TenantManagementNgAlainModule.forChild());
    }
}
TenantManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementNgAlainModule });
TenantManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementNgAlainModule_Factory(t) { return new (t || TenantManagementNgAlainModule)(); }, imports: [[
            NgAlainBasicModule,
            FeatureManagementNgAlainModule,
            TenantManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementNgAlainModule, { declarations: [TenantsComponent], imports: [NgAlainBasicModule,
        FeatureManagementNgAlainModule,
        TenantManagementWrapModule], exports: [TenantsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TenantManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [TenantsComponent],
                entryComponents: [TenantsComponent],
                exports: [TenantsComponent],
                imports: [
                    NgAlainBasicModule,
                    FeatureManagementNgAlainModule,
                    TenantManagementWrapModule
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90ZW5hbnQtbWFuYWdlbWVudC9uZy1hbGFpbi9zcmMvbGliL3RlbmFudC1tYW5hZ2VtZW50LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RSxPQUFPLEVBQTJCLGlCQUFpQixFQUFjLE1BQU0sY0FBYyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQWdFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWFqRixNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLE1BQU0sQ0FBQyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxJQUFJLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7aUVBVlUsNkJBQTZCO3lJQUE3Qiw2QkFBNkIsa0JBTi9CO1lBQ1Asa0JBQWtCO1lBQ2xCLDhCQUE4QjtZQUM5QiwwQkFBMEI7U0FDM0I7d0ZBRVUsNkJBQTZCLG1CQVR6QixnQkFBZ0IsYUFJN0Isa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QiwwQkFBMEIsYUFKbEIsZ0JBQWdCO2tEQU9mLDZCQUE2QjtjQVZ6QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsOEJBQThCO29CQUM5QiwwQkFBMEI7aUJBQzNCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50V3JhcE1vZHVsZSB9IGZyb20gJ0Bmcy90ZW5hbnQtbWFuYWdlbWVudC93cmFwJztcclxuaW1wb3J0IHsgQWRkUmVwbGFjZWFibGVDb21wb25lbnQsIExhenlNb2R1bGVGYWN0b3J5LCBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0FsYWluQmFzaWNNb2R1bGUgfSBmcm9tICdAZnMvbmctYWxhaW4vYmFzaWMnO1xyXG5pbXBvcnQgeyBUZW5hbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudHMvdGVuYW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUgfSBmcm9tICdAZnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RlbmFudHNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUZW5hbnRzQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICBGZWF0dXJlTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgICBUZW5hbnRNYW5hZ2VtZW50V3JhcE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRlbmFudE1hbmFnZW1lbnROZ0FsYWluTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JMYXp5KCk6IE5nTW9kdWxlRmFjdG9yeTxUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbk1vZHVsZS5mb3JDaGlsZCgpKTtcclxuICB9XHJcbn1cclxuIl19