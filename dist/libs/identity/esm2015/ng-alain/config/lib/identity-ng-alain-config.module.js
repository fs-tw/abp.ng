import { NgModule } from '@angular/core';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.identity/config";
export class IdentityNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: IdentityNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
IdentityNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityNgAlainConfigModule });
IdentityNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityNgAlainConfigModule_Factory(t) { return new (t || IdentityNgAlainConfigModule)(); }, imports: [[
            IdentityConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityNgAlainConfigModule, { imports: [i1.IdentityConfigModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IdentityNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IdentityConfigModule.forRoot()
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4tY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaWRlbnRpdHkvbmctYWxhaW4vY29uZmlnL3NyYy9saWIvaWRlbnRpdHktbmctYWxhaW4tY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF3QyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU8vRCxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDOzsrREFOVSwyQkFBMkI7cUlBQTNCLDJCQUEyQixrQkFKN0I7WUFDUCxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7U0FDL0I7d0ZBRVUsMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FMdkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7aUJBQy9CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElkZW50aXR5Q29uZmlnTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5pZGVudGl0eS9jb25maWcnO1xyXG5pbXBvcnQgeyBST1VURV9QUk9WSURFUlMgfSBmcm9tICcuL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IFNUWUxFU19QUk9WSURFUlMgfSBmcm9tICcuL3Byb3ZpZGVycy9zdHlsZXMucHJvdmlkZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBJZGVudGl0eUNvbmZpZ01vZHVsZS5mb3JSb290KClcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Db25maWdNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWRlbnRpdHlOZ0FsYWluQ29uZmlnTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogSWRlbnRpdHlOZ0FsYWluQ29uZmlnTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtST1VURV9QUk9WSURFUlMsIFNUWUxFU19QUk9WSURFUlNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==