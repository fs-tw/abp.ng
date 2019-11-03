import { Component, ChangeDetectionStrategy, TrackByFunction } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ABP, ConfigState, LocalizationPipe } from '@abp/ng.core';
import { map } from 'rxjs/operators';
import { Menu } from '@delon/theme';
@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Select(ConfigState.getOne('routes'))
  routes$: Observable<ABP.FullRoute[]>;
  constructor(
    public settings: SettingsService,
    private menuService: MenuService,
    private localizationPipe: LocalizationPipe
  ) {
    this.routes$.pipe(map(routes => getVisibleRoutes(routes))).subscribe(routes => {
      let result: Menu[] = [];
      routes.forEach(first => {
        let group: Menu = {
          text: this.localizationPipe.transform(first.name),
          group: true,
          hideInBreadcrumb: true,
          children: []
        };
        result.push(group);
        first.children.forEach(second => {
          if (second.children.length===0) {
            let left: Menu = {
              text: this.localizationPipe.transform(second.name),
              link: second.url,
              icon: second.iconClass
            };
            group.children.push(left);
          }
          if (second.children.length!=0) {
            let node: Menu = {
              text: this.localizationPipe.transform(second.name),
              icon: second.iconClass,
              children: []
            };
            group.children.push(node);
            second.children.forEach(third => {
              let left: Menu = {
                text: this.localizationPipe.transform(third.name),
                link: third.url,
                icon: third.iconClass
              };
              node.children.push(left);
            })
          }
        })


      });
      this.menuService.clear();
      this.menuService.add(result);


    });
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
