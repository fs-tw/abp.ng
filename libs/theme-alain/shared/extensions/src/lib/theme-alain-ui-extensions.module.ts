import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NzTableListDirective } from './directives/nz-table-list.directive';
import { ExtensibleTableComponent } from './components/extensible-table/extensible-table.component';
import { GridActionsComponent } from './components/grid-actions/grid-actions.component';
import { PageToolbarComponent } from './components/page-toolbar/page-toolbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UiExtensionsModule as AbpUiExtensionsModule } from '@abp/ng.theme.shared/extensions'
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NzTableRowDetailDirective } from './directives/nz-table-row-detail.directive';
import { SVModule } from '@delon/abc/sv';
import { NzSelectDefaultDirective } from './directives/nz-select-default.directive';
import { NzSelectLoadingComponent } from './directives/nz-select-loading.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

const PUBLIC = [
  ExtensibleTableComponent,
  NzTableRowDetailDirective,
  GridActionsComponent,
  PageToolbarComponent,
  NzTableListDirective,
  NzSelectDefaultDirective
];
const PRIVATE = [
  NzSelectLoadingComponent
];

const ZORRO_MODULES = [
  NzButtonModule,
  NzDropDownModule,
  NzIconModule,
  NzTableModule,
  NzSpinModule
];

@NgModule({
  exports: [
    ...PUBLIC,
    AbpUiExtensionsModule,
    SVModule
  ],
  declarations: [
    ...PUBLIC,
    ...PRIVATE
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgxValidateCoreModule,
    AbpUiExtensionsModule,
    SVModule,
    ...ZORRO_MODULES,
  ],
})
export class BaseThemeAlainUiExtensionsModule {}

@NgModule({
  exports: [BaseThemeAlainUiExtensionsModule],
  imports: [BaseThemeAlainUiExtensionsModule],
})
export class ThemeAlainUiExtensionsModule {}
