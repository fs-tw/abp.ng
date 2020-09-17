import { NgModule } from '@angular/core';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';

import { LayoutDefaultComponent } from './default/default.component';
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component';
import { HeaderI18nComponent } from './default/header/components/i18n.component';
import { HeaderIconComponent } from './default/header/components/icon.component';
import { HeaderNotifyComponent } from './default/header/components/notify.component';
import { HeaderSearchComponent } from './default/header/components/search.component';
import { HeaderStorageComponent } from './default/header/components/storage.component';
import { HeaderTaskComponent } from './default/header/components/task.component';
import { HeaderUserComponent } from './default/header/components/user.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component';

import { SettingDrawerItemComponent } from './default/setting-drawer/setting-drawer-item.component';
import { SettingDrawerComponent } from './default/setting-drawer/setting-drawer.component';
import { LayoutThemeBtnComponent } from './default/theme-btn/theme-btn.component';

const SETTINGDRAWER = [SettingDrawerComponent, SettingDrawerItemComponent];
const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutFullScreenComponent,
  HeaderComponent,
  SidebarComponent,
  ...SETTINGDRAWER,
  LayoutThemeBtnComponent,
];

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
];

// passport
import { LayoutPassportComponent } from './passport/passport.component';
import { PageBarComponent } from './page-bar/page-bar.component';
const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [NgAlainSharedModule],
  entryComponents: COMPONENTS,
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT, PageBarComponent],
  exports: [...COMPONENTS, ...PASSPORT, PageBarComponent],
})
export class LayoutModule { }
