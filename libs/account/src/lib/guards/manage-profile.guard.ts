import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigStateService } from '@abp/ng.core';
import { EnvironmentService } from '@abp/ng.core';

@Injectable()
export class ManageProfileGuard implements CanActivate {
  constructor(private environmentService: EnvironmentService) {}

  canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    const env = this.environmentService.getEnvironment();
    if (env.oAuthConfig.responseType === 'code') {
      window.location.href = `${env.oAuthConfig.issuer}/Account/Manage?returnUrl=${window.location.href}`;
      return false;
    } else {
      return true;
    }
  }
}
