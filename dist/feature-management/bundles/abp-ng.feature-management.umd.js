(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ngxs/store'), require('rxjs'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.feature-management', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ngxs/store', 'rxjs', 'rxjs/operators', '@angular/forms'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['feature-management'] = {}), global.i1, global.ng_theme_shared, global.ng.core, global.i2, global.rxjs, global.rxjs.operators, global.ng.forms));
}(this, (function (exports, i1, ng_theme_shared, i0, i2, rxjs, operators, forms) { 'use strict';

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

    var GetFeatures = /** @class */ (function () {
        function GetFeatures(payload) {
            this.payload = payload;
        }
        return GetFeatures;
    }());
    GetFeatures.type = '[FeatureManagement] Get Features';
    var UpdateFeatures = /** @class */ (function () {
        function UpdateFeatures(payload) {
            this.payload = payload;
        }
        return UpdateFeatures;
    }());
    UpdateFeatures.type = '[FeatureManagement] Update Features';

    exports.ɵd = /** @class */ (function () {
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
    exports.ɵd.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new exports.ɵd(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: exports.ɵd, providedIn: "root" });
    exports.ɵd = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1.RestService, i2.Store])
    ], exports.ɵd);

    exports.ɵc = /** @class */ (function () {
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
                var features = _a.features;
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
    __decorate([
        i2.Action(GetFeatures),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetFeatures]),
        __metadata("design:returntype", void 0)
    ], exports.ɵc.prototype, "getFeatures", null);
    __decorate([
        i2.Action(UpdateFeatures),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateFeatures]),
        __metadata("design:returntype", void 0)
    ], exports.ɵc.prototype, "updateFeatures", null);
    __decorate([
        i2.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵc, "getFeatures", null);
    exports.ɵc = __decorate([
        i2.State({
            name: 'FeatureManagementState',
            defaults: { features: {} },
        }),
        i0.Injectable(),
        __metadata("design:paramtypes", [exports.ɵd])
    ], exports.ɵc);

    exports.ɵa = /** @class */ (function () {
        function FeatureManagementComponent(store) {
            this.store = store;
            this.visibleChange = new i0.EventEmitter();
            this.modalBusy = false;
        }
        Object.defineProperty(FeatureManagementComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                this._visible = value;
                this.visibleChange.emit(value);
                if (value)
                    this.openModal();
            },
            enumerable: true,
            configurable: true
        });
        FeatureManagementComponent.prototype.openModal = function () {
            if (!this.providerKey || !this.providerName) {
                throw new Error('Provider Key and Provider Name are required.');
            }
            this.getFeatures();
        };
        FeatureManagementComponent.prototype.getFeatures = function () {
            var _this = this;
            this.store
                .dispatch(new GetFeatures({
                providerKey: this.providerKey,
                providerName: this.providerName,
            }))
                .pipe(operators.pluck('FeatureManagementState', 'features'))
                .subscribe(function (features) {
                _this.buildForm(features);
            });
        };
        FeatureManagementComponent.prototype.buildForm = function (features) {
            var formGroupObj = {};
            for (var i = 0; i < features.length; i++) {
                formGroupObj[i] = new forms.FormControl(features[i].value === 'false' ? null : features[i].value);
            }
            this.form = new forms.FormGroup(formGroupObj);
        };
        FeatureManagementComponent.prototype.save = function () {
            var _this = this;
            if (this.modalBusy)
                return;
            this.modalBusy = true;
            var features = this.store.selectSnapshot(exports.ɵc.getFeatures);
            features = features.map(function (feature, i) { return ({
                name: feature.name,
                value: !_this.form.value[i] || _this.form.value[i] === 'false' ? null : _this.form.value[i],
            }); });
            this.store
                .dispatch(new UpdateFeatures({
                providerKey: this.providerKey,
                providerName: this.providerName,
                features: features,
            }))
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.visible = false;
            });
        };
        return FeatureManagementComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", String)
    ], exports.ɵa.prototype, "providerKey", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", String)
    ], exports.ɵa.prototype, "providerName", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.ɵa.prototype, "visible", null);
    __decorate([
        i0.Output(),
        __metadata("design:type", Object)
    ], exports.ɵa.prototype, "visibleChange", void 0);
    __decorate([
        i2.Select(exports.ɵc.getFeatures),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "features$", void 0);
    exports.ɵa = __decorate([
        i0.Component({
            selector: 'abp-feature-management',
            template: "<abp-modal size=\"md\" [(visible)]=\"visible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ 'AbpFeatureManagement::Features' | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form *ngIf=\"form\" (ngSubmit)=\"save()\" [formGroup]=\"form\" validateOnSubmit>\r\n      <div\r\n        class=\"row my-3\"\r\n        *ngFor=\"let feature of features$ | async; let i = index\"\r\n        [ngSwitch]=\"feature.valueType.name\"\r\n      >\r\n        <div class=\"col-4\">{{ feature.name }}</div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'ToggleStringValueType'\">\r\n          <input type=\"checkbox\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n        <div class=\"col-8\" *ngSwitchCase=\"'FreeTextStringValueType'\">\r\n          <input type=\"text\" name=\"feature.name\" [formControlName]=\"i\" />\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!(features$ | async)?.length\">\r\n        {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <ng-container *ngIf=\"(features$ | async)?.length\">\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid || modalBusy\" (click)=\"save()\">\r\n        {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r\n      </abp-button>\r\n    </ng-container>\r\n  </ng-template>\r\n</abp-modal>\r\n",
            exportAs: 'abpFeatureManagement'
        }),
        __metadata("design:paramtypes", [i2.Store])
    ], exports.ɵa);

    exports.FeatureManagementModule = /** @class */ (function () {
        function FeatureManagementModule() {
        }
        return FeatureManagementModule;
    }());
    exports.FeatureManagementModule = __decorate([
        i0.NgModule({
            declarations: [exports.ɵa],
            imports: [i1.CoreModule, ng_theme_shared.ThemeSharedModule, i2.NgxsModule.forFeature([exports.ɵc])],
            exports: [exports.ɵa],
        })
    ], exports.FeatureManagementModule);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureManagementComponent = exports.ɵa;
    exports.ɵb = exports.ɵc;
    exports.ɵe = GetFeatures;
    exports.ɵf = UpdateFeatures;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.feature-management.umd.js.map
