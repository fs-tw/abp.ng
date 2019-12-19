import { ModuleWithProviders } from '@angular/core';
import { NbRoleProvider } from '@nebular/security';
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
export declare class NbSimpleRoleProvider extends NbRoleProvider {
    getRole(): import("rxjs").Observable<string>;
}
export declare const NB_CORE_PROVIDERS: (any[] | import("@angular/core").TypeProvider | import("@angular/core").ValueProvider | import("@angular/core").ClassProvider | import("@angular/core").ConstructorProvider | import("@angular/core").ExistingProvider | import("@angular/core").FactoryProvider | {
    provide: typeof UserData;
    useClass: typeof UserService;
} | {
    provide: typeof ElectricityData;
    useClass: typeof ElectricityService;
} | {
    provide: typeof SmartTableData;
    useClass: typeof SmartTableService;
} | {
    provide: typeof UserActivityData;
    useClass: typeof UserActivityService;
} | {
    provide: typeof OrdersChartData;
    useClass: typeof OrdersChartService;
} | {
    provide: typeof ProfitChartData;
    useClass: typeof ProfitChartService;
} | {
    provide: typeof TrafficListData;
    useClass: typeof TrafficListService;
} | {
    provide: typeof EarningData;
    useClass: typeof EarningService;
} | {
    provide: typeof OrdersProfitChartData;
    useClass: typeof OrdersProfitChartService;
} | {
    provide: typeof TrafficBarData;
    useClass: typeof TrafficBarService;
} | {
    provide: typeof ProfitBarAnimationChartData;
    useClass: typeof ProfitBarAnimationChartService;
} | {
    provide: typeof TemperatureHumidityData;
    useClass: typeof TemperatureHumidityService;
} | {
    provide: typeof SolarData;
    useClass: typeof SolarService;
} | {
    provide: typeof TrafficChartData;
    useClass: typeof TrafficChartService;
} | {
    provide: typeof StatsBarData;
    useClass: typeof StatsBarService;
} | {
    provide: typeof CountryOrderData;
    useClass: typeof CountryOrderService;
} | {
    provide: typeof StatsProgressBarData;
    useClass: typeof StatsProgressBarService;
} | {
    provide: typeof VisitorsAnalyticsData;
    useClass: typeof VisitorsAnalyticsService;
} | {
    provide: typeof SecurityCamerasData;
    useClass: typeof SecurityCamerasService;
})[];
export declare class CoreModule {
    constructor(parentModule: CoreModule);
    static forRoot(): ModuleWithProviders;
}
