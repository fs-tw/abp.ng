/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const socialLinks = [
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
const DATA_SERVICES = [
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
export class NbSimpleRoleProvider extends NbRoleProvider {
    /**
     * @return {?}
     */
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}
/** @type {?} */
export const NB_CORE_PROVIDERS = [
    ...MockDataModule.forRoot().providers,
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
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
    }).providers,
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
];
export class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: CoreModule,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        }));
    }
}
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
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckUsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUs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LENBQUMsT0FBTztRQUNaLE9BQU8sbUJBQXFCO1lBQzFCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGlCQUFpQjthQUNyQjtTQUNGLEVBQUEsQ0FBQztJQUNKLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7YUFDakI7Ozs7WUFFbUQsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5iQXV0aE1vZHVsZSwgTmJEdW1teUF1dGhTdHJhdGVneSB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xyXG5pbXBvcnQgeyBOYlNlY3VyaXR5TW9kdWxlLCBOYlJvbGVQcm92aWRlciB9IGZyb20gJ0BuZWJ1bGFyL3NlY3VyaXR5JztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XHJcblxyXG5pbXBvcnQge0FuYWx5dGljc1NlcnZpY2V9IGZyb20gJy4vdXRpbHMvYW5hbHl0aWNzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xheW91dFNlcnZpY2V9IGZyb20gJy4vdXRpbHMvbGF5b3V0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1BsYXllclNlcnZpY2V9IGZyb20gJy4vdXRpbHMvcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N0YXRlU2VydmljZX0gZnJvbSAnLi91dGlscy9zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi9kYXRhL3VzZXJzJztcclxuaW1wb3J0IHsgRWxlY3RyaWNpdHlEYXRhIH0gZnJvbSAnLi9kYXRhL2VsZWN0cmljaXR5JztcclxuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL2RhdGEvc21hcnQtdGFibGUnO1xyXG5pbXBvcnQgeyBVc2VyQWN0aXZpdHlEYXRhIH0gZnJvbSAnLi9kYXRhL3VzZXItYWN0aXZpdHknO1xyXG5pbXBvcnQgeyBPcmRlcnNDaGFydERhdGEgfSBmcm9tICcuL2RhdGEvb3JkZXJzLWNoYXJ0JztcclxuaW1wb3J0IHsgUHJvZml0Q2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL3Byb2ZpdC1jaGFydCc7XHJcbmltcG9ydCB7IFRyYWZmaWNMaXN0RGF0YSB9IGZyb20gJy4vZGF0YS90cmFmZmljLWxpc3QnO1xyXG5pbXBvcnQgeyBFYXJuaW5nRGF0YSB9IGZyb20gJy4vZGF0YS9lYXJuaW5nJztcclxuaW1wb3J0IHsgT3JkZXJzUHJvZml0Q2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL29yZGVycy1wcm9maXQtY2hhcnQnO1xyXG5pbXBvcnQgeyBUcmFmZmljQmFyRGF0YSB9IGZyb20gJy4vZGF0YS90cmFmZmljLWJhcic7XHJcbmltcG9ydCB7IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0RGF0YSB9IGZyb20gJy4vZGF0YS9wcm9maXQtYmFyLWFuaW1hdGlvbi1jaGFydCc7XHJcbmltcG9ydCB7IFRlbXBlcmF0dXJlSHVtaWRpdHlEYXRhIH0gZnJvbSAnLi9kYXRhL3RlbXBlcmF0dXJlLWh1bWlkaXR5JztcclxuaW1wb3J0IHsgU29sYXJEYXRhIH0gZnJvbSAnLi9kYXRhL3NvbGFyJztcclxuaW1wb3J0IHsgVHJhZmZpY0NoYXJ0RGF0YSB9IGZyb20gJy4vZGF0YS90cmFmZmljLWNoYXJ0JztcclxuaW1wb3J0IHsgU3RhdHNCYXJEYXRhIH0gZnJvbSAnLi9kYXRhL3N0YXRzLWJhcic7XHJcbmltcG9ydCB7IENvdW50cnlPcmRlckRhdGEgfSBmcm9tICcuL2RhdGEvY291bnRyeS1vcmRlcic7XHJcbmltcG9ydCB7IFN0YXRzUHJvZ3Jlc3NCYXJEYXRhIH0gZnJvbSAnLi9kYXRhL3N0YXRzLXByb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7IFZpc2l0b3JzQW5hbHl0aWNzRGF0YSB9IGZyb20gJy4vZGF0YS92aXNpdG9ycy1hbmFseXRpY3MnO1xyXG5pbXBvcnQgeyBTZWN1cml0eUNhbWVyYXNEYXRhIH0gZnJvbSAnLi9kYXRhL3NlY3VyaXR5LWNhbWVyYXMnO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL21vY2svdXNlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVsZWN0cmljaXR5U2VydmljZSB9IGZyb20gJy4vbW9jay9lbGVjdHJpY2l0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU21hcnRUYWJsZVNlcnZpY2UgfSBmcm9tICcuL21vY2svc21hcnQtdGFibGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJBY3Rpdml0eVNlcnZpY2UgfSBmcm9tICcuL21vY2svdXNlci1hY3Rpdml0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3JkZXJzQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL29yZGVycy1jaGFydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZml0Q2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3Byb2ZpdC1jaGFydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhZmZpY0xpc3RTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWFybmluZ1NlcnZpY2UgfSBmcm9tICcuL21vY2svZWFybmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3JkZXJzUHJvZml0Q2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL29yZGVycy1wcm9maXQtY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWZmaWNCYXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtYmFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maXRCYXJBbmltYXRpb25DaGFydFNlcnZpY2UgfSBmcm9tICcuL21vY2svcHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBlcmF0dXJlSHVtaWRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RlbXBlcmF0dXJlLWh1bWlkaXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb2xhclNlcnZpY2UgfSBmcm9tICcuL21vY2svc29sYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWZmaWNDaGFydFNlcnZpY2UgfSBmcm9tICcuL21vY2svdHJhZmZpYy1jaGFydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdHNCYXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3N0YXRzLWJhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ291bnRyeU9yZGVyU2VydmljZSB9IGZyb20gJy4vbW9jay9jb3VudHJ5LW9yZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0c1Byb2dyZXNzQmFyU2VydmljZSB9IGZyb20gJy4vbW9jay9zdGF0cy1wcm9ncmVzcy1iYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFZpc2l0b3JzQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vbW9jay92aXNpdG9ycy1hbmFseXRpY3Muc2VydmljZSc7XHJcbmltcG9ydCB7IFNlY3VyaXR5Q2FtZXJhc1NlcnZpY2UgfSBmcm9tICcuL21vY2svc2VjdXJpdHktY2FtZXJhcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9ja0RhdGFNb2R1bGUgfSBmcm9tICcuL21vY2svbW9jay1kYXRhLm1vZHVsZSc7XHJcblxyXG5jb25zdCBzb2NpYWxMaW5rcyA9IFtcclxuICB7XHJcbiAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYWt2ZW8vbmVidWxhcicsXHJcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgaWNvbjogJ2dpdGh1YicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWt2ZW8vJyxcclxuICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICBpY29uOiAnZmFjZWJvb2snLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ha3Zlb19pbmMnLFxyXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgIGljb246ICd0d2l0dGVyJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgREFUQV9TRVJWSUNFUyA9IFtcclxuICB7IHByb3ZpZGU6IFVzZXJEYXRhLCB1c2VDbGFzczogVXNlclNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IEVsZWN0cmljaXR5RGF0YSwgdXNlQ2xhc3M6IEVsZWN0cmljaXR5U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogU21hcnRUYWJsZURhdGEsIHVzZUNsYXNzOiBTbWFydFRhYmxlU2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogVXNlckFjdGl2aXR5RGF0YSwgdXNlQ2xhc3M6IFVzZXJBY3Rpdml0eVNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IE9yZGVyc0NoYXJ0RGF0YSwgdXNlQ2xhc3M6IE9yZGVyc0NoYXJ0U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogUHJvZml0Q2hhcnREYXRhLCB1c2VDbGFzczogUHJvZml0Q2hhcnRTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBUcmFmZmljTGlzdERhdGEsIHVzZUNsYXNzOiBUcmFmZmljTGlzdFNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IEVhcm5pbmdEYXRhLCB1c2VDbGFzczogRWFybmluZ1NlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSwgdXNlQ2xhc3M6IE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogVHJhZmZpY0JhckRhdGEsIHVzZUNsYXNzOiBUcmFmZmljQmFyU2VydmljZSB9LFxyXG4gIHsgcHJvdmlkZTogUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnREYXRhLCB1c2VDbGFzczogUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnRTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBUZW1wZXJhdHVyZUh1bWlkaXR5RGF0YSwgdXNlQ2xhc3M6IFRlbXBlcmF0dXJlSHVtaWRpdHlTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBTb2xhckRhdGEsIHVzZUNsYXNzOiBTb2xhclNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFRyYWZmaWNDaGFydERhdGEsIHVzZUNsYXNzOiBUcmFmZmljQ2hhcnRTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBTdGF0c0JhckRhdGEsIHVzZUNsYXNzOiBTdGF0c0JhclNlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IENvdW50cnlPcmRlckRhdGEsIHVzZUNsYXNzOiBDb3VudHJ5T3JkZXJTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBTdGF0c1Byb2dyZXNzQmFyRGF0YSwgdXNlQ2xhc3M6IFN0YXRzUHJvZ3Jlc3NCYXJTZXJ2aWNlIH0sXHJcbiAgeyBwcm92aWRlOiBWaXNpdG9yc0FuYWx5dGljc0RhdGEsIHVzZUNsYXNzOiBWaXNpdG9yc0FuYWx5dGljc1NlcnZpY2UgfSxcclxuICB7IHByb3ZpZGU6IFNlY3VyaXR5Q2FtZXJhc0RhdGEsIHVzZUNsYXNzOiBTZWN1cml0eUNhbWVyYXNTZXJ2aWNlIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY2xhc3MgTmJTaW1wbGVSb2xlUHJvdmlkZXIgZXh0ZW5kcyBOYlJvbGVQcm92aWRlciB7XHJcbiAgZ2V0Um9sZSgpIHtcclxuICAgIC8vIGhlcmUgeW91IGNvdWxkIHByb3ZpZGUgYW55IHJvbGUgYmFzZWQgb24gYW55IGF1dGggZmxvd1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZignZ3Vlc3QnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOQl9DT1JFX1BST1ZJREVSUyA9IFtcclxuICAuLi5Nb2NrRGF0YU1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxyXG4gIC4uLkRBVEFfU0VSVklDRVMsXHJcbiAgLi4uTmJBdXRoTW9kdWxlLmZvclJvb3Qoe1xyXG5cclxuICAgIHN0cmF0ZWdpZXM6IFtcclxuICAgICAgTmJEdW1teUF1dGhTdHJhdGVneS5zZXR1cCh7XHJcbiAgICAgICAgbmFtZTogJ2VtYWlsJyxcclxuICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgZm9ybXM6IHtcclxuICAgICAgbG9naW46IHtcclxuICAgICAgICBzb2NpYWxMaW5rczogc29jaWFsTGlua3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZ2lzdGVyOiB7XHJcbiAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KS5wcm92aWRlcnMsXHJcblxyXG4gIE5iU2VjdXJpdHlNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICBhY2Nlc3NDb250cm9sOiB7XHJcbiAgICAgIGd1ZXN0OiB7XHJcbiAgICAgICAgdmlldzogJyonLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgcGFyZW50OiAnZ3Vlc3QnLFxyXG4gICAgICAgIGNyZWF0ZTogJyonLFxyXG4gICAgICAgIGVkaXQ6ICcqJyxcclxuICAgICAgICByZW1vdmU6ICcqJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSkucHJvdmlkZXJzLFxyXG5cclxuICB7XHJcbiAgICBwcm92aWRlOiBOYlJvbGVQcm92aWRlciwgdXNlQ2xhc3M6IE5iU2ltcGxlUm9sZVByb3ZpZGVyLFxyXG4gIH0sXHJcbiAgQW5hbHl0aWNzU2VydmljZSxcclxuICBMYXlvdXRTZXJ2aWNlLFxyXG4gIFBsYXllclNlcnZpY2UsXHJcbiAgU3RhdGVTZXJ2aWNlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOYkF1dGhNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XHJcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb3JlTW9kdWxlJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiA8TW9kdWxlV2l0aFByb3ZpZGVycz57XHJcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAuLi5OQl9DT1JFX1BST1ZJREVSUyxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==