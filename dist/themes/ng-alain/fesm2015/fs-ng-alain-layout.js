import { ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵpureFunction0, ɵɵprojection, ɵɵdefineComponent, ɵɵclassProp, ɵɵprojectionDef, ɵɵtext, ɵɵtemplate, ɵɵtextInterpolate, ɵsetClassMetadata, Component, Input, ɵɵelement, ɵɵstyleMap, ɵɵpureFunction1, ɵɵdirectiveInject, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, Inject, ɵɵpipe, ɵɵreference, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵattribute, ɵɵtemplateRefExtractor, ɵɵpropertyInterpolate, ɵɵpropertyInterpolate1, Renderer2, ɵɵnamespaceSVG, ɵɵnamespaceHTML, ComponentFactoryResolver, ElementRef, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ViewChild, ɵɵresolveWindow, HostListener, HostBinding, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { SharedModule } from '@fs/ng-alain/shared';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, DOCUMENT, NgForOf, NgClass, NgIf, AsyncPipe } from '@angular/common';
import { Router, RouterLink, RouterLinkWithHref, RouteConfigLoadStart, NavigationError, NavigationCancel, NavigationEnd, RouteConfigLoadEnd, RouterOutlet } from '@angular/router';
import { SettingsService, ALAIN_I18N_TOKEN, MenuService } from '@delon/theme';
import { deepCopy, copy, LazyService, InputBoolean, AlainConfigService, updateHostClass } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from 'ng-zorro-antd/drawer';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzTabSetComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { DefaultValueAccessor, NgControlStatus, NgModel } from '@angular/forms';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { SessionState, SetLanguage, ConfigState, AuthService, LocalizationPipe, RoutesService, ConfigStateService } from '@abp/ng.core';
import { Store, Select } from '@ngxs/store';
import { NzDropdownMenuComponent, NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemDirective, NzMenuDividerDirective } from 'ng-zorro-antd/menu';
import { __decorate, __metadata } from 'tslib';
import { I18NService } from '@fs/ng-alain/core';
import snq from 'snq';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { SidebarNavComponent } from '@delon/abc/sidebar-nav';
import { TranslatePipe } from '@ngx-translate/core';
import * as screenfull from 'screenfull';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import add from 'date-fns/add';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NoticeIconComponent } from '@delon/abc/notice-icon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { GlobalFooterComponent } from '@delon/abc/global-footer';

const _c0 = function () { return { standalone: true }; };
function SettingDrawerItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 4);
    ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_5_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r6); const ctx_r5 = ɵɵnextContext(); return ctx_r5.i.value = $event; });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r0.i.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 5);
    ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_6_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r8); const ctx_r7 = ɵɵnextContext(); return ctx_r7.i.value = $event; });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r1.i.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-input-number", 6);
    ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.pxVal = $event; })("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.pxChange($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r2.pxVal)("nzMin", ctx_r2.i.min)("nzMax", ctx_r2.i.max)("nzStep", ctx_r2.i.step || 2)("nzFormatter", ctx_r2.format);
} }
function SettingDrawerItemComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "nz-switch", 7);
    ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_8_Template_nz_switch_ngModelChange_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(); return ctx_r12.i.value = $event; });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r3.i.value)("ngModelOptions", ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
} }
const _c1 = ["*"];
class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = value => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.ɵfac = function SettingDrawerItemComponent_Factory(t) { return new (t || SettingDrawerItemComponent)(); };
SettingDrawerItemComponent.ɵcmp = ɵɵdefineComponent({ type: SettingDrawerItemComponent, selectors: [["setting-drawer-item"]], hostVars: 2, hostBindings: function SettingDrawerItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("setting-drawer__body-item", true);
    } }, inputs: { data: "data" }, ngContentSelectors: _c1, decls: 10, vars: 7, consts: [[1, "pl-sm", "text-grey"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-input", "", "type", "color", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nz-input", "", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "nzFormatter", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function SettingDrawerItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span");
        ɵɵtext(1);
        ɵɵelementStart(2, "span", 0);
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 1);
        ɵɵtemplate(5, SettingDrawerItemComponent_ng_container_5_Template, 2, 3, "ng-container", 2);
        ɵɵtemplate(6, SettingDrawerItemComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        ɵɵtemplate(7, SettingDrawerItemComponent_ng_container_7_Template, 2, 5, "ng-container", 2);
        ɵɵtemplate(8, SettingDrawerItemComponent_ng_container_8_Template, 2, 3, "ng-container", 2);
        ɵɵtemplate(9, SettingDrawerItemComponent_ng_container_9_Template, 2, 0, "ng-container", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.i.label);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.i.tip);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitch", ctx.i.type);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "color");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "input");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "px");
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", "switch");
    } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzInputNumberComponent, NzSwitchComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingDrawerItemComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'setting-drawer-item',
                templateUrl: './setting-drawer-item.component.html',
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.setting-drawer__body-item]': 'true',
                },
            }]
    }], null, { data: [{
            type: Input
        }] }); })();

function SettingDrawerComponent_span_5_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 20);
} }
const _c0$1 = function (a0) { return { "background-color": a0 }; };
function SettingDrawerComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function SettingDrawerComponent_span_5_Template_span_click_0_listener() { ɵɵrestoreView(_r4); const c_r1 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); return ctx_r3.changeColor(c_r1.color); });
    ɵɵtemplate(1, SettingDrawerComponent_span_5_i_1_Template, 1, 0, "i", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(4, _c0$1, c_r1.color));
    ɵɵproperty("nzTooltipTitle", c_r1.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.color === c_r1.color);
} }
const _c1$1 = function (a0) { return { "setting-drawer__handle-opened": a0 }; };
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
class SettingDrawerComponent {
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
SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(LazyService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT)); };
SettingDrawerComponent.ɵcmp = ɵɵdefineComponent({ type: SettingDrawerComponent, selectors: [["setting-drawer"]], hostVars: 2, hostBindings: function SettingDrawerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("setting-drawer", true);
    } }, decls: 51, vars: 26, consts: [[3, "nzVisible", "nzWidth", "nzVisibleChange", "nzOnClose"], [1, "setting-drawer__content"], [1, "setting-drawer__body", "setting-drawer__theme"], [1, "setting-drawer__title"], ["nz-tooltip", "", "class", "setting-drawer__theme-tag", 3, "style", "nzTooltipTitle", "click", 4, "ngFor", "ngForOf"], [1, "setting-drawer__body"], ["nzTitle", "\u9876\u90E8"], [3, "data"], ["nzTitle", "\u4FA7\u8FB9\u680F"], ["nzTitle", "\u5185\u5BB9"], ["nzTitle", "\u5176\u5B83"], [1, "setting-drawer__body-item"], ["nzSize", "small", 3, "ngModel", "ngModelChange"], ["type", "button", "nz-button", "", "nzType", "primary", 3, "click"], ["type", "button", "nz-button", "", 3, "click"], ["nzType", "warning", "nzMessage", "\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less", 1, "mt-md"], [1, "setting-drawer__handle", 3, "ngClass", "click"], ["nz-icon", "", 1, "setting-drawer__handle-icon", 3, "nzType"], ["nz-tooltip", "", 1, "setting-drawer__theme-tag", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "check", 4, "ngIf"], ["nz-icon", "", "nzType", "check"]], template: function SettingDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-drawer", 0);
        ɵɵlistener("nzVisibleChange", function SettingDrawerComponent_Template_nz_drawer_nzVisibleChange_0_listener($event) { return ctx.collapse = $event; })("nzOnClose", function SettingDrawerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.toggle(); });
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "h3", 3);
        ɵɵtext(4, "\u4E3B\u9898\u8272");
        ɵɵelementEnd();
        ɵɵtemplate(5, SettingDrawerComponent_span_5_Template, 2, 6, "span", 4);
        ɵɵelementEnd();
        ɵɵelement(6, "nz-divider");
        ɵɵelementStart(7, "div", 5);
        ɵɵelementStart(8, "h3", 3);
        ɵɵtext(9, "\u8BBE\u7F6E");
        ɵɵelementEnd();
        ɵɵelementStart(10, "nz-tabset");
        ɵɵelementStart(11, "nz-tab", 6);
        ɵɵelementStart(12, "div", 5);
        ɵɵelement(13, "setting-drawer-item", 7);
        ɵɵelement(14, "setting-drawer-item", 7);
        ɵɵelement(15, "setting-drawer-item", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "nz-tab", 8);
        ɵɵelement(17, "setting-drawer-item", 7);
        ɵɵelement(18, "setting-drawer-item", 7);
        ɵɵelement(19, "setting-drawer-item", 7);
        ɵɵelement(20, "setting-drawer-item", 7);
        ɵɵelementEnd();
        ɵɵelementStart(21, "nz-tab", 9);
        ɵɵelement(22, "setting-drawer-item", 7);
        ɵɵelement(23, "setting-drawer-item", 7);
        ɵɵelement(24, "setting-drawer-item", 7);
        ɵɵelement(25, "setting-drawer-item", 7);
        ɵɵelementEnd();
        ɵɵelementStart(26, "nz-tab", 10);
        ɵɵelement(27, "setting-drawer-item", 7);
        ɵɵelement(28, "setting-drawer-item", 7);
        ɵɵelement(29, "setting-drawer-item", 7);
        ɵɵelement(30, "setting-drawer-item", 7);
        ɵɵelement(31, "setting-drawer-item", 7);
        ɵɵelement(32, "setting-drawer-item", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(33, "nz-divider");
        ɵɵelementStart(34, "div", 5);
        ɵɵelementStart(35, "div", 11);
        ɵɵtext(36, " \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F ");
        ɵɵelementStart(37, "nz-switch", 12);
        ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener($event) { return ctx.layout.fixed = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_37_listener() { return ctx.setLayout("fixed", ctx.layout.fixed); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "div", 11);
        ɵɵtext(39, " \u8272\u5F31\u6A21\u5F0F ");
        ɵɵelementStart(40, "nz-switch", 12);
        ɵɵlistener("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.layout.colorWeak = $event; })("ngModelChange", function SettingDrawerComponent_Template_nz_switch_ngModelChange_40_listener() { return ctx.setLayout("colorWeak", ctx.layout.colorWeak); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(41, "nz-divider");
        ɵɵelementStart(42, "button", 13);
        ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_42_listener() { return ctx.apply(); });
        ɵɵtext(43, "\u9884\u89C8");
        ɵɵelementEnd();
        ɵɵelementStart(44, "button", 14);
        ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_44_listener() { return ctx.reset(); });
        ɵɵtext(45, "\u91CD\u7F6E");
        ɵɵelementEnd();
        ɵɵelementStart(46, "button", 14);
        ɵɵlistener("click", function SettingDrawerComponent_Template_button_click_46_listener() { return ctx.copyVar(); });
        ɵɵtext(47, "\u62F7\u8D1D");
        ɵɵelementEnd();
        ɵɵelement(48, "nz-alert", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(49, "div", 16);
        ɵɵlistener("click", function SettingDrawerComponent_Template_div_click_49_listener() { return ctx.toggle(); });
        ɵɵelement(50, "i", 17);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzVisible", ctx.collapse)("nzWidth", 500);
        ɵɵadvance(5);
        ɵɵproperty("ngForOf", ctx.colors);
        ɵɵadvance(8);
        ɵɵproperty("data", ctx.data["alain-default-header-hg"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-header-bg"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-header-padding"]);
        ɵɵadvance(2);
        ɵɵproperty("data", ctx.data["alain-default-aside-wd"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-aside-bg"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-aside-collapsed-wd"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-aside-nav-padding-top-bottom"]);
        ɵɵadvance(2);
        ɵɵproperty("data", ctx.data["alain-default-content-bg"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-content-heading-bg"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-content-heading-border"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["alain-default-content-padding"]);
        ɵɵadvance(2);
        ɵɵproperty("data", ctx.data["form-state-visual-feedback-enabled"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["preserve-white-spaces-enabled"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["nz-table-img-radius"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["nz-table-img-margin-right"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["nz-table-img-max-width"]);
        ɵɵadvance(1);
        ɵɵproperty("data", ctx.data["nz-table-img-max-height"]);
        ɵɵadvance(5);
        ɵɵproperty("ngModel", ctx.layout.fixed);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.layout.colorWeak);
        ɵɵadvance(9);
        ɵɵproperty("ngClass", ɵɵpureFunction1(24, _c1$1, ctx.collapse));
        ɵɵadvance(1);
        ɵɵproperty("nzType", !ctx.collapse ? "setting" : "close");
    } }, directives: [NzDrawerComponent, NgForOf, NzDividerComponent, NzTabSetComponent, NzTabComponent, SettingDrawerItemComponent, NzSwitchComponent, NgControlStatus, NgModel, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, NzAlertComponent, NgClass, NzIconDirective, NzTooltipDirective, NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingDrawerComponent, [{
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
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzMessageService }, { type: SettingsService }, { type: LazyService }, { type: NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

function HeaderI18nComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "i", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "i", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵproperty("nzDropdownMenu", _r2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, ctx_r0.defaultLanguage$), " ");
} }
function HeaderI18nComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 8);
} if (rf & 2) {
    ɵɵnextContext();
    const _r2 = ɵɵreference(3);
    ɵɵproperty("nzDropdownMenu", _r2);
} }
function HeaderI18nComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function HeaderI18nComponent_li_5_Template_li_click_0_listener() { ɵɵrestoreView(_r6); const lang_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.onChangeLang(lang_r4.cultureName); });
    ɵɵelementStart(1, "span", 10);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("nzSelected", lang_r4.cultureName === ctx_r3.selectedLangCulture);
    ɵɵadvance(1);
    ɵɵattribute("aria-label", lang_r4 == null ? null : lang_r4.displayName);
    ɵɵadvance(1);
    ɵɵtextInterpolate(lang_r4.cultureName);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", lang_r4 == null ? null : lang_r4.displayName, " ");
} }
class HeaderI18nComponent {
    constructor(settings, i18n, doc, store) {
        this.settings = settings;
        this.i18n = i18n;
        this.doc = doc;
        this.store = store;
        /** Whether to display language text */
        this.showLangText = true;
    }
    get defaultLanguage$() {
        return this.languages$.pipe(map(languages => snq(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(map(languages => snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    get langs() {
        return this.i18n.getLangs();
    }
    get curLangCode() {
        return this.settings.layout.lang;
    }
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
}
HeaderI18nComponent.ɵfac = function HeaderI18nComponent_Factory(t) { return new (t || HeaderI18nComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(ALAIN_I18N_TOKEN), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Store)); };
HeaderI18nComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderI18nComponent, selectors: [["header-i18n"]], inputs: { showLangText: "showLangText" }, decls: 7, vars: 5, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu", 4, "ngIf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu", 4, "ngIf"], ["langMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["nz-dropdown", "", "nzPlacement", "bottomRight", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "global"], ["nz-icon", "", "nzType", "down"], ["nz-dropdown", "", "nzPlacement", "bottomRight", "nz-icon", "", "nzType", "global", 3, "nzDropdownMenu"], ["nz-menu-item", "", 3, "nzSelected", "click"], ["role", "img", 1, "pr-xs"]], template: function HeaderI18nComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, HeaderI18nComponent_div_0_Template, 5, 4, "div", 0);
        ɵɵtemplate(1, HeaderI18nComponent_i_1_Template, 1, 1, "i", 1);
        ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
        ɵɵelementStart(4, "ul", 3);
        ɵɵtemplate(5, HeaderI18nComponent_li_5_Template, 4, 4, "li", 4);
        ɵɵpipe(6, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.showLangText);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.showLangText);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 3, ctx.dropdownLanguages$));
    } }, directives: [NgIf, NzDropdownMenuComponent, NzMenuDirective, NgForOf, NzDropDownDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzMenuItemDirective], pipes: [AsyncPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], HeaderI18nComponent.prototype, "languages$", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], HeaderI18nComponent.prototype, "showLangText", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderI18nComponent, [{
        type: Component,
        args: [{
                selector: 'header-i18n',
                template: `
    <div *ngIf="showLangText" nz-dropdown [nzDropdownMenu]="langMenu" nzPlacement="bottomRight">
      <i nz-icon nzType="global"></i>
      {{ defaultLanguage$ | async }}
      <i nz-icon nzType="down"></i>
    </div>
    <i
      *ngIf="!showLangText"
      nz-dropdown
      [nzDropdownMenu]="langMenu"
      nzPlacement="bottomRight"
      nz-icon
      nzType="global"
    ></i>
    <nz-dropdown-menu #langMenu="nzDropdownMenu">
      <ul nz-menu>
        <li
          nz-menu-item
          *ngFor="let lang of dropdownLanguages$ | async"
          [nzSelected]="lang.cultureName === selectedLangCulture"
          (click)="onChangeLang(lang.cultureName)"
        >
          <span role="img" [attr.aria-label]="lang?.displayName" class="pr-xs">{{ lang.cultureName }}</span>
          {{ lang?.displayName }}
        </li>
      </ul>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: SettingsService }, { type: I18NService, decorators: [{
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: Store }]; }, { languages$: [], showLangText: [{
            type: Input
        }] }); })();

class HeaderUserComponent {
    constructor(settings, router, authService, tokenService) {
        this.settings = settings;
        this.router = router;
        this.authService = authService;
        this.tokenService = tokenService;
    }
    logout() {
        //this.tokenService.clear();
        //this.router.navigateByUrl(this.tokenService.login_url);
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/'], { state: { redirectUrl: this.router.url } });
        });
    }
}
HeaderUserComponent.ɵfac = function HeaderUserComponent_Factory(t) { return new (t || HeaderUserComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(DA_SERVICE_TOKEN)); };
HeaderUserComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderUserComponent, selectors: [["header-user"]], decls: 15, vars: 10, consts: [["nz-dropdown", "", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", "d-flex", "align-items-center", "px-sm", 3, "nzDropdownMenu"], ["userMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "width-sm"], ["nz-menu-item", "", "routerLink", "/account/manage-profile"], ["nz-icon", "", "nzType", "user", 1, "mr-sm"], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "logout", 1, "mr-sm"]], template: function HeaderUserComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1);
        ɵɵpipe(2, "async");
        ɵɵelementEnd();
        ɵɵelementStart(3, "nz-dropdown-menu", null, 1);
        ɵɵelementStart(5, "div", 2);
        ɵɵelementStart(6, "div", 3);
        ɵɵelement(7, "i", 4);
        ɵɵtext(8);
        ɵɵpipe(9, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelement(10, "li", 5);
        ɵɵelementStart(11, "div", 6);
        ɵɵlistener("click", function HeaderUserComponent_Template_div_click_11_listener() { return ctx.logout(); });
        ɵɵelement(12, "i", 7);
        ɵɵtext(13);
        ɵɵpipe(14, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(4);
        var tmp_1_0 = null;
        ɵɵproperty("nzDropdownMenu", _r0);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", (tmp_1_0 = ɵɵpipeBind1(2, 4, ctx.currentUser$)) == null ? null : tmp_1_0.userName, " ");
        ɵɵadvance(7);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 6, "AbpAccount::ManageYourProfile"), " ");
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 8, "AbpUi::Logout"), " ");
    } }, directives: [NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, ɵNzTransitionPatchDirective, NzMenuItemDirective, RouterLink, NzIconDirective, NzMenuDividerDirective], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2, changeDetection: 0 });
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], HeaderUserComponent.prototype, "currentUser$", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderUserComponent, [{
        type: Component,
        args: [{
                selector: 'header-user',
                template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <!--<nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>-->
      {{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/account/manage-profile">
          <i nz-icon nzType="user" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <!--<div nz-menu-item routerLink="/pro/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'menu.account.settings' | translate }}
        </div>
        <div nz-menu-item routerLink="/exception/trigger">
          <i nz-icon nzType="close-circle" class="mr-sm"></i>
          {{ 'menu.account.trigger' | translate }}
        </div>-->
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: SettingsService }, { type: Router }, { type: AuthService }, { type: undefined, decorators: [{
                type: Inject,
                args: [DA_SERVICE_TOKEN]
            }] }]; }, { currentUser$: [] }); })();

function HeaderComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.appInfo.name, " ");
} }
const _c0$2 = function () { return ["/"]; };
class HeaderComponent {
    constructor(settings, store) {
        this.settings = settings;
        this.store = store;
    }
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    toggleCollapsedSidebar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    searchToggleChange() {
        this.searchToggleStatus = !this.searchToggleStatus;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(Store)); };
HeaderComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderComponent, selectors: [["layout-header"]], decls: 22, vars: 6, consts: [[1, "alain-default__header-logo"], [1, "alain-default__header-logo-link", 3, "routerLink"], ["src", "./assets/logo-full.svg", 1, "alain-default__header-logo-expanded", 2, "max-height", "40px", 3, "alt"], ["src", "./assets/logo.svg", 1, "alain-default__header-logo-collapsed", 2, "max-height", "30px", 3, "alt"], ["appName", ""], [1, "alain-default__nav-wrap"], [1, "alain-default__nav"], [1, "alain-default__nav-item", 3, "click"], ["nz-icon", "", 3, "nzType"], ["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "setting"], ["settingsMenu", "nzDropdownMenu"], ["nz-menu", "", 2, "width", "200px"], ["nz-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "a", 1);
        ɵɵelement(2, "img", 2);
        ɵɵelement(3, "img", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, HeaderComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 5);
        ɵɵelementStart(7, "ul", 6);
        ɵɵelementStart(8, "li");
        ɵɵelementStart(9, "div", 7);
        ɵɵlistener("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.toggleCollapsedSidebar(); });
        ɵɵelement(10, "i", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "ul", 6);
        ɵɵelementStart(12, "li");
        ɵɵelementStart(13, "div", 9);
        ɵɵelement(14, "i", 10);
        ɵɵelementEnd();
        ɵɵelementStart(15, "nz-dropdown-menu", null, 11);
        ɵɵelementStart(17, "div", 12);
        ɵɵelementStart(18, "div", 13);
        ɵɵelement(19, "header-i18n");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "li");
        ɵɵelement(21, "header-user");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = ɵɵreference(16);
        ɵɵadvance(1);
        ɵɵproperty("routerLink", ɵɵpureFunction0(5, _c0$2));
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("alt", ctx.appInfo.name);
        ɵɵadvance(7);
        ɵɵpropertyInterpolate1("nzType", "menu-", ctx.settings.layout.collapsed ? "unfold" : "fold", "");
        ɵɵadvance(3);
        ɵɵproperty("nzDropdownMenu", _r2);
    } }, directives: [RouterLinkWithHref, ɵNzTransitionPatchDirective, NzIconDirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, HeaderI18nComponent, HeaderUserComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'layout-header',
                templateUrl: './header.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: SettingsService }, { type: Store }]; }, null); })();

class SidebarComponent {
    constructor(settings, menuService, routes, configStateService, localizationPipe) {
        this.settings = settings;
        this.menuService = menuService;
        this.routes = routes;
        this.configStateService = configStateService;
        this.localizationPipe = localizationPipe;
        this.routes.visible$.subscribe(x => {
            this.setMenu(x);
        });
    }
    setMenu(routes) {
        let result = [];
        let condition = (x) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
        routes.filter(condition).forEach(first => {
            let group = {
                text: this.localizationPipe.transform(first.name),
                group: true,
                hideInBreadcrumb: true,
                children: []
            };
            result.push(group);
            first.children.filter(condition).forEach(second => {
                if (second.children.length === 0) {
                    let left = {
                        text: this.localizationPipe.transform(second.name),
                        link: second.path,
                        icon: second.iconClass
                    };
                    if (left.link.split('/').length > 2)
                        group.children.push(left);
                }
                if (second.children.length != 0) {
                    let node = {
                        text: this.localizationPipe.transform(second.name),
                        icon: second.iconClass,
                        children: []
                    };
                    group.children.push(node);
                    second.children.filter(condition).forEach(third => {
                        let left = {
                            text: this.localizationPipe.transform(third.name),
                            link: third.path,
                            icon: third.iconClass
                        };
                        node.children.push(left);
                    });
                }
            });
        });
        this.menuService.clear();
        this.menuService.add(result);
    }
    isGrantedPolicy(requiredPolicy) {
        if (!!requiredPolicy) {
            return this.configStateService.getGrantedPolicy(requiredPolicy);
        }
        return true;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(RoutesService), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(LocalizationPipe)); };
SidebarComponent.ɵcmp = ɵɵdefineComponent({ type: SidebarComponent, selectors: [["layout-sidebar"]], decls: 11, vars: 6, consts: [[1, "alain-default__aside-inner"], ["userMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "routerLink", "/pro/account/center"], ["nz-menu-item", "", "routerLink", "/pro/account/settings"], [1, "d-block", "py-lg"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "nz-dropdown-menu", null, 1);
        ɵɵelementStart(3, "ul", 2);
        ɵɵelementStart(4, "li", 3);
        ɵɵtext(5);
        ɵɵpipe(6, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(7, "li", 4);
        ɵɵtext(8);
        ɵɵpipe(9, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(10, "sidebar-nav", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵtextInterpolate(ɵɵpipeBind1(6, 2, "menu.account.center"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(9, 4, "menu.account.settings"));
    } }, directives: [NzDropdownMenuComponent, NzMenuDirective, ɵNzTransitionPatchDirective, NzMenuItemDirective, RouterLink, SidebarNavComponent], pipes: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{
                selector: 'layout-sidebar',
                templateUrl: './sidebar.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: SettingsService }, { type: MenuService }, { type: RoutesService }, { type: ConfigStateService }, { type: LocalizationPipe }]; }, null); })();

class LayoutThemeBtnComponent {
    constructor(renderer, configSrv) {
        this.renderer = renderer;
        this.configSrv = configSrv;
        this.theme = 'default';
    }
    ngOnInit() {
        this.initTheme();
    }
    initTheme() {
        this.theme = localStorage.getItem('site-theme') || 'default';
        this.updateChartTheme();
        this.onThemeChange(this.theme);
    }
    updateChartTheme() {
        this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
    }
    onThemeChange(theme) {
        this.theme = theme;
        this.renderer.setAttribute(document.body, 'data-theme', theme);
        const dom = document.getElementById('site-theme');
        if (dom) {
            dom.remove();
        }
        localStorage.removeItem('site-theme');
        if (theme !== 'default') {
            const style = document.createElement('link');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.id = 'site-theme';
            style.href = `assets/style.${theme}.css`;
            localStorage.setItem('site-theme', theme);
            document.body.append(style);
        }
        this.updateChartTheme();
    }
}
LayoutThemeBtnComponent.ɵfac = function LayoutThemeBtnComponent_Factory(t) { return new (t || LayoutThemeBtnComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AlainConfigService)); };
LayoutThemeBtnComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutThemeBtnComponent, selectors: [["layout-theme-btn"]], decls: 14, vars: 1, consts: [["nz-dropdown", "", "nzPlacement", "topCenter", 1, "ant-avatar", "ant-avatar-circle", "ant-avatar-icon", 3, "nzDropdownMenu"], ["role", "img", "width", "21", "height", "21", "viewBox", "0 0 21 21", "fill", "currentColor", 1, "anticon"], ["fill-rule", "evenodd"], ["fill-rule", "nonzero"], ["d", "M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"]], template: function LayoutThemeBtnComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵnamespaceSVG();
        ɵɵelementStart(1, "svg", 1);
        ɵɵelementStart(2, "g", 2);
        ɵɵelementStart(3, "g", 3);
        ɵɵelement(4, "path", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(5, "nz-dropdown-menu", null, 5);
        ɵɵelementStart(7, "ul", 6);
        ɵɵelementStart(8, "li", 7);
        ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_8_listener() { return ctx.onThemeChange("default"); });
        ɵɵtext(9, "Default Theme");
        ɵɵelementEnd();
        ɵɵelementStart(10, "li", 7);
        ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_10_listener() { return ctx.onThemeChange("dark"); });
        ɵɵtext(11, "Dark Theme");
        ɵɵelementEnd();
        ɵɵelementStart(12, "li", 7);
        ɵɵlistener("click", function LayoutThemeBtnComponent_Template_li_click_12_listener() { return ctx.onThemeChange("compact"); });
        ɵɵtext(13, "Compact Theme");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(6);
        ɵɵproperty("nzDropdownMenu", _r0);
    } }, directives: [NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, ɵNzTransitionPatchDirective, NzMenuItemDirective], styles: ["[_nghost-%COMP%]    {bottom:102px;cursor:pointer;display:flex;flex-direction:column;position:fixed;right:32px;z-index:2147483640}[_nghost-%COMP%]    -active{color:#1890ff;font-size:22px;height:44px;line-height:44px;width:44px}[_nghost-%COMP%]     .ant-avatar{background-color:#fff;box-shadow:0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05);color:#000;transition:color .3s}[_nghost-%COMP%]     .ant-avatar:hover{color:#1890ff}"], changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutThemeBtnComponent, [{
        type: Component,
        args: [{
                selector: 'layout-theme-btn',
                templateUrl: './theme-btn.component.html',
                styleUrls: ['./theme-btn.component.less'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Renderer2 }, { type: AlainConfigService }]; }, null); })();

const _c0$3 = ["settingHost"];
function LayoutDefaultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 5);
} }
function LayoutDefaultComponent_ng_template_5_Template(rf, ctx) { }
class LayoutDefaultComponent {
    constructor(router, msgSrv, resolver, settings, el, renderer, doc) {
        this.resolver = resolver;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.unsubscribe$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt) => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    msgSrv.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngAfterViewInit() {
        // Setting componet for only developer
        if (true) {
            setTimeout(() => {
                const settingFactory = this.resolver.resolveComponentFactory(SettingDrawerComponent);
                this.settingHost.createComponent(settingFactory);
            }, 22);
        }
    }
    ngOnInit() {
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
LayoutDefaultComponent.ɵfac = function LayoutDefaultComponent_Factory(t) { return new (t || LayoutDefaultComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT)); };
LayoutDefaultComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutDefaultComponent, selectors: [["layout-default"]], viewQuery: function LayoutDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$3, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.settingHost = _t.first);
    } }, decls: 8, vars: 1, consts: [["class", "alain-default__progress-bar", 4, "ngIf"], [1, "alain-default__header"], [1, "alain-default__aside"], [1, "alain-default__content"], ["settingHost", ""], [1, "alain-default__progress-bar"]], template: function LayoutDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, LayoutDefaultComponent_div_0_Template, 1, 0, "div", 0);
        ɵɵelement(1, "layout-header", 1);
        ɵɵelement(2, "layout-sidebar", 2);
        ɵɵelementStart(3, "section", 3);
        ɵɵelement(4, "router-outlet");
        ɵɵelementEnd();
        ɵɵtemplate(5, LayoutDefaultComponent_ng_template_5_Template, 0, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵelement(7, "layout-theme-btn");
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isFetching);
    } }, directives: [NgIf, HeaderComponent, SidebarComponent, RouterOutlet, LayoutThemeBtnComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default',
                templateUrl: './default.component.html',
            }]
    }], function () { return [{ type: Router }, { type: NzMessageService }, { type: ComponentFactoryResolver }, { type: SettingsService }, { type: ElementRef }, { type: Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { settingHost: [{
            type: ViewChild,
            args: ['settingHost', { read: ViewContainerRef, static: true }]
        }] }); })();

class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
}
HeaderFullScreenComponent.ɵfac = function HeaderFullScreenComponent_Factory(t) { return new (t || HeaderFullScreenComponent)(); };
HeaderFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderFullScreenComponent, selectors: [["header-fullscreen"]], hostVars: 2, hostBindings: function HeaderFullScreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("resize", function HeaderFullScreenComponent_resize_HostBindingHandler() { return ctx._resize(); }, false, ɵɵresolveWindow)("click", function HeaderFullScreenComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        ɵɵclassProp("d-block", true);
    } }, decls: 3, vars: 4, consts: [["nz-icon", "", 3, "nzType"]], template: function HeaderFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "i", 0);
        ɵɵtext(1);
        ɵɵpipe(2, "translate");
    } if (rf & 2) {
        ɵɵproperty("nzType", ctx.status ? "fullscreen-exit" : "fullscreen");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, ctx.status ? "menu.fullscreen.exit" : "menu.fullscreen"), " ");
    } }, directives: [ɵNzTransitionPatchDirective, NzIconDirective], pipes: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'header-fullscreen',
                template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { _resize: [{
            type: HostListener,
            args: ['window:resize']
        }], _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();

class HeaderIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
}
HeaderIconComponent.ɵfac = function HeaderIconComponent_Factory(t) { return new (t || HeaderIconComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
HeaderIconComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderIconComponent, selectors: [["header-icon"]], decls: 39, vars: 14, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "appstore"], ["iconMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-xl", "animated", "jello"], [3, "nzSpinning", "nzTip"], ["nz-row", "", 1, "app-icons", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 3, "nzSpan"], ["nz-icon", "", "nzType", "calendar", 1, "bg-error", "text-white"], ["nz-icon", "", "nzType", "file", 1, "bg-geekblue", "text-white"], ["nz-icon", "", "nzType", "cloud", 1, "bg-success", "text-white"], ["nz-icon", "", "nzType", "star", 1, "bg-magenta", "text-white"], ["nz-icon", "", "nzType", "team", 1, "bg-purple", "text-white"], ["nz-icon", "", "nzType", "scan", 1, "bg-warning", "text-white"], ["nz-icon", "", "nzType", "pay-circle", 1, "bg-cyan", "text-white"], ["nz-icon", "", "nzType", "printer", 1, "bg-grey", "text-white"]], template: function HeaderIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("nzVisibleChange", function HeaderIconComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
        ɵɵelement(1, "i", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
        ɵɵelementStart(4, "div", 3);
        ɵɵelementStart(5, "nz-spin", 4);
        ɵɵelementStart(6, "div", 5);
        ɵɵelementStart(7, "div", 6);
        ɵɵelement(8, "i", 7);
        ɵɵelementStart(9, "small");
        ɵɵtext(10, "Calendar");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 6);
        ɵɵelement(12, "i", 8);
        ɵɵelementStart(13, "small");
        ɵɵtext(14, "Files");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 6);
        ɵɵelement(16, "i", 9);
        ɵɵelementStart(17, "small");
        ɵɵtext(18, "Cloud");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 6);
        ɵɵelement(20, "i", 10);
        ɵɵelementStart(21, "small");
        ɵɵtext(22, "Star");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "div", 6);
        ɵɵelement(24, "i", 11);
        ɵɵelementStart(25, "small");
        ɵɵtext(26, "Team");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "div", 6);
        ɵɵelement(28, "i", 12);
        ɵɵelementStart(29, "small");
        ɵɵtext(30, "QR");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(31, "div", 6);
        ɵɵelement(32, "i", 13);
        ɵɵelementStart(33, "small");
        ɵɵtext(34, "Pay");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(35, "div", 6);
        ɵɵelement(36, "i", 14);
        ɵɵelementStart(37, "small");
        ɵɵtext(38, "Print");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(3);
        ɵɵproperty("nzDropdownMenu", _r0);
        ɵɵadvance(5);
        ɵɵproperty("nzSpinning", ctx.loading)("nzTip", "\u6B63\u5728\u8BFB\u53D6\u6570\u636E...");
        ɵɵadvance(1);
        ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
        ɵɵadvance(1);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
        ɵɵadvance(4);
        ɵɵproperty("nzSpan", 6);
    } }, directives: [NzDropDownDirective, ɵNzTransitionPatchDirective, NzIconDirective, NzDropdownMenuComponent, NzMenuDirective, NzSpinComponent, NzRowDirective, NzColDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderIconComponent, [{
        type: Component,
        args: [{
                selector: 'header-icon',
                template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <i nz-icon nzType="appstore"></i>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">
        <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="calendar" class="bg-error text-white"></i>
              <small>Calendar</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="file" class="bg-geekblue text-white"></i>
              <small>Files</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="cloud" class="bg-success text-white"></i>
              <small>Cloud</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="star" class="bg-magenta text-white"></i>
              <small>Star</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="team" class="bg-purple text-white"></i>
              <small>Team</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="scan" class="bg-warning text-white"></i>
              <small>QR</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="pay-circle" class="bg-cyan text-white"></i>
              <small>Pay</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="printer" class="bg-grey text-white"></i>
              <small>Print</small>
            </div>
          </div>
        </nz-spin>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, null); })();

/**
 * 菜单通知
 */
class HeaderNotifyComponent {
    constructor(msg, nzI18n) {
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
    updateNoticeData(notices) {
        const data = this.data.slice();
        data.forEach((i) => (i.list = []));
        notices.forEach((item) => {
            const newItem = Object.assign({}, item);
            if (typeof newItem.datetime === 'string') {
                newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
            }
            if (newItem.datetime) {
                newItem.datetime = formatDistanceToNow(newItem.datetime, { locale: this.nzI18n.getDateLocale() });
            }
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find((w) => w.title === newItem.type).list.push(newItem);
        });
        return data;
    }
    loadData() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        setTimeout(() => {
            const now = new Date();
            this.data = this.updateNoticeData([
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
            this.loading = false;
        }, 500);
    }
    clear(type) {
        this.msg.success(`清空了 ${type}`);
    }
    select(res) {
        this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
    }
}
HeaderNotifyComponent.ɵfac = function HeaderNotifyComponent_Factory(t) { return new (t || HeaderNotifyComponent)(ɵɵdirectiveInject(NzMessageService), ɵɵdirectiveInject(NzI18nService)); };
HeaderNotifyComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderNotifyComponent, selectors: [["header-notify"]], decls: 1, vars: 3, consts: [["btnClass", "alain-default__nav-item", "btnIconClass", "alain-default__nav-item-icon", 3, "data", "count", "loading", "select", "clear", "popoverVisibleChange"]], template: function HeaderNotifyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "notice-icon", 0);
        ɵɵlistener("select", function HeaderNotifyComponent_Template_notice_icon_select_0_listener($event) { return ctx.select($event); })("clear", function HeaderNotifyComponent_Template_notice_icon_clear_0_listener($event) { return ctx.clear($event); })("popoverVisibleChange", function HeaderNotifyComponent_Template_notice_icon_popoverVisibleChange_0_listener() { return ctx.loadData(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("data", ctx.data)("count", ctx.count)("loading", ctx.loading);
    } }, directives: [NoticeIconComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderNotifyComponent, [{
        type: Component,
        args: [{
                selector: 'header-notify',
                template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: NzMessageService }, { type: NzI18nService }]; }, null); })();

class HeaderSearchComponent {
    constructor(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    set toggleChange(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this.searchToggled = true;
        this.focus = true;
        setTimeout(() => this.qIpt.focus(), 300);
    }
    ngAfterViewInit() {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    }
    qFocus() {
        this.focus = true;
    }
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
}
HeaderSearchComponent.ɵfac = function HeaderSearchComponent_Factory(t) { return new (t || HeaderSearchComponent)(ɵɵdirectiveInject(ElementRef)); };
HeaderSearchComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderSearchComponent, selectors: [["header-search"]], hostVars: 4, hostBindings: function HeaderSearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-default__search-focus", ctx.focus)("alain-default__search-toggled", ctx.searchToggled);
    } }, inputs: { toggleChange: "toggleChange" }, decls: 3, vars: 5, consts: [[3, "nzAddOnBeforeIcon"], ["nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", "focus", "blur"]], template: function HeaderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-input-group", 0);
        ɵɵelementStart(1, "input", 1);
        ɵɵlistener("ngModelChange", function HeaderSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("focus", function HeaderSearchComponent_Template_input_focus_1_listener() { return ctx.qFocus(); })("blur", function HeaderSearchComponent_Template_input_blur_1_listener() { return ctx.qBlur(); });
        ɵɵpipe(2, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("nzAddOnBeforeIcon", ctx.focus ? "arrow-down" : "search");
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.q)("placeholder", ɵɵpipeBind1(2, 3, "menu.search.placeholder"));
    } }, directives: [NzInputGroupComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel], pipes: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderSearchComponent, [{
        type: Component,
        args: [{
                selector: 'header-search',
                template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ElementRef }]; }, { focus: [{
            type: HostBinding,
            args: ['class.alain-default__search-focus']
        }], searchToggled: [{
            type: HostBinding,
            args: ['class.alain-default__search-toggled']
        }], toggleChange: [{
            type: Input
        }] }); })();

class HeaderStorageComponent {
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            },
        });
    }
}
HeaderStorageComponent.ɵfac = function HeaderStorageComponent_Factory(t) { return new (t || HeaderStorageComponent)(ɵɵdirectiveInject(NzModalService), ɵɵdirectiveInject(NzMessageService)); };
HeaderStorageComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderStorageComponent, selectors: [["header-storage"]], hostVars: 2, hostBindings: function HeaderStorageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function HeaderStorageComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        ɵɵclassProp("d-block", true);
    } }, decls: 3, vars: 3, consts: [["nz-icon", "", "nzType", "tool"]], template: function HeaderStorageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "i", 0);
        ɵɵtext(1);
        ɵɵpipe(2, "translate");
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "menu.clear.local.storage"), " ");
    } }, directives: [ɵNzTransitionPatchDirective, NzIconDirective], pipes: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderStorageComponent, [{
        type: Component,
        args: [{
                selector: 'header-storage',
                template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: NzModalService }, { type: NzMessageService }]; }, { _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();

function HeaderTaskComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "nz-spin");
    ɵɵelementEnd();
} }
function HeaderTaskComponent_nz_card_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 17);
} }
function HeaderTaskComponent_nz_card_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-card", 8);
    ɵɵtemplate(1, HeaderTaskComponent_nz_card_7_ng_template_1_Template, 1, 0, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementStart(3, "div", 10);
    ɵɵelementStart(4, "div", 11);
    ɵɵelement(5, "nz-avatar", 12);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 13);
    ɵɵelementStart(7, "strong");
    ɵɵtext(8, "cipchk");
    ɵɵelementEnd();
    ɵɵelementStart(9, "p", 14);
    ɵɵtext(10, "Please tell me what happened in a few words, don't go into details.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 10);
    ɵɵelementStart(12, "div", 11);
    ɵɵelement(13, "nz-avatar", 12);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 13);
    ɵɵelementStart(15, "strong");
    ɵɵtext(16, "\u306F\u306A\u3055\u304D");
    ɵɵelementEnd();
    ɵɵelementStart(17, "p", 14);
    ɵɵtext(18, "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 10);
    ɵɵelementStart(20, "div", 11);
    ɵɵelement(21, "nz-avatar", 12);
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 13);
    ɵɵelementStart(23, "strong");
    ɵɵtext(24, "\u82CF\u5148\u751F");
    ɵɵelementEnd();
    ɵɵelementStart(25, "p", 14);
    ɵɵtext(26, "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(27, "div", 10);
    ɵɵelementStart(28, "div", 11);
    ɵɵelement(29, "nz-avatar", 12);
    ɵɵelementEnd();
    ɵɵelementStart(30, "div", 13);
    ɵɵelementStart(31, "strong");
    ɵɵtext(32, "Kent");
    ɵɵelementEnd();
    ɵɵelementStart(33, "p", 14);
    ɵɵtext(34, "Please tell me what happened in a few words, don't go into details.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(35, "div", 10);
    ɵɵelementStart(36, "div", 11);
    ɵɵelement(37, "nz-avatar", 12);
    ɵɵelementEnd();
    ɵɵelementStart(38, "div", 13);
    ɵɵelementStart(39, "strong");
    ɵɵtext(40, "Jefferson");
    ɵɵelementEnd();
    ɵɵelementStart(41, "p", 14);
    ɵɵtext(42, "Please tell me what happened in a few words, don't go into details.");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(43, "div", 15);
    ɵɵelementStart(44, "div", 16);
    ɵɵtext(45, " See All ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 4);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", "./assets/tmp/img/1.png");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 20);
    ɵɵadvance(5);
    ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 4);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", "./assets/tmp/img/2.png");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 20);
    ɵɵadvance(5);
    ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 4);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", "./assets/tmp/img/3.png");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 20);
    ɵɵadvance(5);
    ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 4);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", "./assets/tmp/img/4.png");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 20);
    ɵɵadvance(5);
    ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 4);
    ɵɵadvance(1);
    ɵɵproperty("nzSrc", "./assets/tmp/img/5.png");
    ɵɵadvance(1);
    ɵɵproperty("nzSpan", 20);
    ɵɵadvance(6);
    ɵɵproperty("nzSpan", 24);
} }
class HeaderTaskComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
}
HeaderTaskComponent.ɵfac = function HeaderTaskComponent_Factory(t) { return new (t || HeaderTaskComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
HeaderTaskComponent.ɵcmp = ɵɵdefineComponent({ type: HeaderTaskComponent, selectors: [["header-task"]], decls: 8, vars: 4, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], [3, "nzDot"], ["nz-icon", "", "nzType", "bell", 1, "alain-default__nav-item-icon"], ["taskMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-lg"], ["class", "mx-lg p-lg", 4, "ngIf"], ["nzTitle", "Notifications", "nzBordered", "false", "class", "ant-card__body-nopadding", 4, "ngIf"], [1, "mx-lg", "p-lg"], ["nzTitle", "Notifications", "nzBordered", "false", 1, "ant-card__body-nopadding"], ["extra", ""], ["nz-row", "", 1, "py-sm", "point", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 1, "text-center", 3, "nzSpan"], [3, "nzSrc"], ["nz-col", "", 3, "nzSpan"], [1, "mb0"], ["nz-row", ""], ["nz-col", "", 1, "pt-md", "border-top-1", "text-center", "text-grey", "point", 3, "nzSpan"], ["nz-icon", "", "nzType", "plus"]], template: function HeaderTaskComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("nzVisibleChange", function HeaderTaskComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
        ɵɵelementStart(1, "nz-badge", 1);
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
        ɵɵelementStart(5, "div", 4);
        ɵɵtemplate(6, HeaderTaskComponent_div_6_Template, 2, 0, "div", 5);
        ɵɵtemplate(7, HeaderTaskComponent_nz_card_7_Template, 46, 31, "nz-card", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(4);
        ɵɵproperty("nzDropdownMenu", _r0);
        ɵɵadvance(1);
        ɵɵproperty("nzDot", true);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.loading);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.loading);
    } }, directives: [NzDropDownDirective, NzBadgeComponent, ɵNzTransitionPatchDirective, NzIconDirective, NzDropdownMenuComponent, NzMenuDirective, NgIf, NzSpinComponent, NzCardComponent, NzRowDirective, NzColDirective, NzAvatarComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HeaderTaskComponent, [{
        type: Component,
        args: [{
                selector: 'header-task',
                template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Jefferson</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">
              See All
            </div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, null); })();

class LayoutFullScreenComponent {
}
LayoutFullScreenComponent.ɵfac = function LayoutFullScreenComponent_Factory(t) { return new (t || LayoutFullScreenComponent)(); };
LayoutFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutFullScreenComponent, selectors: [["layout-fullscreen"]], hostVars: 2, hostBindings: function LayoutFullScreenComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("alain-fullscreen", true);
    } }, decls: 1, vars: 0, template: function LayoutFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "router-outlet");
    } }, directives: [RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'layout-fullscreen',
                templateUrl: './fullscreen.component.html',
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.alain-fullscreen]': 'true',
                },
            }]
    }], null, null); })();

class LayoutPassportComponent {
    constructor() {
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
}
LayoutPassportComponent.type = "account" /* account */;
LayoutPassportComponent.ɵfac = function LayoutPassportComponent_Factory(t) { return new (t || LayoutPassportComponent)(); };
LayoutPassportComponent.ɵcmp = ɵɵdefineComponent({ type: LayoutPassportComponent, selectors: [["layout-passport"]], decls: 19, vars: 1, consts: [[1, "container"], ["showLangText", "false", 1, "langs"], [1, "wrap"], [1, "top"], [1, "head"], ["src", "./assets/logo-color.svg", 1, "logo"], [1, "title"], [1, "desc"], [3, "links"], ["nz-icon", "", "nzType", "copyright"], ["href", "//github.com/cipchk", "target", "_blank"]], template: function LayoutPassportComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "header-i18n", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "div", 4);
        ɵɵelement(5, "img", 5);
        ɵɵelementStart(6, "span", 6);
        ɵɵtext(7, "ng-alain");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 7);
        ɵɵtext(9, "\u6B66\u6797\u4E2D\u6700\u6709\u5F71\u54CD\u529B\u7684\u300A\u8475\u82B1\u5B9D\u5178\u300B\uFF1B\u6B32\u7EC3\u795E\u529F\uFF0C\u6325\u5200\u81EA\u5BAB");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(10, "router-outlet");
        ɵɵelementStart(11, "global-footer", 8);
        ɵɵtext(12, " Copyright ");
        ɵɵelement(13, "i", 9);
        ɵɵtext(14, " 2017 ");
        ɵɵelementStart(15, "a", 10);
        ɵɵtext(16, "\u5361\u8272");
        ɵɵelementEnd();
        ɵɵtext(17, "\u51FA\u54C1 ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(18, "layout-theme-btn");
    } if (rf & 2) {
        ɵɵadvance(11);
        ɵɵproperty("links", ctx.links);
    } }, directives: [HeaderI18nComponent, RouterOutlet, GlobalFooterComponent, ɵNzTransitionPatchDirective, NzIconDirective, LayoutThemeBtnComponent], styles: ["[_nghost-%COMP%]     .container{background:#f0f2f5;display:flex;flex-direction:column;min-height:100%}[_nghost-%COMP%]     .langs{height:40px;line-height:44px;text-align:right;width:100%}[_nghost-%COMP%]     .langs .anticon{cursor:pointer;font-size:14px;margin-right:24px;margin-top:24px;vertical-align:top}[_nghost-%COMP%]     .wrap{flex:1;padding:32px 0}[_nghost-%COMP%]     .ant-form-item{display:flex;justify-content:space-between;margin-bottom:24px}@media (min-width:768px){[_nghost-%COMP%]     .container{background-image:url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);background-position:center 110px;background-repeat:no-repeat;background-size:100%}[_nghost-%COMP%]     .wrap{padding:32px 0 24px}}[_nghost-%COMP%]     .top{text-align:center}[_nghost-%COMP%]     .header{height:44px;line-height:44px}[_nghost-%COMP%]     .header a{text-decoration:none}[_nghost-%COMP%]     .logo{height:44px;margin-right:16px}[_nghost-%COMP%]     .title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;vertical-align:middle}[_nghost-%COMP%]     .desc{color:rgba(0,0,0,.45);font-size:14px;margin-bottom:40px;margin-top:12px}[data-theme=dark]   [_nghost-%COMP%]     .container{background:#141414}[data-theme=dark]   [_nghost-%COMP%]     .title{color:hsla(0,0%,100%,.85)}[data-theme=dark]   [_nghost-%COMP%]     .desc{color:hsla(0,0%,100%,.45)}@media (min-width:768px){[data-theme=dark]   [_nghost-%COMP%]     .container{background-image:none}}[data-theme=compact]   [_nghost-%COMP%]     .ant-form-item{margin-bottom:16px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutPassportComponent, [{
        type: Component,
        args: [{
                selector: 'layout-passport',
                templateUrl: './passport.component.html',
                styleUrls: ['./passport.component.less'],
            }]
    }], null, null); })();

const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutFullScreenComponent,
    HeaderComponent,
    SidebarComponent,
    ...SETTINGDRAWER,
    LayoutThemeBtnComponent,
];
const HEADERCOMPONENTS = [
    HeaderSearchComponent,
    HeaderNotifyComponent,
    HeaderTaskComponent,
    HeaderIconComponent,
    HeaderFullScreenComponent,
    HeaderI18nComponent,
    HeaderStorageComponent,
    HeaderUserComponent,
];
const PASSPORT = [LayoutPassportComponent];
class LayoutModule {
}
LayoutModule.ɵmod = ɵɵdefineNgModule({ type: LayoutModule });
LayoutModule.ɵinj = ɵɵdefineInjector({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LayoutModule, { declarations: [LayoutDefaultComponent,
        LayoutFullScreenComponent,
        HeaderComponent,
        SidebarComponent,
        SettingDrawerComponent, SettingDrawerItemComponent,
        LayoutThemeBtnComponent,
        HeaderSearchComponent,
        HeaderNotifyComponent,
        HeaderTaskComponent,
        HeaderIconComponent,
        HeaderFullScreenComponent,
        HeaderI18nComponent,
        HeaderStorageComponent,
        HeaderUserComponent,
        LayoutPassportComponent], imports: [SharedModule], exports: [LayoutDefaultComponent,
        LayoutFullScreenComponent,
        HeaderComponent,
        SidebarComponent,
        SettingDrawerComponent, SettingDrawerItemComponent,
        LayoutThemeBtnComponent,
        LayoutPassportComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayoutModule, [{
        type: NgModule,
        args: [{
                imports: [SharedModule],
                entryComponents: SETTINGDRAWER,
                declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
                exports: [...COMPONENTS, ...PASSPORT],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderComponent, LayoutDefaultComponent, LayoutFullScreenComponent, LayoutModule, LayoutPassportComponent, LayoutThemeBtnComponent, SettingDrawerComponent, SettingDrawerItemComponent, SidebarComponent };
//# sourceMappingURL=fs-ng-alain-layout.js.map
