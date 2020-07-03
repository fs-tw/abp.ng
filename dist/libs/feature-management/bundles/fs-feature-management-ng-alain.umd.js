(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/feature-management/wrap'), require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.feature-management'), require('@ngxs/store'), require('ng-zorro-antd/modal'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/form'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch')) :
    typeof define === 'function' && define.amd ? define('@fs/feature-management/ng-alain', ['exports', '@fs/feature-management/wrap', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.feature-management', '@ngxs/store', 'ng-zorro-antd/modal', '@angular/common', '@angular/forms', 'ng-zorro-antd/form', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['feature-management'] = global.fs['feature-management'] || {}, global.fs['feature-management']['ng-alain'] = {}), global.fs['feature-management'].wrap, global.i5, global.ng.core, global.basic, global.ng_featureManagement, global.i1, global.i2, global.ng.common, global.ng.forms, global.i6, global.i7, global.i8, global.i9));
}(this, (function (exports, wrap, i5, i0, basic, ng_featureManagement, i1, i2, i3, i4, i6, i7, i8, i9) { 'use strict';

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

    function FeatureManagementComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h3");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"));
        }
    }
    function FeatureManagementComponent_ng_template_3_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelement(1, "i", 7);
            i0.ɵɵelementEnd();
        }
    }
    function FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelement(1, "input", 14);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r11 = i0.ɵɵnextContext().index;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControlName", i_r11);
        }
    }
    function FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelement(1, "input", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r11 = i0.ɵɵnextContext().index;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControlName", i_r11);
        }
    }
    function FeatureManagementComponent_ng_template_3_form_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵelementStart(1, "div", 11);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template, 2, 1, "div", 12);
            i0.ɵɵtemplate(4, FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template, 2, 1, "div", 12);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var feature_r10 = ctx.$implicit;
            i0.ɵɵproperty("ngSwitch", feature_r10.valueType.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(feature_r10.name);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "ToggleStringValueType");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "FreeTextStringValueType");
        }
    }
    function FeatureManagementComponent_ng_template_3_form_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 8);
            i0.ɵɵlistener("ngSubmit", function FeatureManagementComponent_ng_template_3_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.save(); });
            i0.ɵɵtemplate(1, FeatureManagementComponent_ng_template_3_form_2_div_1_Template, 5, 4, "div", 9);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("formGroup", ctx_r8.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, ctx_r8.features$));
        }
    }
    function FeatureManagementComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, FeatureManagementComponent_ng_template_3_ng_template_0_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, FeatureManagementComponent_ng_template_3_form_2_Template, 3, 4, "form", 5);
        }
        if (rf & 2) {
            var _r6 = i0.ɵɵreference(1);
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r3.form)("ngIfElse", _r6);
        }
    }
    function FeatureManagementComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.visible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 17);
            i0.ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Cancel"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpFeatureManagement::Save"), " ");
        }
    }
    var FeatureManagementComponent = /** @class */ (function (_super) {
        __extends(FeatureManagementComponent, _super);
        function FeatureManagementComponent(_store) {
            var _this = _super.call(this, _store) || this;
            _this._store = _store;
            return _this;
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
        return FeatureManagementComponent;
    }(ng_featureManagement.FeatureManagementComponent));
    FeatureManagementComponent.ɵfac = function FeatureManagementComponent_Factory(t) { return new (t || FeatureManagementComponent)(i0.ɵɵdirectiveInject(i1.Store)); };
    FeatureManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeatureManagementComponent, selectors: [["ng-alain-feature-management"]], inputs: { providerKey: "providerKey", providerName: "providerName", visible: "visible" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 4, consts: [[3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["class", "row my-3", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "row", "my-3", 3, "ngSwitch"], [1, "col-4"], ["class", "col-8", 4, "ngSwitchCase"], [1, "col-8"], ["type", "checkbox", "name", "feature.name", 3, "formControlName"], ["type", "text", "name", "feature.name", 3, "formControlName"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function FeatureManagementComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-modal", 0);
                i0.ɵɵlistener("nzVisibleChange", function FeatureManagementComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.visible = $event; })("nzOnCancel", function FeatureManagementComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.visible = false; });
                i0.ɵɵtemplate(1, FeatureManagementComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, FeatureManagementComponent_ng_template_5_Template, 6, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                var _r2 = i0.ɵɵreference(4);
                var _r4 = i0.ɵɵreference(6);
                i0.ɵɵproperty("nzVisible", ctx.visible)("nzTitle", _r0)("nzContent", _r2)("nzFooter", _r4);
            }
        }, directives: [i2.NzModalComponent, i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i5.FormSubmitDirective, i6.NzFormDirective, i4.FormGroupDirective, i3.NgForOf, i3.NgSwitch, i3.NgSwitchCase, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.FormControlName, i4.DefaultValueAccessor, i7.NzButtonComponent, i8.NzWaveDirective, i9.ɵNzTransitionPatchDirective], pipes: [i5.LocalizationPipe, i3.AsyncPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FeatureManagementComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-feature-management',
                        templateUrl: './feature-management.component.html'
                    }]
            }], function () { return [{ type: i1.Store }]; }, { providerKey: [{
                    type: i0.Input
                }], providerName: [{
                    type: i0.Input
                }], visible: [{
                    type: i0.Input
                }] });
    })();

    var FeatureManagementNgAlainModule = /** @class */ (function () {
        function FeatureManagementNgAlainModule() {
        }
        return FeatureManagementNgAlainModule;
    }());
    FeatureManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: FeatureManagementNgAlainModule });
    FeatureManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FeatureManagementNgAlainModule_Factory(t) { return new (t || FeatureManagementNgAlainModule)(); }, imports: [[
                i5.CoreModule,
                basic.NgAlainBasicModule,
                wrap.FeatureManagementWrapModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeatureManagementNgAlainModule, { declarations: [FeatureManagementComponent], imports: [i5.CoreModule,
                basic.NgAlainBasicModule,
                wrap.FeatureManagementWrapModule], exports: [FeatureManagementComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FeatureManagementNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [FeatureManagementComponent],
                        imports: [
                            i5.CoreModule,
                            basic.NgAlainBasicModule,
                            wrap.FeatureManagementWrapModule
                        ],
                        exports: [FeatureManagementComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureManagementComponent = FeatureManagementComponent;
    exports.FeatureManagementNgAlainModule = FeatureManagementNgAlainModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-feature-management-ng-alain.umd.js.map
