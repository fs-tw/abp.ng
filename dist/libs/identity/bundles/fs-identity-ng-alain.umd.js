(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/identity/wrap'), require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.identity'), require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/forms'), require('@ngxs/store'), require('ng-zorro-antd/card'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/form'), require('ng-zorro-antd/input'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/table'), require('@angular/common'), require('ng-zorro-antd/modal'), require('@fs/permission-management/ng-alain'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/menu'), require('@ngx-validate/core'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/tag')) :
    typeof define === 'function' && define.amd ? define('@fs/identity/ng-alain', ['exports', '@fs/identity/wrap', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.identity', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/forms', '@ngxs/store', 'ng-zorro-antd/card', 'ng-zorro-antd/grid', 'ng-zorro-antd/form', 'ng-zorro-antd/input', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/icon', 'ng-zorro-antd/table', '@angular/common', 'ng-zorro-antd/modal', '@fs/permission-management/ng-alain', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/menu', '@ngx-validate/core', 'ng-zorro-antd/tabs', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/tag'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.identity = global.fs.identity || {}, global.fs.identity['ng-alain'] = {}), global.fs.identity.wrap, global.ng.core, global.basic, global.i5, global.i1, global.i2, global.ng.forms, global.i4, global.i6, global.i7, global.i8, global.i9, global.i10, global.i11, global.i12, global.i13, global.i14, global.ng.common, global.i16, global.i17, global.i18, global.i19, global.i20, global.i21, global.i22, global.i16$1));
}(this, (function (exports, wrap, i0, basic, i5, i1, i2, i3, i4, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i16$1) { 'use strict';

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

    function UsersComponent_tr_36_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "td");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "td");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "td");
            i0.ɵɵelementStart(8, "a", 16);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "abpLocalization");
            i0.ɵɵelement(11, "i", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "nz-dropdown-menu", null, 18);
            i0.ɵɵelementStart(14, "ul", 19);
            i0.ɵɵelementStart(15, "li", 20);
            i0.ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_15_listener() { i0.ɵɵrestoreView(_r11_1); var data_r8 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.edit(data_r8.id); });
            i0.ɵɵtext(16);
            i0.ɵɵpipe(17, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "li", 20);
            i0.ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_18_listener() { i0.ɵɵrestoreView(_r11_1); var data_r8 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.openPermissionsModal(data_r8.id); });
            i0.ɵɵtext(19);
            i0.ɵɵpipe(20, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "li", 20);
            i0.ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_21_listener() { i0.ɵɵrestoreView(_r11_1); var data_r8 = ctx.$implicit; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.delete(data_r8.id, data_r8.userName); });
            i0.ɵɵtext(22);
            i0.ɵɵpipe(23, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r8 = ctx.$implicit;
            var _r9 = i0.ɵɵreference(13);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r8.userName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r8.email);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r8.phoneNumber);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzDropdownMenu", _r9);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 11, "AbpIdentity::Actions"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Users.Update");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 13, "AbpIdentity::Edit"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Users.ManagePermissions");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(20, 15, "AbpIdentity::Permissions"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Users.Delete");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(23, 17, "AbpIdentity::Delete"), "");
        }
    }
    function UsersComponent_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "abpLocalization");
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, (ctx_r3.selected == null ? null : ctx_r3.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewUser"), " ");
        }
    }
    function UsersComponent_ng_template_40_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 23);
            i0.ɵɵelement(1, "i", 24);
            i0.ɵɵelementEnd();
        }
    }
    function UsersComponent_ng_template_40_form_2_nz_form_control_55_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-form-control");
            i0.ɵɵelementStart(1, "label", 43);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var roleGroup_r18 = ctx.$implicit;
            var i_r19 = ctx.index;
            var ctx_r17 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", roleGroup_r18.controls[ctx_r17.roles[i_r19].name]);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r17.roles[i_r19].name, " ");
        }
    }
    function UsersComponent_ng_template_40_form_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 25);
            i0.ɵɵlistener("ngSubmit", function UsersComponent_ng_template_40_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.save(); });
            i0.ɵɵelementStart(1, "nz-tabset");
            i0.ɵɵelementStart(2, "nz-tab", 26);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementStart(4, "nz-form-item");
            i0.ɵɵelementStart(5, "nz-form-label", 27);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "nz-form-control", 28);
            i0.ɵɵelement(9, "input", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "nz-form-item");
            i0.ɵɵelementStart(11, "nz-form-label", 30);
            i0.ɵɵtext(12);
            i0.ɵɵpipe(13, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "nz-form-control", 28);
            i0.ɵɵelement(15, "input", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "nz-form-item");
            i0.ɵɵelementStart(17, "nz-form-label", 32);
            i0.ɵɵtext(18);
            i0.ɵɵpipe(19, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "nz-form-control", 28);
            i0.ɵɵelement(21, "input", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "nz-form-item");
            i0.ɵɵelementStart(23, "nz-form-label", 34);
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "nz-form-control", 28);
            i0.ɵɵelement(27, "input", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "nz-form-item");
            i0.ɵɵelementStart(29, "nz-form-label", 36);
            i0.ɵɵtext(30);
            i0.ɵɵpipe(31, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "nz-form-control", 28);
            i0.ɵɵelement(33, "input", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "nz-form-item");
            i0.ɵɵelementStart(35, "nz-form-label", 38);
            i0.ɵɵtext(36);
            i0.ɵɵpipe(37, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "nz-form-control", 28);
            i0.ɵɵelement(39, "input", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "nz-form-item");
            i0.ɵɵelementStart(41, "nz-form-control");
            i0.ɵɵelementStart(42, "label", 40);
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44);
            i0.ɵɵpipe(45, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "nz-form-item");
            i0.ɵɵelementStart(47, "nz-form-control");
            i0.ɵɵelementStart(48, "label", 41);
            i0.ɵɵelementStart(49, "span");
            i0.ɵɵtext(50);
            i0.ɵɵpipe(51, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "nz-tab", 26);
            i0.ɵɵpipe(53, "abpLocalization");
            i0.ɵɵelementStart(54, "nz-form-item");
            i0.ɵɵtemplate(55, UsersComponent_ng_template_40_form_2_nz_form_control_55_Template, 4, 2, "nz-form-control", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("formGroup", ctx_r16.form);
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("nzTitle", i0.ɵɵpipeBind1(3, 37, "AbpIdentity::UserInformations"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 39, "AbpIdentity::UserName"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(13, 41, "AbpIdentity::DisplayName:Name"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 43, "AbpIdentity::DisplayName:Surname"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(25, 45, "AbpIdentity::Password"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(31, 47, "AbpIdentity::EmailAddress"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(37, 49, "AbpIdentity::PhoneNumber"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(45, 51, "AbpIdentity::DisplayName:LockoutEnabled"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(51, 53, "AbpIdentity::DisplayName:TwoFactorEnabled"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("nzTitle", i0.ɵɵpipeBind1(53, 55, "AbpIdentity::Roles"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r16.roleGroups)("ngForTrackBy", ctx_r16.trackByFn);
        }
    }
    function UsersComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, UsersComponent_ng_template_40_ng_template_0_Template, 2, 0, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, UsersComponent_ng_template_40_form_2_Template, 56, 57, "form", 22);
        }
        if (rf & 2) {
            var _r14 = i0.ɵɵreference(1);
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r5.form)("ngIfElse", _r14);
        }
    }
    function UsersComponent_ng_template_42_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 44);
            i0.ɵɵlistener("click", function UsersComponent_ng_template_42_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.isModalVisible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 45);
            i0.ɵɵlistener("click", function UsersComponent_ng_template_42_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.save(); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx_r7.form == null ? null : ctx_r7.form.invalid);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 5, "AbpIdentity::Save"), " ");
        }
    }
    var _c0 = function () { return { xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }; };
    var _c1 = function () { return { top: "20px" }; };
    var UsersComponent = /** @class */ (function (_super) {
        __extends(UsersComponent, _super);
        function UsersComponent(_list, _confirmationService, _fb, _store, _identityService) {
            var _this = _super.call(this, _list, _confirmationService, _fb, _store, _identityService) || this;
            _this._list = _list;
            _this._confirmationService = _confirmationService;
            _this._fb = _fb;
            _this._store = _store;
            _this._identityService = _identityService;
            return _this;
        }
        return UsersComponent;
    }(i5.UsersComponent));
    UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(i0.ɵɵdirectiveInject(i1.ListService), i0.ɵɵdirectiveInject(i2.ConfirmationService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Store), i0.ɵɵdirectiveInject(i5.IdentityService)); };
    UsersComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UsersComponent, selectors: [["ng-alain-users"]], features: [i0.ɵɵProvidersFeature([i1.ListService]), i0.ɵɵInheritDefinitionFeature], decls: 45, vars: 47, consts: [[3, "nzBordered"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzMd", "8", "nzSm", "24"], ["nzFor", "no"], ["nz-input", "", "type", "search", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["providerName", "U", 3, "visible", "providerKey", "visibleChange"], ["nz-dropdown", "", 1, "ant-dropdown-link", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "abpPermission", "click"], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [3, "nzTitle"], ["nzRequired", "", "nzFor", "user-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "userName", "id", "user-name"], ["nzFor", "name", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzFor", "surname", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "surname", "id", "surname"], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "phoneNumber", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "phoneNumber", "id", "phoneNumber"], ["nz-checkbox", "", "formControlName", "lockoutEnabled"], ["nz-checkbox", "", "formControlName", "twoFactorEnabled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 3, "formControl"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function UsersComponent_Template(rf, ctx) {
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
                i0.ɵɵlistener("ngModelChange", function UsersComponent_Template_input_ngModelChange_8_listener($event) { return ctx.list.filter = $event; });
                i0.ɵɵpipe(9, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "button", 5);
                i0.ɵɵlistener("click", function UsersComponent_Template_button_click_10_listener() { return ctx.add(); });
                i0.ɵɵelement(11, "i", 6);
                i0.ɵɵelementStart(12, "span");
                i0.ɵɵtext(13);
                i0.ɵɵpipe(14, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "div", 7);
                i0.ɵɵelementStart(16, "nz-table", 8, 9);
                i0.ɵɵlistener("nzPageIndexChange", function UsersComponent_Template_nz_table_nzPageIndexChange_16_listener($event) { return ctx.list.page = $event - 1; });
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
                i0.ɵɵelementStart(29, "th");
                i0.ɵɵtext(30);
                i0.ɵɵpipe(31, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "th");
                i0.ɵɵtext(33);
                i0.ɵɵpipe(34, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "tbody");
                i0.ɵɵtemplate(36, UsersComponent_tr_36_Template, 24, 19, "tr", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "nz-modal", 11);
                i0.ɵɵlistener("nzVisibleChange", function UsersComponent_Template_nz_modal_nzVisibleChange_37_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function UsersComponent_Template_nz_modal_nzOnCancel_37_listener() { return ctx.isModalVisible = false; });
                i0.ɵɵtemplate(38, UsersComponent_ng_template_38_Template, 2, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(40, UsersComponent_ng_template_40_Template, 3, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(42, UsersComponent_ng_template_42_Template, 6, 7, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "ng-alain-permission-management", 15);
                i0.ɵɵlistener("visibleChange", function UsersComponent_Template_ng_alain_permission_management_visibleChange_44_listener($event) { return ctx.visiblePermissions = $event; });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(17);
                var _r2 = i0.ɵɵreference(39);
                var _r4 = i0.ɵɵreference(41);
                var _r6 = i0.ɵɵreference(43);
                i0.ɵɵproperty("nzBordered", false);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzGutter", i0.ɵɵpureFunction0(45, _c0));
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 25, "AbpIdentity::PagerSearch"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(9, 27, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("abpPermission", "AbpIdentity.Users.Create")("nzType", "primary");
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 29, "AbpIdentity::NewUser"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(18, 31, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", i0.ɵɵpipeBind1(19, 33, ctx.totalCount$))("nzLoading", i0.ɵɵpipeBind1(20, 35, ctx.list.isLoading$))("nzFrontPagination", false);
                i0.ɵɵadvance(8);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 37, "AbpIdentity::DisplayName:UserName"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 39, "AbpIdentity::DisplayName:Email"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(31, 41, "AbpIdentity::DisplayName:PhoneNumber"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(34, 43, "AbpIdentity::Actions"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", _r0.data);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzStyle", i0.ɵɵpureFunction0(46, _c1))("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("visible", ctx.visiblePermissions)("providerKey", ctx.providerKey);
            }
        }, directives: [i6.NzCardComponent, i7.NzRowDirective, i7.NzColDirective, i8.NzFormItemComponent, i8.NzFormLabelComponent, i8.NzFormControlComponent, i9.NzInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i10.NzButtonComponent, i11.NzWaveDirective, i12.ɵNzTransitionPatchDirective, i1.PermissionDirective, i13.NzIconDirective, i14.NzTableComponent, i14.NzTheadComponent, i14.NzTrDirective, i14.NzTableCellDirective, i14.NzThMeasureDirective, i14.NzTbodyComponent, i15.NgForOf, i16.NzModalComponent, i17.PermissionManagementComponent, i18.NzDropDownADirective, i18.NzDropDownDirective, i18.NzDropdownMenuComponent, i19.NzMenuDirective, i19.NzMenuItemDirective, i15.NgIf, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i1.FormSubmitDirective, i8.NzFormDirective, i3.FormGroupDirective, i20.ValidationGroupDirective, i21.NzTabSetComponent, i21.NzTabComponent, i3.FormControlName, i20.ValidationDirective, i22.NzCheckboxComponent, i3.FormControlDirective], pipes: [i1.LocalizationPipe, i15.AsyncPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(UsersComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-users',
                        templateUrl: './users.component.html',
                        providers: [i1.ListService],
                    }]
            }], function () { return [{ type: i1.ListService }, { type: i2.ConfirmationService }, { type: i3.FormBuilder }, { type: i4.Store }, { type: i5.IdentityService }]; }, null);
    })();

    function RolesComponent_tr_21_nz_tag_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-tag", 18);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("nzColor", "#17a2b8");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsPublic"), "");
        }
    }
    function RolesComponent_tr_21_nz_tag_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-tag", 18);
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("nzColor", "#28a745");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsDefault"), "");
        }
    }
    function RolesComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtext(2);
            i0.ɵɵtemplate(3, RolesComponent_tr_21_nz_tag_3_Template, 3, 4, "nz-tag", 12);
            i0.ɵɵtemplate(4, RolesComponent_tr_21_nz_tag_4_Template, 3, 4, "nz-tag", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "td");
            i0.ɵɵelementStart(6, "a", 13);
            i0.ɵɵtext(7);
            i0.ɵɵpipe(8, "abpLocalization");
            i0.ɵɵelement(9, "i", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "nz-dropdown-menu", null, 15);
            i0.ɵɵelementStart(12, "ul", 16);
            i0.ɵɵelementStart(13, "li", 17);
            i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_13_listener() { i0.ɵɵrestoreView(_r13_1); var data_r8 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.edit(data_r8.id); });
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "li", 17);
            i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_16_listener() { i0.ɵɵrestoreView(_r13_1); var data_r8 = ctx.$implicit; var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.openPermissionsModal(data_r8.name); });
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "li", 17);
            i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_19_listener() { i0.ɵɵrestoreView(_r13_1); var data_r8 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.delete(data_r8.id, data_r8.name); });
            i0.ɵɵtext(20);
            i0.ɵɵpipe(21, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r8 = ctx.$implicit;
            var _r11 = i0.ɵɵreference(11);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", data_r8.name, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", data_r8.isPublic);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", data_r8.isDefault);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzDropdownMenu", _r11);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 11, "AbpIdentity::Actions"), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Update");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 13, "AbpIdentity::Edit"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.ManagePermissions");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 15, "AbpIdentity::Permissions"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Delete");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 17, "AbpIdentity::Delete"), "");
        }
    }
    function RolesComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "abpLocalization");
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, (ctx_r3.selected == null ? null : ctx_r3.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"), " ");
        }
    }
    function RolesComponent_ng_template_25_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 21);
            i0.ɵɵelement(1, "i", 22);
            i0.ɵɵelementEnd();
        }
    }
    function RolesComponent_ng_template_25_form_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 23);
            i0.ɵɵlistener("ngSubmit", function RolesComponent_ng_template_25_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.save(); });
            i0.ɵɵelementStart(1, "nz-form-item");
            i0.ɵɵelementStart(2, "nz-form-label", 24);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nz-form-control", 25);
            i0.ɵɵelement(6, "input", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "nz-form-item");
            i0.ɵɵelementStart(8, "nz-form-control", 27);
            i0.ɵɵelementStart(9, "label", 28);
            i0.ɵɵelementStart(10, "span");
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "label", 29);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15);
            i0.ɵɵpipe(16, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("formGroup", ctx_r18.form);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 10, "AbpIdentity::RoleName"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSpan", 14)("nzOffset", 6);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 12, "AbpIdentity::DisplayName:IsDefault"), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 14, "AbpIdentity::DisplayName:IsPublic"), " ");
        }
    }
    function RolesComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, RolesComponent_ng_template_25_ng_template_0_Template, 2, 0, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, RolesComponent_ng_template_25_form_2_Template, 17, 16, "form", 20);
        }
        if (rf & 2) {
            var _r16 = i0.ɵɵreference(1);
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r5.form)("ngIfElse", _r16);
        }
    }
    function RolesComponent_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 30);
            i0.ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.isModalVisible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 31);
            i0.ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r22_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.save(); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx_r7.form == null ? null : ctx_r7.form.invalid);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 5, "AbpIdentity::Save"), " ");
        }
    }
    var _c0$1 = function () { return { top: "20px" }; };
    var RolesComponent = /** @class */ (function (_super) {
        __extends(RolesComponent, _super);
        function RolesComponent(_list, _confirmationService, _fb, _store) {
            var _this = _super.call(this, _list, _confirmationService, _fb, _store) || this;
            _this._list = _list;
            _this._confirmationService = _confirmationService;
            _this._fb = _fb;
            _this._store = _store;
            return _this;
        }
        return RolesComponent;
    }(i5.RolesComponent));
    RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(i0.ɵɵdirectiveInject(i1.ListService), i0.ɵɵdirectiveInject(i2.ConfirmationService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Store)); };
    RolesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RolesComponent, selectors: [["ng-alain-roles"]], features: [i0.ɵɵProvidersFeature([i1.ListService]), i0.ɵɵInheritDefinitionFeature], decls: 30, vars: 32, consts: [[3, "nzBordered"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["providerName", "R", 3, "visible", "providerKey", "visibleChange"], [3, "nzColor", 4, "ngIf"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "abpPermission", "click"], [3, "nzColor"], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name", "id", "role-name"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "isDefault"], ["nz-checkbox", "", "formControlName", "isPublic"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function RolesComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-card", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function RolesComponent_Template_button_click_1_listener() { return ctx.add(); });
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementStart(3, "span");
                i0.ɵɵtext(4);
                i0.ɵɵpipe(5, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "div", 3);
                i0.ɵɵelementStart(7, "nz-table", 4, 5);
                i0.ɵɵlistener("nzPageIndexChange", function RolesComponent_Template_nz_table_nzPageIndexChange_7_listener($event) { return ctx.list.page = $event - 1; });
                i0.ɵɵpipe(9, "async");
                i0.ɵɵpipe(10, "async");
                i0.ɵɵpipe(11, "async");
                i0.ɵɵelementStart(12, "thead");
                i0.ɵɵelementStart(13, "tr");
                i0.ɵɵelementStart(14, "th");
                i0.ɵɵtext(15);
                i0.ɵɵpipe(16, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "th");
                i0.ɵɵtext(18);
                i0.ɵɵpipe(19, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "tbody");
                i0.ɵɵtemplate(21, RolesComponent_tr_21_Template, 22, 19, "tr", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "nz-modal", 7);
                i0.ɵɵlistener("nzVisibleChange", function RolesComponent_Template_nz_modal_nzVisibleChange_22_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function RolesComponent_Template_nz_modal_nzOnCancel_22_listener() { return ctx.isModalVisible = false; });
                i0.ɵɵtemplate(23, RolesComponent_ng_template_23_Template, 2, 3, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(25, RolesComponent_ng_template_25_Template, 3, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(27, RolesComponent_ng_template_27_Template, 6, 7, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "ng-alain-permission-management", 11);
                i0.ɵɵlistener("visibleChange", function RolesComponent_Template_ng_alain_permission_management_visibleChange_29_listener($event) { return ctx.visiblePermissions = $event; });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                var _r2 = i0.ɵɵreference(24);
                var _r4 = i0.ɵɵreference(26);
                var _r6 = i0.ɵɵreference(28);
                i0.ɵɵproperty("nzBordered", false);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Create")("nzType", "primary");
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 19, "AbpIdentity::NewRole"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(9, 21, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", i0.ɵɵpipeBind1(10, 23, ctx.totalCount$))("nzLoading", i0.ɵɵpipeBind1(11, 25, ctx.list.isLoading$))("nzFrontPagination", false);
                i0.ɵɵadvance(8);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 27, "AbpIdentity::DisplayName:RoleName"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 29, "AbpIdentity::Actions"));
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", _r0.data);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzStyle", i0.ɵɵpureFunction0(31, _c0$1))("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("visible", ctx.visiblePermissions)("providerKey", ctx.providerKey);
            }
        }, directives: [i6.NzCardComponent, i10.NzButtonComponent, i11.NzWaveDirective, i12.ɵNzTransitionPatchDirective, i1.PermissionDirective, i13.NzIconDirective, i14.NzTableComponent, i14.NzTheadComponent, i14.NzTrDirective, i14.NzTableCellDirective, i14.NzThMeasureDirective, i14.NzTbodyComponent, i15.NgForOf, i16.NzModalComponent, i17.PermissionManagementComponent, i15.NgIf, i18.NzDropDownADirective, i18.NzDropDownDirective, i18.NzDropdownMenuComponent, i19.NzMenuDirective, i19.NzMenuItemDirective, i16$1.NzTagComponent, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i1.FormSubmitDirective, i8.NzFormDirective, i3.FormGroupDirective, i20.ValidationGroupDirective, i7.NzRowDirective, i8.NzFormItemComponent, i7.NzColDirective, i8.NzFormLabelComponent, i8.NzFormControlComponent, i9.NzInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i20.ValidationDirective, i22.NzCheckboxComponent], pipes: [i1.LocalizationPipe, i15.AsyncPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RolesComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-roles',
                        templateUrl: './roles.component.html',
                        providers: [i1.ListService],
                    }]
            }], function () { return [{ type: i1.ListService }, { type: i2.ConfirmationService }, { type: i3.FormBuilder }, { type: i4.Store }]; }, null);
    })();

    //import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
    //import { InitialService} from './services/initial.service'
    var IdentityNgAlainModule = /** @class */ (function () {
        function IdentityNgAlainModule() {
        }
        IdentityNgAlainModule.forChild = function () {
            return {
                ngModule: IdentityNgAlainModule,
                providers: [],
            };
        };
        IdentityNgAlainModule.forLazy = function () {
            return new i1.LazyModuleFactory(IdentityNgAlainModule.forChild());
        };
        return IdentityNgAlainModule;
    }());
    IdentityNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityNgAlainModule });
    IdentityNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityNgAlainModule_Factory(t) { return new (t || IdentityNgAlainModule)(); }, imports: [[
                i1.CoreModule,
                basic.NgAlainBasicModule,
                i17.PermissionManagementNgAlainModule,
                wrap.IdentityWrapModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityNgAlainModule, { declarations: [UsersComponent, RolesComponent], imports: [i1.CoreModule,
                basic.NgAlainBasicModule,
                i17.PermissionManagementNgAlainModule,
                wrap.IdentityWrapModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IdentityNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [UsersComponent, RolesComponent],
                        entryComponents: [UsersComponent, RolesComponent],
                        imports: [
                            i1.CoreModule,
                            basic.NgAlainBasicModule,
                            i17.PermissionManagementNgAlainModule,
                            wrap.IdentityWrapModule,
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IdentityNgAlainModule = IdentityNgAlainModule;
    exports.RolesComponent = RolesComponent;
    exports.UsersComponent = UsersComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-identity-ng-alain.umd.js.map
