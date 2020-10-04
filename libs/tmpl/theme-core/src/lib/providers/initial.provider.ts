import { APP_INITIALIZER } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { UpdateProfile, UpdateProcessor } from '../actions/router.actions';
import { RouterDataResolved } from '@ngxs/router-plugin';
import { RoutesService } from '@abp/ng.core';
import { Router as FSRouter } from '../models/router';

export const INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Store, Actions, RoutesService],
    multi: true,
  },
];

export function configureInitial(
  store: Store,
  actions$: Actions,
  routesService: RoutesService
) {
  return () => {
    initial(store, actions$, routesService);
  };
}

function initial(
  store: Store,
  actions$: Actions,
  routesService: RoutesService
) {
  actions$.pipe(ofActionDispatched(RouterDataResolved)).subscribe((r) => {
    let routes = routesService.visible;
    let processor = new FSRouter.Processor(routes, r.event.state);
    store.dispatch([
      new UpdateProcessor(processor),
      new UpdateProfile(processor.currentProfileOfRoute),
    ]);
  });
}
