(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/core/fesm2015/abp-ng.core.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/core/fesm2015/abp-ng.core.js ***!
  \*****************************************************************************************/
/*! exports provided: AbstractNgModelComponent, ApiInterceptor, ApplicationConfigurationService, AuthGuard, AutofocusDirective, CONFIG, ChangePassword, ConfigPlugin, ConfigState, ConfigStateService, CoreModule, DynamicLayoutComponent, ENVIRONMENT, EllipsisDirective, ForDirective, FormSubmitDirective, GetAppConfiguration, GetProfile, LazyLoadService, LocalizationPipe, LocalizationService, NGXS_CONFIG_PLUGIN_OPTIONS, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, Rest, RestOccurError, RestService, RouterOutletComponent, SessionState, SessionStateService, SetLanguage, SetTenant, SortPipe, StartLoader, StopLoader, UpdateProfile, VisibilityDirective, addAbpRoutes, configFactory, environmentFactory, getAbpRoutes, getInitialData, localeInitializer, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, takeUntilDestroy, uuid, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵc, ɵd, ɵe, ɵf, ɵh, ɵi, ɵj, ɵk, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function() { return AbstractNgModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function() { return ApplicationConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function() { return ConfigPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigState", function() { return ConfigState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigStateService", function() { return ConfigStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return DynamicLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return ENVIRONMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function() { return EllipsisDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForDirective", function() { return ForDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return FormSubmitDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function() { return GetAppConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadService", function() { return LazyLoadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function() { return LocalizationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function() { return NGXS_CONFIG_PLUGIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function() { return PatchRouteByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return PermissionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileState", function() { return ProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStateService", function() { return ProfileStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rest", function() { return Rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestOccurError", function() { return RestOccurError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function() { return RouterOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return SessionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStateService", function() { return SessionStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLanguage", function() { return SetLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTenant", function() { return SetTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartLoader", function() { return StartLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopLoader", function() { return StopLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function() { return addAbpRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentFactory", function() { return environmentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function() { return getAbpRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeInitializer", function() { return localeInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizeRoutes", function() { return organizeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLocale", function() { return registerLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChildRoute", function() { return setChildRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRoutes", function() { return sortRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function() { return takeUntilDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ProfileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InputEventDebounceDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return StopPropagationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return AbstractNgModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return LocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return LocaleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NGXS_CONFIG_PLUGIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return ConfigPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return ApiInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return localeInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return SessionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return LocalizationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SetLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SetTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ConfigState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ApplicationConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return PatchRouteByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return GetAppConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return RouterOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DynamicLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EllipsisDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return ForDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return FormSubmitDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return LocalizationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SortPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return PermissionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return VisibilityDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/storage-plugin */ "../../node_modules/@ngxs/storage-plugin/fesm2015/ngxs-storage-plugin.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/ng-model.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AbstractNgModelComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.cdRef = injector.get((/** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.notifyValueChange();
    }
    /**
     * @return {?}
     */
    get value() {
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
        this._value = value;
        setTimeout((/**
         * @return {?}
         */
        () => this.cdRef.detectChanges()), 0);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'abp-abstract-ng-model', template: '' }] }
];
/** @nocollapse */
AbstractNgModelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
AbstractNgModelComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

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
if (false) {}
class GetAppConfiguration {
}
GetAppConfiguration.type = '[Config] Get App Configuration';
if (false) {}

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
if (false) {}
class StopLoader {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
StopLoader.type = '[Loader] Stop';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/profile.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GetProfile {
}
GetProfile.type = '[Profile] Get';
if (false) {}
class UpdateProfile {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateProfile.type = '[Profile] Update';
if (false) {}
class ChangePassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
ChangePassword.type = '[Profile] Change Password';
if (false) {}

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
if (false) {}

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
if (false) {}
class SetTenant {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
SetTenant.type = '[Session] Set Tenant';
if (false) {}

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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
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
        const { method, params } = request, options = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(request, ["method", "params"]);
        return this.http
            .request(method, url, (/** @type {?} */ (Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => (Object.assign({}, acc, (typeof params[key] !== 'undefined' && params[key] !== '' && { [key]: params[key] })))), {}),
        }), options))))
            .pipe(observe === "body" /* Body */ ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            if (skipHandleError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }
            return this.handleError(err);
        })));
    }
}
RestService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ RestService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RestService_Factory() { return new RestService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: RestService, providedIn: "root" });
if (false) {}

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ApplicationConfigurationService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RestService)); }, token: ApplicationConfigurationService, providedIn: "root" });
if (false) {}

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
        const store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]);
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
        const store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]);
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
    return __webpack_require__("../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$")(`./${localesMapping[locale] || locale}.js`).then((/**
     * @param {?} module
     * @return {?}
     */
    module => {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(module.default);
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
            () => Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.router.navigateByUrl(this.router.url).catch(rxjs__WEBPACK_IMPORTED_MODULE_4__["noop"]);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LocalizationService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: LocalizationService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
/** @nocollapse */ LocalizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LocalizationService_Factory() { return new LocalizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/session.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let SessionState = class SessionState {
    /**
     * @param {?} localizationService
     */
    constructor(localizationService) {
        this.localizationService = localizationService;
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
     * @param {?} __1
     * @return {?}
     */
    setLanguage({ patchState, dispatch }, { payload }) {
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
         * @return {?}
         */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.localizationService.registerLocale(payload)))));
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
};
SessionState.ctorParameters = () => [
    { type: LocalizationService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(SetLanguage),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, SetLanguage]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], SessionState.prototype, "setLanguage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(SetTenant),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, SetTenant]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], SessionState.prototype, "setTenant", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", String)
], SessionState, "getLanguage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", Object)
], SessionState, "getTenant", null);
SessionState = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'SessionState',
        defaults: (/** @type {?} */ ({})),
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [LocalizationService])
], SessionState);
if (false) {}

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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (keyword) {
                /** @type {?} */
                const keys = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
            k => Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        /** @type {?} */
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        if (!key)
            key = '';
        /** @type {?} */
        const keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
                keys[0] = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        return this.appConfigurationService.getConfiguration().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} configuration
         * @return {?}
         */
        configuration => patchState(Object.assign({}, configuration)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
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
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)
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
        /** @type {?} */
        const index = routes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        route => route.name === name));
        routes = patchRouteDeep(routes, name, newValue);
        return patchState({
            routes,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: ApplicationConfigurationService },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(GetAppConfiguration),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ConfigState.prototype, "addData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(PatchRouteByName),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, PatchRouteByName]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ConfigState.prototype, "patchRoute", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ConfigState, "getAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", Object)
], ConfigState, "getApplicationInfo", null);
ConfigState = ConfigState_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'ConfigState',
        defaults: (/** @type {?} */ ({})),
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [ApplicationConfigurationService,
        _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], ConfigState);
if (false) {}
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
        componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
    return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(componentInstance['__takeUntilDestroy']));
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
            (l) => Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
             * @return {?}
             */
            () => l.type.toLowerCase().indexOf(this.route.snapshot.data.layout)), -1) > -1));
        }
        this.router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
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
                (l) => Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(ConfigState.getOne('requirements')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], DynamicLayoutComponent.prototype, "requirements$", void 0);
if (false) {}
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
 * Generated from: lib/components/router-outlet.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterOutletComponent {
}
RouterOutletComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[autofocus]'
            },] }
];
/** @nocollapse */
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
AutofocusDirective.propDecorators = {
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['autofocus',] }]
};
if (false) {}

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[abpEllipsis]',
            },] }
];
/** @nocollapse */
EllipsisDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
EllipsisDirective.propDecorators = {
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpEllipsis',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['title',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpEllipsisEnabled',] }],
    inlineClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.abp-ellipsis-inline',] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.abp-ellipsis',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.max-width',] }]
};
if (false) {}

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
if (false) {}
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
if (false) {}
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
        return this.compareBy || just_compare__WEBPACK_IMPORTED_MODULE_9___default.a;
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
        let items = (/** @type {?} */ (just_clone__WEBPACK_IMPORTED_MODULE_10___default()(this.items)));
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[abpFor]',
            },] }
];
/** @nocollapse */
ForDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }
];
ForDirective.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForOf',] }],
    orderBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForOrderBy',] }],
    orderDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForOrderDir',] }],
    filterBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForFilterBy',] }],
    filterVal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForFilterVal',] }],
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForTrackBy',] }],
    compareBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForCompareBy',] }],
    emptyRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpForEmptyRef',] }]
};
if (false) {}

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
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.debounce), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'form[ngSubmit][formGroup]',
            },] }
];
/** @nocollapse */
FormSubmitDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
FormSubmitDirective.propDecorators = {
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    notValidateOnSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProfileService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ ProfileService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ProfileService_Factory() { return new ProfileService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RestService)); }, token: ProfileService, providedIn: "root" });
if (false) {}

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
        return this.profileService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
        return this.profileService.update(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(GetProfile),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ProfileState.prototype, "getProfile", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(UpdateProfile),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, UpdateProfile]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ProfileState.prototype, "updateProfile", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(ChangePassword),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, ChangePassword]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
], ProfileState.prototype, "changePassword", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", Object)
], ProfileState, "getProfile", null);
ProfileState = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
        name: 'ProfileState',
        defaults: (/** @type {?} */ ({})),
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [ProfileService])
], ProfileState);
if (false) {}

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[abpPermission]',
            },] }
];
/** @nocollapse */
PermissionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
PermissionDirective.propDecorators = {
    condition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpPermission',] }]
};
if (false) {}

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
        this.completed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
                const htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
            const htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[abpVisibility]',
            },] }
];
/** @nocollapse */
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
VisibilityDirective.propDecorators = {
    focusedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpVisibility',] }]
};
if (false) {}

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
    /**
     * @deprecated since version 0.9.0
     */
    setting: "setting",
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthGuard_Factory() { return new AuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); }, token: AuthGuard, providedIn: "root" });
if (false) {}

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
        let resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
         * @return {?}
         */
        () => route.data.routes.requiredPolicy)) || Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (route.data.requiredPolicy))));
        if (!resource) {
            resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
             * @return {?}
             */
            () => route.routeConfig.children.find((/**
             * @param {?} child
             * @return {?}
             */
            child => state.url.indexOf(child.path) > -1)).data.requiredPolicy));
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionGuard.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ PermissionGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PermissionGuard_Factory() { return new PermissionGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: PermissionGuard, providedIn: "root" });
if (false) {}

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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((/**
         * @return {?}
         */
        () => this.store.dispatch(new StopLoader(request)))));
    }
}
ApiInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ApiInterceptor.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
if (false) {}

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
    if (false) {}
    /**
     * @record
     */
    function Localization() { }
    ApplicationConfiguration.Localization = Localization;
    if (false) {}
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
    if (false) {}
    /**
     * @record
     */
    function Auth() { }
    ApplicationConfiguration.Auth = Auth;
    if (false) {}
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
    if (false) {}
    /**
     * @record
     */
    function CurrentUser() { }
    ApplicationConfiguration.CurrentUser = CurrentUser;
    if (false) {}
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
    if (false) {}
    /**
     * @record
     * @template T
     */
    function PagedItemsResponse() { }
    ABP.PagedItemsResponse = PagedItemsResponse;
    if (false) {}
    /**
     * @record
     */
    function PageQueryParams() { }
    ABP.PageQueryParams = PageQueryParams;
    if (false) {}
    /**
     * @record
     */
    function Route() { }
    ABP.Route = Route;
    if (false) {}
    /**
     * @record
     */
    function FullRoute() { }
    ABP.FullRoute = FullRoute;
    if (false) {}
    /**
     * @record
     */
    function BasicItem() { }
    ABP.BasicItem = BasicItem;
    if (false) {}
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
    if (false) {}
    /**
     * @record
     */
    function Application() { }
    Config.Application = Application;
    if (false) {}
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
    if (false) {}
    /**
     * @record
     */
    function LocalizationWithDefault() { }
    Config.LocalizationWithDefault = LocalizationWithDefault;
    if (false) {}
})(Config || (Config = {}));

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
    if (false) {}
    /**
     * @record
     * @template T
     */
    function Request() { }
    Rest.Request = Request;
    if (false) {}
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
    if (false) {}
})(Session || (Session = {}));

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
    if (false) {}
    /**
     * @record
     */
    function Response() { }
    Profile.Response = Response;
    if (false) {}
    /**
     * @record
     */
    function ChangePasswordRequest() { }
    Profile.ChangePasswordRequest = ChangePasswordRequest;
    if (false) {}
})(Profile || (Profile = {}));

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'abpLocalization',
            },] }
];
/** @nocollapse */
LocalizationPipe.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
if (false) {}

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
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
const NGXS_CONFIG_PLUGIN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGXS_CONFIG_PLUGIN_OPTIONS');
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
        const matches = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["actionMatcher"])(event);
        /** @type {?} */
        const isInitAction = matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["InitState"]) || matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["UpdateState"]);
        if (isInitAction && !this.initialized) {
            /** @type {?} */
            const transformedRoutes = transformRoutes(this.router.config);
            let { routes } = transformedRoutes;
            const { wrappers } = transformedRoutes;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            const flattedRoutes = flatRoutes(just_clone__WEBPACK_IMPORTED_MODULE_10___default()(routes));
            state = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["setValue"])(state, 'ConfigState', Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState)), this.options, { routes,
                flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    }
}
ConfigPlugin.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
if (false) {}
/**
 * @param {?=} routes
 * @param {?=} wrappers
 * @return {?}
 */
function transformRoutes(routes = [], wrappers = []) {
    // TODO: remove in v1
    /** @type {?} */
    const oldAbpRoutes = routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    route => {
        return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
         * @return {?}
         */
        () => route.data.routes.routes.find((/**
         * @param {?} r
         * @return {?}
         */
        r => r.path === route.path))), false);
    }))
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...val.data.routes.routes]), []);
    // tslint:disable-next-line: deprecation
    /** @type {?} */
    const abpRoutes = [...getAbpRoutes(), ...oldAbpRoutes];
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
            transformed.push((/** @type {?} */ (Object.assign({}, route.data.routes, { path: route.path, name: Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        // this if block using for only recursive call
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
}
ConfigStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConfigStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ ConfigStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ConfigStateService_Factory() { return new ConfigStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: ConfigStateService, providedIn: "root" });
if (false) {}

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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Should pass url or content');
        }
        else if (!urlOrUrls && content) {
            urlOrUrls = [null];
        }
        if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((/**
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
                this.loadedLibraries[key] = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ LazyLoadService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
if (false) {}

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
}
ProfileStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ProfileStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ ProfileStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ProfileStateService_Factory() { return new ProfileStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: ProfileStateService, providedIn: "root" });
if (false) {}

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
}
SessionStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SessionStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
/** @nocollapse */ SessionStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SessionStateService_Factory() { return new SessionStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: SessionStateService, providedIn: "root" });
if (false) {}

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
const ENVIRONMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ENVIRONMENT');
/** @type {?} */
const CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONFIG');

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
        this.debounceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.el.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.debounce), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_15__["takeUntilDestroy"])(this))
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[input.debounce]',
            },] }
];
/** @nocollapse */
InputEventDebounceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
InputEventDebounceDirective.propDecorators = {
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    debounceEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['input.debounce',] }]
};
if (false) {}

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
        this.stopPropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.el.nativeElement, 'click')
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[click.stop]',
            },] }
];
/** @nocollapse */
StopPropagationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
StopPropagationDirective.propDecorators = {
    stopPropEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['click.stop',] }]
};
if (false) {}

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
if (false) {}
/** @type {?} */
const LocaleProvider = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
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
                    provide: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NGXS_PLUGINS"],
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
                    useValue: options,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: ApiInterceptor,
                    multi: true,
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                    useFactory: getInitialData,
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                    useFactory: localeInitializer,
                },
            ],
        };
    }
}
CoreModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([ProfileState, SessionState, ConfigState]),
                    _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__["NgxsRouterPluginModule"].forRoot(),
                    _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_14__["NgxsStoragePluginModule"].forRoot({ key: ['SessionState'] }),
                    angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthModule"].forRoot(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ],
                declarations: [
                    RouterOutletComponent,
                    DynamicLayoutComponent,
                    AutofocusDirective,
                    EllipsisDirective,
                    ForDirective,
                    FormSubmitDirective,
                    LocalizationPipe,
                    SortPipe,
                    PermissionDirective,
                    VisibilityDirective,
                    InputEventDebounceDirective,
                    StopPropagationDirective,
                    AbstractNgModelComponent,
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    RouterOutletComponent,
                    DynamicLayoutComponent,
                    AutofocusDirective,
                    EllipsisDirective,
                    ForDirective,
                    FormSubmitDirective,
                    LocalizationPipe,
                    SortPipe,
                    PermissionDirective,
                    VisibilityDirective,
                    InputEventDebounceDirective,
                    LocalizationPipe,
                    StopPropagationDirective,
                    AbstractNgModelComponent,
                ],
                providers: [LocalizationPipe],
                entryComponents: [RouterOutletComponent, DynamicLayoutComponent],
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


//# sourceMappingURL=abp-ng.core.js.map


/***/ }),

/***/ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/theme-shared/fesm2015/abp-ng.theme.shared.js ***!
  \*********************************************************************************************************/
/*! exports provided: BreadcrumbComponent, ButtonComponent, ChartComponent, ConfirmationComponent, ConfirmationService, DateParserFormatter, LoaderBarComponent, ModalComponent, SortOrderIconComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, Toaster, ToasterService, addSettingTab, appendScript, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getRandomBackgroundColor, getSettingTabs, slideFromBottom, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵs, ɵt, ɵu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParserFormatter", function() { return DateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderBarComponent", function() { return LoaderBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrderIconComponent", function() { return SortOrderIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEmptyMessageComponent", function() { return TableEmptyMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortDirective", function() { return TableSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSharedModule", function() { return ThemeSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return Toaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSettingTab", function() { return addSettingTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendScript", function() { return appendScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartJsLoaded$", function() { return chartJsLoaded$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapse", function() { return collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseLinearWithMargin", function() { return collapseLinearWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseWithMargin", function() { return collapseWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseX", function() { return collapseX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseY", function() { return collapseY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseYWithMargin", function() { return collapseYWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogAnimation", function() { return dialogAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandX", function() { return expandX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandY", function() { return expandY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandYWithMargin", function() { return expandYWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDown", function() { return fadeInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return fadeInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDown", function() { return fadeOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeft", function() { return fadeOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRight", function() { return fadeOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUp", function() { return fadeOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBackgroundColor", function() { return getRandomBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingTabs", function() { return getSettingTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return AbstractToaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return HttpErrorWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return LoaderBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TableEmptyMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SortOrderIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TableSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return httpErrorConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return HTTP_ERROR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return DateParserFormatter; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "../../node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");


















/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} router
     * @param {?} store
     */
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.LeptonLayoutState));
        if (this.show) {
            /** @type {?} */
            let splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            chunk => chunk));
            /** @type {?} */
            let currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(splittedUrl[0]));
            if (!currentUrl) {
                currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(null, null, this.router.url));
                splittedUrl = [this.router.url];
                if (!currentUrl) {
                    this.show = false;
                    return;
                }
            }
            this.segments.push(currentUrl.name);
            if (splittedUrl.length > 1) {
                const [, ...arr] = splittedUrl;
                /** @type {?} */
                let childRoute = currentUrl;
                for (let i = 0; i < arr.length; i++) {
                    /** @type {?} */
                    const element = arr[i];
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    child => child.path === element));
                    this.segments.push(childRoute.name);
                }
            }
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-breadcrumb',
                template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable
        /**
         * @deprecated use abpClick instead
         */
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @deprecated use abpFocus instead
         */
        // tslint:disable-next-line: no-output-native
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @deprecated use abpBlur instead
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:enable
        this.abpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    get icon() {
        return `${this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none'}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
            }));
        }
    }
}
ButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-button',
                template: `
    <button
      #button
      [id]="buttonId"
      [attr.type]="buttonType"
      [ngClass]="buttonClass"
      [disabled]="loading || disabled"
      (click.stop)="click.next($event); abpClick.next($event)"
      (focus)="focus.next($event); abpFocus.next($event)"
      (blur)="blur.next($event); abpBlur.next($event)"
    >
      <i [ngClass]="icon" class="mr-1"></i><ng-content></ng-content>
    </button>
  `
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ButtonComponent.propDecorators = {
    buttonId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    buttonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['button', { static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/widget-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} count
 * @return {?}
 */
function getRandomBackgroundColor(count) {
    /** @type {?} */
    const colors = [];
    for (let i = 0; i < count; i++) {
        /** @type {?} */
        const r = ((i + 5) * (i + 5) * 474) % 255;
        /** @type {?} */
        const g = ((i + 5) * (i + 5) * 1600) % 255;
        /** @type {?} */
        const b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
/** @type {?} */
const chartJsLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    /**
     * @param {?} el
     * @param {?} cdRef
     */
    constructor(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this);
        this.onCanvasClick = (/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.chart) {
                /** @type {?} */
                const element = this.chart.getElementAtEvent(event);
                /** @type {?} */
                const dataset = this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset,
                    });
                }
            }
        });
        this.initChart = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const opts = this.options || {};
            opts.responsive = this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (this.height || this.width)) {
                opts.maintainAspectRatio = false;
            }
            this.chart = new Chart(this.canvas, {
                type: this.type,
                data: this.data,
                options: this.options,
                plugins: this.plugins,
            });
            this.cdRef.detectChanges();
        });
        this.generateLegend = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        });
        this.refresh = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.update();
                this.cdRef.detectChanges();
            }
        });
        this.reinit = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        });
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    get canvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    get base64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        chartJsLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.testChartJs();
            this.initChart();
            this._initialized = true;
        }));
    }
    /**
     * @return {?}
     */
    testChartJs() {
        try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
        }
        catch (error) {
            throw new Error(`Chart is not found. Import the Chart from app.module like shown below:
      import('chart.js');
      `);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    }
}
ChartComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-chart',
                template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ChartComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plugins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onDataSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        this.messageService = messageService;
        this.key = 'abpToast';
        this.sticky = false;
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    warn(message, title, options) {
        return this.show(message, title, 'warn', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        this.messageService.clear(this.key);
        this.messageService.add(Object.assign({ severity, detail: message || '', summary: title || '' }, options, { key: this.key }, (typeof (options || ((/** @type {?} */ ({})))).sticky === 'undefined' && { sticky: this.sticky })));
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        return this.status$;
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status) {
        this.messageService.clear(this.key);
        this.status$.next(status || "dismiss" /* dismiss */);
        this.status$.complete();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationService extends AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        super(messageService);
        this.messageService = messageService;
        this.key = 'abpConfirmation';
        this.sticky = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        this.listenToEscape();
        return super.show(message, title, severity, options);
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status) {
        super.clear(status);
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    listenToEscape() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.clear();
        }));
    }
}
ConfirmationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
/** @nocollapse */ ConfirmationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConfirmationService_Factory() { return new ConfirmationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ConfirmationService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationComponent {
    /**
     * @param {?} confirmationService
     */
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.confirm = "confirm" /* confirm */;
        this.reject = "reject" /* reject */;
        this.dismiss = "dismiss" /* dismiss */;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    close(status) {
        this.confirmationService.clear(status);
    }
}
ConfirmationComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-confirmation',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <p-toast
      position="center"
      key="abpConfirmation"
      (onClose)="close(dismiss)"
      [modal]="true"
      [baseZIndex]="1000"
      styleClass="abp-confirm"
    >
      <ng-template let-message pTemplate="message">
        <i class="fa fa-exclamation-circle abp-confirm-icon"></i>
        <div *ngIf="message.summary" class="abp-confirm-summary">
          {{ message.summary | abpLocalization: message.titleLocalizationParams }}
        </div>
        <div class="abp-confirm-body">
          {{ message.detail | abpLocalization: message.messageLocalizationParams }}
        </div>

        <div class="abp-confirm-footer justify-content-center">
          <button
            *ngIf="!message.hideCancelBtn"
            id="cancel"
            type="button"
            class="btn btn-sm btn-primary"
            (click)="close(reject)"
          >
            {{ message.cancelText || message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}
          </button>
          <button
            *ngIf="!message.hideYesBtn"
            id="confirm"
            type="button"
            class="btn btn-sm btn-primary"
            (click)="close(confirm)"
            autofocus
          >
            <span>{{ message.yesText || message.yesCopy || 'AbpIdentity::Yes' | abpLocalization }}</span>
          </button>
        </div>
      </ng-template>
    </p-toast>
  `
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpErrorWrapperComponent {
    constructor() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
    }
    /**
     * @return {?}
     */
    get statusText() {
        return this.status ? `[${this.status}]` : '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.backgroundColor =
            Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
             * @return {?}
             */
            () => window.getComputedStyle(document.body).getPropertyValue('background-color'))) || '#fff';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.customComponent) {
            /** @type {?} */
            const customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.destroy();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
HttpErrorWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-http-error-wrapper',
                template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
HttpErrorWrapperComponent.propDecorators = {
    containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loader-bar/loader-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderBarComponent {
    /**
     * @param {?} actions
     * @param {?} router
     * @param {?} cdRef
     */
    constructor(actions, router, cdRef) {
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 820;
        this.filter = (/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload.url.indexOf('openid-configuration') < 0);
    }
    /**
     * @return {?}
     */
    get boxShadow() {
        return `0 0 10px rgba(${this.color}, 0.5)`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.actions
            .pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StopLoader"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(this.filter), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"])
                this.startLoading();
            else
                this.stopLoading();
        }));
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationError"])), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"])
                this.startLoading();
            else
                this.stopLoading();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.interval.unsubscribe();
    }
    /**
     * @return {?}
     */
    startLoading() {
        if (this.isLoading || this.progressLevel !== 0)
            return;
        this.isLoading = true;
        this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(this.intervalPeriod).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.progressLevel < 75) {
                this.progressLevel += Math.random() * 10;
            }
            else if (this.progressLevel < 90) {
                this.progressLevel += 0.4;
            }
            else if (this.progressLevel < 100) {
                this.progressLevel += 0.1;
            }
            else {
                this.interval.unsubscribe();
            }
            this.cdRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    stopLoading() {
        this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.stopDelay).subscribe((/**
         * @return {?}
         */
        () => {
            this.progressLevel = 0;
            this.cdRef.detectChanges();
        }));
    }
}
LoaderBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-loader-bar',
                template: `
    <div id="abp-loader-bar" [ngClass]="containerClass" [class.is-loading]="isLoading">
      <div
        class="abp-progress"
        [style.width.vw]="progressLevel"
        [ngStyle]="{
          'background-color': color,
          'box-shadow': boxShadow
        }"
      ></div>
    </div>
  `,
                styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;-webkit-transition:opacity .4s linear .4s;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;-webkit-transition:none;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;-webkit-transition:width .4s;transition:width .4s}"]
            }] }
];
/** @nocollapse */
LoaderBarComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LoaderBarComponent.propDecorators = {
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const fadeInDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/modal.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeIn)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut)),
]);
/** @type {?} */
const dialogAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('dialog', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeInDown)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut)),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} renderer
     * @param {?} confirmationService
     */
    constructor(renderer, confirmationService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.centered = false;
        this.modalClass = '';
        this.size = 'lg';
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disappear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._visible = false;
        this._busy = false;
        this.isModalOpen = false;
        this.isConfirmationOpen = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (typeof value !== 'boolean')
            return;
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            setTimeout((/**
             * @return {?}
             */
            () => this.listen()), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
    }
    /**
     * @return {?}
     */
    get busy() {
        return this._busy;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set busy(value) {
        if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
        }
        this._busy = value;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    close() {
        if (this.busy)
            return;
        /** @type {?} */
        let node;
        if (!this.modalContent) {
            node = (/** @type {?} */ (document.getElementById('modal-container')));
        }
        /** @type {?} */
        const nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body')))).childNodes);
        if (hasNgDirty(nodes)) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((/**
             * @param {?} status
             * @return {?}
             */
            (status) => {
                this.isConfirmationOpen = false;
                if (status === "confirm" /* confirm */) {
                    this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    }
    /**
     * @return {?}
     */
    listen() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.abpClose)
                return;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.abpClose.nativeElement, 'click')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
             * @return {?}
             */
            () => !!this.modalContent)))
                .subscribe((/**
             * @return {?}
             */
            () => this.close()));
        }), 0);
        this.init.emit();
    }
}
ModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-modal',
                template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                animations: [fadeAnimation]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ConfirmationService }
];
ModalComponent.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    busy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    modalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    abpSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
    abpHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpHeader', { static: false },] }],
    abpBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpBody', { static: false },] }],
    abpFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpFooter', { static: false },] }],
    abpClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpClose', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['abpModalContent', { static: false },] }],
    abpButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['abp-button',] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    appear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    disappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}
/**
 * @param {?} nodes
 * @return {?}
 */
function getFlatNodes(nodes) {
    return Array.from(nodes).reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...(val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])]), []);
}
/**
 * @param {?} nodes
 * @return {?}
 */
function hasNgDirty(nodes) {
    return nodes.findIndex((/**
     * @param {?} node
     * @return {?}
     */
    node => (node.className || '').indexOf('ng-dirty') > -1)) > -1;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortOrderIconComponent {
    constructor() {
        this.selectedKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSortKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @deprecated use selectedSortKey instead.
     * @param {?} value
     * @return {?}
     */
    set selectedKey(value) {
        this.selectedSortKey = value;
        this.selectedKeyChange.emit(value);
    }
    /**
     * @return {?}
     */
    get selectedKey() {
        return this._selectedSortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedSortKey(value) {
        this._selectedSortKey = value;
        this.selectedSortKeyChange.emit(value);
    }
    /**
     * @return {?}
     */
    get selectedSortKey() {
        return this._selectedSortKey;
    }
    /**
     * @deprecated use sortKey instead.
     * @return {?}
     */
    get key() {
        return this.sortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set key(value) {
        this.sortKey = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set order(value) {
        this._order = value;
        this.orderChange.emit(value);
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @return {?}
     */
    get icon() {
        if (!this.selectedSortKey)
            return 'fa-sort';
        if (this.selectedSortKey === this.sortKey)
            return `fa-sort-${this.order}`;
        else
            return '';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sort(key) {
        this.selectedKey = key; // TODO: To be removed
        this.selectedSortKey = key;
        switch (this.order) {
            case '':
                this.order = 'asc';
                this.orderChange.emit('asc');
                break;
            case 'asc':
                this.order = 'desc';
                this.orderChange.emit('desc');
                break;
            case 'desc':
                this.order = '';
                this.selectedKey = ''; // TODO: To be removed
                this.orderChange.emit('');
                break;
        }
    }
}
SortOrderIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-sort-order-icon',
                template: "<span class=\"float-right {{ iconClass }}\">\r\n  <i class=\"fa {{ icon }}\"></i>\r\n</span>\r\n"
            }] }
];
SortOrderIconComponent.propDecorators = {
    selectedKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedSortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedKeyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    selectedSortKeyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    sortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    orderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    /**
     * @return {?}
     */
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
}
TableEmptyMessageComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                // tslint:disable-next-line: component-selector
                selector: '[abp-table-empty-message]',
                template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
            }] }
];
TableEmptyMessageComponent.propDecorators = {
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localizationResource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localizationProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
}
ToastComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-toast',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <p-toast position="bottom-right" key="abpToast" styleClass="abp-toast" [baseZIndex]="1000">
      <ng-template let-message pTemplate="message">
        <span
          class="ui-toast-icon pi"
          [ngClass]="{
            'pi-info-circle': message.severity === 'info',
            'pi-exclamation-triangle': message.severity === 'warn',
            'pi-times': message.severity === 'error',
            'pi-check': message.severity === 'success'
          }"
        ></span>
        <div class="ui-toast-message-text-content">
          <div class="ui-toast-summary">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>
          <div class="ui-toast-detail">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>
        </div>
      </ng-template>
    </p-toast>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = `
.is-invalid .form-control {
  border-color: #dc3545;
  border-style: solid !important;
}

.is-invalid .invalid-feedback,
.is-invalid + * .invalid-feedback {
  display: block;
}

.data-tables-filter {
  text-align: right;
}

.pointer {
  cursor: pointer;
}

.navbar .dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 18px;
}

.navbar .dropdown-menu {
  min-width: 215px;
}

.ui-table-scrollable-body::-webkit-scrollbar {
  height: 5px !important;
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal.show {
  display: block !important;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 7px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1040;
}

.modal::-webkit-scrollbar {
  width: 7px;
}

.modal::-webkit-scrollbar-track {
  background: #ddd;
}

.modal::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal-dialog {
  z-index: 1050;
}

.abp-ellipsis-inline {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-ellipsis {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-toast .ui-toast-message {
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #1b1d29;
}

.abp-toast .ui-toast-message-content {
  padding: 10px;
}

.abp-toast .ui-toast-message-content .ui-toast-icon {
  top: 0;
  left: 0;
  padding: 10px;
}

.abp-toast .ui-toast-summary {
  margin: 0;
  font-weight: 700;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error {
  border: 2px solid #ba1659;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {
  color: #ba1659;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn {
  border: 2px solid #ed5d98;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-message-content .ui-toast-icon {
  color: #ed5d98;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success {
  border: 2px solid #1c9174;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {
  color: #1c9174;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info {
  border: 2px solid #fccb31;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {
  color: #fccb31;
}

.abp-confirm .ui-toast-message {
  box-sizing: border-box;
  padding: 0px;
  border:0 none;
  border-radius: 4px;
  background-color: transparent !important;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.abp-confirm .ui-toast-message-content {
  padding: 0px;
}

.abp-confirm .abp-confirm-icon {
  margin: 32px 50px 5px !important;
  color: #f8bb86 !important;
  font-size: 52px !important;
}

.abp-confirm .ui-toast-close-icon {
  display: none !important;
}

.abp-confirm .abp-confirm-summary {
  display: block !important;
  margin-bottom: 13px !important;
  padding: 13px 16px 0px !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}

.abp-confirm .abp-confirm-body {
  display: inline-block !important;
  padding: 0px 10px !important;
}

.abp-confirm .abp-confirm-footer {
  display: block;
  margin-top: 30px;
  padding: 16px;
  text-align: right;
}

.abp-confirm .abp-confirm-footer .btn {
  margin-left: 10px !important;
}

.ui-widget-overlay {
  z-index: 1000;
}

.color-white {
  color: #FFF !important;
}

.custom-checkbox > label {
  cursor: pointer;
}

/* <animations */

.fade-in-top {
  animation: fadeInTop 0.2s ease-in-out;
}

.fade-out-top {
  animation: fadeOutTop 0.2s ease-in-out;
}

.abp-collapsed-height {
  -moz-transition: max-height linear 0.35s;
  -ms-transition: max-height linear 0.35s;
  -o-transition: max-height linear 0.35s;
  -webkit-transition: max-height linear 0.35s;
  overflow:hidden;
  transition:max-height 0.35s linear;
  height:auto;
  max-height: 0;
}

.abp-mh-25 {
  max-height: 25vh;
}

.abp-mh-50 {
  transition:max-height 0.65s linear;
  max-height: 50vh;
}

.abp-mh-75 {
  transition:max-height 0.85s linear;
  max-height: 75vh;
}

.abp-mh-100 {
  transition:max-height 1s linear;
  max-height: 100vh;
}

@keyframes fadeInTop {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeOutTop {
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

/* </animations */

`;

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/table-sort.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableSortOptions() { }
if (false) {}
class TableSortDirective {
    /**
     * @param {?} table
     * @param {?} sortPipe
     */
    constructor(table, sortPipe) {
        this.table = table;
        this.sortPipe = sortPipe;
        this.value = [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ value, abpTableSort }) {
        if (value || abpTableSort) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(just_clone__WEBPACK_IMPORTED_MODULE_12___default()(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    }
}
TableSortDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[abpTableSort]',
                providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"]],
            },] }
];
/** @nocollapse */
TableSortDirective.ctorParameters = () => [
    { type: primeng_table__WEBPACK_IMPORTED_MODULE_11__["Table"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"] }
];
TableSortDirective.propDecorators = {
    abpTableSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_ERROR_MESSAGES = {
    defaultError: {
        title: 'An error has occurred!',
        details: 'Error detail not sent by server.',
    },
    defaultError401: {
        title: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.',
    },
    defaultError403: {
        title: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.',
    },
    defaultError404: {
        title: 'Resource not found!',
        details: 'The resource requested could not found on the server.',
    },
    defaultError500: {
        title: 'Internal server error',
        details: 'Error detail not sent by server.',
    },
};
class ErrorHandler {
    /**
     * @param {?} actions
     * @param {?} store
     * @param {?} confirmationService
     * @param {?} appRef
     * @param {?} cfRes
     * @param {?} rendererFactory
     * @param {?} injector
     * @param {?} httpErrorConfig
     */
    constructor(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"])).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"]) {
                const { payload: err = (/** @type {?} */ ({})) } = res;
                /** @type {?} */
                const body = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
                 * @return {?}
                 */
                () => ((/** @type {?} */ (err))).error.error), DEFAULT_ERROR_MESSAGES.defaultError.title);
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpErrorResponse"] && err.headers.get('_AbpErrorFormat')) {
                    /** @type {?} */
                    const confirmation$ = this.showError(null, null, body);
                    if (err.status === 401) {
                        confirmation$.subscribe((/**
                         * @return {?}
                         */
                        () => {
                            this.navigateToLogin();
                        }));
                    }
                }
                else {
                    switch (((/** @type {?} */ (err))).status) {
                        case 401:
                            this.canCreateCustomError(401)
                                ? this.show401Page()
                                : this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage401',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage401Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                }).subscribe((/**
                                 * @return {?}
                                 */
                                () => this.navigateToLogin()));
                            break;
                        case 403:
                            this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::DefaultErrorMessage403',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                                },
                                details: {
                                    key: 'AbpAccount::DefaultErrorMessage403Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                                },
                                status: 403,
                            });
                            break;
                        case 404:
                            this.canCreateCustomError(404)
                                ? this.show404Page()
                                : this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage404',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                });
                            break;
                        case 500:
                            this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::500Message',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                                },
                                details: {
                                    key: 'AbpAccount::InternalServerErrorMessage',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                                },
                                status: 500,
                            });
                            break;
                        case 0:
                            if (((/** @type {?} */ (err))).statusText === 'Unknown Error') {
                                this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::DefaultErrorMessage',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                    },
                                });
                            }
                            break;
                        default:
                            this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                            break;
                    }
                }
            }
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"] && Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
             * @return {?}
             */
            () => res.event.error.indexOf('Cannot match') > -1), false)) {
                this.show404Page();
            }
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"] && this.componentRef) {
                this.componentRef.destroy();
                this.componentRef = null;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    show401Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    }
    /**
     * @private
     * @return {?}
     */
    show404Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    }
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    showError(message, title, body) {
        if (body) {
            if (body.details) {
                message = body.details;
                title = body.message;
            }
            else {
                message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
            }
        }
        return this.confirmationService.error(message, title, {
            hideCancelBtn: true,
            yesText: 'AbpAccount::Close',
        });
    }
    /**
     * @private
     * @return {?}
     */
    navigateToLogin() {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterState"].url) } }));
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    createErrorComponent(instance) {
        /** @type {?} */
        const renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        const host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes.resolveComponentFactory(HttpErrorWrapperComponent).create(this.injector);
        for (const key in this.componentRef.instance) {
            if (this.componentRef.instance.hasOwnProperty(key)) {
                this.componentRef.instance[key] = instance[key];
            }
        }
        this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
        if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
        }
        this.appRef.attachView(this.componentRef.hostView);
        renderer.appendChild(host, ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]);
        /** @type {?} */
        const destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        () => {
            this.componentRef.destroy();
            this.componentRef = null;
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    canCreateCustomError(status) {
        return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
         * @return {?}
         */
        () => this.httpErrorConfig.errorScreen.component &&
            this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1));
    }
}
ErrorHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ErrorHandler.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: ConfirmationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['HTTP_ERROR_CONFIG',] }] }
];
/** @nocollapse */ ErrorHandler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ErrorHandler_Factory() { return new ErrorHandler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ConfirmationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/http-error.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} config
 * @return {?}
 */
function httpErrorConfigFactory(config = (/** @type {?} */ ({}))) {
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (Object.assign({ errorScreen: {} }, config)));
}
/** @type {?} */
const HTTP_ERROR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_ERROR_CONFIG');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-parser-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
class DateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"] {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if (value) {
            /** @type {?} */
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
            }
        }
        return null;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month, date.day), 'shortDate');
        }
        else {
            return date
                ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}`
                : '';
        }
    }
}
DateParserFormatter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
DateParserFormatter.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function appendScript(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        __webpack_require__.e(/*! import() | chart-js */ "chart-js").then(__webpack_require__.t.bind(null, /*! chart.js */ "../../node_modules/chart.js/dist/Chart.js", 7)).then((/**
         * @return {?}
         */
        () => chartJsLoaded$.next(true)));
        /** @type {?} */
        const lazyLoadService = injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LazyLoadService"]);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
class ThemeSharedModule {
    /**
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
        return {
            ngModule: ThemeSharedModule,
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                    useFactory: appendScript,
                },
                { provide: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"], useClass: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
                { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                {
                    provide: 'HTTP_ERROR_CONFIG',
                    useFactory: httpErrorConfigFactory,
                    deps: [HTTP_ERROR_CONFIG],
                },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"], useClass: DateParserFormatter },
            ],
        };
    }
}
ThemeSharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["NgxValidateCoreModule"]],
                declarations: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    HttpErrorWrapperComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                exports: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
                entryComponents: [HttpErrorWrapperComponent],
            },] }
];
/** @nocollapse */
ThemeSharedModule.ctorParameters = () => [
    { type: ErrorHandler }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/bounce.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const bounceIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', display: '{{ display }}' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
    ]))
], {
    params: {
        time: '350ms',
        easing: 'cubic-bezier(.7,.31,.72,1.47)',
        display: 'block',
        transform: 'translate(-50%, -50%)'
    }
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/collapse.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const collapseY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapseYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const collapseX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const expandX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseY)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandY)),
]);
/** @type {?} */
const collapseWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin)),
]);
/** @type {?} */
const collapseLinearWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseLinearWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/slide.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const slideFromBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('slideFromBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '20px', opacity: '0' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', 'margin-top': '0px' })),
    ]),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RootParams() { }
if (false) {}
/**
 * @record
 */
function HttpErrorConfig() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/confirmation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Confirmation;
(function (Confirmation) {
    /**
     * @record
     */
    function Options() { }
    Confirmation.Options = Options;
    if (false) {}
})(Confirmation || (Confirmation = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/setting-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SettingTab() { }
if (false) {}
/** @type {?} */
const SETTING_TABS = (/** @type {?} */ ([]));
/**
 * @param {?} tab
 * @return {?}
 */
function addSettingTab(tab) {
    if (!Array.isArray(tab)) {
        tab = [tab];
    }
    SETTING_TABS.push(...tab);
}
/**
 * @return {?}
 */
function getSettingTabs() {
    return SETTING_TABS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/statistics.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Statistics;
(function (Statistics) {
    /**
     * @record
     */
    function Response() { }
    Statistics.Response = Response;
    if (false) {}
    /**
     * @record
     */
    function Data() { }
    Statistics.Data = Data;
    /**
     * @record
     */
    function Filter() { }
    Statistics.Filter = Filter;
    if (false) {}
})(Statistics || (Statistics = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toaster;
(function (Toaster) {
    /**
     * @record
     */
    function Options() { }
    Toaster.Options = Options;
    if (false) {}
})(Toaster || (Toaster = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToasterService extends AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        super(messageService);
        this.messageService = messageService;
    }
    /**
     * @param {?} messages
     * @return {?}
     */
    addAll(messages) {
        this.messageService.addAll(messages.map((/**
         * @param {?} message
         * @return {?}
         */
        message => (Object.assign({ key: this.key }, message)))));
    }
}
ToasterService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ToasterService.ctorParameters = () => [
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
/** @nocollapse */ ToasterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ToasterService_Factory() { return new ToasterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ToasterService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.theme.shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=abp-ng.theme.shared.js.map


/***/ }),

/***/ "../../libs/setting-management/config/src/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/config/src/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: SettingManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/setting-management/config/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SettingManagementConfigModule"]; });





/***/ }),

/***/ "../../libs/setting-management/config/src/lib/index.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/config/src/lib/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SettingManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting-management-config.module */ "../../libs/setting-management/config/src/lib/setting-management-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function() { return _setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementConfigModule"]; });





/***/ }),

/***/ "../../libs/setting-management/config/src/lib/services/setting-management-config.service.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/config/src/lib/services/setting-management-config.service.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: SettingManagementConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigService", function() { return SettingManagementConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");




let SettingManagementConfigService = class SettingManagementConfigService {
    constructor(store) {
        this.store = store;
        const route = {
            name: 'Setting management',
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            //requiredPolicy: 'AbpAccount.SettingManagement',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
            children: [
                {
                    path: 'settings',
                    name: 'Settings',
                    order: 1,
                    requiredPolicy: 'AbpTenantManagement.Tenants',
                },
            ],
        };
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])(route);
        // setTimeout(() => {
        //   const tabs = getSettingTabs();
        //   if (!tabs || !tabs.length) {
        //     this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', { ...route, invisible: true }));
        //   }
        // });
    }
};
SettingManagementConfigService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SettingManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], SettingManagementConfigService);



/***/ }),

/***/ "../../libs/setting-management/config/src/lib/setting-management-config.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/setting-management/config/src/lib/setting-management-config.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: SettingManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function() { return SettingManagementConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/setting-management-config.service */ "../../libs/setting-management/config/src/lib/services/setting-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");




let SettingManagementConfigModule = class SettingManagementConfigModule {
};
SettingManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__["SettingManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
    })
], SettingManagementConfigModule);



/***/ }),

/***/ "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@angular/common/locales lazy ^\.\/.*\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$ namespace object ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af.js": [
		"../../node_modules/@angular/common/locales/af.js",
		0
	],
	"./am.js": [
		"../../node_modules/@angular/common/locales/am.js",
		1
	],
	"./ar-SA.js": [
		"../../node_modules/@angular/common/locales/ar-SA.js",
		2
	],
	"./as.js": [
		"../../node_modules/@angular/common/locales/as.js",
		3
	],
	"./az-Latn.js": [
		"../../node_modules/@angular/common/locales/az-Latn.js",
		4
	],
	"./bas.js": [
		"../../node_modules/@angular/common/locales/bas.js",
		5
	],
	"./be.js": [
		"../../node_modules/@angular/common/locales/be.js",
		6
	],
	"./bg.js": [
		"../../node_modules/@angular/common/locales/bg.js",
		7
	],
	"./bn-IN.js": [
		"../../node_modules/@angular/common/locales/bn-IN.js",
		8
	],
	"./bs-Latn.js": [
		"../../node_modules/@angular/common/locales/bs-Latn.js",
		9
	],
	"./bs.js": [
		"../../node_modules/@angular/common/locales/bs.js",
		10
	],
	"./ca-ES-VALENCIA.js": [
		"../../node_modules/@angular/common/locales/ca-ES-VALENCIA.js",
		11
	],
	"./ca.js": [
		"../../node_modules/@angular/common/locales/ca.js",
		12
	],
	"./chr.js": [
		"../../node_modules/@angular/common/locales/chr.js",
		13
	],
	"./cs.js": [
		"../../node_modules/@angular/common/locales/cs.js",
		14
	],
	"./cy.js": [
		"../../node_modules/@angular/common/locales/cy.js",
		15
	],
	"./da.js": [
		"../../node_modules/@angular/common/locales/da.js",
		16
	],
	"./de.js": [
		"../../node_modules/@angular/common/locales/de.js",
		17
	],
	"./dyo.js": [
		"../../node_modules/@angular/common/locales/dyo.js",
		18
	],
	"./el.js": [
		"../../node_modules/@angular/common/locales/el.js",
		19
	],
	"./en-GB.js": [
		"../../node_modules/@angular/common/locales/en-GB.js",
		20
	],
	"./en.js": [
		"../../node_modules/@angular/common/locales/en.js"
	],
	"./es-MX.js": [
		"../../node_modules/@angular/common/locales/es-MX.js",
		21
	],
	"./es-US.js": [
		"../../node_modules/@angular/common/locales/es-US.js",
		22
	],
	"./es.js": [
		"../../node_modules/@angular/common/locales/es.js",
		23
	],
	"./et.js": [
		"../../node_modules/@angular/common/locales/et.js",
		24
	],
	"./eu.js": [
		"../../node_modules/@angular/common/locales/eu.js",
		25
	],
	"./ewo.js": [
		"../../node_modules/@angular/common/locales/ewo.js",
		26
	],
	"./extra/af.js": [
		"../../node_modules/@angular/common/locales/extra/af.js",
		27
	],
	"./extra/am.js": [
		"../../node_modules/@angular/common/locales/extra/am.js",
		28
	],
	"./extra/ar-SA.js": [
		"../../node_modules/@angular/common/locales/extra/ar-SA.js",
		29
	],
	"./extra/as.js": [
		"../../node_modules/@angular/common/locales/extra/as.js",
		30
	],
	"./extra/az-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/az-Latn.js",
		31
	],
	"./extra/bas.js": [
		"../../node_modules/@angular/common/locales/extra/bas.js",
		32
	],
	"./extra/be.js": [
		"../../node_modules/@angular/common/locales/extra/be.js",
		33
	],
	"./extra/bg.js": [
		"../../node_modules/@angular/common/locales/extra/bg.js",
		34
	],
	"./extra/bn-IN.js": [
		"../../node_modules/@angular/common/locales/extra/bn-IN.js",
		35
	],
	"./extra/bs-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/bs-Latn.js",
		36
	],
	"./extra/bs.js": [
		"../../node_modules/@angular/common/locales/extra/bs.js",
		37
	],
	"./extra/ca-ES-VALENCIA.js": [
		"../../node_modules/@angular/common/locales/extra/ca-ES-VALENCIA.js",
		38
	],
	"./extra/ca.js": [
		"../../node_modules/@angular/common/locales/extra/ca.js",
		39
	],
	"./extra/chr.js": [
		"../../node_modules/@angular/common/locales/extra/chr.js",
		40
	],
	"./extra/cs.js": [
		"../../node_modules/@angular/common/locales/extra/cs.js",
		41
	],
	"./extra/cy.js": [
		"../../node_modules/@angular/common/locales/extra/cy.js",
		42
	],
	"./extra/da.js": [
		"../../node_modules/@angular/common/locales/extra/da.js",
		43
	],
	"./extra/de.js": [
		"../../node_modules/@angular/common/locales/extra/de.js",
		44
	],
	"./extra/dyo.js": [
		"../../node_modules/@angular/common/locales/extra/dyo.js",
		45
	],
	"./extra/el.js": [
		"../../node_modules/@angular/common/locales/extra/el.js",
		46
	],
	"./extra/en-GB.js": [
		"../../node_modules/@angular/common/locales/extra/en-GB.js",
		47
	],
	"./extra/en.js": [
		"../../node_modules/@angular/common/locales/extra/en.js",
		48
	],
	"./extra/es-MX.js": [
		"../../node_modules/@angular/common/locales/extra/es-MX.js",
		49
	],
	"./extra/es-US.js": [
		"../../node_modules/@angular/common/locales/extra/es-US.js",
		50
	],
	"./extra/es.js": [
		"../../node_modules/@angular/common/locales/extra/es.js",
		51
	],
	"./extra/et.js": [
		"../../node_modules/@angular/common/locales/extra/et.js",
		52
	],
	"./extra/eu.js": [
		"../../node_modules/@angular/common/locales/extra/eu.js",
		53
	],
	"./extra/ewo.js": [
		"../../node_modules/@angular/common/locales/extra/ewo.js",
		54
	],
	"./extra/fa.js": [
		"../../node_modules/@angular/common/locales/extra/fa.js",
		55
	],
	"./extra/fi.js": [
		"../../node_modules/@angular/common/locales/extra/fi.js",
		56
	],
	"./extra/fr-CA.js": [
		"../../node_modules/@angular/common/locales/extra/fr-CA.js",
		57
	],
	"./extra/fr.js": [
		"../../node_modules/@angular/common/locales/extra/fr.js",
		58
	],
	"./extra/fur.js": [
		"../../node_modules/@angular/common/locales/extra/fur.js",
		59
	],
	"./extra/ga.js": [
		"../../node_modules/@angular/common/locales/extra/ga.js",
		60
	],
	"./extra/gd.js": [
		"../../node_modules/@angular/common/locales/extra/gd.js",
		61
	],
	"./extra/gl.js": [
		"../../node_modules/@angular/common/locales/extra/gl.js",
		62
	],
	"./extra/gsw.js": [
		"../../node_modules/@angular/common/locales/extra/gsw.js",
		63
	],
	"./extra/gu.js": [
		"../../node_modules/@angular/common/locales/extra/gu.js",
		64
	],
	"./extra/ha.js": [
		"../../node_modules/@angular/common/locales/extra/ha.js",
		65
	],
	"./extra/he.js": [
		"../../node_modules/@angular/common/locales/extra/he.js",
		66
	],
	"./extra/hi.js": [
		"../../node_modules/@angular/common/locales/extra/hi.js",
		67
	],
	"./extra/hr.js": [
		"../../node_modules/@angular/common/locales/extra/hr.js",
		68
	],
	"./extra/hu.js": [
		"../../node_modules/@angular/common/locales/extra/hu.js",
		69
	],
	"./extra/hy.js": [
		"../../node_modules/@angular/common/locales/extra/hy.js",
		70
	],
	"./extra/id.js": [
		"../../node_modules/@angular/common/locales/extra/id.js",
		71
	],
	"./extra/ig.js": [
		"../../node_modules/@angular/common/locales/extra/ig.js",
		72
	],
	"./extra/is.js": [
		"../../node_modules/@angular/common/locales/extra/is.js",
		73
	],
	"./extra/it.js": [
		"../../node_modules/@angular/common/locales/extra/it.js",
		74
	],
	"./extra/ja.js": [
		"../../node_modules/@angular/common/locales/extra/ja.js",
		75
	],
	"./extra/ka.js": [
		"../../node_modules/@angular/common/locales/extra/ka.js",
		76
	],
	"./extra/kam.js": [
		"../../node_modules/@angular/common/locales/extra/kam.js",
		77
	],
	"./extra/kde.js": [
		"../../node_modules/@angular/common/locales/extra/kde.js",
		78
	],
	"./extra/kk.js": [
		"../../node_modules/@angular/common/locales/extra/kk.js",
		79
	],
	"./extra/km.js": [
		"../../node_modules/@angular/common/locales/extra/km.js",
		80
	],
	"./extra/kn.js": [
		"../../node_modules/@angular/common/locales/extra/kn.js",
		81
	],
	"./extra/ko.js": [
		"../../node_modules/@angular/common/locales/extra/ko.js",
		82
	],
	"./extra/kok.js": [
		"../../node_modules/@angular/common/locales/extra/kok.js",
		83
	],
	"./extra/lb.js": [
		"../../node_modules/@angular/common/locales/extra/lb.js",
		84
	],
	"./extra/lt.js": [
		"../../node_modules/@angular/common/locales/extra/lt.js",
		85
	],
	"./extra/lv.js": [
		"../../node_modules/@angular/common/locales/extra/lv.js",
		86
	],
	"./extra/mas.js": [
		"../../node_modules/@angular/common/locales/extra/mas.js",
		87
	],
	"./extra/mk.js": [
		"../../node_modules/@angular/common/locales/extra/mk.js",
		88
	],
	"./extra/ml.js": [
		"../../node_modules/@angular/common/locales/extra/ml.js",
		89
	],
	"./extra/mn.js": [
		"../../node_modules/@angular/common/locales/extra/mn.js",
		90
	],
	"./extra/mr.js": [
		"../../node_modules/@angular/common/locales/extra/mr.js",
		91
	],
	"./extra/ms.js": [
		"../../node_modules/@angular/common/locales/extra/ms.js",
		92
	],
	"./extra/mt.js": [
		"../../node_modules/@angular/common/locales/extra/mt.js",
		93
	],
	"./extra/nb.js": [
		"../../node_modules/@angular/common/locales/extra/nb.js",
		94
	],
	"./extra/ne.js": [
		"../../node_modules/@angular/common/locales/extra/ne.js",
		95
	],
	"./extra/nl-BE.js": [
		"../../node_modules/@angular/common/locales/extra/nl-BE.js",
		96
	],
	"./extra/nl.js": [
		"../../node_modules/@angular/common/locales/extra/nl.js",
		97
	],
	"./extra/nn.js": [
		"../../node_modules/@angular/common/locales/extra/nn.js",
		98
	],
	"./extra/or.js": [
		"../../node_modules/@angular/common/locales/extra/or.js",
		99
	],
	"./extra/pa-Arab.js": [
		"../../node_modules/@angular/common/locales/extra/pa-Arab.js",
		100
	],
	"./extra/pa-Guru.js": [
		"../../node_modules/@angular/common/locales/extra/pa-Guru.js",
		101
	],
	"./extra/pa.js": [
		"../../node_modules/@angular/common/locales/extra/pa.js",
		102
	],
	"./extra/pl.js": [
		"../../node_modules/@angular/common/locales/extra/pl.js",
		103
	],
	"./extra/pt-PT.js": [
		"../../node_modules/@angular/common/locales/extra/pt-PT.js",
		104
	],
	"./extra/pt.js": [
		"../../node_modules/@angular/common/locales/extra/pt.js",
		105
	],
	"./extra/ro.js": [
		"../../node_modules/@angular/common/locales/extra/ro.js",
		106
	],
	"./extra/ru.js": [
		"../../node_modules/@angular/common/locales/extra/ru.js",
		107
	],
	"./extra/rw.js": [
		"../../node_modules/@angular/common/locales/extra/rw.js",
		108
	],
	"./extra/ses.js": [
		"../../node_modules/@angular/common/locales/extra/ses.js",
		109
	],
	"./extra/shi-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/shi-Latn.js",
		110
	],
	"./extra/shi.js": [
		"../../node_modules/@angular/common/locales/extra/shi.js",
		111
	],
	"./extra/si.js": [
		"../../node_modules/@angular/common/locales/extra/si.js",
		112
	],
	"./extra/sk.js": [
		"../../node_modules/@angular/common/locales/extra/sk.js",
		113
	],
	"./extra/sl.js": [
		"../../node_modules/@angular/common/locales/extra/sl.js",
		114
	],
	"./extra/smn.js": [
		"../../node_modules/@angular/common/locales/extra/smn.js",
		115
	],
	"./extra/sq.js": [
		"../../node_modules/@angular/common/locales/extra/sq.js",
		116
	],
	"./extra/sr-Cyrl-BA.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Cyrl-BA.js",
		117
	],
	"./extra/sr-Cyrl.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Cyrl.js",
		118
	],
	"./extra/sr-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Latn.js",
		119
	],
	"./extra/sv.js": [
		"../../node_modules/@angular/common/locales/extra/sv.js",
		120
	],
	"./extra/sw.js": [
		"../../node_modules/@angular/common/locales/extra/sw.js",
		121
	],
	"./extra/ta.js": [
		"../../node_modules/@angular/common/locales/extra/ta.js",
		122
	],
	"./extra/te.js": [
		"../../node_modules/@angular/common/locales/extra/te.js",
		123
	],
	"./extra/tg.js": [
		"../../node_modules/@angular/common/locales/extra/tg.js",
		124
	],
	"./extra/th.js": [
		"../../node_modules/@angular/common/locales/extra/th.js",
		125
	],
	"./extra/ti.js": [
		"../../node_modules/@angular/common/locales/extra/ti.js",
		126
	],
	"./extra/tk.js": [
		"../../node_modules/@angular/common/locales/extra/tk.js",
		127
	],
	"./extra/tr.js": [
		"../../node_modules/@angular/common/locales/extra/tr.js",
		128
	],
	"./extra/tt.js": [
		"../../node_modules/@angular/common/locales/extra/tt.js",
		129
	],
	"./extra/ug.js": [
		"../../node_modules/@angular/common/locales/extra/ug.js",
		130
	],
	"./extra/uk.js": [
		"../../node_modules/@angular/common/locales/extra/uk.js",
		131
	],
	"./extra/ur.js": [
		"../../node_modules/@angular/common/locales/extra/ur.js",
		132
	],
	"./extra/uz-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/uz-Latn.js",
		133
	],
	"./extra/vai-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/vai-Latn.js",
		134
	],
	"./extra/vi.js": [
		"../../node_modules/@angular/common/locales/extra/vi.js",
		135
	],
	"./extra/wo.js": [
		"../../node_modules/@angular/common/locales/extra/wo.js",
		136
	],
	"./extra/yo.js": [
		"../../node_modules/@angular/common/locales/extra/yo.js",
		137
	],
	"./extra/zh-Hans.js": [
		"../../node_modules/@angular/common/locales/extra/zh-Hans.js",
		138
	],
	"./extra/zh-Hant.js": [
		"../../node_modules/@angular/common/locales/extra/zh-Hant.js",
		139
	],
	"./extra/zu.js": [
		"../../node_modules/@angular/common/locales/extra/zu.js",
		140
	],
	"./fa.js": [
		"../../node_modules/@angular/common/locales/fa.js",
		141
	],
	"./fi.js": [
		"../../node_modules/@angular/common/locales/fi.js",
		142
	],
	"./fr-CA.js": [
		"../../node_modules/@angular/common/locales/fr-CA.js",
		143
	],
	"./fr.js": [
		"../../node_modules/@angular/common/locales/fr.js",
		144
	],
	"./fur.js": [
		"../../node_modules/@angular/common/locales/fur.js",
		145
	],
	"./ga.js": [
		"../../node_modules/@angular/common/locales/ga.js",
		146
	],
	"./gd.js": [
		"../../node_modules/@angular/common/locales/gd.js",
		147
	],
	"./gl.js": [
		"../../node_modules/@angular/common/locales/gl.js",
		148
	],
	"./gsw.js": [
		"../../node_modules/@angular/common/locales/gsw.js",
		149
	],
	"./gu.js": [
		"../../node_modules/@angular/common/locales/gu.js",
		150
	],
	"./ha.js": [
		"../../node_modules/@angular/common/locales/ha.js",
		151
	],
	"./he.js": [
		"../../node_modules/@angular/common/locales/he.js",
		152
	],
	"./hi.js": [
		"../../node_modules/@angular/common/locales/hi.js",
		153
	],
	"./hr.js": [
		"../../node_modules/@angular/common/locales/hr.js",
		154
	],
	"./hu.js": [
		"../../node_modules/@angular/common/locales/hu.js",
		155
	],
	"./hy.js": [
		"../../node_modules/@angular/common/locales/hy.js",
		156
	],
	"./id.js": [
		"../../node_modules/@angular/common/locales/id.js",
		157
	],
	"./ig.js": [
		"../../node_modules/@angular/common/locales/ig.js",
		158
	],
	"./is.js": [
		"../../node_modules/@angular/common/locales/is.js",
		159
	],
	"./it.js": [
		"../../node_modules/@angular/common/locales/it.js",
		160
	],
	"./ja.js": [
		"../../node_modules/@angular/common/locales/ja.js",
		161
	],
	"./ka.js": [
		"../../node_modules/@angular/common/locales/ka.js",
		162
	],
	"./kam.js": [
		"../../node_modules/@angular/common/locales/kam.js",
		163
	],
	"./kde.js": [
		"../../node_modules/@angular/common/locales/kde.js",
		164
	],
	"./kk.js": [
		"../../node_modules/@angular/common/locales/kk.js",
		165
	],
	"./km.js": [
		"../../node_modules/@angular/common/locales/km.js",
		166
	],
	"./kn.js": [
		"../../node_modules/@angular/common/locales/kn.js",
		167
	],
	"./ko.js": [
		"../../node_modules/@angular/common/locales/ko.js",
		168
	],
	"./kok.js": [
		"../../node_modules/@angular/common/locales/kok.js",
		169
	],
	"./lb.js": [
		"../../node_modules/@angular/common/locales/lb.js",
		170
	],
	"./lt.js": [
		"../../node_modules/@angular/common/locales/lt.js",
		171
	],
	"./lv.js": [
		"../../node_modules/@angular/common/locales/lv.js",
		172
	],
	"./mas.js": [
		"../../node_modules/@angular/common/locales/mas.js",
		173
	],
	"./mk.js": [
		"../../node_modules/@angular/common/locales/mk.js",
		174
	],
	"./ml.js": [
		"../../node_modules/@angular/common/locales/ml.js",
		175
	],
	"./mn.js": [
		"../../node_modules/@angular/common/locales/mn.js",
		176
	],
	"./mr.js": [
		"../../node_modules/@angular/common/locales/mr.js",
		177
	],
	"./ms.js": [
		"../../node_modules/@angular/common/locales/ms.js",
		178
	],
	"./mt.js": [
		"../../node_modules/@angular/common/locales/mt.js",
		179
	],
	"./nb.js": [
		"../../node_modules/@angular/common/locales/nb.js",
		180
	],
	"./ne.js": [
		"../../node_modules/@angular/common/locales/ne.js",
		181
	],
	"./nl-BE.js": [
		"../../node_modules/@angular/common/locales/nl-BE.js",
		182
	],
	"./nl.js": [
		"../../node_modules/@angular/common/locales/nl.js",
		183
	],
	"./nn.js": [
		"../../node_modules/@angular/common/locales/nn.js",
		184
	],
	"./or.js": [
		"../../node_modules/@angular/common/locales/or.js",
		185
	],
	"./pa-Arab.js": [
		"../../node_modules/@angular/common/locales/pa-Arab.js",
		186
	],
	"./pa-Guru.js": [
		"../../node_modules/@angular/common/locales/pa-Guru.js",
		187
	],
	"./pa.js": [
		"../../node_modules/@angular/common/locales/pa.js",
		188
	],
	"./pl.js": [
		"../../node_modules/@angular/common/locales/pl.js",
		189
	],
	"./pt-PT.js": [
		"../../node_modules/@angular/common/locales/pt-PT.js",
		190
	],
	"./pt.js": [
		"../../node_modules/@angular/common/locales/pt.js",
		191
	],
	"./ro.js": [
		"../../node_modules/@angular/common/locales/ro.js",
		192
	],
	"./ru.js": [
		"../../node_modules/@angular/common/locales/ru.js",
		193
	],
	"./rw.js": [
		"../../node_modules/@angular/common/locales/rw.js",
		194
	],
	"./ses.js": [
		"../../node_modules/@angular/common/locales/ses.js",
		195
	],
	"./shi-Latn.js": [
		"../../node_modules/@angular/common/locales/shi-Latn.js",
		196
	],
	"./shi.js": [
		"../../node_modules/@angular/common/locales/shi.js",
		197
	],
	"./si.js": [
		"../../node_modules/@angular/common/locales/si.js",
		198
	],
	"./sk.js": [
		"../../node_modules/@angular/common/locales/sk.js",
		199
	],
	"./sl.js": [
		"../../node_modules/@angular/common/locales/sl.js",
		200
	],
	"./smn.js": [
		"../../node_modules/@angular/common/locales/smn.js",
		201
	],
	"./sq.js": [
		"../../node_modules/@angular/common/locales/sq.js",
		202
	],
	"./sr-Cyrl-BA.js": [
		"../../node_modules/@angular/common/locales/sr-Cyrl-BA.js",
		203
	],
	"./sr-Cyrl.js": [
		"../../node_modules/@angular/common/locales/sr-Cyrl.js",
		204
	],
	"./sr-Latn.js": [
		"../../node_modules/@angular/common/locales/sr-Latn.js",
		205
	],
	"./sv.js": [
		"../../node_modules/@angular/common/locales/sv.js",
		206
	],
	"./sw.js": [
		"../../node_modules/@angular/common/locales/sw.js",
		207
	],
	"./ta.js": [
		"../../node_modules/@angular/common/locales/ta.js",
		208
	],
	"./te.js": [
		"../../node_modules/@angular/common/locales/te.js",
		209
	],
	"./tg.js": [
		"../../node_modules/@angular/common/locales/tg.js",
		210
	],
	"./th.js": [
		"../../node_modules/@angular/common/locales/th.js",
		211
	],
	"./ti.js": [
		"../../node_modules/@angular/common/locales/ti.js",
		212
	],
	"./tk.js": [
		"../../node_modules/@angular/common/locales/tk.js",
		213
	],
	"./tr.js": [
		"../../node_modules/@angular/common/locales/tr.js",
		214
	],
	"./tt.js": [
		"../../node_modules/@angular/common/locales/tt.js",
		215
	],
	"./ug.js": [
		"../../node_modules/@angular/common/locales/ug.js",
		216
	],
	"./uk.js": [
		"../../node_modules/@angular/common/locales/uk.js",
		217
	],
	"./ur.js": [
		"../../node_modules/@angular/common/locales/ur.js",
		218
	],
	"./uz-Latn.js": [
		"../../node_modules/@angular/common/locales/uz-Latn.js",
		219
	],
	"./vai-Latn.js": [
		"../../node_modules/@angular/common/locales/vai-Latn.js",
		220
	],
	"./vi.js": [
		"../../node_modules/@angular/common/locales/vi.js",
		221
	],
	"./wo.js": [
		"../../node_modules/@angular/common/locales/wo.js",
		222
	],
	"./yo.js": [
		"../../node_modules/@angular/common/locales/yo.js",
		223
	],
	"./zh-Hans.js": [
		"../../node_modules/@angular/common/locales/zh-Hans.js",
		224
	],
	"./zh-Hant.js": [
		"../../node_modules/@angular/common/locales/zh-Hant.js"
	],
	"./zu.js": [
		"../../node_modules/@angular/common/locales/zu.js",
		225
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"navbar navbar-expand-md navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container \">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <ng-container\r\n            *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n            [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n          >\r\n          </ng-container>\r\n\r\n          <ng-template #defaultLink let-route>\r\n            <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n              <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n                ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownLink let-route>\r\n            <li\r\n              #navbarRootDropdown\r\n              *abpPermission=\"route.requiredPolicy\"\r\n              [abpVisibility]=\"routeContainer\"\r\n              class=\"nav-item dropdown\"\r\n              display=\"static\"\r\n              (click)=\"\r\n                navbarRootDropdown.expand ? (navbarRootDropdown.expand = false) : (navbarRootDropdown.expand = true)\r\n              \"\r\n            >\r\n              <a\r\n                class=\"nav-link dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}\r\n              </a>\r\n              <div\r\n                #routeContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && navbarRootDropdown.expand\"\r\n              >\r\n                <ng-template\r\n                  #forTemplate\r\n                  ngFor\r\n                  [ngForOf]=\"route.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #childWrapper let-child>\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n            ></ng-template>\r\n          </ng-template>\r\n\r\n          <ng-template #defaultChild let-child>\r\n            <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n                <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                {{ child.name | abpLocalization }}</a\r\n              >\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownChild let-child>\r\n            <div\r\n              [abpVisibility]=\"childrenContainer\"\r\n              class=\"dropdown-submenu\"\r\n              ngbDropdown\r\n              #dropdownSubmenu=\"ngbDropdown\"\r\n              [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n              placement=\"right-top\"\r\n              [autoClose]=\"true\"\r\n              *abpPermission=\"child.requiredPolicy\"\r\n              (openChange)=\"openChange($event, childrenContainer)\"\r\n            >\r\n              <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n                <a\r\n                  abpEllipsis=\"210px\"\r\n                  [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n                  role=\"button\"\r\n                  class=\"btn d-block text-left dropdown-toggle\"\r\n                >\r\n                  <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                  {{ child.name | abpLocalization }}\r\n                </a>\r\n              </div>\r\n              <div\r\n                #childrenContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n              >\r\n                <ng-template\r\n                  ngFor\r\n                  [ngForOf]=\"child.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav\">\r\n          <ng-container\r\n            *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n            [ngTemplateOutlet]=\"element\"\r\n          ></ng-container>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div [@slideFromBottom]=\"outlet && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\" class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n\r\n<ng-template #language>\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li *ngIf=\"(currentUser$ | async)?.isAuthenticated\" class=\"nav-item\">\r\n    <div ngbDropdown class=\"dropdown\" #currentUserDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"><i class=\"fa fa-cog mr-1\"></i>{{\r\n          'AbpAccount::ManageYourProfile' | abpLocalization\r\n        }}</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"fa fa-power-off mr-1\"></i>{{\r\n          'AbpUi::Logout' | abpLocalization\r\n        }}</a>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/default.component.html":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/default.component.html ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/header/header.component.html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/header.component.html ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__header-logo\">\r\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\r\n    <img\r\n      class=\"alain-default__header-logo-expanded\"\r\n      src=\"./assets/logo-full.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:40px;\"\r\n    />\r\n    <img\r\n      class=\"alain-default__header-logo-collapsed\"\r\n      src=\"./assets/logo.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:30px;\"\r\n    />\r\n  </a>\r\n</div>\r\n<div class=\"alain-default__nav-wrap\">\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\r\n        <i nz-icon nzType=\"menu-{{ settings.layout.collapsed ? 'unfold' : 'fold' }}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <!--<li>\r\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\r\n        <i nz-icon nzType=\"github\"></i>\r\n      </a>\r\n    </li>-->\r\n    <!-- Lock Page -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\r\n        <i nz-icon nzType=\"lock\"></i>\r\n      </div>\r\n    </li>-->\r\n    <!-- Search Button -->\r\n    <!--<li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\r\n      <div class=\"alain-default__nav-item\">\r\n        <i nz-icon nzType=\"search\"></i>\r\n      </div>\r\n    </li>-->\r\n  </ul>\r\n  <!--<header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>-->\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Notify -->\r\n    <!--<li>\r\n      <header-notify></header-notify>\r\n    </li>-->\r\n    <!-- Task -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-task></header-task>\r\n    </li>-->\r\n    <!-- App Icons -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-icon></header-icon>\r\n    </li>-->\r\n    <!-- Settings -->\r\n    <li class=\"hidden-mobile\">\r\n      <div\r\n        class=\"alain-default__nav-item\"\r\n        nz-dropdown\r\n        [nzDropdownMenu]=\"settingsMenu\"\r\n        nzTrigger=\"click\"\r\n        nzPlacement=\"bottomRight\"\r\n      >\r\n        <i nz-icon nzType=\"setting\"></i>\r\n      </div>\r\n      <nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n        <div nz-menu style=\"width:200px;\">\r\n          <!--<div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div>-->\r\n          <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown-menu>\r\n    </li>\r\n    <li class=\"hidden-mobile\">\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.html":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.html ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.html":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">主题色</h3>\r\n      <span\r\n        *ngFor=\"let c of colors\"\r\n        nz-tooltip\r\n        [ngStyle]=\"{ 'background-color': c.color }\"\r\n        (click)=\"changeColor(c.color)\"\r\n        nz-tooltip\r\n        [nzTitle]=\"c.key\"\r\n        class=\"setting-drawer__theme-tag\"\r\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\r\n      ></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">设置</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"顶部\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"侧边栏\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"内容\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"其它\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        固定头和侧边栏\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.fixed\"\r\n          (ngModelChange)=\"setLayout('fixed', layout.fixed)\"\r\n        ></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        色弱模式\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.colorWeak\"\r\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\r\n        ></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">预览</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>重置</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>拷贝</button>\r\n    <nz-alert\r\n      class=\"mt-md\"\r\n      nzType=\"warning\"\r\n      nzMessage=\"配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改参数配置文件 src/styles/theme.less\"\r\n    ></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\r\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__aside-inner\">\r\n  <!--<div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div>\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>-->\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.html ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/passport/passport.component.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  \r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\r\n    </global-footer>\r\n  </div>\r\n\r\n\r\n</div>\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!***************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../../packages/account-config/src/lib/account-config.module.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/account-config.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function() { return accountOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return ACCOUNT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function() { return AccountConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/account-config.service */ "../../packages/account-config/src/lib/services/account-config.service.ts");
var AccountConfigModule_1;





function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
const ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ACCOUNT_OPTIONS');
let AccountConfigModule = AccountConfigModule_1 = class AccountConfigModule {
    static forRoot(options = {}) {
        return {
            ngModule: AccountConfigModule_1,
            providers: [
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
};
AccountConfigModule = AccountConfigModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"], multi: true, deps: [_services_account_config_service__WEBPACK_IMPORTED_MODULE_4__["AccountConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"] }],
    })
], AccountConfigModule);



/***/ }),

/***/ "../../packages/account-config/src/lib/services/account-config.service.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/services/account-config.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AccountConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountConfigService", function() { return AccountConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




let AccountConfigService = class AccountConfigService {
    constructor(router, restService) {
        this.router = router;
        this.restService = restService;
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])({
            name: 'AbpAccount::Menu:Account',
            path: 'account',
            invisible: true,
            layout: "application" /* application */,
            children: [
                { path: 'login', name: 'AbpAccount::Login', order: 1 },
                { path: 'register', name: 'AbpAccount::Register', order: 2 },
                { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3 },
            ],
        });
    }
};
AccountConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
];
AccountConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
], AccountConfigService);



/***/ }),

/***/ "../../packages/account-config/src/public-api.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/public-api.ts ***!
  \*************************************************************************************************/
/*! exports provided: AccountConfigService, accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/account-config.service */ "../../packages/account-config/src/lib/services/account-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountConfigService", function() { return _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__["AccountConfigService"]; });

/* harmony import */ var _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/account-config.module */ "../../packages/account-config/src/lib/account-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["accountOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["AccountConfigModule"]; });






/***/ }),

/***/ "../../packages/identity-config/src/lib/identity-config.module.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/identity-config.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: IdentityConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function() { return IdentityConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/identity-config.service */ "../../packages/identity-config/src/lib/services/identity-config.service.ts");




let IdentityConfigModule = class IdentityConfigModule {
};
IdentityConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], deps: [_services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"], multi: true }],
    })
], IdentityConfigModule);



/***/ }),

/***/ "../../packages/identity-config/src/lib/services/identity-config.service.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/services/identity-config.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: IdentityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function() { return IdentityConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




let IdentityConfigService = class IdentityConfigService {
    constructor(router, restService) {
        this.router = router;
        this.restService = restService;
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])([
            {
                name: 'AbpUiNavigation::Menu:Administration',
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: 'AbpIdentity::Menu:IdentityManagement',
                path: 'identity',
                order: 1,
                parentName: 'AbpUiNavigation::Menu:Administration',
                layout: "application" /* application */,
                iconClass: 'fa fa-id-card-o',
                children: [
                    { path: 'roles', name: 'AbpIdentity::Roles', order: 1, requiredPolicy: 'AbpIdentity.Roles' },
                    { path: 'users', name: 'AbpIdentity::Users', order: 2, requiredPolicy: 'AbpIdentity.Users' },
                ],
            },
        ]);
    }
};
IdentityConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
];
IdentityConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
], IdentityConfigService);



/***/ }),

/***/ "../../packages/identity-config/src/public-api.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/public-api.ts ***!
  \**************************************************************************************************/
/*! exports provided: IdentityConfigService, IdentityConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/identity-config.service */ "../../packages/identity-config/src/lib/services/identity-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function() { return _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__["IdentityConfigService"]; });

/* harmony import */ var _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/identity-config.module */ "../../packages/identity-config/src/lib/identity-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function() { return _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__["IdentityConfigModule"]; });






/***/ }),

/***/ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: TenantManagementConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function() { return TenantManagementConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");



let TenantManagementConfigService = class TenantManagementConfigService {
    constructor() {
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])({
            name: 'AbpTenantManagement::Menu:TenantManagement',
            path: 'tenant-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            layout: "application" /* application */,
            iconClass: 'fa fa-users',
            children: [
                {
                    path: 'tenants',
                    name: 'AbpTenantManagement::Tenants',
                    order: 1,
                    requiredPolicy: 'AbpTenantManagement.Tenants',
                },
            ],
        });
    }
};
TenantManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TenantManagementConfigService);



/***/ }),

/***/ "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/tenant-management-config.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: TenantManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function() { return TenantManagementConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tenant-management-config.service */ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");




let TenantManagementConfigModule = class TenantManagementConfigModule {
};
TenantManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
    })
], TenantManagementConfigModule);



/***/ }),

/***/ "../../packages/tenant-management-config/src/public-api.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/public-api.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TenantManagementConfigService, TenantManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/tenant-management-config.service */ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function() { return _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__["TenantManagementConfigService"]; });

/* harmony import */ var _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tenant-management-config.module */ "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function() { return _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigModule"]; });






/***/ }),

/***/ "../../packages/theme-basic/src/lib/actions/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddNavigationElement, RemoveNavigationElementByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.actions */ "../../packages/theme-basic/src/lib/actions/layout.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["AddNavigationElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveNavigationElementByName"]; });





/***/ }),

/***/ "../../packages/theme-basic/src/lib/actions/layout.actions.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/layout.actions.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddNavigationElement, RemoveNavigationElementByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return AddNavigationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return RemoveNavigationElementByName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class AddNavigationElement {
    constructor(payload) {
        this.payload = payload;
    }
}
AddNavigationElement.type = '[Layout] Add Navigation Element';
class RemoveNavigationElementByName {
    constructor(name) {
        this.name = name;
    }
}
RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';


/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AccountLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return AccountLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AccountLayoutComponent = class AccountLayoutComponent {
};
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-layout-account',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast></abp-toast>
  `,
    })
], AccountLayoutComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ApplicationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return ApplicationLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions */ "../../packages/theme-basic/src/lib/actions/index.ts");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../states */ "../../packages/theme-basic/src/lib/states/index.ts");













let ApplicationLayoutComponent = class ApplicationLayoutComponent {
    constructor(store, oauthService, renderer) {
        this.store = store;
        this.oauthService = oauthService;
        this.renderer = renderer;
        this.isCollapsed = true;
        this.rightPartElements = [];
        this.trackByFn = (_, item) => item.name;
        this.trackElementByFn = (_, element) => element;
    }
    get appInfo() {
        return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getApplicationInfo);
    }
    get visibleRoutes$() {
        return this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(routes => getVisibleRoutes(routes)));
    }
    get defaultLanguage$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getLanguage);
    }
    checkWindowWidth() {
        setTimeout(() => {
            if (window.innerWidth < 768) {
                this.isDropdownChildDynamic = false;
                if (this.smallScreen === false) {
                    this.isCollapsed = false;
                    setTimeout(() => {
                        this.isCollapsed = true;
                    }, 100);
                }
                this.smallScreen = true;
            }
            else {
                this.isDropdownChildDynamic = true;
                this.smallScreen = false;
            }
        }, 0);
    }
    ngAfterViewInit() {
        const navigations = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements).map(({ name }) => name);
        if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_11__["AddNavigationElement"]([
                { element: this.languageRef, order: 4, name: 'LanguageRef' },
                { element: this.currentUserRef, order: 5, name: 'CurrentUserRef' },
            ]));
        }
        this.navElements$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(elements => elements.map(({ element }) => element)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(elements => !just_compare__WEBPACK_IMPORTED_MODULE_7___default()(elements, this.rightPartElements)), Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this))
            .subscribe(elements => {
            setTimeout(() => (this.rightPartElements = elements), 0);
        });
        this.checkWindowWidth();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150))
            .subscribe(() => {
            this.checkWindowWidth();
        });
    }
    ngOnDestroy() { }
    onChangeLang(cultureName) {
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetLanguage"](cultureName));
    }
    logout() {
        this.oauthService.logOut();
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"](['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["RouterState"]).state.url },
        }));
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]());
    }
    openChange(event, childrenContainer) {
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter(key => Number.isInteger(+key))
                .forEach(key => {
                this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            });
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    }
};
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('routes')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "routes$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('currentUser')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getDeep('localization.languages')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "languages$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "navElements$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('currentUser', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
], ApplicationLayoutComponent.prototype, "currentUserRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('language', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
], ApplicationLayoutComponent.prototype, "languageRef", void 0);
ApplicationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abp-layout-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-layout.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html")).default,
        animations: [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["slideFromBottom"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["collapseWithMargin"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])
], ApplicationLayoutComponent);

function getVisibleRoutes(routes) {
    return routes.reduce((acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }, []);
}


/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: EmptyLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return EmptyLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let EmptyLayoutComponent = class EmptyLayoutComponent {
};
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-layout-empty',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast></abp-toast>
  `,
    })
], EmptyLayoutComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: EmptyLayoutComponent, ValidationErrorComponent, AccountLayoutComponent, ApplicationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-layout/account-layout.component */ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__["AccountLayoutComponent"]; });

/* harmony import */ var _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-layout/application-layout.component */ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationLayoutComponent"]; });

/* harmony import */ var _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-layout/empty-layout.component */ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"]; });

/* harmony import */ var _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-error/validation-error.component */ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorComponent"]; });








/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ValidationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return ValidationErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");



let ValidationErrorComponent = class ValidationErrorComponent extends _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorComponent"] {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
};
ValidationErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-validation-error',
        template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
    })
], ValidationErrorComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/constants/styles.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/constants/styles.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = (`
.content-header-title {
    font-size: 24px;
}

.entry-row {
    margin-bottom: 15px;
}

#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}

.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
    .navbar .dropdown-menu a {
        font-size: .9em;
        padding: 10px 15px;
        display: block;
        min-width: 210px;
        text-align: left;
        border-radius: 0.25rem;
        min-height: 44px;
    }
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}

.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.abp-confirm .abp-confirm-footer {
    background-color: #f4f4f7 !important;
}
.abp-confirm .ui-toast-message-content {
    background-color: #fff !important;
}

@media screen and (min-width: 768px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
`);


/***/ }),

/***/ "../../packages/theme-basic/src/lib/services/initial.service.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/services/initial.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: InitialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialService", function() { return InitialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "../../packages/theme-basic/src/lib/constants/styles.ts");




let InitialService = class InitialService {
    constructor(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
    }
    appendStyle() {
        return this.lazyLoadService.load(null, 'style', _constants_styles__WEBPACK_IMPORTED_MODULE_3__["default"], 'head', 'beforeend');
    }
};
InitialService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"] }
];
InitialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"]])
], InitialService);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/states/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.state */ "../../packages/theme-basic/src/lib/states/layout.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return _layout_state__WEBPACK_IMPORTED_MODULE_1__["LayoutState"]; });





/***/ }),

/***/ "../../packages/theme-basic/src/lib/states/layout.state.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/layout.state.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return LayoutState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/layout.actions */ "../../packages/theme-basic/src/lib/actions/layout.actions.ts");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");




let LayoutState = class LayoutState {
    static getNavigationElements({ navigationElements }) {
        return navigationElements;
    }
    layoutAddAction({ getState, patchState }, { payload = [] }) {
        let { navigationElements } = getState();
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(() => payload.filter(({ name }) => navigationElements.findIndex(nav => nav.name === name) < 0), []);
        }
        if (!payload.length)
            return;
        navigationElements = [...navigationElements, ...payload]
            .map(element => (Object.assign({}, element, { order: element.order || 99 })))
            .sort((a, b) => a.order - b.order);
        return patchState({
            navigationElements,
        });
    }
    layoutRemoveAction({ getState, patchState }, { name }) {
        let { navigationElements } = getState();
        const index = navigationElements.findIndex(element => element.name === name);
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements,
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutState.prototype, "layoutAddAction", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutState.prototype, "layoutRemoveAction", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
], LayoutState, "getNavigationElements", null);
LayoutState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'LayoutState',
        defaults: { navigationElements: [] },
    })
], LayoutState);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/theme-basic.module.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/theme-basic.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LAYOUTS, ThemeBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUTS", function() { return LAYOUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function() { return ThemeBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account-layout/account-layout.component */ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
/* harmony import */ var _components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/application-layout/application-layout.component */ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
/* harmony import */ var _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/empty-layout/empty-layout.component */ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
/* harmony import */ var _states_layout_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/layout.state */ "../../packages/theme-basic/src/lib/states/layout.state.ts");
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
/* harmony import */ var _services_initial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/initial.service */ "../../packages/theme-basic/src/lib/services/initial.service.ts");














const LAYOUTS = [_components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationLayoutComponent"], _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__["AccountLayoutComponent"], _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"]];
let ThemeBasicModule = class ThemeBasicModule {
    constructor(initialService) {
        this.initialService = initialService;
    }
};
ThemeBasicModule.ctorParameters = () => [
    { type: _services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"] }
];
ThemeBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [...LAYOUTS, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]],
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_states_layout_state__WEBPACK_IMPORTED_MODULE_11__["LayoutState"]]),
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"].forRoot({
                targetSelector: '.form-group',
                blueprints: {
                    email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
                    max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthoOf{0}[{{ requiredLength }}]',
                    min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    required: 'AbpAccount::ThisFieldIsRequired.',
                    passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                },
                errorTemplate: _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"],
            }),
        ],
        exports: [...LAYOUTS],
        entryComponents: [...LAYOUTS, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"]])
], ThemeBasicModule);



/***/ }),

/***/ "../../packages/theme-basic/src/public-api.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/public-api.ts ***!
  \**********************************************************************************************/
/*! exports provided: LAYOUTS, ThemeBasicModule, EmptyLayoutComponent, ValidationErrorComponent, LayoutState, AddNavigationElement, RemoveNavigationElementByName, AccountLayoutComponent, ApplicationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/theme-basic.module */ "../../packages/theme-basic/src/lib/theme-basic.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUTS", function() { return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["LAYOUTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function() { return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["ThemeBasicModule"]; });

/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/theme-basic/src/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/theme-basic/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ValidationErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["AccountLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ApplicationLayoutComponent"]; });

/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/states */ "../../packages/theme-basic/src/lib/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_4__["LayoutState"]; });

/*
 * Public API Surface of theme-basic
 */







/***/ }),

/***/ "../../themes/ng-alain/basic/src/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/index.ts ***!
  \******************************************************************************************/
/*! exports provided: NgAlainBasicModule, LayoutDefaultComponent, LayoutFullScreenComponent, LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ng_alain_basic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-alain-basic.module */ "../../themes/ng-alain/basic/src/lib/ng-alain-basic.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAlainBasicModule", function() { return _lib_ng_alain_basic_module__WEBPACK_IMPORTED_MODULE_1__["NgAlainBasicModule"]; });

/* harmony import */ var _lib_layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/layout/index */ "../../themes/ng-alain/basic/src/lib/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return _lib_layout_index__WEBPACK_IMPORTED_MODULE_2__["LayoutDefaultComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return _lib_layout_index__WEBPACK_IMPORTED_MODULE_2__["LayoutFullScreenComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return _lib_layout_index__WEBPACK_IMPORTED_MODULE_2__["LayoutPassportComponent"]; });






/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/default.component.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/default.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.ts");










let LayoutDefaultComponent = class LayoutDefaultComponent {
    constructor(router, _message, resolver, settings, el, renderer, doc) {
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(evt => {
            if (!this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                    _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"])) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_5__["updateHostClass"])(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngAfterViewInit() {
        // Setting componet for only developer
        if (true) {
            setTimeout(() => {
                const settingFactory = this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__["SettingDrawerComponent"]);
                this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    }
    ngOnInit() {
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(unsubscribe$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
};
LayoutDefaultComponent.type = "application" /* application */;
LayoutDefaultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingHost', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], LayoutDefaultComponent.prototype, "settingHost", void 0);
LayoutDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/default.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_6__["SettingsService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
], LayoutDefaultComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/fullscreen.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/fullscreen.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "../../node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let HeaderFullScreenComponent = class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull__WEBPACK_IMPORTED_MODULE_2__;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_resize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_click", null);
HeaderFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-fullscreen',
        template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], HeaderFullScreenComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/i18n.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/i18n.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HeaderI18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderI18nComponent", function() { return HeaderI18nComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");







let HeaderI18nComponent = class HeaderI18nComponent {
    constructor(store) {
        this.store = store;
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getLanguage);
    }
    get defaultLanguage$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_6__["default"])(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_6__["default"])(() => languages, [])));
    }
    onChangeLang(cultureName) {
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["SetLanguage"](cultureName));
    }
};
HeaderI18nComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getDeep('localization.languages')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], HeaderI18nComponent.prototype, "languages$", void 0);
HeaderI18nComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-i18n',
        template: `
    <div nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ defaultLanguage$ | async }}
      <i nz-icon nzType="down"></i>
    </div>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let lang of dropdownLanguages$ | async"
          [nzSelected]="lang.cultureName === selectedLangCulture"
          (click)="onChangeLang(lang.cultureName)"
        >
         <span role="img" [attr.aria-label]="lang?.displayName" class="pr-xs">{{lang.cultureName}}</span>
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], HeaderI18nComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/icon.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/icon.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HeaderIconComponent = class HeaderIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-icon',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <i nz-icon nzType="appstore"></i>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">
        <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="calendar" class="bg-error text-white"></i>
              <small>Calendar</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="file" class="bg-geekblue text-white"></i>
              <small>Files</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="cloud" class="bg-success text-white"></i>
              <small>Cloud</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="star" class="bg-magenta text-white"></i>
              <small>Star</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="team" class="bg-purple text-white"></i>
              <small>Team</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="scan" class="bg-warning text-white"></i>
              <small>QR</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="pay-circle" class="bg-cyan text-white"></i>
              <small>Pay</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="printer" class="bg-grey text-white"></i>
              <small>Print</small>
            </div>
          </div>
        </nz-spin>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderIconComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/notify.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/notify.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");


// import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * 菜单通知
 */
let HeaderNotifyComponent = class HeaderNotifyComponent {
    constructor(msg, cdr) {
        this.msg = msg;
        this.cdr = cdr;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    updateNoticeData(notices) {
        const data = this.data.slice();
        data.forEach(i => (i.list = []));
        notices.forEach(item => {
            const newItem = Object.assign({}, item);
            // if (newItem.datetime)
            //  newItem.datetime = distanceInWordsToNow(item.datetime!, {
            //    locale: (window as any).__locale__,
            //  });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(w => w.title === newItem.type).list.push(newItem);
        });
        return data;
    }
    loadData() {
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(() => {
            this.data = this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            this.loading = false;
            this.cdr.detectChanges();
        }, 1000);
    }
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
};
HeaderNotifyComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderNotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-notify',
        template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderNotifyComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/search.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/search.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HeaderSearchComponent = class HeaderSearchComponent {
    constructor(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    set toggleChange(value) {
        if (typeof value === 'undefined')
            return;
        this.searchToggled = true;
        this.focus = true;
        setTimeout(() => this.qIpt.focus(), 300);
    }
    ngAfterViewInit() {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    }
    qFocus() {
        this.focus = true;
    }
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
};
HeaderSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-focus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderSearchComponent.prototype, "focus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alain-default__search-toggled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderSearchComponent.prototype, "searchToggled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], HeaderSearchComponent.prototype, "toggleChange", null);
HeaderSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-search',
        template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], HeaderSearchComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/storage.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/storage.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let HeaderStorageComponent = class HeaderStorageComponent {
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            },
        });
    }
};
HeaderStorageComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderStorageComponent.prototype, "_click", null);
HeaderStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-storage',
        template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], HeaderStorageComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/task.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/task.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HeaderTaskComponent = class HeaderTaskComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderTaskComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-task',
        template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Jefferson</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">
              See All
            </div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HeaderTaskComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/user.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/components/user.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm2015/auth.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");










let HeaderUserComponent = class HeaderUserComponent {
    constructor(settings, router, tokenService, store, oauthService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
        this.store = store;
        this.oauthService = oauthService;
        this.tenant = {};
        this.tenant =
            this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_8__["SessionState"].getTenant) ||
                {};
        this.tenantName = this.tenant.name || '.';
    }
    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    logout() {
        this.oauthService.logOut();
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__["Navigate"](['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__["RouterState"]).state.url }
        }));
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_8__["GetAppConfiguration"]());
    }
};
HeaderUserComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"],] }] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_8__["ConfigState"].getOne('currentUser')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
], HeaderUserComponent.prototype, "currentUser$", void 0);
HeaderUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'header-user',
        template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <!--<nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>-->
      {{tenantName}}/{{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/account/manage-profile">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
        angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"]])
], HeaderUserComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/header/header.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/header/header.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");



let HeaderComponent = class HeaderComponent {
    constructor(settings) {
        this.settings = settings;
    }
    toggleCollapsedSidebar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/header/header.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
], HeaderComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: SettingDrawerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerItemComponent", function() { return SettingDrawerItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SettingDrawerItemComponent = class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = value => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], SettingDrawerItemComponent.prototype, "data", null);
SettingDrawerItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting-drawer-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.html")).default,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer__body-item]': 'true',
        },
    })
], SettingDrawerItemComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: SettingDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingDrawerComponent", function() { return SettingDrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");






const ALAINDEFAULTVAR = 'alain-default-vars';
const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
    {
        key: 'black',
        color: '#001529',
    },
];
const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
let SettingDrawerComponent = class SettingDrawerComponent {
    constructor(cdr, msg, settingSrv, lazy, zone, doc) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.loadedLess = false;
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    get layout() {
        return this.settingSrv.layout;
    }
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    loadLess() {
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(() => {
            const lessConfigNode = this.doc.createElement('script');
            lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
            this.doc.body.appendChild(lessConfigNode);
        })
            .then(() => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
            .then(() => {
            this.loadedLess = true;
        });
    }
    genVars() {
        const { data, color, validKeys } = this;
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    runLess() {
        const { zone, msg, cdr } = this;
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout(() => {
            zone.runOutsideAngular(() => {
                this.loadLess().then(() => {
                    window.less.modifyVars(this.genVars()).then(() => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(() => cdr.detectChanges());
                    });
                });
            });
        }, 200);
    }
    toggle() {
        this.collapse = !this.collapse;
    }
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(key => DEFAULT_VARS[key].default === '@primary-color')
            .forEach(key => delete this.cachedData[`@${key}`]);
        this.resetData(this.cachedData, false);
    }
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    resetData(nowData, run = true) {
        nowData = nowData || {};
        const data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(key => {
            const value = nowData[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    get validKeys() {
        return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
    }
    apply() {
        this.runLess();
    }
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    copyVar() {
        const vars = this.genVars();
        const copyContent = Object.keys(vars)
            .map(key => `${key}: ${vars[key]};`)
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["copy"])(copyContent);
        this.msg.success('Copy success');
    }
};
SettingDrawerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
SettingDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting-drawer.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.html")).default,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer]': 'true',
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])
], SettingDrawerComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");







let SidebarComponent = class SidebarComponent {
    constructor(settings, menuService, localizationPipe) {
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(routes => getVisibleRoutes(routes))).subscribe(routes => {
            let result = [];
            routes.forEach(first => {
                let group = {
                    text: this.localizationPipe.transform(first.name),
                    group: true,
                    hideInBreadcrumb: true,
                    children: []
                };
                result.push(group);
                first.children.forEach(second => {
                    if (second.children.length === 0) {
                        let left = {
                            text: this.localizationPipe.transform(second.name),
                            link: second.url,
                            icon: second.iconClass
                        };
                        group.children.push(left);
                    }
                    if (second.children.length != 0) {
                        let node = {
                            text: this.localizationPipe.transform(second.name),
                            icon: second.iconClass,
                            children: []
                        };
                        group.children.push(node);
                        second.children.forEach(third => {
                            let left = {
                                text: this.localizationPipe.transform(third.name),
                                link: third.url,
                                icon: third.iconClass
                            };
                            node.children.push(left);
                        });
                    }
                });
            });
            this.menuService.clear();
            this.menuService.add(result);
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["ConfigState"].getOne('routes')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], SidebarComponent.prototype, "routes$", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
        _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"]])
], SidebarComponent);

function getVisibleRoutes(routes) {
    return routes.reduce((acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }, []);
}


/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LayoutFullScreenComponent = class LayoutFullScreenComponent {
};
LayoutFullScreenComponent.type = "empty" /* empty */;
LayoutFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-fullscreen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fullscreen.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.html")).default,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.alain-fullscreen]': 'true',
        },
    })
], LayoutFullScreenComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LayoutDefaultComponent, LayoutFullScreenComponent, LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default/default.component */ "../../themes/ng-alain/basic/src/lib/layout/default/default.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return _default_default_component__WEBPACK_IMPORTED_MODULE_1__["LayoutDefaultComponent"]; });

/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "../../themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFullScreenComponent"]; });

/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passport/passport.component */ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return _passport_passport_component__WEBPACK_IMPORTED_MODULE_3__["LayoutPassportComponent"]; });


// layout





/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/layout.module.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/layout.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/default.component */ "../../themes/ng-alain/basic/src/lib/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "../../themes/ng-alain/basic/src/lib/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/header/header.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "../../themes/ng-alain/basic/src/lib/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/search.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/notify.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/task.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/icon.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./default/header/components/i18n.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/i18n.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/header/components/storage.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/header/components/user.component */ "../../themes/ng-alain/basic/src/lib/layout/default/header/components/user.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer.component */ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.ts");
/* harmony import */ var _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./default/setting-drawer/setting-drawer-item.component */ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer-item.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./passport/passport.component */ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.ts");


















const SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_16__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_17__["SettingDrawerItemComponent"]];
const COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
    ...SETTINGDRAWER,
];
const HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_8__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_9__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_10__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_11__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_12__["HeaderFullScreenComponent"],
    _default_header_components_i18n_component__WEBPACK_IMPORTED_MODULE_13__["HeaderI18nComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_14__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_15__["HeaderUserComponent"],
];
// passport

const PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_18__["LayoutPassportComponent"]];
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_2__["NgAlainSharedModule"]],
        entryComponents: [...SETTINGDRAWER, _default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"], _passport_passport_component__WEBPACK_IMPORTED_MODULE_18__["LayoutPassportComponent"]],
        declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
        exports: [...COMPONENTS, ...PASSPORT]
    })
], LayoutModule);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.less":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/passport/passport.component.less ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n  text-align: right;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 32px 0;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  position: relative;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 33px;\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  margin-top: 12px;\n  margin-bottom: 40px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lcy9uZy1hbGFpbi9iYXNpYy9zcmMvbGliL2xheW91dC9wYXNzcG9ydC9wYXNzcG9ydC5jb21wb25lbnQubGVzcyIsInRoZW1lcy9uZy1hbGFpbi9iYXNpYy9zcmMvbGliL2xheW91dC9wYXNzcG9ydC9DOi9Vc2Vycy9ZaW5DaGFuZy9Eb2N1bWVudHMvV29ya3MvR2l0SHViL2FicC5uZy90aGVtZXMvbmctYWxhaW4vYmFzaWMvc3JjL2xpYi9sYXlvdXQvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBR00sb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREVOO0FDUkE7RUFTTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURFTjtBQ2RBO0VBY1EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURHUjtBQ3JCQTtFQXNCTSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0FERU47QUN6QkE7RUEwQk0sbUJBQUE7QURFTjtBQ0NJO0VBQUE7SUFFSSw0RkFBQTtJQUNBLDRCQUFBO0lBQ0EsaUNBQUE7SUFDQSxxQkFBQTtFRENOO0VDTkU7SUFRSSxvQkFBQTtFRENOO0FBQ0Y7QUN2Q0E7RUF5Q00sa0JBQUE7QURDTjtBQzFDQTtFQTRDTSxZQUFBO0VBQ0EsaUJBQUE7QURDTjtBQzlDQTtFQStDUSxxQkFBQTtBREVSO0FDakRBO0VBbURNLFlBQUE7RUFDQSxrQkFBQTtBRENOO0FDckRBO0VBdURNLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5RUFBQTtFQUNBLHNCQUFBO0FEQ047QUM3REE7RUErRE0sZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBRENOIiwiZmlsZSI6InRoZW1lcy9uZy1hbGFpbi9iYXNpYy9zcmMvbGliL2xheW91dC9wYXNzcG9ydC9wYXNzcG9ydC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMsc3RyaW5nLW5vLW5ld2xpbmUgKi9cbjpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YwZjJmNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubGFuZ3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxhbmdzIC5hbnRpY29uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAud3JhcCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDMycHggMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDExMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLndyYXAge1xuICAgIHBhZGRpbmc6IDMycHggMCAyNHB4O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxvZ28ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtZmFtaWx5OiAnTXlyaWFkIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRlc2Mge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIiwiQGltcG9ydCAnfkBkZWxvbi90aGVtZS9zdHlsZXMvZGVmYXVsdCc7XG46aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMmY1O1xuICAgIH1cbiAgICAubGFuZ3Mge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgLmFudGljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAud3JhcCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbiAgICAuYW50LWZvcm0taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgMTEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgIH1cbiAgICAgIC53cmFwIHtcbiAgICAgICAgcGFkZGluZzogMzJweCAwIDI0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50b3Age1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuaGVhZGVyIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTXlyaWFkIFBybycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIGNvbG9yOiBAdGV4dC1jb2xvci1zZWNvbmRhcnk7XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemUtYmFzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/passport/passport.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LayoutPassportComponent = class LayoutPassportComponent {
    constructor() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
};
LayoutPassportComponent.type = "account" /* account */;
LayoutPassportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'layout-passport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passport.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passport.component.less */ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.less")).default]
    })
], LayoutPassportComponent);



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/ng-alain-basic.module.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/ng-alain-basic.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NgAlainBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlainBasicModule", function() { return NgAlainBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.basic */ "../../packages/theme-basic/src/public-api.ts");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "../../themes/ng-alain/basic/src/lib/layout/layout.module.ts");






let NgAlainBasicModule = class NgAlainBasicModule {
};
NgAlainBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"],
            _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_3__["NgAlainSharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
        ],
        exports: [
            _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["ThemeBasicModule"],
            _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_3__["NgAlainSharedModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
        ]
    })
], NgAlainBasicModule);



/***/ }),

/***/ "../../themes/ng-alain/shared/src/index.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/shared/src/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: StartupServiceFactory, I18nHttpLoaderFactory, NgAlainSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../themes/ng-alain/shared/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["StartupServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["I18nHttpLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAlainSharedModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["NgAlainSharedModule"]; });





/***/ }),

/***/ "../../themes/ng-alain/shared/src/lib/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/shared/src/lib/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: StartupServiceFactory, I18nHttpLoaderFactory, NgAlainSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_alain_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-alain-shared.module */ "../../themes/ng-alain/shared/src/lib/ng-alain-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return _ng_alain_shared_module__WEBPACK_IMPORTED_MODULE_1__["StartupServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return _ng_alain_shared_module__WEBPACK_IMPORTED_MODULE_1__["I18nHttpLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAlainSharedModule", function() { return _ng_alain_shared_module__WEBPACK_IMPORTED_MODULE_1__["NgAlainSharedModule"]; });





/***/ }),

/***/ "../../themes/ng-alain/shared/src/lib/ng-alain-shared.module.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/shared/src/lib/ng-alain-shared.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: StartupServiceFactory, I18nHttpLoaderFactory, NgAlainSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAlainSharedModule", function() { return NgAlainSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fs/ng-alain */ "../../themes/ng-alain/src/index.ts");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/zh */ "../../node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
var NgAlainSharedModule_1;















function StartupServiceFactory(startupService) {
    const startupServiceLoad = () => startupService.load();
    return startupServiceLoad;
}
const APPINIT_PROVIDES = [
    _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["StartupService"]],
        multi: true,
    },
];
const LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["zh_CN"],
};
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["DELON_LOCALE"], useValue: LANG.delon },
];
const I18NSERVICE_PROVIDES = [{ provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["ALAIN_I18N_TOKEN"], useClass: _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["I18NService"], multi: false }];
const INTERCEPTOR_PROVIDES = [
//{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
//{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, `assets/tmp/i18n/`, '.json');
}
const I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
        },
    }),
];
const GLOBAL_THIRD_MODULES = [];

const FORM_MODULES = [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["JsonSchemaModule"]];
let NgAlainSharedModule = NgAlainSharedModule_1 = class NgAlainSharedModule {
    static forRoot() {
        return {
            ngModule: NgAlainSharedModule_1,
            providers: [
                ...APPINIT_PROVIDES,
                ...LANG_PROVIDES,
                ...INTERCEPTOR_PROVIDES,
                ...I18NSERVICE_PROVIDES
            ]
        };
    }
};
NgAlainSharedModule = NgAlainSharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"],
            _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            //...I18NSERVICE_MODULES,
            ...GLOBAL_THIRD_MODULES,
            ...FORM_MODULES
        ],
        exports: [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"]],
        entryComponents: []
    })
], NgAlainSharedModule);



/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_api.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_api.ts ***!
  \*****************************************************************************************/
/*! exports provided: APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/mock */ "../../node_modules/@delon/mock/fesm2015/mock.js");


// region: mock data
const titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
    '卡色',
    'cipchk',
    '付小小',
    '曲丽丽',
    '林东东',
    '周星星',
    '吴加好',
    '朱偏右',
    '鱼酱',
    '乐哥',
    '谭小仪',
    '仲尼',
];
// endregion
function getFakeList(count = 20) {
    const list = [];
    for (let i = 0; i < count; i += 1) {
        list.push({
            id: `fake-list-${i}`,
            owner: user[i % 10],
            title: titles[i % 8],
            avatar: avatars[i % 8],
            cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
            status: ['active', 'exception', 'normal'][i % 3],
            percent: Math.ceil(Math.random() * 50) + 50,
            logo: avatars[i % 8],
            href: 'https://ant.design',
            updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
            subDescription: desc[i % 5],
            description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
            activeUser: Math.ceil(Math.random() * 100000) + 100000,
            newUser: Math.ceil(Math.random() * 1000) + 1000,
            star: Math.ceil(Math.random() * 100) + 100,
            like: Math.ceil(Math.random() * 100) + 100,
            message: Math.ceil(Math.random() * 10) + 10,
            content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
            members: [
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                    name: '曲丽丽',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                    name: '王昭君',
                },
                {
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                    name: '董娜娜',
                },
            ],
        });
    }
    return list;
}
function getNotice() {
    return [
        {
            id: 'xxx1',
            title: titles[0],
            logo: avatars[0],
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            updatedAt: new Date(),
            member: '科学搬砖组',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx2',
            title: titles[1],
            logo: avatars[1],
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            updatedAt: new Date('2017-07-24'),
            member: '全组都是吴彦祖',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx3',
            title: titles[2],
            logo: avatars[2],
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            updatedAt: new Date(),
            member: '中二少女团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx4',
            title: titles[3],
            logo: avatars[3],
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            updatedAt: new Date('2017-07-23'),
            member: '程序员日常',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx5',
            title: titles[4],
            logo: avatars[4],
            description: '凛冬将至',
            updatedAt: new Date('2017-07-23'),
            member: '高逼格设计天团',
            href: '',
            memberLink: '',
        },
        {
            id: 'xxx6',
            title: titles[5],
            logo: avatars[5],
            description: '生命就像一盒巧克力，结果往往出人意料',
            updatedAt: new Date('2017-07-23'),
            member: '骗你来学计算机',
            href: '',
            memberLink: '',
        },
    ];
}
function getActivities() {
    return [
        {
            id: 'trend-1',
            updatedAt: new Date(),
            user: {
                name: '林东东',
                avatar: avatars[0],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-2',
            updatedAt: new Date(),
            user: {
                name: '付小小',
                avatar: avatars[1],
            },
            group: {
                name: '高逼格设计天团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-3',
            updatedAt: new Date(),
            user: {
                name: '曲丽丽',
                avatar: avatars[2],
            },
            group: {
                name: '中二少女团',
                link: 'http://github.com/',
            },
            project: {
                name: '六月迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
        {
            id: 'trend-4',
            updatedAt: new Date(),
            user: {
                name: '周星星',
                avatar: avatars[3],
            },
            project: {
                name: '5 月日常迭代',
                link: 'http://github.com/',
            },
            template: '将 @{project} 更新至已发布状态',
        },
        {
            id: 'trend-5',
            updatedAt: new Date(),
            user: {
                name: '朱偏右',
                avatar: avatars[4],
            },
            project: {
                name: '工程效能',
                link: 'http://github.com/',
            },
            comment: {
                name: '留言',
                link: 'http://github.com/',
            },
            template: '在 @{project} 发布了 @{comment}',
        },
        {
            id: 'trend-6',
            updatedAt: new Date(),
            user: {
                name: '乐哥',
                avatar: avatars[5],
            },
            group: {
                name: '程序员日常',
                link: 'http://github.com/',
            },
            project: {
                name: '品牌迭代',
                link: 'http://github.com/',
            },
            template: '在 @{group} 新建项目 @{project}',
        },
    ];
}
const APIS = {
    '/api/list': (req) => getFakeList(req.queryString.count),
    '/api/notice': () => getNotice(),
    '/api/activities': () => getActivities(),
    '/api/401': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](401);
    },
    '/api/403': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](403);
    },
    '/api/404': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](404);
    },
    '/api/500': () => {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](500);
    },
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_chart.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_chart.ts ***!
  \*******************************************************************************************/
/*! exports provided: CHARTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return CHARTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mockjs */ "../../node_modules/mockjs/dist/mock.js");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "../../node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);

// tslint:disable


// region: mock data
const visitData = [];
const beginDay = new Date().getTime();
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY[i],
    });
}
const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
const salesData = [];
for (let i = 0; i < 12; i += 1) {
    salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: `搜索关键词-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
const salesTypeData = [
    {
        x: '家用电器',
        y: 4544,
    },
    {
        x: '食用酒水',
        y: 3321,
    },
    {
        x: '个护健康',
        y: 3113,
    },
    {
        x: '服饰箱包',
        y: 2341,
    },
    {
        x: '母婴产品',
        y: 1231,
    },
    {
        x: '其他',
        y: 1231,
    },
];
const salesTypeDataOnline = [
    {
        x: '家用电器',
        y: 244,
    },
    {
        x: '食用酒水',
        y: 321,
    },
    {
        x: '个护健康',
        y: 311,
    },
    {
        x: '服饰箱包',
        y: 41,
    },
    {
        x: '母婴产品',
        y: 121,
    },
    {
        x: '其他',
        y: 111,
    },
];
const salesTypeDataOffline = [
    {
        x: '家用电器',
        y: 99,
    },
    {
        x: '个护健康',
        y: 188,
    },
    {
        x: '服饰箱包',
        y: 344,
    },
    {
        x: '母婴产品',
        y: 255,
    },
    {
        x: '其他',
        y: 65,
    },
];
const offlineData = [];
for (let i = 0; i < 10; i += 1) {
    offlineData.push({
        name: `门店${i}`,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
const radarOriginData = [
    {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
    },
    {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
    },
    {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
    },
];
//
const radarData = [];
const radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(item => {
    Object.keys(item).forEach(key => {
        if (key !== 'name') {
            radarData.push({
                name: item.name,
                label: radarTitleMap[key],
                value: item[key],
            });
        }
    });
});
// endregion
const CHARTS = {
    '/chart': JSON.parse(JSON.stringify({
        visitData,
        visitData2,
        salesData,
        searchData,
        offlineData,
        offlineChartData,
        salesTypeData,
        salesTypeDataOnline,
        salesTypeDataOffline,
        radarData,
    })),
    '/chart/visit': JSON.parse(JSON.stringify(visitData)),
    '/chart/tags': mockjs__WEBPACK_IMPORTED_MODULE_1__["mock"]({
        'list|100': [{ x: '@city', 'value|1-100': 150, 'category|0-2': 1 }],
    }),
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_geo.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_geo.ts ***!
  \*****************************************************************************************/
/*! exports provided: GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return GEOS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const DATA = [
    {
        name: '上海',
        id: '310000',
    },
    {
        name: '市辖区',
        id: '310100',
    },
    {
        name: '北京',
        id: '110000',
    },
    {
        name: '市辖区',
        id: '110100',
    },
    {
        name: '浙江省',
        id: '330000',
    },
    {
        name: '杭州市',
        id: '330100',
    },
    {
        name: '宁波市',
        id: '330200',
    },
    {
        name: '温州市',
        id: '330300',
    },
    {
        name: '嘉兴市',
        id: '330400',
    },
    {
        name: '湖州市',
        id: '330500',
    },
    {
        name: '绍兴市',
        id: '330600',
    },
    {
        name: '金华市',
        id: '330700',
    },
    {
        name: '衢州市',
        id: '330800',
    },
    {
        name: '舟山市',
        id: '330900',
    },
    {
        name: '台州市',
        id: '331000',
    },
    {
        name: '丽水市',
        id: '331100',
    },
];
const GEOS = {
    '/geo/province': () => DATA.filter(w => w.id.endsWith('0000')),
    '/geo/:id': (req) => {
        const pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(w => w.id.slice(0, 2) === pid && !w.id.endsWith('0000'));
    },
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_pois.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_pois.ts ***!
  \******************************************************************************************/
/*! exports provided: POIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return POIS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const POIS = {
    '/pois': {
        total: 2,
        list: [
            {
                id: 10000,
                user_id: 1,
                name: '测试品牌',
                branch_name: '测试分店',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
            {
                id: 10001,
                user_id: 2,
                name: '测试品牌2',
                branch_name: '测试分店2',
                geo: 310105,
                country: '中国',
                province: '上海',
                city: '上海市',
                district: '长宁区',
                address: '中山公园',
                tel: '15900000000',
                categories: '美食,粤菜,湛江菜',
                lng: 121.41707989151003,
                lat: 31.218656214644792,
                recommend: '推荐品',
                special: '特色服务',
                introduction: '商户简介',
                open_time: '营业时间',
                avg_price: 260,
                reason: null,
                status: 1,
                status_str: '待审核',
                status_wx: 1,
                modified: 1505826527288,
                created: 1505826527288,
            },
        ],
    },
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_profile.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_profile.ts ***!
  \*********************************************************************************************/
/*! exports provided: PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return PROFILES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const basicGoods = [
    {
        id: '1234561',
        name: '矿泉水 550ml',
        barcode: '12421432143214321',
        price: '2.00',
        num: '1',
        amount: '2.00',
    },
    {
        id: '1234562',
        name: '凉茶 300ml',
        barcode: '12421432143214322',
        price: '3.00',
        num: '2',
        amount: '6.00',
    },
    {
        id: '1234563',
        name: '好吃的薯片',
        barcode: '12421432143214323',
        price: '7.00',
        num: '4',
        amount: '28.00',
    },
    {
        id: '1234564',
        name: '特别好吃的蛋卷',
        barcode: '12421432143214324',
        price: '8.50',
        num: '3',
        amount: '25.50',
    },
];
const basicProgress = [
    {
        key: '1',
        time: '2017-10-01 14:10',
        rate: '联系客户',
        status: 'processing',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '2',
        time: '2017-10-01 14:05',
        rate: '取货员出发',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '1h',
    },
    {
        key: '3',
        time: '2017-10-01 13:05',
        rate: '取货员接单',
        status: 'success',
        operator: '取货员 ID1234',
        cost: '5mins',
    },
    {
        key: '4',
        time: '2017-10-01 13:00',
        rate: '申请审批通过',
        status: 'success',
        operator: '系统',
        cost: '1h',
    },
    {
        key: '5',
        time: '2017-10-01 12:00',
        rate: '发起退货申请',
        status: 'success',
        operator: '用户',
        cost: '5mins',
    },
];
const advancedOperation1 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op2',
        type: '财务复审',
        name: '付小小',
        status: 'reject',
        updatedAt: '2017-10-03  19:23:12',
        memo: '不通过原因',
    },
    {
        key: 'op3',
        type: '部门初审',
        name: '周毛毛',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
    {
        key: 'op4',
        type: '提交订单',
        name: '林东东',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '很棒',
    },
    {
        key: 'op5',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
const PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1,
        advancedOperation2,
        advancedOperation3,
    },
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_rule.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_rule.ts ***!
  \******************************************************************************************/
/*! exports provided: RULES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const list = [];
for (let i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    let ret = [...list];
    if (params.sorter) {
        const s = params.sorter.split('_');
        ret = ret.sort((prev, next) => {
            if (s[1] === 'descend') {
                return next[s[0]] - prev[s[0]];
            }
            return prev[s[0]] - next[s[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(data => params.statusList.indexOf(data.status) > -1);
    }
    if (params.no) {
        ret = ret.filter(data => data.no.indexOf(params.no) > -1);
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(no => {
        const idx = list.findIndex(w => w.no === no);
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    const i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
const RULES = {
    '/rule': (req) => getRule(req.queryString),
    'DELETE /rule': (req) => removeRule(req.queryString.nos),
    'POST /rule': (req) => saveRule(req.body.description),
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/_user.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/_user.ts ***!
  \******************************************************************************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const list = [];
const total = 50;
for (let i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: `TradeCode ${i}`,
        title: `一个任务名称 ${i}`,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    let ret = [...list];
    const pi = +params.pi;
    const ps = +params.ps;
    const start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(data => data.no.indexOf(params.no) > -1);
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    const item = list.find(w => w.id === id);
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
const USERS = {
    '/user': (req) => genData(req.queryString),
    '/user/:id': (req) => list.find(w => w.id === +req.params.id),
    'POST /user/:id': (req) => saveData(+req.params.id, req.body),
    '/user/current': {
        name: 'Cipchk',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'cipchk@qq.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的',
            },
            {
                key: '1',
                label: '专注撩妹',
            },
            {
                key: '2',
                label: '帅~',
            },
            {
                key: '3',
                label: '通吃',
            },
            {
                key: '4',
                label: '专职后端',
            },
            {
                key: '5',
                label: '海纳百川',
            },
        ],
        notifyCount: 12,
        country: 'China',
        geographic: {
            province: {
                label: '上海',
                key: '330000',
            },
            city: {
                label: '市辖区',
                key: '330100',
            },
        },
        address: 'XX区XXX路 XX 号',
        phone: '你猜-你猜你猜猜猜',
    },
    'POST /user/avatar': 'ok',
    'POST /login/account': (req) => {
        const data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
            return { msg: `Invalid username or password（admin/ng-alain.com）` };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: `${data.userName}@qq.com`,
                id: 10000,
                time: +new Date(),
            },
        };
    },
    'POST /register': {
        msg: 'ok',
    },
};


/***/ }),

/***/ "../../themes/ng-alain/src/_mock/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/_mock/index.ts ***!
  \******************************************************************************************/
/*! exports provided: PROFILES, RULES, APIS, CHARTS, POIS, USERS, GEOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_profile */ "../../themes/ng-alain/src/_mock/_profile.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PROFILES", function() { return _profile__WEBPACK_IMPORTED_MODULE_1__["PROFILES"]; });

/* harmony import */ var _rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_rule */ "../../themes/ng-alain/src/_mock/_rule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return _rule__WEBPACK_IMPORTED_MODULE_2__["RULES"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_api */ "../../themes/ng-alain/src/_mock/_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api__WEBPACK_IMPORTED_MODULE_3__["APIS"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_chart */ "../../themes/ng-alain/src/_mock/_chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHARTS", function() { return _chart__WEBPACK_IMPORTED_MODULE_4__["CHARTS"]; });

/* harmony import */ var _pois__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_pois */ "../../themes/ng-alain/src/_mock/_pois.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POIS", function() { return _pois__WEBPACK_IMPORTED_MODULE_5__["POIS"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_user */ "../../themes/ng-alain/src/_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_6__["USERS"]; });

/* harmony import */ var _geo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_geo */ "../../themes/ng-alain/src/_mock/_geo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEOS", function() { return _geo__WEBPACK_IMPORTED_MODULE_7__["GEOS"]; });











/***/ }),

/***/ "../../themes/ng-alain/src/environments/environment.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/environments/environment.ts ***!
  \*******************************************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    SERVER_URL: `./`,
    production: false,
    useHash: true,
    hmr: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../../themes/ng-alain/src/index.ts":
/*!************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: ICONS, ICONS_AUTO, fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule, throwIfAlreadyLoaded, CoreModule, SharedModule, I18NService, DefaultInterceptor, StartupService, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../themes/ng-alain/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnPageHeaderConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnDelonAuthConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnSTConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["DelonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["I18NService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["DefaultInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["StartupService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["SCHEMA_THIRDS_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["yuan"]; });

/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-icons */ "../../themes/ng-alain/src/style-icons.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return _style_icons__WEBPACK_IMPORTED_MODULE_2__["ICONS"]; });

/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-icons-auto */ "../../themes/ng-alain/src/style-icons-auto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return _style_icons_auto__WEBPACK_IMPORTED_MODULE_3__["ICONS_AUTO"]; });







/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/core.module.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/core.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "../../themes/ng-alain/src/lib/core/module-import-guard.ts");



let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/i18n/i18n.service.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/i18n/i18n.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return I18NService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "../../node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "../../node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh-Hant */ "../../node_modules/@angular/common/locales/zh-Hant.js");
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/en */ "../../node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale/zh_cn */ "../../node_modules/date-fns/locale/zh_cn/index.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/locale/zh_tw */ "../../node_modules/date-fns/locale/zh_tw/index.js");
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");

// 请参考：https://ng-alain.com/docs/i18n













const DEFAULT = 'zh-CN';
const LANGS = {
    'zh-CN': {
        text: '简体中文',
        ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_CN"],
        dateFns: date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["zh_CN"],
        abbr: '🇨🇳',
    },
    'zh-Hant': {
        text: '繁体中文',
        ng: _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_TW"],
        dateFns: date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["zh_TW"],
        abbr: '🇭🇰',
    },
    'en-US': {
        text: 'English',
        ng: _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a,
        zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["en_US"],
        dateFns: date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__,
        delon: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["en_US"],
        abbr: '🇬🇧',
    },
};
let I18NService = class I18NService {
    constructor(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map(code => {
            const item = LANGS[code];
            return { code, text: item.text, abbr: item.abbr };
        });
        // `@ngx-translate/core` 预先知道支持哪些语言
        const lans = this._langs.map(item => item.code);
        translate.addLangs(lans);
        const defaultLan = settings.layout.lang || translate.getBrowserLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    updateLangData(lang) {
        const item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.dateFns);
        window.__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    }
    get change() {
        return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(w => w != null));
    }
    use(lang) {
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(() => this.change$.next(lang));
    }
    /** 获取语言列表 */
    getLangs() {
        return this._langs;
    }
    /** 翻译 */
    fanyi(key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    }
    /** 默认语言 */
    get defaultLang() {
        return this._default;
    }
    /** 当前语言 */
    get currentLang() {
        return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
    }
};
I18NService.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
];
I18NService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
], I18NService);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/i18n/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/i18n/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: I18NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.service */ "../../themes/ng-alain/src/lib/core/i18n/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18NService"]; });





/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: throwIfAlreadyLoaded, CoreModule, I18NService, DefaultInterceptor, StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _i18n_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/index */ "../../themes/ng-alain/src/lib/core/i18n/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _i18n_index__WEBPACK_IMPORTED_MODULE_1__["I18NService"]; });

/* harmony import */ var _net_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net/index */ "../../themes/ng-alain/src/lib/core/net/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _net_index__WEBPACK_IMPORTED_MODULE_2__["DefaultInterceptor"]; });

/* harmony import */ var _startup_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup/index */ "../../themes/ng-alain/src/lib/core/startup/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _startup_index__WEBPACK_IMPORTED_MODULE_3__["StartupService"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-import-guard */ "../../themes/ng-alain/src/lib/core/module-import-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.module */ "../../themes/ng-alain/src/lib/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]; });









/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/module-import-guard.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/module-import-guard.ts ***!
  \***********************************************************************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/net/default.interceptor.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/net/default.interceptor.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "../../themes/ng-alain/src/environments/environment.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm2015/auth.js");










const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
let DefaultInterceptor = class DefaultInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    get notification() {
        return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]);
    }
    goTo(url) {
        setTimeout(() => this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]).navigateByUrl(url));
    }
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    handleData(ev) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        if (ev.status > 0) {
            this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_7__["_HttpClient"]).end();
        }
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:
                this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
                // 清空 token 信息
                this.injector.get(_delon_auth__WEBPACK_IMPORTED_MODULE_9__["DA_SERVICE_TOKEN"]).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${ev.status}`);
                break;
            default:
                if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(ev);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ev);
    }
    intercept(req, next) {
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + url;
        }
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((event) => {
            // 允许统一对请求错误处理
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"])
                return this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => this.handleData(err)));
    }
};
DefaultInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
DefaultInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], DefaultInterceptor);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/net/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/net/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _default_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.interceptor */ "../../themes/ng-alain/src/lib/core/net/default.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _default_interceptor__WEBPACK_IMPORTED_MODULE_1__["DefaultInterceptor"]; });





/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/startup/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/startup/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _startup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startup.service */ "../../themes/ng-alain/src/lib/core/startup/startup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _startup_service__WEBPACK_IMPORTED_MODULE_1__["StartupService"]; });





/***/ }),

/***/ "../../themes/ng-alain/src/lib/core/startup/startup.service.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/core/startup/startup.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/i18n.service */ "../../themes/ng-alain/src/lib/core/i18n/i18n.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons-auto */ "../../themes/ng-alain/src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../style-icons */ "../../themes/ng-alain/src/style-icons.ts");












/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
let StartupService = class StartupService {
    constructor(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon(..._style_icons_auto__WEBPACK_IMPORTED_MODULE_10__["ICONS_AUTO"], ..._style_icons__WEBPACK_IMPORTED_MODULE_11__["ICONS"]);
    }
    load() {
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(resolve => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(([langData, appData]) => {
                resolve(null);
                return [langData, appData];
            }))
                .subscribe(([langData, appData]) => {
                // setting language data
                //this.translate.setTranslation(this.i18n.defaultLang, langData);
                //this.translate.setDefaultLang(this.i18n.defaultLang);
                // application data
                const res = appData;
                // 应用信息：包括站点名、描述、年份
                this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                //this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 初始化菜单
                //this.menuService.add(res.menu);
                // 设置页面标题的后缀
                this.titleService.default = '';
                this.titleService.suffix = res.app.name;
            }, () => { }, () => {
                resolve(null);
            });
        });
    }
};
StartupService.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_5__["ALAIN_I18N_TOKEN"],] }] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["TitleService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["ALAIN_I18N_TOKEN"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18NService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
        _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_5__["TitleService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StartupService);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/delon.module.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/delon.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return fnPageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return fnDelonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return fnSTConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/module-import-guard */ "../../themes/ng-alain/src/lib/core/module-import-guard.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/mock */ "../../node_modules/@delon/mock/fesm2015/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_mock */ "../../themes/ng-alain/src/_mock/index.ts");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm2015/auth.js");
var DelonModule_1;

/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://ng-alain.com/docs/module
 */




// #region mock


const MOCK_MODULES = true ? [_delon_mock__WEBPACK_IMPORTED_MODULE_5__["DelonMockModule"].forRoot({
        data: {
            "PROFILES": _mock__WEBPACK_IMPORTED_MODULE_6__["PROFILES"],
            "RULES": _mock__WEBPACK_IMPORTED_MODULE_6__["RULES"],
            "APIS": _mock__WEBPACK_IMPORTED_MODULE_6__["APIS"],
            "CHARTS": _mock__WEBPACK_IMPORTED_MODULE_6__["CHARTS"],
            "POIS": _mock__WEBPACK_IMPORTED_MODULE_6__["POIS"],
            "USERS": _mock__WEBPACK_IMPORTED_MODULE_6__["USERS"],
            "GEOS": _mock__WEBPACK_IMPORTED_MODULE_6__["GEOS"]
        }
    })] : undefined;
const REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return Object.assign({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return Object.assign({}, new _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"](), { login_url: '/passport/login' });
}
// tslint:disable-next-line: no-duplicate-imports

function fnSTConfig() {
    return Object.assign({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"](), { modal: { size: 'lg' } });
}
const GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
let DelonModule = DelonModule_1 = class DelonModule {
    constructor(parentModule) {
        Object(_core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    static forRoot() {
        return {
            ngModule: DelonModule_1,
            providers: [...REUSETAB_PROVIDES, ...GLOBAL_CONFIG_PROVIDES],
        };
    }
};
DelonModule.ctorParameters = () => [
    { type: DelonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
DelonModule = DelonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["AlainThemeModule"].forRoot(), _delon_acl__WEBPACK_IMPORTED_MODULE_4__["DelonACLModule"].forRoot(), ...MOCK_MODULES],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DelonModule])
], DelonModule);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/index.ts ***!
  \****************************************************************************************/
/*! exports provided: fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule, throwIfAlreadyLoaded, CoreModule, SharedModule, I18NService, DefaultInterceptor, StartupService, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/index */ "../../themes/ng-alain/src/lib/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18NService", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["I18NService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["DefaultInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return _core_index__WEBPACK_IMPORTED_MODULE_1__["StartupService"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/index */ "../../themes/ng-alain/src/lib/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["SCHEMA_THIRDS_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["yuan"]; });

/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delon.module */ "../../themes/ng-alain/src/lib/delon.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return _delon_module__WEBPACK_IMPORTED_MODULE_3__["fnPageHeaderConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return _delon_module__WEBPACK_IMPORTED_MODULE_3__["fnDelonAuthConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return _delon_module__WEBPACK_IMPORTED_MODULE_3__["fnSTConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return _delon_module__WEBPACK_IMPORTED_MODULE_3__["DelonModule"]; });







/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: SharedModule, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _json_schema_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-schema/index */ "../../themes/ng-alain/src/lib/shared/json-schema/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return _json_schema_index__WEBPACK_IMPORTED_MODULE_1__["SCHEMA_THIRDS_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return _json_schema_index__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaModule"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index */ "../../themes/ng-alain/src/lib/shared/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_2__["yuan"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.module */ "../../themes/ng-alain/src/lib/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]; });







/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/json-schema/index.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/json-schema/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _json_schema_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-schema.module */ "../../themes/ng-alain/src/lib/shared/json-schema/json-schema.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return _json_schema_module__WEBPACK_IMPORTED_MODULE_1__["SCHEMA_THIRDS_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return _json_schema_module__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaModule"]; });





/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/json-schema/json-schema.module.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/json-schema/json-schema.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "../../themes/ng-alain/src/lib/shared/shared.module.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/form */ "../../node_modules/@delon/form/fesm2015/form.js");




// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
let JsonSchemaModule = class JsonSchemaModule {
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
};
JsonSchemaModule.ctorParameters = () => [
    { type: _delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"] }
];
JsonSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: SCHEMA_THIRDS_COMPONENTS,
        entryComponents: SCHEMA_THIRDS_COMPONENTS,
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_3__["DelonFormModule"].forRoot()],
        exports: [...SCHEMA_THIRDS_COMPONENTS],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"]])
], JsonSchemaModule);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/shared.module.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/shared.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart */ "../../node_modules/@delon/chart/fesm2015/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/form */ "../../node_modules/@delon/form/fesm2015/form.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-countdown */ "../../node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ueditor */ "../../node_modules/ngx-ueditor/fesm2015/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-tinymce */ "../../node_modules/ngx-tinymce/fesm2015/ngx-tinymce.js");





// delon





// i18n

// #region third libs




const THIRDMODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_12__["CountdownModule"], ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__["UEditorModule"], ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__["NgxTinymceModule"]];
// #endregion
// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"].forChild(),
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
            _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"],
            // third libs
            ...THIRDMODULES,
        ],
        declarations: [
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_5__["AlainThemeModule"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["DelonABCModule"],
            _delon_chart__WEBPACK_IMPORTED_MODULE_7__["DelonChartModule"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_8__["DelonACLModule"],
            _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"],
            // i18n
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            // third libs
            ...THIRDMODULES,
            // your components
            ...COMPONENTS,
            ...DIRECTIVES,
        ],
    })
], SharedModule);



/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/utils/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/utils/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _yuan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yuan */ "../../themes/ng-alain/src/lib/shared/utils/yuan.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return _yuan__WEBPACK_IMPORTED_MODULE_1__["yuan"]; });





/***/ }),

/***/ "../../themes/ng-alain/src/lib/shared/utils/yuan.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/shared/utils/yuan.ts ***!
  \****************************************************************************************************/
/*! exports provided: yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yuan", function() { return yuan; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
// tslint:disable-next-line:no-any
function yuan(value, digits = 2) {
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return `&yen ${value}`;
}


/***/ }),

/***/ "../../themes/ng-alain/src/style-icons-auto.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/style-icons-auto.ts ***!
  \***********************************************************************************************/
/*! exports provided: ICONS_AUTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS_AUTO", function() { return ICONS_AUTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "../../node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/


const ICONS_AUTO = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["AlipayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ApiOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["AppstoreOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowDownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["BookOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["CloudOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["CopyrightOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["CustomerServiceOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DatabaseOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DingdingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DislikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["DownloadOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ForkOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FrownOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FullscreenExitOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["FullscreenOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["GithubOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["GlobalOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["HddOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LaptopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LikeOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LockOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LogoutOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MailOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["PayCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["PieChartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["PrinterOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["RocketOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ScanOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["SettingOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ShareAltOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["SoundOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["StarOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["TaobaoCircleOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["TaobaoOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["TeamOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ToolOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["TrophyOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["UsbOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["WeiboCircleOutline"]
];


/***/ }),

/***/ "../../themes/ng-alain/src/style-icons.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/style-icons.ts ***!
  \******************************************************************************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "../../node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
// Custom icon static resources


const ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["InfoOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["BulbOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ProfileOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ExceptionOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LinkOutline"]];


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");



//import { LayoutDefaultComponent } from '@fs/ng-alain';
//import { AuthGuard } from '@fs/core';
const routes = [
    //{//default
    //    path: '',
    //    redirectTo: 'main',
    //    pathMatch: 'full'
    //},
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
        data: {
            routes: {
                name: '::Menu:Home',
                parentName: 'AbpUiNavigation::Menu:Administration',
                path: '',
                iconClass: 'fa fa-home',
            },
        },
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-account-wrapper-module */ "lazy-libs-account-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/account-wrapper.module */ "./src/app/lazy-libs/account-wrapper.module.ts")).then(m => m.AccountWrapperModule)
    },
    {
        path: 'identity',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-identity-wrapper-module */ "lazy-libs-identity-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/identity-wrapper.module */ "./src/app/lazy-libs/identity-wrapper.module.ts")).then(m => m.IdentityWrapperModule),
    },
    {
        path: 'tenant-management',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-tenant-management-wrapper-module */ "lazy-libs-tenant-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/tenant-management-wrapper.module */ "./src/app/lazy-libs/tenant-management-wrapper.module.ts")).then(m => m.TenantManagementWrapperModule),
    },
    {
        path: 'setting-management',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-setting-management-wrapper-module */ "lazy-libs-setting-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/setting-management-wrapper.module */ "./src/app/lazy-libs/setting-management-wrapper.module.ts")).then(m => m.SettingManagementWrapperModule),
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() | routes-routes-module */ "routes-routes-module").then(__webpack_require__.bind(null, /*! ./routes/routes.module */ "./src/app/routes/routes.module.ts")).then(m => m.RoutesModule),
        data: {
            routes: {
                name: 'Ng-Alain Pages',
                order: 99,
                path: '',
                iconClass: 'fa fa-folder',
                children: [
                    {
                        path: 'dashboard', name: 'Dashboard', iconClass: 'anticon-dashboard', order: 1,
                        children: [
                            { path: 'v1', name: 'Default', order: 1 },
                            { path: 'analysis', name: 'Analysis', order: 2 },
                            { path: 'monitor', name: 'Monitor', order: 3 },
                            { path: 'workplace', name: 'Workplace', order: 4 },
                        ]
                    },
                    {
                        path: 'pro/form', name: 'Form Page', iconClass: 'anticon-edit', order: 2,
                        children: [
                            { path: 'basic-form', name: 'Basic Form', order: 1 },
                            { path: 'step-form', name: 'Step Form', order: 2 },
                            { path: 'advanced-form', name: 'Advanced Form', order: 3 }
                        ]
                    },
                    {
                        path: 'pro/list', name: 'List', iconClass: 'anticon-appstore', order: 2,
                        children: [
                            { path: 'table-list', name: 'Table List', order: 1 },
                            { path: 'basic-list', name: 'Basic List', order: 2 },
                            { path: 'card-list', name: 'Card List', order: 3 }
                        ]
                    }
                ],
            },
        }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: true,
                // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
                // Pls refer to https://ng-alain.com/components/reuse-tab
                scrollPositionRestoration: 'top',
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let AppComponent = class AppComponent {
    constructor(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["VERSION"].full);
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(() => {
            this.titleSrv.setTitle();
            this.modalSrv.closeAll();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <router-outlet></router-outlet>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            //HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: I18nHttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nHttpLoaderFactory", function() { return I18nHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/ng-alain */ "../../themes/ng-alain/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/logger-plugin */ "../../node_modules/@ngxs/logger-plugin/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abp/ng.account.config */ "../../packages/account-config/src/public-api.ts");
/* harmony import */ var _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @abp/ng.identity.config */ "../../packages/identity-config/src/public-api.ts");
/* harmony import */ var _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @abp/ng.tenant-management.config */ "../../packages/tenant-management-config/src/public-api.ts");
/* harmony import */ var _fs_setting_management_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fs/setting-management/config */ "../../libs/setting-management/config/src/index.ts");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");

















// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, `assets/tmp/i18n/`, '.json');
}
const I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
        },
        isolate: true
    }),
];
const LOGGERS = [_ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsLoggerPluginModule"].forRoot({ disabled: false })];
const AlainLayouts = [_fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutDefaultComponent"], _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutPassportComponent"], _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutFullScreenComponent"]];
let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            ...I18NSERVICE_MODULES,
            //abp
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"].forRoot({
                environment: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"],
                requirements: {
                    layouts: AlainLayouts,
                },
            }),
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__["ThemeSharedModule"].forRoot(),
            _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_12__["AccountConfigModule"].forRoot({ redirectUrl: '/' }),
            _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_13__["IdentityConfigModule"],
            _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_14__["TenantManagementConfigModule"],
            _fs_setting_management_config__WEBPACK_IMPORTED_MODULE_15__["SettingManagementConfigModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NgxsModule"].forRoot([]),
            ...(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? [] : LOGGERS),
            //ng-alain
            _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__["DelonModule"].forRoot(),
            //@fs/ng-alain
            _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_6__["NgAlainSharedModule"].forRoot(),
        ],
        exports: [],
        providers: [
        // { provide: AbpConfirmationService, useClass: ConfirmationService },
        // { provide: AbpToasterService, useClass: ToasterService }
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm2015/abp-ng.core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            //ThemeSharedModule,
            //ThemeBasicModule,
            //AlainSharedModule,
            _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_5__["NgAlainBasicModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]
        ],
        exports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            //ThemeSharedModule,
            //ThemeBasicModule,
            //AlainSharedModule,
            _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_5__["NgAlainBasicModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]
        ],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    hmr: false,
    application: {
        name: 'MyProjectName',
        logoUrl: '',
    },
    oAuthConfig: {
        issuer: 'https://localhost:44305',
        clientId: 'MyProjectName_App',
        dummyClientSecret: '1q2w3e*',
        scope: 'MyProjectName',
        showDebugInformation: true,
        oidc: false,
        requireHttps: true,
    },
    apis: {
        default: {
            url: 'https://localhost:44305',
        },
    },
    localization: {
        defaultResourceName: 'MyProjectName',
    },
};


/***/ }),

/***/ "./src/hmr.ts":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angularclass/hmr */ "../../node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




const hmrBootstrap = (module, bootstrap) => {
    let ngModule;
    module.hot.accept();
    bootstrap().then(mod => (ngModule = mod));
    module.hot.dispose(() => {
        const appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
        const modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"], null);
        if (modalService) {
            modalService.closeAll();
        }
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






Object(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const bootstrap = () => {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(res => {
        if (window.appBootstrap) {
            window.appBootstrap();
        }
        return res;
    });
};
//bootstrap();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
    // tslint:disable-next-line: no-string-literal
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\YinChang\Documents\Works\GitHub\abp.ng\apps\ng-alain-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map