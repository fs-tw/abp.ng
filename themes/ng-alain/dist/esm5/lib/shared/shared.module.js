/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonChartModule } from '@delon/chart';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
// i18n
import { TranslateModule } from '@ngx-translate/core';
// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';
/** @type {?} */
var THIRDMODULES = [NgZorroAntdModule, CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion
// #region your componets & directives
/** @type {?} */
var COMPONENTS = [];
/** @type {?} */
var DIRECTIVES = [];
// #endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        CommonModule,
                        FormsModule,
                        RouterModule,
                        ReactiveFormsModule,
                        AlainThemeModule.forChild(),
                        DelonABCModule,
                        DelonChartModule,
                        DelonACLModule,
                        DelonFormModule
                    ], THIRDMODULES),
                    declarations: tslib_1.__spread(COMPONENTS, DIRECTIVES),
                    exports: tslib_1.__spread([
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        AlainThemeModule,
                        DelonABCModule,
                        DelonChartModule,
                        DelonACLModule,
                        DelonFormModule,
                        // i18n
                        TranslateModule
                    ], THIRDMODULES, COMPONENTS, DIRECTIVES),
                },] }
    ];
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBR3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOztJQUV6QyxZQUFZLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDOzs7O0lBSXBGLFVBQVUsR0FBRyxFQUFFOztJQUNmLFVBQVUsR0FBRyxFQUFFOztBQUdyQjtJQUFBO0lBc0MyQixDQUFDOztnQkF0QzNCLFFBQVEsU0FBQztvQkFDUixPQUFPO3dCQUNMLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO3dCQUMzQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxlQUFlO3VCQUVaLFlBQVksQ0FDaEI7b0JBQ0QsWUFBWSxtQkFFUCxVQUFVLEVBQ1YsVUFBVSxDQUNkO29CQUNELE9BQU87d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsT0FBTzt3QkFDUCxlQUFlO3VCQUVaLFlBQVksRUFFWixVQUFVLEVBQ1YsVUFBVSxDQUNkO2lCQUNGOztJQUMwQixtQkFBQztDQUFBLEFBdEM1QixJQXNDNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGRlbG9uXHJcbmltcG9ydCB7IEFsYWluVGhlbWVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBEZWxvbkFCQ01vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMnO1xyXG5pbXBvcnQgeyBEZWxvbkNoYXJ0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0JztcclxuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xyXG4vLyBpMThuXHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuLy8gI3JlZ2lvbiB0aGlyZCBsaWJzXHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IENvdW50ZG93bk1vZHVsZSB9IGZyb20gJ25neC1jb3VudGRvd24nO1xyXG5pbXBvcnQgeyBVRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LXVlZGl0b3InO1xyXG5pbXBvcnQgeyBOZ3hUaW55bWNlTW9kdWxlIH0gZnJvbSAnbmd4LXRpbnltY2UnO1xyXG5cclxuY29uc3QgVEhJUkRNT0RVTEVTID0gW05nWm9ycm9BbnRkTW9kdWxlLCBDb3VudGRvd25Nb2R1bGUsIFVFZGl0b3JNb2R1bGUsIE5neFRpbnltY2VNb2R1bGVdO1xyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIHlvdXIgY29tcG9uZXRzICYgZGlyZWN0aXZlc1xyXG5jb25zdCBDT01QT05FTlRTID0gW107XHJcbmNvbnN0IERJUkVDVElWRVMgPSBbXTtcclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBBbGFpblRoZW1lTW9kdWxlLmZvckNoaWxkKCksXHJcbiAgICBEZWxvbkFCQ01vZHVsZSxcclxuICAgIERlbG9uQ2hhcnRNb2R1bGUsXHJcbiAgICBEZWxvbkFDTE1vZHVsZSxcclxuICAgIERlbG9uRm9ybU1vZHVsZSxcclxuICAgIC8vIHRoaXJkIGxpYnNcclxuICAgIC4uLlRISVJETU9EVUxFUyxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLy8geW91ciBjb21wb25lbnRzXHJcbiAgICAuLi5DT01QT05FTlRTLFxyXG4gICAgLi4uRElSRUNUSVZFUyxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEFsYWluVGhlbWVNb2R1bGUsXHJcbiAgICBEZWxvbkFCQ01vZHVsZSxcclxuICAgIERlbG9uQ2hhcnRNb2R1bGUsXHJcbiAgICBEZWxvbkFDTE1vZHVsZSxcclxuICAgIERlbG9uRm9ybU1vZHVsZSxcclxuICAgIC8vIGkxOG5cclxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxuICAgIC8vIHRoaXJkIGxpYnNcclxuICAgIC4uLlRISVJETU9EVUxFUyxcclxuICAgIC8vIHlvdXIgY29tcG9uZW50c1xyXG4gICAgLi4uQ09NUE9ORU5UUyxcclxuICAgIC4uLkRJUkVDVElWRVMsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxyXG4iXX0=