(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.core'), require('@angular/router'), require('ang-jsoneditor'), require('lodash'), require('@ngxs/store'), require('@fs/theme.core'), require('rxjs/operators'), require('rxjs'), require('@angular/forms'), require('@fs/ng-alain/core'), require('ng-zorro-antd'), require('@abp/ng.setting-management')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/ng-alain', ['exports', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.core', '@angular/router', 'ang-jsoneditor', 'lodash', '@ngxs/store', '@fs/theme.core', 'rxjs/operators', 'rxjs', '@angular/forms', '@fs/ng-alain/core', 'ng-zorro-antd', '@abp/ng.setting-management'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management']['ng-alain'] = {}), global.ng.core, global.basic, global.ng_core, global.ng.router, global.angJsoneditor, global._, global.store, global.theme_core, global.rxjs.operators, global.rxjs, global.ng.forms, global.core$1, global.ngZorroAntd, global.ng_settingManagement));
}(this, (function (exports, core, basic, ng_core, router, angJsoneditor, _, store, theme_core, operators, rxjs, forms, core$1, ngZorroAntd, ng_settingManagement) { 'use strict';

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

    exports.ModalComponent = /** @class */ (function () {
        function ModalComponent(themeCoreStateService) {
            this.themeCoreStateService = themeCoreStateService;
            this.providerName = undefined;
            this.providerKey = undefined;
            this.rawData = null;
            this._visible = false;
            this.visibleChange = new core.EventEmitter();
            this._isEdited = false;
            this.isEditedChange = new core.EventEmitter();
            this.settingGroups = null;
            this.settingValue = null;
            this.loading = false;
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(ModalComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (value === this._visible)
                    return;
                this._visible = (value) ? true : false;
                if (value) {
                    this.visibleChange.emit(value);
                }
                else {
                    this.rawData = null;
                    this.settingValue = null;
                    this.loading = false;
                    this.visibleChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "isEdited", {
            get: function () {
                return this._isEdited;
            },
            set: function (value) {
                if (value === this._isEdited)
                    return;
                this._isEdited = (value) ? true : false;
                if (value) {
                    this.isEditedChange.emit(value);
                }
                else {
                    this.isEditedChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        ModalComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.settingdata$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (x) {
                if (x) {
                    _this.loadSettingGroups(x);
                }
            });
        };
        ModalComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        ModalComponent.prototype.ngOnChanges = function () {
            if (this.visible && this.rawData) {
                this.loadSettingGroups(this.themeCoreStateService.getSettingsGroups());
                this.loadData();
            }
        };
        ModalComponent.prototype.loadSettingGroups = function (data) {
            this.settingGroups = null;
            var settingGroup = _.uniq(data);
            this.settingGroups = settingGroup.filter(function (x, i, arr) {
                return arr.filter(function (y, j) { return i != j && _.startsWith(x, y + "."); }).length == 0;
            });
        };
        ModalComponent.prototype.loadData = function () {
            var _this = this;
            this.loading = true;
            this.settingValue = [];
            var data = this.rawData.settingValues;
            this.rawData.availableSettingsDefinitions.forEach(function (x) {
                var index = _.findIndex(data, function (o) { return o.name === x.name; });
                if (index != -1) {
                    _this.settingValue.push({
                        name: x.name,
                        value: data[index].value,
                        displayName: x.displayName,
                        properties: x.properties
                    });
                }
                else {
                    _this.settingValue.push({
                        name: x.name,
                        value: x.defaultValue,
                        displayName: x.displayName,
                        properties: x.properties
                    });
                }
            });
            this.loading = false;
        };
        ModalComponent.prototype.close = function () {
            this.visible = false;
        };
        return ModalComponent;
    }());
    __decorate([
        store.Select(theme_core.ThemeCoreState.getSettingsGroups),
        __metadata("design:type", rxjs.Observable)
    ], exports.ModalComponent.prototype, "settingdata$", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.ModalComponent.prototype, "providerName", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.ModalComponent.prototype, "providerKey", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", theme_core.CodesWithSettingsOutput)
    ], exports.ModalComponent.prototype, "rawData", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.ModalComponent.prototype, "visible", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.ModalComponent.prototype, "visibleChange", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.ModalComponent.prototype, "isEdited", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.ModalComponent.prototype, "isEditedChange", void 0);
    exports.ModalComponent = __decorate([
        core.Component({
            selector: 'fs-ng-alain-setting-management',
            template: "<nz-modal\r\n    [(nzVisible)]=\"visible\"\r\n    [nzTitle]=\"tplTitle\"\r\n    [nzContent]=\"tplContent\"\r\n    [nzFooter]=\"tplFooter\"\r\n    (nzOnCancel)=\"close()\"\r\n    [nzWidth]=\"760\"\r\n>\r\n    <ng-template #tplTitle>\r\n        <span>SettingManagement</span>\r\n    </ng-template>\r\n    \r\n    <ng-template #tplContent>\r\n        <fs-ng-alain-setting-management-main\r\n            [providerName]=\"providerName\"\r\n            [providerKey]=\"providerKey\"\r\n            [settingGroups]=\"settingGroups\"\r\n            [(visible)]=\"visible\"\r\n            [(isEdited)]=\"isEdited\"\r\n            [rawData]=\"settingValue\">\r\n        </fs-ng-alain-setting-management-main>\r\n    </ng-template>\r\n    \r\n    <ng-template #tplFooter>\r\n        <button nz-button (click)=\"close()\" [nzLoading]=\"loading\">\u96E2\u958B</button>\r\n    </ng-template>\r\n</nz-modal>",
            styles: [".textColor{color:red}"]
        }),
        __metadata("design:paramtypes", [theme_core.ThemeCoreStateService])
    ], exports.ModalComponent);

    exports.MainComponent = /** @class */ (function () {
        function MainComponent(store) {
            this.store = store;
            this.providerName = undefined;
            this.providerKey = undefined;
            this.rawData = null;
            this.settingGroups = null;
            this._visible = false;
            this.visibleChange = new core.EventEmitter();
            this._isEdited = false;
            this.isEditedChange = new core.EventEmitter();
            this.editedData = {};
            this.settingValue = null;
            this.loading = false;
        }
        Object.defineProperty(MainComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (value === this._visible)
                    return;
                this._visible = (value) ? true : false;
                if (value) {
                    this.visibleChange.emit(value);
                }
                else {
                    this.rawData = null;
                    this.editedData = {};
                    this.settingValue = null;
                    this.loading = false;
                    this.visibleChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MainComponent.prototype, "isEdited", {
            get: function () {
                return this._isEdited;
            },
            set: function (value) {
                if (value === this._isEdited)
                    return;
                this._isEdited = (value) ? true : false;
                if (value) {
                    this.isEditedChange.emit(value);
                }
                else {
                    this.isEditedChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        MainComponent.prototype.ngOnInit = function () { };
        MainComponent.prototype.ngOnChanges = function () {
            if (this.visible && this.rawData) {
                this.loadData();
            }
        };
        MainComponent.prototype.loadData = function () {
            var _this = this;
            this.loading = true;
            this.editedData = {};
            this.settingValue = {};
            this.settingGroups.forEach(function (x, i) {
                var value = _this.rawData.filter(function (y) { return _.startsWith(y.name, x); });
                if (value.length > 0) {
                    _this.settingValue[x] = {
                        group: x,
                        settingData: value
                    };
                }
                else {
                    _this.settingGroups[i] = null;
                }
            });
            this.settingGroups = this.settingGroups.filter(function (z) { return z != null; });
            this.loading = false;
        };
        MainComponent.prototype.setTextColor = function (item) {
            if (this.editedData === {})
                return false;
            for (var key in this.editedData) {
                if (_.startsWith(key, item)) {
                    return true;
                }
            }
            return false;
        };
        MainComponent.prototype.ngOnDestroy = function () { };
        return MainComponent;
    }());
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.MainComponent.prototype, "providerName", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.MainComponent.prototype, "providerKey", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.MainComponent.prototype, "rawData", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.MainComponent.prototype, "settingGroups", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.MainComponent.prototype, "visible", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.MainComponent.prototype, "visibleChange", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.MainComponent.prototype, "isEdited", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.MainComponent.prototype, "isEditedChange", void 0);
    exports.MainComponent = __decorate([
        core.Component({
            selector: 'fs-ng-alain-setting-management-main',
            template: "<nz-spin [nzSpinning]=\"loading\">\r\n    <nz-tabset>\r\n        <nz-tab\r\n            *ngFor=\"let item of settingGroups\" nzPlacement=\"right\"\r\n            [nzTitle]=\"titleTemplate\">\r\n            <ng-template #titleTemplate><span [class.textColor]=\"setTextColor(item)\">{{ 'Themes::'+item | abpLocalization }}</span></ng-template>\r\n            <nz-page-header-content *ngIf=\"visible && settingValue\">\r\n                    <fs-ng-alain-setting-management-detail\r\n                        [providerName]=\"providerName\"\r\n                        [providerKey]=\"providerKey\"\r\n                        [rawData]=\"settingValue[item]\"\r\n                        [(visible)]=\"visible\"\r\n                        [(isEdited)]=\"isEdited\"\r\n                        [(editedData)]=\"editedData\">\r\n                    </fs-ng-alain-setting-management-detail>\r\n            </nz-page-header-content>\r\n        </nz-tab>\r\n    </nz-tabset>\r\n</nz-spin>",
            styles: [".textColor{color:red}"]
        }),
        __metadata("design:paramtypes", [store.Store])
    ], exports.MainComponent);

    exports.DetailComponent = /** @class */ (function () {
        function DetailComponent(store, fb, changeDetectorRef, notifyService, nzContextMenuService) {
            this.store = store;
            this.fb = fb;
            this.changeDetectorRef = changeDetectorRef;
            this.notifyService = notifyService;
            this.nzContextMenuService = nzContextMenuService;
            this.providerName = undefined;
            this.providerKey = undefined;
            this.rawData = null;
            this._visible = false;
            this.visibleChange = new core.EventEmitter();
            this._isEdited = false;
            this.isEditedChange = new core.EventEmitter();
            this._editedData = {};
            this.editedDataChange = new core.EventEmitter();
            this.treeData = [];
            this.loading = false;
            this.isExpanded = true;
            this.seletedNode = "";
        }
        Object.defineProperty(DetailComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (value === this._visible)
                    return;
                this._visible = (value) ? true : false;
                if (value) {
                    this.visibleChange.emit(value);
                }
                else {
                    this.rawData = null;
                    this.treeData = [];
                    this.editedData = {};
                    this.loading = false;
                    this.isExpanded = true;
                    this.seletedNode = "";
                    this.visibleChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DetailComponent.prototype, "isEdited", {
            get: function () {
                return this._isEdited;
            },
            set: function (value) {
                if (value === this._isEdited)
                    return;
                this._isEdited = (value) ? true : false;
                if (value) {
                    this.isEditedChange.emit(value);
                }
                else {
                    this.isEditedChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DetailComponent.prototype, "editedData", {
            get: function () {
                return this._editedData;
            },
            set: function (value) {
                if (value === this._editedData)
                    return;
                if (value != {}) {
                    this._editedData = value;
                    this.editedDataChange.emit(value);
                }
                else {
                    this._editedData = {};
                    this.editedDataChange.emit({});
                }
            },
            enumerable: true,
            configurable: true
        });
        DetailComponent.prototype.ngOnInit = function () {
        };
        DetailComponent.prototype.ngOnChanges = function () {
            if (this.visible && this.rawData) {
                this.form = new forms.FormGroup({});
                this.loading = true;
                this.treeData = this.loadData(this.rawData);
                this.buildForm();
                this.init();
                this.treeStatusChange('isExpanded', this.isExpanded);
            }
        };
        DetailComponent.prototype.init = function () {
            this.changeDetectorRef.detectChanges();
            this.fsNgAlainTreeComponent.init();
        };
        DetailComponent.prototype.loadData = function (data) {
            var _this = this;
            var result = [];
            var len = data.group.split('.').length;
            data.settingData.forEach(function (x) {
                result = result.concat(_this.splitName(len, x));
            });
            return _.uniqBy(result, 'id');
        };
        DetailComponent.prototype.splitName = function (len, data) {
            var result = [];
            var code = _.drop(_.dropRight(data.name.split('.')), len);
            code.forEach(function (y, i) {
                result.push({
                    id: (i === 0) ? y : result[i - 1].id + "." + y,
                    parentId: (i === 0) ? null : result[i - 1].id,
                    displayName: (i === 0) ? y : result[i - 1].displayName + "." + y
                });
            });
            data.id = data.name;
            data.parentId = (code.length > 0) ? _.last(result).id : null;
            result.push(data);
            return result;
        };
        DetailComponent.prototype.buildForm = function () {
            var _this = this;
            var value = {};
            this.rawData.settingData.forEach(function (element, index) {
                if (element.value === null) {
                    element.value = '';
                    _this.rawData.settingData[index].value = '';
                }
                else {
                    try {
                        element.value = JSON.parse(_.toLower(element.value));
                        switch (typeof (element.value)) {
                            case 'boolean':
                                _this.rawData.settingData[index].properties.Type = 'Boolean';
                                break;
                            case 'number':
                                _this.rawData.settingData[index].properties.Type = 'Decimal';
                                break;
                        }
                    }
                    catch (e) {
                        if (!element.properties.Type) {
                            _this.rawData.settingData[index].properties.Type = 'String';
                        }
                        else if (element.properties.Type === "Boolean") {
                            element.value = false;
                        }
                    }
                }
                value[element.name] = [element.value, []];
            });
            this.form = this.fb.group(value);
            this.form.valueChanges.subscribe(function (x) {
                var key = _this.seletedNode;
                var rawData = _.head(_this.rawData.settingData.filter(function (x) { return x.name === key; }));
                rawData.value = (typeof (rawData.value) != "string") ? JSON.stringify(rawData.value) : rawData.value;
                var data = (typeof (x[key]) != "string") ? JSON.stringify(x[key]) : x[key];
                if (rawData.value !== data) {
                    _this.editedData[key] = data;
                }
                else {
                    delete _this.editedData[key];
                }
                _this.changeDetectorRef.detectChanges();
            });
            this.loading = false;
        };
        DetailComponent.prototype.save = function () {
            var _this = this;
            this.loading = true;
            var input = {
                providerName: this.providerName,
                providerKey: this.providerKey,
                forceToSet: false,
                data: this.editedData
            };
            this.store.dispatch(new theme_core.UpdateSettingsByProviderName(input))
                .pipe(operators.finalize(function () { return _this.loading = false; }))
                .subscribe(function (x) {
                if (_this.providerKey) {
                    _this.isEdited = true;
                    _this.visible = false;
                }
                _this.notifyService.success("資料更新成功");
            }, function (error) {
                _this.notifyService.error("資料更新失敗");
            });
        };
        DetailComponent.prototype.clickItem = function (node) {
            this.nzContextMenuService.close();
            if (node.isLeaf) {
                if (this.seletedNode === node.key) {
                    this.seletedNode = "";
                }
                else {
                    this.seletedNode = node.key;
                }
            }
        };
        DetailComponent.prototype.searchColor = function (node) {
            if (!this.fsNgAlainTreeComponent || !this.fsNgAlainTreeComponent.searchValue)
                return node.title;
            var regStr = "";
            var extraText = "~!@#$%^&*()_+=-|\\?/.,<>'\";:[]{}";
            var searchArr = this.fsNgAlainTreeComponent.searchValue.split("");
            searchArr.forEach(function (x) {
                if (extraText.includes(x)) {
                    regStr += "\\" + x;
                }
                else {
                    regStr += x;
                }
            });
            var reg = new RegExp(regStr);
            var addClass = "<span class='font-highlight'>" + this.fsNgAlainTreeComponent.searchValue + "</span>";
            var newTitle = node.title.replace(reg, addClass);
            return newTitle;
        };
        DetailComponent.prototype.treeStatusChange = function (type, status) {
            if (status === void 0) { status = false; }
            this.isExpanded = status;
            this.fsNgAlainTreeComponent.treeStatusChange(type, status);
        };
        DetailComponent.prototype.reLoadData = function () {
            this.editedData = {};
            this.buildForm();
            this.init();
            this.treeStatusChange('isExpanded', this.isExpanded);
        };
        return DetailComponent;
    }());
    __decorate([
        core.ViewChild(basic.FsNgAlainTreeComponent, { static: false }),
        __metadata("design:type", basic.FsNgAlainTreeComponent)
    ], exports.DetailComponent.prototype, "fsNgAlainTreeComponent", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.DetailComponent.prototype, "providerName", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.DetailComponent.prototype, "providerKey", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object)
    ], exports.DetailComponent.prototype, "rawData", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.DetailComponent.prototype, "visible", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.DetailComponent.prototype, "visibleChange", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.DetailComponent.prototype, "isEdited", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.DetailComponent.prototype, "isEditedChange", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], exports.DetailComponent.prototype, "editedData", null);
    __decorate([
        core.Output(),
        __metadata("design:type", Object)
    ], exports.DetailComponent.prototype, "editedDataChange", void 0);
    exports.DetailComponent = __decorate([
        core.Component({
            selector: 'fs-ng-alain-setting-management-detail',
            template: "<nz-row>\r\n  <nz-col>\r\n    <button nzType=\"primary\" nz-button\r\n      (click)=\"treeStatusChange('isExpanded', !isExpanded)\">{{ (isExpanded) ? '\u5168\u90E8\u6536\u5408' : '\u5168\u90E8\u5C55\u958B' }}</button>\r\n    <button nzType=\"primary\" nz-button (click)=\"save()\" *ngIf=\"providerName !== 'D' && providerName !== 'C'\">\u5132\u5B58\u8B8A\u66F4</button>\r\n    <button nzType=\"danger\" nz-button (click)=\"reLoadData()\">\u53D6\u6D88\u8B8A\u66F4</button>\r\n  </nz-col>\r\n</nz-row>\r\n<div class=\"my-md\"></div>\r\n<nz-spin [nzSpinning]=\"loading\">\r\n  <div style=\"background-color:#FFF\">\r\n    <fs-ng-alain-tree\r\n      [tree]=\"treeData\"\r\n      [treeItem]=\"treeData\"\r\n      [showCountType]=\"1\"\r\n      [nzDefaultExpandAll]=\"isExpanded\"\r\n      [nzCheckable]=\"false\"\r\n      [showCheckAll]=\"false\"\r\n      [leafNodes]=\"true\"\r\n      [nzDraggable]=\"false\"\r\n      [nzShowLine]=\"true\"\r\n      [nzDefaultSearch]=\"true\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\">\r\n    </fs-ng-alain-tree>\r\n  </div>\r\n</nz-spin>\r\n<nz-back-top></nz-back-top>\r\n\r\n<ng-template #nzTreeTemplate let-node>\r\n  <span\r\n    class=\"custom-node\"\r\n    [class.node-active]=\"seletedNode == node.key\"\r\n    [class.textColor]=\"editedData[node.key] != undefined\"\r\n    (click)=\"clickItem(node)\"\r\n    [innerHtml]=\"searchColor(node)\">\r\n  </span>\r\n  <br />\r\n  <div *ngIf=\"seletedNode == node.key && node.isLeaf\">\r\n    <div [formGroup]=\"form\" style=\"margin: 1em 0px\">\r\n      <nz-form-control nzExtra=\"SettingName\uFF1A{{ node.origin.name }}\">\r\n        <ng-container [ngSwitch]=\"node.origin.properties.Type\">\r\n          <ng-container *ngSwitchDefault>\r\n            <fs-ng-alain-json-editor [form]=\"form\" [data]=\"node.origin.id\"></fs-ng-alain-json-editor>\r\n          </ng-container>\r\n          <nz-input-number *ngSwitchCase=\"'Int16'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Int32'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Int64'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\" [nzStep]=\"1\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Float'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\">\r\n          </nz-input-number>\r\n          <nz-input-number *ngSwitchCase=\"'Decimal'\" style=\"width: 100%;\" [formControlName]=\"node.origin.id\">\r\n          </nz-input-number>\r\n          <label nz-checkbox *ngSwitchCase=\"'Boolean'\" [formControlName]=\"node.origin.id\"></label>\r\n          <input *ngSwitchCase=\"'String'\" nz-input style=\"width: 100%;\" nzSize=\"default\"\r\n            [formControlName]=\"node.origin.id\" />\r\n        </ng-container>\r\n      </nz-form-control>\r\n    </div>\r\n  </div>\r\n</ng-template>",
            styles: [".custom-node{background:#fff;cursor:pointer;display:inline-block;height:24px;transition:all .3s;width:100%}.custom-node:hover{background:#e6f7ff}.node-active{background:#bae7ff;transition:all .3s}.node-active:hover{background:#bae7ff!important}.textColor{color:red}"]
        }),
        __metadata("design:paramtypes", [store.Store,
            forms.FormBuilder,
            core.ChangeDetectorRef,
            core$1.NotifyService,
            ngZorroAntd.NzContextMenuService])
    ], exports.DetailComponent);

    exports.ɵa = /** @class */ (function () {
        function FsNgAlainJsonEditorComponent() {
            this.editorOptions = new angJsoneditor.JsonEditorOptions();
            this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
        }
        FsNgAlainJsonEditorComponent.prototype.ngOnInit = function () {
        };
        return FsNgAlainJsonEditorComponent;
    }());
    __decorate([
        core.Input(),
        __metadata("design:type", forms.FormGroup)
    ], exports.ɵa.prototype, "form", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.ɵa.prototype, "data", void 0);
    __decorate([
        core.ViewChild(angJsoneditor.JsonEditorComponent, { static: true }),
        __metadata("design:type", angJsoneditor.JsonEditorComponent)
    ], exports.ɵa.prototype, "editor", void 0);
    exports.ɵa = __decorate([
        core.Component({
            selector: 'fs-ng-alain-json-editor',
            template: "<div [formGroup]=\"form\">\r\n    <json-editor #editor [options]=\"editorOptions\" [formControlName]=\"data\"></json-editor>\r\n</div>"
        }),
        __metadata("design:paramtypes", [])
    ], exports.ɵa);

    exports.SettingManagementComponent = /** @class */ (function (_super) {
        __extends(SettingManagementComponent, _super);
        function SettingManagementComponent(_store, _settingTabs) {
            var _this = _super.call(this, _store, _settingTabs) || this;
            _this._store = _store;
            _this._settingTabs = _settingTabs;
            return _this;
        }
        return SettingManagementComponent;
    }(ng_settingManagement.SettingManagementComponent));
    exports.SettingManagementComponent = __decorate([
        core.Component({
            selector: 'fs-setting-management',
            template: "<fs-page-bar></fs-page-bar>\r\n\r\n<nz-row nzGutter=\"16\">\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"5\" style=\"padding-bottom: 10px;\">\r\n        <ul nz-menu nzMode=\"inline\">\r\n            <ul>\r\n                <li nz-menu-item nz-popover *ngFor=\"let setting of settings\" (click)=\"selected = setting\" [abpPermission]=\"setting.requiredPolicy\">\r\n                    {{ setting.name | abpLocalization }}\r\n                </li>\r\n            </ul>\r\n        </ul>\r\n    </nz-col>\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"19\" *ngIf=\"settings.length\">\r\n        <ng-container *ngComponentOutlet=\"selected.component\"></ng-container>\r\n    </nz-col>\r\n</nz-row>\r\n  ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [store.Store,
            ng_core.SettingTabsService])
    ], exports.SettingManagementComponent);

    exports.MySettingsComponent = /** @class */ (function () {
        function MySettingsComponent(configStateService) {
            this.configStateService = configStateService;
            this.settings = {};
            this.keys = [];
        }
        MySettingsComponent.prototype.ngOnInit = function () {
            this.settings = this.configStateService.getSettings();
            this.keys = Object.keys(this.settings);
        };
        return MySettingsComponent;
    }());
    exports.MySettingsComponent = __decorate([
        core.Component({
            selector: 'app-my-settings',
            template: "<nz-table #basicTable [nzData]=\"keys\">\r\n    <thead>\r\n      <tr>\r\n        <th>Key</th>\r\n        <th>Value</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data }}</td>\r\n        <td>{{ settings[data] }}</td>\r\n      </tr>\r\n    </tbody>\r\n</nz-table>\r\n  \r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ng_core.ConfigStateService])
    ], exports.MySettingsComponent);

    exports.MySettings2Component = /** @class */ (function () {
        function MySettings2Component(configStateService) {
            this.configStateService = configStateService;
            this.settings = {};
            this.keys = [];
        }
        MySettings2Component.prototype.ngOnInit = function () {
            this.settings = this.configStateService.getSettings();
            this.keys = Object.keys(this.settings);
        };
        return MySettings2Component;
    }());
    exports.MySettings2Component = __decorate([
        core.Component({
            selector: 'app-my-settings2',
            template: "<nz-table #basicTable [nzData]=\"keys\">\r\n    <thead>\r\n      <tr>\r\n        <th>Key</th>\r\n        <th>Value</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let data of basicTable.data\">\r\n        <td>{{ data }}</td>\r\n        <td>{{ settings[data] }}</td>\r\n      </tr>\r\n    </tbody>\r\n</nz-table>\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ng_core.ConfigStateService])
    ], exports.MySettings2Component);

    var COMPONENT = [
        exports.ModalComponent, exports.MainComponent, exports.DetailComponent, exports.ɵa, exports.SettingManagementComponent, exports.MySettingsComponent, exports.MySettings2Component
    ];
    exports.SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    exports.SharedModule = __decorate([
        core.NgModule({
            declarations: __spread(COMPONENT),
            imports: [
                basic.NgAlainBasicModule,
                angJsoneditor.NgJsonEditorModule
            ],
            exports: __spread([
                basic.NgAlainBasicModule
            ], COMPONENT)
        })
    ], exports.SharedModule);

    exports.ɵe = /** @class */ (function () {
        function MainComponent(store, notifyService, themeCoreStateService) {
            this.store = store;
            this.notifyService = notifyService;
            this.themeCoreStateService = themeCoreStateService;
            this.providerNameList = [
                {
                    tag: "D",
                    displayName: "DefaultValue"
                },
                {
                    tag: "C",
                    displayName: "Configuration"
                },
                {
                    tag: "G",
                    displayName: "Global"
                },
                {
                    tag: "T",
                    displayName: "Tenant"
                },
                {
                    tag: "U",
                    displayName: "User"
                }
            ];
            this.settingGroups = null;
            this.selectedSettingData = null;
            this.loading = false;
            this.visible = false;
            this.providerName = null;
            this.providerKey = null;
            this.destroy$ = new rxjs.Subject();
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.settingdata$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (x) {
                if (x && _this.visible && _this.selectedSettingData) {
                    _this.selectedSettingData = x.map(function (y) {
                        return {
                            name: y.name,
                            value: y.value,
                            displayName: y.displayName,
                            properties: y.properties
                        };
                    });
                }
            });
            this.settingGroupdata$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (x) {
                _this.settingGroups = null;
                if (x) {
                    var settingGroup = _.uniq(x);
                    _this.settingGroups = settingGroup.filter(function (x, i, arr) {
                        return arr.filter(function (y, j) { return i != j && _.startsWith(x, y + "."); }).length == 0;
                    });
                }
            });
        };
        MainComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        MainComponent.prototype.editManageAction = function (item) {
            var _this = this;
            this.loading = true;
            var input = {
                providerName: item,
                providerKey: undefined
            };
            this.store.dispatch(new theme_core.GetSettingByNameAndKey(input))
                .pipe(operators.finalize(function () { return _this.loading = false; }))
                .subscribe(function () {
                _this.setting(true, input);
            }, function (error) {
                _this.notifyService.error("查詢失敗");
            });
        };
        MainComponent.prototype.setting = function (visible, provider) {
            this.visible = visible;
            this.providerName = provider.providerName;
            this.providerKey = provider.providerKey;
            var data = this.themeCoreStateService.getSettingsByProviderName();
            this.selectedSettingData = data.map(function (x) {
                return {
                    name: x.name,
                    value: x.value,
                    displayName: x.displayName,
                    properties: x.properties
                };
            });
        };
        return MainComponent;
    }());
    __decorate([
        store.Select(theme_core.ThemeCoreState.getSettingsByProviderName),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵe.prototype, "settingdata$", void 0);
    __decorate([
        store.Select(theme_core.ThemeCoreState.getSettingsGroups),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵe.prototype, "settingGroupdata$", void 0);
    exports.ɵe = __decorate([
        core.Component({
            selector: 'fs-main',
            template: "<nz-row nzGutter=\"16\">\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"5\" style=\"padding-bottom: 10px;\">\r\n        <ul nz-menu nzMode=\"inline\">\r\n            <ul>\r\n                <li nz-menu-item nz-popover *ngFor=\"let item of providerNameList\" (click)=\"editManageAction(item.tag)\">\r\n                    <nz-tag [nzColor]=\"'green'\">{{ item.tag }}</nz-tag>\r\n                    {{ item.displayName }}\r\n                </li>\r\n            </ul>\r\n        </ul>\r\n    </nz-col>\r\n    <nz-col [nzLg]=\"24\" [nzXl]=\"19\" *ngIf=\"selectedSettingData\">\r\n        <fs-ng-alain-setting-management-main [providerName]=\"providerName\" [providerKey]=\"providerKey\" [settingGroups]=\"settingGroups\" [(visible)]=\"visible\" [rawData]=\"selectedSettingData\"></fs-ng-alain-setting-management-main>\r\n    </nz-col>\r\n</nz-row>\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [store.Store,
            core$1.NotifyService,
            theme_core.ThemeCoreStateService])
    ], exports.ɵe);

    exports.ɵd = /** @class */ (function () {
        function LayoutComponent() {
        }
        LayoutComponent.prototype.ngOnInit = function () {
        };
        return LayoutComponent;
    }());
    exports.ɵd = __decorate([
        core.Component({
            selector: 'fs-layout',
            template: "<fs-page-bar></fs-page-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], exports.ɵd);

    var routes = [
        {
            path: '',
            component: exports.ɵd,
            children: [
                {
                    path: '',
                    component: exports.ɵe
                }
            ],
        }
    ];
    exports.ɵf = /** @class */ (function () {
        function SettingsRoutingModule() {
        }
        return SettingsRoutingModule;
    }());
    exports.ɵf = __decorate([
        core.NgModule({
            imports: [router.RouterModule.forChild(routes)],
            exports: [router.RouterModule]
        })
    ], exports.ɵf);

    var SettingsModule_1;
    exports.ɵc = SettingsModule_1 = /** @class */ (function () {
        function SettingsModule() {
        }
        SettingsModule.forChild = function () {
            return {
                ngModule: SettingsModule_1,
                providers: [],
            };
        };
        SettingsModule.forLazy = function () {
            return new ng_core.LazyModuleFactory(SettingsModule_1.forChild());
        };
        SettingsModule.forEarly = function () {
            return new ng_core.LazyModuleFactory(SettingsModule_1.forChild());
        };
        return SettingsModule;
    }());
    exports.ɵc = SettingsModule_1 = __decorate([
        core.NgModule({
            declarations: [exports.ɵd, exports.ɵe],
            imports: [
                exports.SharedModule,
                exports.ɵf
            ]
        })
    ], exports.ɵc);

    var ɵ0 = exports.ɵc.forEarly;
    var routes$1 = [
        {
            path: '',
            component: ng_core.DynamicLayoutComponent,
            canActivate: [ng_core.AuthGuard, ng_core.PermissionGuard],
            children: [
                {
                    path: 'settings',
                    loadChildren: ɵ0
                },
            ],
        }
    ];
    // @dynamic
    exports.ɵb = /** @class */ (function () {
        function SettingManagementNgAlainRoutingModule() {
        }
        return SettingManagementNgAlainRoutingModule;
    }());
    exports.ɵb = __decorate([
        core.NgModule({
            imports: [router.RouterModule.forChild(routes$1)],
            exports: [router.RouterModule],
        })
    ], exports.ɵb);

    var SettingManagementNgAlainModule_1;
    exports.SettingManagementNgAlainModule = SettingManagementNgAlainModule_1 = /** @class */ (function () {
        function SettingManagementNgAlainModule() {
        }
        SettingManagementNgAlainModule.forChild = function () {
            return {
                ngModule: SettingManagementNgAlainModule_1,
                providers: [],
            };
        };
        SettingManagementNgAlainModule.forLazy = function () {
            return new ng_core.LazyModuleFactory(SettingManagementNgAlainModule_1.forChild());
        };
        return SettingManagementNgAlainModule;
    }());
    exports.SettingManagementNgAlainModule = SettingManagementNgAlainModule_1 = __decorate([
        core.NgModule({
            imports: [
                exports.SharedModule,
                ng_core.CoreModule,
                basic.NgAlainBasicModule,
                ng_settingManagement.SettingManagementModule,
                exports.ɵb
            ],
            exports: [
                exports.SharedModule,
            ],
        })
    ], exports.SettingManagementNgAlainModule);

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-ng-alain.umd.js.map
