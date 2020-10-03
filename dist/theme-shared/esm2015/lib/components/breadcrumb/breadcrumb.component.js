import { __rest } from "tslib";
import { getRoutePath, RoutesService, SubscriptionService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
export class BreadcrumbComponent {
    constructor(cdRef, router, routes, subscription) {
        this.cdRef = cdRef;
        this.router = router;
        this.routes = routes;
        this.subscription = subscription;
        this.segments = [];
    }
    ngOnInit() {
        this.subscription.addOne(this.router.events.pipe(filter(event => event instanceof NavigationEnd), 
        // tslint:disable-next-line:deprecation
        startWith(null), map(() => this.routes.search({ path: getRoutePath(this.router) }))), route => {
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
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-breadcrumb',
                template: "<ol class=\"breadcrumb\" *ngIf=\"segments.length\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment.name | abpLocalization }}\r\n  </li>\r\n</ol>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [SubscriptionService]
            },] }
];
BreadcrumbComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Router },
    { type: RoutesService },
    { type: SubscriptionService }
];
function isAdministration(route) {
    return route.name === "AbpUiNavigation::Menu:Administration" /* Administration */;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBTyxZQUFZLEVBQUUsYUFBYSxFQUFZLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVN4RCxNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQ2tCLEtBQXdCLEVBQ2hDLE1BQWMsRUFDZCxNQUFxQixFQUNyQixZQUFpQztRQUh6QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFOM0MsYUFBUSxHQUF5QixFQUFFLENBQUM7SUFPakMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNyQixNQUFNLENBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQztRQUM5RCx1Q0FBdUM7UUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNuRSxFQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUF5QixDQUFDO2dCQUVwRCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNuQixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEtBQWlCLElBQUksRUFBaEIsT0FBTyxVQUFLLElBQUksRUFBL0MsZ0NBQXdDLENBQU8sQ0FBQztvQkFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzt3QkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix1WkFBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7O1lBVmlDLGlCQUFpQjtZQUMzQixNQUFNO1lBRkYsYUFBYTtZQUFZLG1CQUFtQjs7QUFnRHhFLFNBQVMsZ0JBQWdCLENBQUMsS0FBZ0I7SUFDeEMsT0FBTyxLQUFLLENBQUMsSUFBSSxnRUFBMEMsQ0FBQztBQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBnZXRSb3V0ZVBhdGgsIFJvdXRlc1NlcnZpY2UsIFRyZWVOb2RlLCBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBlVGhlbWVTaGFyZWRSb3V0ZU5hbWVzIH0gZnJvbSAnLi4vLi4vZW51bXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2VnbWVudHM6IFBhcnRpYWw8QUJQLlJvdXRlPltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlczogUm91dGVzU2VydmljZSxcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUoXHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIGZpbHRlcjxOYXZpZ2F0aW9uRW5kPihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxyXG4gICAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5yb3V0ZXMuc2VhcmNoKHsgcGF0aDogZ2V0Um91dGVQYXRoKHRoaXMucm91dGVyKSB9KSksXHJcbiAgICAgICksXHJcbiAgICAgIHJvdXRlID0+IHtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICBsZXQgbm9kZSA9IHsgcGFyZW50OiByb3V0ZSB9IGFzIFRyZWVOb2RlPEFCUC5Sb3V0ZT47XHJcblxyXG4gICAgICAgICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXJlbnQsIGNoaWxkcmVuLCBpc0xlYWYsIC4uLnNlZ21lbnQgfSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGlmICghaXNBZG1pbmlzdHJhdGlvbihzZWdtZW50KSkgdGhpcy5zZWdtZW50cy51bnNoaWZ0KHNlZ21lbnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FkbWluaXN0cmF0aW9uKHJvdXRlOiBBQlAuUm91dGUpIHtcclxuICByZXR1cm4gcm91dGUubmFtZSA9PT0gZVRoZW1lU2hhcmVkUm91dGVOYW1lcy5BZG1pbmlzdHJhdGlvbjtcclxufVxyXG4iXX0=