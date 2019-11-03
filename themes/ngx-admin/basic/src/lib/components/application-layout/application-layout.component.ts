import { Component } from '@angular/core';

import { MENU_ITEMS } from './application-layout-menu';
import { eLayoutType, ConfigState, ABP, LocalizationPipe } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbMenuItem, NbIconLibraries } from '@nebular/theme';

@Component({
  styleUrls: ['application-layout.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ApplicationLayoutComponent {
  static type = eLayoutType.application;
  @Select(ConfigState.getOne('routes'))
  routes$: Observable<ABP.FullRoute[]>;
  menu = MENU_ITEMS;
  constructor(
    private localizationPipe: LocalizationPipe,
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack('fa', { packClass: 'fa' });
    this.routes$.pipe(map(routes => getVisibleRoutes(routes))).subscribe(routes => {
      let result: NbMenuItem[] = [];
      routes.forEach(first => {
        let group: NbMenuItem = {
          title: this.localizationPipe.transform(first.name),
          group: true
        };
        result.push(group);
        if (!first.children) return;

        first.children.forEach(second => {
          if (!second.children || second.children.length === 0) {//left
            let left = this.createNbMenuItem(second);
            result.push(left);
            return;
          }
          if (second.children.length != 0) {//non left
            let node = this.createNbMenuItem(second);
            node.children = [];
            result.push(node);
            second.children.forEach(third => {
              let left = this.createNbMenuItem(third);
              node.children.push(left);
            })
          }
        })


      });
      //this.menuService.clear();
      //this.menuService.add(result);

      this.menu = result;
    });

  }
  createNbMenuItem(router: ABP.FullRoute) {
    let result: NbMenuItem = {
      title: this.localizationPipe.transform(router.name),
      link: router.url
    };
    if (!!router.iconClass) {
      let params = router.iconClass.split(' ');
      if (params.length === 1) {
        result.icon = router.iconClass
        return result;
      }
      let pack = params[0];
      let iconName = params[1];
      result.icon = {
        icon: iconName,
        pack: pack
      }
    }
    return result;
  }
}
function getVisibleRoutes(routes: ABP.FullRoute[]) {
  return routes.reduce((acc, val) => {
    if (val.invisible) return acc;

    if (val.children && val.children.length) {
      val.children = getVisibleRoutes(val.children);
    }

    return [...acc, val];
  }, []);
}

