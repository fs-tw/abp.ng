import { ChangeDetectorRef, Component, Injector, Input, Injectable, ɵɵdefineInjectable, ɵɵinject, NgZone, Optional, SkipSelf, Directive, ElementRef, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, EventEmitter, Self, Output, Renderer2, ComponentFactoryResolver, Pipe, InjectionToken, Inject, LOCALE_ID, APP_INITIALIZER, NgModule } from '@angular/core';
import { __rest, __awaiter, __decorate, __metadata } from 'tslib';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Store, ofActionSuccessful, Actions, Action, Selector, State, createSelector, Select, actionMatcher, InitState, UpdateState, setValue, NGXS_PLUGINS, NgxsModule } from '@ngxs/store';
import { throwError, noop as noop$1, fromEvent, from, of, Subject, Observable, ReplaySubject } from 'rxjs';
import snq from 'snq';
import { take, tap, catchError, switchMap, takeUntil, distinctUntilChanged, debounceTime, filter, finalize } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { registerLocaleData, CommonModule } from '@angular/common';
import { OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import compare from 'just-compare';
import clone from 'just-clone';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Navigate, NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { takeUntilDestroy as takeUntilDestroy$1 } from '@ngx-validate/core';

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
class AbstractNgModelComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.valueFn = (/**
         * @param {?} value
         * @return {?}
         */
        value => (/** @type {?} */ (((/** @type {?} */ (value))))));
        this.valueLimitFn = (/**
         * @param {?} value
         * @return {?}
         */
        value => false);
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        value = this.valueFn((/** @type {?} */ (((/** @type {?} */ (value))))), this._value);
        if (this.valueLimitFn(value, this._value) !== false || this.readonly)
            return;
        this._value = value;
        this.notifyValueChange();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value || this.defaultValue;
    }
    /**
     * @return {?}
     */
    get defaultValue() {
        return this._value;
    }
    /**
     * @return {?}
     */
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout((/**
         * @return {?}
         */
        () => this.cdRef.markForCheck()), 0);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
AbstractNgModelComponent.decorators = [
    { type: Component, args: [{ template: '' }] }
];
/** @nocollapse */
AbstractNgModelComponent.ctorParameters = () => [
    { type: Injector }
];
AbstractNgModelComponent.propDecorators = {
    disabled: [{ type: Input }],
    readonly: [{ type: Input }],
    valueFn: [{ type: Input }],
    valueLimitFn: [{ type: Input }],
    value: [{ type: Input }]
};
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
class PatchRouteByName {
    /**
     * @param {?} name
     * @param {?} newValue
     */
    constructor(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
}
PatchRouteByName.type = '[Config] Patch Route By Name';
if (false) {
    /** @type {?} */
    PatchRouteByName.type;
    /** @type {?} */
    PatchRouteByName.prototype.name;
    /** @type {?} */
    PatchRouteByName.prototype.newValue;
}
class GetAppConfiguration {
}
GetAppConfiguration.type = '[Config] Get App Configuration';
if (false) {
    /** @type {?} */
    GetAppConfiguration.type;
}
/**
 * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
 */
class AddRoute {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
AddRoute.type = '[Config] Add Route';
if (false) {
    /** @type {?} */
    AddRoute.type;
    /** @type {?} */
    AddRoute.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/loader.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StartLoader {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
StartLoader.type = '[Loader] Start';
if (false) {
    /** @type {?} */
    StartLoader.type;
    /** @type {?} */
    StartLoader.prototype.payload;
}
class StopLoader {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
StopLoader.type = '[Loader] Stop';
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
class GetProfile {
}
GetProfile.type = '[Profile] Get';
if (false) {
    /** @type {?} */
    GetProfile.type;
}
class UpdateProfile {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateProfile.type = '[Profile] Update';
if (false) {
    /** @type {?} */
    UpdateProfile.type;
    /** @type {?} */
    UpdateProfile.prototype.payload;
}
class ChangePassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
ChangePassword.type = '[Profile] Change Password';
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
class AddReplaceableComponent {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
AddReplaceableComponent.type = '[ReplaceableComponents] Add';
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
class RestOccurError {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
RestOccurError.type = '[Rest] Error';
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
class SetLanguage {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetLanguage.type = '[Session] Set Language';
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
}
class SetTenant {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetTenant.type = '[Session] Set Tenant';
if (false) {
    /** @type {?} */
    SetTenant.type;
    /** @type {?} */
    SetTenant.prototype.payload;
}
class ModifyOpenedTabCount {
    /**
     * @param {?} operation
     */
    constructor(operation) {
        this.operation = operation;
    }
}
ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
if (false) {
    /** @type {?} */
    ModifyOpenedTabCount.type;
    /** @type {?} */
    ModifyOpenedTabCount.prototype.operation;
}
class SetRemember {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetRemember.type = '[Session] Set Remember';
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
 * Generated from: lib/services/rest.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RestService {
    /**
     * @param {?} http
     * @param {?} store
     */
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        console.error(err);
        return throwError(err);
    }
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    request(request, config, api) {
        config = config || ((/** @type {?} */ ({})));
        const { observe = "body" /* Body */, skipHandleError } = config;
        /** @type {?} */
        const url = (api || this.store.selectSnapshot(ConfigState.getApiUrl())) + request.url;
        const { method, params } = request, options = __rest(request, ["method", "params"]);
        return this.http
            .request(method, url, (/** @type {?} */ (Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => (Object.assign({}, acc, (typeof params[key] !== 'undefined' && params[key] !== '' && { [key]: params[key] })))), {}),
        }), options))))
            .pipe(observe === "body" /* Body */ ? take(1) : tap(), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            if (skipHandleError) {
                return throwError(err);
            }
            return this.handleError(err);
        })));
    }
}
RestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RestService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
/** @nocollapse */ RestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(ɵɵinject(HttpClient), ɵɵinject(Store)); }, token: RestService, providedIn: "root" });
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
 * Generated from: lib/services/application-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApplicationConfigurationService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @return {?}
     */
    getConfiguration() {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request);
    }
}
ApplicationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ApplicationConfigurationService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService)); }, token: ApplicationConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.rest;
}

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
function organizeRoutes(routes, wrappers = [], parentNameArr = (/** @type {?} */ ([])), parentName = null) {
    /** @type {?} */
    const filter = (/**
     * @param {?} route
     * @return {?}
     */
    route => {
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
    const filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute([...filteredRoutes, ...wrappers], parentNameArr));
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
    route => {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        /** @type {?} */
        const foundedChildren = parentNameArr.filter((/**
         * @param {?} parent
         * @return {?}
         */
        parent => parent.parentName === route.name));
        if (foundedChildren && foundedChildren.length) {
            route.children = [...(route.children || []), ...foundedChildren];
        }
        return route;
    }));
}
/**
 * @param {?=} routes
 * @return {?}
 */
function sortRoutes(routes = []) {
    if (!routes.length)
        return [];
    return routes
        .map((/**
     * @param {?} route
     * @param {?} index
     * @return {?}
     */
    (route, index) => {
        return Object.assign({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
    }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => a.order - b.order))
        .map((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    }));
}
/** @type {?} */
const ABP_ROUTES = (/** @type {?} */ ([]));
/**
 * @param {?} routes
 * @return {?}
 */
function addAbpRoutes(routes) {
    if (!Array.isArray(routes)) {
        routes = [routes];
    }
    ABP_ROUTES.push(...routes);
}
/**
 * @return {?}
 */
function getAbpRoutes() {
    return ABP_ROUTES;
}

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
 * Generated from: lib/utils/initial-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function getInitialData(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const store = injector.get(Store);
        return store.dispatch(new GetAppConfiguration()).toPromise();
    });
    return fn;
}
/**
 * @param {?} injector
 * @return {?}
 */
function localeInitializer(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const store = injector.get(Store);
        /** @type {?} */
        const lang = store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.SessionState.language)) || 'en';
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            registerLocale(lang).then((/**
             * @return {?}
             */
            () => resolve('resolved')), reject);
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
    `@angular/common/locales/${localesMapping[locale] || locale}.js`).then((/**
     * @param {?} module
     * @return {?}
     */
    module => {
        registerLocaleData(module.default);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/localization.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalizationService {
    /**
     * @param {?} store
     * @param {?} router
     * @param {?} ngZone
     * @param {?} otherInstance
     */
    constructor(store, router, ngZone, otherInstance) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
    }
    /**
     * @return {?}
     */
    get currentLang() {
        return this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.SessionState.language));
    }
    /**
     * @param {?} reuse
     * @return {?}
     */
    setRouteReuse(reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    registerLocale(locale) {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;
        this.setRouteReuse((/**
         * @return {?}
         */
        () => false));
        this.router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        () => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => __awaiter(this, void 0, void 0, function* () {
                yield this.router.navigateByUrl(this.router.url).catch(noop$1);
                this.setRouteReuse(shouldReuseRoute);
            })));
        }));
    }
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    get(key, ...interpolateParams) {
        return this.store.select(ConfigState.getLocalization(key, ...interpolateParams));
    }
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    instant(key, ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(key, ...interpolateParams));
    }
}
LocalizationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LocalizationService.ctorParameters = () => [
    { type: Store },
    { type: Router },
    { type: NgZone },
    { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
/** @nocollapse */ LocalizationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(NgZone), ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
if (false) {
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

var SessionState_1;
let SessionState = SessionState_1 = class SessionState {
    /**
     * @param {?} localizationService
     * @param {?} oAuthService
     * @param {?} store
     * @param {?} actions
     */
    constructor(localizationService, oAuthService, store, actions) {
        this.localizationService = localizationService;
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            const { sessionDetail } = this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} };
            /** @type {?} */
            const fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                this.oAuthService.logOut();
            }
            this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            }));
        }));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getLanguage({ language }) {
        return language;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getTenant({ tenant }) {
        return tenant;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getSessionDetail({ sessionDetail }) {
        return sessionDetail;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setLanguage({ patchState, dispatch }, { payload }) {
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration()).pipe(switchMap((/**
         * @return {?}
         */
        () => from(this.localizationService.registerLocale(payload)))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setRemember({ getState, patchState }, { payload: remember }) {
        const { sessionDetail } = getState();
        patchState({
            sessionDetail: Object.assign({}, sessionDetail, { remember }),
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    modifyOpenedTabCount({ getState, patchState }, { operation }) {
        // tslint:disable-next-line: prefer-const
        let _a = getState().sessionDetail || ((/** @type {?} */ ({ openedTabCount: 0 }))), { openedTabCount, lastExitTime } = _a, detail = __rest(_a, ["openedTabCount", "lastExitTime"]);
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
            sessionDetail: Object.assign({ openedTabCount,
                lastExitTime }, detail),
        });
    }
};
SessionState.ctorParameters = () => [
    { type: LocalizationService },
    { type: OAuthService },
    { type: Store },
    { type: Actions }
];
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
    __metadata("design:paramtypes", [LocalizationService,
        OAuthService,
        Store,
        Actions])
], SessionState);
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.localizationService;
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

var ConfigState_1;
let ConfigState = ConfigState_1 = class ConfigState {
    /**
     * @param {?} appConfigurationService
     * @param {?} store
     */
    constructor(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
        this.store = store;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getAll(state) {
        return state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    static getApplicationInfo(state) {
        return state.environment.application || ((/** @type {?} */ ({})));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getOne(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return state[key];
        }));
        return selector;
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    static getDeep(keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            (acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state);
        }));
        return selector;
    }
    /**
     * @param {?=} path
     * @param {?=} name
     * @param {?=} url
     * @return {?}
     */
    static getRoute(path, name, url) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            const { flattedRoutes } = state;
            return ((/** @type {?} */ (flattedRoutes))).find((/**
             * @param {?} route
             * @return {?}
             */
            route => {
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
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    static getApiUrl(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return state.environment.apis[key || 'default'].url;
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getSetting(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return snq((/**
             * @return {?}
             */
            () => state.setting.values[key]));
        }));
        return selector;
    }
    /**
     * @param {?=} keyword
     * @return {?}
     */
    static getSettings(keyword) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (keyword) {
                /** @type {?} */
                const keys = snq((/**
                 * @return {?}
                 */
                () => Object.keys(state.setting.values).filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => key.indexOf(keyword) > -1))), []);
                if (keys.length) {
                    return keys.reduce((/**
                     * @param {?} acc
                     * @param {?} key
                     * @return {?}
                     */
                    (acc, key) => (Object.assign({}, acc, { [key]: state.setting.values[key] }))), {});
                }
            }
            return snq((/**
             * @return {?}
             */
            () => state.setting.values), {});
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getGrantedPolicy(key) {
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (!key)
                return true;
            /** @type {?} */
            const getPolicy = (/**
             * @param {?} k
             * @return {?}
             */
            k => snq((/**
             * @return {?}
             */
            () => state.auth.grantedPolicies[k]), false));
            /** @type {?} */
            const orRegexp = /\|\|/g;
            /** @type {?} */
            const andRegexp = /&&/g;
            if (orRegexp.test(key)) {
                /** @type {?} */
                const keys = key.split('||').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => !!k));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            }
            else if (andRegexp.test(key)) {
                /** @type {?} */
                const keys = key.split('&&').filter((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => !!k));
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) && getPolicy(keys[1].trim());
            }
            return getPolicy(key);
        }));
        return selector;
    }
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    static getLocalization(key, ...interpolateParams) {
        if (!key)
            key = '';
        /** @type {?} */
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        /** @type {?} */
        const keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        const selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (!state.localization)
                return defaultValue || key;
            const { defaultResourceName } = state.environment.localization;
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error(`Please check your environment. May you forget set defaultResourceName?
              Here is the example:
               { production: false,
                 localization: {
                   defaultResourceName: 'MyProjectName'
                  }
               }`);
                }
                keys[0] = snq((/**
                 * @return {?}
                 */
                () => defaultResourceName));
            }
            /** @type {?} */
            let localization = ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            (acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state.localization.values);
            interpolateParams = interpolateParams.filter((/**
             * @param {?} params
             * @return {?}
             */
            params => params != null));
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach((/**
                 * @param {?} param
                 * @return {?}
                 */
                param => {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                }));
            }
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        }));
        return selector;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    addData({ patchState, dispatch }) {
        return this.appConfigurationService.getConfiguration().pipe(tap((/**
         * @param {?} configuration
         * @return {?}
         */
        configuration => patchState(Object.assign({}, configuration)))), switchMap((/**
         * @param {?} configuration
         * @return {?}
         */
        configuration => {
            /** @type {?} */
            let defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang));
        })));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    patchRoute({ patchState, getState }, { name, newValue }) {
        /** @type {?} */
        let routes = getState().routes;
        routes = patchRouteDeep(routes, name, newValue);
        /** @type {?} */
        const flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        const index = flattedRoutes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        route => route.name === name));
        if (index > -1) {
            flattedRoutes[index] = (/** @type {?} */ (Object.assign({}, flattedRoutes[index], newValue)));
        }
        return patchState({
            routes,
            flattedRoutes,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    addRoute({ patchState, getState }, { payload }) {
        /** @type {?} */
        let routes = getState().routes;
        /** @type {?} */
        const flattedRoutes = getState().flattedRoutes;
        /** @type {?} */
        const route = Object.assign({}, payload);
        if (route.parentName) {
            /** @type {?} */
            const index = flattedRoutes.findIndex((/**
             * @param {?} r
             * @return {?}
             */
            r => r.name === route.parentName));
            if (index < 0)
                return;
            /** @type {?} */
            const parent = flattedRoutes[index];
            if (parent.url.replace('/', '')) {
                route.url = `${parent.url}/${route.path}`;
            }
            else {
                route.url = `/${route.path}`;
            }
            route.order = route.order || route.order === 0 ? route.order : parent.children.length;
            parent.children = [...(parent.children || []), route].sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a.order - b.order));
            flattedRoutes[index] = parent;
            flattedRoutes.push(route);
            /** @type {?} */
            let parentName = parent.name;
            /** @type {?} */
            const parentNameArr = [parentName];
            while (parentName) {
                parentName = snq((/**
                 * @return {?}
                 */
                () => flattedRoutes.find((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => r.name === parentName)).parentName));
                if (parentName) {
                    parentNameArr.unshift(parentName);
                }
            }
            routes = updateRouteDeep(routes, parentNameArr, parent);
        }
        else {
            route.url = `/${route.path}`;
            if (route.order || route.order === 0) {
                routes = [...routes, route].sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.order - b.order));
            }
            else {
                route.order = routes.length;
                routes = [...routes, route];
            }
            flattedRoutes.push(route);
        }
        return patchState({
            routes,
            flattedRoutes,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: ApplicationConfigurationService },
    { type: Store }
];
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
    __metadata("design:paramtypes", [ApplicationConfigurationService,
        Store])
], ConfigState);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.appConfigurationService;
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
function patchRouteDeep(routes, name, newValue, parentUrl = '') {
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        if (route.name === name) {
            newValue.url = `${parentUrl}/${(!newValue.path && newValue.path === ''
                ? route.path
                : newValue.path) || ''}`;
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => (Object.assign({}, child, { url: `${newValue.url}/${child.path}`.replace('//', '/') }))));
            }
            return Object.assign({}, route, newValue);
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
function updateRouteDeep(routes, parentNameArr, newValue, parentIndex = 0) {
    /** @type {?} */
    const index = routes.findIndex((/**
     * @param {?} route
     * @return {?}
     */
    route => route.name === parentNameArr[parentIndex]));
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
const takeUntilDestroy = (/**
 * @param {?} componentInstance
 * @param {?=} destroyMethodName
 * @return {?}
 */
(componentInstance, destroyMethodName = 'ngOnDestroy') => (/**
 * @template T
 * @param {?} source
 * @return {?}
 */
(source) => {
    /** @type {?} */
    const originalDestroy = componentInstance[destroyMethodName];
    if (isFunction(originalDestroy) === false) {
        throw new Error(`${componentInstance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
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
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicLayoutComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} store
     */
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        const { requirements: { layouts }, routes } = this.store.selectSnapshot(ConfigState.getAll);
        if ((this.route.snapshot.data || {}).layout) {
            this.layout = layouts
                .filter((/**
             * @param {?} l
             * @return {?}
             */
            l => !!l))
                .find((/**
             * @param {?} l
             * @return {?}
             */
            (l) => snq((/**
             * @return {?}
             */
            () => l.type.toLowerCase().indexOf(this.route.snapshot.data.layout)), -1) > -1));
        }
        this.router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                const { segments } = this.router.parseUrl(event.url).root.children.primary;
                /** @type {?} */
                const layout = (this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                this.layout = layouts
                    .filter((/**
                 * @param {?} l
                 * @return {?}
                 */
                l => !!l))
                    .find((/**
                 * @param {?} l
                 * @return {?}
                 */
                (l) => snq((/**
                 * @return {?}
                 */
                () => l.type.toLowerCase().indexOf(layout)), -1) > -1));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
DynamicLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-dynamic-layout',
                template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet><ng-container *ngComponentOutlet="layout"></ng-container></ng-template>
  `
            }] }
];
/** @nocollapse */
DynamicLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Store }
];
__decorate([
    Select(ConfigState.getOne('requirements')),
    __metadata("design:type", Observable)
], DynamicLayoutComponent.prototype, "requirements$", void 0);
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.requirements$;
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
    let layout = "empty" /* empty */;
    /** @type {?} */
    const route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => (val.wrapper ? [...acc, ...val.children] : [...acc, val])), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    r => r.path === segments[0].path));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            const child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.path === segments[1].path));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}

var ReplaceableComponentsState_1;
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    /**
     * @param {?} __0
     * @return {?}
     */
    static getAll({ replaceableComponents, }) {
        return replaceableComponents || [];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static getComponent(key) {
        /** @type {?} */
        const selector = createSelector([ReplaceableComponentsState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return snq((/**
             * @return {?}
             */
            () => state.replaceableComponents.find((/**
             * @param {?} component
             * @return {?}
             */
            component => component.key === key))));
        }));
        return selector;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    replaceableComponentsAction({ getState, patchState }, { payload }) {
        let { replaceableComponents } = getState();
        /** @type {?} */
        const index = snq((/**
         * @return {?}
         */
        () => replaceableComponents.findIndex((/**
         * @param {?} component
         * @return {?}
         */
        component => component.key === payload.key))), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = [...replaceableComponents, payload];
        }
        patchState({
            replaceableComponents,
        });
    }
};
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/replaceable-route-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReplaceableRouteContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (res = (/** @type {?} */ ({}))) => {
            this.externalComponent = res.component;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
ReplaceableRouteContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-replaceable-route-container',
                template: `
    <ng-container *ngComponentOutlet="externalComponent || defaultComponent"></ng-container>
  `
            }] }
];
/** @nocollapse */
ReplaceableRouteContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];
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
class RouterOutletComponent {
}
RouterOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-router-outlet',
                template: `
    <router-outlet></router-outlet>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
class AutofocusDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.elRef.nativeElement.focus()), this.delay);
    }
}
AutofocusDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[autofocus]'
            },] }
];
/** @nocollapse */
AutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
AutofocusDirective.propDecorators = {
    delay: [{ type: Input, args: ['autofocus',] }]
};
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
 * Generated from: lib/directives/ellipsis.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EllipsisDirective {
    /**
     * @param {?} cdRef
     * @param {?} elRef
     */
    constructor(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    /**
     * @return {?}
     */
    get inlineClass() {
        return this.enabled && this.width;
    }
    /**
     * @return {?}
     */
    get class() {
        return this.enabled && !this.width;
    }
    /**
     * @return {?}
     */
    get maxWidth() {
        return this.enabled && this.width ? this.width || '170px' : undefined;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.title = this.title || ((/** @type {?} */ (this.elRef.nativeElement))).innerText;
        this.cdRef.detectChanges();
    }
}
EllipsisDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpEllipsis]',
            },] }
];
/** @nocollapse */
EllipsisDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
EllipsisDirective.propDecorators = {
    width: [{ type: Input, args: ['abpEllipsis',] }],
    title: [{ type: HostBinding, args: ['title',] }, { type: Input }],
    enabled: [{ type: Input, args: ['abpEllipsisEnabled',] }],
    inlineClass: [{ type: HostBinding, args: ['class.abp-ellipsis-inline',] }],
    class: [{ type: HostBinding, args: ['class.abp-ellipsis',] }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
};
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
class AbpForContext {
    /**
     * @param {?} $implicit
     * @param {?} index
     * @param {?} count
     * @param {?} list
     */
    constructor($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
}
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
class RecordView {
    /**
     * @param {?} record
     * @param {?} view
     */
    constructor(record, view) {
        this.record = record;
        this.view = view;
    }
}
if (false) {
    /** @type {?} */
    RecordView.prototype.record;
    /** @type {?} */
    RecordView.prototype.view;
}
class ForDirective {
    /**
     * @param {?} tempRef
     * @param {?} vcRef
     * @param {?} differs
     */
    constructor(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    /**
     * @return {?}
     */
    get compareFn() {
        return this.compareBy || compare;
    }
    /**
     * @return {?}
     */
    get trackByFn() {
        return this.trackBy || ((/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => ((/** @type {?} */ (item))).id || index));
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    iterateOverAppliedOperations(changes) {
        /** @type {?} */
        const rw = [];
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, previousIndex, currentIndex) => {
            if (record.previousIndex == null) {
                /** @type {?} */
                const view = this.vcRef.createEmbeddedView(this.tempRef, new AbpForContext(null, -1, -1, this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                this.vcRef.remove(previousIndex);
            }
            else {
                /** @type {?} */
                const view = this.vcRef.get(previousIndex);
                this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, (/** @type {?} */ (view))));
            }
        }));
        for (let i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    iterateOverAttachedViews(changes) {
        for (let i = 0, l = this.vcRef.length; i < l; i++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (this.vcRef.get(i)));
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (this.vcRef.get(record.currentIndex)));
            viewRef.context.$implicit = record.item;
        }));
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    projectItems(items) {
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
            const changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    sortItems(items) {
        if (this.orderBy) {
            items.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => (a[this.orderBy] > b[this.orderBy] ? 1 : a[this.orderBy] < b[this.orderBy] ? -1 : 0)));
        }
        else {
            items.sort();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        let items = (/** @type {?} */ (clone(this.items)));
        if (!Array.isArray(items))
            return;
        /** @type {?} */
        const compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => compareFn(item[this.filterBy], this.filterVal)));
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
    }
}
ForDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpFor]',
            },] }
];
/** @nocollapse */
ForDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: IterableDiffers }
];
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
    const fn = (/**
     * @return {?}
     */
    function () { });
    return fn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/generator-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} a
 * @return {?}
 */
function uuid(a) {
    return a
        ? // tslint:disable-next-line: no-bitwise
            (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
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
class FormSubmitDirective {
    /**
     * @param {?} formGroupDirective
     * @param {?} host
     * @param {?} cdRef
     */
    constructor(formGroupDirective, host, cdRef) {
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
    ngOnInit() {
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe((/**
         * @return {?}
         */
        () => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        }));
        fromEvent((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(debounceTime(this.debounce), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Enter')), takeUntilDestroy(this))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    markAsDirty() {
        const { form } = this.formGroupDirective;
        setDirty((/** @type {?} */ (form.controls)));
        form.markAsDirty();
        this.cdRef.detectChanges();
    }
}
FormSubmitDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'form[ngSubmit][formGroup]',
            },] }
];
/** @nocollapse */
FormSubmitDirective.ctorParameters = () => [
    { type: FormGroupDirective, decorators: [{ type: Self }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormSubmitDirective.propDecorators = {
    debounce: [{ type: Input }],
    notValidateOnSubmit: [{ type: Input }],
    ngSubmit: [{ type: Output }]
};
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
        group => {
            setDirty((/** @type {?} */ (group.controls)));
        }));
        return;
    }
    Object.keys(controls).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/init.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpInit]' },] }
];
/** @nocollapse */
InitDirective.ctorParameters = () => [
    { type: ElementRef }
];
InitDirective.propDecorators = {
    init: [{ type: Output, args: ['abpInit',] }]
};
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
 * Generated from: lib/services/profile.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @return {?}
     */
    get() {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    update(body) {
        /** @type {?} */
        const request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    changePassword(body, skipHandleError = false) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body,
        };
        return this.rest.request(request, { skipHandleError });
    }
}
ProfileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProfileService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ ProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
if (false) {
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
let ProfileState = class ProfileState {
    /**
     * @param {?} profileService
     */
    constructor(profileService) {
        this.profileService = profileService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getProfile({ profile }) {
        return profile;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    getProfile({ patchState }) {
        return this.profileService.get().pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        profile => patchState({
            profile,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateProfile({ patchState }, { payload }) {
        return this.profileService.update(payload).pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        profile => patchState({
            profile,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    changePassword(_, { payload }) {
        return this.profileService.changePassword(payload, true);
    }
};
ProfileState.ctorParameters = () => [
    { type: ProfileService }
];
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
class PermissionDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} store
     * @param {?} templateRef
     * @param {?} vcRef
     */
    constructor(elRef, renderer, store, templateRef, vcRef) {
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
    check() {
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
        isGranted => {
            if (this.templateRef && isGranted) {
                this.vcRef.clear();
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else if (this.templateRef && !isGranted) {
                this.vcRef.clear();
            }
            else if (!isGranted && !this.templateRef) {
                this.renderer.removeChild(((/** @type {?} */ (this.elRef.nativeElement))).parentElement, this.elRef.nativeElement);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ condition }) {
        if ((condition || { currentValue: null }).currentValue) {
            this.check();
        }
    }
}
PermissionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpPermission]',
            },] }
];
/** @nocollapse */
PermissionDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Store },
    { type: TemplateRef, decorators: [{ type: Optional }] },
    { type: ViewContainerRef }
];
PermissionDirective.propDecorators = {
    condition: [{ type: Input, args: ['abpPermission',] }]
};
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
class ReplaceableTemplateDirective {
    /**
     * @param {?} injector
     * @param {?} templateRef
     * @param {?} cfRes
     * @param {?} vcRef
     * @param {?} store
     */
    constructor(injector, templateRef, cfRes, vcRef, store) {
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
            ref => {
                this.resetDefaultComponent();
                this.defaultComponentRef = ref;
                this.setDefaultComponentInputs();
            }),
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store
            .select(ReplaceableComponentsState.getComponent(this.data.componentKey))
            .pipe(filter((/**
         * @param {?=} res
         * @return {?}
         */
        (res = (/** @type {?} */ ({}))) => !this.initialized || !compare(res.component, this.externalComponent))), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        (res = (/** @type {?} */ ({}))) => {
            this.vcRef.clear();
            this.externalComponent = res.component;
            if (this.defaultComponentRef) {
                this.resetDefaultComponent();
            }
            if (res.component) {
                this.setProvidedData();
                /** @type {?} */
                const customInjector = Injector.create({
                    providers: [{ provide: 'REPLACEABLE_DATA', useValue: this.providedData }],
                    parent: this.injector,
                });
                this.vcRef.createComponent(this.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            }
            else {
                this.vcRef.createEmbeddedView(this.templateRef, this.context);
            }
            this.initialized = true;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (snq((/**
         * @return {?}
         */
        () => changes.data.currentValue.inputs)) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    setDefaultComponentInputs() {
        if (!this.defaultComponentRef || (!this.data.inputs && !this.data.outputs))
            return;
        if (this.data.inputs) {
            for (const key in this.data.inputs) {
                if (this.data.inputs.hasOwnProperty(key)) {
                    if (!compare(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                        this.defaultComponentRef[key] = this.data.inputs[key].value;
                    }
                }
            }
        }
        if (this.data.outputs) {
            for (const key in this.data.outputs) {
                if (this.data.outputs.hasOwnProperty(key)) {
                    if (!this.defaultComponentSubscriptions[key]) {
                        this.defaultComponentSubscriptions[key] = this.defaultComponentRef[key].subscribe((/**
                         * @param {?} value
                         * @return {?}
                         */
                        value => {
                            this.data.outputs[key](value);
                        }));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setProvidedData() {
        this.providedData = Object.assign({}, this.data, { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        (acc, key) => (Object.assign({}, acc, { [key]: Object.assign({ enumerable: true, configurable: true, get: (/**
                 * @return {?}
                 */
                () => this.data.inputs[key].value) }, (this.data.inputs[key].twoWay && {
                set: (/**
                 * @param {?} newValue
                 * @return {?}
                 */
                newValue => {
                    this.data.inputs[key].value = newValue;
                    this.data.outputs[`${key}Change`](newValue);
                }),
            })) }))), {})));
    }
    /**
     * @return {?}
     */
    resetDefaultComponent() {
        Object.keys(this.defaultComponentSubscriptions).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.defaultComponentSubscriptions[key].unsubscribe();
        }));
        this.defaultComponentSubscriptions = (/** @type {?} */ ({}));
        this.defaultComponentRef = null;
    }
}
ReplaceableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpReplaceableTemplate]' },] }
];
/** @nocollapse */
ReplaceableTemplateDirective.ctorParameters = () => [
    { type: Injector },
    { type: TemplateRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: Store }
];
ReplaceableTemplateDirective.propDecorators = {
    data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
};
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
 * Generated from: lib/directives/visibility.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VisibilityDirective {
    /**
     * @param {?} elRef
     * @param {?} renderer
     */
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        /** @type {?} */
        let observer;
        observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        mutations => {
            mutations.forEach((/**
             * @param {?} mutation
             * @return {?}
             */
            mutation => {
                if (!mutation.target)
                    return;
                /** @type {?} */
                const htmlNodes = snq((/**
                 * @return {?}
                 */
                () => Array.from(mutation.target.childNodes).filter((/**
                 * @param {?} node
                 * @return {?}
                 */
                node => node instanceof HTMLElement))), []);
                if (!htmlNodes.length) {
                    this.removeFromDOM();
                }
            }));
        }));
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const htmlNodes = snq((/**
             * @return {?}
             */
            () => Array.from(this.focusedElement.childNodes).filter((/**
             * @param {?} node
             * @return {?}
             */
            node => node instanceof HTMLElement))), []);
            if (!htmlNodes.length)
                this.removeFromDOM();
        }), 0);
        this.completed$.subscribe((/**
         * @return {?}
         */
        () => observer.disconnect()));
    }
    /**
     * @return {?}
     */
    disconnect() {
        this.completed$.next();
        this.completed$.complete();
    }
    /**
     * @return {?}
     */
    removeFromDOM() {
        if (!this.elRef.nativeElement)
            return;
        this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
        this.disconnect();
    }
}
VisibilityDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpVisibility]',
            },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2 }
];
VisibilityDirective.propDecorators = {
    focusedElement: [{ type: Input, args: ['abpVisibility',] }]
};
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
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const eLayoutType = {
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
class AuthGuard {
    /**
     * @param {?} oauthService
     * @param {?} router
     */
    constructor(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
    }
    /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    canActivate(_, state) {
        /** @type {?} */
        const hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        return this.router.createUrlTree(['/account/login'], { state: { redirectUrl: state.url } });
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: OAuthService },
    { type: Router }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(Router)); }, token: AuthGuard, providedIn: "root" });
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
    AuthGuard.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/guards/permission.guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PermissionGuard {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /** @type {?} */
        let resource = snq((/**
         * @return {?}
         */
        () => route.data.routes.requiredPolicy)) || snq((/**
         * @return {?}
         */
        () => (/** @type {?} */ (route.data.requiredPolicy))));
        if (!resource) {
            resource = snq((/**
             * @return {?}
             */
            () => route.routeConfig.children.find((/**
             * @param {?} child
             * @return {?}
             */
            child => state.url.indexOf(child.path) > -1)).data
                .requiredPolicy));
            if (!resource) {
                return of(true);
            }
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(tap((/**
         * @param {?} access
         * @return {?}
         */
        access => {
            if (!access) {
                this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        })));
    }
}
PermissionGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionGuard.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ PermissionGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(ɵɵinject(Store)); }, token: PermissionGuard, providedIn: "root" });
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
 * Generated from: lib/interceptors/api.interceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiInterceptor {
    /**
     * @param {?} oAuthService
     * @param {?} store
     */
    constructor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        this.store.dispatch(new StartLoader(request));
        /** @type {?} */
        const headers = (/** @type {?} */ ({}));
        /** @type {?} */
        const token = this.oAuthService.getAccessToken();
        if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        /** @type {?} */
        const lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
        }
        /** @type {?} */
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
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
        () => this.store.dispatch(new StopLoader(request)))));
    }
}
ApiInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiInterceptor.ctorParameters = () => [
    { type: OAuthService },
    { type: Store }
];
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
        Localization.prototype.values;
        /** @type {?} */
        Localization.prototype.languages;
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
        /** @type {?} */
        Root.prototype.requirements;
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
    function Apis() { }
    Config.Apis = Apis;
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
     */
    function Config() { }
    Rest.Config = Config;
    if (false) {
        /** @type {?|undefined} */
        Config.prototype.skipHandleError;
        /** @type {?|undefined} */
        Config.prototype.observe;
    }
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
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/localization.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalizationPipe {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(value, ...interpolateParams.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        (acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val])), [])));
    }
}
LocalizationPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpLocalization',
            },] }
];
/** @nocollapse */
LocalizationPipe.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationPipe.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/sort.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortPipe {
    /**
     * @param {?} value
     * @param {?=} sortOrder
     * @param {?=} sortKey
     * @return {?}
     */
    transform(value, sortOrder = 'asc', sortKey) {
        sortOrder = sortOrder && ((/** @type {?} */ (sortOrder.toLowerCase())));
        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
            return value;
        /** @type {?} */
        let numberArray = [];
        /** @type {?} */
        let stringArray = [];
        if (!sortKey) {
            numberArray = value.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => typeof item === 'number')).sort();
            stringArray = value.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => typeof item === 'string')).sort();
        }
        else {
            numberArray = value
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => typeof item[sortKey] === 'number'))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a[sortKey] - b[sortKey]));
            stringArray = value
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => typeof item[sortKey] === 'string'))
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (a[sortKey] < b[sortKey])
                    return -1;
                else if (a[sortKey] > b[sortKey])
                    return 1;
                else
                    return 0;
            }));
        }
        /** @type {?} */
        const sorted = [
            ...numberArray,
            ...stringArray,
            ...value.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => typeof (sortKey ? item[sortKey] : item) !== 'number' &&
                typeof (sortKey ? item[sortKey] : item) !== 'string')),
        ];
        return sortOrder === 'asc' ? sorted : sorted.reverse();
    }
}
SortPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpSort',
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/config.plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
class ConfigPlugin {
    /**
     * @param {?} options
     * @param {?} router
     */
    constructor(options, router) {
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
    handle(state, event, next) {
        /** @type {?} */
        const matches = actionMatcher(event);
        /** @type {?} */
        const isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized) {
            /** @type {?} */
            const transformedRoutes = transformRoutes(this.router.config);
            let { routes } = transformedRoutes;
            const { wrappers } = transformedRoutes;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            const flattedRoutes = flatRoutes(clone(routes));
            state = setValue(state, 'ConfigState', Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState)), this.options, { routes,
                flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    }
}
ConfigPlugin.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
    { type: Router }
];
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
function transformRoutes(routes = [], wrappers = []) {
    /** @type {?} */
    const abpRoutes = [...getAbpRoutes()];
    wrappers = abpRoutes.filter((/**
     * @param {?} ar
     * @return {?}
     */
    ar => ar.wrapper));
    /** @type {?} */
    const transformed = (/** @type {?} */ ([]));
    routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    route => route.component || route.loadChildren))
        .forEach((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        /** @type {?} */
        const abpPackage = abpRoutes.find((/**
         * @param {?} abp
         * @return {?}
         */
        abp => abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper));
        const { length } = transformed;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length && (route.data || {}).routes) {
            transformed.push((/** @type {?} */ (Object.assign({}, route.data.routes, { path: route.path, name: snq((/**
                 * @return {?}
                 */
                () => route.data.routes.name), route.path), children: route.data.routes.children || [] }))));
        }
    }));
    return { routes: setUrls(transformed), wrappers };
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
        route => (Object.assign({}, route, { url: `${parentUrl}/${route.path}` }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, `${parentUrl}/${route.path}`),
        })))));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    route => (Object.assign({}, route, { url: `/${route.path}` }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, `/${route.path}`),
    })))));
}
/**
 * @param {?} routes
 * @return {?}
 */
function flatRoutes(routes) {
    /** @type {?} */
    const flat = (/**
     * @param {?} r
     * @return {?}
     */
    (r) => {
        return r.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        (acc, val) => {
            /** @type {?} */
            let value = [val];
            if (val.children) {
                val.children = val.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => (Object.assign({}, child, { parentName: val.name }))));
                value = [val, ...flat(val.children)];
            }
            return [...acc, ...value];
        }), []);
    });
    return flat(routes);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} rest
     * @param {?} oAuthService
     * @param {?} store
     * @param {?} options
     */
    constructor(rest, oAuthService, store, options) {
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
    login(username, password) {
        /** @type {?} */
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap((/**
         * @return {?}
         */
        () => from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))))), switchMap((/**
         * @return {?}
         */
        () => this.store.dispatch(new GetAppConfiguration()))), tap((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const redirectUrl = snq((/**
             * @return {?}
             */
            () => window.history.state.redirectUrl)) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        })), take(1));
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: RestService },
    { type: OAuthService },
    { type: Store },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(RestService), ɵɵinject(OAuthService), ɵɵinject(Store), ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
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
class ConfigStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.store.selectSnapshot(ConfigState.getAll);
    }
    /**
     * @return {?}
     */
    getApplicationInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getOne(...args) {
        return this.store.selectSnapshot(ConfigState.getOne(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getDeep(...args) {
        return this.store.selectSnapshot(ConfigState.getDeep(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getRoute(...args) {
        return this.store.selectSnapshot(ConfigState.getRoute(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getApiUrl(...args) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getSetting(...args) {
        return this.store.selectSnapshot(ConfigState.getSetting(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getSettings(...args) {
        return this.store.selectSnapshot(ConfigState.getSettings(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getGrantedPolicy(...args) {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    getLocalization(...args) {
        return this.store.selectSnapshot(ConfigState.getLocalization(...args));
    }
    /**
     * @return {?}
     */
    dispatchGetAppConfiguration() {
        return this.store.dispatch(new GetAppConfiguration());
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchPatchRouteByName(...args) {
        return this.store.dispatch(new PatchRouteByName(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchAddRoute(...args) {
        return this.store.dispatch(new AddRoute(...args));
    }
}
ConfigStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConfigStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ConfigStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(ɵɵinject(Store)); }, token: ConfigStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/lazy-load.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyLoadService {
    constructor() {
        this.loadedLibraries = {};
    }
    /**
     * @param {?} urlOrUrls
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    load(urlOrUrls, type, content = '', targetQuery = 'body', position = 'beforeend') {
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
        subscriber => {
            ((/** @type {?} */ (urlOrUrls))).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            (url, index) => {
                /** @type {?} */
                const key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
                if (this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                this.loadedLibraries[key] = new ReplaySubject();
                /** @type {?} */
                let library;
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
                () => {
                    this.loadedLibraries[key].next();
                    this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                });
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            }));
        }));
    }
}
LazyLoadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ LazyLoadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProfileStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getProfile() {
        return this.store.selectSnapshot(ProfileState.getProfile);
    }
    /**
     * @return {?}
     */
    dispatchGetProfile() {
        return this.store.dispatch(new GetProfile());
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchUpdateProfile(...args) {
        return this.store.dispatch(new UpdateProfile(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchChangePassword(...args) {
        return this.store.dispatch(new ChangePassword(...args));
    }
}
ProfileStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProfileStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ ProfileStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(ɵɵinject(Store)); }, token: ProfileStateService, providedIn: "root" });
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
class SessionStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getLanguage() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    /**
     * @return {?}
     */
    getTenant() {
        return this.store.selectSnapshot(SessionState.getTenant);
    }
    /**
     * @return {?}
     */
    getSessionDetail() {
        return this.store.selectSnapshot(SessionState.getSessionDetail);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchSetLanguage(...args) {
        return this.store.dispatch(new SetLanguage(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchSetTenant(...args) {
        return this.store.dispatch(new SetTenant(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchSetRemember(...args) {
        return this.store.dispatch(new SetRemember(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchModifyOpenedTabCount(...args) {
        return this.store.dispatch(new ModifyOpenedTabCount(...args));
    }
}
SessionStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SessionStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ SessionStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(ɵɵinject(Store)); }, token: SessionStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/common.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} environment
 * @return {?}
 */
function environmentFactory(environment) {
    return Object.assign({}, environment);
}
/**
 * @param {?} config
 * @return {?}
 */
function configFactory(config) {
    return Object.assign({}, config);
}
/** @type {?} */
const ENVIRONMENT = new InjectionToken('ENVIRONMENT');
/** @type {?} */
const CONFIG = new InjectionToken('CONFIG');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/debounce.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputEventDebounceDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        fromEvent(this.el.nativeElement, 'input')
            .pipe(debounceTime(this.debounce), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.debounceEvent.emit(event);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
InputEventDebounceDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[input.debounce]',
            },] }
];
/** @nocollapse */
InputEventDebounceDirective.ctorParameters = () => [
    { type: ElementRef }
];
InputEventDebounceDirective.propDecorators = {
    debounce: [{ type: Input }],
    debounceEvent: [{ type: Output, args: ['input.debounce',] }]
};
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
 * Generated from: lib/directives/stop-propagation.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StopPropagationDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.stopPropEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        fromEvent(this.el.nativeElement, 'click')
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
StopPropagationDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[click.stop]',
            },] }
];
/** @nocollapse */
StopPropagationDirective.ctorParameters = () => [
    { type: ElementRef }
];
StopPropagationDirective.propDecorators = {
    stopPropEvent: [{ type: Output, args: ['click.stop',] }]
};
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
 * Generated from: lib/providers/locale.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocaleId extends String {
    /**
     * @param {?} localizationService
     */
    constructor(localizationService) {
        super();
        this.localizationService = localizationService;
    }
    /**
     * @return {?}
     */
    toString() {
        const { currentLang } = this.localizationService;
        return localesMapping[currentLang] || currentLang;
    }
    /**
     * @return {?}
     */
    valueOf() {
        return this.toString();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocaleId.prototype.localizationService;
}
/** @type {?} */
const LocaleProvider = {
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
    const timezoneOffset = this.getTimezoneOffset();
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
class CoreModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
        return {
            ngModule: CoreModule,
            providers: [
                LocaleProvider,
                {
                    provide: NGXS_PLUGINS,
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
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
                ...OAuthModule.forRoot().providers,
                { provide: OAuthStorage, useFactory: storageFactory },
            ],
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
                    NgxsRouterPluginModule.forRoot(),
                    NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
                    OAuthModule,
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                ],
                declarations: [
                    ReplaceableRouteContainerComponent,
                    RouterOutletComponent,
                    DynamicLayoutComponent,
                    AutofocusDirective,
                    EllipsisDirective,
                    ForDirective,
                    FormSubmitDirective,
                    LocalizationPipe,
                    SortPipe,
                    InitDirective,
                    PermissionDirective,
                    VisibilityDirective,
                    InputEventDebounceDirective,
                    StopPropagationDirective,
                    ReplaceableTemplateDirective,
                    AbstractNgModelComponent,
                ],
                exports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    RouterOutletComponent,
                    DynamicLayoutComponent,
                    AbstractNgModelComponent,
                    ReplaceableRouteContainerComponent,
                    AutofocusDirective,
                    EllipsisDirective,
                    ForDirective,
                    FormSubmitDirective,
                    InitDirective,
                    PermissionDirective,
                    VisibilityDirective,
                    InputEventDebounceDirective,
                    ReplaceableTemplateDirective,
                    StopPropagationDirective,
                    LocalizationPipe,
                    SortPipe,
                    LocalizationPipe,
                ],
                providers: [LocalizationPipe],
                entryComponents: [
                    RouterOutletComponent,
                    DynamicLayoutComponent,
                    ReplaceableRouteContainerComponent,
                ],
            },] }
];

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

export { AbstractNgModelComponent, AddReplaceableComponent, AddRoute, ApiInterceptor, ApplicationConfigurationService, AuthGuard, AuthService, AutofocusDirective, CONFIG, ChangePassword, ConfigPlugin, ConfigState, ConfigStateService, CoreModule, DynamicLayoutComponent, ENVIRONMENT, EllipsisDirective, ForDirective, FormSubmitDirective, GetAppConfiguration, GetProfile, InitDirective, LazyLoadService, LocalizationPipe, LocalizationService, ModifyOpenedTabCount, NGXS_CONFIG_PLUGIN_OPTIONS, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, Rest, RestOccurError, RestService, RouterOutletComponent, SessionState, SessionStateService, SetLanguage, SetRemember, SetTenant, SortPipe, StartLoader, StopLoader, UpdateProfile, VisibilityDirective, addAbpRoutes, configFactory, environmentFactory, getAbpRoutes, getInitialData, localeInitializer, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, storageFactory, takeUntilDestroy, uuid, ReplaceableComponentsState as ɵa, AddReplaceableComponent as ɵb, EllipsisDirective as ɵba, ForDirective as ɵbb, FormSubmitDirective as ɵbc, LocalizationPipe as ɵbd, SortPipe as ɵbe, InitDirective as ɵbf, PermissionDirective as ɵbg, VisibilityDirective as ɵbh, InputEventDebounceDirective as ɵbi, StopPropagationDirective as ɵbj, ReplaceableTemplateDirective as ɵbk, AbstractNgModelComponent as ɵbl, LocaleId as ɵbm, LocaleProvider as ɵbn, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbo, ConfigPlugin as ɵbp, ApiInterceptor as ɵbq, getInitialData as ɵbr, localeInitializer as ɵbs, ProfileState as ɵd, ProfileService as ɵe, RestService as ɵf, GetProfile as ɵg, UpdateProfile as ɵh, ChangePassword as ɵi, SessionState as ɵk, LocalizationService as ɵl, SetLanguage as ɵm, SetTenant as ɵn, ModifyOpenedTabCount as ɵo, SetRemember as ɵp, ConfigState as ɵr, ApplicationConfigurationService as ɵs, PatchRouteByName as ɵt, GetAppConfiguration as ɵu, AddRoute as ɵv, ReplaceableRouteContainerComponent as ɵw, RouterOutletComponent as ɵx, DynamicLayoutComponent as ɵy, AutofocusDirective as ɵz };
//# sourceMappingURL=abp-ng.core.js.map
