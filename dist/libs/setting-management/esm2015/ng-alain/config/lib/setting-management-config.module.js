import { NgModule } from '@angular/core';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.setting-management/config";
export class SettingManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: SettingManagementNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
SettingManagementNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementNgAlainConfigModule });
SettingManagementNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementNgAlainConfigModule_Factory(t) { return new (t || SettingManagementNgAlainConfigModule)(); }, imports: [[
            SettingManagementConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementNgAlainConfigModule, { imports: [i1.SettingManagementConfigModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingManagementNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SettingManagementConfigModule.forRoot()
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50LWNvbmZpZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NldHRpbmctbWFuYWdlbWVudC9uZy1hbGFpbi9jb25maWcvc3JjL2xpYi9zZXR0aW5nLW1hbmFnZW1lbnQtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU8vRCxNQUFNLE9BQU8sb0NBQW9DO0lBQy9DLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDOzt3RUFOVSxvQ0FBb0M7dUpBQXBDLG9DQUFvQyxrQkFKdEM7WUFDUCw2QkFBNkIsQ0FBQyxPQUFPLEVBQUU7U0FDeEM7d0ZBRVUsb0NBQW9DO2tEQUFwQyxvQ0FBb0M7Y0FMaEQsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCw2QkFBNkIsQ0FBQyxPQUFPLEVBQUU7aUJBQ3hDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHRpbmdNYW5hZ2VtZW50Q29uZmlnTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5zZXR0aW5nLW1hbmFnZW1lbnQvY29uZmlnJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFX1BST1ZJREVSUyB9IGZyb20gJy4vcHJvdmlkZXJzL3JvdXRlLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgU1RZTEVTX1BST1ZJREVSUyB9IGZyb20gJy4vcHJvdmlkZXJzL3N0eWxlcy5wcm92aWRlcic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFNldHRpbmdNYW5hZ2VtZW50Q29uZmlnTW9kdWxlLmZvclJvb3QoKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdNYW5hZ2VtZW50TmdBbGFpbkNvbmZpZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Db25maWdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZXR0aW5nTWFuYWdlbWVudE5nQWxhaW5Db25maWdNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1JPVVRFX1BST1ZJREVSUywgU1RZTEVTX1BST1ZJREVSU10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==