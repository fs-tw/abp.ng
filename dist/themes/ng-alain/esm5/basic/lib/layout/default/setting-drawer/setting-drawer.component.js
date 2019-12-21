/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/setting-drawer/setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, NgZone, Inject, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd';
import { LazyService, copy, deepCopy } from '@delon/util';
import { SettingsService } from '@delon/theme';
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
export { SettingDrawerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluL2Jhc2ljLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9kZWZhdWx0L3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztJQUV6QyxlQUFlLEdBQUcsb0JBQW9COztJQUN0QyxjQUFjLEdBQUc7SUFDckI7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUss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Q0osd0JBQXdCLEVBQUUsTUFBTTtxQkFDakM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWhONEQsaUJBQWlCO2dCQUVyRSxnQkFBZ0I7Z0JBRWhCLGVBQWU7Z0JBRGYsV0FBVztnQkFIeUIsTUFBTTtnREFrTzlDLE1BQU0sU0FBQyxRQUFROztJQWlIcEIsNkJBQUM7Q0FBQSxBQTVJRCxJQTRJQztTQWxJWSxzQkFBc0I7Ozs7OztJQUNqQyw0Q0FBMkI7O0lBRTNCLDBDQUFpQjs7SUFJakIsc0NBQWU7O0lBQ2YsdUNBQWM7O0lBQ2Qsd0NBQXdCOzs7OztJQUd0QixxQ0FBOEI7Ozs7O0lBQzlCLHFDQUE2Qjs7Ozs7SUFDN0IsNENBQW1DOzs7OztJQUNuQyxzQ0FBeUI7Ozs7O0lBQ3pCLHNDQUFvQjs7Ozs7SUFDcEIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgTmdab25lLCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBMYXp5U2VydmljZSwgY29weSwgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5jb25zdCBBTEFJTkRFRkFVTFRWQVIgPSAnYWxhaW4tZGVmYXVsdC12YXJzJztcclxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXHJcbiAge1xyXG4gICAga2V5OiAnZHVzdCcsXHJcbiAgICBjb2xvcjogJyNGNTIyMkQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAndm9sY2FubycsXHJcbiAgICBjb2xvcjogJyNGQTU0MUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnc3Vuc2V0JyxcclxuICAgIGNvbG9yOiAnI0ZBQUQxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdjeWFuJyxcclxuICAgIGNvbG9yOiAnIzEzQzJDMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdncmVlbicsXHJcbiAgICBjb2xvcjogJyM1MkM0MUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnZGF5YnJlYWsnLFxyXG4gICAgY29sb3I6ICcjMTg5MGZmJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2dlZWtibHVlJyxcclxuICAgIGNvbG9yOiAnIzJGNTRFQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdwdXJwbGUnLFxyXG4gICAgY29sb3I6ICcjNzIyRUQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2JsYWNrJyxcclxuICAgIGNvbG9yOiAnIzAwMTUyOScsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgREVGQVVMVF9WQVJTID0ge1xyXG4gICdwcmltYXJ5LWNvbG9yJzogeyBsYWJlbDogJ+S4u+minOiJsicsIHR5cGU6ICdjb2xvcicsIGRlZmF1bHQ6ICcjMTg5MGZmJyB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyc6IHtcclxuICAgIGxhYmVsOiAn6auYJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNjRweCcsXHJcbiAgICBtYXg6IDMwMCxcclxuICAgIG1pbjogMjQsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcclxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItcGFkZGluZyc6IHtcclxuICAgIGxhYmVsOiAn6aG26YOo5bem5Y+z5YaF6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMTZweCcsXHJcbiAgfSxcclxuICAvLyDkvqfovrnmoI9cclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS13ZCc6IHsgbGFiZWw6ICflrr3luqYnLCB0eXBlOiAncHgnLCBkZWZhdWx0OiAnMjAwcHgnIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iDjOaZrycsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNmZmZmZmYnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLXdkJzoge1xyXG4gICAgbGFiZWw6ICfmlLbnvKnlrr3luqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nOiB7XHJcbiAgICBsYWJlbDogJ+mhueS4iuS4i+WGhei+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzhweCcsXHJcbiAgICBzdGVwOiA4LFxyXG4gIH0sXHJcbiAgLy8g5Li76I+c5Y2VXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWZzJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXlrZflj7cnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICcxNHB4JyxcclxuICAgIG1pbjogMTQsXHJcbiAgICBtYXg6IDMwLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLW5hdi1mcyc6IHtcclxuICAgIGxhYmVsOiAn5pS257yp6I+c5Y2V5a2X5Y+3JyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMjRweCcsXHJcbiAgICBtaW46IDI0LFxyXG4gICAgbWF4OiAzMixcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1pdGVtLWhlaWdodCc6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V6aG56auY5bqmJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMzhweCcsXHJcbiAgICBtaW46IDI0LFxyXG4gICAgbWF4OiA2NCxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcclxuICAgIHJnYmE6IHRydWUsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1ob3Zlci1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys5oKs5YGc6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxyXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1ncm91cC10ZXh0LWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXliIbnu4TmlofmnKzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJyxcclxuICAgIHJnYmE6IHRydWUsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtdGV4dC1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe25paH5pys6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxyXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC1iZyc6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe26IOM5pmv6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2ZjZmNmYycsXHJcbiAgfSxcclxuICAvLyDlhoXlrrlcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWJnJzoge1xyXG4gICAgbGFiZWw6ICfog4zmma/oibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZjVmN2ZhJyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyc6IHtcclxuICAgIGxhYmVsOiAn5qCH6aKY6IOM5pmv6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2ZhZmJmYycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJzoge1xyXG4gICAgbGFiZWw6ICfmoIfpopjlupXpg6jovrnmoYboibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZWZlM2U1JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtcGFkZGluZyc6IHtcclxuICAgIGxhYmVsOiAn5YaF6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMjRweCcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEyOCxcclxuICAgIHN0ZXA6IDgsXHJcbiAgfSxcclxuICAvLyB6b3Jyb+e7hOS7tuS/ruato1xyXG4gICdmb3JtLXN0YXRlLXZpc3VhbC1mZWVkYmFjay1lbmFibGVkJzoge1xyXG4gICAgbGFiZWw6ICflvIDlkK/ooajljZXlhYPntKDnmoTop4bop4nlj43ppognLFxyXG4gICAgdHlwZTogJ3N3aXRjaCcsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgJ3ByZXNlcnZlLXdoaXRlLXNwYWNlcy1lbmFibGVkJzoge1xyXG4gICAgbGFiZWw6ICflvIDlkK8gcHJlc2VydmVXaGl0ZXNwYWNlcycsXHJcbiAgICB0eXBlOiAnc3dpdGNoJyxcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICAnbnotdGFibGUtaW1nLXJhZGl1cyc6IHtcclxuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5ZyG6KeSJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNHB4JyxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnOiB7XHJcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WPs+Wklui+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzRweCcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEyOCxcclxuICB9LFxyXG4gICduei10YWJsZS1pbWctbWF4LXdpZHRoJzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKflrr3luqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICczMnB4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0Jzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKfpq5jluqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICczMnB4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XHJcblxyXG4gIGNvbGxhcHNlID0gZmFsc2U7XHJcbiAgZ2V0IGxheW91dCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0O1xyXG4gIH1cclxuICBkYXRhOiBhbnkgPSB7fTtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nU3J2OiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcclxuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgY2FjaGVkRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0W0FMQUlOREVGQVVMVFZBUl0gfHwge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBERUZBVUxUX1BSSU1BUlkoKSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9WQVJTWydwcmltYXJ5LWNvbG9yJ10uZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZExlc3MoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWRMZXNzKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5sYXp5XHJcbiAgICAgIC5sb2FkU3R5bGUoJy4vYXNzZXRzL2FsYWluLWRlZmF1bHQubGVzcycsICdzdHlsZXNoZWV0L2xlc3MnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVzc0NvbmZpZ05vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBsZXNzQ29uZmlnTm9kZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICB3aW5kb3cubGVzcyA9IHtcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGVudjogJ3Byb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQobGVzc0NvbmZpZ05vZGUpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenkubG9hZFNjcmlwdCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvbGVzcy5qcy8zLjguMS9sZXNzLm1pbi5qcycpKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRMZXNzID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlblZhcnMoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yLCB2YWxpZEtleXMgfSA9IHRoaXM7XHJcbiAgICBjb25zdCB2YXJzOiBhbnkgPSB7XHJcbiAgICAgIFtgQHByaW1hcnktY29sb3JgXTogY29sb3IsXHJcbiAgICB9O1xyXG4gICAgdmFsaWRLZXlzLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAncHJpbWFyeS1jb2xvcicpLmZvckVhY2goa2V5ID0+ICh2YXJzW2BAJHtrZXl9YF0gPSBkYXRhW2tleV0udmFsdWUpKTtcclxuICAgIHRoaXMuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwgdmFycyk7XHJcbiAgICByZXR1cm4gdmFycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuTGVzcygpIHtcclxuICAgIGNvbnN0IHsgem9uZSwgbXNnLCBjZHIgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBtc2dJZCA9IG1zZy5sb2FkaW5nKGDmraPlnKjnvJbor5HkuLvpopjvvIFgLCB7IG56RHVyYXRpb246IDAgfSkubWVzc2FnZUlkO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZExlc3MoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtc2cuc3VjY2Vzcygn5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIG1zZy5yZW1vdmUobXNnSWQpO1xyXG4gICAgICAgICAgICB6b25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICBPYmplY3Qua2V5cyhERUZBVUxUX1ZBUlMpXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IERFRkFVTFRfVkFSU1trZXldLmRlZmF1bHQgPT09ICdAcHJpbWFyeS1jb2xvcicpXHJcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xyXG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KG5hbWUsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXREYXRhKG5vd0RhdGE/OiB7fSwgcnVuID0gdHJ1ZSkge1xyXG4gICAgbm93RGF0YSA9IG5vd0RhdGEgfHwge307XHJcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBub3dEYXRhIVtgQCR7a2V5fWBdIHx8IGRhdGFba2V5XS5kZWZhdWx0IHx8ICcnO1xyXG4gICAgICBkYXRhW2tleV0udmFsdWUgPSB2YWx1ZSA9PT0gYEBwcmltYXJ5LWNvbG9yYCA/IHRoaXMuY29sb3IgOiB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIGlmIChydW4pIHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHZhbGlkS2V5cygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKS5maWx0ZXIoa2V5ID0+IHRoaXMuZGF0YVtrZXldLnZhbHVlICE9PSB0aGlzLmRhdGFba2V5XS5kZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIGFwcGx5KCkge1xyXG4gICAgdGhpcy5ydW5MZXNzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcclxuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB7fSk7XHJcbiAgICB0aGlzLnJlc2V0RGF0YSh7fSk7XHJcbiAgfVxyXG5cclxuICBjb3B5VmFyKCkge1xyXG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xyXG4gICAgY29uc3QgY29weUNvbnRlbnQgPSBPYmplY3Qua2V5cyh2YXJzKVxyXG4gICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3ZhcnNba2V5XX07YClcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gICAgY29weShjb3B5Q29udGVudCk7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKCdDb3B5IHN1Y2Nlc3MnKTtcclxuICB9XHJcbn1cclxuIl19