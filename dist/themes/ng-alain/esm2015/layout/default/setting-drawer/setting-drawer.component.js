import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy, deepCopy, LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
import * as i2 from "@delon/theme";
import * as i3 from "@delon/util";
import * as i4 from "ng-zorro-antd/drawer";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/divider";
import * as i7 from "ng-zorro-antd/tabs";
import * as i8 from "./setting-drawer-item.component";
import * as i9 from "ng-zorro-antd/switch";
import * as i10 from "@angular/forms";
import * as i11 from "ng-zorro-antd/button";
import * as i12 from "ng-zorro-antd/core/wave";
import * as i13 from "ng-zorro-antd/core/transition-patch";
import * as i14 from "ng-zorro-antd/alert";
import * as i15 from "ng-zorro-antd/icon";
import * as i16 from "ng-zorro-antd/tooltip";
function SettingDrawerComponent_span_5_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function SettingDrawerComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function SettingDrawerComponent_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r4); const c_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.changeColor(c_r1.color); });
    i0.ɵɵtemplate(1, SettingDrawerComponent_span_5_i_1_Template, 1, 0, "i", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c0, c_r1.color));
    i0.ɵɵproperty("nzTooltipTitle", c_r1.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.color === c_r1.color);
} }
const _c1 = function (a0) { return { "setting-drawer__handle-opened": a0 }; };
const ALAINDEFAULTVAR = 'alain-default-vars';
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
    get layout() {
        return this.settingSrv.layout;
    }
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    loadLess() {
        if (this.loadedLess) {
            return Promise.resolve();
        }
        return this.lazy
            .loadStyle('./assets/alain-default.less', 'stylesheet/less')
            .then(() => {
            const lessConfigNode = this.doc.createElement('script');
            lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
            this.doc.body.appendChild(lessConfigNode);
        })
            .then(() => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
            .then(() => {
            this.loadedLess = true;
        });
    }
    genVars() {
        const { data, color, validKeys } = this;
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter((key) => key !== 'primary-color').forEach((key) => (vars[`@${key}`] = data[key].value));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    runLess() {
        const { zone, msg, cdr } = this;
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout(() => {
            zone.runOutsideAngular(() => {
                this.loadLess().then(() => {
                    window.less.modifyVars(this.genVars()).then(() => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(() => cdr.detectChanges());
                    });
                });
            });
        }, 200);
    }
    toggle() {
        this.collapse = !this.collapse;
    }
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter((key) => DEFAULT_VARS[key].default === '@primary-color')
            .forEach((key) => delete this.cachedData[`@${key}`]);
        this.resetData(this.cachedData, false);
    }
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    resetData(nowData, run = true) {
        nowData = nowData || {};
        const data = deepCopy(DEFAULT_VARS);
        Object.keys(data).forEach((key) => {
            const value = nowData[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    get validKeys() {
        return Object.keys(this.data).filter((key) => this.data[key].value !== this.data[key].default);
    }
    apply() {
        this.runLess();
    }
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    copyVar() {
        const vars = this.genVars();
        const copyContent = Object.keys(vars)
            .map((key) => `${key}: ${vars[key]};`)
            .join('\n');
        copy(copyContent);
        this.msg.success('Copy success');
    }
}
SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzMessageService), i0.ɵɵdirectiveInject(i2.SettingsService), i0.ɵɵdirectiveInject(i3.LazyService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(DOCUMENT)); };
SettingDrawerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["setting-drawer"]], hostVars: 2, hostBindings: function SettingDrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("setting-drawer", true);
    } }, decls: 51, vars: 26, consts: [[3, "nzVisible", "nzWidth", "nzVisibleChange", "nzOnClose"], [1, "setting-drawer__content"], [1, "setting-drawer__body", "setting-drawer__theme"], [1, "setting-drawer__title"], ["nz-tooltip", "", "class", "setting-drawer__theme-tag", 3, "style", "nzTooltipTitle", "click", 4, "ngFor", "ngForOf"], [1, "setting-drawer__body"], ["nzTitle", "\u9876\u90E8"], [3, "data"], ["nzTitle", "\u4FA7\u8FB9\u680F"], ["nzTitle", "\u5185\u5BB9"], ["nzTitle", "\u5176\u5B83"], [1, "setting-drawer__body-item"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["type", "button", "nz-button", "", "nzType", "primary", 3, "click"], ["type", "button", "nz-button", "", 3, "click"], ["nzType", "warning", "nzMessage", "\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less", 1, "mt-md"], [1, "setting-drawer__handle", 3, "ngClass", "click"], ["nz-icon", "", 1, "setting-drawer__handle-icon", 3, "nzType"], ["nz-tooltip", "", 1, "setting-drawer__theme-tag", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function SettingDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-drawer", 0);
        i0.ɵɵlistener("nzVisibleChange", function SettingDrawerComponent_Template_nz_drawer_nzVisibleChange_0_listener($event) { return ctx.collapse = $event; })("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.toggle(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "h3", 3);
        i0.ɵɵtext(4, "\u4E3B\u9898\u8272");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SettingDrawerComponent_span_5_Template, 2, 6, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "nz-divider");
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "h3", 3);
        i0.ɵɵtext(9, "\u8BBE\u7F6E");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "nz-tabset");
        i0.ɵɵelementStart(11, "nz-tab", 6);
        i0.ɵɵelementStart(12, "div", 5);
        i0.ɵɵelement(13, "setting-drawer-item", 7);
        i0.ɵɵelement(14, "setting-drawer-item", 7);
        i0.ɵɵelement(15, "setting-drawer-item", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "nz-tab", 8);
        i0.ɵɵelement(17, "setting-drawer-item", 7);
        i0.ɵɵelement(18, "setting-drawer-item", 7);
        i0.ɵɵelement(19, "setting-drawer-item", 7);
        i0.ɵɵelement(20, "setting-drawer-item", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "nz-tab", 9);
        i0.ɵɵelement(22, "setting-drawer-item", 7);
        i0.ɵɵelement(23, "setting-drawer-item", 7);
        i0.ɵɵelement(24, "setting-drawer-item", 7);
        i0.ɵɵelement(25, "setting-drawer-item", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "nz-tab", 10);
        i0.ɵɵelement(27, "setting-drawer-item", 7);
        i0.ɵɵelement(28, "setting-drawer-item", 7);
        i0.ɵɵelement(29, "setting-drawer-item", 7);
        i0.ɵɵelement(30, "setting-drawer-item", 7);
        i0.ɵɵelement(31, "setting-drawer-item", 7);
        i0.ɵɵelement(32, "setting-drawer-item", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "nz-divider");
        i0.ɵɵelementStart(34, "div", 5);
        i0.ɵɵelementStart(35, "div", 11);
        i0.ɵɵtext(36, " \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F ");
        i0.ɵɵelementStart(37, "nz-switch", 12);
        i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener($event) { return ctx.layout.fixed = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener() { return ctx.setLayout("fixed", ctx.layout.fixed); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "div", 11);
        i0.ɵɵtext(39, " \u8272\u5F31\u6A21\u5F0F ");
        i0.ɵɵelementStart(40, "nz-switch", 12);
        i0.ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.layout.colorWeak = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener() { return ctx.setLayout("colorWeak", ctx.layout.colorWeak); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(41, "nz-divider");
        i0.ɵɵelementStart(42, "button", 13);
        i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_42_listener() { return ctx.apply(); });
        i0.ɵɵtext(43, "\u9884\u89C8");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "button", 14);
        i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_44_listener() { return ctx.reset(); });
        i0.ɵɵtext(45, "\u91CD\u7F6E");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "button", 14);
        i0.ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_46_listener() { return ctx.copyVar(); });
        i0.ɵɵtext(47, "\u62F7\u8D1D");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(48, "nz-alert", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "div", 16);
        i0.ɵɵlistener("click", function SettingDrawerComponent_Template_div_click_49_listener() { return ctx.toggle(); });
        i0.ɵɵelement(50, "i", 17);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzVisible", ctx.collapse)("nzWidth", 500);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.colors);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("data", ctx.data["alain-default-header-hg"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-header-bg"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-header-padding"]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("data", ctx.data["alain-default-aside-wd"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-aside-bg"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-aside-collapsed-wd"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-aside-nav-padding-top-bottom"]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("data", ctx.data["alain-default-content-bg"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-content-heading-bg"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-content-heading-border"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["alain-default-content-padding"]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("data", ctx.data["form-state-visual-feedback-enabled"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["preserve-white-spaces-enabled"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["nz-table-img-radius"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["nz-table-img-margin-right"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["nz-table-img-max-width"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("data", ctx.data["nz-table-img-max-height"]);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngModel", ctx.layout.fixed);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.layout.colorWeak);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(24, _c1, ctx.collapse));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzType", !ctx.collapse ? "setting" : "close");
    } }, directives: [i4.NzDrawerComponent, i5.NgForOf, i6.NzDividerComponent, i7.NzTabSetComponent, i7.NzTabComponent, i8.SettingDrawerItemComponent, i9.NzSwitchComponent, i10.NgControlStatus, i10.NgModel, i11.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective, i14.NzAlertComponent, i5.NgClass, i15.NzIconDirective, i16.NzTooltipDirective, i5.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingDrawerComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'setting-drawer',
                templateUrl: './setting-drawer.component.html',
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.setting-drawer]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzMessageService }, { type: i2.SettingsService }, { type: i3.LazyService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvZGVmYXVsdC9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNPaEQsd0JBQ0Y7Ozs7O0lBUkQsZ0NBT0c7SUFKRCxnT0FBOEI7SUFJN0IsMkVBQW9EO0lBQ3RELGlCQUFPOzs7O0lBTk4scURBQXlDO0lBR3pDLHlDQUF3QjtJQUVwQixlQUF5QjtJQUF6QixrREFBeUI7OztBRExyQyxNQUFNLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztBQUM3QyxNQUFNLGNBQWMsR0FBRztJQUNyQjtRQUNFLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FB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QVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLHNEQUFzRDtnQkFDdEQsSUFBSSxFQUFFO29CQUNKLHdCQUF3QixFQUFFLE1BQU07aUJBQ2pDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFrQkksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgY29weSwgZGVlcENvcHksIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuXHJcbmNvbnN0IEFMQUlOREVGQVVMVFZBUiA9ICdhbGFpbi1kZWZhdWx0LXZhcnMnO1xyXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IFtcclxuICB7XHJcbiAgICBrZXk6ICdkdXN0JyxcclxuICAgIGNvbG9yOiAnI0Y1MjIyRCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICd2b2xjYW5vJyxcclxuICAgIGNvbG9yOiAnI0ZBNTQxQycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdzdW5zZXQnLFxyXG4gICAgY29sb3I6ICcjRkFBRDE0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2N5YW4nLFxyXG4gICAgY29sb3I6ICcjMTNDMkMyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2dyZWVuJyxcclxuICAgIGNvbG9yOiAnIzUyQzQxQScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdkYXlicmVhaycsXHJcbiAgICBjb2xvcjogJyMxODkwZmYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnZ2Vla2JsdWUnLFxyXG4gICAgY29sb3I6ICcjMkY1NEVCJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ3B1cnBsZScsXHJcbiAgICBjb2xvcjogJyM3MjJFRDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnYmxhY2snLFxyXG4gICAgY29sb3I6ICcjMDAxNTI5JyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBERUZBVUxUX1ZBUlMgPSB7XHJcbiAgJ3ByaW1hcnktY29sb3InOiB7IGxhYmVsOiAn5Li76aKc6ImyJywgdHlwZTogJ2NvbG9yJywgZGVmYXVsdDogJyMxODkwZmYnIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWhnJzoge1xyXG4gICAgbGFiZWw6ICfpq5gnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcclxuICAgIG1heDogMzAwLFxyXG4gICAgbWluOiAyNCxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1iZyc6IHtcclxuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxyXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1wYWRkaW5nJzoge1xyXG4gICAgbGFiZWw6ICfpobbpg6jlt6blj7PlhoXovrnot50nLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICcxNnB4JyxcclxuICB9LFxyXG4gIC8vIOS+p+i+ueagj1xyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLXdkJzogeyBsYWJlbDogJ+WuveW6picsIHR5cGU6ICdweCcsIGRlZmF1bHQ6ICcyMDBweCcgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyc6IHtcclxuICAgIGxhYmVsOiAn6IOM5pmvJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2ZmZmZmZicsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtd2QnOiB7XHJcbiAgICBsYWJlbDogJ+aUtue8qeWuveW6picsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzY0cHgnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXBhZGRpbmctdG9wLWJvdHRvbSc6IHtcclxuICAgIGxhYmVsOiAn6aG55LiK5LiL5YaF6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnOHB4JyxcclxuICAgIHN0ZXA6IDgsXHJcbiAgfSxcclxuICAvLyDkuLvoj5zljZVcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZnMnOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNleWtl+WPtycsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzE0cHgnLFxyXG4gICAgbWluOiAxNCxcclxuICAgIG1heDogMzAsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtbmF2LWZzJzoge1xyXG4gICAgbGFiZWw6ICfmlLbnvKnoj5zljZXlrZflj7cnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcclxuICAgIG1pbjogMjQsXHJcbiAgICBtYXg6IDMyLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWl0ZW0taGVpZ2h0Jzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXpobnpq5jluqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICczOHB4JyxcclxuICAgIG1pbjogMjQsXHJcbiAgICBtYXg6IDY0LFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXRleHQtY29sb3InOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOminOiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxyXG4gICAgcmdiYTogdHJ1ZSxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWhvdmVyLWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzmgqzlgZzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXHJcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWdyb3VwLXRleHQtY29sb3InOiB7XHJcbiAgICBsYWJlbDogJ+iPnOWNleWIhue7hOaWh+acrOminOiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxyXG4gICAgcmdiYTogdHJ1ZSxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC10ZXh0LWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bmlofmnKzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXHJcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLWJnJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bog4zmma/popzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZmNmY2ZjJyxcclxuICB9LFxyXG4gIC8vIOWGheWuuVxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNmNWY3ZmEnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJnJzoge1xyXG4gICAgbGFiZWw6ICfmoIfpopjog4zmma/oibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZmFmYmZjJyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1ib3JkZXInOiB7XHJcbiAgICBsYWJlbDogJ+agh+mimOW6lemDqOi+ueahhuiJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNlZmUzZTUnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1wYWRkaW5nJzoge1xyXG4gICAgbGFiZWw6ICflhoXovrnot50nLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMTI4LFxyXG4gICAgc3RlcDogOCxcclxuICB9LFxyXG4gIC8vIHpvcnJv57uE5Lu25L+u5q2jXHJcbiAgJ2Zvcm0tc3RhdGUtdmlzdWFsLWZlZWRiYWNrLWVuYWJsZWQnOiB7XHJcbiAgICBsYWJlbDogJ+W8gOWQr+ihqOWNleWFg+e0oOeahOinhuinieWPjemmiCcsXHJcbiAgICB0eXBlOiAnc3dpdGNoJyxcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICAncHJlc2VydmUtd2hpdGUtc3BhY2VzLWVuYWJsZWQnOiB7XHJcbiAgICBsYWJlbDogJ+W8gOWQryBwcmVzZXJ2ZVdoaXRlc3BhY2VzJyxcclxuICAgIHR5cGU6ICdzd2l0Y2gnLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gICduei10YWJsZS1pbWctcmFkaXVzJzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflnIbop5InLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc0cHgnLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMjgsXHJcbiAgfSxcclxuICAnbnotdGFibGUtaW1nLW1hcmdpbi1yaWdodCc6IHtcclxuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5Y+z5aSW6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNHB4JyxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1tYXgtd2lkdGgnOiB7XHJcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+acgOWkp+WuveW6picsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzMycHgnLFxyXG4gICAgbWluOiA4LFxyXG4gICAgbWF4OiAxMjgsXHJcbiAgfSxcclxuICAnbnotdGFibGUtaW1nLW1heC1oZWlnaHQnOiB7XHJcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+acgOWkp+mrmOW6picsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzMycHgnLFxyXG4gICAgbWluOiA4LFxyXG4gICAgbWF4OiAxMjgsXHJcbiAgfSxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGxvYWRlZExlc3MgPSBmYWxzZTtcclxuXHJcbiAgY29sbGFwc2UgPSBmYWxzZTtcclxuICBnZXQgbGF5b3V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XHJcbiAgfVxyXG4gIGRhdGE6IGFueSA9IHt9O1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgY29sb3JzID0gREVGQVVMVF9DT0xPUlM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBtc2c6IE56TWVzc2FnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jYWNoZWREYXRhWydAcHJpbWFyeS1jb2xvciddIHx8IHRoaXMuREVGQVVMVF9QUklNQVJZO1xyXG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBjYWNoZWREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXRbQUxBSU5ERUZBVUxUVkFSXSB8fCB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IERFRkFVTFRfUFJJTUFSWSgpIHtcclxuICAgIHJldHVybiBERUZBVUxUX1ZBUlNbJ3ByaW1hcnktY29sb3InXS5kZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTGVzcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmxvYWRlZExlc3MpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGF6eVxyXG4gICAgICAubG9hZFN0eWxlKCcuL2Fzc2V0cy9hbGFpbi1kZWZhdWx0Lmxlc3MnLCAnc3R5bGVzaGVldC9sZXNzJylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlc3NDb25maWdOb2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgbGVzc0NvbmZpZ05vZGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnY6ICdwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5LmxvYWRTY3JpcHQoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vb3MvbGliL2xlc3MuanMvMy44LjEvbGVzcy5taW4uanMnKSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkTGVzcyA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5WYXJzKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjb2xvciwgdmFsaWRLZXlzIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdmFyczogYW55ID0ge1xyXG4gICAgICBbYEBwcmltYXJ5LWNvbG9yYF06IGNvbG9yLFxyXG4gICAgfTtcclxuICAgIHZhbGlkS2V5cy5maWx0ZXIoKGtleSkgPT4ga2V5ICE9PSAncHJpbWFyeS1jb2xvcicpLmZvckVhY2goKGtleSkgPT4gKHZhcnNbYEAke2tleX1gXSA9IGRhdGFba2V5XS52YWx1ZSkpO1xyXG4gICAgdGhpcy5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB2YXJzKTtcclxuICAgIHJldHVybiB2YXJzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5MZXNzKCkge1xyXG4gICAgY29uc3QgeyB6b25lLCBtc2csIGNkciB9ID0gdGhpcztcclxuICAgIGNvbnN0IG1zZ0lkID0gbXNnLmxvYWRpbmcoYOato+WcqOe8luivkeS4u+mimO+8gWAsIHsgbnpEdXJhdGlvbjogMCB9KS5tZXNzYWdlSWQ7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkTGVzcygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmxlc3MubW9kaWZ5VmFycyh0aGlzLmdlblZhcnMoKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1zZy5zdWNjZXNzKCfmiJDlip8nKTtcclxuICAgICAgICAgICAgbXNnLnJlbW92ZShtc2dJZCk7XHJcbiAgICAgICAgICAgIHpvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIE9iamVjdC5rZXlzKERFRkFVTFRfVkFSUylcclxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBERUZBVUxUX1ZBUlNba2V5XS5kZWZhdWx0ID09PSAnQHByaW1hcnktY29sb3InKVxyXG4gICAgICAuZm9yRWFjaCgoa2V5KSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xyXG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KG5hbWUsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXREYXRhKG5vd0RhdGE/OiB7fSwgcnVuID0gdHJ1ZSkge1xyXG4gICAgbm93RGF0YSA9IG5vd0RhdGEgfHwge307XHJcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IG5vd0RhdGFbYEAke2tleX1gXSB8fCBkYXRhW2tleV0uZGVmYXVsdCB8fCAnJztcclxuICAgICAgZGF0YVtrZXldLnZhbHVlID0gdmFsdWUgPT09IGBAcHJpbWFyeS1jb2xvcmAgPyB0aGlzLmNvbG9yIDogdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICBpZiAocnVuKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgdGhpcy5ydW5MZXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCB2YWxpZEtleXMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKChrZXkpID0+IHRoaXMuZGF0YVtrZXldLnZhbHVlICE9PSB0aGlzLmRhdGFba2V5XS5kZWZhdWx0KTtcclxuICB9XHJcblxyXG4gIGFwcGx5KCkge1xyXG4gICAgdGhpcy5ydW5MZXNzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcclxuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB7fSk7XHJcbiAgICB0aGlzLnJlc2V0RGF0YSh7fSk7XHJcbiAgfVxyXG5cclxuICBjb3B5VmFyKCkge1xyXG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xyXG4gICAgY29uc3QgY29weUNvbnRlbnQgPSBPYmplY3Qua2V5cyh2YXJzKVxyXG4gICAgICAubWFwKChrZXkpID0+IGAke2tleX06ICR7dmFyc1trZXldfTtgKVxyXG4gICAgICAuam9pbignXFxuJyk7XHJcbiAgICBjb3B5KGNvcHlDb250ZW50KTtcclxuICAgIHRoaXMubXNnLnN1Y2Nlc3MoJ0NvcHkgc3VjY2VzcycpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotZHJhd2VyIFsobnpWaXNpYmxlKV09XCJjb2xsYXBzZVwiIFtueldpZHRoXT1cIjUwMFwiIChuek9uQ2xvc2UpPVwidG9nZ2xlKClcIj5cclxuICA8ZGl2IGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX2NvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keSBzZXR0aW5nLWRyYXdlcl9fdGhlbWVcIj5cclxuICAgICAgPGgzIGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX3RpdGxlXCI+5Li76aKY6ImyPC9oMz5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdGb3I9XCJsZXQgYyBvZiBjb2xvcnNcIlxyXG4gICAgICAgIFtzdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYy5jb2xvciB9XCJcclxuICAgICAgICAoY2xpY2spPVwiY2hhbmdlQ29sb3IoYy5jb2xvcilcIlxyXG4gICAgICAgIG56LXRvb2x0aXBcclxuICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwiYy5rZXlcIlxyXG4gICAgICAgIGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX3RoZW1lLXRhZ1wiXHJcbiAgICAgICAgPjxpICpuZ0lmPVwiY29sb3IgPT09IGMuY29sb3JcIiBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kaXZpZGVyPjwvbnotZGl2aWRlcj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keVwiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fdGl0bGVcIj7orr7nva48L2gzPlxyXG4gICAgICA8bnotdGFic2V0PlxyXG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIumhtumDqFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5XCI+XHJcbiAgICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWhnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XHJcbiAgICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWJnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XHJcbiAgICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbnotdGFiPlxyXG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuS+p+i+ueagj1wiPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS13ZCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtd2QnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXBhZGRpbmctdG9wLWJvdHRvbSddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgIDwvbnotdGFiPlxyXG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuWGheWuuVwiPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1jb250ZW50LWJnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XHJcbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XHJcbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWNvbnRlbnQtcGFkZGluZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgIDwvbnotdGFiPlxyXG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuWFtuWug1wiPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnZm9ybS1zdGF0ZS12aXN1YWwtZmVlZGJhY2stZW5hYmxlZCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxyXG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsncHJlc2VydmUtd2hpdGUtc3BhY2VzLWVuYWJsZWQnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1yYWRpdXMnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1tYXgtd2lkdGgnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cclxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0J11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XHJcbiAgICAgICAgPC9uei10YWI+XHJcbiAgICAgIDwvbnotdGFic2V0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX2JvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1cIj5cclxuICAgICAgICDlm7rlrprlpLTlkozkvqfovrnmoI9cclxuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJsYXlvdXQuZml4ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRMYXlvdXQoJ2ZpeGVkJywgbGF5b3V0LmZpeGVkKVwiPjwvbnotc3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1cIj5cclxuICAgICAgICDoibLlvLHmqKHlvI9cclxuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJsYXlvdXQuY29sb3JXZWFrXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0TGF5b3V0KCdjb2xvcldlYWsnLCBsYXlvdXQuY29sb3JXZWFrKVwiPjwvbnotc3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYXBwbHkoKVwiIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiPumihOiniDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+6YeN572uPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJjb3B5VmFyKClcIiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPuaLt+i0nTwvYnV0dG9uPlxyXG4gICAgPG56LWFsZXJ0XHJcbiAgICAgIGNsYXNzPVwibXQtbWRcIlxyXG4gICAgICBuelR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgbnpNZXNzYWdlPVwi6YWN572u5qCP5Y+q5Zyo5byA5Y+R546v5aKD55So5LqO6aKE6KeI77yM55Sf5Lqn546v5aKD5LiN5Lya5bGV546w77yM6K+35ou36LSd5ZCO5omL5Yqo5L+u5pS55Y+C5pWw6YWN572u5paH5Lu2IHNyYy9zdHlsZXMvdGhlbWUubGVzc1wiXHJcbiAgICA+PC9uei1hbGVydD5cclxuICA8L2Rpdj5cclxuPC9uei1kcmF3ZXI+XHJcbjxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9faGFuZGxlXCIgW25nQ2xhc3NdPVwieyAnc2V0dGluZy1kcmF3ZXJfX2hhbmRsZS1vcGVuZWQnOiBjb2xsYXBzZSB9XCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiFjb2xsYXBzZSA/ICdzZXR0aW5nJyA6ICdjbG9zZSdcIiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19oYW5kbGUtaWNvblwiPjwvaT5cclxuPC9kaXY+XHJcbiJdfQ==