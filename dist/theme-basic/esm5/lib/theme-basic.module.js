/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
var ThemeBasicModule = /** @class */ (function () {
    function ThemeBasicModule(initialService) {
        this.initialService = initialService;
    }
    ThemeBasicModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread(LAYOUTS, [ValidationErrorComponent]),
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
                    exports: tslib_1.__spread(LAYOUTS),
                    entryComponents: tslib_1.__spread(LAYOUTS, [ValidationErrorComponent]),
                },] }
    ];
    /** @nocollapse */
    ThemeBasicModule.ctorParameters = function () { return [
        { type: InitialService }
    ]; };
    return ThemeBasicModule;
}());
export { ThemeBasicModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBasicModule.prototype.initialService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5iYXNpYy8iLCJzb3VyY2VzIjpbImxpYi90aGVtZS1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFNUQsTUFBTSxLQUFPLE9BQU8sR0FBRyxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO0FBRWpHO0lBNkJFLDBCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDOztnQkE3QnZELFFBQVEsU0FBQztvQkFDUixZQUFZLG1CQUFNLE9BQU8sR0FBRSx3QkFBd0IsRUFBQztvQkFDcEQsT0FBTyxFQUFFO3dCQUNQLFVBQVU7d0JBQ1YsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3BDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs0QkFDNUIsY0FBYyxFQUFFLGFBQWE7NEJBQzdCLFVBQVUsRUFBRTtnQ0FDVixLQUFLLEVBQUUsK0NBQStDO2dDQUN0RCxHQUFHLEVBQUUsa0VBQWtFO2dDQUN2RSxTQUFTLEVBQ1AsNkZBQTZGO2dDQUMvRixHQUFHLEVBQUUsa0VBQWtFO2dDQUN2RSxTQUFTLEVBQ1AsNEZBQTRGO2dDQUM5RixRQUFRLEVBQUUsa0NBQWtDO2dDQUM1QyxnQkFBZ0IsRUFBRSxrREFBa0Q7NkJBQ3JFOzRCQUNELGFBQWEsRUFBRSx3QkFBd0I7eUJBQ3hDLENBQUM7cUJBQ0g7b0JBQ0QsT0FBTyxtQkFBTSxPQUFPLENBQUM7b0JBQ3JCLGVBQWUsbUJBQU0sT0FBTyxHQUFFLHdCQUF3QixFQUFDO2lCQUN4RDs7OztnQkEvQlEsY0FBYzs7SUFrQ3ZCLHVCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0FGWSxnQkFBZ0I7Ozs7OztJQUNmLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQ29sbGFwc2VNb2R1bGUsIE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWxheW91dC9hcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHktbGF5b3V0L2VtcHR5LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2xheW91dC5zdGF0ZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5pdGlhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2luaXRpYWwuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTEFZT1VUUyA9IFtBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCwgQWNjb3VudExheW91dENvbXBvbmVudCwgRW1wdHlMYXlvdXRDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5MQVlPVVRTLCBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5nYkNvbGxhcHNlTW9kdWxlLFxyXG4gICAgTmdiRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUsXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW0xheW91dFN0YXRlXSksXHJcbiAgICBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIHRhcmdldFNlbGVjdG9yOiAnLmZvcm0tZ3JvdXAnLFxyXG4gICAgICBibHVlcHJpbnRzOiB7XHJcbiAgICAgICAgZW1haWw6ICdBYnBBY2NvdW50OjpUaGlzRmllbGRJc05vdEFWYWxpZEVtYWlsQWRkcmVzcy4nLFxyXG4gICAgICAgIG1heDogJ0FicEFjY291bnQ6OlRoaXNGaWVsZE11c3RCZUJldHdlZW57MH1BbmR7MX1be3sgbWluIH19LHt7IG1heCB9fV0nLFxyXG4gICAgICAgIG1heGxlbmd0aDpcclxuICAgICAgICAgICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVBU3RyaW5nT3JBcnJheVR5cGVXaXRoQU1heGltdW1MZW5ndGhvT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICBtaW46ICdBYnBBY2NvdW50OjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtaW5sZW5ndGg6XHJcbiAgICAgICAgICAnQWJwQWNjb3VudDo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNaW5pbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICByZXF1aXJlZDogJ0FicEFjY291bnQ6OlRoaXNGaWVsZElzUmVxdWlyZWQuJyxcclxuICAgICAgICBwYXNzd29yZE1pc21hdGNoOiAnQWJwSWRlbnRpdHk6OklkZW50aXR5LlBhc3N3b3JkQ29uZmlybWF0aW9uRmFpbGVkJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JUZW1wbGF0ZTogVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBleHBvcnRzOiBbLi4uTEFZT1VUU10sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uTEFZT1VUUywgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lQmFzaWNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5pdGlhbFNlcnZpY2U6IEluaXRpYWxTZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==