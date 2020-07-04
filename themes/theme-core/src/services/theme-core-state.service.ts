import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
import { ThemeCoreState } from '../states/theme-core.state';

@Injectable({
  providedIn: 'root',
})
export class ThemeCoreStateService {
  constructor(private store: Store) {}

  getSettingsByProviderName() {
    return this.store.selectSnapshot(ThemeCoreState.getSettingsByProviderName);
  }
}