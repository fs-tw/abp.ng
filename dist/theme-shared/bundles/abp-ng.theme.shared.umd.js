(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@abp/ng.core'), require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('rxjs'), require('@ngxs/store'), require('snq'), require('@angular/common'), require('@swimlane/ngx-datatable'), require('just-clone'), require('@angular/common/http'), require('@ngxs/router-plugin'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.theme.shared', ['exports', '@angular/animations', '@abp/ng.core', '@angular/core', '@angular/router', 'rxjs/operators', 'rxjs', '@ngxs/store', 'snq', '@angular/common', '@swimlane/ngx-datatable', 'just-clone', '@angular/common/http', '@ngxs/router-plugin', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.theme = global.abp.ng.theme || {}, global.abp.ng.theme.shared = {}), global.ng.animations, global.i1, global.ng.core, global.ng.router, global.rxjs.operators, global.rxjs, global.i1$1, global.snq, global.ng.common, global.ngxDatatable, global.clone, global.ng.common.http, global.routerPlugin, global.ngBootstrap, global.core, global.ng.forms));
}(this, (function (exports, animations, i1, i0, router, operators, rxjs, i1$1, snq, common, ngxDatatable, clone, http, routerPlugin, ngBootstrap, core, forms) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);
    var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);

    var bounceIn = animations.animation([
        animations.style({ opacity: '0', display: '{{ display }}' }),
        animations.animate('{{ time}} {{ easing }}', animations.keyframes([
            animations.style({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
            animations.style({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
            animations.style({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
        ]))
    ], {
        params: {
            time: '350ms',
            easing: 'cubic-bezier(.7,.31,.72,1.47)',
            display: 'block',
            transform: 'translate(-50%, -50%)'
        }
    });

    var collapseY = animations.animation([
        animations.style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ height: '0', padding: '0px' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    var collapseYWithMargin = animations.animation([
        animations.style({ 'margin-top': '0' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ 'margin-left': '-100%' })),
    ], {
        params: { time: '500ms', easing: 'ease' },
    });
    var collapseX = animations.animation([
        animations.style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ width: '0', padding: '0px' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    var expandY = animations.animation([
        animations.style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ height: '*', padding: '*' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    var expandYWithMargin = animations.animation([
        animations.style({ 'margin-top': '-100%' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ 'margin-top': '0' })),
    ], {
        params: { time: '500ms', easing: 'ease' },
    });
    var expandX = animations.animation([
        animations.style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ width: '*', padding: '*' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    var collapse = animations.trigger('collapse', [
        animations.state('collapsed', animations.style({ height: '0', overflow: 'hidden' })),
        animations.state('expanded', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseY)),
        animations.transition('collapsed => expanded', animations.useAnimation(expandY)),
    ]);
    var collapseWithMargin = animations.trigger('collapseWithMargin', [
        animations.state('collapsed', animations.style({ 'margin-top': '-100%' })),
        animations.state('expanded', animations.style({ 'margin-top': '0' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseYWithMargin), {
            params: { time: '400ms', easing: 'linear' },
        }),
        animations.transition('collapsed => expanded', animations.useAnimation(expandYWithMargin)),
    ]);
    var collapseLinearWithMargin = animations.trigger('collapseLinearWithMargin', [
        animations.state('collapsed', animations.style({ 'margin-top': '-100vh' })),
        animations.state('expanded', animations.style({ 'margin-top': '0' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
        animations.transition('collapsed => expanded', animations.useAnimation(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
    ]);

    var fadeIn = animations.animation([animations.style({ opacity: '0' }), animations.animate('{{ time}} {{ easing }}', animations.style({ opacity: '1' }))], {
        params: { time: '350ms', easing: 'ease' },
    });
    var fadeOut = animations.animation([animations.style({ opacity: '1' }), animations.animate('{{ time}} {{ easing }}', animations.style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
    var fadeInDown = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeInUp = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeInLeft = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeInRight = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeOutDown = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeOutUp = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeOutLeft = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    var fadeOutRight = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });

    var fadeAnimation = animations.trigger('fade', [
        animations.transition(':enter', animations.useAnimation(fadeIn)),
        animations.transition(':leave', animations.useAnimation(fadeOut)),
    ]);
    var dialogAnimation = animations.trigger('dialog', [
        animations.transition(':enter', animations.useAnimation(fadeInDown)),
        animations.transition(':leave', animations.useAnimation(fadeOut)),
    ]);

    var slideFromBottom = animations.trigger('slideFromBottom', [
        animations.transition('* <=> *', [
            animations.style({ 'margin-top': '20px', opacity: '0' }),
            animations.animate('0.2s ease-out', animations.style({ opacity: '1', 'margin-top': '0px' })),
        ]),
    ]);

    var toastInOut = animations.trigger('toastInOut', [
        animations.transition('* <=> *', [
            animations.query(':enter', [
                animations.style({ opacity: 0, transform: 'translateY(20px)' }),
                animations.animate('350ms ease', animations.style({ opacity: 1, transform: 'translateY(0)' })),
            ], { optional: true }),
            animations.query(':leave', animations.animate('450ms ease', animations.style({ opacity: 0 })), {
                optional: true,
            }),
        ]),
    ]);

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
                if (Object.prototype.hasOwnProperty.call(b, p))
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(cdRef, router, routes, subscription) {
            this.cdRef = cdRef;
            this.router = router;
            this.routes = routes;
            this.subscription = subscription;
            this.segments = [];
        }
        BreadcrumbComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription.addOne(this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }), 
            // tslint:disable-next-line:deprecation
            operators.startWith(null), operators.map(function () { return _this.routes.search({ path: i1.getRoutePath(_this.router) }); })), function (route) {
                _this.segments = [];
                if (route) {
                    var node = { parent: route };
                    while (node.parent) {
                        node = node.parent;
                        var parent = node.parent, children = node.children, isLeaf = node.isLeaf, segment = __rest(node, ["parent", "children", "isLeaf"]);
                        if (!isAdministration(segment))
                            _this.segments.unshift(segment);
                    }
                    _this.cdRef.detectChanges();
                }
            });
        };
        return BreadcrumbComponent;
    }());
    BreadcrumbComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-breadcrumb',
                    template: "<ol class=\"breadcrumb\" *ngIf=\"segments.length\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment.name | abpLocalization }}\r\n  </li>\r\n</ol>\r\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [i1.SubscriptionService]
                },] }
    ];
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: router.Router },
        { type: i1.RoutesService },
        { type: i1.SubscriptionService }
    ]; };
    function isAdministration(route) {
        return route.name === "AbpUiNavigation::Menu:Administration" /* Administration */;
    }

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(renderer) {
            this.renderer = renderer;
            this.buttonId = '';
            this.buttonClass = 'btn btn-primary';
            this.buttonType = 'button';
            this.loading = false;
            this.disabled = false;
            // tslint:disable
            this.click = new i0.EventEmitter();
            this.focus = new i0.EventEmitter();
            this.blur = new i0.EventEmitter();
            // tslint:enable
            this.abpClick = new i0.EventEmitter();
            this.abpFocus = new i0.EventEmitter();
            this.abpBlur = new i0.EventEmitter();
        }
        Object.defineProperty(ButtonComponent.prototype, "icon", {
            get: function () {
                return "" + (this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
            },
            enumerable: false,
            configurable: true
        });
        ButtonComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.attributes) {
                Object.keys(this.attributes).forEach(function (key) {
                    _this.renderer.setAttribute(_this.buttonRef.nativeElement, key, _this.attributes[key]);
                });
            }
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-button',
                    template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"click.next($event); abpClick.next($event)\"\n      (focus)=\"focus.next($event); abpFocus.next($event)\"\n      (blur)=\"blur.next($event); abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 }
    ]; };
    ButtonComponent.propDecorators = {
        buttonId: [{ type: i0.Input }],
        buttonClass: [{ type: i0.Input }],
        buttonType: [{ type: i0.Input }],
        iconClass: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        attributes: [{ type: i0.Input }],
        click: [{ type: i0.Output }],
        focus: [{ type: i0.Output }],
        blur: [{ type: i0.Output }],
        abpClick: [{ type: i0.Output }],
        abpFocus: [{ type: i0.Output }],
        abpBlur: [{ type: i0.Output }],
        buttonRef: [{ type: i0.ViewChild, args: ['button', { static: true },] }]
    };

    function getRandomBackgroundColor(count) {
        var colors = [];
        for (var i = 0; i < count; i++) {
            var r = ((i + 5) * (i + 5) * 474) % 255;
            var g = ((i + 5) * (i + 5) * 1600) % 255;
            var b = ((i + 5) * (i + 5) * 84065) % 255;
            colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
        }
        return colors;
    }
    var chartJsLoaded$ = new rxjs.ReplaySubject(1);

    var ChartComponent = /** @class */ (function () {
        function ChartComponent(el, cdRef) {
            var _this = this;
            this.el = el;
            this.cdRef = cdRef;
            this.options = {};
            this.plugins = [];
            this.responsive = true;
            // tslint:disable-next-line: no-output-on-prefix
            this.onDataSelect = new i0.EventEmitter();
            this.initialized = new rxjs.BehaviorSubject(this);
            this.onCanvasClick = function (event) {
                if (_this.chart) {
                    var element = _this.chart.getElementAtEvent(event);
                    var dataset = _this.chart.getDatasetAtEvent(event);
                    if (element && element.length && dataset) {
                        _this.onDataSelect.emit({
                            originalEvent: event,
                            element: element[0],
                            dataset: dataset,
                        });
                    }
                }
            };
            this.initChart = function () {
                var opts = _this.options || {};
                opts.responsive = _this.responsive;
                // allows chart to resize in responsive mode
                if (opts.responsive && (_this.height || _this.width)) {
                    opts.maintainAspectRatio = false;
                }
                _this.chart = new Chart(_this.canvas, {
                    type: _this.type,
                    data: _this.data,
                    options: _this.options,
                    plugins: _this.plugins,
                });
                _this.cdRef.detectChanges();
            };
            this.generateLegend = function () {
                if (_this.chart) {
                    return _this.chart.generateLegend();
                }
            };
            this.refresh = function () {
                if (_this.chart) {
                    _this.chart.update();
                    _this.cdRef.detectChanges();
                }
            };
            this.reinit = function () {
                if (_this.chart) {
                    _this.chart.destroy();
                    _this.initChart();
                }
            };
        }
        Object.defineProperty(ChartComponent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (val) {
                this._data = val;
                this.reinit();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "canvas", {
            get: function () {
                return this.el.nativeElement.children[0].children[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "base64Image", {
            get: function () {
                return this.chart.toBase64Image();
            },
            enumerable: false,
            configurable: true
        });
        ChartComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            chartJsLoaded$.subscribe(function () {
                _this.testChartJs();
                _this.initChart();
                _this._initialized = true;
            });
        };
        ChartComponent.prototype.testChartJs = function () {
            try {
                // tslint:disable-next-line: no-unused-expression
                Chart;
            }
            catch (error) {
                throw new Error("Chart is not found. Import the Chart from app.module like shown below:\n      import('chart.js');\n      ");
            }
        };
        ChartComponent.prototype.ngOnDestroy = function () {
            if (this.chart) {
                this.chart.destroy();
                this._initialized = false;
                this.chart = null;
            }
        };
        return ChartComponent;
    }());
    ChartComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-chart',
                    template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
                },] }
    ];
    ChartComponent.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.ChangeDetectorRef }
    ]; };
    ChartComponent.propDecorators = {
        type: [{ type: i0.Input }],
        options: [{ type: i0.Input }],
        plugins: [{ type: i0.Input }],
        width: [{ type: i0.Input }],
        height: [{ type: i0.Input }],
        responsive: [{ type: i0.Input }],
        onDataSelect: [{ type: i0.Output }],
        initialized: [{ type: i0.Output }],
        data: [{ type: i0.Input }]
    };

    (function (Confirmation) {
        var Status;
        (function (Status) {
            Status["confirm"] = "confirm";
            Status["reject"] = "reject";
            Status["dismiss"] = "dismiss";
        })(Status = Confirmation.Status || (Confirmation.Status = {}));
    })(exports.Confirmation || (exports.Confirmation = {}));

    var ConfirmationComponent = /** @class */ (function () {
        function ConfirmationComponent() {
            this.confirm = exports.Confirmation.Status.confirm;
            this.reject = exports.Confirmation.Status.reject;
            this.dismiss = exports.Confirmation.Status.dismiss;
        }
        ConfirmationComponent.prototype.close = function (status) {
            this.clear(status);
        };
        ConfirmationComponent.prototype.getIconClass = function (_a) {
            var severity = _a.severity;
            switch (severity) {
                case 'info':
                    return 'fa-info-circle';
                case 'success':
                    return 'fa-check-circle';
                case 'warning':
                    return 'fa-exclamation-triangle';
                case 'error':
                    return 'fa-times-circle';
                default:
                    return 'fa-question-circle';
            }
        };
        return ConfirmationComponent;
    }());
    ConfirmationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-confirmation',
                    template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div\r\n    class=\"confirmation-backdrop\"\r\n    (click)=\"data.options?.dismissible ? close(dismiss) : null\"\r\n  ></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".confirmation{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1060}.confirmation .confirmation-backdrop{height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;min-height:300px;padding:0;width:450px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{align-items:center;display:flex;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{font-size:80px;height:100px;stroke-width:1;text-align:center;width:100px}.confirmation .confirmation-dialog .content{display:block;flex-grow:1}.confirmation .confirmation-dialog .content .title{display:block;font-size:27px;font-weight:600;margin:0;padding:0;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;font-size:16px;font-weight:400;margin:10px auto;padding:20px;text-align:center}.confirmation .confirmation-dialog .footer{align-items:center;display:flex;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{border:none;border-radius:6px;display:inline-block;font-size:14px;font-weight:600;margin:0 5px;padding:10px 20px}"]
                },] }
    ];

    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent() {
        }
        LoadingComponent.prototype.ngOnInit = function () { };
        return LoadingComponent;
    }());
    LoadingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-loading',
                    template: "\n    <div class=\"abp-loading\">\n      <i class=\"fa fa-spinner fa-pulse abp-spinner\"></i>\n    </div>\n  ",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["\n      .abp-loading {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 1040;\n      }\n\n      .abp-loading .abp-spinner {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 14px;\n        -moz-transform: translateX(-50%) translateY(-50%);\n        -o-transform: translateX(-50%) translateY(-50%);\n        -ms-transform: translateX(-50%) translateY(-50%);\n        -webkit-transform: translateX(-50%) translateY(-50%);\n        transform: translateX(-50%) translateY(-50%);\n      }\n    "]
                },] }
    ];
    LoadingComponent.ctorParameters = function () { return []; };

    var LoaderBarComponent = /** @class */ (function () {
        function LoaderBarComponent(actions, router, cdRef, subscription) {
            var _this = this;
            this.actions = actions;
            this.router = router;
            this.cdRef = cdRef;
            this.subscription = subscription;
            this.containerClass = 'abp-loader-bar';
            this.color = '#77b6ff';
            this.progressLevel = 0;
            this.intervalPeriod = 350;
            this.stopDelay = 800;
            this.filter = function (action) { return action.payload.url.indexOf('openid-configuration') < 0; };
            this.clearProgress = function () {
                _this.progressLevel = 0;
                _this.cdRef.detectChanges();
            };
            this.reportProgress = function () {
                if (_this.progressLevel < 75) {
                    _this.progressLevel += 1 + Math.random() * 9;
                }
                else if (_this.progressLevel < 90) {
                    _this.progressLevel += 0.4;
                }
                else if (_this.progressLevel < 100) {
                    _this.progressLevel += 0.1;
                }
                else {
                    _this.interval.unsubscribe();
                }
                _this.cdRef.detectChanges();
            };
        }
        Object.defineProperty(LoaderBarComponent.prototype, "isLoading", {
            get: function () {
                return this._isLoading;
            },
            set: function (value) {
                this._isLoading = value;
                this.cdRef.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoaderBarComponent.prototype, "boxShadow", {
            get: function () {
                return "0 0 10px rgba(" + this.color + ", 0.5)";
            },
            enumerable: false,
            configurable: true
        });
        LoaderBarComponent.prototype.subscribeToLoadActions = function () {
            var _this = this;
            this.subscription.addOne(this.actions.pipe(i1$1.ofActionSuccessful(i1.StartLoader, i1.StopLoader), operators.filter(this.filter)), function (action) {
                if (action instanceof i1.StartLoader)
                    _this.startLoading();
                else
                    _this.stopLoading();
            });
        };
        LoaderBarComponent.prototype.subscribeToRouterEvents = function () {
            var _this = this;
            this.subscription.addOne(this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationStart ||
                event instanceof router.NavigationEnd ||
                event instanceof router.NavigationError; })), function (event) {
                if (event instanceof router.NavigationStart)
                    _this.startLoading();
                else
                    _this.stopLoading();
            });
        };
        LoaderBarComponent.prototype.ngOnInit = function () {
            this.subscribeToLoadActions();
            this.subscribeToRouterEvents();
        };
        LoaderBarComponent.prototype.ngOnDestroy = function () {
            if (this.interval)
                this.interval.unsubscribe();
        };
        LoaderBarComponent.prototype.startLoading = function () {
            if (this.isLoading || (this.interval && !this.interval.closed))
                return;
            this.isLoading = true;
            this.interval = rxjs.timer(0, this.intervalPeriod).subscribe(this.reportProgress);
        };
        LoaderBarComponent.prototype.stopLoading = function () {
            if (this.interval)
                this.interval.unsubscribe();
            this.progressLevel = 100;
            this.isLoading = false;
            if (this.timer && !this.timer.closed)
                return;
            this.timer = rxjs.timer(this.stopDelay).subscribe(this.clearProgress);
        };
        return LoaderBarComponent;
    }());
    LoaderBarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-loader-bar',
                    template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div\n        class=\"abp-progress\"\n        [class.progressing]=\"progressLevel\"\n        [style.width.vw]=\"progressLevel\"\n        [ngStyle]=\"{\n          'background-color': color,\n          'box-shadow': boxShadow\n        }\"\n      ></div>\n    </div>\n  ",
                    providers: [i1.SubscriptionService],
                    styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}"]
                },] }
    ];
    LoaderBarComponent.ctorParameters = function () { return [
        { type: i1$1.Actions },
        { type: router.Router },
        { type: i0.ChangeDetectorRef },
        { type: i1.SubscriptionService }
    ]; };
    LoaderBarComponent.propDecorators = {
        isLoading: [{ type: i0.Input }],
        containerClass: [{ type: i0.Input }],
        color: [{ type: i0.Input }],
        filter: [{ type: i0.Input }]
    };

    var ConfirmationService = /** @class */ (function () {
        function ConfirmationService(contentProjectionService) {
            var _this = this;
            this.contentProjectionService = contentProjectionService;
            this.confirmation$ = new rxjs.ReplaySubject(1);
            this.clear = function (status) {
                if (status === void 0) { status = exports.Confirmation.Status.dismiss; }
                _this.confirmation$.next();
                _this.status$.next(status);
            };
        }
        ConfirmationService.prototype.setContainer = function () {
            var _this = this;
            this.containerComponentRef = this.contentProjectionService.projectContent(i1.PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
                confirmation$: this.confirmation$,
                clear: this.clear,
            }));
            setTimeout(function () {
                _this.containerComponentRef.changeDetectorRef.detectChanges();
            }, 0);
        };
        ConfirmationService.prototype.info = function (message, title, options) {
            return this.show(message, title, 'info', options);
        };
        ConfirmationService.prototype.success = function (message, title, options) {
            return this.show(message, title, 'success', options);
        };
        ConfirmationService.prototype.warn = function (message, title, options) {
            return this.show(message, title, 'warning', options);
        };
        ConfirmationService.prototype.error = function (message, title, options) {
            return this.show(message, title, 'error', options);
        };
        ConfirmationService.prototype.show = function (message, title, severity, options) {
            if (options === void 0) { options = {}; }
            if (!this.containerComponentRef)
                this.setContainer();
            this.confirmation$.next({
                message: message,
                title: title,
                severity: severity || 'neutral',
                options: options,
            });
            this.status$ = new rxjs.Subject();
            var _a = options.dismissible, dismissible = _a === void 0 ? true : _a;
            if (dismissible)
                this.listenToEscape();
            return this.status$;
        };
        ConfirmationService.prototype.listenToEscape = function () {
            var _this = this;
            rxjs.fromEvent(document, 'keyup')
                .pipe(operators.takeUntil(this.status$), operators.debounceTime(150), operators.filter(function (key) { return key && key.key === 'Escape'; }))
                .subscribe(function (_) {
                _this.clear();
            });
        };
        return ConfirmationService;
    }());
    ConfirmationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
    ConfirmationService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ConfirmationService.ctorParameters = function () { return [
        { type: i1.ContentProjectionService }
    ]; };

    var ModalContainerComponent = /** @class */ (function () {
        function ModalContainerComponent() {
        }
        return ModalContainerComponent;
    }());
    ModalContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-modal-container',
                    template: "\n    <ng-container #container></ng-container>\n  "
                },] }
    ];
    ModalContainerComponent.propDecorators = {
        container: [{ type: i0.ViewChild, args: ['container', { static: true, read: i0.ViewContainerRef },] }]
    };

    var ModalService = /** @class */ (function () {
        function ModalService(contentProjectionService) {
            this.contentProjectionService = contentProjectionService;
            this.setContainer();
        }
        ModalService.prototype.setContainer = function () {
            this.containerComponentRef = this.contentProjectionService.projectContent(i1.PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
            this.containerComponentRef.changeDetectorRef.detectChanges();
        };
        ModalService.prototype.clearModal = function () {
            this.getContainer().clear();
            this.detectChanges();
        };
        ModalService.prototype.detectChanges = function () {
            this.containerComponentRef.changeDetectorRef.detectChanges();
        };
        ModalService.prototype.getContainer = function () {
            return this.containerComponentRef.instance.container;
        };
        ModalService.prototype.renderTemplate = function (template, context) {
            var containerRef = this.getContainer();
            var strategy = i1.PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
            this.contentProjectionService.projectContent(strategy);
        };
        ModalService.prototype.ngOnDestroy = function () {
            this.containerComponentRef.destroy();
        };
        return ModalService;
    }());
    ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ModalService, providedIn: "root" });
    ModalService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ModalService.ctorParameters = function () { return [
        { type: i1.ContentProjectionService }
    ]; };

    var ModalComponent = /** @class */ (function () {
        function ModalComponent(renderer, confirmationService, modalService, subscription) {
            this.renderer = renderer;
            this.confirmationService = confirmationService;
            this.modalService = modalService;
            this.subscription = subscription;
            this.centered = false;
            this.modalClass = '';
            this.size = 'lg';
            this.visibleChange = new i0.EventEmitter();
            this.init = new i0.EventEmitter();
            this.appear = new i0.EventEmitter();
            this.disappear = new i0.EventEmitter();
            this._visible = false;
            this._busy = false;
            this.isModalOpen = false;
            this.isConfirmationOpen = false;
            this.destroy$ = new rxjs.Subject();
            this.toggle$ = new rxjs.Subject();
            this.initToggleStream();
        }
        Object.defineProperty(ModalComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (typeof value !== 'boolean')
                    return;
                this.toggle$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "busy", {
            get: function () {
                return this._busy;
            },
            set: function (value) {
                if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                    this.abpSubmit.loading = value;
                }
                this._busy = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "isFormDirty", {
            get: function () {
                return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
            },
            enumerable: false,
            configurable: true
        });
        ModalComponent.prototype.initToggleStream = function () {
            var _this = this;
            this.subscription.addOne(this.toggle$.pipe(operators.debounceTime(0), operators.distinctUntilChanged()), function (value) { return _this.toggle(value); });
        };
        ModalComponent.prototype.toggle = function (value) {
            var _this = this;
            this.isModalOpen = value;
            this._visible = value;
            this.visibleChange.emit(value);
            if (value) {
                this.modalService.renderTemplate(this.template);
                setTimeout(function () { return _this.listen(); }, 0);
                this.renderer.addClass(document.body, 'modal-open');
                this.appear.emit();
            }
            else {
                this.modalService.clearModal();
                this.renderer.removeClass(document.body, 'modal-open');
                this.disappear.emit();
                this.destroy$.next();
            }
        };
        ModalComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
        };
        ModalComponent.prototype.close = function () {
            var _this = this;
            if (this.busy)
                return;
            if (this.isFormDirty) {
                if (this.isConfirmationOpen)
                    return;
                this.isConfirmationOpen = true;
                this.confirmationService
                    .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                    .subscribe(function (status) {
                    _this.isConfirmationOpen = false;
                    if (status === exports.Confirmation.Status.confirm) {
                        _this.visible = false;
                    }
                });
            }
            else {
                this.visible = false;
            }
        };
        ModalComponent.prototype.listen = function () {
            var _this = this;
            rxjs.fromEvent(document, 'keyup')
                .pipe(operators.takeUntil(this.destroy$), operators.debounceTime(150), operators.filter(function (key) { return key && key.key === 'Escape'; }))
                .subscribe(function () { return _this.close(); });
            rxjs.fromEvent(window, 'beforeunload')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (event) {
                if (_this.isFormDirty) {
                    event.returnValue = true;
                }
                else {
                    event.returnValue = false;
                    delete event.returnValue;
                }
            });
            setTimeout(function () {
                if (!_this.abpClose)
                    return;
                rxjs.fromEvent(_this.abpClose.nativeElement, 'click')
                    .pipe(operators.takeUntil(_this.destroy$), operators.filter(function () { return !!_this.modalContent; }))
                    .subscribe(function () { return _this.close(); });
            }, 0);
            this.init.emit();
        };
        return ModalComponent;
    }());
    ModalComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-modal',
                    template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
                    animations: [fadeAnimation],
                    providers: [ModalService, i1.SubscriptionService],
                    styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
                },] }
    ];
    ModalComponent.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: ConfirmationService },
        { type: ModalService },
        { type: i1.SubscriptionService }
    ]; };
    ModalComponent.propDecorators = {
        visible: [{ type: i0.Input }],
        busy: [{ type: i0.Input }],
        centered: [{ type: i0.Input }],
        modalClass: [{ type: i0.Input }],
        size: [{ type: i0.Input }],
        abpSubmit: [{ type: i0.ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
        abpHeader: [{ type: i0.ContentChild, args: ['abpHeader', { static: false },] }],
        abpBody: [{ type: i0.ContentChild, args: ['abpBody', { static: false },] }],
        abpFooter: [{ type: i0.ContentChild, args: ['abpFooter', { static: false },] }],
        abpClose: [{ type: i0.ContentChild, args: ['abpClose', { static: false, read: i0.ElementRef },] }],
        template: [{ type: i0.ViewChild, args: ['template', { static: false },] }],
        modalContent: [{ type: i0.ViewChild, args: ['abpModalContent', { static: false },] }],
        abpButtons: [{ type: i0.ViewChildren, args: ['abp-button',] }],
        visibleChange: [{ type: i0.Output }],
        init: [{ type: i0.Output }],
        appear: [{ type: i0.Output }],
        disappear: [{ type: i0.Output }]
    };

    var SortOrderIconComponent = /** @class */ (function () {
        function SortOrderIconComponent() {
            this.orderChange = new i0.EventEmitter();
            this.selectedSortKeyChange = new i0.EventEmitter();
        }
        Object.defineProperty(SortOrderIconComponent.prototype, "selectedSortKey", {
            get: function () {
                return this._selectedSortKey;
            },
            set: function (value) {
                this._selectedSortKey = value;
                this.selectedSortKeyChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SortOrderIconComponent.prototype, "order", {
            get: function () {
                return this._order;
            },
            set: function (value) {
                this._order = value;
                this.orderChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SortOrderIconComponent.prototype, "icon", {
            get: function () {
                if (this.selectedSortKey === this.sortKey)
                    return "sorting_" + this.order;
                else
                    return 'sorting';
            },
            enumerable: false,
            configurable: true
        });
        SortOrderIconComponent.prototype.sort = function (key) {
            this.selectedSortKey = key;
            switch (this.order) {
                case '':
                    this.order = 'asc';
                    this.orderChange.emit('asc');
                    break;
                case 'asc':
                    this.order = 'desc';
                    this.orderChange.emit('desc');
                    break;
                case 'desc':
                    this.order = '';
                    this.orderChange.emit('');
                    break;
            }
        };
        return SortOrderIconComponent;
    }());
    SortOrderIconComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-sort-order-icon',
                    template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
                },] }
    ];
    SortOrderIconComponent.propDecorators = {
        sortKey: [{ type: i0.Input }],
        selectedSortKey: [{ type: i0.Input }],
        order: [{ type: i0.Input }],
        orderChange: [{ type: i0.Output }],
        selectedSortKeyChange: [{ type: i0.Output }],
        iconClass: [{ type: i0.Input }]
    };

    var TableEmptyMessageComponent = /** @class */ (function () {
        function TableEmptyMessageComponent() {
            this.colspan = 2;
            this.localizationResource = 'AbpAccount';
            this.localizationProp = 'NoDataAvailableInDatatable';
        }
        Object.defineProperty(TableEmptyMessageComponent.prototype, "emptyMessage", {
            get: function () {
                return this.message || this.localizationResource + "::" + this.localizationProp;
            },
            enumerable: false,
            configurable: true
        });
        return TableEmptyMessageComponent;
    }());
    TableEmptyMessageComponent.decorators = [
        { type: i0.Component, args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[abp-table-empty-message]',
                    template: "\n    <td class=\"text-center\" [attr.colspan]=\"colspan\">\n      {{ emptyMessage | abpLocalization }}\n    </td>\n  "
                },] }
    ];
    TableEmptyMessageComponent.propDecorators = {
        colspan: [{ type: i0.Input }],
        message: [{ type: i0.Input }],
        localizationResource: [{ type: i0.Input }],
        localizationProp: [{ type: i0.Input }]
    };

    /**
     *
     * @deprecated use ngx-datatale instead.
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
            var _this = this;
            this.bodyScrollLeft = 0;
            this.page = 1;
            this.trackingProp = 'id';
            this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
            this.pageChange = new i0.EventEmitter();
            this.trackByFn = function (_, value) {
                return typeof value === 'object' ? value[_this.trackingProp] || value : value;
            };
        }
        Object.defineProperty(TableComponent.prototype, "totalRecords", {
            get: function () {
                return this._totalRecords || this.value.length;
            },
            set: function (newValue) {
                if (newValue < 0)
                    this._totalRecords = 0;
                this._totalRecords = newValue;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "totalPages", {
            get: function () {
                if (!this.rows) {
                    return;
                }
                return Math.ceil(this.totalRecords / this.rows);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "slicedValue", {
            get: function () {
                if (!this.rows || this.rows >= this.value.length) {
                    return this.value;
                }
                var start = (this.page - 1) * this.rows;
                return this.value.slice(start, start + this.rows);
            },
            enumerable: false,
            configurable: true
        });
        TableComponent.prototype.ngOnInit = function () {
            this.marginCalculator = document.body.dir === 'rtl' ? rtlCalculator : ltrCalculator;
        };
        return TableComponent;
    }());
    TableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-table',
                    template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div #header class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"header.style.margin = marginCalculator(scrollableBody)\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(2n):hover{filter:brightness(90%)}.ui-table .ui-table-empty{border:1px solid #e0e0e0;border-top:0 solid #e0e0e0;padding:20px 0;text-align:center}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;padding:.571em 1em}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700}.ui-table .ui-table-thead>tr>th{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-table-tbody>tr>td{padding:.571em .857em}.ui-table .ui-table-tfoot>tr>td{background-color:#fff;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-sortable-column{transition:box-shadow .2s}.ui-table .ui-sortable-column:focus{box-shadow:inset 0 0 0 .2em #8dcdff;outline:0 none;outline-offset:0}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px}.ui-table .ui-editable-column input:focus{outline:1px solid #007ad9;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(2n){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{background-color:#eaeaea;color:#333;cursor:pointer}.ui-table .ui-column-resizer-helper{background-color:#007ad9}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}}.ui-table table{border-collapse:collapse;table-layout:fixed;width:100%}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table .ui-sortable-column{cursor:pointer}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700;padding:.25em .5em;text-align:center}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{border:0;overflow:hidden}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{border:1px solid transparent;cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5em}.ui-table .ui-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{display:none;position:absolute}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{border:0;box-sizing:border-box;clear:left;display:block;float:left;text-align:left;width:100%!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4em;min-width:30%;padding:.4em}}.ui-table .ui-widget{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{border-top:0;display:flex;justify-content:center;padding:0}.ui-table .op-0{opacity:0}"]
                },] }
    ];
    TableComponent.propDecorators = {
        value: [{ type: i0.Input }],
        headerTemplate: [{ type: i0.Input }],
        bodyTemplate: [{ type: i0.Input }],
        colgroupTemplate: [{ type: i0.Input }],
        scrollHeight: [{ type: i0.Input }],
        scrollable: [{ type: i0.Input }],
        rows: [{ type: i0.Input }],
        page: [{ type: i0.Input }],
        trackingProp: [{ type: i0.Input }],
        emptyMessage: [{ type: i0.Input }],
        pageChange: [{ type: i0.Output }],
        wrapperRef: [{ type: i0.ViewChild, args: ['wrapper', { read: i0.ElementRef },] }],
        totalRecords: [{ type: i0.Input }]
    };
    function ltrCalculator(div) {
        return "0 auto 0 -" + div.scrollLeft + "px";
    }
    function rtlCalculator(div) {
        return "0 " + -(div.scrollWidth - div.clientWidth - div.scrollLeft) + "px 0 auto";
    }

    var ToastContainerComponent = /** @class */ (function () {
        function ToastContainerComponent() {
            this.toasts = [];
            this.right = '30px';
            this.bottom = '30px';
        }
        ToastContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.toasts$.subscribe(function (toasts) {
                _this.toasts = _this.toastKey
                    ? toasts.filter(function (t) {
                        return t.options && t.options.containerKey !== _this.toastKey;
                    })
                    : toasts;
            });
        };
        ToastContainerComponent.prototype.trackByFunc = function (index, toast) {
            if (!toast)
                return null;
            return toast.options.id;
        };
        return ToastContainerComponent;
    }());
    ToastContainerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-toast-container',
                    template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                    animations: [toastInOut],
                    styles: [".toast-container{align-items:center;display:flex;flex-direction:column;justify-content:flex-end;min-height:80px;min-width:350px;position:fixed;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
                },] }
    ];
    ToastContainerComponent.propDecorators = {
        top: [{ type: i0.Input }],
        right: [{ type: i0.Input }],
        bottom: [{ type: i0.Input }],
        left: [{ type: i0.Input }],
        toastKey: [{ type: i0.Input }]
    };

    var ToasterService = /** @class */ (function () {
        function ToasterService(contentProjectionService) {
            this.contentProjectionService = contentProjectionService;
            this.toasts$ = new rxjs.ReplaySubject(1);
            this.lastId = -1;
            this.toasts = [];
        }
        ToasterService.prototype.setContainer = function () {
            this.containerComponentRef = this.contentProjectionService.projectContent(i1.PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, { toasts$: this.toasts$ }));
            this.containerComponentRef.changeDetectorRef.detectChanges();
        };
        /**
         * Creates an info toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        ToasterService.prototype.info = function (message, title, options) {
            return this.show(message, title, 'info', options);
        };
        /**
         * Creates a success toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        ToasterService.prototype.success = function (message, title, options) {
            return this.show(message, title, 'success', options);
        };
        /**
         * Creates a warning toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        ToasterService.prototype.warn = function (message, title, options) {
            return this.show(message, title, 'warning', options);
        };
        /**
         * Creates an error toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        ToasterService.prototype.error = function (message, title, options) {
            return this.show(message, title, 'error', options);
        };
        /**
         * Creates a toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param severity Sets color of the toast. "success", "warning" etc.
         * @param options Spesific style or structural options for individual toast
         */
        ToasterService.prototype.show = function (message, title, severity, options) {
            if (title === void 0) { title = null; }
            if (severity === void 0) { severity = 'neutral'; }
            if (options === void 0) { options = {}; }
            if (!this.containerComponentRef)
                this.setContainer();
            var id = ++this.lastId;
            this.toasts.push({
                message: message,
                title: title,
                severity: severity,
                options: Object.assign({ closable: true, id: id }, options),
            });
            this.toasts$.next(this.toasts);
            return id;
        };
        /**
         * Removes the toast with given id.
         * @param id ID of the toast to be removed.
         */
        ToasterService.prototype.remove = function (id) {
            this.toasts = this.toasts.filter(function (toast) { return snq__default['default'](function () { return toast.options.id; }) !== id; });
            this.toasts$.next(this.toasts);
        };
        /**
         * Removes all open toasts at once.
         */
        ToasterService.prototype.clear = function (key) {
            this.toasts = !key
                ? []
                : this.toasts.filter(function (toast) { return snq__default['default'](function () { return toast.options.containerKey; }) !== key; });
            this.toasts$.next(this.toasts);
        };
        return ToasterService;
    }());
    ToasterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
    ToasterService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ToasterService.ctorParameters = function () { return [
        { type: i1.ContentProjectionService }
    ]; };

    var ToastComponent = /** @class */ (function () {
        function ToastComponent(toastService, localizationService) {
            this.toastService = toastService;
            this.localizationService = localizationService;
        }
        Object.defineProperty(ToastComponent.prototype, "severityClass", {
            get: function () {
                if (!this.toast || !this.toast.severity)
                    return '';
                return "toast-" + this.toast.severity;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ToastComponent.prototype, "iconClass", {
            get: function () {
                switch (this.toast.severity) {
                    case 'success':
                        return 'fa-check-circle';
                    case 'info':
                        return 'fa-info-circle';
                    case 'warning':
                        return 'fa-exclamation-triangle';
                    case 'error':
                        return 'fa-times-circle';
                    default:
                        return 'fa-exclamation-circle';
                }
            },
            enumerable: false,
            configurable: true
        });
        ToastComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (snq__default['default'](function () { return _this.toast.options.sticky; }))
                return;
            var timeout = snq__default['default'](function () { return _this.toast.options.life; }) || 5000;
            setTimeout(function () {
                _this.close();
            }, timeout);
        };
        ToastComponent.prototype.close = function () {
            this.toastService.remove(this.toast.options.id);
        };
        ToastComponent.prototype.tap = function () {
            if (this.toast.options && this.toast.options.tapToDismiss)
                this.close();
        };
        return ToastComponent;
    }());
    ToastComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-toast',
                    template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                    styles: [".toast{-moz-user-select:none;-ms-grid-columns:50px 1fr;-ms-user-select:none;-webkit-user-select:none;background-color:#f0f0f0;border:2px solid #f0f0f0;border-radius:0;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#000;display:-ms-grid;display:grid;gap:10px;grid-template-columns:50px 1fr;margin:5px 0;opacity:1;padding:10px;user-select:none;width:350px;z-index:9999}.toast:hover{background-color:#e3e3e3;border:2px solid #e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{background-color:#51a351;border:2px solid #51a351;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-success:hover{background-color:#499249;border:2px solid #499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{background-color:#2f96b4;border:2px solid #2f96b4;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-info:hover{background-color:#2a85a0;border:2px solid #2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{background-color:#f89406;border:2px solid #f89406;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-warning:hover{background-color:#df8505;border:2px solid #df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{background-color:#bd362f;border:2px solid #bd362f;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-error:hover{background-color:#a9302a;border:2px solid #a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{align-items:center;display:flex;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{align-items:center;background:transparent;border:none;border-radius:50%;color:inherit;display:flex;height:25px;justify-content:center;margin:0;padding:0 5px 0 0;position:absolute;right:0;top:0;width:25px}.toast .toast-content .toast-close-button:focus{outline:none}.toast .toast-content .toast-title{font-size:1rem;font-weight:600;margin:0;padding:0}.toast .toast-content .toast-message{margin:0;max-width:240px;padding:0}"]
                },] }
    ];
    ToastComponent.ctorParameters = function () { return [
        { type: ToasterService },
        { type: i1.LocalizationService }
    ]; };
    ToastComponent.propDecorators = {
        toast: [{ type: i0.Input }]
    };

    var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n[dir=rtl] .data-tables-filter {\n  text-align: left;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 215px;\n}\n\n.datatable-scroll {\n  margin-bottom: 5px !important;\n  width: unset !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar {\n  height: 5px !important;\n  width: 5px !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.abp-ellipsis-inline {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-ellipsis {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ui-widget-overlay {\n  z-index: 1000;\n}\n\n.color-white {\n  color: #FFF !important;\n}\n\n.custom-checkbox > label {\n  cursor: pointer;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n.abp-collapsed-height {\n  -moz-transition: max-height linear 0.35s;\n  -ms-transition: max-height linear 0.35s;\n  -o-transition: max-height linear 0.35s;\n  -webkit-transition: max-height linear 0.35s;\n  overflow:hidden;\n  transition:max-height 0.35s linear;\n  height:auto;\n  max-height: 0;\n}\n\n.abp-mh-25 {\n  max-height: 25vh;\n}\n\n.abp-mh-50 {\n  transition:max-height 0.65s linear;\n  max-height: 50vh;\n}\n\n.abp-mh-75 {\n  transition:max-height 0.85s linear;\n  max-height: 75vh;\n}\n\n.abp-mh-100 {\n  transition:max-height 1s linear;\n  max-height: 100vh;\n}\n\n[class^=\"sorting\"] {\n  opacity: .3;\n  cursor: pointer;\n}\n[class^=\"sorting\"]:before {\n  right: 0.5rem;\n  content: \"\u2191\";\n}\n[class^=\"sorting\"]:after {\n  right: 0.5rem;\n  content: \"\u2193\";\n}\n\n.sorting_desc {\n  opacity: 1;\n}\n.sorting_desc:before {\n  opacity: .3;\n}\n\n.sorting_asc {\n  opacity: 1;\n}\n.sorting_asc:after {\n  opacity: .3;\n}\n.ngx-datatable.material {\n  box-shadow: none;\n}\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";
    var BOOTSTRAP = 'bootstrap-{{dir}}.min.css';

    var LoadingDirective = /** @class */ (function () {
        function LoadingDirective(elRef, vcRef, cdRes, injector, renderer) {
            this.elRef = elRef;
            this.vcRef = vcRef;
            this.cdRes = cdRes;
            this.injector = injector;
            this.renderer = renderer;
            this.position = 'relative';
            this.delay = 0;
        }
        Object.defineProperty(LoadingDirective.prototype, "loading", {
            get: function () {
                return this._loading;
            },
            set: function (newValue) {
                var _this = this;
                setTimeout(function () {
                    if (!newValue && _this.timerSubscription) {
                        _this.timerSubscription.unsubscribe();
                        _this.timerSubscription = null;
                        _this._loading = newValue;
                        if (_this.rootNode) {
                            _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                            _this.rootNode = null;
                        }
                        return;
                    }
                    _this.timerSubscription = rxjs.timer(_this.delay)
                        .pipe(operators.take(1))
                        .subscribe(function () {
                        if (!_this.componentRef) {
                            _this.componentRef = _this.cdRes
                                .resolveComponentFactory(LoadingComponent)
                                .create(_this.injector);
                        }
                        if (newValue && !_this.rootNode) {
                            _this.rootNode = _this.componentRef.hostView.rootNodes[0];
                            _this.targetElement.appendChild(_this.rootNode);
                        }
                        else if (_this.rootNode) {
                            _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                            _this.rootNode = null;
                        }
                        _this._loading = newValue;
                        _this.timerSubscription = null;
                    });
                }, 0);
            },
            enumerable: false,
            configurable: true
        });
        LoadingDirective.prototype.ngOnInit = function () {
            if (!this.targetElement) {
                var _a = this.elRef.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
                if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                    this.targetElement = this.elRef.nativeElement.children[0];
                }
                else {
                    this.targetElement = this.elRef.nativeElement;
                }
            }
        };
        LoadingDirective.prototype.ngOnDestroy = function () {
            if (this.timerSubscription) {
                this.timerSubscription.unsubscribe();
            }
        };
        return LoadingDirective;
    }());
    LoadingDirective.decorators = [
        { type: i0.Directive, args: [{ selector: '[abpLoading]' },] }
    ];
    LoadingDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.ViewContainerRef },
        { type: i0.ComponentFactoryResolver },
        { type: i0.Injector },
        { type: i0.Renderer2 }
    ]; };
    LoadingDirective.propDecorators = {
        position: [{ type: i0.HostBinding, args: ['style.position',] }],
        loading: [{ type: i0.Input, args: ['abpLoading',] }],
        targetElement: [{ type: i0.Input, args: ['abpLoadingTargetElement',] }],
        delay: [{ type: i0.Input, args: ['abpLoadingDelay',] }]
    };

    var NgxDatatableDefaultDirective = /** @class */ (function () {
        function NgxDatatableDefaultDirective(table, document) {
            this.table = table;
            this.document = document;
            this.subscription = new rxjs.Subscription();
            this.resizeDiff = 0;
            this.class = 'material bordered';
            this.table.columnMode = ngxDatatable.ColumnMode.force;
            this.table.footerHeight = 50;
            this.table.headerHeight = 50;
            this.table.rowHeight = 'auto';
            this.table.scrollbarH = true;
            this.table.virtualization = false;
        }
        Object.defineProperty(NgxDatatableDefaultDirective.prototype, "classes", {
            get: function () {
                return "ngx-datatable " + this.class;
            },
            enumerable: false,
            configurable: true
        });
        NgxDatatableDefaultDirective.prototype.fixHorizontalGap = function (scroller) {
            var _a = this.document, body = _a.body, documentElement = _a.documentElement;
            if (documentElement.scrollHeight !== documentElement.clientHeight) {
                if (this.resizeDiff === 0) {
                    this.resizeDiff = window.innerWidth - body.offsetWidth;
                    scroller.scrollWidth -= this.resizeDiff;
                }
            }
            else {
                scroller.scrollWidth += this.resizeDiff;
                this.resizeDiff = 0;
            }
        };
        NgxDatatableDefaultDirective.prototype.fixStyleOnWindowResize = function () {
            var _this = this;
            // avoided @HostListener('window:resize') in favor of performance
            var subscription = rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(500))
                .subscribe(function () {
                var scroller = _this.table.bodyComponent.scroller;
                if (!scroller)
                    return;
                _this.fixHorizontalGap(scroller);
            });
            this.subscription.add(subscription);
        };
        NgxDatatableDefaultDirective.prototype.ngAfterViewInit = function () {
            this.fixStyleOnWindowResize();
        };
        NgxDatatableDefaultDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        return NgxDatatableDefaultDirective;
    }());
    NgxDatatableDefaultDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line
                    selector: 'ngx-datatable[default]',
                    exportAs: 'ngxDatatableDefault',
                },] }
    ];
    NgxDatatableDefaultDirective.ctorParameters = function () { return [
        { type: ngxDatatable.DatatableComponent },
        { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    NgxDatatableDefaultDirective.propDecorators = {
        class: [{ type: i0.Input }],
        classes: [{ type: i0.HostBinding, args: ['class',] }]
    };

    var NgxDatatableListDirective = /** @class */ (function () {
        function NgxDatatableListDirective(table, cdRef, localizationService) {
            this.table = table;
            this.cdRef = cdRef;
            this.localizationService = localizationService;
            this.subscription = new rxjs.Subscription();
            this.querySubscription = new rxjs.Subscription();
            this.setInitialValues();
        }
        NgxDatatableListDirective.prototype.setInitialValues = function () {
            this.table.externalPaging = true;
            this.table.externalSorting = true;
            this.table.messages = {
                emptyMessage: this.localizationService.localizeSync('AbpUi', 'NoDataAvailableInDatatable', 'No data available'),
                totalMessage: this.localizationService.localizeSync('AbpUi', 'Total', 'total'),
                selectedMessage: this.localizationService.localizeSync('AbpUi', 'Selected', 'selected'),
            };
        };
        NgxDatatableListDirective.prototype.subscribeToPage = function () {
            var _this = this;
            var sub = this.table.page.subscribe(function (_a) {
                var offset = _a.offset;
                _this.list.page = offset;
                _this.table.offset = offset;
            });
            this.subscription.add(sub);
        };
        NgxDatatableListDirective.prototype.subscribeToSort = function () {
            var _this = this;
            var sub = this.table.sort.subscribe(function (_a) {
                var _b = __read(_a.sorts, 1), _c = _b[0], prop = _c.prop, dir = _c.dir;
                if (prop === _this.list.sortKey && _this.list.sortOrder === 'desc') {
                    _this.list.sortKey = '';
                    _this.list.sortOrder = '';
                    _this.table.sorts = [];
                    _this.cdRef.detectChanges();
                }
                else {
                    _this.list.sortKey = prop;
                    _this.list.sortOrder = dir;
                }
            });
            this.subscription.add(sub);
        };
        NgxDatatableListDirective.prototype.subscribeToQuery = function () {
            var _this = this;
            this.querySubscription.add(this.list.query$.subscribe(function () {
                if (_this.list.page !== _this.table.offset)
                    _this.table.offset = _this.list.page;
            }));
        };
        NgxDatatableListDirective.prototype.ngOnChanges = function (_a) {
            var list = _a.list;
            if (!list.firstChange)
                return;
            var _b = list.currentValue, maxResultCount = _b.maxResultCount, page = _b.page;
            this.table.limit = maxResultCount;
            this.table.offset = page;
            this.querySubscription.unsubscribe();
            this.subscribeToQuery();
        };
        NgxDatatableListDirective.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
            this.querySubscription.unsubscribe();
        };
        NgxDatatableListDirective.prototype.ngOnInit = function () {
            this.subscribeToPage();
            this.subscribeToSort();
        };
        return NgxDatatableListDirective;
    }());
    NgxDatatableListDirective.decorators = [
        { type: i0.Directive, args: [{
                    // tslint:disable-next-line
                    selector: 'ngx-datatable[list]',
                    exportAs: 'ngxDatatableList',
                },] }
    ];
    NgxDatatableListDirective.ctorParameters = function () { return [
        { type: ngxDatatable.DatatableComponent },
        { type: i0.ChangeDetectorRef },
        { type: i1.LocalizationService }
    ]; };
    NgxDatatableListDirective.propDecorators = {
        list: [{ type: i0.Input }]
    };

    /**
     *
     * @deprecated To be deleted in v3.3
     */
    var TableSortDirective = /** @class */ (function () {
        function TableSortDirective(abpTable, sortPipe, cdRef) {
            this.abpTable = abpTable;
            this.sortPipe = sortPipe;
            this.cdRef = cdRef;
            this.value = [];
        }
        Object.defineProperty(TableSortDirective.prototype, "table", {
            get: function () {
                var _this = this;
                return (this.abpTable || snq__default['default'](function () { return _this.cdRef['_view'].component; }) || snq__default['default'](function () { return _this.cdRef['context']; }) // 'context' for ivy
                );
            },
            enumerable: false,
            configurable: true
        });
        TableSortDirective.prototype.ngOnChanges = function (_a) {
            var value = _a.value, abpTableSort = _a.abpTableSort;
            if (this.table && (value || abpTableSort)) {
                this.abpTableSort = this.abpTableSort || {};
                this.table.value = this.sortPipe.transform(clone__default['default'](this.value), this.abpTableSort.order, this.abpTableSort.key);
            }
        };
        return TableSortDirective;
    }());
    TableSortDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[abpTableSort]',
                    providers: [i1.SortPipe],
                },] }
    ];
    TableSortDirective.ctorParameters = function () { return [
        { type: TableComponent, decorators: [{ type: i0.Host }, { type: i0.Optional }, { type: i0.Self }] },
        { type: i1.SortPipe },
        { type: i0.ChangeDetectorRef }
    ]; };
    TableSortDirective.propDecorators = {
        abpTableSort: [{ type: i0.Input }],
        value: [{ type: i0.Input }]
    };

    var HttpErrorWrapperComponent = /** @class */ (function () {
        function HttpErrorWrapperComponent(subscription) {
            this.subscription = subscription;
            this.status = 0;
            this.title = 'Oops!';
            this.details = 'Sorry, an error has occured.';
            this.customComponent = null;
            this.hideCloseIcon = false;
            this.isHomeShow = true;
        }
        Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
            get: function () {
                return this.status ? "[" + this.status + "]" : '';
            },
            enumerable: false,
            configurable: true
        });
        HttpErrorWrapperComponent.prototype.ngOnInit = function () {
            this.backgroundColor =
                snq__default['default'](function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); }) ||
                    '#fff';
        };
        HttpErrorWrapperComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.customComponent) {
                var customComponentRef = this.cfRes
                    .resolveComponentFactory(this.customComponent)
                    .create(this.injector);
                customComponentRef.instance.errorStatus = this.status;
                customComponentRef.instance.destroy$ = this.destroy$;
                this.appRef.attachView(customComponentRef.hostView);
                this.containerRef.nativeElement.appendChild(customComponentRef.hostView.rootNodes[0]);
                customComponentRef.changeDetectorRef.detectChanges();
            }
            var keyup$ = rxjs.fromEvent(document, 'keyup').pipe(operators.debounceTime(150), operators.filter(function (key) { return key && key.key === 'Escape'; }));
            this.subscription.addOne(keyup$, function () { return _this.destroy(); });
        };
        HttpErrorWrapperComponent.prototype.ngOnDestroy = function () { };
        HttpErrorWrapperComponent.prototype.destroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return HttpErrorWrapperComponent;
    }());
    HttpErrorWrapperComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-http-error-wrapper',
                    template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    providers: [i1.SubscriptionService],
                    styles: [".error{height:100vh;position:fixed;top:0;width:100vw;z-index:999999}.centered{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}"]
                },] }
    ];
    HttpErrorWrapperComponent.ctorParameters = function () { return [
        { type: i1.SubscriptionService }
    ]; };
    HttpErrorWrapperComponent.propDecorators = {
        containerRef: [{ type: i0.ViewChild, args: ['container', { static: false },] }]
    };

    var DEFAULT_ERROR_MESSAGES = {
        defaultError: {
            title: 'An error has occurred!',
            details: 'Error detail not sent by server.',
        },
        defaultError401: {
            title: 'You are not authenticated!',
            details: 'You should be authenticated (sign in) in order to perform this operation.',
        },
        defaultError403: {
            title: 'You are not authorized!',
            details: 'You are not allowed to perform this operation.',
        },
        defaultError404: {
            title: 'Resource not found!',
            details: 'The resource requested could not found on the server.',
        },
        defaultError500: {
            title: 'Internal server error',
            details: 'Error detail not sent by server.',
        },
    };
    var DEFAULT_ERROR_LOCALIZATIONS = {
        defaultError: {
            title: 'AbpUi::DefaultErrorMessage',
            details: 'AbpUi::DefaultErrorMessageDetail',
        },
        defaultError401: {
            title: 'AbpUi::DefaultErrorMessage401',
            details: 'AbpUi::DefaultErrorMessage401Detail',
        },
        defaultError403: {
            title: 'AbpUi::DefaultErrorMessage403',
            details: 'AbpUi::DefaultErrorMessage403Detail',
        },
        defaultError404: {
            title: 'AbpUi::DefaultErrorMessage404',
            details: 'AbpUi::DefaultErrorMessage404Detail',
        },
        defaultError500: {
            title: 'AbpUi::500Message',
            details: 'AbpUi::DefaultErrorMessage',
        },
    };
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
            var _this = this;
            this.actions = actions;
            this.store = store;
            this.confirmationService = confirmationService;
            this.appRef = appRef;
            this.cfRes = cfRes;
            this.rendererFactory = rendererFactory;
            this.injector = injector;
            this.httpErrorConfig = httpErrorConfig;
            this.filterRestErrors = function (_a) {
                var status = _a.status;
                if (typeof status !== 'number')
                    return false;
                return _this.httpErrorConfig.skipHandledErrorCodes.findIndex(function (code) { return code === status; }) < 0;
            };
            this.filterRouteErrors = function (instance) {
                return (snq__default['default'](function () { return instance.event.error.indexOf('Cannot match') > -1; }) &&
                    _this.httpErrorConfig.skipHandledErrorCodes.findIndex(function (code) { return code === 404; }) < 0);
            };
            this.listenToRestError();
            this.listenToRouterError();
            this.listenToRouterDataResolved();
        }
        ErrorHandler.prototype.listenToRouterError = function () {
            var _this = this;
            this.actions
                .pipe(i1$1.ofActionSuccessful(routerPlugin.RouterError), operators.filter(this.filterRouteErrors))
                .subscribe(function () { return _this.show404Page(); });
        };
        ErrorHandler.prototype.listenToRouterDataResolved = function () {
            var _this = this;
            this.actions
                .pipe(i1$1.ofActionSuccessful(routerPlugin.RouterDataResolved), operators.filter(function () { return !!_this.componentRef; }))
                .subscribe(function () {
                _this.componentRef.destroy();
                _this.componentRef = null;
            });
        };
        ErrorHandler.prototype.listenToRestError = function () {
            var _this = this;
            this.actions
                .pipe(i1$1.ofActionSuccessful(i1.RestOccurError), operators.map(function (action) { return action.payload; }), operators.filter(this.filterRestErrors))
                .subscribe(function (err) {
                var body = snq__default['default'](function () { return err.error.error; }, {
                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                });
                if (err instanceof http.HttpErrorResponse && err.headers.get('_AbpErrorFormat')) {
                    var confirmation$ = _this.showError(null, null, body);
                    if (err.status === 401) {
                        confirmation$.subscribe(function () {
                            _this.navigateToLogin();
                        });
                    }
                }
                else {
                    switch (err.status) {
                        case 401:
                            _this.canCreateCustomError(401)
                                ? _this.show401Page()
                                : _this.showError({
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError401.title,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                }, {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError401.details,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                }).subscribe(function () { return _this.navigateToLogin(); });
                            break;
                        case 403:
                            _this.createErrorComponent({
                                title: {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError403.title,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                                },
                                details: {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError403.details,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                                },
                                status: 403,
                            });
                            break;
                        case 404:
                            _this.canCreateCustomError(404)
                                ? _this.show404Page()
                                : _this.showError({
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError404.details,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                }, {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError404.title,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                });
                            break;
                        case 500:
                            _this.createErrorComponent({
                                title: {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError500.title,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                                },
                                details: {
                                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError500.details,
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                                },
                                status: 500,
                            });
                            break;
                        case 0:
                            if (err.statusText === 'Unknown Error') {
                                _this.createErrorComponent({
                                    title: {
                                        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                    },
                                    details: err.message,
                                    isHomeShow: false,
                                });
                            }
                            break;
                        default:
                            _this.showError({
                                key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.details,
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.details,
                            }, {
                                key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                            });
                            break;
                    }
                }
            });
        };
        ErrorHandler.prototype.show401Page = function () {
            this.createErrorComponent({
                title: {
                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError401.title,
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                },
                status: 401,
            });
        };
        ErrorHandler.prototype.show404Page = function () {
            this.createErrorComponent({
                title: {
                    key: DEFAULT_ERROR_LOCALIZATIONS.defaultError404.title,
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                },
                status: 404,
            });
        };
        ErrorHandler.prototype.showError = function (message, title, body) {
            if (body) {
                if (body.details) {
                    message = body.details;
                    title = body.message;
                }
                else if (body.message) {
                    title = {
                        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                    };
                    message = body.message;
                }
                else {
                    message = body.message || {
                        key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                    };
                }
            }
            return this.confirmationService.error(message, title, {
                hideCancelBtn: true,
                yesText: 'AbpAccount::Close',
            });
        };
        ErrorHandler.prototype.navigateToLogin = function () {
            this.store.dispatch(new routerPlugin.Navigate(['/account/login'], null, {
                state: { redirectUrl: this.store.selectSnapshot(routerPlugin.RouterState.url) },
            }));
        };
        ErrorHandler.prototype.createErrorComponent = function (instance) {
            var _this = this;
            var renderer = this.rendererFactory.createRenderer(null, null);
            var host = renderer.selectRootElement(document.body, true);
            this.componentRef = this.cfRes
                .resolveComponentFactory(HttpErrorWrapperComponent)
                .create(this.injector);
            for (var key in instance) {
                /* istanbul ignore else */
                if (this.componentRef.instance.hasOwnProperty(key)) {
                    this.componentRef.instance[key] = instance[key];
                }
            }
            this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
            if (this.canCreateCustomError(instance.status)) {
                this.componentRef.instance.cfRes = this.cfRes;
                this.componentRef.instance.appRef = this.appRef;
                this.componentRef.instance.injector = this.injector;
                this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
            }
            this.appRef.attachView(this.componentRef.hostView);
            renderer.appendChild(host, this.componentRef.hostView.rootNodes[0]);
            var destroy$ = new rxjs.Subject();
            this.componentRef.instance.destroy$ = destroy$;
            destroy$.subscribe(function () {
                _this.componentRef.destroy();
                _this.componentRef = null;
            });
        };
        ErrorHandler.prototype.canCreateCustomError = function (status) {
            var _this = this;
            return snq__default['default'](function () { return _this.httpErrorConfig.errorScreen.component &&
                _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1; });
        };
        return ErrorHandler;
    }());
    ErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1$1.Actions), i0.ɵɵinject(i1$1.Store), i0.ɵɵinject(ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
    ErrorHandler.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ErrorHandler.ctorParameters = function () { return [
        { type: i1$1.Actions },
        { type: i1$1.Store },
        { type: ConfirmationService },
        { type: i0.ApplicationRef },
        { type: i0.ComponentFactoryResolver },
        { type: i0.RendererFactory2 },
        { type: i0.Injector },
        { type: undefined, decorators: [{ type: i0.Inject, args: ['HTTP_ERROR_CONFIG',] }] }
    ]; };

    var LAZY_STYLES = new i0.InjectionToken('LAZY_STYLES');

    var LazyStyleHandler = /** @class */ (function () {
        function LazyStyleHandler(injector) {
            this._dir = 'ltr';
            this.loaded = new Map();
            this.setStyles(injector);
            this.setLazyLoad(injector);
            this.listenToLanguageChanges(injector);
        }
        Object.defineProperty(LazyStyleHandler.prototype, "dir", {
            get: function () {
                return this._dir;
            },
            set: function (dir) {
                if (dir === this._dir)
                    return;
                this.switchCSS(dir);
                this.setBodyDir(dir);
                this._dir = dir;
            },
            enumerable: false,
            configurable: true
        });
        LazyStyleHandler.prototype.getHrefFromLink = function (link) {
            if (!link)
                return '';
            var a = document.createElement('a');
            a.href = link.href;
            return a.pathname.replace(/^\//, '');
        };
        LazyStyleHandler.prototype.getLoadedBootstrap = function () {
            var href = createLazyStyleHref(BOOTSTRAP, this.dir);
            var selector = "[href*=\"" + href.replace(/\.css$/, '') + "\"]";
            var link = document.querySelector(selector);
            return { href: href, link: link };
        };
        LazyStyleHandler.prototype.listenToLanguageChanges = function (injector) {
            var _this = this;
            var l10n = injector.get(i1.LocalizationService);
            // will always listen, no need to unsubscribe
            l10n.languageChange
                .pipe(operators.map(function (_a) {
                var payload = _a.payload;
                return payload;
            }), operators.startWith(l10n.currentLang))
                .subscribe(function (locale) {
                _this.dir = i1.getLocaleDirection(locale);
            });
        };
        LazyStyleHandler.prototype.setBodyDir = function (dir) {
            document.body.dir = dir;
        };
        LazyStyleHandler.prototype.setLazyLoad = function (injector) {
            this.lazyLoad = injector.get(i1.LazyLoadService);
            var _a = this.getLoadedBootstrap(), href = _a.href, link = _a.link;
            this.lazyLoad.loaded.set(href, link);
        };
        LazyStyleHandler.prototype.setStyles = function (injector) {
            this.styles = injector.get(LAZY_STYLES, [BOOTSTRAP]);
        };
        LazyStyleHandler.prototype.switchCSS = function (dir) {
            var _this = this;
            this.styles.forEach(function (style) {
                var oldHref = createLazyStyleHref(style, _this.dir);
                var newHref = createLazyStyleHref(style, dir);
                var link = _this.loaded.get(newHref);
                var href = _this.getHrefFromLink(link) || newHref;
                var strategy = i1.LOADING_STRATEGY.PrependAnonymousStyleToHead(href);
                _this.lazyLoad.load(strategy).subscribe(function () {
                    var oldLink = _this.lazyLoad.loaded.get(oldHref);
                    _this.loaded.delete(newHref);
                    _this.loaded.set(oldHref, oldLink);
                    var newLink = _this.lazyLoad.loaded.get(href);
                    _this.lazyLoad.loaded.delete(href);
                    _this.lazyLoad.loaded.set(newHref, newLink);
                    _this.lazyLoad.remove(oldHref);
                });
            });
        };
        return LazyStyleHandler;
    }());
    LazyStyleHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyStyleHandler_Factory() { return new LazyStyleHandler(i0.ɵɵinject(i0.INJECTOR)); }, token: LazyStyleHandler, providedIn: "root" });
    LazyStyleHandler.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    LazyStyleHandler.ctorParameters = function () { return [
        { type: i0.Injector }
    ]; };
    function createLazyStyleHref(style, dir) {
        return style.replace(/{{\s*dir\s*}}/g, dir);
    }
    function initLazyStyleHandler(injector) {
        return function () { return new LazyStyleHandler(injector); };
    }

    var NavItem = /** @class */ (function () {
        function NavItem(props) {
            props = Object.assign(Object.assign({}, props), { visible: props.visible || (function () { return true; }) });
            Object.assign(this, props);
        }
        return NavItem;
    }());

    var THEME_SHARED_ROUTE_PROVIDERS = [
        { provide: i0.APP_INITIALIZER, useFactory: configureRoutes, deps: [i1.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
            routes.add([
                {
                    path: undefined,
                    name: "AbpUiNavigation::Menu:Administration" /* Administration */,
                    iconClass: 'fa fa-wrench',
                    order: 100,
                },
            ]);
        };
    }

    var NavItemsService = /** @class */ (function () {
        function NavItemsService() {
            this._items$ = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(NavItemsService.prototype, "items", {
            get: function () {
                return this._items$.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavItemsService.prototype, "items$", {
            get: function () {
                return this._items$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        NavItemsService.prototype.addItems = function (newItems) {
            var items = __spread(this.items);
            newItems.forEach(function (item) { return items.push(new NavItem(item)); });
            items.sort(sortItems);
            this._items$.next(items);
        };
        NavItemsService.prototype.removeItem = function (id) {
            var index = this.items.findIndex(function (item) { return item.id === id; });
            if (index < 0)
                return;
            var items = __spread(this.items.slice(0, index), this.items.slice(index + 1));
            this._items$.next(items);
        };
        NavItemsService.prototype.patchItem = function (id, item) {
            var index = this.items.findIndex(function (i) { return i.id === id; });
            if (index < 0)
                return;
            var items = __spread(this.items);
            items[index] = new NavItem(Object.assign(Object.assign({}, items[index]), item));
            items.sort(sortItems);
            this._items$.next(items);
        };
        return NavItemsService;
    }());
    NavItemsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NavItemsService_Factory() { return new NavItemsService(); }, token: NavItemsService, providedIn: "root" });
    NavItemsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    function sortItems(a, b) {
        if (!a.order)
            return 1;
        if (!b.order)
            return -1;
        return a.order - b.order;
    }

    var THEME_SHARED_APPEND_CONTENT = new i0.InjectionToken('THEME_SHARED_APPEND_CONTENT', {
        providedIn: 'root',
        factory: function () {
            var domInsertion = i0.inject(i1.DomInsertionService);
            domInsertion.insertContent(i1.CONTENT_STRATEGY.AppendStyleToHead(styles));
            import('chart.js').then(function () { return chartJsLoaded$.next(true); });
        },
    });

    function httpErrorConfigFactory(config) {
        if (config === void 0) { config = {}; }
        if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
            config.errorScreen.forWhichErrors = [401, 403, 404, 500];
        }
        return Object.assign({ skipHandledErrorCodes: [], errorScreen: {} }, config);
    }
    var HTTP_ERROR_CONFIG = new i0.InjectionToken('HTTP_ERROR_CONFIG');

    function padNumber(value) {
        if (isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    }
    function isNumber(value) {
        return !isNaN(toInteger(value));
    }
    function toInteger(value) {
        return parseInt("" + value, 10);
    }
    var DateParserFormatter = /** @class */ (function (_super) {
        __extends(DateParserFormatter, _super);
        function DateParserFormatter(datePipe, store) {
            var _this = _super.call(this) || this;
            _this.datePipe = datePipe;
            _this.store = store;
            return _this;
        }
        DateParserFormatter.prototype.parse = function (value) {
            if (value) {
                var dateParts = value.trim().split('-');
                if (dateParts.length === 1 && isNumber(dateParts[0])) {
                    return { year: toInteger(dateParts[0]), month: null, day: null };
                }
                else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                    return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
                }
                else if (dateParts.length === 3 &&
                    isNumber(dateParts[0]) &&
                    isNumber(dateParts[1]) &&
                    isNumber(dateParts[2])) {
                    return {
                        year: toInteger(dateParts[0]),
                        month: toInteger(dateParts[1]),
                        day: toInteger(dateParts[2]),
                    };
                }
            }
            return null;
        };
        DateParserFormatter.prototype.format = function (date) {
            var shortDatePattern = this.store.selectSnapshot(i1.ConfigState.getOne('localization')).currentCulture.dateTimeFormat.shortDatePattern;
            if (date && this.datePipe) {
                return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), shortDatePattern);
            }
            else {
                return date
                    ? date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '')
                    : '';
            }
        };
        return DateParserFormatter;
    }(ngBootstrap.NgbDateParserFormatter));
    DateParserFormatter.decorators = [
        { type: i0.Injectable }
    ];
    DateParserFormatter.ctorParameters = function () { return [
        { type: common.DatePipe, decorators: [{ type: i0.Optional }] },
        { type: i1$1.Store }
    ]; };

    var ThemeSharedModule = /** @class */ (function () {
        function ThemeSharedModule(errorHandler) {
            this.errorHandler = errorHandler;
        }
        ThemeSharedModule.forRoot = function (options) {
            if (options === void 0) { options = {}; }
            return {
                ngModule: ThemeSharedModule,
                providers: [
                    THEME_SHARED_ROUTE_PROVIDERS,
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [THEME_SHARED_APPEND_CONTENT],
                        useFactory: i1.noop,
                    },
                    {
                        provide: i0.APP_INITIALIZER,
                        multi: true,
                        deps: [i0.Injector],
                        useFactory: initLazyStyleHandler,
                    },
                    { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                    {
                        provide: 'HTTP_ERROR_CONFIG',
                        useFactory: httpErrorConfigFactory,
                        deps: [HTTP_ERROR_CONFIG],
                    },
                    { provide: ngBootstrap.NgbDateParserFormatter, useClass: DateParserFormatter },
                ],
            };
        };
        return ThemeSharedModule;
    }());
    ThemeSharedModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i1.CoreModule, ngxDatatable.NgxDatatableModule, core.NgxValidateCoreModule, ngBootstrap.NgbPaginationModule],
                    declarations: [
                        BreadcrumbComponent,
                        ButtonComponent,
                        ChartComponent,
                        ConfirmationComponent,
                        HttpErrorWrapperComponent,
                        LoaderBarComponent,
                        LoadingComponent,
                        ModalComponent,
                        ModalContainerComponent,
                        TableComponent,
                        TableEmptyMessageComponent,
                        ToastComponent,
                        ToastContainerComponent,
                        SortOrderIconComponent,
                        NgxDatatableDefaultDirective,
                        NgxDatatableListDirective,
                        LoadingDirective,
                        TableSortDirective,
                    ],
                    exports: [
                        ngxDatatable.NgxDatatableModule,
                        BreadcrumbComponent,
                        ButtonComponent,
                        ChartComponent,
                        ConfirmationComponent,
                        LoaderBarComponent,
                        LoadingComponent,
                        ModalComponent,
                        TableComponent,
                        TableEmptyMessageComponent,
                        ToastComponent,
                        ToastContainerComponent,
                        SortOrderIconComponent,
                        NgxDatatableDefaultDirective,
                        NgxDatatableListDirective,
                        LoadingDirective,
                        TableSortDirective,
                    ],
                    providers: [common.DatePipe],
                    entryComponents: [
                        HttpErrorWrapperComponent,
                        LoadingComponent,
                        ModalContainerComponent,
                        ToastContainerComponent,
                        ConfirmationComponent,
                    ],
                },] }
    ];
    ThemeSharedModule.ctorParameters = function () { return [
        { type: ErrorHandler }
    ]; };

    var minLength = forms.Validators.minLength, maxLength = forms.Validators.maxLength;
    function getPasswordValidators(store) {
        var getRule = getRuleFn(store);
        var passwordRulesArr = [];
        var requiredLength = 1;
        if (getRule('RequireDigit') === 'true') {
            passwordRulesArr.push('number');
        }
        if (getRule('RequireLowercase') === 'true') {
            passwordRulesArr.push('small');
        }
        if (getRule('RequireUppercase') === 'true') {
            passwordRulesArr.push('capital');
        }
        if (getRule('RequireNonAlphanumeric') === 'true') {
            passwordRulesArr.push('special');
        }
        if (Number.isInteger(+getRule('RequiredLength'))) {
            requiredLength = +getRule('RequiredLength');
        }
        return [core.validatePassword(passwordRulesArr), minLength(requiredLength), maxLength(128)];
    }
    function getRuleFn(store) {
        return function (key) {
            var passwordRules = store.selectSnapshot(i1.ConfigState.getSettings('Identity.Password'));
            return (passwordRules["Abp.Identity.Password." + key] || '').toLowerCase();
        };
    }

    /*
     * Public API Surface of theme-shared
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BOOTSTRAP = BOOTSTRAP;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ChartComponent = ChartComponent;
    exports.ConfirmationComponent = ConfirmationComponent;
    exports.ConfirmationService = ConfirmationService;
    exports.DateParserFormatter = DateParserFormatter;
    exports.ErrorHandler = ErrorHandler;
    exports.HTTP_ERROR_CONFIG = HTTP_ERROR_CONFIG;
    exports.LAZY_STYLES = LAZY_STYLES;
    exports.LoaderBarComponent = LoaderBarComponent;
    exports.LoadingComponent = LoadingComponent;
    exports.LoadingDirective = LoadingDirective;
    exports.ModalComponent = ModalComponent;
    exports.ModalService = ModalService;
    exports.NavItem = NavItem;
    exports.NavItemsService = NavItemsService;
    exports.NgxDatatableDefaultDirective = NgxDatatableDefaultDirective;
    exports.NgxDatatableListDirective = NgxDatatableListDirective;
    exports.SortOrderIconComponent = SortOrderIconComponent;
    exports.THEME_SHARED_APPEND_CONTENT = THEME_SHARED_APPEND_CONTENT;
    exports.THEME_SHARED_ROUTE_PROVIDERS = THEME_SHARED_ROUTE_PROVIDERS;
    exports.TableComponent = TableComponent;
    exports.TableEmptyMessageComponent = TableEmptyMessageComponent;
    exports.TableSortDirective = TableSortDirective;
    exports.ThemeSharedModule = ThemeSharedModule;
    exports.ToastComponent = ToastComponent;
    exports.ToastContainerComponent = ToastContainerComponent;
    exports.ToasterService = ToasterService;
    exports.bounceIn = bounceIn;
    exports.chartJsLoaded$ = chartJsLoaded$;
    exports.collapse = collapse;
    exports.collapseLinearWithMargin = collapseLinearWithMargin;
    exports.collapseWithMargin = collapseWithMargin;
    exports.collapseX = collapseX;
    exports.collapseY = collapseY;
    exports.collapseYWithMargin = collapseYWithMargin;
    exports.configureRoutes = configureRoutes;
    exports.dialogAnimation = dialogAnimation;
    exports.expandX = expandX;
    exports.expandY = expandY;
    exports.expandYWithMargin = expandYWithMargin;
    exports.fadeAnimation = fadeAnimation;
    exports.fadeIn = fadeIn;
    exports.fadeInDown = fadeInDown;
    exports.fadeInLeft = fadeInLeft;
    exports.fadeInRight = fadeInRight;
    exports.fadeInUp = fadeInUp;
    exports.fadeOut = fadeOut;
    exports.fadeOutDown = fadeOutDown;
    exports.fadeOutLeft = fadeOutLeft;
    exports.fadeOutRight = fadeOutRight;
    exports.fadeOutUp = fadeOutUp;
    exports.getPasswordValidators = getPasswordValidators;
    exports.getRandomBackgroundColor = getRandomBackgroundColor;
    exports.httpErrorConfigFactory = httpErrorConfigFactory;
    exports.slideFromBottom = slideFromBottom;
    exports.toastInOut = toastInOut;
    exports.ɵa = BreadcrumbComponent;
    exports.ɵb = ButtonComponent;
    exports.ɵbb = THEME_SHARED_ROUTE_PROVIDERS;
    exports.ɵbc = configureRoutes;
    exports.ɵbd = THEME_SHARED_APPEND_CONTENT;
    exports.ɵbe = initLazyStyleHandler;
    exports.ɵbf = httpErrorConfigFactory;
    exports.ɵbg = HTTP_ERROR_CONFIG;
    exports.ɵbh = DateParserFormatter;
    exports.ɵc = ChartComponent;
    exports.ɵd = ConfirmationComponent;
    exports.ɵe = HttpErrorWrapperComponent;
    exports.ɵf = LoaderBarComponent;
    exports.ɵg = LoadingComponent;
    exports.ɵh = ModalComponent;
    exports.ɵi = fadeAnimation;
    exports.ɵj = fadeIn;
    exports.ɵk = fadeOut;
    exports.ɵl = ModalService;
    exports.ɵm = ConfirmationService;
    exports.ɵn = ModalContainerComponent;
    exports.ɵo = TableComponent;
    exports.ɵp = TableEmptyMessageComponent;
    exports.ɵq = ToastComponent;
    exports.ɵr = ToasterService;
    exports.ɵs = ToastContainerComponent;
    exports.ɵt = toastInOut;
    exports.ɵu = SortOrderIconComponent;
    exports.ɵv = NgxDatatableDefaultDirective;
    exports.ɵw = NgxDatatableListDirective;
    exports.ɵx = LoadingDirective;
    exports.ɵy = TableSortDirective;
    exports.ɵz = ErrorHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.theme.shared.umd.js.map
