/* eslint-disable @typescript-eslint/ban-types */
import { ABP, AbstractNavTreeService } from '@abp/ng.core';
import { Injector, inject, runInInjectionContext } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  SignalStoreFeature,
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { filter, mergeMap, pipe, tap } from 'rxjs';
import { RxMethod } from './types';

export class RoutesService extends AbstractNavTreeService<ABP.Route> {}

export type Routes = {
  IsMatch: boolean;
};

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getRoutesKeys(options: { collection?: string }) {
  const routesKey = options.collection
    ? `${options.collection}Routes`
    : 'routes';

  const getRoutesServiceKey = options.collection
    ? `get${capitalize(options.collection)}RoutesService`
    : 'getRoutesService';
  const addRoutesKey = options.collection
    ? `add${capitalize(options.collection)}Routes`
    : 'addRoutes';
  const hookRouterKey = options.collection
    ? `hook${capitalize(options.collection)}Router`
    : 'hookRouter';

  return { routesKey, getRoutesServiceKey, addRoutesKey, hookRouterKey };
}

export type NamedRoutesState<Collection extends string> = {
  [K in Collection as `${K}Routes`]: Routes;
};

export type NamedRoutesMethods<Collection extends string> = {
  [K in Collection as `get${Capitalize<K>}RoutesService`]: () => RoutesService;
} & {
  [K in Collection as `add${Capitalize<K>}Routes`]: (
    items: ABP.Route[]
  ) => ABP.Route[];
} & {
  [K in Collection as `hook${Capitalize<K>}Router`]: RxMethod<ActivatedRoute>;
};

export type RoutesState = {
  routes: Routes;
};

export type RoutesMethods = {
  getRoutesService: () => RoutesService;
  addRoutes: (items: ABP.Route[]) => ABP.Route[];
  hookRouter: RxMethod<ActivatedRoute>;
};

export function withRoutes<Collection extends string>(options: {
  collection: Collection;
}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: NamedRoutesState<Collection>;
    signals: {};
    methods: NamedRoutesMethods<Collection>;
  }
>;
export function withRoutes(options: {}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: RoutesState;
    signals: {};
    methods: RoutesMethods;
  }
>;
export function withRoutes<Collection extends string>(options: {
  collection?: Collection;
}) {
  const { routesKey, addRoutesKey, getRoutesServiceKey, hookRouterKey } =
    getRoutesKeys(options);
  return signalStoreFeature(
    withState({
      [routesKey]: {
        IsMatch: false,
      },
    }),
    withMethods((store, injector = inject(Injector)) => {
      const routesService = new RoutesService(injector);
      return {
        [getRoutesServiceKey]: () => routesService,
        [addRoutesKey]: (items: ABP.Route[]) => {
          return routesService.add(items);
        },
        [hookRouterKey]: rxMethod<ActivatedRoute>(
          pipe(
            mergeMap((activatedRoute) => {
              return runInInjectionContext(injector, () => {
                const router = injector.get(Router);
                return router.events.pipe(
                  takeUntilDestroyed(),
                  filter((x) => x instanceof NavigationEnd),
                  tap(() => {
                    const isMatch = routesService?.flat.some((r) => {
                      return router?.isActive(
                        router.createUrlTree([r.path], {
                          relativeTo: activatedRoute,
                        }),
                        {
                          paths: 'subset',
                          queryParams: 'subset',
                          fragment: 'ignored',
                          matrixParams: 'ignored',
                        }
                      );
                    });
                    patchState(store, { [routesKey]: { IsMatch: isMatch } });
                  })
                );
              });
            })
          )
        ),
      };
    })
  );
}
