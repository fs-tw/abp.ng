import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Router } from '../models/router';
import { Injectable } from '@angular/core';
import { UpdateProfile, UpdateProcessor } from '../actions/router.actions'
import * as _ from 'lodash';
@State<Router.State>({
  name: 'RouterState',
  defaults: {
    profile: {

    }
  } as Router.State,
})
@Injectable()
export class RouterState {
  @Selector()
  static getProfile({ profile }: Router.State): Router.Profile {
    return profile;
  }
  @Selector()
  static getProcessor({ processor }: Router.State): Router.Processor {
    return processor;
  }

  constructor() { }

  @Action(UpdateProfile)
  updateProfile({ patchState }: StateContext<Router.State>, { payload }: UpdateProfile) {

    let profile = payload;
    return patchState({
      profile
    });
  }
  @Action(UpdateProcessor)
  UpdateProcessor({ patchState }: StateContext<Router.State>, { payload }: UpdateProcessor) {
    let processor = payload;
    return patchState({
      processor
    });
  }

}
