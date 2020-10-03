import { ChangeDetectorRef, Component, Injector, Input, Injectable, InjectionToken, ɵɵdefineInjectable, ɵɵinject, Inject, INJECTOR, Optional, NgZone, SkipSelf, Directive, ElementRef, EventEmitter, Output, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, Self, isDevMode, Renderer2, ComponentFactoryResolver, Pipe, NgModule, LOCALE_ID, APP_INITIALIZER, NgModuleFactory, Compiler, ApplicationRef } from '@angular/core';
import { Router, PRIMARY_OUTLET, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { __rest, __decorate, __metadata, __awaiter } from 'tslib';
import { ofActionSuccessful, Store, Actions, Action, Selector, State, createSelector, actionMatcher, InitState, UpdateState, setValue, NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { fromEvent, of, throwError, from, noop as noop$1, BehaviorSubject, Subject, Subscription, Observable, concat, ReplaySubject } from 'rxjs';
import { take, tap, switchMap, catchError, filter, map, distinctUntilChanged, debounceTime, finalize, takeUntil, retryWhen, delay, shareReplay } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import snq from 'snq';
import { OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { registerLocaleData, CommonModule, APP_BASE_HREF } from '@angular/common';
import { Navigate, NgxsRouterPluginModule } from '@ngxs/router-plugin';
import clone from 'just-clone';
import compare from 'just-compare';
import { FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxsStoragePluginModule, NGXS_STORAGE_PLUGIN_OPTIONS } from '@ngxs/storage-plugin';

// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
class AbstractNgModelComponent {
    constructor(injector) {
        this.injector = injector;
        this.valueFn = value => value;
        this.valueLimitFn = value => false;
        // tslint:disable-next-line: deprecation
        this.cdRef = injector.get(ChangeDetectorRef);
    }
    set value(value) {
        value = this.valueFn(value, this._value);
        if (this.valueLimitFn(value, this._value) !== false || this.readonly)
            return;
        this._value = value;
        this.notifyValueChange();
    }
    get value() {
        return this._value || this.defaultValue;
    }
    get defaultValue() {
        return this._value;
    }
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }
    writeValue(value) {
        this._value = this.valueLimitFn(value, this._value) || value;
        setTimeout(() => this.cdRef.markForCheck(), 0);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
AbstractNgModelComponent.decorators = [
    { type: Component, args: [{ template: '' },] }
];
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

class GetAppConfiguration {
}
GetAppConfiguration.type = '[Config] Get App Configuration';
class SetEnvironment {
    constructor(environment) {
        this.environment = environment;
    }
}
SetEnvironment.type = '[Config] Set Environment';

class StartLoader {
    constructor(payload) {
        this.payload = payload;
    }
}
StartLoader.type = '[Loader] Start';
class StopLoader {
    constructor(payload) {
        this.payload = payload;
    }
}
StopLoader.type = '[Loader] Stop';

class GetProfile {
}
GetProfile.type = '[Profile] Get';
class UpdateProfile {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateProfile.type = '[Profile] Update';
class ChangePassword {
    constructor(payload) {
        this.payload = payload;
    }
}
ChangePassword.type = '[Profile] Change Password';

// tslint:disable: max-line-length
/**
 * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
 */
class AddReplaceableComponent {
    constructor(payload, reload) {
        this.payload = payload;
        this.reload = reload;
    }
}
AddReplaceableComponent.type = '[ReplaceableComponents] Add';

class RestOccurError {
    constructor(payload) {
        this.payload = payload;
    }
}
RestOccurError.type = '[Rest] Error';

class SetLanguage {
    constructor(payload, dispatchAppConfiguration) {
        this.payload = payload;
        this.dispatchAppConfiguration = dispatchAppConfiguration;
    }
}
SetLanguage.type = '[Session] Set Language';
class SetTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
SetTenant.type = '[Session] Set Tenant';
class ModifyOpenedTabCount {
    constructor(operation) {
        this.operation = operation;
    }
}
ModifyOpenedTabCount.type = '[Session] Modify Opened Tab Count';
class SetRemember {
    constructor(payload) {
        this.payload = payload;
    }
}
SetRemember.type = '[Session] Set Remember';

function createTokenParser(format) {
    return (string) => {
        const tokens = [];
        const regex = format.replace(/\./g, '\\.').replace(/\{\s?([0-9a-zA-Z]+)\s?\}/g, (_, token) => {
            tokens.push(token);
            return '(.+)';
        });
        const matches = (string.match(regex) || []).slice(1);
        return matches.reduce((acc, v, i) => {
            const key = tokens[i];
            acc[key] = [...(acc[key] || []), v].filter(Boolean);
            return acc;
        }, {});
    };
}
function interpolate(text, params) {
    return text
        .replace(/(['"]?\{\s*(\d+)\s*\}['"]?)/g, (_, match, digit) => { var _a; return (_a = params[digit]) !== null && _a !== void 0 ? _a : match; })
        .replace(/\s+/g, ' ');
}

var SessionState_1;
let SessionState = SessionState_1 = class SessionState {
    constructor(oAuthService, store, actions) {
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe(() => {
            var _a;
            const sessionDetail = ((_a = this.store.selectSnapshot(SessionState_1)) === null || _a === void 0 ? void 0 : _a.sessionDetail) || {};
            const fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                this.oAuthService.logOut();
            }
            this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe(event => {
                this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            });
        });
    }
    static getLanguage({ language }) {
        return language;
    }
    static getTenant({ tenant }) {
        return tenant;
    }
    static getSessionDetail({ sessionDetail }) {
        return sessionDetail;
    }
    setLanguage({ patchState, dispatch }, { payload, dispatchAppConfiguration = true }) {
        patchState({
            language: payload,
        });
        if (dispatchAppConfiguration)
            return dispatch(new GetAppConfiguration());
    }
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
    setRemember({ getState, patchState }, { payload: remember }) {
        const { sessionDetail } = getState();
        patchState({
            sessionDetail: Object.assign(Object.assign({}, sessionDetail), { remember }),
        });
    }
    modifyOpenedTabCount({ getState, patchState }, { operation }) {
        // tslint:disable-next-line: prefer-const
        let _a = getState().sessionDetail || { openedTabCount: 0 }, { openedTabCount, lastExitTime } = _a, detail = __rest(_a, ["openedTabCount", "lastExitTime"]);
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
SessionState.decorators = [
    { type: Injectable }
];
SessionState.ctorParameters = () => [
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
        defaults: { sessionDetail: { openedTabCount: 0 } },
    }),
    __metadata("design:paramtypes", [OAuthService, Store, Actions])
], SessionState);

var ConfigState_1;
let ConfigState = ConfigState_1 = class ConfigState {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    static getAll(state) {
        return state;
    }
    static getApplicationInfo(state) {
        return state.environment.application || {};
    }
    static getOne(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return state[key];
        });
        return selector;
    }
    static getDeep(keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        const selector = createSelector([ConfigState_1], (state) => {
            return keys.reduce((acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }, state);
        });
        return selector;
    }
    static getApiUrl(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return (state.environment.apis[key || 'default'] || state.environment.apis.default).url;
        });
        return selector;
    }
    static getFeature(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return snq(() => state.features.values[key]);
        });
        return selector;
    }
    static getSetting(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            return snq(() => state.setting.values[key]);
        });
        return selector;
    }
    static getSettings(keyword) {
        const selector = createSelector([ConfigState_1], (state) => {
            const settings = snq(() => state.setting.values, {});
            if (!keyword)
                return settings;
            const keysFound = Object.keys(settings).filter(key => key.indexOf(keyword) > -1);
            return keysFound.reduce((acc, key) => {
                acc[key] = settings[key];
                return acc;
            }, {});
        });
        return selector;
    }
    static getGrantedPolicy(key) {
        const selector = createSelector([ConfigState_1], (state) => {
            if (!key)
                return true;
            const getPolicy = (k) => snq(() => state.auth.grantedPolicies[k], false);
            const orRegexp = /\|\|/g;
            const andRegexp = /&&/g;
            // TODO: Allow combination of ANDs & ORs
            if (orRegexp.test(key)) {
                const keys = key.split('||').filter(Boolean);
                if (keys.length < 2)
                    return false;
                return keys.some(k => getPolicy(k.trim()));
            }
            else if (andRegexp.test(key)) {
                const keys = key.split('&&').filter(Boolean);
                if (keys.length < 2)
                    return false;
                return keys.every(k => getPolicy(k.trim()));
            }
            return getPolicy(key);
        });
        return selector;
    }
    static getLocalizationResource(resourceName) {
        const selector = createSelector([ConfigState_1], (state) => {
            return state.localization.values[resourceName];
        });
        return selector;
    }
    static getLocalization(key, ...interpolateParams) {
        if (!key)
            key = '';
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        const keys = key.split('::');
        const selector = createSelector([ConfigState_1], (state) => {
            const warn = (message) => {
                if (!state.environment.production)
                    console.warn(message);
            };
            if (keys.length < 2) {
                warn('The localization source separator (::) not found.');
                return defaultValue || key;
            }
            if (!state.localization)
                return defaultValue || keys[1];
            const sourceName = keys[0] ||
                snq(() => state.environment.localization.defaultResourceName) ||
                state.localization.defaultResourceName;
            const sourceKey = keys[1];
            if (sourceName === '_') {
                return defaultValue || sourceKey;
            }
            if (!sourceName) {
                warn('Localization source name is not specified and the defaultResourceName was not defined!');
                return defaultValue || sourceKey;
            }
            const source = state.localization.values[sourceName];
            if (!source) {
                warn('Could not find localization source: ' + sourceName);
                return defaultValue || sourceKey;
            }
            let localization = source[sourceKey];
            if (typeof localization === 'undefined') {
                return defaultValue || sourceKey;
            }
            // [TODO]: next line should be removed in v3.2, breaking change!!!
            interpolateParams = interpolateParams.filter(params => params != null);
            if (localization)
                localization = interpolate(localization, interpolateParams);
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        });
        return selector;
    }
    addData({ patchState, dispatch }) {
        const apiName = 'default';
        const api = this.store.selectSnapshot(ConfigState_1.getApiUrl(apiName));
        return this.http
            .get(`${api}/api/abp/application-configuration`)
            .pipe(tap(configuration => patchState(Object.assign({}, configuration))), switchMap(configuration => {
            let lang = configuration.localization.currentCulture.cultureName;
            if (lang.includes(';')) {
                lang = lang.split(';')[0];
            }
            document.documentElement.setAttribute('lang', lang);
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(lang, false));
        }), catchError((err) => {
            dispatch(new RestOccurError(err));
            return throwError(err);
        }));
    }
    setEnvironment({ patchState }, { environment }) {
        return patchState({ environment });
    }
};
ConfigState.decorators = [
    { type: Injectable }
];
ConfigState.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
__decorate([
    Action(GetAppConfiguration),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConfigState.prototype, "addData", null);
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
        defaults: {},
    }),
    __metadata("design:paramtypes", [HttpClient, Store])
], ConfigState);

function noop() {
    // tslint:disable-next-line: only-arrow-functions
    const fn = function () { };
    return fn;
}
function isUndefinedOrEmptyString(value) {
    return value === undefined || value === '';
}
function isNullOrUndefined(obj) {
    return obj === null || obj === undefined;
}
function exists(obj) {
    return !isNullOrUndefined(obj);
}
function isObject(obj) {
    return obj instanceof Object;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isObjectAndNotArray(obj) {
    return isObject(obj) && !isArray(obj);
}

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

const CORE_OPTIONS = new InjectionToken('CORE_OPTIONS');
function coreOptionsFactory(_a) {
    var { cultureNameLocaleFileMap = {} } = _a, options = __rest(_a, ["cultureNameLocaleFileMap"]);
    return Object.assign(Object.assign({}, options), { cultureNameLocaleFileMap: Object.assign(Object.assign({}, localesMapping), cultureNameLocaleFileMap) });
}

class RestService {
    constructor(options, http, store) {
        this.options = options;
        this.http = http;
        this.store = store;
    }
    getApiFromStore(apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    }
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    }
    // TODO: Deprecate service or improve interface in v3.0
    request(request, config, api) {
        config = config || {};
        api = api || this.getApiFromStore(config.apiName);
        const { method, params } = request, options = __rest(request, ["method", "params"]);
        const { observe = "body" /* Body */, skipHandleError } = config;
        return this.http
            .request(method, api + request.url, Object.assign(Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((acc, key) => {
                const value = params[key];
                if (isUndefinedOrEmptyString(value))
                    return acc;
                if (value === null && !this.options.sendNullsAsQueryParam)
                    return acc;
                acc[key] = value;
                return acc;
            }, {}),
        })), options))
            .pipe(catchError(err => (skipHandleError ? throwError(err) : this.handleError(err))));
    }
}
RestService.ɵprov = ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(ɵɵinject(CORE_OPTIONS), ɵɵinject(HttpClient), ɵɵinject(Store)); }, token: RestService, providedIn: "root" });
RestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RestService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CORE_OPTIONS,] }] },
    { type: HttpClient },
    { type: Store }
];

const oAuthStorage = localStorage;
class AuthFlowStrategy {
    constructor(injector) {
        this.injector = injector;
        this.catchError = err => this.store.dispatch(new RestOccurError(err));
        this.store = injector.get(Store);
        this.oAuthService = injector.get(OAuthService);
        this.oAuthConfig = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig'));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const shouldClear = shouldStorageClear(this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.clientId')), oAuthStorage);
            if (shouldClear)
                clearOAuthStorage(oAuthStorage);
            this.oAuthService.configure(this.oAuthConfig);
            return this.oAuthService.loadDiscoveryDocument().catch(this.catchError);
        });
    }
}
class AuthCodeFlowStrategy extends AuthFlowStrategy {
    constructor() {
        super(...arguments);
        this.isInternalAuth = false;
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.init.call(this)
                .then(() => this.oAuthService.tryLogin())
                .then(() => {
                if (this.oAuthService.hasValidAccessToken() || !this.oAuthService.getRefreshToken()) {
                    return Promise.resolve();
                }
                return this.oAuthService.refreshToken();
            })
                .then(() => this.oAuthService.setupAutomaticSilentRefresh({}, 'access_token'));
        });
    }
    login() {
        this.oAuthService.initCodeFlow();
    }
    checkIfInternalAuth() {
        this.oAuthService.initCodeFlow();
        return false;
    }
    logout() {
        this.oAuthService.logOut();
        return of(null);
    }
    destroy() { }
}
class AuthPasswordFlowStrategy extends AuthFlowStrategy {
    constructor() {
        super(...arguments);
        this.isInternalAuth = true;
    }
    login() {
        const router = this.injector.get(Router);
        router.navigateByUrl('/account/login');
    }
    checkIfInternalAuth() {
        return true;
    }
    logout() {
        const rest = this.injector.get(RestService);
        const issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(tap(() => this.oAuthService.logOut()), switchMap(() => this.store.dispatch(new GetAppConfiguration())));
    }
    destroy() { }
}
const AUTH_FLOW_STRATEGY = {
    Code(injector) {
        return new AuthCodeFlowStrategy(injector);
    },
    Password(injector) {
        return new AuthPasswordFlowStrategy(injector);
    },
};
function clearOAuthStorage(storage = oAuthStorage) {
    const keys = [
        'access_token',
        'id_token',
        'refresh_token',
        'nonce',
        'PKCE_verifier',
        'expires_at',
        'id_token_claims_obj',
        'id_token_expires_at',
        'id_token_stored_at',
        'access_token_stored_at',
        'granted_scopes',
        'session_state',
    ];
    keys.forEach(key => storage.removeItem(key));
}
function shouldStorageClear(clientId, storage) {
    const key = 'abpOAuthClientId';
    if (!storage.getItem(key)) {
        storage.setItem(key, clientId);
        return false;
    }
    const shouldClear = storage.getItem(key) !== clientId;
    if (shouldClear)
        storage.setItem(key, clientId);
    return shouldClear;
}

class AuthService {
    constructor(actions, injector, rest, oAuthService, store, options) {
        this.actions = actions;
        this.injector = injector;
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
        this.setStrategy = () => {
            const flow = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.responseType')) ||
                'password';
            if (this.flow === flow)
                return;
            if (this.strategy)
                this.strategy.destroy();
            this.flow = flow;
            this.strategy =
                this.flow === 'code'
                    ? AUTH_FLOW_STRATEGY.Code(this.injector)
                    : AUTH_FLOW_STRATEGY.Password(this.injector);
        };
        this.setStrategy();
        this.listenToSetEnvironment();
    }
    get isInternalAuth() {
        return this.strategy.isInternalAuth;
    }
    listenToSetEnvironment() {
        this.actions.pipe(ofActionSuccessful(SetEnvironment)).subscribe(this.setStrategy);
    }
    login(username, password) {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        return from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))))).pipe(switchMap(() => this.store.dispatch(new GetAppConfiguration())), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        }), take(1));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.strategy.init();
        });
    }
    logout() {
        return this.strategy.logout();
    }
    initLogin() {
        this.strategy.login();
    }
}
AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Actions), ɵɵinject(INJECTOR), ɵɵinject(RestService), ɵɵinject(OAuthService), ɵɵinject(Store), ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthService.ctorParameters = () => [
    { type: Actions },
    { type: Injector },
    { type: RestService },
    { type: OAuthService },
    { type: Store },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
];

function deepMerge(target, source) {
    if (isObjectAndNotArray(target) && isObjectAndNotArray(source)) {
        return deepMergeRecursively(target, source);
    }
    else if (isNullOrUndefined(target) && isNullOrUndefined(source)) {
        return {};
    }
    else {
        return exists(source) ? source : target;
    }
}
function deepMergeRecursively(target, source) {
    const shouldNotRecurse = isNullOrUndefined(target) ||
        isNullOrUndefined(source) || // at least one not defined
        isArray(target) ||
        isArray(source) || // at least one array
        !isObject(target) ||
        !isObject(source); // at least one not an object
    /**
     * if we will not recurse any further,
     * we will prioritize source if it is a defined value.
     */
    if (shouldNotRecurse) {
        return exists(source) ? source : target;
    }
    const keysOfTarget = Object.keys(target);
    const keysOfSource = Object.keys(source);
    const uniqueKeys = new Set(keysOfTarget.concat(keysOfSource));
    return [...uniqueKeys].reduce((retVal, key) => {
        retVal[key] = deepMergeRecursively(target[key], source[key]);
        return retVal;
    }, {});
}

function getRemoteEnv(injector, environment) {
    const { remoteEnv } = environment;
    const { headers = {}, method = 'GET', url } = remoteEnv || {};
    if (!url)
        return Promise.resolve();
    const http = injector.get(HttpClient);
    const store = injector.get(Store);
    return http
        .request(method, url, { headers })
        .pipe(catchError(err => store.dispatch(new RestOccurError(err))), // TODO: Condiser get handle function from a provider
    switchMap(env => store.dispatch(mergeEnvironments(environment, env, remoteEnv))))
        .toPromise();
}
function mergeEnvironments(local, remote, config) {
    switch (config.mergeStrategy) {
        case 'deepmerge':
            return new SetEnvironment(deepMerge(local, remote));
        case 'overwrite':
        case null:
        case undefined:
            return new SetEnvironment(remote);
        default:
            return new SetEnvironment(config.mergeStrategy(local, remote));
    }
}

class MultiTenancyService {
    constructor(restService, store) {
        this.restService = restService;
        this.store = store;
        this._domainTenant = null;
        this.isTenantBoxVisible = true;
        this.apiName = 'abp';
    }
    set domainTenant(value) {
        this._domainTenant = value;
        this.store.dispatch(new SetTenant(value));
    }
    get domainTenant() {
        return this._domainTenant;
    }
    findTenantByName(name, headers) {
        return this.restService.request({
            url: `/api/abp/multi-tenancy/tenants/by-name/${name}`,
            method: 'GET',
            headers,
        }, { apiName: this.apiName });
    }
    findTenantById(id, headers) {
        return this.restService.request({ url: `/api/abp/multi-tenancy/tenants/by-id/${id}`, method: 'GET', headers }, { apiName: this.apiName });
    }
}
MultiTenancyService.ɵprov = ɵɵdefineInjectable({ factory: function MultiTenancyService_Factory() { return new MultiTenancyService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: MultiTenancyService, providedIn: "root" });
MultiTenancyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MultiTenancyService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];

const tenancyPlaceholder = '{0}';
function getCurrentTenancyName(appBaseUrl) {
    var _a;
    if (appBaseUrl.charAt(appBaseUrl.length - 1) !== '/')
        appBaseUrl += '/';
    const parseTokens = createTokenParser(appBaseUrl);
    const token = tenancyPlaceholder.replace(/[}{]/g, '');
    return (_a = parseTokens(window.location.href)[token]) === null || _a === void 0 ? void 0 : _a[0];
}
function parseTenantFromUrl(injector) {
    return __awaiter(this, void 0, void 0, function* () {
        const store = injector.get(Store);
        const multiTenancyService = injector.get(MultiTenancyService);
        const environment = store.selectSnapshot(ConfigState.getOne('environment'));
        const { baseUrl = '' } = environment.application;
        const tenancyName = getCurrentTenancyName(baseUrl);
        if (tenancyName) {
            multiTenancyService.isTenantBoxVisible = false;
            return setEnvironment(store, tenancyName)
                .pipe(switchMap(() => multiTenancyService.findTenantByName(tenancyName, { __tenant: '' })), tap(res => {
                multiTenancyService.domainTenant = res.success
                    ? { id: res.tenantId, name: res.name }
                    : null;
            }))
                .toPromise();
        }
        return Promise.resolve();
    });
}
function setEnvironment(store, tenancyName) {
    const environment = clone(store.selectSnapshot(ConfigState.getOne('environment')));
    if (environment.application.baseUrl) {
        environment.application.baseUrl = environment.application.baseUrl.replace(tenancyPlaceholder, tenancyName);
    }
    environment.oAuthConfig.issuer = environment.oAuthConfig.issuer.replace(tenancyPlaceholder, tenancyName);
    Object.keys(environment.apis).forEach(api => {
        Object.keys(environment.apis[api]).forEach(key => {
            environment.apis[api][key] = environment.apis[api][key].replace(tenancyPlaceholder, tenancyName);
        });
    });
    return store.dispatch(new SetEnvironment(environment));
}

function getInitialData(injector) {
    const fn = () => __awaiter(this, void 0, void 0, function* () {
        const store = injector.get(Store);
        const options = injector.get(CORE_OPTIONS);
        yield getRemoteEnv(injector, options.environment);
        yield parseTenantFromUrl(injector);
        yield injector.get(AuthService).init();
        if (options.skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap(res => checkAccessToken(store, injector)))
            .toPromise();
    });
    return fn;
}
function checkAccessToken(store, injector) {
    const oAuth = injector.get(OAuthService);
    if (oAuth.hasValidAccessToken() && !store.selectSnapshot(ConfigState.getDeep('currentUser.id'))) {
        clearOAuthStorage();
    }
}
function localeInitializer(injector) {
    const fn = () => {
        const store = injector.get(Store);
        const options = injector.get(CORE_OPTIONS);
        const lang = store.selectSnapshot(state => state.SessionState.language) || 'en';
        return new Promise((resolve, reject) => {
            registerLocale(lang, options.cultureNameLocaleFileMap).then(() => resolve('resolved'), reject);
        });
    };
    return fn;
}
function registerLocale(locale, localeNameMap) {
    return import(
    /* webpackChunkName: "_locale-[request]"*/
    `@angular/common/locales/${localeNameMap[locale] || locale}.js`).then(module => {
        registerLocaleData(module.default);
    });
}

// This will not be necessary when only Angukar 9.1+ is supported
function getLocaleDirection(locale) {
    return /^(ar(-[A-Z]{2})?|ckb(-IR)?|fa(-AF)?|he|ks|lrc(-IQ)?|mzn|pa-Arab|ps(-PK)?|sd|ug|ur(-IN)?|uz-Arab|yi)$/.test(locale)
        ? 'rtl'
        : 'ltr';
}
function createLocalizer(localization) {
    return (resourceName, key, defaultValue) => {
        if (resourceName === '_')
            return key;
        const resource = localization.values[resourceName];
        if (!resource)
            return defaultValue;
        return resource[key] || defaultValue;
    };
}
function createLocalizerWithFallback(localization) {
    const findLocalization = createLocalizationFinder(localization);
    return (resourceNames, keys, defaultValue) => {
        const { localized } = findLocalization(resourceNames, keys);
        return localized || defaultValue;
    };
}
function createLocalizationPipeKeyGenerator(localization) {
    const findLocalization = createLocalizationFinder(localization);
    return (resourceNames, keys, defaultKey) => {
        const { resourceName, key } = findLocalization(resourceNames, keys);
        return !resourceName ? defaultKey : resourceName === '_' ? key : `${resourceName}::${key}`;
    };
}
function createLocalizationFinder(localization) {
    const localize = createLocalizer(localization);
    return (resourceNames, keys) => {
        resourceNames = resourceNames.concat(localization.defaultResourceName).filter(Boolean);
        const resourceCount = resourceNames.length;
        const keyCount = keys.length;
        for (let i = 0; i < resourceCount; i++) {
            const resourceName = resourceNames[i];
            for (let j = 0; j < keyCount; j++) {
                const key = keys[j];
                const localized = localize(resourceName, key, null);
                if (localized)
                    return { resourceName, key, localized };
            }
        }
        return { resourceName: undefined, key: undefined, localized: undefined };
    };
}

class LocalizationService {
    constructor(actions, store, injector, ngZone, otherInstance) {
        this.actions = actions;
        this.store = store;
        this.injector = injector;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
        this.listenToSetLanguage();
    }
    /**
     * Returns currently selected language
     */
    get currentLang() {
        return this.store.selectSnapshot(state => state.SessionState.language);
    }
    get languageChange() {
        return this.actions.pipe(ofActionSuccessful(SetLanguage), filter((action) => action.dispatchAppConfiguration !== false));
    }
    listenToSetLanguage() {
        this.languageChange.subscribe(({ payload }) => this.registerLocale(payload));
    }
    registerLocale(locale) {
        const router = this.injector.get(Router);
        const { cultureNameLocaleFileMap } = this.injector.get(CORE_OPTIONS);
        const { shouldReuseRoute } = router.routeReuseStrategy;
        router.routeReuseStrategy.shouldReuseRoute = () => false;
        router.navigated = false;
        return registerLocale(locale, cultureNameLocaleFileMap).then(() => {
            this.ngZone.run(() => __awaiter(this, void 0, void 0, function* () {
                yield router.navigateByUrl(router.url).catch(noop$1);
                router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
            }));
        });
    }
    /**
     * Returns an observable localized text with the given interpolation parameters in current language.
     * @param key Localizaton key to replace with localized text
     * @param interpolateParams Values to interpolate
     */
    get(key, ...interpolateParams) {
        return this.store.select(ConfigState.getLocalization(key, ...interpolateParams));
    }
    getResource(resourceName) {
        return this.store.select(ConfigState.getLocalizationResource(resourceName));
    }
    /**
     * Returns localized text with the given interpolation parameters in current language.
     * @param key Localization key to replace with localized text
     * @param interpolateParams Values to intepolate.
     */
    instant(key, ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(key, ...interpolateParams));
    }
    localize(resourceName, key, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizer), map(localize => localize(resourceName, key, defaultValue)));
    }
    localizeSync(resourceName, key, defaultValue) {
        const localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizer(localization)(resourceName, key, defaultValue);
    }
    localizeWithFallback(resourceNames, keys, defaultValue) {
        return this.store.select(ConfigState.getOne('localization')).pipe(map(createLocalizerWithFallback), map(localizeWithFallback => localizeWithFallback(resourceNames, keys, defaultValue)));
    }
    localizeWithFallbackSync(resourceNames, keys, defaultValue) {
        const localization = this.store.selectSnapshot(ConfigState.getOne('localization'));
        return createLocalizerWithFallback(localization)(resourceNames, keys, defaultValue);
    }
}
LocalizationService.ɵprov = ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(INJECTOR), ɵɵinject(NgZone), ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
LocalizationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LocalizationService.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: Injector },
    { type: NgZone },
    { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

class InternalStore {
    constructor(initialState) {
        this.initialState = initialState;
        this.state$ = new BehaviorSubject(this.initialState);
        this.update$ = new Subject();
        this.sliceState = (selector, compareFn = compare) => this.state$.pipe(map(selector), distinctUntilChanged(compareFn));
        this.sliceUpdate = (selector, filterFn = (x) => x !== undefined) => this.update$.pipe(map(selector), filter(filterFn));
    }
    get state() {
        return this.state$.value;
    }
    patch(state) {
        this.state$.next(deepMerge(this.state, state));
        this.update$.next(state);
    }
    reset() {
        this.patch(this.initialState);
    }
}

function findRoute(routes, path) {
    const node = routes.find(route => route.path === path);
    return node || path === '/'
        ? node
        : findRoute(routes, path
            .split('/')
            .slice(0, -1)
            .join('/'));
}
function getRoutePath(router, url = router.url) {
    const emptyGroup = { segments: [] };
    const primaryGroup = router.parseUrl(url).root.children[PRIMARY_OUTLET];
    return '/' + (primaryGroup || emptyGroup).segments.map(({ path }) => path).join('/');
}
function reloadRoute(router, ngZone) {
    const { shouldReuseRoute } = router.routeReuseStrategy;
    const setRouteReuse = (reuse) => {
        router.routeReuseStrategy.shouldReuseRoute = reuse;
    };
    setRouteReuse(() => false);
    router.navigated = false;
    ngZone.run(() => __awaiter(this, void 0, void 0, function* () {
        yield router.navigateByUrl(router.url).catch(noop);
        setRouteReuse(shouldReuseRoute);
    }));
}

class ReplaceableComponentsService {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.store = new InternalStore([]);
    }
    get replaceableComponents$() {
        return this.store.sliceState(state => state);
    }
    get replaceableComponents() {
        return this.store.state;
    }
    get onUpdate$() {
        return this.store.sliceUpdate(state => state);
    }
    add(replaceableComponent, reload) {
        const replaceableComponents = [...this.store.state];
        const index = replaceableComponents.findIndex(component => component.key === replaceableComponent.key);
        if (index > -1) {
            replaceableComponents[index] = replaceableComponent;
        }
        else {
            replaceableComponents.push(replaceableComponent);
        }
        this.store.patch(replaceableComponents);
        if (reload)
            reloadRoute(this.router, this.ngZone);
    }
    get(replaceableComponentKey) {
        return this.replaceableComponents.find(component => component.key === replaceableComponentKey);
    }
    get$(replaceableComponentKey) {
        return this.replaceableComponents$.pipe(map(components => components.find(component => component.key === replaceableComponentKey)));
    }
}
ReplaceableComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function ReplaceableComponentsService_Factory() { return new ReplaceableComponentsService(ɵɵinject(NgZone), ɵɵinject(Router)); }, token: ReplaceableComponentsService, providedIn: "root" });
ReplaceableComponentsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ReplaceableComponentsService.ctorParameters = () => [
    { type: NgZone },
    { type: Router }
];

function pushValueTo(array) {
    return (element) => {
        array.push(element);
        return array;
    };
}

class BaseTreeNode {
    constructor(props) {
        this.children = [];
        this.isLeaf = true;
        Object.assign(this, props);
    }
    static create(props) {
        return new BaseTreeNode(props);
    }
}
function createTreeFromList(list, keySelector, parentKeySelector, valueMapper) {
    const map = createMapFromList(list, keySelector, valueMapper);
    const tree = [];
    list.forEach(row => {
        const id = keySelector(row);
        const parentId = parentKeySelector(row);
        const node = map.get(id);
        if (!node)
            return;
        if (parentId) {
            const parent = map.get(parentId);
            if (!parent)
                return;
            parent.children.push(node);
            parent.isLeaf = false;
            node.parent = parent;
        }
        else {
            tree.push(node);
        }
    });
    return tree;
}
function createMapFromList(list, keySelector, valueMapper) {
    const map = new Map();
    list.forEach(row => map.set(keySelector(row), valueMapper(row)));
    return map;
}

class AbstractTreeService {
    constructor() {
        this._flat$ = new BehaviorSubject([]);
        this._tree$ = new BehaviorSubject([]);
        this._visible$ = new BehaviorSubject([]);
    }
    get flat() {
        return this._flat$.value;
    }
    get flat$() {
        return this._flat$.asObservable();
    }
    get tree() {
        return this._tree$.value;
    }
    get tree$() {
        return this._tree$.asObservable();
    }
    get visible() {
        return this._visible$.value;
    }
    get visible$() {
        return this._visible$.asObservable();
    }
    createTree(items) {
        return createTreeFromList(items, item => item[this.id], item => item[this.parentId], item => BaseTreeNode.create(item));
    }
    filterWith(setOrMap) {
        return this._flat$.value.filter(item => !setOrMap.has(item[this.id]));
    }
    findItemsToRemove(set) {
        return this._flat$.value.reduce((acc, item) => {
            if (!acc.has(item[this.parentId]))
                return acc;
            const childSet = new Set([item[this.id]]);
            const children = this.findItemsToRemove(childSet);
            return new Set([...acc, ...children]);
        }, set);
    }
    publish(flatItems, visibleItems) {
        this._flat$.next(flatItems);
        this._tree$.next(this.createTree(flatItems));
        this._visible$.next(this.createTree(visibleItems));
        return flatItems;
    }
    add(items) {
        const map = new Map();
        items.forEach(item => map.set(item[this.id], item));
        const flatItems = this.filterWith(map);
        map.forEach(pushValueTo(flatItems));
        flatItems.sort(this.sort);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    find(predicate, tree = this.tree) {
        return tree.reduce((acc, node) => (acc ? acc : predicate(node) ? node : this.find(predicate, node.children)), null);
    }
    patch(identifier, props) {
        const flatItems = this._flat$.value;
        const index = flatItems.findIndex(item => item[this.id] === identifier);
        if (index < 0)
            return false;
        flatItems[index] = Object.assign(Object.assign({}, flatItems[index]), props);
        flatItems.sort(this.sort);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    refresh() {
        return this.add([]);
    }
    remove(identifiers) {
        const set = new Set();
        identifiers.forEach(id => set.add(id));
        const setToRemove = this.findItemsToRemove(set);
        const flatItems = this.filterWith(setToRemove);
        const visibleItems = flatItems.filter(item => !this.hide(item));
        return this.publish(flatItems, visibleItems);
    }
    search(params, tree = this.tree) {
        const searchKeys = Object.keys(params);
        return tree.reduce((acc, node) => acc
            ? acc
            : searchKeys.every(key => node[key] === params[key])
                ? node
                : this.search(params, node.children), null);
    }
}
class AbstractNavTreeService extends AbstractTreeService {
    constructor(actions, store) {
        super();
        this.actions = actions;
        this.store = store;
        this.id = 'name';
        this.parentId = 'parentName';
        this.hide = (item) => item.invisible || !this.isGranted(item);
        this.sort = (a, b) => {
            if (!Number.isInteger(a.order))
                return 1;
            if (!Number.isInteger(b.order))
                return -1;
            return a.order - b.order;
        };
        this.subscription = this.actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .subscribe(() => this.refresh());
    }
    isGranted({ requiredPolicy }) {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(requiredPolicy));
    }
    hasChildren(identifier) {
        var _a;
        const node = this.find(item => item[this.id] === identifier);
        return Boolean((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length);
    }
    hasInvisibleChild(identifier) {
        var _a;
        const node = this.find(item => item[this.id] === identifier);
        return (_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.some(child => child.invisible);
    }
    /* istanbul ignore next */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AbstractNavTreeService.decorators = [
    { type: Injectable }
];
AbstractNavTreeService.ctorParameters = () => [
    { type: Actions },
    { type: Store }
];
class RoutesService extends AbstractNavTreeService {
}
RoutesService.ɵprov = ɵɵdefineInjectable({ factory: function RoutesService_Factory() { return new RoutesService(ɵɵinject(Actions), ɵɵinject(Store)); }, token: RoutesService, providedIn: "root" });
RoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
class SettingTabsService extends AbstractNavTreeService {
}
SettingTabsService.ɵprov = ɵɵdefineInjectable({ factory: function SettingTabsService_Factory() { return new SettingTabsService(ɵɵinject(Actions), ɵɵinject(Store)); }, token: SettingTabsService, providedIn: "root" });
SettingTabsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];

class SubscriptionService {
    constructor() {
        this.subscription = new Subscription();
    }
    get isClosed() {
        return this.subscription.closed;
    }
    addOne(source$, nextOrObserver, error) {
        const subscription = source$.subscribe(nextOrObserver, error);
        this.subscription.add(subscription);
        return subscription;
    }
    closeAll() {
        this.subscription.unsubscribe();
    }
    closeOne(subscription) {
        this.removeOne(subscription);
        subscription.unsubscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    removeOne(subscription) {
        if (!subscription)
            return;
        this.subscription.remove(subscription);
    }
    reset() {
        this.subscription.unsubscribe();
        this.subscription = new Subscription();
    }
}
SubscriptionService.decorators = [
    { type: Injectable }
];

class DynamicLayoutComponent {
    constructor(injector, localizationService, replaceableComponents, subscription, dynamicLayoutComponent) {
        this.localizationService = localizationService;
        this.replaceableComponents = replaceableComponents;
        this.subscription = subscription;
        // TODO: Consider a shared enum (eThemeSharedComponents) for known layouts
        this.layouts = new Map([
            ['application', 'Theme.ApplicationLayoutComponent'],
            ['account', 'Theme.AccountLayoutComponent'],
            ['empty', 'Theme.EmptyLayoutComponent'],
        ]);
        this.isLayoutVisible = true;
        if (dynamicLayoutComponent)
            return;
        const route = injector.get(ActivatedRoute);
        const router = injector.get(Router);
        const routes = injector.get(RoutesService);
        this.subscription.addOne(router.events, event => {
            var _a;
            if (event instanceof NavigationEnd) {
                let expectedLayout = (route.snapshot.data || {}).layout;
                if (!expectedLayout) {
                    let node = findRoute(routes, getRoutePath(router));
                    node = { parent: node };
                    while (node.parent) {
                        node = node.parent;
                        if (node.layout) {
                            expectedLayout = node.layout;
                            break;
                        }
                    }
                }
                if (!expectedLayout)
                    expectedLayout = "empty" /* empty */;
                const key = this.layouts.get(expectedLayout);
                this.layout = (_a = this.getComponent(key)) === null || _a === void 0 ? void 0 : _a.component;
            }
        });
        this.listenToLanguageChange();
    }
    listenToLanguageChange() {
        this.subscription.addOne(this.localizationService.languageChange, () => {
            this.isLayoutVisible = false;
            setTimeout(() => (this.isLayoutVisible = true), 0);
        });
    }
    getComponent(key) {
        return this.replaceableComponents.get(key);
    }
}
DynamicLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-dynamic-layout',
                template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngIf="isLayoutVisible" [ngComponentOutlet]="layout"></ng-container
    ></ng-template>
  `,
                providers: [SubscriptionService]
            },] }
];
DynamicLayoutComponent.ctorParameters = () => [
    { type: Injector },
    { type: LocalizationService },
    { type: ReplaceableComponentsService },
    { type: SubscriptionService },
    { type: DynamicLayoutComponent, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

class ReplaceableRouteContainerComponent {
    constructor(route, replaceableComponents, subscription) {
        this.route = route;
        this.replaceableComponents = replaceableComponents;
        this.subscription = subscription;
    }
    ngOnInit() {
        this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
        this.componentKey = this.route.snapshot.data
            .replaceableComponent.key;
        const component$ = this.replaceableComponents
            .get$(this.componentKey)
            .pipe(distinctUntilChanged());
        this.subscription.addOne(component$, (res = {}) => {
            this.externalComponent = res.component;
        });
    }
}
ReplaceableRouteContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-replaceable-route-container',
                template: `
    <ng-container *ngComponentOutlet="externalComponent || defaultComponent"></ng-container>
  `,
                providers: [SubscriptionService]
            },] }
];
ReplaceableRouteContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: ReplaceableComponentsService },
    { type: SubscriptionService }
];

class RouterOutletComponent {
}
RouterOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-router-outlet',
                template: `
    <router-outlet></router-outlet>
  `
            },] }
];

class AutofocusDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => this.elRef.nativeElement.focus(), this.delay);
    }
}
AutofocusDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[autofocus]'
            },] }
];
AutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
AutofocusDirective.propDecorators = {
    delay: [{ type: Input, args: ['autofocus',] }]
};

class InputEventDebounceDirective {
    constructor(el, subscription) {
        this.el = el;
        this.subscription = subscription;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    ngOnInit() {
        const input$ = fromEvent(this.el.nativeElement, 'input').pipe(debounceTime(this.debounce));
        this.subscription.addOne(input$, (event) => {
            this.debounceEvent.emit(event);
        });
    }
}
InputEventDebounceDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[input.debounce]',
                providers: [SubscriptionService],
            },] }
];
InputEventDebounceDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SubscriptionService }
];
InputEventDebounceDirective.propDecorators = {
    debounce: [{ type: Input }],
    debounceEvent: [{ type: Output, args: ['input.debounce',] }]
};

class EllipsisDirective {
    constructor(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    get inlineClass() {
        return this.enabled && this.width;
    }
    get class() {
        return this.enabled && !this.width;
    }
    get maxWidth() {
        return this.enabled && this.width ? this.width || '170px' : undefined;
    }
    ngAfterViewInit() {
        this.title = this.title || this.elRef.nativeElement.innerText;
        this.cdRef.detectChanges();
    }
}
EllipsisDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpEllipsis]',
            },] }
];
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

class AbpForContext {
    constructor($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
}
class RecordView {
    constructor(record, view) {
        this.record = record;
        this.view = view;
    }
}
class ForDirective {
    constructor(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    get compareFn() {
        return this.compareBy || compare;
    }
    get trackByFn() {
        return this.trackBy || ((index, item) => item.id || index);
    }
    iterateOverAppliedOperations(changes) {
        const rw = [];
        changes.forEachOperation((record, previousIndex, currentIndex) => {
            if (record.previousIndex == null) {
                const view = this.vcRef.createEmbeddedView(this.tempRef, new AbpForContext(null, -1, -1, this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                this.vcRef.remove(previousIndex);
            }
            else {
                const view = this.vcRef.get(previousIndex);
                this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, view));
            }
        });
        for (let i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    }
    iterateOverAttachedViews(changes) {
        for (let i = 0, l = this.vcRef.length; i < l; i++) {
            const viewRef = this.vcRef.get(i);
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((record) => {
            const viewRef = this.vcRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
        });
    }
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
            const changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    }
    sortItems(items) {
        if (this.orderBy) {
            items.sort((a, b) => (a[this.orderBy] > b[this.orderBy] ? 1 : a[this.orderBy] < b[this.orderBy] ? -1 : 0));
        }
        else {
            items.sort();
        }
    }
    ngOnChanges() {
        let items = clone(this.items);
        if (!Array.isArray(items))
            return;
        const compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter(item => compareFn(item[this.filterBy], this.filterVal));
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

class FormSubmitDirective {
    constructor(formGroupDirective, host, cdRef, subscription) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.subscription = subscription;
        this.debounce = 200;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    ngOnInit() {
        this.subscription.addOne(this.formGroupDirective.ngSubmit, () => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        });
        const keyup$ = fromEvent(this.host.nativeElement, 'keyup').pipe(debounceTime(this.debounce), filter((key) => key && key.key === 'Enter'));
        this.subscription.addOne(keyup$, () => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        });
    }
    markAsDirty() {
        const { form } = this.formGroupDirective;
        setDirty(form.controls);
        form.markAsDirty();
        this.cdRef.detectChanges();
    }
}
FormSubmitDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'form[ngSubmit][formGroup]',
                providers: [SubscriptionService],
            },] }
];
FormSubmitDirective.ctorParameters = () => [
    { type: FormGroupDirective, decorators: [{ type: Self }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: SubscriptionService }
];
FormSubmitDirective.propDecorators = {
    debounce: [{ type: Input }],
    notValidateOnSubmit: [{ type: Input }],
    ngSubmit: [{ type: Output }]
};
function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach(group => {
            setDirty(group.controls);
        });
        return;
    }
    Object.keys(controls).forEach(key => {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    });
}

class InitDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpInit]' },] }
];
InitDirective.ctorParameters = () => [
    { type: ElementRef }
];
InitDirective.propDecorators = {
    init: [{ type: Output, args: ['abpInit',] }]
};

var ReplaceableComponentsState_1;
function logDeprecationMsg() {
    if (isDevMode()) {
        console.warn(`
     ReplacableComponentsState has been deprecated. Use ReplaceableComponentsService instead.
     See the doc https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement
     `);
    }
}
// tslint:disable: max-line-length
/**
 * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
 */
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    constructor(service) {
        this.service = service;
    }
    static getAll({ replaceableComponents, }) {
        logDeprecationMsg();
        return replaceableComponents || [];
    }
    static getComponent(key) {
        const selector = createSelector([ReplaceableComponentsState_1], (state) => {
            logDeprecationMsg();
            return snq(() => state.replaceableComponents.find(component => component.key === key));
        });
        return selector;
    }
    replaceableComponentsAction({ getState, patchState }, { payload, reload }) {
        logDeprecationMsg();
        let { replaceableComponents } = getState();
        const index = snq(() => replaceableComponents.findIndex(component => component.key === payload.key), -1);
        if (index > -1) {
            replaceableComponents[index] = payload;
        }
        else {
            replaceableComponents = [...replaceableComponents, payload];
        }
        patchState({
            replaceableComponents,
        });
        this.service.add(payload, reload);
    }
};
ReplaceableComponentsState.decorators = [
    { type: Injectable }
];
ReplaceableComponentsState.ctorParameters = () => [
    { type: ReplaceableComponentsService }
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
        defaults: { replaceableComponents: [] },
    }),
    __metadata("design:paramtypes", [ReplaceableComponentsService])
], ReplaceableComponentsState);

class ProfileService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    get() {
        const request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    update(body) {
        const request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    changePassword(body, skipHandleError = false) {
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
ProfileService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
ProfileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProfileService.ctorParameters = () => [
    { type: RestService }
];

let ProfileState = class ProfileState {
    constructor(profileService) {
        this.profileService = profileService;
    }
    static getProfile({ profile }) {
        return profile;
    }
    getProfile({ patchState }) {
        return this.profileService.get().pipe(tap(profile => patchState({
            profile,
        })));
    }
    updateProfile({ patchState }, { payload }) {
        return this.profileService.update(payload).pipe(tap(profile => patchState({
            profile,
        })));
    }
    changePassword(_, { payload }) {
        return this.profileService.changePassword(payload, true);
    }
};
ProfileState.decorators = [
    { type: Injectable }
];
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
        defaults: {},
    }),
    __metadata("design:paramtypes", [ProfileService])
], ProfileState);

class PermissionDirective {
    constructor(elRef, renderer, store, templateRef, vcRef) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    check() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.store
            .select(ConfigState.getGrantedPolicy(this.condition))
            .subscribe(isGranted => {
            if (this.templateRef && isGranted) {
                this.vcRef.clear();
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else if (this.templateRef && !isGranted) {
                this.vcRef.clear();
            }
            else if (!isGranted && !this.templateRef) {
                this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
            }
        });
    }
    ngOnInit() {
        if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
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

class ReplaceableTemplateDirective {
    constructor(injector, templateRef, cfRes, vcRef, replaceableComponents, subscription) {
        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.replaceableComponents = replaceableComponents;
        this.subscription = subscription;
        this.providedData = { inputs: {}, outputs: {} };
        this.context = {};
        this.defaultComponentSubscriptions = {};
        this.initialized = false;
        this.context = {
            initTemplate: ref => {
                this.resetDefaultComponent();
                this.defaultComponentRef = ref;
                this.setDefaultComponentInputs();
            },
        };
    }
    ngOnInit() {
        const component$ = this.replaceableComponents
            .get$(this.data.componentKey)
            .pipe(filter((res = {}) => !this.initialized || !compare(res.component, this.externalComponent)));
        this.subscription.addOne(component$, (res = {}) => {
            this.vcRef.clear();
            this.externalComponent = res.component;
            if (this.defaultComponentRef) {
                this.resetDefaultComponent();
            }
            if (res.component) {
                this.setProvidedData();
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
        });
    }
    ngOnChanges(changes) {
        if (snq(() => changes.data.currentValue.inputs) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
        }
    }
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
                        this.defaultComponentSubscriptions[key] = this.defaultComponentRef[key].subscribe(value => {
                            this.data.outputs[key](value);
                        });
                    }
                }
            }
        }
    }
    setProvidedData() {
        this.providedData = Object.assign(Object.assign({}, this.data), { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: Object.assign({ enumerable: true, configurable: true, get: () => this.data.inputs[key].value }, (this.data.inputs[key].twoWay && {
                set: newValue => {
                    this.data.inputs[key].value = newValue;
                    this.data.outputs[`${key}Change`](newValue);
                },
            })) })), {})));
    }
    resetDefaultComponent() {
        Object.keys(this.defaultComponentSubscriptions).forEach(key => {
            this.defaultComponentSubscriptions[key].unsubscribe();
        });
        this.defaultComponentSubscriptions = {};
        this.defaultComponentRef = null;
    }
}
ReplaceableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpReplaceableTemplate]', providers: [SubscriptionService] },] }
];
ReplaceableTemplateDirective.ctorParameters = () => [
    { type: Injector },
    { type: TemplateRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: ReplaceableComponentsService },
    { type: SubscriptionService }
];
ReplaceableTemplateDirective.propDecorators = {
    data: [{ type: Input, args: ['abpReplaceableTemplate',] }]
};

class StopPropagationDirective {
    constructor(el, subscription) {
        this.el = el;
        this.subscription = subscription;
        this.stopPropEvent = new EventEmitter();
    }
    ngOnInit() {
        this.subscription.addOne(fromEvent(this.el.nativeElement, 'click'), (event) => {
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        });
    }
}
StopPropagationDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[click.stop]',
                providers: [SubscriptionService],
            },] }
];
StopPropagationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: SubscriptionService }
];
StopPropagationDirective.propDecorators = {
    stopPropEvent: [{ type: Output, args: ['click.stop',] }]
};

/**
 *
 * @deprecated To be deleted in v3.3
 */
class VisibilityDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    ngAfterViewInit() {
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        let observer;
        observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (!mutation.target)
                    return;
                const htmlNodes = snq(() => Array.from(mutation.target.childNodes).filter(node => node instanceof HTMLElement), []);
                if (!htmlNodes.length) {
                    this.removeFromDOM();
                }
            });
        });
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout(() => {
            const htmlNodes = snq(() => Array.from(this.focusedElement.childNodes).filter(node => node instanceof HTMLElement), []);
            if (!htmlNodes.length)
                this.removeFromDOM();
        }, 0);
        this.completed$.subscribe(() => observer.disconnect());
    }
    disconnect() {
        this.completed$.next();
        this.completed$.complete();
    }
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
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2 }
];
VisibilityDirective.propDecorators = {
    focusedElement: [{ type: Input, args: ['abpVisibility',] }]
};

class OAuthConfigurationHandler {
    constructor(actions, oAuthService, options) {
        this.actions = actions;
        this.oAuthService = oAuthService;
        this.options = options;
        this.listenToSetEnvironment();
    }
    listenToSetEnvironment() {
        this.actions
            .pipe(ofActionSuccessful(SetEnvironment))
            .pipe(map(({ environment }) => environment.oAuthConfig), filter(config => !compare(config, this.options.environment.oAuthConfig)))
            .subscribe(config => {
            this.oAuthService.configure(config);
        });
    }
}
OAuthConfigurationHandler.ɵprov = ɵɵdefineInjectable({ factory: function OAuthConfigurationHandler_Factory() { return new OAuthConfigurationHandler(ɵɵinject(Actions), ɵɵinject(OAuthService), ɵɵinject(CORE_OPTIONS)); }, token: OAuthConfigurationHandler, providedIn: "root" });
OAuthConfigurationHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OAuthConfigurationHandler.ctorParameters = () => [
    { type: Actions },
    { type: OAuthService },
    { type: undefined, decorators: [{ type: Inject, args: [CORE_OPTIONS,] }] }
];

class RoutesHandler {
    constructor(routes, router) {
        this.routes = routes;
        this.router = router;
        this.addRoutes();
    }
    addRoutes() {
        var _a, _b;
        (_b = (_a = this.router) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.forEach(({ path = '', data }) => {
            if (!(data === null || data === void 0 ? void 0 : data.routes))
                return;
            if (Array.isArray(data.routes)) {
                this.routes.add(data.routes);
                return;
            }
            const routes = flatRoutes([Object.assign({ path }, data.routes)], { path: '' });
            this.routes.add(routes);
        });
    }
}
RoutesHandler.ɵprov = ɵɵdefineInjectable({ factory: function RoutesHandler_Factory() { return new RoutesHandler(ɵɵinject(RoutesService), ɵɵinject(Router, 8)); }, token: RoutesHandler, providedIn: "root" });
RoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RoutesHandler.ctorParameters = () => [
    { type: RoutesService },
    { type: Router, decorators: [{ type: Optional }] }
];
function flatRoutes(routes, parent) {
    if (!routes)
        return [];
    return routes.reduce((acc, route) => {
        const _a = Object.assign(Object.assign({}, route), { parentName: parent.name, path: (parent.path + '/' + route.path).replace(/\/\//g, '/') }), { children } = _a, current = __rest(_a, ["children"]);
        acc.push(current, ...flatRoutes(children, current));
        return acc;
    }, []);
}

class ApiInterceptor {
    constructor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    intercept(request, next) {
        this.store.dispatch(new StartLoader(request));
        return next
            .handle(request.clone({
            setHeaders: this.getAdditionalHeaders(request.headers),
        }))
            .pipe(finalize(() => this.store.dispatch(new StopLoader(request))));
    }
    getAdditionalHeaders(existingHeaders) {
        const headers = {};
        const token = this.oAuthService.getAccessToken();
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Authorization')) && token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('Accept-Language')) && lang) {
            headers['Accept-Language'] = lang;
        }
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        if (!(existingHeaders === null || existingHeaders === void 0 ? void 0 : existingHeaders.has('__tenant')) && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return headers;
    }
}
ApiInterceptor.ɵprov = ɵɵdefineInjectable({ factory: function ApiInterceptor_Factory() { return new ApiInterceptor(ɵɵinject(OAuthService), ɵɵinject(Store)); }, token: ApiInterceptor, providedIn: "root" });
ApiInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ApiInterceptor.ctorParameters = () => [
    { type: OAuthService },
    { type: Store }
];

class LocalizationPipe {
    constructor(store) {
        this.store = store;
    }
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(value, ...interpolateParams.reduce((acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val]), [])));
    }
}
LocalizationPipe.decorators = [
    { type: Injectable },
    { type: Pipe, args: [{
                name: 'abpLocalization',
            },] }
];
LocalizationPipe.ctorParameters = () => [
    { type: Store }
];
class MockLocalizationPipe {
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

class LocalizationModule {
}
LocalizationModule.decorators = [
    { type: NgModule, args: [{
                exports: [LocalizationPipe],
                declarations: [LocalizationPipe],
            },] }
];

class SortPipe {
    transform(value, sortOrder = 'asc', sortKey) {
        sortOrder = sortOrder && sortOrder.toLowerCase();
        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
            return value;
        let numberArray = [];
        let stringArray = [];
        if (!sortKey) {
            numberArray = value.filter(item => typeof item === 'number').sort();
            stringArray = value.filter(item => typeof item === 'string').sort();
        }
        else {
            numberArray = value
                .filter(item => typeof item[sortKey] === 'number')
                .sort((a, b) => a[sortKey] - b[sortKey]);
            stringArray = value
                .filter(item => typeof item[sortKey] === 'string')
                .sort((a, b) => {
                if (a[sortKey] < b[sortKey])
                    return -1;
                else if (a[sortKey] > b[sortKey])
                    return 1;
                else
                    return 0;
            });
        }
        const sorted = [
            ...numberArray,
            ...stringArray,
            ...value.filter(item => typeof (sortKey ? item[sortKey] : item) !== 'number' &&
                typeof (sortKey ? item[sortKey] : item) !== 'string'),
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

const NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
class ConfigPlugin {
    constructor(options) {
        this.options = options;
        this.initialized = false;
    }
    handle(state, event, next) {
        const matches = actionMatcher(event);
        const isInitAction = matches(InitState) || matches(UpdateState);
        if (isInitAction && !this.initialized) {
            state = setValue(state, 'ConfigState', Object.assign(Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState))), this.options));
            this.initialized = true;
        }
        return next(state, event);
    }
}
ConfigPlugin.decorators = [
    { type: Injectable }
];
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] }
];

class LocaleId extends String {
    constructor(localizationService) {
        super();
        this.localizationService = localizationService;
    }
    toString() {
        const { currentLang } = this.localizationService;
        return localesMapping[currentLang] || currentLang;
    }
    valueOf() {
        return this.toString();
    }
}
const LocaleProvider = {
    provide: LOCALE_ID,
    useClass: LocaleId,
    deps: [LocalizationService],
};

Date.prototype.toLocalISOString = function () {
    const timezoneOffset = this.getTimezoneOffset();
    return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
};

function storageFactory() {
    return oAuthStorage;
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
                    NgxsStoragePluginModule.forRoot(),
                    OAuthModule.forRoot(),
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
    static forTest({ baseHref = '/' } = {}) {
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
    static forRoot(options = {}) {
        var _a;
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
                    provide: 'CORE_OPTIONS',
                    useValue: options,
                },
                {
                    provide: CORE_OPTIONS,
                    useFactory: coreOptionsFactory,
                    deps: ['CORE_OPTIONS'],
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useExisting: ApiInterceptor,
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [OAuthConfigurationHandler],
                    useFactory: noop,
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
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [RoutesHandler],
                    useFactory: noop,
                },
                { provide: OAuthStorage, useFactory: storageFactory },
                {
                    provide: NGXS_STORAGE_PLUGIN_OPTIONS,
                    useValue: Object.assign(Object.assign({ storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: ngxsStoragePluginSerialize, afterDeserialize: ngxsStoragePluginSerialize }, options.ngxsStoragePluginOptions), { key: [...(((_a = options.ngxsStoragePluginOptions) === null || _a === void 0 ? void 0 : _a.key) || []), 'SessionState'] }),
                },
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
function ngxsStoragePluginSerialize(data) {
    return data;
}

class AuthGuard {
    constructor(oauthService, injector) {
        this.oauthService = oauthService;
        this.injector = injector;
    }
    canActivate(_, state) {
        const router = this.injector.get(Router);
        const hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        router.navigate(['/account/login'], { state: { redirectUrl: state.url } });
        return true;
    }
}
AuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(INJECTOR)); }, token: AuthGuard, providedIn: "root" });
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthGuard.ctorParameters = () => [
    { type: OAuthService },
    { type: Injector }
];

class PermissionGuard {
    constructor(router, routes, store) {
        this.router = router;
        this.routes = routes;
        this.store = store;
    }
    canActivate(route, state) {
        let { requiredPolicy } = route.data || {};
        if (!requiredPolicy) {
            const routeFound = findRoute(this.routes, getRoutePath(this.router, state.url));
            requiredPolicy = routeFound === null || routeFound === void 0 ? void 0 : routeFound.requiredPolicy;
        }
        if (!requiredPolicy)
            return of(true);
        return this.store.select(ConfigState.getGrantedPolicy(requiredPolicy)).pipe(tap(access => {
            if (!access) {
                this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        }));
    }
}
PermissionGuard.ɵprov = ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(ɵɵinject(Router), ɵɵinject(RoutesService), ɵɵinject(Store)); }, token: PermissionGuard, providedIn: "root" });
PermissionGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionGuard.ctorParameters = () => [
    { type: Router },
    { type: RoutesService },
    { type: Store }
];

class ListResultDto {
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
class PagedResultDto extends ListResultDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class LimitedResultRequestDto {
    constructor(initialValues = {}) {
        this.maxResultCount = 10;
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
class PagedResultRequestDto extends LimitedResultRequestDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class PagedAndSortedResultRequestDto extends PagedResultRequestDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class EntityDto {
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
class CreationAuditedEntityDto extends EntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class CreationAuditedEntityWithUserDto extends CreationAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class AuditedEntityDto extends CreationAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class AuditedEntityWithUserDto extends AuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class FullAuditedEntityDto extends AuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class FullAuditedEntityWithUserDto extends FullAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleObject {
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}
class ExtensibleEntityDto extends ExtensibleObject {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleCreationAuditedEntityDto extends ExtensibleEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleAuditedEntityDto extends ExtensibleCreationAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleAuditedEntityWithUserDto extends ExtensibleAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleCreationAuditedEntityWithUserDto extends ExtensibleCreationAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleFullAuditedEntityDto extends ExtensibleAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}
class ExtensibleFullAuditedEntityWithUserDto extends ExtensibleFullAuditedEntityDto {
    constructor(initialValues = {}) {
        super(initialValues);
    }
}

class FindTenantResultDto {
    constructor(initialValues = {}) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
                this[key] = initialValues[key];
            }
        }
    }
}

class ApplicationConfigurationService {
    constructor(rest, store) {
        this.rest = rest;
        this.store = store;
    }
    get apiName() {
        return this.store.selectSnapshot(ConfigState.getDeep('environment.application.name'));
    }
    getConfiguration() {
        const request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
ApplicationConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
ApplicationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ApplicationConfigurationService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];

class ConfigStateService {
    constructor(store) {
        this.store = store;
    }
    getAll() {
        return this.store.selectSnapshot(ConfigState.getAll);
    }
    getApplicationInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    getOne(...args) {
        return this.store.selectSnapshot(ConfigState.getOne(...args));
    }
    getDeep(...args) {
        return this.store.selectSnapshot(ConfigState.getDeep(...args));
    }
    getApiUrl(...args) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(...args));
    }
    getFeature(...args) {
        return this.store.selectSnapshot(ConfigState.getFeature(...args));
    }
    getSetting(...args) {
        return this.store.selectSnapshot(ConfigState.getSetting(...args));
    }
    getSettings(...args) {
        return this.store.selectSnapshot(ConfigState.getSettings(...args));
    }
    getGrantedPolicy(...args) {
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy(...args));
    }
    getLocalization(...args) {
        return this.store.selectSnapshot(ConfigState.getLocalization(...args));
    }
    getLocalizationResource(...args) {
        return this.store.selectSnapshot(ConfigState.getLocalizationResource(...args));
    }
    dispatchGetAppConfiguration() {
        return this.store.dispatch(new GetAppConfiguration());
    }
    dispatchSetEnvironment(...args) {
        return this.store.dispatch(new SetEnvironment(...args));
    }
}
ConfigStateService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(ɵɵinject(Store)); }, token: ConfigStateService, providedIn: "root" });
ConfigStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConfigStateService.ctorParameters = () => [
    { type: Store }
];

class ContentProjectionService {
    constructor(injector) {
        this.injector = injector;
    }
    projectContent(projectionStrategy, injector = this.injector) {
        return projectionStrategy.injectContent(injector);
    }
}
ContentProjectionService.ɵprov = ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(ɵɵinject(INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
ContentProjectionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ContentProjectionService.ctorParameters = () => [
    { type: Injector }
];

function getShortDateFormat(configStateService) {
    const dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
    return dateTimeFormat.shortDatePattern;
}
function getShortTimeFormat(configStateService) {
    const dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
    return dateTimeFormat.shortTimePattern.replace('tt', 'a');
}
function getShortDateShortTimeFormat(configStateService) {
    const dateTimeFormat = configStateService.getDeep('localization.currentCulture.dateTimeFormat');
    return `${dateTimeFormat.shortDatePattern} ${dateTimeFormat.shortTimePattern.replace('tt', 'a')}`;
}

class LazyModuleFactory extends NgModuleFactory {
    constructor(moduleWithProviders) {
        super();
        this.moduleWithProviders = moduleWithProviders;
    }
    get moduleType() {
        return this.moduleWithProviders.ngModule;
    }
    create(parentInjector) {
        const injector = Injector.create({
            parent: parentInjector,
            providers: this.moduleWithProviders.providers,
        });
        const compiler = injector.get(Compiler);
        const factory = compiler.compileModuleSync(this.moduleType);
        return factory.create(injector);
    }
}

function downloadBlob(blob, filename) {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
    }));
    document.body.removeChild(link);
}

function isNumber(value) {
    /* tslint:disable-next-line:triple-equals */
    return value == Number(value);
}

function mapEnumToOptions(_enum) {
    const options = [];
    for (const member in _enum)
        if (!isNumber(member))
            options.push({
                key: member,
                value: _enum[member],
            });
    return options;
}

// tslint:disable: no-bitwise
function uuid(a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
function generateHash(value) {
    let hashed = 0;
    let charCode;
    for (let i = 0; i < value.length; i++) {
        charCode = value.charCodeAt(i);
        hashed = (hashed << 5) - hashed + charCode;
        hashed |= 0;
    }
    return hashed;
}
function generatePassword(length = 8) {
    length = Math.min(Math.max(4, length), 128);
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specials = '!@#$%&*()_+{}<>?[]./';
    const all = lowers + uppers + numbers + specials;
    const getRandom = (chrSet) => chrSet[Math.floor(Math.random() * chrSet.length)];
    const password = Array({ length });
    password[0] = getRandom(lowers);
    password[1] = getRandom(uppers);
    password[2] = getRandom(numbers);
    password[3] = getRandom(specials);
    for (let i = 4; i < length; i++) {
        password[i] = getRandom(all);
    }
    return password.sort(() => 0.5 - Math.random()).join('');
}

class CrossOriginStrategy {
    constructor(crossorigin, integrity) {
        this.crossorigin = crossorigin;
        this.integrity = integrity;
    }
    setCrossOrigin(element) {
        if (this.integrity)
            element.setAttribute('integrity', this.integrity);
        element.setAttribute('crossorigin', this.crossorigin);
    }
}
const CROSS_ORIGIN_STRATEGY = {
    Anonymous(integrity) {
        return new CrossOriginStrategy('anonymous', integrity);
    },
    UseCredentials(integrity) {
        return new CrossOriginStrategy('use-credentials', integrity);
    },
};

class DomStrategy {
    constructor(target = document.head, position = 'beforeend') {
        this.target = target;
        this.position = position;
    }
    insertElement(element) {
        this.target.insertAdjacentElement(this.position, element);
    }
}
const DOM_STRATEGY = {
    AfterElement(element) {
        return new DomStrategy(element, 'afterend');
    },
    AppendToBody() {
        return new DomStrategy(document.body, 'beforeend');
    },
    AppendToHead() {
        return new DomStrategy(document.head, 'beforeend');
    },
    BeforeElement(element) {
        return new DomStrategy(element, 'beforebegin');
    },
    PrependToHead() {
        return new DomStrategy(document.head, 'afterbegin');
    },
};

function fromLazyLoad(element, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
    crossOriginStrategy.setCrossOrigin(element);
    domStrategy.insertElement(element);
    return new Observable((observer) => {
        element.onload = (event) => {
            clearCallbacks(element);
            observer.next(event);
            observer.complete();
        };
        const handleError = createErrorHandler(observer, element);
        element.onerror = handleError;
        element.onabort = handleError;
        element.onemptied = handleError;
        element.onstalled = handleError;
        element.onsuspend = handleError;
        return () => {
            clearCallbacks(element);
            observer.complete();
        };
    });
}
function createErrorHandler(observer, element) {
    /* tslint:disable-next-line:only-arrow-functions */
    return function (event) {
        clearCallbacks(element);
        element.parentNode.removeChild(element);
        observer.error(event);
    };
}
function clearCallbacks(element) {
    element.onload = null;
    element.onerror = null;
    element.onabort = null;
    element.onemptied = null;
    element.onstalled = null;
    element.onsuspend = null;
}

// tslint:disable: max-line-length
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * @deprecated no longer working, please use SubscriptionService (https://docs.abp.io/en/abp/latest/UI/Angular/Subscription-Service) instead.
 */
const takeUntilDestroy = (componentInstance, destroyMethodName = 'ngOnDestroy') => (source) => {
    const originalDestroy = componentInstance[destroyMethodName];
    if (isFunction(originalDestroy) === false) {
        throw new Error(`${componentInstance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
    }
    if (!componentInstance['__takeUntilDestroy']) {
        componentInstance['__takeUntilDestroy'] = new Subject();
        componentInstance[destroyMethodName] = function () {
            // tslint:disable-next-line: no-unused-expression
            isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
            componentInstance['__takeUntilDestroy'].next(true);
            componentInstance['__takeUntilDestroy'].complete();
        };
    }
    return source.pipe(takeUntil(componentInstance['__takeUntilDestroy']));
};

class DomInsertionService {
    constructor() {
        this.inserted = new Set();
    }
    insertContent(contentStrategy) {
        const hash = generateHash(contentStrategy.content);
        if (this.inserted.has(hash))
            return;
        const element = contentStrategy.insertElement();
        this.inserted.add(hash);
        return element;
    }
    removeContent(element) {
        const hash = generateHash(element.textContent);
        this.inserted.delete(hash);
        element.parentNode.removeChild(element);
    }
    has(content) {
        const hash = generateHash(content);
        return this.inserted.has(hash);
    }
}
DomInsertionService.ɵprov = ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });
DomInsertionService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];

class LazyLoadService {
    constructor() {
        this.loaded = new Map();
    }
    load(strategy, retryTimes, retryDelay) {
        if (this.loaded.has(strategy.path))
            return of(new CustomEvent('load'));
        return strategy.createStream().pipe(retryWhen(error$ => concat(error$.pipe(delay(retryDelay), take(retryTimes)), throwError(new CustomEvent('error')))), tap(() => this.loaded.set(strategy.path, strategy.element)), delay(100), shareReplay({ bufferSize: 1, refCount: true }));
    }
    remove(path) {
        const element = this.loaded.get(path);
        if (!element)
            return false;
        element.parentNode.removeChild(element);
        this.loaded.delete(path);
        return true;
    }
}
LazyLoadService.ɵprov = ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
LazyLoadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];

const LIST_QUERY_DEBOUNCE_TIME = new InjectionToken('LIST_QUERY_DEBOUNCE_TIME');

class ListService {
    constructor(delay) {
        this.delay = delay;
        this._filter = '';
        this._maxResultCount = 10;
        this._page = 0;
        this._sortKey = '';
        this._sortOrder = '';
        this._query$ = new ReplaySubject(1);
        this._isLoading$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
        this.get = () => {
            this._query$.next({
                filter: this._filter || undefined,
                maxResultCount: this._maxResultCount,
                skipCount: this._page * this._maxResultCount,
                sorting: this._sortOrder ? `${this._sortKey} ${this._sortOrder}` : undefined,
            });
        };
        this.get();
    }
    set filter(value) {
        if (this._filter !== value)
            this._page = 0;
        this._filter = value;
        this.get();
    }
    get filter() {
        return this._filter;
    }
    set maxResultCount(value) {
        this._maxResultCount = value;
        this.get();
    }
    get maxResultCount() {
        return this._maxResultCount;
    }
    set page(value) {
        if (value === this._page)
            return;
        this._page = value;
        this.get();
    }
    get page() {
        return this._page;
    }
    set sortKey(value) {
        this._sortKey = value;
        this.get();
    }
    get sortKey() {
        return this._sortKey;
    }
    set sortOrder(value) {
        this._sortOrder = value;
        this.get();
    }
    get sortOrder() {
        return this._sortOrder;
    }
    get query$() {
        return this._query$
            .asObservable()
            .pipe(debounceTime(this.delay || 300), shareReplay({ bufferSize: 1, refCount: true }));
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    hookToQuery(streamCreatorCallback) {
        this._isLoading$.next(true);
        return this.query$.pipe(switchMap(query => streamCreatorCallback(query).pipe(catchError(() => of(null)))), filter(Boolean), tap(() => this._isLoading$.next(false)), shareReplay({ bufferSize: 1, refCount: true }), takeUntil(this.destroy$));
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
}
ListService.decorators = [
    { type: Injectable }
];
ListService.ctorParameters = () => [
    { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [LIST_QUERY_DEBOUNCE_TIME,] }] }
];

class ProfileStateService {
    constructor(store) {
        this.store = store;
    }
    getProfile() {
        return this.store.selectSnapshot(ProfileState.getProfile);
    }
    dispatchGetProfile() {
        return this.store.dispatch(new GetProfile());
    }
    dispatchUpdateProfile(...args) {
        return this.store.dispatch(new UpdateProfile(...args));
    }
    dispatchChangePassword(...args) {
        return this.store.dispatch(new ChangePassword(...args));
    }
}
ProfileStateService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(ɵɵinject(Store)); }, token: ProfileStateService, providedIn: "root" });
ProfileStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ProfileStateService.ctorParameters = () => [
    { type: Store }
];

class SessionStateService {
    constructor(store) {
        this.store = store;
    }
    getLanguage() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    getTenant() {
        return this.store.selectSnapshot(SessionState.getTenant);
    }
    getSessionDetail() {
        return this.store.selectSnapshot(SessionState.getSessionDetail);
    }
    dispatchSetLanguage(...args) {
        return this.store.dispatch(new SetLanguage(...args));
    }
    dispatchSetTenant(...args) {
        return this.store.dispatch(new SetTenant(...args));
    }
    dispatchSetRemember(...args) {
        return this.store.dispatch(new SetRemember(...args));
    }
    dispatchModifyOpenedTabCount(...args) {
        return this.store.dispatch(new ModifyOpenedTabCount(...args));
    }
}
SessionStateService.ɵprov = ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(ɵɵinject(Store)); }, token: SessionStateService, providedIn: "root" });
SessionStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SessionStateService.ctorParameters = () => [
    { type: Store }
];

const trackBy = (key) => (_, item) => item[key];
const trackByDeep = (...keys) => (_, item) => keys.reduce((acc, key) => acc[key], item);
class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
}
TrackByService.ɵprov = ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
TrackByService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];

class ContainerStrategy {
    constructor(containerRef) {
        this.containerRef = containerRef;
    }
    prepare() { }
}
class ClearContainerStrategy extends ContainerStrategy {
    getIndex() {
        return 0;
    }
    prepare() {
        this.containerRef.clear();
    }
}
class InsertIntoContainerStrategy extends ContainerStrategy {
    constructor(containerRef, index) {
        super(containerRef);
        this.index = index;
    }
    getIndex() {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    }
}
const CONTAINER_STRATEGY = {
    Clear(containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    Append(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    Prepend(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    Insert(containerRef, index) {
        return new InsertIntoContainerStrategy(containerRef, index);
    },
};

class ContentSecurityStrategy {
    constructor(nonce) {
        this.nonce = nonce;
    }
}
class LooseContentSecurityStrategy extends ContentSecurityStrategy {
    constructor(nonce) {
        super(nonce);
    }
    applyCSP(element) {
        element.setAttribute('nonce', this.nonce);
    }
}
class NoContentSecurityStrategy extends ContentSecurityStrategy {
    constructor() {
        super();
    }
    applyCSP(_) { }
}
const CONTENT_SECURITY_STRATEGY = {
    Loose(nonce) {
        return new LooseContentSecurityStrategy(nonce);
    },
    None() {
        return new NoContentSecurityStrategy();
    },
};

class ContentStrategy {
    constructor(content, domStrategy = DOM_STRATEGY.AppendToHead(), contentSecurityStrategy = CONTENT_SECURITY_STRATEGY.None()) {
        this.content = content;
        this.domStrategy = domStrategy;
        this.contentSecurityStrategy = contentSecurityStrategy;
    }
    insertElement() {
        const element = this.createElement();
        this.contentSecurityStrategy.applyCSP(element);
        this.domStrategy.insertElement(element);
        return element;
    }
}
class StyleContentStrategy extends ContentStrategy {
    createElement() {
        const element = document.createElement('style');
        element.textContent = this.content;
        return element;
    }
}
class ScriptContentStrategy extends ContentStrategy {
    createElement() {
        const element = document.createElement('script');
        element.textContent = this.content;
        return element;
    }
}
const CONTENT_STRATEGY = {
    AppendScriptToBody(content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToBody());
    },
    AppendScriptToHead(content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    AppendStyleToHead(content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    PrependStyleToHead(content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.PrependToHead());
    },
};

class ContextStrategy {
    constructor(context) {
        this.context = context;
    }
    /* tslint:disable-next-line:no-unused-variable */
    setContext(componentRef) {
        return this.context;
    }
}
class NoContextStrategy extends ContextStrategy {
    constructor() {
        super(undefined);
    }
}
class ComponentContextStrategy extends ContextStrategy {
    setContext(componentRef) {
        Object.keys(this.context).forEach(key => (componentRef.instance[key] = this.context[key]));
        componentRef.changeDetectorRef.detectChanges();
        return this.context;
    }
}
class TemplateContextStrategy extends ContextStrategy {
    setContext() {
        return this.context;
    }
}
const CONTEXT_STRATEGY = {
    None() {
        return new NoContextStrategy();
    },
    Component(context) {
        return new ComponentContextStrategy(context);
    },
    Template(context) {
        return new TemplateContextStrategy(context);
    },
};

class LoadingStrategy {
    constructor(path, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
        this.path = path;
        this.domStrategy = domStrategy;
        this.crossOriginStrategy = crossOriginStrategy;
    }
    createStream() {
        this.element = this.createElement();
        return of(null).pipe(switchMap(() => fromLazyLoad(this.element, this.domStrategy, this.crossOriginStrategy)));
    }
}
class ScriptLoadingStrategy extends LoadingStrategy {
    constructor(src, domStrategy, crossOriginStrategy) {
        super(src, domStrategy, crossOriginStrategy);
    }
    createElement() {
        const element = document.createElement('script');
        element.src = this.path;
        return element;
    }
}
class StyleLoadingStrategy extends LoadingStrategy {
    constructor(href, domStrategy, crossOriginStrategy) {
        super(href, domStrategy, crossOriginStrategy);
    }
    createElement() {
        const element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = this.path;
        return element;
    }
}
const LOADING_STRATEGY = {
    AppendAnonymousScriptToBody(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousStyleToHead(src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousStyleToHead(src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
};

class ProjectionStrategy {
    constructor(content) {
        this.content = content;
    }
}
class ComponentProjectionStrategy extends ProjectionStrategy {
    constructor(component, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(component);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    injectContent(injector) {
        this.containerStrategy.prepare();
        const resolver = injector.get(ComponentFactoryResolver);
        const factory = resolver.resolveComponentFactory(this.content);
        const componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
        this.contextStrategy.setContext(componentRef);
        return componentRef;
    }
}
class RootComponentProjectionStrategy extends ProjectionStrategy {
    constructor(component, contextStrategy = CONTEXT_STRATEGY.None(), domStrategy = DOM_STRATEGY.AppendToBody()) {
        super(component);
        this.contextStrategy = contextStrategy;
        this.domStrategy = domStrategy;
    }
    injectContent(injector) {
        const appRef = injector.get(ApplicationRef);
        const resolver = injector.get(ComponentFactoryResolver);
        const componentRef = resolver
            .resolveComponentFactory(this.content)
            .create(injector);
        this.contextStrategy.setContext(componentRef);
        appRef.attachView(componentRef.hostView);
        const element = componentRef.hostView.rootNodes[0];
        this.domStrategy.insertElement(element);
        return componentRef;
    }
}
class TemplateProjectionStrategy extends ProjectionStrategy {
    constructor(templateRef, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(templateRef);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    injectContent() {
        this.containerStrategy.prepare();
        const embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
        embeddedViewRef.detectChanges();
        return embeddedViewRef;
    }
}
const PROJECTION_STRATEGY = {
    AppendComponentToBody(component, context) {
        return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
    },
    AppendComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    AppendTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    PrependComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    PrependTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    ProjectComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    ProjectTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
};

function validateMinAge({ age = 18 } = {}) {
    return (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        return isValidMinAge(control.value, age) ? null : { minAge: { age } };
    };
}
function isValidMinAge(value, minAge) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - minAge);
    date.setHours(23, 59, 59, 999);
    return Number(new Date(value)) <= date.valueOf();
}

function validateCreditCard() {
    return (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        return isValidCreditCard(String(control.value)) ? null : { creditCard: true };
    };
}
function isValidCreditCard(value) {
    value = value.replace(/[ -]/g, '');
    if (!/^[0-9]{13,19}$/.test(value))
        return false;
    let checksum = 0;
    let multiplier = 1;
    for (let i = value.length; i > 0; i--) {
        const digit = Number(value[i - 1]) * multiplier;
        /* tslint:disable-next-line:no-bitwise */
        checksum += (digit % 10) + ~~(digit / 10);
        multiplier = (multiplier * 2) % 3;
    }
    return checksum % 10 === 0;
}

function validateRange({ maximum = Infinity, minimum = 0 } = {}) {
    return (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        const value = Number(control.value);
        return getMinError(value, minimum, maximum) || getMaxError(value, maximum, minimum);
    };
}
function getMaxError(value, max, min) {
    return value > max ? { range: { max, min } } : null;
}
function getMinError(value, min, max) {
    return value < min ? { range: { min, max } } : null;
}

function validateRequired({ allowEmptyStrings } = {}) {
    return (control) => {
        return control.pristine || isValidRequired(control.value, allowEmptyStrings)
            ? null
            : { required: true };
    };
}
function isValidRequired(value, allowEmptyStrings) {
    if (value || value === 0 || value === false)
        return true;
    if (allowEmptyStrings && value === '')
        return true;
    return false;
}

function validateStringLength({ maximumLength = Infinity, minimumLength = 0, } = {}) {
    return (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        const value = String(control.value);
        return getMinLengthError(value, minimumLength) || getMaxLengthError(value, maximumLength);
    };
}
function getMaxLengthError(value, requiredLength) {
    return value.length > requiredLength ? { maxlength: { requiredLength } } : null;
}
function getMinLengthError(value, requiredLength) {
    return value.length < requiredLength ? { minlength: { requiredLength } } : null;
}

function validateUrl() {
    return (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        return isValidUrl(control.value) ? null : { url: true };
    };
}
function isValidUrl(value) {
    if (/^http(s)?:\/\/[^/]/.test(value) || /^ftp:\/\/[^/]/.test(value)) {
        const a = document.createElement('a');
        a.href = value;
        return !!a.host;
    }
    return false;
}

const ɵ0 = () => Validators.email;
const AbpValidators = {
    creditCard: validateCreditCard,
    emailAddress: ɵ0,
    minAge: validateMinAge,
    range: validateRange,
    required: validateRequired,
    stringLength: validateStringLength,
    url: validateUrl,
};

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_FLOW_STRATEGY, AbpValidators, AbstractNavTreeService, AbstractNgModelComponent, AbstractTreeService, AddReplaceableComponent, ApiInterceptor, ApplicationConfigurationService, AuditedEntityDto, AuditedEntityWithUserDto, AuthCodeFlowStrategy, AuthFlowStrategy, AuthGuard, AuthPasswordFlowStrategy, AuthService, AutofocusDirective, BaseCoreModule, BaseTreeNode, CONTAINER_STRATEGY, CONTENT_SECURITY_STRATEGY, CONTENT_STRATEGY, CONTEXT_STRATEGY, CORE_OPTIONS, CROSS_ORIGIN_STRATEGY, ChangePassword, ClearContainerStrategy, ComponentContextStrategy, ComponentProjectionStrategy, ConfigPlugin, ConfigState, ConfigStateService, ContainerStrategy, ContentProjectionService, ContentSecurityStrategy, ContentStrategy, ContextStrategy, CoreModule, CreationAuditedEntityDto, CreationAuditedEntityWithUserDto, CrossOriginStrategy, DOM_STRATEGY, DomInsertionService, DomStrategy, DynamicLayoutComponent, EllipsisDirective, EntityDto, ExtensibleAuditedEntityDto, ExtensibleAuditedEntityWithUserDto, ExtensibleCreationAuditedEntityDto, ExtensibleCreationAuditedEntityWithUserDto, ExtensibleEntityDto, ExtensibleFullAuditedEntityDto, ExtensibleFullAuditedEntityWithUserDto, ExtensibleObject, FindTenantResultDto, ForDirective, FormSubmitDirective, FullAuditedEntityDto, FullAuditedEntityWithUserDto, GetAppConfiguration, GetProfile, InitDirective, InputEventDebounceDirective, InsertIntoContainerStrategy, InternalStore, LIST_QUERY_DEBOUNCE_TIME, LOADING_STRATEGY, LazyLoadService, LazyModuleFactory, LimitedResultRequestDto, ListResultDto, ListService, LoadingStrategy, LocalizationModule, LocalizationPipe, LocalizationService, LooseContentSecurityStrategy, MockLocalizationPipe, ModifyOpenedTabCount, MultiTenancyService, NGXS_CONFIG_PLUGIN_OPTIONS, NoContentSecurityStrategy, NoContextStrategy, PROJECTION_STRATEGY, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ProjectionStrategy, ReplaceableComponentsService, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, RestOccurError, RestService, RootComponentProjectionStrategy, RootCoreModule, RouterOutletComponent, RoutesService, ScriptContentStrategy, ScriptLoadingStrategy, SessionState, SessionStateService, SetEnvironment, SetLanguage, SetRemember, SetTenant, SettingTabsService, SortPipe, StartLoader, StopLoader, StopPropagationDirective, StyleContentStrategy, StyleLoadingStrategy, SubscriptionService, TemplateContextStrategy, TemplateProjectionStrategy, TestCoreModule, TrackByService, UpdateProfile, VisibilityDirective, checkAccessToken, clearOAuthStorage, coreOptionsFactory, createLocalizationPipeKeyGenerator, createLocalizer, createLocalizerWithFallback, createMapFromList, createTokenParser, createTreeFromList, deepMerge, downloadBlob, exists, findRoute, fromLazyLoad, generateHash, generatePassword, getInitialData, getLocaleDirection, getRemoteEnv, getRoutePath, getShortDateFormat, getShortDateShortTimeFormat, getShortTimeFormat, interpolate, isArray, isNullOrUndefined, isNumber, isObject, isObjectAndNotArray, isUndefinedOrEmptyString, localeInitializer, mapEnumToOptions, ngxsStoragePluginSerialize, noop, oAuthStorage, parseTenantFromUrl, pushValueTo, registerLocale, reloadRoute, storageFactory, takeUntilDestroy, trackBy, trackByDeep, uuid, validateCreditCard, validateMinAge, validateRange, validateRequired, validateStringLength, validateUrl, ɵ0, oAuthStorage as ɵa, AbstractNgModelComponent as ɵb, RestService as ɵba, CORE_OPTIONS as ɵbb, coreOptionsFactory as ɵbc, GetProfile as ɵbe, UpdateProfile as ɵbf, ChangePassword as ɵbg, SessionState as ɵbi, SetLanguage as ɵbj, SetTenant as ɵbk, ModifyOpenedTabCount as ɵbl, SetRemember as ɵbm, ConfigState as ɵbo, GetAppConfiguration as ɵbp, SetEnvironment as ɵbq, LocaleId as ɵbs, LocaleProvider as ɵbt, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbu, ConfigPlugin as ɵbv, ApiInterceptor as ɵbw, OAuthConfigurationHandler as ɵbx, noop as ɵby, getInitialData as ɵbz, AutofocusDirective as ɵc, localeInitializer as ɵca, RoutesHandler as ɵcb, AbstractTreeService as ɵcc, AbstractNavTreeService as ɵcd, RoutesService as ɵce, DynamicLayoutComponent as ɵd, SubscriptionService as ɵe, LocalizationService as ɵf, ReplaceableComponentsService as ɵg, EllipsisDirective as ɵh, ForDirective as ɵi, FormSubmitDirective as ɵj, InitDirective as ɵk, InputEventDebounceDirective as ɵl, PermissionDirective as ɵm, ReplaceableRouteContainerComponent as ɵn, ReplaceableTemplateDirective as ɵo, RouterOutletComponent as ɵp, SortPipe as ɵq, StopPropagationDirective as ɵr, VisibilityDirective as ɵs, LocalizationPipe as ɵt, MockLocalizationPipe as ɵu, ReplaceableComponentsState as ɵv, AddReplaceableComponent as ɵw, ProfileState as ɵy, ProfileService as ɵz };
//# sourceMappingURL=abp-ng.core.js.map
