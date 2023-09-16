import { ABP } from '@abp/ng.core';
import { TwoFactorComponent } from './two-factor.component';
import { eTwoFactorNames, eTwoFactorPolicyNames } from './two-factor.model';

export const TwoFactorTab: ABP.Tab = {
  name: eTwoFactorNames.TwoFactor,
  order: 3,
  requiredPolicy: eTwoFactorPolicyNames.TwoFactor,
  component: TwoFactorComponent,
};
