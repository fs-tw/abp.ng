import { __decorate } from "tslib";
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule, } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { ExtensibleFormPropComponent } from './components/extensible-form/extensible-form-prop.component';
import { ExtensibleFormComponent } from './components/extensible-form/extensible-form.component';
import { ExtensibleTableComponent } from './components/extensible-table/extensible-table.component';
import { GridActionsComponent } from './components/grid-actions/grid-actions.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { DisabledDirective } from './directives/disabled.directive';
import { PropDataDirective } from './directives/prop-data.directive';
let UiExtensionsModule = class UiExtensionsModule {
};
UiExtensionsModule = __decorate([
    NgModule({
        exports: [
            DateTimePickerComponent,
            PageToolbarComponent,
            GridActionsComponent,
            ExtensibleFormComponent,
            ExtensibleTableComponent,
            PropDataDirective,
            DisabledDirective,
        ],
        declarations: [
            DateTimePickerComponent,
            PageToolbarComponent,
            GridActionsComponent,
            ExtensibleFormPropComponent,
            ExtensibleFormComponent,
            ExtensibleTableComponent,
            PropDataDirective,
            DisabledDirective,
        ],
        imports: [
            CoreModule,
            ThemeSharedModule,
            NgxValidateCoreModule,
            NgbDatepickerModule,
            NgbDropdownModule,
            NgbTimepickerModule,
        ],
    })
], UiExtensionsModule);
export { UiExtensionsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZXh0ZW5zaW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL3VpLWV4dGVuc2lvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsbUJBQW1CLEdBQ3BCLE1BQU0sNEJBQTRCLENBQUM7QUFDcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDbkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUErQnJFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0NBQUcsQ0FBQTtBQUFyQixrQkFBa0I7SUE3QjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtTQUNsQjtRQUNELFlBQVksRUFBRTtZQUNaLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLDJCQUEyQjtZQUMzQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLGlCQUFpQjtZQUNqQixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0FBRztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTmdiRGF0ZXBpY2tlck1vZHVsZSxcclxuICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICBOZ2JUaW1lcGlja2VyTW9kdWxlLFxyXG59IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHRlbnNpYmxlLWZvcm0vZXh0ZW5zaWJsZS1mb3JtLXByb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXh0ZW5zaWJsZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXh0ZW5zaWJsZS1mb3JtL2V4dGVuc2libGUtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHRlbnNpYmxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXh0ZW5zaWJsZS10YWJsZS9leHRlbnNpYmxlLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdyaWRBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQtYWN0aW9ucy9ncmlkLWFjdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS10b29sYmFyL3BhZ2UtdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNhYmxlZERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kaXNhYmxlZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQcm9wRGF0YURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wcm9wLWRhdGEuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1xyXG4gICAgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBQYWdlVG9vbGJhckNvbXBvbmVudCxcclxuICAgIEdyaWRBY3Rpb25zQ29tcG9uZW50LFxyXG4gICAgRXh0ZW5zaWJsZUZvcm1Db21wb25lbnQsXHJcbiAgICBFeHRlbnNpYmxlVGFibGVDb21wb25lbnQsXHJcbiAgICBQcm9wRGF0YURpcmVjdGl2ZSxcclxuICAgIERpc2FibGVkRGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEYXRlVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFBhZ2VUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgR3JpZEFjdGlvbnNDb21wb25lbnQsXHJcbiAgICBFeHRlbnNpYmxlRm9ybVByb3BDb21wb25lbnQsXHJcbiAgICBFeHRlbnNpYmxlRm9ybUNvbXBvbmVudCxcclxuICAgIEV4dGVuc2libGVUYWJsZUNvbXBvbmVudCxcclxuICAgIFByb3BEYXRhRGlyZWN0aXZlLFxyXG4gICAgRGlzYWJsZWREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgICBOZ2JEYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTmdiRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBOZ2JUaW1lcGlja2VyTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVaUV4dGVuc2lvbnNNb2R1bGUge31cclxuIl19