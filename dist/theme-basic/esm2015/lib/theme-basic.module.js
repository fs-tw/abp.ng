import { __decorate } from "tslib";
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
let ThemeBasicModule = class ThemeBasicModule {
    static forRoot() {
        return {
            ngModule: RootThemeBasicModule,
            providers: [BASIC_THEME_NAV_ITEM_PROVIDERS, BASIC_THEME_STYLES_PROVIDERS],
        };
    }
};
ThemeBasicModule = __decorate([
    NgModule({
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
    })
], ThemeBasicModule);
export { ThemeBasicModule };
let RootThemeBasicModule = class RootThemeBasicModule {
};
RootThemeBasicModule = __decorate([
    NgModule({
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
                    passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                    range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    required: 'AbpValidation::ThisFieldIsRequired.',
                    url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
                },
                errorTemplate: ValidationErrorComponent,
            }),
        ],
    })
], RootThemeBasicModule);
export { RootThemeBasicModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtYmFzaWMvc3JjL2xpYi90aGVtZS1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBOEJsRyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLDRCQUE0QixDQUFDO1NBQzFFLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLGdCQUFnQjtJQTVCNUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osR0FBRyxPQUFPO1lBQ1Ysd0JBQXdCO1lBQ3hCLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixrQkFBa0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLE9BQU87WUFDVix3QkFBd0I7WUFDeEIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLGtCQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNQLFVBQVU7WUFDVixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixxQkFBcUI7U0FDdEI7UUFDRCxlQUFlLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQztLQUNsRyxDQUFDO0dBQ1csZ0JBQWdCLENBTzVCO1NBUFksZ0JBQWdCO0FBaUM3QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHLENBQUE7QUFBdkIsb0JBQW9CO0lBeEJoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzVCLGNBQWMsRUFBRSxhQUFhO2dCQUM3QixVQUFVLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLHNEQUFzRDtvQkFDbEUsS0FBSyxFQUFFLGtEQUFrRDtvQkFDekQsT0FBTyxFQUFFLHFDQUFxQztvQkFDOUMsR0FBRyxFQUFFLHFFQUFxRTtvQkFDMUUsU0FBUyxFQUNQLCtGQUErRjtvQkFDakcsR0FBRyxFQUFFLHFFQUFxRTtvQkFDMUUsU0FBUyxFQUNQLCtGQUErRjtvQkFDakcsT0FBTyxFQUFFLHFDQUFxQztvQkFDOUMsZ0JBQWdCLEVBQUUsa0RBQWtEO29CQUNwRSxLQUFLLEVBQUUscUVBQXFFO29CQUM1RSxRQUFRLEVBQUUscUNBQXFDO29CQUMvQyxHQUFHLEVBQUUsb0VBQW9FO2lCQUMxRTtnQkFDRCxhQUFhLEVBQUUsd0JBQXdCO2FBQ3hDLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0FBRztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkNvbGxhcHNlTW9kdWxlLCBOZ2JEcm9wZG93bk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4VmFsaWRhdGVDb3JlTW9kdWxlIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3VudExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvdW50LWxheW91dC9hY2NvdW50LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtcHR5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5LWxheW91dC9lbXB0eS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9nb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2LWl0ZW1zL25hdi1pdGVtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVzL3JvdXRlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdmFsaWRhdGlvbi1lcnJvci92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdi1pdGVtcy9jdXJyZW50LXVzZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdi1pdGVtcy9sYW5ndWFnZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkFTSUNfVEhFTUVfU1RZTEVTX1BST1ZJREVSUyB9IGZyb20gJy4vcHJvdmlkZXJzL3N0eWxlcy5wcm92aWRlcic7XHJcbmltcG9ydCB7IEJBU0lDX1RIRU1FX05BVl9JVEVNX1BST1ZJREVSUyB9IGZyb20gJy4vcHJvdmlkZXJzL25hdi1pdGVtLnByb3ZpZGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRTID0gW0FwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50LCBBY2NvdW50TGF5b3V0Q29tcG9uZW50LCBFbXB0eUxheW91dENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgLi4uTEFZT1VUUyxcclxuICAgIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBOYXZJdGVtc0NvbXBvbmVudCxcclxuICAgIFJvdXRlc0NvbXBvbmVudCxcclxuICAgIEN1cnJlbnRVc2VyQ29tcG9uZW50LFxyXG4gICAgTGFuZ3VhZ2VzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLi4uTEFZT1VUUyxcclxuICAgIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBOYXZJdGVtc0NvbXBvbmVudCxcclxuICAgIFJvdXRlc0NvbXBvbmVudCxcclxuICAgIEN1cnJlbnRVc2VyQ29tcG9uZW50LFxyXG4gICAgTGFuZ3VhZ2VzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIFRoZW1lU2hhcmVkTW9kdWxlLFxyXG4gICAgTmdiQ29sbGFwc2VNb2R1bGUsXHJcbiAgICBOZ2JEcm9wZG93bk1vZHVsZSxcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZSxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLkxBWU9VVFMsIFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCwgQ3VycmVudFVzZXJDb21wb25lbnQsIExhbmd1YWdlc0NvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaGVtZUJhc2ljTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRoZW1lQmFzaWNNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSb290VGhlbWVCYXNpY01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbQkFTSUNfVEhFTUVfTkFWX0lURU1fUFJPVklERVJTLCBCQVNJQ19USEVNRV9TVFlMRVNfUFJPVklERVJTXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIE5neFZhbGlkYXRlQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgdGFyZ2V0U2VsZWN0b3I6ICcuZm9ybS1ncm91cCcsXHJcbiAgICAgIGJsdWVwcmludHM6IHtcclxuICAgICAgICBjcmVkaXRDYXJkOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNOb3RBVmFsaWRDcmVkaXRDYXJkTnVtYmVyLicsXHJcbiAgICAgICAgZW1haWw6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc05vdEFWYWxpZEVtYWlsQWRkcmVzcy4nLFxyXG4gICAgICAgIGludmFsaWQ6ICdBYnBWYWxpZGF0aW9uOjpUaGlzRmllbGRJc05vdFZhbGlkLicsXHJcbiAgICAgICAgbWF4OiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQmV0d2VlbnswfUFuZHsxfVt7eyBtaW4gfX0se3sgbWF4IH19XScsXHJcbiAgICAgICAgbWF4bGVuZ3RoOlxyXG4gICAgICAgICAgJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUFTdHJpbmdPckFycmF5VHlwZVdpdGhBTWF4aW11bUxlbmd0aE9mezB9W3t7IHJlcXVpcmVkTGVuZ3RoIH19XScsXHJcbiAgICAgICAgbWluOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkTXVzdEJlQmV0d2VlbnswfUFuZHsxfVt7eyBtaW4gfX0se3sgbWF4IH19XScsXHJcbiAgICAgICAgbWlubGVuZ3RoOlxyXG4gICAgICAgICAgJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUFTdHJpbmdPckFycmF5VHlwZVdpdGhBTWluaW11bUxlbmd0aE9mezB9W3t7IHJlcXVpcmVkTGVuZ3RoIH19XScsXHJcbiAgICAgICAgbmdiRGF0ZTogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90VmFsaWQuJyxcclxuICAgICAgICBwYXNzd29yZE1pc21hdGNoOiAnQWJwSWRlbnRpdHk6OklkZW50aXR5LlBhc3N3b3JkQ29uZmlybWF0aW9uRmFpbGVkJyxcclxuICAgICAgICByYW5nZTogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZE11c3RCZUJldHdlZW57MH1BbmR7MX1be3sgbWluIH19LHt7IG1heCB9fV0nLFxyXG4gICAgICAgIHJlcXVpcmVkOiAnQWJwVmFsaWRhdGlvbjo6VGhpc0ZpZWxkSXNSZXF1aXJlZC4nLFxyXG4gICAgICAgIHVybDogJ0FicFZhbGlkYXRpb246OlRoaXNGaWVsZElzTm90QVZhbGlkRnVsbHlRdWFsaWZpZWRIdHRwSHR0cHNPckZ0cFVybCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yVGVtcGxhdGU6IFZhbGlkYXRpb25FcnJvckNvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290VGhlbWVCYXNpY01vZHVsZSB7fVxyXG4iXX0=