(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/shared'), require('@angular/common'), require('@angular/router'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/message'), require('@delon/theme'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/input'), require('@angular/forms'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip'), require('@abp/ng.core'), require('@ngxs/store'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/menu'), require('snq'), require('@fs/ng-alain/core'), require('@delon/auth'), require('@delon/abc/sidebar-nav'), require('@ngx-translate/core'), require('screenfull'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/grid'), require('date-fns/add'), require('date-fns/formatDistanceToNow'), require('date-fns/parse'), require('ng-zorro-antd/i18n'), require('@delon/abc/notice-icon'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/card'), require('ng-zorro-antd/avatar'), require('@delon/abc/global-footer')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/layout', ['exports', '@angular/core', '@fs/ng-alain/shared', '@angular/common', '@angular/router', '@delon/util', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/message', '@delon/theme', 'ng-zorro-antd/drawer', 'ng-zorro-antd/divider', 'ng-zorro-antd/tabs', 'ng-zorro-antd/input', '@angular/forms', 'ng-zorro-antd/input-number', 'ng-zorro-antd/switch', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/alert', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip', '@abp/ng.core', '@ngxs/store', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/menu', 'snq', '@fs/ng-alain/core', '@delon/auth', '@delon/abc/sidebar-nav', '@ngx-translate/core', 'screenfull', 'ng-zorro-antd/spin', 'ng-zorro-antd/grid', 'date-fns/add', 'date-fns/formatDistanceToNow', 'date-fns/parse', 'ng-zorro-antd/i18n', '@delon/abc/notice-icon', 'ng-zorro-antd/modal', 'ng-zorro-antd/badge', 'ng-zorro-antd/card', 'ng-zorro-antd/avatar', '@delon/abc/global-footer'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].layout = {}), global.ng.core, global.fs['ng-alain'].shared, global.ng.common, global.ng.router, global.i3, global.rxjs, global.rxjs.operators, global.i1$1, global.i1$2, global.i4$1, global.i6, global.i7, global.i1$3, global.ng.forms, global.i4$2, global.i5, global.i11, global.i12, global.i4$3, global.i14, global.i4$4, global.i16, global.i2, global.i2$1, global.i1$4, global.i5$1, global.snq, global.fs['ng-alain'].core, global.auth, global.i7$1, global.i3$3, global.screenfull, global.i5$2, global.i6$1, global.add, global.formatDistanceToNow, global.parse, global.i2$2, global.i3$4, global.i1$5, global.i2$3, global.i8, global.i10, global.i3$5));
}(this, (function (exports, i0, shared, i4, i1, i3, rxjs, operators, i1$1, i1$2, i4$1, i6, i7, i1$3, i3$1, i4$2, i5, i11, i12, i4$3, i14, i4$4, i16, i2, i2$1, i1$4, i5$1, snq, i3$2, auth, i7$1, i3$3, screenfull, i5$2, i6$1, add, formatDistanceToNow, parse, i2$2, i3$4, i1$5, i2$3, i8, i10, i3$5) { 'use strict';

    snq = snq && Object.prototype.hasOwnProperty.call(snq, 'default') ? snq['default'] : snq;
    add = add && Object.prototype.hasOwnProperty.call(add, 'default') ? add['default'] : add;
    formatDistanceToNow = formatDistanceToNow && Object.prototype.hasOwnProperty.call(formatDistanceToNow, 'default') ? formatDistanceToNow['default'] : formatDistanceToNow;
    parse = parse && Object.prototype.hasOwnProperty.call(parse, 'default') ? parse['default'] : parse;

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

    var _c0 = function () { return { standalone: true }; };
    function SettingDrawerItemComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "input", 4);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.i.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r0.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
        }
    }
    function SettingDrawerItemComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "input", 5);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.i.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r1.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
        }
    }
    function SettingDrawerItemComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "nz-input-number", 6);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.pxVal = $event; })("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.pxChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r2.pxVal)("nzMin", ctx_r2.i.min)("nzMax", ctx_r2.i.max)("nzStep", ctx_r2.i.step || 2)("nzFormatter", ctx_r2.format);
        }
    }
    function SettingDrawerItemComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "nz-switch", 7);
            i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_8_Template_nz_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.i.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r3.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
        }
    }
    function SettingDrawerItemComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementContainerEnd();
        }
    }
    var _c1 = ["*"];
    var SettingDrawerItemComponent = /** @class */ (function () {
        function SettingDrawerItemComponent() {
            this.i = {};
            this.format = function (value) { return value + " px"; };
        }
        Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
            set: function (val) {
                this.i = val;
                if (val.type === 'px') {
                    this.pxVal = +val.value.replace('px', '');
                }
            },
            enumerable: true,
            configurable: true
        });
        SettingDrawerItemComponent.prototype.pxChange = function (val) {
            this.i.value = val + "px";
        };
        return SettingDrawerItemComponent;
    }());
    SettingDrawerItemComponent.ɵfac = function SettingDrawerItemComponent_Factory(t) { return new (t || SettingDrawerItemComponent)(); };
    SettingDrawerItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerItemComponent, selectors: [["setting-drawer-item"]], hostVars: 2, hostBindings: function SettingDrawerItemComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("setting-drawer__body-item", true);
            }
        }, inputs: { data: "data" }, ngContentSelectors: _c1, decls: 10, vars: 7, consts: [[1, "pl-sm", "text-grey"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-input", "", "type", "color", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nz-input", "", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "nzFormatter", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function SettingDrawerItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "span");
                i0.ɵɵtext(1);
                i0.ɵɵelementStart(2, "span", 0);
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 1);
                i0.ɵɵtemplate(5, SettingDrawerItemComponent_ng_container_5_Template, 2, 3, "ng-container", 2);
                i0.ɵɵtemplate(6, SettingDrawerItemComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
                i0.ɵɵtemplate(7, SettingDrawerItemComponent_ng_container_7_Template, 2, 5, "ng-container", 2);
                i0.ɵɵtemplate(8, SettingDrawerItemComponent_ng_container_8_Template, 2, 3, "ng-container", 2);
                i0.ɵɵtemplate(9, SettingDrawerItemComponent_ng_container_9_Template, 2, 0, "ng-container", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate(ctx.i.label);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.i.tip);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitch", ctx.i.type);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "color");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "input");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "px");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngSwitchCase", "switch");
            }
        }, directives: [i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i1$3.NzInputDirective, i3$1.DefaultValueAccessor, i3$1.NgControlStatus, i3$1.NgModel, i4$2.NzInputNumberComponent, i5.NzSwitchComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingDrawerItemComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'setting-drawer-item',
                        templateUrl: './setting-drawer-item.component.html',
                        // tslint:disable-next-line: no-host-metadata-property
                        host: {
                            '[class.setting-drawer__body-item]': 'true',
                        },
                    }]
            }], null, { data: [{
                    type: i0.Input
                }] });
    })();

    function SettingDrawerComponent_span_5_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 20);
        }
    }
    var _c0$1 = function (a0) { return { "background-color": a0 }; };
    function SettingDrawerComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 18);
            i0.ɵɵlistener("click", function SettingDrawerComponent_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4_1); var c_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeColor(c_r1.color); });
            i0.ɵɵtemplate(1, SettingDrawerComponent_span_5_i_1_Template, 1, 0, "i", 19);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var c_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c0$1, c_r1.color));
            i0.ɵɵproperty("nzTooltipTitle", c_r1.key);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.color === c_r1.color);
        }
    }
    var _c1$1 = function (a0) { return { "setting-drawer__handle-opened": a0 }; };
    var ALAINDEFAULTVAR = 'alain-default-vars';
    var DEFAULT_COLORS = [
        {
            key: 'dust',
            color: '#F5222D',
        },
        {
            key: 'volcano',
            color: '#FA541C',
        },
        {
            key: 'sunset',
            color: '#FAAD14',
        },
        {
            key: 'cyan',
            color: '#13C2C2',
        },
        {
            key: 'green',
            color: '#52C41A',
        },
        {
            key: 'daybreak',
            color: '#1890ff',
        },
        {
            key: 'geekblue',
            color: '#2F54EB',
        },
        {
            key: 'purple',
            color: '#722ED1',
        },
        {
            key: 'black',
            color: '#001529',
        },
    ];
    var DEFAULT_VARS = {
        'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
        'alain-default-header-hg': {
            label: '高',
            type: 'px',
            default: '64px',
            max: 300,
            min: 24,
        },
        'alain-default-header-bg': {
            label: '背景色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-header-padding': {
            label: '顶部左右内边距',
            type: 'px',
            default: '16px',
        },
        // 侧边栏
        'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
        'alain-default-aside-bg': {
            label: '背景',
            type: 'color',
            default: '#ffffff',
        },
        'alain-default-aside-collapsed-wd': {
            label: '收缩宽度',
            type: 'px',
            default: '64px',
        },
        'alain-default-aside-nav-padding-top-bottom': {
            label: '项上下内边距',
            type: 'px',
            default: '8px',
            step: 8,
        },
        // 主菜单
        'alain-default-aside-nav-fs': {
            label: '菜单字号',
            type: 'px',
            default: '14px',
            min: 14,
            max: 30,
        },
        'alain-default-aside-collapsed-nav-fs': {
            label: '收缩菜单字号',
            type: 'px',
            default: '24px',
            min: 24,
            max: 32,
        },
        'alain-default-aside-nav-item-height': {
            label: '菜单项高度',
            type: 'px',
            default: '38px',
            min: 24,
            max: 64,
        },
        'alain-default-aside-nav-text-color': {
            label: '菜单文本颜色',
            type: 'color',
            default: 'rgba(0, 0, 0, 0.65)',
            rgba: true,
        },
        'alain-default-aside-nav-text-hover-color': {
            label: '菜单文本悬停颜色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-aside-nav-group-text-color': {
            label: '菜单分组文本颜色',
            type: 'color',
            default: 'rgba(0, 0, 0, 0.43)',
            rgba: true,
        },
        'alain-default-aside-nav-selected-text-color': {
            label: '菜单激活时文本颜色',
            type: 'color',
            default: '@primary-color',
            tip: '默认同主色系',
        },
        'alain-default-aside-nav-selected-bg': {
            label: '菜单激活时背景颜色',
            type: 'color',
            default: '#fcfcfc',
        },
        // 内容
        'alain-default-content-bg': {
            label: '背景色',
            type: 'color',
            default: '#f5f7fa',
        },
        'alain-default-content-heading-bg': {
            label: '标题背景色',
            type: 'color',
            default: '#fafbfc',
        },
        'alain-default-content-heading-border': {
            label: '标题底部边框色',
            type: 'color',
            default: '#efe3e5',
        },
        'alain-default-content-padding': {
            label: '内边距',
            type: 'px',
            default: '24px',
            min: 0,
            max: 128,
            step: 8,
        },
        // zorro组件修正
        'form-state-visual-feedback-enabled': {
            label: '开启表单元素的视觉反馈',
            type: 'switch',
            default: true,
        },
        'preserve-white-spaces-enabled': {
            label: '开启 preserveWhitespaces',
            type: 'switch',
            default: true,
        },
        'nz-table-img-radius': {
            label: '表格中：图片圆角',
            type: 'px',
            default: '4px',
            min: 0,
            max: 128,
        },
        'nz-table-img-margin-right': {
            label: '表格中：图片右外边距',
            type: 'px',
            default: '4px',
            min: 0,
            max: 128,
        },
        'nz-table-img-max-width': {
            label: '表格中：图片最大宽度',
            type: 'px',
            default: '32px',
            min: 8,
            max: 128,
        },
        'nz-table-img-max-height': {
            label: '表格中：图片最大高度',
            type: 'px',
            default: '32px',
            min: 8,
            max: 128,
        },
    };
    var SettingDrawerComponent = /** @class */ (function () {
        function SettingDrawerComponent(cdr, msg, settingSrv, lazy, zone, doc) {
            this.cdr = cdr;
            this.msg = msg;
            this.settingSrv = settingSrv;
            this.lazy = lazy;
            this.zone = zone;
            this.doc = doc;
            this.loadedLess = false;
            this.collapse = false;
            this.data = {};
            this.colors = DEFAULT_COLORS;
            this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
            this.resetData(this.cachedData, false);
        }
        Object.defineProperty(SettingDrawerComponent.prototype, "layout", {
            get: function () {
                return this.settingSrv.layout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
            get: function () {
                return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
            get: function () {
                return DEFAULT_VARS['primary-color'].default;
            },
            enumerable: true,
            configurable: true
        });
        SettingDrawerComponent.prototype.loadLess = function () {
            var _this = this;
            if (this.loadedLess) {
                return Promise.resolve();
            }
            return this.lazy
                .loadStyle('./assets/alain-default.less', 'stylesheet/less')
                .then(function () {
                var lessConfigNode = _this.doc.createElement('script');
                lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
                _this.doc.body.appendChild(lessConfigNode);
            })
                .then(function () { return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'); })
                .then(function () {
                _this.loadedLess = true;
            });
        };
        SettingDrawerComponent.prototype.genVars = function () {
            var _a;
            var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
            var vars = (_a = {},
                _a["@primary-color"] = color,
                _a);
            validKeys.filter(function (key) { return key !== 'primary-color'; }).forEach(function (key) { return (vars["@" + key] = data[key].value); });
            this.setLayout(ALAINDEFAULTVAR, vars);
            return vars;
        };
        SettingDrawerComponent.prototype.runLess = function () {
            var _this = this;
            var _a = this, zone = _a.zone, msg = _a.msg, cdr = _a.cdr;
            var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
            setTimeout(function () {
                zone.runOutsideAngular(function () {
                    _this.loadLess().then(function () {
                        window.less.modifyVars(_this.genVars()).then(function () {
                            msg.success('成功');
                            msg.remove(msgId);
                            zone.run(function () { return cdr.detectChanges(); });
                        });
                    });
                });
            }, 200);
        };
        SettingDrawerComponent.prototype.toggle = function () {
            this.collapse = !this.collapse;
        };
        SettingDrawerComponent.prototype.changeColor = function (color) {
            var _this = this;
            this.color = color;
            Object.keys(DEFAULT_VARS)
                .filter(function (key) { return DEFAULT_VARS[key].default === '@primary-color'; })
                .forEach(function (key) { return delete _this.cachedData["@" + key]; });
            this.resetData(this.cachedData, false);
        };
        SettingDrawerComponent.prototype.setLayout = function (name, value) {
            this.settingSrv.setLayout(name, value);
        };
        SettingDrawerComponent.prototype.resetData = function (nowData, run) {
            var _this = this;
            if (run === void 0) { run = true; }
            nowData = nowData || {};
            var data = i3.deepCopy(DEFAULT_VARS);
            Object.keys(data).forEach(function (key) {
                var value = nowData["@" + key] || data[key].default || '';
                data[key].value = value === "@primary-color" ? _this.color : value;
            });
            this.data = data;
            if (run) {
                this.cdr.detectChanges();
                this.runLess();
            }
        };
        Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
            get: function () {
                var _this = this;
                return Object.keys(this.data).filter(function (key) { return _this.data[key].value !== _this.data[key].default; });
            },
            enumerable: true,
            configurable: true
        });
        SettingDrawerComponent.prototype.apply = function () {
            this.runLess();
        };
        SettingDrawerComponent.prototype.reset = function () {
            this.color = this.DEFAULT_PRIMARY;
            this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
            this.resetData({});
        };
        SettingDrawerComponent.prototype.copyVar = function () {
            var vars = this.genVars();
            var copyContent = Object.keys(vars)
                .map(function (key) { return key + ": " + vars[key] + ";"; })
                .join('\n');
            i3.copy(copyContent);
            this.msg.success('Copy success');
        };
        return SettingDrawerComponent;
    }());
    SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1$1.NzMessageService), i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i3.LazyService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i4.DOCUMENT)); };
    SettingDrawerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["setting-drawer"]], hostVars: 2, hostBindings: function SettingDrawerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("setting-drawer", true);
            }
        }, decls: 51, vars: 26, consts: [[3, "nzVisible", "nzWidth", "nzVisibleChange", "nzOnClose"], [1, "setting-drawer__content"], [1, "setting-drawer__body", "setting-drawer__theme"], [1, "setting-drawer__title"], ["nz-tooltip", "", "class", "setting-drawer__theme-tag", 3, "style", "nzTooltipTitle", "click", 4, "ngFor", "ngForOf"], [1, "setting-drawer__body"], ["nzTitle", "\u9876\u90E8"], [3, "data"], ["nzTitle", "\u4FA7\u8FB9\u680F"], ["nzTitle", "\u5185\u5BB9"], ["nzTitle", "\u5176\u5B83"], [1, "setting-drawer__body-item"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["type", "button", "nz-button", "", "nzType", "primary", 3, "click"], ["type", "button", "nz-button", "", 3, "click"], ["nzType", "warning", "nzMessage", "\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less", 1, "mt-md"], [1, "setting-drawer__handle", 3, "ngClass", "click"], ["nz-icon", "", 1, "setting-drawer__handle-icon", 3, "nzType"], ["nz-tooltip", "", 1, "setting-drawer__theme-tag", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function SettingDrawerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-drawer", 0);
                i0.ɵɵlistener("nzVisibleChange", function SettingDrawerComponent_Template_nz_drawer_nzVisibleChange_0_listener($event) { return ctx.collapse = $event; })("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.toggle(); });
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "h3", 3);
                i0.ɵɵtext(4, "\u4E3B\u9898\u8272");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, SettingDrawerComponent_span_5_Template, 2, 6, "span", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "nz-divider");
                i0.ɵɵelementStart(7, "div", 5);
                i0.ɵɵelementStart(8, "h3", 3);
                i0.ɵɵtext(9, "\u8BBE\u7F6E");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "nz-tabset");
                i0.ɵɵelementStart(11, "nz-tab", 6);
                i0.ɵɵelementStart(12, "div", 5);
                i0.ɵɵelement(13, "setting-drawer-item", 7);
                i0.ɵɵelement(14, "setting-drawer-item", 7);
                i0.ɵɵelement(15, "setting-drawer-item", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "nz-tab", 8);
                i0.ɵɵelement(17, "setting-drawer-item", 7);
                i0.ɵɵelement(18, "setting-drawer-item", 7);
                i0.ɵɵelement(19, "setting-drawer-item", 7);
                i0.ɵɵelement(20, "setting-drawer-item", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "nz-tab", 9);
                i0.ɵɵelement(22, "setting-drawer-item", 7);
                i0.ɵɵelement(23, "setting-drawer-item", 7);
                i0.ɵɵelement(24, "setting-drawer-item", 7);
                i0.ɵɵelement(25, "setting-drawer-item", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "nz-tab", 10);
                i0.ɵɵelement(27, "setting-drawer-item", 7);
                i0.ɵɵelement(28, "setting-drawer-item", 7);
                i0.ɵɵelement(29, "setting-drawer-item", 7);
                i0.ɵɵelement(30, "setting-drawer-item", 7);
                i0.ɵɵelement(31, "setting-drawer-item", 7);
                i0.ɵɵelement(32, "setting-drawer-item", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(33, "nz-divider");
                i0.ɵɵelementStart(34, "div", 5);
                i0.ɵɵelementStart(35, "div", 11);
                i0.ɵɵtext(36, " \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F ");
                i0.ɵɵelementStart(37, "nz-switch", 12);
                i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener($event) { return ctx.layout.fixed = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener() { return ctx.setLayout("fixed", ctx.layout.fixed); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(38, "div", 11);
                i0.ɵɵtext(39, " \u8272\u5F31\u6A21\u5F0F ");
                i0.ɵɵelementStart(40, "nz-switch", 12);
                i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.layout.colorWeak = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener() { return ctx.setLayout("colorWeak", ctx.layout.colorWeak); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(41, "nz-divider");
                i0.ɵɵelementStart(42, "button", 13);
                i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_42_listener() { return ctx.apply(); });
                i0.ɵɵtext(43, "\u9884\u89C8");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "button", 14);
                i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_44_listener() { return ctx.reset(); });
                i0.ɵɵtext(45, "\u91CD\u7F6E");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(46, "button", 14);
                i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_46_listener() { return ctx.copyVar(); });
                i0.ɵɵtext(47, "\u62F7\u8D1D");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(48, "nz-alert", 15);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(49, "div", 16);
                i0.ɵɵlistener("click", function SettingDrawerComponent_Template_div_click_49_listener() { return ctx.toggle(); });
                i0.ɵɵelement(50, "i", 17);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzVisible", ctx.collapse)("nzWidth", 500);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngForOf", ctx.colors);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("data", ctx.data["alain-default-header-hg"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-header-bg"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-header-padding"]);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("data", ctx.data["alain-default-aside-wd"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-aside-bg"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-aside-collapsed-wd"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-aside-nav-padding-top-bottom"]);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("data", ctx.data["alain-default-content-bg"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-content-heading-bg"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-content-heading-border"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["alain-default-content-padding"]);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("data", ctx.data["form-state-visual-feedback-enabled"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["preserve-white-spaces-enabled"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["nz-table-img-radius"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["nz-table-img-margin-right"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["nz-table-img-max-width"]);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("data", ctx.data["nz-table-img-max-height"]);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.layout.fixed);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.layout.colorWeak);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c1$1, ctx.collapse));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzType", !ctx.collapse ? "setting" : "close");
            }
        }, directives: [i4$1.NzDrawerComponent, i4.NgForOf, i6.NzDividerComponent, i7.NzTabSetComponent, i7.NzTabComponent, SettingDrawerItemComponent, i5.NzSwitchComponent, i3$1.NgControlStatus, i3$1.NgModel, i11.NzButtonComponent, i12.NzWaveDirective, i4$3.ɵNzTransitionPatchDirective, i14.NzAlertComponent, i4.NgClass, i4$4.NzIconDirective, i16.NzTooltipDirective, i4.NgIf], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingDrawerComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'setting-drawer',
                        templateUrl: './setting-drawer.component.html',
                        // tslint:disable-next-line: no-host-metadata-property
                        host: {
                            '[class.setting-drawer]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i0.ChangeDetectorRef }, { type: i1$1.NzMessageService }, { type: i1$2.SettingsService }, { type: i3.LazyService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }];
        }, null);
    })();

    function HeaderI18nComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵelement(1, "i", 6);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵelement(4, "i", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵproperty("nzDropdownMenu", _r2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, ctx_r0.defaultLanguage$), " ");
        }
    }
    function HeaderI18nComponent_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 8);
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵproperty("nzDropdownMenu", _r2);
        }
    }
    function HeaderI18nComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 9);
            i0.ɵɵlistener("click", function HeaderI18nComponent_li_5_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var lang_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.onChangeLang(lang_r4.cultureName); });
            i0.ɵɵelementStart(1, "span", 10);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var lang_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzSelected", lang_r4.cultureName === ctx_r3.selectedLangCulture);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-label", lang_r4 == null ? null : lang_r4.displayName);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(lang_r4.cultureName);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", lang_r4 == null ? null : lang_r4.displayName, " ");
        }
    }
    var HeaderI18nComponent = /** @class */ (function () {
        function HeaderI18nComponent(settings, i18n, doc, store) {
            this.settings = settings;
            this.i18n = i18n;
            this.doc = doc;
            this.store = store;
            /** Whether to display language text */
            this.showLangText = true;
        }
        Object.defineProperty(HeaderI18nComponent.prototype, "defaultLanguage$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq(function () { return languages.find(function (lang) { return lang.cultureName === _this.selectedLangCulture; }).displayName; }); }, ''));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "dropdownLanguages$", {
            get: function () {
                var _this = this;
                return this.languages$.pipe(operators.map(function (languages) { return snq(function () { return languages.filter(function (lang) { return lang.cultureName !== _this.selectedLangCulture; }); }); }, []));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "selectedLangCulture", {
            get: function () {
                return this.store.selectSnapshot(i2.SessionState.getLanguage);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "langs", {
            get: function () {
                return this.i18n.getLangs();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeaderI18nComponent.prototype, "curLangCode", {
            get: function () {
                return this.settings.layout.lang;
            },
            enumerable: true,
            configurable: true
        });
        HeaderI18nComponent.prototype.onChangeLang = function (cultureName) {
            this.store.dispatch(new i2.SetLanguage(cultureName));
        };
        return HeaderI18nComponent;
    }());
    HeaderI18nComponent.ɵfac = function HeaderI18nComponent_Factory(t) { return new (t || HeaderI18nComponent)(i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i1$2.ALAIN_I18N_TOKEN), i0.ɵɵdirectiveInject(i4.DOCUMENT), i0.ɵɵdirectiveInject(i2$1.Store)); };
    HeaderI18nComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderI18nComponent, selectors: [["header-i18n"]], inputs: { showLangText: "showLangText" }, decls: 7, vars: 5, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu", 4, "ngIf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu", 4, "ngIf"], ["langMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "global"], ["nz-icon", "", "nzType", "down"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["role", "img", 1, "pr-xs"]], template: function HeaderI18nComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, HeaderI18nComponent_div_0_Template, 5, 4, "div", 0);
                i0.ɵɵtemplate(1, HeaderI18nComponent_i_1_Template, 1, 1, "i", 1);
                i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
                i0.ɵɵelementStart(4, "ul", 3);
                i0.ɵɵtemplate(5, HeaderI18nComponent_li_5_Template, 4, 4, "li", 4);
                i0.ɵɵpipe(6, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.showLangText);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.showLangText);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx.dropdownLanguages$));
            }
        }, directives: [i4.NgIf, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i4.NgForOf, i1$4.NzDropDownDirective, i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective, i5$1.NzMenuItemDirective], pipes: [i4.AsyncPipe], encapsulation: 2, changeDetection: 0 });
    __decorate([
        i2$1.Select(i2.ConfigState.getDeep('localization.languages')),
        __metadata("design:type", rxjs.Observable)
    ], HeaderI18nComponent.prototype, "languages$", void 0);
    __decorate([
        i3.InputBoolean(),
        __metadata("design:type", Object)
    ], HeaderI18nComponent.prototype, "showLangText", void 0);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderI18nComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-i18n',
                        template: "\n    <div *ngIf=\"showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\n      <i nz-icon nzType=\"global\"></i>\n      {{ defaultLanguage$ | async }}\n      <i nz-icon nzType=\"down\"></i>\n    </div>\n    <i\n      *ngIf=\"!showLangText\"\n      nz-dropdown\n      [nzDropdownMenu]=\"langMenu\"\n      nzPlacement=\"bottomRight\"\n      nz-icon\n      nzType=\"global\"\n    ></i>\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <li\n          nz-menu-item\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          [nzSelected]=\"lang.cultureName === selectedLangCulture\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n        >\n          <span role=\"img\" [attr.aria-label]=\"lang?.displayName\" class=\"pr-xs\">{{ lang.cultureName }}</span>\n          {{ lang?.displayName }}\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i1$2.SettingsService }, { type: i3$2.I18NService, decorators: [{
                            type: i0.Inject,
                            args: [i1$2.ALAIN_I18N_TOKEN]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }, { type: i2$1.Store }];
        }, { languages$: [], showLangText: [{
                    type: i0.Input
                }] });
    })();

    var HeaderUserComponent = /** @class */ (function () {
        function HeaderUserComponent(settings, router, authService, tokenService) {
            this.settings = settings;
            this.router = router;
            this.authService = authService;
            this.tokenService = tokenService;
        }
        HeaderUserComponent.prototype.logout = function () {
            var _this = this;
            //this.tokenService.clear();
            //this.router.navigateByUrl(this.tokenService.login_url);
            this.authService.logout().subscribe(function () {
                _this.router.navigate(['/'], { state: { redirectUrl: _this.router.url } });
            });
        };
        return HeaderUserComponent;
    }());
    HeaderUserComponent.ɵfac = function HeaderUserComponent_Factory(t) { return new (t || HeaderUserComponent)(i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(auth.DA_SERVICE_TOKEN)); };
    HeaderUserComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderUserComponent, selectors: [["header-user"]], decls: 15, vars: 10, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", "d-flex", "align-items-center", "px-sm", 3, "nzDropdownMenu"], ["userMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "width-sm"], ["nz-menu-item", "", "routerLink", "/account/manage-profile"], ["nz-icon", "", "nzType", "user", 1, "mr-sm"], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "logout", 1, "mr-sm"]], template: function HeaderUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1);
                i0.ɵɵpipe(2, "async");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 1);
                i0.ɵɵelementStart(5, "div", 2);
                i0.ɵɵelementStart(6, "div", 3);
                i0.ɵɵelement(7, "i", 4);
                i0.ɵɵtext(8);
                i0.ɵɵpipe(9, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "li", 5);
                i0.ɵɵelementStart(11, "div", 6);
                i0.ɵɵlistener("click", function HeaderUserComponent_Template_div_click_11_listener() { return ctx.logout(); });
                i0.ɵɵelement(12, "i", 7);
                i0.ɵɵtext(13);
                i0.ɵɵpipe(14, "abpLocalization");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                var tmp_1_0 = null;
                i0.ɵɵproperty("nzDropdownMenu", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = i0.ɵɵpipeBind1(2, 4, ctx.currentUser$)) == null ? null : tmp_1_0.userName, " ");
                i0.ɵɵadvance(7);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 6, "AbpAccount::ManageYourProfile"), " ");
                i0.ɵɵadvance(5);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 8, "AbpUi::Logout"), " ");
            }
        }, directives: [i1$4.NzDropDownDirective, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i4$3.ɵNzTransitionPatchDirective, i5$1.NzMenuItemDirective, i1.RouterLink, i4$4.NzIconDirective, i5$1.NzMenuDividerDirective], pipes: [i4.AsyncPipe, i2.LocalizationPipe], encapsulation: 2, changeDetection: 0 });
    __decorate([
        i2$1.Select(i2.ConfigState.getOne('currentUser')),
        __metadata("design:type", rxjs.Observable)
    ], HeaderUserComponent.prototype, "currentUser$", void 0);
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderUserComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-user',
                        template: "\n    <div\n      class=\"alain-default__nav-item d-flex align-items-center px-sm\"\n      nz-dropdown\n      nzPlacement=\"bottomRight\"\n      [nzDropdownMenu]=\"userMenu\"\n    >\n      <!--<nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>-->\n      {{ (currentUser$ | async)?.userName }}\n    </div>\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"width-sm\">\n        <div nz-menu-item routerLink=\"/account/manage-profile\">\n          <i nz-icon nzType=\"user\" class=\"mr-sm\"></i>\n          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\n        </div>\n        <!--<div nz-menu-item routerLink=\"/pro/account/settings\">\n          <i nz-icon nzType=\"setting\" class=\"mr-sm\"></i>\n          {{ 'menu.account.settings' | translate }}\n        </div>\n        <div nz-menu-item routerLink=\"/exception/trigger\">\n          <i nz-icon nzType=\"close-circle\" class=\"mr-sm\"></i>\n          {{ 'menu.account.trigger' | translate }}\n        </div>-->\n        <li nz-menu-divider></li>\n        <div nz-menu-item (click)=\"logout()\">\n          <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\n          {{ 'AbpUi::Logout' | abpLocalization }}\n        </div>\n      </div>\n    </nz-dropdown-menu>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i1$2.SettingsService }, { type: i1.Router }, { type: i2.AuthService }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [auth.DA_SERVICE_TOKEN]
                        }] }];
        }, { currentUser$: [] });
    })();

    function HeaderComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate1(" ", ctx_r1.appInfo.name, " ");
        }
    }
    var _c0$2 = function () { return ["/"]; };
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(settings, store) {
            this.settings = settings;
            this.store = store;
        }
        Object.defineProperty(HeaderComponent.prototype, "appInfo", {
            get: function () {
                return this.store.selectSnapshot(i2.ConfigState.getApplicationInfo);
            },
            enumerable: true,
            configurable: true
        });
        HeaderComponent.prototype.toggleCollapsedSidebar = function () {
            this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
        };
        HeaderComponent.prototype.searchToggleChange = function () {
            this.searchToggleStatus = !this.searchToggleStatus;
        };
        return HeaderComponent;
    }());
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i2$1.Store)); };
    HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["layout-header"]], decls: 22, vars: 6, consts: [[1, "alain-default__header-logo"], [1, "alain-default__header-logo-link", 3, "routerLink"], ["src", "./assets/logo-full.svg", 1, "alain-default__header-logo-expanded", 2, "max-height", "40px", 3, "alt"], ["src", "./assets/logo.svg", 1, "alain-default__header-logo-collapsed", 2, "max-height", "30px", 3, "alt"], ["appName", ""], [1, "alain-default__nav-wrap"], [1, "alain-default__nav"], [1, "alain-default__nav-item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "setting"], ["settingsMenu", "nzDropdownMenu"], ["nz-menu", "", 2, "width", "200px"], ["nz-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "a", 1);
                i0.ɵɵelement(2, "img", 2);
                i0.ɵɵelement(3, "img", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, HeaderComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "ul", 6);
                i0.ɵɵelementStart(8, "li");
                i0.ɵɵelementStart(9, "div", 7);
                i0.ɵɵlistener("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.toggleCollapsedSidebar(); });
                i0.ɵɵelement(10, "i", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "ul", 6);
                i0.ɵɵelementStart(12, "li");
                i0.ɵɵelementStart(13, "div", 9);
                i0.ɵɵelement(14, "i", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "nz-dropdown-menu", null, 11);
                i0.ɵɵelementStart(17, "div", 12);
                i0.ɵɵelementStart(18, "div", 13);
                i0.ɵɵelement(19, "header-i18n");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "li");
                i0.ɵɵelement(21, "header-user");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r2 = i0.ɵɵreference(16);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c0$2));
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
                i0.ɵɵadvance(7);
                i0.ɵɵpropertyInterpolate1("nzType", "menu-", ctx.settings.layout.collapsed ? "unfold" : "fold", "");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("nzDropdownMenu", _r2);
            }
        }, directives: [i1.RouterLinkWithHref, i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective, i1$4.NzDropDownDirective, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i5$1.NzMenuItemDirective, HeaderI18nComponent, HeaderUserComponent], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-header',
                        templateUrl: './header.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1$2.SettingsService }, { type: i2$1.Store }]; }, null);
    })();

    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent(settings, menuService, routes, configStateService, localizationPipe) {
            var _this = this;
            this.settings = settings;
            this.menuService = menuService;
            this.routes = routes;
            this.configStateService = configStateService;
            this.localizationPipe = localizationPipe;
            this.routes.visible$.subscribe(function (x) {
                _this.setMenu(x);
            });
        }
        SidebarComponent.prototype.setMenu = function (routes) {
            var _this = this;
            var result = [];
            var condition = function (x) { return !!!x.invisible && _this.isGrantedPolicy(x.requiredPolicy); };
            routes.filter(condition).forEach(function (first) {
                var group = {
                    text: _this.localizationPipe.transform(first.name),
                    group: true,
                    hideInBreadcrumb: true,
                    children: []
                };
                result.push(group);
                first.children.filter(condition).forEach(function (second) {
                    if (second.children.length === 0) {
                        var left = {
                            text: _this.localizationPipe.transform(second.name),
                            link: second.path,
                            icon: second.iconClass
                        };
                        if (left.link.split('/').length > 2)
                            group.children.push(left);
                    }
                    if (second.children.length != 0) {
                        var node_1 = {
                            text: _this.localizationPipe.transform(second.name),
                            icon: second.iconClass,
                            children: []
                        };
                        group.children.push(node_1);
                        second.children.filter(condition).forEach(function (third) {
                            var left = {
                                text: _this.localizationPipe.transform(third.name),
                                link: third.path,
                                icon: third.iconClass
                            };
                            node_1.children.push(left);
                        });
                    }
                });
            });
            this.menuService.clear();
            this.menuService.add(result);
        };
        SidebarComponent.prototype.isGrantedPolicy = function (requiredPolicy) {
            if (!!requiredPolicy) {
                return this.configStateService.getGrantedPolicy(requiredPolicy);
            }
            return true;
        };
        return SidebarComponent;
    }());
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i1$2.MenuService), i0.ɵɵdirectiveInject(i2.RoutesService), i0.ɵɵdirectiveInject(i2.ConfigStateService), i0.ɵɵdirectiveInject(i2.LocalizationPipe)); };
    SidebarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["layout-sidebar"]], decls: 11, vars: 6, consts: [[1, "alain-default__aside-inner"], ["userMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "routerLink", "/pro/account/center"], ["nz-menu-item", "", "routerLink", "/pro/account/settings"], [1, "d-block", "py-lg"]], template: function SidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "nz-dropdown-menu", null, 1);
                i0.ɵɵelementStart(3, "ul", 2);
                i0.ɵɵelementStart(4, "li", 3);
                i0.ɵɵtext(5);
                i0.ɵɵpipe(6, "translate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "li", 4);
                i0.ɵɵtext(8);
                i0.ɵɵpipe(9, "translate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "sidebar-nav", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 2, "menu.account.center"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 4, "menu.account.settings"));
            }
        }, directives: [i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i4$3.ɵNzTransitionPatchDirective, i5$1.NzMenuItemDirective, i1.RouterLink, i7$1.SidebarNavComponent], pipes: [i3$3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SidebarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-sidebar',
                        templateUrl: './sidebar.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1$2.SettingsService }, { type: i1$2.MenuService }, { type: i2.RoutesService }, { type: i2.ConfigStateService }, { type: i2.LocalizationPipe }]; }, null);
    })();

    var LayoutThemeBtnComponent = /** @class */ (function () {
        function LayoutThemeBtnComponent(renderer, configSrv) {
            this.renderer = renderer;
            this.configSrv = configSrv;
            this.theme = 'default';
        }
        LayoutThemeBtnComponent.prototype.ngOnInit = function () {
            this.initTheme();
        };
        LayoutThemeBtnComponent.prototype.initTheme = function () {
            this.theme = localStorage.getItem('site-theme') || 'default';
            this.updateChartTheme();
            this.onThemeChange(this.theme);
        };
        LayoutThemeBtnComponent.prototype.updateChartTheme = function () {
            this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
        };
        LayoutThemeBtnComponent.prototype.onThemeChange = function (theme) {
            this.theme = theme;
            this.renderer.setAttribute(document.body, 'data-theme', theme);
            var dom = document.getElementById('site-theme');
            if (dom) {
                dom.remove();
            }
            localStorage.removeItem('site-theme');
            if (theme !== 'default') {
                var style = document.createElement('link');
                style.type = 'text/css';
                style.rel = 'stylesheet';
                style.id = 'site-theme';
                style.href = "assets/style." + theme + ".css";
                localStorage.setItem('site-theme', theme);
                document.body.append(style);
            }
            this.updateChartTheme();
        };
        return LayoutThemeBtnComponent;
    }());
    LayoutThemeBtnComponent.ɵfac = function LayoutThemeBtnComponent_Factory(t) { return new (t || LayoutThemeBtnComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.AlainConfigService)); };
    LayoutThemeBtnComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutThemeBtnComponent, selectors: [["layout-theme-btn"]], decls: 14, vars: 1, consts: [["nz-dropdown", "", "nzPlacement", "topCenter", 1, "ant-avatar", "ant-avatar-circle", "ant-avatar-icon", 3, "nzDropdownMenu"], ["role", "img", "width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "currentColor", 1, "anticon"], ["fill-rule", "evenodd"], ["fill-rule", "nonzero"], ["d", "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"]], template: function LayoutThemeBtnComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(1, "svg", 1);
                i0.ɵɵelementStart(2, "g", 2);
                i0.ɵɵelementStart(3, "g", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(5, "nz-dropdown-menu", null, 5);
                i0.ɵɵelementStart(7, "ul", 6);
                i0.ɵɵelementStart(8, "li", 7);
                i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_8_listener() { return ctx.onThemeChange("default"); });
                i0.ɵɵtext(9, "Default Theme");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "li", 7);
                i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_10_listener() { return ctx.onThemeChange("dark"); });
                i0.ɵɵtext(11, "Dark Theme");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "li", 7);
                i0.ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_12_listener() { return ctx.onThemeChange("compact"); });
                i0.ɵɵtext(13, "Compact Theme");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵproperty("nzDropdownMenu", _r0);
            }
        }, directives: [i1$4.NzDropDownDirective, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i4$3.ɵNzTransitionPatchDirective, i5$1.NzMenuItemDirective], styles: ["[_nghost-%COMP%]    {bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}[_nghost-%COMP%]    -active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}[_nghost-%COMP%]     .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}[_nghost-%COMP%]     .ant-avatar:hover{color:#1890ff}"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutThemeBtnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-theme-btn',
                        templateUrl: './theme-btn.component.html',
                        styleUrls: ['./theme-btn.component.less'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i3.AlainConfigService }]; }, null);
    })();

    var _c0$3 = ["settingHost"];
    function LayoutDefaultComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 5);
        }
    }
    function LayoutDefaultComponent_ng_template_5_Template(rf, ctx) { }
    var LayoutDefaultComponent = /** @class */ (function () {
        function LayoutDefaultComponent(router, msgSrv, resolver, settings, el, renderer, doc) {
            var _this = this;
            this.resolver = resolver;
            this.settings = settings;
            this.el = el;
            this.renderer = renderer;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.isFetching = false;
            // scroll to top in change page
            router.events.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (evt) {
                if (!_this.isFetching && evt instanceof i1.RouteConfigLoadStart) {
                    _this.isFetching = true;
                }
                if (evt instanceof i1.NavigationError || evt instanceof i1.NavigationCancel) {
                    _this.isFetching = false;
                    if (evt instanceof i1.NavigationError) {
                        msgSrv.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                    }
                    return;
                }
                if (!(evt instanceof i1.NavigationEnd || evt instanceof i1.RouteConfigLoadEnd)) {
                    return;
                }
                if (_this.isFetching) {
                    setTimeout(function () {
                        _this.isFetching = false;
                    }, 100);
                }
            });
        }
        LayoutDefaultComponent.prototype.setClass = function () {
            var _a;
            var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
            var layout = settings.layout;
            i3.updateHostClass(el.nativeElement, renderer, (_a = {},
                _a['alain-default'] = true,
                _a["alain-default__fixed"] = layout.fixed,
                _a["alain-default__collapsed"] = layout.collapsed,
                _a));
            doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
        };
        LayoutDefaultComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Setting componet for only developer
            if (true) {
                setTimeout(function () {
                    var settingFactory = _this.resolver.resolveComponentFactory(SettingDrawerComponent);
                    _this.settingHost.createComponent(settingFactory);
                }, 22);
            }
        };
        LayoutDefaultComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
            settings.notify.pipe(operators.takeUntil(unsubscribe$)).subscribe(function () { return _this.setClass(); });
            this.setClass();
        };
        LayoutDefaultComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        return LayoutDefaultComponent;
    }());
    LayoutDefaultComponent.ɵfac = function LayoutDefaultComponent_Factory(t) { return new (t || LayoutDefaultComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1$1.NzMessageService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i1$2.SettingsService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i4.DOCUMENT)); };
    LayoutDefaultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutDefaultComponent, selectors: [["layout-default"]], viewQuery: function LayoutDefaultComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$3, true, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.settingHost = _t.first);
            }
        }, decls: 8, vars: 1, consts: [["class", "alain-default__progress-bar", 4, "ngIf"], [1, "alain-default__header"], [1, "alain-default__aside"], [1, "alain-default__content"], ["settingHost", ""], [1, "alain-default__progress-bar"]], template: function LayoutDefaultComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, LayoutDefaultComponent_div_0_Template, 1, 0, "div", 0);
                i0.ɵɵelement(1, "layout-header", 1);
                i0.ɵɵelement(2, "layout-sidebar", 2);
                i0.ɵɵelementStart(3, "section", 3);
                i0.ɵɵelement(4, "router-outlet");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, LayoutDefaultComponent_ng_template_5_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelement(7, "layout-theme-btn");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isFetching);
            }
        }, directives: [i4.NgIf, HeaderComponent, SidebarComponent, i1.RouterOutlet, LayoutThemeBtnComponent], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutDefaultComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-default',
                        templateUrl: './default.component.html',
                    }]
            }], function () {
            return [{ type: i1.Router }, { type: i1$1.NzMessageService }, { type: i0.ComponentFactoryResolver }, { type: i1$2.SettingsService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }];
        }, { settingHost: [{
                    type: i0.ViewChild,
                    args: ['settingHost', { read: i0.ViewContainerRef, static: true }]
                }] });
    })();

    var HeaderFullScreenComponent = /** @class */ (function () {
        function HeaderFullScreenComponent() {
            this.status = false;
        }
        Object.defineProperty(HeaderFullScreenComponent.prototype, "sf", {
            get: function () {
                return screenfull;
            },
            enumerable: true,
            configurable: true
        });
        HeaderFullScreenComponent.prototype._resize = function () {
            this.status = this.sf.isFullscreen;
        };
        HeaderFullScreenComponent.prototype._click = function () {
            if (this.sf.isEnabled) {
                this.sf.toggle();
            }
        };
        return HeaderFullScreenComponent;
    }());
    HeaderFullScreenComponent.ɵfac = function HeaderFullScreenComponent_Factory(t) { return new (t || HeaderFullScreenComponent)(); };
    HeaderFullScreenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderFullScreenComponent, selectors: [["header-fullscreen"]], hostVars: 2, hostBindings: function HeaderFullScreenComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("resize", function HeaderFullScreenComponent_resize_HostBindingHandler() { return ctx._resize(); }, false, i0.ɵɵresolveWindow)("click", function HeaderFullScreenComponent_click_HostBindingHandler() { return ctx._click(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("d-block", true);
            }
        }, decls: 3, vars: 4, consts: [["nz-icon", "", 3, "nzType"]], template: function HeaderFullScreenComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "i", 0);
                i0.ɵɵtext(1);
                i0.ɵɵpipe(2, "translate");
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzType", ctx.status ? "fullscreen-exit" : "fullscreen");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, ctx.status ? "menu.fullscreen.exit" : "menu.fullscreen"), " ");
            }
        }, directives: [i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective], pipes: [i3$3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderFullScreenComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-fullscreen',
                        template: "\n    <i nz-icon [nzType]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
                        // tslint:disable-next-line: no-host-metadata-property
                        host: {
                            '[class.d-block]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, { _resize: [{
                    type: i0.HostListener,
                    args: ['window:resize']
                }], _click: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    var HeaderIconComponent = /** @class */ (function () {
        function HeaderIconComponent(cdr) {
            this.cdr = cdr;
            this.loading = true;
        }
        HeaderIconComponent.prototype.change = function () {
            var _this = this;
            setTimeout(function () {
                _this.loading = false;
                _this.cdr.detectChanges();
            }, 500);
        };
        return HeaderIconComponent;
    }());
    HeaderIconComponent.ɵfac = function HeaderIconComponent_Factory(t) { return new (t || HeaderIconComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    HeaderIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderIconComponent, selectors: [["header-icon"]], decls: 39, vars: 14, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "appstore"], ["iconMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-xl", "animated", "jello"], [3, "nzSpinning", "nzTip"], ["nz-row", "", 1, "app-icons", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 3, "nzSpan"], ["nz-icon", "", "nzType", "calendar", 1, "bg-error", "text-white"], ["nz-icon", "", "nzType", "file", 1, "bg-geekblue", "text-white"], ["nz-icon", "", "nzType", "cloud", 1, "bg-success", "text-white"], ["nz-icon", "", "nzType", "star", 1, "bg-magenta", "text-white"], ["nz-icon", "", "nzType", "team", 1, "bg-purple", "text-white"], ["nz-icon", "", "nzType", "scan", 1, "bg-warning", "text-white"], ["nz-icon", "", "nzType", "pay-circle", 1, "bg-cyan", "text-white"], ["nz-icon", "", "nzType", "printer", 1, "bg-grey", "text-white"]], template: function HeaderIconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("nzVisibleChange", function HeaderIconComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
                i0.ɵɵelement(1, "i", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵelementStart(5, "nz-spin", 4);
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "div", 6);
                i0.ɵɵelement(8, "i", 7);
                i0.ɵɵelementStart(9, "small");
                i0.ɵɵtext(10, "Calendar");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div", 6);
                i0.ɵɵelement(12, "i", 8);
                i0.ɵɵelementStart(13, "small");
                i0.ɵɵtext(14, "Files");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div", 6);
                i0.ɵɵelement(16, "i", 9);
                i0.ɵɵelementStart(17, "small");
                i0.ɵɵtext(18, "Cloud");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div", 6);
                i0.ɵɵelement(20, "i", 10);
                i0.ɵɵelementStart(21, "small");
                i0.ɵɵtext(22, "Star");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div", 6);
                i0.ɵɵelement(24, "i", 11);
                i0.ɵɵelementStart(25, "small");
                i0.ɵɵtext(26, "Team");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "div", 6);
                i0.ɵɵelement(28, "i", 12);
                i0.ɵɵelementStart(29, "small");
                i0.ɵɵtext(30, "QR");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "div", 6);
                i0.ɵɵelement(32, "i", 13);
                i0.ɵɵelementStart(33, "small");
                i0.ɵɵtext(34, "Pay");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "div", 6);
                i0.ɵɵelement(36, "i", 14);
                i0.ɵɵelementStart(37, "small");
                i0.ɵɵtext(38, "Print");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(3);
                i0.ɵɵproperty("nzDropdownMenu", _r0);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("nzSpinning", ctx.loading)("nzTip", "\u6B63\u5728\u8BFB\u53D6\u6570\u636E...");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("nzSpan", 6);
            }
        }, directives: [i1$4.NzDropDownDirective, i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i5$2.NzSpinComponent, i6$1.NzRowDirective, i6$1.NzColDirective], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderIconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-icon',
                        template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"iconMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <i nz-icon nzType=\"appstore\"></i>\n    </div>\n    <nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-xl animated jello\">\n        <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"calendar\" class=\"bg-error text-white\"></i>\n              <small>Calendar</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"file\" class=\"bg-geekblue text-white\"></i>\n              <small>Files</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"cloud\" class=\"bg-success text-white\"></i>\n              <small>Cloud</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"star\" class=\"bg-magenta text-white\"></i>\n              <small>Star</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"team\" class=\"bg-purple text-white\"></i>\n              <small>Team</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"scan\" class=\"bg-warning text-white\"></i>\n              <small>QR</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"pay-circle\" class=\"bg-cyan text-white\"></i>\n              <small>Pay</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"printer\" class=\"bg-grey text-white\"></i>\n              <small>Print</small>\n            </div>\n          </div>\n        </nz-spin>\n      </div>\n    </nz-dropdown-menu>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null);
    })();

    /**
     * 菜单通知
     */
    var HeaderNotifyComponent = /** @class */ (function () {
        function HeaderNotifyComponent(msg, nzI18n) {
            this.msg = msg;
            this.nzI18n = nzI18n;
            this.data = [
                {
                    title: '通知',
                    list: [],
                    emptyText: '你已查看所有通知',
                    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                    clearText: '清空通知',
                },
                {
                    title: '消息',
                    list: [],
                    emptyText: '您已读完所有消息',
                    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                    clearText: '清空消息',
                },
                {
                    title: '待办',
                    list: [],
                    emptyText: '你已完成所有待办',
                    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                    clearText: '清空待办',
                },
            ];
            this.count = 5;
            this.loading = false;
        }
        HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
            var _this = this;
            var data = this.data.slice();
            data.forEach(function (i) { return (i.list = []); });
            notices.forEach(function (item) {
                var newItem = Object.assign({}, item);
                if (typeof newItem.datetime === 'string') {
                    newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
                }
                if (newItem.datetime) {
                    newItem.datetime = formatDistanceToNow(newItem.datetime, { locale: _this.nzI18n.getDateLocale() });
                }
                if (newItem.extra && newItem.status) {
                    newItem.color = {
                        todo: undefined,
                        processing: 'blue',
                        urgent: 'red',
                        doing: 'gold',
                    }[newItem.status];
                }
                data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
            });
            return data;
        };
        HeaderNotifyComponent.prototype.loadData = function () {
            var _this = this;
            if (this.loading) {
                return;
            }
            this.loading = true;
            setTimeout(function () {
                var now = new Date();
                _this.data = _this.updateNoticeData([
                    {
                        id: '000000001',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                        title: '你收到了 14 份新周报',
                        datetime: add(now, { days: 10 }),
                        type: '通知',
                    },
                    {
                        id: '000000002',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                        title: '你推荐的 曲妮妮 已通过第三轮面试',
                        datetime: add(now, { days: -3 }),
                        type: '通知',
                    },
                    {
                        id: '000000003',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                        title: '这种模板可以区分多种通知类型',
                        datetime: add(now, { months: -3 }),
                        read: true,
                        type: '通知',
                    },
                    {
                        id: '000000004',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                        title: '左侧图标用于区分不同的类型',
                        datetime: add(now, { years: -1 }),
                        type: '通知',
                    },
                    {
                        id: '000000005',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                        title: '内容不要超过两行字，超出时自动截断',
                        datetime: '2017-08-07',
                        type: '通知',
                    },
                    {
                        id: '000000006',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                        title: '曲丽丽 评论了你',
                        description: '描述信息描述信息描述信息',
                        datetime: '2017-08-07',
                        type: '消息',
                    },
                    {
                        id: '000000007',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                        title: '朱偏右 回复了你',
                        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                        datetime: '2017-08-07',
                        type: '消息',
                    },
                    {
                        id: '000000008',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                        title: '标题',
                        description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                        datetime: '2017-08-07',
                        type: '消息',
                    },
                    {
                        id: '000000009',
                        title: '任务名称',
                        description: '任务需要在 2017-01-12 20:00 前启动',
                        extra: '未开始',
                        status: 'todo',
                        type: '待办',
                    },
                    {
                        id: '000000010',
                        title: '第三方紧急代码变更',
                        description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                        extra: '马上到期',
                        status: 'urgent',
                        type: '待办',
                    },
                    {
                        id: '000000011',
                        title: '信息安全考试',
                        description: '指派竹尔于 2017-01-09 前完成更新并发布',
                        extra: '已耗时 8 天',
                        status: 'doing',
                        type: '待办',
                    },
                    {
                        id: '000000012',
                        title: 'ABCD 版本发布',
                        description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                        extra: '进行中',
                        status: 'processing',
                        type: '待办',
                    },
                ]);
                _this.loading = false;
            }, 500);
        };
        HeaderNotifyComponent.prototype.clear = function (type) {
            this.msg.success("\u6E05\u7A7A\u4E86 " + type);
        };
        HeaderNotifyComponent.prototype.select = function (res) {
            this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
        };
        return HeaderNotifyComponent;
    }());
    HeaderNotifyComponent.ɵfac = function HeaderNotifyComponent_Factory(t) { return new (t || HeaderNotifyComponent)(i0.ɵɵdirectiveInject(i1$1.NzMessageService), i0.ɵɵdirectiveInject(i2$2.NzI18nService)); };
    HeaderNotifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderNotifyComponent, selectors: [["header-notify"]], decls: 1, vars: 3, consts: [["btnClass", "alain-default__nav-item", "btnIconClass", "alain-default__nav-item-icon", 3, "data", "count", "loading", "select", "clear", "popoverVisibleChange"]], template: function HeaderNotifyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "notice-icon", 0);
                i0.ɵɵlistener("select", function HeaderNotifyComponent_Template_notice_icon_select_0_listener($event) { return ctx.select($event); })("clear", function HeaderNotifyComponent_Template_notice_icon_clear_0_listener($event) { return ctx.clear($event); })("popoverVisibleChange", function HeaderNotifyComponent_Template_notice_icon_popoverVisibleChange_0_listener() { return ctx.loadData(); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("data", ctx.data)("count", ctx.count)("loading", ctx.loading);
            }
        }, directives: [i3$4.NoticeIconComponent], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderNotifyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-notify',
                        template: "\n    <notice-icon\n      [data]=\"data\"\n      [count]=\"count\"\n      [loading]=\"loading\"\n      btnClass=\"alain-default__nav-item\"\n      btnIconClass=\"alain-default__nav-item-icon\"\n      (select)=\"select($event)\"\n      (clear)=\"clear($event)\"\n      (popoverVisibleChange)=\"loadData()\"\n    ></notice-icon>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1$1.NzMessageService }, { type: i2$2.NzI18nService }]; }, null);
    })();

    var HeaderSearchComponent = /** @class */ (function () {
        function HeaderSearchComponent(el) {
            this.el = el;
            this.focus = false;
            this.searchToggled = false;
        }
        Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
            set: function (value) {
                var _this = this;
                if (typeof value === 'undefined') {
                    return;
                }
                this.searchToggled = true;
                this.focus = true;
                setTimeout(function () { return _this.qIpt.focus(); }, 300);
            },
            enumerable: true,
            configurable: true
        });
        HeaderSearchComponent.prototype.ngAfterViewInit = function () {
            this.qIpt = this.el.nativeElement.querySelector('.ant-input');
        };
        HeaderSearchComponent.prototype.qFocus = function () {
            this.focus = true;
        };
        HeaderSearchComponent.prototype.qBlur = function () {
            this.focus = false;
            this.searchToggled = false;
        };
        return HeaderSearchComponent;
    }());
    HeaderSearchComponent.ɵfac = function HeaderSearchComponent_Factory(t) { return new (t || HeaderSearchComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    HeaderSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderSearchComponent, selectors: [["header-search"]], hostVars: 4, hostBindings: function HeaderSearchComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-default__search-focus", ctx.focus)("alain-default__search-toggled", ctx.searchToggled);
            }
        }, inputs: { toggleChange: "toggleChange" }, decls: 3, vars: 5, consts: [[3, "nzAddOnBeforeIcon"], ["nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", "focus", "blur"]], template: function HeaderSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-input-group", 0);
                i0.ɵɵelementStart(1, "input", 1);
                i0.ɵɵlistener("ngModelChange", function HeaderSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("focus", function HeaderSearchComponent_Template_input_focus_1_listener() { return ctx.qFocus(); })("blur", function HeaderSearchComponent_Template_input_blur_1_listener() { return ctx.qBlur(); });
                i0.ɵɵpipe(2, "translate");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzAddOnBeforeIcon", ctx.focus ? "arrow-down" : "search");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.q)("placeholder", i0.ɵɵpipeBind1(2, 3, "menu.search.placeholder"));
            }
        }, directives: [i1$3.NzInputGroupComponent, i1$3.NzInputDirective, i3$1.DefaultValueAccessor, i3$1.NgControlStatus, i3$1.NgModel], pipes: [i3$3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderSearchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-search',
                        template: "\n    <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'arrow-down' : 'search'\">\n      <input\n        nz-input\n        [(ngModel)]=\"q\"\n        (focus)=\"qFocus()\"\n        (blur)=\"qBlur()\"\n        [placeholder]=\"'menu.search.placeholder' | translate\"\n      />\n    </nz-input-group>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { focus: [{
                    type: i0.HostBinding,
                    args: ['class.alain-default__search-focus']
                }], searchToggled: [{
                    type: i0.HostBinding,
                    args: ['class.alain-default__search-toggled']
                }], toggleChange: [{
                    type: i0.Input
                }] });
    })();

    var HeaderStorageComponent = /** @class */ (function () {
        function HeaderStorageComponent(modalSrv, messageSrv) {
            this.modalSrv = modalSrv;
            this.messageSrv = messageSrv;
        }
        HeaderStorageComponent.prototype._click = function () {
            var _this = this;
            this.modalSrv.confirm({
                nzTitle: 'Make sure clear all local storage?',
                nzOnOk: function () {
                    localStorage.clear();
                    _this.messageSrv.success('Clear Finished!');
                },
            });
        };
        return HeaderStorageComponent;
    }());
    HeaderStorageComponent.ɵfac = function HeaderStorageComponent_Factory(t) { return new (t || HeaderStorageComponent)(i0.ɵɵdirectiveInject(i1$5.NzModalService), i0.ɵɵdirectiveInject(i1$1.NzMessageService)); };
    HeaderStorageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderStorageComponent, selectors: [["header-storage"]], hostVars: 2, hostBindings: function HeaderStorageComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function HeaderStorageComponent_click_HostBindingHandler() { return ctx._click(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("d-block", true);
            }
        }, decls: 3, vars: 3, consts: [["nz-icon", "", "nzType", "tool"]], template: function HeaderStorageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "i", 0);
                i0.ɵɵtext(1);
                i0.ɵɵpipe(2, "translate");
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "menu.clear.local.storage"), " ");
            }
        }, directives: [i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective], pipes: [i3$3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderStorageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-storage',
                        template: "\n    <i nz-icon nzType=\"tool\"></i>\n    {{ 'menu.clear.local.storage' | translate }}\n  ",
                        // tslint:disable-next-line: no-host-metadata-property
                        host: {
                            '[class.d-block]': 'true',
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i1$5.NzModalService }, { type: i1$1.NzMessageService }]; }, { _click: [{
                    type: i0.HostListener,
                    args: ['click']
                }] });
    })();

    function HeaderTaskComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelement(1, "nz-spin");
            i0.ɵɵelementEnd();
        }
    }
    function HeaderTaskComponent_nz_card_7_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 17);
        }
    }
    function HeaderTaskComponent_nz_card_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-card", 8);
            i0.ɵɵtemplate(1, HeaderTaskComponent_nz_card_7_ng_template_1_Template, 1, 0, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(3, "div", 10);
            i0.ɵɵelementStart(4, "div", 11);
            i0.ɵɵelement(5, "nz-avatar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 13);
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "cipchk");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p", 14);
            i0.ɵɵtext(10, "Please tell me what happened in a few words, don't go into details.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 10);
            i0.ɵɵelementStart(12, "div", 11);
            i0.ɵɵelement(13, "nz-avatar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 13);
            i0.ɵɵelementStart(15, "strong");
            i0.ɵɵtext(16, "\u306F\u306A\u3055\u304D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p", 14);
            i0.ɵɵtext(18, "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 10);
            i0.ɵɵelementStart(20, "div", 11);
            i0.ɵɵelement(21, "nz-avatar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 13);
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24, "\u82CF\u5148\u751F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "p", 14);
            i0.ɵɵtext(26, "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 10);
            i0.ɵɵelementStart(28, "div", 11);
            i0.ɵɵelement(29, "nz-avatar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 13);
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32, "Kent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p", 14);
            i0.ɵɵtext(34, "Please tell me what happened in a few words, don't go into details.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 10);
            i0.ɵɵelementStart(36, "div", 11);
            i0.ɵɵelement(37, "nz-avatar", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 13);
            i0.ɵɵelementStart(39, "strong");
            i0.ɵɵtext(40, "Jefferson");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "p", 14);
            i0.ɵɵtext(42, "Please tell me what happened in a few words, don't go into details.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 15);
            i0.ɵɵelementStart(44, "div", 16);
            i0.ɵɵtext(45, " See All ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSrc", "./assets/tmp/img/1.png");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 20);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSrc", "./assets/tmp/img/2.png");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 20);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSrc", "./assets/tmp/img/3.png");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 20);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSrc", "./assets/tmp/img/4.png");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 20);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSrc", "./assets/tmp/img/5.png");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzSpan", 20);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("nzSpan", 24);
        }
    }
    var HeaderTaskComponent = /** @class */ (function () {
        function HeaderTaskComponent(cdr) {
            this.cdr = cdr;
            this.loading = true;
        }
        HeaderTaskComponent.prototype.change = function () {
            var _this = this;
            setTimeout(function () {
                _this.loading = false;
                _this.cdr.detectChanges();
            }, 500);
        };
        return HeaderTaskComponent;
    }());
    HeaderTaskComponent.ɵfac = function HeaderTaskComponent_Factory(t) { return new (t || HeaderTaskComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    HeaderTaskComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderTaskComponent, selectors: [["header-task"]], decls: 8, vars: 4, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], [3, "nzDot"], ["nz-icon", "", "nzType", "bell", 1, "alain-default__nav-item-icon"], ["taskMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-lg"], ["class", "mx-lg p-lg", 4, "ngIf"], ["nzTitle", "Notifications", "nzBordered", "false", "class", "ant-card__body-nopadding", 4, "ngIf"], [1, "mx-lg", "p-lg"], ["nzTitle", "Notifications", "nzBordered", "false", 1, "ant-card__body-nopadding"], ["extra", ""], ["nz-row", "", 1, "py-sm", "point", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 1, "text-center", 3, "nzSpan"], [3, "nzSrc"], ["nz-col", "", 3, "nzSpan"], [1, "mb0"], ["nz-row", ""], ["nz-col", "", 1, "pt-md", "border-top-1", "text-center", "text-grey", "point", 3, "nzSpan"], ["nz-icon", "", "nzType", "plus"]], template: function HeaderTaskComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("nzVisibleChange", function HeaderTaskComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
                i0.ɵɵelementStart(1, "nz-badge", 1);
                i0.ɵɵelement(2, "i", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
                i0.ɵɵelementStart(5, "div", 4);
                i0.ɵɵtemplate(6, HeaderTaskComponent_div_6_Template, 2, 0, "div", 5);
                i0.ɵɵtemplate(7, HeaderTaskComponent_nz_card_7_Template, 46, 31, "nz-card", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(4);
                i0.ɵɵproperty("nzDropdownMenu", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzDot", true);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.loading);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.loading);
            }
        }, directives: [i1$4.NzDropDownDirective, i2$3.NzBadgeComponent, i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective, i1$4.NzDropdownMenuComponent, i5$1.NzMenuDirective, i4.NgIf, i5$2.NzSpinComponent, i8.NzCardComponent, i6$1.NzRowDirective, i6$1.NzColDirective, i10.NzAvatarComponent], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(HeaderTaskComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'header-task',
                        template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"taskMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon nzType=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <nz-dropdown-menu #taskMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-lg\">\n        <div *ngIf=\"loading\" class=\"mx-lg p-lg\"><nz-spin></nz-spin></div>\n        <nz-card *ngIf=\"!loading\" nzTitle=\"Notifications\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n          <ng-template #extra><i nz-icon nzType=\"plus\"></i></ng-template>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>cipchk</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u306F\u306A\u3055\u304D</strong>\n              <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u82CF\u5148\u751F</strong>\n              <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Kent</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Jefferson</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row>\n            <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n              See All\n            </div>\n          </div>\n        </nz-card>\n      </div>\n    </nz-dropdown-menu>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null);
    })();

    var LayoutFullScreenComponent = /** @class */ (function () {
        function LayoutFullScreenComponent() {
        }
        return LayoutFullScreenComponent;
    }());
    LayoutFullScreenComponent.ɵfac = function LayoutFullScreenComponent_Factory(t) { return new (t || LayoutFullScreenComponent)(); };
    LayoutFullScreenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutFullScreenComponent, selectors: [["layout-fullscreen"]], hostVars: 2, hostBindings: function LayoutFullScreenComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("alain-fullscreen", true);
            }
        }, decls: 1, vars: 0, template: function LayoutFullScreenComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "router-outlet");
            }
        }, directives: [i1.RouterOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutFullScreenComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-fullscreen',
                        templateUrl: './fullscreen.component.html',
                        // tslint:disable-next-line: no-host-metadata-property
                        host: {
                            '[class.alain-fullscreen]': 'true',
                        },
                    }]
            }], null, null);
    })();

    var LayoutPassportComponent = /** @class */ (function () {
        function LayoutPassportComponent() {
            this.links = [
                {
                    title: '帮助',
                    href: '',
                },
                {
                    title: '隐私',
                    href: '',
                },
                {
                    title: '条款',
                    href: '',
                },
            ];
        }
        return LayoutPassportComponent;
    }());
    LayoutPassportComponent.type = "account" /* account */;
    LayoutPassportComponent.ɵfac = function LayoutPassportComponent_Factory(t) { return new (t || LayoutPassportComponent)(); };
    LayoutPassportComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayoutPassportComponent, selectors: [["layout-passport"]], decls: 19, vars: 1, consts: [[1, "container"], ["showLangText", "false", 1, "langs"], [1, "wrap"], [1, "top"], [1, "head"], ["src", "./assets/logo-color.svg", 1, "logo"], [1, "title"], [1, "desc"], [3, "links"], ["nz-icon", "", "nzType", "copyright"], ["href", "//github.com/cipchk", "target", "_blank"]], template: function LayoutPassportComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelement(1, "header-i18n", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "div", 4);
                i0.ɵɵelement(5, "img", 5);
                i0.ɵɵelementStart(6, "span", 6);
                i0.ɵɵtext(7, "ng-alain");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "div", 7);
                i0.ɵɵtext(9, "\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "router-outlet");
                i0.ɵɵelementStart(11, "global-footer", 8);
                i0.ɵɵtext(12, " Copyright ");
                i0.ɵɵelement(13, "i", 9);
                i0.ɵɵtext(14, " 2017 ");
                i0.ɵɵelementStart(15, "a", 10);
                i0.ɵɵtext(16, "\u5361\u8272");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(17, "\u51FA\u54C1 ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "layout-theme-btn");
            }
            if (rf & 2) {
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("links", ctx.links);
            }
        }, directives: [HeaderI18nComponent, i1.RouterOutlet, i3$5.GlobalFooterComponent, i4$3.ɵNzTransitionPatchDirective, i4$4.NzIconDirective, LayoutThemeBtnComponent], styles: ["[_nghost-%COMP%]     .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}[_nghost-%COMP%]     .langs{height:40px;line-height:44px;text-align:right;width:100%}[_nghost-%COMP%]     .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}[_nghost-%COMP%]     .wrap{flex:1;padding:32px 0}[_nghost-%COMP%]     .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){[_nghost-%COMP%]     .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}[_nghost-%COMP%]     .wrap{padding:32px 0 24px}}[_nghost-%COMP%]     .top{text-align:center}[_nghost-%COMP%]     .header{height:44px;line-height:44px}[_nghost-%COMP%]     .header a{text-decoration:none}[_nghost-%COMP%]     .logo{height:44px;margin-right:16px}[_nghost-%COMP%]     .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}[_nghost-%COMP%]     .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark]   [_nghost-%COMP%]     .container{background:#141414}[data-theme=dark]   [_nghost-%COMP%]     .title{color:hsla(0,0%,100%,.85)}[data-theme=dark]   [_nghost-%COMP%]     .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark]   [_nghost-%COMP%]     .container{background-image:none}}[data-theme=compact]   [_nghost-%COMP%]     .ant-form-item{margin-bottom:16px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutPassportComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'layout-passport',
                        templateUrl: './passport.component.html',
                        styleUrls: ['./passport.component.less'],
                    }]
            }], null, null);
    })();

    var SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
    var COMPONENTS = __spread([
        LayoutDefaultComponent,
        LayoutFullScreenComponent,
        HeaderComponent,
        SidebarComponent
    ], SETTINGDRAWER, [
        LayoutThemeBtnComponent,
    ]);
    var HEADERCOMPONENTS = [
        HeaderSearchComponent,
        HeaderNotifyComponent,
        HeaderTaskComponent,
        HeaderIconComponent,
        HeaderFullScreenComponent,
        HeaderI18nComponent,
        HeaderStorageComponent,
        HeaderUserComponent,
    ];
    var PASSPORT = [LayoutPassportComponent];
    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    LayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutModule });
    LayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[shared.SharedModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutDefaultComponent,
                LayoutFullScreenComponent,
                HeaderComponent,
                SidebarComponent,
                SettingDrawerComponent, SettingDrawerItemComponent,
                LayoutThemeBtnComponent,
                HeaderSearchComponent,
                HeaderNotifyComponent,
                HeaderTaskComponent,
                HeaderIconComponent,
                HeaderFullScreenComponent,
                HeaderI18nComponent,
                HeaderStorageComponent,
                HeaderUserComponent,
                LayoutPassportComponent], imports: [shared.SharedModule], exports: [LayoutDefaultComponent,
                LayoutFullScreenComponent,
                HeaderComponent,
                SidebarComponent,
                SettingDrawerComponent, SettingDrawerItemComponent,
                LayoutThemeBtnComponent,
                LayoutPassportComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(LayoutModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [shared.SharedModule],
                        entryComponents: SETTINGDRAWER,
                        declarations: __spread(COMPONENTS, HEADERCOMPONENTS, PASSPORT),
                        exports: __spread(COMPONENTS, PASSPORT),
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HeaderComponent = HeaderComponent;
    exports.LayoutDefaultComponent = LayoutDefaultComponent;
    exports.LayoutFullScreenComponent = LayoutFullScreenComponent;
    exports.LayoutModule = LayoutModule;
    exports.LayoutPassportComponent = LayoutPassportComponent;
    exports.LayoutThemeBtnComponent = LayoutThemeBtnComponent;
    exports.SettingDrawerComponent = SettingDrawerComponent;
    exports.SettingDrawerItemComponent = SettingDrawerItemComponent;
    exports.SidebarComponent = SidebarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-layout.umd.js.map
