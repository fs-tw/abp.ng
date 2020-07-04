import { Injectable } from '@angular/core';
import { Store, Actions, ofActionDispatched } from '@ngxs/store';
import { ThemeCoreService } from './theme-core.service'
import { UpdateProfile, UpdateProcessor } from '../actions/router.actions'
import { RouterDataResolved } from '@ngxs/router-plugin'

@Injectable({ providedIn: 'root' })
export class InitialService {
  constructor(
    private store: Store,
    private actions$: Actions,
    private themeCoreService: ThemeCoreService
  ) {
    this.actions$
      .pipe(ofActionDispatched(RouterDataResolved))
      .subscribe(r => {
        let processor = this.themeCoreService.createProcessor(r.event.state)
        this.store.dispatch([
          new UpdateProcessor(processor),
          new UpdateProfile(processor.currentProfileOfRoute)
        ]);
      });
  }
}
