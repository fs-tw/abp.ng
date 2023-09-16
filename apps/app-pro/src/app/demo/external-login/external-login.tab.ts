import { ABP } from '@abp/ng.core';
import { ExternalLoginComponent } from './external-login.component';
import {
  eExternalLoginNames,
  eExternalLoginPolicyNames,
} from './external-login.model';

export const ExternalLoginTab: ABP.Tab = {
  name: eExternalLoginNames.ExternalLogin,
  order: 1,
  requiredPolicy: eExternalLoginPolicyNames.ExternalLogin,
  component: ExternalLoginComponent,
};
