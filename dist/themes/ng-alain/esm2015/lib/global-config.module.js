import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@fs/ng-alain/core';
import { DelonMockModule } from '@delon/mock';
import { AlainThemeModule } from '@delon/theme';
import { ALAIN_CONFIG } from '@delon/util';
// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config
import { DelonACLModule } from '@delon/acl';
// mock
import * as MOCKDATA from '../_mock';
// #region reuse-tab
/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、在 `shared-delon.module.ts` 导入 `ReuseTabModule` 模块
 * 2、注册 `RouteReuseStrategy`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@delon/abc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);
// #endregion
// #endregion
// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@delon/acl";
import * as i3 from "@delon/mock";
const alainConfig = {
    st: { modal: { size: 'lg' } },
    pageHeader: { homeI18n: 'home' },
    lodop: {
        license: `A59B099A586B3851E0F0D7FDBF37B603`,
        licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
    },
    auth: { login_url: '/passport/login' },
};
const alainModules = [AlainThemeModule.forRoot(), DelonACLModule.forRoot(), DelonMockModule.forRoot()];
const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];
if (true) {
    alainConfig.mock = { data: MOCKDATA };
}
const ngZorroConfig = {};
const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];
// #endregion
export class GlobalConfigModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
    }
    static forRoot() {
        return {
            ngModule: GlobalConfigModule,
            providers: [...alainProvides, ...zorroProvides],
        };
    }
}
GlobalConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: GlobalConfigModule });
GlobalConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GlobalConfigModule_Factory(t) { return new (t || GlobalConfigModule)(i0.ɵɵinject(GlobalConfigModule, 12)); }, imports: [[...alainModules]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalConfigModule, { imports: [i1.AlainThemeModule, i2.DelonACLModule, i3.DelonMockModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalConfigModule, [{
        type: NgModule,
        args: [{
                imports: [...alainModules],
            }]
    }], function () { return [{ type: GlobalConfigModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNvbmZpZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vc3JjL2xpYi9nbG9iYWwtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEQsMkRBQTJEO0FBQzNELDBCQUEwQjtBQUUxQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBZTVDLE9BQU87QUFDUCxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUtyQyxvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCx3REFBd0Q7QUFDeEQsNEVBQTRFO0FBQzVFLHVCQUF1QjtBQUN2QixpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixhQUFhO0FBRWIsYUFBYTtBQUViLGFBQWE7QUFFYiwwRUFBMEU7QUFDMUUsMEJBQTBCO0FBRTFCLE9BQU8sRUFBWSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUEvQ2hFLE1BQU0sV0FBVyxHQUFnQjtJQUMvQixFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDN0IsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUNoQyxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLFFBQVEsRUFBRSxrQ0FBa0M7S0FDN0M7SUFDRCxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUU7Q0FDdkMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZHLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBSXpFLElBQUksSUFBSSxFQUFFO0lBQ1IsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUN2QztBQWdDRCxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7QUFFbkMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFFeEUsYUFBYTtBQUtiLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0MsWUFBZ0M7UUFDbEUsb0JBQW9CLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxhQUFhLENBQUM7U0FDaEQsQ0FBQztJQUNKLENBQUM7O3NEQVZVLGtCQUFrQjttSEFBbEIsa0JBQWtCLGNBQ3FCLGtCQUFrQixxQkFIM0QsQ0FBQyxHQUFHLFlBQVksQ0FBQzt3RkFFZixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUM7YUFDM0I7c0NBRW1ELGtCQUFrQjtzQkFBdkQsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbmltcG9ydCB7IERlbG9uTW9ja01vZHVsZSB9IGZyb20gJ0BkZWxvbi9tb2NrJztcclxuaW1wb3J0IHsgQWxhaW5UaGVtZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBTEFJTl9DT05GSUcgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG4vLyBQbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xyXG4vLyAjcmVnaW9uIE5HLUFMQUlOIENvbmZpZ1xyXG5cclxuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcclxuXHJcbmNvbnN0IGFsYWluQ29uZmlnOiBBbGFpbkNvbmZpZyA9IHtcclxuICBzdDogeyBtb2RhbDogeyBzaXplOiAnbGcnIH0gfSxcclxuICBwYWdlSGVhZGVyOiB7IGhvbWVJMThuOiAnaG9tZScgfSxcclxuICBsb2RvcDoge1xyXG4gICAgbGljZW5zZTogYEE1OUIwOTlBNTg2QjM4NTFFMEYwRDdGREJGMzdCNjAzYCxcclxuICAgIGxpY2Vuc2VBOiBgQzk0Q0VFMjc2REIyMTg3QUU2QjY1RDU2QjNGQzI4NDhgLFxyXG4gIH0sXHJcbiAgYXV0aDogeyBsb2dpbl91cmw6ICcvcGFzc3BvcnQvbG9naW4nIH0sXHJcbn07XHJcblxyXG5jb25zdCBhbGFpbk1vZHVsZXMgPSBbQWxhaW5UaGVtZU1vZHVsZS5mb3JSb290KCksIERlbG9uQUNMTW9kdWxlLmZvclJvb3QoKSwgRGVsb25Nb2NrTW9kdWxlLmZvclJvb3QoKV07XHJcbmNvbnN0IGFsYWluUHJvdmlkZXMgPSBbeyBwcm92aWRlOiBBTEFJTl9DT05GSUcsIHVzZVZhbHVlOiBhbGFpbkNvbmZpZyB9XTtcclxuXHJcbi8vIG1vY2tcclxuaW1wb3J0ICogYXMgTU9DS0RBVEEgZnJvbSAnLi4vX21vY2snO1xyXG5pZiAodHJ1ZSkge1xyXG4gIGFsYWluQ29uZmlnLm1vY2sgPSB7IGRhdGE6IE1PQ0tEQVRBIH07XHJcbn1cclxuXHJcbi8vICNyZWdpb24gcmV1c2UtdGFiXHJcbi8qKlxyXG4gKiDoi6XpnIDopoFb6Lev55Sx5aSN55SoXShodHRwczovL25nLWFsYWluLmNvbS9jb21wb25lbnRzL3JldXNlLXRhYinpnIDopoHvvJpcclxuICogMeOAgeWcqCBgc2hhcmVkLWRlbG9uLm1vZHVsZS50c2Ag5a+85YWlIGBSZXVzZVRhYk1vZHVsZWAg5qih5Z2XXHJcbiAqIDLjgIHms6jlhowgYFJvdXRlUmV1c2VTdHJhdGVneWBcclxuICogM+OAgeWcqCBgc3JjL2FwcC9sYXlvdXQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5odG1sYCDkv67mlLnvvJpcclxuICogIGBgYGh0bWxcclxuICogIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxyXG4gKiAgICA8cmV1c2UtdGFiICNyZXVzZVRhYj48L3JldXNlLXRhYj5cclxuICogICAgPHJvdXRlci1vdXRsZXQgKGFjdGl2YXRlKT1cInJldXNlVGFiLmFjdGl2YXRlKCRldmVudClcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAqICA8L3NlY3Rpb24+XHJcbiAqICBgYGBcclxuICovXHJcbi8vIGltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IFJldXNlVGFiU2VydmljZSwgUmV1c2VUYWJTdHJhdGVneSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcclxuLy8gYWxhaW5Qcm92aWRlcy5wdXNoKHtcclxuLy8gICBwcm92aWRlOiBSb3V0ZVJldXNlU3RyYXRlZ3ksXHJcbi8vICAgdXNlQ2xhc3M6IFJldXNlVGFiU3RyYXRlZ3ksXHJcbi8vICAgZGVwczogW1JldXNlVGFiU2VydmljZV0sXHJcbi8vIH0gYXMgYW55KTtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vIFBsZWFzZSByZWZlciB0bzogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2RvY3MvZ2xvYmFsLWNvbmZpZy9lbiNob3ctdG8tdXNlXHJcbi8vICNyZWdpb24gTkctWk9SUk8gQ29uZmlnXHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZywgTlpfQ09ORklHIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcblxyXG5jb25zdCBuZ1pvcnJvQ29uZmlnOiBOekNvbmZpZyA9IHt9O1xyXG5cclxuY29uc3Qgem9ycm9Qcm92aWRlcyA9IFt7IHByb3ZpZGU6IE5aX0NPTkZJRywgdXNlVmFsdWU6IG5nWm9ycm9Db25maWcgfV07XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsuLi5hbGFpbk1vZHVsZXNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsQ29uZmlnTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEdsb2JhbENvbmZpZ01vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnR2xvYmFsQ29uZmlnTW9kdWxlJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdsb2JhbENvbmZpZ01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdsb2JhbENvbmZpZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbLi4uYWxhaW5Qcm92aWRlcywgLi4uem9ycm9Qcm92aWRlc10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=