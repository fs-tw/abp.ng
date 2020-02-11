import { __read, __extends, __spread } from 'tslib';
import { Injectable, NgModule, Optional, SkipSelf, Component, EventEmitter, ViewChild, Output, ElementRef, Pipe } from '@angular/core';
import { Location, CommonModule, LocationStrategy } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, share, delay, takeWhile, takeUntil, map } from 'rxjs/operators';
import { NbLayoutDirection, NbLayoutDirectionService, NbSidebarService, NbMenuService, NbThemeService, NbMediaBreakpointsService, DEFAULT_THEME as DEFAULT_THEME$1, COSMIC_THEME as COSMIC_THEME$1, CORPORATE_THEME as CORPORATE_THEME$1, DARK_THEME as DARK_THEME$1, NbLayoutModule, NbMenuModule, NbUserModule, NbActionsModule, NbSearchModule, NbSidebarModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/module-import-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} parentModule
 * @param {?} moduleName
 * @return {?}
 */
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    AnalyticsService.prototype.trackPageViews = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof NavigationEnd; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            }));
        }
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    AnalyticsService.prototype.trackEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnalyticsService.ctorParameters = function () { return [
        { type: Location },
        { type: Router }
    ]; };
    return AnalyticsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/layout.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new Subject();
    }
    /**
     * @return {?}
     */
    LayoutService.prototype.changeLayoutSize = /**
     * @return {?}
     */
    function () {
        this.layoutSize$.next();
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.onChangeLayoutSize = /**
     * @return {?}
     */
    function () {
        return this.layoutSize$.pipe(share(), delay(1));
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LayoutService.prototype.layoutSize$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/player.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());
if (false) {
    /** @type {?} */
    Track.prototype.name;
    /** @type {?} */
    Track.prototype.artist;
    /** @type {?} */
    Track.prototype.url;
    /** @type {?} */
    Track.prototype.cover;
}
var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    /**
     * @return {?}
     */
    PlayerService.prototype.random = /**
     * @return {?}
     */
    function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    /**
     * @return {?}
     */
    PlayerService.prototype.next = /**
     * @return {?}
     */
    function () {
        return this.getNextTrack();
    };
    /**
     * @return {?}
     */
    PlayerService.prototype.prev = /**
     * @return {?}
     */
    function () {
        return this.getPrevTrack();
    };
    /**
     * @private
     * @return {?}
     */
    PlayerService.prototype.getNextTrack = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    /**
     * @private
     * @return {?}
     */
    PlayerService.prototype.getPrevTrack = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService.decorators = [
        { type: Injectable }
    ];
    return PlayerService;
}());
if (false) {
    /** @type {?} */
    PlayerService.prototype.current;
    /** @type {?} */
    PlayerService.prototype.playlist;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.alive; })))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return _this.updateSidebarIcons(direction); }));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    StateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.alive = false;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    StateService.prototype.updateSidebarIcons = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _a = __read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
        /** @type {?} */
        var isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setLayoutState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.layoutState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getLayoutStates = /**
     * @return {?}
     */
    function () {
        return of(this.layouts);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onLayoutState = /**
     * @return {?}
     */
    function () {
        return this.layoutState$.asObservable();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setSidebarState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.sidebarState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getSidebarStates = /**
     * @return {?}
     */
    function () {
        return of(this.sidebars);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onSidebarState = /**
     * @return {?}
     */
    function () {
        return this.sidebarState$.asObservable();
    };
    StateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    return StateService;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layouts;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebars;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layoutState$;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebarState$;
    /** @type {?} */
    StateService.prototype.alive;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/users.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function User() { }
if (false) {
    /** @type {?} */
    User.prototype.name;
    /** @type {?} */
    User.prototype.picture;
}
/**
 * @record
 */
function Contacts() { }
if (false) {
    /** @type {?} */
    Contacts.prototype.user;
    /** @type {?} */
    Contacts.prototype.type;
}
/**
 * @record
 */
function RecentUsers() { }
if (false) {
    /** @type {?} */
    RecentUsers.prototype.time;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    UserData.prototype.getUsers = function () { };
    /**
     * @abstract
     * @return {?}
     */
    UserData.prototype.getContacts = function () { };
    /**
     * @abstract
     * @return {?}
     */
    UserData.prototype.getRecentUsers = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/electricity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Month() { }
if (false) {
    /** @type {?} */
    Month.prototype.month;
    /** @type {?} */
    Month.prototype.delta;
    /** @type {?} */
    Month.prototype.down;
    /** @type {?} */
    Month.prototype.kWatts;
    /** @type {?} */
    Month.prototype.cost;
}
/**
 * @record
 */
function Electricity() { }
if (false) {
    /** @type {?} */
    Electricity.prototype.title;
    /** @type {?|undefined} */
    Electricity.prototype.active;
    /** @type {?} */
    Electricity.prototype.months;
}
/**
 * @record
 */
function ElectricityChart() { }
if (false) {
    /** @type {?} */
    ElectricityChart.prototype.label;
    /** @type {?} */
    ElectricityChart.prototype.value;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ElectricityData = /** @class */ (function () {
    function ElectricityData() {
    }
    return ElectricityData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    ElectricityData.prototype.getListData = function () { };
    /**
     * @abstract
     * @return {?}
     */
    ElectricityData.prototype.getChartData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/smart-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SmartTableData = /** @class */ (function () {
    function SmartTableData() {
    }
    return SmartTableData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    SmartTableData.prototype.getData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/user-activity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UserActive() { }
if (false) {
    /** @type {?} */
    UserActive.prototype.date;
    /** @type {?} */
    UserActive.prototype.pagesVisitCount;
    /** @type {?} */
    UserActive.prototype.deltaUp;
    /** @type {?} */
    UserActive.prototype.newVisits;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
UserActivityData = /** @class */ (function () {
    function UserActivityData() {
    }
    return UserActivityData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    UserActivityData.prototype.getUserActivityData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/orders-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OrdersChart() { }
if (false) {
    /** @type {?} */
    OrdersChart.prototype.chartLabel;
    /** @type {?} */
    OrdersChart.prototype.linesData;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
OrdersChartData = /** @class */ (function () {
    function OrdersChartData() {
    }
    return OrdersChartData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    OrdersChartData.prototype.getOrdersChartData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/profit-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ProfitChart() { }
if (false) {
    /** @type {?} */
    ProfitChart.prototype.chartLabel;
    /** @type {?} */
    ProfitChart.prototype.data;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ProfitChartData = /** @class */ (function () {
    function ProfitChartData() {
    }
    return ProfitChartData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    ProfitChartData.prototype.getProfitChartData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/traffic-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TrafficList() { }
if (false) {
    /** @type {?} */
    TrafficList.prototype.date;
    /** @type {?} */
    TrafficList.prototype.value;
    /** @type {?} */
    TrafficList.prototype.delta;
    /** @type {?} */
    TrafficList.prototype.comparison;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TrafficListData = /** @class */ (function () {
    function TrafficListData() {
    }
    return TrafficListData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    TrafficListData.prototype.getTrafficListData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/earning.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LiveUpdateChart() { }
if (false) {
    /** @type {?} */
    LiveUpdateChart.prototype.liveChart;
    /** @type {?} */
    LiveUpdateChart.prototype.delta;
    /** @type {?} */
    LiveUpdateChart.prototype.dailyIncome;
}
/**
 * @record
 */
function PieChart() { }
if (false) {
    /** @type {?} */
    PieChart.prototype.value;
    /** @type {?} */
    PieChart.prototype.name;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
EarningData = /** @class */ (function () {
    function EarningData() {
    }
    return EarningData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} currency
     * @return {?}
     */
    EarningData.prototype.getEarningLiveUpdateCardData = function (currency) { };
    /**
     * @abstract
     * @param {?} currency
     * @return {?}
     */
    EarningData.prototype.getEarningCardData = function (currency) { };
    /**
     * @abstract
     * @return {?}
     */
    EarningData.prototype.getEarningPieChartData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/orders-profit-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OrderProfitChartSummary() { }
if (false) {
    /** @type {?} */
    OrderProfitChartSummary.prototype.title;
    /** @type {?} */
    OrderProfitChartSummary.prototype.value;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
OrdersProfitChartData = /** @class */ (function () {
    function OrdersProfitChartData() {
    }
    return OrdersProfitChartData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    OrdersProfitChartData.prototype.getOrderProfitChartSummary = function () { };
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartData.prototype.getOrdersChartData = function (period) { };
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartData.prototype.getProfitChartData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/traffic-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TrafficBar() { }
if (false) {
    /** @type {?} */
    TrafficBar.prototype.data;
    /** @type {?} */
    TrafficBar.prototype.labels;
    /** @type {?} */
    TrafficBar.prototype.formatter;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TrafficBarData = /** @class */ (function () {
    function TrafficBarData() {
    }
    return TrafficBarData;
}());
if (false) {
    /**
     * @abstract
     * @param {?} period
     * @return {?}
     */
    TrafficBarData.prototype.getTrafficBarData = function (period) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/profit-bar-animation-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ProfitBarAnimationChartData = /** @class */ (function () {
    function ProfitBarAnimationChartData() {
    }
    return ProfitBarAnimationChartData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    ProfitBarAnimationChartData.prototype.getChartData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/temperature-humidity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Temperature() { }
if (false) {
    /** @type {?} */
    Temperature.prototype.value;
    /** @type {?} */
    Temperature.prototype.min;
    /** @type {?} */
    Temperature.prototype.max;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TemperatureHumidityData = /** @class */ (function () {
    function TemperatureHumidityData() {
    }
    return TemperatureHumidityData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    TemperatureHumidityData.prototype.getTemperatureData = function () { };
    /**
     * @abstract
     * @return {?}
     */
    TemperatureHumidityData.prototype.getHumidityData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/solar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SolarData = /** @class */ (function () {
    function SolarData() {
    }
    return SolarData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    SolarData.prototype.getSolarData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/traffic-chart.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TrafficChartData = /** @class */ (function () {
    function TrafficChartData() {
    }
    return TrafficChartData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    TrafficChartData.prototype.getTrafficChartData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/stats-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StatsBarData = /** @class */ (function () {
    function StatsBarData() {
    }
    return StatsBarData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    StatsBarData.prototype.getStatsBarData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/country-order.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
CountryOrderData = /** @class */ (function () {
    function CountryOrderData() {
    }
    return CountryOrderData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    CountryOrderData.prototype.getCountriesCategories = function () { };
    /**
     * @abstract
     * @param {?} country
     * @return {?}
     */
    CountryOrderData.prototype.getCountriesCategoriesData = function (country) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/stats-progress-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ProgressInfo() { }
if (false) {
    /** @type {?} */
    ProgressInfo.prototype.title;
    /** @type {?} */
    ProgressInfo.prototype.value;
    /** @type {?} */
    ProgressInfo.prototype.activeProgress;
    /** @type {?} */
    ProgressInfo.prototype.description;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
StatsProgressBarData = /** @class */ (function () {
    function StatsProgressBarData() {
    }
    return StatsProgressBarData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    StatsProgressBarData.prototype.getProgressInfoData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/visitors-analytics.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function OutlineData() { }
if (false) {
    /** @type {?} */
    OutlineData.prototype.label;
    /** @type {?} */
    OutlineData.prototype.value;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
VisitorsAnalyticsData = /** @class */ (function () {
    function VisitorsAnalyticsData() {
    }
    return VisitorsAnalyticsData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    VisitorsAnalyticsData.prototype.getInnerLineChartData = function () { };
    /**
     * @abstract
     * @return {?}
     */
    VisitorsAnalyticsData.prototype.getOutlineLineChartData = function () { };
    /**
     * @abstract
     * @return {?}
     */
    VisitorsAnalyticsData.prototype.getPieChartData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/security-cameras.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Camera() { }
if (false) {
    /** @type {?} */
    Camera.prototype.title;
    /** @type {?} */
    Camera.prototype.source;
}
/**
 * @abstract
 */
var  /**
 * @abstract
 */
SecurityCamerasData = /** @class */ (function () {
    function SecurityCamerasData() {
    }
    return SecurityCamerasData;
}());
if (false) {
    /**
     * @abstract
     * @return {?}
     */
    SecurityCamerasData.prototype.getCamerasData = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/users.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = new Date;
        _this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        _this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        _this.contacts = [
            { user: _this.users.nick, type: _this.types.mobile },
            { user: _this.users.eva, type: _this.types.home },
            { user: _this.users.jack, type: _this.types.mobile },
            { user: _this.users.lee, type: _this.types.mobile },
            { user: _this.users.alan, type: _this.types.home },
            { user: _this.users.kate, type: _this.types.work },
        ];
        _this.recentUsers = [
            { user: _this.users.alan, type: _this.types.home, time: _this.time.setHours(21, 12) },
            { user: _this.users.eva, type: _this.types.home, time: _this.time.setHours(17, 45) },
            { user: _this.users.nick, type: _this.types.mobile, time: _this.time.setHours(5, 29) },
            { user: _this.users.lee, type: _this.types.mobile, time: _this.time.setHours(11, 24) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(10, 45) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 42) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 31) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(8, 0) },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    UserService.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        return of(this.users);
    };
    /**
     * @return {?}
     */
    UserService.prototype.getContacts = /**
     * @return {?}
     */
    function () {
        return of(this.contacts);
    };
    /**
     * @return {?}
     */
    UserService.prototype.getRecentUsers = /**
     * @return {?}
     */
    function () {
        return of(this.recentUsers);
    };
    UserService.decorators = [
        { type: Injectable }
    ];
    return UserService;
}(UserData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.time;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.types;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.contacts;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.recentUsers;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/electricity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ElectricityService = /** @class */ (function (_super) {
    __extends(ElectricityService, _super);
    function ElectricityService() {
        var _this = _super.call(this) || this;
        _this.listData = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
        _this.chartPoints = [
            490, 490, 495, 500,
            505, 510, 520, 530,
            550, 580, 630, 720,
            800, 840, 860, 870,
            870, 860, 840, 800,
            720, 200, 145, 130,
            130, 145, 200, 570,
            635, 660, 670, 670,
            660, 630, 580, 460,
            380, 350, 340, 340,
            340, 340, 340, 340,
            340, 340, 340,
        ];
        _this.chartData = _this.chartPoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); }));
        return _this;
    }
    /**
     * @return {?}
     */
    ElectricityService.prototype.getListData = /**
     * @return {?}
     */
    function () {
        return of(this.listData);
    };
    /**
     * @return {?}
     */
    ElectricityService.prototype.getChartData = /**
     * @return {?}
     */
    function () {
        return of(this.chartData);
    };
    ElectricityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ElectricityService.ctorParameters = function () { return []; };
    return ElectricityService;
}(ElectricityData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ElectricityService.prototype.listData;
    /**
     * @type {?}
     * @private
     */
    ElectricityService.prototype.chartPoints;
    /** @type {?} */
    ElectricityService.prototype.chartData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/smart-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SmartTableService = /** @class */ (function (_super) {
    __extends(SmartTableService, _super);
    function SmartTableService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
        return _this;
    }
    /**
     * @return {?}
     */
    SmartTableService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    SmartTableService.decorators = [
        { type: Injectable }
    ];
    return SmartTableService;
}(SmartTableData));
if (false) {
    /** @type {?} */
    SmartTableService.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/periods.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PeriodsService = /** @class */ (function () {
    function PeriodsService() {
    }
    /**
     * @return {?}
     */
    PeriodsService.prototype.getYears = /**
     * @return {?}
     */
    function () {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    };
    /**
     * @return {?}
     */
    PeriodsService.prototype.getMonths = /**
     * @return {?}
     */
    function () {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    };
    /**
     * @return {?}
     */
    PeriodsService.prototype.getWeeks = /**
     * @return {?}
     */
    function () {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    };
    PeriodsService.decorators = [
        { type: Injectable }
    ];
    return PeriodsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/user-activity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserActivityService = /** @class */ (function (_super) {
    __extends(UserActivityService, _super);
    function UserActivityService(periods) {
        var _this = _super.call(this) || this;
        _this.periods = periods;
        _this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        function (roundTo) { return Math.round(Math.random() * roundTo); });
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    UserActivityService.prototype.generateUserActivityRandomData = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            date: date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataWeek = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.periods.getWeeks().map((/**
         * @param {?} week
         * @return {?}
         */
        function (week) {
            return _this.generateUserActivityRandomData(week);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataMonth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var currentDate = new Date();
        /** @type {?} */
        var days = currentDate.getDate();
        /** @type {?} */
        var month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var date = index + 1 + " " + month;
            return _this.generateUserActivityRandomData(date);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataYear = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.periods.getYears().map((/**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            return _this.generateUserActivityRandomData(year);
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    UserActivityService.prototype.getUserActivityData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return of(this.data[period]);
    };
    UserActivityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserActivityService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return UserActivityService;
}(UserActivityData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.getRandom;
    /** @type {?} */
    UserActivityService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.periods;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/orders-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrdersChartService = /** @class */ (function (_super) {
    __extends(OrdersChartService, _super);
    function OrdersChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForWeekPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(42, this.period.getWeeks()),
            linesData: [
                [
                    184, 267, 326, 366, 389, 399,
                    392, 371, 340, 304, 265, 227,
                    191, 158, 130, 108, 95, 91, 97,
                    109, 125, 144, 166, 189, 212,
                    236, 259, 280, 300, 316, 329,
                    338, 342, 339, 329, 312, 288,
                    258, 221, 178, 128, 71,
                ],
                [
                    158, 178, 193, 205, 212, 213,
                    204, 190, 180, 173, 168, 164,
                    162, 160, 159, 158, 159, 166,
                    179, 195, 215, 236, 257, 276,
                    292, 301, 304, 303, 300, 293,
                    284, 273, 262, 251, 241, 234,
                    232, 232, 232, 232, 232, 232,
                ],
                [
                    58, 137, 202, 251, 288, 312,
                    323, 324, 311, 288, 257, 222,
                    187, 154, 124, 100, 81, 68, 61,
                    58, 61, 69, 80, 96, 115, 137,
                    161, 186, 210, 233, 254, 271,
                    284, 293, 297, 297, 297, 297,
                    297, 297, 297, 297, 297,
                ],
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForMonthPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(47, this.period.getMonths()),
            linesData: [
                [
                    5, 63, 113, 156, 194, 225,
                    250, 270, 283, 289, 290,
                    286, 277, 264, 244, 220,
                    194, 171, 157, 151, 150,
                    152, 155, 160, 166, 170,
                    167, 153, 135, 115, 97,
                    82, 71, 64, 63, 62, 61,
                    62, 65, 73, 84, 102,
                    127, 159, 203, 259, 333,
                ],
                [
                    6, 83, 148, 200, 240,
                    265, 273, 259, 211,
                    122, 55, 30, 28, 36,
                    50, 68, 88, 109, 129,
                    146, 158, 163, 165,
                    173, 187, 208, 236,
                    271, 310, 346, 375,
                    393, 400, 398, 387,
                    368, 341, 309, 275,
                    243, 220, 206, 202,
                    207, 222, 247, 286, 348,
                ],
                [
                    398, 348, 315, 292, 274,
                    261, 251, 243, 237, 231,
                    222, 209, 192, 172, 152,
                    132, 116, 102, 90, 80, 71,
                    64, 58, 53, 49, 48, 54, 66,
                    84, 104, 125, 142, 156, 166,
                    172, 174, 172, 167, 159, 149,
                    136, 121, 105, 86, 67, 45, 22,
                ],
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    OrdersChartService.prototype.getDataForYearPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            chartLabel: this.getDataLabels(42, this.year),
            linesData: [
                [
                    190, 269, 327, 366, 389, 398,
                    396, 387, 375, 359, 343, 327,
                    312, 298, 286, 276, 270, 268,
                    265, 258, 247, 234, 220, 204,
                    188, 172, 157, 142, 128, 116,
                    106, 99, 95, 94, 92, 89, 84,
                    77, 69, 60, 49, 36, 22,
                ],
                [
                    265, 307, 337, 359, 375, 386,
                    393, 397, 399, 397, 390, 379,
                    365, 347, 326, 305, 282, 261,
                    241, 223, 208, 197, 190, 187,
                    185, 181, 172, 160, 145, 126,
                    105, 82, 60, 40, 26, 19, 22,
                    43, 82, 141, 220, 321,
                ],
                [
                    9, 165, 236, 258, 244, 206,
                    186, 189, 209, 239, 273, 307,
                    339, 365, 385, 396, 398, 385,
                    351, 300, 255, 221, 197, 181,
                    170, 164, 162, 161, 159, 154,
                    146, 135, 122, 108, 96, 87,
                    83, 82, 82, 82, 82, 82, 82,
                ],
            ],
        };
    };
    /**
     * @param {?} nPoints
     * @param {?} labelsArray
     * @return {?}
     */
    OrdersChartService.prototype.getDataLabels = /**
     * @param {?} nPoints
     * @param {?} labelsArray
     * @return {?}
     */
    function (nPoints, labelsArray) {
        /** @type {?} */
        var labelsArrayLength = labelsArray.length;
        /** @type {?} */
        var step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            /** @type {?} */
            var dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersChartService.prototype.getOrdersChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return this.data[period];
    };
    OrdersChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrdersChartService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return OrdersChartService;
}(OrdersChartData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.year;
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    OrdersChartService.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfitChartService = /** @class */ (function (_super) {
    __extends(ProfitChartService, _super);
    function ProfitChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForWeekPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForMonthPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForYearPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    ProfitChartService.prototype.getRandomData = /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 500);
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    ProfitChartService.prototype.getProfitChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return this.data[period];
    };
    ProfitChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfitChartService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return ProfitChartService;
}(ProfitChartData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.year;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TrafficListService = /** @class */ (function (_super) {
    __extends(TrafficListService, _super);
    function TrafficListService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        function (roundTo) { return Math.round(Math.random() * roundTo); });
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataWeek = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var weeks = _this.period.getWeeks();
            return weeks[weeks.length - 1];
        });
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataMonth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var months = _this.period.getMonths();
            return months[months.length - 1];
        });
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataYear = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var years = _this.period.getYears();
            return "" + (parseInt(years[0], 10) - 1);
        });
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    TrafficListService.prototype.reduceData = /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    function (timePeriods, getFirstDateInPeriod) {
        var _this = this;
        return timePeriods.reduce((/**
         * @param {?} result
         * @param {?} timePeriod
         * @param {?} index
         * @return {?}
         */
        function (result, timePeriod, index) {
            /** @type {?} */
            var hasResult = result[index - 1];
            /** @type {?} */
            var prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            /** @type {?} */
            var prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                _this.getRandom(100);
            /** @type {?} */
            var nextValue = _this.getRandom(100);
            /** @type {?} */
            var deltaValue = prevValue - nextValue;
            /** @type {?} */
            var item = {
                date: timePeriod,
                value: _this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate: prevDate,
                    prevValue: prevValue,
                    nextDate: timePeriod,
                    nextValue: nextValue,
                },
            };
            return __spread(result, [item]);
        }), []);
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TrafficListService.prototype.getTrafficListData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return of(this.data[period]);
    };
    TrafficListService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TrafficListService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return TrafficListService;
}(TrafficListData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.getRandom;
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/earning.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EarningService = /** @class */ (function (_super) {
    __extends(EarningService, _super);
    function EarningService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentDate = new Date();
        _this.currentValue = Math.random() * 1000;
        _this.ONE_DAY = 24 * 3600 * 1000;
        _this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        _this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
        return _this;
    }
    /**
     * @param {?} elementsNumber
     * @return {?}
     */
    EarningService.prototype.getDefaultLiveChartData = /**
     * @param {?} elementsNumber
     * @return {?}
     */
    function (elementsNumber) {
        var _this = this;
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.generateRandomLiveChartData(); }));
    };
    /**
     * @return {?}
     */
    EarningService.prototype.generateRandomLiveChartData = /**
     * @return {?}
     */
    function () {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    };
    /**
     * @param {?} currency
     * @return {?}
     */
    EarningService.prototype.getEarningLiveUpdateCardData = /**
     * @param {?} currency
     * @return {?}
     */
    function (currency) {
        /** @type {?} */
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        /** @type {?} */
        var newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return of(data.liveChart);
    };
    /**
     * @param {?} currency
     * @return {?}
     */
    EarningService.prototype.getEarningCardData = /**
     * @param {?} currency
     * @return {?}
     */
    function (currency) {
        /** @type {?} */
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return of(data);
    };
    /**
     * @return {?}
     */
    EarningService.prototype.getEarningPieChartData = /**
     * @return {?}
     */
    function () {
        return of(this.pieChartData);
    };
    EarningService.decorators = [
        { type: Injectable }
    ];
    return EarningService;
}(EarningData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.currentDate;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.currentValue;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.ONE_DAY;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.pieChartData;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.liveUpdateChartData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/orders-profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OrdersProfitChartService = /** @class */ (function (_super) {
    __extends(OrdersProfitChartService, _super);
    function OrdersProfitChartService(ordersChartService, profitChartService) {
        var _this = _super.call(this) || this;
        _this.ordersChartService = ordersChartService;
        _this.profitChartService = profitChartService;
        _this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    OrdersProfitChartService.prototype.getOrderProfitChartSummary = /**
     * @return {?}
     */
    function () {
        return of(this.summary);
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartService.prototype.getOrdersChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return of(this.ordersChartService.getOrdersChartData(period));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartService.prototype.getProfitChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return of(this.profitChartService.getProfitChartData(period));
    };
    OrdersProfitChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrdersProfitChartService.ctorParameters = function () { return [
        { type: OrdersChartData },
        { type: ProfitChartData }
    ]; };
    return OrdersProfitChartService;
}(OrdersProfitChartData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.summary;
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.ordersChartService;
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.profitChartService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TrafficBarService = /** @class */ (function (_super) {
    __extends(TrafficBarService, _super);
    function TrafficBarService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForWeekPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    };
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForMonthPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    };
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForYearPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TrafficBarService.prototype.getTrafficBarData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return of(this.data[period]);
    };
    TrafficBarService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TrafficBarService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return TrafficBarService;
}(TrafficBarData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficBarService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TrafficBarService.prototype.period;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-bar-animation-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfitBarAnimationChartService = /** @class */ (function (_super) {
    __extends(ProfitBarAnimationChartService, _super);
    function ProfitBarAnimationChartService() {
        var _this = _super.call(this) || this;
        _this.data = {
            firstLine: _this.getDataForFirstLine(),
            secondLine: _this.getDataForSecondLine(),
        };
        return _this;
    }
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getDataForFirstLine = /**
     * @return {?}
     */
    function () {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    };
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getDataForSecondLine = /**
     * @return {?}
     */
    function () {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    };
    /**
     * @param {?} nPoints
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.createEmptyArray = /**
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints));
    };
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getChartData = /**
     * @return {?}
     */
    function () {
        return of(this.data);
    };
    ProfitBarAnimationChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfitBarAnimationChartService.ctorParameters = function () { return []; };
    return ProfitBarAnimationChartService;
}(ProfitBarAnimationChartData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitBarAnimationChartService.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/temperature-humidity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TemperatureHumidityService = /** @class */ (function (_super) {
    __extends(TemperatureHumidityService, _super);
    function TemperatureHumidityService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        _this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
        return _this;
    }
    /**
     * @return {?}
     */
    TemperatureHumidityService.prototype.getTemperatureData = /**
     * @return {?}
     */
    function () {
        return of(this.temperatureDate);
    };
    /**
     * @return {?}
     */
    TemperatureHumidityService.prototype.getHumidityData = /**
     * @return {?}
     */
    function () {
        return of(this.humidityDate);
    };
    TemperatureHumidityService.decorators = [
        { type: Injectable }
    ];
    return TemperatureHumidityService;
}(TemperatureHumidityData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemperatureHumidityService.prototype.temperatureDate;
    /**
     * @type {?}
     * @private
     */
    TemperatureHumidityService.prototype.humidityDate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/solar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SolarService = /** @class */ (function (_super) {
    __extends(SolarService, _super);
    function SolarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 42;
        return _this;
    }
    /**
     * @return {?}
     */
    SolarService.prototype.getSolarData = /**
     * @return {?}
     */
    function () {
        return of(this.value);
    };
    SolarService.decorators = [
        { type: Injectable }
    ];
    return SolarService;
}(SolarData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SolarService.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TrafficChartService = /** @class */ (function (_super) {
    __extends(TrafficChartService, _super);
    function TrafficChartService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    TrafficChartService.prototype.getTrafficChartData = /**
     * @return {?}
     */
    function () {
        return of(this.data);
    };
    TrafficChartService.decorators = [
        { type: Injectable }
    ];
    return TrafficChartService;
}(TrafficChartData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficChartService.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StatsBarService = /** @class */ (function (_super) {
    __extends(StatsBarService, _super);
    function StatsBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    StatsBarService.prototype.getStatsBarData = /**
     * @return {?}
     */
    function () {
        return of(this.statsBarData);
    };
    StatsBarService.decorators = [
        { type: Injectable }
    ];
    return StatsBarService;
}(StatsBarData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsBarService.prototype.statsBarData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/country-order.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CountryOrderService = /** @class */ (function (_super) {
    __extends(CountryOrderService, _super);
    function CountryOrderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        _this.countriesCategoriesLength = _this.countriesCategories.length;
        return _this;
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    CountryOrderService.prototype.generateRandomData = /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 20);
        }));
    };
    /**
     * @return {?}
     */
    CountryOrderService.prototype.getCountriesCategories = /**
     * @return {?}
     */
    function () {
        return of(this.countriesCategories);
    };
    /**
     * @param {?} country
     * @return {?}
     */
    CountryOrderService.prototype.getCountriesCategoriesData = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        return of(this.generateRandomData(this.countriesCategoriesLength));
    };
    CountryOrderService.decorators = [
        { type: Injectable }
    ];
    return CountryOrderService;
}(CountryOrderData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    CountryOrderService.prototype.countriesCategories;
    /**
     * @type {?}
     * @private
     */
    CountryOrderService.prototype.countriesCategoriesLength;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-progress-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StatsProgressBarService = /** @class */ (function (_super) {
    __extends(StatsProgressBarService, _super);
    function StatsProgressBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    StatsProgressBarService.prototype.getProgressInfoData = /**
     * @return {?}
     */
    function () {
        return of(this.progressInfoData);
    };
    StatsProgressBarService.decorators = [
        { type: Injectable }
    ];
    return StatsProgressBarService;
}(StatsProgressBarData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsProgressBarService.prototype.progressInfoData;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/visitors-analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VisitorsAnalyticsService = /** @class */ (function (_super) {
    __extends(VisitorsAnalyticsService, _super);
    function VisitorsAnalyticsService(periodService) {
        var _this = _super.call(this) || this;
        _this.periodService = periodService;
        _this.pieChartValue = 75;
        _this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        _this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.generateOutlineLineData = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var months = this.periodService.getMonths();
        /** @type {?} */
        var outerLinePointsLength = this.outerLinePoints.length;
        /** @type {?} */
        var monthsLength = months.length;
        return this.outerLinePoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        function (p, index) {
            /** @type {?} */
            var monthIndex = Math.round(index / 4);
            /** @type {?} */
            var label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label: label,
                value: p,
            };
        }));
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getInnerLineChartData = /**
     * @return {?}
     */
    function () {
        return of(this.innerLinePoints);
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getOutlineLineChartData = /**
     * @return {?}
     */
    function () {
        return of(this.generateOutlineLineData());
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getPieChartData = /**
     * @return {?}
     */
    function () {
        return of(this.pieChartValue);
    };
    VisitorsAnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VisitorsAnalyticsService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return VisitorsAnalyticsService;
}(VisitorsAnalyticsData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.pieChartValue;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.innerLinePoints;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.outerLinePoints;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.periodService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/security-cameras.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SecurityCamerasService = /** @class */ (function (_super) {
    __extends(SecurityCamerasService, _super);
    function SecurityCamerasService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    SecurityCamerasService.prototype.getCamerasData = /**
     * @return {?}
     */
    function () {
        return of(this.cameras);
    };
    SecurityCamerasService.decorators = [
        { type: Injectable }
    ];
    return SecurityCamerasService;
}(SecurityCamerasData));
if (false) {
    /**
     * @type {?}
     * @private
     */
    SecurityCamerasService.prototype.cameras;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/mock-data.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SERVICES = [
    UserService,
    ElectricityService,
    SmartTableService,
    UserActivityService,
    OrdersChartService,
    ProfitChartService,
    TrafficListService,
    PeriodsService,
    EarningService,
    OrdersProfitChartService,
    TrafficBarService,
    ProfitBarAnimationChartService,
    TemperatureHumidityService,
    SolarService,
    TrafficChartService,
    StatsBarService,
    CountryOrderService,
    StatsProgressBarService,
    VisitorsAnalyticsService,
    SecurityCamerasService,
];
var MockDataModule = /** @class */ (function () {
    function MockDataModule() {
    }
    /**
     * @return {?}
     */
    MockDataModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: MockDataModule,
            providers: __spread(SERVICES),
        }));
    };
    MockDataModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    providers: __spread(SERVICES),
                },] }
    ];
    return MockDataModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    __extends(NbSimpleRoleProvider, _super);
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
        return of('guest');
    };
    return NbSimpleRoleProvider;
}(NbRoleProvider));
/** @type {?} */
var NB_CORE_PROVIDERS = __spread(MockDataModule.forRoot().providers, DATA_SERVICES, NbAuthModule.forRoot({
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
            providers: __spread(NB_CORE_PROVIDERS),
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/data/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, themeService, userService, layoutService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.userService = userService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} users
         * @return {?}
         */
        function (users) { return _this.user = users.nick; }));
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), currentBreakpoint = _b[1];
            return currentBreakpoint.width < xl;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; }));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        function (themeName) { return _this.currentTheme = themeName; }));
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} themeName
     * @return {?}
     */
    HeaderComponent.prototype.changeTheme = /**
     * @param {?} themeName
     * @return {?}
     */
    function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.navigateHome = /**
     * @return {?}
     */
    function () {
        this.menuService.navigateHome();
        return false;
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-header',
                    template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"user?.name\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: NbSidebarService },
        { type: NbMenuService },
        { type: NbThemeService },
        { type: UserData },
        { type: LayoutService },
        { type: NbMediaBreakpointsService }
    ]; };
    return HeaderComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.destroy$;
    /** @type {?} */
    HeaderComponent.prototype.userPictureOnly;
    /** @type {?} */
    HeaderComponent.prototype.user;
    /** @type {?} */
    HeaderComponent.prototype.themes;
    /** @type {?} */
    HeaderComponent.prototype.currentTheme;
    /** @type {?} */
    HeaderComponent.prototype.userMenu;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.sidebarService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.breakpointService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/footer/footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-footer',
                    template: "\n    <span class=\"created-by\">Created with \u2665 by <b><a href=\"https://akveo.com\" target=\"_blank\">Akveo</a></b> 2019</span>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default :host .socials{font-size:2rem}.nb-theme-default :host .socials a{padding:.4rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-default :host .socials a:hover{color:#222b45}@media (max-width:575.98px){.nb-theme-default :host .socials{font-size:1.5rem}}.nb-theme-dark :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark :host .socials{font-size:2rem}.nb-theme-dark :host .socials a{padding:.4rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-dark :host .socials a:hover{color:#fff}@media (max-width:575.98px){.nb-theme-dark :host .socials{font-size:1.5rem}}.nb-theme-cosmic :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic :host .socials{font-size:2rem}.nb-theme-cosmic :host .socials a{padding:.4rem;color:#b4b4db;transition:color .1s ease-out}.nb-theme-cosmic :host .socials a:hover{color:#fff}@media (max-width:575.98px){.nb-theme-cosmic :host .socials{font-size:1.5rem}}.nb-theme-corporate :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate :host .socials{font-size:2rem}.nb-theme-corporate :host .socials a{padding:.4rem;color:#8f9bb3;transition:color .1s ease-out}.nb-theme-corporate :host .socials a:hover{color:#222b45}@media (max-width:575.98px){.nb-theme-corporate :host .socials{font-size:1.5rem}}"]
                }] }
    ];
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.showInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.hideInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SearchInputComponent.prototype.onInput = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.search.emit(val);
    };
    SearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-search-input',
                    template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
                }] }
    ];
    SearchInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input', { static: true },] }],
        search: [{ type: Output }]
    };
    return SearchInputComponent;
}());
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.input;
    /** @type {?} */
    SearchInputComponent.prototype.search;
    /** @type {?} */
    SearchInputComponent.prototype.isInputShown;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/tiny-mce/tiny-mce.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TinyMCEComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: this.locationStrategy.getBaseHref() + "assets/skins/lightgray",
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            function (editor) {
                _this.editor = editor;
                editor.on('keyup', (/**
                 * @return {?}
                 */
                function () {
                    _this.editorKeyup.emit(editor.getContent());
                }));
            }),
            height: '320',
        });
    };
    /**
     * @return {?}
     */
    TinyMCEComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        tinymce.remove(this.editor);
    };
    TinyMCEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-tiny-mce',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    TinyMCEComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LocationStrategy }
    ]; };
    TinyMCEComponent.propDecorators = {
        editorKeyup: [{ type: Output }]
    };
    return TinyMCEComponent;
}());
if (false) {
    /** @type {?} */
    TinyMCEComponent.prototype.editorKeyup;
    /** @type {?} */
    TinyMCEComponent.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.host;
    /**
     * @type {?}
     * @private
     */
    TinyMCEComponent.prototype.locationStrategy;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/one-column/one-column.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OneColumnLayoutComponent = /** @class */ (function () {
    function OneColumnLayoutComponent() {
    }
    OneColumnLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-one-column-layout',
                    template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                }] }
    ];
    return OneColumnLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/two-columns/two-columns.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent() {
    }
    TwoColumnsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-two-columns-layout',
                    template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                }] }
    ];
    return TwoColumnsLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/three-columns/three-columns.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ThreeColumnsLayoutComponent = /** @class */ (function () {
    function ThreeColumnsLayoutComponent() {
    }
    ThreeColumnsLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-three-columns-layout',
                    template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                }] }
    ];
    return ThreeColumnsLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/capitalize.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    CapitalizePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
    ];
    return CapitalizePipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/plural.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    PluralPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxPlural' },] }
    ];
    return PluralPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/round.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    RoundPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return Math.round(input);
    };
    RoundPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxRound' },] }
    ];
    return RoundPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/timing.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.transform = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time) {
            /** @type {?} */
            var minutes = Math.floor(time / 60);
            /** @type {?} */
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.initZero = /**
     * @private
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe.decorators = [
        { type: Pipe, args: [{ name: 'timing' },] }
    ];
    return TimingPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/number-with-commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberWithCommasPipe = /** @class */ (function () {
    function NumberWithCommasPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    NumberWithCommasPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxNumberWithCommas' },] }
    ];
    return NumberWithCommasPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/styles/theme.default.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var baseThemeVariables = DEFAULT_THEME$1.variables;
/** @type {?} */
var DEFAULT_THEME = (/** @type {?} */ ({
    name: 'default',
    base: 'default',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
                baseThemeVariables.primary,
            ],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/styles/theme.cosmic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var baseThemeVariables$1 = COSMIC_THEME$1.variables;
/** @type {?} */
var COSMIC_THEME = (/** @type {?} */ ({
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables$1.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables$1.primary,
            gradientRight: baseThemeVariables$1.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$1.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$1.separator,
            lineBg: baseThemeVariables$1.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables$1.border2,
            itemBorderColor: baseThemeVariables$1.border2,
            itemEmphasisBorderColor: baseThemeVariables$1.primary,
            shadowLineDarkBg: baseThemeVariables$1.border3,
            shadowLineShadow: baseThemeVariables$1.border3,
            gradFrom: baseThemeVariables$1.bg,
            gradTo: baseThemeVariables$1.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: baseThemeVariables$1.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$1.border3,
            xAxisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables$1.success,
            lineGradTo: baseThemeVariables$1.warning,
            lineShadow: baseThemeVariables$1.bg4,
            areaGradFrom: baseThemeVariables$1.bg2,
            areaGradTo: baseThemeVariables$1.bg3,
            shadowLineDarkBg: baseThemeVariables$1.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables$1.fgText,
            areaColor: baseThemeVariables$1.bg4,
            areaHoverColor: baseThemeVariables$1.fgHighlight,
            areaBorderColor: baseThemeVariables$1.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$1.fgText,
            firstAnimationBarColor: baseThemeVariables$1.primary,
            secondAnimationBarColor: baseThemeVariables$1.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$1.border2,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$1.warningLight,
            gradientTo: baseThemeVariables$1.warning,
            shadow: baseThemeVariables$1.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables$1.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$1.border4,
            countryFillColor: baseThemeVariables$1.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$1.primary,
            hoveredCountryFillColor: baseThemeVariables$1.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$1.border4,
            chartAxisTextColor: baseThemeVariables$1.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$1.primary,
            chartGradientFrom: baseThemeVariables$1.primaryLight,
            chartAxisSplitLine: baseThemeVariables$1.separator,
            chartShadowLineColor: baseThemeVariables$1.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$1.primary,
            chartInnerLineColor: baseThemeVariables$1.bg2,
        },
        echarts: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.fgText,
            splitLineColor: baseThemeVariables$1.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$1.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$1.separator,
            textColor: baseThemeVariables$1.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$1.bg2,
            firstAreaGradTo: baseThemeVariables$1.bg2,
            firstShadowLineDarkBg: baseThemeVariables$1.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables$1.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables$1.success,
        },
        profit: {
            bg: baseThemeVariables$1.bg,
            textColor: baseThemeVariables$1.fgText,
            axisLineColor: baseThemeVariables$1.border4,
            splitLineColor: baseThemeVariables$1.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$1.bg2,
            firstLineGradTo: baseThemeVariables$1.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$1.primary,
            secondLineGradTo: baseThemeVariables$1.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$1.success,
            thirdLineGradTo: baseThemeVariables$1.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$1.success,
            secondItem: baseThemeVariables$1.primary,
            thirdItem: baseThemeVariables$1.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables$1.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$1.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$1.fg,
            yAxisSplitLine: baseThemeVariables$1.separator,
            itemBorderColor: baseThemeVariables$1.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$1.primary,
            areaGradTo: baseThemeVariables$1.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$1.success,
            innerAreaGradTo: baseThemeVariables$1.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$1.success,
            secondIcon: baseThemeVariables$1.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$1.warning,
            secondPieGradientRight: baseThemeVariables$1.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$1.warning,
            secondSection: baseThemeVariables$1.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$1.success,
            firstPieGradientRight: baseThemeVariables$1.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$1.primary,
            secondPieGradientRight: baseThemeVariables$1.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$1.warning,
            thirdPieGradientRight: baseThemeVariables$1.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$1.primary,
            gradTo: baseThemeVariables$1.primary,
            tooltipTextColor: baseThemeVariables$1.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$1.bg,
            tooltipBorderColor: baseThemeVariables$1.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/styles/theme.corporate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var baseThemeVariables$2 = CORPORATE_THEME$1.variables;
/** @type {?} */
var CORPORATE_THEME = (/** @type {?} */ ({
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables$2.bg2,
            thumbBg: baseThemeVariables$2.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables$2.primary,
            gradientRight: baseThemeVariables$2.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$2.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables$2.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables$2.border4,
            itemBorderColor: baseThemeVariables$2.border4,
            itemEmphasisBorderColor: baseThemeVariables$2.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$2.bg,
            gradTo: baseThemeVariables$2.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: baseThemeVariables$2.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$2.border3,
            xAxisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$2.primary,
            lineGradTo: baseThemeVariables$2.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$2.fgText,
            areaColor: baseThemeVariables$2.bg4,
            areaHoverColor: baseThemeVariables$2.fgHighlight,
            areaBorderColor: baseThemeVariables$2.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$2.fgText,
            firstAnimationBarColor: baseThemeVariables$2.primary,
            secondAnimationBarColor: baseThemeVariables$2.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$2.separator,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$2.warningLight,
            gradientTo: baseThemeVariables$2.warning,
            shadow: baseThemeVariables$2.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$2.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$2.border4,
            countryFillColor: baseThemeVariables$2.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$2.primary,
            hoveredCountryFillColor: baseThemeVariables$2.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$2.border4,
            chartAxisTextColor: baseThemeVariables$2.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$2.primary,
            chartGradientFrom: baseThemeVariables$2.primaryLight,
            chartAxisSplitLine: baseThemeVariables$2.separator,
            chartShadowLineColor: baseThemeVariables$2.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$2.primary,
            chartInnerLineColor: baseThemeVariables$2.bg2,
        },
        echarts: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.fgText,
            splitLineColor: baseThemeVariables$2.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$2.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$2.separator,
            textColor: baseThemeVariables$2.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$2.bg3,
            firstAreaGradTo: baseThemeVariables$2.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$2.bg,
            textColor: baseThemeVariables$2.fgText,
            axisLineColor: baseThemeVariables$2.border4,
            splitLineColor: baseThemeVariables$2.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$2.bg3,
            firstLineGradTo: baseThemeVariables$2.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$2.primary,
            secondLineGradTo: baseThemeVariables$2.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$2.success,
            thirdLineGradTo: baseThemeVariables$2.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$2.success,
            secondItem: baseThemeVariables$2.primary,
            thirdItem: baseThemeVariables$2.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$2.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$2.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$2.fg,
            yAxisSplitLine: baseThemeVariables$2.separator,
            itemBorderColor: baseThemeVariables$2.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$2.primary,
            areaGradTo: baseThemeVariables$2.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$2.success,
            innerAreaGradTo: baseThemeVariables$2.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$2.success,
            secondIcon: baseThemeVariables$2.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables$2.warning,
            secondPieGradientRight: baseThemeVariables$2.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$2.warning,
            secondSection: baseThemeVariables$2.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$2.success,
            firstPieGradientRight: baseThemeVariables$2.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$2.primary,
            secondPieGradientRight: baseThemeVariables$2.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$2.warning,
            thirdPieGradientRight: baseThemeVariables$2.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$2.primary,
            gradTo: baseThemeVariables$2.primary,
            tooltipTextColor: baseThemeVariables$2.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$2.bg,
            tooltipBorderColor: baseThemeVariables$2.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/styles/theme.dark.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var baseThemeVariables$3 = DARK_THEME$1.variables;
/** @type {?} */
var DARK_THEME = (/** @type {?} */ ({
    name: 'dark',
    base: 'dark',
    variables: {
        temperature: {
            arcFill: [
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
                baseThemeVariables$3.primary,
            ],
            arcEmpty: baseThemeVariables$3.bg2,
            thumbBg: baseThemeVariables$3.bg2,
            thumbBorder: baseThemeVariables$3.primary,
        },
        solar: {
            gradientLeft: baseThemeVariables$3.primary,
            gradientRight: baseThemeVariables$3.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables$3.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables$3.separator,
            lineBg: baseThemeVariables$3.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables$3.border4,
            itemBorderColor: baseThemeVariables$3.border4,
            itemEmphasisBorderColor: baseThemeVariables$3.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables$3.bg2,
            gradTo: baseThemeVariables$3.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: baseThemeVariables$3.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables$3.border3,
            xAxisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables$3.primary,
            lineGradTo: baseThemeVariables$3.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.bg2,
            areaGradTo: baseThemeVariables$3.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables$3.fgText,
            areaColor: baseThemeVariables$3.bg4,
            areaHoverColor: baseThemeVariables$3.fgHighlight,
            areaBorderColor: baseThemeVariables$3.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables$3.fgText,
            firstAnimationBarColor: baseThemeVariables$3.primary,
            secondAnimationBarColor: baseThemeVariables$3.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables$3.separator,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables$3.warningLight,
            gradientTo: baseThemeVariables$3.warning,
            shadow: baseThemeVariables$3.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables$3.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables$3.border4,
            countryFillColor: baseThemeVariables$3.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables$3.primary,
            hoveredCountryFillColor: baseThemeVariables$3.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables$3.border4,
            chartAxisTextColor: baseThemeVariables$3.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables$3.primary,
            chartGradientFrom: baseThemeVariables$3.primaryLight,
            chartAxisSplitLine: baseThemeVariables$3.separator,
            chartShadowLineColor: baseThemeVariables$3.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables$3.primary,
            chartInnerLineColor: baseThemeVariables$3.bg2,
        },
        echarts: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.fgText,
            splitLineColor: baseThemeVariables$3.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables$3.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables$3.separator,
            textColor: baseThemeVariables$3.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables$3.bg3,
            firstAreaGradTo: baseThemeVariables$3.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables$3.bg,
            textColor: baseThemeVariables$3.fgText,
            axisLineColor: baseThemeVariables$3.border4,
            splitLineColor: baseThemeVariables$3.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables$3.bg3,
            firstLineGradTo: baseThemeVariables$3.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables$3.primary,
            secondLineGradTo: baseThemeVariables$3.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables$3.success,
            thirdLineGradTo: baseThemeVariables$3.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables$3.success,
            secondItem: baseThemeVariables$3.primary,
            thirdItem: baseThemeVariables$3.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables$3.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables$3.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables$3.fg,
            yAxisSplitLine: baseThemeVariables$3.separator,
            itemBorderColor: baseThemeVariables$3.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables$3.primary,
            areaGradTo: baseThemeVariables$3.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables$3.success,
            innerAreaGradTo: baseThemeVariables$3.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables$3.success,
            secondIcon: baseThemeVariables$3.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables$3.warning,
            secondPieGradientRight: baseThemeVariables$3.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables$3.warning,
            secondSection: baseThemeVariables$3.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables$3.success,
            firstPieGradientRight: baseThemeVariables$3.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables$3.primary,
            secondPieGradientRight: baseThemeVariables$3.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables$3.warning,
            thirdPieGradientRight: baseThemeVariables$3.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables$3.primary,
            gradTo: baseThemeVariables$3.primary,
            tooltipTextColor: baseThemeVariables$3.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables$3.bg,
            tooltipBorderColor: baseThemeVariables$3.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
];
/** @type {?} */
var COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
var PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    /**
     * @return {?}
     */
    ThemeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ ({
            ngModule: ThemeModule,
            providers: __spread(NbThemeModule.forRoot({
                name: 'default',
            }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers),
        }));
    };
    ThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([CommonModule], NB_MODULES),
                    exports: __spread([CommonModule], PIPES, COMPONENTS),
                    declarations: __spread(COMPONENTS, PIPES),
                },] }
    ];
    return ThemeModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-ngx-admin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AnalyticsService, CapitalizePipe, CoreModule, CountryOrderData, EarningData, ElectricityData, FooterComponent, HeaderComponent, LayoutService, NB_CORE_PROVIDERS, NbSimpleRoleProvider, NumberWithCommasPipe, OneColumnLayoutComponent, OrdersChartData, OrdersProfitChartData, PlayerService, PluralPipe, ProfitBarAnimationChartData, ProfitChartData, RoundPipe, SearchInputComponent, SecurityCamerasData, SmartTableData, SolarData, StateService, StatsBarData, StatsProgressBarData, TemperatureHumidityData, ThemeModule, ThreeColumnsLayoutComponent, TimingPipe, TinyMCEComponent, Track, TrafficBarData, TrafficChartData, TrafficListData, TwoColumnsLayoutComponent, UserActivityData, UserData, VisitorsAnalyticsData, MockDataModule as ɵa, UserService as ɵb, ElectricityService as ɵc, SmartTableService as ɵd, UserActivityService as ɵe, PeriodsService as ɵf, OrdersChartService as ɵg, ProfitChartService as ɵh, TrafficListService as ɵi, EarningService as ɵj, OrdersProfitChartService as ɵk, TrafficBarService as ɵl, ProfitBarAnimationChartService as ɵm, TemperatureHumidityService as ɵn, SolarService as ɵo, TrafficChartService as ɵp, StatsBarService as ɵq, CountryOrderService as ɵr, StatsProgressBarService as ɵs, VisitorsAnalyticsService as ɵt, SecurityCamerasService as ɵu, DEFAULT_THEME as ɵv, COSMIC_THEME as ɵw, CORPORATE_THEME as ɵx, DARK_THEME as ɵy };
//# sourceMappingURL=fs-ngx-admin.js.map
