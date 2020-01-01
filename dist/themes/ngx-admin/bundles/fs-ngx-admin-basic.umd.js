(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.basic'), require('@angular/core'), require('@fs/ngx-admin/shared'), require('@ngxs/store'), require('rxjs'), require('rxjs/operators'), require('@nebular/theme'), require('@fs/ngx-admin'), require('angular-oauth2-oidc'), require('@ngxs/router-plugin')) :
    typeof define === 'function' && define.amd ? define('@fs/ngx-admin/basic', ['exports', '@abp/ng.core', '@abp/ng.theme.basic', '@angular/core', '@fs/ngx-admin/shared', '@ngxs/store', 'rxjs', 'rxjs/operators', '@nebular/theme', '@fs/ngx-admin', 'angular-oauth2-oidc', '@ngxs/router-plugin'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ngx-admin'] = global.fs['ngx-admin'] || {}, global.fs['ngx-admin'].basic = {}), global.ng_core, global.ng_theme_basic, global.ng.core, global.fs['ngx-admin'].shared, global.store, global.rxjs, global.rxjs.operators, global.theme, global.fs['ngx-admin'], global.angularOauth2Oidc, global.routerPlugin));
}(this, (function (exports, ng_core, ng_theme_basic, core, shared, store, rxjs, operators, theme, ngxAdmin, angularOauth2Oidc, routerPlugin) { 'use strict';

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
     * Generated from: lib/components/application-layout/application-layout-menu.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MENU_ITEMS = [
        {
            title: 'E-commerce',
            icon: 'shopping-cart-outline',
            link: '/pages/dashboard',
            home: true,
        },
        {
            title: 'IoT Dashboard',
            icon: 'home-outline',
            link: '/pages/iot-dashboard',
        },
        {
            title: 'FEATURES',
            group: true,
        },
        {
            title: 'Layout',
            icon: 'layout-outline',
            children: [
                {
                    title: 'Stepper',
                    link: '/pages/layout/stepper',
                },
                {
                    title: 'List',
                    link: '/pages/layout/list',
                },
                {
                    title: 'Infinite List',
                    link: '/pages/layout/infinite-list',
                },
                {
                    title: 'Accordion',
                    link: '/pages/layout/accordion',
                },
                {
                    title: 'Tabs',
                    pathMatch: 'prefix',
                    link: '/pages/layout/tabs',
                },
            ],
        },
        {
            title: 'Forms',
            icon: 'edit-2-outline',
            children: [
                {
                    title: 'Form Inputs',
                    link: '/pages/forms/inputs',
                },
                {
                    title: 'Form Layouts',
                    link: '/pages/forms/layouts',
                },
                {
                    title: 'Buttons',
                    link: '/pages/forms/buttons',
                },
                {
                    title: 'Datepicker',
                    link: '/pages/forms/datepicker',
                },
            ],
        },
        {
            title: 'UI Features',
            icon: 'keypad-outline',
            link: '/pages/ui-features',
            children: [
                {
                    title: 'Grid',
                    link: '/pages/ui-features/grid',
                },
                {
                    title: 'Icons',
                    link: '/pages/ui-features/icons',
                },
                {
                    title: 'Typography',
                    link: '/pages/ui-features/typography',
                },
                {
                    title: 'Animated Searches',
                    link: '/pages/ui-features/search-fields',
                },
            ],
        },
        {
            title: 'Modal & Overlays',
            icon: 'browser-outline',
            children: [
                {
                    title: 'Dialog',
                    link: '/pages/modal-overlays/dialog',
                },
                {
                    title: 'Window',
                    link: '/pages/modal-overlays/window',
                },
                {
                    title: 'Popover',
                    link: '/pages/modal-overlays/popover',
                },
                {
                    title: 'Toastr',
                    link: '/pages/modal-overlays/toastr',
                },
                {
                    title: 'Tooltip',
                    link: '/pages/modal-overlays/tooltip',
                },
            ],
        },
        {
            title: 'Extra Components',
            icon: 'message-circle-outline',
            children: [
                {
                    title: 'Calendar',
                    link: '/pages/extra-components/calendar',
                },
                {
                    title: 'Progress Bar',
                    link: '/pages/extra-components/progress-bar',
                },
                {
                    title: 'Spinner',
                    link: '/pages/extra-components/spinner',
                },
                {
                    title: 'Alert',
                    link: '/pages/extra-components/alert',
                },
                {
                    title: 'Calendar Kit',
                    link: '/pages/extra-components/calendar-kit',
                },
                {
                    title: 'Chat',
                    link: '/pages/extra-components/chat',
                },
            ],
        },
        {
            title: 'Maps',
            icon: 'map-outline',
            children: [
                {
                    title: 'Google Maps',
                    link: '/pages/maps/gmaps',
                },
                {
                    title: 'Leaflet Maps',
                    link: '/pages/maps/leaflet',
                },
                {
                    title: 'Bubble Maps',
                    link: '/pages/maps/bubble',
                },
                {
                    title: 'Search Maps',
                    link: '/pages/maps/searchmap',
                },
            ],
        },
        {
            title: 'Charts',
            icon: 'pie-chart-outline',
            children: [
                {
                    title: 'Echarts',
                    link: '/pages/charts/echarts',
                },
                {
                    title: 'Charts.js',
                    link: '/pages/charts/chartjs',
                },
                {
                    title: 'D3',
                    link: '/pages/charts/d3',
                },
            ],
        },
        {
            title: 'Editors',
            icon: 'text-outline',
            children: [
                {
                    title: 'TinyMCE',
                    link: '/pages/editors/tinymce',
                },
                {
                    title: 'CKEditor',
                    link: '/pages/editors/ckeditor',
                },
            ],
        },
        {
            title: 'Tables & Data',
            icon: 'grid-outline',
            children: [
                {
                    title: 'Smart Table',
                    link: '/pages/tables/smart-table',
                },
                {
                    title: 'Tree Grid',
                    link: '/pages/tables/tree-grid',
                },
            ],
        },
        {
            title: 'Miscellaneous',
            icon: 'shuffle-2-outline',
            children: [
                {
                    title: '404',
                    link: '/pages/miscellaneous/404',
                },
            ],
        },
        {
            title: 'Auth',
            icon: 'lock-outline',
            children: [
                {
                    title: 'Login',
                    link: '/auth/login',
                },
                {
                    title: 'Register',
                    link: '/auth/register',
                },
                {
                    title: 'Request Password',
                    link: '/auth/request-password',
                },
                {
                    title: 'Reset Password',
                    link: '/auth/reset-password',
                },
            ],
        },
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/application-layout/application-layout.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApplicationLayoutComponent = /** @class */ (function () {
        function ApplicationLayoutComponent(localizationPipe, iconLibraries) {
            var _this = this;
            this.localizationPipe = localizationPipe;
            this.iconLibraries = iconLibraries;
            this.menu = MENU_ITEMS;
            this.iconLibraries.registerFontPack('fa', { packClass: 'fa' });
            this.routes$.pipe(operators.map((/**
             * @param {?} routes
             * @return {?}
             */
            function (routes) { return getVisibleRoutes(routes); }))).subscribe((/**
             * @param {?} routes
             * @return {?}
             */
            function (routes) {
                /** @type {?} */
                var result = [];
                routes.forEach((/**
                 * @param {?} first
                 * @return {?}
                 */
                function (first) {
                    /** @type {?} */
                    var group = {
                        title: _this.localizationPipe.transform(first.name),
                        group: true
                    };
                    result.push(group);
                    if (!first.children)
                        return;
                    first.children.forEach((/**
                     * @param {?} second
                     * @return {?}
                     */
                    function (second) {
                        if (!second.children || second.children.length === 0) { //left
                            //left
                            /** @type {?} */
                            var left = _this.createNbMenuItem(second);
                            result.push(left);
                            return;
                        }
                        if (second.children.length != 0) { //non left
                            //non left
                            /** @type {?} */
                            var node_1 = _this.createNbMenuItem(second);
                            node_1.children = [];
                            result.push(node_1);
                            second.children.forEach((/**
                             * @param {?} third
                             * @return {?}
                             */
                            function (third) {
                                /** @type {?} */
                                var left = _this.createNbMenuItem(third);
                                node_1.children.push(left);
                            }));
                        }
                    }));
                }));
                //this.menuService.clear();
                //this.menuService.add(result);
                _this.menu = result;
            }));
        }
        /**
         * @param {?} router
         * @return {?}
         */
        ApplicationLayoutComponent.prototype.createNbMenuItem = /**
         * @param {?} router
         * @return {?}
         */
        function (router) {
            /** @type {?} */
            var result = {
                title: this.localizationPipe.transform(router.name),
                link: router.url
            };
            if (!!router.iconClass) {
                /** @type {?} */
                var params = router.iconClass.split(' ');
                if (params.length === 1) {
                    result.icon = router.iconClass;
                    return result;
                }
                /** @type {?} */
                var pack = params[0];
                /** @type {?} */
                var iconName = params[1];
                result.icon = {
                    icon: iconName,
                    pack: pack
                };
            }
            return result;
        };
        ApplicationLayoutComponent.type = "application" /* application */;
        ApplicationLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-admin-layout-application',
                        template: "\n    <ngx-admin-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-admin-one-column-layout>\n  ",
                        styles: [".nb-theme-default :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@-webkit-keyframes fade{from{opacity:0}to{opacity:1}}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@keyframes fade{from{opacity:0}to{opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        ApplicationLayoutComponent.ctorParameters = function () { return [
            { type: ng_core.LocalizationPipe },
            { type: theme.NbIconLibraries }
        ]; };
        __decorate([
            store.Select(ng_core.ConfigState.getOne('routes')),
            __metadata("design:type", rxjs.Observable)
        ], ApplicationLayoutComponent.prototype, "routes$", void 0);
        return ApplicationLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        ApplicationLayoutComponent.type;
        /** @type {?} */
        ApplicationLayoutComponent.prototype.routes$;
        /** @type {?} */
        ApplicationLayoutComponent.prototype.menu;
        /**
         * @type {?}
         * @private
         */
        ApplicationLayoutComponent.prototype.localizationPipe;
        /**
         * @type {?}
         * @private
         */
        ApplicationLayoutComponent.prototype.iconLibraries;
    }
    /**
     * @param {?} routes
     * @return {?}
     */
    function getVisibleRoutes(routes) {
        return routes.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) {
            if (val.invisible)
                return acc;
            if (val.children && val.children.length) {
                val.children = getVisibleRoutes(val.children);
            }
            return __spread(acc, [val]);
        }), []);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/layouts/one-column/one-column.layout.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OneColumnLayoutComponent = /** @class */ (function () {
        function OneColumnLayoutComponent() {
        }
        OneColumnLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-admin-one-column-layout',
                        template: "\n    <nb-layout windowMode>\n      <nb-layout-header fixed>\n        <ngx-admin-header></ngx-admin-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
                    }] }
        ];
        return OneColumnLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/header/header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(sidebarService, menuService, themeService, userService, layoutService, breakpointService, store, oauthService) {
            this.sidebarService = sidebarService;
            this.menuService = menuService;
            this.themeService = themeService;
            this.userService = userService;
            this.layoutService = layoutService;
            this.breakpointService = breakpointService;
            this.store = store;
            this.oauthService = oauthService;
            this.tenant = (/** @type {?} */ ({}));
            this.destroy$ = new rxjs.Subject();
            this.userPictureOnly = false;
            this.themes = [
                {
                    value: 'default',
                    name: 'Light',
                },
                {
                    value: 'dark',
                    name: 'Dark',
                },
                {
                    value: 'cosmic',
                    name: 'Cosmic',
                },
                {
                    value: 'corporate',
                    name: 'Corporate',
                },
            ];
            this.currentTheme = 'default';
            this.userMenu = [{ title: 'Profile', link: '/account/manage-profile' }, { title: 'Log out' }];
            this.tenant =
                this.store.selectSnapshot(ng_core.SessionState.getTenant) ||
                    ((/** @type {?} */ ({})));
            this.tenantName = this.tenant.name || '.';
        }
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.menuService.onItemClick()
                .pipe(operators.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var tag = _a.tag;
                return tag === 'user-menu';
            })), operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var title = _a.item.title;
                return title;
            })))
                .subscribe((/**
             * @param {?} title
             * @return {?}
             */
            function (title) {
                switch (title) {
                    case "Log out":
                        _this.oauthService.logOut();
                        _this.store.dispatch(new routerPlugin.Navigate(['/'], null, {
                            state: { redirectUrl: _this.store.selectSnapshot(routerPlugin.RouterState).state.url },
                        }));
                        _this.store.dispatch(new ng_core.GetAppConfiguration());
                    default:
                }
            }));
            this.currentTheme = this.themeService.currentTheme;
            this.userService.getUsers()
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} users
             * @return {?}
             */
            function (users) { return _this.user = users.jack; }));
            var xl = this.breakpointService.getBreakpointsMap().xl;
            this.themeService.onMediaQueryChange()
                .pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), currentBreakpoint = _b[1];
                return currentBreakpoint.width < xl;
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} isLessThanXl
             * @return {?}
             */
            function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; }));
            this.themeService.onThemeChange()
                .pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var name = _a.name;
                return name;
            })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} themeName
             * @return {?}
             */
            function (themeName) { return _this.currentTheme = themeName; }));
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @param {?} themeName
         * @return {?}
         */
        HeaderComponent.prototype.changeTheme = /**
         * @param {?} themeName
         * @return {?}
         */
        function (themeName) {
            this.themeService.changeTheme(themeName);
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.toggleSidebar = /**
         * @return {?}
         */
        function () {
            this.sidebarService.toggle(true, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
        };
        /**
         * @return {?}
         */
        HeaderComponent.prototype.navigateHome = /**
         * @return {?}
         */
        function () {
            this.menuService.navigateHome();
            return false;
        };
        HeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-admin-header',
                        template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               nbContextMenuTag=\"user-menu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"tenantName+'/'+(currentUser$ | async)?.userName\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                    }] }
        ];
        /** @nocollapse */
        HeaderComponent.ctorParameters = function () { return [
            { type: theme.NbSidebarService },
            { type: theme.NbMenuService },
            { type: theme.NbThemeService },
            { type: ngxAdmin.UserData },
            { type: ngxAdmin.LayoutService },
            { type: theme.NbMediaBreakpointsService },
            { type: store.Store },
            { type: angularOauth2Oidc.OAuthService }
        ]; };
        __decorate([
            store.Select(ng_core.ConfigState.getOne('currentUser')),
            __metadata("design:type", rxjs.Observable)
        ], HeaderComponent.prototype, "currentUser$", void 0);
        return HeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        HeaderComponent.prototype.currentUser$;
        /** @type {?} */
        HeaderComponent.prototype.tenant;
        /** @type {?} */
        HeaderComponent.prototype.tenantName;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.destroy$;
        /** @type {?} */
        HeaderComponent.prototype.userPictureOnly;
        /** @type {?} */
        HeaderComponent.prototype.user;
        /** @type {?} */
        HeaderComponent.prototype.themes;
        /** @type {?} */
        HeaderComponent.prototype.currentTheme;
        /** @type {?} */
        HeaderComponent.prototype.userMenu;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.sidebarService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.menuService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.themeService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.userService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.layoutService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.breakpointService;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        HeaderComponent.prototype.oauthService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/account-layout/account-layout.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AccountLayoutComponent = /** @class */ (function () {
        function AccountLayoutComponent() {
        }
        // required for dynamic component
        AccountLayoutComponent.type = "account" /* account */;
        AccountLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-admin-layout-account',
                        template: "\n    <nb-layout>\n      <nb-layout-column>\n        <nb-card>\n          <nb-card-header>\n            <nav class=\"navigation\">\n              <a href=\"#\" class=\"link back-link\" aria-label=\"Back\">\n                <nb-icon icon=\"arrow-back\"></nb-icon>\n              </a>\n            </nav>\n          </nb-card-header>\n          <nb-card-body>\n            <nb-auth-block>\n              <router-outlet></router-outlet>\n            </nb-auth-block>\n          </nb-card-body>\n        </nb-card>\n      </nb-layout-column>\n    </nb-layout>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  ",
                        styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"]
                    }] }
        ];
        return AccountLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        AccountLayoutComponent.type;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/empty-layout/empty-layout.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmptyLayoutComponent = /** @class */ (function () {
        function EmptyLayoutComponent() {
        }
        EmptyLayoutComponent.type = "empty" /* empty */;
        EmptyLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-admin-layout-empty',
                        template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  "
                    }] }
        ];
        return EmptyLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        EmptyLayoutComponent.type;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-admin-basic.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
    var NgxAdminBasicModule = /** @class */ (function () {
        function NgxAdminBasicModule() {
        }
        NgxAdminBasicModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread([
                            HeaderComponent,
                            OneColumnLayoutComponent
                        ], LAYOUTS),
                        imports: [
                            //abp
                            ng_core.CoreModule,
                            ng_theme_basic.ThemeBasicModule,
                            //ngx-admin
                            shared.NgxAdminSharedModule,
                            theme.NbUserModule
                        ],
                        exports: __spread([
                            //abp
                            ng_core.CoreModule,
                            ng_theme_basic.ThemeBasicModule,
                            //ngx-admin
                            shared.NgxAdminSharedModule
                        ], LAYOUTS),
                        entryComponents: __spread(LAYOUTS),
                    },] }
        ];
        return NgxAdminBasicModule;
    }());

    exports.AccountLayoutComponent = AccountLayoutComponent;
    exports.ApplicationLayoutComponent = ApplicationLayoutComponent;
    exports.LAYOUTS = LAYOUTS;
    exports.NgxAdminBasicModule = NgxAdminBasicModule;
    exports.ɵa = EmptyLayoutComponent;
    exports.ɵb = HeaderComponent;
    exports.ɵc = OneColumnLayoutComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ngx-admin-basic.umd.js.map
