import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService, Menu, MenuService } from '@delon/theme';
import { RoutesService, TreeNode, ABP, ConfigStateService, LocalizationPipe } from '@abp/ng.core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(
    public settings: SettingsService,
    private menuService: MenuService,
    public readonly routes: RoutesService,
    public configStateService: ConfigStateService,
    private localizationPipe: LocalizationPipe
  ) {
    this.routes.visible$.subscribe(x => {
      this.setMenu(x);
    });
  }
  setMenu(routes: TreeNode<ABP.Route>[]) {
    let result: Menu[] = [];
    let condition = (x: ABP.Route) => !!!x.invisible && this.isGrantedPolicy(x.requiredPolicy);
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
            link: second.path,
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
              link: third.path,
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
