import { NgModule } from '@angular/core';
// import { GlobalConfigModule } from './global-config.module';
//import { NzMessageModule } from 'ng-zorro-antd/message';
//import { CoreModule as  AbpCoreModule} from '@abp/ng.core';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import { LANG_PROVIDES } from './providers/lang.provider';
import { LayoutModule } from '@fs-tw/theme-alain/layout';
import { AlainThemeModule } from '@delon/theme';

@NgModule({
  imports: [
    //AbpCoreModule,
    //NzMessageModule,
    //GlobalConfigModule.forRoot(),
    LayoutModule.forRoot(),
    AlainThemeModule.forRoot()
  ],
  providers: [
    STYLES_PROVIDERS,
    ...LANG_PROVIDES,
    // {
    //   provide: VALIDATION_ERROR_TEMPLATE,
    //   useValue: ValidationErrorComponent,
    // },
    // {
    //   provide: VALIDATION_TARGET_SELECTOR,
    //   useValue: '.form-group',
    // },
    // {
    //   provide: VALIDATION_INVALID_CLASSES,
    //   useValue: 'is-invalid',
    // }
  ]
})
export class ThemeAlainCoreModule { }

