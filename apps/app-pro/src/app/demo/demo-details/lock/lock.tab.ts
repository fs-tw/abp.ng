import { ABP } from '@abp/ng.core';
import { LockComponent } from './lock.component';
import { eLockPolicyNames, eLockNames } from './lock.model';

export const LockTab: ABP.Tab = {
  name: eLockNames.Lock,
  order: 1,
  requiredPolicy: eLockPolicyNames.Lock,
  component: LockComponent,
};
