import { __decorate, __metadata, __rest } from "tslib";
import { getRoutePath, RoutesService, takeUntilDestroy } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(cdRef, router, routes) {
        this.cdRef = cdRef;
        this.router = router;
        this.routes = routes;
        this.segments = [];
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.router.events
            .pipe(takeUntilDestroy(this), filter(event => event instanceof NavigationEnd), 
        // tslint:disable-next-line:deprecation
        startWith(null), map(() => this.routes.search({ path: getRoutePath(this.router) })))
            .subscribe(route => {
            this.segments = [];
            if (route) {
                let node = { parent: route };
                while (node.parent) {
                    node = node.parent;
                    const { parent, children, isLeaf } = node, segment = __rest(node, ["parent", "children", "isLeaf"]);
                    if (!isAdministration(segment))
                        this.segments.unshift(segment);
                }
                this.cdRef.detectChanges();
            }
        });
    }
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'abp-breadcrumb',
        template: "<ol class=\"breadcrumb\" *ngIf=\"segments.length\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment.name | abpLocalization }}\r\n  </li>\r\n</ol>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        Router,
        RoutesService])
], BreadcrumbComponent);
export { BreadcrumbComponent };
function isAdministration(route) {
    return route.name === "AbpUiNavigation::Menu:Administration" /* Administration */;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBTyxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFZLE1BQU0sY0FBYyxDQUFDO0FBQzVGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUXhELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRzlCLFlBQ2tCLEtBQXdCLEVBQ2hDLE1BQWMsRUFDZCxNQUFxQjtRQUZiLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBTC9CLGFBQVEsR0FBeUIsRUFBRSxDQUFDO0lBTWpDLENBQUM7SUFFSixXQUFXLEtBQUksQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUNILGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN0QixNQUFNLENBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQztRQUM5RCx1Q0FBdUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNuRTthQUNBLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXlCLENBQUM7Z0JBRXBELE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ25CLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sS0FBaUIsSUFBSSxFQUFuQix3REFBbUIsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzt3QkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUE7QUFuQ1ksbUJBQW1CO0lBTC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsdVpBQTBDO1FBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBS3lCLGlCQUFpQjtRQUN4QixNQUFNO1FBQ04sYUFBYTtHQU5wQixtQkFBbUIsQ0FtQy9CO1NBbkNZLG1CQUFtQjtBQXFDaEMsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFnQjtJQUN4QyxPQUFPLEtBQUssQ0FBQyxJQUFJLGdFQUEwQyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIGdldFJvdXRlUGF0aCwgUm91dGVzU2VydmljZSwgdGFrZVVudGlsRGVzdHJveSwgVHJlZU5vZGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBlVGhlbWVTaGFyZWRSb3V0ZU5hbWVzIH0gZnJvbSAnLi4vLi4vZW51bXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBzZWdtZW50czogUGFydGlhbDxBQlAuUm91dGU+W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgcm91dGVzOiBSb3V0ZXNTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICAgIGZpbHRlcjxOYXZpZ2F0aW9uRW5kPihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxyXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5yb3V0ZXMuc2VhcmNoKHsgcGF0aDogZ2V0Um91dGVQYXRoKHRoaXMucm91dGVyKSB9KSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShyb3V0ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgbGV0IG5vZGUgPSB7IHBhcmVudDogcm91dGUgfSBhcyBUcmVlTm9kZTxBQlAuUm91dGU+O1xyXG5cclxuICAgICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGFyZW50LCBjaGlsZHJlbiwgaXNMZWFmLCAuLi5zZWdtZW50IH0gPSBub2RlO1xyXG4gICAgICAgICAgICBpZiAoIWlzQWRtaW5pc3RyYXRpb24oc2VnbWVudCkpIHRoaXMuc2VnbWVudHMudW5zaGlmdChzZWdtZW50KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBZG1pbmlzdHJhdGlvbihyb3V0ZTogQUJQLlJvdXRlKSB7XHJcbiAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IGVUaGVtZVNoYXJlZFJvdXRlTmFtZXMuQWRtaW5pc3RyYXRpb247XHJcbn1cclxuIl19