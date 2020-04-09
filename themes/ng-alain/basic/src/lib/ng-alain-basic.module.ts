import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { Store } from '@ngxs/store'
import { LayoutDefaultComponent } from './layout/default/default.component';
import { LayoutPassportComponent } from './layout/passport/passport.component';
import { LayoutFullScreenComponent } from './layout/fullscreen/fullscreen.component';

@NgModule({
  imports: [
    CoreModule,
    ThemeBasicModule,
    NgAlainSharedModule,
    LayoutModule
  ],
  exports: [
    ThemeBasicModule,
    NgAlainSharedModule,
    LayoutModule
  ]
})
export class NgAlainBasicModule {
  constructor(private store: Store) {
    this.store.dispatch(
      new AddReplaceableComponent({
        component: LayoutDefaultComponent,
        key: 'Theme.ApplicationLayoutComponent',
      })
    );
    this.store.dispatch(
      new AddReplaceableComponent({
        component: LayoutPassportComponent,
        key: 'Theme.AccountLayoutComponent',
      })
    );
    this.store.dispatch(
      new AddReplaceableComponent({
        component: LayoutFullScreenComponent,
        key: 'Theme.EmptyLayoutComponent',
      })
    );
  }
}
