import { mapEnumToOptions } from '@abp/ng.core';

export enum eIdentityTwoFactorBehaviour {
  Optional = 0,
  Disabled = 1,
  Forced = 2,
}

export const identityTwoFactorBehaviourOptions = mapEnumToOptions(
  eIdentityTwoFactorBehaviour
);
export const enum eDemoNames {
  Demo = 'Demo.DemoComponent',
}
