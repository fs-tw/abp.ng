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
import { LogoComponent } from './components/logo/logo.component';
import { RoutesComponent } from './components/routes/routes.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
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
                declarations: [
                    ...LAYOUTS,
                    ValidationErrorComponent,
                    LogoComponent,
                    NavItemsComponent,
                    RoutesComponent,
                ],
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
                            maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                            min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            required: 'AbpAccount::ThisFieldIsRequired.',
                            passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                        },
                        errorTemplate: ValidationErrorComponent,
                    }),
                ],
                exports: [...LAYOUTS, LogoComponent, ValidationErrorComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi90aGVtZS1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBRS9FLE1BQU0sT0FBTyxPQUFPLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQztBQW9DakcsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOzs7WUFuQ3ZELFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osR0FBRyxPQUFPO29CQUNWLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNwQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7d0JBQzVCLGNBQWMsRUFBRSxhQUFhO3dCQUM3QixVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLCtDQUErQzs0QkFDdEQsR0FBRyxFQUFFLGtFQUFrRTs0QkFDdkUsU0FBUyxFQUNQLDRGQUE0Rjs0QkFDOUYsR0FBRyxFQUFFLGtFQUFrRTs0QkFDdkUsU0FBUyxFQUNQLDRGQUE0Rjs0QkFDOUYsUUFBUSxFQUFFLGtDQUFrQzs0QkFDNUMsZ0JBQWdCLEVBQUUsa0RBQWtEO3lCQUNyRTt3QkFDRCxhQUFhLEVBQUUsd0JBQXdCO3FCQUN4QyxDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQztnQkFDOUQsZUFBZSxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsd0JBQXdCLENBQUM7YUFDeEQ7Ozs7WUF4Q1EsY0FBYzs7Ozs7OztJQTBDVCwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkNvbGxhcHNlTW9kdWxlLCBOZ2JEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTmd4c01vZHVsZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQWNjb3VudExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvdW50LWxheW91dC9hY2NvdW50LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcHR5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5LWxheW91dC9lbXB0eS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGF5b3V0U3RhdGUgfSBmcm9tICcuL3N0YXRlcy9sYXlvdXQuc3RhdGUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluaXRpYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbml0aWFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVzL3JvdXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXYtaXRlbXMvbmF2LWl0ZW1zLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUUyA9IFtBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCwgQWNjb3VudExheW91dENvbXBvbmVudCwgRW1wdHlMYXlvdXRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIC4uLkxBWU9VVFMsXHJcbiAgICBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnQsXHJcbiAgICBMb2dvQ29tcG9uZW50LFxyXG4gICAgTmF2SXRlbXNDb21wb25lbnQsXHJcbiAgICBSb3V0ZXNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ2JDb2xsYXBzZU1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLFxyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtMYXlvdXRTdGF0ZV0pLFxyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICB0YXJnZXRTZWxlY3RvcjogJy5mb3JtLWdyb3VwJyxcclxuICAgICAgYmx1ZXByaW50czoge1xyXG4gICAgICAgIGVtYWlsOiAnQWJwQWNjb3VudDo6VGhpc0ZpZWxkSXNOb3RBVmFsaWRFbWFpbEFkZHJlc3MuJyxcclxuICAgICAgICBtYXg6ICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtYXhsZW5ndGg6XHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNYXhpbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICBtaW46ICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtaW5sZW5ndGg6XHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNaW5pbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICByZXF1aXJlZDogJ0FicEFjY291bnQ6OlRoaXNGaWVsZElzUmVxdWlyZWQuJyxcclxuICAgICAgICBwYXNzd29yZE1pc21hdGNoOiAnQWJwSWRlbnRpdHk6OklkZW50aXR5LlBhc3N3b3JkQ29uZmlybWF0aW9uRmFpbGVkJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JUZW1wbGF0ZTogVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBleHBvcnRzOiBbLi4uTEFZT1VUUywgTG9nb0NvbXBvbmVudCwgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5MQVlPVVRTLCBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbWVCYXNpY01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsU2VydmljZTogSW5pdGlhbFNlcnZpY2UpIHt9XHJcbn1cclxuIl19