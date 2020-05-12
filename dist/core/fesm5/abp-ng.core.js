import { ChangeDetectorRef, Component, Injector, Input, Injectable, Directive, ElementRef, EventEmitter, Output, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, InjectionToken, Self, ɵɵdefineInjectable, ɵɵinject, Renderer2, Optional, ComponentFactoryResolver, Pipe, NgModule, Inject, NgZone, SkipSelf, LOCALE_ID, APP_INITIALIZER, INJECTOR, ApplicationRef } from '@angular/core';
import { __spread, __assign, __rest, __decorate, __metadata, __awaiter, __generator, __extends } from 'tslib';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ofActionSuccessful, Store, Actions, Action, Selector, State, createSelector, actionMatcher, InitState, UpdateState, setValue, NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import snq from 'snq';
import { HttpErrorResponse, HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { fromEvent, of, throwError, Subject, Observable, noop as noop$1, from, concat, ReplaySubject } from 'rxjs';
import { take, tap, switchMap, catchError, takeUntil, distinctUntilChanged, debounceTime, filter, finalize, retryWhen, delay, shareReplay } from 'rxjs/operators';
import { OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { registerLocaleData, CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsRouterPluginModule, Navigate } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import compare from 'just-compare';
import clone from 'just-clone';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/ng-model.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
/**
 * @template T, U
 */
var AbstractNgModelComponent = /** @class */ (function () {
    function AbstractNgModelComponent(injector) {
        this.injector = injector;
        this.valueFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (/** @type {?} */ (((/** @type {?} */ (value))))); });
        this.valueLimitFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return false; });
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    Object.defineProperty(AbstractNgModelComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value || this.defaultValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this.valueFn((/** @type {?} */ (((/** @type {?} */ (value))))), this._value);
            if (this.valueLimitFn(value, this._value) !== false || this.readonly)
                return;
            this._value = value;
            this.notifyValueChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNgModelComponent.prototype, "defaultValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractNgModelComponent.prototype.notifyValueChange = /**
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractNgModelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.cdRef.markForCheck(); }), 0);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractNgModelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractNgModelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    AbstractNgModelComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    AbstractNgModelComponent.decorators = [
        { type: Component, args: [{ template: '' }] }
    ];
    /** @nocollapse */
    AbstractNgModelComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    AbstractNgModelComponent.propDecorators = {
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        valueFn: [{ type: Input }],
        valueLimitFn: [{ type: Input }],
        value: [{ type: Input }]
    };
    return AbstractNgModelComponent;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractNgModelComponent.prototype._value;
    /**
     * @type {?}
     * @protected
     */
    AbstractNgModelComponent.prototype.cdRef;
    /** @type {?} */
    AbstractNgModelComponent.prototype.onChange;
    /** @type {?} */
    AbstractNgModelComponent.prototype.onTouched;
    /** @type {?} */
    AbstractNgModelComponent.prototype.disabled;
    /** @type {?} */
    AbstractNgModelComponent.prototype.readonly;
    /** @type {?} */
    AbstractNgModelComponent.prototype.valueFn;
    /** @type {?} */
    AbstractNgModelComponent.prototype.valueLimitFn;
    /** @type {?} */
    AbstractNgModelComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/config.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PatchRouteByName = /** @class */ (function () {
    function PatchRouteByName(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
    PatchRouteByName.type = '[Config] Patch Route By Name';
    return PatchRouteByName;
}());
if (false) {
    /** @type {?} */
    PatchRouteByName.type;
    /** @type {?} */
    PatchRouteByName.prototype.name;
    /** @type {?} */
    PatchRouteByName.prototype.newValue;
}
var GetAppConfiguration = /** @class */ (function () {
    function GetAppConfiguration() {
    }
    GetAppConfiguration.type = '[Config] Get App Configuration';
    return GetAppConfiguration;
}());
if (false) {
    /** @type {?} */
    GetAppConfiguration.type;
}
/**
 * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
 */
var AddRoute = /** @class */ (function () {
    function AddRoute(payload) {
        this.payload = payload;
    }
    AddRoute.type = '[Config] Add Route';
    return AddRoute;
}());
if (false) {
    /** @type {?} */
    AddRoute.type;
    /** @type {?} */
    AddRoute.prototype.payload;
}
var SetEnvironment = /** @class */ (function () {
    function SetEnvironment(environment) {
        this.environment = environment;
    }
    SetEnvironment.type = '[Config] Set Environment';
    return SetEnvironment;
}());
if (false) {
    /** @type {?} */
    SetEnvironment.type;
    /** @type {?} */
    SetEnvironment.prototype.environment;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/loader.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StartLoader = /** @class */ (function () {
    function StartLoader(payload) {
        this.payload = payload;
    }
    StartLoader.type = '[Loader] Start';
    return StartLoader;
}());
if (false) {
    /** @type {?} */
    StartLoader.type;
    /** @type {?} */
    StartLoader.prototype.payload;
}
var StopLoader = /** @class */ (function () {
    function StopLoader(payload) {
        this.payload = payload;
    }
    StopLoader.type = '[Loader] Stop';
    return StopLoader;
}());
if (false) {
    /** @type {?} */
    StopLoader.type;
    /** @type {?} */
    StopLoader.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/profile.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetProfile = /** @class */ (function () {
    function GetProfile() {
    }
    GetProfile.type = '[Profile] Get';
    return GetProfile;
}());
if (false) {
    /** @type {?} */
    GetProfile.type;
}
var UpdateProfile = /** @class */ (function () {
    function UpdateProfile(payload) {
        this.payload = payload;
    }
    UpdateProfile.type = '[Profile] Update';
    return UpdateProfile;
}());
if (false) {
    /** @type {?} */
    UpdateProfile.type;
    /** @type {?} */
    UpdateProfile.prototype.payload;
}
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
    }
    ChangePassword.type = '[Profile] Change Password';
    return ChangePassword;
}());
if (false) {
    /** @type {?} */
    ChangePassword.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/replaceable-components.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @see usage: https://github.com/abpframework/abp/pull/2522#issue-358333183
 */
var AddReplaceableComponent = /** @class */ (function () {
    function AddReplaceableComponent(payload) {
        this.payload = payload;
    }
    AddReplaceableComponent.type = '[ReplaceableComponents] Add';
    return AddReplaceableComponent;
}());
if (false) {
    /** @type {?} */
    AddReplaceableComponent.type;
    /** @type {?} */
    AddReplaceableComponent.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/rest.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestOccurError = /** @class */ (function () {
    function RestOccurError(payload) {
        this.payload = payload;
    }
    RestOccurError.type = '[Rest] Error';
    return RestOccurError;
}());
if (false) {
    /** @type {?} */
    RestOccurError.type;
    /** @type {?} */
    RestOccurError.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/session.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetLanguage = /** @class */ (function () {
    function SetLanguage(payload) {
        this.payload = payload;
    }
    SetLanguage.type = '[Session] Set Language';
    return SetLanguage;
}());
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
}
var SetTenant = /** @class */ (function () {
    function SetTenant(payload) {
        this.payload = payload;
    }
    SetTenant.type = '[Session] Set Tenant';
    return SetTenant;
}());
if (false) {
    /** @type {?} */
    SetTenant.type;
    /** @type {?} */
    SetTenant.prototype.payload;
}
var ModifyOpenedTabCount = /** @class */ (function () {
    function ModifyOpenedTabCount(operation) {
        this.operation = operation;
    }
    ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
    return ModifyOpenedTabCount;
}());
if (false) {
    /** @type {?} */
    ModifyOpenedTabCount.type;
    /** @type {?} */
    ModifyOpenedTabCount.prototype.operation;
}
var SetRemember = /** @class */ (function () {
    function SetRemember(payload) {
        this.payload = payload;
    }
    SetRemember.type = '[Session] Set Remember';
    return SetRemember;
}());
if (false) {
    /** @type {?} */
    SetRemember.type;
    /** @type {?} */
    SetRemember.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/route-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} routes
 * @param {?=} wrappers
 * @param {?=} parentNameArr
 * @param {?=} parentName
 * @return {?}
 */
function organizeRoutes(routes, wrappers, parentNameArr, parentName) {
    if (wrappers === void 0) { wrappers = []; }
    if (parentNameArr === void 0) { parentNameArr = (/** @type {?} */ ([])); }
    if (parentName === void 0) { parentName = null; }
    /** @type {?} */
    var filter = (/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = organizeRoutes(route.children, wrappers, parentNameArr, route.name);
        }
        if (route.parentName && route.parentName !== parentName) {
            parentNameArr.push(route);
            return false;
        }
        return true;
    });
    if (parentName) {
        // recursive block
        return routes.filter(filter);
    }
    /** @type {?} */
    var filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute(__spread(filteredRoutes, wrappers), parentNameArr));
    }
    return filteredRoutes;
}
/**
 * @param {?} routes
 * @param {?} parentNameArr
 * @return {?}
 */
function setChildRoute(routes, parentNameArr) {
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        /** @type {?} */
        var foundedChildren = parentNameArr.filter((/**
         * @param {?} parent
         * @return {?}
         */
        function (parent) { return parent.parentName === route.name; }));
        if (foundedChildren && foundedChildren.length) {
            route.children = __spread((route.children || []), foundedChildren);
        }
        return route;
    }));
}
/**
 * @param {?=} routes
 * @return {?}
 */
function sortRoutes(routes) {
    if (routes === void 0) { routes = []; }
    if (!routes.length)
        return [];
    return routes
        .map((/**
     * @param {?} route
     * @param {?} index
     * @return {?}
     */
    function (route, index) {
        return __assign({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
    }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.order - b.order; }))
        .map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    }));
}
/** @type {?} */
var ABP_ROUTES = (/** @type {?} */ ([]));
/**
 * @param {?} routes
 * @return {?}
 */
function addAbpRoutes(routes) {
    if (!Array.isArray(routes)) {
        routes = [routes];
    }
    ABP_ROUTES.push.apply(ABP_ROUTES, __spread(routes));
}
/**
 * @return {?}
 */
function getAbpRoutes() {
    return ABP_ROUTES;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/session.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionState = /** @class */ (function () {
    function SessionState(oAuthService, store, actions) {
        var _this = this;
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            var sessionDetail = (_this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} }).sessionDetail;
            /** @type {?} */
            var fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                _this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                _this.oAuthService.logOut();
            }
            _this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            }));
        }));
    }
    SessionState_1 = SessionState;
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getLanguage = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var language = _a.language;
        return language;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getTenant = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var tenant = _a.tenant;
        return tenant;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getSessionDetail = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var sessionDetail = _a.sessionDetail;
        return sessionDetail;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setLanguage = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration());
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setTenant = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            tenant: payload,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setRemember = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var remember = _b.payload;
        var sessionDetail = getState().sessionDetail;
        patchState({
            sessionDetail: __assign({}, sessionDetail, { remember: remember }),
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.modifyOpenedTabCount = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var operation = _b.operation;
        // tslint:disable-next-line: prefer-const
        var _c = getState().sessionDetail || ((/** @type {?} */ ({ openedTabCount: 0 }))), openedTabCount = _c.openedTabCount, lastExitTime = _c.lastExitTime, detail = __rest(_c, ["openedTabCount", "lastExitTime"]);
        if (operation === 'increase') {
            openedTabCount++;
        }
        else if (operation === 'decrease') {
            openedTabCount--;
            lastExitTime = new Date().valueOf();
        }
        if (!openedTabCount || openedTabCount < 0) {
            openedTabCount = 0;
        }
        patchState({
            sessionDetail: __assign({ openedTabCount: openedTabCount,
                lastExitTime: lastExitTime }, detail),
        });
    };
    var SessionState_1;
    SessionState.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store },
        { type: Actions }
    ]; };
    SessionState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionState.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store },
        { type: Actions }
    ]; };
    __decorate([
        Action(SetLanguage),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetLanguage]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "setLanguage", null);
    __decorate([
        Action(SetTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetTenant]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "setTenant", null);
    __decorate([
        Action(SetRemember),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetRemember]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "setRemember", null);
    __decorate([
        Action(ModifyOpenedTabCount),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ModifyOpenedTabCount]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "modifyOpenedTabCount", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], SessionState, "getLanguage", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SessionState, "getTenant", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SessionState, "getSessionDetail", null);
    SessionState = SessionState_1 = __decorate([
        State({
            name: 'SessionState',
            defaults: (/** @type {?} */ ({ sessionDetail: { openedTabCount: 0 } })),
        }),
        __metadata("design:paramtypes", [OAuthService, Store, Actions])
    ], SessionState);
    return SessionState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/config.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigState = /** @class */ (function () {
    function ConfigState(http, store) {
        this.http = http;
        this.store = store;
    }
    ConfigState_1 = ConfigState;
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getAll = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getApplicationInfo = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state.environment.application || ((/** @type {?} */ ({})));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getOne = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state[key];
        }));
        return selector;
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    ConfigState.getDeep = /**
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state);
        }));
        return selector;
    };
    /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    ConfigState.getRoute = /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    function (path, name, url) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            var flattedRoutes = state.flattedRoutes;
            return ((/** @type {?} */ (flattedRoutes))).find((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                if (path && route.path === path) {
                    return route;
                }
                else if (name && route.name === name) {
                    return route;
                }
                else if (url && route.url === url) {
                    return route;
                }
            }));
        }));
        return selector;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    ConfigState.getApiUrl = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getSetting = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return snq((/**
             * @return {?}
             */
            function () { return state.setting.values[key]; }));
        }));
        return selector;
    };
    /**
     * @param {?=} keyword
     * @return {?}
     */
    ConfigState.getSettings = /**
     * @param {?=} keyword
     * @return {?}
     */
    function (keyword) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            /** @type {?} */
            var settings = snq((/**
             * @return {?}
             */
            function () { return state.setting.values; }), {});
            if (!keyword)
                return settings;
            /** @type {?} */
            var keysFound = Object.keys(settings).filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key.indexOf(keyword) > -1; }));
            return keysFound.reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            function (acc, key) {
                acc[key] = settings[key];
                return acc;
            }), {});
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getGrantedPolicy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!key)
                return true;
            /** @type {?} */
            var getPolicy = (/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return snq((/**
             * @return {?}
             */
            function () { return state.auth.grantedPolicies[k]; }), false); });
            /** @type {?} */
            var orRegexp = /\|\|/g;
            /** @type {?} */
            var andRegexp = /&&/g;
            if (orRegexp.test(key)) {
                /** @type {?} */
                var keys = key.split('||').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return !!k; }));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            }
            else if (andRegexp.test(key)) {
                /** @type {?} */
                var keys = key.split('&&').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return !!k; }));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) && getPolicy(keys[1].trim());
            }
            return getPolicy(key);
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    ConfigState.getLocalization = /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        if (!key)
            key = '';
        /** @type {?} */
        var defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        /** @type {?} */
        var keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!state.localization)
                return defaultValue || key;
            /** @type {?} */
            var defaultResourceName = snq((/**
             * @return {?}
             */
            function () { return state.environment.localization.defaultResourceName; }));
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error("Please check your environment. May you forget set defaultResourceName?\n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
                }
                keys[0] = defaultResourceName;
            }
            /** @type {?} */
            var localization = ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state.localization.values);
            interpolateParams = interpolateParams.filter((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params != null; }));
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach((/**
                 * @param {?} param
                 * @return {?}
                 */
                function (param) {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                }));
            }
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        }));
        return selector;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConfigState.prototype.addData = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var patchState = _a.patchState, dispatch = _a.dispatch;
        /** @type {?} */
        var apiName = this.store.selectSnapshot(ConfigState_1.getDeep('environment.application.name'));
        /** @type {?} */
        var api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
        return this.http
            .get(api + "/api/abp/application-configuration")
            .pipe(tap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            return patchState(__assign({}, configuration));
        })), switchMap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            /** @type {?} */
            var defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            return _this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang));
        })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            dispatch(new RestOccurError(new HttpErrorResponse({ status: 0, error: err })));
            return throwError(err);
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.patchRoute = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, getState = _a.getState;
        var name = _b.name, newValue = _b.newValue;
        /** @type {?} */
        var routes = getState().routes;
        routes = patchRouteDeep(routes, name, newValue);
        /** @type {?} */
        var flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        var index = flattedRoutes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.name === name; }));
        if (index > -1) {
            flattedRoutes[index] = (/** @type {?} */ (__assign({}, flattedRoutes[index], newValue)));
        }
        return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.addRoute = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, getState = _a.getState;
        var payload = _b.payload;
        /** @type {?} */
        var routes = getState().routes;
        /** @type {?} */
        var flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        var route = __assign({}, payload);
        if (route.parentName) {
            /** @type {?} */
            var index = flattedRoutes.findIndex((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r.name === route.parentName; }));
            if (index < 0)
                return;
            /** @type {?} */
            var parent_1 = flattedRoutes[index];
            if ((parent_1.url || '').replace('/', '')) {
                route.url = parent_1.url + "/" + route.path;
            }
            else {
                route.url = "/" + route.path;
            }
            route.children = route.children || [];
            route.order = route.order || route.order === 0 ? route.order : (parent_1.children || []).length;
            parent_1.children = __spread((parent_1.children || []), [route]).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.order - b.order; }));
            flattedRoutes[index] = parent_1;
            flattedRoutes.push(route);
            /** @type {?} */
            var parentName_1 = parent_1.name;
            /** @type {?} */
            var parentNameArr = [parentName_1];
            while (parentName_1) {
                parentName_1 = snq((/**
                 * @return {?}
                 */
                function () { return flattedRoutes.find((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.name === parentName_1; })).parentName; }));
                if (parentName_1) {
                    parentNameArr.unshift(parentName_1);
                }
            }
            routes = updateRouteDeep(routes, parentNameArr, parent_1);
        }
        else {
            route.url = "/" + route.path;
            if (route.order || route.order === 0) {
                routes = __spread(routes, [route]).sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.order - b.order; }));
            }
            else {
                route.order = routes.length;
                routes = __spread(routes, [route]);
            }
            flattedRoutes.push(route);
        }
        return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.setEnvironment = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var environment = _b.environment;
        return patchState({
            environment: environment,
        });
    };
    var ConfigState_1;
    ConfigState.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    ConfigState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigState.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    __decorate([
        Action(GetAppConfiguration),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "addData", null);
    __decorate([
        Action(PatchRouteByName),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, PatchRouteByName]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "patchRoute", null);
    __decorate([
        Action(AddRoute),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, AddRoute]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "addRoute", null);
    __decorate([
        Action(SetEnvironment),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetEnvironment]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "setEnvironment", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConfigState, "getAll", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ConfigState, "getApplicationInfo", null);
    ConfigState = ConfigState_1 = __decorate([
        State({
            name: 'ConfigState',
            defaults: (/** @type {?} */ ({})),
        }),
        __metadata("design:paramtypes", [HttpClient, Store])
    ], ConfigState);
    return ConfigState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.store;
}
/**
 * @param {?} routes
 * @param {?} name
 * @param {?} newValue
 * @param {?=} parentUrl
 * @return {?}
 */
function patchRouteDeep(routes, name, newValue, parentUrl) {
    if (parentUrl === void 0) { parentUrl = ''; }
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.name === name) {
            newValue.url = parentUrl + "/" + ((!newValue.path && newValue.path === ''
                ? route.path
                : newValue.path) || '');
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return (__assign({}, child, { url: (newValue.url + "/" + child.path).replace('//', '/') })); }));
            }
            return __assign({}, route, newValue);
        }
        else if (route.children && route.children.length) {
            route.children = patchRouteDeep(route.children, name, newValue, (parentUrl || '/') + route.path);
        }
        return route;
    }));
    if (parentUrl) {
        // recursive block
        return routes;
    }
    return organizeRoutes(routes);
}
/**
 * @param {?} routes
 * @param {?} parentNameArr
 * @param {?} newValue
 * @param {?=} parentIndex
 * @return {?}
 */
function updateRouteDeep(routes, parentNameArr, newValue, parentIndex) {
    if (parentIndex === void 0) { parentIndex = 0; }
    /** @type {?} */
    var index = routes.findIndex((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return route.name === parentNameArr[parentIndex]; }));
    if (parentIndex === parentNameArr.length - 1) {
        routes[index] = newValue;
    }
    else {
        routes[index].children = updateRouteDeep(routes[index].children, parentNameArr, newValue, parentIndex + 1);
    }
    return routes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/replaceable-components.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReplaceableComponentsState = /** @class */ (function () {
    function ReplaceableComponentsState() {
    }
    ReplaceableComponentsState_1 = ReplaceableComponentsState;
    /**
     * @param {?} __0
     * @return {?}
     */
    ReplaceableComponentsState.getAll = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var replaceableComponents = _a.replaceableComponents;
        return replaceableComponents || [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ReplaceableComponentsState.getComponent = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ReplaceableComponentsState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return snq((/**
             * @return {?}
             */
            function () { return state.replaceableComponents.find((/**
             * @param {?} component
             * @return {?}
             */
            function (component) { return component.key === key; })); }));
        }));
        return selector;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ReplaceableComponentsState.prototype.replaceableComponentsAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var replaceableComponents = getState().replaceableComponents;
        /** @type {?} */
        var index = snq((/**
         * @return {?}
         */
        function () { return replaceableComponents.findIndex((/**
         * @param {?} component
         * @return {?}
         */
        function (component) { return component.key === payload.key; })); }), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = __spread(replaceableComponents, [payload]);
        }
        patchState({
            replaceableComponents: replaceableComponents,
        });
    };
    var ReplaceableComponentsState_1;
    ReplaceableComponentsState.decorators = [
        { type: Injectable }
    ];
    __decorate([
        Action(AddReplaceableComponent),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, AddReplaceableComponent]),
        __metadata("design:returntype", void 0)
    ], ReplaceableComponentsState.prototype, "replaceableComponentsAction", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], ReplaceableComponentsState, "getAll", null);
    ReplaceableComponentsState = ReplaceableComponentsState_1 = __decorate([
        State({
            name: 'ReplaceableComponentsState',
            defaults: (/** @type {?} */ ({ replaceableComponents: [] })),
        })
    ], ReplaceableComponentsState);
    return ReplaceableComponentsState;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/rxjs-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/** @type {?} */
var takeUntilDestroy = (/**
 * @param {?} componentInstance
 * @param {?=} destroyMethodName
 * @return {?}
 */
function (componentInstance, destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];
        if (isFunction(originalDestroy) === false) {
            throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
        }
        if (!componentInstance['__takeUntilDestroy']) {
            componentInstance['__takeUntilDestroy'] = new Subject();
            componentInstance[destroyMethodName] = (/**
             * @return {?}
             */
            function () {
                // tslint:disable-next-line: no-unused-expression
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                componentInstance['__takeUntilDestroy'].next(true);
                componentInstance['__takeUntilDestroy'].complete();
            });
        }
        return source.pipe(takeUntil(componentInstance['__takeUntilDestroy']));
    });
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(router, route, store) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.store = store;
        var routes = this.store.selectSnapshot(ConfigState.getAll).routes;
        router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var segments = snq((/**
                 * @return {?}
                 */
                function () { return router.parseUrl(event.url).root.children.primary.segments; }), (/** @type {?} */ ([
                    { path: router.url.replace('/', '') },
                ])));
                /** @type {?} */
                var layouts = {
                    application: _this.getComponent('Theme.ApplicationLayoutComponent'),
                    account: _this.getComponent('Theme.AccountLayoutComponent'),
                    empty: _this.getComponent('Theme.EmptyLayoutComponent'),
                };
                /** @type {?} */
                var expectedLayout = (_this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                _this.layout = layouts[expectedLayout].component;
            }
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    DynamicLayoutComponent.prototype.getComponent = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    };
    /**
     * @return {?}
     */
    DynamicLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    DynamicLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet\n      ><ng-container *ngComponentOutlet=\"layout\"></ng-container\n    ></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return DynamicLayoutComponent;
}());
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.layout;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.store;
}
/**
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function findLayout(segments, routes) {
    /** @type {?} */
    var layout = "empty" /* empty */;
    /** @type {?} */
    var route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return (val.wrapper ? __spread(acc, val.children) : __spread(acc, [val])); }), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    function (r) { return r.path === segments[0].path; }));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            var child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.path === segments[1].path; }));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/replaceable-route-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReplaceableRouteContainerComponent = /** @class */ (function () {
    function ReplaceableRouteContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    /**
     * @return {?}
     */
    ReplaceableRouteContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
        this.componentKey = ((/** @type {?} */ (this.route.snapshot.data
            .replaceableComponent))).key;
        this.store
            .select(ReplaceableComponentsState.getComponent(this.componentKey))
            .pipe(takeUntilDestroy(this), distinctUntilChanged())
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            _this.externalComponent = res.component;
        }));
    };
    /**
     * @return {?}
     */
    ReplaceableRouteContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    ReplaceableRouteContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-replaceable-route-container',
                    template: "\n    <ng-container *ngComponentOutlet=\"externalComponent || defaultComponent\"></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    ReplaceableRouteContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return ReplaceableRouteContainerComponent;
}());
if (false) {
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.defaultComponent;
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.componentKey;
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.externalComponent;
    /**
     * @type {?}
     * @private
     */
    ReplaceableRouteContainerComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ReplaceableRouteContainerComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/router-outlet.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterOutletComponent = /** @class */ (function () {
    function RouterOutletComponent() {
    }
    RouterOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-router-outlet',
                    template: "\n    <router-outlet></router-outlet>\n  "
                }] }
    ];
    return RouterOutletComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/different-locales.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Different locales from .NET
// Key is .NET locale, value is Angular locale
var localesMapping = {
    'ar-sa': 'ar-SA',
    'ca-ES-valencia': 'ca-ES-VALENCIA',
    'de-de': 'de',
    'es-ES': 'es',
    'en-US': 'en',
    'fil-Latn': 'en',
    'ku-Arab': 'en',
    'ky-Cyrl': 'en',
    'mi-Latn': 'en',
    'prs-Arab': 'en',
    'qut-Latn': 'en',
    nso: 'en',
    quz: 'en',
    'fr-FR': 'fr',
    'gd-Latn': 'gd',
    'ha-Latn': 'ha',
    'ig-Latn': 'ig',
    'it-it': 'it',
    'mn-Cyrl': 'mn',
    'pt-BR': 'pt',
    'sd-Arab': 'pa-Arab',
    'sr-Cyrl-RS': 'sr-Cyrl',
    'sr-Latn-RS': 'sr-Latn',
    'tg-Cyrl': 'tg',
    'tk-Latn': 'tk',
    'tt-Cyrl': 'tt',
    'ug-Arab': 'ug',
    'yo-Latn': 'yo',
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/autofocus.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    /**
     * @return {?}
     */
    AutofocusDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.elRef.nativeElement.focus(); }), this.delay);
    };
    AutofocusDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[autofocus]'
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AutofocusDirective.propDecorators = {
        delay: [{ type: Input, args: ['autofocus',] }]
    };
    return AutofocusDirective;
}());
if (false) {
    /** @type {?} */
    AutofocusDirective.prototype.delay;
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/debounce.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputEventDebounceDirective = /** @class */ (function () {
    function InputEventDebounceDirective(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputEventDebounceDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.el.nativeElement, 'input')
            .pipe(debounceTime(this.debounce), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.debounceEvent.emit(event);
        }));
    };
    /**
     * @return {?}
     */
    InputEventDebounceDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    InputEventDebounceDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[input.debounce]',
                },] }
    ];
    /** @nocollapse */
    InputEventDebounceDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    InputEventDebounceDirective.propDecorators = {
        debounce: [{ type: Input }],
        debounceEvent: [{ type: Output, args: ['input.debounce',] }]
    };
    return InputEventDebounceDirective;
}());
if (false) {
    /** @type {?} */
    InputEventDebounceDirective.prototype.debounce;
    /** @type {?} */
    InputEventDebounceDirective.prototype.debounceEvent;
    /**
     * @type {?}
     * @private
     */
    InputEventDebounceDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/ellipsis.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EllipsisDirective = /** @class */ (function () {
    function EllipsisDirective(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    Object.defineProperty(EllipsisDirective.prototype, "inlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisDirective.prototype, "class", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && !this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisDirective.prototype, "maxWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && this.width ? this.width || '170px' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EllipsisDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.title = this.title || ((/** @type {?} */ (this.elRef.nativeElement))).innerText;
        this.cdRef.detectChanges();
    };
    EllipsisDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpEllipsis]',
                },] }
    ];
    /** @nocollapse */
    EllipsisDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    EllipsisDirective.propDecorators = {
        width: [{ type: Input, args: ['abpEllipsis',] }],
        title: [{ type: HostBinding, args: ['title',] }, { type: Input }],
        enabled: [{ type: Input, args: ['abpEllipsisEnabled',] }],
        inlineClass: [{ type: HostBinding, args: ['class.abp-ellipsis-inline',] }],
        class: [{ type: HostBinding, args: ['class.abp-ellipsis',] }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return EllipsisDirective;
}());
if (false) {
    /** @type {?} */
    EllipsisDirective.prototype.width;
    /** @type {?} */
    EllipsisDirective.prototype.title;
    /** @type {?} */
    EllipsisDirective.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    EllipsisDirective.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    EllipsisDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/for.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AbpForContext = /** @class */ (function () {
    function AbpForContext($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
    return AbpForContext;
}());
if (false) {
    /** @type {?} */
    AbpForContext.prototype.$implicit;
    /** @type {?} */
    AbpForContext.prototype.index;
    /** @type {?} */
    AbpForContext.prototype.count;
    /** @type {?} */
    AbpForContext.prototype.list;
}
var RecordView = /** @class */ (function () {
    function RecordView(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordView;
}());
if (false) {
    /** @type {?} */
    RecordView.prototype.record;
    /** @type {?} */
    RecordView.prototype.view;
}
var ForDirective = /** @class */ (function () {
    function ForDirective(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    Object.defineProperty(ForDirective.prototype, "compareFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.compareBy || compare;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForDirective.prototype, "trackByFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.trackBy || ((/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            function (index, item) { return ((/** @type {?} */ (item))).id || index; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAppliedOperations = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var rw = [];
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (record, previousIndex, currentIndex) {
            if (record.previousIndex == null) {
                /** @type {?} */
                var view = _this.vcRef.createEmbeddedView(_this.tempRef, new AbpForContext(null, -1, -1, _this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                _this.vcRef.remove(previousIndex);
            }
            else {
                /** @type {?} */
                var view = _this.vcRef.get(previousIndex);
                _this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, (/** @type {?} */ (view))));
            }
        }));
        for (var i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAttachedViews = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        for (var i = 0, l = this.vcRef.length; i < l; i++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (this.vcRef.get(i)));
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (_this.vcRef.get(record.currentIndex)));
            viewRef.context.$implicit = record.item;
        }));
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.projectItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (!items.length && this.emptyRef) {
            this.vcRef.clear();
            // tslint:disable-next-line: no-unused-expression
            this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
            this.isShowEmptyRef = true;
            this.differ = null;
            return;
        }
        if (this.emptyRef && this.isShowEmptyRef) {
            this.vcRef.clear();
            this.isShowEmptyRef = false;
        }
        if (!this.differ && items) {
            this.differ = this.differs.find(items).create(this.trackByFn);
        }
        if (this.differ) {
            /** @type {?} */
            var changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.sortItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        if (this.orderBy) {
            items.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a[_this.orderBy] > b[_this.orderBy] ? 1 : a[_this.orderBy] < b[_this.orderBy] ? -1 : 0); }));
        }
        else {
            items.sort();
        }
    };
    /**
     * @return {?}
     */
    ForDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = (/** @type {?} */ (clone(this.items)));
        if (!Array.isArray(items))
            return;
        /** @type {?} */
        var compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return compareFn(item[_this.filterBy], _this.filterVal); }));
        }
        switch (this.orderDir) {
            case 'ASC':
                this.sortItems(items);
                this.projectItems(items);
                break;
            case 'DESC':
                this.sortItems(items);
                items.reverse();
                this.projectItems(items);
                break;
            default:
                this.projectItems(items);
        }
    };
    ForDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpFor]',
                },] }
    ];
    /** @nocollapse */
    ForDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: IterableDiffers }
    ]; };
    ForDirective.propDecorators = {
        items: [{ type: Input, args: ['abpForOf',] }],
        orderBy: [{ type: Input, args: ['abpForOrderBy',] }],
        orderDir: [{ type: Input, args: ['abpForOrderDir',] }],
        filterBy: [{ type: Input, args: ['abpForFilterBy',] }],
        filterVal: [{ type: Input, args: ['abpForFilterVal',] }],
        trackBy: [{ type: Input, args: ['abpForTrackBy',] }],
        compareBy: [{ type: Input, args: ['abpForCompareBy',] }],
        emptyRef: [{ type: Input, args: ['abpForEmptyRef',] }]
    };
    return ForDirective;
}());
if (false) {
    /** @type {?} */
    ForDirective.prototype.items;
    /** @type {?} */
    ForDirective.prototype.orderBy;
    /** @type {?} */
    ForDirective.prototype.orderDir;
    /** @type {?} */
    ForDirective.prototype.filterBy;
    /** @type {?} */
    ForDirective.prototype.filterVal;
    /** @type {?} */
    ForDirective.prototype.trackBy;
    /** @type {?} */
    ForDirective.prototype.compareBy;
    /** @type {?} */
    ForDirective.prototype.emptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differ;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.isShowEmptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.tempRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/common-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function noop() {
    // tslint:disable-next-line: only-arrow-functions
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () { });
    return fn;
}
/**
 * @param {?} value
 * @return {?}
 */
function isUndefinedOrEmptyString(value) {
    return value === undefined || value === '';
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/number-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    /* tslint:disable-next-line:triple-equals */
    return value == Number(value);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/form-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} _enum
 * @return {?}
 */
function mapEnumToOptions(_enum) {
    /** @type {?} */
    var options = [];
    for (var member in _enum)
        if (!isNumber(member))
            options.push({
                key: member,
                value: _enum[member],
            });
    return options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/generator-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-bitwise
/**
 * @param {?=} a
 * @return {?}
 */
function uuid(a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
/**
 * @param {?} value
 * @return {?}
 */
function generateHash(value) {
    /** @type {?} */
    var hashed = 0;
    /** @type {?} */
    var charCode;
    for (var i = 0; i < value.length; i++) {
        charCode = value.charCodeAt(i);
        hashed = (hashed << 5) - hashed + charCode;
        hashed |= 0;
    }
    return hashed;
}
/**
 * @param {?=} length
 * @return {?}
 */
function generatePassword(length) {
    if (length === void 0) { length = 8; }
    length = Math.min(Math.max(4, length), 128);
    /** @type {?} */
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    /** @type {?} */
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /** @type {?} */
    var numbers = '0123456789';
    /** @type {?} */
    var specials = '!@#$%&*()_+{}<>?[]./';
    /** @type {?} */
    var all = lowers + uppers + numbers + specials;
    /** @type {?} */
    var getRandom = (/**
     * @param {?} chrSet
     * @return {?}
     */
    function (chrSet) { return chrSet[Math.floor(Math.random() * chrSet.length)]; });
    /** @type {?} */
    var password = Array({ length: length });
    password[0] = getRandom(lowers);
    password[1] = getRandom(uppers);
    password[2] = getRandom(numbers);
    password[3] = getRandom(specials);
    for (var i = 4; i < length; i++) {
        password[i] = getRandom(all);
    }
    return password.sort((/**
     * @return {?}
     */
    function () { return 0.5 - Math.random(); })).join('');
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/options.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CORE_OPTIONS = new InjectionToken('CORE_OPTIONS');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/initial-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function getInitialData(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        var skipGetAppConfiguration = (/** @type {?} */ (injector.get(CORE_OPTIONS))).skipGetAppConfiguration;
        if (skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return checkAccessToken(store, injector); })))
            .toPromise();
    });
    return fn;
}
/**
 * @param {?} store
 * @param {?} injector
 * @return {?}
 */
function checkAccessToken(store, injector) {
    /** @type {?} */
    var oAuth = injector.get(OAuthService);
    if (oAuth.hasValidAccessToken() && !store.selectSnapshot(ConfigState.getDeep('currentUser.id'))) {
        oAuth.logOut();
    }
}
/**
 * @param {?} injector
 * @return {?}
 */
function localeInitializer(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        /** @type {?} */
        var lang = store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.SessionState.language; })) || 'en';
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            registerLocale(lang).then((/**
             * @return {?}
             */
            function () { return resolve('resolved'); }), reject);
        }));
    });
    return fn;
}
/**
 * @param {?} locale
 * @return {?}
 */
function registerLocale(locale) {
    return import(
    /* webpackInclude: /(af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$/ */
    "@angular/common/locales/" + (localesMapping[locale] || locale) + ".js").then((/**
     * @param {?} module
     * @return {?}
     */
    function (module) {
        registerLocaleData(module.default);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/cross-origin.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CrossOriginStrategy = /** @class */ (function () {
    function CrossOriginStrategy(crossorigin, integrity) {
        this.crossorigin = crossorigin;
        this.integrity = integrity;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    CrossOriginStrategy.prototype.setCrossOrigin = /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.integrity)
            element.setAttribute('integrity', this.integrity);
        element.setAttribute('crossorigin', this.crossorigin);
    };
    return CrossOriginStrategy;
}());
if (false) {
    /** @type {?} */
    CrossOriginStrategy.prototype.crossorigin;
    /** @type {?} */
    CrossOriginStrategy.prototype.integrity;
}
/** @type {?} */
var CROSS_ORIGIN_STRATEGY = {
    Anonymous: /**
     * @param {?=} integrity
     * @return {?}
     */
    function (integrity) {
        return new CrossOriginStrategy('anonymous', integrity);
    },
    UseCredentials: /**
     * @param {?=} integrity
     * @return {?}
     */
    function (integrity) {
        return new CrossOriginStrategy('use-credentials', integrity);
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/dom.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomStrategy = /** @class */ (function () {
    function DomStrategy(target, position) {
        if (target === void 0) { target = document.head; }
        if (position === void 0) { position = 'beforeend'; }
        this.target = target;
        this.position = position;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    DomStrategy.prototype.insertElement = /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.target.insertAdjacentElement(this.position, element);
    };
    return DomStrategy;
}());
if (false) {
    /** @type {?} */
    DomStrategy.prototype.target;
    /** @type {?} */
    DomStrategy.prototype.position;
}
/** @type {?} */
var DOM_STRATEGY = {
    AfterElement: /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return new DomStrategy(element, 'afterend');
    },
    AppendToBody: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.body, 'beforeend');
    },
    AppendToHead: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.head, 'beforeend');
    },
    BeforeElement: /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return new DomStrategy(element, 'beforebegin');
    },
    PrependToHead: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.head, 'afterbegin');
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/lazy-load-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} element
 * @param {?=} domStrategy
 * @param {?=} crossOriginStrategy
 * @return {?}
 */
function fromLazyLoad(element, domStrategy, crossOriginStrategy) {
    if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
    if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
    crossOriginStrategy.setCrossOrigin(element);
    domStrategy.insertElement(element);
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        element.onload = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            clearCallbacks(element);
            observer.next(event);
            observer.complete();
        });
        /** @type {?} */
        var handleError = createErrorHandler(observer, element);
        element.onerror = handleError;
        element.onabort = handleError;
        element.onemptied = handleError;
        element.onstalled = handleError;
        element.onsuspend = handleError;
        return (/**
         * @return {?}
         */
        function () {
            clearCallbacks(element);
            observer.complete();
        });
    }));
}
/**
 * @param {?} observer
 * @param {?} element
 * @return {?}
 */
function createErrorHandler(observer, element) {
    /* tslint:disable-next-line:only-arrow-functions */
    return (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        clearCallbacks(element);
        element.parentNode.removeChild(element);
        observer.error(event);
    });
}
/**
 * @param {?} element
 * @return {?}
 */
function clearCallbacks(element) {
    element.onload = null;
    element.onerror = null;
    element.onabort = null;
    element.onemptied = null;
    element.onstalled = null;
    element.onsuspend = null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form-submit.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormSubmitDirective = /** @class */ (function () {
    function FormSubmitDirective(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.debounce = 200;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markAsDirty();
            _this.executedNgSubmit = true;
        }));
        fromEvent((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(debounceTime(this.debounce), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Enter'; })), takeUntilDestroy(this))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.executedNgSubmit) {
                _this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            _this.executedNgSubmit = false;
        }));
    };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        var form = this.formGroupDirective.form;
        setDirty((/** @type {?} */ (form.controls)));
        form.markAsDirty();
        this.cdRef.detectChanges();
    };
    FormSubmitDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'form[ngSubmit][formGroup]',
                },] }
    ];
    /** @nocollapse */
    FormSubmitDirective.ctorParameters = function () { return [
        { type: FormGroupDirective, decorators: [{ type: Self }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    FormSubmitDirective.propDecorators = {
        debounce: [{ type: Input }],
        notValidateOnSubmit: [{ type: Input }],
        ngSubmit: [{ type: Output }]
    };
    return FormSubmitDirective;
}());
if (false) {
    /** @type {?} */
    FormSubmitDirective.prototype.debounce;
    /** @type {?} */
    FormSubmitDirective.prototype.notValidateOnSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.ngSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.executedNgSubmit;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.formGroupDirective;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.host;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.cdRef;
}
/**
 * @param {?} controls
 * @return {?}
 */
function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            setDirty((/** @type {?} */ (group.controls)));
        }));
        return;
    }
    Object.keys(controls).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/init.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitDirective = /** @class */ (function () {
    function InitDirective(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InitDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.init.emit(this.elRef);
    };
    InitDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpInit]' },] }
    ];
    /** @nocollapse */
    InitDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    InitDirective.propDecorators = {
        init: [{ type: Output, args: ['abpInit',] }]
    };
    return InitDirective;
}());
if (false) {
    /** @type {?} */
    InitDirective.prototype.init;
    /**
     * @type {?}
     * @private
     */
    InitDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/rest.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestService = /** @class */ (function () {
    function RestService(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @private
     * @param {?} apiName
     * @return {?}
     */
    RestService.prototype.getApiFromStore = /**
     * @private
     * @param {?} apiName
     * @return {?}
     */
    function (apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    };
    /**
     * @param {?} err
     * @return {?}
     */
    RestService.prototype.handleError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    };
    // TODO: Deprecate service or improve interface in v3.0
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    RestService.prototype.request = 
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    function (request, config, api) {
        var _this = this;
        config = config || ((/** @type {?} */ ({})));
        api = api || this.getApiFromStore(config.apiName);
        var method = request.method, params = request.params, options = __rest(request, ["method", "params"]);
        var _a = config.observe, observe = _a === void 0 ? "body" /* Body */ : _a, skipHandleError = config.skipHandleError;
        return this.http
            .request(method, api + request.url, (/** @type {?} */ (__assign({ observe: observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            function (acc, key) {
                /** @type {?} */
                var value = params[key];
                if (!isUndefinedOrEmptyString(value))
                    acc[key] = value;
                return acc;
            }), {}),
        }), options))))
            .pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return (skipHandleError ? throwError(err) : _this.handleError(err)); })));
    };
    RestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    /** @nocollapse */ RestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(ɵɵinject(HttpClient), ɵɵinject(Store)); }, token: RestService, providedIn: "root" });
    return RestService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileService = /** @class */ (function () {
    function ProfileService(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    /**
     * @return {?}
     */
    ProfileService.prototype.get = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ProfileService.prototype.update = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    ProfileService.prototype.changePassword = /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    function (body, skipHandleError) {
        if (skipHandleError === void 0) { skipHandleError = false; }
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: body,
        };
        return this.rest.request(request, {
            skipHandleError: skipHandleError,
            apiName: this.apiName,
        });
    };
    ProfileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
    return ProfileService;
}());
if (false) {
    /** @type {?} */
    ProfileService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    ProfileService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/profile.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileState = /** @class */ (function () {
    function ProfileState(profileService) {
        this.profileService = profileService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.getProfile = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var profile = _a.profile;
        return profile;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.prototype.getProfile = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var patchState = _a.patchState;
        return this.profileService.get().pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.updateProfile = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.profileService.update(payload).pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.changePassword = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.profileService.changePassword(payload, true);
    };
    ProfileState.ctorParameters = function () { return [
        { type: ProfileService }
    ]; };
    ProfileState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfileState.ctorParameters = function () { return [
        { type: ProfileService }
    ]; };
    __decorate([
        Action(GetProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "getProfile", null);
    __decorate([
        Action(UpdateProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateProfile]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "updateProfile", null);
    __decorate([
        Action(ChangePassword),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ChangePassword]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "changePassword", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ProfileState, "getProfile", null);
    ProfileState = __decorate([
        State({
            name: 'ProfileState',
            defaults: (/** @type {?} */ ({})),
        }),
        __metadata("design:paramtypes", [ProfileService])
    ], ProfileState);
    return ProfileState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileState.prototype.profileService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/permission.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionDirective = /** @class */ (function () {
    function PermissionDirective(elRef, renderer, store, templateRef, vcRef) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    /**
     * @private
     * @return {?}
     */
    PermissionDirective.prototype.check = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.store
            .select(ConfigState.getGrantedPolicy(this.condition))
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} isGranted
         * @return {?}
         */
        function (isGranted) {
            if (_this.templateRef && isGranted) {
                _this.vcRef.clear();
                _this.vcRef.createEmbeddedView(_this.templateRef);
            }
            else if (_this.templateRef && !isGranted) {
                _this.vcRef.clear();
            }
            else if (!isGranted && !_this.templateRef) {
                _this.renderer.removeChild(((/** @type {?} */ (_this.elRef.nativeElement))).parentElement, _this.elRef.nativeElement);
            }
        }));
    };
    /**
     * @return {?}
     */
    PermissionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    };
    /**
     * @return {?}
     */
    PermissionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} __0
     * @return {?}
     */
    PermissionDirective.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var condition = _a.condition;
        if ((condition || { currentValue: null }).currentValue) {
            this.check();
        }
    };
    PermissionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpPermission]',
                },] }
    ];
    /** @nocollapse */
    PermissionDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Store },
        { type: TemplateRef, decorators: [{ type: Optional }] },
        { type: ViewContainerRef }
    ]; };
    PermissionDirective.propDecorators = {
        condition: [{ type: Input, args: ['abpPermission',] }]
    };
    return PermissionDirective;
}());
if (false) {
    /** @type {?} */
    PermissionDirective.prototype.condition;
    /** @type {?} */
    PermissionDirective.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.vcRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/replaceable-template.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReplaceableTemplateDirective = /** @class */ (function () {
    function ReplaceableTemplateDirective(injector, templateRef, cfRes, vcRef, store) {
        var _this = this;
        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.store = store;
        this.providedData = (/** @type {?} */ ({ inputs: {}, outputs: {} }));
        this.context = (/** @type {?} */ ({}));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.initialized = false;
        this.context = {
            initTemplate: (/**
             * @param {?} ref
             * @return {?}
             */
            function (ref) {
                _this.resetDefaultComponent();
                _this.defaultComponentRef = ref;
                _this.setDefaultComponentInputs();
            }),
        };
    }
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.store
            .select(ReplaceableComponentsState.getComponent(this.data.componentKey))
            .pipe(filter((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            return !_this.initialized || !compare(res.component, _this.externalComponent);
        })), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            _this.vcRef.clear();
            _this.externalComponent = res.component;
            if (_this.defaultComponentRef) {
                _this.resetDefaultComponent();
            }
            if (res.component) {
                _this.setProvidedData();
                /** @type {?} */
                var customInjector = Injector.create({
                    providers: [{ provide: 'REPLACEABLE_DATA', useValue: _this.providedData }],
                    parent: _this.injector,
                });
                _this.vcRef.createComponent(_this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            }
            else {
                _this.vcRef.createEmbeddedView(_this.templateRef, _this.context);
            }
            _this.initialized = true;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (snq((/**
         * @return {?}
         */
        function () { return changes.data.currentValue.inputs; })) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.setDefaultComponentInputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
            return;
        if (this.data.inputs) {
            for (var key in this.data.inputs) {
                if (this.data.inputs.hasOwnProperty(key)) {
                    if (!compare(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                        this.defaultComponentRef[key] = this.data.inputs[key].value;
                    }
                }
            }
        }
        if (this.data.outputs) {
            var _loop_1 = function (key) {
                if (this_1.data.outputs.hasOwnProperty(key)) {
                    if (!this_1.defaultComponentSubscriptions[key]) {
                        this_1.defaultComponentSubscriptions[key] = this_1.defaultComponentRef[key].subscribe((/**
                         * @param {?} value
                         * @return {?}
                         */
                        function (value) {
                            _this.data.outputs[key](value);
                        }));
                    }
                }
            };
            var this_1 = this;
            for (var key in this.data.outputs) {
                _loop_1(key);
            }
        }
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.setProvidedData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.providedData = __assign({}, this.data, { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, __assign({}, Object.keys(this.data.inputs).reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        function (acc, key) {
            var _a;
            return (__assign({}, acc, (_a = {}, _a[key] = __assign({ enumerable: true, configurable: true, get: (/**
                 * @return {?}
                 */
                function () { return _this.data.inputs[key].value; }) }, (_this.data.inputs[key].twoWay && {
                set: (/**
                 * @param {?} newValue
                 * @return {?}
                 */
                function (newValue) {
                    _this.data.inputs[key].value = newValue;
                    _this.data.outputs[key + "Change"](newValue);
                }),
            })), _a)));
        }), {})));
    };
    /**
     * @return {?}
     */
    ReplaceableTemplateDirective.prototype.resetDefaultComponent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.defaultComponentSubscriptions).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.defaultComponentSubscriptions[key].unsubscribe();
        }));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.defaultComponentRef = null;
    };
    ReplaceableTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpReplaceableTemplate]' },] }
    ];
    /** @nocollapse */
    ReplaceableTemplateDirective.ctorParameters = function () { return [
        { type: Injector },
        { type: TemplateRef },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: Store }
    ]; };
    ReplaceableTemplateDirective.propDecorators = {
        data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
    };
    return ReplaceableTemplateDirective;
}());
if (false) {
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.data;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.providedData;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.context;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.externalComponent;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.defaultComponentRef;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.defaultComponentSubscriptions;
    /** @type {?} */
    ReplaceableTemplateDirective.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.cfRes;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ReplaceableTemplateDirective.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/stop-propagation.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StopPropagationDirective = /** @class */ (function () {
    function StopPropagationDirective(el) {
        this.el = el;
        this.stopPropEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StopPropagationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.el.nativeElement, 'click')
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            _this.stopPropEvent.emit(event);
        }));
    };
    /**
     * @return {?}
     */
    StopPropagationDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    StopPropagationDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[click.stop]',
                },] }
    ];
    /** @nocollapse */
    StopPropagationDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StopPropagationDirective.propDecorators = {
        stopPropEvent: [{ type: Output, args: ['click.stop',] }]
    };
    return StopPropagationDirective;
}());
if (false) {
    /** @type {?} */
    StopPropagationDirective.prototype.stopPropEvent;
    /**
     * @type {?}
     * @private
     */
    StopPropagationDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/visibility.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        /** @type {?} */
        var observer;
        observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        function (mutations) {
            mutations.forEach((/**
             * @param {?} mutation
             * @return {?}
             */
            function (mutation) {
                if (!mutation.target)
                    return;
                /** @type {?} */
                var htmlNodes = snq((/**
                 * @return {?}
                 */
                function () { return Array.from(mutation.target.childNodes).filter((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node instanceof HTMLElement; })); }), []);
                if (!htmlNodes.length) {
                    _this.removeFromDOM();
                }
            }));
        }));
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var htmlNodes = snq((/**
             * @return {?}
             */
            function () { return Array.from(_this.focusedElement.childNodes).filter((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node instanceof HTMLElement; })); }), []);
            if (!htmlNodes.length)
                _this.removeFromDOM();
        }), 0);
        this.completed$.subscribe((/**
         * @return {?}
         */
        function () { return observer.disconnect(); }));
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        this.completed$.next();
        this.completed$.complete();
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.removeFromDOM = /**
     * @return {?}
     */
    function () {
        if (!this.elRef.nativeElement)
            return;
        this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
        this.disconnect();
    };
    VisibilityDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpVisibility]',
                },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Optional }] },
        { type: Renderer2 }
    ]; };
    VisibilityDirective.propDecorators = {
        focusedElement: [{ type: Input, args: ['abpVisibility',] }]
    };
    return VisibilityDirective;
}());
if (false) {
    /** @type {?} */
    VisibilityDirective.prototype.focusedElement;
    /** @type {?} */
    VisibilityDirective.prototype.completed$;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interceptors/api.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ApiInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        this.store.dispatch(new StartLoader(request));
        /** @type {?} */
        var headers = (/** @type {?} */ ({}));
        /** @type {?} */
        var token = this.oAuthService.getAccessToken();
        if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = "Bearer " + token;
        }
        /** @type {?} */
        var lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
        }
        /** @type {?} */
        var tenant = this.store.selectSnapshot(SessionState.getTenant);
        if (!request.headers.has('__tenant') && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return next
            .handle(request.clone({
            setHeaders: headers,
        }))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new StopLoader(request)); })));
    };
    ApiInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiInterceptor.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store }
    ]; };
    return ApiInterceptor;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiInterceptor.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    ApiInterceptor.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/localization.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationPipe = /** @class */ (function () {
    function LocalizationPipe(store) {
        this.store = store;
    }
    /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationPipe.prototype.transform = /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, __spread([value], interpolateParams.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) { return (Array.isArray(val) ? __spread(acc, val) : __spread(acc, [val])); }), []))));
    };
    LocalizationPipe.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];
    /** @nocollapse */
    LocalizationPipe.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LocalizationPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationPipe.prototype.store;
}
var MockLocalizationPipe = /** @class */ (function () {
    function MockLocalizationPipe() {
    }
    /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    MockLocalizationPipe.prototype.transform = /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        return typeof value === 'string' ? value : value.defaultValue;
    };
    MockLocalizationPipe.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];
    return MockLocalizationPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/localization.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationModule = /** @class */ (function () {
    function LocalizationModule() {
    }
    LocalizationModule.decorators = [
        { type: NgModule, args: [{
                    exports: [LocalizationPipe],
                    declarations: [LocalizationPipe],
                },] }
    ];
    return LocalizationModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/sort.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} sortOrder
     * @param {?=} sortKey
     * @return {?}
     */
    SortPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} sortOrder
     * @param {?=} sortKey
     * @return {?}
     */
    function (value, sortOrder, sortKey) {
        if (sortOrder === void 0) { sortOrder = 'asc'; }
        sortOrder = sortOrder && ((/** @type {?} */ (sortOrder.toLowerCase())));
        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
            return value;
        /** @type {?} */
        var numberArray = [];
        /** @type {?} */
        var stringArray = [];
        if (!sortKey) {
            numberArray = value.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return typeof item === 'number'; })).sort();
            stringArray = value.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return typeof item === 'string'; })).sort();
        }
        else {
            numberArray = value
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return typeof item[sortKey] === 'number'; }))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a[sortKey] - b[sortKey]; }));
            stringArray = value
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return typeof item[sortKey] === 'string'; }))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                if (a[sortKey] < b[sortKey])
                    return -1;
                else if (a[sortKey] > b[sortKey])
                    return 1;
                else
                    return 0;
            }));
        }
        /** @type {?} */
        var sorted = __spread(numberArray, stringArray, value.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return typeof (sortKey ? item[sortKey] : item) !== 'number' &&
                typeof (sortKey ? item[sortKey] : item) !== 'string';
        })));
        return sortOrder === 'asc' ? sorted : sorted.reverse();
    };
    SortPipe.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{
                    name: 'abpSort',
                },] }
    ];
    return SortPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
var ConfigPlugin = /** @class */ (function () {
    function ConfigPlugin(options, router) {
        this.options = options;
        this.router = router;
        this.initialized = false;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    ConfigPlugin.prototype.handle = /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    function (state, event, next) {
        /** @type {?} */
        var matches = actionMatcher(event);
        /** @type {?} */
        var isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized) {
            /** @type {?} */
            var transformedRoutes = transformRoutes(this.router.config);
            var routes = transformedRoutes.routes, wrappers = transformedRoutes.wrappers;
            wrappers = reduceWrappers(wrappers);
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            var flattedRoutes = flatRoutes(clone(routes));
            state = setValue(state, 'ConfigState', __assign({}, (state.ConfigState && __assign({}, state.ConfigState)), this.options, { routes: routes,
                flattedRoutes: flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    };
    ConfigPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
        { type: Router }
    ]; };
    return ConfigPlugin;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.options;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.router;
}
/**
 * @param {?=} routes
 * @param {?=} wrappers
 * @return {?}
 */
function transformRoutes(routes, wrappers) {
    if (routes === void 0) { routes = []; }
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var abpRoutes = __spread(getAbpRoutes());
    wrappers = abpRoutes.filter((/**
     * @param {?} ar
     * @return {?}
     */
    function (ar) { return ar.wrapper; }));
    /** @type {?} */
    var transformed = (/** @type {?} */ ([]));
    routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return route.component || route.loadChildren; }))
        .forEach((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var abpPackage = abpRoutes.find((/**
         * @param {?} abp
         * @return {?}
         */
        function (abp) { return abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper; }));
        var length = transformed.length;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length && (route.data || {}).routes) {
            transformed.push((/** @type {?} */ (__assign({}, route.data.routes, { path: route.path, name: snq((/**
                 * @return {?}
                 */
                function () { return route.data.routes.name; }), route.path), children: route.data.routes.children || [] }))));
        }
    }));
    return { routes: setUrls(transformed), wrappers: wrappers };
}
/**
 * @param {?} routes
 * @param {?=} parentUrl
 * @return {?}
 */
function setUrls(routes, parentUrl) {
    if (parentUrl) {
        // recursive block
        return routes.map((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return (__assign({}, route, { url: parentUrl + "/" + route.path }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, parentUrl + "/" + route.path),
        }))); }));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return (__assign({}, route, { url: "/" + route.path }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, "/" + route.path),
    }))); }));
}
/**
 * @param {?} routes
 * @return {?}
 */
function flatRoutes(routes) {
    /** @type {?} */
    var flat = (/**
     * @param {?} r
     * @return {?}
     */
    function (r) {
        return r.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) {
            /** @type {?} */
            var value = [val];
            if (val.children) {
                val.children = val.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return (__assign({}, child, { parentName: val.name })); }));
                value = __spread([val], flat(val.children));
            }
            return __spread(acc, value);
        }), []);
    });
    return flat(routes);
}
/**
 * @param {?=} wrappers
 * @return {?}
 */
function reduceWrappers(wrappers) {
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var existingWrappers = new Set();
    return wrappers.filter((/**
     * @param {?} wrapper
     * @return {?}
     */
    function (wrapper) {
        if (existingWrappers.has(wrapper.name))
            return false;
        existingWrappers.add(wrapper.name);
        return true;
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/localization.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationService = /** @class */ (function () {
    function LocalizationService(actions, store, router, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
        this.listenToSetLanguage();
    }
    Object.defineProperty(LocalizationService.prototype, "currentLang", {
        /**
         * Returns currently selected language
         */
        get: /**
         * Returns currently selected language
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.SessionState.language; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LocalizationService.prototype.listenToSetLanguage = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(SetLanguage))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var payload = _a.payload;
            return _this.registerLocale(payload);
        }));
    };
    /**
     * @param {?} reuse
     * @return {?}
     */
    LocalizationService.prototype.setRouteReuse = /**
     * @param {?} reuse
     * @return {?}
     */
    function (reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    LocalizationService.prototype.registerLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        var shouldReuseRoute = this.router.routeReuseStrategy.shouldReuseRoute;
        this.setRouteReuse((/**
         * @return {?}
         */
        function () { return false; }));
        this.router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.router.navigateByUrl(this.router.url).catch(noop$1)];
                        case 1:
                            _a.sent();
                            this.setRouteReuse(shouldReuseRoute);
                            return [2 /*return*/];
                    }
                });
            }); }));
        }));
    };
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param key Localizaton key to replace with localized text
     * @param interpolateParams Values to interpolate
     */
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    LocalizationService.prototype.get = /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.select(ConfigState.getLocalization.apply(ConfigState, __spread([key], interpolateParams)));
    };
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param key Localization key to replace with localized text
     * @param interpolateParams Values to intepolate.
     */
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
     * @return {?}
     */
    LocalizationService.prototype.instant = /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, __spread([key], interpolateParams)));
    };
    LocalizationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: Router },
        { type: NgZone },
        { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(NgZone), ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
    return LocalizationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/providers/locale.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocaleId = /** @class */ (function (_super) {
    __extends(LocaleId, _super);
    function LocaleId(localizationService) {
        var _this = _super.call(this) || this;
        _this.localizationService = localizationService;
        return _this;
    }
    /**
     * @return {?}
     */
    LocaleId.prototype.toString = /**
     * @return {?}
     */
    function () {
        var currentLang = this.localizationService.currentLang;
        return localesMapping[currentLang] || currentLang;
    };
    /**
     * @return {?}
     */
    LocaleId.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        return this.toString();
    };
    return LocaleId;
}(String));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocaleId.prototype.localizationService;
}
/** @type {?} */
var LocaleProvider = {
    provide: LOCALE_ID,
    useClass: LocaleId,
    deps: [LocalizationService],
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-extensions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Date.prototype.toLocalISOString = (/**
 * @this {?}
 * @return {?}
 */
function () {
    /** @type {?} */
    var timezoneOffset = this.getTimezoneOffset();
    return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function storageFactory() {
    return localStorage;
}
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
var BaseCoreModule = /** @class */ (function () {
    function BaseCoreModule() {
    }
    BaseCoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        AbstractNgModelComponent,
                        AutofocusDirective,
                        DynamicLayoutComponent,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        InitDirective,
                        InputEventDebounceDirective,
                        PermissionDirective,
                        ReplaceableRouteContainerComponent,
                        ReplaceableTemplateDirective,
                        RouterOutletComponent,
                        SortPipe,
                        StopPropagationDirective,
                        VisibilityDirective,
                    ],
                    imports: [
                        OAuthModule,
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                    ],
                    declarations: [
                        AbstractNgModelComponent,
                        AutofocusDirective,
                        DynamicLayoutComponent,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        InitDirective,
                        InputEventDebounceDirective,
                        PermissionDirective,
                        ReplaceableRouteContainerComponent,
                        ReplaceableTemplateDirective,
                        RouterOutletComponent,
                        SortPipe,
                        StopPropagationDirective,
                        VisibilityDirective,
                    ],
                    entryComponents: [
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        ReplaceableRouteContainerComponent,
                    ],
                },] }
    ];
    return BaseCoreModule;
}());
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
var RootCoreModule = /** @class */ (function () {
    function RootCoreModule() {
    }
    RootCoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [BaseCoreModule, LocalizationModule],
                    imports: [
                        BaseCoreModule,
                        LocalizationModule,
                        NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
                        NgxsRouterPluginModule.forRoot(),
                        NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
                    ],
                },] }
    ];
    return RootCoreModule;
}());
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
var TestCoreModule = /** @class */ (function () {
    function TestCoreModule() {
    }
    TestCoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
                    imports: [RouterModule.forRoot([]), BaseCoreModule],
                    declarations: [MockLocalizationPipe],
                },] }
    ];
    return TestCoreModule;
}());
/**
 * CoreModule is the module that is publicly available
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @param {?=} __0
     * @return {?}
     */
    CoreModule.forTest = /**
     * @param {?=} __0
     * @return {?}
     */
    function (_a) {
        var _b = (_a === void 0 ? (/** @type {?} */ ({})) : _a).baseHref, baseHref = _b === void 0 ? '/' : _b;
        return {
            ngModule: TestCoreModule,
            providers: [
                { provide: APP_BASE_HREF, useValue: baseHref },
                {
                    provide: LocalizationPipe,
                    useClass: MockLocalizationPipe,
                },
            ],
        };
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        return {
            ngModule: RootCoreModule,
            providers: __spread([
                LocaleProvider,
                {
                    provide: NGXS_PLUGINS,
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
                    useValue: { environment: options.environment },
                },
                {
                    provide: CORE_OPTIONS,
                    useValue: options,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: getInitialData,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: localeInitializer,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [LocalizationService],
                    useFactory: noop,
                }
            ], OAuthModule.forRoot().providers, [
                { provide: OAuthStorage, useFactory: storageFactory },
            ]),
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [BaseCoreModule, LocalizationModule],
                    imports: [BaseCoreModule, LocalizationModule],
                    providers: [LocalizationPipe],
                },] }
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var eLayoutType = {
    account: "account",
    application: "application",
    empty: "empty",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/auth.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(oauthService, injector) {
        this.oauthService = oauthService;
        this.injector = injector;
    }
    /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    function (_, state) {
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        router.navigate(['/account/login'], { state: { redirectUrl: state.url } });
        return true;
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Injector }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(INJECTOR)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/permission.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PermissionGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        /** @type {?} */
        var resource = snq((/**
         * @return {?}
         */
        function () { return route.data.routes.requiredPolicy; })) || snq((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (route.data.requiredPolicy)); }));
        if (!resource) {
            resource = snq((/**
             * @return {?}
             */
            function () {
                return route.routeConfig.children.find((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return state.url.indexOf(child.path) > -1; })).data
                    .requiredPolicy;
            }));
            if (!resource) {
                return of(true);
            }
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(tap((/**
         * @param {?} access
         * @return {?}
         */
        function (access) {
            if (!access) {
                _this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        })));
    };
    PermissionGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ PermissionGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(ɵɵinject(Store)); }, token: PermissionGuard, providedIn: "root" });
    return PermissionGuard;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionGuard.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interceptors/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/application-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfiguration;
(function (ApplicationConfiguration) {
    /**
     * @record
     */
    function Response() { }
    ApplicationConfiguration.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.localization;
        /** @type {?} */
        Response.prototype.auth;
        /** @type {?} */
        Response.prototype.setting;
        /** @type {?} */
        Response.prototype.currentUser;
        /** @type {?} */
        Response.prototype.features;
    }
    /**
     * @record
     */
    function Localization() { }
    ApplicationConfiguration.Localization = Localization;
    if (false) {
        /** @type {?} */
        Localization.prototype.currentCulture;
        /** @type {?} */
        Localization.prototype.defaultResourceName;
        /** @type {?} */
        Localization.prototype.languages;
        /** @type {?} */
        Localization.prototype.values;
    }
    /**
     * @record
     */
    function LocalizationValue() { }
    ApplicationConfiguration.LocalizationValue = LocalizationValue;
    /**
     * @record
     */
    function Language() { }
    ApplicationConfiguration.Language = Language;
    if (false) {
        /** @type {?} */
        Language.prototype.cultureName;
        /** @type {?} */
        Language.prototype.uiCultureName;
        /** @type {?} */
        Language.prototype.displayName;
        /** @type {?} */
        Language.prototype.flagIcon;
    }
    /**
     * @record
     */
    function CurrentCulture() { }
    ApplicationConfiguration.CurrentCulture = CurrentCulture;
    if (false) {
        /** @type {?} */
        CurrentCulture.prototype.cultureName;
        /** @type {?} */
        CurrentCulture.prototype.dateTimeFormat;
        /** @type {?} */
        CurrentCulture.prototype.displayName;
        /** @type {?} */
        CurrentCulture.prototype.englishName;
        /** @type {?} */
        CurrentCulture.prototype.isRightToLeft;
        /** @type {?} */
        CurrentCulture.prototype.name;
        /** @type {?} */
        CurrentCulture.prototype.nativeName;
        /** @type {?} */
        CurrentCulture.prototype.threeLetterIsoLanguageName;
        /** @type {?} */
        CurrentCulture.prototype.twoLetterIsoLanguageName;
    }
    /**
     * @record
     */
    function DateTimeFormat() { }
    ApplicationConfiguration.DateTimeFormat = DateTimeFormat;
    if (false) {
        /** @type {?} */
        DateTimeFormat.prototype.calendarAlgorithmType;
        /** @type {?} */
        DateTimeFormat.prototype.dateSeparator;
        /** @type {?} */
        DateTimeFormat.prototype.fullDateTimePattern;
        /** @type {?} */
        DateTimeFormat.prototype.longTimePattern;
        /** @type {?} */
        DateTimeFormat.prototype.shortDatePattern;
        /** @type {?} */
        DateTimeFormat.prototype.shortTimePattern;
    }
    /**
     * @record
     */
    function Auth() { }
    ApplicationConfiguration.Auth = Auth;
    if (false) {
        /** @type {?} */
        Auth.prototype.policies;
        /** @type {?} */
        Auth.prototype.grantedPolicies;
    }
    /**
     * @record
     */
    function Policy() { }
    ApplicationConfiguration.Policy = Policy;
    /**
     * @record
     */
    function Value() { }
    ApplicationConfiguration.Value = Value;
    if (false) {
        /** @type {?} */
        Value.prototype.values;
    }
    /**
     * @record
     */
    function CurrentUser() { }
    ApplicationConfiguration.CurrentUser = CurrentUser;
    if (false) {
        /** @type {?} */
        CurrentUser.prototype.isAuthenticated;
        /** @type {?} */
        CurrentUser.prototype.id;
        /** @type {?} */
        CurrentUser.prototype.tenantId;
        /** @type {?} */
        CurrentUser.prototype.userName;
    }
})(ApplicationConfiguration || (ApplicationConfiguration = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ABP;
(function (ABP) {
    /**
     * @record
     */
    function Root() { }
    ABP.Root = Root;
    if (false) {
        /** @type {?} */
        Root.prototype.environment;
        /**
         *
         * @deprecated To be deleted in v3.0
         * @type {?|undefined}
         */
        Root.prototype.requirements;
        /** @type {?|undefined} */
        Root.prototype.skipGetAppConfiguration;
    }
    /**
     * @record
     */
    function Test() { }
    ABP.Test = Test;
    if (false) {
        /** @type {?|undefined} */
        Test.prototype.baseHref;
    }
    /**
     * @record
     * @template T
     */
    function PagedItemsResponse() { }
    ABP.PagedItemsResponse = PagedItemsResponse;
    if (false) {
        /** @type {?} */
        PagedItemsResponse.prototype.items;
    }
    /**
     * @record
     */
    function PageQueryParams() { }
    ABP.PageQueryParams = PageQueryParams;
    if (false) {
        /** @type {?|undefined} */
        PageQueryParams.prototype.filter;
        /** @type {?|undefined} */
        PageQueryParams.prototype.sorting;
        /** @type {?|undefined} */
        PageQueryParams.prototype.skipCount;
        /** @type {?|undefined} */
        PageQueryParams.prototype.maxResultCount;
    }
    /**
     * @record
     */
    function Route() { }
    ABP.Route = Route;
    if (false) {
        /** @type {?|undefined} */
        Route.prototype.children;
        /** @type {?|undefined} */
        Route.prototype.invisible;
        /** @type {?|undefined} */
        Route.prototype.layout;
        /** @type {?} */
        Route.prototype.name;
        /** @type {?|undefined} */
        Route.prototype.order;
        /** @type {?|undefined} */
        Route.prototype.parentName;
        /** @type {?} */
        Route.prototype.path;
        /** @type {?|undefined} */
        Route.prototype.requiredPolicy;
        /** @type {?|undefined} */
        Route.prototype.iconClass;
    }
    /**
     * @record
     */
    function FullRoute() { }
    ABP.FullRoute = FullRoute;
    if (false) {
        /** @type {?|undefined} */
        FullRoute.prototype.url;
        /** @type {?|undefined} */
        FullRoute.prototype.wrapper;
    }
    /**
     * @record
     */
    function BasicItem() { }
    ABP.BasicItem = BasicItem;
    if (false) {
        /** @type {?} */
        BasicItem.prototype.id;
        /** @type {?} */
        BasicItem.prototype.name;
    }
    /**
     * @record
     * @template T
     */
    function Option() { }
    ABP.Option = Option;
    if (false) {
        /** @type {?} */
        Option.prototype.key;
        /** @type {?} */
        Option.prototype.value;
    }
    /**
     * @record
     * @template T
     */
    function Dictionary() { }
    ABP.Dictionary = Dictionary;
})(ABP || (ABP = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Config;
(function (Config) {
    /**
     * @record
     */
    function Environment() { }
    Config.Environment = Environment;
    if (false) {
        /** @type {?} */
        Environment.prototype.application;
        /** @type {?} */
        Environment.prototype.production;
        /** @type {?|undefined} */
        Environment.prototype.hmr;
        /** @type {?} */
        Environment.prototype.oAuthConfig;
        /** @type {?} */
        Environment.prototype.apis;
        /** @type {?} */
        Environment.prototype.localization;
    }
    /**
     * @record
     */
    function Application() { }
    Config.Application = Application;
    if (false) {
        /** @type {?} */
        Application.prototype.name;
        /** @type {?|undefined} */
        Application.prototype.logoUrl;
    }
    /**
     * @record
     */
    function ApiConfig() { }
    Config.ApiConfig = ApiConfig;
    if (false) {
        /** @type {?} */
        ApiConfig.prototype.url;
        /* Skipping unhandled member: [key: string]: string;*/
    }
    /**
     * @record
     */
    function Apis() { }
    Config.Apis = Apis;
    if (false) {
        /** @type {?} */
        Apis.prototype.default;
        /* Skipping unhandled member: [key: string]: ApiConfig;*/
    }
    /**
     * @record
     */
    function Requirements() { }
    Config.Requirements = Requirements;
    if (false) {
        /** @type {?} */
        Requirements.prototype.layouts;
    }
    /**
     * @record
     */
    function LocalizationWithDefault() { }
    Config.LocalizationWithDefault = LocalizationWithDefault;
    if (false) {
        /** @type {?} */
        LocalizationWithDefault.prototype.key;
        /** @type {?} */
        LocalizationWithDefault.prototype.defaultValue;
    }
})(Config || (Config = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/dtos.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ListResultDto = /** @class */ (function () {
    function ListResultDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return ListResultDto;
}());
if (false) {
    /** @type {?} */
    ListResultDto.prototype.items;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
PagedResultDto = /** @class */ (function (_super) {
    __extends(PagedResultDto, _super);
    function PagedResultDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedResultDto;
}(ListResultDto));
if (false) {
    /** @type {?} */
    PagedResultDto.prototype.totalCount;
}
var LimitedResultRequestDto = /** @class */ (function () {
    function LimitedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        this.maxResultCount = 10;
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return LimitedResultRequestDto;
}());
if (false) {
    /** @type {?} */
    LimitedResultRequestDto.prototype.maxResultCount;
}
var PagedResultRequestDto = /** @class */ (function (_super) {
    __extends(PagedResultRequestDto, _super);
    function PagedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedResultRequestDto;
}(LimitedResultRequestDto));
if (false) {
    /** @type {?} */
    PagedResultRequestDto.prototype.skipCount;
}
var PagedAndSortedResultRequestDto = /** @class */ (function (_super) {
    __extends(PagedAndSortedResultRequestDto, _super);
    function PagedAndSortedResultRequestDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return PagedAndSortedResultRequestDto;
}(PagedResultRequestDto));
if (false) {
    /** @type {?} */
    PagedAndSortedResultRequestDto.prototype.sorting;
}
/**
 * @template TKey
 */
var  /**
 * @template TKey
 */
EntityDto = /** @class */ (function () {
    function EntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        for (var key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
    return EntityDto;
}());
if (false) {
    /** @type {?} */
    EntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
var  /**
 * @template TPrimaryKey
 */
CreationAuditedEntityDto = /** @class */ (function (_super) {
    __extends(CreationAuditedEntityDto, _super);
    function CreationAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return CreationAuditedEntityDto;
}(EntityDto));
if (false) {
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
var  /**
 * @template TUserDto, TPrimaryKey
 */
CreationAuditedEntityWithUserDto = /** @class */ (function (_super) {
    __extends(CreationAuditedEntityWithUserDto, _super);
    function CreationAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return CreationAuditedEntityWithUserDto;
}(CreationAuditedEntityDto));
if (false) {
    /** @type {?} */
    CreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
var  /**
 * @template TPrimaryKey
 */
AuditedEntityDto = /** @class */ (function (_super) {
    __extends(AuditedEntityDto, _super);
    function AuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return AuditedEntityDto;
}(CreationAuditedEntityDto));
if (false) {
    /** @type {?} */
    AuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    AuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
var  /**
 * @template TUserDto, TPrimaryKey
 */
AuditedEntityWithUserDto = /** @class */ (function (_super) {
    __extends(AuditedEntityWithUserDto, _super);
    function AuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return AuditedEntityWithUserDto;
}(AuditedEntityDto));
if (false) {
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey
 */
var  /**
 * @template TPrimaryKey
 */
FullAuditedEntityDto = /** @class */ (function (_super) {
    __extends(FullAuditedEntityDto, _super);
    function FullAuditedEntityDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return FullAuditedEntityDto;
}(AuditedEntityDto));
if (false) {
    /** @type {?} */
    FullAuditedEntityDto.prototype.isDeleted;
    /** @type {?} */
    FullAuditedEntityDto.prototype.deleterId;
    /** @type {?} */
    FullAuditedEntityDto.prototype.deletionTime;
}
/**
 * @template TUserDto, TPrimaryKey
 */
var  /**
 * @template TUserDto, TPrimaryKey
 */
FullAuditedEntityWithUserDto = /** @class */ (function (_super) {
    __extends(FullAuditedEntityWithUserDto, _super);
    function FullAuditedEntityWithUserDto(initialValues) {
        if (initialValues === void 0) { initialValues = {}; }
        return _super.call(this, initialValues) || this;
    }
    return FullAuditedEntityWithUserDto;
}(FullAuditedEntityDto));
if (false) {
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.lastModifier;
    /** @type {?} */
    FullAuditedEntityWithUserDto.prototype.deleter;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/profile.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Profile;
(function (Profile) {
    /**
     * @record
     */
    function State() { }
    Profile.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.profile;
    }
    /**
     * @record
     */
    function Response() { }
    Profile.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.userName;
        /** @type {?} */
        Response.prototype.email;
        /** @type {?} */
        Response.prototype.name;
        /** @type {?} */
        Response.prototype.surname;
        /** @type {?} */
        Response.prototype.phoneNumber;
    }
    /**
     * @record
     */
    function ChangePasswordRequest() { }
    Profile.ChangePasswordRequest = ChangePasswordRequest;
    if (false) {
        /** @type {?} */
        ChangePasswordRequest.prototype.currentPassword;
        /** @type {?} */
        ChangePasswordRequest.prototype.newPassword;
    }
})(Profile || (Profile = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/replaceable-components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReplaceableComponents;
(function (ReplaceableComponents) {
    /**
     * @record
     */
    function State() { }
    ReplaceableComponents.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.replaceableComponents;
    }
    /**
     * @record
     */
    function ReplaceableComponent() { }
    ReplaceableComponents.ReplaceableComponent = ReplaceableComponent;
    if (false) {
        /** @type {?} */
        ReplaceableComponent.prototype.component;
        /** @type {?} */
        ReplaceableComponent.prototype.key;
    }
    /**
     * @record
     * @template I, O
     */
    function ReplaceableTemplateDirectiveInput() { }
    ReplaceableComponents.ReplaceableTemplateDirectiveInput = ReplaceableTemplateDirectiveInput;
    if (false) {
        /** @type {?} */
        ReplaceableTemplateDirectiveInput.prototype.inputs;
        /** @type {?} */
        ReplaceableTemplateDirectiveInput.prototype.outputs;
        /** @type {?} */
        ReplaceableTemplateDirectiveInput.prototype.componentKey;
    }
    /**
     * @record
     * @template I, O
     */
    function ReplaceableTemplateData() { }
    ReplaceableComponents.ReplaceableTemplateData = ReplaceableTemplateData;
    if (false) {
        /** @type {?} */
        ReplaceableTemplateData.prototype.inputs;
        /** @type {?} */
        ReplaceableTemplateData.prototype.outputs;
        /** @type {?} */
        ReplaceableTemplateData.prototype.componentKey;
    }
    /**
     * @record
     * @template T
     */
    function RouteData() { }
    ReplaceableComponents.RouteData = RouteData;
    if (false) {
        /** @type {?} */
        RouteData.prototype.key;
        /** @type {?} */
        RouteData.prototype.defaultComponent;
    }
})(ReplaceableComponents || (ReplaceableComponents = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/rest.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Rest;
(function (Rest) {
    /**
     * @record
     * @template T
     */
    function Request() { }
    Rest.Request = Request;
    if (false) {
        /** @type {?|undefined} */
        Request.prototype.body;
        /** @type {?|undefined} */
        Request.prototype.headers;
        /** @type {?} */
        Request.prototype.method;
        /** @type {?|undefined} */
        Request.prototype.params;
        /** @type {?|undefined} */
        Request.prototype.reportProgress;
        /** @type {?|undefined} */
        Request.prototype.responseType;
        /** @type {?} */
        Request.prototype.url;
        /** @type {?|undefined} */
        Request.prototype.withCredentials;
    }
})(Rest || (Rest = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/session.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Session;
(function (Session) {
    /**
     * @record
     */
    function State() { }
    Session.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.language;
        /** @type {?} */
        State.prototype.tenant;
        /** @type {?} */
        State.prototype.sessionDetail;
    }
    /**
     * @record
     */
    function SessionDetail() { }
    Session.SessionDetail = SessionDetail;
    if (false) {
        /** @type {?} */
        SessionDetail.prototype.openedTabCount;
        /** @type {?} */
        SessionDetail.prototype.lastExitTime;
        /** @type {?} */
        SessionDetail.prototype.remember;
    }
})(Session || (Session = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/utility.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/application-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfigurationService = /** @class */ (function () {
    function ApplicationConfigurationService(rest, store) {
        this.rest = rest;
        this.store = store;
    }
    Object.defineProperty(ApplicationConfigurationService.prototype, "apiName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getDeep('environment.application.name'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ApplicationConfigurationService.prototype.getConfiguration = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    ApplicationConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ApplicationConfigurationService.ctorParameters = function () { return [
        { type: RestService },
        { type: Store }
    ]; };
    /** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
    return ApplicationConfigurationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.rest;
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(rest, oAuthService, store, options) {
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
    }
    /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} username
     * @param {?} password
     * @return {?}
     */
    function (username, password) {
        var _this = this;
        /** @type {?} */
        var tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return from(_this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(__assign({}, (tenant && tenant.id && { __tenant: tenant.id })))));
        })), switchMap((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new GetAppConfiguration()); })), tap((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var redirectUrl = snq((/**
             * @return {?}
             */
            function () { return window.history.state.redirectUrl; })) || (_this.options || {}).redirectUrl || '/';
            _this.store.dispatch(new Navigate([redirectUrl]));
        })), take(1));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return this.rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(switchMap((/**
         * @return {?}
         */
        function () {
            _this.oAuthService.logOut();
            return _this.store.dispatch(new GetAppConfiguration());
        })));
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: RestService },
        { type: OAuthService },
        { type: Store },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(RestService), ɵɵinject(OAuthService), ɵɵinject(Store), ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.rest;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/config-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigStateService = /** @class */ (function () {
    function ConfigStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ConfigStateService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ConfigState.getAll);
    };
    /**
     * @return {?}
     */
    ConfigStateService.prototype.getApplicationInfo = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getOne = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getOne.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getDeep = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getDeep.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getRoute = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getRoute.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getApiUrl = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getApiUrl.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getSetting = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getSetting.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getSettings = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getSettings.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getGrantedPolicy = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy.apply(ConfigState, __spread(args)));
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.getLocalization = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, __spread(args)));
    };
    /**
     * @return {?}
     */
    ConfigStateService.prototype.dispatchGetAppConfiguration = /**
     * @return {?}
     */
    function () {
        return this.store.dispatch(new GetAppConfiguration());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchPatchRouteByName = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (PatchRouteByName.bind.apply(PatchRouteByName, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchAddRoute = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (AddRoute.bind.apply(AddRoute, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ConfigStateService.prototype.dispatchSetEnvironment = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetEnvironment.bind.apply(SetEnvironment, __spread([void 0], args)))());
    };
    ConfigStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConfigStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(ɵɵinject(Store)); }, token: ConfigStateService, providedIn: "root" });
    return ConfigStateService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/content-projection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentProjectionService = /** @class */ (function () {
    function ContentProjectionService(injector) {
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} projectionStrategy
     * @param {?=} injector
     * @return {?}
     */
    ContentProjectionService.prototype.projectContent = /**
     * @template T
     * @param {?} projectionStrategy
     * @param {?=} injector
     * @return {?}
     */
    function (projectionStrategy, injector) {
        if (injector === void 0) { injector = this.injector; }
        return projectionStrategy.injectContent(injector);
    };
    ContentProjectionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ContentProjectionService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ContentProjectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(ɵɵinject(INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
    return ContentProjectionService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContentProjectionService.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/dom-insertion.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomInsertionService = /** @class */ (function () {
    function DomInsertionService() {
        this.inserted = new Set();
    }
    /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    DomInsertionService.prototype.insertContent = /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    function (contentStrategy) {
        /** @type {?} */
        var hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        /** @type {?} */
        var element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomInsertionService.prototype.removeContent = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    DomInsertionService.prototype.has = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var hash = generateHash(content);
        return this.inserted.has(hash);
    };
    DomInsertionService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DomInsertionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
    return DomInsertionService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomInsertionService.prototype.inserted;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/container.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ContainerStrategy = /** @class */ (function () {
    function ContainerStrategy(containerRef) {
        this.containerRef = containerRef;
    }
    /**
     * @return {?}
     */
    ContainerStrategy.prototype.prepare = /**
     * @return {?}
     */
    function () { };
    return ContainerStrategy;
}());
if (false) {
    /** @type {?} */
    ContainerStrategy.prototype.containerRef;
    /**
     * @abstract
     * @return {?}
     */
    ContainerStrategy.prototype.getIndex = function () { };
}
var ClearContainerStrategy = /** @class */ (function (_super) {
    __extends(ClearContainerStrategy, _super);
    function ClearContainerStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ClearContainerStrategy.prototype.getIndex = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @return {?}
     */
    ClearContainerStrategy.prototype.prepare = /**
     * @return {?}
     */
    function () {
        this.containerRef.clear();
    };
    return ClearContainerStrategy;
}(ContainerStrategy));
var InsertIntoContainerStrategy = /** @class */ (function (_super) {
    __extends(InsertIntoContainerStrategy, _super);
    function InsertIntoContainerStrategy(containerRef, index) {
        var _this = _super.call(this, containerRef) || this;
        _this.index = index;
        return _this;
    }
    /**
     * @return {?}
     */
    InsertIntoContainerStrategy.prototype.getIndex = /**
     * @return {?}
     */
    function () {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    };
    return InsertIntoContainerStrategy;
}(ContainerStrategy));
if (false) {
    /**
     * @type {?}
     * @private
     */
    InsertIntoContainerStrategy.prototype.index;
}
/** @type {?} */
var CONTAINER_STRATEGY = {
    Clear: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    Append: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    Prepend: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    Insert: /**
     * @param {?} containerRef
     * @param {?} index
     * @return {?}
     */
    function (containerRef, index) {
        return new InsertIntoContainerStrategy(containerRef, index);
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/content-security.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ContentSecurityStrategy = /** @class */ (function () {
    function ContentSecurityStrategy(nonce) {
        this.nonce = nonce;
    }
    return ContentSecurityStrategy;
}());
if (false) {
    /** @type {?} */
    ContentSecurityStrategy.prototype.nonce;
    /**
     * @abstract
     * @param {?} element
     * @return {?}
     */
    ContentSecurityStrategy.prototype.applyCSP = function (element) { };
}
var LooseContentSecurityStrategy = /** @class */ (function (_super) {
    __extends(LooseContentSecurityStrategy, _super);
    function LooseContentSecurityStrategy(nonce) {
        return _super.call(this, nonce) || this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    LooseContentSecurityStrategy.prototype.applyCSP = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.setAttribute('nonce', this.nonce);
    };
    return LooseContentSecurityStrategy;
}(ContentSecurityStrategy));
var NoContentSecurityStrategy = /** @class */ (function (_super) {
    __extends(NoContentSecurityStrategy, _super);
    function NoContentSecurityStrategy() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    NoContentSecurityStrategy.prototype.applyCSP = /**
     * @param {?} _
     * @return {?}
     */
    function (_) { };
    return NoContentSecurityStrategy;
}(ContentSecurityStrategy));
/** @type {?} */
var CONTENT_SECURITY_STRATEGY = {
    Loose: /**
     * @param {?} nonce
     * @return {?}
     */
    function (nonce) {
        return new LooseContentSecurityStrategy(nonce);
    },
    None: /**
     * @return {?}
     */
    function () {
        return new NoContentSecurityStrategy();
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/content.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
ContentStrategy = /** @class */ (function () {
    function ContentStrategy(content, domStrategy, contentSecurityStrategy) {
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
        if (contentSecurityStrategy === void 0) { contentSecurityStrategy = CONTENT_SECURITY_STRATEGY.None(); }
        this.content = content;
        this.domStrategy = domStrategy;
        this.contentSecurityStrategy = contentSecurityStrategy;
    }
    /**
     * @return {?}
     */
    ContentStrategy.prototype.insertElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.createElement();
        this.contentSecurityStrategy.applyCSP(element);
        this.domStrategy.insertElement(element);
        return element;
    };
    return ContentStrategy;
}());
if (false) {
    /** @type {?} */
    ContentStrategy.prototype.content;
    /**
     * @type {?}
     * @protected
     */
    ContentStrategy.prototype.domStrategy;
    /**
     * @type {?}
     * @protected
     */
    ContentStrategy.prototype.contentSecurityStrategy;
    /**
     * @abstract
     * @return {?}
     */
    ContentStrategy.prototype.createElement = function () { };
}
var StyleContentStrategy = /** @class */ (function (_super) {
    __extends(StyleContentStrategy, _super);
    function StyleContentStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    StyleContentStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('style');
        element.textContent = this.content;
        return element;
    };
    return StyleContentStrategy;
}(ContentStrategy));
var ScriptContentStrategy = /** @class */ (function (_super) {
    __extends(ScriptContentStrategy, _super);
    function ScriptContentStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ScriptContentStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('script');
        element.textContent = this.content;
        return element;
    };
    return ScriptContentStrategy;
}(ContentStrategy));
/** @type {?} */
var CONTENT_STRATEGY = {
    AppendScriptToBody: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToBody());
    },
    AppendScriptToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    AppendStyleToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    PrependStyleToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.PrependToHead());
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/context.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
ContextStrategy = /** @class */ (function () {
    function ContextStrategy(context) {
        this.context = context;
    }
    /* tslint:disable-next-line:no-unused-variable */
    /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    ContextStrategy.prototype.setContext = /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    function (componentRef) {
        return this.context;
    };
    return ContextStrategy;
}());
if (false) {
    /** @type {?} */
    ContextStrategy.prototype.context;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
NoContextStrategy = /** @class */ (function (_super) {
    __extends(NoContextStrategy, _super);
    function NoContextStrategy() {
        return _super.call(this, undefined) || this;
    }
    return NoContextStrategy;
}(ContextStrategy));
/**
 * @template T
 */
var  /**
 * @template T
 */
ComponentContextStrategy = /** @class */ (function (_super) {
    __extends(ComponentContextStrategy, _super);
    function ComponentContextStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ComponentContextStrategy.prototype.setContext = /**
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        var _this = this;
        Object.keys(this.context).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (componentRef.instance[key] = _this.context[key]); }));
        componentRef.changeDetectorRef.detectChanges();
        return this.context;
    };
    return ComponentContextStrategy;
}(ContextStrategy));
/**
 * @template T
 */
var  /**
 * @template T
 */
TemplateContextStrategy = /** @class */ (function (_super) {
    __extends(TemplateContextStrategy, _super);
    function TemplateContextStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    TemplateContextStrategy.prototype.setContext = /**
     * @return {?}
     */
    function () {
        return this.context;
    };
    return TemplateContextStrategy;
}(ContextStrategy));
/** @type {?} */
var CONTEXT_STRATEGY = {
    None: /**
     * @template T
     * @return {?}
     */
    function () {
        return new NoContextStrategy();
    },
    Component: /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return new ComponentContextStrategy(context);
    },
    Template: /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return new TemplateContextStrategy(context);
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/loading.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
LoadingStrategy = /** @class */ (function () {
    function LoadingStrategy(path, domStrategy, crossOriginStrategy) {
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
        if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
        this.path = path;
        this.domStrategy = domStrategy;
        this.crossOriginStrategy = crossOriginStrategy;
    }
    /**
     * @template E
     * @return {?}
     */
    LoadingStrategy.prototype.createStream = /**
     * @template E
     * @return {?}
     */
    function () {
        var _this = this;
        return of(null).pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return fromLazyLoad(_this.createElement(), _this.domStrategy, _this.crossOriginStrategy);
        })));
    };
    return LoadingStrategy;
}());
if (false) {
    /** @type {?} */
    LoadingStrategy.prototype.path;
    /**
     * @type {?}
     * @protected
     */
    LoadingStrategy.prototype.domStrategy;
    /**
     * @type {?}
     * @protected
     */
    LoadingStrategy.prototype.crossOriginStrategy;
    /**
     * @abstract
     * @return {?}
     */
    LoadingStrategy.prototype.createElement = function () { };
}
var ScriptLoadingStrategy = /** @class */ (function (_super) {
    __extends(ScriptLoadingStrategy, _super);
    function ScriptLoadingStrategy(src, domStrategy, crossOriginStrategy) {
        return _super.call(this, src, domStrategy, crossOriginStrategy) || this;
    }
    /**
     * @return {?}
     */
    ScriptLoadingStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('script');
        element.src = this.path;
        return element;
    };
    return ScriptLoadingStrategy;
}(LoadingStrategy));
var StyleLoadingStrategy = /** @class */ (function (_super) {
    __extends(StyleLoadingStrategy, _super);
    function StyleLoadingStrategy(href, domStrategy, crossOriginStrategy) {
        return _super.call(this, href, domStrategy, crossOriginStrategy) || this;
    }
    /**
     * @return {?}
     */
    StyleLoadingStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = this.path;
        return element;
    };
    return StyleLoadingStrategy;
}(LoadingStrategy));
/** @type {?} */
var LOADING_STRATEGY = {
    AppendAnonymousScriptToBody: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousScriptToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousStyleToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousScriptToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousStyleToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/projection.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
ProjectionStrategy = /** @class */ (function () {
    function ProjectionStrategy(content) {
        this.content = content;
    }
    return ProjectionStrategy;
}());
if (false) {
    /** @type {?} */
    ProjectionStrategy.prototype.content;
    /**
     * @abstract
     * @param {?} injector
     * @return {?}
     */
    ProjectionStrategy.prototype.injectContent = function (injector) { };
}
/**
 * @template T
 */
var  /**
 * @template T
 */
ComponentProjectionStrategy = /** @class */ (function (_super) {
    __extends(ComponentProjectionStrategy, _super);
    function ComponentProjectionStrategy(component, containerStrategy, contextStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        var _this = _super.call(this, component) || this;
        _this.containerStrategy = containerStrategy;
        _this.contextStrategy = contextStrategy;
        return _this;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    ComponentProjectionStrategy.prototype.injectContent = /**
     * @param {?} injector
     * @return {?}
     */
    function (injector) {
        this.containerStrategy.prepare();
        /** @type {?} */
        var resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        var factory = resolver.resolveComponentFactory(this.content);
        /** @type {?} */
        var componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
        this.contextStrategy.setContext(componentRef);
        return (/** @type {?} */ (componentRef));
    };
    return ComponentProjectionStrategy;
}(ProjectionStrategy));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentProjectionStrategy.prototype.containerStrategy;
    /**
     * @type {?}
     * @private
     */
    ComponentProjectionStrategy.prototype.contextStrategy;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
RootComponentProjectionStrategy = /** @class */ (function (_super) {
    __extends(RootComponentProjectionStrategy, _super);
    function RootComponentProjectionStrategy(component, contextStrategy, domStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToBody(); }
        var _this = _super.call(this, component) || this;
        _this.contextStrategy = contextStrategy;
        _this.domStrategy = domStrategy;
        return _this;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    RootComponentProjectionStrategy.prototype.injectContent = /**
     * @param {?} injector
     * @return {?}
     */
    function (injector) {
        /** @type {?} */
        var appRef = injector.get(ApplicationRef);
        /** @type {?} */
        var resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        var componentRef = resolver
            .resolveComponentFactory(this.content)
            .create(injector);
        this.contextStrategy.setContext(componentRef);
        appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var element = ((/** @type {?} */ (componentRef.hostView))).rootNodes[0];
        this.domStrategy.insertElement(element);
        return (/** @type {?} */ (componentRef));
    };
    return RootComponentProjectionStrategy;
}(ProjectionStrategy));
if (false) {
    /**
     * @type {?}
     * @private
     */
    RootComponentProjectionStrategy.prototype.contextStrategy;
    /**
     * @type {?}
     * @private
     */
    RootComponentProjectionStrategy.prototype.domStrategy;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
TemplateProjectionStrategy = /** @class */ (function (_super) {
    __extends(TemplateProjectionStrategy, _super);
    function TemplateProjectionStrategy(templateRef, containerStrategy, contextStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        var _this = _super.call(this, templateRef) || this;
        _this.containerStrategy = containerStrategy;
        _this.contextStrategy = contextStrategy;
        return _this;
    }
    /**
     * @return {?}
     */
    TemplateProjectionStrategy.prototype.injectContent = /**
     * @return {?}
     */
    function () {
        this.containerStrategy.prepare();
        /** @type {?} */
        var embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
        embeddedViewRef.detectChanges();
        return (/** @type {?} */ (embeddedViewRef));
    };
    return TemplateProjectionStrategy;
}(ProjectionStrategy));
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateProjectionStrategy.prototype.containerStrategy;
    /**
     * @type {?}
     * @private
     */
    TemplateProjectionStrategy.prototype.contextStrategy;
}
/** @type {?} */
var PROJECTION_STRATEGY = {
    AppendComponentToBody: /**
     * @template T
     * @param {?} component
     * @param {?=} context
     * @return {?}
     */
    function (component, context) {
        return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
    },
    AppendComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    AppendTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    PrependComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    PrependTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    ProjectComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    ProjectTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/lazy-load.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService() {
        this.loaded = new Set();
        this.loadedLibraries = {};
    }
    /**
     * @param {?} strategyOrUrl
     * @param {?=} retryTimesOrType
     * @param {?=} retryDelayOrContent
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    LazyLoadService.prototype.load = /**
     * @param {?} strategyOrUrl
     * @param {?=} retryTimesOrType
     * @param {?=} retryDelayOrContent
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    function (strategyOrUrl, retryTimesOrType, retryDelayOrContent, targetQuery, position) {
        var _this = this;
        if (targetQuery === void 0) { targetQuery = 'body'; }
        if (position === void 0) { position = 'beforeend'; }
        if (strategyOrUrl instanceof LoadingStrategy) {
            /** @type {?} */
            var strategy_1 = strategyOrUrl;
            /** @type {?} */
            var retryTimes_1 = typeof retryTimesOrType === 'number' ? retryTimesOrType : 2;
            /** @type {?} */
            var retryDelay_1 = typeof retryDelayOrContent === 'number' ? retryDelayOrContent : 1000;
            if (this.loaded.has(strategy_1.path))
                return of(new CustomEvent('load'));
            return strategy_1.createStream().pipe(retryWhen((/**
             * @param {?} error$
             * @return {?}
             */
            function (error$) {
                return concat(error$.pipe(delay(retryDelay_1), take(retryTimes_1)), throwError(new CustomEvent('error')));
            })), tap((/**
             * @return {?}
             */
            function () { return _this.loaded.add(strategy_1.path); })), delay(100), shareReplay({ bufferSize: 1, refCount: true }));
        }
        /** @type {?} */
        var urlOrUrls = strategyOrUrl;
        /** @type {?} */
        var content = ((/** @type {?} */ (retryDelayOrContent))) || '';
        /** @type {?} */
        var type = (/** @type {?} */ (retryTimesOrType));
        if (!urlOrUrls && !content) {
            return throwError('Should pass url or content');
        }
        else if (!urlOrUrls && content) {
            urlOrUrls = [null];
        }
        if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
        }
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            ((/** @type {?} */ (urlOrUrls))).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            function (url, index) {
                /** @type {?} */
                var key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
                if (_this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                _this.loadedLibraries[key] = new ReplaySubject();
                /** @type {?} */
                var library;
                if (type === 'script') {
                    library = document.createElement('script');
                    library.type = 'text/javascript';
                    if (url) {
                        ((/** @type {?} */ (library))).src = url;
                    }
                    ((/** @type {?} */ (library))).text = content;
                }
                else if (url) {
                    library = document.createElement('link');
                    library.type = 'text/css';
                    ((/** @type {?} */ (library))).rel = 'stylesheet';
                    if (url) {
                        ((/** @type {?} */ (library))).href = url;
                    }
                }
                else {
                    library = document.createElement('style');
                    ((/** @type {?} */ (library))).textContent = content;
                }
                library.onload = (/**
                 * @return {?}
                 */
                function () {
                    _this.loadedLibraries[key].next();
                    _this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                });
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            }));
        }));
    };
    LazyLoadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ LazyLoadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    return LazyLoadService;
}());
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loaded;
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileStateService = /** @class */ (function () {
    function ProfileStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ProfileStateService.prototype.getProfile = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ProfileState.getProfile);
    };
    /**
     * @return {?}
     */
    ProfileStateService.prototype.dispatchGetProfile = /**
     * @return {?}
     */
    function () {
        return this.store.dispatch(new GetProfile());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ProfileStateService.prototype.dispatchUpdateProfile = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdateProfile.bind.apply(UpdateProfile, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    ProfileStateService.prototype.dispatchChangePassword = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (ChangePassword.bind.apply(ChangePassword, __spread([void 0], args)))());
    };
    ProfileStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ProfileStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(ɵɵinject(Store)); }, token: ProfileStateService, providedIn: "root" });
    return ProfileStateService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionStateService = /** @class */ (function () {
    function SessionStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    SessionStateService.prototype.getLanguage = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getLanguage);
    };
    /**
     * @return {?}
     */
    SessionStateService.prototype.getTenant = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getTenant);
    };
    /**
     * @return {?}
     */
    SessionStateService.prototype.getSessionDetail = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(SessionState.getSessionDetail);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetLanguage = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetLanguage.bind.apply(SetLanguage, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetTenant = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetTenant.bind.apply(SetTenant, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchSetRemember = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (SetRemember.bind.apply(SetRemember, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    SessionStateService.prototype.dispatchModifyOpenedTabCount = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (ModifyOpenedTabCount.bind.apply(ModifyOpenedTabCount, __spread([void 0], args)))());
    };
    SessionStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SessionStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ SessionStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(ɵɵinject(Store)); }, token: SessionStateService, providedIn: "root" });
    return SessionStateService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/track-by.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var trackBy = (/**
 * @template T
 * @param {?} key
 * @return {?}
 */
function (key) { return (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
function (_, item) { return item[key]; }); });
/** @type {?} */
var trackByDeep = (/**
 * @template T
 * @param {...?} keys
 * @return {?}
 */
function () {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return (/**
     * @param {?} _
     * @param {?} item
     * @return {?}
     */
    function (_, item) { return keys.reduce((/**
     * @param {?} acc
     * @param {?} key
     * @return {?}
     */
    function (acc, key) { return acc[key]; }), item); });
});
/**
 * @template ItemType
 */
var TrackByService = /** @class */ (function () {
    function TrackByService() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
    TrackByService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ TrackByService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
    return TrackByService;
}());
if (false) {
    /** @type {?} */
    TrackByService.prototype.by;
    /** @type {?} */
    TrackByService.prototype.byDeep;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractNgModelComponent, AddReplaceableComponent, AddRoute, ApiInterceptor, ApplicationConfigurationService, AuditedEntityDto, AuditedEntityWithUserDto, AuthGuard, AuthService, AutofocusDirective, CONTAINER_STRATEGY, CONTENT_SECURITY_STRATEGY, CONTENT_STRATEGY, CONTEXT_STRATEGY, CORE_OPTIONS, CROSS_ORIGIN_STRATEGY, ChangePassword, ClearContainerStrategy, ComponentContextStrategy, ComponentProjectionStrategy, ConfigPlugin, ConfigState, ConfigStateService, ContainerStrategy, ContentProjectionService, ContentSecurityStrategy, ContentStrategy, ContextStrategy, CoreModule, CreationAuditedEntityDto, CreationAuditedEntityWithUserDto, CrossOriginStrategy, DOM_STRATEGY, DomInsertionService, DomStrategy, DynamicLayoutComponent, EllipsisDirective, EntityDto, ForDirective, FormSubmitDirective, FullAuditedEntityDto, FullAuditedEntityWithUserDto, GetAppConfiguration, GetProfile, InitDirective, InsertIntoContainerStrategy, LOADING_STRATEGY, LazyLoadService, LimitedResultRequestDto, ListResultDto, LoadingStrategy, LocalizationPipe, LocalizationService, LooseContentSecurityStrategy, MockLocalizationPipe, ModifyOpenedTabCount, NGXS_CONFIG_PLUGIN_OPTIONS, NoContentSecurityStrategy, NoContextStrategy, PROJECTION_STRATEGY, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ProjectionStrategy, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, Rest, RestOccurError, RestService, RootComponentProjectionStrategy, RouterOutletComponent, ScriptContentStrategy, ScriptLoadingStrategy, SessionState, SessionStateService, SetEnvironment, SetLanguage, SetRemember, SetTenant, SortPipe, StartLoader, StopLoader, StyleContentStrategy, StyleLoadingStrategy, TemplateContextStrategy, TemplateProjectionStrategy, TrackByService, UpdateProfile, VisibilityDirective, addAbpRoutes, fromLazyLoad, generateHash, generatePassword, getAbpRoutes, getInitialData, isNumber, isUndefinedOrEmptyString, localeInitializer, mapEnumToOptions, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, takeUntilDestroy, trackBy, trackByDeep, uuid, storageFactory as ɵa, BaseCoreModule as ɵb, ProfileService as ɵba, RestService as ɵbb, GetProfile as ɵbc, UpdateProfile as ɵbd, ChangePassword as ɵbe, SessionState as ɵbg, SetLanguage as ɵbh, SetTenant as ɵbi, ModifyOpenedTabCount as ɵbj, SetRemember as ɵbk, ConfigState as ɵbm, PatchRouteByName as ɵbn, GetAppConfiguration as ɵbo, AddRoute as ɵbp, SetEnvironment as ɵbq, LocaleId as ɵbs, LocaleProvider as ɵbt, LocalizationService as ɵbu, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbv, ConfigPlugin as ɵbw, CORE_OPTIONS as ɵby, ApiInterceptor as ɵbz, RootCoreModule as ɵc, getInitialData as ɵca, localeInitializer as ɵcb, noop as ɵcc, TestCoreModule as ɵd, AbstractNgModelComponent as ɵe, AutofocusDirective as ɵf, DynamicLayoutComponent as ɵg, EllipsisDirective as ɵh, ForDirective as ɵi, FormSubmitDirective as ɵj, InitDirective as ɵk, InputEventDebounceDirective as ɵl, PermissionDirective as ɵm, ReplaceableRouteContainerComponent as ɵn, ReplaceableTemplateDirective as ɵo, RouterOutletComponent as ɵp, SortPipe as ɵq, StopPropagationDirective as ɵr, VisibilityDirective as ɵs, LocalizationModule as ɵt, LocalizationPipe as ɵu, MockLocalizationPipe as ɵv, ReplaceableComponentsState as ɵw, AddReplaceableComponent as ɵx, ProfileState as ɵz };
//# sourceMappingURL=abp-ng.core.js.map
