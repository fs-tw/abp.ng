(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@angular/common/locales/zh'), require('@delon/theme'), require('date-fns/locale'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('@fs/ng-alain/core'), require('@ngx-translate/core'), require('@ngx-translate/http-loader'), require('@fs/ng-alain/shared'), require('@delon/mock'), require('@delon/util'), require('@delon/acl'), require('date-fns/format'), require('mockjs'), require('ng-zorro-antd/core/config'), require('@abp/ng.theme.shared'), require('@abp/ng.theme.basic'), require('@fs/ng-alain/basic')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain', ['exports', '@angular/common/http', '@angular/core', '@angular/common/locales/zh', '@delon/theme', 'date-fns/locale', 'ng-zorro-antd/i18n', '@angular/common', '@fs/ng-alain/core', '@ngx-translate/core', '@ngx-translate/http-loader', '@fs/ng-alain/shared', '@delon/mock', '@delon/util', '@delon/acl', 'date-fns/format', 'mockjs', 'ng-zorro-antd/core/config', '@abp/ng.theme.shared', '@abp/ng.theme.basic', '@fs/ng-alain/basic'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = {}), global.ng.common.http, global.ng.core, global.ng.common.locales.zh, global.theme, global.locale, global.i18n, global.ng.common, global.fs['ng-alain'].core, global.core$2, global.httpLoader, global.fs['ng-alain'].shared, global.mock, global.util, global.acl, global.format, global.Mock, global.config, global.ng_theme_shared, global.ng_theme_basic, global.fs['ng-alain'].basic));
}(this, (function (exports, http, core, ngLang, theme, locale, i18n, common, core$1, core$2, httpLoader, shared, mock, util, acl, format, Mock, config, ng_theme_shared, ng_theme_basic, basic) { 'use strict';

    ngLang = ngLang && Object.prototype.hasOwnProperty.call(ngLang, 'default') ? ngLang['default'] : ngLang;
    format = format && Object.prototype.hasOwnProperty.call(format, 'default') ? format['default'] : format;

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

    var basicGoods = [
        {
            id: '1234561',
            name: '矿泉水 550ml',
            barcode: '12421432143214321',
            price: '2.00',
            num: '1',
            amount: '2.00',
        },
        {
            id: '1234562',
            name: '凉茶 300ml',
            barcode: '12421432143214322',
            price: '3.00',
            num: '2',
            amount: '6.00',
        },
        {
            id: '1234563',
            name: '好吃的薯片',
            barcode: '12421432143214323',
            price: '7.00',
            num: '4',
            amount: '28.00',
        },
        {
            id: '1234564',
            name: '特别好吃的蛋卷',
            barcode: '12421432143214324',
            price: '8.50',
            num: '3',
            amount: '25.50',
        },
    ];
    var basicProgress = [
        {
            key: '1',
            time: '2017-10-01 14:10',
            rate: '联系客户',
            status: 'processing',
            operator: '取货员 ID1234',
            cost: '5mins',
        },
        {
            key: '2',
            time: '2017-10-01 14:05',
            rate: '取货员出发',
            status: 'success',
            operator: '取货员 ID1234',
            cost: '1h',
        },
        {
            key: '3',
            time: '2017-10-01 13:05',
            rate: '取货员接单',
            status: 'success',
            operator: '取货员 ID1234',
            cost: '5mins',
        },
        {
            key: '4',
            time: '2017-10-01 13:00',
            rate: '申请审批通过',
            status: 'success',
            operator: '系统',
            cost: '1h',
        },
        {
            key: '5',
            time: '2017-10-01 12:00',
            rate: '发起退货申请',
            status: 'success',
            operator: '用户',
            cost: '5mins',
        },
    ];
    var advancedOperation1 = [
        {
            key: 'op1',
            type: '订购关系生效',
            name: '曲丽丽',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
        {
            key: 'op2',
            type: '财务复审',
            name: '付小小',
            status: 'reject',
            updatedAt: '2017-10-03  19:23:12',
            memo: '不通过原因',
        },
        {
            key: 'op3',
            type: '部门初审',
            name: '周毛毛',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
        {
            key: 'op4',
            type: '提交订单',
            name: '林东东',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '很棒',
        },
        {
            key: 'op5',
            type: '创建订单',
            name: '汗牙牙',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    var advancedOperation2 = [
        {
            key: 'op1',
            type: '订购关系生效',
            name: '曲丽丽',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    var advancedOperation3 = [
        {
            key: 'op1',
            type: '创建订单',
            name: '汗牙牙',
            status: 'agree',
            updatedAt: '2017-10-03  19:23:12',
            memo: '-',
        },
    ];
    var PROFILES = {
        'GET /profile/progress': basicProgress,
        'GET /profile/goods': basicGoods,
        'GET /profile/advanced': {
            advancedOperation1: advancedOperation1,
            advancedOperation2: advancedOperation2,
            advancedOperation3: advancedOperation3,
        },
    };

    var list = [];
    for (var i = 0; i < 46; i += 1) {
        list.push({
            key: i,
            disabled: i % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            no: "TradeCode " + i,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
            owner: '曲丽丽',
            description: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
            createdAt: new Date("2017-07-" + (i < 18 ? '0' + (Math.floor(i / 2) + 1) : Math.floor(i / 2) + 1)),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    function getRule(params) {
        var ret = __spread(list);
        if (params.sorter) {
            var s_1 = params.sorter.split('_');
            ret = ret.sort(function (prev, next) {
                if (s_1[1] === 'descend') {
                    return next[s_1[0]] - prev[s_1[0]];
                }
                return prev[s_1[0]] - next[s_1[0]];
            });
        }
        if (params.statusList && params.statusList.length > 0) {
            ret = ret.filter(function (data) { return params.statusList.indexOf(data.status) > -1; });
        }
        if (params.no) {
            ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
        }
        return ret;
    }
    function removeRule(nos) {
        nos.split(',').forEach(function (no) {
            var idx = list.findIndex(function (w) { return w.no === no; });
            if (idx !== -1) {
                list.splice(idx, 1);
            }
        });
        return true;
    }
    function saveRule(description) {
        var i = Math.ceil(Math.random() * 10000);
        list.unshift({
            key: i,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i % 2],
            no: "TradeCode " + i,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
            owner: '曲丽丽',
            description: description,
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 2,
            updatedAt: new Date(),
            createdAt: new Date(),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    var ɵ0 = function (req) { return getRule(req.queryString); }, ɵ1 = function (req) { return removeRule(req.queryString.nos); }, ɵ2 = function (req) { return saveRule(req.body.description); };
    var RULES = {
        '/rule': ɵ0,
        'DELETE /rule': ɵ1,
        'POST /rule': ɵ2,
    };

    // region: mock data
    var titles = ['Alipay', 'Angular', 'Ant Design', 'Ant Design Pro', 'Bootstrap', 'React', 'Vue', 'Webpack'];
    var avatars = [
        'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
        'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
        'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
        'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
    ];
    var covers = [
        'https://gw.alipayobjects.com/zos/rmsportal/HrxcVbrKnCJOZvtzSqjN.png',
        'https://gw.alipayobjects.com/zos/rmsportal/alaPpKWajEbIYEUvvVNf.png',
        'https://gw.alipayobjects.com/zos/rmsportal/RLwlKSYGSXGHuWSojyvp.png',
        'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
    ];
    var desc = [
        '那是一种内在的东西， 他们到达不了，也无法触及的',
        '希望是一个好东西，也许是最好的，好东西是不会消亡的',
        '生命就像一盒巧克力，结果往往出人意料',
        '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
        '那时候我只会想自己想要什么，从不想自己拥有什么',
    ];
    var user = [
        '卡色',
        'cipchk',
        '付小小',
        '曲丽丽',
        '林东东',
        '周星星',
        '吴加好',
        '朱偏右',
        '鱼酱',
        '乐哥',
        '谭小仪',
        '仲尼',
    ];
    // endregion
    function getFakeList(count) {
        if (count === void 0) { count = 20; }
        var list = [];
        for (var i = 0; i < count; i += 1) {
            list.push({
                id: "fake-list-" + i,
                owner: user[i % 10],
                title: titles[i % 8],
                avatar: avatars[i % 8],
                cover: parseInt((i / 4).toString(), 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
                status: ['active', 'exception', 'normal'][i % 3],
                percent: Math.ceil(Math.random() * 50) + 50,
                logo: avatars[i % 8],
                href: 'https://ant.design',
                updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                subDescription: desc[i % 5],
                description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                activeUser: Math.ceil(Math.random() * 100000) + 100000,
                newUser: Math.ceil(Math.random() * 1000) + 1000,
                star: Math.ceil(Math.random() * 100) + 100,
                like: Math.ceil(Math.random() * 100) + 100,
                message: Math.ceil(Math.random() * 10) + 10,
                content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                members: [
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                        name: '曲丽丽',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                        name: '王昭君',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                        name: '董娜娜',
                    },
                ],
            });
        }
        return list;
    }
    function getNotice() {
        return [
            {
                id: 'xxx1',
                title: titles[0],
                logo: avatars[0],
                description: '那是一种内在的东西， 他们到达不了，也无法触及的',
                updatedAt: new Date(),
                member: '科学搬砖组',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx2',
                title: titles[1],
                logo: avatars[1],
                description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                updatedAt: new Date('2017-07-24'),
                member: '全组都是吴彦祖',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx3',
                title: titles[2],
                logo: avatars[2],
                description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                updatedAt: new Date(),
                member: '中二少女团',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx4',
                title: titles[3],
                logo: avatars[3],
                description: '那时候我只会想自己想要什么，从不想自己拥有什么',
                updatedAt: new Date('2017-07-23'),
                member: '程序员日常',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx5',
                title: titles[4],
                logo: avatars[4],
                description: '凛冬将至',
                updatedAt: new Date('2017-07-23'),
                member: '高逼格设计天团',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx6',
                title: titles[5],
                logo: avatars[5],
                description: '生命就像一盒巧克力，结果往往出人意料',
                updatedAt: new Date('2017-07-23'),
                member: '骗你来学计算机',
                href: '',
                memberLink: '',
            },
        ];
    }
    function getActivities() {
        return [
            {
                id: 'trend-1',
                updatedAt: new Date(),
                user: {
                    name: '林东东',
                    avatar: avatars[0],
                },
                group: {
                    name: '高逼格设计天团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-2',
                updatedAt: new Date(),
                user: {
                    name: '付小小',
                    avatar: avatars[1],
                },
                group: {
                    name: '高逼格设计天团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-3',
                updatedAt: new Date(),
                user: {
                    name: '曲丽丽',
                    avatar: avatars[2],
                },
                group: {
                    name: '中二少女团',
                    link: 'http://github.com/',
                },
                project: {
                    name: '六月迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
            {
                id: 'trend-4',
                updatedAt: new Date(),
                user: {
                    name: '周星星',
                    avatar: avatars[3],
                },
                project: {
                    name: '5 月日常迭代',
                    link: 'http://github.com/',
                },
                template: '将 @{project} 更新至已发布状态',
            },
            {
                id: 'trend-5',
                updatedAt: new Date(),
                user: {
                    name: '朱偏右',
                    avatar: avatars[4],
                },
                project: {
                    name: '工程效能',
                    link: 'http://github.com/',
                },
                comment: {
                    name: '留言',
                    link: 'http://github.com/',
                },
                template: '在 @{project} 发布了 @{comment}',
            },
            {
                id: 'trend-6',
                updatedAt: new Date(),
                user: {
                    name: '乐哥',
                    avatar: avatars[5],
                },
                group: {
                    name: '程序员日常',
                    link: 'http://github.com/',
                },
                project: {
                    name: '品牌迭代',
                    link: 'http://github.com/',
                },
                template: '在 @{group} 新建项目 @{project}',
            },
        ];
    }
    var ɵ0$1 = function (req) { return getFakeList(req.queryString.count); }, ɵ1$1 = function () { return getNotice(); }, ɵ2$1 = function () { return getActivities(); }, ɵ3 = function () {
        throw new mock.MockStatusError(401);
    }, ɵ4 = function () {
        throw new mock.MockStatusError(403);
    }, ɵ5 = function () {
        throw new mock.MockStatusError(404);
    }, ɵ6 = function () {
        throw new mock.MockStatusError(500);
    };
    var APIS = {
        '/api/list': ɵ0$1,
        '/api/notice': ɵ1$1,
        '/api/activities': ɵ2$1,
        '/api/401': ɵ3,
        '/api/403': ɵ4,
        '/api/404': ɵ5,
        '/api/500': ɵ6,
    };

    // region: mock data
    var visitData = [];
    var beginDay = new Date().getTime();
    var fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
    for (var i$1 = 0; i$1 < fakeY.length; i$1 += 1) {
        visitData.push({
            x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i$1), 'yyyy-MM-dd'),
            y: fakeY[i$1],
        });
    }
    var visitData2 = [];
    var fakeY2 = [1, 6, 4, 8, 3, 7, 2];
    for (var i$1 = 0; i$1 < fakeY2.length; i$1 += 1) {
        visitData2.push({
            x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i$1), 'yyyy-MM-dd'),
            y: fakeY2[i$1],
        });
    }
    var salesData = [];
    for (var i$1 = 0; i$1 < 12; i$1 += 1) {
        salesData.push({
            x: i$1 + 1 + "\u6708",
            y: Math.floor(Math.random() * 1000) + 200,
        });
    }
    var searchData = [];
    for (var i$1 = 0; i$1 < 50; i$1 += 1) {
        searchData.push({
            index: i$1 + 1,
            keyword: "\u641C\u7D22\u5173\u952E\u8BCD-" + i$1,
            count: Math.floor(Math.random() * 1000),
            range: Math.floor(Math.random() * 100),
            status: Math.floor((Math.random() * 10) % 2),
        });
    }
    var salesTypeData = [
        {
            x: '家用电器',
            y: 4544,
        },
        {
            x: '食用酒水',
            y: 3321,
        },
        {
            x: '个护健康',
            y: 3113,
        },
        {
            x: '服饰箱包',
            y: 2341,
        },
        {
            x: '母婴产品',
            y: 1231,
        },
        {
            x: '其他',
            y: 1231,
        },
    ];
    var salesTypeDataOnline = [
        {
            x: '家用电器',
            y: 244,
        },
        {
            x: '食用酒水',
            y: 321,
        },
        {
            x: '个护健康',
            y: 311,
        },
        {
            x: '服饰箱包',
            y: 41,
        },
        {
            x: '母婴产品',
            y: 121,
        },
        {
            x: '其他',
            y: 111,
        },
    ];
    var salesTypeDataOffline = [
        {
            x: '家用电器',
            y: 99,
        },
        {
            x: '个护健康',
            y: 188,
        },
        {
            x: '服饰箱包',
            y: 344,
        },
        {
            x: '母婴产品',
            y: 255,
        },
        {
            x: '其他',
            y: 65,
        },
    ];
    var offlineData = [];
    for (var i$1 = 0; i$1 < 10; i$1 += 1) {
        offlineData.push({
            name: "\u95E8\u5E97" + i$1,
            cvr: Math.ceil(Math.random() * 9) / 10,
        });
    }
    var offlineChartData = [];
    for (var i$1 = 0; i$1 < 20; i$1 += 1) {
        offlineChartData.push({
            time: new Date().getTime() + 1000 * 60 * 30 * i$1,
            y1: Math.floor(Math.random() * 100) + 10,
            y2: Math.floor(Math.random() * 100) + 10,
        });
    }
    var radarOriginData = [
        {
            name: '个人',
            ref: 10,
            koubei: 8,
            output: 4,
            contribute: 5,
            hot: 7,
        },
        {
            name: '团队',
            ref: 3,
            koubei: 9,
            output: 6,
            contribute: 3,
            hot: 1,
        },
        {
            name: '部门',
            ref: 4,
            koubei: 1,
            output: 6,
            contribute: 5,
            hot: 7,
        },
    ];
    //
    var radarData = [];
    var radarTitleMap = {
        ref: '引用',
        koubei: '口碑',
        output: '产量',
        contribute: '贡献',
        hot: '热度',
    };
    radarOriginData.forEach(function (item) {
        Object.keys(item).forEach(function (key) {
            if (key !== 'name') {
                radarData.push({
                    name: item.name,
                    label: radarTitleMap[key],
                    value: item[key],
                });
            }
        });
    });
    // endregion
    var CHARTS = {
        '/chart': JSON.parse(JSON.stringify({
            visitData: visitData,
            visitData2: visitData2,
            salesData: salesData,
            searchData: searchData,
            offlineData: offlineData,
            offlineChartData: offlineChartData,
            salesTypeData: salesTypeData,
            salesTypeDataOnline: salesTypeDataOnline,
            salesTypeDataOffline: salesTypeDataOffline,
            radarData: radarData,
        })),
        '/chart/visit': JSON.parse(JSON.stringify(visitData)),
        '/chart/tags': Mock.mock({
            'list|100': [{ name: '@city', 'value|1-100': 150 }],
        }),
    };

    var POIS = {
        '/pois': {
            total: 2,
            list: [
                {
                    id: 10000,
                    user_id: 1,
                    name: '测试品牌',
                    branch_name: '测试分店',
                    geo: 310105,
                    country: '中国',
                    province: '上海',
                    city: '上海市',
                    district: '长宁区',
                    address: '中山公园',
                    tel: '15900000000',
                    categories: '美食,粤菜,湛江菜',
                    lng: 121.41707989151003,
                    lat: 31.218656214644792,
                    recommend: '推荐品',
                    special: '特色服务',
                    introduction: '商户简介',
                    open_time: '营业时间',
                    avg_price: 260,
                    reason: null,
                    status: 1,
                    status_str: '待审核',
                    status_wx: 1,
                    modified: 1505826527288,
                    created: 1505826527288,
                },
                {
                    id: 10001,
                    user_id: 2,
                    name: '测试品牌2',
                    branch_name: '测试分店2',
                    geo: 310105,
                    country: '中国',
                    province: '上海',
                    city: '上海市',
                    district: '长宁区',
                    address: '中山公园',
                    tel: '15900000000',
                    categories: '美食,粤菜,湛江菜',
                    lng: 121.41707989151003,
                    lat: 31.218656214644792,
                    recommend: '推荐品',
                    special: '特色服务',
                    introduction: '商户简介',
                    open_time: '营业时间',
                    avg_price: 260,
                    reason: null,
                    status: 1,
                    status_str: '待审核',
                    status_wx: 1,
                    modified: 1505826527288,
                    created: 1505826527288,
                },
            ],
        },
    };

    var list$1 = [];
    var total = 50;
    for (var i$2 = 0; i$2 < total; i$2 += 1) {
        list$1.push({
            id: i$2 + 1,
            disabled: i$2 % 6 === 0,
            href: 'https://ant.design',
            avatar: [
                'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
                'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
            ][i$2 % 2],
            no: "TradeCode " + i$2,
            title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i$2,
            owner: '曲丽丽',
            description: '这是一段描述',
            callNo: Math.floor(Math.random() * 1000),
            status: Math.floor(Math.random() * 10) % 4,
            updatedAt: new Date("2017-07-" + (Math.floor(i$2 / 2) + 1)),
            createdAt: new Date("2017-07-" + (Math.floor(i$2 / 2) + 1)),
            progress: Math.ceil(Math.random() * 100),
        });
    }
    function genData(params) {
        var ret = __spread(list$1);
        var pi = +params.pi;
        var ps = +params.ps;
        var start = (pi - 1) * ps;
        if (params.no) {
            ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
        }
        return { total: ret.length, list: ret.slice(start, ps * pi) };
    }
    function saveData(id, value) {
        var item = list$1.find(function (w) { return w.id === id; });
        if (!item) {
            return { msg: '无效用户信息' };
        }
        Object.assign(item, value);
        return { msg: 'ok' };
    }
    var ɵ0$2 = function (req) { return genData(req.queryString); }, ɵ1$2 = function (req) { return list$1.find(function (w) { return w.id === +req.params.id; }); }, ɵ2$2 = function (req) { return saveData(+req.params.id, req.body); }, ɵ3$1 = function (req) {
        var data = req.body;
        if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
            return { msg: "Invalid username or password\uFF08admin/ng-alain.com\uFF09" };
        }
        return {
            msg: 'ok',
            user: {
                token: '123456789',
                name: data.userName,
                email: data.userName + "@qq.com",
                id: 10000,
                time: +new Date(),
            },
        };
    };
    var USERS = {
        '/user': ɵ0$2,
        '/user/:id': ɵ1$2,
        'POST /user/:id': ɵ2$2,
        '/user/current': {
            name: 'Cipchk',
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            userid: '00000001',
            email: 'cipchk@qq.com',
            signature: '海纳百川，有容乃大',
            title: '交互专家',
            group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
            tags: [
                {
                    key: '0',
                    label: '很有想法的',
                },
                {
                    key: '1',
                    label: '专注撩妹',
                },
                {
                    key: '2',
                    label: '帅~',
                },
                {
                    key: '3',
                    label: '通吃',
                },
                {
                    key: '4',
                    label: '专职后端',
                },
                {
                    key: '5',
                    label: '海纳百川',
                },
            ],
            notifyCount: 12,
            country: 'China',
            geographic: {
                province: {
                    label: '上海',
                    key: '330000',
                },
                city: {
                    label: '市辖区',
                    key: '330100',
                },
            },
            address: 'XX区XXX路 XX 号',
            phone: '你猜-你猜你猜猜猜',
        },
        'POST /user/avatar': 'ok',
        'POST /login/account': ɵ3$1,
        'POST /register': {
            msg: 'ok',
        },
    };

    var DATA = [
        {
            name: '上海',
            id: '310000',
        },
        {
            name: '市辖区',
            id: '310100',
        },
        {
            name: '北京',
            id: '110000',
        },
        {
            name: '市辖区',
            id: '110100',
        },
        {
            name: '浙江省',
            id: '330000',
        },
        {
            name: '杭州市',
            id: '330100',
        },
        {
            name: '宁波市',
            id: '330200',
        },
        {
            name: '温州市',
            id: '330300',
        },
        {
            name: '嘉兴市',
            id: '330400',
        },
        {
            name: '湖州市',
            id: '330500',
        },
        {
            name: '绍兴市',
            id: '330600',
        },
        {
            name: '金华市',
            id: '330700',
        },
        {
            name: '衢州市',
            id: '330800',
        },
        {
            name: '舟山市',
            id: '330900',
        },
        {
            name: '台州市',
            id: '331000',
        },
        {
            name: '丽水市',
            id: '331100',
        },
    ];
    var ɵ0$3 = function () { return DATA.filter(function (w) { return w.id.endsWith('0000'); }); }, ɵ1$3 = function (req) {
        var pid = (req.params.id || '310000').slice(0, 2);
        return DATA.filter(function (w) { return w.id.slice(0, 2) === pid && !w.id.endsWith('0000'); });
    };
    var GEOS = {
        '/geo/province': ɵ0$3,
        '/geo/:id': ɵ1$3,
    };

    var MOCKDATA = /*#__PURE__*/Object.freeze({
        __proto__: null,
        PROFILES: PROFILES,
        RULES: RULES,
        ɵ0: ɵ0,
        ɵ1: ɵ1,
        ɵ2: ɵ2,
        APIS: APIS,
        ɵ3: ɵ3,
        ɵ4: ɵ4,
        ɵ5: ɵ5,
        ɵ6: ɵ6,
        CHARTS: CHARTS,
        POIS: POIS,
        USERS: USERS,
        GEOS: GEOS
    });

    var GlobalConfigModule_1;
    var alainConfig = {
        st: { modal: { size: 'lg' } },
        pageHeader: { homeI18n: 'home' },
        lodop: {
            license: "A59B099A586B3851E0F0D7FDBF37B603",
            licenseA: "C94CEE276DB2187AE6B65D56B3FC2848",
        },
        auth: { login_url: '/passport/login' },
    };
    var alainModules = [theme.AlainThemeModule.forRoot(), acl.DelonACLModule.forRoot(), mock.DelonMockModule.forRoot()];
    var ɵ0$4 = alainConfig;
    var alainProvides = [{ provide: util.ALAIN_CONFIG, useValue: ɵ0$4 }];
    if (true) {
        alainConfig.mock = { data: MOCKDATA };
    }
    var ngZorroConfig = {};
    var ɵ1$4 = ngZorroConfig;
    var zorroProvides = [{ provide: config.NZ_CONFIG, useValue: ɵ1$4 }];
    // #endregion
    exports.GlobalConfigModule = GlobalConfigModule_1 = /** @class */ (function () {
        function GlobalConfigModule(parentModule) {
            core$1.throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
        }
        GlobalConfigModule.forRoot = function () {
            return {
                ngModule: GlobalConfigModule_1,
                providers: __spread(alainProvides, zorroProvides),
            };
        };
        return GlobalConfigModule;
    }());
    exports.GlobalConfigModule = GlobalConfigModule_1 = __decorate([
        core.NgModule({
            imports: __spread(alainModules),
        }),
        __param(0, core.Optional()), __param(0, core.SkipSelf()),
        __metadata("design:paramtypes", [exports.GlobalConfigModule])
    ], exports.GlobalConfigModule);

    var NgAlainModule_1;
    var LANG = {
        abbr: 'zh',
        ng: ngLang,
        zorro: i18n.zh_CN,
        date: locale.zhCN,
        delon: theme.zh_CN,
    };
    common.registerLocaleData(LANG.ng, LANG.abbr);
    var ɵ0$5 = LANG.abbr, ɵ1$5 = LANG.zorro, ɵ2$3 = LANG.date, ɵ3$2 = LANG.delon;
    var LANG_PROVIDES = [
        { provide: core.LOCALE_ID, useValue: ɵ0$5 },
        { provide: i18n.NZ_I18N, useValue: ɵ1$5 },
        { provide: i18n.NZ_DATE_LOCALE, useValue: ɵ2$3 },
        { provide: theme.DELON_LOCALE, useValue: ɵ3$2 },
    ];
    // 加载i18n语言文件
    function I18nHttpLoaderFactory(http) {
        return new httpLoader.TranslateHttpLoader(http, "assets/tmp/i18n/", '.json');
    }
    var I18NSERVICE_MODULES = [
        core$2.TranslateModule.forRoot({
            loader: {
                provide: core$2.TranslateLoader,
                useFactory: I18nHttpLoaderFactory,
                deps: [http.HttpClient],
            },
        }),
    ];
    var I18NSERVICE_PROVIDES = [
        { provide: theme.ALAIN_I18N_TOKEN, useClass: core$1.I18NService, multi: false }
    ];
    // #endregion
    // #region global third module
    var GLOBAL_THIRD_MODULES = [];
    var FORM_MODULES = [shared.JsonSchemaModule];
    // #endregion
    // #region Http Interceptors
    // import { HTTP_INTERCEPTORS } from '@angular/common/http';
    // import { DefaultInterceptor } from '@fs/ng-alain/core';
    // import { SimpleInterceptor } from '@delon/auth';
    var INTERCEPTOR_PROVIDES = [
    // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    ];
    function StartupServiceFactory(startupService) {
        var fun = function () { return startupService.load(); };
        return fun;
    }
    var APPINIT_PROVIDES = [
        core$1.StartupService,
        {
            provide: core.APP_INITIALIZER,
            useFactory: StartupServiceFactory,
            deps: [core$1.StartupService],
            multi: true,
        },
    ];
    var ABP_MODULES = [
        ng_theme_shared.ThemeSharedModule.forRoot(),
        ng_theme_basic.ThemeBasicModule.forRoot(),
        basic.NgAlainBasicModule.forRoot()
    ];
    // #endregion
    exports.NgAlainModule = NgAlainModule_1 = /** @class */ (function () {
        function NgAlainModule() {
        }
        NgAlainModule.forRoot = function () {
            return {
                ngModule: NgAlainModule_1
            };
        };
        return NgAlainModule;
    }());
    exports.NgAlainModule = NgAlainModule_1 = __decorate([
        core.NgModule({
            imports: __spread([
                exports.GlobalConfigModule.forRoot(),
                core$1.CoreModule,
                //LayoutModule,
                shared.STWidgetModule
            ], I18NSERVICE_MODULES, ABP_MODULES, GLOBAL_THIRD_MODULES, FORM_MODULES),
            providers: __spread(LANG_PROVIDES, INTERCEPTOR_PROVIDES, I18NSERVICE_PROVIDES, APPINIT_PROVIDES),
        })
    ], exports.NgAlainModule);

    // https://angular.io/guide/styleguide#style-04-12
    function throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
            throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
        }
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.I18nHttpLoaderFactory = I18nHttpLoaderFactory;
    exports.StartupServiceFactory = StartupServiceFactory;
    exports.throwIfAlreadyLoaded = throwIfAlreadyLoaded;
    exports.ɵ0 = ɵ0$5;
    exports.ɵ1 = ɵ1$5;
    exports.ɵ2 = ɵ2$3;
    exports.ɵ3 = ɵ3$2;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain.umd.js.map
