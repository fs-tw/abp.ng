(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/basic'), require('@abp/ng.permission-management'), require('rxjs/operators'), require('@ngxs/store'), require('@angular/common'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/checkbox'), require('@angular/forms'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('@abp/ng.core'), require('@fs/permission-management/wrap')) :
    typeof define === 'function' && define.amd ? define('@fs/permission-management/ng-alain', ['exports', '@angular/core', '@fs/ng-alain/basic', '@abp/ng.permission-management', 'rxjs/operators', '@ngxs/store', '@angular/common', 'ng-zorro-antd/modal', 'ng-zorro-antd/checkbox', '@angular/forms', 'ng-zorro-antd/menu', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', '@abp/ng.core', '@fs/permission-management/wrap'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['permission-management'] = global.fs['permission-management'] || {}, global.fs['permission-management']['ng-alain'] = {}), global.ng.core, global.basic, global.ng_permissionManagement, global.rxjs.operators, global.i1, global.ng.common, global.i3, global.i4, global.ng.forms, global.i6, global.i7, global.i8, global.i9, global.i10, global.fs['permission-management'].wrap));
}(this, (function (exports, i0, basic, ng_permissionManagement, operators, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, wrap) { 'use strict';

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

    function PermissionManagementComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
            i0.ɵɵpipe(1, "abpLocalization");
        }
        if (rf & 2) {
            var data_r1 = i0.ɵɵnextContext().ngIf;
            i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(1, 2, "AbpPermissionManagement::Permissions"), " - ", data_r1.entityName, " ");
        }
    }
    function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 13);
            i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var group_r11 = ctx.$implicit; var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.onChangeGroup(group_r11); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var group_r11 = ctx.$implicit;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("nzSelected", (ctx_r9.selectedGroup == null ? null : ctx_r9.selectedGroup.name) === (group_r11 == null ? null : group_r11.name));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(group_r11 == null ? null : group_r11.displayName);
        }
    }
    function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var provider_r17 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2("", provider_r17.providerName, ": ", provider_r17.providerKey, "");
        }
    }
    function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "nz-checkbox-wrapper");
            i0.ɵɵelementStart(2, "label", 14);
            i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template_label_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r19_1); var permission_r14 = ctx.$implicit; var ctx_r18 = i0.ɵɵnextContext(3); return ctx_r18.onClickCheckbox(permission_r14); });
            i0.ɵɵtext(3);
            i0.ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_span_4_Template, 2, 2, "span", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var permission_r14 = ctx.$implicit;
            var ctx_r10 = i0.ɵɵnextContext(3);
            i0.ɵɵstyleProp("margin-left", permission_r14.margin + "px");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r10.getChecked(permission_r14.name))("nzDisabled", ctx_r10.isGrantedByOtherProviderName(permission_r14.grantedProviders));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", permission_r14.displayName, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", permission_r14.grantedProviders);
        }
    }
    function PermissionManagementComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-checkbox-wrapper");
            i0.ɵɵelementStart(1, "label", 5);
            i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.selectAllTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onClickSelectAll(); });
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 6);
            i0.ɵɵelementStart(5, "div", 7);
            i0.ɵɵelementStart(6, "ul", 8);
            i0.ɵɵtemplate(7, PermissionManagementComponent_ng_container_0_ng_template_4_li_7_Template, 2, 2, "li", 9);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 10);
            i0.ɵɵelementStart(10, "div", 11);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "nz-checkbox-wrapper");
            i0.ɵɵelementStart(13, "label", 5);
            i0.ɵɵlistener("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.selectThisTab = $event; })("ngModelChange", function PermissionManagementComponent_ng_container_0_ng_template_4_Template_label_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onClickSelectThisTab(); });
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, PermissionManagementComponent_ng_container_0_ng_template_4_div_16_Template, 5, 6, "div", 12);
            i0.ɵɵpipe(17, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r5.selectAllTab)("nzIndeterminate", ctx_r5.selectAllIndeterminate);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 11, "AbpPermissionManagement::SelectAllInAllTabs"), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(8, 13, ctx_r5.groups$))("ngForTrackBy", ctx_r5.trackByFn);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r5.selectedGroup == null ? null : ctx_r5.selectedGroup.displayName);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx_r5.selectThisTab)("nzIndeterminate", ctx_r5.selectAllThisTabIndeterminate);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 15, "AbpPermissionManagement::SelectAllInThisTab"), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(17, 17, ctx_r5.selectedGroupPermissions$))("ngForTrackBy", ctx_r5.trackByFn);
        }
    }
    function PermissionManagementComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.visible = false; });
            i0.ɵɵtext(1);
            i0.ɵɵpipe(2, "abpLocalization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 17);
            i0.ɵɵlistener("click", function PermissionManagementComponent_ng_container_0_ng_template_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r26_1); var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.submit(); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "abpLocalization");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::Cancel"), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpIdentity::Save"), " ");
        }
    }
    function PermissionManagementComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "nz-modal", 1);
            i0.ɵɵlistener("nzVisibleChange", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzVisibleChange_1_listener($event) { i0.ɵɵrestoreView(_r29_1); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.visible = $event; })("nzAfterOpen", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzAfterOpen_1_listener() { i0.ɵɵrestoreView(_r29_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.initModal(); })("nzOnCancel", function PermissionManagementComponent_ng_container_0_Template_nz_modal_nzOnCancel_1_listener() { i0.ɵɵrestoreView(_r29_1); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.visible = false; });
            i0.ɵɵtemplate(2, PermissionManagementComponent_ng_container_0_ng_template_2_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, PermissionManagementComponent_ng_container_0_ng_template_4_Template, 18, 19, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, PermissionManagementComponent_ng_container_0_ng_template_6_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var _r2 = i0.ɵɵreference(3);
            var _r4 = i0.ɵɵreference(5);
            var _r6 = i0.ɵɵreference(7);
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzVisible", ctx_r0.visible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        }
    }
    var _c0 = function (a0) { return { entityName: a0 }; };
    var PermissionManagementComponent = /** @class */ (function (_super) {
        __extends(PermissionManagementComponent, _super);
        function PermissionManagementComponent(_store, _renderer) {
            var _this = _super.call(this, _store, _renderer) || this;
            _this._store = _store;
            _this._renderer = _renderer;
            _this.hideBadges = false;
            _this._visible = false;
            _this.visibleChange = new i0.EventEmitter();
            _this.selectAllIndeterminate = false;
            _this.selectAllThisTabIndeterminate = false;
            console.log('yc');
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
    PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(t) { return new (t || PermissionManagementComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    PermissionManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PermissionManagementComponent, selectors: [["ng-alain-permission-management"]], inputs: { providerName: "providerName", providerKey: "providerKey", hideBadges: "hideBadges", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[4, "ngIf"], ["nzWidth", "1040", 3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzAfterOpen", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["nz-checkbox", "", 3, "ngModel", "nzIndeterminate", "ngModelChange"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "content"], [1, "title"], [3, "margin-left", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "ngModelChange"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function PermissionManagementComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PermissionManagementComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpureFunction1(3, _c0, i0.ɵɵpipeBind1(1, 1, ctx.entityName$)));
            }
        }, directives: [i2.NgIf, i3.NzModalComponent, i4.NzCheckboxWrapperComponent, i4.NzCheckboxComponent, i5.NgControlStatus, i5.NgModel, i6.NzMenuDirective, i2.NgForOf, i7.ɵNzTransitionPatchDirective, i6.NzMenuItemDirective, i8.NzButtonComponent, i9.NzWaveDirective], pipes: [i2.AsyncPipe, i10.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PermissionManagementComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ng-alain-permission-management',
                        styleUrls: ['./permission-management.component.less'],
                        templateUrl: './permission-management.component.html'
                    }]
            }], function () { return [{ type: i1.Store }, { type: i0.Renderer2 }]; }, { providerName: [{
                    type: i0.Input
                }], providerKey: [{
                    type: i0.Input
                }], hideBadges: [{
                    type: i0.Input
                }], visible: [{
                    type: i0.Input
                }], visibleChange: [{
                    type: i0.Output
                }] });
    })();

    //import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
    //import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
    //import { InitialService} from './services/initial.service'
    var PermissionManagementNgAlainModule = /** @class */ (function () {
        function PermissionManagementNgAlainModule() {
        }
        return PermissionManagementNgAlainModule;
    }());
    PermissionManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: PermissionManagementNgAlainModule });
    PermissionManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PermissionManagementNgAlainModule_Factory(t) { return new (t || PermissionManagementNgAlainModule)(); }, imports: [[
                i10.CoreModule,
                basic.NgAlainBasicModule,
                wrap.PermissionManagementWrapModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PermissionManagementNgAlainModule, { declarations: [PermissionManagementComponent], imports: [i10.CoreModule,
                basic.NgAlainBasicModule,
                wrap.PermissionManagementWrapModule], exports: [PermissionManagementComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(PermissionManagementNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionManagementComponent],
                        entryComponents: [PermissionManagementComponent],
                        imports: [
                            i10.CoreModule,
                            basic.NgAlainBasicModule,
                            wrap.PermissionManagementWrapModule
                        ],
                        exports: [
                            PermissionManagementComponent
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PermissionManagementComponent = PermissionManagementComponent;
    exports.PermissionManagementNgAlainModule = PermissionManagementNgAlainModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-permission-management-ng-alain.umd.js.map
