import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { PageModule } from '@abp/ng.components/page';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeAlainUiExtensionsModule } from '@fs-tw/theme-alain/shared/extensions';

export const SHARED_ABP_MODULES = [
    CoreModule,
    ThemeSharedModule,
    PageModule,
    NgxValidateCoreModule,
    ThemeAlainUiExtensionsModule
];
