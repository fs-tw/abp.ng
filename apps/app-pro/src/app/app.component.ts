import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { GdprConfigModule } from '@volo/abp.ng.gdpr/config';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-gdpr-cookie-consent></abp-gdpr-cookie-consent>
  `,
  standalone: true,
  imports: [CoreModule, ThemeSharedModule, GdprConfigModule],
})
export class AppComponent {}
