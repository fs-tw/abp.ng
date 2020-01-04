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
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnalyticsService {
    /**
     * @param {?} location
     * @param {?} router
     */
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            (event) => event instanceof NavigationEnd)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            }));
        }
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnalyticsService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
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
class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
    }
    /**
     * @return {?}
     */
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    /**
     * @return {?}
     */
    onChangeLayoutSize() {
        return this.layoutSize$.pipe(share(), delay(1));
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
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
class Track {
}
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
class PlayerService {
    constructor() {
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
    random() {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    }
    /**
     * @return {?}
     */
    next() {
        return this.getNextTrack();
    }
    /**
     * @return {?}
     */
    prev() {
        return this.getPrevTrack();
    }
    /**
     * @private
     * @return {?}
     */
    getNextTrack() {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    }
    /**
     * @private
     * @return {?}
     */
    getPrevTrack() {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    }
}
PlayerService.decorators = [
    { type: Injectable }
];
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
class StateService {
    /**
     * @param {?} directionService
     */
    constructor(directionService) {
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
        () => this.alive)))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        direction => this.updateSidebarIcons(direction)));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.alive = false;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        /** @type {?} */
        const isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    /**
     * @return {?}
     */
    getLayoutStates() {
        return of(this.layouts);
    }
    /**
     * @return {?}
     */
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    /**
     * @return {?}
     */
    getSidebarStates() {
        return of(this.sidebars);
    }
    /**
     * @return {?}
     */
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
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
class UserData {
}
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
class ElectricityData {
}
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
class SmartTableData {
}
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
class UserActivityData {
}
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
class OrdersChartData {
}
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
class ProfitChartData {
}
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
class TrafficListData {
}
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
class EarningData {
}
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
class OrdersProfitChartData {
}
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
class TrafficBarData {
}
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
class ProfitBarAnimationChartData {
}
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
class TemperatureHumidityData {
}
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
class SolarData {
}
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
class TrafficChartData {
}
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
class StatsBarData {
}
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
class CountryOrderData {
}
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
class StatsProgressBarData {
}
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
class VisitorsAnalyticsData {
}
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
class SecurityCamerasData {
}
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
class UserService extends UserData {
    constructor() {
        super(...arguments);
        this.time = new Date;
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        this.contacts = [
            { user: this.users.nick, type: this.types.mobile },
            { user: this.users.eva, type: this.types.home },
            { user: this.users.jack, type: this.types.mobile },
            { user: this.users.lee, type: this.types.mobile },
            { user: this.users.alan, type: this.types.home },
            { user: this.users.kate, type: this.types.work },
        ];
        this.recentUsers = [
            { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
            { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
            { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
            { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
        ];
    }
    /**
     * @return {?}
     */
    getUsers() {
        return of(this.users);
    }
    /**
     * @return {?}
     */
    getContacts() {
        return of(this.contacts);
    }
    /**
     * @return {?}
     */
    getRecentUsers() {
        return of(this.recentUsers);
    }
}
UserService.decorators = [
    { type: Injectable }
];
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
class ElectricityService extends ElectricityData {
    constructor() {
        super();
        this.listData = [
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
        this.chartPoints = [
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
        this.chartData = this.chartPoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        (p, index) => ({
            label: (index % 5 === 3) ? `${Math.round(index / 5)}` : '',
            value: p,
        })));
    }
    /**
     * @return {?}
     */
    getListData() {
        return of(this.listData);
    }
    /**
     * @return {?}
     */
    getChartData() {
        return of(this.chartData);
    }
}
ElectricityService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ElectricityService.ctorParameters = () => [];
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
class SmartTableService extends SmartTableData {
    constructor() {
        super(...arguments);
        this.data = [{
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
    }
    /**
     * @return {?}
     */
    getData() {
        return this.data;
    }
}
SmartTableService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    SmartTableService.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/periods.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PeriodsService {
    /**
     * @return {?}
     */
    getYears() {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    }
    /**
     * @return {?}
     */
    getMonths() {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    }
    /**
     * @return {?}
     */
    getWeeks() {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    }
}
PeriodsService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/user-activity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserActivityService extends UserActivityData {
    /**
     * @param {?} periods
     */
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        (roundTo) => Math.round(Math.random() * roundTo));
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataWeek() {
        return this.periods.getWeeks().map((/**
         * @param {?} week
         * @return {?}
         */
        (week) => {
            return this.generateUserActivityRandomData(week);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getDataMonth() {
        /** @type {?} */
        const currentDate = new Date();
        /** @type {?} */
        const days = currentDate.getDate();
        /** @type {?} */
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getDataYear() {
        return this.periods.getYears().map((/**
         * @param {?} year
         * @return {?}
         */
        (year) => {
            return this.generateUserActivityRandomData(year);
        }));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getUserActivityData(period) {
        return of(this.data[period]);
    }
}
UserActivityService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserActivityService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class OrdersChartService extends OrdersChartData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForWeekPeriod() {
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
    }
    /**
     * @private
     * @return {?}
     */
    getDataForMonthPeriod() {
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
    }
    /**
     * @private
     * @return {?}
     */
    getDataForYearPeriod() {
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
    }
    /**
     * @param {?} nPoints
     * @param {?} labelsArray
     * @return {?}
     */
    getDataLabels(nPoints, labelsArray) {
        /** @type {?} */
        const labelsArrayLength = labelsArray.length;
        /** @type {?} */
        const step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            /** @type {?} */
            const dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        }));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getOrdersChartData(period) {
        return this.data[period];
    }
}
OrdersChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrdersChartService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class ProfitChartService extends ProfitChartData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForWeekPeriod() {
        /** @type {?} */
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForMonthPeriod() {
        /** @type {?} */
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForYearPeriod() {
        /** @type {?} */
        const nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        () => {
            return Math.round(Math.random() * 500);
        }));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getProfitChartData(period) {
        return this.data[period];
    }
}
ProfitChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfitChartService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class TrafficListService extends TrafficListData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        (roundTo) => Math.round(Math.random() * roundTo));
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataWeek() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        });
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @return {?}
     */
    getDataMonth() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const months = this.period.getMonths();
            return months[months.length - 1];
        });
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @return {?}
     */
    getDataYear() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        });
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((/**
         * @param {?} result
         * @param {?} timePeriod
         * @param {?} index
         * @return {?}
         */
        (result, timePeriod, index) => {
            /** @type {?} */
            const hasResult = result[index - 1];
            /** @type {?} */
            const prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            /** @type {?} */
            const prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                this.getRandom(100);
            /** @type {?} */
            const nextValue = this.getRandom(100);
            /** @type {?} */
            const deltaValue = prevValue - nextValue;
            /** @type {?} */
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }), []);
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getTrafficListData(period) {
        return of(this.data[period]);
    }
}
TrafficListService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TrafficListService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class EarningService extends EarningData {
    constructor() {
        super(...arguments);
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        this.ONE_DAY = 24 * 3600 * 1000;
        this.pieChartData = [
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
        this.liveUpdateChartData = {
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
    }
    /**
     * @param {?} elementsNumber
     * @return {?}
     */
    getDefaultLiveChartData(elementsNumber) {
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.generateRandomLiveChartData()));
    }
    /**
     * @return {?}
     */
    generateRandomLiveChartData() {
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
    }
    /**
     * @param {?} currency
     * @return {?}
     */
    getEarningLiveUpdateCardData(currency) {
        /** @type {?} */
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        /** @type {?} */
        const newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return of(data.liveChart);
    }
    /**
     * @param {?} currency
     * @return {?}
     */
    getEarningCardData(currency) {
        /** @type {?} */
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return of(data);
    }
    /**
     * @return {?}
     */
    getEarningPieChartData() {
        return of(this.pieChartData);
    }
}
EarningService.decorators = [
    { type: Injectable }
];
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
class OrdersProfitChartService extends OrdersProfitChartData {
    /**
     * @param {?} ordersChartService
     * @param {?} profitChartService
     */
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
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
    }
    /**
     * @return {?}
     */
    getOrderProfitChartSummary() {
        return of(this.summary);
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getOrdersChartData(period) {
        return of(this.ordersChartService.getOrdersChartData(period));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getProfitChartData(period) {
        return of(this.profitChartService.getProfitChartData(period));
    }
}
OrdersProfitChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrdersProfitChartService.ctorParameters = () => [
    { type: OrdersChartData },
    { type: ProfitChartData }
];
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
class TrafficBarService extends TrafficBarData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    /**
     * @return {?}
     */
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    /**
     * @return {?}
     */
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    /**
     * @return {?}
     */
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getTrafficBarData(period) {
        return of(this.data[period]);
    }
}
TrafficBarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TrafficBarService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    /**
     * @return {?}
     */
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    }
    /**
     * @return {?}
     */
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    }
    /**
     * @param {?} nPoints
     * @return {?}
     */
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    /**
     * @return {?}
     */
    getChartData() {
        return of(this.data);
    }
}
ProfitBarAnimationChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfitBarAnimationChartService.ctorParameters = () => [];
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
class TemperatureHumidityService extends TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    /**
     * @return {?}
     */
    getTemperatureData() {
        return of(this.temperatureDate);
    }
    /**
     * @return {?}
     */
    getHumidityData() {
        return of(this.humidityDate);
    }
}
TemperatureHumidityService.decorators = [
    { type: Injectable }
];
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
class SolarService extends SolarData {
    constructor() {
        super(...arguments);
        this.value = 42;
    }
    /**
     * @return {?}
     */
    getSolarData() {
        return of(this.value);
    }
}
SolarService.decorators = [
    { type: Injectable }
];
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
class TrafficChartService extends TrafficChartData {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    /**
     * @return {?}
     */
    getTrafficChartData() {
        return of(this.data);
    }
}
TrafficChartService.decorators = [
    { type: Injectable }
];
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
class StatsBarService extends StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    /**
     * @return {?}
     */
    getStatsBarData() {
        return of(this.statsBarData);
    }
}
StatsBarService.decorators = [
    { type: Injectable }
];
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
class CountryOrderService extends CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        () => {
            return Math.round(Math.random() * 20);
        }));
    }
    /**
     * @return {?}
     */
    getCountriesCategories() {
        return of(this.countriesCategories);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    getCountriesCategoriesData(country) {
        return of(this.generateRandomData(this.countriesCategoriesLength));
    }
}
CountryOrderService.decorators = [
    { type: Injectable }
];
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
class StatsProgressBarService extends StatsProgressBarData {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
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
    }
    /**
     * @return {?}
     */
    getProgressInfoData() {
        return of(this.progressInfoData);
    }
}
StatsProgressBarService.decorators = [
    { type: Injectable }
];
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
class VisitorsAnalyticsService extends VisitorsAnalyticsData {
    /**
     * @param {?} periodService
     */
    constructor(periodService) {
        super();
        this.periodService = periodService;
        this.pieChartValue = 75;
        this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
    }
    /**
     * @private
     * @return {?}
     */
    generateOutlineLineData() {
        /** @type {?} */
        const months = this.periodService.getMonths();
        /** @type {?} */
        const outerLinePointsLength = this.outerLinePoints.length;
        /** @type {?} */
        const monthsLength = months.length;
        return this.outerLinePoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        (p, index) => {
            /** @type {?} */
            const monthIndex = Math.round(index / 4);
            /** @type {?} */
            const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label,
                value: p,
            };
        }));
    }
    /**
     * @return {?}
     */
    getInnerLineChartData() {
        return of(this.innerLinePoints);
    }
    /**
     * @return {?}
     */
    getOutlineLineChartData() {
        return of(this.generateOutlineLineData());
    }
    /**
     * @return {?}
     */
    getPieChartData() {
        return of(this.pieChartValue);
    }
}
VisitorsAnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VisitorsAnalyticsService.ctorParameters = () => [
    { type: PeriodsService }
];
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
class SecurityCamerasService extends SecurityCamerasData {
    constructor() {
        super(...arguments);
        this.cameras = [
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
    }
    /**
     * @return {?}
     */
    getCamerasData() {
        return of(this.cameras);
    }
}
SecurityCamerasService.decorators = [
    { type: Injectable }
];
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
const SERVICES = [
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
class MockDataModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: MockDataModule,
            providers: [
                ...SERVICES,
            ],
        }));
    }
}
MockDataModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                providers: [
                    ...SERVICES,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class NbSimpleRoleProvider extends NbRoleProvider {
    /**
     * @return {?}
     */
    getRole() {
        // here you could provide any role based on any auth flow
        return of('guest');
    }
}
/** @type {?} */
const NB_CORE_PROVIDERS = [
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
class CoreModule {
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
class HeaderComponent {
    /**
     * @param {?} sidebarService
     * @param {?} menuService
     * @param {?} themeService
     * @param {?} userService
     * @param {?} layoutService
     * @param {?} breakpointService
     */
    constructor(sidebarService, menuService, themeService, userService, layoutService, breakpointService) {
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
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} users
         * @return {?}
         */
        (users) => this.user = users.nick));
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, currentBreakpoint]) => currentBreakpoint.width < xl)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        (isLessThanXl) => this.userPictureOnly = isLessThanXl));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        themeName => this.currentTheme = themeName));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    /**
     * @return {?}
     */
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-header',
                template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"user?.name\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: NbSidebarService },
    { type: NbMenuService },
    { type: NbThemeService },
    { type: UserData },
    { type: LayoutService },
    { type: NbMediaBreakpointsService }
];
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
class FooterComponent {
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-footer',
                template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.nb-theme-default :host .socials{font-size:2rem}.nb-theme-default :host .socials a{padding:.4rem;color:#8f9bb3;-webkit-transition:color .1s ease-out;transition:color .1s ease-out}.nb-theme-default :host .socials a:hover{color:#222b45}@media (max-width:575.98px){.nb-theme-default :host .socials{font-size:1.5rem}}.nb-theme-dark :host{width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.nb-theme-dark :host .socials{font-size:2rem}.nb-theme-dark :host .socials a{padding:.4rem;color:#8f9bb3;-webkit-transition:color .1s ease-out;transition:color .1s ease-out}.nb-theme-dark :host .socials a:hover{color:#fff}@media (max-width:575.98px){.nb-theme-dark :host .socials{font-size:1.5rem}}.nb-theme-cosmic :host{width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.nb-theme-cosmic :host .socials{font-size:2rem}.nb-theme-cosmic :host .socials a{padding:.4rem;color:#b4b4db;-webkit-transition:color .1s ease-out;transition:color .1s ease-out}.nb-theme-cosmic :host .socials a:hover{color:#fff}@media (max-width:575.98px){.nb-theme-cosmic :host .socials{font-size:1.5rem}}.nb-theme-corporate :host{width:100%;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.nb-theme-corporate :host .socials{font-size:2rem}.nb-theme-corporate :host .socials a{padding:.4rem;color:#8f9bb3;-webkit-transition:color .1s ease-out;transition:color .1s ease-out}.nb-theme-corporate :host .socials a:hover{color:#222b45}@media (max-width:575.98px){.nb-theme-corporate :host .socials{font-size:1.5rem}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hideInput() {
        this.isInputShown = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-search-input',
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;-webkit-transition:width .2s;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
            }] }
];
SearchInputComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: true },] }],
    search: [{ type: Output }]
};
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
class TinyMCEComponent {
    /**
     * @param {?} host
     * @param {?} locationStrategy
     */
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
            setup: (/**
             * @param {?} editor
             * @return {?}
             */
            editor => {
                this.editor = editor;
                editor.on('keyup', (/**
                 * @return {?}
                 */
                () => {
                    this.editorKeyup.emit(editor.getContent());
                }));
            }),
            height: '320',
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
TinyMCEComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tiny-mce',
                template: ''
            }] }
];
/** @nocollapse */
TinyMCEComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: LocationStrategy }
];
TinyMCEComponent.propDecorators = {
    editorKeyup: [{ type: Output }]
};
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
class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-one-column-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/two-columns/two-columns.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-two-columns-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/layouts/three-columns/three-columns.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-three-columns-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];

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
class CapitalizePipe {
    /**
     * @param {?} input
     * @return {?}
     */
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/plural.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PluralPipe {
    /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxPlural' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/round.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoundPipe {
    /**
     * @param {?} input
     * @return {?}
     */
    transform(input) {
        return Math.round(input);
    }
}
RoundPipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxRound' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/timing.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimingPipe {
    /**
     * @param {?} time
     * @return {?}
     */
    transform(time) {
        if (time) {
            /** @type {?} */
            const minutes = Math.floor(time / 60);
            /** @type {?} */
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.decorators = [
    { type: Pipe, args: [{ name: 'timing' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/number-with-commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberWithCommasPipe {
    /**
     * @param {?} input
     * @return {?}
     */
    transform(input) {
        return new Intl.NumberFormat().format(input);
    }
}
NumberWithCommasPipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxNumberWithCommas' },] }
];

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
const baseThemeVariables = DEFAULT_THEME$1.variables;
/** @type {?} */
const DEFAULT_THEME = (/** @type {?} */ ({
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
const baseThemeVariables$1 = COSMIC_THEME$1.variables;
/** @type {?} */
const COSMIC_THEME = (/** @type {?} */ ({
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
const baseThemeVariables$2 = CORPORATE_THEME$1.variables;
/** @type {?} */
const CORPORATE_THEME = (/** @type {?} */ ({
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
const baseThemeVariables$3 = DARK_THEME$1.variables;
/** @type {?} */
const DARK_THEME = (/** @type {?} */ ({
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
const NB_MODULES = [
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
const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
/** @type {?} */
const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
class ThemeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return (/** @type {?} */ ({
            ngModule: ThemeModule,
            providers: [
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
            ],
        }));
    }
}
ThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ...NB_MODULES],
                exports: [CommonModule, ...PIPES, ...COMPONENTS],
                declarations: [...COMPONENTS, ...PIPES],
            },] }
];

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
