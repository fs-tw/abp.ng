/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const THIRDMODULES = [NgZorroAntdModule, CountdownModule, UEditorModule, NgxTinymceModule];
// #endregion
// #region your componets & directives
/** @type {?} */
const COMPONENTS = [];
/** @type {?} */
const DIRECTIVES = [];
// #endregion
export class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    AlainThemeModule.forChild(),
                    DelonABCModule,
                    DelonChartModule,
                    DelonACLModule,
                    DelonFormModule,
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
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    AlainThemeModule,
                    DelonABCModule,
                    DelonChartModule,
                    DelonACLModule,
                    DelonFormModule,
                    // i18n
                    TranslateModule,
                    // third libs
                    ...THIRDMODULES,
                    // your components
                    ...COMPONENTS,
                    ...DIRECTIVES,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7O01BRXpDLFlBQVksR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7Ozs7TUFJcEYsVUFBVSxHQUFHLEVBQUU7O01BQ2YsVUFBVSxHQUFHLEVBQUU7O0FBeUNyQixNQUFNLE9BQU8sWUFBWTs7O1lBdEN4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO29CQUMzQixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsR0FBRyxZQUFZO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixPQUFPO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixHQUFHLFlBQVk7b0JBQ2Ysa0JBQWtCO29CQUNsQixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNkO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gZGVsb25cclxuaW1wb3J0IHsgQWxhaW5UaGVtZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IERlbG9uQUJDTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYyc7XHJcbmltcG9ydCB7IERlbG9uQ2hhcnRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQnO1xyXG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUgfSBmcm9tICdAZGVsb24vZm9ybSc7XHJcbi8vIGkxOG5cclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG4vLyAjcmVnaW9uIHRoaXJkIGxpYnNcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgQ291bnRkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XHJcbmltcG9ydCB7IFVFZGl0b3JNb2R1bGUgfSBmcm9tICduZ3gtdWVkaXRvcic7XHJcbmltcG9ydCB7IE5neFRpbnltY2VNb2R1bGUgfSBmcm9tICduZ3gtdGlueW1jZSc7XHJcblxyXG5jb25zdCBUSElSRE1PRFVMRVMgPSBbTmdab3Jyb0FudGRNb2R1bGUsIENvdW50ZG93bk1vZHVsZSwgVUVkaXRvck1vZHVsZSwgTmd4VGlueW1jZU1vZHVsZV07XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24geW91ciBjb21wb25ldHMgJiBkaXJlY3RpdmVzXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcclxuY29uc3QgRElSRUNUSVZFUyA9IFtdO1xyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIEFsYWluVGhlbWVNb2R1bGUuZm9yQ2hpbGQoKSxcclxuICAgIERlbG9uQUJDTW9kdWxlLFxyXG4gICAgRGVsb25DaGFydE1vZHVsZSxcclxuICAgIERlbG9uQUNMTW9kdWxlLFxyXG4gICAgRGVsb25Gb3JtTW9kdWxlLFxyXG4gICAgLy8gdGhpcmQgbGlic1xyXG4gICAgLi4uVEhJUkRNT0RVTEVTLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAvLyB5b3VyIGNvbXBvbmVudHNcclxuICAgIC4uLkNPTVBPTkVOVFMsXHJcbiAgICAuLi5ESVJFQ1RJVkVTLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgQWxhaW5UaGVtZU1vZHVsZSxcclxuICAgIERlbG9uQUJDTW9kdWxlLFxyXG4gICAgRGVsb25DaGFydE1vZHVsZSxcclxuICAgIERlbG9uQUNMTW9kdWxlLFxyXG4gICAgRGVsb25Gb3JtTW9kdWxlLFxyXG4gICAgLy8gaTE4blxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgLy8gdGhpcmQgbGlic1xyXG4gICAgLi4uVEhJUkRNT0RVTEVTLFxyXG4gICAgLy8geW91ciBjb21wb25lbnRzXHJcbiAgICAuLi5DT01QT05FTlRTLFxyXG4gICAgLi4uRElSRUNUSVZFUyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XHJcbiJdfQ==