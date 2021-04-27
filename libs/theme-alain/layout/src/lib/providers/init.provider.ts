import {
  RoutesService,
  LocalizationPipe,
  PermissionService,
} from '@abp/ng.core';
import { APP_INITIALIZER, inject, Injector } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
//import { LayoutStateService } from '../services/layout-state.service';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
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
  const router = injector.get(Router);
  //const layoutStateService = injector.get(LayoutStateService);
  const routesService = injector.get(RoutesService);
  const menuService = injector.get(MenuService);
  const localizationPipe=injector.get(LocalizationPipe);



  routesService.visible$
    .pipe(
      map((x) => {
        if (x.length === 0) return[];
        return x
          .filter(
            (y) =>
              y.name === eThemeSharedRouteNames.Administration &&
              !routesService.hide(y)
          )
          .map((r) => r.children)
          .reduce((a, b) => a.concat(b))
          .map((r) => {
            let node: Menu = {
              id: r.name,
              text: localizationPipe.transform(r.name),
              icon: r.iconClass,
              children: [],
              link: r.path,
            };
            node.children = r.children
              .filter((c) => !routesService.hide(c))
              .map((c) => {
                let children: Menu = {
                  text: localizationPipe.transform(c.name),
                  link: c.path,
                  icon: c.iconClass,
                  id: c.name,
                };
                return children;
              });            

            return node;
          });
      })
    )
    .subscribe(menus=>{
      menuService.clear();
      console.log(menus);
      let root:Menu={
        text:'Main Menu',
        children:menus
      }
      menuService.add([root]);
    });

  routesService.visible$.subscribe((r) => {});

  router.events
    .pipe(filter((event): event is ResolveEnd => event instanceof ResolveEnd))
    .subscribe((event) => {
      //const currentUrl = decodeURI(event.state.url.split('?')[0]);
      //layoutStateService.setStore({ currentUrl });
      //layoutStateService.fetchPageNavs(event.state);
    });
}
