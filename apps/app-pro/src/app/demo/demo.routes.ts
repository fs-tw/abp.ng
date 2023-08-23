import { Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { provideDemo } from './demo.provide';
import { importProvidersFrom, inject } from '@angular/core';
import { ExtensionsService } from '@abp/ng.theme.shared/extensions';
import { InitialRoles } from './demo.default';
import { DemoTabsService } from './demo-tabs.service';
import {
  eSetPasswordNames,
  eSetPasswordPolicyNames,
} from './set-password/set-password.model';
import { SetPasswordComponent } from './set-password/set-password.component';
import { provideSetPassword } from './set-password/set-password.provide';
import { provideLock } from './lock/lock.provide';
import { eLockNames, eLockPolicyNames } from './lock/lock.model';
import { LockComponent } from './lock/lock.component';
import { provideTwoFactor } from './two-factor/two-factor.provide';
import {
  eTwoFactorNames,
  eTwoFactorPolicyNames,
} from './two-factor/two-factor.model';
import { TwoFactorComponent } from './two-factor/two-factor.component';
import { DemoStateService } from './demo-state.service';

export const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    providers: [
      provideDemo(),
      provideSetPassword(),
      provideLock(),
      provideTwoFactor()
    ],
    resolve: {
      tabs: () => {
        const stateService = inject(DemoStateService);
        const tabsService = inject(DemoTabsService);
        tabsService.add([
          {
            name: eSetPasswordNames.SetPassword,
            order: 1,
            requiredPolicy: eSetPasswordPolicyNames.SetPassword,
            component: SetPasswordComponent,
          },
          {
            name: eLockNames.Lock,
            order: 1,
            requiredPolicy: eLockPolicyNames.Lock,
            component: LockComponent,
          },
          {
            name: eTwoFactorNames.TwoFactor,
            order: 1,
            requiredPolicy: eTwoFactorPolicyNames.TwoFactor,
            component: TwoFactorComponent,
          },
        ]);
        return tabsService.tree;
      },
      extensions: () => {
        const extensions = inject(ExtensionsService);

        InitialRoles(extensions);

        return extensions;
      },
    },
  },
];
