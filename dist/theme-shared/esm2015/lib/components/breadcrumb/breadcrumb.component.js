/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';
export class BreadcrumbComponent {
    /**
     * @param {?} router
     * @param {?} store
     */
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.LeptonLayoutState));
        if (this.show && !this.segments.length) {
            /** @type {?} */
            let splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            chunk => chunk));
            /** @type {?} */
            let currentUrl = this.store.selectSnapshot(ConfigState.getRoute(splittedUrl[0]));
            if (!currentUrl) {
                currentUrl = this.store.selectSnapshot(ConfigState.getRoute(null, null, this.router.url));
                splittedUrl = [this.router.url];
                if (!currentUrl) {
                    this.show = false;
                    return;
                }
            }
            this.segments.push(currentUrl.name);
            if (splittedUrl.length > 1) {
                const [, ...arr] = splittedUrl;
                /** @type {?} */
                let childRoute = currentUrl;
                for (let i = 0; i < arr.length; i++) {
                    /** @type {?} */
                    const element = arr[i];
                    if (!childRoute.children || !childRoute.children.length)
                        return;
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    child => child.path === element));
                    this.segments.push(childRoute.name);
                }
            }
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-breadcrumb',
                template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: Router },
    { type: Store }
];
BreadcrumbComponent.propDecorators = {
    segments: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.segments;
    /** @type {?} */
    BreadcrumbComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsV0FBVyxFQUFPLE1BQU0sY0FBYyxDQUFDO0FBTWhELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTTlCLFlBQW9CLE1BQWMsRUFBVSxLQUFZO1FBQXBDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSnhELGFBQVEsR0FBYSxFQUFFLENBQUM7SUFJbUMsQ0FBQzs7OztJQUU1RCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztRQUUxRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ2xDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDOztnQkFFL0QsVUFBVSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDdkQsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckM7WUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNsQixPQUFPO2lCQUNSO2FBQ0Y7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEMsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtzQkFDcEIsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsV0FBVzs7b0JBRTFCLFVBQVUsR0FBa0IsVUFBVTtnQkFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzBCQUM3QixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU07d0JBQUUsT0FBTztvQkFFaEUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztvQkFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFDLENBQUM7b0JBRXZFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckM7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix1WUFBMEM7YUFDM0M7Ozs7WUFQUSxNQUFNO1lBQ04sS0FBSzs7O3VCQVFYLEtBQUs7Ozs7SUFBTix1Q0FDd0I7O0lBRXhCLG1DQUFjOzs7OztJQUVGLHFDQUFzQjs7Ozs7SUFBRSxvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlLCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgc2hvdzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93ID0gISF0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KHN0YXRlID0+IHN0YXRlLkxlcHRvbkxheW91dFN0YXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG93ICYmICF0aGlzLnNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBsZXQgc3BsaXR0ZWRVcmwgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKS5maWx0ZXIoY2h1bmsgPT4gY2h1bmspO1xyXG5cclxuICAgICAgbGV0IGN1cnJlbnRVcmw6IEFCUC5GdWxsUm91dGUgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICAgIENvbmZpZ1N0YXRlLmdldFJvdXRlKHNwbGl0dGVkVXJsWzBdKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudFVybCkge1xyXG4gICAgICAgIGN1cnJlbnRVcmwgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldFJvdXRlKG51bGwsIG51bGwsIHRoaXMucm91dGVyLnVybCkpO1xyXG4gICAgICAgIHNwbGl0dGVkVXJsID0gW3RoaXMucm91dGVyLnVybF07XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjdXJyZW50VXJsLm5hbWUpO1xyXG5cclxuICAgICAgaWYgKHNwbGl0dGVkVXJsLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBbLCAuLi5hcnJdID0gc3BsaXR0ZWRVcmw7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZFJvdXRlOiBBQlAuRnVsbFJvdXRlID0gY3VycmVudFVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgICAgICAgIGlmICghY2hpbGRSb3V0ZS5jaGlsZHJlbiB8fCAhY2hpbGRSb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjaGlsZFJvdXRlID0gY2hpbGRSb3V0ZS5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLnBhdGggPT09IGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjaGlsZFJvdXRlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=