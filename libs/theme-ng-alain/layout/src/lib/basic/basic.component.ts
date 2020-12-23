import { Component, TrackByFunction } from '@angular/core';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { ABP } from '@abp/ng.core'
import { NavItemsService, NavItem as AbpNavItem } from '@abp/ng.theme.shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'layout-basic',
  templateUrl: 'basic.component.html',
})
export class LayoutBasicComponent {
  trackByFn: TrackByFunction<NavItem> = (_, element) => element?.id;
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
  };

  navItems$ = this.navItems.items$.pipe(map(x => x.map(y => y as NavItem)));


  constructor(public readonly navItems: NavItemsService) {
    navItems.items$.subscribe(x => {
      console.log(x);
    })

  }

}
export interface NavItem extends AbpNavItem {
  data: ABP.Dictionary<string>
}