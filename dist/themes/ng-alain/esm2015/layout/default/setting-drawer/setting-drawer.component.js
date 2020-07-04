import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy, deepCopy, LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
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
let SettingDrawerComponent = class SettingDrawerComponent {
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
};
SettingDrawerComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'setting-drawer',
        template: "<nz-drawer [(nzVisible)]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\r\n  <div class=\"setting-drawer__content\">\r\n    <div class=\"setting-drawer__body setting-drawer__theme\">\r\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\r\n      <span\r\n        *ngFor=\"let c of colors\"\r\n        [style]=\"{ 'background-color': c.color }\"\r\n        (click)=\"changeColor(c.color)\"\r\n        nz-tooltip\r\n        [nzTooltipTitle]=\"c.key\"\r\n        class=\"setting-drawer__theme-tag\"\r\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\r\n      ></span>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"\u9876\u90E8\">\r\n          <div class=\"setting-drawer__body\">\r\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\r\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\r\n          </div>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\r\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"\u5176\u5B83\">\r\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\r\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <div class=\"setting-drawer__body\">\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\r\n      </div>\r\n      <div class=\"setting-drawer__body-item\">\r\n        \u8272\u5F31\u6A21\u5F0F\r\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\r\n      </div>\r\n    </div>\r\n    <nz-divider></nz-divider>\r\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\r\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\r\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\r\n    <nz-alert\r\n      class=\"mt-md\"\r\n      nzType=\"warning\"\r\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\r\n    ></nz-alert>\r\n  </div>\r\n</nz-drawer>\r\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\r\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\r\n</div>\r\n",
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.setting-drawer]': 'true',
        },
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        NzMessageService,
        SettingsService,
        LazyService,
        NgZone, Object])
], SettingDrawerComponent);
export { SettingDrawerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvZGVmYXVsdC9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsTUFBTSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFDN0MsTUFBTSxjQUFjLEdBQUc7SUFDckI7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxH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S0FDaEQsQ0FBQztJQWtCRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FMSixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ1QsZUFBZTtRQUNyQixXQUFXO1FBQ1gsTUFBTTtHQWhCWCxzQkFBc0IsQ0FvSWxDO1NBcElZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGNvcHksIGRlZXBDb3B5LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XHJcblxyXG5jb25zdCBBTEFJTkRFRkFVTFRWQVIgPSAnYWxhaW4tZGVmYXVsdC12YXJzJztcclxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXHJcbiAge1xyXG4gICAga2V5OiAnZHVzdCcsXHJcbiAgICBjb2xvcjogJyNGNTIyMkQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAndm9sY2FubycsXHJcbiAgICBjb2xvcjogJyNGQTU0MUMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnc3Vuc2V0JyxcclxuICAgIGNvbG9yOiAnI0ZBQUQxNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdjeWFuJyxcclxuICAgIGNvbG9yOiAnIzEzQzJDMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdncmVlbicsXHJcbiAgICBjb2xvcjogJyM1MkM0MUEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnZGF5YnJlYWsnLFxyXG4gICAgY29sb3I6ICcjMTg5MGZmJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2dlZWtibHVlJyxcclxuICAgIGNvbG9yOiAnIzJGNTRFQicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICdwdXJwbGUnLFxyXG4gICAgY29sb3I6ICcjNzIyRUQxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJ2JsYWNrJyxcclxuICAgIGNvbG9yOiAnIzAwMTUyOScsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgREVGQVVMVF9WQVJTID0ge1xyXG4gICdwcmltYXJ5LWNvbG9yJzogeyBsYWJlbDogJ+S4u+minOiJsicsIHR5cGU6ICdjb2xvcicsIGRlZmF1bHQ6ICcjMTg5MGZmJyB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyc6IHtcclxuICAgIGxhYmVsOiAn6auYJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNjRweCcsXHJcbiAgICBtYXg6IDMwMCxcclxuICAgIG1pbjogMjQsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcclxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItcGFkZGluZyc6IHtcclxuICAgIGxhYmVsOiAn6aG26YOo5bem5Y+z5YaF6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMTZweCcsXHJcbiAgfSxcclxuICAvLyDkvqfovrnmoI9cclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS13ZCc6IHsgbGFiZWw6ICflrr3luqYnLCB0eXBlOiAncHgnLCBkZWZhdWx0OiAnMjAwcHgnIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtYmcnOiB7XHJcbiAgICBsYWJlbDogJ+iDjOaZrycsXHJcbiAgICB0eXBlOiAnY29sb3InLFxyXG4gICAgZGVmYXVsdDogJyNmZmZmZmYnLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLXdkJzoge1xyXG4gICAgbGFiZWw6ICfmlLbnvKnlrr3luqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nOiB7XHJcbiAgICBsYWJlbDogJ+mhueS4iuS4i+WGhei+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzhweCcsXHJcbiAgICBzdGVwOiA4LFxyXG4gIH0sXHJcbiAgLy8g5Li76I+c5Y2VXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWZzJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXlrZflj7cnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICcxNHB4JyxcclxuICAgIG1pbjogMTQsXHJcbiAgICBtYXg6IDMwLFxyXG4gIH0sXHJcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLW5hdi1mcyc6IHtcclxuICAgIGxhYmVsOiAn5pS257yp6I+c5Y2V5a2X5Y+3JyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMjRweCcsXHJcbiAgICBtaW46IDI0LFxyXG4gICAgbWF4OiAzMixcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1pdGVtLWhlaWdodCc6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V6aG56auY5bqmJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMzhweCcsXHJcbiAgICBtaW46IDI0LFxyXG4gICAgbWF4OiA2NCxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcclxuICAgIHJnYmE6IHRydWUsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1ob3Zlci1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys5oKs5YGc6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxyXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1ncm91cC10ZXh0LWNvbG9yJzoge1xyXG4gICAgbGFiZWw6ICfoj5zljZXliIbnu4TmlofmnKzpopzoibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJyxcclxuICAgIHJnYmE6IHRydWUsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtdGV4dC1jb2xvcic6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe25paH5pys6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxyXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC1iZyc6IHtcclxuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe26IOM5pmv6aKc6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2ZjZmNmYycsXHJcbiAgfSxcclxuICAvLyDlhoXlrrlcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWJnJzoge1xyXG4gICAgbGFiZWw6ICfog4zmma/oibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZjVmN2ZhJyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyc6IHtcclxuICAgIGxhYmVsOiAn5qCH6aKY6IOM5pmv6ImyJyxcclxuICAgIHR5cGU6ICdjb2xvcicsXHJcbiAgICBkZWZhdWx0OiAnI2ZhZmJmYycsXHJcbiAgfSxcclxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJzoge1xyXG4gICAgbGFiZWw6ICfmoIfpopjlupXpg6jovrnmoYboibInLFxyXG4gICAgdHlwZTogJ2NvbG9yJyxcclxuICAgIGRlZmF1bHQ6ICcjZWZlM2U1JyxcclxuICB9LFxyXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtcGFkZGluZyc6IHtcclxuICAgIGxhYmVsOiAn5YaF6L656LedJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnMjRweCcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEyOCxcclxuICAgIHN0ZXA6IDgsXHJcbiAgfSxcclxuICAvLyB6b3Jyb+e7hOS7tuS/ruato1xyXG4gICdmb3JtLXN0YXRlLXZpc3VhbC1mZWVkYmFjay1lbmFibGVkJzoge1xyXG4gICAgbGFiZWw6ICflvIDlkK/ooajljZXlhYPntKDnmoTop4bop4nlj43ppognLFxyXG4gICAgdHlwZTogJ3N3aXRjaCcsXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgJ3ByZXNlcnZlLXdoaXRlLXNwYWNlcy1lbmFibGVkJzoge1xyXG4gICAgbGFiZWw6ICflvIDlkK8gcHJlc2VydmVXaGl0ZXNwYWNlcycsXHJcbiAgICB0eXBlOiAnc3dpdGNoJyxcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICAnbnotdGFibGUtaW1nLXJhZGl1cyc6IHtcclxuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5ZyG6KeSJyxcclxuICAgIHR5cGU6ICdweCcsXHJcbiAgICBkZWZhdWx0OiAnNHB4JyxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnOiB7XHJcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WPs+Wklui+uei3nScsXHJcbiAgICB0eXBlOiAncHgnLFxyXG4gICAgZGVmYXVsdDogJzRweCcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEyOCxcclxuICB9LFxyXG4gICduei10YWJsZS1pbWctbWF4LXdpZHRoJzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKflrr3luqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICczMnB4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbiAgJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0Jzoge1xyXG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKfpq5jluqYnLFxyXG4gICAgdHlwZTogJ3B4JyxcclxuICAgIGRlZmF1bHQ6ICczMnB4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTI4LFxyXG4gIH0sXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XHJcblxyXG4gIGNvbGxhcHNlID0gZmFsc2U7XHJcbiAgZ2V0IGxheW91dCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0O1xyXG4gIH1cclxuICBkYXRhOiBhbnkgPSB7fTtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nU3J2OiBTZXR0aW5nc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge1xyXG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcclxuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgY2FjaGVkRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0W0FMQUlOREVGQVVMVFZBUl0gfHwge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBERUZBVUxUX1BSSU1BUlkoKSB7XHJcbiAgICByZXR1cm4gREVGQVVMVF9WQVJTWydwcmltYXJ5LWNvbG9yJ10uZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZExlc3MoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5sb2FkZWRMZXNzKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxhenlcclxuICAgICAgLmxvYWRTdHlsZSgnLi9hc3NldHMvYWxhaW4tZGVmYXVsdC5sZXNzJywgJ3N0eWxlc2hlZXQvbGVzcycpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCBsZXNzQ29uZmlnTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIGxlc3NDb25maWdOb2RlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIHdpbmRvdy5sZXNzID0ge1xyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgZW52OiAncHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsZXNzQ29uZmlnTm9kZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubGF6eS5sb2FkU2NyaXB0KCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL29zL2xpYi9sZXNzLmpzLzMuOC4xL2xlc3MubWluLmpzJykpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZExlc3MgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuVmFycygpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgY29sb3IsIHZhbGlkS2V5cyB9ID0gdGhpcztcclxuICAgIGNvbnN0IHZhcnM6IGFueSA9IHtcclxuICAgICAgW2BAcHJpbWFyeS1jb2xvcmBdOiBjb2xvcixcclxuICAgIH07XHJcbiAgICB2YWxpZEtleXMuZmlsdGVyKChrZXkpID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKChrZXkpID0+ICh2YXJzW2BAJHtrZXl9YF0gPSBkYXRhW2tleV0udmFsdWUpKTtcclxuICAgIHRoaXMuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwgdmFycyk7XHJcbiAgICByZXR1cm4gdmFycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuTGVzcygpIHtcclxuICAgIGNvbnN0IHsgem9uZSwgbXNnLCBjZHIgfSA9IHRoaXM7XHJcbiAgICBjb25zdCBtc2dJZCA9IG1zZy5sb2FkaW5nKGDmraPlnKjnvJbor5HkuLvpopjvvIFgLCB7IG56RHVyYXRpb246IDAgfSkubWVzc2FnZUlkO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZExlc3MoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBtc2cuc3VjY2Vzcygn5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIG1zZy5yZW1vdmUobXNnSWQpO1xyXG4gICAgICAgICAgICB6b25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDIwMCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICBPYmplY3Qua2V5cyhERUZBVUxUX1ZBUlMpXHJcbiAgICAgIC5maWx0ZXIoKGtleSkgPT4gREVGQVVMVF9WQVJTW2tleV0uZGVmYXVsdCA9PT0gJ0BwcmltYXJ5LWNvbG9yJylcclxuICAgICAgLmZvckVhY2goKGtleSkgPT4gZGVsZXRlIHRoaXMuY2FjaGVkRGF0YVtgQCR7a2V5fWBdKTtcclxuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChuYW1lLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0RGF0YShub3dEYXRhPzoge30sIHJ1biA9IHRydWUpIHtcclxuICAgIG5vd0RhdGEgPSBub3dEYXRhIHx8IHt9O1xyXG4gICAgY29uc3QgZGF0YSA9IGRlZXBDb3B5KERFRkFVTFRfVkFSUyk7XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBub3dEYXRhW2BAJHtrZXl9YF0gfHwgZGF0YVtrZXldLmRlZmF1bHQgfHwgJyc7XHJcbiAgICAgIGRhdGFba2V5XS52YWx1ZSA9IHZhbHVlID09PSBgQHByaW1hcnktY29sb3JgID8gdGhpcy5jb2xvciA6IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgaWYgKHJ1bikge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMucnVuTGVzcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgdmFsaWRLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZpbHRlcigoa2V5KSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XHJcbiAgfVxyXG5cclxuICBhcHBseSgpIHtcclxuICAgIHRoaXMucnVuTGVzcygpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX1BSSU1BUlk7XHJcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xyXG4gICAgdGhpcy5yZXNldERhdGEoe30pO1xyXG4gIH1cclxuXHJcbiAgY29weVZhcigpIHtcclxuICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdlblZhcnMoKTtcclxuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcclxuICAgICAgLm1hcCgoa2V5KSA9PiBgJHtrZXl9OiAke3ZhcnNba2V5XX07YClcclxuICAgICAgLmpvaW4oJ1xcbicpO1xyXG4gICAgY29weShjb3B5Q29udGVudCk7XHJcbiAgICB0aGlzLm1zZy5zdWNjZXNzKCdDb3B5IHN1Y2Nlc3MnKTtcclxuICB9XHJcbn1cclxuIl19