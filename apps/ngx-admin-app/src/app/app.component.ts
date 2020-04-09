/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '@fs/ngx-admin';
import { Store } from '@ngxs/store'
import { AddReplaceableComponent } from '@abp/ng.core';
import { ApplicationLayoutComponent, AccountLayoutComponent } from '@fs/ngx-admin/basic';
import { EmptyLayoutComponent } from '@abp/ng.theme.basic';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,private store: Store) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.store.dispatch(
      new AddReplaceableComponent({
        component: ApplicationLayoutComponent, 
        key: 'Theme.ApplicationLayoutComponent',
      })
    );
    this.store.dispatch(
      new AddReplaceableComponent({
        component: AccountLayoutComponent,
        key: 'Theme.AccountLayoutComponent',
      })
    );
    this.store.dispatch(
      new AddReplaceableComponent({
        component: EmptyLayoutComponent,
        key: 'Theme.EmptyLayoutComponent',
      })
    );    
  }
}
