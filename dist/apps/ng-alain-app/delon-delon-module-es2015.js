(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delon-delon-module"],{

/***/ "../../node_modules/@delon/cache/fesm2015/cache.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@delon/cache/fesm2015/cache.js ***!
  \***************************************************************************************************/
/*! exports provided: CacheService, DelonCacheConfig, DelonCacheModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonCacheConfig", function() { return DelonCacheConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonCacheModule", function() { return DelonCacheModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DC_STORE_STORAGE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DC_STORE_STORAGE_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LocalStorageCacheService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add_seconds */ "../../node_modules/date-fns/add_seconds/index.js");
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ICache() { }
if (false) {}
/**
 * @record
 */
function ICacheStore() { }
if (false) {}
/**
 * @record
 */
function CacheNotifyResult() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonCacheConfig {
    constructor() {
        /**
         * Cache mode, default: `promise`
         * - `promise` Convention mode, allowing `key` to get data as http
         * - `none` Normal mode
         */
        this.mode = 'promise';
        /**
         * Rename the return parameters, for example:
         * - `null` The response body is content
         * - `list` The response body should be `{ list: [] }`
         * - `result.list` The response body should be `{ result: { list: [] } }`
         */
        this.reName = '';
        /**
         * Key prefix of persistent data
         */
        this.prefix = '';
        /**
         * Key name of persistent data metadata storage
         */
        this.meta_key = '__cache_meta';
    }
}
DelonCacheConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonCacheConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/local-storage-cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DC_STORE_STORAGE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
function DC_STORE_STORAGE_TOKEN_FACTORY() {
    return new LocalStorageCacheService();
}
class LocalStorageCacheService {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        localStorage.removeItem(key);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CacheService {
    /**
     * @param {?} _
     * @param {?} store
     * @param {?} http
     */
    constructor(_, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = {};
        Object.assign(this.cog, Object.assign({}, new DelonCacheConfig(), _));
        this.loadMeta();
        this.startExpireNotify();
    }
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    deepGet(obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            const checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce((/**
         * @param {?} o
         * @param {?} k
         * @return {?}
         */
        (o, k) => o[k]), obj) || defaultValue;
    }
    // #region meta
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    pushMeta(key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    removeMeta(key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    }
    /**
     * @private
     * @return {?}
     */
    loadMeta() {
        /** @type {?} */
        const ret = this.store.get((/** @type {?} */ (this.cog.meta_key)));
        if (ret && ret.v) {
            ((/** @type {?} */ (ret.v))).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.meta.add(key)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    saveMeta() {
        /** @type {?} */
        const metaData = [];
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => metaData.push(key)));
        this.store.set((/** @type {?} */ (this.cog.meta_key)), { v: metaData, e: 0 });
    }
    /**
     * @return {?}
     */
    getMeta() {
        return this.meta;
    }
    /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(key, data, options = {}) {
        /** @type {?} */
        let e = 0;
        const { type, expire } = this.cog;
        options = Object.assign({ type,
            expire }, options);
        if (options.expire) {
            e = date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
            this.save((/** @type {?} */ (options.type)), key, { v: data, e });
            return;
        }
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            this.save((/** @type {?} */ (options.type)), key, { v, e });
        })));
    }
    /**
     * @private
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    save(type, key, value) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
        }
        this.runNotify(key, 'set');
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    get(key, options = {}) {
        /** @type {?} */
        const isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        /** @type {?} */
        const value = this.memory.has(key) ? ((/** @type {?} */ (this.memory.get(key)))) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((/**
                 * @param {?} ret
                 * @return {?}
                 */
                (ret) => this.deepGet(ret, (/** @type {?} */ (this.cog.reName)), null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
                 * @param {?} v
                 * @return {?}
                 */
                v => this.set(key, v, { type: (/** @type {?} */ (options.type)), expire: options.expire }))));
            }
            return null;
        }
        return isPromise ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value.v) : value.v;
    }
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    getNone(key) {
        return this.get(key, { mode: 'none' });
    }
    /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    tryGet(key, data, options = {}) {
        /** @type {?} */
        const ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
                this.set(key, data, (/** @type {?} */ (options)));
                return data;
            }
            return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(ret);
    }
    // #endregion
    // #region has
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.memory.has(key) || this.meta.has(key);
    }
    // #endregion
    // #region remove
    /**
     * @private
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    _remove(key, needNotify) {
        if (needNotify)
            this.runNotify(key, 'remove');
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
        }
        this.store.remove(this.cog.prefix + key);
        this.removeMeta(key);
    }
    /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        this._remove(key, true);
    }
    /**
     * 清空所有缓存
     * @return {?}
     */
    clear() {
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} k
         * @return {?}
         */
        (_v, k) => this.runNotify(k, 'remove')));
        this.memory.clear();
        this.meta.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => this.store.remove(this.cog.prefix + key)));
    }
    // #endregion
    // #region notify
    /**
     * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
     * @param {?} value
     * @return {?}
     */
    set freq(value) {
        this.freqTick = Math.max(20, value);
        this.abortExpireNotify();
        this.startExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }
    /**
     * @private
     * @return {?}
     */
    runExpireNotify() {
        this.freqTime = setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }), this.freqTick);
    }
    /**
     * @private
     * @return {?}
     */
    checkExpireNotify() {
        /** @type {?} */
        const removed = [];
        this.notifyBuffer.forEach((/**
         * @param {?} _v
         * @param {?} key
         * @return {?}
         */
        (_v, key) => {
            if (this.has(key) && this.getNone(key) === null)
                removed.push(key);
        }));
        removed.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.runNotify(key, 'expire');
            this._remove(key, false);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    abortExpireNotify() {
        clearTimeout(this.freqTime);
    }
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    runNotify(key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).next({ type, value: this.getNone(key) });
    }
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    notify(key) {
        if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            const change$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return (/** @type {?} */ (this.notifyBuffer.get(key))).asObservable();
    }
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    cancelNotify(key) {
        if (!this.notifyBuffer.has(key))
            return;
        (/** @type {?} */ (this.notifyBuffer.get(key))).unsubscribe();
        this.notifyBuffer.delete(key);
    }
    /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    hasNotify(key) {
        return this.notifyBuffer.has(key);
    }
    /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    clearNotify() {
        this.notifyBuffer.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => v.unsubscribe()));
        this.notifyBuffer.clear();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    }
}
CacheService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CacheService.ctorParameters = () => [
    { type: DelonCacheConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DC_STORE_STORAGE_TOKEN,] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
/** @nocollapse */ CacheService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function CacheService_Factory() { return new CacheService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DelonCacheConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DC_STORE_STORAGE_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: CacheService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cache.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonCacheModule {
}
DelonCacheModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cache.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cache.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    ACL 访问控制\r\n    <small\r\n      >注意观察左边的菜单；ACLService提供一个完整的基于角色的访问控制的服务，若需要支持路由守卫，请配合ACLService与Route\r\n      Guard配合简便实现。</small\r\n    >\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"8\">\r\n  <div nz-col [nzSpan]=\"24\">\r\n    <nz-card nzTitle=\"按钮粒度\">\r\n      ACL原始数据：{{ aclSrv.data | json }}\r\n      <button nz-button [acl]=\"'role-a'\">role-a</button>\r\n      <button nz-button [acl]=\"'role-b'\" class=\"ml-sm\">role-b</button>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"8\">\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"全量\">\r\n      <button nz-button (click)=\"toggleFull()\">\r\n        <span>{{ full ? '离开' : '设置' }}权限</span>\r\n      </button>\r\n      <p class=\"pt-md\">全量类指系统管理员角色，无任何受限。</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"角色[role-a]\">\r\n      <button nz-button (click)=\"toggleRoleA()\">\r\n        <span>{{ roleA.length > 0 ? '离开' : '设置' }}权限</span>\r\n      </button>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"角色[role-b]\">\r\n      <button nz-button (click)=\"toggleRoleB()\">\r\n        <span>{{ roleB.length > 0 ? '离开' : '设置' }}权限</span>\r\n      </button>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Cache 缓存,\r\n    <a href=\"https://ng-alain.com/components/cache\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"Service\">\r\n  <button nz-button (click)=\"set()\">设置</button>\r\n  <button nz-button (click)=\"get()\" class=\"ml-sm\">获取</button>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>Download a file</h1>\r\n</div>\r\n<nz-card nzTitle=\"DEMO\">\r\n  <button\r\n    nz-button\r\n    *ngFor=\"let i of fileTypes\"\r\n    class=\"mr-sm\"\r\n    down-file\r\n    [http-data]=\"data\"\r\n    http-url=\"assets/tmp/demo{{ i }}\"\r\n    file-name=\"demo中文\"\r\n  >\r\n    {{ i }}\r\n  </button>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'Page Name'\"></page-header>\r\n<nz-card>\r\n  <sf\r\n    mode=\"search\"\r\n    [schema]=\"searchSchema\"\r\n    [formData]=\"params\"\r\n    (formSubmit)=\"st.reset($event)\"\r\n    (formReset)=\"st.reset(params)\"\r\n  ></sf>\r\n  <st #st [data]=\"url\" [columns]=\"columns\" [req]=\"{ params: params }\"></st>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    路由守卫\r\n  </h1>\r\n</div>\r\n<nz-button-group>\r\n  <button nz-button [routerLink]=\"['/delon/guard/leave']\">\r\n    <span>离开确认页</span>\r\n  </button>\r\n</nz-button-group>\r\n<nz-button-group class=\"ml-sm\">\r\n  <button nz-button (click)=\"setRole(true)\">\r\n    <span>设置管理员</span>\r\n  </button>\r\n  <button nz-button (click)=\"setRole('user1')\">\r\n    <span>设置员工1</span>\r\n  </button>\r\n  <button nz-button (click)=\"setRole('user2')\">\r\n    <span>设置员工2</span>\r\n  </button>\r\n</nz-button-group>\r\n<nz-button-group class=\"ml-sm\">\r\n  <button nz-button [routerLink]=\"['/delon/guard/auth']\">\r\n    <span>需要user1</span>\r\n  </button>\r\n  <button nz-button [routerLink]=\"['/delon/guard/admin']\">\r\n    <span>需要管理员</span>\r\n  </button>\r\n</nz-button-group>\r\n<p class=\"mb-lg\">当前ACL信息：{{ aclSrv.data | json }}</p>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Lodop打印\r\n    <small\r\n      >更多体验请至\r\n      <a href=\"https://ng-alain.com/components/lodop\" target=\"_blank\">ng-alain.com</a>\r\n    </small>\r\n  </h1>\r\n</div>\r\n<nz-card>\r\n  <nz-alert *ngIf=\"error\" [nzType]=\"'warning'\" [nzMessage]=\"message\">\r\n    <ng-template #message>\r\n      请先下载\r\n      <a href=\"http://c-lodop.com/download.html\" target=\"_blank\">Lodop插件</a>。\r\n    </ng-template>\r\n  </nz-alert>\r\n  <form *ngIf=\"!error\" nz-form>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印服务器</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-input-group>\r\n          <div nz-col [nzSpan]=\"16\">\r\n            <input nz-input nzPlaceHolder=\"https://localhost:8443/CLodopfuncs.js\" [(ngModel)]=\"cog.url\" name=\"url\" />\r\n          </div>\r\n          <div nz-col [nzSpan]=\"8\">\r\n            <button nz-button (click)=\"reload(null)\">重新加载打印机</button>\r\n          </div>\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印机</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-select\r\n          style=\"width:90%;\"\r\n          nzPlaceHolder=\"请选择打印机\"\r\n          nzShowSearch\r\n          nzAllowClear\r\n          [(ngModel)]=\"cog.printer\"\r\n          name=\"printer\"\r\n          (ngModelChange)=\"changePinter($event)\"\r\n        >\r\n          <nz-option *ngFor=\"let name of pinters\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\r\n        </nz-select>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">纸张类型</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-select\r\n          style=\"width:90%;\"\r\n          nzPlaceHolder=\"请选择纸张类型\"\r\n          nzShowSearch\r\n          nzAllowClear\r\n          [(ngModel)]=\"cog.paper\"\r\n          name=\"paper\"\r\n        >\r\n          <nz-option *ngFor=\"let name of papers\" [nzLabel]=\"name\" [nzValue]=\"name\"> </nz-option>\r\n        </nz-select>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印内容</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <textarea nz-input [(ngModel)]=\"cog.html\" name=\"html\" nzAutosize></textarea>\r\n        <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-control nz-col [nzSm]=\"18\" [nzOffset]=\"6\">\r\n        <button nz-button (click)=\"print(true)\" [nzLoading]=\"printing\">打印预览</button>\r\n        <button nz-button (click)=\"print()\" [nzLoading]=\"printing\">直接打印</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    二维码\r\n    <a href=\"//ng-alain.com/components/qr\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card>\r\n  <nz-row [nzGutter]=\"24\">\r\n    <nz-col [nzSpan]=\"8\" class=\"text-center\">\r\n      <qr\r\n        [value]=\"value\"\r\n        [background]=\"background\"\r\n        [backgroundAlpha]=\"backgroundAlpha\"\r\n        [foreground]=\"foreground\"\r\n        [foregroundAlpha]=\"foregroundAlpha\"\r\n        [level]=\"level\"\r\n        [mime]=\"mime\"\r\n        [padding]=\"padding\"\r\n        [size]=\"size\"\r\n        style=\"border:1px solid #999\"\r\n      ></qr>\r\n    </nz-col>\r\n    <nz-col [nzSpan]=\"16\">\r\n      <form nz-form>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">背景</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-group>\r\n              <div nz-col nzSpan=\"12\">\r\n                <input nz-input type=\"color\" [(ngModel)]=\"background\" [ngModelOptions]=\"{ standalone: true }\" />\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <nz-input-number\r\n                  [(ngModel)]=\"backgroundAlpha\"\r\n                  [nzMin]=\"0\"\r\n                  [nzMax]=\"1\"\r\n                  [nzStep]=\"0.1\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                ></nz-input-number>\r\n              </div>\r\n            </nz-input-group>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">前景</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-group>\r\n              <div nz-col nzSpan=\"12\">\r\n                <input nz-input type=\"color\" [(ngModel)]=\"foreground\" [ngModelOptions]=\"{ standalone: true }\" />\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <nz-input-number\r\n                  [(ngModel)]=\"foregroundAlpha\"\r\n                  [nzMin]=\"0\"\r\n                  [nzMax]=\"1\"\r\n                  [nzStep]=\"0.1\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                ></nz-input-number>\r\n              </div>\r\n            </nz-input-group>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">误差</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-select [(ngModel)]=\"level\" [ngModelOptions]=\"{ standalone: true }\">\r\n              <nz-option nzValue=\"L\" nzLabel=\"L\"></nz-option>\r\n              <nz-option nzValue=\"M\" nzLabel=\"M\"></nz-option>\r\n              <nz-option nzValue=\"Q\" nzLabel=\"Q\"></nz-option>\r\n              <nz-option nzValue=\"H\" nzLabel=\"H\"></nz-option>\r\n            </nz-select>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">Mime</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-select [(ngModel)]=\"mime\" [ngModelOptions]=\"{ standalone: true }\">\r\n              <nz-option nzValue=\"image/png\" nzLabel=\"image/png\"></nz-option>\r\n              <nz-option nzValue=\"image/jpeg\" nzLabel=\"image/jpeg\"></nz-option>\r\n              <nz-option nzValue=\"image/gif\" nzLabel=\"image/gif\"></nz-option>\r\n            </nz-select>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">内边距</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-number\r\n              [(ngModel)]=\"padding\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              [nzMin]=\"0\"\r\n              [nzMax]=\"100\"\r\n            ></nz-input-number\r\n            >px\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">大小</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-number\r\n              [(ngModel)]=\"size\"\r\n              [ngModelOptions]=\"{ standalone: true }\"\r\n              [nzMin]=\"100\"\r\n              [nzMax]=\"1000\"\r\n              [nzStep]=\"padding\"\r\n            ></nz-input-number\r\n            >px\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </nz-col>\r\n  </nz-row>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Fullscreen & ST\r\n    <small\r\n      >使用 <a href=\"//ng-alain.com/components/table\" target=\"_blank\">st</a>、\r\n      <a href=\"//ng-alain.com/components/full-content\" target=\"_blank\">full-content</a> 组合，由于 nz-table\r\n      固定表头暂不支持自适应，因此表格的展示的效果在响应式里面效果并不是特别好。</small\r\n    >\r\n  </h1>\r\n</div>\r\n<full-content (fullscreenChange)=\"fullChange($event)\">\r\n  <nz-card>\r\n    <div nz-row class=\"mb-md\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <form nz-form nzLayout=\"inline\" se-container>\r\n          <se label=\"User ID\" labelWidth=\"0\">\r\n            <input nz-input [(ngModel)]=\"args.userid\" name=\"userid\" id=\"userid\" />\r\n          </se>\r\n          <se>\r\n            <button nz-button [nzType]=\"'primary'\" (click)=\"st.load()\" [nzLoading]=\"http.loading\">Search</button>\r\n            <!--<button nz-button (click)=\"st.load({ _allow_anonymous: true })\" [disabled]=\"http.loading\">Clear</button>-->\r\n          </se>\r\n        </form>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"text-right\">\r\n          <button nz-button nz-dropdown [nzDropdownMenu]=\"exportMenu\">\r\n            <span>Export</span>\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </button>\r\n          <nz-dropdown-menu #exportMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item>Excel</li>\r\n              <li nz-menu-item>JSON</li>\r\n              <li nz-menu-item>PNG</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n          <button nz-button [nzType]=\"'default'\" full-toggle class=\"ml-sm\">Full</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <st\r\n      #st\r\n      [data]=\"url\"\r\n      [req]=\"{ params: args }\"\r\n      [res]=\"{ reName: { list: 'results' } }\"\r\n      [total]=\"total\"\r\n      [ps]=\"ps\"\r\n      [columns]=\"columns\"\r\n      [scroll]=\"scroll\"\r\n    >\r\n      <ng-template st-row=\"events\" let-item let-index=\"index\">\r\n        <g2-mini-bar\r\n          height=\"15\"\r\n          theme=\"mini\"\r\n          color=\"#999\"\r\n          borderWidth=\"3\"\r\n          [padding]=\"[0, 0, 0, 0]\"\r\n          [data]=\"events\"\r\n          tooltipType=\"mini\"\r\n        ></g2-mini-bar>\r\n      </ng-template>\r\n    </st>\r\n  </nz-card>\r\n</full-content>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    工具集\r\n    <small>@delon/util 日常用法。</small>\r\n  </h1>\r\n</div>\r\n<nz-row [nzGutter]=\"16\">\r\n  <nz-col [nzSpan]=\"12\">\r\n    <nz-card nzTitle=\"字符串类\">\r\n      <nz-card nzType=\"inner\" nzTitle=\"format\">\r\n        <form nz-form>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">String</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              <input nz-input [(ngModel)]=\"format_str\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">Object</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              <input nz-input [(ngModel)]=\"format_obj\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"16\" [nzOffset]=\"8\">\r\n              <button (click)=\"onFormat()\" nz-button>Run</button>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">Result</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              {{ format_res }}\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n      </nz-card>\r\n      <nz-card nzType=\"inner\" nzTitle=\"yuan\">\r\n        <nz-row [nzGutter]=\"16\">\r\n          <nz-col [nzSpan]=\"12\">\r\n            <input type=\"number\" nz-input [(ngModel)]=\"yuan_str\" (ngModelChange)=\"onYuan($event)\" />\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"12\">\r\n            <div [innerHTML]=\"yuan_res\"></div>\r\n          </nz-col>\r\n        </nz-row>\r\n      </nz-card>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzSpan]=\"12\">\r\n    <nz-card nzTitle=\"其它类\">\r\n      <button nz-button (click)=\"onCopy()\">Copy</button>\r\n    </nz-card>\r\n  </nz-col>\r\n</nz-row>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Import & Export excel file,\r\n    <a href=\"//ng-alain.com/components/xlsx\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"Import\">\r\n  <button nz-button (click)=\"url()\">Via Url</button>\r\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\r\n  <p class=\"mt-sm\">result: {{ data | json }}</p>\r\n</nz-card>\r\n<nz-card nzTitle=\"Export\">\r\n  <button nz-button (click)=\"download()\">Export</button>\r\n  <st [data]=\"users\" [ps]=\"3\" [columns]=\"columns\" class=\"mt-sm\"></st>\r\n</nz-card>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Read & Write zip file,\r\n    <a href=\"//ng-alain.com/components/zip\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"解压\">\r\n  <button nz-button (click)=\"url()\">Via Url</button>\r\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\r\n  <ol>\r\n    <li *ngFor=\"let i of list\">{{ i | json }}</li>\r\n  </ol>\r\n</nz-card>\r\n<nz-card nzTitle=\"压缩\" *ngIf=\"instance\">\r\n  <!--<button nz-button (click)=\"data.push({})\" [nzType]=\"'primary'\">new</button>-->\r\n  <button nz-button (click)=\"download()\" class=\"ml-sm\">download</button>\r\n  <nz-table [nzData]=\"data\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" class=\"mt-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th>\r\n          <span>path</span>\r\n        </th>\r\n        <th>\r\n          <span>url</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let i of data; let index = index\">\r\n        <td>\r\n          <input nz-input [(ngModel)]=\"i.path\" name=\"path{{ index }}\" />\r\n        </td>\r\n        <td>\r\n          <input nz-input [(ngModel)]=\"i.url\" name=\"url{{ index }}\" />\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</nz-card>\r\n");

/***/ }),

/***/ "./src/app/routes/delon/acl/acl.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/acl/acl.component.ts ***!
  \***************************************************/
/*! exports provided: ACLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACLComponent", function() { return ACLComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");




let ACLComponent = class ACLComponent {
    constructor(aclSrv, menuSrv) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.full = true;
        this.roleA = '';
        this.roleB = '';
    }
    reMenu() {
        this.menuSrv.resume();
    }
    toggleFull() {
        this.full = !this.full;
        this.aclSrv.setFull(this.full);
        this.reMenu();
    }
    toggleRoleA() {
        this.full = false;
        this.roleA = this.roleA === 'role-a' ? '' : 'role-a';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleA]);
        this.reMenu();
    }
    toggleRoleB() {
        this.full = false;
        this.roleB = this.roleB === 'role-b' ? '' : 'role-b';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleB]);
        this.reMenu();
    }
};
ACLComponent.ctorParameters = () => [
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_2__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
];
ACLComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acl',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acl.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/acl/acl.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_2__["ACLService"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
], ACLComponent);



/***/ }),

/***/ "./src/app/routes/delon/cache/cache.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/cache/cache.component.ts ***!
  \*******************************************************/
/*! exports provided: CacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheComponent", function() { return CacheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/cache */ "../../node_modules/@delon/cache/fesm2015/cache.js");




let CacheComponent = class CacheComponent {
    constructor(cache, msg) {
        this.cache = cache;
        this.msg = msg;
        this.KEY = 'user';
    }
    ngOnInit() { }
    set() {
        this.cache.set(this.KEY, +new Date());
    }
    get() {
        this.msg.success(this.cache.getNone(this.KEY));
    }
};
CacheComponent.ctorParameters = () => [
    { type: _delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
CacheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cache',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cache.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/cache/cache.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], CacheComponent);



/***/ }),

/***/ "./src/app/routes/delon/delon-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/delon-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DelonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonRoutingModule", function() { return DelonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");
/* harmony import */ var _st_st_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st/st.component */ "./src/app/routes/delon/st/st.component.ts");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/util.component */ "./src/app/routes/delon/util/util.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/print.component */ "./src/app/routes/delon/print/print.component.ts");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acl/acl.component */ "./src/app/routes/delon/acl/acl.component.ts");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/guard.component */ "./src/app/routes/delon/guard/guard.component.ts");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/leave.component */ "./src/app/routes/delon/guard/leave.component.ts");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/auth.component */ "./src/app/routes/delon/guard/auth.component.ts");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/admin.component */ "./src/app/routes/delon/guard/admin.component.ts");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/can-leave.provide */ "./src/app/routes/delon/guard/can-leave.provide.ts");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cache/cache.component */ "./src/app/routes/delon/cache/cache.component.ts");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./downfile/downfile.component */ "./src/app/routes/delon/downfile/downfile.component.ts");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "./src/app/routes/delon/xlsx/xlsx.component.ts");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zip/zip.component */ "./src/app/routes/delon/zip/zip.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/form.component */ "./src/app/routes/delon/form/form.component.ts");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./qr/qr.component */ "./src/app/routes/delon/qr/qr.component.ts");



















const routes = [
    { path: 'st', component: _st_st_component__WEBPACK_IMPORTED_MODULE_4__["STDemoComponent"] },
    { path: 'util', component: _util_util_component__WEBPACK_IMPORTED_MODULE_5__["UtilComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintComponent"] },
    { path: 'acl', component: _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__["ACLComponent"] },
    {
        path: 'guard',
        component: _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__["GuardComponent"],
        children: [
            {
                path: 'leave',
                component: _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__["GuardLeaveComponent"],
                canDeactivate: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__["CanLeaveProvide"]],
            },
            {
                path: 'auth',
                component: _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__["GuardAuthComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'user1' },
            },
            {
                path: 'admin',
                component: _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__["GuardAdminComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'admin' },
            },
        ],
    },
    { path: 'cache', component: _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__["CacheComponent"] },
    { path: 'qr', component: _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__["QRComponent"] },
    { path: 'downfile', component: _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__["DownFileComponent"] },
    { path: 'xlsx', component: _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__["XlsxComponent"] },
    { path: 'zip', component: _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__["ZipComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_17__["DelonFormComponent"] },
];
let DelonRoutingModule = class DelonRoutingModule {
};
DelonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DelonRoutingModule);



/***/ }),

/***/ "./src/app/routes/delon/delon.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/delon/delon.module.ts ***!
  \**********************************************/
/*! exports provided: DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delon-routing.module */ "./src/app/routes/delon/delon-routing.module.ts");
/* harmony import */ var _st_st_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./st/st.component */ "./src/app/routes/delon/st/st.component.ts");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/util.component */ "./src/app/routes/delon/util/util.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print/print.component */ "./src/app/routes/delon/print/print.component.ts");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acl/acl.component */ "./src/app/routes/delon/acl/acl.component.ts");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/can-leave.provide */ "./src/app/routes/delon/guard/can-leave.provide.ts");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/guard.component */ "./src/app/routes/delon/guard/guard.component.ts");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/leave.component */ "./src/app/routes/delon/guard/leave.component.ts");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/admin.component */ "./src/app/routes/delon/guard/admin.component.ts");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.component */ "./src/app/routes/delon/guard/auth.component.ts");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cache/cache.component */ "./src/app/routes/delon/cache/cache.component.ts");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./downfile/downfile.component */ "./src/app/routes/delon/downfile/downfile.component.ts");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "./src/app/routes/delon/xlsx/xlsx.component.ts");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./zip/zip.component */ "./src/app/routes/delon/zip/zip.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/form.component */ "./src/app/routes/delon/form/form.component.ts");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./qr/qr.component */ "./src/app/routes/delon/qr/qr.component.ts");




















const COMPONENTS = [
    _st_st_component__WEBPACK_IMPORTED_MODULE_5__["STDemoComponent"],
    _util_util_component__WEBPACK_IMPORTED_MODULE_6__["UtilComponent"],
    _print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"],
    _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__["ACLComponent"],
    _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__["GuardComponent"],
    _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__["GuardLeaveComponent"],
    _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__["GuardAdminComponent"],
    _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__["GuardAuthComponent"],
    _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__["CacheComponent"],
    _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__["DownFileComponent"],
    _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__["XlsxComponent"],
    _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__["ZipComponent"],
    _form_form_component__WEBPACK_IMPORTED_MODULE_18__["DelonFormComponent"],
    _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__["QRComponent"],
];
const COMPONENTS_NOROUNT = [];
let DelonModule = class DelonModule {
};
DelonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__["DelonRoutingModule"]],
        providers: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__["CanLeaveProvide"]],
        declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
        entryComponents: COMPONENTS_NOROUNT,
    })
], DelonModule);



/***/ }),

/***/ "./src/app/routes/delon/downfile/downfile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/delon/downfile/downfile.component.ts ***!
  \*************************************************************/
/*! exports provided: DownFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownFileComponent", function() { return DownFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let DownFileComponent = class DownFileComponent {
    constructor() {
        this.fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];
        this.data = {
            otherdata: 1,
            time: new Date(),
        };
    }
};
DownFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-down-file',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./downfile.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/downfile/downfile.component.html")).default,
    })
], DownFileComponent);



/***/ }),

/***/ "./src/app/routes/delon/form/form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: DelonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonFormComponent", function() { return DelonFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");




let DelonFormComponent = class DelonFormComponent {
    constructor(http) {
        this.http = http;
        this.params = {};
        this.url = `/user`;
        this.searchSchema = {
            properties: {
                no: {
                    type: 'string',
                    title: '编号',
                },
            },
        };
        this.columns = [
            { title: '编号', index: 'no' },
            { title: '调用次数', type: 'number', index: 'callNo' },
            { title: '头像', type: 'img', width: '50px', index: 'avatar' },
            { title: '时间', type: 'date', index: 'updatedAt' },
        ];
    }
    ngOnInit() { }
};
DelonFormComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('st', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STComponent"])
], DelonFormComponent.prototype, "st", void 0);
DelonFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delon-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/form/form.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])
], DelonFormComponent);



/***/ }),

/***/ "./src/app/routes/delon/guard/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAdminComponent", function() { return GuardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let GuardAdminComponent = class GuardAdminComponent {
};
GuardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-admin',
        template: `
    <p>这是一个admin页面</p>
  `,
    })
], GuardAdminComponent);



/***/ }),

/***/ "./src/app/routes/delon/guard/auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/guard/auth.component.ts ***!
  \******************************************************/
/*! exports provided: GuardAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAuthComponent", function() { return GuardAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let GuardAuthComponent = class GuardAuthComponent {
};
GuardAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-auth',
        template: `
    <p>这是一个user1页面</p>
  `,
    })
], GuardAuthComponent);



/***/ }),

/***/ "./src/app/routes/delon/guard/can-leave.provide.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/guard/can-leave.provide.ts ***!
  \*********************************************************/
/*! exports provided: CanLeaveProvide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveProvide", function() { return CanLeaveProvide; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




let CanLeaveProvide = class CanLeaveProvide {
    constructor(confirmSrv) {
        this.confirmSrv = confirmSrv;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.confirmSrv.confirm({
                nzTitle: '确认要离开吗？',
                nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
                nzOkText: '离开',
                nzCancelText: '取消',
                nzOnOk: () => {
                    observer.next(true);
                    observer.complete();
                },
                nzOnCancel: () => {
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    }
};
CanLeaveProvide.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
CanLeaveProvide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]])
], CanLeaveProvide);



/***/ }),

/***/ "./src/app/routes/delon/guard/guard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/guard.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardComponent", function() { return GuardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "../../node_modules/@delon/acl/fesm2015/acl.js");





let GuardComponent = class GuardComponent {
    constructor(aclSrv, menuSrv, router) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.router = router;
    }
    setRole(value) {
        this.aclSrv.setFull(typeof value === 'boolean' ? value : false);
        this.aclSrv.set({ role: [value] });
        this.menuSrv.resume();
        this.router.navigate(['/delon/guard']);
    }
};
GuardComponent.ctorParameters = () => [
    { type: _delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"] },
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_1__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GuardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guard.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/guard/guard.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"], _delon_theme__WEBPACK_IMPORTED_MODULE_1__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GuardComponent);



/***/ }),

/***/ "./src/app/routes/delon/guard/leave.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/leave.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardLeaveComponent", function() { return GuardLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let GuardLeaveComponent = class GuardLeaveComponent {
};
GuardLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guard-leave',
        template: `
    <p>离开时需要确认</p>
    <button nz-button [nzType]="'primary'" [routerLink]="['/logics/guard']">
      <span>我要离开</span>
    </button>
  `,
    })
], GuardLeaveComponent);



/***/ }),

/***/ "./src/app/routes/delon/print/print.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/print/print.component.ts ***!
  \*******************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");




let PrintComponent = class PrintComponent {
    constructor(lodopSrv, msg, notify) {
        this.lodopSrv = lodopSrv;
        this.msg = msg;
        this.notify = notify;
        this.cog = {
            url: 'https://localhost:8443/CLodopfuncs.js',
            printer: '',
            paper: '',
            html: `
      <h1>Title</h1>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
      <p>这~！@#￥%……&*（）——sdilfjnvn</p>
    `,
        };
        this.error = false;
        this.lodop = null;
        this.pinters = [];
        this.papers = [];
        this.printing = false;
        this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
            if (!ok) {
                this.error = true;
                return;
            }
            this.error = false;
            this.msg.success(`打印机加载成功`);
            this.lodop = lodop;
            this.pinters = this.lodopSrv.printer;
        });
    }
    reload(options = { url: 'https://localhost:8443/CLodopfuncs.js' }) {
        this.pinters = [];
        this.papers = [];
        this.cog.printer = '';
        this.cog.paper = '';
        this.lodopSrv.cog = Object.assign({}, this.cog, options);
        this.error = false;
        if (options === null)
            this.lodopSrv.reset();
    }
    changePinter(name) {
        this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
    }
    print(isPrivew = false) {
        const LODOP = this.lodop;
        LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
        LODOP.SET_PRINTER_INDEXA(this.cog.printer);
        LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
        LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
        LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
        LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
        LODOP.NewPageA();
        LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
        if (isPrivew)
            LODOP.PREVIEW();
        else
            LODOP.PRINT();
    }
};
PrintComponent.ctorParameters = () => [
    { type: _delon_abc__WEBPACK_IMPORTED_MODULE_3__["LodopService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"] }
];
PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./print.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/print/print.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_3__["LodopService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
], PrintComponent);



/***/ }),

/***/ "./src/app/routes/delon/qr/qr.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/delon/qr/qr.component.ts ***!
  \*************************************************/
/*! exports provided: QRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRComponent", function() { return QRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let QRComponent = class QRComponent {
    constructor() {
        this.value = 'https://ng-alain.com/';
        this.background = 'white';
        this.backgroundAlpha = 1.0;
        this.foreground = 'black';
        this.foregroundAlpha = 1.0;
        this.level = 'L';
        this.mime = 'image/png';
        this.padding = 10;
        this.size = 220;
    }
};
QRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./qr.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/qr/qr.component.html")).default,
    })
], QRComponent);



/***/ }),

/***/ "./src/app/routes/delon/st/st.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/delon/st/st.component.ts ***!
  \*************************************************/
/*! exports provided: STDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STDemoComponent", function() { return STDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm2015/theme.js");




let STDemoComponent = class STDemoComponent {
    constructor(http, message) {
        this.http = http;
        this.message = message;
        this.ps = 20;
        this.total = 200; // mock total
        this.args = { _allow_anonymous: true };
        this.url = `https://api.randomuser.me/?results=20`;
        this.events = [];
        this.scroll = { y: '230px' };
        this.columns = [
            { title: 'id', index: 'id.value', type: 'checkbox' },
            { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: 80 },
            {
                title: 'Name',
                index: 'name.first',
                width: 150,
                format: item => `${item.name.first} ${item.name.last}`,
                type: 'link',
                click: item => this.message.info(`${item.name.first}`),
            },
            { title: 'Email', index: 'email' },
            {
                title: 'Gender',
                index: 'gender',
                type: 'yn',
                yn: {
                    truth: 'female',
                    yes: '男',
                    no: '女',
                    mode: 'text',
                },
                width: 120,
            },
            { title: 'Events', render: 'events', width: 90 },
            { title: 'Registered', index: 'registered.date', type: 'date', width: 170 },
            {
                title: 'Actions',
                width: 120,
                buttons: [
                    {
                        text: 'Edit',
                        click: item => this.message.info(`edit [${item.id.value}]`),
                        if: item => item.gender === 'female',
                    },
                    {
                        text: 'Delete',
                        type: 'del',
                        click: item => this.message.info(`deleted [${item.id.value}]`),
                    },
                ],
            },
        ];
    }
    ngOnInit() {
        this.http.get('/chart/visit').subscribe((res) => (this.events = res.slice(0, 8)));
    }
    fullChange(val) {
        this.scroll = val ? { y: '350px' } : { y: '230px' };
    }
};
STDemoComponent.ctorParameters = () => [
    { type: _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
STDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-st',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./st.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/st/st.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], STDemoComponent);



/***/ }),

/***/ "./src/app/routes/delon/util/util.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/util/util.component.ts ***!
  \*****************************************************/
/*! exports provided: UtilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilComponent", function() { return UtilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "../../node_modules/@delon/util/fesm2015/util.js");
/* harmony import */ var _fs_ng_alain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain */ "../../themes/ng-alain/src/index.ts");





let UtilComponent = class UtilComponent {
    constructor(messageSrv) {
        this.messageSrv = messageSrv;
        // region: string
        // tslint:disable-next-line: no-invalid-template-strings
        this.format_str = 'this is ${name}';
        this.format_res = '';
        this.format_obj = JSON.stringify({ name: 'asdf' });
        // endregion
        // region: other
        this.content = `time ${+new Date()}

    中文！@#￥%……&*`;
    }
    onFormat() {
        let obj = null;
        try {
            obj = JSON.parse(this.format_obj);
        }
        catch (_a) {
            this.messageSrv.error(`无法使用 JSON.parse 转换`);
            return;
        }
        this.format_res = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["format"])(this.format_str, obj, true);
    }
    onYuan(value) {
        this.yuan_res = Object(_fs_ng_alain__WEBPACK_IMPORTED_MODULE_4__["yuan"])(value);
    }
    onCopy() {
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])(`time ${+new Date()}`).then(() => this.messageSrv.success(`success`));
    }
};
UtilComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }
];
UtilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-util',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./util.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/util/util.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
], UtilComponent);



/***/ }),

/***/ "./src/app/routes/delon/xlsx/xlsx.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/xlsx/xlsx.component.ts ***!
  \*****************************************************/
/*! exports provided: XlsxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxComponent", function() { return XlsxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");



let XlsxComponent = class XlsxComponent {
    constructor(xlsx) {
        this.xlsx = xlsx;
        this.users = Array(100)
            .fill({})
            .map((item, idx) => {
            return {
                id: idx + 1,
                name: `name ${idx + 1}`,
                age: Math.ceil(Math.random() * 10) + 20,
            };
        });
        this.columns = [
            { title: '编号', index: 'id', type: 'checkbox' },
            { title: '姓名', index: 'name' },
            { title: '年龄', index: 'age' },
        ];
    }
    url() {
        this.xlsx.import(`./assets/tmp/demo.xlsx`).then(res => (this.data = res));
    }
    change(e) {
        const file = e.target.files[0];
        this.xlsx.import(file).then(res => (this.data = res));
    }
    download() {
        const data = [this.columns.map(i => i.title)];
        this.users.forEach(i => data.push(this.columns.map(c => i[c.index])));
        this.xlsx.export({
            sheets: [
                {
                    data,
                    name: 'sheet name',
                },
            ],
        });
    }
};
XlsxComponent.ctorParameters = () => [
    { type: _delon_abc__WEBPACK_IMPORTED_MODULE_2__["XlsxService"] }
];
XlsxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xlsx',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xlsx.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/xlsx/xlsx.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["XlsxService"]])
], XlsxComponent);



/***/ }),

/***/ "./src/app/routes/delon/zip/zip.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/zip/zip.component.ts ***!
  \***************************************************/
/*! exports provided: ZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipComponent", function() { return ZipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc */ "../../node_modules/@delon/abc/fesm2015/abc.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");




let ZipComponent = class ZipComponent {
    constructor(zip, msg) {
        this.zip = zip;
        this.msg = msg;
        // endregion
        // region: write
        this.instance = null;
        this.data = [
            { path: 'demo.docx', url: 'https://ng-alain.com/assets/demo.docx' },
            {
                path: '小程序标志.zip',
                url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip',
            },
        ];
        this.zip.create().then(ret => (this.instance = ret));
    }
    format(data) {
        const files = data.files;
        this.list = Object.keys(files).map(key => {
            return {
                name: key,
                dir: files[key].dir,
                date: files[key].date,
            };
        });
    }
    url() {
        this.zip.read(`./assets/tmp/demo.zip`).then(res => this.format(res));
    }
    change(e) {
        const file = e.target.files[0];
        this.zip.read(file).then(res => this.format(res));
    }
    download() {
        const promises = [];
        this.data.forEach(item => {
            promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
        });
        Promise.all(promises).then(() => {
            this.zip.save(this.instance).then(() => {
                this.msg.success('download success');
                this.data = [];
            });
        }, (error) => {
            console.warn(error);
            this.msg.error(JSON.stringify(error));
        });
    }
};
ZipComponent.ctorParameters = () => [
    { type: _delon_abc__WEBPACK_IMPORTED_MODULE_2__["ZipService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
ZipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-zip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zip.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/delon/zip/zip.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["ZipService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
], ZipComponent);



/***/ })

}]);
//# sourceMappingURL=delon-delon-module-es2015.js.map