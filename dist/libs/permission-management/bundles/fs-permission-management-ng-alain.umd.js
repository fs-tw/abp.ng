(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.permission-management'), require('@ngxs/store'), require('rxjs/operators'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management/ng-alain', ['exports', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.permission-management', '@ngxs/store', 'rxjs/operators', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = global.fs['permission-management'] || {}, global.fs['permission-management']['ng-alain'] = {}), global.ng.core, global.basic, global.ng_permissionManagement, global.store, global.rxjs.operators, global.ng_core));
}(this, (function (exports, core, basic, ng_permissionManagement, store, operators, ng_core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    exports.PermissionManagementComponent = /** @class */ (function (_super) {
        __extends(PermissionManagementComponent, _super);
        function PermissionManagementComponent(_store, _renderer) {
            var _this = _super.call(this, _store, _renderer) || this;
            _this._store = _store;
            _this._renderer = _renderer;
            _this.hideBadges = false;
            _this._visible = false;
            _this.visibleChange = new core.EventEmitter();
            _this.selectAllIndeterminate = false;
            _this.selectAllThisTabIndeterminate = false;
            return _this;
        }
        Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                var _this = this;
                if (value === this._visible)
                    return;
                if (value) {
                    this.openModal().subscribe(function () {
                        _this._visible = true;
                        _this.visibleChange.emit(true);
                    });
                }
                else {
                    this.selectedGroup = null;
                    this._visible = false;
                    this.visibleChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        PermissionManagementComponent.prototype.isGrantedByOtherProviderName = function (grantedProviders) {
            var _this = this;
            if (grantedProviders.length) {
                return grantedProviders.findIndex(function (p) { return p.providerName !== _this.providerName; }) > -1;
            }
            return false;
        };
        PermissionManagementComponent.prototype.onClickSelectAll = function () {
            var _this = this;
            this.selectAllIndeterminate = false;
            this.permissions = this.permissions.map(function (permission) { return (Object.assign(Object.assign({}, permission), { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || _this.selectAllTab })); });
            this.selectThisTab = this.selectAllTab;
        };
        PermissionManagementComponent.prototype.onClickSelectThisTab = function () {
            var _this = this;
            this.selectAllThisTabIndeterminate = false;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe(function (permissions) {
                permissions.forEach(function (permission) {
                    if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                        return;
                    var index = _this.permissions.findIndex(function (per) { return per.name === permission.name; });
                    _this.permissions = __spread(_this.permissions.slice(0, index), [
                        Object.assign(Object.assign({}, _this.permissions[index]), { isGranted: _this.selectThisTab })
                    ], _this.permissions.slice(index + 1));
                });
            });
            this.setGrantCheckboxState();
        };
        PermissionManagementComponent.prototype.onClickCheckbox = function (clickedPermission) {
            var _this = this;
            if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
                return;
            setTimeout(function () {
                _this.permissions = _this.permissions.map(function (per) {
                    if (clickedPermission.name === per.name) {
                        return Object.assign(Object.assign({}, per), { isGranted: !per.isGranted });
                    }
                    else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                        return Object.assign(Object.assign({}, per), { isGranted: false });
                    }
                    else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                        return Object.assign(Object.assign({}, per), { isGranted: true });
                    }
                    return per;
                });
                _this.setTabCheckboxState();
                _this.setGrantCheckboxState();
            }, 0);
        };
        PermissionManagementComponent.prototype.setTabCheckboxState = function () {
            var _this = this;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe(function (permissions) {
                var selectedPermissions = permissions.filter(function (per) { return per.isGranted; });
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
            });
        };
        PermissionManagementComponent.prototype.setGrantCheckboxState = function () {
            var selectedAllPermissions = this.permissions.filter(function (per) { return per.isGranted; });
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
        return PermissionManagementComponent;
    }(ng_permissionManagement.PermissionManagementComponent));
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.PermissionManagementComponent.prototype, "providerName", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.PermissionManagementComponent.prototype, "providerKey", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], exports.PermissionManagementComponent.prototype, "hideBadges", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.PermissionManagementComponent.prototype, "visible", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.PermissionManagementComponent.prototype, "visibleChange", void 0);
    exports.PermissionManagementComponent = __decorate([
        core.Component({
            selector: 'ng-alain-permission-management',
            template: "<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n",
            styles: [":host{display:block;padding-top:24px}.main{background-color:#fff;display:flex;overflow:auto;width:100%}.menu{border-right:1px solid #f0f0f0;width:224px}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{border:none;width:100%}.main .content{padding:40px}}"]
        }),
        __metadata("design:paramtypes", [store.Store, core.Renderer2])
    ], exports.PermissionManagementComponent);

    exports.PermissionManagementNgAlainModule = /** @class */ (function () {
        function PermissionManagementNgAlainModule() {
        }
        return PermissionManagementNgAlainModule;
    }());
    exports.PermissionManagementNgAlainModule = __decorate([
        core.NgModule({
            imports: [
                ng_core.CoreModule,
                basic.NgAlainBasicModule,
                ng_permissionManagement.PermissionManagementModule
            ],
            exports: [
                exports.PermissionManagementComponent
            ],
            declarations: [exports.PermissionManagementComponent],
            entryComponents: [exports.PermissionManagementComponent]
        })
    ], exports.PermissionManagementNgAlainModule);

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management-ng-alain.umd.js.map
