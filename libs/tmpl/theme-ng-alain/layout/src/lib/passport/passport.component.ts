import { Component } from '@angular/core';
import { eLayoutType, ConfigState } from '@abp/ng.core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less'],
})
export class LayoutPassportComponent {

  @Select(ConfigState.getSetting('FS.Abp.Themes.Core.LoginPageOptions.Footer')) footer$: Observable<string>;
  @Select(ConfigState.getSetting('FS.Abp.Themes.Core.LoginPageOptions.Title')) title$: Observable<string>;
  @Select(ConfigState.getSetting('FS.Abp.Themes.Core.LoginPageOptions.Description')) description$: Observable<string>;

  static type = eLayoutType.account;
  links = [];
}
