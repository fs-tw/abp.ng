import { __decorate, __metadata } from "tslib";
import { NavItemsService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
let NavItemsComponent = class NavItemsComponent {
    constructor(navItems) {
        this.navItems = navItems;
        this.trackByFn = (_, element) => element.id;
    }
};
NavItemsComponent = __decorate([
    Component({
        selector: 'abp-nav-items',
        template: "<ul class=\"navbar-nav\">\r\n  <ng-container *ngFor=\"let item of navItems.items$ | async; trackBy: trackByFn\">\r\n    <li\r\n      class=\"nav-item d-flex align-items-center\"\r\n      *ngIf=\"item.visible()\"\r\n      [abpPermission]=\"item.requiredPolicy\"\r\n    >\r\n      <ng-container\r\n        *ngIf=\"item.component; else htmlTemplate\"\r\n        [ngComponentOutlet]=\"item.component\"\r\n      ></ng-container>\r\n\r\n      <ng-template #htmlTemplate>\r\n        <div [innerHTML]=\"item.html\" (click)=\"item.action ? item.action() : null\"></div>\r\n      </ng-template>\r\n    </li>\r\n  </ng-container>\r\n</ul>\r\n"
    }),
    __metadata("design:paramtypes", [NavItemsService])
], NavItemsComponent);
export { NavItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9uYXYtaXRlbXMvbmF2LWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBTWxFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRzVCLFlBQTRCLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBRnJELGNBQVMsR0FBNkIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBRVQsQ0FBQztDQUMxRCxDQUFBO0FBSlksaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLG1vQkFBdUM7S0FDeEMsQ0FBQztxQ0FJc0MsZUFBZTtHQUgxQyxpQkFBaUIsQ0FJN0I7U0FKWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZJdGVtLCBOYXZJdGVtc1NlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbmF2LWl0ZW1zJyxcclxuICB0ZW1wbGF0ZVVybDogJ25hdi1pdGVtcy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZJdGVtc0NvbXBvbmVudCB7XHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248TmF2SXRlbT4gPSAoXywgZWxlbWVudCkgPT4gZWxlbWVudC5pZDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG5hdkl0ZW1zOiBOYXZJdGVtc1NlcnZpY2UpIHt9XHJcbn1cclxuIl19