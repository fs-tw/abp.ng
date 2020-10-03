import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { CurrentUserComponent } from './components/nav-items/current-user.component';
import { LanguagesComponent } from './components/nav-items/languages.component';
import { BASIC_THEME_STYLES_PROVIDERS } from './providers/styles.provider';
import { BASIC_THEME_NAV_ITEM_PROVIDERS } from './providers/nav-item.provider';
export const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
export class ThemeBasicModule {
    static forRoot() {
        return {
            ngModule: RootThemeBasicModule,
            providers: [BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS],
        };
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
                    CurrentUserComponent,
                    LanguagesComponent,
                ],
                exports: [
                    ...LAYOUTS,
                    ValidationErrorComponent,
                    LogoComponent,
                    NavItemsComponent,
                    RoutesComponent,
                    CurrentUserComponent,
                    LanguagesComponent,
                ],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbCollapseModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule,
                ],
                entryComponents: [...LAYOUTS, ValidationErrorComponent, CurrentUserComponent, LanguagesComponent],
            },] }
];
export class RootThemeBasicModule {
}
RootThemeBasicModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-group',
                        blueprints: {
                            creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
                            email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
                            invalid: 'AbpValidation::ThisFieldIsNotValid.',
                            max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                            min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
                            passwordMismatch: 'AbpIdentity::Volo.Abp.Identity:PasswordConfirmationFailed',
                            range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            required: 'AbpValidation::ThisFieldIsRequired.',
                            url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                        },
                        errorTemplate: ValidationErrorComponent,
                    }),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtYmFzaWMvc3JjL2xpYi90aGVtZS1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9FLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUE4QmxHLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztTQUMxRSxDQUFDO0lBQ0osQ0FBQzs7O1lBbENGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osR0FBRyxPQUFPO29CQUNWLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLE9BQU87b0JBQ1Ysd0JBQXdCO29CQUN4QixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGlCQUFpQjtvQkFDakIscUJBQXFCO2lCQUN0QjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQzthQUNsRzs7QUFrQ0QsTUFBTSxPQUFPLG9CQUFvQjs7O1lBeEJoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzt3QkFDNUIsY0FBYyxFQUFFLGFBQWE7d0JBQzdCLFVBQVUsRUFBRTs0QkFDVixVQUFVLEVBQUUsc0RBQXNEOzRCQUNsRSxLQUFLLEVBQUUsa0RBQWtEOzRCQUN6RCxPQUFPLEVBQUUscUNBQXFDOzRCQUM5QyxHQUFHLEVBQUUscUVBQXFFOzRCQUMxRSxTQUFTLEVBQ1AsK0ZBQStGOzRCQUNqRyxHQUFHLEVBQUUscUVBQXFFOzRCQUMxRSxTQUFTLEVBQ1AsK0ZBQStGOzRCQUNqRyxPQUFPLEVBQUUscUNBQXFDOzRCQUM5QyxnQkFBZ0IsRUFBRSwyREFBMkQ7NEJBQzdFLEtBQUssRUFBRSxxRUFBcUU7NEJBQzVFLFFBQVEsRUFBRSxxQ0FBcUM7NEJBQy9DLEdBQUcsRUFBRSxvRUFBb0U7eUJBQzFFO3dCQUNELGFBQWEsRUFBRSx3QkFBd0I7cUJBQ3hDLENBQUM7aUJBQ0g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiQ29sbGFwc2VNb2R1bGUsIE5nYkRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hWYWxpZGF0ZUNvcmVNb2R1bGUgfSBmcm9tICdAbmd4LXZhbGlkYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvdW50TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWxheW91dC9hcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1wdHlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHktbGF5b3V0L2VtcHR5LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXYtaXRlbXMvbmF2LWl0ZW1zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2LWl0ZW1zL2N1cnJlbnQtdXNlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2LWl0ZW1zL2xhbmd1YWdlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQVNJQ19USEVNRV9TVFlMRVNfUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvc3R5bGVzLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgQkFTSUNfVEhFTUVfTkFWX0lURU1fUFJPVklERVJTIH0gZnJvbSAnLi9wcm92aWRlcnMvbmF2LWl0ZW0ucHJvdmlkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBWU9VVFMgPSBbQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQsIEFjY291bnRMYXlvdXRDb21wb25lbnQsIEVtcHR5TGF5b3V0Q29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAuLi5MQVlPVVRTLFxyXG4gICAgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIE5hdkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgUm91dGVzQ29tcG9uZW50LFxyXG4gICAgQ3VycmVudFVzZXJDb21wb25lbnQsXHJcbiAgICBMYW5ndWFnZXNDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICAuLi5MQVlPVVRTLFxyXG4gICAgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIE5hdkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgUm91dGVzQ29tcG9uZW50LFxyXG4gICAgQ3VycmVudFVzZXJDb21wb25lbnQsXHJcbiAgICBMYW5ndWFnZXNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICBOZ2JDb2xsYXBzZU1vZHVsZSxcclxuICAgIE5nYkRyb3Bkb3duTW9kdWxlLFxyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uTEFZT1VUUywgVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LCBDdXJyZW50VXNlckNvbXBvbmVudCwgTGFuZ3VhZ2VzQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lQmFzaWNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGhlbWVCYXNpY01vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFJvb3RUaGVtZUJhc2ljTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtCQVNJQ19USEVNRV9OQVZfSVRFTV9QUk9WSURFUlMsIEJBU0lDX1RIRU1FX1NUWUxFU19QUk9WSURFUlNdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4VmFsaWRhdGVDb3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICB0YXJnZXRTZWxlY3RvcjogJy5mb3JtLWdyb3VwJyxcclxuICAgICAgYmx1ZXByaW50czoge1xyXG4gICAgICAgIGNyZWRpdENhcmQ6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc05vdEFWYWxpZENyZWRpdENhcmROdW1iZXIuJyxcclxuICAgICAgICBlbWFpbDogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90QVZhbGlkRW1haWxBZGRyZXNzLicsXHJcbiAgICAgICAgaW52YWxpZDogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90VmFsaWQuJyxcclxuICAgICAgICBtYXg6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtYXhsZW5ndGg6XHJcbiAgICAgICAgICAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNYXhpbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICBtaW46ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRNdXN0QmVCZXR3ZWVuezB9QW5kezF9W3t7IG1pbiB9fSx7eyBtYXggfX1dJyxcclxuICAgICAgICBtaW5sZW5ndGg6XHJcbiAgICAgICAgICAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQVN0cmluZ09yQXJyYXlUeXBlV2l0aEFNaW5pbXVtTGVuZ3RoT2Z7MH1be3sgcmVxdWlyZWRMZW5ndGggfX1dJyxcclxuICAgICAgICBuZ2JEYXRlOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNOb3RWYWxpZC4nLFxyXG4gICAgICAgIHBhc3N3b3JkTWlzbWF0Y2g6ICdBYnBJZGVudGl0eTo6Vm9sby5BYnAuSWRlbnRpdHk6UGFzc3dvcmRDb25maXJtYXRpb25GYWlsZWQnLFxyXG4gICAgICAgIHJhbmdlOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQmV0d2VlbnswfUFuZHsxfVt7eyBtaW4gfX0se3sgbWF4IH19XScsXHJcbiAgICAgICAgcmVxdWlyZWQ6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc1JlcXVpcmVkLicsXHJcbiAgICAgICAgdXJsOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNOb3RBVmFsaWRGdWxseVF1YWxpZmllZEh0dHBIdHRwc09yRnRwVXJsJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JUZW1wbGF0ZTogVmFsaWRhdGlvbkVycm9yQ29tcG9uZW50LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RUaGVtZUJhc2ljTW9kdWxlIHt9XHJcbiJdfQ==