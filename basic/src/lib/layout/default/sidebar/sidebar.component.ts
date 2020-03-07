import { Component, ChangeDetectionStrategy, TrackByFunction } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ABP, ConfigState, LocalizationPipe, ConfigStateService } from '@abp/ng.core';
import { map, tap } from 'rxjs/operators';
import { Menu } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Select(ConfigState.getOne('auth'))
  auth$: Observable<ABP.FullRoute[]>;

  constructor(
    public configStateService: ConfigStateService,
    public settings: SettingsService,
    private menuService: MenuService,
    private localizationPipe: LocalizationPipe
  ) {

    this.auth$.pipe(tap(x => {
      var routes = this.configStateService.getOne('routes');
      this.setMenu(routes);
    })).subscribe();


  }
  setMenu(routes: any) {
    let result: Menu[] = [];
    let condition = (x: ABP.FullRoute) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
    routes.filter(condition).forEach(first => {
      let group: Menu = {
        text: this.localizationPipe.transform(first.name),
        group: true,
        hideInBreadcrumb: true,
        children: []
      };
      result.push(group);
      first.children.filter(condition).forEach(second => {
        if (second.children.length === 0) {
          let left: Menu = {
            text: this.localizationPipe.transform(second.name),
            link: second.url,
            icon: second.iconClass
          };
          if (left.link.split('/').length > 2)
            group.children.push(left);
        }
        if (second.children.length != 0) {
          let node: Menu = {
            text: this.localizationPipe.transform(second.name),
            icon: second.iconClass,
            children: []
          };
          group.children.push(node);
          second.children.filter(condition).forEach(third => {
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

  }

  isGrantedPolicy(requiredPolicy: string) {
    if (!!requiredPolicy) {
      return this.configStateService.getGrantedPolicy(requiredPolicy);
    }
    return true;
  }

}

