import { CoreModule } from '@abp/ng.core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';
// #region third libs
import { CountdownModule } from 'ngx-countdown';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@delon/abc/avatar-list";
import * as i3 from "@delon/abc/count-down";
import * as i4 from "@delon/abc/date-picker";
import * as i5 from "@delon/abc/down-file";
import * as i6 from "@delon/abc/ellipsis";
import * as i7 from "@delon/abc/st";
import * as i8 from "@delon/abc/sv";
import * as i9 from "@delon/abc/se";
import * as i10 from "@delon/abc/qr";
import * as i11 from "@delon/abc/number-to-chinese";
import * as i12 from "@delon/abc/error-collect";
import * as i13 from "@delon/abc/exception";
import * as i14 from "@delon/abc/footer-toolbar";
import * as i15 from "@delon/abc/global-footer";
import * as i16 from "@delon/abc/page-header";
import * as i17 from "@delon/abc/result";
import * as i18 from "@delon/abc/tag-select";
import * as i19 from "@delon/abc/notice-icon";
import * as i20 from "@delon/abc/quick-menu";
import * as i21 from "@delon/abc/sidebar-nav";
import * as i22 from "@delon/chart/bar";
import * as i23 from "@delon/chart/card";
import * as i24 from "@delon/chart/gauge";
import * as i25 from "@delon/chart/mini-area";
import * as i26 from "@delon/chart/mini-bar";
import * as i27 from "@delon/chart/mini-progress";
import * as i28 from "@delon/chart/pie";
import * as i29 from "@delon/chart/radar";
import * as i30 from "@delon/chart/single-bar";
import * as i31 from "@delon/chart/tag-cloud";
import * as i32 from "@delon/chart/timeline";
import * as i33 from "@delon/chart/water-wave";
import * as i34 from "@delon/chart/number-info";
import * as i35 from "@delon/chart/trend";
import * as i36 from "@delon/abc/full-content";
import * as i37 from "ng-zorro-antd/button";
import * as i38 from "ng-zorro-antd/message";
import * as i39 from "ng-zorro-antd/back-top";
import * as i40 from "ng-zorro-antd/dropdown";
import * as i41 from "ng-zorro-antd/grid";
import * as i42 from "ng-zorro-antd/carousel";
import * as i43 from "ng-zorro-antd/checkbox";
import * as i44 from "ng-zorro-antd/tooltip";
import * as i45 from "ng-zorro-antd/popover";
import * as i46 from "ng-zorro-antd/select";
import * as i47 from "ng-zorro-antd/icon";
import * as i48 from "ng-zorro-antd/affix";
import * as i49 from "ng-zorro-antd/badge";
import * as i50 from "ng-zorro-antd/alert";
import * as i51 from "ng-zorro-antd/modal";
import * as i52 from "ng-zorro-antd/table";
import * as i53 from "ng-zorro-antd/drawer";
import * as i54 from "ng-zorro-antd/tabs";
import * as i55 from "ng-zorro-antd/input";
import * as i56 from "ng-zorro-antd/date-picker";
import * as i57 from "ng-zorro-antd/time-picker";
import * as i58 from "ng-zorro-antd/tag";
import * as i59 from "ng-zorro-antd/input-number";
import * as i60 from "ng-zorro-antd/breadcrumb";
import * as i61 from "ng-zorro-antd/steps";
import * as i62 from "ng-zorro-antd/list";
import * as i63 from "ng-zorro-antd/switch";
import * as i64 from "ng-zorro-antd/radio";
import * as i65 from "ng-zorro-antd/form";
import * as i66 from "ng-zorro-antd/avatar";
import * as i67 from "ng-zorro-antd/spin";
import * as i68 from "ng-zorro-antd/card";
import * as i69 from "ng-zorro-antd/divider";
import * as i70 from "ng-zorro-antd/progress";
import * as i71 from "ng-zorro-antd/popconfirm";
import * as i72 from "ng-zorro-antd/notification";
import * as i73 from "ng-zorro-antd/pagination";
import * as i74 from "ng-zorro-antd/upload";
const THIRDMODULES = [CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion
// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion
export class SharedModule {
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
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
        TranslateModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        CoreModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule, i1.AlainThemeModule, DelonACLModule,
        DelonFormModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule], exports: [CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AlainThemeModule,
        DelonACLModule,
        DelonFormModule,
        TranslateModule, i2.AvatarListModule, i3.CountDownModule, i4.DatePickerModule, i5.DownFileModule, i6.EllipsisModule, i7.STModule, i8.SVModule, i9.SEModule, i10.QRModule, i11.NumberToChineseModule, i12.ErrorCollectModule, i13.ExceptionModule, i14.FooterToolbarModule, i15.GlobalFooterModule, i15.GlobalFooterModule, i16.PageHeaderModule, i17.ResultModule, i18.TagSelectModule, i19.NoticeIconModule, i20.QuickMenuModule, i21.SidebarNavModule, i22.G2BarModule, i23.G2CardModule, i24.G2GaugeModule, i25.G2MiniAreaModule, i26.G2MiniBarModule, i27.G2MiniProgressModule, i28.G2PieModule, i29.G2RadarModule, i30.G2SingleBarModule, i31.G2TagCloudModule, i32.G2TimelineModule, i33.G2WaterWaveModule, i34.NumberInfoModule, i35.TrendModule, i36.FullContentModule, i37.NzButtonModule, i38.NzMessageModule, i39.NzBackTopModule, i40.NzDropDownModule, i41.NzGridModule, i42.NzCarouselModule, i43.NzCheckboxModule, i44.NzToolTipModule, i45.NzPopoverModule, i46.NzSelectModule, i47.NzIconModule, i48.NzAffixModule, i49.NzBadgeModule, i50.NzAlertModule, i51.NzModalModule, i52.NzTableModule, i53.NzDrawerModule, i54.NzTabsModule, i55.NzInputModule, i56.NzDatePickerModule, i57.NzTimePickerModule, i58.NzTagModule, i59.NzInputNumberModule, i60.NzBreadCrumbModule, i61.NzStepsModule, i62.NzListModule, i63.NzSwitchModule, i64.NzRadioModule, i65.NzFormModule, i66.NzAvatarModule, i67.NzSpinModule, i68.NzCardModule, i69.NzDividerModule, i70.NzProgressModule, i71.NzPopconfirmModule, i72.NzNotificationModule, i73.NzPaginationModule, i74.NzUploadModule, CountdownModule, UEditorModule, NgxTinymceModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9zaGFyZWQvc3JjL2xpYi9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU3RCxxQkFBcUI7QUFDckIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxNQUFNLFlBQVksR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUN4RSxhQUFhO0FBRWIsc0NBQXNDO0FBQ3RDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsYUFBYTtBQXlDYixNQUFNLE9BQU8sWUFBWTs7Z0RBQVosWUFBWTt1R0FBWixZQUFZLGtCQXRDZDtZQUNQLFlBQVk7WUFDWixVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzNCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsR0FBRyxvQkFBb0I7WUFDdkIsR0FBRyxvQkFBb0I7WUFDdkIsYUFBYTtZQUNiLEdBQUcsWUFBWTtTQUNoQjtRQU9DLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZSw0K0NBckNHLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCO3dGQStDekQsWUFBWSxjQXJDckIsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQix1QkFFbkIsY0FBYztRQUNkLGVBQWUsNCtDQWpCRyxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixhQTZCbEUsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlLDQrQ0FyQ0csZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0I7a0RBK0N6RCxZQUFZO2NBdkN4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixXQUFXO29CQUNYLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7b0JBQzNCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixHQUFHLG9CQUFvQjtvQkFDdkIsR0FBRyxvQkFBb0I7b0JBQ3ZCLGFBQWE7b0JBQ2IsR0FBRyxZQUFZO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixHQUFHLG9CQUFvQjtvQkFDdkIsR0FBRyxvQkFBb0I7b0JBQ3ZCLGFBQWE7b0JBQ2IsR0FBRyxZQUFZO29CQUNmLGtCQUFrQjtvQkFDbEIsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtpQkFDZDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUgfSBmcm9tICdAZGVsb24vZm9ybSc7XHJcbmltcG9ydCB7IEFsYWluVGhlbWVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNIQVJFRF9ERUxPTl9NT0RVTEVTIH0gZnJvbSAnLi9zaGFyZWQtZGVsb24ubW9kdWxlJztcclxuaW1wb3J0IHsgU0hBUkVEX1pPUlJPX01PRFVMRVMgfSBmcm9tICcuL3NoYXJlZC16b3Jyby5tb2R1bGUnO1xyXG5cclxuLy8gI3JlZ2lvbiB0aGlyZCBsaWJzXHJcbmltcG9ydCB7IENvdW50ZG93bk1vZHVsZSB9IGZyb20gJ25neC1jb3VudGRvd24nO1xyXG5pbXBvcnQgeyBOZ3hUaW55bWNlTW9kdWxlIH0gZnJvbSAnbmd4LXRpbnltY2UnO1xyXG5pbXBvcnQgeyBVRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LXVlZGl0b3InO1xyXG5cclxuY29uc3QgVEhJUkRNT0RVTEVTID0gW0NvdW50ZG93bk1vZHVsZSwgVUVkaXRvck1vZHVsZSwgTmd4VGlueW1jZU1vZHVsZV07XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24geW91ciBjb21wb25ldHMgJiBkaXJlY3RpdmVzXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcclxuY29uc3QgRElSRUNUSVZFUyA9IFtdO1xyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBBbGFpblRoZW1lTW9kdWxlLmZvckNoaWxkKCksXHJcbiAgICBEZWxvbkFDTE1vZHVsZSxcclxuICAgIERlbG9uRm9ybU1vZHVsZSxcclxuICAgIC4uLlNIQVJFRF9ERUxPTl9NT0RVTEVTLFxyXG4gICAgLi4uU0hBUkVEX1pPUlJPX01PRFVMRVMsXHJcbiAgICAvLyB0aGlyZCBsaWJzXHJcbiAgICAuLi5USElSRE1PRFVMRVMsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC8vIHlvdXIgY29tcG9uZW50c1xyXG4gICAgLi4uQ09NUE9ORU5UUyxcclxuICAgIC4uLkRJUkVDVElWRVMsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQWxhaW5UaGVtZU1vZHVsZSxcclxuICAgIERlbG9uQUNMTW9kdWxlLFxyXG4gICAgRGVsb25Gb3JtTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgLi4uU0hBUkVEX0RFTE9OX01PRFVMRVMsXHJcbiAgICAuLi5TSEFSRURfWk9SUk9fTU9EVUxFUyxcclxuICAgIC8vIHRoaXJkIGxpYnNcclxuICAgIC4uLlRISVJETU9EVUxFUyxcclxuICAgIC8vIHlvdXIgY29tcG9uZW50c1xyXG4gICAgLi4uQ09NUE9ORU5UUyxcclxuICAgIC4uLkRJUkVDVElWRVMsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iXX0=