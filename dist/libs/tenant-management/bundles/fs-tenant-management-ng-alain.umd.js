(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/tenant-management'), require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.tenant-management'), require('@abp/ng.theme.shared'), require('@angular/forms'), require('@ngxs/store'), require('@fs/feature-management/ng-alain')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management/ng-alain', ['exports', '@fs/tenant-management', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.tenant-management', '@abp/ng.theme.shared', '@angular/forms', '@ngxs/store', '@fs/feature-management/ng-alain'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = global.fs['tenant-management'] || {}, global.fs['tenant-management']['ng-alain'] = {}), global.fs['tenant-management'], global.ng_core, global.ng.core, global.basic, global.ng_tenantManagement, global.ng_theme_shared, global.ng.forms, global.store, global.ngAlain));
}(this, (function (exports, tenantManagement, ng_core, core, basic, ng_tenantManagement, ng_theme_shared, forms, store, ngAlain) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/tenants/tenants.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantsComponent = /** @class */ (function (_super) {
        __extends(TenantsComponent, _super);
        function TenantsComponent(_confirmationService, _tenantService, _fb, _store) {
            var _this = _super.call(this, _confirmationService, _tenantService, _fb, _store) || this;
            _this._confirmationService = _confirmationService;
            _this._tenantService = _tenantService;
            _this._fb = _fb;
            _this._store = _store;
            return _this;
        }
        TenantsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-tenants',
                        template: "<page-header [title]=\"'AbpTenantManagement::Tenants' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [nzLayout]=\"'inline'\" class=\"search__form\">\r\n      <div nz-row [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"24\">\r\n          <nz-form-item>\r\n            <nz-form-label nzFor=\"no\">{{'AbpIdentity::PagerSearch' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control>\r\n              <input nz-input type=\"search\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n                (input.debounce)=\"onSearch($event.target.value)\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n    </form>\r\n<button nz-button [abpPermission]=\"'AbpTenantManagement.Tenants.Create'\" (click)=\"addTenant()\" [nzType]=\"'primary'\">\r\n  <i nz-icon nzType=\"plus\"></i>\r\n  <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n</button>\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpTenantManagement::DisplayName:TenantName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}</td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Update'\" (click)=\"editTenant(data.id)\">\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                (click)=\"onEditConnectionString(data.id)\">\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                (click)=\"providerKey = data.id; visibleFeatures = true\">\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                (click)=\"delete(data.id, data.name)\">{{ 'AbpTenantManagement::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n\r\n<nz-modal [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n(nzOnCancel)=\"isModalVisible=false\">\r\n<ng-template #modalTitle>\r\n  {{ selectedModalContent.title | abpLocalization }}\r\n</ng-template>\r\n\r\n<ng-template #modalContent>\r\n  <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n    {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n  </button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\"  [nzLoading]=\"loading\">\r\n    {{\r\n    'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-template #tenantModalTemplate>\r\n<form nz-form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" [nzLayout]=\"'vertical'\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n      {{ 'AbpTenantManagement::TenantName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminEmailAddress\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminEmailAddress\" type=\"email\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminPassword\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminPassword\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminPassword\" type=\"password\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n<form nz-form [nzLayout]=\"'vertical'\" [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\">\r\n  <nz-form-item>\r\n    <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n      <label nz-checkbox formControlName=\"useSharedDatabase\">\r\n        <span>\r\n          {{\r\n                'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n          }}\r\n        </span>\r\n      </label>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item *ngIf=\"!useSharedDatabase\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"defaultConnectionString\">\r\n      {{ 'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"defaultConnectionString\" id=\"defaultConnectionString\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-alain-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</ng-alain-feature-management>"
                    }] }
        ];
        /** @nocollapse */
        TenantsComponent.ctorParameters = function () { return [
            { type: ng_theme_shared.ConfirmationService },
            { type: ng_tenantManagement.TenantManagementService },
            { type: forms.FormBuilder },
            { type: store.Store }
        ]; };
        return TenantsComponent;
    }(ng_tenantManagement.TenantsComponent));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TenantsComponent.prototype._confirmationService;
        /**
         * @type {?}
         * @private
         */
        TenantsComponent.prototype._tenantService;
        /**
         * @type {?}
         * @private
         */
        TenantsComponent.prototype._fb;
        /**
         * @type {?}
         * @private
         */
        TenantsComponent.prototype._store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/tenant-management-ng-alain.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TenantManagementNgAlainModule = /** @class */ (function () {
        function TenantManagementNgAlainModule(store) {
            this.store = store;
            store.dispatch(new ng_core.AddReplaceableComponent({ component: TenantsComponent, key: 'TenantManagement.TenantsComponent' }));
        }
        TenantManagementNgAlainModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TenantsComponent],
                        entryComponents: [TenantsComponent],
                        imports: [
                            ng_core.CoreModule,
                            basic.NgAlainBasicModule,
                            tenantManagement.TenantManagementModule,
                            ngAlain.FeatureManagementNgAlainModule
                        ]
                    },] }
        ];
        /** @nocollapse */
        TenantManagementNgAlainModule.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return TenantManagementNgAlainModule;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TenantManagementNgAlainModule.prototype.store;
    }

    exports.TenantManagementNgAlainModule = TenantManagementNgAlainModule;
    exports.ɵa = TenantsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management-ng-alain.umd.js.map
