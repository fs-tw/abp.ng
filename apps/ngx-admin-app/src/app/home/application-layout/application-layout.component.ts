import { Component } from '@angular/core';

import { MENU_ITEMS } from './application-layout-menu';
import { eLayoutType } from '@abp/ng.core';

@Component({
    styleUrls: ['application-layout.component.scss'],
    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ApplicationLayoutComponent {
    static type = eLayoutType.application;
    menu = MENU_ITEMS;
}
