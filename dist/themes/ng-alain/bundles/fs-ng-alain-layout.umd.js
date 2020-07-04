(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/shared'), require('@angular/common'), require('@angular/router'), require('@delon/theme'), require('@delon/util'), require('ng-zorro-antd/message'), require('rxjs'), require('rxjs/operators'), require('screenfull'), require('@fs/ng-alain/core'), require('@abp/ng.core'), require('@ngxs/store'), require('snq'), require('date-fns/add'), require('date-fns/formatDistanceToNow'), require('date-fns/parse'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/modal'), require('@delon/auth')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/layout', ['exports', '@angular/core', '@fs/ng-alain/shared', '@angular/common', '@angular/router', '@delon/theme', '@delon/util', 'ng-zorro-antd/message', 'rxjs', 'rxjs/operators', 'screenfull', '@fs/ng-alain/core', '@abp/ng.core', '@ngxs/store', 'snq', 'date-fns/add', 'date-fns/formatDistanceToNow', 'date-fns/parse', 'ng-zorro-antd/i18n', 'ng-zorro-antd/modal', '@delon/auth'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].layout = {}), global.ng.core, global.fs['ng-alain'].shared, global.ng.common, global.ng.router, global.theme, global.util, global.message, global.rxjs, global.rxjs.operators, global.screenfull, global.fs['ng-alain'].core, global.ng_core, global.store, global.snq, global.add, global.formatDistanceToNow, global.parse, global.i18n, global.modal, global.auth));
}(this, (function (exports, core, shared, common, router, theme, util, message, rxjs, operators, screenfull, core$1, ng_core, store, snq, add, formatDistanceToNow, parse, i18n, modal, auth) { 'use strict';

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
    exports.SettingDrawerComponent = /** @class */ (function () {
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
            var data = util.deepCopy(DEFAULT_VARS);
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
            util.copy(copyContent);
            this.msg.success('Copy success');
        };
        return SettingDrawerComponent;
    }());
    exports.SettingDrawerComponent = __decorate([
        core.Component({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer',
            template: "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\r\n      <span\r\n        *ngFor=\"let c of colors\"\r\n        [style]=\"{ 'background-color': c.color }\"\r\n        (click)=\"changeColor(c.color)\"\r\n        nz-tooltip\r\n        [nzTooltipTitle]=\"c.key\"\r\n        class=\"setting-drawer__theme-tag\"\r\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\r\n      ></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"\u9876\u90E8\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5176\u5B83\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u8272\u5F31\u6A21\u5F0F\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\r\n    <nz-alert\r\n      class=\"mt-md\"\r\n      nzType=\"warning\"\r\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\r\n    ></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\r\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\r\n</div>\r\n",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.setting-drawer]': 'true',
            },
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __param(5, core.Inject(common.DOCUMENT)),
        __metadata("design:paramtypes", [core.ChangeDetectorRef,
            message.NzMessageService,
            theme.SettingsService,
            util.LazyService,
            core.NgZone, Object])
    ], exports.SettingDrawerComponent);

    exports.LayoutDefaultComponent = /** @class */ (function () {
        function LayoutDefaultComponent(router$1, msgSrv, resolver, settings, el, renderer, doc) {
            var _this = this;
            this.resolver = resolver;
            this.settings = settings;
            this.el = el;
            this.renderer = renderer;
            this.doc = doc;
            this.unsubscribe$ = new rxjs.Subject();
            this.isFetching = false;
            // scroll to top in change page
            router$1.events.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (evt) {
                if (!_this.isFetching && evt instanceof router.RouteConfigLoadStart) {
                    _this.isFetching = true;
                }
                if (evt instanceof router.NavigationError || evt instanceof router.NavigationCancel) {
                    _this.isFetching = false;
                    if (evt instanceof router.NavigationError) {
                        msgSrv.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                    }
                    return;
                }
                if (!(evt instanceof router.NavigationEnd || evt instanceof router.RouteConfigLoadEnd)) {
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
            util.updateHostClass(el.nativeElement, renderer, (_a = {},
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
                    var settingFactory = _this.resolver.resolveComponentFactory(exports.SettingDrawerComponent);
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
    __decorate([
        core.ViewChild('settingHost', { read: core.ViewContainerRef, static: true }),
        __metadata("design:type", core.ViewContainerRef)
    ], exports.LayoutDefaultComponent.prototype, "settingHost", void 0);
    exports.LayoutDefaultComponent = __decorate([
        core.Component({
            selector: 'layout-default',
            template: "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n<layout-theme-btn></layout-theme-btn>\r\n"
        }),
        __param(6, core.Inject(common.DOCUMENT)),
        __metadata("design:paramtypes", [router.Router,
            message.NzMessageService,
            core.ComponentFactoryResolver,
            theme.SettingsService,
            core.ElementRef,
            core.Renderer2, Object])
    ], exports.LayoutDefaultComponent);

    exports.ɵe = /** @class */ (function () {
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
    __decorate([
        core.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], exports.ɵe.prototype, "_resize", null);
    __decorate([
        core.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], exports.ɵe.prototype, "_click", null);
    exports.ɵe = __decorate([
        core.Component({
            selector: 'header-fullscreen',
            template: "\n    <i nz-icon [nzType]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: core.ChangeDetectionStrategy.OnPush
        })
    ], exports.ɵe);

    exports.ɵf = /** @class */ (function () {
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
                return this.store.selectSnapshot(ng_core.SessionState.getLanguage);
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
            this.store.dispatch(new ng_core.SetLanguage(cultureName));
        };
        return HeaderI18nComponent;
    }());
    __decorate([
        store.Select(ng_core.ConfigState.getDeep('localization.languages')),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵf.prototype, "languages$", void 0);
    __decorate([
        core.Input(), util.InputBoolean(),
        __metadata("design:type", Object)
    ], exports.ɵf.prototype, "showLangText", void 0);
    exports.ɵf = __decorate([
        core.Component({
            selector: 'header-i18n',
            template: "\n    <div *ngIf=\"showLangText\" nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\n      <i nz-icon nzType=\"global\"></i>\n      {{ defaultLanguage$ | async }}\n      <i nz-icon nzType=\"down\"></i>\n    </div>\n    <i\n      *ngIf=\"!showLangText\"\n      nz-dropdown\n      [nzDropdownMenu]=\"langMenu\"\n      nzPlacement=\"bottomRight\"\n      nz-icon\n      nzType=\"global\"\n    ></i>\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <li\n          nz-menu-item\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          [nzSelected]=\"lang.cultureName === selectedLangCulture\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n        >\n          <span role=\"img\" [attr.aria-label]=\"lang?.displayName\" class=\"pr-xs\">{{ lang.cultureName }}</span>\n          {{ lang?.displayName }}\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __param(1, core.Inject(theme.ALAIN_I18N_TOKEN)),
        __param(2, core.Inject(common.DOCUMENT)),
        __metadata("design:paramtypes", [theme.SettingsService,
            core$1.I18NService, Object, store.Store])
    ], exports.ɵf);

    exports.ɵd = /** @class */ (function () {
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
    exports.ɵd = __decorate([
        core.Component({
            selector: 'header-icon',
            template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"iconMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <i nz-icon nzType=\"appstore\"></i>\n    </div>\n    <nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-xl animated jello\">\n        <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"calendar\" class=\"bg-error text-white\"></i>\n              <small>Calendar</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"file\" class=\"bg-geekblue text-white\"></i>\n              <small>Files</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"cloud\" class=\"bg-success text-white\"></i>\n              <small>Cloud</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"star\" class=\"bg-magenta text-white\"></i>\n              <small>Star</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"team\" class=\"bg-purple text-white\"></i>\n              <small>Team</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"scan\" class=\"bg-warning text-white\"></i>\n              <small>QR</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"pay-circle\" class=\"bg-cyan text-white\"></i>\n              <small>Pay</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"printer\" class=\"bg-grey text-white\"></i>\n              <small>Print</small>\n            </div>\n          </div>\n        </nz-spin>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core.ChangeDetectorRef])
    ], exports.ɵd);

    /**
     * 菜单通知
     */
    exports.ɵb = /** @class */ (function () {
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
    exports.ɵb = __decorate([
        core.Component({
            selector: 'header-notify',
            template: "\n    <notice-icon\n      [data]=\"data\"\n      [count]=\"count\"\n      [loading]=\"loading\"\n      btnClass=\"alain-default__nav-item\"\n      btnIconClass=\"alain-default__nav-item-icon\"\n      (select)=\"select($event)\"\n      (clear)=\"clear($event)\"\n      (popoverVisibleChange)=\"loadData()\"\n    ></notice-icon>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [message.NzMessageService, i18n.NzI18nService])
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
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
    __decorate([
        core.HostBinding('class.alain-default__search-focus'),
        __metadata("design:type", Object)
    ], exports.ɵa.prototype, "focus", void 0);
    __decorate([
        core.HostBinding('class.alain-default__search-toggled'),
        __metadata("design:type", Object)
    ], exports.ɵa.prototype, "searchToggled", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.ɵa.prototype, "toggleChange", null);
    exports.ɵa = __decorate([
        core.Component({
            selector: 'header-search',
            template: "\n    <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'arrow-down' : 'search'\">\n      <input\n        nz-input\n        [(ngModel)]=\"q\"\n        (focus)=\"qFocus()\"\n        (blur)=\"qBlur()\"\n        [placeholder]=\"'menu.search.placeholder' | translate\"\n      />\n    </nz-input-group>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core.ElementRef])
    ], exports.ɵa);

    exports.ɵg = /** @class */ (function () {
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
    __decorate([
        core.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], exports.ɵg.prototype, "_click", null);
    exports.ɵg = __decorate([
        core.Component({
            selector: 'header-storage',
            template: "\n    <i nz-icon nzType=\"tool\"></i>\n    {{ 'menu.clear.local.storage' | translate }}\n  ",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.d-block]': 'true',
            },
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [modal.NzModalService, message.NzMessageService])
    ], exports.ɵg);

    exports.ɵc = /** @class */ (function () {
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
    exports.ɵc = __decorate([
        core.Component({
            selector: 'header-task',
            template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"taskMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon nzType=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <nz-dropdown-menu #taskMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-lg\">\n        <div *ngIf=\"loading\" class=\"mx-lg p-lg\"><nz-spin></nz-spin></div>\n        <nz-card *ngIf=\"!loading\" nzTitle=\"Notifications\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n          <ng-template #extra><i nz-icon nzType=\"plus\"></i></ng-template>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>cipchk</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u306F\u306A\u3055\u304D</strong>\n              <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u82CF\u5148\u751F</strong>\n              <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Kent</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm point\">\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Jefferson</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row>\n            <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n              See All\n            </div>\n          </div>\n        </nz-card>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core.ChangeDetectorRef])
    ], exports.ɵc);

    exports.ɵh = /** @class */ (function () {
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
    __decorate([
        store.Select(ng_core.ConfigState.getOne('currentUser')),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵh.prototype, "currentUser$", void 0);
    exports.ɵh = __decorate([
        core.Component({
            selector: 'header-user',
            template: "\n    <div\n      class=\"alain-default__nav-item d-flex align-items-center px-sm\"\n      nz-dropdown\n      nzPlacement=\"bottomRight\"\n      [nzDropdownMenu]=\"userMenu\"\n    >\n      <!--<nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>-->\n      {{ (currentUser$ | async)?.userName }}\n    </div>\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"width-sm\">\n        <div nz-menu-item routerLink=\"/account/manage-profile\">\n          <i nz-icon nzType=\"user\" class=\"mr-sm\"></i>\n          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\n        </div>\n        <!--<div nz-menu-item routerLink=\"/pro/account/settings\">\n          <i nz-icon nzType=\"setting\" class=\"mr-sm\"></i>\n          {{ 'menu.account.settings' | translate }}\n        </div>\n        <div nz-menu-item routerLink=\"/exception/trigger\">\n          <i nz-icon nzType=\"close-circle\" class=\"mr-sm\"></i>\n          {{ 'menu.account.trigger' | translate }}\n        </div>-->\n        <li nz-menu-divider></li>\n        <div nz-menu-item (click)=\"logout()\">\n          <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\n          {{ 'AbpUi::Logout' | abpLocalization }}\n        </div>\n      </div>\n    </nz-dropdown-menu>\n  ",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __param(3, core.Inject(auth.DA_SERVICE_TOKEN)),
        __metadata("design:paramtypes", [theme.SettingsService,
            router.Router,
            ng_core.AuthService, Object])
    ], exports.ɵh);

    exports.HeaderComponent = /** @class */ (function () {
        function HeaderComponent(settings, store) {
            this.settings = settings;
            this.store = store;
        }
        Object.defineProperty(HeaderComponent.prototype, "appInfo", {
            get: function () {
                return this.store.selectSnapshot(ng_core.ConfigState.getApplicationInfo);
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
    exports.HeaderComponent = __decorate([
        core.Component({
            selector: 'layout-header',
            template: "<div class=\"alain-default__header-logo\">\r\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\r\n    <!-- <img\r\n    *ngIf=\"appInfo.logoUrl; else appName\"\r\n    [src]=\"appInfo.logoUrl\"\r\n    [alt]=\"appInfo.name\"\r\n    style=\"max-height:40px;\"\r\n    />     -->\r\n    <img\r\n      class=\"alain-default__header-logo-expanded\"\r\n      src=\"./assets/logo-full.svg\"\r\n      alt=\"{{ appInfo.name }}\"\r\n      style=\"max-height:40px;\"\r\n    />\r\n    <img\r\n      class=\"alain-default__header-logo-collapsed\"\r\n      src=\"./assets/logo.svg\"\r\n      alt=\"{{ appInfo.name }}\"\r\n      style=\"max-height:30px;\"\r\n    />\r\n  </a>\r\n  <ng-template #appName>\r\n    {{ appInfo.name }}\r\n  </ng-template>  \r\n</div>\r\n<div class=\"alain-default__nav-wrap\">\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\r\n        <i nz-icon nzType=\"menu-{{ settings.layout.collapsed ? 'unfold' : 'fold' }}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <!-- <li>\r\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\r\n        <i nz-icon nzType=\"github\"></i>\r\n      </a>\r\n    </li> -->\r\n    <!-- Lock Page -->\r\n    <!-- <li class=\"hidden-mobile\">\r\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\r\n        <i nz-icon nzType=\"lock\"></i>\r\n      </div>\r\n    </li> -->\r\n    <!-- Search Button -->\r\n    <!-- <li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\r\n      <div class=\"alain-default__nav-item\">\r\n        <i nz-icon nzType=\"search\"></i>\r\n      </div>\r\n    </li> -->\r\n  </ul>\r\n  <!-- <header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search> -->\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Notify -->\r\n    <!-- <li>\r\n      <header-notify></header-notify>\r\n    </li> -->\r\n    <!-- Task -->\r\n    <!-- <li class=\"hidden-mobile\">\r\n      <header-task></header-task>\r\n    </li> -->\r\n    <!-- App Icons -->\r\n    <!-- <li class=\"hidden-mobile\">\r\n      <header-icon></header-icon>\r\n    </li> -->\r\n    <!-- Settings -->\r\n    <li>\r\n      <div\r\n        class=\"alain-default__nav-item\"\r\n        nz-dropdown\r\n        [nzDropdownMenu]=\"settingsMenu\"\r\n        nzTrigger=\"click\"\r\n        nzPlacement=\"bottomRight\"\r\n      >\r\n        <i nz-icon nzType=\"setting\"></i>\r\n      </div>\r\n      <nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n        <div nz-menu style=\"width:200px;\">\r\n          <!-- <div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div> -->\r\n          <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown-menu>\r\n    </li>\r\n    <li>\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [theme.SettingsService,
            store.Store])
    ], exports.HeaderComponent);

    exports.SidebarComponent = /** @class */ (function () {
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
    exports.SidebarComponent = __decorate([
        core.Component({
            selector: 'layout-sidebar',
            template: "<div class=\"alain-default__aside-inner\">\r\n  <!-- <div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div> -->\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
            changeDetection: core.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [theme.SettingsService,
            theme.MenuService,
            ng_core.RoutesService,
            ng_core.ConfigStateService,
            ng_core.LocalizationPipe])
    ], exports.SidebarComponent);

    exports.LayoutFullScreenComponent = /** @class */ (function () {
        function LayoutFullScreenComponent() {
        }
        return LayoutFullScreenComponent;
    }());
    exports.LayoutFullScreenComponent = __decorate([
        core.Component({
            selector: 'layout-fullscreen',
            template: "<router-outlet></router-outlet>\r\n",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.alain-fullscreen]': 'true',
            }
        })
    ], exports.LayoutFullScreenComponent);

    exports.SettingDrawerItemComponent = /** @class */ (function () {
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
    __decorate([
        core.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], exports.SettingDrawerItemComponent.prototype, "data", null);
    exports.SettingDrawerItemComponent = __decorate([
        core.Component({
            // tslint:disable-next-line:component-selector
            selector: 'setting-drawer-item',
            template: "<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n",
            // tslint:disable-next-line: no-host-metadata-property
            host: {
                '[class.setting-drawer__body-item]': 'true',
            }
        })
    ], exports.SettingDrawerItemComponent);

    exports.LayoutThemeBtnComponent = /** @class */ (function () {
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
    exports.LayoutThemeBtnComponent = __decorate([
        core.Component({
            selector: 'layout-theme-btn',
            template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"menu\">\r\n  <svg class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\r\n    <g fill-rule=\"evenodd\">\r\n      <g fill-rule=\"nonzero\">\r\n        <path\r\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\r\n        ></path>\r\n      </g>\r\n    </g>\r\n  </svg>\r\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\r\n    <ul nz-menu nzSelectable>\r\n      <li nz-menu-item (click)=\"onThemeChange('default')\">Default Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('dark')\">Dark Theme</li>\r\n      <li nz-menu-item (click)=\"onThemeChange('compact')\">Compact Theme</li>\r\n    </ul>\r\n  </nz-dropdown-menu>\r\n</div>\r\n",
            changeDetection: core.ChangeDetectionStrategy.OnPush,
            styles: [":host ::ng-deep{bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}:host ::ng-deep-active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}:host ::ng-deep .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}:host ::ng-deep .ant-avatar:hover{color:#1890ff}"]
        }),
        __metadata("design:paramtypes", [core.Renderer2, util.AlainConfigService])
    ], exports.LayoutThemeBtnComponent);

    exports.LayoutPassportComponent = /** @class */ (function () {
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
    exports.LayoutPassportComponent.type = "account" /* account */;
    exports.LayoutPassportComponent = __decorate([
        core.Component({
            selector: 'layout-passport',
            template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">\u5361\u8272</a>\u51FA\u54C1\r\n    </global-footer>\r\n  </div>\r\n</div>\r\n<layout-theme-btn></layout-theme-btn>\r\n",
            styles: [":host ::ng-deep .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}:host ::ng-deep .langs{height:40px;line-height:44px;text-align:right;width:100%}:host ::ng-deep .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}:host ::ng-deep .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark] :host ::ng-deep .container{background:#141414}[data-theme=dark] :host ::ng-deep .title{color:hsla(0,0%,100%,.85)}[data-theme=dark] :host ::ng-deep .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark] :host ::ng-deep .container{background-image:none}}[data-theme=compact] :host ::ng-deep .ant-form-item{margin-bottom:16px}"]
        })
    ], exports.LayoutPassportComponent);

    var SETTINGDRAWER = [exports.SettingDrawerComponent, exports.SettingDrawerItemComponent];
    var COMPONENTS = __spread([
        exports.LayoutDefaultComponent,
        exports.LayoutFullScreenComponent,
        exports.HeaderComponent,
        exports.SidebarComponent
    ], SETTINGDRAWER, [
        exports.LayoutThemeBtnComponent,
    ]);
    var HEADERCOMPONENTS = [
        exports.ɵa,
        exports.ɵb,
        exports.ɵc,
        exports.ɵd,
        exports.ɵe,
        exports.ɵf,
        exports.ɵg,
        exports.ɵh,
    ];
    var PASSPORT = [exports.LayoutPassportComponent];
    exports.LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        return LayoutModule;
    }());
    exports.LayoutModule = __decorate([
        core.NgModule({
            imports: [shared.SharedModule],
            entryComponents: COMPONENTS,
            declarations: __spread(COMPONENTS, HEADERCOMPONENTS, PASSPORT),
            exports: __spread(COMPONENTS, PASSPORT),
        })
    ], exports.LayoutModule);

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-layout.umd.js.map
