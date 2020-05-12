import { ConfigStateService, LocalizationPipe, ConfigState, SessionState, SetLanguage, GetAppConfiguration, CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Inject, ComponentFactoryResolver, ElementRef, Renderer2, ViewChild, ViewContainerRef, HostBinding, Input, HostListener, NgModule } from '@angular/core';
import { __decorate, __metadata, __assign, __spread } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { RouteConfigLoadStart, NavigationError, NavigationCancel, NavigationEnd, RouteConfigLoadEnd, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { deepCopy, copy, LazyService, updateHostClass } from '@delon/util';
import { SettingsService, MenuService } from '@delon/theme';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';
import { Select, Store } from '@ngxs/store';
import * as screenfull from 'screenfull';
import snq from 'snq';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, RouterState } from '@ngxs/router-plugin';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/setting-drawer/setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ALAINDEFAULTVAR = 'alain-default-vars';
/** @type {?} */
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
/** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this.settingSrv.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "cachedData", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingDrawerComponent.prototype, "DEFAULT_PRIMARY", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return DEFAULT_VARS['primary-color'].default;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SettingDrawerComponent.prototype.loadLess = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var lessConfigNode = _this.doc.createElement('script');
            lessConfigNode.innerHTML = "\n          window.less = {\n            async: true,\n            env: 'production',\n            javascriptEnabled: true\n          };\n        ";
            _this.doc.body.appendChild(lessConfigNode);
        }))
            .then((/**
         * @return {?}
         */
        function () { return _this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'); }))
            .then((/**
         * @return {?}
         */
        function () {
            _this.loadedLess = true;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SettingDrawerComponent.prototype.genVars = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, data = _b.data, color = _b.color, validKeys = _b.validKeys;
        /** @type {?} */
        var vars = (_a = {},
            _a["@primary-color"] = color,
            _a);
        validKeys.filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key !== 'primary-color'; })).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (vars["@" + key] = data[key].value); }));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    };
    /**
     * @private
     * @return {?}
     */
    SettingDrawerComponent.prototype.runLess = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, zone = _a.zone, msg = _a.msg, cdr = _a.cdr;
        /** @type {?} */
        var msgId = msg.loading("\u6B63\u5728\u7F16\u8BD1\u4E3B\u9898\uFF01", { nzDuration: 0 }).messageId;
        setTimeout((/**
         * @return {?}
         */
        function () {
            zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.loadLess().then((/**
                 * @return {?}
                 */
                function () {
                    ((/** @type {?} */ (window))).less.modifyVars(_this.genVars()).then((/**
                     * @return {?}
                     */
                    function () {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run((/**
                         * @return {?}
                         */
                        function () { return cdr.detectChanges(); }));
                    }));
                }));
            }));
        }), 200);
    };
    /**
     * @return {?}
     */
    SettingDrawerComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.collapse = !this.collapse;
    };
    /**
     * @param {?} color
     * @return {?}
     */
    SettingDrawerComponent.prototype.changeColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var _this = this;
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return DEFAULT_VARS[key].default === '@primary-color'; }))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return delete _this.cachedData["@" + key]; }));
        this.resetData(this.cachedData, false);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    SettingDrawerComponent.prototype.setLayout = /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    function (name, value) {
        this.settingSrv.setLayout(name, value);
    };
    /**
     * @private
     * @param {?=} nowData
     * @param {?=} run
     * @return {?}
     */
    SettingDrawerComponent.prototype.resetData = /**
     * @private
     * @param {?=} nowData
     * @param {?=} run
     * @return {?}
     */
    function (nowData, run) {
        var _this = this;
        if (run === void 0) { run = true; }
        nowData = nowData || {};
        /** @type {?} */
        var data = deepCopy(DEFAULT_VARS);
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var value = (/** @type {?} */ (nowData))["@" + key] || data[key].default || '';
            data[key].value = value === "@primary-color" ? _this.color : value;
        }));
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    };
    Object.defineProperty(SettingDrawerComponent.prototype, "validKeys", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return Object.keys(this.data).filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.data[key].value !== _this.data[key].default; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SettingDrawerComponent.prototype.apply = /**
     * @return {?}
     */
    function () {
        this.runLess();
    };
    /**
     * @return {?}
     */
    SettingDrawerComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    };
    /**
     * @return {?}
     */
    SettingDrawerComponent.prototype.copyVar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vars = this.genVars();
        /** @type {?} */
        var copyContent = Object.keys(vars)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key + ": " + vars[key] + ";"; }))
            .join('\n');
        copy(copyContent);
        this.msg.success('Copy success');
    };
    SettingDrawerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'setting-drawer',
                    template: "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\r\n      <span\r\n        *ngFor=\"let c of colors\"\r\n        nz-tooltip\r\n        [ngStyle]=\"{ 'background-color': c.color }\"\r\n        (click)=\"changeColor(c.color)\"\r\n        nz-tooltip\r\n        [nzTitle]=\"c.key\"\r\n        class=\"setting-drawer__theme-tag\"\r\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\r\n      ></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"\u9876\u90E8\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5176\u5B83\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.fixed\"\r\n          (ngModelChange)=\"setLayout('fixed', layout.fixed)\"\r\n        ></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u8272\u5F31\u6A21\u5F0F\r\n        <nz-switch\r\n          nzSize=\"small\"\r\n          [(ngModel)]=\"layout.colorWeak\"\r\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\r\n        ></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\r\n    <nz-alert\r\n      class=\"mt-md\"\r\n      nzType=\"warning\"\r\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\r\n    ></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\r\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\r\n</div>\r\n",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.setting-drawer]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SettingDrawerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzMessageService },
        { type: SettingsService },
        { type: LazyService },
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return SettingDrawerComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.loadedLess;
    /** @type {?} */
    SettingDrawerComponent.prototype.collapse;
    /** @type {?} */
    SettingDrawerComponent.prototype.data;
    /** @type {?} */
    SettingDrawerComponent.prototype.color;
    /** @type {?} */
    SettingDrawerComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.msg;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.settingSrv;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.lazy;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/default.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, _message, resolver, settings, el, renderer, doc) {
        var _this = this;
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            if (!_this.isFetching && evt instanceof RouteConfigLoadStart) {
                _this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                _this.isFetching = false;
                if (evt instanceof NavigationError) {
                    _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (_this.isFetching) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.isFetching = false;
                }), 100);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    LayoutDefaultComponent.prototype.setClass = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, doc = _b.doc, renderer = _b.renderer, settings = _b.settings;
        /** @type {?} */
        var layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, (_a = {},
            _a['alain-default'] = true,
            _a["alain-default__fixed"] = layout.fixed,
            _a["alain-default__collapsed"] = layout.collapsed,
            _a));
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Setting componet for only developer
        if (true) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var settingFactory = _this.resolver.resolveComponentFactory(SettingDrawerComponent);
                _this.settingHost.createComponent(settingFactory);
            }), 22);
        }
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, settings = _a.settings, unsubscribe$ = _a.unsubscribe$;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.setClass(); }));
        this.setClass();
    };
    /**
     * @return {?}
     */
    LayoutDefaultComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    LayoutDefaultComponent.type = "application" /* application */;
    LayoutDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-default',
                    template: "<div class=\"alain-default__progress-bar\" *ngIf=\"isFetching\"></div>\r\n<layout-header class=\"alain-default__header\"></layout-header>\r\n<layout-sidebar class=\"alain-default__aside\"></layout-sidebar>\r\n<section class=\"alain-default__content\">\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<ng-template #settingHost></ng-template>\r\n"
                }] }
    ];
    /** @nocollapse */
    LayoutDefaultComponent.ctorParameters = function () { return [
        { type: Router },
        { type: NzMessageService },
        { type: ComponentFactoryResolver },
        { type: SettingsService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LayoutDefaultComponent.propDecorators = {
        settingHost: [{ type: ViewChild, args: ['settingHost', { read: ViewContainerRef, static: true },] }]
    };
    return LayoutDefaultComponent;
}());
if (false) {
    /** @type {?} */
    LayoutDefaultComponent.type;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.settingHost;
    /** @type {?} */
    LayoutDefaultComponent.prototype.isFetching;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/fullscreen/fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent.type = "empty" /* empty */;
    LayoutFullScreenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-fullscreen',
                    template: "<router-outlet></router-outlet>\r\n",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.alain-fullscreen]': 'true',
                    }
                }] }
    ];
    return LayoutFullScreenComponent;
}());
if (false) {
    /** @type {?} */
    LayoutFullScreenComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.toggleCollapsedSidebar = /**
     * @return {?}
     */
    function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.searchToggleChange = /**
     * @return {?}
     */
    function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-header',
                    template: "<div class=\"alain-default__header-logo\">\r\n  <a [routerLink]=\"['/']\" class=\"alain-default__header-logo-link\">\r\n    <img\r\n      class=\"alain-default__header-logo-expanded\"\r\n      src=\"./assets/logo-full.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:40px;\"\r\n    />\r\n    <img\r\n      class=\"alain-default__header-logo-collapsed\"\r\n      src=\"./assets/logo.svg\"\r\n      alt=\"{{ settings.app.name }}\"\r\n      style=\"max-height:30px;\"\r\n    />\r\n  </a>\r\n</div>\r\n<div class=\"alain-default__nav-wrap\">\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"alain-default__nav-item\" (click)=\"toggleCollapsedSidebar()\">\r\n        <i nz-icon nzType=\"menu-{{ settings.layout.collapsed ? 'unfold' : 'fold' }}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <!--<li>\r\n      <a class=\"alain-default__nav-item\" href=\"//github.com/ng-alain/ng-alain\" target=\"_blank\">\r\n        <i nz-icon nzType=\"github\"></i>\r\n      </a>\r\n    </li>-->\r\n    <!-- Lock Page -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <div class=\"alain-default__nav-item\" routerLink=\"/passport/lock\">\r\n        <i nz-icon nzType=\"lock\"></i>\r\n      </div>\r\n    </li>-->\r\n    <!-- Search Button -->\r\n    <!--<li class=\"hidden-pc\" (click)=\"searchToggleChange()\">\r\n      <div class=\"alain-default__nav-item\">\r\n        <i nz-icon nzType=\"search\"></i>\r\n      </div>\r\n    </li>-->\r\n  </ul>\r\n  <!--<header-search class=\"alain-default__search\" [toggleChange]=\"searchToggleStatus\"></header-search>-->\r\n  <ul class=\"alain-default__nav\">\r\n    <!-- Notify -->\r\n    <!--<li>\r\n      <header-notify></header-notify>\r\n    </li>-->\r\n    <!-- Task -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-task></header-task>\r\n    </li>-->\r\n    <!-- App Icons -->\r\n    <!--<li class=\"hidden-mobile\">\r\n      <header-icon></header-icon>\r\n    </li>-->\r\n    <!-- Settings -->\r\n    <li class=\"hidden-mobile\">\r\n      <div\r\n        class=\"alain-default__nav-item\"\r\n        nz-dropdown\r\n        [nzDropdownMenu]=\"settingsMenu\"\r\n        nzTrigger=\"click\"\r\n        nzPlacement=\"bottomRight\"\r\n      >\r\n        <i nz-icon nzType=\"setting\"></i>\r\n      </div>\r\n      <nz-dropdown-menu #settingsMenu=\"nzDropdownMenu\">\r\n        <div nz-menu style=\"width:200px;\">\r\n          <!--<div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div>-->\r\n          <div nz-menu-item>\r\n            <header-i18n></header-i18n>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown-menu>\r\n    </li>\r\n    <li class=\"hidden-mobile\">\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: SettingsService }
    ]; };
    return HeaderComponent;
}());
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.searchToggleStatus;
    /** @type {?} */
    HeaderComponent.prototype.settings;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/sidebar/sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(configStateService, settings, menuService, localizationPipe) {
        var _this = this;
        this.configStateService = configStateService;
        this.settings = settings;
        this.menuService = menuService;
        this.localizationPipe = localizationPipe;
        this.auth$.pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var routes = _this.configStateService.getOne('routes');
            _this.setMenu(routes);
        }))).subscribe();
    }
    /**
     * @param {?} routes
     * @return {?}
     */
    SidebarComponent.prototype.setMenu = /**
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        var _this = this;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var condition = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !!!x.invisible && _this.isGrantedPolicy(x.requiredPolicy); });
        routes.filter(condition).forEach((/**
         * @param {?} first
         * @return {?}
         */
        function (first) {
            /** @type {?} */
            var group = {
                text: _this.localizationPipe.transform(first.name),
                group: true,
                hideInBreadcrumb: true,
                children: []
            };
            result.push(group);
            first.children.filter(condition).forEach((/**
             * @param {?} second
             * @return {?}
             */
            function (second) {
                if (second.children.length === 0) {
                    /** @type {?} */
                    var left = {
                        text: _this.localizationPipe.transform(second.name),
                        link: second.url,
                        icon: second.iconClass
                    };
                    if (left.link.split('/').length > 2)
                        group.children.push(left);
                }
                if (second.children.length != 0) {
                    /** @type {?} */
                    var node_1 = {
                        text: _this.localizationPipe.transform(second.name),
                        icon: second.iconClass,
                        children: []
                    };
                    group.children.push(node_1);
                    second.children.filter(condition).forEach((/**
                     * @param {?} third
                     * @return {?}
                     */
                    function (third) {
                        /** @type {?} */
                        var left = {
                            text: _this.localizationPipe.transform(third.name),
                            link: third.url,
                            icon: third.iconClass
                        };
                        node_1.children.push(left);
                    }));
                }
            }));
        }));
        this.menuService.clear();
        this.menuService.add(result);
    };
    /**
     * @param {?} requiredPolicy
     * @return {?}
     */
    SidebarComponent.prototype.isGrantedPolicy = /**
     * @param {?} requiredPolicy
     * @return {?}
     */
    function (requiredPolicy) {
        if (!!requiredPolicy) {
            return this.configStateService.getGrantedPolicy(requiredPolicy);
        }
        return true;
    };
    SidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-sidebar',
                    template: "<div class=\"alain-default__aside-inner\">\r\n  <!--<div nz-dropdown nzTrigger=\"click\" [nzDropdownMenu]=\"userMenu\" class=\"alain-default__aside-user\">\r\n    <nz-avatar class=\"alain-default__aside-user-avatar\" [nzSrc]=\"settings.user.avatar\"></nz-avatar>\r\n    <div class=\"alain-default__aside-user-info\">\r\n      <strong>{{ settings.user.name }}</strong>\r\n      <p class=\"mb0\">{{ settings.user.email }}</p>\r\n    </div>\r\n  </div>\r\n  <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n    <ul nz-menu>\r\n      <li nz-menu-item routerLink=\"/pro/account/center\">{{ 'menu.account.center' | translate }}</li>\r\n      <li nz-menu-item routerLink=\"/pro/account/settings\">{{ 'menu.account.settings' | translate }}</li>\r\n    </ul>\r\n  </nz-dropdown-menu>-->\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SidebarComponent.ctorParameters = function () { return [
        { type: ConfigStateService },
        { type: SettingsService },
        { type: MenuService },
        { type: LocalizationPipe }
    ]; };
    __decorate([
        Select(ConfigState.getOne('auth')),
        __metadata("design:type", Observable)
    ], SidebarComponent.prototype, "auth$", void 0);
    return SidebarComponent;
}());
if (false) {
    /** @type {?} */
    SidebarComponent.prototype.auth$;
    /** @type {?} */
    SidebarComponent.prototype.configStateService;
    /** @type {?} */
    SidebarComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    SidebarComponent.prototype.localizationPipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.qIpt.focus(); }), 300);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.qIpt = (/** @type {?} */ (((/** @type {?} */ (this.el.nativeElement))).querySelector('.ant-input')));
    };
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.qFocus = /**
     * @return {?}
     */
    function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    HeaderSearchComponent.prototype.qBlur = /**
     * @return {?}
     */
    function () {
        this.focus = false;
        this.searchToggled = false;
    };
    HeaderSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-search',
                    template: "\n    <nz-input-group [nzAddOnBeforeIcon]=\"focus ? 'arrow-down' : 'search'\">\n      <input\n        nz-input\n        [(ngModel)]=\"q\"\n        (focus)=\"qFocus()\"\n        (blur)=\"qBlur()\"\n        [placeholder]=\"'menu.search.placeholder' | translate\"\n      />\n    </nz-input-group>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderSearchComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HeaderSearchComponent.propDecorators = {
        focus: [{ type: HostBinding, args: ['class.alain-default__search-focus',] }],
        searchToggled: [{ type: HostBinding, args: ['class.alain-default__search-toggled',] }],
        toggleChange: [{ type: Input }]
    };
    return HeaderSearchComponent;
}());
if (false) {
    /** @type {?} */
    HeaderSearchComponent.prototype.q;
    /** @type {?} */
    HeaderSearchComponent.prototype.qIpt;
    /** @type {?} */
    HeaderSearchComponent.prototype.focus;
    /** @type {?} */
    HeaderSearchComponent.prototype.searchToggled;
    /**
     * @type {?}
     * @private
     */
    HeaderSearchComponent.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/notify.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg, cdr) {
        this.msg = msg;
        this.cdr = cdr;
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
    /**
     * @private
     * @param {?} notices
     * @return {?}
     */
    HeaderNotifyComponent.prototype.updateNoticeData = /**
     * @private
     * @param {?} notices
     * @return {?}
     */
    function (notices) {
        /** @type {?} */
        var data = this.data.slice();
        data.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.list = []); }));
        notices.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var newItem = __assign({}, item);
            // if (newItem.datetime)
            //  newItem.datetime = distanceInWordsToNow(item.datetime!, {
            //    locale: (window as any).__locale__,
            //  });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            (/** @type {?} */ (data.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.title === newItem.type; })))).list.push(newItem);
        }));
        return data;
    };
    /**
     * @return {?}
     */
    HeaderNotifyComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
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
            _this.cdr.detectChanges();
        }), 1000);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    HeaderNotifyComponent.prototype.clear = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    /**
     * @param {?} res
     * @return {?}
     */
    HeaderNotifyComponent.prototype.select = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-notify',
                    template: "\n    <notice-icon\n      [data]=\"data\"\n      [count]=\"count\"\n      [loading]=\"loading\"\n      btnClass=\"alain-default__nav-item\"\n      btnIconClass=\"alain-default__nav-item-icon\"\n      (select)=\"select($event)\"\n      (clear)=\"clear($event)\"\n      (popoverVisibleChange)=\"loadData()\"\n    ></notice-icon>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderNotifyComponent.ctorParameters = function () { return [
        { type: NzMessageService },
        { type: ChangeDetectorRef }
    ]; };
    return HeaderNotifyComponent;
}());
if (false) {
    /** @type {?} */
    HeaderNotifyComponent.prototype.data;
    /** @type {?} */
    HeaderNotifyComponent.prototype.count;
    /** @type {?} */
    HeaderNotifyComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderNotifyComponent.prototype.msg;
    /**
     * @type {?}
     * @private
     */
    HeaderNotifyComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/task.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    HeaderTaskComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }), 500);
    };
    HeaderTaskComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-task',
                    template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"taskMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <nz-badge [nzDot]=\"true\">\n        <i nz-icon nzType=\"bell\" class=\"alain-default__nav-item-icon\"></i>\n      </nz-badge>\n    </div>\n    <nz-dropdown-menu #taskMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-lg\">\n        <div *ngIf=\"loading\" class=\"mx-lg p-lg\"><nz-spin></nz-spin></div>\n        <nz-card *ngIf=\"!loading\" nzTitle=\"Notifications\" nzBordered=\"false\" class=\"ant-card__body-nopadding\">\n          <ng-template #extra><i nz-icon nzType=\"plus\"></i></ng-template>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>cipchk</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u306F\u306A\u3055\u304D</strong>\n              <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>\u82CF\u5148\u751F</strong>\n              <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Kent</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div\n            nz-row\n            [nzType]=\"'flex'\"\n            [nzJustify]=\"'center'\"\n            [nzAlign]=\"'middle'\"\n            class=\"py-sm bg-grey-lighter-h point\"\n          >\n            <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n              <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n            </div>\n            <div nz-col [nzSpan]=\"20\">\n              <strong>Jefferson</strong>\n              <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n            </div>\n          </div>\n          <div nz-row>\n            <div nz-col [nzSpan]=\"24\" class=\"pt-md border-top-1 text-center text-grey point\">\n              See All\n            </div>\n          </div>\n        </nz-card>\n      </div>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderTaskComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return HeaderTaskComponent;
}());
if (false) {
    /** @type {?} */
    HeaderTaskComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderTaskComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    HeaderIconComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }), 500);
    };
    HeaderIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-icon',
                    template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"iconMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <i nz-icon nzType=\"appstore\"></i>\n    </div>\n    <nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-xl animated jello\">\n        <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"calendar\" class=\"bg-error text-white\"></i>\n              <small>Calendar</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"file\" class=\"bg-geekblue text-white\"></i>\n              <small>Files</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"cloud\" class=\"bg-success text-white\"></i>\n              <small>Cloud</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"star\" class=\"bg-magenta text-white\"></i>\n              <small>Star</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"team\" class=\"bg-purple text-white\"></i>\n              <small>Team</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"scan\" class=\"bg-warning text-white\"></i>\n              <small>QR</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"pay-circle\" class=\"bg-cyan text-white\"></i>\n              <small>Pay</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"printer\" class=\"bg-grey text-white\"></i>\n              <small>Print</small>\n            </div>\n          </div>\n        </nz-spin>\n      </div>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderIconComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return HeaderIconComponent;
}());
if (false) {
    /** @type {?} */
    HeaderIconComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderIconComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/fullscreen.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    Object.defineProperty(HeaderFullScreenComponent.prototype, "sf", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (screenfull));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HeaderFullScreenComponent.prototype._resize = /**
     * @return {?}
     */
    function () {
        this.status = this.sf.isFullscreen;
    };
    /**
     * @return {?}
     */
    HeaderFullScreenComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    };
    HeaderFullScreenComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-fullscreen',
                    template: "\n    <i nz-icon [nzType]=\"status ? 'fullscreen-exit' : 'fullscreen'\"></i>\n    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}\n  ",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.d-block]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    HeaderFullScreenComponent.propDecorators = {
        _resize: [{ type: HostListener, args: ['window:resize',] }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return HeaderFullScreenComponent;
}());
if (false) {
    /** @type {?} */
    HeaderFullScreenComponent.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/i18n.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderI18nComponent = /** @class */ (function () {
    function HeaderI18nComponent(store) {
        this.store = store;
    }
    Object.defineProperty(HeaderI18nComponent.prototype, "selectedLangCulture", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(SessionState.getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "defaultLanguage$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages.find((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) { return lang.cultureName === _this.selectedLangCulture; })).displayName; })); }), ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "dropdownLanguages$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages; }), []); })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} cultureName
     * @return {?}
     */
    HeaderI18nComponent.prototype.onChangeLang = /**
     * @param {?} cultureName
     * @return {?}
     */
    function (cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    };
    HeaderI18nComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-i18n',
                    template: "\n    <div nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\n      <i nz-icon nzType=\"global\"></i>\n      {{ defaultLanguage$ | async }}\n      <i nz-icon nzType=\"down\"></i>\n    </div>\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <li\n          nz-menu-item\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          [nzSelected]=\"lang.cultureName === selectedLangCulture\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n        >\n         <span role=\"img\" [attr.aria-label]=\"lang?.displayName\" class=\"pr-xs\">{{lang.cultureName}}</span>\n          {{ lang?.displayName }}\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderI18nComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    __decorate([
        Select(ConfigState.getDeep('localization.languages')),
        __metadata("design:type", Observable)
    ], HeaderI18nComponent.prototype, "languages$", void 0);
    return HeaderI18nComponent;
}());
if (false) {
    /** @type {?} */
    HeaderI18nComponent.prototype.languages$;
    /**
     * @type {?}
     * @private
     */
    HeaderI18nComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/storage.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    /**
     * @return {?}
     */
    HeaderStorageComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: (/**
             * @return {?}
             */
            function () {
                localStorage.clear();
                _this.messageSrv.success('Clear Finished!');
            }),
        });
    };
    HeaderStorageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-storage',
                    template: "\n    <i nz-icon nzType=\"tool\"></i>\n    {{ 'menu.clear.local.storage' | translate }}\n  ",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.d-block]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderStorageComponent.ctorParameters = function () { return [
        { type: NzModalService },
        { type: NzMessageService }
    ]; };
    HeaderStorageComponent.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return HeaderStorageComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.modalSrv;
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.messageSrv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/user.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService, store, oauthService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
        this.store = store;
        this.oauthService = oauthService;
        this.tenant = (/** @type {?} */ ({}));
        this.tenant =
            this.store.selectSnapshot(SessionState.getTenant) ||
                ((/** @type {?} */ ({})));
        this.tenantName = this.tenant.name || '.';
    }
    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    /**
     * @return {?}
     */
    HeaderUserComponent.prototype.logout = 
    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    /**
     * @return {?}
     */
    function () {
        this.oauthService.logOut();
        this.store.dispatch(new Navigate(['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url }
        }));
        this.store.dispatch(new GetAppConfiguration());
    };
    HeaderUserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-user',
                    template: "\n    <div\n      class=\"alain-default__nav-item d-flex align-items-center px-sm\"\n      nz-dropdown\n      nzPlacement=\"bottomRight\"\n      [nzDropdownMenu]=\"userMenu\"\n    >\n      <!--<nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>-->\n      {{tenantName}}/{{ (currentUser$ | async)?.userName }}\n    </div>\n    <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"width-sm\">\n        <div nz-menu-item routerLink=\"/account/manage-profile\">\n          <i nz-icon nzType=\"setting\" class=\"mr-sm\"></i>\n          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}\n        </div>\n        <li nz-menu-divider></li>\n        <div nz-menu-item (click)=\"logout()\">\n          <i nz-icon nzType=\"logout\" class=\"mr-sm\"></i>\n          {{ 'AbpUi::Logout' | abpLocalization }}\n        </div>\n      </div>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderUserComponent.ctorParameters = function () { return [
        { type: SettingsService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: Store },
        { type: OAuthService }
    ]; };
    __decorate([
        Select(ConfigState.getOne('currentUser')),
        __metadata("design:type", Observable)
    ], HeaderUserComponent.prototype, "currentUser$", void 0);
    return HeaderUserComponent;
}());
if (false) {
    /** @type {?} */
    HeaderUserComponent.prototype.currentUser$;
    /** @type {?} */
    HeaderUserComponent.prototype.tenant;
    /** @type {?} */
    HeaderUserComponent.prototype.tenantName;
    /** @type {?} */
    HeaderUserComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.tokenService;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    HeaderUserComponent.prototype.oauthService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/setting-drawer/setting-drawer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingDrawerItemComponent = /** @class */ (function () {
    function SettingDrawerItemComponent() {
        this.i = {};
        this.format = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value + " px"; });
    }
    Object.defineProperty(SettingDrawerItemComponent.prototype, "data", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.i = val;
            if (val.type === 'px') {
                this.pxVal = +val.value.replace('px', '');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    SettingDrawerItemComponent.prototype.pxChange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.i.value = val + "px";
    };
    SettingDrawerItemComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'setting-drawer-item',
                    template: "<span\r\n  >{{ i.label }}<span class=\"pl-sm text-grey\">{{ i.tip }}</span></span\r\n>\r\n<div [ngSwitch]=\"i.type\">\r\n  <ng-container *ngSwitchCase=\"'color'\">\r\n    <input\r\n      nz-input\r\n      type=\"color\"\r\n      style=\"min-width: 88px\"\r\n      [(ngModel)]=\"i.value\"\r\n      [ngModelOptions]=\"{ standalone: true }\"\r\n    />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'input'\">\r\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'px'\">\r\n    <nz-input-number\r\n      [(ngModel)]=\"pxVal\"\r\n      (ngModelChange)=\"pxChange($event)\"\r\n      [nzMin]=\"i.min\"\r\n      [nzMax]=\"i.max\"\r\n      [nzStep]=\"i.step || 2\"\r\n      [nzFormatter]=\"format\"\r\n    ></nz-input-number>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'switch'\">\r\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <ng-content></ng-content>\r\n  </ng-container>\r\n</div>\r\n",
                    // tslint:disable-next-line: no-host-metadata-property
                    host: {
                        '[class.setting-drawer__body-item]': 'true',
                    }
                }] }
    ];
    SettingDrawerItemComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return SettingDrawerItemComponent;
}());
if (false) {
    /** @type {?} */
    SettingDrawerItemComponent.prototype.i;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.pxVal;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.format;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/passport/passport.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    LayoutPassportComponent.type = "account" /* account */;
    LayoutPassportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'layout-passport',
                    template: "<div class=\"container\">\r\n  <header-i18n showLangText=\"false\" class=\"langs\"></header-i18n>\r\n  \r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\" />\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i nz-icon nzType=\"copyright\"></i> 2017 <a href=\"//github.com/cipchk\" target=\"_blank\">\u5361\u8272</a>\u51FA\u54C1\r\n    </global-footer>\r\n  </div>\r\n\r\n\r\n</div>",
                    styles: [":host ::ng-deep .container{display:flex;flex-direction:column;min-height:100%;background:#f0f2f5}:host ::ng-deep .langs{width:100%;height:40px;line-height:44px;text-align:right}:host ::ng-deep .langs .anticon{margin-top:24px;margin-right:24px;font-size:14px;vertical-align:top;cursor:pointer}:host ::ng-deep .wrap{flex:1;padding:32px 0}:host ::ng-deep .ant-form-item{margin-bottom:24px}@media (min-width:768px){:host ::ng-deep .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-repeat:no-repeat;background-position:center 110px;background-size:100%}:host ::ng-deep .wrap{padding:32px 0 24px}}:host ::ng-deep .top{text-align:center}:host ::ng-deep .header{height:44px;line-height:44px}:host ::ng-deep .header a{text-decoration:none}:host ::ng-deep .logo{height:44px;margin-right:16px}:host ::ng-deep .title{position:relative;color:rgba(0,0,0,.85);font-weight:600;font-size:33px;font-family:'Myriad Pro','Helvetica Neue',Arial,Helvetica,sans-serif;vertical-align:middle}:host ::ng-deep .desc{margin-top:12px;margin-bottom:40px;color:rgba(0,0,0,.45);font-size:14px}"]
                }] }
    ];
    return LayoutPassportComponent;
}());
if (false) {
    /** @type {?} */
    LayoutPassportComponent.type;
    /** @type {?} */
    LayoutPassportComponent.prototype.links;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/layout.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
/** @type {?} */
var COMPONENTS = __spread([
    LayoutDefaultComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent
], SETTINGDRAWER);
/** @type {?} */
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
/** @type {?} */
var PASSPORT = [LayoutPassportComponent];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CoreModule, NgAlainSharedModule],
                    entryComponents: __spread(SETTINGDRAWER, [LayoutDefaultComponent, LayoutFullScreenComponent, LayoutPassportComponent]),
                    declarations: __spread(COMPONENTS, HEADERCOMPONENTS, PASSPORT),
                    exports: __spread(COMPONENTS, PASSPORT)
                },] }
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-alain-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgAlainBasicModule = /** @class */ (function () {
    function NgAlainBasicModule() {
    }
    NgAlainBasicModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CoreModule,
                        ThemeBasicModule,
                        NgAlainSharedModule,
                        LayoutModule
                    ],
                    exports: [
                        ThemeBasicModule,
                        NgAlainSharedModule,
                        LayoutModule
                    ]
                },] }
    ];
    return NgAlainBasicModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-ng-alain-basic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LayoutDefaultComponent, LayoutFullScreenComponent, LayoutPassportComponent, NgAlainBasicModule, LayoutModule as ɵa, SettingDrawerComponent as ɵb, SettingDrawerItemComponent as ɵc, HeaderComponent as ɵd, SidebarComponent as ɵe, HeaderSearchComponent as ɵf, HeaderNotifyComponent as ɵg, HeaderTaskComponent as ɵh, HeaderIconComponent as ɵi, HeaderFullScreenComponent as ɵj, HeaderI18nComponent as ɵk, HeaderStorageComponent as ɵl, HeaderUserComponent as ɵm };
//# sourceMappingURL=fs-ng-alain-basic.js.map
