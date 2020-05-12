/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ConfigState } from '@abp/ng.core';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        function (state) { return state.LeptonLayoutState; }));
        if (this.show && !this.segments.length) {
            /** @type {?} */
            var splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            function (chunk) { return chunk; }));
            /** @type {?} */
            var currentUrl = this.store.selectSnapshot(ConfigState.getRoute(splittedUrl[0]));
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
                var _a = tslib_1.__read(splittedUrl), arr = _a.slice(1);
                /** @type {?} */
                var childRoute = currentUrl;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var element = arr[i];
                    if (!childRoute.children || !childRoute.children.length)
                        return { value: void 0 };
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    function (child) { return child.path === element; }));
                    this_1.segments.push(childRoute.name);
                };
                var this_1 = this;
                for (var i = 0; i < arr.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
        }
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-breadcrumb',
                    template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Store }
    ]; };
    BreadcrumbComponent.propDecorators = {
        segments: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBTyxNQUFNLGNBQWMsQ0FBQztBQUVoRDtJQVVFLDZCQUFvQixNQUFjLEVBQVUsS0FBWTtRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUp4RCxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBSW1DLENBQUM7Ozs7SUFFNUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsaUJBQWlCLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztRQUUxRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTs7Z0JBQ2xDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUssRUFBQzs7Z0JBRS9ELFVBQVUsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQ3ZELFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JDO1lBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDbEIsT0FBTztpQkFDUjthQUNGO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUEsZ0NBQXdCLEVBQXJCLGlCQUFxQjs7b0JBRTFCLFVBQVUsR0FBa0IsVUFBVTt3Q0FDakMsQ0FBQzs7d0JBQ0YsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2lEQUFTO29CQUVoRSxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O29CQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztvQkFFdkUsT0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O2dCQU50QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7MENBQTFCLENBQUM7OztpQkFPVDthQUNGO1NBQ0Y7SUFDSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHVZQUEwQztpQkFDM0M7Ozs7Z0JBUFEsTUFBTTtnQkFDTixLQUFLOzs7MkJBUVgsS0FBSzs7SUEyQ1IsMEJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTVDWSxtQkFBbUI7OztJQUM5Qix1Q0FDd0I7O0lBRXhCLG1DQUFjOzs7OztJQUVGLHFDQUFzQjs7Ozs7SUFBRSxvQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlLCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgc2hvdzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93ID0gISF0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KHN0YXRlID0+IHN0YXRlLkxlcHRvbkxheW91dFN0YXRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG93ICYmICF0aGlzLnNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICBsZXQgc3BsaXR0ZWRVcmwgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJy8nKS5maWx0ZXIoY2h1bmsgPT4gY2h1bmspO1xyXG5cclxuICAgICAgbGV0IGN1cnJlbnRVcmw6IEFCUC5GdWxsUm91dGUgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICAgIENvbmZpZ1N0YXRlLmdldFJvdXRlKHNwbGl0dGVkVXJsWzBdKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudFVybCkge1xyXG4gICAgICAgIGN1cnJlbnRVcmwgPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldFJvdXRlKG51bGwsIG51bGwsIHRoaXMucm91dGVyLnVybCkpO1xyXG4gICAgICAgIHNwbGl0dGVkVXJsID0gW3RoaXMucm91dGVyLnVybF07XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VXJsKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjdXJyZW50VXJsLm5hbWUpO1xyXG5cclxuICAgICAgaWYgKHNwbGl0dGVkVXJsLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBbLCAuLi5hcnJdID0gc3BsaXR0ZWRVcmw7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZFJvdXRlOiBBQlAuRnVsbFJvdXRlID0gY3VycmVudFVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpXTtcclxuICAgICAgICAgIGlmICghY2hpbGRSb3V0ZS5jaGlsZHJlbiB8fCAhY2hpbGRSb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICBjaGlsZFJvdXRlID0gY2hpbGRSb3V0ZS5jaGlsZHJlbi5maW5kKGNoaWxkID0+IGNoaWxkLnBhdGggPT09IGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjaGlsZFJvdXRlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=