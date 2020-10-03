(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ngxs/store'), require('@ng-bootstrap/ng-bootstrap'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.feature-management', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ngxs/store', '@ng-bootstrap/ng-bootstrap', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['feature-management'] = {}), global.i1, global.ng_theme_shared, global.ng.core, global.i2, global.ngBootstrap, global.rxjs.operators));
}(this, (function (exports, i1, ng_theme_shared, i0, i2, ngBootstrap, operators) { 'use strict';

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
                if (Object.prototype.hasOwnProperty.call(b, p))
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    var INPUT_TYPES = {
        numeric: 'number',
        default: 'text',
    };
    var FreeTextInputDirective = /** @class */ (function () {
        function FreeTextInputDirective() {
        }
        Object.defineProperty(FreeTextInputDirective.prototype, "feature", {
            get: function () {
                return this._feature;
            },
            set: function (val) {
                this._feature = val;
                this.setInputType();
            },
            enumerable: false,
            configurable: true
        });
        FreeTextInputDirective.prototype.setInputType = function () {
            var _a, _b, _c, _d;
            var validatorType = (_c = (_b = (_a = this.feature) === null || _a === void 0 ? void 0 : _a.valueType) === null || _b === void 0 ? void 0 : _b.validator) === null || _c === void 0 ? void 0 : _c.name.toLowerCase();
            this.type = (_d = INPUT_TYPES[validatorType]) !== null && _d !== void 0 ? _d : INPUT_TYPES.default;
        };
        return FreeTextInputDirective;
    }());
    FreeTextInputDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'input[abpFeatureManagementFreeText]',
                    exportAs: 'inputAbpFeatureManagementFreeText',
                },] }
    ];
    FreeTextInputDirective.propDecorators = {
        feature: [{ type: i0.Input, args: ['abpFeatureManagementFreeText',] }],
        type: [{ type: i0.HostBinding, args: ['type',] }]
    };

    var FeaturesService = /** @class */ (function () {
        function FeaturesService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'AbpFeatureManagement';
            this.get = function (providerName, providerKey) { return _this.restService.request({
                method: 'GET',
                url: '/api/feature-management/features',
                params: { providerName: providerName, providerKey: providerKey },
            }, { apiName: _this.apiName }); };
            this.update = function (providerName, providerKey, input) { return _this.restService.request({
                method: 'PUT',
                url: '/api/feature-management/features',
                params: { providerName: providerName, providerKey: providerKey },
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return FeaturesService;
    }());
    FeaturesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeaturesService_Factory() { return new FeaturesService(i0.ɵɵinject(i1.RestService)); }, token: FeaturesService, providedIn: "root" });
    FeaturesService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FeaturesService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var ValueTypes;
    (function (ValueTypes) {
        ValueTypes["ToggleStringValueType"] = "ToggleStringValueType";
        ValueTypes["FreeTextStringValueType"] = "FreeTextStringValueType";
        ValueTypes["SelectionStringValueType"] = "SelectionStringValueType";
    })(ValueTypes || (ValueTypes = {}));
    var FeatureManagementComponent = /** @class */ (function () {
        function FeatureManagementComponent(track, service, store) {
            this.track = track;
            this.service = service;
            this.store = store;
            this.groups = [];
            this.valueTypes = ValueTypes;
            this.visibleChange = new i0.EventEmitter();
            this.modalBusy = false;
        }
        Object.defineProperty(FeatureManagementComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (this._visible === value)
                    return;
                this._visible = value;
                this.visibleChange.emit(value);
                if (value)
                    this.openModal();
            },
            enumerable: false,
            configurable: true
        });
        FeatureManagementComponent.prototype.openModal = function () {
            if (!this.providerName) {
                throw new Error('providerName is required.');
            }
            this.getFeatures();
        };
        FeatureManagementComponent.prototype.getFeatures = function () {
            var _this = this;
            this.service.get(this.providerName, this.providerKey).subscribe(function (res) {
                _this.groups = res.groups.map(function (_b) {
                    var name = _b.name, displayName = _b.displayName;
                    return ({ name: name, displayName: displayName });
                });
                _this.selectedGroupDisplayName = _this.groups[0].displayName;
                _this.features = res.groups.reduce(function (acc, val) {
                    var _b;
                    return (Object.assign(Object.assign({}, acc), (_b = {}, _b[val.name] = mapFeatures(val.features, document.body.dir), _b)));
                }, {});
            });
        };
        FeatureManagementComponent.prototype.save = function () {
            var _this = this;
            if (this.modalBusy)
                return;
            var changedFeatures = [];
            Object.keys(this.features).forEach(function (key) {
                _this.features[key].forEach(function (feature) {
                    if (feature.value !== feature.initialValue)
                        changedFeatures.push({ name: feature.name, value: feature.value });
                });
            });
            if (!changedFeatures.length) {
                this.visible = false;
                return;
            }
            this.modalBusy = true;
            this.service
                .update(this.providerName, this.providerKey, { features: changedFeatures })
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.visible = false;
                if (!_this.providerKey) {
                    // to refresh host's features
                    _this.store.dispatch(new i1.GetAppConfiguration());
                }
            });
        };
        FeatureManagementComponent.prototype.onCheckboxClick = function (val, feature) {
            if (val) {
                this.checkToggleAncestors(feature);
            }
            else {
                this.uncheckToggleDescendants(feature);
            }
        };
        FeatureManagementComponent.prototype.uncheckToggleDescendants = function (feature) {
            var _this = this;
            this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(function (node) { return _this.setFeatureValue(node, false); });
        };
        FeatureManagementComponent.prototype.checkToggleAncestors = function (feature) {
            var _this = this;
            this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach(function (node) { return _this.setFeatureValue(node, true); });
        };
        FeatureManagementComponent.prototype.findAllAncestorsOfByType = function (feature, type) {
            var parent = this.findParentByType(feature, type);
            var ancestors = [];
            while (parent) {
                ancestors.push(parent);
                parent = this.findParentByType(parent, type);
            }
            return ancestors;
        };
        FeatureManagementComponent.prototype.findAllDescendantsOfByType = function (feature, type) {
            var descendants = [];
            var queue = [feature];
            while (queue.length) {
                var node = queue.pop();
                var newDescendants = this.findChildrenByType(node, type);
                descendants.push.apply(descendants, __spread(newDescendants));
                queue.push.apply(queue, __spread(newDescendants));
            }
            return descendants;
        };
        FeatureManagementComponent.prototype.findParentByType = function (feature, type) {
            return this.getCurrentGroup().find(function (f) { return f.valueType.name === type && f.name === feature.parentName; });
        };
        FeatureManagementComponent.prototype.findChildrenByType = function (feature, type) {
            return this.getCurrentGroup().filter(function (f) { return f.valueType.name === type && f.parentName === feature.name; });
        };
        FeatureManagementComponent.prototype.getCurrentGroup = function () {
            var _a;
            return (_a = this.features[this.selectedGroupDisplayName]) !== null && _a !== void 0 ? _a : [];
        };
        FeatureManagementComponent.prototype.setFeatureValue = function (feature, val) {
            feature.value = val;
        };
        return FeatureManagementComponent;
    }());
    FeatureManagementComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-feature-management',
                    template: "<abp-modal *ngIf=\"visible\" size=\"lg\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <ul\r\n          ngbNav\r\n          #nav=\"ngbNav\"\r\n          [(activeId)]=\"selectedGroupDisplayName\"\r\n          class=\"nav-pills\"\r\n          orientation=\"vertical\"\r\n        >\r\n          <li\r\n            *ngFor=\"let group of groups; trackBy: track.by('name')\"\r\n            [ngbNavItem]=\"group.displayName\"\r\n          >\r\n            <a ngbNavLink>{{ group.displayName }}</a>\r\n            <ng-template ngbNavContent>\r\n              <h4>{{ selectedGroupDisplayName }}</h4>\r\n              <hr class=\"mt-2 mb-3\" />\r\n\r\n              <div\r\n                class=\"mt-2\"\r\n                *ngFor=\"let feature of features[group.name]; let i = index; trackBy: track.by('id')\"\r\n                [ngStyle]=\"feature.style\"\r\n                [ngSwitch]=\"feature.valueType?.name\"\r\n                (keyup.enter)=\"save()\"\r\n              >\r\n                <ng-container *ngSwitchCase=\"valueTypes.ToggleStringValueType\">\r\n                  <div class=\"custom-checkbox custom-control\">\r\n                    <input\r\n                      class=\"custom-control-input\"\r\n                      type=\"checkbox\"\r\n                      [id]=\"feature.name\"\r\n                      [(ngModel)]=\"feature.value\"\r\n                      (ngModelChange)=\"onCheckboxClick($event, feature)\"\r\n                    />\r\n\r\n                    <label class=\"custom-control-label\" [htmlFor]=\"feature.name\">{{\r\n                      feature.displayName\r\n                    }}</label>\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                    ></ng-container>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"valueTypes.FreeTextStringValueType\">\r\n                  <div class=\"form-group\">\r\n                    <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      type=\"text\"\r\n                      [id]=\"feature.name\"\r\n                      [(ngModel)]=\"feature.value\"\r\n                      [abpFeatureManagementFreeText]=\"feature\"\r\n                    />\r\n\r\n                    <ng-container\r\n                      *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                    ></ng-container>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"valueTypes.SelectionStringValueType\">\r\n                  <ng-container *ngIf=\"feature.valueType.itemSource?.items?.length\">\r\n                    <div class=\"form-group\">\r\n                      <label [htmlFor]=\"feature.name\">{{ feature.displayName }}</label>\r\n                      <select\r\n                        class=\"form-control custom-select\"\r\n                        [id]=\"feature.name\"\r\n                        [(ngModel)]=\"feature.value\"\r\n                      >\r\n                        <option\r\n                          *ngFor=\"\r\n                            let item of feature.valueType.itemSource?.items;\r\n                            trackBy: track.by('value')\r\n                          \"\r\n                          [ngValue]=\"item.value\"\r\n                        >\r\n                          {{\r\n                            item.displayText?.resourceName + '::' + item.displayText?.name\r\n                              | abpLocalization\r\n                          }}</option\r\n                        >\r\n                      </select>\r\n                      <ng-container\r\n                        *ngTemplateOutlet=\"descTmp; context: { $implicit: feature.description }\"\r\n                      ></ng-container>\r\n                    </div>\r\n                  </ng-container>\r\n                </ng-container>\r\n                <ng-container *ngSwitchDefault>{{ feature.displayName }}</ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <ng-template #descTmp let-description>\r\n        <small *ngIf=\"description\" class=\"form-text text-muted\">{{ description }}</small>\r\n      </ng-template>\r\n\r\n      <div class=\"col-md-8\"><div [ngbNavOutlet]=\"nav\"></div></div>\r\n\r\n      <div class=\"mx-3\" *ngIf=\"!groups.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button\r\n      *ngIf=\"groups.length\"\r\n      iconClass=\"fa fa-check\"\r\n      [disabled]=\"modalBusy\"\r\n      (click)=\"save()\"\r\n    >\r\n      {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n    </abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n",
                    exportAs: 'abpFeatureManagement'
                },] }
    ];
    FeatureManagementComponent.ctorParameters = function () { return [
        { type: i1.TrackByService },
        { type: FeaturesService },
        { type: i2.Store }
    ]; };
    FeatureManagementComponent.propDecorators = {
        providerKey: [{ type: i0.Input }],
        providerName: [{ type: i0.Input }],
        visible: [{ type: i0.Input }],
        visibleChange: [{ type: i0.Output }]
    };
    function mapFeatures(features, dir) {
        var margin = "margin-" + (dir === 'rtl' ? 'right' : 'left') + ".px";
        return features.map(function (feature) {
            var _b;
            var _a;
            var value = ((_a = feature.valueType) === null || _a === void 0 ? void 0 : _a.name) === ValueTypes.ToggleStringValueType
                ? (feature.value || '').toLowerCase() === 'true'
                : feature.value;
            return Object.assign(Object.assign({}, feature), { value: value, initialValue: value, style: (_b = {}, _b[margin] = feature.depth * 20, _b) });
        });
    }

    /**
     * @deprecated To be deleted in v4.0.
     */
    var GetFeatures = /** @class */ (function () {
        function GetFeatures(payload) {
            this.payload = payload;
        }
        return GetFeatures;
    }());
    GetFeatures.type = '[FeatureManagement] Get Features';
    /**
     * @deprecated To be deleted in v4.0.
     */
    var UpdateFeatures = /** @class */ (function () {
        function UpdateFeatures(payload) {
            this.payload = payload;
        }
        return UpdateFeatures;
    }());
    UpdateFeatures.type = '[FeatureManagement] Update Features';

    /**
     * @deprecated Use FeaturesService instead. To be deleted in v4.0.
     */
    var FeatureManagementService = /** @class */ (function () {
        function FeatureManagementService(rest, store) {
            this.rest = rest;
            this.store = store;
            this.apiName = 'FeatureManagement';
        }
        FeatureManagementService.prototype.getFeatures = function (params) {
            var request = {
                method: 'GET',
                url: '/api/feature-management/features',
                params: params,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        FeatureManagementService.prototype.updateFeatures = function (_a) {
            var features = _a.features, providerKey = _a.providerKey, providerName = _a.providerName;
            var request = {
                method: 'PUT',
                url: '/api/feature-management/features',
                body: { features: features },
                params: { providerKey: providerKey, providerName: providerName },
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        return FeatureManagementService;
    }());
    FeatureManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: FeatureManagementService, providedIn: "root" });
    FeatureManagementService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    FeatureManagementService.ctorParameters = function () { return [
        { type: i1.RestService },
        { type: i2.Store }
    ]; };

    /**
     * @deprecated To be deleted in v4.0.
     */
    exports.ɵd = /** @class */ (function () {
        function FeatureManagementState(featureManagementService) {
            this.featureManagementService = featureManagementService;
        }
        FeatureManagementState.getFeatures = function (_a) {
            var features = _a.features;
            return features || [];
        };
        FeatureManagementState.prototype.getFeatures = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.featureManagementService.getFeatures(payload).pipe(operators.tap(function (_a) {
                var _b = _a.features, features = _b === void 0 ? [] : _b;
                return patchState({
                    features: features,
                });
            }));
        };
        FeatureManagementState.prototype.updateFeatures = function (_, _a) {
            var payload = _a.payload;
            return this.featureManagementService.updateFeatures(payload);
        };
        return FeatureManagementState;
    }());
    exports.ɵd.decorators = [
        { type: i0.Injectable }
    ];
    exports.ɵd.ctorParameters = function () { return [
        { type: FeatureManagementService }
    ]; };
    __decorate([
        i2.Action(GetFeatures),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetFeatures]),
        __metadata("design:returntype", void 0)
    ], exports.ɵd.prototype, "getFeatures", null);
    __decorate([
        i2.Action(UpdateFeatures),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateFeatures]),
        __metadata("design:returntype", void 0)
    ], exports.ɵd.prototype, "updateFeatures", null);
    __decorate([
        i2.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵd, "getFeatures", null);
    exports.ɵd = __decorate([
        i2.State({
            name: 'FeatureManagementState',
            defaults: { features: {} },
        }),
        __metadata("design:paramtypes", [FeatureManagementService])
    ], exports.ɵd);

    var exported = [FeatureManagementComponent, FreeTextInputDirective];
    var FeatureManagementModule = /** @class */ (function () {
        function FeatureManagementModule() {
        }
        return FeatureManagementModule;
    }());
    FeatureManagementModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: __spread(exported),
                    imports: [
                        i1.CoreModule,
                        ng_theme_shared.ThemeSharedModule,
                        ngBootstrap.NgbNavModule,
                        i2.NgxsModule.forFeature([exports.ɵd]),
                    ],
                    exports: __spread(exported),
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureManagementComponent = FeatureManagementComponent;
    exports.FeatureManagementModule = FeatureManagementModule;
    exports.FeaturesService = FeaturesService;
    exports.ɵa = FeatureManagementComponent;
    exports.ɵb = FeaturesService;
    exports.ɵc = FreeTextInputDirective;
    exports.ɵe = FeatureManagementService;
    exports.ɵf = GetFeatures;
    exports.ɵg = UpdateFeatures;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.feature-management.umd.js.map
