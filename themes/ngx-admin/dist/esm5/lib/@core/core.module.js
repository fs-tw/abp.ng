/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService } from './utils/analytics.service';
import { LayoutService } from './utils/layout.service';
import { PlayerService } from './utils/player.service';
import { StateService } from './utils/state.service';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-table';
import { UserActivityData } from './data/user-activity';
import { OrdersChartData } from './data/orders-chart';
import { ProfitChartData } from './data/profit-chart';
import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
import { CountryOrderData } from './data/country-order';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { VisitorsAnalyticsData } from './data/visitors-analytics';
import { SecurityCamerasData } from './data/security-cameras';
import { UserService } from './mock/users.service';
import { ElectricityService } from './mock/electricity.service';
import { SmartTableService } from './mock/smart-table.service';
import { UserActivityService } from './mock/user-activity.service';
import { OrdersChartService } from './mock/orders-chart.service';
import { ProfitChartService } from './mock/profit-chart.service';
import { TrafficListService } from './mock/traffic-list.service';
import { EarningService } from './mock/earning.service';
import { OrdersProfitChartService } from './mock/orders-profit-chart.service';
import { TrafficBarService } from './mock/traffic-bar.service';
import { ProfitBarAnimationChartService } from './mock/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './mock/temperature-humidity.service';
import { SolarService } from './mock/solar.service';
import { TrafficChartService } from './mock/traffic-chart.service';
import { StatsBarService } from './mock/stats-bar.service';
import { CountryOrderService } from './mock/country-order.service';
import { StatsProgressBarService } from './mock/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './mock/visitors-analytics.service';
import { SecurityCamerasService } from './mock/security-cameras.service';
import { MockDataModule } from './mock/mock-data.module';
/** @type {?} */
var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
/** @type {?} */
var DATA_SERVICES = [
    { provide: UserData, useClass: UserService },
    { provide: ElectricityData, useClass: ElectricityService },
    { provide: SmartTableData, useClass: SmartTableService },
    { provide: UserActivityData, useClass: UserActivityService },
    { provide: OrdersChartData, useClass: OrdersChartService },
    { provide: ProfitChartData, useClass: ProfitChartService },
    { provide: TrafficListData, useClass: TrafficListService },
    { provide: EarningData, useClass: EarningService },
    { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
    { provide: TrafficBarData, useClass: TrafficBarService },
    { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
    { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
    { provide: SolarData, useClass: SolarService },
    { provide: TrafficChartData, useClass: TrafficChartService },
    { provide: StatsBarData, useClass: StatsBarService },
    { provide: CountryOrderData, useClass: CountryOrderService },
    { provide: StatsProgressBarData, useClass: StatsProgressBarService },
    { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
    { provide: SecurityCamerasData, useClass: SecurityCamerasService },
];
var NbSimpleRoleProvider = /** @class */ (function (_super) {
    tslib_1.__extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    NbSimpleRoleProvider.prototype.getRole = /**
     * @return {?}
     */
    function () {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    };
    return NbSimpleRoleProvider;
}(NbRoleProvider));
export { NbSimpleRoleProvider };
/** @type {?} */
export var NB_CORE_PROVIDERS = tslib_1.__spread(MockDataModule.forRoot().providers, DATA_SERVICES, NbAuthModule.forRoot({
    strategies: [
        NbDummyAuthStrategy.setup({
            name: 'email',
            delay: 3000,
        }),
    ],
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    StateService,
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    /**
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: CoreModule,
            providers: tslib_1.__spread(NB_CORE_PROVIDERS),
        }));
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        NbAuthModule,
                    ],
                    declarations: [],
                },] }
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFl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RU0sa0JBQU87OztJQUFkO1FBQ0UsT0FBTyxtQkFBcUI7WUFDMUIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxtQkFDSixpQkFBaUIsQ0FDckI7U0FDRixFQUFBLENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxFQUFFO2lCQUNqQjs7OztnQkFFbUQsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVE7O0lBWW5DLGlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FiWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOYkF1dGhNb2R1bGUsIE5iRHVtbXlBdXRoU3RyYXRlZ3kgfSBmcm9tICdAbmVidWxhci9hdXRoJztcclxuaW1wb3J0IHsgTmJTZWN1cml0eU1vZHVsZSwgTmJSb2xlUHJvdmlkZXIgfSBmcm9tICdAbmVidWxhci9zZWN1cml0eSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuaW1wb3J0IHtBbmFseXRpY3NTZXJ2aWNlfSBmcm9tICcuL3V0aWxzL2FuYWx5dGljcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtMYXlvdXRTZXJ2aWNlfSBmcm9tICcuL3V0aWxzL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHtQbGF5ZXJTZXJ2aWNlfSBmcm9tICcuL3V0aWxzL3BsYXllci5zZXJ2aWNlJztcclxuaW1wb3J0IHtTdGF0ZVNlcnZpY2V9IGZyb20gJy4vdXRpbHMvc3RhdGUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4vZGF0YS91c2Vycyc7XHJcbmltcG9ydCB7IEVsZWN0cmljaXR5RGF0YSB9IGZyb20gJy4vZGF0YS9lbGVjdHJpY2l0eSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVEYXRhIH0gZnJvbSAnLi9kYXRhL3NtYXJ0LXRhYmxlJztcclxuaW1wb3J0IHsgVXNlckFjdGl2aXR5RGF0YSB9IGZyb20gJy4vZGF0YS91c2VyLWFjdGl2aXR5JztcclxuaW1wb3J0IHsgT3JkZXJzQ2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL29yZGVycy1jaGFydCc7XHJcbmltcG9ydCB7IFByb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4vZGF0YS9wcm9maXQtY2hhcnQnO1xyXG5pbXBvcnQgeyBUcmFmZmljTGlzdERhdGEgfSBmcm9tICcuL2RhdGEvdHJhZmZpYy1saXN0JztcclxuaW1wb3J0IHsgRWFybmluZ0RhdGEgfSBmcm9tICcuL2RhdGEvZWFybmluZyc7XHJcbmltcG9ydCB7IE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4vZGF0YS9vcmRlcnMtcHJvZml0LWNoYXJ0JztcclxuaW1wb3J0IHsgVHJhZmZpY0JhckRhdGEgfSBmcm9tICcuL2RhdGEvdHJhZmZpYy1iYXInO1xyXG5pbXBvcnQgeyBQcm9maXRCYXJBbmltYXRpb25DaGFydERhdGEgfSBmcm9tICcuL2RhdGEvcHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQnO1xyXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUh1bWlkaXR5RGF0YSB9IGZyb20gJy4vZGF0YS90ZW1wZXJhdHVyZS1odW1pZGl0eSc7XHJcbmltcG9ydCB7IFNvbGFyRGF0YSB9IGZyb20gJy4vZGF0YS9zb2xhcic7XHJcbmltcG9ydCB7IFRyYWZmaWNDaGFydERhdGEgfSBmcm9tICcuL2RhdGEvdHJhZmZpYy1jaGFydCc7XHJcbmltcG9ydCB7IFN0YXRzQmFyRGF0YSB9IGZyb20gJy4vZGF0YS9zdGF0cy1iYXInO1xyXG5pbXBvcnQgeyBDb3VudHJ5T3JkZXJEYXRhIH0gZnJvbSAnLi9kYXRhL2NvdW50cnktb3JkZXInO1xyXG5pbXBvcnQgeyBTdGF0c1Byb2dyZXNzQmFyRGF0YSB9IGZyb20gJy4vZGF0YS9zdGF0cy1wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQgeyBWaXNpdG9yc0FuYWx5dGljc0RhdGEgfSBmcm9tICcuL2RhdGEvdmlzaXRvcnMtYW5hbHl0aWNzJztcclxuaW1wb3J0IHsgU2VjdXJpdHlDYW1lcmFzRGF0YSB9IGZyb20gJy4vZGF0YS9zZWN1cml0eS1jYW1lcmFzJztcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3VzZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbGVjdHJpY2l0eVNlcnZpY2UgfSBmcm9tICcuL21vY2svZWxlY3RyaWNpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IFNtYXJ0VGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3NtYXJ0LXRhYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3VzZXItYWN0aXZpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IE9yZGVyc0NoYXJ0U2VydmljZSB9IGZyb20gJy4vbW9jay9vcmRlcnMtY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpdENoYXJ0U2VydmljZSB9IGZyb20gJy4vbW9jay9wcm9maXQtY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWZmaWNMaXN0U2VydmljZSB9IGZyb20gJy4vbW9jay90cmFmZmljLWxpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IEVhcm5pbmdTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL2Vhcm5pbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSB9IGZyb20gJy4vbW9jay9vcmRlcnMtcHJvZml0LWNoYXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFmZmljQmFyU2VydmljZSB9IGZyb20gJy4vbW9jay90cmFmZmljLWJhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3Byb2ZpdC1iYXItYW5pbWF0aW9uLWNoYXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUh1bWlkaXR5U2VydmljZSB9IGZyb20gJy4vbW9jay90ZW1wZXJhdHVyZS1odW1pZGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU29sYXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3NvbGFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFmZmljQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRzQmFyU2VydmljZSB9IGZyb20gJy4vbW9jay9zdGF0cy1iYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvdW50cnlPcmRlclNlcnZpY2UgfSBmcm9tICcuL21vY2svY291bnRyeS1vcmRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdHNQcm9ncmVzc0JhclNlcnZpY2UgfSBmcm9tICcuL21vY2svc3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWaXNpdG9yc0FuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL21vY2svdmlzaXRvcnMtYW5hbHl0aWNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWN1cml0eUNhbWVyYXNTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3NlY3VyaXR5LWNhbWVyYXMuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vY2tEYXRhTW9kdWxlIH0gZnJvbSAnLi9tb2NrL21vY2stZGF0YS5tb2R1bGUnO1xyXG5cclxuY29uc3Qgc29jaWFsTGlua3MgPSBbXHJcbiAge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FrdmVvL25lYnVsYXInLFxyXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgIGljb246ICdnaXRodWInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FrdmVvLycsXHJcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgaWNvbjogJ2ZhY2Vib29rJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHVybDogJ2h0dHBzOi8vdHdpdHRlci5jb20vYWt2ZW9faW5jJyxcclxuICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICBpY29uOiAndHdpdHRlcicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IERBVEFfU0VSVklDRVMgPSBbXHJcbiAgeyBwcm92aWRlOiBVc2VyRGF0YSwgdXNlQ2xhc3M6IFVzZXJTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBFbGVjdHJpY2l0eURhdGEsIHVzZUNsYXNzOiBFbGVjdHJpY2l0eVNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFNtYXJ0VGFibGVEYXRhLCB1c2VDbGFzczogU21hcnRUYWJsZVNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFVzZXJBY3Rpdml0eURhdGEsIHVzZUNsYXNzOiBVc2VyQWN0aXZpdHlTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBPcmRlcnNDaGFydERhdGEsIHVzZUNsYXNzOiBPcmRlcnNDaGFydFNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFByb2ZpdENoYXJ0RGF0YSwgdXNlQ2xhc3M6IFByb2ZpdENoYXJ0U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogVHJhZmZpY0xpc3REYXRhLCB1c2VDbGFzczogVHJhZmZpY0xpc3RTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBFYXJuaW5nRGF0YSwgdXNlQ2xhc3M6IEVhcm5pbmdTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBPcmRlcnNQcm9maXRDaGFydERhdGEsIHVzZUNsYXNzOiBPcmRlcnNQcm9maXRDaGFydFNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFRyYWZmaWNCYXJEYXRhLCB1c2VDbGFzczogVHJhZmZpY0JhclNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0RGF0YSwgdXNlQ2xhc3M6IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogVGVtcGVyYXR1cmVIdW1pZGl0eURhdGEsIHVzZUNsYXNzOiBUZW1wZXJhdHVyZUh1bWlkaXR5U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogU29sYXJEYXRhLCB1c2VDbGFzczogU29sYXJTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBUcmFmZmljQ2hhcnREYXRhLCB1c2VDbGFzczogVHJhZmZpY0NoYXJ0U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogU3RhdHNCYXJEYXRhLCB1c2VDbGFzczogU3RhdHNCYXJTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBDb3VudHJ5T3JkZXJEYXRhLCB1c2VDbGFzczogQ291bnRyeU9yZGVyU2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogU3RhdHNQcm9ncmVzc0JhckRhdGEsIHVzZUNsYXNzOiBTdGF0c1Byb2dyZXNzQmFyU2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogVmlzaXRvcnNBbmFseXRpY3NEYXRhLCB1c2VDbGFzczogVmlzaXRvcnNBbmFseXRpY3NTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBTZWN1cml0eUNhbWVyYXNEYXRhLCB1c2VDbGFzczogU2VjdXJpdHlDYW1lcmFzU2VydmljZSB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5iU2ltcGxlUm9sZVByb3ZpZGVyIGV4dGVuZHMgTmJSb2xlUHJvdmlkZXIge1xyXG4gIGdldFJvbGUoKSB7XHJcbiAgICAvLyBoZXJlIHlvdSBjb3VsZCBwcm92aWRlIGFueSByb2xlIGJhc2VkIG9uIGFueSBhdXRoIGZsb3dcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoJ2d1ZXN0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTkJfQ09SRV9QUk9WSURFUlMgPSBbXHJcbiAgLi4uTW9ja0RhdGFNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcclxuICAuLi5EQVRBX1NFUlZJQ0VTLFxyXG4gIC4uLk5iQXV0aE1vZHVsZS5mb3JSb290KHtcclxuXHJcbiAgICBzdHJhdGVnaWVzOiBbXHJcbiAgICAgIE5iRHVtbXlBdXRoU3RyYXRlZ3kuc2V0dXAoe1xyXG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgIGxvZ2luOiB7XHJcbiAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxyXG4gICAgICB9LFxyXG4gICAgICByZWdpc3Rlcjoge1xyXG4gICAgICAgIHNvY2lhbExpbmtzOiBzb2NpYWxMaW5rcyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSkucHJvdmlkZXJzLFxyXG5cclxuICBOYlNlY3VyaXR5TW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgYWNjZXNzQ29udHJvbDoge1xyXG4gICAgICBndWVzdDoge1xyXG4gICAgICAgIHZpZXc6ICcqJyxcclxuICAgICAgfSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHBhcmVudDogJ2d1ZXN0JyxcclxuICAgICAgICBjcmVhdGU6ICcqJyxcclxuICAgICAgICBlZGl0OiAnKicsXHJcbiAgICAgICAgcmVtb3ZlOiAnKicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pLnByb3ZpZGVycyxcclxuXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTmJSb2xlUHJvdmlkZXIsIHVzZUNsYXNzOiBOYlNpbXBsZVJvbGVQcm92aWRlcixcclxuICB9LFxyXG4gIEFuYWx5dGljc1NlcnZpY2UsXHJcbiAgTGF5b3V0U2VydmljZSxcclxuICBQbGF5ZXJTZXJ2aWNlLFxyXG4gIFN0YXRlU2VydmljZSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmJBdXRoTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xyXG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4gPE1vZHVsZVdpdGhQcm92aWRlcnM+e1xyXG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLi4uTkJfQ09SRV9QUk9WSURFUlMsXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=