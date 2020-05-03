import { ChangeDetectorRef, Component, Injector, Input, Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, NgZone, Optional, SkipSelf, Directive, ElementRef, EventEmitter, Output, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, Self, Renderer2, ComponentFactoryResolver, Pipe, NgModule, Inject, LOCALE_ID, APP_INITIALIZER, INJECTOR, ApplicationRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Store, ofActionSuccessful, Actions, Action, Selector, State, createSelector, actionMatcher, InitState, UpdateState, setValue, NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import snq from 'snq';
import { __rest, __awaiter, __decorate, __metadata } from 'tslib';
import { throwError, noop as noop$1, fromEvent, from, of, Subject, Observable, concat, ReplaySubject } from 'rxjs';
import { catchError, tap, take, switchMap, takeUntil, distinctUntilChanged, debounceTime, filter, finalize, retryWhen, delay, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { registerLocaleData, CommonModule, APP_BASE_HREF } from '@angular/common';
import { OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
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
class SetEnvironment {
    /**
     * @param {?} environment
     */
    constructor(environment) {
        this.environment = environment;
    }
}
SetEnvironment.type = '[Config] Set Environment';
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
 * @param {?} value
 * @return {?}
 */
function isUndefinedOrEmptyString(value) {
    return value === undefined || value === '';
}

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
     * @private
     * @param {?} apiName
     * @return {?}
     */
    getApiFromStore(apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    }
    /**
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    }
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    request(request, config, api) {
        config = config || ((/** @type {?} */ ({})));
        api = api || this.getApiFromStore(config.apiName);
        const { method, params } = request, options = __rest(request, ["method", "params"]);
        const { observe = "body" /* Body */, skipHandleError } = config;
        return this.http
            .request(method, api + request.url, (/** @type {?} */ (Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => {
                /** @type {?} */
                const value = params[key];
                if (!isUndefinedOrEmptyString(value))
                    acc[key] = value;
                return acc;
            }), {}),
        }), options))))
            .pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => (skipHandleError ? throwError(err) : this.handleError(err)))));
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
     * @param {?} store
     */
    constructor(rest, store) {
        this.rest = rest;
        this.store = store;
    }
    /**
     * @return {?}
     */
    get apiName() {
        return this.store.selectSnapshot(ConfigState.getDeep('environment.application.name'));
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
ApplicationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ApplicationConfigurationService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];
/** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
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
 * Generated from: lib/tokens/options.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CORE_OPTIONS = new InjectionToken('CORE_OPTIONS');

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
        const { skipGetAppConfiguration } = (/** @type {?} */ (injector.get(CORE_OPTIONS)));
        if (skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        res => checkAccessToken(store, injector))))
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
    const oAuth = injector.get(OAuthService);
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
     * Returns currently selected language
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
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param {?} key Localizaton key to replace with localized text
     * @param {...?} interpolateParams Values to interpolate
     * @return {?}
     */
    get(key, ...interpolateParams) {
        return this.store.select(ConfigState.getLocalization(key, ...interpolateParams));
    }
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param {?} key Localization key to replace with localized text
     * @param {...?} interpolateParams Values to intepolate.
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
SessionState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
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
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
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
            /** @type {?} */
            const settings = snq((/**
             * @return {?}
             */
            () => state.setting.values), {});
            if (!keyword)
                return settings;
            /** @type {?} */
            const keysFound = Object.keys(settings).filter((/**
             * @param {?} key
             * @return {?}
             */
            key => key.indexOf(keyword) > -1));
            return keysFound.reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => {
                acc[key] = settings[key];
                return acc;
            }), {});
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
            /** @type {?} */
            const defaultResourceName = snq((/**
             * @return {?}
             */
            () => state.environment.localization.defaultResourceName));
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
                keys[0] = defaultResourceName;
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
            if ((parent.url || '').replace('/', '')) {
                route.url = `${parent.url}/${route.path}`;
            }
            else {
                route.url = `/${route.path}`;
            }
            route.children = route.children || [];
            route.order = route.order || route.order === 0 ? route.order : (parent.children || []).length;
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
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setEnvironment({ patchState }, { environment }) {
        return patchState({
            environment,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: ApplicationConfigurationService },
    { type: Store }
];
ConfigState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
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
        const { routes } = this.store.selectSnapshot(ConfigState.getAll);
        router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                const segments = snq((/**
                 * @return {?}
                 */
                () => router.parseUrl(event.url).root.children.primary.segments), (/** @type {?} */ ([
                    { path: router.url.replace('/', '') },
                ])));
                /** @type {?} */
                const layouts = {
                    application: this.getComponent('Theme.ApplicationLayoutComponent'),
                    account: this.getComponent('Theme.AccountLayoutComponent'),
                    empty: this.getComponent('Theme.EmptyLayoutComponent'),
                };
                /** @type {?} */
                const expectedLayout = (this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                this.layout = layouts[expectedLayout].component;
            }
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    getComponent(key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
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
    <ng-template #componentOutlet
      ><ng-container *ngComponentOutlet="layout"></ng-container
    ></ng-template>
  `
            }] }
];
/** @nocollapse */
DynamicLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Store }
];
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
            .pipe(debounceTime(this.debounce), takeUntilDestroy(this))
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
    const options = [];
    for (const member in _enum)
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
    let hashed = 0;
    /** @type {?} */
    let charCode;
    for (let i = 0; i < value.length; i++) {
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
function generatePassword(length = 8) {
    length = Math.min(Math.max(4, length), 128);
    /** @type {?} */
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    /** @type {?} */
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /** @type {?} */
    const numbers = '0123456789';
    /** @type {?} */
    const specials = '!@#$%&*()_+{}<>?[]./';
    /** @type {?} */
    const all = lowers + uppers + numbers + specials;
    /** @type {?} */
    const getRandom = (/**
     * @param {?} chrSet
     * @return {?}
     */
    (chrSet) => chrSet[Math.floor(Math.random() * chrSet.length)]);
    /** @type {?} */
    const password = Array({ length });
    password[0] = getRandom(lowers);
    password[1] = getRandom(uppers);
    password[2] = getRandom(numbers);
    password[3] = getRandom(specials);
    for (let i = 4; i < length; i++) {
        password[i] = getRandom(all);
    }
    return password.sort((/**
     * @return {?}
     */
    () => 0.5 - Math.random())).join('');
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/cross-origin.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CrossOriginStrategy {
    /**
     * @param {?} crossorigin
     * @param {?=} integrity
     */
    constructor(crossorigin, integrity) {
        this.crossorigin = crossorigin;
        this.integrity = integrity;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    setCrossOrigin(element) {
        if (this.integrity)
            element.setAttribute('integrity', this.integrity);
        element.setAttribute('crossorigin', this.crossorigin);
    }
}
if (false) {
    /** @type {?} */
    CrossOriginStrategy.prototype.crossorigin;
    /** @type {?} */
    CrossOriginStrategy.prototype.integrity;
}
/** @type {?} */
const CROSS_ORIGIN_STRATEGY = {
    /**
     * @param {?=} integrity
     * @return {?}
     */
    Anonymous(integrity) {
        return new CrossOriginStrategy('anonymous', integrity);
    },
    /**
     * @param {?=} integrity
     * @return {?}
     */
    UseCredentials(integrity) {
        return new CrossOriginStrategy('use-credentials', integrity);
    },
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/dom.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomStrategy {
    /**
     * @param {?=} target
     * @param {?=} position
     */
    constructor(target = document.head, position = 'beforeend') {
        this.target = target;
        this.position = position;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    insertElement(element) {
        this.target.insertAdjacentElement(this.position, element);
    }
}
if (false) {
    /** @type {?} */
    DomStrategy.prototype.target;
    /** @type {?} */
    DomStrategy.prototype.position;
}
/** @type {?} */
const DOM_STRATEGY = {
    /**
     * @param {?} element
     * @return {?}
     */
    AfterElement(element) {
        return new DomStrategy(element, 'afterend');
    },
    /**
     * @return {?}
     */
    AppendToBody() {
        return new DomStrategy(document.body, 'beforeend');
    },
    /**
     * @return {?}
     */
    AppendToHead() {
        return new DomStrategy(document.head, 'beforeend');
    },
    /**
     * @param {?} element
     * @return {?}
     */
    BeforeElement(element) {
        return new DomStrategy(element, 'beforebegin');
    },
    /**
     * @return {?}
     */
    PrependToHead() {
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
function fromLazyLoad(element, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
    crossOriginStrategy.setCrossOrigin(element);
    domStrategy.insertElement(element);
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        element.onload = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            clearCallbacks(element);
            observer.next(event);
            observer.complete();
        });
        /** @type {?} */
        const handleError = createErrorHandler(observer, element);
        element.onerror = handleError;
        element.onabort = handleError;
        element.onemptied = handleError;
        element.onstalled = handleError;
        element.onsuspend = handleError;
        return (/**
         * @return {?}
         */
        () => {
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
        this.apiName = 'AbpIdentity';
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
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
        return this.rest.request(request, {
            skipHandleError,
            apiName: this.apiName,
        });
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
ProfileState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
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
class MockLocalizationPipe {
    /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    transform(value = '', ..._) {
        return typeof value === 'string' ? value : value.defaultValue;
    }
}
MockLocalizationPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpLocalization',
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/localization.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalizationModule {
}
LocalizationModule.decorators = [
    { type: NgModule, args: [{
                exports: [LocalizationPipe],
                declarations: [LocalizationPipe],
            },] }
];

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
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
class BaseCoreModule {
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
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
class RootCoreModule {
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
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
class TestCoreModule {
}
TestCoreModule.decorators = [
    { type: NgModule, args: [{
                exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
                imports: [RouterModule.forRoot([]), BaseCoreModule],
                declarations: [MockLocalizationPipe],
            },] }
];
/**
 * CoreModule is the module that is publicly available
 */
class CoreModule {
    /**
     * @param {?=} __0
     * @return {?}
     */
    static forTest({ baseHref = '/' } = (/** @type {?} */ ({}))) {
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
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
        return {
            ngModule: RootCoreModule,
            providers: [
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
                ...OAuthModule.forRoot().providers,
                { provide: OAuthStorage, useFactory: storageFactory },
            ],
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                exports: [BaseCoreModule, LocalizationModule],
                imports: [BaseCoreModule, LocalizationModule],
                providers: [LocalizationPipe],
            },] }
];

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
     * @param {?} injector
     */
    constructor(oauthService, injector) {
        this.oauthService = oauthService;
        this.injector = injector;
    }
    /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    canActivate(_, state) {
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        const hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        return router.createUrlTree(['/account/login'], { state: { redirectUrl: state.url } });
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
    { type: Injector }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(INJECTOR)); }, token: AuthGuard, providedIn: "root" });
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
class ListResultDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    ListResultDto.prototype.items;
}
/**
 * @template T
 */
class PagedResultDto extends ListResultDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedResultDto.prototype.totalCount;
}
class LimitedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        this.maxResultCount = 10;
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    LimitedResultRequestDto.prototype.maxResultCount;
}
class PagedResultRequestDto extends LimitedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedResultRequestDto.prototype.skipCount;
}
class PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    PagedAndSortedResultRequestDto.prototype.sorting;
}
/**
 * @template TKey
 */
class EntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
if (false) {
    /** @type {?} */
    EntityDto.prototype.id;
}
/**
 * @template TPrimaryKey
 */
class CreationAuditedEntityDto extends EntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creationTime;
    /** @type {?} */
    CreationAuditedEntityDto.prototype.creatorId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
class CreationAuditedEntityWithUserDto extends CreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    CreationAuditedEntityWithUserDto.prototype.creator;
}
/**
 * @template TPrimaryKey
 */
class AuditedEntityDto extends CreationAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    AuditedEntityDto.prototype.lastModificationTime;
    /** @type {?} */
    AuditedEntityDto.prototype.lastModifierId;
}
/**
 * @template TUserDto, TPrimaryKey
 */
class AuditedEntityWithUserDto extends AuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
if (false) {
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.creator;
    /** @type {?} */
    AuditedEntityWithUserDto.prototype.lastModifier;
}
/**
 * @template TPrimaryKey
 */
class FullAuditedEntityDto extends AuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
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
class FullAuditedEntityWithUserDto extends FullAuditedEntityDto {
    /**
     * @param {?=} initialValues
     */
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
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
    /**
     * @return {?}
     */
    logout() {
        /** @type {?} */
        const issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return this.rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(switchMap((/**
         * @return {?}
         */
        () => {
            this.oAuthService.logOut();
            return this.store.dispatch(new GetAppConfiguration());
        })));
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
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchSetEnvironment(...args) {
        return this.store.dispatch(new SetEnvironment(...args));
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
 * Generated from: lib/services/content-projection.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentProjectionService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @template T
     * @param {?} projectionStrategy
     * @param {?=} injector
     * @return {?}
     */
    projectContent(projectionStrategy, injector = this.injector) {
        return projectionStrategy.injectContent(injector);
    }
}
ContentProjectionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ContentProjectionService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ContentProjectionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(ɵɵinject(INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
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
class DomInsertionService {
    constructor() {
        this.inserted = new Set();
    }
    /**
     * @template T
     * @param {?} contentStrategy
     * @return {?}
     */
    insertContent(contentStrategy) {
        /** @type {?} */
        const hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        /** @type {?} */
        const element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    removeContent(element) {
        /** @type {?} */
        const hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    has(content) {
        /** @type {?} */
        const hash = generateHash(content);
        return this.inserted.has(hash);
    }
}
DomInsertionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DomInsertionService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
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
class ContainerStrategy {
    /**
     * @param {?} containerRef
     */
    constructor(containerRef) {
        this.containerRef = containerRef;
    }
    /**
     * @return {?}
     */
    prepare() { }
}
if (false) {
    /** @type {?} */
    ContainerStrategy.prototype.containerRef;
    /**
     * @abstract
     * @return {?}
     */
    ContainerStrategy.prototype.getIndex = function () { };
}
class ClearContainerStrategy extends ContainerStrategy {
    /**
     * @return {?}
     */
    getIndex() {
        return 0;
    }
    /**
     * @return {?}
     */
    prepare() {
        this.containerRef.clear();
    }
}
class InsertIntoContainerStrategy extends ContainerStrategy {
    /**
     * @param {?} containerRef
     * @param {?} index
     */
    constructor(containerRef, index) {
        super(containerRef);
        this.index = index;
    }
    /**
     * @return {?}
     */
    getIndex() {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InsertIntoContainerStrategy.prototype.index;
}
/** @type {?} */
const CONTAINER_STRATEGY = {
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Clear(containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Append(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Prepend(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    /**
     * @param {?} containerRef
     * @param {?} index
     * @return {?}
     */
    Insert(containerRef, index) {
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
class ContentSecurityStrategy {
    /**
     * @param {?=} nonce
     */
    constructor(nonce) {
        this.nonce = nonce;
    }
}
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
class LooseContentSecurityStrategy extends ContentSecurityStrategy {
    /**
     * @param {?} nonce
     */
    constructor(nonce) {
        super(nonce);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    applyCSP(element) {
        element.setAttribute('nonce', this.nonce);
    }
}
class NoContentSecurityStrategy extends ContentSecurityStrategy {
    constructor() {
        super();
    }
    /**
     * @param {?} _
     * @return {?}
     */
    applyCSP(_) { }
}
/** @type {?} */
const CONTENT_SECURITY_STRATEGY = {
    /**
     * @param {?} nonce
     * @return {?}
     */
    Loose(nonce) {
        return new LooseContentSecurityStrategy(nonce);
    },
    /**
     * @return {?}
     */
    None() {
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
class ContentStrategy {
    /**
     * @param {?} content
     * @param {?=} domStrategy
     * @param {?=} contentSecurityStrategy
     */
    constructor(content, domStrategy = DOM_STRATEGY.AppendToHead(), contentSecurityStrategy = CONTENT_SECURITY_STRATEGY.None()) {
        this.content = content;
        this.domStrategy = domStrategy;
        this.contentSecurityStrategy = contentSecurityStrategy;
    }
    /**
     * @return {?}
     */
    insertElement() {
        /** @type {?} */
        const element = this.createElement();
        this.contentSecurityStrategy.applyCSP(element);
        this.domStrategy.insertElement(element);
        return element;
    }
}
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
class StyleContentStrategy extends ContentStrategy {
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('style');
        element.textContent = this.content;
        return element;
    }
}
class ScriptContentStrategy extends ContentStrategy {
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('script');
        element.textContent = this.content;
        return element;
    }
}
/** @type {?} */
const CONTENT_STRATEGY = {
    /**
     * @param {?} content
     * @return {?}
     */
    AppendScriptToBody(content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToBody());
    },
    /**
     * @param {?} content
     * @return {?}
     */
    AppendScriptToHead(content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    /**
     * @param {?} content
     * @return {?}
     */
    AppendStyleToHead(content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    /**
     * @param {?} content
     * @return {?}
     */
    PrependStyleToHead(content) {
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
class ContextStrategy {
    /**
     * @param {?} context
     */
    constructor(context) {
        this.context = context;
    }
    /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    setContext(componentRef) {
        return this.context;
    }
}
if (false) {
    /** @type {?} */
    ContextStrategy.prototype.context;
}
/**
 * @template T
 */
class NoContextStrategy extends ContextStrategy {
    constructor() {
        super(undefined);
    }
}
/**
 * @template T
 */
class ComponentContextStrategy extends ContextStrategy {
    /**
     * @param {?} componentRef
     * @return {?}
     */
    setContext(componentRef) {
        Object.keys(this.context).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (componentRef.instance[key] = this.context[key])));
        componentRef.changeDetectorRef.detectChanges();
        return this.context;
    }
}
/**
 * @template T
 */
class TemplateContextStrategy extends ContextStrategy {
    /**
     * @return {?}
     */
    setContext() {
        return this.context;
    }
}
/** @type {?} */
const CONTEXT_STRATEGY = {
    /**
     * @template T
     * @return {?}
     */
    None() {
        return new NoContextStrategy();
    },
    /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    Component(context) {
        return new ComponentContextStrategy(context);
    },
    /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    Template(context) {
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
class LoadingStrategy {
    /**
     * @param {?} path
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(path, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
        this.path = path;
        this.domStrategy = domStrategy;
        this.crossOriginStrategy = crossOriginStrategy;
    }
    /**
     * @template E
     * @return {?}
     */
    createStream() {
        return of(null).pipe(switchMap((/**
         * @return {?}
         */
        () => fromLazyLoad(this.createElement(), this.domStrategy, this.crossOriginStrategy))));
    }
}
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
class ScriptLoadingStrategy extends LoadingStrategy {
    /**
     * @param {?} src
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(src, domStrategy, crossOriginStrategy) {
        super(src, domStrategy, crossOriginStrategy);
    }
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('script');
        element.src = this.path;
        return element;
    }
}
class StyleLoadingStrategy extends LoadingStrategy {
    /**
     * @param {?} href
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(href, domStrategy, crossOriginStrategy) {
        super(href, domStrategy, crossOriginStrategy);
    }
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = this.path;
        return element;
    }
}
/** @type {?} */
const LOADING_STRATEGY = {
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousScriptToBody(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousStyleToHead(src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    PrependAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    PrependAnonymousStyleToHead(src, integrity) {
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
class ProjectionStrategy {
    /**
     * @param {?} content
     */
    constructor(content) {
        this.content = content;
    }
}
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
class ComponentProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} component
     * @param {?} containerStrategy
     * @param {?=} contextStrategy
     */
    constructor(component, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(component);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    injectContent(injector) {
        this.containerStrategy.prepare();
        /** @type {?} */
        const resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        const factory = resolver.resolveComponentFactory(this.content);
        /** @type {?} */
        const componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
        this.contextStrategy.setContext(componentRef);
        return (/** @type {?} */ (componentRef));
    }
}
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
class RootComponentProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} component
     * @param {?=} contextStrategy
     * @param {?=} domStrategy
     */
    constructor(component, contextStrategy = CONTEXT_STRATEGY.None(), domStrategy = DOM_STRATEGY.AppendToBody()) {
        super(component);
        this.contextStrategy = contextStrategy;
        this.domStrategy = domStrategy;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    injectContent(injector) {
        /** @type {?} */
        const appRef = injector.get(ApplicationRef);
        /** @type {?} */
        const resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        const componentRef = resolver
            .resolveComponentFactory(this.content)
            .create(injector);
        this.contextStrategy.setContext(componentRef);
        appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const element = ((/** @type {?} */ (componentRef.hostView))).rootNodes[0];
        this.domStrategy.insertElement(element);
        return (/** @type {?} */ (componentRef));
    }
}
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
class TemplateProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} templateRef
     * @param {?} containerStrategy
     * @param {?=} contextStrategy
     */
    constructor(templateRef, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(templateRef);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    /**
     * @return {?}
     */
    injectContent() {
        this.containerStrategy.prepare();
        /** @type {?} */
        const embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
        embeddedViewRef.detectChanges();
        return (/** @type {?} */ (embeddedViewRef));
    }
}
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
const PROJECTION_STRATEGY = {
    /**
     * @template T
     * @param {?} component
     * @param {?=} context
     * @return {?}
     */
    AppendComponentToBody(component, context) {
        return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    AppendComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    AppendTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    PrependComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    PrependTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    ProjectComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    ProjectTemplateToContainer(templateRef, containerRef, context) {
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
class LazyLoadService {
    constructor() {
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
    load(strategyOrUrl, retryTimesOrType, retryDelayOrContent, targetQuery = 'body', position = 'beforeend') {
        if (strategyOrUrl instanceof LoadingStrategy) {
            /** @type {?} */
            const strategy = strategyOrUrl;
            /** @type {?} */
            const retryTimes = typeof retryTimesOrType === 'number' ? retryTimesOrType : 2;
            /** @type {?} */
            const retryDelay = typeof retryDelayOrContent === 'number' ? retryDelayOrContent : 1000;
            if (this.loaded.has(strategy.path))
                return of(new CustomEvent('load'));
            return strategy.createStream().pipe(retryWhen((/**
             * @param {?} error$
             * @return {?}
             */
            error$ => concat(error$.pipe(delay(retryDelay), take(retryTimes)), throwError(new CustomEvent('error'))))), tap((/**
             * @return {?}
             */
            () => this.loaded.add(strategy.path))), delay(100), shareReplay({ bufferSize: 1, refCount: true }));
        }
        /** @type {?} */
        let urlOrUrls = strategyOrUrl;
        /** @type {?} */
        const content = ((/** @type {?} */ (retryDelayOrContent))) || '';
        /** @type {?} */
        const type = (/** @type {?} */ (retryTimesOrType));
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
    LazyLoadService.prototype.loaded;
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
 * Generated from: lib/services/track-by.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const trackBy = (/**
 * @template T
 * @param {?} key
 * @return {?}
 */
(key) => (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
(_, item) => item[key]));
/** @type {?} */
const trackByDeep = (/**
 * @template T
 * @param {...?} keys
 * @return {?}
 */
(...keys) => (/**
 * @param {?} _
 * @param {?} item
 * @return {?}
 */
(_, item) => keys.reduce((/**
 * @param {?} acc
 * @param {?} key
 * @return {?}
 */
(acc, key) => acc[key]), item)));
/**
 * @template ItemType
 */
class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
}
TrackByService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ TrackByService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
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

export { AbstractNgModelComponent, AddReplaceableComponent, AddRoute, ApiInterceptor, ApplicationConfigurationService, AuditedEntityDto, AuditedEntityWithUserDto, AuthGuard, AuthService, AutofocusDirective, CONTAINER_STRATEGY, CONTENT_SECURITY_STRATEGY, CONTENT_STRATEGY, CONTEXT_STRATEGY, CORE_OPTIONS, CROSS_ORIGIN_STRATEGY, ChangePassword, ClearContainerStrategy, ComponentContextStrategy, ComponentProjectionStrategy, ConfigPlugin, ConfigState, ConfigStateService, ContainerStrategy, ContentProjectionService, ContentSecurityStrategy, ContentStrategy, ContextStrategy, CoreModule, CreationAuditedEntityDto, CreationAuditedEntityWithUserDto, CrossOriginStrategy, DOM_STRATEGY, DomInsertionService, DomStrategy, DynamicLayoutComponent, EllipsisDirective, EntityDto, ForDirective, FormSubmitDirective, FullAuditedEntityDto, FullAuditedEntityWithUserDto, GetAppConfiguration, GetProfile, InitDirective, InsertIntoContainerStrategy, LOADING_STRATEGY, LazyLoadService, LimitedResultRequestDto, ListResultDto, LoadingStrategy, LocalizationPipe, LocalizationService, LooseContentSecurityStrategy, MockLocalizationPipe, ModifyOpenedTabCount, NGXS_CONFIG_PLUGIN_OPTIONS, NoContentSecurityStrategy, NoContextStrategy, PROJECTION_STRATEGY, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ProjectionStrategy, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, Rest, RestOccurError, RestService, RootComponentProjectionStrategy, RouterOutletComponent, ScriptContentStrategy, ScriptLoadingStrategy, SessionState, SessionStateService, SetEnvironment, SetLanguage, SetRemember, SetTenant, SortPipe, StartLoader, StopLoader, StyleContentStrategy, StyleLoadingStrategy, TemplateContextStrategy, TemplateProjectionStrategy, TrackByService, UpdateProfile, VisibilityDirective, addAbpRoutes, fromLazyLoad, generateHash, generatePassword, getAbpRoutes, getInitialData, isNumber, isUndefinedOrEmptyString, localeInitializer, mapEnumToOptions, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, takeUntilDestroy, trackBy, trackByDeep, uuid, storageFactory as ɵa, BaseCoreModule as ɵb, ProfileService as ɵba, RestService as ɵbb, GetProfile as ɵbc, UpdateProfile as ɵbd, ChangePassword as ɵbe, SessionState as ɵbg, LocalizationService as ɵbh, SetLanguage as ɵbi, SetTenant as ɵbj, ModifyOpenedTabCount as ɵbk, SetRemember as ɵbl, ConfigState as ɵbn, ApplicationConfigurationService as ɵbo, PatchRouteByName as ɵbp, GetAppConfiguration as ɵbq, AddRoute as ɵbr, SetEnvironment as ɵbs, LocaleId as ɵbu, LocaleProvider as ɵbv, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbw, ConfigPlugin as ɵbx, CORE_OPTIONS as ɵby, ApiInterceptor as ɵbz, RootCoreModule as ɵc, getInitialData as ɵca, localeInitializer as ɵcb, TestCoreModule as ɵd, AbstractNgModelComponent as ɵe, AutofocusDirective as ɵf, DynamicLayoutComponent as ɵg, EllipsisDirective as ɵh, ForDirective as ɵi, FormSubmitDirective as ɵj, InitDirective as ɵk, InputEventDebounceDirective as ɵl, PermissionDirective as ɵm, ReplaceableRouteContainerComponent as ɵn, ReplaceableTemplateDirective as ɵo, RouterOutletComponent as ɵp, SortPipe as ɵq, StopPropagationDirective as ɵr, VisibilityDirective as ɵs, LocalizationModule as ɵt, LocalizationPipe as ɵu, MockLocalizationPipe as ɵv, ReplaceableComponentsState as ɵw, AddReplaceableComponent as ɵx, ProfileState as ɵz };
//# sourceMappingURL=abp-ng.core.js.map
