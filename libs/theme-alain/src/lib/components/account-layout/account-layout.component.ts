import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';

@Component({
  selector: 'abp-layout-account',
  template: `
    <layout-passport></layout-passport>
    <!-- <abp-confirmation></abp-confirmation> -->
  `,
})
export class AccountLayoutComponent {
  // required for dynamic component
  static type = eLayoutType.account;
}
