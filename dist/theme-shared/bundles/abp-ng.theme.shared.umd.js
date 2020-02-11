(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/common'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('primeng/components/common/messageservice'), require('primeng/toast'), require('@angular/router'), require('@ngxs/store'), require('rxjs'), require('rxjs/operators'), require('snq'), require('@angular/animations'), require('just-clone'), require('@angular/common/http'), require('@ngxs/router-plugin')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.theme.shared', ['exports', '@abp/ng.core', '@angular/common', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', 'primeng/components/common/messageservice', 'primeng/toast', '@angular/router', '@ngxs/store', 'rxjs', 'rxjs/operators', 'snq', '@angular/animations', 'just-clone', '@angular/common/http', '@ngxs/router-plugin'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.theme = global.abp.ng.theme || {}, global.abp.ng.theme.shared = {}), global.ng_core, global.ng.common, global.ng.core, global.ngBootstrap, global.core$1, global.messageservice, global.toast, global.ng.router, global.store, global.rxjs, global.rxjs.operators, global.snq, global.ng.animations, global.clone, global.ng.common.http, global.routerPlugin));
}(this, (function (exports, ng_core, common, core, ngBootstrap, core$1, messageservice, toast, router, store, rxjs, operators, snq, animations, clone, http, routerPlugin) { 'use strict';

    snq = snq && snq.hasOwnProperty('default') ? snq['default'] : snq;
    clone = clone && clone.hasOwnProperty('default') ? clone['default'] : clone;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(router, store) {
            this.router = router;
            this.store = store;
            this.segments = [];
        }
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.show = !!this.store.selectSnapshot((/**
             * @param {?} state
             * @return {?}
             */
            function (state) { return state.LeptonLayoutState; }));
            if (this.show) {
                /** @type {?} */
                var splittedUrl = this.router.url.split('/').filter((/**
                 * @param {?} chunk
                 * @return {?}
                 */
                function (chunk) { return chunk; }));
                /** @type {?} */
                var currentUrl = this.store.selectSnapshot(ng_core.ConfigState.getRoute(splittedUrl[0]));
                if (!currentUrl) {
                    currentUrl = this.store.selectSnapshot(ng_core.ConfigState.getRoute(null, null, this.router.url));
                    splittedUrl = [this.router.url];
                    if (!currentUrl) {
                        this.show = false;
                        return;
                    }
                }
                this.segments.push(currentUrl.name);
                if (splittedUrl.length > 1) {
                    var _a = __read(splittedUrl), arr = _a.slice(1);
                    /** @type {?} */
                    var childRoute = currentUrl;
                    var _loop_1 = function (i) {
                        /** @type {?} */
                        var element = arr[i];
                        childRoute = childRoute.children.find((/**
                         * @param {?} child
                         * @return {?}
                         */
                        function (child) { return child.path === element; }));
                        this_1.segments.push(childRoute.name);
                    };
                    var this_1 = this;
                    for (var i = 0; i < arr.length; i++) {
                        _loop_1(i);
                    }
                }
            }
        };
        BreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-breadcrumb',
                        template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: store.Store }
        ]; };
        return BreadcrumbComponent;
    }());
    if (false) {
        /** @type {?} */
        BreadcrumbComponent.prototype.show;
        /** @type {?} */
        BreadcrumbComponent.prototype.segments;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        BreadcrumbComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(renderer) {
            this.renderer = renderer;
            this.buttonId = '';
            this.buttonClass = 'btn btn-primary';
            this.buttonType = 'button';
            this.loading = false;
            this.disabled = false;
            // tslint:disable
            this.click = new core.EventEmitter();
            this.focus = new core.EventEmitter();
            this.blur = new core.EventEmitter();
            // tslint:enable
            this.abpClick = new core.EventEmitter();
            this.abpFocus = new core.EventEmitter();
            this.abpBlur = new core.EventEmitter();
        }
        Object.defineProperty(ButtonComponent.prototype, "icon", {
            get: /**
             * @return {?}
             */
            function () {
                return "" + (this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.attributes) {
                Object.keys(this.attributes).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    _this.renderer.setAttribute(_this.buttonRef.nativeElement, key, _this.attributes[key]);
                }));
            }
        };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-button',
                        template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"click.next($event); abpClick.next($event)\"\n      (focus)=\"focus.next($event); abpFocus.next($event)\"\n      (blur)=\"blur.next($event); abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return [
            { type: core.Renderer2 }
        ]; };
        ButtonComponent.propDecorators = {
            buttonId: [{ type: core.Input }],
            buttonClass: [{ type: core.Input }],
            buttonType: [{ type: core.Input }],
            iconClass: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            attributes: [{ type: core.Input }],
            click: [{ type: core.Output }],
            focus: [{ type: core.Output }],
            blur: [{ type: core.Output }],
            abpClick: [{ type: core.Output }],
            abpFocus: [{ type: core.Output }],
            abpBlur: [{ type: core.Output }],
            buttonRef: [{ type: core.ViewChild, args: ['button', { static: true },] }]
        };
        return ButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        ButtonComponent.prototype.buttonId;
        /** @type {?} */
        ButtonComponent.prototype.buttonClass;
        /** @type {?} */
        ButtonComponent.prototype.buttonType;
        /** @type {?} */
        ButtonComponent.prototype.iconClass;
        /** @type {?} */
        ButtonComponent.prototype.loading;
        /** @type {?} */
        ButtonComponent.prototype.disabled;
        /** @type {?} */
        ButtonComponent.prototype.attributes;
        /** @type {?} */
        ButtonComponent.prototype.click;
        /** @type {?} */
        ButtonComponent.prototype.focus;
        /** @type {?} */
        ButtonComponent.prototype.blur;
        /** @type {?} */
        ButtonComponent.prototype.abpClick;
        /** @type {?} */
        ButtonComponent.prototype.abpFocus;
        /** @type {?} */
        ButtonComponent.prototype.abpBlur;
        /** @type {?} */
        ButtonComponent.prototype.buttonRef;
        /**
         * @type {?}
         * @private
         */
        ButtonComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/widget-utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} count
     * @return {?}
     */
    function getRandomBackgroundColor(count) {
        /** @type {?} */
        var colors = [];
        for (var i = 0; i < count; i++) {
            /** @type {?} */
            var r = ((i + 5) * (i + 5) * 474) % 255;
            /** @type {?} */
            var g = ((i + 5) * (i + 5) * 1600) % 255;
            /** @type {?} */
            var b = ((i + 5) * (i + 5) * 84065) % 255;
            colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
        }
        return colors;
    }
    /** @type {?} */
    var chartJsLoaded$ = new rxjs.ReplaySubject(1);

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/chart/chart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartComponent = /** @class */ (function () {
        function ChartComponent(el, cdRef) {
            var _this = this;
            this.el = el;
            this.cdRef = cdRef;
            this.options = {};
            this.plugins = [];
            this.responsive = true;
            // tslint:disable-next-line: no-output-on-prefix
            this.onDataSelect = new core.EventEmitter();
            this.initialized = new rxjs.BehaviorSubject(this);
            this.onCanvasClick = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (_this.chart) {
                    /** @type {?} */
                    var element = _this.chart.getElementAtEvent(event);
                    /** @type {?} */
                    var dataset = _this.chart.getDatasetAtEvent(event);
                    if (element && element.length && dataset) {
                        _this.onDataSelect.emit({
                            originalEvent: event,
                            element: element[0],
                            dataset: dataset,
                        });
                    }
                }
            });
            this.initChart = (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
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
            });
            this.generateLegend = (/**
             * @return {?}
             */
            function () {
                if (_this.chart) {
                    return _this.chart.generateLegend();
                }
            });
            this.refresh = (/**
             * @return {?}
             */
            function () {
                if (_this.chart) {
                    _this.chart.update();
                    _this.cdRef.detectChanges();
                }
            });
            this.reinit = (/**
             * @return {?}
             */
            function () {
                if (_this.chart) {
                    _this.chart.destroy();
                    _this.initChart();
                }
            });
        }
        Object.defineProperty(ChartComponent.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this._data = val;
                this.reinit();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "canvas", {
            get: /**
             * @return {?}
             */
            function () {
                return this.el.nativeElement.children[0].children[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChartComponent.prototype, "base64Image", {
            get: /**
             * @return {?}
             */
            function () {
                return this.chart.toBase64Image();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            chartJsLoaded$.subscribe((/**
             * @return {?}
             */
            function () {
                _this.testChartJs();
                _this.initChart();
                _this._initialized = true;
            }));
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.testChartJs = /**
         * @return {?}
         */
        function () {
            try {
                // tslint:disable-next-line: no-unused-expression
                Chart;
            }
            catch (error) {
                throw new Error("Chart is not found. Import the Chart from app.module like shown below:\n      import('chart.js');\n      ");
            }
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                this.chart.destroy();
                this._initialized = false;
                this.chart = null;
            }
        };
        ChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-chart',
                        template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        ChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef }
        ]; };
        ChartComponent.propDecorators = {
            type: [{ type: core.Input }],
            options: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            onDataSelect: [{ type: core.Output }],
            initialized: [{ type: core.Output }],
            data: [{ type: core.Input }]
        };
        return ChartComponent;
    }());
    if (false) {
        /** @type {?} */
        ChartComponent.prototype.type;
        /** @type {?} */
        ChartComponent.prototype.options;
        /** @type {?} */
        ChartComponent.prototype.plugins;
        /** @type {?} */
        ChartComponent.prototype.width;
        /** @type {?} */
        ChartComponent.prototype.height;
        /** @type {?} */
        ChartComponent.prototype.responsive;
        /** @type {?} */
        ChartComponent.prototype.onDataSelect;
        /** @type {?} */
        ChartComponent.prototype.initialized;
        /**
         * @type {?}
         * @private
         */
        ChartComponent.prototype._initialized;
        /** @type {?} */
        ChartComponent.prototype._data;
        /** @type {?} */
        ChartComponent.prototype.chart;
        /** @type {?} */
        ChartComponent.prototype.onCanvasClick;
        /** @type {?} */
        ChartComponent.prototype.initChart;
        /** @type {?} */
        ChartComponent.prototype.generateLegend;
        /** @type {?} */
        ChartComponent.prototype.refresh;
        /** @type {?} */
        ChartComponent.prototype.reinit;
        /** @type {?} */
        ChartComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        ChartComponent.prototype.cdRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/toaster.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    (function (Toaster) {
        /**
         * @record
         */
        function ToastOptions() { }
        Toaster.ToastOptions = ToastOptions;
        if (false) {
            /** @type {?|undefined} */
            ToastOptions.prototype.life;
            /** @type {?|undefined} */
            ToastOptions.prototype.sticky;
            /** @type {?|undefined} */
            ToastOptions.prototype.closable;
            /** @type {?|undefined} */
            ToastOptions.prototype.tapToDismiss;
            /** @type {?|undefined} */
            ToastOptions.prototype.messageLocalizationParams;
            /** @type {?|undefined} */
            ToastOptions.prototype.titleLocalizationParams;
            /** @type {?} */
            ToastOptions.prototype.id;
            /** @type {?|undefined} */
            ToastOptions.prototype.containerKey;
        }
        /**
         * @record
         */
        function Toast() { }
        Toaster.Toast = Toast;
        if (false) {
            /** @type {?} */
            Toast.prototype.message;
            /** @type {?|undefined} */
            Toast.prototype.title;
            /** @type {?|undefined} */
            Toast.prototype.severity;
            /** @type {?|undefined} */
            Toast.prototype.options;
        }
        var Status;
        (function (Status) {
            Status["confirm"] = "confirm";
            Status["reject"] = "reject";
            Status["dismiss"] = "dismiss";
        })(Status = Toaster.Status || (Toaster.Status = {}));
    })(exports.Toaster || (exports.Toaster = {}));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/confirmation.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationService = /** @class */ (function () {
        function ConfirmationService() {
            this.confirmation$ = new rxjs.ReplaySubject(1);
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ConfirmationService.prototype.info = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'info', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ConfirmationService.prototype.success = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'success', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ConfirmationService.prototype.warn = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'warning', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        ConfirmationService.prototype.error = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'error', options);
        };
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} severity
         * @param {?=} options
         * @return {?}
         */
        ConfirmationService.prototype.show = /**
         * @param {?} message
         * @param {?} title
         * @param {?=} severity
         * @param {?=} options
         * @return {?}
         */
        function (message, title, severity, options) {
            this.confirmation$.next({
                message: message,
                title: title,
                severity: severity || 'neutral',
                options: options,
            });
            this.status$ = new rxjs.Subject();
            this.listenToEscape();
            return this.status$;
        };
        /**
         * @param {?=} status
         * @return {?}
         */
        ConfirmationService.prototype.clear = /**
         * @param {?=} status
         * @return {?}
         */
        function (status) {
            this.confirmation$.next();
            this.status$.next(status || exports.Toaster.Status.dismiss);
        };
        /**
         * @return {?}
         */
        ConfirmationService.prototype.listenToEscape = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.fromEvent(document, 'keyup')
                .pipe(operators.takeUntil(this.status$), operators.debounceTime(150), operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key && key.key === 'Escape'; })))
                .subscribe((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this.clear();
            }));
        };
        ConfirmationService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConfirmationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(); }, token: ConfirmationService, providedIn: "root" });
        return ConfirmationService;
    }());
    if (false) {
        /** @type {?} */
        ConfirmationService.prototype.status$;
        /** @type {?} */
        ConfirmationService.prototype.confirmation$;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/confirmation/confirmation.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfirmationComponent = /** @class */ (function () {
        function ConfirmationComponent(confirmationService, localizationService) {
            var _this = this;
            this.confirmationService = confirmationService;
            this.localizationService = localizationService;
            this.confirm = exports.Toaster.Status.confirm;
            this.reject = exports.Toaster.Status.reject;
            this.dismiss = exports.Toaster.Status.dismiss;
            this.visible = false;
            this.confirmationService.confirmation$.subscribe((/**
             * @param {?} confirmation
             * @return {?}
             */
            function (confirmation) {
                _this.data = confirmation;
                _this.visible = !!confirmation;
            }));
        }
        Object.defineProperty(ConfirmationComponent.prototype, "iconClass", {
            get: /**
             * @return {?}
             */
            function () {
                switch (this.data.severity) {
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
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} status
         * @return {?}
         */
        ConfirmationComponent.prototype.close = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.confirmationService.clear(status);
        };
        ConfirmationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-confirmation',
                        template: "<div class=\"confirmation\" *ngIf=\"visible\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1 class=\"title\" *ngIf=\"data.title\">\r\n        {{ data.title | abpLocalization: data.options?.titleLocalizationParams }}\r\n      </h1>\r\n      <p class=\"message\" *ngIf=\"data.message\">\r\n        {{ data.message | abpLocalization: data.options?.messageLocalizationParams }}\r\n      </p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      >\r\n        {{ data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      >\r\n        {{ data.options?.yesText || 'AbpUi::Yes' | abpLocalization }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
                    }] }
        ];
        /** @nocollapse */
        ConfirmationComponent.ctorParameters = function () { return [
            { type: ConfirmationService },
            { type: ng_core.LocalizationService }
        ]; };
        return ConfirmationComponent;
    }());
    if (false) {
        /** @type {?} */
        ConfirmationComponent.prototype.confirm;
        /** @type {?} */
        ConfirmationComponent.prototype.reject;
        /** @type {?} */
        ConfirmationComponent.prototype.dismiss;
        /** @type {?} */
        ConfirmationComponent.prototype.visible;
        /** @type {?} */
        ConfirmationComponent.prototype.data;
        /**
         * @type {?}
         * @private
         */
        ConfirmationComponent.prototype.confirmationService;
        /**
         * @type {?}
         * @private
         */
        ConfirmationComponent.prototype.localizationService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpErrorWrapperComponent = /** @class */ (function () {
        function HttpErrorWrapperComponent() {
            this.status = 0;
            this.title = 'Oops!';
            this.details = 'Sorry, an error has occured.';
            this.customComponent = null;
            this.hideCloseIcon = false;
        }
        Object.defineProperty(HttpErrorWrapperComponent.prototype, "statusText", {
            get: /**
             * @return {?}
             */
            function () {
                return this.status ? "[" + this.status + "]" : '';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        HttpErrorWrapperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.backgroundColor =
                snq((/**
                 * @return {?}
                 */
                function () { return window.getComputedStyle(document.body).getPropertyValue('background-color'); })) || '#fff';
        };
        /**
         * @return {?}
         */
        HttpErrorWrapperComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.customComponent) {
                /** @type {?} */
                var customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
                customComponentRef.instance.errorStatus = this.status;
                customComponentRef.instance.destroy$ = this.destroy$;
                this.appRef.attachView(customComponentRef.hostView);
                this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
                customComponentRef.changeDetectorRef.detectChanges();
            }
            rxjs.fromEvent(document, 'keyup')
                .pipe(ng_core.takeUntilDestroy(this), operators.debounceTime(150), operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key && key.key === 'Escape'; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.destroy();
            }));
        };
        /**
         * @return {?}
         */
        HttpErrorWrapperComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        HttpErrorWrapperComponent.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        HttpErrorWrapperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-http-error-wrapper',
                        template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                    }] }
        ];
        HttpErrorWrapperComponent.propDecorators = {
            containerRef: [{ type: core.ViewChild, args: ['container', { static: false },] }]
        };
        return HttpErrorWrapperComponent;
    }());
    if (false) {
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.appRef;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.cfRes;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.injector;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.status;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.title;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.details;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.customComponent;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.destroy$;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.hideCloseIcon;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.backgroundColor;
        /** @type {?} */
        HttpErrorWrapperComponent.prototype.containerRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/loader-bar/loader-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoaderBarComponent = /** @class */ (function () {
        function LoaderBarComponent(actions, router, cdRef) {
            this.actions = actions;
            this.router = router;
            this.cdRef = cdRef;
            this.containerClass = 'abp-loader-bar';
            this.color = '#77b6ff';
            this.isLoading = false;
            this.progressLevel = 0;
            this.intervalPeriod = 350;
            this.stopDelay = 820;
            this.filter = (/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload.url.indexOf('openid-configuration') < 0; });
        }
        Object.defineProperty(LoaderBarComponent.prototype, "boxShadow", {
            get: /**
             * @return {?}
             */
            function () {
                return "0 0 10px rgba(" + this.color + ", 0.5)";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.actions
                .pipe(store.ofActionSuccessful(ng_core.StartLoader, ng_core.StopLoader), operators.filter(this.filter), core$1.takeUntilDestroy(this))
                .subscribe((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (action instanceof ng_core.StartLoader)
                    _this.startLoading();
                else
                    _this.stopLoading();
            }));
            this.router.events
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return event instanceof router.NavigationStart || event instanceof router.NavigationEnd || event instanceof router.NavigationError;
            })), core$1.takeUntilDestroy(this))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event instanceof router.NavigationStart)
                    _this.startLoading();
                else
                    _this.stopLoading();
            }));
        };
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.interval.unsubscribe();
        };
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.startLoading = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isLoading || this.progressLevel !== 0)
                return;
            this.isLoading = true;
            this.interval = rxjs.interval(this.intervalPeriod).subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.progressLevel < 75) {
                    _this.progressLevel += Math.random() * 10;
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
            }));
        };
        /**
         * @return {?}
         */
        LoaderBarComponent.prototype.stopLoading = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.interval.unsubscribe();
            this.progressLevel = 100;
            this.isLoading = false;
            if (this.timer && !this.timer.closed)
                return;
            this.timer = rxjs.timer(this.stopDelay).subscribe((/**
             * @return {?}
             */
            function () {
                _this.progressLevel = 0;
                _this.cdRef.detectChanges();
            }));
        };
        LoaderBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-loader-bar',
                        template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div\n        class=\"abp-progress\"\n        [style.width.vw]=\"progressLevel\"\n        [ngStyle]=\"{\n          'background-color': color,\n          'box-shadow': boxShadow\n        }\"\n      ></div>\n    </div>\n  ",
                        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;transition:width .4s}"]
                    }] }
        ];
        /** @nocollapse */
        LoaderBarComponent.ctorParameters = function () { return [
            { type: store.Actions },
            { type: router.Router },
            { type: core.ChangeDetectorRef }
        ]; };
        LoaderBarComponent.propDecorators = {
            containerClass: [{ type: core.Input }],
            color: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            filter: [{ type: core.Input }]
        };
        return LoaderBarComponent;
    }());
    if (false) {
        /** @type {?} */
        LoaderBarComponent.prototype.containerClass;
        /** @type {?} */
        LoaderBarComponent.prototype.color;
        /** @type {?} */
        LoaderBarComponent.prototype.isLoading;
        /** @type {?} */
        LoaderBarComponent.prototype.progressLevel;
        /** @type {?} */
        LoaderBarComponent.prototype.interval;
        /** @type {?} */
        LoaderBarComponent.prototype.timer;
        /** @type {?} */
        LoaderBarComponent.prototype.intervalPeriod;
        /** @type {?} */
        LoaderBarComponent.prototype.stopDelay;
        /** @type {?} */
        LoaderBarComponent.prototype.filter;
        /**
         * @type {?}
         * @private
         */
        LoaderBarComponent.prototype.actions;
        /**
         * @type {?}
         * @private
         */
        LoaderBarComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        LoaderBarComponent.prototype.cdRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/fade.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fadeIn = animations.animation([animations.style({ opacity: '0' }), animations.animate('{{ time}} {{ easing }}', animations.style({ opacity: '1' }))], {
        params: { time: '350ms', easing: 'ease' },
    });
    /** @type {?} */
    var fadeOut = animations.animation([animations.style({ opacity: '1' }), animations.animate('{{ time}} {{ easing }}', animations.style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
    /** @type {?} */
    var fadeInDown = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeInUp = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeInLeft = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeInRight = animations.animation([
        animations.style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeOutDown = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeOutUp = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeOutLeft = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });
    /** @type {?} */
    var fadeOutRight = animations.animation([
        animations.style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
    ], { params: { time: '350ms', easing: 'ease', transform: '' } });

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/modal.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fadeAnimation = animations.trigger('fade', [
        animations.transition(':enter', animations.useAnimation(fadeIn)),
        animations.transition(':leave', animations.useAnimation(fadeOut)),
    ]);
    /** @type {?} */
    var dialogAnimation = animations.trigger('dialog', [
        animations.transition(':enter', animations.useAnimation(fadeInDown)),
        animations.transition(':leave', animations.useAnimation(fadeOut)),
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal/modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModalComponent = /** @class */ (function () {
        function ModalComponent(renderer, confirmationService) {
            this.renderer = renderer;
            this.confirmationService = confirmationService;
            this.centered = false;
            this.modalClass = '';
            this.size = 'lg';
            this.visibleChange = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this.appear = new core.EventEmitter();
            this.disappear = new core.EventEmitter();
            this._visible = false;
            this._busy = false;
            this.isModalOpen = false;
            this.isConfirmationOpen = false;
            this.destroy$ = new rxjs.Subject();
        }
        Object.defineProperty(ModalComponent.prototype, "visible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._visible;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                if (typeof value !== 'boolean')
                    return;
                this.isModalOpen = value;
                this._visible = value;
                this.visibleChange.emit(value);
                if (value) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.listen(); }), 0);
                    this.renderer.addClass(document.body, 'modal-open');
                    this.appear.emit();
                }
                else {
                    this.renderer.removeClass(document.body, 'modal-open');
                    this.disappear.emit();
                    this.destroy$.next();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "busy", {
            get: /**
             * @return {?}
             */
            function () {
                return this._busy;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
                    this.abpSubmit.loading = value;
                }
                this._busy = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalComponent.prototype, "isFormDirty", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var node;
                if (!this.modalContent) {
                    node = (/** @type {?} */ (document.getElementById('modal-container')));
                }
                /** @type {?} */
                var nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body'))))
                    .childNodes);
                return hasNgDirty(nodes);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
        };
        /**
         * @return {?}
         */
        ModalComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.busy)
                return;
            if (this.isFormDirty) {
                if (this.isConfirmationOpen)
                    return;
                this.isConfirmationOpen = true;
                this.confirmationService
                    .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                    .subscribe((/**
                 * @param {?} status
                 * @return {?}
                 */
                function (status) {
                    _this.isConfirmationOpen = false;
                    if (status === exports.Toaster.Status.confirm) {
                        _this.visible = false;
                    }
                }));
            }
            else {
                this.visible = false;
            }
        };
        /**
         * @return {?}
         */
        ModalComponent.prototype.listen = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.fromEvent(document, 'keyup')
                .pipe(operators.takeUntil(this.destroy$), operators.debounceTime(150), operators.filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return key && key.key === 'Escape'; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.close();
            }));
            rxjs.fromEvent(window, 'beforeunload')
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (_this.isFormDirty) {
                    event.returnValue = true;
                }
                else {
                    delete event.returnValue;
                }
            }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.abpClose)
                    return;
                rxjs.fromEvent(_this.abpClose.nativeElement, 'click')
                    .pipe(operators.takeUntil(_this.destroy$), operators.filter((/**
                 * @return {?}
                 */
                function () { return !!_this.modalContent; })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.close(); }));
            }), 0);
            this.init.emit();
        };
        ModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-modal',
                        template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        animations: [fadeAnimation],
                        styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
                    }] }
        ];
        /** @nocollapse */
        ModalComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: ConfirmationService }
        ]; };
        ModalComponent.propDecorators = {
            visible: [{ type: core.Input }],
            busy: [{ type: core.Input }],
            centered: [{ type: core.Input }],
            modalClass: [{ type: core.Input }],
            size: [{ type: core.Input }],
            abpSubmit: [{ type: core.ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
            abpHeader: [{ type: core.ContentChild, args: ['abpHeader', { static: false },] }],
            abpBody: [{ type: core.ContentChild, args: ['abpBody', { static: false },] }],
            abpFooter: [{ type: core.ContentChild, args: ['abpFooter', { static: false },] }],
            abpClose: [{ type: core.ContentChild, args: ['abpClose', { static: false, read: core.ElementRef },] }],
            modalContent: [{ type: core.ViewChild, args: ['abpModalContent', { static: false },] }],
            abpButtons: [{ type: core.ViewChildren, args: ['abp-button',] }],
            visibleChange: [{ type: core.Output }],
            init: [{ type: core.Output }],
            appear: [{ type: core.Output }],
            disappear: [{ type: core.Output }]
        };
        return ModalComponent;
    }());
    if (false) {
        /** @type {?} */
        ModalComponent.prototype.centered;
        /** @type {?} */
        ModalComponent.prototype.modalClass;
        /** @type {?} */
        ModalComponent.prototype.size;
        /** @type {?} */
        ModalComponent.prototype.abpSubmit;
        /** @type {?} */
        ModalComponent.prototype.abpHeader;
        /** @type {?} */
        ModalComponent.prototype.abpBody;
        /** @type {?} */
        ModalComponent.prototype.abpFooter;
        /** @type {?} */
        ModalComponent.prototype.abpClose;
        /** @type {?} */
        ModalComponent.prototype.modalContent;
        /** @type {?} */
        ModalComponent.prototype.abpButtons;
        /** @type {?} */
        ModalComponent.prototype.visibleChange;
        /** @type {?} */
        ModalComponent.prototype.init;
        /** @type {?} */
        ModalComponent.prototype.appear;
        /** @type {?} */
        ModalComponent.prototype.disappear;
        /** @type {?} */
        ModalComponent.prototype._visible;
        /** @type {?} */
        ModalComponent.prototype._busy;
        /** @type {?} */
        ModalComponent.prototype.isModalOpen;
        /** @type {?} */
        ModalComponent.prototype.isConfirmationOpen;
        /** @type {?} */
        ModalComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        ModalComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        ModalComponent.prototype.confirmationService;
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    function getFlatNodes(nodes) {
        return Array.from(nodes).reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) { return __spread(acc, (val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])); }), []);
    }
    /**
     * @param {?} nodes
     * @return {?}
     */
    function hasNgDirty(nodes) {
        return nodes.findIndex((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return (node.className || '').indexOf('ng-dirty') > -1; })) > -1;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SortOrderIconComponent = /** @class */ (function () {
        function SortOrderIconComponent() {
            this.orderChange = new core.EventEmitter();
            this.selectedSortKeyChange = new core.EventEmitter();
        }
        Object.defineProperty(SortOrderIconComponent.prototype, "selectedSortKey", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedSortKey;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._selectedSortKey = value;
                this.selectedSortKeyChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortOrderIconComponent.prototype, "order", {
            get: /**
             * @return {?}
             */
            function () {
                return this._order;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._order = value;
                this.orderChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SortOrderIconComponent.prototype, "icon", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.selectedSortKey === this.sortKey)
                    return "sorting_" + this.order;
                else
                    return 'sorting';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} key
         * @return {?}
         */
        SortOrderIconComponent.prototype.sort = /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
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
        SortOrderIconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-sort-order-icon',
                        template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
                    }] }
        ];
        SortOrderIconComponent.propDecorators = {
            sortKey: [{ type: core.Input }],
            selectedSortKey: [{ type: core.Input }],
            order: [{ type: core.Input }],
            orderChange: [{ type: core.Output }],
            selectedSortKeyChange: [{ type: core.Output }],
            iconClass: [{ type: core.Input }]
        };
        return SortOrderIconComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SortOrderIconComponent.prototype._order;
        /**
         * @type {?}
         * @private
         */
        SortOrderIconComponent.prototype._selectedSortKey;
        /** @type {?} */
        SortOrderIconComponent.prototype.sortKey;
        /** @type {?} */
        SortOrderIconComponent.prototype.orderChange;
        /** @type {?} */
        SortOrderIconComponent.prototype.selectedSortKeyChange;
        /** @type {?} */
        SortOrderIconComponent.prototype.iconClass;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableEmptyMessageComponent = /** @class */ (function () {
        function TableEmptyMessageComponent() {
            this.colspan = 2;
            this.localizationResource = 'AbpAccount';
            this.localizationProp = 'NoDataAvailableInDatatable';
        }
        Object.defineProperty(TableEmptyMessageComponent.prototype, "emptyMessage", {
            get: /**
             * @return {?}
             */
            function () {
                return this.message || this.localizationResource + "::" + this.localizationProp;
            },
            enumerable: true,
            configurable: true
        });
        TableEmptyMessageComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line: component-selector
                        selector: '[abp-table-empty-message]',
                        template: "\n    <td class=\"text-center\" [attr.colspan]=\"colspan\">\n      {{ emptyMessage | abpLocalization }}\n    </td>\n  "
                    }] }
        ];
        TableEmptyMessageComponent.propDecorators = {
            colspan: [{ type: core.Input }],
            message: [{ type: core.Input }],
            localizationResource: [{ type: core.Input }],
            localizationProp: [{ type: core.Input }]
        };
        return TableEmptyMessageComponent;
    }());
    if (false) {
        /** @type {?} */
        TableEmptyMessageComponent.prototype.colspan;
        /** @type {?} */
        TableEmptyMessageComponent.prototype.message;
        /** @type {?} */
        TableEmptyMessageComponent.prototype.localizationResource;
        /** @type {?} */
        TableEmptyMessageComponent.prototype.localizationProp;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/toast.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/toaster.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToasterService = /** @class */ (function () {
        function ToasterService() {
            this.toasts$ = new rxjs.ReplaySubject(1);
            this.lastId = -1;
            this.toasts = (/** @type {?} */ ([]));
        }
        /**
         * Creates an info toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        /**
         * Creates an info toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        ToasterService.prototype.info = /**
         * Creates an info toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'info', options);
        };
        /**
         * Creates a success toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        /**
         * Creates a success toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        ToasterService.prototype.success = /**
         * Creates a success toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'success', options);
        };
        /**
         * Creates a warning toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        /**
         * Creates a warning toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        ToasterService.prototype.warn = /**
         * Creates a warning toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'warning', options);
        };
        /**
         * Creates an error toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param options Spesific style or structural options for individual toast
         */
        /**
         * Creates an error toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        ToasterService.prototype.error = /**
         * Creates an error toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        function (message, title, options) {
            return this.show(message, title, 'error', options);
        };
        /**
         * Creates a toast with given parameters.
         * @param message Content of the toast
         * @param title Title of the toast
         * @param severity Sets color of the toast. "success", "warning" etc.
         * @param options Spesific style or structural options for individual toast
         */
        /**
         * Creates a toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} severity Sets color of the toast. "success", "warning" etc.
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        ToasterService.prototype.show = /**
         * Creates a toast with given parameters.
         * @param {?} message Content of the toast
         * @param {?=} title Title of the toast
         * @param {?=} severity Sets color of the toast. "success", "warning" etc.
         * @param {?=} options Spesific style or structural options for individual toast
         * @return {?}
         */
        function (message, title, severity, options) {
            if (title === void 0) { title = null; }
            if (severity === void 0) { severity = 'neutral'; }
            if (options === void 0) { options = (/** @type {?} */ ({})); }
            /** @type {?} */
            var id = ++this.lastId;
            this.toasts.push({
                message: message,
                title: title,
                severity: severity,
                options: __assign({ closable: true, id: id }, options),
            });
            this.toasts$.next(this.toasts);
            return id;
        };
        /**
         * Removes the toast with given id.
         * @param id ID of the toast to be removed.
         */
        /**
         * Removes the toast with given id.
         * @param {?} id ID of the toast to be removed.
         * @return {?}
         */
        ToasterService.prototype.remove = /**
         * Removes the toast with given id.
         * @param {?} id ID of the toast to be removed.
         * @return {?}
         */
        function (id) {
            this.toasts = this.toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            function (toast) { return snq((/**
             * @return {?}
             */
            function () { return toast.options.id; })) !== id; }));
            this.toasts$.next(this.toasts);
        };
        /**
         * Removes all open toasts at once.
         */
        /**
         * Removes all open toasts at once.
         * @param {?=} key
         * @return {?}
         */
        ToasterService.prototype.clear = /**
         * Removes all open toasts at once.
         * @param {?=} key
         * @return {?}
         */
        function (key) {
            this.toasts = !key
                ? []
                : this.toasts.filter((/**
                 * @param {?} toast
                 * @return {?}
                 */
                function (toast) { return snq((/**
                 * @return {?}
                 */
                function () { return toast.options.containerKey; })) !== key; }));
            this.toasts$.next(this.toasts);
        };
        ToasterService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ToasterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(); }, token: ToasterService, providedIn: "root" });
        return ToasterService;
    }());
    if (false) {
        /** @type {?} */
        ToasterService.prototype.toasts$;
        /**
         * @type {?}
         * @private
         */
        ToasterService.prototype.lastId;
        /**
         * @type {?}
         * @private
         */
        ToasterService.prototype.toasts;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast-container/toast-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastContainerComponent = /** @class */ (function () {
        function ToastContainerComponent(toastService) {
            this.toastService = toastService;
            this.toasts = (/** @type {?} */ ([]));
            this.right = '30px';
            this.bottom = '30px';
        }
        /**
         * @return {?}
         */
        ToastContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.toastService.toasts$.subscribe((/**
             * @param {?} toasts
             * @return {?}
             */
            function (toasts) {
                _this.toasts = _this.toastKey
                    ? toasts.filter((/**
                     * @param {?} t
                     * @return {?}
                     */
                    function (t) {
                        return t.options && t.options.containerKey !== _this.toastKey;
                    }))
                    : toasts;
            }));
        };
        /**
         * @param {?} index
         * @param {?} toast
         * @return {?}
         */
        ToastContainerComponent.prototype.trackByFunc = /**
         * @param {?} index
         * @param {?} toast
         * @return {?}
         */
        function (index, toast) {
            if (!toast)
                return null;
            return toast.options.id;
        };
        ToastContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-toast-container',
                        template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                        animations: [toastInOut],
                        styles: [".toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
                    }] }
        ];
        /** @nocollapse */
        ToastContainerComponent.ctorParameters = function () { return [
            { type: ToasterService }
        ]; };
        ToastContainerComponent.propDecorators = {
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            left: [{ type: core.Input }],
            toastKey: [{ type: core.Input }]
        };
        return ToastContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        ToastContainerComponent.prototype.toasts;
        /** @type {?} */
        ToastContainerComponent.prototype.top;
        /** @type {?} */
        ToastContainerComponent.prototype.right;
        /** @type {?} */
        ToastContainerComponent.prototype.bottom;
        /** @type {?} */
        ToastContainerComponent.prototype.left;
        /** @type {?} */
        ToastContainerComponent.prototype.toastKey;
        /**
         * @type {?}
         * @private
         */
        ToastContainerComponent.prototype.toastService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/table/table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
            var _this = this;
            this.bodyScrollLeft = 0;
            this.page = 1;
            this.trackingProp = 'id';
            this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
            this.pageChange = new core.EventEmitter();
            this.trackByFn = (/**
             * @param {?} _
             * @param {?} value
             * @return {?}
             */
            function (_, value) {
                return typeof value === 'object' ? value[_this.trackingProp] || value : value;
            });
        }
        Object.defineProperty(TableComponent.prototype, "totalRecords", {
            get: /**
             * @return {?}
             */
            function () {
                return this._totalRecords || this.value.length;
            },
            set: /**
             * @param {?} newValue
             * @return {?}
             */
            function (newValue) {
                if (newValue < 0)
                    this._totalRecords = 0;
                this._totalRecords = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.rows) {
                    return;
                }
                return Math.ceil(this.totalRecords / this.rows);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "slicedValue", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.rows || this.rows >= this.value.length) {
                    return this.value;
                }
                /** @type {?} */
                var start = (this.page - 1) * this.rows;
                return this.value.slice(start, start + this.rows);
            },
            enumerable: true,
            configurable: true
        });
        TableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-table',
                        template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <abp-pagination\r\n      *ngIf=\"rows\"\r\n      [totalPages]=\"totalPages\"\r\n      [(value)]=\"page\"\r\n      (valueChange)=\"pageChange.emit($event)\"\r\n    ></abp-pagination>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\">\r\n    <ng-container *ngIf=\"value && value.length; else emptyTemplate\">\r\n      <ng-template\r\n        #bodyTemplateWrapper\r\n        *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n        [ngTemplateOutlet]=\"bodyTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n      ></ng-template>\r\n    </ng-container>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <tr class=\"empty-row\" #emptyRow>\r\n    <div class=\"empty-row-content\" [style.width.px]=\"emptyRow.offsetWidth\">\r\n      {{ emptyMessage | abpLocalization }}\r\n    </div>\r\n  </tr>\r\n</ng-template>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["\n      .ui-table .ui-table-tbody > tr:nth-child(even):hover,\n      .ui-table .ui-table-tbody > tr:hover {\n        filter: brightness(90%);\n      }\n\n      .ui-table .ui-table-tbody > tr.empty-row:hover {\n        filter: none;\n      }\n\n      .ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {\n        padding: 10px;\n        text-align: center;\n      }\n    "]
                    }] }
        ];
        TableComponent.propDecorators = {
            value: [{ type: core.Input }],
            headerTemplate: [{ type: core.Input }],
            bodyTemplate: [{ type: core.Input }],
            colgroupTemplate: [{ type: core.Input }],
            scrollHeight: [{ type: core.Input }],
            scrollable: [{ type: core.Input }],
            rows: [{ type: core.Input }],
            page: [{ type: core.Input }],
            trackingProp: [{ type: core.Input }],
            emptyMessage: [{ type: core.Input }],
            pageChange: [{ type: core.Output }],
            wrapperRef: [{ type: core.ViewChild, args: ['wrapper', { read: core.ElementRef, static: false },] }],
            totalRecords: [{ type: core.Input }]
        };
        return TableComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TableComponent.prototype._totalRecords;
        /** @type {?} */
        TableComponent.prototype.bodyScrollLeft;
        /** @type {?} */
        TableComponent.prototype.value;
        /** @type {?} */
        TableComponent.prototype.headerTemplate;
        /** @type {?} */
        TableComponent.prototype.bodyTemplate;
        /** @type {?} */
        TableComponent.prototype.colgroupTemplate;
        /** @type {?} */
        TableComponent.prototype.scrollHeight;
        /** @type {?} */
        TableComponent.prototype.scrollable;
        /** @type {?} */
        TableComponent.prototype.rows;
        /** @type {?} */
        TableComponent.prototype.page;
        /** @type {?} */
        TableComponent.prototype.trackingProp;
        /** @type {?} */
        TableComponent.prototype.emptyMessage;
        /** @type {?} */
        TableComponent.prototype.pageChange;
        /** @type {?} */
        TableComponent.prototype.wrapperRef;
        /** @type {?} */
        TableComponent.prototype.trackByFn;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast/toast.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToastComponent = /** @class */ (function () {
        function ToastComponent(toastService, localizationService) {
            this.toastService = toastService;
            this.localizationService = localizationService;
        }
        Object.defineProperty(ToastComponent.prototype, "severityClass", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this.toast || !this.toast.severity)
                    return '';
                return "toast-" + this.toast.severity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ToastComponent.prototype, "iconClass", {
            get: /**
             * @return {?}
             */
            function () {
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
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ToastComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (snq((/**
             * @return {?}
             */
            function () { return _this.toast.options.sticky; })))
                return;
            /** @type {?} */
            var timeout = snq((/**
             * @return {?}
             */
            function () { return _this.toast.options.life; })) || 5000;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.close();
            }), timeout);
        };
        /**
         * @return {?}
         */
        ToastComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.toastService.remove(this.toast.options.id);
        };
        /**
         * @return {?}
         */
        ToastComponent.prototype.tap = /**
         * @return {?}
         */
        function () {
            if (this.toast.options && this.toast.options.tapToDismiss)
                this.close();
        };
        ToastComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-toast',
                        template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                        styles: [".toast{display:-ms-grid;display:grid;-ms-grid-columns:50px 1fr;grid-template-columns:50px 1fr;gap:10px;margin:5px 0;padding:10px;border-radius:0;width:350px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 10px -5px rgba(0,0,0,.4);z-index:9999;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px rgba(0,0,0,.4);opacity:1}.toast:hover{border:2px solid #e3e3e3;background-color:#e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{border:2px solid #51a351;background-color:#51a351;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-success:hover{border:2px solid #499249;background-color:#499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{border:2px solid #2f96b4;background-color:#2f96b4;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-info:hover{border:2px solid #2a85a0;background-color:#2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{border:2px solid #f89406;background-color:#f89406;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-warning:hover{border:2px solid #df8505;background-color:#df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{border:2px solid #bd362f;background-color:#bd362f;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-error:hover{border:2px solid #a9302a;background-color:#a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{display:flex;align-items:center;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:25px;border:none;border-radius:50%;background:0 0;color:inherit}.toast .toast-content .toast-close-button:focus{outline:0}.toast .toast-content .toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.toast .toast-content .toast-message{margin:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        ToastComponent.ctorParameters = function () { return [
            { type: ToasterService },
            { type: ng_core.LocalizationService }
        ]; };
        ToastComponent.propDecorators = {
            toast: [{ type: core.Input }]
        };
        return ToastComponent;
    }());
    if (false) {
        /** @type {?} */
        ToastComponent.prototype.toast;
        /**
         * @type {?}
         * @private
         */
        ToastComponent.prototype.toastService;
        /**
         * @type {?}
         * @private
         */
        ToastComponent.prototype.localizationService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/constants/styles.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 215px;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar {\n  height: 5px !important;\n  width: 5px !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.abp-ellipsis-inline {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-ellipsis {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ui-widget-overlay {\n  z-index: 1000;\n}\n\n.color-white {\n  color: #FFF !important;\n}\n\n.custom-checkbox > label {\n  cursor: pointer;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n.abp-collapsed-height {\n  -moz-transition: max-height linear 0.35s;\n  -ms-transition: max-height linear 0.35s;\n  -o-transition: max-height linear 0.35s;\n  -webkit-transition: max-height linear 0.35s;\n  overflow:hidden;\n  transition:max-height 0.35s linear;\n  height:auto;\n  max-height: 0;\n}\n\n.abp-mh-25 {\n  max-height: 25vh;\n}\n\n.abp-mh-50 {\n  transition:max-height 0.65s linear;\n  max-height: 50vh;\n}\n\n.abp-mh-75 {\n  transition:max-height 0.85s linear;\n  max-height: 75vh;\n}\n\n.abp-mh-100 {\n  transition:max-height 1s linear;\n  max-height: 100vh;\n}\n\n[class^=\"sorting\"] {\n  opacity: .3;\n  cursor: pointer;\n}\n[class^=\"sorting\"]:before {\n  right: 0.5rem;\n  content: \"\u2191\";\n}\n[class^=\"sorting\"]:after {\n  right: 0.5rem;\n  content: \"\u2193\";\n}\n\n.sorting_desc {\n  opacity: 1;\n}\n.sorting_desc:before {\n  opacity: .3;\n}\n\n.sorting_asc {\n  opacity: 1;\n}\n.sorting_asc:after {\n  opacity: .3;\n}\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/table-sort.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function TableSortOptions() { }
    if (false) {
        /** @type {?} */
        TableSortOptions.prototype.key;
        /** @type {?} */
        TableSortOptions.prototype.order;
    }
    var TableSortDirective = /** @class */ (function () {
        function TableSortDirective(abpTable, sortPipe, cdRef) {
            this.abpTable = abpTable;
            this.sortPipe = sortPipe;
            this.cdRef = cdRef;
            this.value = [];
        }
        Object.defineProperty(TableSortDirective.prototype, "table", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                return (this.abpTable || snq((/**
                 * @return {?}
                 */
                function () { return _this.cdRef['_view'].component; })) || snq((/**
                 * @return {?}
                 */
                function () { return _this.cdRef['context']; })) // 'context' for ivy
                );
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} __0
         * @return {?}
         */
        TableSortDirective.prototype.ngOnChanges = /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var value = _a.value, abpTableSort = _a.abpTableSort;
            if (this.table && (value || abpTableSort)) {
                this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
                this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
            }
        };
        TableSortDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[abpTableSort]',
                        providers: [ng_core.SortPipe],
                    },] }
        ];
        /** @nocollapse */
        TableSortDirective.ctorParameters = function () { return [
            { type: TableComponent, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.Self }] },
            { type: ng_core.SortPipe },
            { type: core.ChangeDetectorRef }
        ]; };
        TableSortDirective.propDecorators = {
            abpTableSort: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return TableSortDirective;
    }());
    if (false) {
        /** @type {?} */
        TableSortDirective.prototype.abpTableSort;
        /** @type {?} */
        TableSortDirective.prototype.value;
        /**
         * @type {?}
         * @private
         */
        TableSortDirective.prototype.abpTable;
        /**
         * @type {?}
         * @private
         */
        TableSortDirective.prototype.sortPipe;
        /**
         * @type {?}
         * @private
         */
        TableSortDirective.prototype.cdRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/handlers/error.handler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler(actions, store$1, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
            var _this = this;
            this.actions = actions;
            this.store = store$1;
            this.confirmationService = confirmationService;
            this.appRef = appRef;
            this.cfRes = cfRes;
            this.rendererFactory = rendererFactory;
            this.injector = injector;
            this.httpErrorConfig = httpErrorConfig;
            this.actions.pipe(store.ofActionSuccessful(ng_core.RestOccurError, routerPlugin.RouterError, routerPlugin.RouterDataResolved)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res instanceof ng_core.RestOccurError) {
                    var _a = res.payload, err_1 = _a === void 0 ? (/** @type {?} */ ({})) : _a;
                    /** @type {?} */
                    var body = snq((/**
                     * @return {?}
                     */
                    function () { return ((/** @type {?} */ (err_1))).error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
                    if (err_1 instanceof http.HttpErrorResponse && err_1.headers.get('_AbpErrorFormat')) {
                        /** @type {?} */
                        var confirmation$ = _this.showError(null, null, body);
                        if (err_1.status === 401) {
                            confirmation$.subscribe((/**
                             * @return {?}
                             */
                            function () {
                                _this.navigateToLogin();
                            }));
                        }
                    }
                    else {
                        switch (((/** @type {?} */ (err_1))).status) {
                            case 401:
                                _this.canCreateCustomError(401)
                                    ? _this.show401Page()
                                    : _this.showError({
                                        key: 'AbpAccount::DefaultErrorMessage401',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                    }, {
                                        key: 'AbpAccount::DefaultErrorMessage401Detail',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                    }).subscribe((/**
                                     * @return {?}
                                     */
                                    function () { return _this.navigateToLogin(); }));
                                break;
                            case 403:
                                _this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::DefaultErrorMessage403',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                                    },
                                    details: {
                                        key: 'AbpAccount::DefaultErrorMessage403Detail',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                                    },
                                    status: 403,
                                });
                                break;
                            case 404:
                                _this.canCreateCustomError(404)
                                    ? _this.show404Page()
                                    : _this.showError({
                                        key: 'AbpAccount::DefaultErrorMessage404',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                    }, {
                                        key: 'AbpAccount::DefaultErrorMessage404Detail',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                    });
                                break;
                            case 500:
                                _this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::500Message',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                                    },
                                    details: {
                                        key: 'AbpAccount::InternalServerErrorMessage',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                                    },
                                    status: 500,
                                });
                                break;
                            case 0:
                                if (((/** @type {?} */ (err_1))).statusText === 'Unknown Error') {
                                    _this.createErrorComponent({
                                        title: {
                                            key: 'AbpAccount::DefaultErrorMessage',
                                            defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                        },
                                    });
                                }
                                break;
                            default:
                                _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                                break;
                        }
                    }
                }
                else if (res instanceof routerPlugin.RouterError && snq((/**
                 * @return {?}
                 */
                function () { return res.event.error.indexOf('Cannot match') > -1; }), false)) {
                    _this.show404Page();
                }
                else if (res instanceof routerPlugin.RouterDataResolved && _this.componentRef) {
                    _this.componentRef.destroy();
                    _this.componentRef = null;
                }
            }));
        }
        /**
         * @private
         * @return {?}
         */
        ErrorHandler.prototype.show401Page = /**
         * @private
         * @return {?}
         */
        function () {
            this.createErrorComponent({
                title: {
                    key: 'AbpAccount::401Message',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                },
                status: 401,
            });
        };
        /**
         * @private
         * @return {?}
         */
        ErrorHandler.prototype.show404Page = /**
         * @private
         * @return {?}
         */
        function () {
            this.createErrorComponent({
                title: {
                    key: 'AbpAccount::404Message',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                },
                status: 404,
            });
        };
        /**
         * @private
         * @param {?=} message
         * @param {?=} title
         * @param {?=} body
         * @return {?}
         */
        ErrorHandler.prototype.showError = /**
         * @private
         * @param {?=} message
         * @param {?=} title
         * @param {?=} body
         * @return {?}
         */
        function (message, title, body) {
            if (body) {
                if (body.details) {
                    message = body.details;
                    title = body.message;
                }
                else {
                    message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
                }
            }
            return this.confirmationService.error(message, title, {
                hideCancelBtn: true,
                yesText: 'AbpAccount::Close',
            });
        };
        /**
         * @private
         * @return {?}
         */
        ErrorHandler.prototype.navigateToLogin = /**
         * @private
         * @return {?}
         */
        function () {
            this.store.dispatch(new routerPlugin.Navigate(['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(routerPlugin.RouterState.url) } }));
        };
        /**
         * @param {?} instance
         * @return {?}
         */
        ErrorHandler.prototype.createErrorComponent = /**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            var _this = this;
            /** @type {?} */
            var renderer = this.rendererFactory.createRenderer(null, null);
            /** @type {?} */
            var host = renderer.selectRootElement(document.body, true);
            this.componentRef = this.cfRes.resolveComponentFactory(HttpErrorWrapperComponent).create(this.injector);
            for (var key in this.componentRef.instance) {
                if (this.componentRef.instance.hasOwnProperty(key)) {
                    this.componentRef.instance[key] = instance[key];
                }
            }
            this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
            if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
                this.componentRef.instance.cfRes = this.cfRes;
                this.componentRef.instance.appRef = this.appRef;
                this.componentRef.instance.injector = this.injector;
                this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
            }
            this.appRef.attachView(this.componentRef.hostView);
            renderer.appendChild(host, ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]);
            /** @type {?} */
            var destroy$ = new rxjs.Subject();
            this.componentRef.instance.destroy$ = destroy$;
            destroy$.subscribe((/**
             * @return {?}
             */
            function () {
                _this.componentRef.destroy();
                _this.componentRef = null;
            }));
        };
        /**
         * @param {?} status
         * @return {?}
         */
        ErrorHandler.prototype.canCreateCustomError = /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            var _this = this;
            return snq((/**
             * @return {?}
             */
            function () {
                return _this.httpErrorConfig.errorScreen.component &&
                    _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
            }));
        };
        ErrorHandler.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ErrorHandler.ctorParameters = function () { return [
            { type: store.Actions },
            { type: store.Store },
            { type: ConfirmationService },
            { type: core.ApplicationRef },
            { type: core.ComponentFactoryResolver },
            { type: core.RendererFactory2 },
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: ['HTTP_ERROR_CONFIG',] }] }
        ]; };
        /** @nocollapse */ ErrorHandler.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(core.ɵɵinject(store.Actions), core.ɵɵinject(store.Store), core.ɵɵinject(ConfirmationService), core.ɵɵinject(core.ApplicationRef), core.ɵɵinject(core.ComponentFactoryResolver), core.ɵɵinject(core.RendererFactory2), core.ɵɵinject(core.INJECTOR), core.ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
        return ErrorHandler;
    }());
    if (false) {
        /** @type {?} */
        ErrorHandler.prototype.componentRef;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.actions;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.store;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.confirmationService;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.appRef;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.cfRes;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.rendererFactory;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        ErrorHandler.prototype.httpErrorConfig;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/tokens/http-error.token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?=} config
     * @return {?}
     */
    function httpErrorConfigFactory(config) {
        if (config === void 0) { config = (/** @type {?} */ ({})); }
        if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
            config.errorScreen.forWhichErrors = [401, 403, 404, 500];
        }
        return (/** @type {?} */ (__assign({ errorScreen: {} }, config)));
    }
    /** @type {?} */
    var HTTP_ERROR_CONFIG = new core.InjectionToken('HTTP_ERROR_CONFIG');

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/date-parser-formatter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function padNumber(value) {
        if (isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isNumber(value) {
        return !isNaN(toInteger(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function toInteger(value) {
        return parseInt("" + value, 10);
    }
    var DateParserFormatter = /** @class */ (function (_super) {
        __extends(DateParserFormatter, _super);
        function DateParserFormatter(datePipe) {
            var _this = _super.call(this) || this;
            _this.datePipe = datePipe;
            return _this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        DateParserFormatter.prototype.parse = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
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
        /**
         * @param {?} date
         * @return {?}
         */
        DateParserFormatter.prototype.format = /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (date && this.datePipe) {
                return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'shortDate');
            }
            else {
                return date
                    ? date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '')
                    : '';
            }
        };
        DateParserFormatter.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DateParserFormatter.ctorParameters = function () { return [
            { type: common.DatePipe, decorators: [{ type: core.Optional }] }
        ]; };
        return DateParserFormatter;
    }(ngBootstrap.NgbDateParserFormatter));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DateParserFormatter.prototype.datePipe;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/pagination/pagination.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent() {
            this._value = 1;
            this.valueChange = new core.EventEmitter();
            this.totalPages = 0;
            this.trackByFn = (/**
             * @param {?} _
             * @param {?} page
             * @return {?}
             */
            function (_, page) { return page; });
        }
        Object.defineProperty(PaginationComponent.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} newValue
             * @return {?}
             */
            function (newValue) {
                if (this._value === newValue)
                    return;
                this._value = newValue;
                this.valueChange.emit(newValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "pageArray", {
            get: /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** @type {?} */
                var count = this.totalPages < 5 ? this.totalPages : 5;
                if (this.value === 1 || this.value === 2) {
                    return Array.from(new Array(count)).map((/**
                     * @param {?} _
                     * @param {?} index
                     * @return {?}
                     */
                    function (_, index) { return index + 1; }));
                }
                else if (this.value === this.totalPages || this.value === this.totalPages - 1) {
                    return Array.from(new Array(count)).map((/**
                     * @param {?} _
                     * @param {?} index
                     * @return {?}
                     */
                    function (_, index) { return _this.totalPages - count + 1 + index; }));
                }
                else {
                    return [this.value - 2, this.value - 1, this.value, this.value + 1, this.value + 2];
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.value || this.value < 1 || this.value > this.totalPages) {
                this.value = 1;
            }
        };
        /**
         * @param {?} page
         * @return {?}
         */
        PaginationComponent.prototype.changePage = /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (page < 1)
                return;
            else if (page > this.totalPages)
                return;
            this.value = page;
        };
        PaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-pagination',
                        template: "<div\r\n  class=\"ui-paginator-bottom ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix\"\r\n>\r\n  <a\r\n    class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-backward\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(value - 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-left\"></span></a\r\n  ><span class=\"ui-paginator-pages\"\r\n    ><a\r\n      *ngFor=\"let page of pageArray; trackBy: trackByFn\"\r\n      (click)=\"changePage(page)\"\r\n      class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\r\n      [class.ui-state-active]=\"page === value\"\r\n      tabindex=\"0\"\r\n      >{{ page }}</a\r\n    ></span\r\n  ><a\r\n    class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(value + 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-right\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(totalPages)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-forward\"></span\r\n  ></a>\r\n</div>\r\n"
                    }] }
        ];
        PaginationComponent.propDecorators = {
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            totalPages: [{ type: core.Input }]
        };
        return PaginationComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PaginationComponent.prototype._value;
        /** @type {?} */
        PaginationComponent.prototype.valueChange;
        /** @type {?} */
        PaginationComponent.prototype.totalPages;
        /** @type {?} */
        PaginationComponent.prototype.trackByFn;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/loading/loading.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent() {
        }
        /**
         * @return {?}
         */
        LoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        LoadingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-loading',
                        template: "\n    <div class=\"abp-loading\">\n      <i class=\"fa fa-spinner fa-pulse abp-spinner\"></i>\n    </div>\n  ",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["\n      .abp-loading {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        z-index: 1040;\n      }\n\n      .abp-loading .abp-spinner {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        font-size: 14px;\n        -moz-transform: translateX(-50%) translateY(-50%);\n        -o-transform: translateX(-50%) translateY(-50%);\n        -ms-transform: translateX(-50%) translateY(-50%);\n        -webkit-transform: translateX(-50%) translateY(-50%);\n        transform: translateX(-50%) translateY(-50%);\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        LoadingComponent.ctorParameters = function () { return []; };
        return LoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/loading.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            get: /**
             * @return {?}
             */
            function () {
                return this._loading;
            },
            set: /**
             * @param {?} newValue
             * @return {?}
             */
            function (newValue) {
                var _this = this;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
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
                        .subscribe((/**
                     * @return {?}
                     */
                    function () {
                        if (!_this.componentRef) {
                            _this.componentRef = _this.cdRes
                                .resolveComponentFactory(LoadingComponent)
                                .create(_this.injector);
                        }
                        if (newValue && !_this.rootNode) {
                            _this.rootNode = ((/** @type {?} */ (_this.componentRef.hostView))).rootNodes[0];
                            _this.targetElement.appendChild(_this.rootNode);
                        }
                        else {
                            _this.renderer.removeChild(_this.rootNode.parentElement, _this.rootNode);
                            _this.rootNode = null;
                        }
                        _this._loading = newValue;
                        _this.timerSubscription = null;
                    }));
                }), 0);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LoadingDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.targetElement) {
                var _a = this.elRef.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
                if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                    this.targetElement = (/** @type {?} */ (this.elRef.nativeElement.children[0]));
                }
                else {
                    this.targetElement = this.elRef.nativeElement;
                }
            }
        };
        /**
         * @return {?}
         */
        LoadingDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.timerSubscription) {
                this.timerSubscription.unsubscribe();
            }
        };
        LoadingDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[abpLoading]' },] }
        ];
        /** @nocollapse */
        LoadingDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ViewContainerRef },
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: core.Renderer2 }
        ]; };
        LoadingDirective.propDecorators = {
            position: [{ type: core.HostBinding, args: ['style.position',] }],
            loading: [{ type: core.Input, args: ['abpLoading',] }],
            targetElement: [{ type: core.Input, args: ['abpLoadingTargetElement',] }],
            delay: [{ type: core.Input, args: ['abpLoadingDelay',] }]
        };
        return LoadingDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype._loading;
        /** @type {?} */
        LoadingDirective.prototype.position;
        /** @type {?} */
        LoadingDirective.prototype.targetElement;
        /** @type {?} */
        LoadingDirective.prototype.delay;
        /** @type {?} */
        LoadingDirective.prototype.componentRef;
        /** @type {?} */
        LoadingDirective.prototype.rootNode;
        /** @type {?} */
        LoadingDirective.prototype.timerSubscription;
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype.elRef;
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype.vcRef;
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype.cdRes;
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        LoadingDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/theme-shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function appendScript(injector) {
        /** @type {?} */
        var fn = (/**
         * @return {?}
         */
        function () {
            import('chart.js').then((/**
             * @return {?}
             */
            function () { return chartJsLoaded$.next(true); }));
            /** @type {?} */
            var lazyLoadService = injector.get(ng_core.LazyLoadService);
            return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
        });
        return fn;
    }
    var ThemeSharedModule = /** @class */ (function () {
        function ThemeSharedModule(errorHandler) {
            this.errorHandler = errorHandler;
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        ThemeSharedModule.forRoot = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            if (options === void 0) { options = (/** @type {?} */ ({})); }
            return {
                ngModule: ThemeSharedModule,
                providers: [
                    {
                        provide: core.APP_INITIALIZER,
                        multi: true,
                        deps: [core.Injector],
                        useFactory: appendScript,
                    },
                    { provide: messageservice.MessageService, useClass: messageservice.MessageService },
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
        ThemeSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_core.CoreModule, toast.ToastModule, core$1.NgxValidateCoreModule],
                        declarations: [
                            BreadcrumbComponent,
                            ButtonComponent,
                            ChartComponent,
                            ConfirmationComponent,
                            HttpErrorWrapperComponent,
                            LoaderBarComponent,
                            LoadingComponent,
                            ModalComponent,
                            PaginationComponent,
                            TableComponent,
                            TableEmptyMessageComponent,
                            ToastComponent,
                            ToastContainerComponent,
                            SortOrderIconComponent,
                            LoadingDirective,
                            TableSortDirective,
                        ],
                        exports: [
                            BreadcrumbComponent,
                            ButtonComponent,
                            ChartComponent,
                            ConfirmationComponent,
                            LoaderBarComponent,
                            LoadingComponent,
                            ModalComponent,
                            PaginationComponent,
                            TableComponent,
                            TableEmptyMessageComponent,
                            ToastComponent,
                            ToastContainerComponent,
                            SortOrderIconComponent,
                            LoadingDirective,
                            TableSortDirective,
                        ],
                        providers: [common.DatePipe],
                        entryComponents: [HttpErrorWrapperComponent, LoadingComponent],
                    },] }
        ];
        /** @nocollapse */
        ThemeSharedModule.ctorParameters = function () { return [
            { type: ErrorHandler }
        ]; };
        return ThemeSharedModule;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ThemeSharedModule.prototype.errorHandler;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/bounce.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/collapse.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var collapseY = animations.animation([
        animations.style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ height: '0', padding: '0px' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    /** @type {?} */
    var collapseYWithMargin = animations.animation([animations.style({ 'margin-top': '0' }), animations.animate('{{ time }} {{ easing }}', animations.style({ 'margin-top': '-100%' }))], {
        params: { time: '500ms', easing: 'ease' },
    });
    /** @type {?} */
    var collapseX = animations.animation([
        animations.style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ width: '0', padding: '0px' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    /** @type {?} */
    var expandY = animations.animation([
        animations.style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ height: '*', padding: '*' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    /** @type {?} */
    var expandYWithMargin = animations.animation([animations.style({ 'margin-top': '-100%' }), animations.animate('{{ time }} {{ easing }}', animations.style({ 'margin-top': '0' }))], {
        params: { time: '500ms', easing: 'ease' },
    });
    /** @type {?} */
    var expandX = animations.animation([
        animations.style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
        animations.animate('{{ time }} {{ easing }}', animations.style({ width: '*', padding: '*' })),
    ], { params: { time: '350ms', easing: 'ease' } });
    /** @type {?} */
    var collapse = animations.trigger('collapse', [
        animations.state('collapsed', animations.style({ height: '0', overflow: 'hidden' })),
        animations.state('expanded', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseY)),
        animations.transition('collapsed => expanded', animations.useAnimation(expandY)),
    ]);
    /** @type {?} */
    var collapseWithMargin = animations.trigger('collapseWithMargin', [
        animations.state('collapsed', animations.style({ 'margin-top': '-100%' })),
        animations.state('expanded', animations.style({ 'margin-top': '0' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseYWithMargin), {
            params: { time: '400ms', easing: 'linear' },
        }),
        animations.transition('collapsed => expanded', animations.useAnimation(expandYWithMargin)),
    ]);
    /** @type {?} */
    var collapseLinearWithMargin = animations.trigger('collapseLinearWithMargin', [
        animations.state('collapsed', animations.style({ 'margin-top': '-100%' })),
        animations.state('expanded', animations.style({ 'margin-top': '0' })),
        animations.transition('expanded => collapsed', animations.useAnimation(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
        animations.transition('collapsed => expanded', animations.useAnimation(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/slide.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slideFromBottom = animations.trigger('slideFromBottom', [
        animations.transition('* <=> *', [
            animations.style({ 'margin-top': '20px', opacity: '0' }),
            animations.animate('0.2s ease-out', animations.style({ opacity: '1', 'margin-top': '0px' })),
        ]),
    ]);

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/common.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function RootParams() { }
    if (false) {
        /** @type {?} */
        RootParams.prototype.httpErrorConfig;
    }
    /**
     * @record
     */
    function HttpErrorConfig() { }
    if (false) {
        /** @type {?|undefined} */
        HttpErrorConfig.prototype.errorScreen;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/confirmation.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Confirmation;
    (function (Confirmation) {
        /**
         * @record
         */
        function Options() { }
        Confirmation.Options = Options;
        if (false) {
            /** @type {?|undefined} */
            Options.prototype.id;
            /** @type {?|undefined} */
            Options.prototype.closable;
            /** @type {?|undefined} */
            Options.prototype.messageLocalizationParams;
            /** @type {?|undefined} */
            Options.prototype.titleLocalizationParams;
            /** @type {?|undefined} */
            Options.prototype.hideCancelBtn;
            /** @type {?|undefined} */
            Options.prototype.hideYesBtn;
            /** @type {?|undefined} */
            Options.prototype.cancelText;
            /** @type {?|undefined} */
            Options.prototype.yesText;
        }
        /**
         * @record
         */
        function DialogData() { }
        Confirmation.DialogData = DialogData;
        if (false) {
            /** @type {?} */
            DialogData.prototype.message;
            /** @type {?|undefined} */
            DialogData.prototype.title;
            /** @type {?|undefined} */
            DialogData.prototype.severity;
            /** @type {?|undefined} */
            DialogData.prototype.options;
        }
    })(Confirmation || (Confirmation = {}));

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/setting-management.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function SettingTab() { }
    if (false) {
        /** @type {?} */
        SettingTab.prototype.component;
        /** @type {?} */
        SettingTab.prototype.name;
        /** @type {?} */
        SettingTab.prototype.order;
        /** @type {?|undefined} */
        SettingTab.prototype.requiredPolicy;
    }
    /** @type {?} */
    var SETTING_TABS = (/** @type {?} */ ([]));
    /**
     * @param {?} tab
     * @return {?}
     */
    function addSettingTab(tab) {
        if (!Array.isArray(tab)) {
            tab = [tab];
        }
        SETTING_TABS.push.apply(SETTING_TABS, __spread(tab));
    }
    /**
     * @return {?}
     */
    function getSettingTabs() {
        return SETTING_TABS;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/statistics.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Statistics;
    (function (Statistics) {
        /**
         * @record
         */
        function Response() { }
        Statistics.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.data;
        }
        /**
         * @record
         */
        function Data() { }
        Statistics.Data = Data;
        /**
         * @record
         */
        function Filter() { }
        Statistics.Filter = Filter;
        if (false) {
            /** @type {?} */
            Filter.prototype.startDate;
            /** @type {?} */
            Filter.prototype.endDate;
        }
    })(Statistics || (Statistics = {}));

    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.ChartComponent = ChartComponent;
    exports.ConfirmationComponent = ConfirmationComponent;
    exports.ConfirmationService = ConfirmationService;
    exports.DateParserFormatter = DateParserFormatter;
    exports.LoaderBarComponent = LoaderBarComponent;
    exports.LoadingComponent = LoadingComponent;
    exports.LoadingDirective = LoadingDirective;
    exports.ModalComponent = ModalComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.SortOrderIconComponent = SortOrderIconComponent;
    exports.TableComponent = TableComponent;
    exports.TableEmptyMessageComponent = TableEmptyMessageComponent;
    exports.TableSortDirective = TableSortDirective;
    exports.ThemeSharedModule = ThemeSharedModule;
    exports.ToastComponent = ToastComponent;
    exports.ToasterService = ToasterService;
    exports.addSettingTab = addSettingTab;
    exports.appendScript = appendScript;
    exports.bounceIn = bounceIn;
    exports.chartJsLoaded$ = chartJsLoaded$;
    exports.collapse = collapse;
    exports.collapseLinearWithMargin = collapseLinearWithMargin;
    exports.collapseWithMargin = collapseWithMargin;
    exports.collapseX = collapseX;
    exports.collapseY = collapseY;
    exports.collapseYWithMargin = collapseYWithMargin;
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
    exports.getRandomBackgroundColor = getRandomBackgroundColor;
    exports.getSettingTabs = getSettingTabs;
    exports.slideFromBottom = slideFromBottom;
    exports.toastInOut = toastInOut;
    exports.ɵa = BreadcrumbComponent;
    exports.ɵb = ButtonComponent;
    exports.ɵba = DateParserFormatter;
    exports.ɵc = ChartComponent;
    exports.ɵd = ConfirmationComponent;
    exports.ɵe = ConfirmationService;
    exports.ɵf = HttpErrorWrapperComponent;
    exports.ɵg = LoaderBarComponent;
    exports.ɵh = LoadingComponent;
    exports.ɵi = ModalComponent;
    exports.ɵj = fadeAnimation;
    exports.ɵk = fadeIn;
    exports.ɵl = fadeOut;
    exports.ɵm = PaginationComponent;
    exports.ɵn = TableComponent;
    exports.ɵo = TableEmptyMessageComponent;
    exports.ɵp = ToastComponent;
    exports.ɵq = ToasterService;
    exports.ɵr = ToastContainerComponent;
    exports.ɵs = toastInOut;
    exports.ɵt = SortOrderIconComponent;
    exports.ɵu = LoadingDirective;
    exports.ɵv = TableSortDirective;
    exports.ɵw = ErrorHandler;
    exports.ɵy = httpErrorConfigFactory;
    exports.ɵz = HTTP_ERROR_CONFIG;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.theme.shared.umd.js.map
