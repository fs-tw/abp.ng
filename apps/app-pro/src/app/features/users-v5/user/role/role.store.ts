import { signalStore, withHooks } from '@ngrx/signals';
import { withRole } from './role.feature';

export const RoleStore = signalStore(
  withRole(),
  withHooks({
    onInit() {
      console.log('RoleStore initialized');
    },
  })
);
