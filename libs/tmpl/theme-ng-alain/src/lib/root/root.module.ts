// #region root module
import { GlobalConfigModule } from './global-config.module';
import { NgAlainSharedModule } from '@fs/theme.ng-alain/shared';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ValidationErrorComponent } from '@fs/theme.ng-alain/basic';
import { AlainConfigService } from '@delon/util';
import { NgModule } from '@angular/core';
import { ThemeCoreModule } from '@fs/theme.core';

@NgModule({
  imports: [
    NgxValidateCoreModule.forRoot({
      //targetSelector: 'nz-input-group',
      blueprints: {
        creditCard: 'AbpValidation::ThisFieldIsNotAValidCreditCardNumber.',
        email: 'AbpValidation::ThisFieldIsNotAValidEmailAddress.',
        invalid: 'AbpValidation::ThisFieldIsNotValid.',
        max: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        maxlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
        min: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        minlength:
          'AbpValidation::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
        ngbDate: 'AbpValidation::ThisFieldIsNotValid.',
        passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
        range: 'AbpValidation::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
        required: 'AbpValidation::ThisFieldIsRequired.',
        url: 'AbpValidation::ThisFieldIsNotAValidFullyQualifiedHttpHttpsOrFtpUrl',
      },
      errorTemplate: ValidationErrorComponent,
    }),
    GlobalConfigModule.forRoot(),
    ThemeCoreModule.forRoot(),
    NgAlainSharedModule.forRoot(),
    NgAlainBasicModule.forRoot(),
  ],
  providers: [
    AlainConfigService,//Issue: https://github.com/ng-alain/ng-alain/issues/1624
  ],  
})
export class RootModule { }

// #endregion

