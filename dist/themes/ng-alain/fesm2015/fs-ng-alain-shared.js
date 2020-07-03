import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule, ɵɵinject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { CountDownModule } from '@delon/abc/count-down';
import { DatePickerModule } from '@delon/abc/date-picker';
import { DownFileModule } from '@delon/abc/down-file';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { ExceptionModule } from '@delon/abc/exception';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { FullContentModule } from '@delon/abc/full-content';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';
import { PageHeaderModule } from '@delon/abc/page-header';
import { QRModule } from '@delon/abc/qr';
import { QuickMenuModule } from '@delon/abc/quick-menu';
import { ResultModule } from '@delon/abc/result';
import { SEModule } from '@delon/abc/se';
import { SidebarNavModule } from '@delon/abc/sidebar-nav';
import { STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { TagSelectModule } from '@delon/abc/tag-select';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { CountdownModule } from 'ngx-countdown';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
// tslint:disable-next-line:no-any
function yuan(value, digits = 2) {
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return `&yen ${value}`;
}

const SHARED_DELON_MODULES = [
    AvatarListModule,
    CountDownModule,
    DatePickerModule,
    DownFileModule,
    EllipsisModule,
    STModule,
    SVModule,
    SEModule,
    QRModule,
    NumberToChineseModule,
    ErrorCollectModule,
    ExceptionModule,
    FooterToolbarModule,
    GlobalFooterModule,
    GlobalFooterModule,
    PageHeaderModule,
    ResultModule,
    TagSelectModule,
    NoticeIconModule,
    QuickMenuModule,
    SidebarNavModule,
    G2BarModule,
    G2CardModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2SingleBarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    NumberInfoModule,
    TrendModule,
    FullContentModule,
];

const SHARED_ZORRO_MODULES = [
    NzButtonModule,
    NzMessageModule,
    NzBackTopModule,
    NzDropDownModule,
    NzGridModule,
    NzCarouselModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzPopoverModule,
    NzSelectModule,
    NzIconModule,
    NzAffixModule,
    NzBadgeModule,
    NzAlertModule,
    NzModalModule,
    NzTableModule,
    NzDrawerModule,
    NzTabsModule,
    NzInputModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzTagModule,
    NzInputNumberModule,
    NzBreadCrumbModule,
    NzStepsModule,
    NzListModule,
    NzSwitchModule,
    NzRadioModule,
    NzFormModule,
    NzAvatarModule,
    NzSpinModule,
    NzCardModule,
    NzDividerModule,
    NzProgressModule,
    NzPopconfirmModule,
    NzNotificationModule,
    NzPaginationModule,
    NzUploadModule,
];

const THIRDMODULES = [CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion
// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion
class SharedModule {
}
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            CommonModule,
            CoreModule,
            FormsModule,
            RouterModule,
            ReactiveFormsModule,
            AlainThemeModule.forChild(),
            DelonACLModule,
            DelonFormModule,
            ...SHARED_DELON_MODULES,
            ...SHARED_ZORRO_MODULES,
            // third libs
            ...THIRDMODULES,
        ],
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonACLModule,
        DelonFormModule,
        TranslateModule, AvatarListModule, CountDownModule, DatePickerModule, DownFileModule, EllipsisModule, STModule, SVModule, SEModule, QRModule, NumberToChineseModule, ErrorCollectModule, ExceptionModule, FooterToolbarModule, GlobalFooterModule, GlobalFooterModule, PageHeaderModule, ResultModule, TagSelectModule, NoticeIconModule, QuickMenuModule, SidebarNavModule, G2BarModule, G2CardModule, G2GaugeModule, G2MiniAreaModule, G2MiniBarModule, G2MiniProgressModule, G2PieModule, G2RadarModule, G2SingleBarModule, G2TagCloudModule, G2TimelineModule, G2WaterWaveModule, NumberInfoModule, TrendModule, FullContentModule, NzButtonModule, NzMessageModule, NzBackTopModule, NzDropDownModule, NzGridModule, NzCarouselModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzBadgeModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzTagModule, NzInputNumberModule, NzBreadCrumbModule, NzStepsModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzNotificationModule, NzPaginationModule, NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        CoreModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule, AlainThemeModule, DelonACLModule,
        DelonFormModule, AvatarListModule, CountDownModule, DatePickerModule, DownFileModule, EllipsisModule, STModule, SVModule, SEModule, QRModule, NumberToChineseModule, ErrorCollectModule, ExceptionModule, FooterToolbarModule, GlobalFooterModule, GlobalFooterModule, PageHeaderModule, ResultModule, TagSelectModule, NoticeIconModule, QuickMenuModule, SidebarNavModule, G2BarModule, G2CardModule, G2GaugeModule, G2MiniAreaModule, G2MiniBarModule, G2MiniProgressModule, G2PieModule, G2RadarModule, G2SingleBarModule, G2TagCloudModule, G2TimelineModule, G2WaterWaveModule, NumberInfoModule, TrendModule, FullContentModule, NzButtonModule, NzMessageModule, NzBackTopModule, NzDropDownModule, NzGridModule, NzCarouselModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzBadgeModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzTagModule, NzInputNumberModule, NzBreadCrumbModule, NzStepsModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzNotificationModule, NzPaginationModule, NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule], exports: [CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonACLModule,
        DelonFormModule,
        TranslateModule, AvatarListModule, CountDownModule, DatePickerModule, DownFileModule, EllipsisModule, STModule, SVModule, SEModule, QRModule, NumberToChineseModule, ErrorCollectModule, ExceptionModule, FooterToolbarModule, GlobalFooterModule, GlobalFooterModule, PageHeaderModule, ResultModule, TagSelectModule, NoticeIconModule, QuickMenuModule, SidebarNavModule, G2BarModule, G2CardModule, G2GaugeModule, G2MiniAreaModule, G2MiniBarModule, G2MiniProgressModule, G2PieModule, G2RadarModule, G2SingleBarModule, G2TagCloudModule, G2TimelineModule, G2WaterWaveModule, NumberInfoModule, TrendModule, FullContentModule, NzButtonModule, NzMessageModule, NzBackTopModule, NzDropDownModule, NzGridModule, NzCarouselModule, NzCheckboxModule, NzToolTipModule, NzPopoverModule, NzSelectModule, NzIconModule, NzAffixModule, NzBadgeModule, NzAlertModule, NzModalModule, NzTableModule, NzDrawerModule, NzTabsModule, NzInputModule, NzDatePickerModule, NzTimePickerModule, NzTagModule, NzInputNumberModule, NzBreadCrumbModule, NzStepsModule, NzListModule, NzSwitchModule, NzRadioModule, NzFormModule, NzAvatarModule, NzSpinModule, NzCardModule, NzDividerModule, NzProgressModule, NzPopconfirmModule, NzNotificationModule, NzPaginationModule, NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                    FormsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    AlainThemeModule.forChild(),
                    DelonACLModule,
                    DelonFormModule,
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    // third libs
                    ...THIRDMODULES,
                ],
                declarations: [
                    // your components
                    ...COMPONENTS,
                    ...DIRECTIVES,
                ],
                exports: [
                    CommonModule,
                    CoreModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    AlainThemeModule,
                    DelonACLModule,
                    DelonFormModule,
                    TranslateModule,
                    ...SHARED_DELON_MODULES,
                    ...SHARED_ZORRO_MODULES,
                    // third libs
                    ...THIRDMODULES,
                    // your components
                    ...COMPONENTS,
                    ...DIRECTIVES,
                ],
            }]
    }], null, null); })();

// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
const SCHEMA_THIRDS_COMPONENTS = [
// TinymceWidget,
// UeditorWidget
];
class JsonSchemaModule {
    constructor(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    }
}
JsonSchemaModule.ɵmod = ɵɵdefineNgModule({ type: JsonSchemaModule });
JsonSchemaModule.ɵinj = ɵɵdefineInjector({ factory: function JsonSchemaModule_Factory(t) { return new (t || JsonSchemaModule)(ɵɵinject(WidgetRegistry)); }, imports: [[SharedModule, DelonFormModule.forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(JsonSchemaModule, { imports: [SharedModule, DelonFormModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonSchemaModule, [{
        type: NgModule,
        args: [{
                declarations: SCHEMA_THIRDS_COMPONENTS,
                entryComponents: SCHEMA_THIRDS_COMPONENTS,
                imports: [SharedModule, DelonFormModule.forRoot()],
                exports: [...SCHEMA_THIRDS_COMPONENTS],
            }]
    }], function () { return [{ type: WidgetRegistry }]; }, null); })();

const STWIDGET_COMPONENTS = [];
class STWidgetModule {
}
STWidgetModule.ɵmod = ɵɵdefineNgModule({ type: STWidgetModule });
STWidgetModule.ɵinj = ɵɵdefineInjector({ factory: function STWidgetModule_Factory(t) { return new (t || STWidgetModule)(); }, imports: [[SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(STWidgetModule, { imports: [SharedModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(STWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: STWIDGET_COMPONENTS,
                imports: [SharedModule],
                exports: [...STWIDGET_COMPONENTS],
            }]
    }], null, null); })();

class NgAlainSharedModule {
}
NgAlainSharedModule.ɵmod = ɵɵdefineNgModule({ type: NgAlainSharedModule });
NgAlainSharedModule.ɵinj = ɵɵdefineInjector({ factory: function NgAlainSharedModule_Factory(t) { return new (t || NgAlainSharedModule)(); }, imports: [[
            ThemeSharedModule,
            SharedModule
        ],
        ThemeSharedModule,
        SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgAlainSharedModule, { imports: [ThemeSharedModule,
        SharedModule], exports: [ThemeSharedModule,
        SharedModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgAlainSharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ThemeSharedModule,
                    SharedModule
                ],
                exports: [
                    ThemeSharedModule,
                    SharedModule
                ]
            }]
    }], null, null); })();

// Components

/**
 * Generated bundle index. Do not edit.
 */

export { JsonSchemaModule, NgAlainSharedModule, SCHEMA_THIRDS_COMPONENTS, STWIDGET_COMPONENTS, STWidgetModule, SharedModule, yuan };
//# sourceMappingURL=fs-ng-alain-shared.js.map
