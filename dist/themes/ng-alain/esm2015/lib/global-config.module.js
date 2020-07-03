var GlobalConfigModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@fs/ng-alain/core';
import { DelonMockModule } from '@delon/mock';
import { AlainThemeModule } from '@delon/theme';
import { ALAIN_CONFIG } from '@delon/util';
// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config
import { DelonACLModule } from '@delon/acl';
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
const ɵ0 = alainConfig;
const alainProvides = [{ provide: ALAIN_CONFIG, useValue: ɵ0 }];
// mock
import * as MOCKDATA from '../_mock';
if (true) {
    alainConfig.mock = { data: MOCKDATA };
}
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
const ngZorroConfig = {};
const ɵ1 = ngZorroConfig;
const zorroProvides = [{ provide: NZ_CONFIG, useValue: ɵ1 }];
// #endregion
let GlobalConfigModule = GlobalConfigModule_1 = class GlobalConfigModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
    }
    static forRoot() {
        return {
            ngModule: GlobalConfigModule_1,
            providers: [...alainProvides, ...zorroProvides],
        };
    }
};
GlobalConfigModule = GlobalConfigModule_1 = __decorate([
    NgModule({
        imports: [...alainModules],
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [GlobalConfigModule])
], GlobalConfigModule);
export { GlobalConfigModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWNvbmZpZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vc3JjL2xpYi9nbG9iYWwtY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFlLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RCwyREFBMkQ7QUFDM0QsMEJBQTBCO0FBRTFCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFNUMsTUFBTSxXQUFXLEdBQWdCO0lBQy9CLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM3QixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO0lBQ2hDLEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxrQ0FBa0M7UUFDM0MsUUFBUSxFQUFFLGtDQUFrQztLQUM3QztJQUNELElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRTtDQUN2QyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7V0FDN0MsV0FBVztBQUFyRSxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLElBQWEsRUFBRSxDQUFDLENBQUM7QUFFekUsT0FBTztBQUNQLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLElBQUksSUFBSSxFQUFFO0lBQ1IsV0FBVyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztDQUN2QztBQUVELG9CQUFvQjtBQUNwQjs7Ozs7Ozs7Ozs7R0FXRztBQUNILHdEQUF3RDtBQUN4RCw0RUFBNEU7QUFDNUUsdUJBQXVCO0FBQ3ZCLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLGFBQWE7QUFFYixhQUFhO0FBRWIsYUFBYTtBQUViLDBFQUEwRTtBQUMxRSwwQkFBMEI7QUFFMUIsT0FBTyxFQUFZLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztXQUVvQixhQUFhO0FBQXBFLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsSUFBZSxFQUFFLENBQUMsQ0FBQztBQUV4RSxhQUFhO0FBS2IsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQWtCO0lBQzdCLFlBQW9DLFlBQWdDO1FBQ2xFLG9CQUFvQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLEdBQUcsYUFBYSxDQUFDO1NBQ2hELENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLGtCQUFrQjtJQUg5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztLQUMzQixDQUFDO0lBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWUsa0JBQWtCO0dBRHpELGtCQUFrQixDQVc5QjtTQVhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICdAZnMvbmctYWxhaW4vY29yZSc7XHJcbmltcG9ydCB7IERlbG9uTW9ja01vZHVsZSB9IGZyb20gJ0BkZWxvbi9tb2NrJztcclxuaW1wb3J0IHsgQWxhaW5UaGVtZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBTEFJTl9DT05GSUcgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG4vLyBQbGVhc2UgcmVmZXIgdG86IGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xyXG4vLyAjcmVnaW9uIE5HLUFMQUlOIENvbmZpZ1xyXG5cclxuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcclxuXHJcbmNvbnN0IGFsYWluQ29uZmlnOiBBbGFpbkNvbmZpZyA9IHtcclxuICBzdDogeyBtb2RhbDogeyBzaXplOiAnbGcnIH0gfSxcclxuICBwYWdlSGVhZGVyOiB7IGhvbWVJMThuOiAnaG9tZScgfSxcclxuICBsb2RvcDoge1xyXG4gICAgbGljZW5zZTogYEE1OUIwOTlBNTg2QjM4NTFFMEYwRDdGREJGMzdCNjAzYCxcclxuICAgIGxpY2Vuc2VBOiBgQzk0Q0VFMjc2REIyMTg3QUU2QjY1RDU2QjNGQzI4NDhgLFxyXG4gIH0sXHJcbiAgYXV0aDogeyBsb2dpbl91cmw6ICcvcGFzc3BvcnQvbG9naW4nIH0sXHJcbn07XHJcblxyXG5jb25zdCBhbGFpbk1vZHVsZXMgPSBbQWxhaW5UaGVtZU1vZHVsZS5mb3JSb290KCksIERlbG9uQUNMTW9kdWxlLmZvclJvb3QoKSwgRGVsb25Nb2NrTW9kdWxlLmZvclJvb3QoKV07XHJcbmNvbnN0IGFsYWluUHJvdmlkZXMgPSBbeyBwcm92aWRlOiBBTEFJTl9DT05GSUcsIHVzZVZhbHVlOiBhbGFpbkNvbmZpZyB9XTtcclxuXHJcbi8vIG1vY2tcclxuaW1wb3J0ICogYXMgTU9DS0RBVEEgZnJvbSAnLi4vX21vY2snO1xyXG5pZiAodHJ1ZSkge1xyXG4gIGFsYWluQ29uZmlnLm1vY2sgPSB7IGRhdGE6IE1PQ0tEQVRBIH07XHJcbn1cclxuXHJcbi8vICNyZWdpb24gcmV1c2UtdGFiXHJcbi8qKlxyXG4gKiDoi6XpnIDopoFb6Lev55Sx5aSN55SoXShodHRwczovL25nLWFsYWluLmNvbS9jb21wb25lbnRzL3JldXNlLXRhYinpnIDopoHvvJpcclxuICogMeOAgeWcqCBgc2hhcmVkLWRlbG9uLm1vZHVsZS50c2Ag5a+85YWlIGBSZXVzZVRhYk1vZHVsZWAg5qih5Z2XXHJcbiAqIDLjgIHms6jlhowgYFJvdXRlUmV1c2VTdHJhdGVneWBcclxuICogM+OAgeWcqCBgc3JjL2FwcC9sYXlvdXQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5odG1sYCDkv67mlLnvvJpcclxuICogIGBgYGh0bWxcclxuICogIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxyXG4gKiAgICA8cmV1c2UtdGFiICNyZXVzZVRhYj48L3JldXNlLXRhYj5cclxuICogICAgPHJvdXRlci1vdXRsZXQgKGFjdGl2YXRlKT1cInJldXNlVGFiLmFjdGl2YXRlKCRldmVudClcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAqICA8L3NlY3Rpb24+XHJcbiAqICBgYGBcclxuICovXHJcbi8vIGltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IFJldXNlVGFiU2VydmljZSwgUmV1c2VUYWJTdHJhdGVneSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcclxuLy8gYWxhaW5Qcm92aWRlcy5wdXNoKHtcclxuLy8gICBwcm92aWRlOiBSb3V0ZVJldXNlU3RyYXRlZ3ksXHJcbi8vICAgdXNlQ2xhc3M6IFJldXNlVGFiU3RyYXRlZ3ksXHJcbi8vICAgZGVwczogW1JldXNlVGFiU2VydmljZV0sXHJcbi8vIH0gYXMgYW55KTtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vIFBsZWFzZSByZWZlciB0bzogaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2RvY3MvZ2xvYmFsLWNvbmZpZy9lbiNob3ctdG8tdXNlXHJcbi8vICNyZWdpb24gTkctWk9SUk8gQ29uZmlnXHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZywgTlpfQ09ORklHIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcblxyXG5jb25zdCBuZ1pvcnJvQ29uZmlnOiBOekNvbmZpZyA9IHt9O1xyXG5cclxuY29uc3Qgem9ycm9Qcm92aWRlcyA9IFt7IHByb3ZpZGU6IE5aX0NPTkZJRywgdXNlVmFsdWU6IG5nWm9ycm9Db25maWcgfV07XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsuLi5hbGFpbk1vZHVsZXNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsQ29uZmlnTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEdsb2JhbENvbmZpZ01vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnR2xvYmFsQ29uZmlnTW9kdWxlJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdsb2JhbENvbmZpZ01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdsb2JhbENvbmZpZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbLi4uYWxhaW5Qcm92aWRlcywgLi4uem9ycm9Qcm92aWRlc10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=