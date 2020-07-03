(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('@delon/acl'), require('@delon/form'), require('@delon/theme'), require('@ngx-translate/core'), require('@delon/abc/avatar-list'), require('@delon/abc/count-down'), require('@delon/abc/date-picker'), require('@delon/abc/down-file'), require('@delon/abc/ellipsis'), require('@delon/abc/error-collect'), require('@delon/abc/exception'), require('@delon/abc/footer-toolbar'), require('@delon/abc/full-content'), require('@delon/abc/global-footer'), require('@delon/abc/notice-icon'), require('@delon/abc/number-to-chinese'), require('@delon/abc/page-header'), require('@delon/abc/qr'), require('@delon/abc/quick-menu'), require('@delon/abc/result'), require('@delon/abc/se'), require('@delon/abc/sidebar-nav'), require('@delon/abc/st'), require('@delon/abc/sv'), require('@delon/abc/tag-select'), require('@delon/chart/bar'), require('@delon/chart/card'), require('@delon/chart/gauge'), require('@delon/chart/mini-area'), require('@delon/chart/mini-bar'), require('@delon/chart/mini-progress'), require('@delon/chart/number-info'), require('@delon/chart/pie'), require('@delon/chart/radar'), require('@delon/chart/single-bar'), require('@delon/chart/tag-cloud'), require('@delon/chart/timeline'), require('@delon/chart/trend'), require('@delon/chart/water-wave'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/back-top'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/card'), require('ng-zorro-antd/carousel'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/list'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/steps'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/upload'), require('ngx-countdown'), require('ngx-tinymce'), require('ngx-ueditor'), require('@abp/ng.theme.shared')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/shared', ['exports', '@abp/ng.core', '@angular/common', '@angular/core', '@angular/forms', '@angular/router', '@delon/acl', '@delon/form', '@delon/theme', '@ngx-translate/core', '@delon/abc/avatar-list', '@delon/abc/count-down', '@delon/abc/date-picker', '@delon/abc/down-file', '@delon/abc/ellipsis', '@delon/abc/error-collect', '@delon/abc/exception', '@delon/abc/footer-toolbar', '@delon/abc/full-content', '@delon/abc/global-footer', '@delon/abc/notice-icon', '@delon/abc/number-to-chinese', '@delon/abc/page-header', '@delon/abc/qr', '@delon/abc/quick-menu', '@delon/abc/result', '@delon/abc/se', '@delon/abc/sidebar-nav', '@delon/abc/st', '@delon/abc/sv', '@delon/abc/tag-select', '@delon/chart/bar', '@delon/chart/card', '@delon/chart/gauge', '@delon/chart/mini-area', '@delon/chart/mini-bar', '@delon/chart/mini-progress', '@delon/chart/number-info', '@delon/chart/pie', '@delon/chart/radar', '@delon/chart/single-bar', '@delon/chart/tag-cloud', '@delon/chart/timeline', '@delon/chart/trend', '@delon/chart/water-wave', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/avatar', 'ng-zorro-antd/back-top', 'ng-zorro-antd/badge', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/card', 'ng-zorro-antd/carousel', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/list', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/notification', 'ng-zorro-antd/pagination', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/popover', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/spin', 'ng-zorro-antd/steps', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/upload', 'ngx-countdown', 'ngx-tinymce', 'ngx-ueditor', '@abp/ng.theme.shared'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].shared = {}), global.ng_core, global.ng.common, global.ng.core, global.ng.forms, global.ng.router, global.acl, global.i1, global.i1$1, global.core, global.i2, global.i3, global.i4, global.i5, global.i6, global.i12, global.i13, global.i14, global.i36, global.i15, global.i19, global.i11, global.i16, global.i10, global.i20, global.i17, global.i9, global.i21, global.i7, global.i8, global.i18, global.i22, global.i23, global.i24, global.i25, global.i26, global.i27, global.i34, global.i28, global.i29, global.i30, global.i31, global.i32, global.i35, global.i33, global.i48, global.i50, global.i66, global.i39, global.i49, global.i60, global.i37, global.i68, global.i42, global.i43, global.i56, global.i69, global.i53, global.i40, global.i65, global.i41, global.i47, global.i55, global.i59, global.i62, global.i38, global.i51, global.i72, global.i73, global.i71, global.i45, global.i70, global.i64, global.i46, global.i67, global.i61, global.i63, global.i52, global.i54, global.i58, global.i57, global.i44, global.i74, global.ngxCountdown, global.ngxTinymce, global.ngxUeditor, global.ng_theme_shared));
}(this, (function (exports, ng_core, common, i0, forms, router, acl, i1, i1$1, core, i2, i3, i4, i5, i6, i12, i13, i14, i36, i15, i19, i11, i16, i10, i20, i17, i9, i21, i7, i8, i18, i22, i23, i24, i25, i26, i27, i34, i28, i29, i30, i31, i32, i35, i33, i48, i50, i66, i39, i49, i60, i37, i68, i42, i43, i56, i69, i53, i40, i65, i41, i47, i55, i59, i62, i38, i51, i72, i73, i71, i45, i70, i64, i46, i67, i61, i63, i52, i54, i58, i57, i44, i74, ngxCountdown, ngxTinymce, ngxUeditor, ng_theme_shared) { 'use strict';

    /**
     * 转化成RMB元字符串
     * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
     */
    // tslint:disable-next-line:no-any
    function yuan(value, digits) {
        if (digits === void 0) { digits = 2; }
        if (typeof value === 'number') {
            value = value.toFixed(digits);
        }
        return "&yen " + value;
    }

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

    var SHARED_DELON_MODULES = [
        i2.AvatarListModule,
        i3.CountDownModule,
        i4.DatePickerModule,
        i5.DownFileModule,
        i6.EllipsisModule,
        i7.STModule,
        i8.SVModule,
        i9.SEModule,
        i10.QRModule,
        i11.NumberToChineseModule,
        i12.ErrorCollectModule,
        i13.ExceptionModule,
        i14.FooterToolbarModule,
        i15.GlobalFooterModule,
        i15.GlobalFooterModule,
        i16.PageHeaderModule,
        i17.ResultModule,
        i18.TagSelectModule,
        i19.NoticeIconModule,
        i20.QuickMenuModule,
        i21.SidebarNavModule,
        i22.G2BarModule,
        i23.G2CardModule,
        i24.G2GaugeModule,
        i25.G2MiniAreaModule,
        i26.G2MiniBarModule,
        i27.G2MiniProgressModule,
        i28.G2PieModule,
        i29.G2RadarModule,
        i30.G2SingleBarModule,
        i31.G2TagCloudModule,
        i32.G2TimelineModule,
        i33.G2WaterWaveModule,
        i34.NumberInfoModule,
        i35.TrendModule,
        i36.FullContentModule,
    ];

    var SHARED_ZORRO_MODULES = [
        i37.NzButtonModule,
        i38.NzMessageModule,
        i39.NzBackTopModule,
        i40.NzDropDownModule,
        i41.NzGridModule,
        i42.NzCarouselModule,
        i43.NzCheckboxModule,
        i44.NzToolTipModule,
        i45.NzPopoverModule,
        i46.NzSelectModule,
        i47.NzIconModule,
        i48.NzAffixModule,
        i49.NzBadgeModule,
        i50.NzAlertModule,
        i51.NzModalModule,
        i52.NzTableModule,
        i53.NzDrawerModule,
        i54.NzTabsModule,
        i55.NzInputModule,
        i56.NzDatePickerModule,
        i57.NzTimePickerModule,
        i58.NzTagModule,
        i59.NzInputNumberModule,
        i60.NzBreadCrumbModule,
        i61.NzStepsModule,
        i62.NzListModule,
        i63.NzSwitchModule,
        i64.NzRadioModule,
        i65.NzFormModule,
        i66.NzAvatarModule,
        i67.NzSpinModule,
        i68.NzCardModule,
        i69.NzDividerModule,
        i70.NzProgressModule,
        i71.NzPopconfirmModule,
        i72.NzNotificationModule,
        i73.NzPaginationModule,
        i74.NzUploadModule,
    ];

    var THIRDMODULES = [ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule];
    // #endregion
    // #region your componets & directives
    var COMPONENTS = [];
    var DIRECTIVES = [];
    // #endregion
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [__spread([
                common.CommonModule,
                ng_core.CoreModule,
                forms.FormsModule,
                router.RouterModule,
                forms.ReactiveFormsModule,
                i1$1.AlainThemeModule.forChild(),
                acl.DelonACLModule,
                i1.DelonFormModule
            ], SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, THIRDMODULES), common.CommonModule,
            ng_core.CoreModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            router.RouterModule,
            i1$1.AlainThemeModule,
            acl.DelonACLModule,
            i1.DelonFormModule,
            core.TranslateModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [common.CommonModule,
                ng_core.CoreModule,
                forms.FormsModule,
                router.RouterModule,
                forms.ReactiveFormsModule, i1$1.AlainThemeModule, acl.DelonACLModule,
                i1.DelonFormModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule], exports: [common.CommonModule,
                ng_core.CoreModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                router.RouterModule,
                i1$1.AlainThemeModule,
                acl.DelonACLModule,
                i1.DelonFormModule,
                core.TranslateModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{
                        imports: __spread([
                            common.CommonModule,
                            ng_core.CoreModule,
                            forms.FormsModule,
                            router.RouterModule,
                            forms.ReactiveFormsModule,
                            i1$1.AlainThemeModule.forChild(),
                            acl.DelonACLModule,
                            i1.DelonFormModule
                        ], SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, THIRDMODULES),
                        declarations: __spread(COMPONENTS, DIRECTIVES),
                        exports: __spread([
                            common.CommonModule,
                            ng_core.CoreModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            router.RouterModule,
                            i1$1.AlainThemeModule,
                            acl.DelonACLModule,
                            i1.DelonFormModule,
                            core.TranslateModule
                        ], SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, THIRDMODULES, COMPONENTS, DIRECTIVES),
                    }]
            }], null, null);
    })();

    // import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
    // import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
    var SCHEMA_THIRDS_COMPONENTS = [
    // TinymceWidget,
    // UeditorWidget
    ];
    var JsonSchemaModule = /** @class */ (function () {
        function JsonSchemaModule(widgetRegistry) {
            // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
            // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
        }
        return JsonSchemaModule;
    }());
    JsonSchemaModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonSchemaModule });
    JsonSchemaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function JsonSchemaModule_Factory(t) { return new (t || JsonSchemaModule)(i0.ɵɵinject(i1.WidgetRegistry)); }, imports: [[SharedModule, i1.DelonFormModule.forRoot()]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonSchemaModule, { imports: [SharedModule, i1.DelonFormModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(JsonSchemaModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: SCHEMA_THIRDS_COMPONENTS,
                        entryComponents: SCHEMA_THIRDS_COMPONENTS,
                        imports: [SharedModule, i1.DelonFormModule.forRoot()],
                        exports: __spread(SCHEMA_THIRDS_COMPONENTS),
                    }]
            }], function () { return [{ type: i1.WidgetRegistry }]; }, null);
    })();

    var STWIDGET_COMPONENTS = [];
    var STWidgetModule = /** @class */ (function () {
        function STWidgetModule() {
        }
        return STWidgetModule;
    }());
    STWidgetModule.ɵmod = i0.ɵɵdefineNgModule({ type: STWidgetModule });
    STWidgetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function STWidgetModule_Factory(t) { return new (t || STWidgetModule)(); }, imports: [[SharedModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(STWidgetModule, { imports: [SharedModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(STWidgetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: STWIDGET_COMPONENTS,
                        imports: [SharedModule],
                        exports: __spread(STWIDGET_COMPONENTS),
                    }]
            }], null, null);
    })();

    var NgAlainSharedModule = /** @class */ (function () {
        function NgAlainSharedModule() {
        }
        return NgAlainSharedModule;
    }());
    NgAlainSharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgAlainSharedModule });
    NgAlainSharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgAlainSharedModule_Factory(t) { return new (t || NgAlainSharedModule)(); }, imports: [[
                ng_theme_shared.ThemeSharedModule,
                SharedModule
            ],
            ng_theme_shared.ThemeSharedModule,
            SharedModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgAlainSharedModule, { imports: [ng_theme_shared.ThemeSharedModule,
                SharedModule], exports: [ng_theme_shared.ThemeSharedModule,
                SharedModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgAlainSharedModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            ng_theme_shared.ThemeSharedModule,
                            SharedModule
                        ],
                        exports: [
                            ng_theme_shared.ThemeSharedModule,
                            SharedModule
                        ]
                    }]
            }], null, null);
    })();

    // Components

    /**
     * Generated bundle index. Do not edit.
     */

    exports.JsonSchemaModule = JsonSchemaModule;
    exports.NgAlainSharedModule = NgAlainSharedModule;
    exports.SCHEMA_THIRDS_COMPONENTS = SCHEMA_THIRDS_COMPONENTS;
    exports.STWIDGET_COMPONENTS = STWIDGET_COMPONENTS;
    exports.STWidgetModule = STWidgetModule;
    exports.SharedModule = SharedModule;
    exports.yuan = yuan;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-shared.umd.js.map
