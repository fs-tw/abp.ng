import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  GetSettingsGroups,
  GetAllDefinitions,
} from '../actions/theme-core.actions';
import { Options } from '../models/options';

export const INITIAL_THEME_CORE_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureInitialThemeCore,
    deps: [Store,'THEMECORE_OPTIONS'],
    multi: true,
  },
];

export function configureInitialThemeCore(
  store: Store,
  options: Options
) {
  return () => {
    if(!options.loadCodes) return;
    return store
      .dispatch([new GetSettingsGroups(), new GetAllDefinitions()])
      .toPromise();
  };
}
