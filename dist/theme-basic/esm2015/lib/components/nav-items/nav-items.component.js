import { NavItemsService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
export class NavItemsComponent {
    constructor(navItems) {
        this.navItems = navItems;
        this.trackByFn = (_, element) => element.id;
    }
}
NavItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-nav-items',
                template: "<ul class=\"navbar-nav\">\r\n  <ng-container *ngFor=\"let item of navItems.items$ | async; trackBy: trackByFn\">\r\n    <li\r\n      class=\"nav-item d-flex align-items-center\"\r\n      *ngIf=\"item.visible()\"\r\n      [abpPermission]=\"item.requiredPolicy\"\r\n    >\r\n      <ng-container\r\n        *ngIf=\"item.component; else htmlTemplate\"\r\n        [ngComponentOutlet]=\"item.component\"\r\n      ></ng-container>\r\n\r\n      <ng-template #htmlTemplate>\r\n        <div [innerHTML]=\"item.html\" (click)=\"item.action ? item.action() : null\"></div>\r\n      </ng-template>\r\n    </li>\r\n  </ng-container>\r\n</ul>\r\n"
            },] }
];
NavItemsComponent.ctorParameters = () => [
    { type: NavItemsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9uYXYtaXRlbXMvbmF2LWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFNbEUsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUE0QixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUZyRCxjQUFTLEdBQTZCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUVULENBQUM7OztZQVAxRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1vQkFBdUM7YUFDeEM7OztZQU5pQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2SXRlbSwgTmF2SXRlbXNTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLW5hdi1pdGVtcycsXHJcbiAgdGVtcGxhdGVVcmw6ICduYXYtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2SXRlbXNDb21wb25lbnQge1xyXG4gIHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPE5hdkl0ZW0+ID0gKF8sIGVsZW1lbnQpID0+IGVsZW1lbnQuaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBuYXZJdGVtczogTmF2SXRlbXNTZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==