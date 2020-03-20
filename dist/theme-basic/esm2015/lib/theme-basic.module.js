/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NgxsModule } from '@ngxs/store';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { LayoutState } from './states/layout.state';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { InitialService } from './services/initial.service';
/** @type {?} */
export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
export class ThemeBasicModule {
    /**
     * @param {?} initialService
     */
    constructor(initialService) {
        this.initialService = initialService;
    }
}
ThemeBasicModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...LAYOUTS, ValidationErrorComponent],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbCollapseModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule,
                    NgxsModule.forFeature([LayoutState]),
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-group',
                        blueprints: {
                            email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
                            max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthoOf{0}[{{ requiredLength }}]',
                            min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            required: 'AbpAccount::ThisFieldIsRequired.',
                            passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                        },
                        errorTemplate: ValidationErrorComponent,
                    }),
                ],
                exports: [...LAYOUTS],
                entryComponents: [...LAYOUTS, ValidationErrorComponent],
            },] }
];
/** @nocollapse */
ThemeBasicModule.ctorParameters = () => [
    { type: InitialService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBasicModule.prototype.initialService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi90aGVtZS1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUU1RCxNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7QUE4QmpHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQzs7O1lBN0J2RCxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsd0JBQXdCLENBQUM7Z0JBQ3BELE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNwQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLGNBQWMsRUFBRSxhQUFhO3dCQUM3QixVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLCtDQUErQzs0QkFDdEQsR0FBRyxFQUFFLGtFQUFrRTs0QkFDdkUsU0FBUyxFQUNQLDZGQUE2Rjs0QkFDL0YsR0FBRyxFQUFFLGtFQUFrRTs0QkFDdkUsU0FBUyxFQUNQLDRGQUE0Rjs0QkFDOUYsUUFBUSxFQUFFLGtDQUFrQzs0QkFDNUMsZ0JBQWdCLEVBQUUsa0RBQWtEO3lCQUNyRTt3QkFDRCxhQUFhLEVBQUUsd0JBQXdCO3FCQUN4QyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNyQixlQUFlLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQzthQUN4RDs7OztZQS9CUSxjQUFjOzs7Ozs7O0lBaUNULDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQ29sbGFwc2VNb2R1bGUsIE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWxheW91dC9hcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHktbGF5b3V0L2VtcHR5LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xheW91dC5zdGF0ZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5pdGlhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luaXRpYWwuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUUyA9IFtBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCwgQWNjb3VudExheW91dENvbXBvbmVudCwgRW1wdHlMYXlvdXRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5MQVlPVVRTLCBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5nYkNvbGxhcHNlTW9kdWxlLFxyXG4gICAgTmdiRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW0xheW91dFN0YXRlXSksXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIHRhcmdldFNlbGVjdG9yOiAnLmZvcm0tZ3JvdXAnLFxyXG4gICAgICBibHVlcHJpbnRzOiB7XHJcbiAgICAgICAgZW1haWw6ICdBYnBBY2NvdW50OjpUaGlzRmllbGRJc05vdEFWYWxpZEVtYWlsQWRkcmVzcy4nLFxyXG4gICAgICAgIG1heDogJ0FicEFjY291bnQ6OlRoaXNGaWVsZE11c3RCZUJldHdlZW57MH1BbmR7MX1be3sgbWluIH19LHt7IG1heCB9fV0nLFxyXG4gICAgICAgIG1heGxlbmd0aDpcclxuICAgICAgICAgICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVBU3RyaW5nT3JBcnJheVR5cGVXaXRoQU1heGltdW1MZW5ndGhvT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICBtaW46ICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtaW5sZW5ndGg6XHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNaW5pbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICByZXF1aXJlZDogJ0FicEFjY291bnQ6OlRoaXNGaWVsZElzUmVxdWlyZWQuJyxcclxuICAgICAgICBwYXNzd29yZE1pc21hdGNoOiAnQWJwSWRlbnRpdHk6OklkZW50aXR5LlBhc3N3b3JkQ29uZmlybWF0aW9uRmFpbGVkJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JUZW1wbGF0ZTogVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBleHBvcnRzOiBbLi4uTEFZT1VUU10sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uTEFZT1VUUywgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lQmFzaWNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5pdGlhbFNlcnZpY2U6IEluaXRpYWxTZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==