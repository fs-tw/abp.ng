import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Select } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Select(ConfigState.getSetting('FS.Abp.Themes.Core.WebsiteOptions.Title')) title$;
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private oAuthService: OAuthService) {}
}
