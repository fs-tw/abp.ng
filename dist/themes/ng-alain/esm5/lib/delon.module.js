/**
 * @fileoverview added by tsickle
 * Generated from: lib/delon.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://ng-alain.com/docs/module
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './core/module-import-guard';
import { AlainThemeModule } from '@delon/theme';
import { DelonACLModule } from '@delon/acl';
// #region mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../_mock';
var ɵ0 = {
    "PROFILES": MOCKDATA.PROFILES,
    "RULES": MOCKDATA.RULES,
    "APIS": MOCKDATA.APIS,
    "CHARTS": MOCKDATA.CHARTS,
    "POIS": MOCKDATA.POIS,
    "USERS": MOCKDATA.USERS,
    "GEOS": MOCKDATA.GEOS
};
/** @type {?} */
var MOCK_MODULES = true ? [DelonMockModule.forRoot({
        data: ɵ0
    })] : [];
/** @type {?} */
var REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions
import { PageHeaderConfig } from '@delon/abc';
/**
 * @return {?}
 */
export function fnPageHeaderConfig() {
    return tslib_1.__assign({}, new PageHeaderConfig(), { homeI18n: 'home' });
}
import { DelonAuthConfig } from '@delon/auth';
/**
 * @return {?}
 */
export function fnDelonAuthConfig() {
    return tslib_1.__assign({}, new DelonAuthConfig(), { login_url: '/passport/login' });
}
// tslint:disable-next-line: no-duplicate-imports
import { STConfig } from '@delon/abc';
/**
 * @return {?}
 */
export function fnSTConfig() {
    return tslib_1.__assign({}, new STConfig(), { modal: { size: 'lg' } });
}
/** @type {?} */
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: STConfig, useFactory: fnSTConfig },
    { provide: PageHeaderConfig, useFactory: fnPageHeaderConfig },
    { provide: DelonAuthConfig, useFactory: fnDelonAuthConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DelonModule');
    }
    /**
     * @return {?}
     */
    DelonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonModule,
            providers: tslib_1.__spread(REUSETAB_PROVIDES, GLOBAL_CONFIG_PROVIDES),
        };
    };
    DelonModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([AlainThemeModule.forRoot(), DelonACLModule.forRoot()], MOCK_MODULES),
                },] }
    ];
    /** @nocollapse */
    DelonModule.ctorParameters = function () { return [
        { type: DelonModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return DelonModule;
}());
export { DelonModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2RlbG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFHNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztTQUc3QjtJQUNKLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUTtJQUM3QixPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUs7SUFDdkIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJO0lBQ3JCLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTTtJQUN6QixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUk7SUFDckIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLO0lBQ3ZCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTtDQUN0Qjs7SUFURyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxJQVFIO0tBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O0lBaUJGLGlCQUFpQixHQUFHO0FBQ3hCLElBQUk7QUFDSixpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QixLQUFLO0NBQ047OztBQUtELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUM5QyxNQUFNLFVBQVUsa0JBQWtCO0lBQ2hDLDRCQUNLLElBQUksZ0JBQWdCLEVBQUUsSUFDekIsUUFBUSxFQUFFLE1BQU0sSUFDaEI7QUFDSixDQUFDO0FBRUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUM5QyxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLDRCQUNLLElBQUksZUFBZSxFQUFFLElBQ3hCLFNBQVMsRUFBRSxpQkFBaUIsSUFDNUI7QUFDSixDQUFDOztBQUdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFDdEMsTUFBTSxVQUFVLFVBQVU7SUFDeEIsNEJBQ0ssSUFBSSxRQUFRLEVBQUUsSUFDakIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUNyQjtBQUNKLENBQUM7O0lBRUssc0JBQXNCLEdBQUc7SUFDN0IsdURBQXVEO0lBQ3ZELEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0lBQzdDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRTtJQUM3RCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFO0NBQzVEOztBQUlEO0lBSUUscUJBQW9DLFlBQXlCO1FBQzNELG9CQUFvQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRU0sbUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsbUJBQU0saUJBQWlCLEVBQUssc0JBQXNCLENBQUM7U0FDN0QsQ0FBQztJQUNKLENBQUM7O2dCQWJGLFFBQVEsU0FBQztvQkFDUixPQUFPLG9CQUFHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBSyxZQUFZLENBQUM7aUJBQ2pGOzs7O2dCQUVtRCxXQUFXLHVCQUFoRCxRQUFRLFlBQUksUUFBUTs7SUFVbkMsa0JBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOi/m+S4gOatpeWvueWfuuehgOaooeWdl+eahOWvvOWFpeaPkOeCvFxyXG4gKiDmnInlhbPmqKHlnZfms6jlhozmjIflr7zljp/liJnor7flj4LogIPvvJpodHRwczovL25nLWFsYWluLmNvbS9kb2NzL21vZHVsZVxyXG4gKi9cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuXHJcbmltcG9ydCB7IEFsYWluVGhlbWVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5cclxuLy8gI3JlZ2lvbiBtb2NrXHJcbmltcG9ydCB7IERlbG9uTW9ja01vZHVsZSB9IGZyb20gJ0BkZWxvbi9tb2NrJztcclxuaW1wb3J0ICogYXMgTU9DS0RBVEEgZnJvbSAnLi4vX21vY2snO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmNvbnN0IE1PQ0tfTU9EVUxFUyA9IHRydWUgPyBbRGVsb25Nb2NrTW9kdWxlLmZvclJvb3Qoe1xyXG4gIGRhdGE6IHtcclxuICAgIFwiUFJPRklMRVNcIjogTU9DS0RBVEEuUFJPRklMRVMsXHJcbiAgICBcIlJVTEVTXCI6IE1PQ0tEQVRBLlJVTEVTLFxyXG4gICAgXCJBUElTXCI6IE1PQ0tEQVRBLkFQSVMsXHJcbiAgICBcIkNIQVJUU1wiOiBNT0NLREFUQS5DSEFSVFMsXHJcbiAgICBcIlBPSVNcIjogTU9DS0RBVEEuUE9JUyxcclxuICAgIFwiVVNFUlNcIjogTU9DS0RBVEEuVVNFUlMsXHJcbiAgICBcIkdFT1NcIjogTU9DS0RBVEEuR0VPU1xyXG4gIH1cclxufSldIDogW107XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gcmV1c2UtdGFiXHJcbi8qKlxyXG4gKiDoi6XpnIDopoFb6Lev55Sx5aSN55SoXShodHRwczovL25nLWFsYWluLmNvbS9jb21wb25lbnRzL3JldXNlLXRhYinpnIDopoHvvJpcclxuICogMeOAgeWinuWKoCBgUkVVU0VUQUJfUFJPVklERVNgXHJcbiAqIDLjgIHlnKggYHNyYy9hcHAvbGF5b3V0L2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuaHRtbGAg5L+u5pS577yaXHJcbiAqICBgYGBodG1sXHJcbiAqICA8c2VjdGlvbiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2NvbnRlbnRcIj5cclxuICogICAgPHJldXNlLXRhYj48L3JldXNlLXRhYj5cclxuICogICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gKiAgPC9zZWN0aW9uPlxyXG4gKiAgYGBgXHJcbiAqL1xyXG5pbXBvcnQgeyBSb3V0ZVJldXNlU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UsIFJldXNlVGFiU3RyYXRlZ3kgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XHJcbmNvbnN0IFJFVVNFVEFCX1BST1ZJREVTID0gW1xyXG4gIC8vIHtcclxuICAvLyAgIHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSxcclxuICAvLyAgIHVzZUNsYXNzOiBSZXVzZVRhYlN0cmF0ZWd5LFxyXG4gIC8vICAgZGVwczogW1JldXNlVGFiU2VydmljZV0sXHJcbiAgLy8gfSxcclxuXTtcclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBnbG9iYWwgY29uZmlnIGZ1bmN0aW9uc1xyXG5cclxuaW1wb3J0IHsgUGFnZUhlYWRlckNvbmZpZyB9IGZyb20gJ0BkZWxvbi9hYmMnO1xyXG5leHBvcnQgZnVuY3Rpb24gZm5QYWdlSGVhZGVyQ29uZmlnKCk6IFBhZ2VIZWFkZXJDb25maWcge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5uZXcgUGFnZUhlYWRlckNvbmZpZygpLFxyXG4gICAgaG9tZUkxOG46ICdob21lJyxcclxuICB9O1xyXG59XHJcblxyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICdAZGVsb24vYXV0aCc7XHJcbmV4cG9ydCBmdW5jdGlvbiBmbkRlbG9uQXV0aENvbmZpZygpOiBEZWxvbkF1dGhDb25maWcge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5uZXcgRGVsb25BdXRoQ29uZmlnKCksXHJcbiAgICBsb2dpbl91cmw6ICcvcGFzc3BvcnQvbG9naW4nLFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcclxuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICdAZGVsb24vYWJjJztcclxuZXhwb3J0IGZ1bmN0aW9uIGZuU1RDb25maWcoKTogU1RDb25maWcge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5uZXcgU1RDb25maWcoKSxcclxuICAgIG1vZGFsOiB7IHNpemU6ICdsZycgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBHTE9CQUxfQ09ORklHX1BST1ZJREVTID0gW1xyXG4gIC8vIFRJUFPvvJpAZGVsb24vYWJjIOacieWkp+mHj+eahOWFqOWxgOmFjee9ruS/oeaBr++8jOS+i+Wmguiuvue9ruaJgOaciSBgc3RgIOeahOmhteeggem7mOiupOS4uiBgMjBgIOihjFxyXG4gIHsgcHJvdmlkZTogU1RDb25maWcsIHVzZUZhY3Rvcnk6IGZuU1RDb25maWcgfSxcclxuICB7IHByb3ZpZGU6IFBhZ2VIZWFkZXJDb25maWcsIHVzZUZhY3Rvcnk6IGZuUGFnZUhlYWRlckNvbmZpZyB9LFxyXG4gIHsgcHJvdmlkZTogRGVsb25BdXRoQ29uZmlnLCB1c2VGYWN0b3J5OiBmbkRlbG9uQXV0aENvbmZpZyB9LFxyXG5dO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQWxhaW5UaGVtZU1vZHVsZS5mb3JSb290KCksIERlbG9uQUNMTW9kdWxlLmZvclJvb3QoKSwgLi4uTU9DS19NT0RVTEVTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERlbG9uTW9kdWxlKSB7XHJcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdEZWxvbk1vZHVsZScpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogWy4uLlJFVVNFVEFCX1BST1ZJREVTLCAuLi5HTE9CQUxfQ09ORklHX1BST1ZJREVTXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==