import {
  RoutesService,
  LocalizationPipe,
  EnvironmentService,
  TreeNode,
  ABP,
} from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { MenuService, Menu } from '@delon/theme';

export const LAYOUT_INIT_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: init,
    deps: [Injector],
    multi: true,
  },
];

export function init(injector: Injector) {
  return () => {
    listenRouter(injector);
  };
}

export function listenRouter(injector: Injector) {
  let transToMenu = function (route: TreeNode<ABP.Route>): Menu {
    let menu: Menu = {
      id: route.name,
      text: localizationPipe.transform(route.name),
      icon: route.iconClass,
      children: route.children
        .filter((r) => !routesService.hide(r))
        .map((c) => transToMenu(c)),
      link: route.path,
    };

    return menu;
  };

  const router = injector.get(Router);
  const routesService = injector.get(RoutesService);
  const menuService = injector.get(MenuService);
  const localizationPipe = injector.get(LocalizationPipe);
  const environmentService = injector.get(EnvironmentService);

  routesService.tree$
    .pipe(
      tap((roots) => {
        menuService.clear();

        let menus = roots
          .filter((r) => !routesService.hide(r))
          .map(transToMenu);

        let root: Menu = {
          text: environmentService.getEnvironment().application?.name,
          children: menus,
        };

        menuService.add([root]);
      })
    )
    .subscribe();

  router.events
    .pipe(filter((event): event is ResolveEnd => event instanceof ResolveEnd))
    .subscribe((event) => {});
}
