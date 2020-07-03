(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.account'), require('@angular/forms'), require('angular-oauth2-oidc'), require('@ngxs/store'), require('@abp/ng.theme.shared'), require('rxjs'), require('ng-zorro-antd/card'), require('@angular/common'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/input'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('@ngx-validate/core'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/checkbox'), require('@angular/router'), require('@angular/animations'), require('ng-zorro-antd/menu'), require('@fs/account/wrap')) :
    typeof define === 'function' && define.amd ? define('@fs/account/ng-alain', ['exports', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.account', '@angular/forms', 'angular-oauth2-oidc', '@ngxs/store', '@abp/ng.theme.shared', 'rxjs', 'ng-zorro-antd/card', '@angular/common', 'ng-zorro-antd/modal', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/input', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', '@ngx-validate/core', 'ng-zorro-antd/tabs', 'ng-zorro-antd/checkbox', '@angular/router', '@angular/animations', 'ng-zorro-antd/menu', '@fs/account/wrap'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = global.fs.account || {}, global.fs.account['ng-alain'] = {}), global.i5, global.ng.core, global.basic, global.i3, global.ng.forms, global.i2, global.i2$1, global.i3$1, global.rxjs, global.i4, global.ng.common, global.i6, global.i8, global.i10, global.i11, global.i11$1, global.i12, global.i13, global.i8$1, global.i9, global.i12$1, global.ng.router, global.ng.animations, global.i1$1, global.fs.account.wrap));
}(this, (function (exports, i5, i0, basic, i3, i1, i2, i2$1, i3$1, rxjs, i4, i5$1, i6, i8, i10, i11, i11$1, i12, i13, i8$1, i9, i12$1, i16, animations, i1$1, wrap) { 'use strict';

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

    function TenantBoxComponent_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
        }
    }
    function TenantBoxComponent_ng_template_2_a_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 9);
            i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_2_a_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onSwitch(); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpUiMultiTenancy::Switch"));
        }
    }
    function TenantBoxComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_2_a_0_Template, 3, 3, "a", 8);
            i0.ɵɵpipe(1, "async");
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx_r2.isMultiTenancyEnabled$));
        }
    }
    function TenantBoxComponent_ng_template_4_div_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var currentTenant_r15 = i0.ɵɵnextContext().ngIf;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, "AbpUiMultiTenancy::Tenant"), " (", currentTenant_r15.name || i0.ɵɵpipeBind1(3, 4, "AbpUiMultiTenancy::NotSelected"), ") ");
        }
    }
    function TenantBoxComponent_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, TenantBoxComponent_ng_template_4_div_0_span_1_Template, 4, 6, "span", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r14.isMultiTenancyEnabled$));
        }
    }
    var _c0 = function () { return {}; };
    function TenantBoxComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_4_div_0_Template, 3, 3, "div", 10);
            i0.ɵɵpipe(1, "async");
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx_r4.currentTenant$) || i0.ɵɵpureFunction0(3, _c0));
        }
    }
    function TenantBoxComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "abpLocalization");
        }
        if (rf & 2) {
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, "AbpUiMultiTenancy::Tenant"), " ");
        }
    }
    function TenantBoxComponent_ng_template_9_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵelement(1, "i", 17);
            i0.ɵɵelementEnd();
        }
    }
    function TenantBoxComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_9_ng_template_0_Template, 2, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "form", 12);
            i0.ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_template_9_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
            i0.ɵɵelementStart(3, "nz-form-item");
            i0.ɵɵelementStart(4, "nz-form-label", 13);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "nz-form-control", 14);
            i0.ɵɵpipe(8, "abpLocalization");
            i0.ɵɵelementStart(9, "input", 15);
            i0.ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_template_9_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(6, 7, "AbpUiMultiTenancy::Name"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("nzExtra", i0.ɵɵpipeBind1(8, 9, "AbpUiMultiTenancy::SwitchTenantHint"));
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r8.name);
        }
    }
    function TenantBoxComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 18);
            i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.isModalVisible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 19);
            i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r24_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.save(); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpTenantManagement::Cancel"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpTenantManagement::Save"), " ");
        }
    }
    var _c1 = function () { return { top: "20px" }; };
    var _c2 = ["*"];
    var TenantBoxComponent = /** @class */ (function (_super) {
        __extends(TenantBoxComponent, _super);
        function TenantBoxComponent(_store, _toasterService, _accountService) {
            var _this = _super.call(this, _store, _toasterService, _accountService) || this;
            _this._store = _store;
            _this._toasterService = _toasterService;
            _this._accountService = _accountService;
            return _this;
        }
        return TenantBoxComponent;
    }(i3.TenantBoxComponent));
    TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(i3.AccountService)); };
    TenantBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["ng-alain-tenant-box"]], inputs: { mainContentRef: "mainContentRef" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 13, vars: 9, consts: [[3, "nzTitle", "nzExtra"], [4, "ngTemplateOutlet"], ["extraTemplate", ""], ["cardTitle", ""], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", "class", "btn btn-sm mt-3 btn-outline-primary", 3, "click", 4, "ngIf"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], [4, "ngIf"], ["loaderRef", ""], ["nz-form", "", 3, "ngSubmit"], ["nzRequired", "", "nzFor", "name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzExtra"], ["nz-input", "", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function TenantBoxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "nz-card", 0);
                i0.ɵɵtemplate(1, TenantBoxComponent_1_Template, 1, 0, undefined, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, TenantBoxComponent_ng_template_2_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, TenantBoxComponent_ng_template_4_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(6, "nz-modal", 4);
                i0.ɵɵlistener("nzVisibleChange", function TenantBoxComponent_Template_nz_modal_nzVisibleChange_6_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantBoxComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.isModalVisible = false; });
                i0.ɵɵtemplate(7, TenantBoxComponent_ng_template_7_Template, 2, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(9, TenantBoxComponent_ng_template_9_Template, 10, 11, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(11, TenantBoxComponent_ng_template_11_Template, 6, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                var _r3 = i0.ɵɵreference(5);
                var _r5 = i0.ɵɵreference(8);
                var _r7 = i0.ɵɵreference(10);
                var _r9 = i0.ɵɵreference(12);
                i0.ɵɵproperty("nzTitle", _r3)("nzExtra", _r1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.mainContentRef);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("nzStyle", i0.ɵɵpureFunction0(8, _c1))("nzVisible", ctx.isModalVisible)("nzTitle", _r5)("nzContent", _r7)("nzFooter", _r9);
            }
        }, directives: [i4.NzCardComponent, i5$1.NgTemplateOutlet, i6.NzModalComponent, i5$1.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i8.NzFormDirective, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormLabelComponent, i8.NzFormControlComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i11$1.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective], pipes: [i5$1.AsyncPipe, i5.LocalizationPipe], encapsulation: 2 });
    __decorate([
        i2$1.Select(i5.ConfigState.getDeep('multiTenancy.isEnabled')),
        __metadata("design:type", rxjs.Observable)
    ], TenantBoxComponent.prototype, "isMultiTenancyEnabled$", void 0);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantBoxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-tenant-box',
                        templateUrl: './tenant-box.component.html'
                    }]
            }], function () { return [{ type: i2$1.Store }, { type: i3$1.ToasterService }, { type: i3.AccountService }]; }, { mainContentRef: [{
                    type: i0.Input
                }], isMultiTenancyEnabled$: [] });
    })();

    function AuthWrapperComponent_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "cancelContentRef"]);
        }
    }
    var _c0$1 = ["*"];
    var AuthWrapperComponent = /** @class */ (function () {
        function AuthWrapperComponent() {
        }
        return AuthWrapperComponent;
    }());
    AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(); };
    AuthWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["ng-alain-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, ngContentSelectors: _c0$1, decls: 2, vars: 2, consts: [[3, "mainContentRef"], [4, "ngTemplateOutlet"]], template: function AuthWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelement(0, "ng-alain-tenant-box", 0);
                i0.ɵɵtemplate(1, AuthWrapperComponent_1_Template, 1, 0, undefined, 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("mainContentRef", ctx.mainContentRef);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngTemplateOutlet", ctx.cancelContentRef);
            }
        }, directives: [TenantBoxComponent, i5$1.NgTemplateOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthWrapperComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-auth-wrapper',
                        templateUrl: './auth-wrapper.component.html',
                    }]
            }], null, { mainContentRef: [{
                    type: i0.Input
                }], cancelContentRef: [{
                    type: i0.Input
                }] });
    })();

    function UserLoginComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 2);
            i0.ɵɵlistener("ngSubmit", function UserLoginComponent_ng_template_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSubmit(); });
            i0.ɵɵelementStart(1, "nz-tabset", 3);
            i0.ɵɵelementStart(2, "nz-tab", 4);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementStart(4, "nz-form-item");
            i0.ɵɵelementStart(5, "nz-form-control", 5);
            i0.ɵɵpipe(6, "abpLocalization");
            i0.ɵɵelementStart(7, "nz-input-group", 6);
            i0.ɵɵelement(8, "input", 7);
            i0.ɵɵpipe(9, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "nz-form-item");
            i0.ɵɵelementStart(11, "nz-form-control", 5);
            i0.ɵɵpipe(12, "abpLocalization");
            i0.ɵɵelementStart(13, "nz-input-group", 8);
            i0.ɵɵelement(14, "input", 9);
            i0.ɵɵpipe(15, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "nz-form-item");
            i0.ɵɵelementStart(17, "nz-col", 10);
            i0.ɵɵelementStart(18, "label", 11);
            i0.ɵɵtext(19);
            i0.ɵɵpipe(20, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "nz-form-item");
            i0.ɵɵelementStart(22, "button", 12);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 13);
            i0.ɵɵelementStart(26, "a", 14);
            i0.ɵɵtext(27);
            i0.ɵɵpipe(28, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r1.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzAnimated", false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzTitle", i0.ɵɵpipeBind1(3, 12, "AbpAccount::Login"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzErrorTip", i0.ɵɵpipeBind1(6, 14, "Please enter mobile number!"));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(9, 16, "AbpAccount::UserNameOrEmailAddress"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzErrorTip", i0.ɵɵpipeBind1(12, 18, "Please enter password!"));
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(15, 20, "AbpAccount::Password"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSpan", 12);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 22, "AbpAccount::RememberMe"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx_r1.inProgress);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 24, "AbpAccount::Login"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 26, "AbpAccount::Register"));
        }
    }
    var UserLoginComponent = /** @class */ (function (_super) {
        __extends(UserLoginComponent, _super);
        function UserLoginComponent(_fb, _oauthService, _store, _toasterService, _authService) {
            return _super.call(this, _fb, _oauthService, _store, _toasterService, _authService) || this;
        }
        return UserLoginComponent;
    }(i3.LoginComponent));
    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(i5.AuthService)); };
    UserLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserLoginComponent, selectors: [["ng-alain-login"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", "role", "form", 3, "formGroup", "ngSubmit"], [1, "tabs", 3, "nzAnimated"], [3, "nzTitle"], [3, "nzErrorTip"], ["nzSize", "large", "nzPrefixIcon", "user"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nzSize", "large", "nzPrefixIcon", "lock"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], [3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], ["nz-button", "", "type", "submit", "nzType", "primary", "nzSize", "large", "nzBlock", "", 3, "nzLoading"], [1, "other"], ["routerLink", "/account/register", 1, "register"]], template: function UserLoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
                i0.ɵɵtemplate(1, UserLoginComponent_ng_template_1_Template, 29, 28, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                i0.ɵɵproperty("mainContentRef", _r0);
            }
        }, directives: [AuthWrapperComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i8.NzFormDirective, i1.FormGroupDirective, i8$1.ValidationGroupDirective, i9.NzTabSetComponent, i9.NzTabComponent, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormControlComponent, i11.NzInputGroupComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i8$1.ValidationDirective, i12$1.NzCheckboxComponent, i11$1.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective, i16.RouterLinkWithHref], pipes: [i5.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{border-bottom:0;margin-bottom:24px;text-align:center}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}[_nghost-%COMP%]     .icon{color:rgba(0,0,0,.2);cursor:pointer;font-size:24px;margin-left:16px;transition:color .3s;vertical-align:middle}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{line-height:22px;margin-top:24px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserLoginComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.less']
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i2.OAuthService }, { type: i2$1.Store }, { type: i3$1.ToasterService }, { type: i5.AuthService }]; }, null);
    })();

    function UserRegisterComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "h3");
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "form", 2);
            i0.ɵɵlistener("ngSubmit", function UserRegisterComponent_ng_template_1_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSubmit(); });
            i0.ɵɵelementStart(4, "nz-form-item");
            i0.ɵɵelementStart(5, "nz-form-control");
            i0.ɵɵelementStart(6, "nz-input-group", 3);
            i0.ɵɵelement(7, "input", 4);
            i0.ɵɵpipe(8, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "nz-form-item");
            i0.ɵɵelementStart(10, "nz-form-control");
            i0.ɵɵelementStart(11, "nz-input-group", 3);
            i0.ɵɵelement(12, "input", 5);
            i0.ɵɵpipe(13, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "nz-form-item");
            i0.ɵɵelementStart(15, "nz-form-control");
            i0.ɵɵelementStart(16, "nz-input-group", 3);
            i0.ɵɵelement(17, "input", 6);
            i0.ɵɵpipe(18, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "nz-form-item");
            i0.ɵɵelementStart(20, "button", 7);
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "a", 8);
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "AbpAccount::Register"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx_r1.form);
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 10, "AbpAccount::UserName"));
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(13, 12, "AbpAccount::EmailAddress"));
            i0.ɵɵadvance(5);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(18, 14, "AbpAccount::Password"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx_r1.inProgress);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(22, 16, "AbpAccount::Register"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 18, "AbpAccount::Login"));
        }
    }
    var UserRegisterComponent = /** @class */ (function (_super) {
        __extends(UserRegisterComponent, _super);
        function UserRegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
            var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService, _authService) || this;
            _this._fb = _fb;
            _this._accountService = _accountService;
            _this._oauthService = _oauthService;
            _this._store = _store;
            _this._toasterService = _toasterService;
            _this._authService = _authService;
            return _this;
        }
        return UserRegisterComponent;
    }(i3.RegisterComponent));
    UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i3.AccountService), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService), i0.ɵɵdirectiveInject(i5.AuthService)); };
    UserRegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserRegisterComponent, selectors: [["fs-register"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzSize", "large"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nz-input", "", "formControlName", "email", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "type", "submit", 1, "submit", 3, "nzLoading"], ["routerLink", "/account/login", 1, "login"]], template: function UserRegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
                i0.ɵɵtemplate(1, UserRegisterComponent_ng_template_1_Template, 26, 20, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                i0.ɵɵproperty("mainContentRef", _r0);
            }
        }, directives: [AuthWrapperComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i8.NzFormDirective, i1.FormGroupDirective, i8$1.ValidationGroupDirective, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormControlComponent, i11.NzInputGroupComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i8$1.ValidationDirective, i11$1.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective, i16.RouterLinkWithHref], pipes: [i5.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     h3{font-size:16px;margin-bottom:20px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .error,   .register-password-cdk .success,   .register-password-cdk .warning{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UserRegisterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fs-register',
                        templateUrl: './register.component.html',
                        styleUrls: ['./register.component.less'],
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i3.AccountService }, { type: i2.OAuthService }, { type: i2$1.Store }, { type: i3$1.ToasterService }, { type: i5.AuthService }]; }, null);
    })();

    var ChangePasswordComponent = /** @class */ (function (_super) {
        __extends(ChangePasswordComponent, _super);
        function ChangePasswordComponent(_fb, _store, _toasterService) {
            var _this = _super.call(this, _fb, _store, _toasterService) || this;
            _this._fb = _fb;
            _this._store = _store;
            _this._toasterService = _toasterService;
            return _this;
        }
        return ChangePasswordComponent;
    }(i3.ChangePasswordComponent));
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService)); };
    ChangePasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["ng-alain-change-password-form"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 14, consts: [[3, "formGroup", "mapErrorsFn", "ngSubmit"], ["nz-input", "", "type", "password", "formControlName", "password", "id", "current-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "newPassword", "id", "new-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "repeatNewPassword", "id", "confirm-new-password", 3, "placeholder"], ["nz-button", "", "nzType", "primary"]], template: function ChangePasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
                i0.ɵɵelementStart(1, "nz-form-item");
                i0.ɵɵelementStart(2, "nz-form-control");
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵpipe(4, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "nz-form-item");
                i0.ɵɵelementStart(6, "nz-form-control");
                i0.ɵɵelement(7, "input", 2);
                i0.ɵɵpipe(8, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "nz-form-item");
                i0.ɵɵelementStart(10, "nz-form-control");
                i0.ɵɵelement(11, "input", 3);
                i0.ɵɵpipe(12, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "button", 4);
                i0.ɵɵtext(14);
                i0.ɵɵpipe(15, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
                i0.ɵɵadvance(3);
                i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "AbpIdentity::DisplayName:CurrentPassword"));
                i0.ɵɵadvance(4);
                i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 8, "AbpIdentity::DisplayName:NewPassword"));
                i0.ɵɵadvance(4);
                i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 12, "AbpIdentity::Save"), " ");
            }
        }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i1.FormGroupDirective, i8$1.ValidationGroupDirective, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormControlComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i8$1.ValidationDirective, i11$1.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective], pipes: [i5.LocalizationPipe], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ChangePasswordComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-change-password-form',
                        templateUrl: './change-password.component.html',
                        styleUrls: ['./change-password.component.less']
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i2$1.Store }, { type: i3$1.ToasterService }]; }, null);
    })();

    function PersonalSettingsComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 1);
            i0.ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submit(); });
            i0.ɵɵelementStart(1, "nz-form-item");
            i0.ɵɵelementStart(2, "nz-form-label", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nz-form-control");
            i0.ɵɵelement(6, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "nz-form-item");
            i0.ɵɵelementStart(8, "nz-form-label", 4);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "nz-form-control");
            i0.ɵɵelement(12, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "nz-form-item");
            i0.ɵɵelementStart(14, "nz-form-label", 6);
            i0.ɵɵtext(15);
            i0.ɵɵpipe(16, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "nz-form-control");
            i0.ɵɵelement(18, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "nz-form-item");
            i0.ɵɵelementStart(20, "nz-form-label", 8);
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "nz-form-control");
            i0.ɵɵelement(24, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "nz-form-item");
            i0.ɵɵelementStart(26, "nz-form-label", 10);
            i0.ɵɵtext(27);
            i0.ɵɵpipe(28, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "nz-form-control");
            i0.ɵɵelement(30, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "button", 12);
            i0.ɵɵtext(32);
            i0.ɵɵpipe(33, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r0.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 7, "AbpIdentity::DisplayName:UserName"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, "AbpIdentity::DisplayName:Name"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 11, "AbpIdentity::DisplayName:Surname"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(22, 13, "AbpIdentity::DisplayName:Email"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 15, "AbpIdentity::DisplayName:PhoneNumber"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(33, 17, "AbpIdentity::Save"), " ");
        }
    }
    var PersonalSettingsComponent = /** @class */ (function (_super) {
        __extends(PersonalSettingsComponent, _super);
        function PersonalSettingsComponent(_fb, _store, _toasterService) {
            var _this = _super.call(this, _fb, _store, _toasterService) || this;
            _this._fb = _fb;
            _this._store = _store;
            _this._toasterService = _toasterService;
            return _this;
        }
        return PersonalSettingsComponent;
    }(i3.PersonalSettingsComponent));
    PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2$1.Store), i0.ɵɵdirectiveInject(i3$1.ToasterService)); };
    PersonalSettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["ng-alain-personal-settings-form"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "username"], ["nz-input", "", "formControlName", "userName", "id", "username"], ["nzRequired", "", "nzFor", "name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzRequired", "", "nzFor", "surname"], ["nz-input", "", "formControlName", "surname", "id", "surname"], ["nzRequired", "", "nzFor", "email-address"], ["nz-input", "", "formControlName", "email", "id", "email-address"], ["nzRequired", "", "nzFor", "phone-number"], ["nz-input", "", "formControlName", "phoneNumber", "id", "phone-number"], ["nz-button", "", "nzType", "primary"]], template: function PersonalSettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 34, 19, "form", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.form);
            }
        }, directives: [i5$1.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i1.FormGroupDirective, i8$1.ValidationGroupDirective, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormLabelComponent, i8.NzFormControlComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i8$1.ValidationDirective, i11$1.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective], pipes: [i5.LocalizationPipe], styles: ["nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PersonalSettingsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-personal-settings-form',
                        templateUrl: './personal-settings.component.html',
                        styleUrls: ['./personal-settings.component.less']
                    }]
            }], function () { return [{ type: i1.FormBuilder }, { type: i2$1.Store }, { type: i3$1.ToasterService }]; }, null);
    })();

    function ManageProfileComponent_ng_alain_change_password_form_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ng-alain-change-password-form");
        }
    }
    function ManageProfileComponent_ng_alain_personal_settings_form_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "ng-alain-personal-settings-form");
        }
    }
    var ManageProfileComponent = /** @class */ (function () {
        function ManageProfileComponent() {
            this.selectedTab = 0;
        }
        return ManageProfileComponent;
    }());
    ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(); };
    ManageProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["ng-alain-manage-profile"]], decls: 19, vars: 13, consts: [[1, "row", "entry-row"], [1, "col-auto"], ["id", "breadcrumb", 1, "col-md-auto", "pl-md-0"], [1, "col"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click"], [1, "content"], [1, "title"], [4, "ngIf"]], template: function ManageProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "div", 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelement(3, "div", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵelementStart(6, "ul", 6);
                i0.ɵɵelementStart(7, "li", 7);
                i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 0; });
                i0.ɵɵtext(8);
                i0.ɵɵpipe(9, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "li", 7);
                i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_10_listener() { return ctx.selectedTab = 1; });
                i0.ɵɵtext(11);
                i0.ɵɵpipe(12, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "div", 8);
                i0.ɵɵelementStart(14, "div", 9);
                i0.ɵɵtext(15);
                i0.ɵɵpipe(16, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(17, ManageProfileComponent_ng_alain_change_password_form_17_Template, 1, 0, "ng-alain-change-password-form", 10);
                i0.ɵɵtemplate(18, ManageProfileComponent_ng_alain_personal_settings_form_18_Template, 1, 0, "ng-alain-personal-settings-form", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("nzSelected", ctx.selectedTab === 0);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 7, "AbpUi::ChangePassword"), " ");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("nzSelected", ctx.selectedTab === 1);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 9, "AbpAccount::PersonalSettings"), " ");
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 11, "AbpAccount::ChangePassword"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.selectedTab === 0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.selectedTab === 1);
            }
        }, directives: [i1$1.NzMenuDirective, i13.ɵNzTransitionPatchDirective, i1$1.NzMenuItemDirective, i5$1.NgIf, ChangePasswordComponent, PersonalSettingsComponent], pipes: [i5.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;padding-bottom:16px;padding-top:16px;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"], data: { animation: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(i3$1.fadeIn))])] } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ManageProfileComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-manage-profile',
                        templateUrl: './manage-profile.component.html',
                        styleUrls: ['./manage-profile.component.less'],
                        animations: [animations.trigger('fadeIn', [animations.transition(':enter', animations.useAnimation(i3$1.fadeIn))])],
                    }]
            }], null, null);
    })();

    function accountOptionsFactory(options) {
        return Object.assign({ redirectUrl: '/' }, options);
    }
    var AccountNgAlainModule = /** @class */ (function () {
        function AccountNgAlainModule() {
        }
        AccountNgAlainModule.forChild = function (options) {
            return {
                ngModule: AccountNgAlainModule,
                providers: [
                    { provide: i3.ACCOUNT_OPTIONS, useValue: options },
                    {
                        provide: 'ACCOUNT_OPTIONS',
                        useFactory: accountOptionsFactory,
                        deps: [i3.ACCOUNT_OPTIONS],
                    },
                ],
            };
        };
        AccountNgAlainModule.forLazy = function (options) {
            return new i5.LazyModuleFactory(AccountNgAlainModule.forChild(options));
        };
        return AccountNgAlainModule;
    }());
    AccountNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountNgAlainModule });
    AccountNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountNgAlainModule_Factory(t) { return new (t || AccountNgAlainModule)(); }, imports: [[
                i5.CoreModule,
                basic.NgAlainBasicModule,
                wrap.AccountWrapModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountNgAlainModule, { declarations: [AuthWrapperComponent,
                TenantBoxComponent,
                UserLoginComponent,
                UserRegisterComponent,
                ManageProfileComponent,
                PersonalSettingsComponent,
                ChangePasswordComponent], imports: [i5.CoreModule,
                basic.NgAlainBasicModule,
                wrap.AccountWrapModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AccountNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AuthWrapperComponent,
                            TenantBoxComponent,
                            UserLoginComponent,
                            UserRegisterComponent,
                            ManageProfileComponent,
                            PersonalSettingsComponent,
                            ChangePasswordComponent
                        ],
                        entryComponents: [
                            UserLoginComponent,
                            UserRegisterComponent,
                            ManageProfileComponent
                        ],
                        imports: [
                            i5.CoreModule,
                            basic.NgAlainBasicModule,
                            wrap.AccountWrapModule
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountNgAlainModule = AccountNgAlainModule;
    exports.ManageProfileComponent = ManageProfileComponent;
    exports.UserLoginComponent = UserLoginComponent;
    exports.UserRegisterComponent = UserRegisterComponent;
    exports.accountOptionsFactory = accountOptionsFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account-ng-alain.umd.js.map
