(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/router'), require('@delon/acl'), require('@delon/form'), require('@delon/theme'), require('@ngx-translate/core'), require('@delon/abc/avatar-list'), require('@delon/abc/count-down'), require('@delon/abc/date-picker'), require('@delon/abc/down-file'), require('@delon/abc/ellipsis'), require('@delon/abc/error-collect'), require('@delon/abc/exception'), require('@delon/abc/footer-toolbar'), require('@delon/abc/full-content'), require('@delon/abc/global-footer'), require('@delon/abc/notice-icon'), require('@delon/abc/number-to-chinese'), require('@delon/abc/page-header'), require('@delon/abc/qr'), require('@delon/abc/quick-menu'), require('@delon/abc/result'), require('@delon/abc/se'), require('@delon/abc/sidebar-nav'), require('@delon/abc/st'), require('@delon/abc/sv'), require('@delon/abc/tag-select'), require('@delon/chart/bar'), require('@delon/chart/card'), require('@delon/chart/gauge'), require('@delon/chart/mini-area'), require('@delon/chart/mini-bar'), require('@delon/chart/mini-progress'), require('@delon/chart/number-info'), require('@delon/chart/pie'), require('@delon/chart/radar'), require('@delon/chart/single-bar'), require('@delon/chart/tag-cloud'), require('@delon/chart/timeline'), require('@delon/chart/trend'), require('@delon/chart/water-wave'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/back-top'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/card'), require('ng-zorro-antd/carousel'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/drawer'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/form'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/list'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/popconfirm'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/steps'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/time-picker'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/upload'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/page-header'), require('ng-zorro-antd/descriptions'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/transfer'), require('ng-zorro-antd/collapse'), require('ng-zorro-antd/empty'), require('ngx-countdown'), require('ngx-tinymce'), require('ngx-ueditor'), require('@abp/ng.theme.shared'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/shared', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/router', '@delon/acl', '@delon/form', '@delon/theme', '@ngx-translate/core', '@delon/abc/avatar-list', '@delon/abc/count-down', '@delon/abc/date-picker', '@delon/abc/down-file', '@delon/abc/ellipsis', '@delon/abc/error-collect', '@delon/abc/exception', '@delon/abc/footer-toolbar', '@delon/abc/full-content', '@delon/abc/global-footer', '@delon/abc/notice-icon', '@delon/abc/number-to-chinese', '@delon/abc/page-header', '@delon/abc/qr', '@delon/abc/quick-menu', '@delon/abc/result', '@delon/abc/se', '@delon/abc/sidebar-nav', '@delon/abc/st', '@delon/abc/sv', '@delon/abc/tag-select', '@delon/chart/bar', '@delon/chart/card', '@delon/chart/gauge', '@delon/chart/mini-area', '@delon/chart/mini-bar', '@delon/chart/mini-progress', '@delon/chart/number-info', '@delon/chart/pie', '@delon/chart/radar', '@delon/chart/single-bar', '@delon/chart/tag-cloud', '@delon/chart/timeline', '@delon/chart/trend', '@delon/chart/water-wave', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/avatar', 'ng-zorro-antd/back-top', 'ng-zorro-antd/badge', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/card', 'ng-zorro-antd/carousel', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/divider', 'ng-zorro-antd/drawer', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/form', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/list', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/notification', 'ng-zorro-antd/pagination', 'ng-zorro-antd/popconfirm', 'ng-zorro-antd/popover', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/spin', 'ng-zorro-antd/steps', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag', 'ng-zorro-antd/time-picker', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/upload', 'ng-zorro-antd/tree', 'ng-zorro-antd/page-header', 'ng-zorro-antd/descriptions', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/transfer', 'ng-zorro-antd/collapse', 'ng-zorro-antd/empty', 'ngx-countdown', 'ngx-tinymce', 'ngx-ueditor', '@abp/ng.theme.shared', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].shared = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.router, global.acl, global.form$1, global.theme, global.core$1, global.avatarList, global.countDown, global.datePicker, global.downFile, global.ellipsis, global.errorCollect, global.exception, global.footerToolbar, global.fullContent, global.globalFooter, global.noticeIcon, global.numberToChinese, global.pageHeader, global.qr, global.quickMenu, global.result, global.se, global.sidebarNav, global.st, global.sv, global.tagSelect, global.bar, global.card, global.gauge, global.miniArea, global.miniBar, global.miniProgress, global.numberInfo, global.pie, global.radar, global.singleBar, global.tagCloud, global.timeline, global.trend, global.waterWave, global.affix, global.alert, global.avatar, global.backTop, global.badge, global.breadcrumb, global.button, global.card$1, global.carousel, global.checkbox, global.datePicker$1, global.divider, global.drawer, global.dropdown, global.form, global.grid, global.icon, global.input, global.inputNumber, global.list, global.message, global.modal, global.notification, global.pagination, global.popconfirm, global.popover, global.progress, global.radio, global.select, global.spin, global.steps, global._switch, global.table, global.tabs, global.tag, global.timePicker, global.tooltip, global.upload, global.tree, global.pageHeader$1, global.descriptions, global.autoComplete, global.transfer, global.collapse, global.empty, global.ngxCountdown, global.ngxTinymce, global.ngxUeditor, global.ng_theme_shared, global.ng_core));
}(this, (function (exports, common, core, forms, router, acl, form$1, theme, core$1, avatarList, countDown, datePicker, downFile, ellipsis, errorCollect, exception, footerToolbar, fullContent, globalFooter, noticeIcon, numberToChinese, pageHeader, qr, quickMenu, result, se, sidebarNav, st, sv, tagSelect, bar, card, gauge, miniArea, miniBar, miniProgress, numberInfo, pie, radar, singleBar, tagCloud, timeline, trend, waterWave, affix, alert, avatar, backTop, badge, breadcrumb, button, card$1, carousel, checkbox, datePicker$1, divider, drawer, dropdown, form, grid, icon, input, inputNumber, list, message, modal, notification, pagination, popconfirm, popover, progress, radio, select, spin, steps, _switch, table, tabs, tag, timePicker, tooltip, upload, tree, pageHeader$1, descriptions, autoComplete, transfer, collapse, empty, ngxCountdown, ngxTinymce, ngxUeditor, ng_theme_shared, ng_core) { 'use strict';

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
        avatarList.AvatarListModule,
        countDown.CountDownModule,
        datePicker.DatePickerModule,
        downFile.DownFileModule,
        ellipsis.EllipsisModule,
        st.STModule,
        sv.SVModule,
        se.SEModule,
        qr.QRModule,
        numberToChinese.NumberToChineseModule,
        errorCollect.ErrorCollectModule,
        exception.ExceptionModule,
        footerToolbar.FooterToolbarModule,
        globalFooter.GlobalFooterModule,
        globalFooter.GlobalFooterModule,
        pageHeader.PageHeaderModule,
        result.ResultModule,
        tagSelect.TagSelectModule,
        noticeIcon.NoticeIconModule,
        quickMenu.QuickMenuModule,
        sidebarNav.SidebarNavModule,
        bar.G2BarModule,
        card.G2CardModule,
        gauge.G2GaugeModule,
        miniArea.G2MiniAreaModule,
        miniBar.G2MiniBarModule,
        miniProgress.G2MiniProgressModule,
        pie.G2PieModule,
        radar.G2RadarModule,
        singleBar.G2SingleBarModule,
        tagCloud.G2TagCloudModule,
        timeline.G2TimelineModule,
        waterWave.G2WaterWaveModule,
        numberInfo.NumberInfoModule,
        trend.TrendModule,
        fullContent.FullContentModule,
    ];

    var SHARED_ZORRO_MODULES = [
        button.NzButtonModule,
        message.NzMessageModule,
        backTop.NzBackTopModule,
        dropdown.NzDropDownModule,
        grid.NzGridModule,
        carousel.NzCarouselModule,
        checkbox.NzCheckboxModule,
        tooltip.NzToolTipModule,
        popover.NzPopoverModule,
        select.NzSelectModule,
        icon.NzIconModule,
        affix.NzAffixModule,
        badge.NzBadgeModule,
        alert.NzAlertModule,
        modal.NzModalModule,
        table.NzTableModule,
        drawer.NzDrawerModule,
        tabs.NzTabsModule,
        input.NzInputModule,
        datePicker$1.NzDatePickerModule,
        timePicker.NzTimePickerModule,
        tag.NzTagModule,
        inputNumber.NzInputNumberModule,
        breadcrumb.NzBreadCrumbModule,
        steps.NzStepsModule,
        list.NzListModule,
        _switch.NzSwitchModule,
        radio.NzRadioModule,
        form.NzFormModule,
        avatar.NzAvatarModule,
        spin.NzSpinModule,
        card$1.NzCardModule,
        divider.NzDividerModule,
        progress.NzProgressModule,
        popconfirm.NzPopconfirmModule,
        notification.NzNotificationModule,
        pagination.NzPaginationModule,
        upload.NzUploadModule,
        tree.NzTreeModule,
        pageHeader$1.NzPageHeaderModule,
        descriptions.NzDescriptionsModule,
        autoComplete.NzAutocompleteModule,
        transfer.NzTransferModule,
        collapse.NzCollapseModule,
        empty.NzEmptyModule
    ];

    var THIRDMODULES = [ngxCountdown.CountdownModule, ngxUeditor.UEditorModule, ngxTinymce.NgxTinymceModule];
    // #endregion
    // #region your componets & directives
    var COMPONENTS = [];
    var DIRECTIVES = [];
    // #endregion
    exports.SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    exports.SharedModule = __decorate([
        core.NgModule({
            imports: __spread([
                common.CommonModule,
                forms.FormsModule,
                router.RouterModule,
                forms.ReactiveFormsModule,
                theme.AlainThemeModule.forChild(),
                acl.DelonACLModule,
                form$1.DelonFormModule
            ], SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, THIRDMODULES),
            declarations: __spread(COMPONENTS, DIRECTIVES),
            exports: __spread([
                common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                router.RouterModule,
                theme.AlainThemeModule,
                acl.DelonACLModule,
                form$1.DelonFormModule,
                core$1.TranslateModule
            ], SHARED_DELON_MODULES, SHARED_ZORRO_MODULES, THIRDMODULES, COMPONENTS, DIRECTIVES),
        })
    ], exports.SharedModule);

    // import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
    // import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
    var SCHEMA_THIRDS_COMPONENTS = [
    // TinymceWidget,
    // UeditorWidget
    ];
    exports.JsonSchemaModule = /** @class */ (function () {
        function JsonSchemaModule(widgetRegistry) {
            // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
            // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
        }
        return JsonSchemaModule;
    }());
    exports.JsonSchemaModule = __decorate([
        core.NgModule({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [exports.SharedModule, form$1.DelonFormModule.forRoot()],
            exports: __spread(SCHEMA_THIRDS_COMPONENTS),
        }),
        __metadata("design:paramtypes", [form$1.WidgetRegistry])
    ], exports.JsonSchemaModule);

    var STWIDGET_COMPONENTS = [];
    exports.STWidgetModule = /** @class */ (function () {
        function STWidgetModule() {
        }
        return STWidgetModule;
    }());
    exports.STWidgetModule = __decorate([
        core.NgModule({
            declarations: STWIDGET_COMPONENTS,
            imports: [exports.SharedModule],
            exports: __spread(STWIDGET_COMPONENTS),
        })
    ], exports.STWidgetModule);

    var NgAlainSharedModule_1;
    exports.NgAlainSharedModule = NgAlainSharedModule_1 = /** @class */ (function () {
        function NgAlainSharedModule() {
        }
        NgAlainSharedModule.forRoot = function () {
            return {
                ngModule: NgAlainSharedModule_1
            };
        };
        return NgAlainSharedModule;
    }());
    exports.NgAlainSharedModule = NgAlainSharedModule_1 = __decorate([
        core.NgModule({
            imports: [
                ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                exports.SharedModule
            ],
            exports: [
                ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                exports.SharedModule
            ]
        })
    ], exports.NgAlainSharedModule);

    // Components

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SCHEMA_THIRDS_COMPONENTS = SCHEMA_THIRDS_COMPONENTS;
    exports.STWIDGET_COMPONENTS = STWIDGET_COMPONENTS;
    exports.yuan = yuan;
    exports.ɵa = SHARED_DELON_MODULES;
    exports.ɵb = SHARED_ZORRO_MODULES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-shared.umd.js.map
