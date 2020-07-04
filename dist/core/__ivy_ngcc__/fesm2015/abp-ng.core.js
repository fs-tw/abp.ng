import { __decorate, __metadata, __rest, __param, __awaiter } from 'tslib';
import { ChangeDetectorRef, Input, Component, Injector, Injectable, ɵɵdefineInjectable, ɵɵinject, Optional, SkipSelf, Directive, ElementRef, EventEmitter, Output, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, NgModuleFactory, Compiler, InjectionToken, Self, Inject, Renderer2, ComponentFactoryResolver, Pipe, NgModule, INJECTOR, NgZone, LOCALE_ID, APP_INITIALIZER, ApplicationRef } from '@angular/core';
import { PRIMARY_OUTLET, ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { ofActionSuccessful, Action, Selector, State, Store, Actions, createSelector, actionMatcher, InitState, UpdateState, setValue, NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { fromEvent, of, throwError, Subject, BehaviorSubject, Observable, noop as noop$1, from, concat, ReplaySubject } from 'rxjs';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { take, tap, switchMap, catchError, takeUntil, distinctUntilChanged, debounceTime, filter, finalize, map, retryWhen, delay, shareReplay } from 'rxjs/operators';
import snq from 'snq';
import { OAuthService, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { registerLocaleData, CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxsRouterPluginModule, Navigate } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import compare from 'just-compare';
import clone from 'just-clone';

// Not an abstract class on purpose. Do not change!
// tslint:disable-next-line: use-component-selector
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'angular-oauth2-oidc';
import * as ɵngcc2 from '@ngxs/store';
import * as ɵngcc3 from '@angular/common/http';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '@angular/router';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from '@ngxs/router-plugin';
import * as ɵngcc8 from '@ngxs/storage-plugin';

function DynamicLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DynamicLayoutComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "router-outlet");
} }
function DynamicLayoutComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function DynamicLayoutComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DynamicLayoutComponent_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 3);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngComponentOutlet", ctx_r4.layout);
} }
function ReplaceableRouteContainerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
let AbstractNgModelComponent = class AbstractNgModelComponent {
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
};
AbstractNgModelComponent.ɵfac = function AbstractNgModelComponent_Factory(t) { return new (t || AbstractNgModelComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector)); };
AbstractNgModelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AbstractNgModelComponent, selectors: [["ng-component"]], inputs: { valueFn: "valueFn", valueLimitFn: "valueLimitFn", value: "value", disabled: "disabled", readonly: "readonly" }, decls: 0, vars: 0, template: function AbstractNgModelComponent_Template(rf, ctx) { }, encapsulation: 2 });
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AbstractNgModelComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AbstractNgModelComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AbstractNgModelComponent.prototype, "valueFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], AbstractNgModelComponent.prototype, "valueLimitFn", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], AbstractNgModelComponent.prototype, "value", null);
AbstractNgModelComponent = __decorate([ __metadata("design:paramtypes", [Injector])
], AbstractNgModelComponent);

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

/**
 * @see usage: https://github.com/abpframework/abp/pull/2522#issue-358333183
 */
class AddReplaceableComponent {
    constructor(payload) {
        this.payload = payload;
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
            const { sessionDetail } = this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} };
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
SessionState.ɵfac = function SessionState_Factory(t) { return new (t || SessionState)(ɵngcc0.ɵɵinject(ɵngcc1.OAuthService), ɵngcc0.ɵɵinject(ɵngcc2.Store), ɵngcc0.ɵɵinject(ɵngcc2.Actions)); };
SessionState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: SessionState, factory: SessionState.ɵfac });
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
    }), __metadata("design:paramtypes", [OAuthService, Store, Actions])
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
            interpolateParams = interpolateParams.filter(params => params != null);
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach(param => {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                });
            }
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
            let defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            document.documentElement.setAttribute('lang', configuration.localization.currentCulture.cultureName);
            return this.store.selectSnapshot(SessionState.getLanguage)
                ? of(null)
                : dispatch(new SetLanguage(defaultLang, false));
        }), catchError((err) => {
            dispatch(new RestOccurError(err));
            return throwError(err);
        }));
    }
    setEnvironment({ patchState }, { environment }) {
        return patchState({
            environment,
        });
    }
};
ConfigState.ɵfac = function ConfigState_Factory(t) { return new (t || ConfigState)(ɵngcc0.ɵɵinject(ɵngcc3.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
ConfigState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ConfigState, factory: ConfigState.ɵfac });
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
    }), __metadata("design:paramtypes", [HttpClient, Store])
], ConfigState);

function isFunction(value) {
    return typeof value === 'function';
}
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
        return this._flat$.value.filter(item => !setOrMap.has(item[this.id]) && !setOrMap.has(item[this.parentId]));
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
        const flatItems = this.filterWith(set);
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
let AbstractNavTreeService = class AbstractNavTreeService extends AbstractTreeService {
    constructor(actions, store) {
        super();
        this.actions = actions;
        this.store = store;
        this.id = 'name';
        this.parentId = 'parentName';
        this.hide = (item) => item.invisible || !this.isGranted(item);
        this.sort = (a, b) => {
            if (!a.order)
                return 1;
            if (!b.order)
                return -1;
            return a.order - b.order;
        };
        this.actions
            .pipe(takeUntilDestroy(this), ofActionSuccessful(GetAppConfiguration))
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
    ngOnDestroy() { }
};
AbstractNavTreeService.ɵfac = function AbstractNavTreeService_Factory(t) { return new (t || AbstractNavTreeService)(ɵngcc0.ɵɵinject(ɵngcc2.Actions), ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
AbstractNavTreeService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: AbstractNavTreeService, factory: AbstractNavTreeService.ɵfac });
AbstractNavTreeService = __decorate([ __metadata("design:paramtypes", [Actions, Store])
], AbstractNavTreeService);
let RoutesService = class RoutesService extends AbstractNavTreeService {
};
RoutesService.ɵfac = function RoutesService_Factory(t) { return ɵRoutesService_BaseFactory(t || RoutesService); };
RoutesService.ɵprov = ɵɵdefineInjectable({ factory: function RoutesService_Factory() { return new RoutesService(ɵɵinject(Actions), ɵɵinject(Store)); }, token: RoutesService, providedIn: "root" });
let SettingTabsService = class SettingTabsService extends AbstractNavTreeService {
};
SettingTabsService.ɵfac = function SettingTabsService_Factory(t) { return ɵSettingTabsService_BaseFactory(t || SettingTabsService); };
SettingTabsService.ɵprov = ɵɵdefineInjectable({ factory: function SettingTabsService_Factory() { return new SettingTabsService(ɵɵinject(Actions), ɵɵinject(Store)); }, token: SettingTabsService, providedIn: "root" });

var ReplaceableComponentsState_1;
let ReplaceableComponentsState = ReplaceableComponentsState_1 = class ReplaceableComponentsState {
    static getAll({ replaceableComponents, }) {
        return replaceableComponents || [];
    }
    static getComponent(key) {
        const selector = createSelector([ReplaceableComponentsState_1], (state) => {
            return snq(() => state.replaceableComponents.find(component => component.key === key));
        });
        return selector;
    }
    replaceableComponentsAction({ getState, patchState }, { payload }) {
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
    }
};
ReplaceableComponentsState.ɵfac = function ReplaceableComponentsState_Factory(t) { return new (t || ReplaceableComponentsState)(); };
ReplaceableComponentsState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ReplaceableComponentsState, factory: ReplaceableComponentsState.ɵfac });
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
], ReplaceableComponentsState);

function findRoute(routes, path) {
    const node = routes.find(route => route.path === path);
    return node || path === '/'
        ? node
        : findRoute(routes, path
            .split('/')
            .slice(0, -1)
            .join('/'));
}
function getRoutePath(router) {
    const emptyGroup = { segments: [] };
    const primaryGroup = router.parseUrl(router.url).root.children[PRIMARY_OUTLET];
    return '/' + (primaryGroup || emptyGroup).segments.map(({ path }) => path).join('/');
}

let DynamicLayoutComponent = class DynamicLayoutComponent {
    constructor(injector, store, dynamicLayoutComponent) {
        this.store = store;
        if (dynamicLayoutComponent)
            return;
        const route = injector.get(ActivatedRoute);
        const router = injector.get(Router);
        const routes = injector.get(RoutesService);
        const layouts = {
            application: this.getComponent('Theme.ApplicationLayoutComponent'),
            account: this.getComponent('Theme.AccountLayoutComponent'),
            empty: this.getComponent('Theme.EmptyLayoutComponent'),
        };
        router.events.pipe(takeUntilDestroy(this)).subscribe(event => {
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
                this.layout = layouts[expectedLayout].component;
            }
        });
    }
    getComponent(key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    }
    ngOnDestroy() { }
};
DynamicLayoutComponent.ɵfac = function DynamicLayoutComponent_Factory(t) { return new (t || DynamicLayoutComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Store), ɵngcc0.ɵɵdirectiveInject(DynamicLayoutComponent, 12)); };
DynamicLayoutComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: DynamicLayoutComponent, selectors: [["abp-dynamic-layout"]], decls: 5, vars: 1, consts: [[4, "ngTemplateOutlet"], ["routerOutlet", ""], ["componentOutlet", ""], [4, "ngComponentOutlet"]], template: function DynamicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DynamicLayoutComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, DynamicLayoutComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, DynamicLayoutComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        const _r3 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.layout ? _r3 : _r1);
    } }, directives: [ɵngcc4.NgTemplateOutlet, ɵngcc5.RouterOutlet, ɵngcc4.NgComponentOutlet], encapsulation: 2 });
DynamicLayoutComponent = __decorate([ __param(2, Optional()), __param(2, SkipSelf()),
    __metadata("design:paramtypes", [Injector,
        Store,
        DynamicLayoutComponent])
], DynamicLayoutComponent);

let ReplaceableRouteContainerComponent = class ReplaceableRouteContainerComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
        this.componentKey = this.route.snapshot.data
            .replaceableComponent.key;
        this.store
            .select(ReplaceableComponentsState.getComponent(this.componentKey))
            .pipe(takeUntilDestroy(this), distinctUntilChanged())
            .subscribe((res = {}) => {
            this.externalComponent = res.component;
        });
    }
    ngOnDestroy() { }
};
ReplaceableRouteContainerComponent.ɵfac = function ReplaceableRouteContainerComponent_Factory(t) { return new (t || ReplaceableRouteContainerComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc5.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Store)); };
ReplaceableRouteContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ReplaceableRouteContainerComponent, selectors: [["abp-replaceable-route-container"]], decls: 1, vars: 1, consts: [[4, "ngComponentOutlet"]], template: function ReplaceableRouteContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ReplaceableRouteContainerComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngComponentOutlet", ctx.externalComponent || ctx.defaultComponent);
    } }, directives: [ɵngcc4.NgComponentOutlet], encapsulation: 2 });
ReplaceableRouteContainerComponent = __decorate([ __metadata("design:paramtypes", [ActivatedRoute, Store])
], ReplaceableRouteContainerComponent);

let RouterOutletComponent = class RouterOutletComponent {
};
RouterOutletComponent.ɵfac = function RouterOutletComponent_Factory(t) { return new (t || RouterOutletComponent)(); };
RouterOutletComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: RouterOutletComponent, selectors: [["abp-router-outlet"]], decls: 1, vars: 0, template: function RouterOutletComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "router-outlet");
    } }, directives: [ɵngcc5.RouterOutlet], encapsulation: 2 });

let AutofocusDirective = class AutofocusDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => this.elRef.nativeElement.focus(), this.delay);
    }
};
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AutofocusDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""]], inputs: { delay: ["autofocus", "delay"] } });
__decorate([
    Input('autofocus'),
    __metadata("design:type", Object)
], AutofocusDirective.prototype, "delay", void 0);
AutofocusDirective = __decorate([ __metadata("design:paramtypes", [ElementRef])
], AutofocusDirective);

let InputEventDebounceDirective = class InputEventDebounceDirective {
    constructor(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    ngOnInit() {
        fromEvent(this.el.nativeElement, 'input')
            .pipe(debounceTime(this.debounce), takeUntilDestroy(this))
            .subscribe((event) => {
            this.debounceEvent.emit(event);
        });
    }
    ngOnDestroy() { }
};
InputEventDebounceDirective.ɵfac = function InputEventDebounceDirective_Factory(t) { return new (t || InputEventDebounceDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
InputEventDebounceDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InputEventDebounceDirective, selectors: [["", "input.debounce", ""]], inputs: { debounce: "debounce" }, outputs: { debounceEvent: "input.debounce" } });
__decorate([
    Input(),
    __metadata("design:type", Object)
], InputEventDebounceDirective.prototype, "debounce", void 0);
__decorate([
    Output('input.debounce'),
    __metadata("design:type", Object)
], InputEventDebounceDirective.prototype, "debounceEvent", void 0);
InputEventDebounceDirective = __decorate([ __metadata("design:paramtypes", [ElementRef])
], InputEventDebounceDirective);

let EllipsisDirective = class EllipsisDirective {
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
};
EllipsisDirective.ɵfac = function EllipsisDirective_Factory(t) { return new (t || EllipsisDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
EllipsisDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: EllipsisDirective, selectors: [["", "abpEllipsis", ""]], hostVars: 7, hostBindings: function EllipsisDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("title", ctx.title);
        ɵngcc0.ɵɵstyleProp("max-width", ctx.maxWidth);
        ɵngcc0.ɵɵclassProp("abp-ellipsis-inline", ctx.inlineClass)("abp-ellipsis", ctx.class);
    } }, inputs: { enabled: ["abpEllipsisEnabled", "enabled"], title: "title", width: ["abpEllipsis", "width"] } });
__decorate([
    Input('abpEllipsis'),
    __metadata("design:type", String)
], EllipsisDirective.prototype, "width", void 0);
__decorate([
    HostBinding('title'),
    Input(),
    __metadata("design:type", String)
], EllipsisDirective.prototype, "title", void 0);
__decorate([
    Input('abpEllipsisEnabled'),
    __metadata("design:type", Object)
], EllipsisDirective.prototype, "enabled", void 0);
__decorate([
    HostBinding('class.abp-ellipsis-inline'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "inlineClass", null);
__decorate([
    HostBinding('class.abp-ellipsis'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "class", null);
__decorate([
    HostBinding('style.max-width'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], EllipsisDirective.prototype, "maxWidth", null);
EllipsisDirective = __decorate([ __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef])
], EllipsisDirective);

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
let ForDirective = class ForDirective {
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
};
ForDirective.ɵfac = function ForDirective_Factory(t) { return new (t || ForDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
ForDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ForDirective, selectors: [["", "abpFor", ""]], inputs: { items: ["abpForOf", "items"], orderBy: ["abpForOrderBy", "orderBy"], orderDir: ["abpForOrderDir", "orderDir"], filterBy: ["abpForFilterBy", "filterBy"], filterVal: ["abpForFilterVal", "filterVal"], trackBy: ["abpForTrackBy", "trackBy"], compareBy: ["abpForCompareBy", "compareBy"], emptyRef: ["abpForEmptyRef", "emptyRef"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input('abpForOf'),
    __metadata("design:type", Array)
], ForDirective.prototype, "items", void 0);
__decorate([
    Input('abpForOrderBy'),
    __metadata("design:type", String)
], ForDirective.prototype, "orderBy", void 0);
__decorate([
    Input('abpForOrderDir'),
    __metadata("design:type", String)
], ForDirective.prototype, "orderDir", void 0);
__decorate([
    Input('abpForFilterBy'),
    __metadata("design:type", String)
], ForDirective.prototype, "filterBy", void 0);
__decorate([
    Input('abpForFilterVal'),
    __metadata("design:type", Object)
], ForDirective.prototype, "filterVal", void 0);
__decorate([
    Input('abpForTrackBy'),
    __metadata("design:type", Object)
], ForDirective.prototype, "trackBy", void 0);
__decorate([
    Input('abpForCompareBy'),
    __metadata("design:type", Function)
], ForDirective.prototype, "compareBy", void 0);
__decorate([
    Input('abpForEmptyRef'),
    __metadata("design:type", TemplateRef)
], ForDirective.prototype, "emptyRef", void 0);
ForDirective = __decorate([ __metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef,
        IterableDiffers])
], ForDirective);

function noop() {
    // tslint:disable-next-line: only-arrow-functions
    const fn = function () { };
    return fn;
}
function isUndefinedOrEmptyString(value) {
    return value === undefined || value === '';
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

function getInitialData(injector) {
    const fn = () => {
        const store = injector.get(Store);
        const { skipGetAppConfiguration } = injector.get(CORE_OPTIONS);
        if (skipGetAppConfiguration)
            return;
        return store
            .dispatch(new GetAppConfiguration())
            .pipe(tap(res => checkAccessToken(store, injector)))
            .toPromise();
    };
    return fn;
}
function checkAccessToken(store, injector) {
    const oAuth = injector.get(OAuthService);
    if (oAuth.hasValidAccessToken() && !store.selectSnapshot(ConfigState.getDeep('currentUser.id'))) {
        oAuth.logOut();
    }
}
function localeInitializer(injector) {
    const fn = () => {
        const store = injector.get(Store);
        const lang = store.selectSnapshot(state => state.SessionState.language) || 'en';
        return new Promise((resolve, reject) => {
            registerLocale(lang).then(() => resolve('resolved'), reject);
        });
    };
    return fn;
}
function registerLocale(locale) {
    return import(
    /* webpackInclude: /(af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$/ */
    `@angular/common/locales/${localesMapping[locale] || locale}.js`).then(module => {
        registerLocaleData(module.default);
    });
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

let FormSubmitDirective = class FormSubmitDirective {
    constructor(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.debounce = 200;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    ngOnInit() {
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe(() => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        });
        fromEvent(this.host.nativeElement, 'keyup')
            .pipe(debounceTime(this.debounce), filter((key) => key && key.key === 'Enter'), takeUntilDestroy(this))
            .subscribe(() => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        });
    }
    ngOnDestroy() { }
    markAsDirty() {
        const { form } = this.formGroupDirective;
        setDirty(form.controls);
        form.markAsDirty();
        this.cdRef.detectChanges();
    }
};
FormSubmitDirective.ɵfac = function FormSubmitDirective_Factory(t) { return new (t || FormSubmitDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc6.FormGroupDirective, 2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
FormSubmitDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: FormSubmitDirective, selectors: [["form", "ngSubmit", "", "formGroup", ""]], inputs: { debounce: "debounce", notValidateOnSubmit: "notValidateOnSubmit" }, outputs: { ngSubmit: "ngSubmit" } });
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "debounce", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "notValidateOnSubmit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormSubmitDirective.prototype, "ngSubmit", void 0);
FormSubmitDirective = __decorate([ __param(0, Self()),
    __metadata("design:paramtypes", [FormGroupDirective,
        ElementRef,
        ChangeDetectorRef])
], FormSubmitDirective);
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

let InitDirective = class InitDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
};
InitDirective.ɵfac = function InitDirective_Factory(t) { return new (t || InitDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
InitDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: InitDirective, selectors: [["", "abpInit", ""]], outputs: { init: "abpInit" } });
__decorate([
    Output('abpInit'),
    __metadata("design:type", Object)
], InitDirective.prototype, "init", void 0);
InitDirective = __decorate([ __metadata("design:paramtypes", [ElementRef])
], InitDirective);

let RestService = class RestService {
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
};
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(ɵngcc0.ɵɵinject(CORE_OPTIONS), ɵngcc0.ɵɵinject(ɵngcc3.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
RestService.ɵprov = ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(ɵɵinject(CORE_OPTIONS), ɵɵinject(HttpClient), ɵɵinject(Store)); }, token: RestService, providedIn: "root" });
RestService = __decorate([ __param(0, Inject(CORE_OPTIONS)),
    __metadata("design:paramtypes", [Object, HttpClient,
        Store])
], RestService);

let ProfileService = class ProfileService {
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
};
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(ɵngcc0.ɵɵinject(RestService)); };
ProfileService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
ProfileService = __decorate([ __metadata("design:paramtypes", [RestService])
], ProfileService);

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
ProfileState.ɵfac = function ProfileState_Factory(t) { return new (t || ProfileState)(ɵngcc0.ɵɵinject(ProfileService)); };
ProfileState.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ProfileState, factory: ProfileState.ɵfac });
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
    }), __metadata("design:paramtypes", [ProfileService])
], ProfileState);

let PermissionDirective = class PermissionDirective {
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
            .pipe(takeUntilDestroy(this))
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
    ngOnDestroy() { }
    ngOnChanges({ condition }) {
        if ((condition || { currentValue: null }).currentValue) {
            this.check();
        }
    }
};
PermissionDirective.ɵfac = function PermissionDirective_Factory(t) { return new (t || PermissionDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Store), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
PermissionDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: PermissionDirective, selectors: [["", "abpPermission", ""]], inputs: { condition: ["abpPermission", "condition"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input('abpPermission'),
    __metadata("design:type", String)
], PermissionDirective.prototype, "condition", void 0);
PermissionDirective = __decorate([ __param(3, Optional()),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        Store,
        TemplateRef,
        ViewContainerRef])
], PermissionDirective);

let ReplaceableTemplateDirective = class ReplaceableTemplateDirective {
    constructor(injector, templateRef, cfRes, vcRef, store) {
        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.store = store;
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
        this.store
            .select(ReplaceableComponentsState.getComponent(this.data.componentKey))
            .pipe(filter((res = {}) => !this.initialized || !compare(res.component, this.externalComponent)), takeUntilDestroy(this))
            .subscribe((res = {}) => {
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
    ngOnDestroy() { }
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
};
ReplaceableTemplateDirective.ɵfac = function ReplaceableTemplateDirective_Factory(t) { return new (t || ReplaceableTemplateDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Injector), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Store)); };
ReplaceableTemplateDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ReplaceableTemplateDirective, selectors: [["", "abpReplaceableTemplate", ""]], inputs: { data: ["abpReplaceableTemplate", "data"] }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
__decorate([
    Input('abpReplaceableTemplate'),
    __metadata("design:type", Object)
], ReplaceableTemplateDirective.prototype, "data", void 0);
ReplaceableTemplateDirective = __decorate([ __metadata("design:paramtypes", [Injector,
        TemplateRef,
        ComponentFactoryResolver,
        ViewContainerRef,
        Store])
], ReplaceableTemplateDirective);

let StopPropagationDirective = class StopPropagationDirective {
    constructor(el) {
        this.el = el;
        this.stopPropEvent = new EventEmitter();
    }
    ngOnInit() {
        fromEvent(this.el.nativeElement, 'click')
            .pipe(takeUntilDestroy(this))
            .subscribe((event) => {
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        });
    }
    ngOnDestroy() { }
};
StopPropagationDirective.ɵfac = function StopPropagationDirective_Factory(t) { return new (t || StopPropagationDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
StopPropagationDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: StopPropagationDirective, selectors: [["", "click.stop", ""]], outputs: { stopPropEvent: "click.stop" } });
__decorate([
    Output('click.stop'),
    __metadata("design:type", Object)
], StopPropagationDirective.prototype, "stopPropEvent", void 0);
StopPropagationDirective = __decorate([ __metadata("design:paramtypes", [ElementRef])
], StopPropagationDirective);

/**
 *
 * @deprecated To be deleted in v3.3
 */
let VisibilityDirective = class VisibilityDirective {
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
};
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
VisibilityDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: VisibilityDirective, selectors: [["", "abpVisibility", ""]], inputs: { focusedElement: ["abpVisibility", "focusedElement"] } });
__decorate([
    Input('abpVisibility'),
    __metadata("design:type", HTMLElement)
], VisibilityDirective.prototype, "focusedElement", void 0);
VisibilityDirective = __decorate([ __param(0, Optional()),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], VisibilityDirective);

let RoutesHandler = class RoutesHandler {
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
};
RoutesHandler.ɵfac = function RoutesHandler_Factory(t) { return new (t || RoutesHandler)(ɵngcc0.ɵɵinject(RoutesService), ɵngcc0.ɵɵinject(ɵngcc5.Router, 8)); };
RoutesHandler.ɵprov = ɵɵdefineInjectable({ factory: function RoutesHandler_Factory() { return new RoutesHandler(ɵɵinject(RoutesService), ɵɵinject(Router, 8)); }, token: RoutesHandler, providedIn: "root" });
RoutesHandler = __decorate([ __param(1, Optional()),
    __metadata("design:paramtypes", [RoutesService, Router])
], RoutesHandler);
function flatRoutes(routes, parent) {
    if (!routes)
        return [];
    return routes.reduce((acc, route) => {
        const _a = Object.assign(Object.assign({}, route), { parentName: parent.name, path: (parent.path + '/' + route.path).replace(/\/\//g, '/') }), { children } = _a, current = __rest(_a, ["children"]);
        acc.push(current, ...flatRoutes(children, current));
        return acc;
    }, []);
}

let ApiInterceptor = class ApiInterceptor {
    constructor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    intercept(request, next) {
        this.store.dispatch(new StartLoader(request));
        const headers = {};
        const token = this.oAuthService.getAccessToken();
        if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
        }
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        if (!request.headers.has('__tenant') && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return next
            .handle(request.clone({
            setHeaders: headers,
        }))
            .pipe(finalize(() => this.store.dispatch(new StopLoader(request))));
    }
};
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(ɵngcc0.ɵɵinject(ɵngcc1.OAuthService), ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
ApiInterceptor.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });
ApiInterceptor = __decorate([ __metadata("design:paramtypes", [OAuthService, Store])
], ApiInterceptor);

let LocalizationPipe = class LocalizationPipe {
    constructor(store) {
        this.store = store;
    }
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(ConfigState.getLocalization(value, ...interpolateParams.reduce((acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val]), [])));
    }
};
LocalizationPipe.ɵfac = function LocalizationPipe_Factory(t) { return new (t || LocalizationPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Store)); };
LocalizationPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "abpLocalization", type: LocalizationPipe, pure: true });
LocalizationPipe.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LocalizationPipe, factory: LocalizationPipe.ɵfac });
LocalizationPipe = __decorate([ __metadata("design:paramtypes", [Store])
], LocalizationPipe);
let MockLocalizationPipe = class MockLocalizationPipe {
    transform(value = '', ..._) {
        return typeof value === 'string' ? value : value.defaultValue;
    }
};
MockLocalizationPipe.ɵfac = function MockLocalizationPipe_Factory(t) { return new (t || MockLocalizationPipe)(); };
MockLocalizationPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "abpLocalization", type: MockLocalizationPipe, pure: true });
MockLocalizationPipe.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: MockLocalizationPipe, factory: MockLocalizationPipe.ɵfac });

let LocalizationModule = class LocalizationModule {
};
LocalizationModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LocalizationModule });
LocalizationModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LocalizationModule_Factory(t) { return new (t || LocalizationModule)(); } });

let SortPipe = class SortPipe {
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
};
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "abpSort", type: SortPipe, pure: true });
SortPipe.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: SortPipe, factory: SortPipe.ɵfac });

const NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
let ConfigPlugin = class ConfigPlugin {
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
};
ConfigPlugin.ɵfac = function ConfigPlugin_Factory(t) { return new (t || ConfigPlugin)(ɵngcc0.ɵɵinject(NGXS_CONFIG_PLUGIN_OPTIONS)); };
ConfigPlugin.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ConfigPlugin, factory: ConfigPlugin.ɵfac });
ConfigPlugin = __decorate([ __param(0, Inject(NGXS_CONFIG_PLUGIN_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], ConfigPlugin);

let LocalizationService = class LocalizationService {
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
        return this.actions.pipe(ofActionSuccessful(SetLanguage));
    }
    listenToSetLanguage() {
        this.languageChange.subscribe(({ payload }) => this.registerLocale(payload));
    }
    registerLocale(locale) {
        const router = this.injector.get(Router);
        const { shouldReuseRoute } = router.routeReuseStrategy;
        router.routeReuseStrategy.shouldReuseRoute = () => false;
        router.navigated = false;
        return registerLocale(locale).then(() => {
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
};
LocalizationService.ɵfac = function LocalizationService_Factory(t) { return new (t || LocalizationService)(ɵngcc0.ɵɵinject(ɵngcc2.Actions), ɵngcc0.ɵɵinject(ɵngcc2.Store), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(LocalizationService, 12)); };
LocalizationService.ɵprov = ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(INJECTOR), ɵɵinject(NgZone), ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
LocalizationService = __decorate([ __param(4, Optional()),
    __param(4, SkipSelf()),
    __metadata("design:paramtypes", [Actions,
        Store,
        Injector,
        NgZone,
        LocalizationService])
], LocalizationService);

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
    return localStorage;
}
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
let BaseCoreModule = class BaseCoreModule {
};
BaseCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: BaseCoreModule });
BaseCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function BaseCoreModule_Factory(t) { return new (t || BaseCoreModule)(); }, imports: [[
            OAuthModule,
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
        ],
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule] });
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
let RootCoreModule = class RootCoreModule {
};
RootCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: RootCoreModule });
RootCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function RootCoreModule_Factory(t) { return new (t || RootCoreModule)(); }, imports: [[
            BaseCoreModule,
            LocalizationModule,
            NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
            NgxsRouterPluginModule.forRoot(),
            NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
            OAuthModule.forRoot(),
        ],
        BaseCoreModule,
        LocalizationModule] });
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
let TestCoreModule = class TestCoreModule {
};
TestCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TestCoreModule });
TestCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TestCoreModule_Factory(t) { return new (t || TestCoreModule)(); }, imports: [[RouterModule.forRoot([]), BaseCoreModule],
        RouterModule,
        BaseCoreModule] });
/**
 * CoreModule is the module that is publicly available
 */
let CoreModule = class CoreModule {
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
            ],
        };
    }
};
CoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [LocalizationPipe], imports: [[BaseCoreModule, LocalizationModule],
        BaseCoreModule,
        LocalizationModule] });

let AuthGuard = class AuthGuard {
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
};
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(ɵngcc0.ɵɵinject(ɵngcc1.OAuthService), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
AuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(INJECTOR)); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([ __metadata("design:paramtypes", [OAuthService, Injector])
], AuthGuard);

let PermissionGuard = class PermissionGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        let resource = snq(() => route.data.routes.requiredPolicy) || snq(() => route.data.requiredPolicy);
        if (!resource) {
            resource = snq(() => route.routeConfig.children.find(child => state.url.indexOf(child.path) > -1).data
                .requiredPolicy);
            if (!resource) {
                return of(true);
            }
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(tap(access => {
            if (!access) {
                this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        }));
    }
};
PermissionGuard.ɵfac = function PermissionGuard_Factory(t) { return new (t || PermissionGuard)(ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
PermissionGuard.ɵprov = ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(ɵɵinject(Store)); }, token: PermissionGuard, providedIn: "root" });
PermissionGuard = __decorate([ __metadata("design:paramtypes", [Store])
], PermissionGuard);

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

let ApplicationConfigurationService = class ApplicationConfigurationService {
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
};
ApplicationConfigurationService.ɵfac = function ApplicationConfigurationService_Factory(t) { return new (t || ApplicationConfigurationService)(ɵngcc0.ɵɵinject(RestService), ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
ApplicationConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService), ɵɵinject(Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
ApplicationConfigurationService = __decorate([ __metadata("design:paramtypes", [RestService, Store])
], ApplicationConfigurationService);

let AuthService = class AuthService {
    constructor(rest, oAuthService, store, options) {
        this.rest = rest;
        this.oAuthService = oAuthService;
        this.store = store;
        this.options = options;
        this.oAuthService.configure(this.store.selectSnapshot(ConfigState.getOne('environment')).oAuthConfig);
    }
    login(username, password) {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        return from(this.oAuthService.loadDiscoveryDocument()).pipe(switchMap(() => from(this.oAuthService.fetchTokenUsingPasswordFlow(username, password, new HttpHeaders(Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id })))))), switchMap(() => this.store.dispatch(new GetAppConfiguration())), tap(() => {
            const redirectUrl = snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
            this.store.dispatch(new Navigate([redirectUrl]));
        }), take(1));
    }
    logout() {
        const issuer = this.store.selectSnapshot(ConfigState.getDeep('environment.oAuthConfig.issuer'));
        return this.rest
            .request({
            method: 'GET',
            url: '/api/account/logout',
        }, null, issuer)
            .pipe(switchMap(() => {
            this.oAuthService.logOut(true);
            return this.store.dispatch(new GetAppConfiguration());
        }));
    }
};
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵngcc0.ɵɵinject(RestService), ɵngcc0.ɵɵinject(ɵngcc1.OAuthService), ɵngcc0.ɵɵinject(ɵngcc2.Store), ɵngcc0.ɵɵinject('ACCOUNT_OPTIONS', 8)); };
AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(RestService), ɵɵinject(OAuthService), ɵɵinject(Store), ɵɵinject("ACCOUNT_OPTIONS", 8)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([ __param(3, Optional()), __param(3, Inject('ACCOUNT_OPTIONS')),
    __metadata("design:paramtypes", [RestService,
        OAuthService,
        Store, Object])
], AuthService);

let ConfigStateService = class ConfigStateService {
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
    dispatchGetAppConfiguration() {
        return this.store.dispatch(new GetAppConfiguration());
    }
    dispatchSetEnvironment(...args) {
        return this.store.dispatch(new SetEnvironment(...args));
    }
};
ConfigStateService.ɵfac = function ConfigStateService_Factory(t) { return new (t || ConfigStateService)(ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
ConfigStateService.ɵprov = ɵɵdefineInjectable({ factory: function ConfigStateService_Factory() { return new ConfigStateService(ɵɵinject(Store)); }, token: ConfigStateService, providedIn: "root" });
ConfigStateService = __decorate([ __metadata("design:paramtypes", [Store])
], ConfigStateService);

let ContentProjectionService = class ContentProjectionService {
    constructor(injector) {
        this.injector = injector;
    }
    projectContent(projectionStrategy, injector = this.injector) {
        return projectionStrategy.injectContent(injector);
    }
};
ContentProjectionService.ɵfac = function ContentProjectionService_Factory(t) { return new (t || ContentProjectionService)(ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
ContentProjectionService.ɵprov = ɵɵdefineInjectable({ factory: function ContentProjectionService_Factory() { return new ContentProjectionService(ɵɵinject(INJECTOR)); }, token: ContentProjectionService, providedIn: "root" });
ContentProjectionService = __decorate([ __metadata("design:paramtypes", [Injector])
], ContentProjectionService);

let DomInsertionService = class DomInsertionService {
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
};
DomInsertionService.ɵfac = function DomInsertionService_Factory(t) { return new (t || DomInsertionService)(); };
DomInsertionService.ɵprov = ɵɵdefineInjectable({ factory: function DomInsertionService_Factory() { return new DomInsertionService(); }, token: DomInsertionService, providedIn: "root" });

let LazyLoadService = class LazyLoadService {
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
};
LazyLoadService.ɵfac = function LazyLoadService_Factory(t) { return new (t || LazyLoadService)(); };
LazyLoadService.ɵprov = ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });

const LIST_QUERY_DEBOUNCE_TIME = new InjectionToken('LIST_QUERY_DEBOUNCE_TIME');

let ListService = class ListService {
    constructor(delay) {
        this.delay = delay;
        this._filter = '';
        this._maxResultCount = 10;
        this._page = 0;
        this._sortKey = '';
        this._sortOrder = '';
        this._query$ = new ReplaySubject(1);
        this._isLoading$ = new BehaviorSubject(false);
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
        return this.query$.pipe(switchMap(query => streamCreatorCallback(query).pipe(catchError(() => of(null)))), filter(Boolean), tap(() => this._isLoading$.next(false)), shareReplay({ bufferSize: 1, refCount: true }), takeUntilDestroy(this));
    }
    ngOnDestroy() { }
};
ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(ɵngcc0.ɵɵinject(LIST_QUERY_DEBOUNCE_TIME, 8)); };
ListService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: ListService, factory: ListService.ɵfac });
ListService = __decorate([ __param(0, Optional()), __param(0, Inject(LIST_QUERY_DEBOUNCE_TIME)),
    __metadata("design:paramtypes", [Number])
], ListService);

let ProfileStateService = class ProfileStateService {
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
};
ProfileStateService.ɵfac = function ProfileStateService_Factory(t) { return new (t || ProfileStateService)(ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
ProfileStateService.ɵprov = ɵɵdefineInjectable({ factory: function ProfileStateService_Factory() { return new ProfileStateService(ɵɵinject(Store)); }, token: ProfileStateService, providedIn: "root" });
ProfileStateService = __decorate([ __metadata("design:paramtypes", [Store])
], ProfileStateService);

let SessionStateService = class SessionStateService {
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
};
SessionStateService.ɵfac = function SessionStateService_Factory(t) { return new (t || SessionStateService)(ɵngcc0.ɵɵinject(ɵngcc2.Store)); };
SessionStateService.ɵprov = ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(ɵɵinject(Store)); }, token: SessionStateService, providedIn: "root" });
SessionStateService = __decorate([ __metadata("design:paramtypes", [Store])
], SessionStateService);

const trackBy = (key) => (_, item) => item[key];
const trackByDeep = (...keys) => (_, item) => keys.reduce((acc, key) => acc[key], item);
let TrackByService = class TrackByService {
    constructor() {
        this.by = trackBy;
        this.byDeep = trackByDeep;
    }
};
TrackByService.ɵfac = function TrackByService_Factory(t) { return new (t || TrackByService)(); };
TrackByService.ɵprov = ɵɵdefineInjectable({ factory: function TrackByService_Factory() { return new TrackByService(); }, token: TrackByService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractNgModelComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: ɵngcc0.Injector }]; }, { valueFn: [{
            type: Input
        }], valueLimitFn: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], readonly: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SessionState, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.OAuthService }, { type: ɵngcc2.Store }, { type: ɵngcc2.Actions }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfigState, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc3.HttpClient }, { type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AbstractNavTreeService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc2.Actions }, { type: ɵngcc2.Store }]; }, null); })();
const ɵRoutesService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(RoutesService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RoutesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
const ɵSettingTabsService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(SettingTabsService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SettingTabsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReplaceableComponentsState, [{
        type: Injectable
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DynamicLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'abp-dynamic-layout',
                template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngComponentOutlet="layout"></ng-container
    ></ng-template>
  `
            }]
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc2.Store }, { type: DynamicLayoutComponent, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReplaceableRouteContainerComponent, [{
        type: Component,
        args: [{
                selector: 'abp-replaceable-route-container',
                template: `
    <ng-container *ngComponentOutlet="externalComponent || defaultComponent"></ng-container>
  `
            }]
    }], function () { return [{ type: ɵngcc5.ActivatedRoute }, { type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RouterOutletComponent, [{
        type: Component,
        args: [{
                selector: 'abp-router-outlet',
                template: `
    <router-outlet></router-outlet>
  `
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AutofocusDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[autofocus]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { delay: [{
            type: Input,
            args: ['autofocus']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InputEventDebounceDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[input.debounce]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { debounce: [{
            type: Input
        }], debounceEvent: [{
            type: Output,
            args: ['input.debounce']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(EllipsisDirective, [{
        type: Directive,
        args: [{
                selector: '[abpEllipsis]'
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }]; }, { enabled: [{
            type: Input,
            args: ['abpEllipsisEnabled']
        }], inlineClass: [{
            type: HostBinding,
            args: ['class.abp-ellipsis-inline']
        }], class: [{
            type: HostBinding,
            args: ['class.abp-ellipsis']
        }], maxWidth: [{
            type: HostBinding,
            args: ['style.max-width']
        }], title: [{
            type: HostBinding,
            args: ['title']
        }, {
            type: Input
        }], width: [{
            type: Input,
            args: ['abpEllipsis']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ForDirective, [{
        type: Directive,
        args: [{
                selector: '[abpFor]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.IterableDiffers }]; }, { items: [{
            type: Input,
            args: ['abpForOf']
        }], orderBy: [{
            type: Input,
            args: ['abpForOrderBy']
        }], orderDir: [{
            type: Input,
            args: ['abpForOrderDir']
        }], filterBy: [{
            type: Input,
            args: ['abpForFilterBy']
        }], filterVal: [{
            type: Input,
            args: ['abpForFilterVal']
        }], trackBy: [{
            type: Input,
            args: ['abpForTrackBy']
        }], compareBy: [{
            type: Input,
            args: ['abpForCompareBy']
        }], emptyRef: [{
            type: Input,
            args: ['abpForEmptyRef']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormSubmitDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'form[ngSubmit][formGroup]'
            }]
    }], function () { return [{ type: ɵngcc6.FormGroupDirective, decorators: [{
                type: Self
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { debounce: [{
            type: Input
        }], ngSubmit: [{
            type: Output
        }], notValidateOnSubmit: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(InitDirective, [{
        type: Directive,
        args: [{ selector: '[abpInit]' }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { init: [{
            type: Output,
            args: ['abpInit']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RestService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [CORE_OPTIONS]
            }] }, { type: ɵngcc3.HttpClient }, { type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProfileService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RestService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProfileState, [{
        type: Injectable
    }], function () { return [{ type: ProfileService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PermissionDirective, [{
        type: Directive,
        args: [{
                selector: '[abpPermission]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc2.Store }, { type: ɵngcc0.TemplateRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ViewContainerRef }]; }, { condition: [{
            type: Input,
            args: ['abpPermission']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ReplaceableTemplateDirective, [{
        type: Directive,
        args: [{ selector: '[abpReplaceableTemplate]' }]
    }], function () { return [{ type: ɵngcc0.Injector }, { type: ɵngcc0.TemplateRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc2.Store }]; }, { data: [{
            type: Input,
            args: ['abpReplaceableTemplate']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StopPropagationDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[click.stop]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { stopPropEvent: [{
            type: Output,
            args: ['click.stop']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(VisibilityDirective, [{
        type: Directive,
        args: [{
                selector: '[abpVisibility]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.Renderer2 }]; }, { focusedElement: [{
            type: Input,
            args: ['abpVisibility']
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RoutesHandler, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RoutesService }, { type: ɵngcc5.Router, decorators: [{
                type: Optional
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ApiInterceptor, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.OAuthService }, { type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LocalizationPipe, [{
        type: Injectable
    }, {
        type: Pipe,
        args: [{
                name: 'abpLocalization'
            }]
    }], function () { return [{ type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockLocalizationPipe, [{
        type: Injectable
    }, {
        type: Pipe,
        args: [{
                name: 'abpLocalization'
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LocalizationModule, { declarations: [LocalizationPipe], exports: [LocalizationPipe] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LocalizationModule, [{
        type: NgModule,
        args: [{
                exports: [LocalizationPipe],
                declarations: [LocalizationPipe]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SortPipe, [{
        type: Injectable
    }, {
        type: Pipe,
        args: [{
                name: 'abpSort'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfigPlugin, [{
        type: Injectable
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [NGXS_CONFIG_PLUGIN_OPTIONS]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LocalizationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc2.Actions }, { type: ɵngcc2.Store }, { type: ɵngcc0.Injector }, { type: ɵngcc0.NgZone }, { type: LocalizationService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(BaseCoreModule, { declarations: function () { return [AbstractNgModelComponent,
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
        VisibilityDirective]; }, imports: function () { return [OAuthModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule]; }, exports: function () { return [CommonModule,
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
        VisibilityDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseCoreModule, [{
        type: NgModule,
        args: [{
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
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RootCoreModule, { imports: [BaseCoreModule,
        LocalizationModule, ɵngcc2.ɵbb, ɵngcc7.NgxsRouterPluginModule, ɵngcc8.NgxsStoragePluginModule, ɵngcc1.OAuthModule], exports: [BaseCoreModule,
        LocalizationModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RootCoreModule, [{
        type: NgModule,
        args: [{
                exports: [BaseCoreModule, LocalizationModule],
                imports: [
                    BaseCoreModule,
                    LocalizationModule,
                    NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
                    NgxsRouterPluginModule.forRoot(),
                    NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
                    OAuthModule.forRoot(),
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TestCoreModule, { declarations: function () { return [MockLocalizationPipe]; }, imports: function () { return [ɵngcc5.RouterModule, BaseCoreModule]; }, exports: function () { return [RouterModule,
        BaseCoreModule,
        MockLocalizationPipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TestCoreModule, [{
        type: NgModule,
        args: [{
                exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
                imports: [RouterModule.forRoot([]), BaseCoreModule],
                declarations: [MockLocalizationPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CoreModule, { imports: [BaseCoreModule,
        LocalizationModule], exports: [BaseCoreModule,
        LocalizationModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                exports: [BaseCoreModule, LocalizationModule],
                imports: [BaseCoreModule, LocalizationModule],
                providers: [LocalizationPipe]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.OAuthService }, { type: ɵngcc0.Injector }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PermissionGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ApplicationConfigurationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RestService }, { type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RestService }, { type: ɵngcc1.OAuthService }, { type: ɵngcc2.Store }, { type: Object, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['ACCOUNT_OPTIONS']
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfigStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContentProjectionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc0.Injector }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DomInsertionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LazyLoadService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ListService, [{
        type: Injectable
    }], function () { return [{ type: Number, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [LIST_QUERY_DEBOUNCE_TIME]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ProfileStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SessionStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.Store }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TrackByService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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

export { AbpValidators, AbstractNavTreeService, AbstractNgModelComponent, AbstractTreeService, AddReplaceableComponent, ApiInterceptor, ApplicationConfigurationService, AuditedEntityDto, AuditedEntityWithUserDto, AuthGuard, AuthService, AutofocusDirective, BaseCoreModule, BaseTreeNode, CONTAINER_STRATEGY, CONTENT_SECURITY_STRATEGY, CONTENT_STRATEGY, CONTEXT_STRATEGY, CORE_OPTIONS, CROSS_ORIGIN_STRATEGY, ChangePassword, ClearContainerStrategy, ComponentContextStrategy, ComponentProjectionStrategy, ConfigPlugin, ConfigState, ConfigStateService, ContainerStrategy, ContentProjectionService, ContentSecurityStrategy, ContentStrategy, ContextStrategy, CoreModule, CreationAuditedEntityDto, CreationAuditedEntityWithUserDto, CrossOriginStrategy, DOM_STRATEGY, DomInsertionService, DomStrategy, DynamicLayoutComponent, EllipsisDirective, EntityDto, ExtensibleAuditedEntityDto, ExtensibleAuditedEntityWithUserDto, ExtensibleCreationAuditedEntityDto, ExtensibleCreationAuditedEntityWithUserDto, ExtensibleEntityDto, ExtensibleFullAuditedEntityDto, ExtensibleFullAuditedEntityWithUserDto, ExtensibleObject, ForDirective, FormSubmitDirective, FullAuditedEntityDto, FullAuditedEntityWithUserDto, GetAppConfiguration, GetProfile, InitDirective, InputEventDebounceDirective, InsertIntoContainerStrategy, LIST_QUERY_DEBOUNCE_TIME, LOADING_STRATEGY, LazyLoadService, LazyModuleFactory, LimitedResultRequestDto, ListResultDto, ListService, LoadingStrategy, LocalizationModule, LocalizationPipe, LocalizationService, LooseContentSecurityStrategy, MockLocalizationPipe, ModifyOpenedTabCount, NGXS_CONFIG_PLUGIN_OPTIONS, NoContentSecurityStrategy, NoContextStrategy, PROJECTION_STRATEGY, PagedAndSortedResultRequestDto, PagedResultDto, PagedResultRequestDto, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ProjectionStrategy, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, RestOccurError, RestService, RootComponentProjectionStrategy, RootCoreModule, RouterOutletComponent, RoutesService, ScriptContentStrategy, ScriptLoadingStrategy, SessionState, SessionStateService, SetEnvironment, SetLanguage, SetRemember, SetTenant, SettingTabsService, SortPipe, StartLoader, StopLoader, StopPropagationDirective, StyleContentStrategy, StyleLoadingStrategy, TemplateContextStrategy, TemplateProjectionStrategy, TestCoreModule, TrackByService, UpdateProfile, VisibilityDirective, createLocalizationPipeKeyGenerator, createLocalizer, createLocalizerWithFallback, createMapFromList, createTreeFromList, findRoute, fromLazyLoad, generateHash, generatePassword, getInitialData, getLocaleDirection, getRoutePath, isNumber, isUndefinedOrEmptyString, localeInitializer, mapEnumToOptions, noop, pushValueTo, registerLocale, storageFactory, takeUntilDestroy, trackBy, trackByDeep, uuid, validateCreditCard, validateMinAge, validateRange, validateRequired, validateStringLength, validateUrl, ɵ0, AbstractNgModelComponent as ɵa, AutofocusDirective as ɵb, UpdateProfile as ɵba, ChangePassword as ɵbb, SessionState as ɵbd, SetLanguage as ɵbe, SetTenant as ɵbf, ModifyOpenedTabCount as ɵbg, SetRemember as ɵbh, ConfigState as ɵbj, GetAppConfiguration as ɵbk, SetEnvironment as ɵbl, LocaleId as ɵbn, LocaleProvider as ɵbo, LocalizationService as ɵbp, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbq, ConfigPlugin as ɵbr, ApiInterceptor as ɵbs, getInitialData as ɵbt, localeInitializer as ɵbu, noop as ɵbv, RoutesHandler as ɵbw, AbstractTreeService as ɵbx, AbstractNavTreeService as ɵby, RoutesService as ɵbz, DynamicLayoutComponent as ɵc, EllipsisDirective as ɵd, ForDirective as ɵe, FormSubmitDirective as ɵf, InitDirective as ɵg, InputEventDebounceDirective as ɵh, PermissionDirective as ɵi, ReplaceableRouteContainerComponent as ɵj, ReplaceableTemplateDirective as ɵk, RouterOutletComponent as ɵl, SortPipe as ɵm, StopPropagationDirective as ɵn, VisibilityDirective as ɵo, LocalizationPipe as ɵp, MockLocalizationPipe as ɵq, ReplaceableComponentsState as ɵr, AddReplaceableComponent as ɵs, ProfileState as ɵu, ProfileService as ɵv, RestService as ɵw, CORE_OPTIONS as ɵx, GetProfile as ɵz };

//# sourceMappingURL=abp-ng.core.js.map