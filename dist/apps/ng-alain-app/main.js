(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/core/fesm5/abp-ng.core.js":
/*!**************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/core/fesm5/abp-ng.core.js ***!
  \**************************************************************************************/
/*! exports provided: AbstractNgModelComponent, AddReplaceableComponent, AddRoute, ApiInterceptor, ApplicationConfigurationService, AuthGuard, AutofocusDirective, CONFIG, ChangePassword, ConfigPlugin, ConfigState, ConfigStateService, CoreModule, DynamicLayoutComponent, ENVIRONMENT, EllipsisDirective, ForDirective, FormSubmitDirective, GetAppConfiguration, GetProfile, InitDirective, LazyLoadService, LocalizationPipe, LocalizationService, NGXS_CONFIG_PLUGIN_OPTIONS, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, ProfileStateService, ReplaceableComponentsState, ReplaceableRouteContainerComponent, ReplaceableTemplateDirective, Rest, RestOccurError, RestService, RouterOutletComponent, SessionState, SessionStateService, SetLanguage, SetTenant, SortPipe, StartLoader, StopLoader, UpdateProfile, VisibilityDirective, addAbpRoutes, configFactory, environmentFactory, getAbpRoutes, getInitialData, localeInitializer, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, takeUntilDestroy, uuid, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵk, ɵl, ɵm, ɵn, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function() { return AbstractNgModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReplaceableComponent", function() { return AddReplaceableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoute", function() { return AddRoute; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitDirective", function() { return InitDirective; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceableComponentsState", function() { return ReplaceableComponentsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceableRouteContainerComponent", function() { return ReplaceableRouteContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceableTemplateDirective", function() { return ReplaceableTemplateDirective; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ReplaceableComponentsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AddReplaceableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return FormSubmitDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return LocalizationPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return SortPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return InitDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return PermissionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return InputEventDebounceDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return StopPropagationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return ReplaceableTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return AbstractNgModelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return LocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return LocaleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return NGXS_CONFIG_PLUGIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return ConfigPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return ApiInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return localeInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ProfileState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ProfileService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return RestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SessionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return LocalizationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return SetLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SetTenant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return ConfigState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ApplicationConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return PatchRouteByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return GetAppConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return AddRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return ReplaceableRouteContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return RouterOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return DynamicLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return AutofocusDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return EllipsisDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return ForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/storage-plugin */ "../../node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/ng-model.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var AbstractNgModelComponent = /** @class */ (function () {
    function AbstractNgModelComponent(injector) {
        this.injector = injector;
        this.cdRef = injector.get((/** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])));
    }
    Object.defineProperty(AbstractNgModelComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.notifyValueChange();
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
        this._value = value;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.cdRef.detectChanges(); }), 0);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{ selector: 'abp-abstract-ng-model', template: '' }] }
    ];
    /** @nocollapse */
    AbstractNgModelComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
    ]; };
    AbstractNgModelComponent.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return AbstractNgModelComponent;
}());
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
var PatchRouteByName = /** @class */ (function () {
    function PatchRouteByName(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
    PatchRouteByName.type = '[Config] Patch Route By Name';
    return PatchRouteByName;
}());
if (false) {}
var GetAppConfiguration = /** @class */ (function () {
    function GetAppConfiguration() {
    }
    GetAppConfiguration.type = '[Config] Get App Configuration';
    return GetAppConfiguration;
}());
if (false) {}
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
if (false) {}

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
if (false) {}
var StopLoader = /** @class */ (function () {
    function StopLoader(payload) {
        this.payload = payload;
    }
    StopLoader.type = '[Loader] Stop';
    return StopLoader;
}());
if (false) {}

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
if (false) {}
var UpdateProfile = /** @class */ (function () {
    function UpdateProfile(payload) {
        this.payload = payload;
    }
    UpdateProfile.type = '[Profile] Update';
    return UpdateProfile;
}());
if (false) {}
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
    }
    ChangePassword.type = '[Profile] Change Password';
    return ChangePassword;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/replaceable-components.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddReplaceableComponent = /** @class */ (function () {
    function AddReplaceableComponent(payload) {
        this.payload = payload;
    }
    AddReplaceableComponent.type = '[ReplaceableComponents] Add';
    return AddReplaceableComponent;
}());
if (false) {}

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
if (false) {}

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
if (false) {}
var SetTenant = /** @class */ (function () {
    function SetTenant(payload) {
        this.payload = payload;
    }
    SetTenant.type = '[Session] Set Tenant';
    return SetTenant;
}());
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
var RestService = /** @class */ (function () {
    function RestService(http, store) {
        this.http = http;
        this.store = store;
    }
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
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    RestService.prototype.request = /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    function (request, config, api) {
        var _this = this;
        config = config || ((/** @type {?} */ ({})));
        var _a = config.observe, observe = _a === void 0 ? "body" /* Body */ : _a, skipHandleError = config.skipHandleError;
        /** @type {?} */
        var url = (api || this.store.selectSnapshot(ConfigState.getApiUrl())) + request.url;
        var method = request.method, params = request.params, options = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(request, ["method", "params"]);
        return this.http
            .request(method, url, (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ observe: observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            function (acc, key) {
                var _a;
                return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, acc, (typeof params[key] !== 'undefined' && params[key] !== '' && (_a = {}, _a[key] = params[key], _a))));
            }), {}),
        }), options))))
            .pipe(observe === "body" /* Body */ ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            if (skipHandleError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }
            return _this.handleError(err);
        })));
    };
    RestService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ RestService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RestService_Factory() { return new RestService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: RestService, providedIn: "root" });
    return RestService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/application-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfigurationService = /** @class */ (function () {
    function ApplicationConfigurationService(rest) {
        this.rest = rest;
    }
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
        return this.rest.request(request);
    };
    ApplicationConfigurationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ApplicationConfigurationService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RestService)); }, token: ApplicationConfigurationService, providedIn: "root" });
    return ApplicationConfigurationService;
}());
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
        return sortRoutes(setChildRoute(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(filteredRoutes, wrappers), parentNameArr));
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
            route.children = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])((route.children || []), foundedChildren);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
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
    ABP_ROUTES.push.apply(ABP_ROUTES, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(routes));
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
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]);
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
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]);
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
    return __webpack_require__("../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$")("./" + (localesMapping[locale] || locale) + ".js").then((/**
     * @param {?} module
     * @return {?}
     */
    function (module) {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(module.default);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/localization.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationService = /** @class */ (function () {
    function LocalizationService(store, router, ngZone, otherInstance) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
    }
    Object.defineProperty(LocalizationService.prototype, "currentLang", {
        get: /**
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
            function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.router.navigateByUrl(this.router.url).catch(rxjs__WEBPACK_IMPORTED_MODULE_4__["noop"])];
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
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationService.prototype.get = /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.select(ConfigState.getLocalization.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([key], interpolateParams)));
    };
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationService.prototype.instant = /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([key], interpolateParams)));
    };
    LocalizationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: LocalizationService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LocalizationService_Factory() { return new LocalizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
    return LocalizationService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/session.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionState = /** @class */ (function () {
    function SessionState(localizationService) {
        this.localizationService = localizationService;
    }
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
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setLanguage = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var _this = this;
        var patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
         * @return {?}
         */
        function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.localizationService.registerLocale(payload)); })));
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
    SessionState.ctorParameters = function () { return [
        { type: LocalizationService }
    ]; };
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
    return SessionState;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/config.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigState = /** @class */ (function () {
    function ConfigState(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state.environment.apis[key || 'default'].url;
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (keyword) {
                /** @type {?} */
                var keys = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
                 * @return {?}
                 */
                function () { return Object.keys(state.setting.values).filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return key.indexOf(keyword) > -1; })); }), []);
                if (keys.length) {
                    return keys.reduce((/**
                     * @param {?} acc
                     * @param {?} key
                     * @return {?}
                     */
                    function (acc, key) {
                        var _a;
                        return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, acc, (_a = {}, _a[key] = state.setting.values[key], _a)));
                    }), {});
                }
            }
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
             * @return {?}
             */
            function () { return state.setting.values; }), {});
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
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
            function (k) { return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        /** @type {?} */
        var defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        if (!key)
            key = '';
        /** @type {?} */
        var keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!state.localization)
                return defaultValue || key;
            var defaultResourceName = state.environment.localization.defaultResourceName;
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error("Please check your environment. May you forget set defaultResourceName?\n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
                }
                keys[0] = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
                 * @return {?}
                 */
                function () { return defaultResourceName; }));
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
        return this.appConfigurationService.getConfiguration().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            return patchState(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, configuration));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
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
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)
                : dispatch(new SetLanguage(defaultLang));
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
            flattedRoutes[index] = (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, flattedRoutes[index], newValue)));
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
        var route = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, payload);
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
            if (parent_1.url.replace('/', '')) {
                route.url = parent_1.url + "/" + route.path;
            }
            else {
                route.url = "/" + route.path;
            }
            route.order = route.order || route.order === 0 ? route.order : parent_1.children.length;
            parent_1.children = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])((parent_1.children || []), [route]).sort((/**
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
                parentName_1 = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
                routes = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(routes, [route]).sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.order - b.order; }));
            }
            else {
                route.order = routes.length;
                routes = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(routes, [route]);
            }
            flattedRoutes.push(route);
        }
        return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes,
        });
    };
    var ConfigState_1;
    ConfigState.ctorParameters = function () { return [
        { type: ApplicationConfigurationService },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
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
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(AddRoute),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, AddRoute]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], ConfigState.prototype, "addRoute", null);
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
    return ConfigState;
}());
if (false) {}
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
                function (child) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, child, { url: (newValue.url + "/" + child.path).replace('//', '/') })); }));
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, route, newValue);
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
        var _a = this.store.selectSnapshot(ConfigState.getAll), layouts = _a.requirements.layouts, routes = _a.routes;
        if ((this.route.snapshot.data || {}).layout) {
            this.layout = layouts
                .filter((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return !!l; }))
                .find((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
             * @return {?}
             */
            function () { return l.type.toLowerCase().indexOf(_this.route.snapshot.data.layout); }), -1) > -1; }));
        }
        this.router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var segments = _this.router.parseUrl(event.url).root.children.primary.segments;
                /** @type {?} */
                var layout_1 = (_this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                _this.layout = layouts
                    .filter((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return !!l; }))
                    .find((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
                 * @return {?}
                 */
                function () { return l.type.toLowerCase().indexOf(layout_1); }), -1) > -1; }));
            }
        }));
    }
    /**
     * @return {?}
     */
    DynamicLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    DynamicLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet><ng-container *ngComponentOutlet=\"layout\"></ng-container></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(ConfigState.getOne('requirements')),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], DynamicLayoutComponent.prototype, "requirements$", void 0);
    return DynamicLayoutComponent;
}());
if (false) {}
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
    function (acc, val) { return (val.wrapper ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(acc, val.children) : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(acc, [val])); }), [])
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
        var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])([ReplaceableComponentsState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        var index = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
            replaceableComponents = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(replaceableComponents, [payload]);
        }
        patchState({
            replaceableComponents: replaceableComponents,
        });
    };
    var ReplaceableComponentsState_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Action"])(AddReplaceableComponent),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object, AddReplaceableComponent]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", void 0)
    ], ReplaceableComponentsState.prototype, "replaceableComponentsAction", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Selector"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__metadata"])("design:returntype", Array)
    ], ReplaceableComponentsState, "getAll", null);
    ReplaceableComponentsState = ReplaceableComponentsState_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["State"])({
            name: 'ReplaceableComponentsState',
            defaults: (/** @type {?} */ ({ replaceableComponents: [] })),
        })
    ], ReplaceableComponentsState);
    return ReplaceableComponentsState;
}());

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
            .pipe(takeUntilDestroy(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'abp-replaceable-route-container',
                    template: "\n    <ng-container *ngComponentOutlet=\"externalComponent || defaultComponent\"></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    ReplaceableRouteContainerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    return ReplaceableRouteContainerComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/router-outlet.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterOutletComponent = /** @class */ (function () {
    function RouterOutletComponent() {
    }
    RouterOutletComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[autofocus]'
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    AutofocusDirective.propDecorators = {
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['autofocus',] }]
    };
    return AutofocusDirective;
}());
if (false) {}

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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[abpEllipsis]',
                },] }
    ];
    /** @nocollapse */
    EllipsisDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    EllipsisDirective.propDecorators = {
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpEllipsis',] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['title',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpEllipsisEnabled',] }],
        inlineClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.abp-ellipsis-inline',] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.abp-ellipsis',] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.max-width',] }]
    };
    return EllipsisDirective;
}());
if (false) {}

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
if (false) {}
var RecordView = /** @class */ (function () {
    function RecordView(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordView;
}());
if (false) {}
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
            return this.compareBy || just_compare__WEBPACK_IMPORTED_MODULE_9___default.a;
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
        var items = (/** @type {?} */ (just_clone__WEBPACK_IMPORTED_MODULE_10___default()(this.items)));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[abpFor]',
                },] }
    ];
    /** @nocollapse */
    ForDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }
    ]; };
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
    return ForDirective;
}());
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
    var fn = (/**
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
var FormSubmitDirective = /** @class */ (function () {
    function FormSubmitDirective(formGroupDirective, host, cdRef) {
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.debounce), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: 'form[ngSubmit][formGroup]',
                },] }
    ];
    /** @nocollapse */
    FormSubmitDirective.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    FormSubmitDirective.propDecorators = {
        debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        notValidateOnSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return FormSubmitDirective;
}());
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
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[abpInit]' },] }
    ];
    /** @nocollapse */
    InitDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    InitDirective.propDecorators = {
        init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['abpInit',] }]
    };
    return InitDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileService = /** @class */ (function () {
    function ProfileService(rest) {
        this.rest = rest;
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request, { skipHandleError: skipHandleError });
    };
    ProfileService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ProfileService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ProfileService_Factory() { return new ProfileService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(RestService)); }, token: ProfileService, providedIn: "root" });
    return ProfileService;
}());
if (false) {}

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
        return this.profileService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
        return this.profileService.update(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
    return ProfileState;
}());
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[abpPermission]',
                },] }
    ];
    /** @nocollapse */
    PermissionDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    PermissionDirective.propDecorators = {
        condition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpPermission',] }]
    };
    return PermissionDirective;
}());
if (false) {}

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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            return !_this.initialized || !just_compare__WEBPACK_IMPORTED_MODULE_9___default()(res.component, _this.externalComponent);
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
                var customInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
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
        if (Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
                    if (!just_compare__WEBPACK_IMPORTED_MODULE_9___default()(this.defaultComponentRef[key], this.data.inputs[key].value)) {
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
        this.providedData = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.data, { inputs: {} });
        if (!this.data.inputs)
            return;
        Object.defineProperties(this.providedData.inputs, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, Object.keys(this.data.inputs).reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        function (acc, key) {
            var _a;
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, acc, (_a = {}, _a[key] = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ enumerable: true, configurable: true, get: (/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[abpReplaceableTemplate]' },] }
    ];
    /** @nocollapse */
    ReplaceableTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ReplaceableTemplateDirective.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpReplaceableTemplate',] }]
    };
    return ReplaceableTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/visibility.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
                var htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
            var htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[abpVisibility]',
                },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    VisibilityDirective.propDecorators = {
        focusedElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['abpVisibility',] }]
    };
    return VisibilityDirective;
}());
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
    function AuthGuard(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
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
        var hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        return this.router.createUrlTree(['/account/login'], { state: { redirectUrl: state.url } });
    };
    AuthGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthGuard_Factory() { return new AuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
if (false) {}

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
        var resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
         * @return {?}
         */
        function () { return route.data.routes.requiredPolicy; })) || Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
         * @return {?}
         */
        function () { return (/** @type {?} */ (route.data.requiredPolicy)); }));
        if (!resource) {
            resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
            }
        }
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionGuard.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ PermissionGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PermissionGuard_Factory() { return new PermissionGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: PermissionGuard, providedIn: "root" });
    return PermissionGuard;
}());
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new StopLoader(request)); })));
    };
    ApiInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ApiInterceptor.ctorParameters = function () { return [
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__["OAuthService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    return ApiInterceptor;
}());
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
    if (false) {}
    /**
     * @record
     */
    function ReplaceableComponent() { }
    ReplaceableComponents.ReplaceableComponent = ReplaceableComponent;
    if (false) {}
    /**
     * @record
     * @template I, O
     */
    function ReplaceableTemplateDirectiveInput() { }
    ReplaceableComponents.ReplaceableTemplateDirectiveInput = ReplaceableTemplateDirectiveInput;
    if (false) {}
    /**
     * @record
     * @template I, O
     */
    function ReplaceableTemplateData() { }
    ReplaceableComponents.ReplaceableTemplateData = ReplaceableTemplateData;
    if (false) {}
    /**
     * @record
     * @template T
     */
    function RouteData() { }
    ReplaceableComponents.RouteData = RouteData;
    if (false) {}
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
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([value], interpolateParams.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) { return (Array.isArray(val) ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(acc, val) : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(acc, [val])); }), []))));
    };
    LocalizationPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'abpLocalization',
                },] }
    ];
    /** @nocollapse */
    LocalizationPipe.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    return LocalizationPipe;
}());
if (false) {}

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
        var sorted = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(numberArray, stringArray, value.filter((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'abpSort',
                },] }
    ];
    return SortPipe;
}());

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
var NGXS_CONFIG_PLUGIN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NGXS_CONFIG_PLUGIN_OPTIONS');
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
        var matches = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["actionMatcher"])(event);
        /** @type {?} */
        var isInitAction = matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["InitState"]) || matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["UpdateState"]);
        if (isInitAction && !this.initialized) {
            /** @type {?} */
            var transformedRoutes = transformRoutes(this.router.config);
            var routes = transformedRoutes.routes;
            var wrappers = transformedRoutes.wrappers;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            var flattedRoutes = flatRoutes(just_clone__WEBPACK_IMPORTED_MODULE_10___default()(routes));
            state = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["setValue"])(state, 'ConfigState', Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, (state.ConfigState && Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, state.ConfigState)), this.options, { routes: routes,
                flattedRoutes: flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    };
    ConfigPlugin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ConfigPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    return ConfigPlugin;
}());
if (false) {}
/**
 * @param {?=} routes
 * @param {?=} wrappers
 * @return {?}
 */
function transformRoutes(routes, wrappers) {
    if (routes === void 0) { routes = []; }
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var abpRoutes = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(getAbpRoutes());
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
            transformed.push((/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, route.data.routes, { path: route.path, name: Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])((/**
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
        function (route) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, route, { url: parentUrl + "/" + route.path }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, parentUrl + "/" + route.path),
        }))); }));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, route, { url: "/" + route.path }, (route.children &&
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
                function (child) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, child, { parentName: val.name })); }));
                value = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([val], flat(val.children));
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(acc, value);
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
        return this.store.selectSnapshot(ConfigState.getOne.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getDeep.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getRoute.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getApiUrl.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getSetting.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getSettings.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getGrantedPolicy.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args)));
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
        return this.store.dispatch(new (PatchRouteByName.bind.apply(PatchRouteByName, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
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
        return this.store.dispatch(new (AddRoute.bind.apply(AddRoute, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
    };
    ConfigStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConfigStateService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ ConfigStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ConfigStateService_Factory() { return new ConfigStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: ConfigStateService, providedIn: "root" });
    return ConfigStateService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/lazy-load.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService() {
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
    LazyLoadService.prototype.load = /**
     * @param {?} urlOrUrls
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    function (urlOrUrls, type, content, targetQuery, position) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (targetQuery === void 0) { targetQuery = 'body'; }
        if (position === void 0) { position = 'beforeend'; }
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
                _this.loadedLibraries[key] = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ LazyLoadService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    return LazyLoadService;
}());
if (false) {}

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
        return this.store.dispatch(new (UpdateProfile.bind.apply(UpdateProfile, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
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
        return this.store.dispatch(new (ChangePassword.bind.apply(ChangePassword, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
    };
    ProfileStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileStateService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ ProfileStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ProfileStateService_Factory() { return new ProfileStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: ProfileStateService, providedIn: "root" });
    return ProfileStateService;
}());
if (false) {}

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
        return this.store.dispatch(new (SetLanguage.bind.apply(SetLanguage, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
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
        return this.store.dispatch(new (SetTenant.bind.apply(SetTenant, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])([void 0], args)))());
    };
    SessionStateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SessionStateService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ SessionStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SessionStateService_Factory() { return new SessionStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: SessionStateService, providedIn: "root" });
    return SessionStateService;
}());
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
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, environment);
}
/**
 * @param {?} config
 * @return {?}
 */
function configFactory(config) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, config);
}
/** @type {?} */
var ENVIRONMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ENVIRONMENT');
/** @type {?} */
var CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONFIG');

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
var InputEventDebounceDirective = /** @class */ (function () {
    function InputEventDebounceDirective(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    InputEventDebounceDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.el.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.debounce), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_15__["takeUntilDestroy"])(this))
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[input.debounce]',
                },] }
    ];
    /** @nocollapse */
    InputEventDebounceDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    InputEventDebounceDirective.propDecorators = {
        debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        debounceEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['input.debounce',] }]
    };
    return InputEventDebounceDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/stop-propagation.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StopPropagationDirective = /** @class */ (function () {
    function StopPropagationDirective(el) {
        this.el = el;
        this.stopPropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    StopPropagationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.el.nativeElement, 'click')
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[click.stop]',
                },] }
    ];
    /** @nocollapse */
    StopPropagationDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    StopPropagationDirective.propDecorators = {
        stopPropEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['click.stop',] }]
    };
    return StopPropagationDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/providers/locale.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocaleId = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(LocaleId, _super);
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
if (false) {}
/** @type {?} */
var LocaleProvider = {
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
    var timezoneOffset = this.getTimezoneOffset();
    return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
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
    };
    CoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
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
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
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
    return CoreModule;
}());

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

/***/ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/theme-shared/fesm5/abp-ng.theme.shared.js ***!
  \******************************************************************************************************/
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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "../../node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");



















/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.LeptonLayoutState; }));
        if (this.show) {
            /** @type {?} */
            var splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            function (chunk) { return chunk; }));
            /** @type {?} */
            var currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(splittedUrl[0]));
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
                var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__read"])(splittedUrl), arr = _a.slice(1);
                /** @type {?} */
                var childRoute = currentUrl;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var element = arr[i];
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) { return child.path === element; }));
                    this_1.segments.push(childRoute.name);
                };
                var this_1 = this;
                for (var i = 0; i < arr.length; i++) {
                    _loop_1(i);
                }
            }
        }
    };
    BreadcrumbComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-breadcrumb',
                    template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    return BreadcrumbComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        this.abpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ButtonComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return "" + (this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.renderer.setAttribute(_this.buttonRef.nativeElement, key, _this.attributes[key]);
            }));
        }
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-button',
                    template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"abpClick.next($event)\"\n      (focus)=\"abpFocus.next($event)\"\n      (blur)=\"abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    ButtonComponent.propDecorators = {
        buttonId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        buttonType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        abpClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        abpFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        abpBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        buttonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['button', { static: true },] }]
    };
    return ButtonComponent;
}());
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
    var colors = [];
    for (var i = 0; i < count; i++) {
        /** @type {?} */
        var r = ((i + 5) * (i + 5) * 474) % 255;
        /** @type {?} */
        var g = ((i + 5) * (i + 5) * 1600) % 255;
        /** @type {?} */
        var b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
/** @type {?} */
var chartJsLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartComponent = /** @class */ (function () {
    function ChartComponent(el, cdRef) {
        var _this = this;
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](this);
        this.onCanvasClick = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.chart) {
                /** @type {?} */
                var element = _this.chart.getElementAtEvent(event);
                /** @type {?} */
                var dataset = _this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    _this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset: dataset,
                    });
                }
            }
        });
        this.initChart = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var opts = _this.options || {};
            opts.responsive = _this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (_this.height || _this.width)) {
                opts.maintainAspectRatio = false;
            }
            _this.chart = new Chart(_this.canvas, {
                type: _this.type,
                data: _this.data,
                options: _this.options,
                plugins: _this.plugins,
            });
            _this.cdRef.detectChanges();
        });
        this.generateLegend = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                return _this.chart.generateLegend();
            }
        });
        this.refresh = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                _this.chart.update();
                _this.cdRef.detectChanges();
            }
        });
        this.reinit = (/**
         * @return {?}
         */
        function () {
            if (_this.chart) {
                _this.chart.destroy();
                _this.initChart();
            }
        });
    }
    Object.defineProperty(ChartComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._data = val;
            this.reinit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "canvas", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.children[0].children[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent.prototype, "base64Image", {
        get: /**
         * @return {?}
         */
        function () {
            return this.chart.toBase64Image();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        chartJsLoaded$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.testChartJs();
            _this.initChart();
            _this._initialized = true;
        }));
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.testChartJs = /**
     * @return {?}
     */
    function () {
        try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
        }
        catch (error) {
            throw new Error("Chart is not found. Import the Chart from app.module like shown below:\n      import('chart.js');\n      ");
        }
    };
    /**
     * @return {?}
     */
    ChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    };
    ChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-chart',
                    template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
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
    return ChartComponent;
}());
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
var  /**
 * @abstract
 * @template T
 */
AbstractToaster = /** @class */ (function () {
    function AbstractToaster(messageService) {
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
    AbstractToaster.prototype.info = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'info', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    AbstractToaster.prototype.success = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'success', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    AbstractToaster.prototype.warn = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'warn', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    AbstractToaster.prototype.error = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'error', options);
    };
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    AbstractToaster.prototype.show = /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    function (message, title, severity, options) {
        this.messageService.clear(this.key);
        this.messageService.add(Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({ severity: severity, detail: message || '', summary: title || '' }, options, { key: this.key }, (typeof (options || ((/** @type {?} */ ({})))).sticky === 'undefined' && { sticky: this.sticky })));
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        return this.status$;
    };
    /**
     * @param {?=} status
     * @return {?}
     */
    AbstractToaster.prototype.clear = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        this.messageService.clear(this.key);
        this.status$.next(status || "dismiss" /* dismiss */);
        this.status$.complete();
    };
    return AbstractToaster;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmationService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ConfirmationService, _super);
    function ConfirmationService(messageService) {
        var _this = _super.call(this, messageService) || this;
        _this.messageService = messageService;
        _this.key = 'abpConfirmation';
        _this.sticky = true;
        _this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        return _this;
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.show = /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    function (message, title, severity, options) {
        this.listenToEscape();
        return _super.prototype.show.call(this, message, title, severity, options);
    };
    /**
     * @param {?=} status
     * @return {?}
     */
    ConfirmationService.prototype.clear = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        _super.prototype.clear.call(this, status);
        this.destroy$.next();
    };
    /**
     * @return {?}
     */
    ConfirmationService.prototype.listenToEscape = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.clear();
        }));
    };
    ConfirmationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfirmationService.ctorParameters = function () { return [
        { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
    ]; };
    /** @nocollapse */ ConfirmationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConfirmationService_Factory() { return new ConfirmationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ConfirmationService, providedIn: "root" });
    return ConfirmationService;
}(AbstractToaster));
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(confirmationService) {
        this.confirmationService = confirmationService;
        this.confirm = "confirm" /* confirm */;
        this.reject = "reject" /* reject */;
        this.dismiss = "dismiss" /* dismiss */;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    ConfirmationComponent.prototype.close = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.confirmationService.clear(status);
    };
    ConfirmationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-confirmation',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <p-toast\n      position=\"center\"\n      key=\"abpConfirmation\"\n      (onClose)=\"close(dismiss)\"\n      [modal]=\"true\"\n      [baseZIndex]=\"1000\"\n      styleClass=\"abp-confirm\"\n    >\n      <ng-template let-message pTemplate=\"message\">\n        <i class=\"fa fa-exclamation-circle abp-confirm-icon\"></i>\n        <div *ngIf=\"message.summary\" class=\"abp-confirm-summary\">\n          {{ message.summary | abpLocalization: message.titleLocalizationParams }}\n        </div>\n        <div class=\"abp-confirm-body\">\n          {{ message.detail | abpLocalization: message.messageLocalizationParams }}\n        </div>\n\n        <div class=\"abp-confirm-footer justify-content-center\">\n          <button\n            *ngIf=\"!message.hideCancelBtn\"\n            id=\"cancel\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(reject)\"\n          >\n            {{ message.cancelText || message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}\n          </button>\n          <button\n            *ngIf=\"!message.hideYesBtn\"\n            id=\"confirm\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(confirm)\"\n            autofocus\n          >\n            <span>{{ message.yesText || message.yesCopy || 'AbpIdentity::Yes' | abpLocalization }}</span>\n          </button>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                }] }
    ];
    /** @nocollapse */
    ConfirmationComponent.ctorParameters = function () { return [
        { type: ConfirmationService }
    ]; };
    return ConfirmationComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpErrorWrapperComponent = /** @class */ (function () {
    function HttpErrorWrapperComponent() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
    }
    Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.status ? "[" + this.status + "]" : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.backgroundColor =
            Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])((/**
             * @return {?}
             */
            function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); })) || '#fff';
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(document, 'keyup')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.destroy();
        }));
    };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HttpErrorWrapperComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HttpErrorWrapperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-http-error-wrapper',
                    template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    HttpErrorWrapperComponent.propDecorators = {
        containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container', { static: false },] }]
    };
    return HttpErrorWrapperComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loader-bar/loader-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoaderBarComponent = /** @class */ (function () {
    function LoaderBarComponent(actions, router, cdRef) {
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
        function (action) { return action.payload.url.indexOf('openid-configuration') < 0; });
    }
    Object.defineProperty(LoaderBarComponent.prototype, "boxShadow", {
        get: /**
         * @return {?}
         */
        function () {
            return "0 0 10px rgba(" + this.color + ", 0.5)";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StopLoader"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(this.filter), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"])
                _this.startLoading();
            else
                _this.stopLoading();
        }));
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"];
        })), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"])
                _this.startLoading();
            else
                _this.stopLoading();
        }));
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.interval.unsubscribe();
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.startLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isLoading || this.progressLevel !== 0)
            return;
        this.isLoading = true;
        this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(this.intervalPeriod).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.progressLevel < 75) {
                _this.progressLevel += Math.random() * 10;
            }
            else if (_this.progressLevel < 90) {
                _this.progressLevel += 0.4;
            }
            else if (_this.progressLevel < 100) {
                _this.progressLevel += 0.1;
            }
            else {
                _this.interval.unsubscribe();
            }
            _this.cdRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    LoaderBarComponent.prototype.stopLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(this.stopDelay).subscribe((/**
         * @return {?}
         */
        function () {
            _this.progressLevel = 0;
            _this.cdRef.detectChanges();
        }));
    };
    LoaderBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-loader-bar',
                    template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div\n        class=\"abp-progress\"\n        [style.width.vw]=\"progressLevel\"\n        [ngStyle]=\"{\n          'background-color': color,\n          'box-shadow': boxShadow\n        }\"\n      ></div>\n    </div>\n  ",
                    styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;transition:width .4s}"]
                }] }
    ];
    /** @nocollapse */
    LoaderBarComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Actions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    LoaderBarComponent.propDecorators = {
        containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return LoaderBarComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var fadeInDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeInRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
var fadeOutRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/modal.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(fadeIn)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(fadeOut)),
]);
/** @type {?} */
var dialogAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('dialog', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(fadeInDown)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(fadeOut)),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    function ModalComponent(renderer, confirmationService) {
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
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    Object.defineProperty(ModalComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (typeof value !== 'boolean')
                return;
            this.isModalOpen = value;
            this._visible = value;
            this.visibleChange.emit(value);
            if (value) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.listen(); }), 0);
                this.renderer.addClass(document.body, 'modal-open');
                this.appear.emit();
            }
            else {
                this.renderer.removeClass(document.body, 'modal-open');
                this.disappear.emit();
                this.destroy$.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent.prototype, "busy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._busy;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                this.abpSubmit.loading = value;
            }
            this._busy = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.busy)
            return;
        /** @type {?} */
        var node;
        if (!this.modalContent) {
            node = (/** @type {?} */ (document.getElementById('modal-container')));
        }
        /** @type {?} */
        var nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body')))).childNodes);
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
            function (status) {
                _this.isConfirmationOpen = false;
                if (status === "confirm" /* confirm */) {
                    _this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.close();
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.abpClose)
                return;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(_this.abpClose.nativeElement, 'click')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((/**
             * @return {?}
             */
            function () { return !!_this.modalContent; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.close(); }));
        }), 0);
        this.init.emit();
    };
    ModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-modal',
                    template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    animations: [fadeAnimation]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: ConfirmationService }
    ]; };
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
    return ModalComponent;
}());
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
    function (acc, val) { return Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(acc, (val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])); }), []);
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
    function (node) { return (node.className || '').indexOf('ng-dirty') > -1; })) > -1;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SortOrderIconComponent = /** @class */ (function () {
    function SortOrderIconComponent() {
        this.orderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSortKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SortOrderIconComponent.prototype, "selectedSortKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedSortKey;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectedSortKey = value;
            this.selectedSortKeyChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "order", {
        get: /**
         * @return {?}
         */
        function () {
            return this._order;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._order = value;
            this.orderChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.selectedSortKey)
                return 'sorting';
            if (this.selectedSortKey === this.sortKey)
                return "sorting_" + this.order;
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    SortOrderIconComponent.prototype.sort = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
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
                this.orderChange.emit('');
                break;
        }
    };
    SortOrderIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-sort-order-icon',
                    template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
                }] }
    ];
    SortOrderIconComponent.propDecorators = {
        sortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectedSortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        orderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        selectedSortKeyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return SortOrderIconComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableEmptyMessageComponent = /** @class */ (function () {
    function TableEmptyMessageComponent() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    Object.defineProperty(TableEmptyMessageComponent.prototype, "emptyMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.message || this.localizationResource + "::" + this.localizationProp;
        },
        enumerable: true,
        configurable: true
    });
    TableEmptyMessageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[abp-table-empty-message]',
                    template: "\n    <td class=\"text-center\" [attr.colspan]=\"colspan\">\n      {{ emptyMessage | abpLocalization }}\n    </td>\n  "
                }] }
    ];
    TableEmptyMessageComponent.propDecorators = {
        colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        localizationResource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        localizationProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return TableEmptyMessageComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
    }
    ToastComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'abp-toast',
                    // tslint:disable-next-line: component-max-inline-declarations
                    template: "\n    <p-toast position=\"bottom-right\" key=\"abpToast\" styleClass=\"abp-toast\" [baseZIndex]=\"1000\">\n      <ng-template let-message pTemplate=\"message\">\n        <span\n          class=\"ui-toast-icon pi\"\n          [ngClass]=\"{\n            'pi-info-circle': message.severity === 'info',\n            'pi-exclamation-triangle': message.severity === 'warn',\n            'pi-times': message.severity === 'error',\n            'pi-check': message.severity === 'success'\n          }\"\n        ></span>\n        <div class=\"ui-toast-message-text-content\">\n          <div class=\"ui-toast-summary\">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>\n          <div class=\"ui-toast-detail\">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
                }] }
    ];
    return ToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 215px;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar {\n  height: 5px !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.modal.show {\n  display: block !important;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 7px);\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1040;\n}\n\n.modal::-webkit-scrollbar {\n  width: 7px;\n}\n\n.modal::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.modal::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.modal-dialog {\n  z-index: 1050;\n}\n\n.abp-ellipsis-inline {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-ellipsis {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-toast .ui-toast-message {\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: #1b1d29;\n}\n\n.abp-toast .ui-toast-message-content {\n  padding: 10px;\n}\n\n.abp-toast .ui-toast-message-content .ui-toast-icon {\n  top: 0;\n  left: 0;\n  padding: 10px;\n}\n\n.abp-toast .ui-toast-summary {\n  margin: 0;\n  font-weight: 700;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-error {\n  border: 2px solid #ba1659;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {\n  color: #ba1659;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn {\n  border: 2px solid #ed5d98;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-message-content .ui-toast-icon {\n  color: #ed5d98;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-success {\n  border: 2px solid #1c9174;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {\n  color: #1c9174;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-info {\n  border: 2px solid #fccb31;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {\n  color: #fccb31;\n}\n\n.abp-confirm .ui-toast-message {\n  box-sizing: border-box;\n  padding: 0px;\n  border:0 none;\n  border-radius: 4px;\n  background-color: transparent !important;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\n.abp-confirm .ui-toast-message-content {\n  padding: 0px;\n}\n\n.abp-confirm .abp-confirm-icon {\n  margin: 32px 50px 5px !important;\n  color: #f8bb86 !important;\n  font-size: 52px !important;\n}\n\n.abp-confirm .ui-toast-close-icon {\n  display: none !important;\n}\n\n.abp-confirm .abp-confirm-summary {\n  display: block !important;\n  margin-bottom: 13px !important;\n  padding: 13px 16px 0px !important;\n  font-weight: 600 !important;\n  font-size: 18px !important;\n}\n\n.abp-confirm .abp-confirm-body {\n  display: inline-block !important;\n  padding: 0px 10px !important;\n}\n\n.abp-confirm .abp-confirm-footer {\n  display: block;\n  margin-top: 30px;\n  padding: 16px;\n  text-align: right;\n}\n\n.abp-confirm .abp-confirm-footer .btn {\n  margin-left: 10px !important;\n}\n\n.ui-widget-overlay {\n  z-index: 1000;\n}\n\n.color-white {\n  color: #FFF !important;\n}\n\n.custom-checkbox > label {\n  cursor: pointer;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n.abp-collapsed-height {\n  -moz-transition: max-height linear 0.35s;\n  -ms-transition: max-height linear 0.35s;\n  -o-transition: max-height linear 0.35s;\n  -webkit-transition: max-height linear 0.35s;\n  overflow:hidden;\n  transition:max-height 0.35s linear;\n  height:auto;\n  max-height: 0;\n}\n\n.abp-mh-25 {\n  max-height: 25vh;\n}\n\n.abp-mh-50 {\n  transition:max-height 0.65s linear;\n  max-height: 50vh;\n}\n\n.abp-mh-75 {\n  transition:max-height 0.85s linear;\n  max-height: 75vh;\n}\n\n.abp-mh-100 {\n  transition:max-height 1s linear;\n  max-height: 100vh;\n}\n\n[class^=\"sorting\"] {\n  opacity: .3;\n  cursor: pointer;\n}\n[class^=\"sorting\"]:before {\n  right: 0.5rem;\n  content: \"\u2191\";\n}\n[class^=\"sorting\"]:after {\n  right: 0.5rem;\n  content: \"\u2193\";\n}\n\n.sorting_desc {\n  opacity: 1;\n}\n.sorting_desc:before {\n  opacity: .3;\n}\n\n.sorting_asc {\n  opacity: 1;\n}\n.sorting_asc:after {\n  opacity: .3;\n}\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";

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
var TableSortDirective = /** @class */ (function () {
    function TableSortDirective(table, sortPipe) {
        this.table = table;
        this.sortPipe = sortPipe;
        this.value = [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    TableSortDirective.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var value = _a.value, abpTableSort = _a.abpTableSort;
        if (value || abpTableSort) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(just_clone__WEBPACK_IMPORTED_MODULE_13___default()(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    };
    TableSortDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[abpTableSort]',
                    providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"]],
                },] }
    ];
    /** @nocollapse */
    TableSortDirective.ctorParameters = function () { return [
        { type: primeng_table__WEBPACK_IMPORTED_MODULE_12__["Table"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"] }
    ]; };
    TableSortDirective.propDecorators = {
        abpTableSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return TableSortDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ERROR_MESSAGES = {
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
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["RouterError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["RouterDataResolved"])).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"]) {
                var _a = res.payload, err_1 = _a === void 0 ? (/** @type {?} */ ({})) : _a;
                /** @type {?} */
                var body = Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])((/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (err_1))).error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
                if (err_1 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpErrorResponse"] && err_1.headers.get('_AbpErrorFormat')) {
                    /** @type {?} */
                    var confirmation$ = _this.showError(null, null, body);
                    if (err_1.status === 401) {
                        confirmation$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.navigateToLogin();
                        }));
                    }
                }
                else {
                    switch (((/** @type {?} */ (err_1))).status) {
                        case 401:
                            _this.canCreateCustomError(401)
                                ? _this.show401Page()
                                : _this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage401',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage401Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                }).subscribe((/**
                                 * @return {?}
                                 */
                                function () { return _this.navigateToLogin(); }));
                            break;
                        case 403:
                            _this.createErrorComponent({
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
                            _this.canCreateCustomError(404)
                                ? _this.show404Page()
                                : _this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage404',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                });
                            break;
                        case 500:
                            _this.createErrorComponent({
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
                            if (((/** @type {?} */ (err_1))).statusText === 'Unknown Error') {
                                _this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::DefaultErrorMessage',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                    },
                                });
                            }
                            break;
                        default:
                            _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                            break;
                    }
                }
            }
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["RouterError"] && Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])((/**
             * @return {?}
             */
            function () { return res.event.error.indexOf('Cannot match') > -1; }), false)) {
                _this.show404Page();
            }
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["RouterDataResolved"] && _this.componentRef) {
                _this.componentRef.destroy();
                _this.componentRef = null;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show401Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show404Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    };
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    ErrorHandler.prototype.showError = /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    function (message, title, body) {
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
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.navigateToLogin = /**
     * @private
     * @return {?}
     */
    function () {
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["Navigate"](['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_15__["RouterState"].url) } }));
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    ErrorHandler.prototype.createErrorComponent = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        /** @type {?} */
        var renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        var host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes.resolveComponentFactory(HttpErrorWrapperComponent).create(this.injector);
        for (var key in this.componentRef.instance) {
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
        var destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ErrorHandler.prototype.canCreateCustomError = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])((/**
         * @return {?}
         */
        function () {
            return _this.httpErrorConfig.errorScreen.component &&
                _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
        }));
    };
    ErrorHandler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ErrorHandler.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Actions"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: ConfirmationService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['HTTP_ERROR_CONFIG',] }] }
    ]; };
    /** @nocollapse */ ErrorHandler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ErrorHandler_Factory() { return new ErrorHandler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Actions"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ConfirmationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
    return ErrorHandler;
}());
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
function httpErrorConfigFactory(config) {
    if (config === void 0) { config = (/** @type {?} */ ({})); }
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({ errorScreen: {} }, config)));
}
/** @type {?} */
var HTTP_ERROR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_ERROR_CONFIG');

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
        return ("0" + value).slice(-2);
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
    return parseInt("" + value, 10);
}
var DateParserFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(DateParserFormatter, _super);
    function DateParserFormatter(datePipe) {
        var _this = _super.call(this) || this;
        _this.datePipe = datePipe;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DateParserFormatter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');
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
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateParserFormatter.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month, date.day), 'shortDate');
        }
        else {
            return date
                ? date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '')
                : '';
        }
    };
    DateParserFormatter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    DateParserFormatter.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    return DateParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDateParserFormatter"]));
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
    var fn = (/**
     * @return {?}
     */
    function () {
        __webpack_require__.e(/*! import() | chart-js */ "chart-js").then(__webpack_require__.t.bind(null, /*! chart.js */ "../../node_modules/chart.js/dist/Chart.js", 7)).then((/**
         * @return {?}
         */
        function () { return chartJsLoaded$.next(true); }));
        /** @type {?} */
        var lazyLoadService = injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LazyLoadService"]);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
var ThemeSharedModule = /** @class */ (function () {
    function ThemeSharedModule(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ThemeSharedModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
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
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbDateParserFormatter"], useClass: DateParserFormatter },
            ],
        };
    };
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
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
                    entryComponents: [HttpErrorWrapperComponent],
                },] }
    ];
    /** @nocollapse */
    ThemeSharedModule.ctorParameters = function () { return [
        { type: ErrorHandler }
    ]; };
    return ThemeSharedModule;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/bounce.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var bounceIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', display: '{{ display }}' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
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
var collapseY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var collapseYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '-100%' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
var collapseX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var expandY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var expandYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '-100%' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '0' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
var expandX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
var collapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(collapseY)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(expandY)),
]);
/** @type {?} */
var collapseWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('collapseWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(expandYWithMargin)),
]);
/** @type {?} */
var collapseLinearWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('collapseLinearWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["useAnimation"])(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/slide.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slideFromBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('slideFromBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ 'margin-top': '20px', opacity: '0' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ opacity: '1', 'margin-top': '0px' })),
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
var SETTING_TABS = (/** @type {?} */ ([]));
/**
 * @param {?} tab
 * @return {?}
 */
function addSettingTab(tab) {
    if (!Array.isArray(tab)) {
        tab = [tab];
    }
    SETTING_TABS.push.apply(SETTING_TABS, Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__spread"])(tab));
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
var ToasterService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ToasterService, _super);
    function ToasterService(messageService) {
        var _this = _super.call(this, messageService) || this;
        _this.messageService = messageService;
        return _this;
    }
    /**
     * @param {?} messages
     * @return {?}
     */
    ToasterService.prototype.addAll = /**
     * @param {?} messages
     * @return {?}
     */
    function (messages) {
        var _this = this;
        this.messageService.addAll(messages.map((/**
         * @param {?} message
         * @return {?}
         */
        function (message) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__assign"])({ key: _this.key }, message)); })));
    };
    ToasterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ToasterService.ctorParameters = function () { return [
        { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
    ]; };
    /** @nocollapse */ ToasterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ToasterService_Factory() { return new ToasterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ToasterService, providedIn: "root" });
    return ToasterService;
}(AbstractToaster));
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");




var SettingManagementConfigService = /** @class */ (function () {
    function SettingManagementConfigService(store) {
        this.store = store;
        var route = {
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
    SettingManagementConfigService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    SettingManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SettingManagementConfigService);
    return SettingManagementConfigService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/setting-management-config.service */ "../../libs/setting-management/config/src/lib/services/setting-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");




var SettingManagementConfigModule = /** @class */ (function () {
    function SettingManagementConfigModule() {
    }
    SettingManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__["SettingManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
        })
    ], SettingManagementConfigModule);
    return SettingManagementConfigModule;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/account-config.service */ "../../packages/account-config/src/lib/services/account-config.service.ts");





function accountOptionsFactory(options) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ redirectUrl: '/' }, options);
}
var ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ACCOUNT_OPTIONS');
var AccountConfigModule = /** @class */ (function () {
    function AccountConfigModule() {
    }
    AccountConfigModule_1 = AccountConfigModule;
    AccountConfigModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
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
    };
    var AccountConfigModule_1;
    AccountConfigModule = AccountConfigModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"]],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"], multi: true, deps: [_services_account_config_service__WEBPACK_IMPORTED_MODULE_4__["AccountConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"] }],
        })
    ], AccountConfigModule);
    return AccountConfigModule;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var AccountConfigService = /** @class */ (function () {
    function AccountConfigService(router, restService) {
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
    AccountConfigService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
    ]; };
    AccountConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], AccountConfigService);
    return AccountConfigService;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/identity-config.service */ "../../packages/identity-config/src/lib/services/identity-config.service.ts");




var IdentityConfigModule = /** @class */ (function () {
    function IdentityConfigModule() {
    }
    IdentityConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], deps: [_services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"], multi: true }],
        })
    ], IdentityConfigModule);
    return IdentityConfigModule;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");




var IdentityConfigService = /** @class */ (function () {
    function IdentityConfigService(router, restService) {
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
    IdentityConfigService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
    ]; };
    IdentityConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], IdentityConfigService);
    return IdentityConfigService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");



var TenantManagementConfigService = /** @class */ (function () {
    function TenantManagementConfigService() {
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
    TenantManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TenantManagementConfigService);
    return TenantManagementConfigService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tenant-management-config.service */ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");




var TenantManagementConfigModule = /** @class */ (function () {
    function TenantManagementConfigModule() {
    }
    TenantManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
        })
    ], TenantManagementConfigModule);
    return TenantManagementConfigModule;
}());



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

var AddNavigationElement = /** @class */ (function () {
    function AddNavigationElement(payload) {
        this.payload = payload;
    }
    AddNavigationElement.type = '[Layout] Add Navigation Element';
    return AddNavigationElement;
}());

var RemoveNavigationElementByName = /** @class */ (function () {
    function RemoveNavigationElementByName(name) {
        this.name = name;
    }
    RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';
    return RemoveNavigationElementByName;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AccountLayoutComponent = /** @class */ (function () {
    function AccountLayoutComponent() {
    }
    // required for dynamic component
    AccountLayoutComponent.type = "account" /* account */;
    AccountLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abp-layout-account',
            template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  ",
        })
    ], AccountLayoutComponent);
    return AccountLayoutComponent;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions */ "../../packages/theme-basic/src/lib/actions/index.ts");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../states */ "../../packages/theme-basic/src/lib/states/index.ts");













var ApplicationLayoutComponent = /** @class */ (function () {
    function ApplicationLayoutComponent(store, oauthService, renderer) {
        this.store = store;
        this.oauthService = oauthService;
        this.renderer = renderer;
        this.isCollapsed = true;
        this.rightPartElements = [];
        this.trackByFn = function (_, item) { return item.name; };
        this.trackElementByFn = function (_, element) { return element; };
    }
    Object.defineProperty(ApplicationLayoutComponent.prototype, "appInfo", {
        get: function () {
            return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getApplicationInfo);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "visibleRoutes$", {
        get: function () {
            return this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (routes) { return getVisibleRoutes(routes); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "defaultLanguage$", {
        get: function () {
            var _this = this;
            return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (languages) { return Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return languages.find(function (lang) { return lang.cultureName === _this.selectedLangCulture; }).displayName; }); }, ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "dropdownLanguages$", {
        get: function () {
            var _this = this;
            return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (languages) { return Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () { return languages.filter(function (lang) { return lang.cultureName !== _this.selectedLangCulture; }); }); }, []));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "selectedLangCulture", {
        get: function () {
            return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    ApplicationLayoutComponent.prototype.checkWindowWidth = function () {
        var _this = this;
        setTimeout(function () {
            if (window.innerWidth < 768) {
                _this.isDropdownChildDynamic = false;
                if (_this.smallScreen === false) {
                    _this.isCollapsed = false;
                    setTimeout(function () {
                        _this.isCollapsed = true;
                    }, 100);
                }
                _this.smallScreen = true;
            }
            else {
                _this.isDropdownChildDynamic = true;
                _this.smallScreen = false;
            }
        }, 0);
    };
    ApplicationLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var navigations = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements).map(function (_a) {
            var name = _a.name;
            return name;
        });
        if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_11__["AddNavigationElement"]([
                { element: this.languageRef, order: 4, name: 'LanguageRef' },
                { element: this.currentUserRef, order: 5, name: 'CurrentUserRef' },
            ]));
        }
        this.navElements$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (elements) { return elements.map(function (_a) {
            var element = _a.element;
            return element;
        }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (elements) { return !just_compare__WEBPACK_IMPORTED_MODULE_7___default()(elements, _this.rightPartElements); }), Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this))
            .subscribe(function (elements) {
            setTimeout(function () { return (_this.rightPartElements = elements); }, 0);
        });
        this.checkWindowWidth();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150))
            .subscribe(function () {
            _this.checkWindowWidth();
        });
    };
    ApplicationLayoutComponent.prototype.ngOnDestroy = function () { };
    ApplicationLayoutComponent.prototype.onChangeLang = function (cultureName) {
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetLanguage"](cultureName));
    };
    ApplicationLayoutComponent.prototype.logout = function () {
        this.oauthService.logOut();
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"](['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["RouterState"]).state.url },
        }));
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]());
    };
    ApplicationLayoutComponent.prototype.openChange = function (event, childrenContainer) {
        var _this = this;
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter(function (key) { return Number.isInteger(+key); })
                .forEach(function (key) {
                _this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            });
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    };
    // required for dynamic component
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
    ]; };
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
    return ApplicationLayoutComponent;
}());

function getVisibleRoutes(routes) {
    return routes.reduce(function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return acc.concat([val]);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EmptyLayoutComponent = /** @class */ (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.type = "empty" /* empty */;
    EmptyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abp-layout-empty',
            template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  ",
        })
    ], EmptyLayoutComponent);
    return EmptyLayoutComponent;
}());



/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: ValidationErrorComponent, AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");



var ValidationErrorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ValidationErrorComponent, _super);
    function ValidationErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
        get: function () {
            if (!this.errors || !this.errors.length)
                return [];
            return this.errors.map(function (error) {
                if (!error.message)
                    return error;
                var index = error.message.indexOf('[');
                if (index > -1) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                }
                return error;
            });
        },
        enumerable: true,
        configurable: true
    });
    ValidationErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abp-validation-error',
            template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        })
    ], ValidationErrorComponent);
    return ValidationErrorComponent;
}(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorComponent"]));



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

/* harmony default export */ __webpack_exports__["default"] = ("\n.content-header-title {\n    font-size: 24px;\n}\n\n.entry-row {\n    margin-bottom: 15px;\n}\n\n#main-navbar-tools a.dropdown-toggle {\n    text-decoration: none;\n    color: #fff;\n}\n\n.navbar .dropdown-submenu {\n    position: relative;\n}\n.navbar .dropdown-menu {\n    margin: 0;\n    padding: 0;\n}\n    .navbar .dropdown-menu a {\n        font-size: .9em;\n        padding: 10px 15px;\n        display: block;\n        min-width: 210px;\n        text-align: left;\n        border-radius: 0.25rem;\n        min-height: 44px;\n    }\n.navbar .dropdown-submenu a::after {\n    transform: rotate(-90deg);\n    position: absolute;\n    right: 16px;\n    top: 18px;\n}\n.navbar .dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n}\n\n.card-header .btn {\n    padding: 2px 6px;\n}\n.card-header h5 {\n    margin: 0;\n}\n.container > .card {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.abp-confirm .abp-confirm-footer {\n    background-color: #f4f4f7 !important;\n}\n.abp-confirm .ui-toast-message-content {\n    background-color: #fff !important;\n}\n\n@media screen and (min-width: 768px) {\n    .navbar .dropdown:hover > .dropdown-menu {\n        display: block;\n    }\n\n    .navbar .dropdown-submenu:hover > .dropdown-menu {\n        display: block;\n    }\n}\n.input-validation-error {\n    border-color: #dc3545;\n}\n.field-validation-error {\n    font-size: 0.8em;\n}\n");


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "../../packages/theme-basic/src/lib/constants/styles.ts");




var InitialService = /** @class */ (function () {
    function InitialService(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
    }
    InitialService.prototype.appendStyle = function () {
        return this.lazyLoadService.load(null, 'style', _constants_styles__WEBPACK_IMPORTED_MODULE_3__["default"], 'head', 'beforeend');
    };
    InitialService.ctorParameters = function () { return [
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"] }
    ]; };
    InitialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"]])
    ], InitialService);
    return InitialService;
}());



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
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/layout.actions */ "../../packages/theme-basic/src/lib/actions/layout.actions.ts");




var LayoutState = /** @class */ (function () {
    function LayoutState() {
    }
    LayoutState.getNavigationElements = function (_a) {
        var navigationElements = _a.navigationElements;
        return navigationElements;
    };
    LayoutState.prototype.layoutAddAction = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var _c = _b.payload, payload = _c === void 0 ? [] : _c;
        var navigationElements = getState().navigationElements;
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = Object(snq__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
                return payload.filter(function (_a) {
                    var name = _a.name;
                    return navigationElements.findIndex(function (nav) { return nav.name === name; }) < 0;
                });
            }, []);
        }
        if (!payload.length)
            return;
        navigationElements = navigationElements.concat(payload).map(function (element) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, element, { order: element.order || 99 })); })
            .sort(function (a, b) { return a.order - b.order; });
        return patchState({
            navigationElements: navigationElements,
        });
    };
    LayoutState.prototype.layoutRemoveAction = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var name = _b.name;
        var navigationElements = getState().navigationElements;
        var index = navigationElements.findIndex(function (element) { return element.name === name; });
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements: navigationElements,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["AddNavigationElement"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["AddNavigationElement"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LayoutState.prototype, "layoutAddAction", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveNavigationElementByName"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveNavigationElementByName"]]),
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
    return LayoutState;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account-layout/account-layout.component */ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
/* harmony import */ var _components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/application-layout/application-layout.component */ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
/* harmony import */ var _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/empty-layout/empty-layout.component */ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
/* harmony import */ var _states_layout_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/layout.state */ "../../packages/theme-basic/src/lib/states/layout.state.ts");
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
/* harmony import */ var _services_initial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/initial.service */ "../../packages/theme-basic/src/lib/services/initial.service.ts");














var LAYOUTS = [_components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationLayoutComponent"], _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__["AccountLayoutComponent"], _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"]];
var ThemeBasicModule = /** @class */ (function () {
    function ThemeBasicModule(initialService) {
        this.initialService = initialService;
    }
    ThemeBasicModule.ctorParameters = function () { return [
        { type: _services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"] }
    ]; };
    ThemeBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: LAYOUTS.concat([_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]]),
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
            exports: LAYOUTS.slice(),
            entryComponents: LAYOUTS.concat([_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]]),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"]])
    ], ThemeBasicModule);
    return ThemeBasicModule;
}());



/***/ }),

/***/ "../../packages/theme-basic/src/public-api.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/public-api.ts ***!
  \**********************************************************************************************/
/*! exports provided: LAYOUTS, ThemeBasicModule, ValidationErrorComponent, AddNavigationElement, RemoveNavigationElementByName, AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent, LayoutState */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ValidationErrorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["AccountLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ApplicationLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"]; });

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting-drawer/setting-drawer.component */ "../../themes/ng-alain/basic/src/lib/layout/default/setting-drawer/setting-drawer.component.ts");










var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, _message, resolver, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.unsubscribe$)).subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                _this.isFetching = false;
                if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"])) {
                return;
            }
            if (_this.isFetching) {
                setTimeout(function () {
                    _this.isFetching = false;
                }, 100);
            }
        });
    }
    LayoutDefaultComponent.prototype.setClass = function () {
        var _a;
        var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
        var layout = settings.layout;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_5__["updateHostClass"])(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a));
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    LayoutDefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Setting componet for only developer
        if (true) {
            setTimeout(function () {
                var settingFactory = _this.resolver.resolveComponentFactory(_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_9__["SettingDrawerComponent"]);
                _this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    };
    LayoutDefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
        settings.notify.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(unsubscribe$)).subscribe(function () { return _this.setClass(); });
        this.setClass();
    };
    LayoutDefaultComponent.prototype.ngOnDestroy = function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    LayoutDefaultComponent.type = "application" /* application */;
    LayoutDefaultComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
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
    return LayoutDefaultComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "../../node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    Object.defineProperty(HeaderFullScreenComponent.prototype, "sf", {
        get: function () {
            return screenfull__WEBPACK_IMPORTED_MODULE_2__;
        },
        enumerable: true,
        configurable: true
    });
    HeaderFullScreenComponent.prototype._resize = function () {
        this.status = this.sf.isFullscreen;
    };
    HeaderFullScreenComponent.prototype._click = function () {
        if (this.sf.isEnabled) {
            this.sf.toggle();
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
            template: "\n    <i nz-icon [nzType]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");







var HeaderI18nComponent = /** @class */ (function () {
    function HeaderI18nComponent(store) {
        this.store = store;
    }
    Object.defineProperty(HeaderI18nComponent.prototype, "selectedLangCulture", {
        get: function () {
            return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "defaultLanguage$", {
        get: function () {
            var _this = this;
            return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (languages) { return Object(snq__WEBPACK_IMPORTED_MODULE_6__["default"])(function () { return languages.find(function (lang) { return lang.cultureName === _this.selectedLangCulture; }).displayName; }); }, ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "dropdownLanguages$", {
        get: function () {
            return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (languages) { return Object(snq__WEBPACK_IMPORTED_MODULE_6__["default"])(function () { return languages; }, []); }));
        },
        enumerable: true,
        configurable: true
    });
    HeaderI18nComponent.prototype.onChangeLang = function (cultureName) {
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["SetLanguage"](cultureName));
    };
    HeaderI18nComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getDeep('localization.languages')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], HeaderI18nComponent.prototype, "languages$", void 0);
    HeaderI18nComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-i18n',
            template: "\n    <div nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\n      <i nz-icon nzType=\"global\"></i>\n      {{ defaultLanguage$ | async }}\n      <i nz-icon nzType=\"down\"></i>\n    </div>\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <li\n          nz-menu-item\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          [nzSelected]=\"lang.cultureName === selectedLangCulture\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n        >\n         <span role=\"img\" [attr.aria-label]=\"lang?.displayName\" class=\"pr-xs\">{{lang.cultureName}}</span>\n          {{ lang?.displayName }}\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HeaderI18nComponent);
    return HeaderI18nComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 500);
    };
    HeaderIconComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    HeaderIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-icon',
            template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"iconMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <i nz-icon nzType=\"appstore\"></i>\n    </div>\n    <nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-xl animated jello\">\n        <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"calendar\" class=\"bg-error text-white\"></i>\n              <small>Calendar</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"file\" class=\"bg-geekblue text-white\"></i>\n              <small>Files</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"cloud\" class=\"bg-success text-white\"></i>\n              <small>Cloud</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"star\" class=\"bg-magenta text-white\"></i>\n              <small>Star</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"team\" class=\"bg-purple text-white\"></i>\n              <small>Team</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"scan\" class=\"bg-warning text-white\"></i>\n              <small>QR</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"pay-circle\" class=\"bg-cyan text-white\"></i>\n              <small>Pay</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"printer\" class=\"bg-grey text-white\"></i>\n              <small>Print</small>\n            </div>\n          </div>\n        </nz-spin>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");


// import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg, cdr) {
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
    HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
        var data = this.data.slice();
        data.forEach(function (i) { return (i.list = []); });
        notices.forEach(function (item) {
            var newItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
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
            data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
        });
        return data;
    };
    HeaderNotifyComponent.prototype.loadData = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(function () {
            _this.data = _this.updateNoticeData([
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
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 1000);
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    HeaderNotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-notify',
            template: "\n    <notice-icon\n      [data]=\"data\"\n      [count]=\"count\"\n      [loading]=\"loading\"\n      btnClass=\"alain-default__nav-item\"\n      btnIconClass=\"alain-default__nav-item-icon\"\n      (select)=\"select($event)\"\n      (clear)=\"clear($event)\"\n      (popoverVisibleChange)=\"loadData()\"\n    ></notice-icon>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    HeaderSearchComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
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
            template: "\n    <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'arrow-down' : 'search'\">\n      <input\n        nz-input\n        [(ngModel)]=\"q\"\n        (focus)=\"qFocus()\"\n        (blur)=\"qBlur()\"\n        [placeholder]=\"'menu.search.placeholder' | translate\"\n      />\n    </nz-input-group>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: function () {
                localStorage.clear();
                _this.messageSrv.success('Clear Finished!');
            },
        });
    };
    HeaderStorageComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-storage',
            template: "\n    <i nz-icon nzType=\"tool\"></i>\n    {{ 'menu.clear.local.storage' | translate }}\n  ",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }, 500);
    };
    HeaderTaskComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    HeaderTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-task',
            template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"taskMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon nzType=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <nz-dropdown-menu #taskMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-lg\">\n        <div *ngIf=\"loading\" class=\"mx-lg p-lg\"><nz-spin></nz-spin></div>\n        <nz-card *ngIf=\"!loading\" nzTitle=\"Notifications\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n          <ng-template #extra><i nz-icon nzType=\"plus\"></i></ng-template>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>cipchk</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u306F\u306A\u3055\u304D</strong>\n              <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u82CF\u5148\u751F</strong>\n              <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Kent</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Jefferson</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row>\n            <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n              See All\n            </div>\n          </div>\n        </nz-card>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm5/auth.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm5/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");










var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService, store, oauthService) {
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
    HeaderUserComponent.prototype.logout = function () {
        this.oauthService.logOut();
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__["Navigate"](['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_7__["RouterState"]).state.url }
        }));
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_8__["GetAppConfiguration"]());
    };
    HeaderUserComponent.ctorParameters = function () { return [
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"],] }] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_8__["ConfigState"].getOne('currentUser')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], HeaderUserComponent.prototype, "currentUser$", void 0);
    HeaderUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-user',
            template: "\n    <div\n      class=\"alain-default__nav-item d-flex align-items-center px-sm\"\n      nz-dropdown\n      nzPlacement=\"bottomRight\"\n      [nzDropdownMenu]=\"userMenu\"\n    >\n      <!--<nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>-->\n      {{tenantName}}/{{ (currentUser$ | async)?.userName }}\n    </div>\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"width-sm\">\n        <div nz-menu-item routerLink=\"/account/manage-profile\">\n          <i nz-icon nzType=\"setting\" class=\"mr-sm\"></i>\n          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\n        </div>\n        <li nz-menu-divider></li>\n        <div nz-menu-item (click)=\"logout()\">\n          <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\n          {{ 'AbpUi::Logout' | abpLocalization }}\n        </div>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_4__["DA_SERVICE_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"]])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSidebar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/default/header/header.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SettingDrawerItemComponent = /** @class */ (function () {
    function SettingDrawerItemComponent() {
        this.i = {};
        this.format = function (value) { return value + " px"; };
    }
    Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
        set: function (val) {
            this.i = val;
            if (val.type === 'px') {
                this.pxVal = +val.value.replace('px', '');
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerItemComponent.prototype.pxChange = function (val) {
        this.i.value = val + "px";
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
    return SettingDrawerItemComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");






var ALAINDEFAULTVAR = 'alain-default-vars';
var DEFAULT_COLORS = [
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
var DEFAULT_VARS = {
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
var SettingDrawerComponent = /** @class */ (function () {
    function SettingDrawerComponent(cdr, msg, settingSrv, lazy, zone, doc) {
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
    Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
        get: function () {
            return this.settingSrv.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
        get: function () {
            return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
        get: function () {
            return DEFAULT_VARS['primary-color'].default;
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.loadLess = function () {
        var _this = this;
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(function () {
            var lessConfigNode = _this.doc.createElement('script');
            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
            _this.doc.body.appendChild(lessConfigNode);
        })
            .then(function () { return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'); })
            .then(function () {
            _this.loadedLess = true;
        });
    };
    SettingDrawerComponent.prototype.genVars = function () {
        var _a;
        var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
        var vars = (_a = {},
            _a["@primary-color"] = color,
            _a);
        validKeys.filter(function (key) { return key !== 'primary-color'; }).forEach(function (key) { return (vars["@" + key] = data[key].value); });
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    };
    SettingDrawerComponent.prototype.runLess = function () {
        var _this = this;
        var _a = this, zone = _a.zone, msg = _a.msg, cdr = _a.cdr;
        var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
        setTimeout(function () {
            zone.runOutsideAngular(function () {
                _this.loadLess().then(function () {
                    window.less.modifyVars(_this.genVars()).then(function () {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(function () { return cdr.detectChanges(); });
                    });
                });
            });
        }, 200);
    };
    SettingDrawerComponent.prototype.toggle = function () {
        this.collapse = !this.collapse;
    };
    SettingDrawerComponent.prototype.changeColor = function (color) {
        var _this = this;
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
            .forEach(function (key) { return delete _this.cachedData["@" + key]; });
        this.resetData(this.cachedData, false);
    };
    SettingDrawerComponent.prototype.setLayout = function (name, value) {
        this.settingSrv.setLayout(name, value);
    };
    SettingDrawerComponent.prototype.resetData = function (nowData, run) {
        var _this = this;
        if (run === void 0) { run = true; }
        nowData = nowData || {};
        var data = Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["deepCopy"])(DEFAULT_VARS);
        Object.keys(data).forEach(function (key) {
            var value = nowData["@" + key] || data[key].default || '';
            data[key].value = value === "@primary-color" ? _this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    };
    Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
        get: function () {
            var _this = this;
            return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
        },
        enumerable: true,
        configurable: true
    });
    SettingDrawerComponent.prototype.apply = function () {
        this.runLess();
    };
    SettingDrawerComponent.prototype.reset = function () {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    };
    SettingDrawerComponent.prototype.copyVar = function () {
        var vars = this.genVars();
        var copyContent = Object.keys(vars)
            .map(function (key) { return key + ": " + vars[key] + ";"; })
            .join('\n');
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_4__["copy"])(copyContent);
        this.msg.success('Copy success');
    };
    SettingDrawerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: _delon_util__WEBPACK_IMPORTED_MODULE_4__["LazyService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
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
    return SettingDrawerComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings, menuService, localizationPipe) {
        var _this = this;
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (routes) { return getVisibleRoutes(routes); })).subscribe(function (routes) {
            var result = [];
            routes.forEach(function (first) {
                var group = {
                    text: _this.localizationPipe.transform(first.name),
                    group: true,
                    hideInBreadcrumb: true,
                    children: []
                };
                result.push(group);
                first.children.forEach(function (second) {
                    if (second.children.length === 0) {
                        var left = {
                            text: _this.localizationPipe.transform(second.name),
                            link: second.url,
                            icon: second.iconClass
                        };
                        group.children.push(left);
                    }
                    if (second.children.length != 0) {
                        var node_1 = {
                            text: _this.localizationPipe.transform(second.name),
                            icon: second.iconClass,
                            children: []
                        };
                        group.children.push(node_1);
                        second.children.forEach(function (third) {
                            var left = {
                                text: _this.localizationPipe.transform(third.name),
                                link: third.url,
                                icon: third.iconClass
                            };
                            node_1.children.push(left);
                        });
                    }
                });
            });
            _this.menuService.clear();
            _this.menuService.add(result);
        });
    }
    SidebarComponent.ctorParameters = function () { return [
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_5__["LocalizationPipe"] }
    ]; };
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
    return SidebarComponent;
}());

function getVisibleRoutes(routes) {
    return routes.reduce(function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return acc.concat([val]);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
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
    return LayoutFullScreenComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
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


















var SETTINGDRAWER = [_default_setting_drawer_setting_drawer_component__WEBPACK_IMPORTED_MODULE_16__["SettingDrawerComponent"], _default_setting_drawer_setting_drawer_item_component__WEBPACK_IMPORTED_MODULE_17__["SettingDrawerItemComponent"]];
var COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]
].concat(SETTINGDRAWER);
var HEADERCOMPONENTS = [
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

var PASSPORT = [_passport_passport_component__WEBPACK_IMPORTED_MODULE_18__["LayoutPassportComponent"]];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_2__["NgAlainSharedModule"]],
            entryComponents: SETTINGDRAWER.concat([_default_default_component__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"], _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFullScreenComponent"], _passport_passport_component__WEBPACK_IMPORTED_MODULE_18__["LayoutPassportComponent"]]),
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT)
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.less":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/basic/src/lib/layout/passport/passport.component.less ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .langs {\n  width: 100%;\n  height: 40px;\n  line-height: 44px;\n  text-align: right;\n}\n:host ::ng-deep .langs .anticon {\n  margin-top: 24px;\n  margin-right: 24px;\n  font-size: 14px;\n  vertical-align: top;\n  cursor: pointer;\n}\n:host ::ng-deep .wrap {\n  flex: 1;\n  padding: 32px 0;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 32px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  position: relative;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 600;\n  font-size: 33px;\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  margin-top: 12px;\n  margin-bottom: 40px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lcy9uZy1hbGFpbi9iYXNpYy9zcmMvbGliL2xheW91dC9wYXNzcG9ydC9wYXNzcG9ydC5jb21wb25lbnQubGVzcyIsInRoZW1lcy9uZy1hbGFpbi9iYXNpYy9zcmMvbGliL2xheW91dC9wYXNzcG9ydC9DOi9Vc2Vycy9ZaW5DaGFuZy9Eb2N1bWVudHMvV29ya3MvR2l0SHViL2FicC5uZy90aGVtZXMvbmctYWxhaW4vYmFzaWMvc3JjL2xpYi9sYXlvdXQvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGO0FBQzVGLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsNkZBQTZGO0FDRjdGO0VBR00sYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREVOO0FDUkE7RUFTTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURFTjtBQ2RBO0VBY1EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURHUjtBQ3JCQTtFQXNCTSxPQUFBO0VBQ0EsZUFBQTtBREVOO0FDekJBO0VBMEJNLG1CQUFBO0FERU47QUNDSTtFQUFBO0lBRUksNEZBQUE7SUFDQSw0QkFBQTtJQUNBLGlDQUFBO0lBQ0EscUJBQUE7RURDTjtFQ05FO0lBUUksb0JBQUE7RURDTjtBQUNGO0FDdkNBO0VBeUNNLGtCQUFBO0FEQ047QUMxQ0E7RUE0Q00sWUFBQTtFQUNBLGlCQUFBO0FEQ047QUM5Q0E7RUErQ1EscUJBQUE7QURFUjtBQ2pEQTtFQW1ETSxZQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ3JEQTtFQXVETSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUVBQUE7RUFDQSxzQkFBQTtBRENOO0FDN0RBO0VBK0RNLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QURDTiIsImZpbGUiOiJ0aGVtZXMvbmctYWxhaW4vYmFzaWMvc3JjL2xpYi9sYXlvdXQvcGFzc3BvcnQvcGFzc3BvcnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXG46aG9zdCA6Om5nLWRlZXAgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmMGYyZjU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxhbmdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sYW5ncyAuYW50aWNvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLndyYXAge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAzMnB4IDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFudC1mb3JtLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UVllUYkFYV2hlUXBSY1dEYURNdS5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAxMTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC53cmFwIHtcbiAgICBwYWRkaW5nOiAzMnB4IDAgMjRweDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC50b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmhlYWRlciB7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmhlYWRlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5sb2dvIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kZXNjIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuOmhvc3Qge1xuICA6Om5nLWRlZXAge1xuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2YwZjJmNTtcbiAgICB9XG4gICAgLmxhbmdzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIC5hbnRpY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLndyYXAge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDMycHggMDtcbiAgICB9XG4gICAgLmFudC1mb3JtLWl0ZW0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1tZC1taW4pIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UVllUYkFYV2hlUXBSY1dEYURNdS5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDExMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICB9XG4gICAgICAud3JhcCB7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMCAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAudG9wIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGNvbG9yOiBAaGVhZGluZy1jb2xvcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgLmRlc2Mge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICBjb2xvcjogQHRleHQtY29sb3Itc2Vjb25kYXJ5O1xuICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplLWJhc2U7XG4gICAgfVxuICB9XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
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
    LayoutPassportComponent.type = "account" /* account */;
    LayoutPassportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout-passport',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passport.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passport.component.less */ "../../themes/ng-alain/basic/src/lib/layout/passport/passport.component.less")).default]
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.basic */ "../../packages/theme-basic/src/public-api.ts");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "../../themes/ng-alain/basic/src/lib/layout/layout.module.ts");






var NgAlainBasicModule = /** @class */ (function () {
    function NgAlainBasicModule() {
    }
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
    return NgAlainBasicModule;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fs/ng-alain */ "../../themes/ng-alain/src/index.ts");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/zh */ "../../node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");















function StartupServiceFactory(startupService) {
    var startupServiceLoad = function () { return startupService.load(); };
    return startupServiceLoad;
}
var APPINIT_PROVIDES = [
    _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["StartupService"],
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        useFactory: StartupServiceFactory,
        deps: [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["StartupService"]],
        multi: true,
    },
];
var LANG = {
    abbr: 'zh',
    ng: _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_6___default.a,
    zorro: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"],
    delon: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["zh_CN"],
};
Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(LANG.ng, LANG.abbr);
var LANG_PROVIDES = [
    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: LANG.abbr },
    { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: LANG.zorro },
    { provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["DELON_LOCALE"], useValue: LANG.delon },
];
var I18NSERVICE_PROVIDES = [{ provide: _delon_theme__WEBPACK_IMPORTED_MODULE_8__["ALAIN_I18N_TOKEN"], useClass: _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["I18NService"], multi: false }];
var INTERCEPTOR_PROVIDES = [
//{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
//{ provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
];
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "assets/tmp/i18n/", '.json');
}
var I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
        },
    }),
];
var GLOBAL_THIRD_MODULES = [];

var FORM_MODULES = [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["JsonSchemaModule"]];
var NgAlainSharedModule = /** @class */ (function () {
    function NgAlainSharedModule() {
    }
    NgAlainSharedModule_1 = NgAlainSharedModule;
    NgAlainSharedModule.forRoot = function () {
        return {
            ngModule: NgAlainSharedModule_1,
            providers: APPINIT_PROVIDES.concat(LANG_PROVIDES, INTERCEPTOR_PROVIDES, I18NSERVICE_PROVIDES)
        };
    };
    var NgAlainSharedModule_1;
    NgAlainSharedModule = NgAlainSharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"],
                _fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ].concat(GLOBAL_THIRD_MODULES, FORM_MODULES),
            exports: [_fs_ng_alain__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_4__["ThemeSharedModule"]],
            entryComponents: []
        })
    ], NgAlainSharedModule);
    return NgAlainSharedModule;
}());



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
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/mock */ "../../node_modules/@delon/mock/fesm5/mock.js");


// region: mock data
var titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
var avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
];
var covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
    'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
var desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
var user = [
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
function getFakeList(count) {
    if (count === void 0) { count = 20; }
    var list = [];
    for (var i = 0; i < count; i += 1) {
        list.push({
            id: "fake-list-" + i,
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
var APIS = {
    '/api/list': function (req) { return getFakeList(req.queryString.count); },
    '/api/notice': function () { return getNotice(); },
    '/api/activities': function () { return getActivities(); },
    '/api/401': function () {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](401);
    },
    '/api/403': function () {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](403);
    },
    '/api/404': function () {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_1__["MockStatusError"](404);
    },
    '/api/500': function () {
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
var visitData = [];
var beginDay = new Date().getTime();
var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (var i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY[i],
    });
}
var visitData2 = [];
var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (var i = 0; i < fakeY2.length; i += 1) {
    visitData2.push({
        x: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'YYYY-MM-DD'),
        y: fakeY2[i],
    });
}
var salesData = [];
for (var i = 0; i < 12; i += 1) {
    salesData.push({
        x: i + 1 + "\u6708",
        y: Math.floor(Math.random() * 1000) + 200,
    });
}
var searchData = [];
for (var i = 0; i < 50; i += 1) {
    searchData.push({
        index: i + 1,
        keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
    });
}
var salesTypeData = [
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
var salesTypeDataOnline = [
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
var salesTypeDataOffline = [
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
var offlineData = [];
for (var i = 0; i < 10; i += 1) {
    offlineData.push({
        name: "\u95E8\u5E97" + i,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
var offlineChartData = [];
for (var i = 0; i < 20; i += 1) {
    offlineChartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 10,
        y2: Math.floor(Math.random() * 100) + 10,
    });
}
var radarOriginData = [
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
var radarData = [];
var radarTitleMap = {
    ref: '引用',
    koubei: '口碑',
    output: '产量',
    contribute: '贡献',
    hot: '热度',
};
radarOriginData.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
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
var CHARTS = {
    '/chart': JSON.parse(JSON.stringify({
        visitData: visitData,
        visitData2: visitData2,
        salesData: salesData,
        searchData: searchData,
        offlineData: offlineData,
        offlineChartData: offlineChartData,
        salesTypeData: salesTypeData,
        salesTypeDataOnline: salesTypeDataOnline,
        salesTypeDataOffline: salesTypeDataOffline,
        radarData: radarData,
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

var DATA = [
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
var GEOS = {
    '/geo/province': function () { return DATA.filter(function (w) { return w.id.endsWith('0000'); }); },
    '/geo/:id': function (req) {
        var pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); });
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

var POIS = {
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

var basicGoods = [
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
var basicProgress = [
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
var advancedOperation1 = [
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
var advancedOperation2 = [
    {
        key: 'op1',
        type: '订购关系生效',
        name: '曲丽丽',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var advancedOperation3 = [
    {
        key: 'op1',
        type: '创建订单',
        name: '汗牙牙',
        status: 'agree',
        updatedAt: '2017-10-03  19:23:12',
        memo: '-',
    },
];
var PROFILES = {
    'GET /profile/progress': basicProgress,
    'GET /profile/goods': basicGoods,
    'GET /profile/advanced': {
        advancedOperation1: advancedOperation1,
        advancedOperation2: advancedOperation2,
        advancedOperation3: advancedOperation3,
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

var list = [];
for (var i = 0; i < 46; i += 1) {
    list.push({
        key: i,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function getRule(params) {
    var ret = list.slice();
    if (params.sorter) {
        var s_1 = params.sorter.split('_');
        ret = ret.sort(function (prev, next) {
            if (s_1[1] === 'descend') {
                return next[s_1[0]] - prev[s_1[0]];
            }
            return prev[s_1[0]] - next[s_1[0]];
        });
    }
    if (params.statusList && params.statusList.length > 0) {
        ret = ret.filter(function (data) { return params.statusList.indexOf(data.status) > -1; });
    }
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return ret;
}
function removeRule(nos) {
    nos.split(',').forEach(function (no) {
        var idx = list.findIndex(function (w) { return w.no === no; });
        if (idx !== -1)
            list.splice(idx, 1);
    });
    return true;
}
function saveRule(description) {
    var i = Math.ceil(Math.random() * 10000);
    list.unshift({
        key: i,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: description,
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: new Date(),
        createdAt: new Date(),
        progress: Math.ceil(Math.random() * 100),
    });
}
var RULES = {
    '/rule': function (req) { return getRule(req.queryString); },
    'DELETE /rule': function (req) { return removeRule(req.queryString.nos); },
    'POST /rule': function (req) { return saveRule(req.body.description); },
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

var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi;
    var ps = +params.ps;
    var start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item)
        return { msg: '无效用户信息' };
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
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
    'POST /login/account': function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
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

var environment = {
    SERVER_URL: "./",
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
/*! exports provided: ICONS, ICONS_AUTO, throwIfAlreadyLoaded, fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule, CoreModule, SharedModule, I18NService, DefaultInterceptor, StartupService, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule, yuan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../themes/ng-alain/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnPageHeaderConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnPageHeaderConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnDelonAuthConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnDelonAuthConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnSTConfig", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["fnSTConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["DelonModule"]; });

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import-guard */ "../../themes/ng-alain/src/lib/core/module-import-guard.ts");



var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "../../node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/en */ "../../node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh-Hant */ "../../node_modules/@angular/common/locales/zh-Hant.js");
/* harmony import */ var _angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale/en */ "../../node_modules/date-fns/locale/en/index.js");
/* harmony import */ var date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/locale/zh_cn */ "../../node_modules/date-fns/locale/zh_cn/index.js");
/* harmony import */ var date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/locale/zh_tw */ "../../node_modules/date-fns/locale/zh_tw/index.js");
/* harmony import */ var date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");

// 请参考：https://ng-alain.com/docs/i18n













var DEFAULT = 'zh-CN';
var LANGS = {
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
var I18NService = /** @class */ (function () {
    function I18NService(settings, nzI18nService, delonLocaleService, translate) {
        this.nzI18nService = nzI18nService;
        this.delonLocaleService = delonLocaleService;
        this.translate = translate;
        this._default = DEFAULT;
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._langs = Object.keys(LANGS).map(function (code) {
            var item = LANGS[code];
            return { code: code, text: item.text, abbr: item.abbr };
        });
        // `@ngx-translate/core` 预先知道支持哪些语言
        var lans = this._langs.map(function (item) { return item.code; });
        translate.addLangs(lans);
        var defaultLan = settings.layout.lang || translate.getBrowserLang();
        if (lans.includes(defaultLan)) {
            this._default = defaultLan;
        }
        this.updateLangData(this._default);
    }
    I18NService.prototype.updateLangData = function (lang) {
        var item = LANGS[lang];
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(item.ng);
        this.nzI18nService.setLocale(item.zorro);
        this.nzI18nService.setDateLocale(item.dateFns);
        window.__locale__ = item.dateFns;
        this.delonLocaleService.setLocale(item.delon);
    };
    Object.defineProperty(I18NService.prototype, "change", {
        get: function () {
            return this.change$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (w) { return w != null; }));
        },
        enumerable: true,
        configurable: true
    });
    I18NService.prototype.use = function (lang) {
        var _this = this;
        lang = lang || this.translate.getDefaultLang();
        if (this.currentLang === lang)
            return;
        this.updateLangData(lang);
        this.translate.use(lang).subscribe(function () { return _this.change$.next(lang); });
    };
    /** 获取语言列表 */
    I18NService.prototype.getLangs = function () {
        return this._langs;
    };
    /** 翻译 */
    I18NService.prototype.fanyi = function (key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    };
    Object.defineProperty(I18NService.prototype, "defaultLang", {
        /** 默认语言 */
        get: function () {
            return this._default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18NService.prototype, "currentLang", {
        /** 当前语言 */
        get: function () {
            return this.translate.currentLang || this.translate.getDefaultLang() || this._default;
        },
        enumerable: true,
        configurable: true
    });
    I18NService.ctorParameters = function () { return [
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] }
    ]; };
    I18NService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_13__["SettingsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzI18nService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_13__["DelonLocaleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], I18NService);
    return I18NService;
}());



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
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "../../themes/ng-alain/src/environments/environment.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm5/auth.js");










var CODEMESSAGE = {
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
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "notification", {
        get: function () {
            return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"]);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.checkStatus = function (ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        var errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error("\u8BF7\u6C42\u9519\u8BEF " + ev.status + ": " + ev.url, errortext);
    };
    DefaultInterceptor.prototype.handleData = function (ev) {
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
                this.notification.error("\u672A\u767B\u5F55\u6216\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002", "");
                // 清空 token 信息
                this.injector.get(_delon_auth__WEBPACK_IMPORTED_MODULE_9__["DA_SERVICE_TOKEN"]).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/exception/" + ev.status);
                break;
            default:
                if (ev instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(ev);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(ev);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].SERVER_URL + url;
        }
        var newReq = req.clone({ url: url });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (event) {
            // 允许统一对请求错误处理
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"])
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) { return _this.handleData(err); }));
    };
    DefaultInterceptor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    DefaultInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../themes/ng-alain/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../themes/ng-alain/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/i18n.service */ "../../themes/ng-alain/src/lib/core/i18n/i18n.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _style_icons_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../style-icons-auto */ "../../themes/ng-alain/src/style-icons-auto.ts");
/* harmony import */ var _style_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../style-icons */ "../../themes/ng-alain/src/style-icons.ts");












/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(iconSrv, menuService, translate, i18n, settingService, aclService, titleService, httpClient) {
        this.menuService = menuService;
        this.translate = translate;
        this.i18n = i18n;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.httpClient = httpClient;
        iconSrv.addIcon.apply(iconSrv, _style_icons_auto__WEBPACK_IMPORTED_MODULE_10__["ICONS_AUTO"].concat(_style_icons__WEBPACK_IMPORTED_MODULE_11__["ICONS"]));
    }
    StartupService.prototype.load = function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(function (resolve) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(_this.httpClient.get("assets/tmp/i18n/" + _this.i18n.defaultLang + ".json"), _this.httpClient.get('assets/tmp/app-data.json'))
                .pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (_a) {
                var langData = _a[0], appData = _a[1];
                resolve(null);
                return [langData, appData];
            }))
                .subscribe(function (_a) {
                // setting language data
                //this.translate.setTranslation(this.i18n.defaultLang, langData);
                //this.translate.setDefaultLang(this.i18n.defaultLang);
                var langData = _a[0], appData = _a[1];
                // application data
                var res = appData;
                // 应用信息：包括站点名、描述、年份
                _this.settingService.setApp(res.app);
                // 用户信息：包括姓名、头像、邮箱地址
                //this.settingService.setUser(res.user);
                // ACL：设置权限为全量
                //this.aclService.setFull(true);
                // 初始化菜单
                //this.menuService.add(res.menu);
                // 设置页面标题的后缀
                _this.titleService.default = '';
                _this.titleService.suffix = res.app.name;
            }, function () { }, function () {
                resolve(null);
            });
        });
    };
    StartupService.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzIconService"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _i18n_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18NService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_delon_theme__WEBPACK_IMPORTED_MODULE_5__["ALAIN_I18N_TOKEN"],] }] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] },
        { type: _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_5__["TitleService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
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
    return StartupService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/module-import-guard */ "../../themes/ng-alain/src/lib/core/module-import-guard.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/mock */ "../../node_modules/@delon/mock/fesm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_mock */ "../../themes/ng-alain/src/_mock/index.ts");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/auth */ "../../node_modules/@delon/auth/fesm5/auth.js");

/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://ng-alain.com/docs/module
 */




// #region mock


var MOCK_MODULES = true ? [_delon_mock__WEBPACK_IMPORTED_MODULE_5__["DelonMockModule"].forRoot({
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
var REUSETAB_PROVIDES = [
// {
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// },
];
// #endregion
// #region global config functions

function fnPageHeaderConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"](), { homeI18n: 'home' });
}

function fnDelonAuthConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"](), { login_url: '/passport/login' });
}
// tslint:disable-next-line: no-duplicate-imports

function fnSTConfig() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, new _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"](), { modal: { size: 'lg' } });
}
var GLOBAL_CONFIG_PROVIDES = [
    // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `st` 的页码默认为 `20` 行
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["STConfig"], useFactory: fnSTConfig },
    { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_7__["PageHeaderConfig"], useFactory: fnPageHeaderConfig },
    { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_8__["DelonAuthConfig"], useFactory: fnDelonAuthConfig },
];
// #endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: REUSETAB_PROVIDES.concat(GLOBAL_CONFIG_PROVIDES),
        };
    };
    var DelonModule_1;
    DelonModule.ctorParameters = function () { return [
        { type: DelonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    DelonModule = DelonModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["AlainThemeModule"].forRoot(), _delon_acl__WEBPACK_IMPORTED_MODULE_4__["DelonACLModule"].forRoot()].concat(MOCK_MODULES),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "../../themes/ng-alain/src/lib/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/themes/ng-alain/src/lib/index.ts ***!
  \****************************************************************************************/
/*! exports provided: throwIfAlreadyLoaded, fnPageHeaderConfig, fnDelonAuthConfig, fnSTConfig, DelonModule, CoreModule, SharedModule, I18NService, DefaultInterceptor, StartupService, SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule, yuan */
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "../../themes/ng-alain/src/lib/shared/shared.module.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/form */ "../../node_modules/@delon/form/fesm5/form.js");




// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
var SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
    JsonSchemaModule.ctorParameters = function () { return [
        { type: _delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"] }
    ]; };
    JsonSchemaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _delon_form__WEBPACK_IMPORTED_MODULE_3__["DelonFormModule"].forRoot()],
            exports: SCHEMA_THIRDS_COMPONENTS.slice(),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_3__["WidgetRegistry"]])
    ], JsonSchemaModule);
    return JsonSchemaModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _delon_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/chart */ "../../node_modules/@delon/chart/fesm5/chart.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/form */ "../../node_modules/@delon/form/fesm5/form.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-countdown */ "../../node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ueditor */ "../../node_modules/ngx-ueditor/fesm5/ngx-ueditor.js");
/* harmony import */ var ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-tinymce */ "../../node_modules/ngx-tinymce/fesm5/ngx-tinymce.js");





// delon





// i18n

// #region third libs




var THIRDMODULES = [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_12__["CountdownModule"], ngx_ueditor__WEBPACK_IMPORTED_MODULE_13__["UEditorModule"], ngx_tinymce__WEBPACK_IMPORTED_MODULE_14__["NgxTinymceModule"]];
// #endregion
// #region your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
// #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
                _delon_form__WEBPACK_IMPORTED_MODULE_9__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
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
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES),
        })
    ], SharedModule);
    return SharedModule;
}());



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
function yuan(value, digits) {
    if (digits === void 0) { digits = 2; }
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return "&yen " + value;
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
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "../../node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/*
* Automatically generated by 'ng g ng-alain:plugin icon'
* @see https://ng-alain.com/cli/plugin#icon
*/


var ICONS_AUTO = [
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
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "../../node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
// Custom icon static resources


var ICONS = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["InfoOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["BulbOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ProfileOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["ExceptionOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_1__["LinkOutline"]];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



//import { LayoutDefaultComponent } from '@fs/ng-alain';
//import { AuthGuard } from '@fs/core';
var routes = [
    //{//default
    //    path: '',
    //    redirectTo: 'main',
    //    pathMatch: 'full'
    //},
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomeModule; }); },
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
        loadChildren: function () { return __webpack_require__.e(/*! import() | lazy-libs-account-wrapper-module */ "lazy-libs-account-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/account-wrapper.module */ "./src/app/lazy-libs/account-wrapper.module.ts")).then(function (m) { return m.AccountWrapperModule; }); }
    },
    {
        path: 'identity',
        loadChildren: function () { return __webpack_require__.e(/*! import() | lazy-libs-identity-wrapper-module */ "lazy-libs-identity-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/identity-wrapper.module */ "./src/app/lazy-libs/identity-wrapper.module.ts")).then(function (m) { return m.IdentityWrapperModule; }); },
    },
    {
        path: 'tenant-management',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | lazy-libs-tenant-management-wrapper-module */ "lazy-libs-tenant-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/tenant-management-wrapper.module */ "./src/app/lazy-libs/tenant-management-wrapper.module.ts")).then(function (m) { return m.TenantManagementWrapperModule; });
        },
    },
    {
        path: 'setting-management',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | lazy-libs-setting-management-wrapper-module */ "lazy-libs-setting-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/setting-management-wrapper.module */ "./src/app/lazy-libs/setting-management-wrapper.module.ts")).then(function (m) { return m.SettingManagementWrapperModule; });
        },
    },
    {
        path: 'pages',
        loadChildren: function () { return __webpack_require__.e(/*! import() | routes-routes-module */ "routes-routes-module").then(__webpack_require__.bind(null, /*! ./routes/routes.module */ "./src/app/routes/routes.module.ts")).then(function (m) { return m.RoutesModule; }); },
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(el, renderer, router, titleSrv, modalSrv) {
        this.router = router;
        this.titleSrv = titleSrv;
        this.modalSrv = modalSrv;
        renderer.setAttribute(el.nativeElement, 'ng-alain-version', _delon_theme__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full);
        renderer.setAttribute(el.nativeElement, 'ng-zorro-version', ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["VERSION"].full);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function () {
            _this.titleSrv.setTitle();
            _this.modalSrv.closeAll();
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/ng-alain */ "../../themes/ng-alain/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "../../node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fs/ng-alain/shared */ "../../themes/ng-alain/shared/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/logger-plugin */ "../../node_modules/@ngxs/logger-plugin/fesm5/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abp/ng.account.config */ "../../packages/account-config/src/public-api.ts");
/* harmony import */ var _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @abp/ng.identity.config */ "../../packages/identity-config/src/public-api.ts");
/* harmony import */ var _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @abp/ng.tenant-management.config */ "../../packages/tenant-management-config/src/public-api.ts");
/* harmony import */ var _fs_setting_management_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fs/setting-management/config */ "../../libs/setting-management/config/src/index.ts");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");

















// 加载i18n语言文件
function I18nHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, "assets/tmp/i18n/", '.json');
}
var I18NSERVICE_MODULES = [
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
            useFactory: I18nHttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
        },
        isolate: true
    }),
];
var LOGGERS = [_ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsLoggerPluginModule"].forRoot({ disabled: false })];
var AlainLayouts = [_fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutDefaultComponent"], _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutPassportComponent"], _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_16__["LayoutFullScreenComponent"]];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: I18NSERVICE_MODULES.concat([
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
                _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["NgxsModule"].forRoot([])
            ], (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? [] : LOGGERS), [
                //ng-alain
                _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _fs_ng_alain__WEBPACK_IMPORTED_MODULE_2__["DelonModule"].forRoot(),
                //@fs/ng-alain
                _fs_ng_alain_shared__WEBPACK_IMPORTED_MODULE_6__["NgAlainSharedModule"].forRoot(),
            ]),
            exports: [],
            providers: [
            // { provide: AbpConfirmationService, useClass: ConfirmationService },
            // { provide: AbpToasterService, useClass: ToasterService }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



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
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



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

var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angularclass/hmr */ "../../node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return (ngModule = mod); });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
        var modalService = ngModule.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"], null);
        if (modalService) {
            modalService.closeAll();
        }
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__["createNewHosts"])(elements);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");






Object(_delon_theme__WEBPACK_IMPORTED_MODULE_5__["preloaderFinished"])();

if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    })
        .then(function (res) {
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
//# sourceMappingURL=main.js.map