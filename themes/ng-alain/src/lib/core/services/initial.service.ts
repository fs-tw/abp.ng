import { AddReplaceableComponent } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { eThemeCoreComponents } from '@fs/theme.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent, PageBarComponent } from '@fs/ng-alain/basic';

@Injectable({ providedIn: 'root' })
export class InitialService {
  constructor(private store: Store) {
    this.store.dispatch([
      new AddReplaceableComponent({
        key: eThemeBasicComponents.ApplicationLayout,
        component: LayoutDefaultComponent,
      }),
      new AddReplaceableComponent({
        key: eThemeBasicComponents.AccountLayout,
        component: LayoutPassportComponent,
      }),
      new AddReplaceableComponent({
        key: eThemeBasicComponents.EmptyLayout,
        component: LayoutFullScreenComponent,
      }),
      new AddReplaceableComponent({
        key: eThemeCoreComponents.PageBar,
        component: PageBarComponent
      })
    ]);
  }
}
