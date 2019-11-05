import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { GetAppConfiguration, ConfigState, ApplicationConfiguration } from '@abp/ng.core';
import { Observable } from 'rxjs';

@Component({
    selector: 'header-user',
    template: `
    <div
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{ (currentUser$ | async)?.userName }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <div nz-menu-item routerLink="/account/manage-profile">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'AbpAccount::ManageYourProfile' | abpLocalization }}
        </div>
        <li nz-menu-divider></li>
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'AbpUi::Logout' | abpLocalization }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserComponent {
    @Select(ConfigState.getOne('currentUser'))
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    constructor(
        public settings: SettingsService,
        private router: Router,
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        private store: Store,
        private oauthService: OAuthService
    ) { }

    //logout() {
    //  this.tokenService.clear();
    //  this.router.navigateByUrl(this.tokenService.login_url!);
    //  }
    logout() {
        this.oauthService.logOut();
        this.store.dispatch(
            new Navigate(['/'], null, {
                state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url }
            })
        );
        this.store.dispatch(new GetAppConfiguration());
    }
}
