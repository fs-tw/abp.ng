import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreadcrumbComponent as AbpBreadcrumbComponent } from '@abp/ng.theme.shared';
import { Router } from '@angular/router';
import { RouterEvents, RoutesService, SubscriptionService } from '@abp/ng.core';

@Component({
  selector: 'breadcrumb',
  template: `
    <page-header title="" [breadcrumb]="breadcrumb"></page-header>
    <ng-template #breadcrumb>
      <nz-breadcrumb *ngIf="segments.length > 0">
        <nz-breadcrumb-item>
          <a routerLink="/"><i class="fa fa-home"></i> </a>
        </nz-breadcrumb-item>
        <nz-breadcrumb-item *ngFor="let i of segments">
          {{ i.name | abpLocalization }}
        </nz-breadcrumb-item>
      </nz-breadcrumb>
    </ng-template>
  `,
  styles: [],
})
export class BreadcrumbComponent
  extends AbpBreadcrumbComponent
  implements OnInit {
  constructor(
    public readonly _cdRef: ChangeDetectorRef,
    private _router: Router,
    private _routes: RoutesService,
    private _subscription: SubscriptionService,
    private _routerEvents: RouterEvents
  ) {
    super(_cdRef, _router, _routes, _subscription, _routerEvents);
  }
}
