import { ABP } from '@abp/ng.core';
import { SetPasswordComponent } from './set-password.component';
import {
  eSetPasswordNames,
  eSetPasswordPolicyNames,
} from './set-password.model';

export const SetPasswordTab: ABP.Tab = {
  name: eSetPasswordNames.SetPassword,
  order: 2,
  requiredPolicy: eSetPasswordPolicyNames.SetPassword,
  component: SetPasswordComponent,
};
