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
export class UiExtensionsModule {
}
UiExtensionsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZXh0ZW5zaW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL3VpLWV4dGVuc2lvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixtQkFBbUIsR0FDcEIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQStCckUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBN0I5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLDJCQUEyQjtvQkFDM0IsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBOZ2JEYXRlcGlja2VyTW9kdWxlLFxyXG4gIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gIE5nYlRpbWVwaWNrZXJNb2R1bGUsXHJcbn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXh0ZW5zaWJsZUZvcm1Qcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4dGVuc2libGUtZm9ybS9leHRlbnNpYmxlLWZvcm0tcHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFeHRlbnNpYmxlRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHRlbnNpYmxlLWZvcm0vZXh0ZW5zaWJsZS1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV4dGVuc2libGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHRlbnNpYmxlLXRhYmxlL2V4dGVuc2libGUtdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3JpZEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JpZC1hY3Rpb25zL2dyaWQtYWN0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlLXRvb2xiYXIvcGFnZS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpc2FibGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Rpc2FibGVkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFByb3BEYXRhRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Byb3AtZGF0YS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBEYXRlVGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFBhZ2VUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgR3JpZEFjdGlvbnNDb21wb25lbnQsXHJcbiAgICBFeHRlbnNpYmxlRm9ybUNvbXBvbmVudCxcclxuICAgIEV4dGVuc2libGVUYWJsZUNvbXBvbmVudCxcclxuICAgIFByb3BEYXRhRGlyZWN0aXZlLFxyXG4gICAgRGlzYWJsZWREaXJlY3RpdmUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIERhdGVUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgUGFnZVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBHcmlkQWN0aW9uc0NvbXBvbmVudCxcclxuICAgIEV4dGVuc2libGVGb3JtUHJvcENvbXBvbmVudCxcclxuICAgIEV4dGVuc2libGVGb3JtQ29tcG9uZW50LFxyXG4gICAgRXh0ZW5zaWJsZVRhYmxlQ29tcG9uZW50LFxyXG4gICAgUHJvcERhdGFEaXJlY3RpdmUsXHJcbiAgICBEaXNhYmxlZERpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZSxcclxuICAgIE5nYkRhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICAgIE5nYlRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFVpRXh0ZW5zaW9uc01vZHVsZSB7fVxyXG4iXX0=