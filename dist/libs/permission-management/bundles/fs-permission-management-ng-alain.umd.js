(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/permission-management'), require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.permission-management'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management/ng-alain', ['exports', '@fs/permission-management', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.permission-management', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = global.fs['permission-management'] || {}, global.fs['permission-management']['ng-alain'] = {}), global.fs['permission-management'], global.ng_core, global.ng.core, global.basic, global.ng_permissionManagement, global.store, global.rxjs.operators));
}(this, (function (exports, permissionManagement, ng_core, core, basic, ng_permissionManagement, store, operators) { 'use strict';

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
     * Generated from: lib/components/permission-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PermissionManagementComponent = /** @class */ (function (_super) {
        __extends(PermissionManagementComponent, _super);
        function PermissionManagementComponent(_store, _renderer) {
            var _this = _super.call(this, _store, _renderer) || this;
            _this._store = _store;
            _this._renderer = _renderer;
            _this.selectAllIndeterminate = false;
            _this.selectAllThisTabIndeterminate = false;
            return _this;
        }
        Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
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
                if (!this.selectedGroup)
                    return;
                this._visible = value;
                this.visibleChange.emit(value);
                if (!value) {
                    this.selectedGroup = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} grantedProviders
         * @return {?}
         */
        PermissionManagementComponent.prototype.isGrantedByOtherProviderName = /**
         * @param {?} grantedProviders
         * @return {?}
         */
        function (grantedProviders) {
            var _this = this;
            if (grantedProviders.length) {
                return grantedProviders.findIndex((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return p.providerName !== _this.providerName; })) > -1;
            }
            return false;
        };
        /**
         * @return {?}
         */
        PermissionManagementComponent.prototype.onClickSelectAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectAllIndeterminate = false;
            this.permissions = this.permissions.map((/**
             * @param {?} permission
             * @return {?}
             */
            function (permission) { return (__assign({}, permission, { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || _this.selectAllTab })); }));
            this.selectThisTab = this.selectAllTab;
        };
        /**
         * @return {?}
         */
        PermissionManagementComponent.prototype.onClickSelectThisTab = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectAllThisTabIndeterminate = false;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe((/**
             * @param {?} permissions
             * @return {?}
             */
            function (permissions) {
                permissions.forEach((/**
                 * @param {?} permission
                 * @return {?}
                 */
                function (permission) {
                    if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                        return;
                    /** @type {?} */
                    var index = _this.permissions.findIndex((/**
                     * @param {?} per
                     * @return {?}
                     */
                    function (per) { return per.name === permission.name; }));
                    _this.permissions = __spread(_this.permissions.slice(0, index), [
                        __assign({}, _this.permissions[index], { isGranted: _this.selectThisTab })
                    ], _this.permissions.slice(index + 1));
                }));
            }));
            this.setGrantCheckboxState();
        };
        /**
         * @param {?} clickedPermission
         * @return {?}
         */
        PermissionManagementComponent.prototype.onClickCheckbox = /**
         * @param {?} clickedPermission
         * @return {?}
         */
        function (clickedPermission) {
            var _this = this;
            if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
                return;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.permissions = _this.permissions.map((/**
                 * @param {?} per
                 * @return {?}
                 */
                function (per) {
                    if (clickedPermission.name === per.name) {
                        return __assign({}, per, { isGranted: !per.isGranted });
                    }
                    else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                        return __assign({}, per, { isGranted: false });
                    }
                    else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                        return __assign({}, per, { isGranted: true });
                    }
                    return per;
                }));
                _this.setTabCheckboxState();
                _this.setGrantCheckboxState();
            }), 0);
        };
        /**
         * @return {?}
         */
        PermissionManagementComponent.prototype.setTabCheckboxState = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe((/**
             * @param {?} permissions
             * @return {?}
             */
            function (permissions) {
                /** @type {?} */
                var selectedPermissions = permissions.filter((/**
                 * @param {?} per
                 * @return {?}
                 */
                function (per) { return per.isGranted; }));
                if (selectedPermissions.length === permissions.length) {
                    _this.selectAllThisTabIndeterminate = false;
                    _this.selectThisTab = true;
                }
                else if (selectedPermissions.length === 0) {
                    _this.selectAllThisTabIndeterminate = false;
                    _this.selectThisTab = false;
                }
                else {
                    _this.selectAllThisTabIndeterminate = true;
                }
            }));
        };
        /**
         * @return {?}
         */
        PermissionManagementComponent.prototype.setGrantCheckboxState = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selectedAllPermissions = this.permissions.filter((/**
             * @param {?} per
             * @return {?}
             */
            function (per) { return per.isGranted; }));
            if (selectedAllPermissions.length === this.permissions.length) {
                this.selectAllIndeterminate = false;
                this.selectAllTab = true;
            }
            else if (selectedAllPermissions.length === 0) {
                this.selectAllIndeterminate = false;
                this.selectAllTab = false;
            }
            else {
                this.selectAllIndeterminate = true;
            }
        };
        PermissionManagementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-alain-permission-management',
                        template: "<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n",
                        styles: [":host{display:block;padding-top:24px}.main{display:flex;width:100%;overflow:auto;background-color:#fff}.menu{width:224px;border-right:1px solid #e8e8e8}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{margin-bottom:12px;color:rgba(0,0,0,.85);font-weight:500;font-size:20px;line-height:28px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-top:14px;padding-bottom:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{width:100%;border:none}.main .content{padding:40px}}"]
                    }] }
        ];
        /** @nocollapse */
        PermissionManagementComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: core.Renderer2 }
        ]; };
        PermissionManagementComponent.propDecorators = {
            providerName: [{ type: core.Input }],
            providerKey: [{ type: core.Input }],
            visible: [{ type: core.Input }]
        };
        return PermissionManagementComponent;
    }(ng_permissionManagement.PermissionManagementComponent));
    if (false) {
        /** @type {?} */
        PermissionManagementComponent.prototype.providerName;
        /** @type {?} */
        PermissionManagementComponent.prototype.providerKey;
        /** @type {?} */
        PermissionManagementComponent.prototype.selectAllIndeterminate;
        /** @type {?} */
        PermissionManagementComponent.prototype.selectAllThisTabIndeterminate;
        /**
         * @type {?}
         * @private
         */
        PermissionManagementComponent.prototype._store;
        /**
         * @type {?}
         * @private
         */
        PermissionManagementComponent.prototype._renderer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/permission-management-ng-alain.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PermissionManagementNgAlainModule = /** @class */ (function () {
        function PermissionManagementNgAlainModule() {
        }
        PermissionManagementNgAlainModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PermissionManagementComponent],
                        imports: [
                            ng_core.CoreModule,
                            basic.NgAlainBasicModule,
                            permissionManagement.PermissionManagementModule
                        ],
                        exports: [PermissionManagementComponent]
                    },] }
        ];
        return PermissionManagementNgAlainModule;
    }());

    exports.PermissionManagementNgAlainModule = PermissionManagementNgAlainModule;
    exports.ɵa = PermissionManagementComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management-ng-alain.umd.js.map
