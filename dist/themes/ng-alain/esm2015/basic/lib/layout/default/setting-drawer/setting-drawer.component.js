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
const ALAINDEFAULTVAR = 'alain-default-vars';
/** @type {?} */
const DEFAULT_COLORS = [
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
const DEFAULT_VARS = {
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
export class SettingDrawerComponent {
    /**
     * @param {?} cdr
     * @param {?} msg
     * @param {?} settingSrv
     * @param {?} lazy
     * @param {?} zone
     * @param {?} doc
     */
    constructor(cdr, msg, settingSrv, lazy, zone, doc) {
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
    /**
     * @return {?}
     */
    get layout() {
        return this.settingSrv.layout;
    }
    /**
     * @private
     * @return {?}
     */
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    /**
     * @private
     * @return {?}
     */
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    /**
     * @private
     * @return {?}
     */
    loadLess() {
        if (this.loadedLess)
            return Promise.resolve();
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const lessConfigNode = this.doc.createElement('script');
            lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
            this.doc.body.appendChild(lessConfigNode);
        }))
            .then((/**
         * @return {?}
         */
        () => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js')))
            .then((/**
         * @return {?}
         */
        () => {
            this.loadedLess = true;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    genVars() {
        const { data, color, validKeys } = this;
        /** @type {?} */
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter((/**
         * @param {?} key
         * @return {?}
         */
        key => key !== 'primary-color')).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (vars[`@${key}`] = data[key].value)));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    /**
     * @private
     * @return {?}
     */
    runLess() {
        const { zone, msg, cdr } = this;
        /** @type {?} */
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout((/**
         * @return {?}
         */
        () => {
            zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.loadLess().then((/**
                 * @return {?}
                 */
                () => {
                    ((/** @type {?} */ (window))).less.modifyVars(this.genVars()).then((/**
                     * @return {?}
                     */
                    () => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run((/**
                         * @return {?}
                         */
                        () => cdr.detectChanges()));
                    }));
                }));
            }));
        }), 200);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.collapse = !this.collapse;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        key => DEFAULT_VARS[key].default === '@primary-color'))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => delete this.cachedData[`@${key}`]));
        this.resetData(this.cachedData, false);
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    /**
     * @private
     * @param {?=} nowData
     * @param {?=} run
     * @return {?}
     */
    resetData(nowData, run = true) {
        nowData = nowData || {};
        /** @type {?} */
        const data = deepCopy(DEFAULT_VARS);
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const value = (/** @type {?} */ (nowData))[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        }));
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get validKeys() {
        return Object.keys(this.data).filter((/**
         * @param {?} key
         * @return {?}
         */
        key => this.data[key].value !== this.data[key].default));
    }
    /**
     * @return {?}
     */
    apply() {
        this.runLess();
    }
    /**
     * @return {?}
     */
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    /**
     * @return {?}
     */
    copyVar() {
        /** @type {?} */
        const vars = this.genVars();
        /** @type {?} */
        const copyContent = Object.keys(vars)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => `${key}: ${vars[key]};`))
            .join('\n');
        copy(copyContent);
        this.msg.success('Copy success');
    }
}
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
SettingDrawerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMessageService },
    { type: SettingsService },
    { type: LazyService },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25nLWFsYWluL2Jhc2ljLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9kZWZhdWx0L3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOztNQUV6QyxlQUFlLEdBQUcsb0JBQW9COztNQUN0QyxjQUFjLEdBQUc7SUFDckI7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUss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Q0FBaUI7O0lBSWpCLHNDQUFlOztJQUNmLHVDQUFjOztJQUNkLHdDQUF3Qjs7Ozs7SUFHdEIscUNBQThCOzs7OztJQUM5QixxQ0FBNkI7Ozs7O0lBQzdCLDRDQUFtQzs7Ozs7SUFDbkMsc0NBQXlCOzs7OztJQUN6QixzQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE5nWm9uZSwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgTGF6eVNlcnZpY2UsIGNvcHksIGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuY29uc3QgQUxBSU5ERUZBVUxUVkFSID0gJ2FsYWluLWRlZmF1bHQtdmFycyc7XHJcbmNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xyXG4gIHtcclxuICAgIGtleTogJ2R1c3QnLFxyXG4gICAgY29sb3I6ICcjRjUyMjJEJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ3ZvbGNhbm8nLFxyXG4gICAgY29sb3I6ICcjRkE1NDFDJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ3N1bnNldCcsXHJcbiAgICBjb2xvcjogJyNGQUFEMTQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnY3lhbicsXHJcbiAgICBjb2xvcjogJyMxM0MyQzInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnZ3JlZW4nLFxyXG4gICAgY29sb3I6ICcjNTJDNDFBJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2RheWJyZWFrJyxcclxuICAgIGNvbG9yOiAnIzE4OTBmZicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdnZWVrYmx1ZScsXHJcbiAgICBjb2xvcjogJyMyRjU0RUInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAncHVycGxlJyxcclxuICAgIGNvbG9yOiAnIzcyMkVEMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdibGFjaycsXHJcbiAgICBjb2xvcjogJyMwMDE1MjknLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IERFRkFVTFRfVkFSUyA9IHtcclxuICAncHJpbWFyeS1jb2xvcic6IHsgbGFiZWw6ICfkuLvpopzoibInLCB0eXBlOiAnY29sb3InLCBkZWZhdWx0OiAnIzE4OTBmZicgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItaGcnOiB7XHJcbiAgICBsYWJlbDogJ+mrmCcsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzY0cHgnLFxyXG4gICAgbWF4OiAzMDAsXHJcbiAgICBtaW46IDI0LFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWJnJzoge1xyXG4gICAgbGFiZWw6ICfog4zmma/oibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXHJcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnOiB7XHJcbiAgICBsYWJlbDogJ+mhtumDqOW3puWPs+WGhei+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzE2cHgnLFxyXG4gIH0sXHJcbiAgLy8g5L6n6L655qCPXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtd2QnOiB7IGxhYmVsOiAn5a695bqmJywgdHlwZTogJ3B4JywgZGVmYXVsdDogJzIwMHB4JyB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWJnJzoge1xyXG4gICAgbGFiZWw6ICfog4zmma8nLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZmZmZmZmJyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC13ZCc6IHtcclxuICAgIGxhYmVsOiAn5pS257yp5a695bqmJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNjRweCcsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtcGFkZGluZy10b3AtYm90dG9tJzoge1xyXG4gICAgbGFiZWw6ICfpobnkuIrkuIvlhoXovrnot50nLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc4cHgnLFxyXG4gICAgc3RlcDogOCxcclxuICB9LFxyXG4gIC8vIOS4u+iPnOWNlVxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1mcyc6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5a2X5Y+3JyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMTRweCcsXHJcbiAgICBtaW46IDE0LFxyXG4gICAgbWF4OiAzMCxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC1uYXYtZnMnOiB7XHJcbiAgICBsYWJlbDogJ+aUtue8qeiPnOWNleWtl+WPtycsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzI0cHgnLFxyXG4gICAgbWluOiAyNCxcclxuICAgIG1heDogMzIsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtaXRlbS1oZWlnaHQnOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNlemhuemrmOW6picsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzM4cHgnLFxyXG4gICAgbWluOiAyNCxcclxuICAgIG1heDogNjQsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXHJcbiAgICByZ2JhOiB0cnVlLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXRleHQtaG92ZXItY29sb3InOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOaCrOWBnOminOiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcclxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZ3JvdXAtdGV4dC1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5YiG57uE5paH5pys6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQzKScsXHJcbiAgICByZ2JhOiB0cnVlLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLXRleHQtY29sb3InOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuaWh+acrOminOiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcclxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuiDjOaZr+minOiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNmY2ZjZmMnLFxyXG4gIH0sXHJcbiAgLy8g5YaF5a65XHJcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1iZyc6IHtcclxuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2Y1ZjdmYScsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYmcnOiB7XHJcbiAgICBsYWJlbDogJ+agh+mimOiDjOaZr+iJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNmYWZiZmMnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJvcmRlcic6IHtcclxuICAgIGxhYmVsOiAn5qCH6aKY5bqV6YOo6L655qGG6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2VmZTNlNScsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LXBhZGRpbmcnOiB7XHJcbiAgICBsYWJlbDogJ+WGhei+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzI0cHgnLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMjgsXHJcbiAgICBzdGVwOiA4LFxyXG4gIH0sXHJcbiAgLy8gem9ycm/nu4Tku7bkv67mraNcclxuICAnZm9ybS1zdGF0ZS12aXN1YWwtZmVlZGJhY2stZW5hYmxlZCc6IHtcclxuICAgIGxhYmVsOiAn5byA5ZCv6KGo5Y2V5YWD57Sg55qE6KeG6KeJ5Y+N6aaIJyxcclxuICAgIHR5cGU6ICdzd2l0Y2gnLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gICdwcmVzZXJ2ZS13aGl0ZS1zcGFjZXMtZW5hYmxlZCc6IHtcclxuICAgIGxhYmVsOiAn5byA5ZCvIHByZXNlcnZlV2hpdGVzcGFjZXMnLFxyXG4gICAgdHlwZTogJ3N3aXRjaCcsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1yYWRpdXMnOiB7XHJcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WchuinkicsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzRweCcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEyOCxcclxuICB9LFxyXG4gICduei10YWJsZS1pbWctbWFyZ2luLXJpZ2h0Jzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflj7PlpJbovrnot50nLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc0cHgnLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMjgsXHJcbiAgfSxcclxuICAnbnotdGFibGUtaW1nLW1heC13aWR0aCc6IHtcclxuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn5a695bqmJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMzJweCcsXHJcbiAgICBtaW46IDgsXHJcbiAgICBtYXg6IDEyOCxcclxuICB9LFxyXG4gICduei10YWJsZS1pbWctbWF4LWhlaWdodCc6IHtcclxuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn6auY5bqmJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMzJweCcsXHJcbiAgICBtaW46IDgsXHJcbiAgICBtYXg6IDEyOCxcclxuICB9LFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl0nOiAndHJ1ZScsXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJDb21wb25lbnQge1xyXG4gIHByaXZhdGUgbG9hZGVkTGVzcyA9IGZhbHNlO1xyXG5cclxuICBjb2xsYXBzZSA9IGZhbHNlO1xyXG4gIGdldCBsYXlvdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dDtcclxuICB9XHJcbiAgZGF0YTogYW55ID0ge307XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBjb2xvcnMgPSBERUZBVUxUX0NPTE9SUztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgc2V0dGluZ1NydjogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHtcclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNhY2hlZERhdGFbJ0BwcmltYXJ5LWNvbG9yJ10gfHwgdGhpcy5ERUZBVUxUX1BSSU1BUlk7XHJcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGNhY2hlZERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dFtBTEFJTkRFRkFVTFRWQVJdIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgREVGQVVMVF9QUklNQVJZKCkge1xyXG4gICAgcmV0dXJuIERFRkFVTFRfVkFSU1sncHJpbWFyeS1jb2xvciddLmRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRMZXNzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMubG9hZGVkTGVzcykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMubGF6eVxyXG4gICAgICAubG9hZFN0eWxlKCcuL2Fzc2V0cy9hbGFpbi1kZWZhdWx0Lmxlc3MnLCAnc3R5bGVzaGVldC9sZXNzJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlc3NDb25maWdOb2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgbGVzc0NvbmZpZ05vZGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnY6ICdwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5LmxvYWRTY3JpcHQoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vb3MvbGliL2xlc3MuanMvMy44LjEvbGVzcy5taW4uanMnKSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkTGVzcyA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5WYXJzKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjb2xvciwgdmFsaWRLZXlzIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdmFyczogYW55ID0ge1xyXG4gICAgICBbYEBwcmltYXJ5LWNvbG9yYF06IGNvbG9yLFxyXG4gICAgfTtcclxuICAgIHZhbGlkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKGtleSA9PiAodmFyc1tgQCR7a2V5fWBdID0gZGF0YVtrZXldLnZhbHVlKSk7XHJcbiAgICB0aGlzLnNldExheW91dChBTEFJTkRFRkFVTFRWQVIsIHZhcnMpO1xyXG4gICAgcmV0dXJuIHZhcnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkxlc3MoKSB7XHJcbiAgICBjb25zdCB7IHpvbmUsIG1zZywgY2RyIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgbXNnSWQgPSBtc2cubG9hZGluZyhg5q2j5Zyo57yW6K+R5Li76aKY77yBYCwgeyBuekR1cmF0aW9uOiAwIH0pLm1lc3NhZ2VJZDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRMZXNzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAod2luZG93IGFzIGFueSkubGVzcy5tb2RpZnlWYXJzKHRoaXMuZ2VuVmFycygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbXNnLnN1Y2Nlc3MoJ+aIkOWKnycpO1xyXG4gICAgICAgICAgICBtc2cucmVtb3ZlKG1zZ0lkKTtcclxuICAgICAgICAgICAgem9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgT2JqZWN0LmtleXMoREVGQVVMVF9WQVJTKVxyXG4gICAgICAuZmlsdGVyKGtleSA9PiBERUZBVUxUX1ZBUlNba2V5XS5kZWZhdWx0ID09PSAnQHByaW1hcnktY29sb3InKVxyXG4gICAgICAuZm9yRWFjaChrZXkgPT4gZGVsZXRlIHRoaXMuY2FjaGVkRGF0YVtgQCR7a2V5fWBdKTtcclxuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChuYW1lLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0RGF0YShub3dEYXRhPzoge30sIHJ1biA9IHRydWUpIHtcclxuICAgIG5vd0RhdGEgPSBub3dEYXRhIHx8IHt9O1xyXG4gICAgY29uc3QgZGF0YSA9IGRlZXBDb3B5KERFRkFVTFRfVkFSUyk7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbm93RGF0YSFbYEAke2tleX1gXSB8fCBkYXRhW2tleV0uZGVmYXVsdCB8fCAnJztcclxuICAgICAgZGF0YVtrZXldLnZhbHVlID0gdmFsdWUgPT09IGBAcHJpbWFyeS1jb2xvcmAgPyB0aGlzLmNvbG9yIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICBpZiAocnVuKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5ydW5MZXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCB2YWxpZEtleXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKGtleSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XHJcbiAgfVxyXG5cclxuICBhcHBseSgpIHtcclxuICAgIHRoaXMucnVuTGVzcygpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX1BSSU1BUlk7XHJcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xyXG4gICAgdGhpcy5yZXNldERhdGEoe30pO1xyXG4gIH1cclxuXHJcbiAgY29weVZhcigpIHtcclxuICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdlblZhcnMoKTtcclxuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcclxuICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHt2YXJzW2tleV19O2ApXHJcbiAgICAgIC5qb2luKCdcXG4nKTtcclxuICAgIGNvcHkoY29weUNvbnRlbnQpO1xyXG4gICAgdGhpcy5tc2cuc3VjY2VzcygnQ29weSBzdWNjZXNzJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==