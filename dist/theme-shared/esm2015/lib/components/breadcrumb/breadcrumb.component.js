import { __decorate, __metadata, __rest } from "tslib";
import { getRoutePath, RoutesService, SubscriptionService } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
let BreadcrumbComponent = class BreadcrumbComponent {
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
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'abp-breadcrumb',
        template: "<ol class=\"breadcrumb\" *ngIf=\"segments.length\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment.name | abpLocalization }}\r\n  </li>\r\n</ol>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [SubscriptionService]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        Router,
        RoutesService,
        SubscriptionService])
], BreadcrumbComponent);
export { BreadcrumbComponent };
function isAdministration(route) {
    return route.name === "AbpUiNavigation::Menu:Administration" /* Administration */;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBTyxZQUFZLEVBQUUsYUFBYSxFQUFZLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVN4RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUc5QixZQUNrQixLQUF3QixFQUNoQyxNQUFjLEVBQ2QsTUFBcUIsRUFDckIsWUFBaUM7UUFIekIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBTjNDLGFBQVEsR0FBeUIsRUFBRSxDQUFDO0lBT2pDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTSxDQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUM7UUFDOUQsdUNBQXVDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkUsRUFDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBeUIsQ0FBQztnQkFFcEQsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDbkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFpQixJQUFJLEVBQW5CLHdEQUFtQixDQUFDO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRTtnQkFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWxDWSxtQkFBbUI7SUFOL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQix1WkFBMEM7UUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDakMsQ0FBQztxQ0FLeUIsaUJBQWlCO1FBQ3hCLE1BQU07UUFDTixhQUFhO1FBQ1AsbUJBQW1CO0dBUGhDLG1CQUFtQixDQWtDL0I7U0FsQ1ksbUJBQW1CO0FBb0NoQyxTQUFTLGdCQUFnQixDQUFDLEtBQWdCO0lBQ3hDLE9BQU8sS0FBSyxDQUFDLElBQUksZ0VBQTBDLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCwgZ2V0Um91dGVQYXRoLCBSb3V0ZXNTZXJ2aWNlLCBUcmVlTm9kZSwgU3Vic2NyaXB0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZVRoZW1lU2hhcmVkUm91dGVOYW1lcyB9IGZyb20gJy4uLy4uL2VudW1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWJyZWFkY3J1bWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtTdWJzY3JpcHRpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNlZ21lbnRzOiBQYXJ0aWFsPEFCUC5Sb3V0ZT5bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXM6IFJvdXRlc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKFxyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgICBmaWx0ZXI8TmF2aWdhdGlvbkVuZD4oZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cclxuICAgICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgICAgbWFwKCgpID0+IHRoaXMucm91dGVzLnNlYXJjaCh7IHBhdGg6IGdldFJvdXRlUGF0aCh0aGlzLnJvdXRlcikgfSkpLFxyXG4gICAgICApLFxyXG4gICAgICByb3V0ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgbGV0IG5vZGUgPSB7IHBhcmVudDogcm91dGUgfSBhcyBUcmVlTm9kZTxBQlAuUm91dGU+O1xyXG5cclxuICAgICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGFyZW50LCBjaGlsZHJlbiwgaXNMZWFmLCAuLi5zZWdtZW50IH0gPSBub2RlO1xyXG4gICAgICAgICAgICBpZiAoIWlzQWRtaW5pc3RyYXRpb24oc2VnbWVudCkpIHRoaXMuc2VnbWVudHMudW5zaGlmdChzZWdtZW50KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBZG1pbmlzdHJhdGlvbihyb3V0ZTogQUJQLlJvdXRlKSB7XHJcbiAgcmV0dXJuIHJvdXRlLm5hbWUgPT09IGVUaGVtZVNoYXJlZFJvdXRlTmFtZXMuQWRtaW5pc3RyYXRpb247XHJcbn1cclxuIl19