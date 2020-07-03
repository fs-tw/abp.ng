(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/tenant-management/wrap'), require('@abp/ng.core'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.tenant-management'), require('@abp/ng.theme.shared'), require('@angular/forms'), require('@ngxs/store'), require('ng-zorro-antd/card'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/form'), require('ng-zorro-antd/input'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/table'), require('@angular/common'), require('ng-zorro-antd/modal'), require('@fs/feature-management/ng-alain'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/menu'), require('@ngx-validate/core'), require('ng-zorro-antd/checkbox')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management/ng-alain', ['exports', '@fs/tenant-management/wrap', '@abp/ng.core', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.tenant-management', '@abp/ng.theme.shared', '@angular/forms', '@ngxs/store', 'ng-zorro-antd/card', 'ng-zorro-antd/grid', 'ng-zorro-antd/form', 'ng-zorro-antd/input', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/icon', 'ng-zorro-antd/table', '@angular/common', 'ng-zorro-antd/modal', '@fs/feature-management/ng-alain', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/menu', '@ngx-validate/core', 'ng-zorro-antd/checkbox'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = global.fs['tenant-management'] || {}, global.fs['tenant-management']['ng-alain'] = {}), global.fs['tenant-management'].wrap, global.i1, global.ng.core, global.basic, global.i3, global.i2, global.ng.forms, global.i5, global.i6, global.i7, global.i8, global.i9, global.i10, global.i11, global.i12, global.i13, global.i14, global.ng.common, global.i16, global.i17, global.i18, global.i19, global.i20, global.i21));
}(this, (function (exports, wrap, i1, i0, basic, i3, i2, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21) { 'use strict';

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

    function TenantsComponent_tr_30_li_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 23);
            i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_11_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r20_1); var data_r12 = i0.ɵɵnextContext().$implicit; var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.editTenant(data_r12.id); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Edit"), "");
        }
    }
    function TenantsComponent_tr_30_li_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 23);
            i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_12_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r23_1); var data_r12 = i0.ɵɵnextContext().$implicit; var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onEditConnectionString(data_r12.id); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageConnectionStrings"), "");
        }
    }
    function TenantsComponent_tr_30_li_13_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 23);
            i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_13_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r26_1); var data_r12 = i0.ɵɵnextContext().$implicit; var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.openFeaturesModal(data_r12.id); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"), "");
        }
    }
    function TenantsComponent_tr_30_li_14_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 23);
            i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r29_1); var data_r12 = i0.ɵɵnextContext().$implicit; var ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.delete(data_r12.id, data_r12.name); });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Delete"));
        }
    }
    function TenantsComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "td");
            i0.ɵɵelementStart(4, "a", 18);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "abpLocalization");
            i0.ɵɵelement(7, "i", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "nz-dropdown-menu", null, 20);
            i0.ɵɵelementStart(10, "ul", 21);
            i0.ɵɵtemplate(11, TenantsComponent_tr_30_li_11_Template, 3, 3, "li", 22);
            i0.ɵɵtemplate(12, TenantsComponent_tr_30_li_12_Template, 3, 3, "li", 22);
            i0.ɵɵtemplate(13, TenantsComponent_tr_30_li_13_Template, 3, 3, "li", 22);
            i0.ɵɵtemplate(14, TenantsComponent_tr_30_li_14_Template, 3, 3, "li", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r12 = ctx.$implicit;
            var _r13 = i0.ɵɵreference(9);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r12.name);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzDropdownMenu", _r13);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "AbpTenantManagement::Actions"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Update");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageConnectionStrings");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageFeatures");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Delete");
        }
    }
    function TenantsComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "abpLocalization");
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, ctx_r3.selectedModalContent.title), " ");
        }
    }
    function TenantsComponent_ng_template_34_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function TenantsComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TenantsComponent_ng_template_34_ng_container_0_Template, 1, 0, "ng-container", 24);
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.selectedModalContent == null ? null : ctx_r5.selectedModalContent.template);
        }
    }
    function TenantsComponent_ng_template_36_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 25);
            i0.ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.isModalVisible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 26);
            i0.ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.save(); });
            i0.ɵɵpipe(4, "async");
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "AbpTenantManagement::Cancel"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzLoading", i0.ɵɵpipeBind1(4, 5, ctx_r7.list.isLoading$));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "AbpIdentity::Save"), " ");
        }
    }
    function TenantsComponent_ng_template_38_nz_form_item_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-form-item");
            i0.ɵɵelementStart(1, "nz-form-label", 32);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nz-form-control", 29);
            i0.ɵɵelement(5, "input", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminEmailAddress"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
        }
    }
    function TenantsComponent_ng_template_38_nz_form_item_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-form-item");
            i0.ɵɵelementStart(1, "nz-form-label", 34);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nz-form-control", 29);
            i0.ɵɵelement(5, "input", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminPassword"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
        }
    }
    function TenantsComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 27);
            i0.ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_38_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r37_1); var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.save(); });
            i0.ɵɵelementStart(1, "nz-form-item");
            i0.ɵɵelementStart(2, "nz-form-label", 28);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nz-form-control", 29);
            i0.ɵɵelement(6, "input", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, TenantsComponent_ng_template_38_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
            i0.ɵɵtemplate(8, TenantsComponent_ng_template_38_nz_form_item_8_Template, 6, 7, "nz-form-item", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵproperty("formGroup", ctx_r9.tenantForm)("nzLayout", "vertical");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "AbpTenantManagement::TenantName"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminEmailAddress);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminPassword);
        }
    }
    function TenantsComponent_ng_template_40_nz_form_item_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-form-item");
            i0.ɵɵelementStart(1, "nz-form-label", 39);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nz-form-control", 29);
            i0.ɵɵelement(5, "input", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:DefaultConnectionString"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
        }
    }
    function TenantsComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
            var _r40_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 36);
            i0.ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_40_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r40_1); var ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.save(); });
            i0.ɵɵelementStart(1, "nz-form-item");
            i0.ɵɵelementStart(2, "nz-form-control", 37);
            i0.ɵɵelementStart(3, "label", 38);
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, TenantsComponent_ng_template_40_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzLayout", "vertical")("formGroup", ctx_r11.defaultConnectionStringForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSpan", 14)("nzOffset", 6);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 6, "AbpTenantManagement::DisplayName:UseSharedDatabase"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r11.useSharedDatabase);
        }
    }
    var _c0 = function () { return { xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }; };
    var TenantsComponent = /** @class */ (function (_super) {
        __extends(TenantsComponent, _super);
        function TenantsComponent(_list, _confirmationService, _tenantService, _fb, _store) {
            var _this = _super.call(this, _list, _confirmationService, _tenantService, _fb, _store) || this;
            _this._list = _list;
            _this._confirmationService = _confirmationService;
            _this._tenantService = _tenantService;
            _this._fb = _fb;
            _this._store = _store;
            return _this;
        }
        return TenantsComponent;
    }(i3.TenantsComponent));
    TenantsComponent.ɵfac = function TenantsComponent_Factory(t) { return new (t || TenantsComponent)(i0.ɵɵdirectiveInject(i1.ListService), i0.ɵɵdirectiveInject(i2.ConfirmationService), i0.ɵɵdirectiveInject(i3.TenantManagementService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.Store)); };
    TenantsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantsComponent, selectors: [["ng-alain-tenants"]], features: [i0.ɵɵProvidersFeature([i1.ListService]), i0.ɵɵInheritDefinitionFeature], decls: 43, vars: 39, consts: [[3, "nzBordered"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzMd", "8", "nzSm", "24"], ["nzFor", "no"], ["nz-input", "", "type", "search", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["tenantModalTemplate", ""], ["connectionStringModalTemplate", ""], ["providerName", "T", 3, "visible", "providerKey", "visibleChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "abpPermission"], ["nz-menu-item", "", 3, "click"], [4, "ngTemplateOutlet"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name"], [4, "ngIf"], ["nzRequired", "", "nzFor", "role-adminEmailAddress", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminEmailAddress", "type", "email"], ["nzRequired", "", "nzFor", "role-adminPassword", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminPassword", "type", "password"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "useSharedDatabase"], ["nzRequired", "", "nzFor", "defaultConnectionString", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "defaultConnectionString", "id", "defaultConnectionString"]], template: function TenantsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-card", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "nz-form-item");
                i0.ɵɵelementStart(4, "nz-form-label", 3);
                i0.ɵɵtext(5);
                i0.ɵɵpipe(6, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "nz-form-control");
                i0.ɵɵelementStart(8, "input", 4);
                i0.ɵɵlistener("ngModelChange", function TenantsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.list.filter = $event; });
                i0.ɵɵpipe(9, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 5);
                i0.ɵɵlistener("click", function TenantsComponent_Template_button_click_10_listener() { return ctx.addTenant(); });
                i0.ɵɵelement(11, "i", 6);
                i0.ɵɵelementStart(12, "span");
                i0.ɵɵtext(13);
                i0.ɵɵpipe(14, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "div", 7);
                i0.ɵɵelementStart(16, "nz-table", 8, 9);
                i0.ɵɵlistener("nzPageIndexChange", function TenantsComponent_Template_nz_table_nzPageIndexChange_16_listener($event) { return ctx.list.page = $event - 1; });
                i0.ɵɵpipe(18, "async");
                i0.ɵɵpipe(19, "async");
                i0.ɵɵpipe(20, "async");
                i0.ɵɵelementStart(21, "thead");
                i0.ɵɵelementStart(22, "tr");
                i0.ɵɵelementStart(23, "th");
                i0.ɵɵtext(24);
                i0.ɵɵpipe(25, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "th");
                i0.ɵɵtext(27);
                i0.ɵɵpipe(28, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "tbody");
                i0.ɵɵtemplate(30, TenantsComponent_tr_30_Template, 15, 9, "tr", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "nz-modal", 11);
                i0.ɵɵlistener("nzVisibleChange", function TenantsComponent_Template_nz_modal_nzVisibleChange_31_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantsComponent_Template_nz_modal_nzOnCancel_31_listener() { return ctx.isModalVisible = false; });
                i0.ɵɵtemplate(32, TenantsComponent_ng_template_32_Template, 2, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(34, TenantsComponent_ng_template_34_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(36, TenantsComponent_ng_template_36_Template, 7, 9, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(38, TenantsComponent_ng_template_38_Template, 9, 11, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(40, TenantsComponent_ng_template_40_Template, 8, 8, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(42, "ng-alain-feature-management", 17);
                i0.ɵɵlistener("visibleChange", function TenantsComponent_Template_ng_alain_feature_management_visibleChange_42_listener($event) { return ctx.visibleFeatures = $event; });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(17);
                var _r2 = i0.ɵɵreference(33);
                var _r4 = i0.ɵɵreference(35);
                var _r6 = i0.ɵɵreference(37);
                i0.ɵɵproperty("nzBordered", false);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzGutter", i0.ɵɵpureFunction0(38, _c0));
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 22, "AbpIdentity::PagerSearch"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(9, 24, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Create")("nzType", "primary");
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 26, "AbpTenantManagement::NewTenant"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(18, 28, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", i0.ɵɵpipeBind1(19, 30, ctx.totalCount$))("nzLoading", i0.ɵɵpipeBind1(20, 32, ctx.list.isLoading$))("nzFrontPagination", false);
                i0.ɵɵadvance(8);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 34, "AbpTenantManagement::DisplayName:TenantName"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 36, "AbpTenantManagement::Actions"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", _r0.data);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("visible", ctx.visibleFeatures)("providerKey", ctx.providerKey);
            }
        }, directives: [i6.NzCardComponent, i7.NzRowDirective, i7.NzColDirective, i8.NzFormItemComponent, i8.NzFormLabelComponent, i8.NzFormControlComponent, i9.NzInputDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i10.NzButtonComponent, i11.NzWaveDirective, i12.ɵNzTransitionPatchDirective, i1.PermissionDirective, i13.NzIconDirective, i14.NzTableComponent, i14.NzTheadComponent, i14.NzTrDirective, i14.NzTableCellDirective, i14.NzThMeasureDirective, i14.NzTbodyComponent, i15.NgForOf, i16.NzModalComponent, i17.FeatureManagementComponent, i18.NzDropDownADirective, i18.NzDropDownDirective, i18.NzDropdownMenuComponent, i19.NzMenuDirective, i19.NzMenuItemDirective, i15.NgTemplateOutlet, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i1.FormSubmitDirective, i8.NzFormDirective, i4.FormGroupDirective, i20.ValidationGroupDirective, i4.FormControlName, i20.ValidationDirective, i15.NgIf, i21.NzCheckboxComponent], pipes: [i1.LocalizationPipe, i15.AsyncPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-tenants',
                        templateUrl: './tenants.component.html',
                        providers: [i1.ListService]
                    }]
            }], function () { return [{ type: i1.ListService }, { type: i2.ConfirmationService }, { type: i3.TenantManagementService }, { type: i4.FormBuilder }, { type: i5.Store }]; }, null);
    })();

    var TenantManagementNgAlainModule = /** @class */ (function () {
        function TenantManagementNgAlainModule() {
        }
        TenantManagementNgAlainModule.forChild = function () {
            return {
                ngModule: TenantManagementNgAlainModule,
                providers: [],
            };
        };
        TenantManagementNgAlainModule.forLazy = function () {
            return new i1.LazyModuleFactory(TenantManagementNgAlainModule.forChild());
        };
        return TenantManagementNgAlainModule;
    }());
    TenantManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementNgAlainModule });
    TenantManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementNgAlainModule_Factory(t) { return new (t || TenantManagementNgAlainModule)(); }, imports: [[
                basic.NgAlainBasicModule,
                i17.FeatureManagementNgAlainModule,
                wrap.TenantManagementWrapModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementNgAlainModule, { declarations: [TenantsComponent], imports: [basic.NgAlainBasicModule,
                i17.FeatureManagementNgAlainModule,
                wrap.TenantManagementWrapModule], exports: [TenantsComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantManagementNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TenantsComponent],
                        entryComponents: [TenantsComponent],
                        exports: [TenantsComponent],
                        imports: [
                            basic.NgAlainBasicModule,
                            i17.FeatureManagementNgAlainModule,
                            wrap.TenantManagementWrapModule
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TenantManagementNgAlainModule = TenantManagementNgAlainModule;
    exports.TenantsComponent = TenantsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management-ng-alain.umd.js.map
