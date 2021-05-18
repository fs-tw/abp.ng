import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NoticeIconModule } from '@delon/abc/notice-icon';
import { LayoutDefaultModule } from '@delon/theme/layout-default';
import { SettingDrawerModule } from '@delon/theme/setting-drawer';
import { ThemeBtnModule } from '@delon/theme/theme-btn';
import { TranslateModule } from '@ngx-translate/core';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { PageHeaderModule} from '@delon/abc/page-header'

import { LayoutBasicComponent } from './components/basic/basic.component';
import { HeaderClearStorageComponent } from './components/basic/widgets/clear-storage.component';
import { HeaderFullScreenComponent } from './components/basic/widgets/fullscreen.component';
import { HeaderI18nComponent } from './components/basic/widgets/i18n.component';
import { HeaderIconComponent } from './components/basic/widgets/icon.component';
import { HeaderNotifyComponent } from './components/basic/widgets/notify.component';
import { HeaderRTLComponent } from './components/basic/widgets/rtl.component';
import { HeaderSearchComponent } from './components/basic/widgets/search.component';
import { HeaderTaskComponent } from './components/basic/widgets/task.component';
import { HeaderUserComponent } from './components/basic/widgets/user.component';
import { LayoutBlankComponent } from './components/blank/blank.component';
import { BreadcrumbComponent } from './components/basic/widgets/breadcrumb.component';
const COMPONENTS = [LayoutBasicComponent, LayoutBlankComponent];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderClearStorageComponent,
  HeaderUserComponent,
  HeaderRTLComponent,
];

// passport
import { LayoutPassportComponent } from './components/passport/passport.component';
import { LAYOUT_INIT_PROVIDERS } from './providers/init.provider';

const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [
    CoreModule,
    ThemeSharedModule,
    NzBreadCrumbModule,
    PageHeaderModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ThemeBtnModule,
    SettingDrawerModule,
    LayoutDefaultModule,
    TranslateModule,
    NoticeIconModule,
    GlobalFooterModule,
    NzDropDownModule,
    NzInputModule,
    NzAutocompleteModule,
    NzGridModule,
    NzFormModule,
    NzSpinModule,
    NzBadgeModule,
    NzAvatarModule,
    NzIconModule,
    NzCardModule,
  ],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT, BreadcrumbComponent],
  exports: [...COMPONENTS, ...PASSPORT],
  providers:[LAYOUT_INIT_PROVIDERS]
})
export class LayoutModule {}
