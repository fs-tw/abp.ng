import { APP_INITIALIZER } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { UpdateProfile, UpdateProcessor } from '../actions/router.actions';
import { RouterDataResolved } from '@ngxs/router-plugin';
import {
  AbstractNavTreeService,
} from '@abp/ng.core';
import { Router as FSRouter } from '../models/router';
import { FS } from '../models/common';
import { WrapRoutesService } from '../services/routes.service';

export const INITIAL_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitial,
    deps: [Store, Actions, WrapRoutesService],
    multi: true,
  },
];

export function configureInitial(
  store: Store,
  actions$: Actions,
  wrapRoutesService: WrapRoutesService
) {
  return () => {
    initial(store, actions$, wrapRoutesService);
  };
}

function initial(
  store: Store,
  actions$: Actions,
  wrapRoutesService: WrapRoutesService
) {
  actions$.pipe(ofActionDispatched(RouterDataResolved)).subscribe((r) => {
    let real = wrapRoutesService.Proxy as AbstractNavTreeService<FS.Route>;
    let routes = real.visible;
    let processor = new FSRouter.Processor(routes, r.event.state);
    store.dispatch([
      new UpdateProcessor(processor),
      new UpdateProfile(processor.currentProfileOfRoute),
    ]);
  });
}
