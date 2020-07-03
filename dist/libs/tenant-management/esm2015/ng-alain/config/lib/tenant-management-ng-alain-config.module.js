import { NgModule } from '@angular/core';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.tenant-management/config";
export class TenantManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: TenantManagementNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
TenantManagementNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementNgAlainConfigModule });
TenantManagementNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementNgAlainConfigModule_Factory(t) { return new (t || TenantManagementNgAlainConfigModule)(); }, imports: [[
            TenantManagementConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementNgAlainConfigModule, { imports: [i1.TenantManagementConfigModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TenantManagementNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TenantManagementConfigModule.forRoot()
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4tY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdGVuYW50LW1hbmFnZW1lbnQvbmctYWxhaW4vY29uZmlnL3NyYy9saWIvdGVuYW50LW1hbmFnZW1lbnQtbmctYWxhaW4tY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQTtBQUU5RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU8vRCxNQUFNLE9BQU8sbUNBQW1DO0lBQzlDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQ0FBbUM7WUFDN0MsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFDLGdCQUFnQixDQUFDO1NBQzlDLENBQUM7SUFDSixDQUFDOzt1RUFOVSxtQ0FBbUM7cUpBQW5DLG1DQUFtQyxrQkFKckM7WUFDUCw0QkFBNEIsQ0FBQyxPQUFPLEVBQUU7U0FDdkM7d0ZBRVUsbUNBQW1DO2tEQUFuQyxtQ0FBbUM7Y0FML0MsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCw0QkFBNEIsQ0FBQyxPQUFPLEVBQUU7aUJBQ3ZDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRDb25maWdNb2R1bGV9IGZyb20gJ0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQvY29uZmlnJ1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVfUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvcm91dGUucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBTVFlMRVNfUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvc3R5bGVzLnByb3ZpZGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgVGVuYW50TWFuYWdlbWVudENvbmZpZ01vZHVsZS5mb3JSb290KClcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbkNvbmZpZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZW5hbnRNYW5hZ2VtZW50TmdBbGFpbkNvbmZpZ01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRlbmFudE1hbmFnZW1lbnROZ0FsYWluQ29uZmlnTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtST1VURV9QUk9WSURFUlMsU1RZTEVTX1BST1ZJREVSU10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=