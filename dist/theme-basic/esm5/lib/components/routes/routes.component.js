/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/routes/routes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigState } from '@abp/ng.core';
import { map } from 'rxjs/operators';
import { Select } from '@ngxs/store';
var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(renderer) {
        this.renderer = renderer;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) { return item.name; });
    }
    Object.defineProperty(RoutesComponent.prototype, "visibleRoutes$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.routes$.pipe(map((/**
             * @param {?} routes
             * @return {?}
             */
            function (routes) { return getVisibleRoutes(routes); })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    RoutesComponent.prototype.openChange = /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    function (event, childrenContainer) {
        var _this = this;
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return Number.isInteger(+key); }))
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            }));
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    };
    RoutesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-routes',
                    template: "<ul class=\"navbar-nav\">\r\n  <ng-container\r\n    *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n    [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-template #defaultLink let-route>\r\n    <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n      <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n        ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}</a\r\n      >\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownLink let-route>\r\n    <li\r\n      #navbarRootDropdown\r\n      *abpPermission=\"route.requiredPolicy\"\r\n      [abpVisibility]=\"routeContainer\"\r\n      class=\"nav-item dropdown\"\r\n      display=\"static\"\r\n      (click)=\"\r\n        navbarRootDropdown.expand\r\n          ? (navbarRootDropdown.expand = false)\r\n          : (navbarRootDropdown.expand = true)\r\n      \"\r\n    >\r\n      <a\r\n        class=\"nav-link dropdown-toggle\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        href=\"javascript:void(0)\"\r\n      >\r\n        <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}\r\n      </a>\r\n      <div\r\n        #routeContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n        [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n      >\r\n        <ng-template\r\n          #forTemplate\r\n          ngFor\r\n          [ngForOf]=\"route.children\"\r\n          [ngForTrackBy]=\"trackByFn\"\r\n          [ngForTemplate]=\"childWrapper\"\r\n        ></ng-template>\r\n      </div>\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #childWrapper let-child>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n    ></ng-template>\r\n  </ng-template>\r\n\r\n  <ng-template #defaultChild let-child>\r\n    <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n      <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n        <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n        {{ child.name | abpLocalization }}</a\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownChild let-child>\r\n    <div\r\n      [abpVisibility]=\"childrenContainer\"\r\n      class=\"dropdown-submenu\"\r\n      ngbDropdown\r\n      #dropdownSubmenu=\"ngbDropdown\"\r\n      [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n      placement=\"right-top\"\r\n      [autoClose]=\"true\"\r\n      *abpPermission=\"child.requiredPolicy\"\r\n      (openChange)=\"openChange($event, childrenContainer)\"\r\n    >\r\n      <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n        <a\r\n          abpEllipsis=\"210px\"\r\n          [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n          role=\"button\"\r\n          class=\"btn d-block text-left dropdown-toggle\"\r\n        >\r\n          <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n          {{ child.name | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div\r\n        #childrenContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n      >\r\n        <ng-template\r\n          ngFor\r\n          [ngForOf]=\"child.children\"\r\n          [ngForTrackBy]=\"trackByFn\"\r\n          [ngForTemplate]=\"childWrapper\"\r\n        ></ng-template>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ul>\r\n"
                }] }
    ];
    /** @nocollapse */
    RoutesComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    RoutesComponent.propDecorators = {
        smallScreen: [{ type: Input }],
        isDropdownChildDynamic: [{ type: Input }]
    };
    tslib_1.__decorate([
        Select(ConfigState.getOne('routes')),
        tslib_1.__metadata("design:type", Observable)
    ], RoutesComponent.prototype, "routes$", void 0);
    return RoutesComponent;
}());
export { RoutesComponent };
if (false) {
    /** @type {?} */
    RoutesComponent.prototype.routes$;
    /** @type {?} */
    RoutesComponent.prototype.smallScreen;
    /** @type {?} */
    RoutesComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    RoutesComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    RoutesComponent.prototype.renderer;
}
/**
 * @param {?} routes
 * @return {?}
 */
function getVisibleRoutes(routes) {
    return routes.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return tslib_1.__spread(acc, [val]);
    }), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFPLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVyQztJQW9CRSx5QkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUZ2QyxjQUFTOzs7OztRQUFtQyxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFULENBQVMsRUFBQztJQUV6QixDQUFDO0lBTjNDLHNCQUFJLDJDQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7Ozs7OztJQU1ELG9DQUFVOzs7OztJQUFWLFVBQVcsS0FBYyxFQUFFLGlCQUFpQztRQUE1RCxpQkFTQztRQVJDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztpQkFDakMsTUFBTTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFDO2lCQUNyQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNWLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdFLENBQUMsRUFBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw4ekhBQW9DO2lCQUNyQzs7OztnQkFUbUQsU0FBUzs7OzhCQWMxRCxLQUFLO3lDQUdMLEtBQUs7O0lBTE47UUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzswQ0FDNUIsVUFBVTtvREFBa0I7SUEwQnZDLHNCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E1QlksZUFBZTs7O0lBQzFCLGtDQUNxQzs7SUFFckMsc0NBQ3FCOztJQUVyQixpREFDZ0M7O0lBTWhDLG9DQUFtRTs7Ozs7SUFFdkQsbUNBQTJCOzs7Ozs7QUFjekMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUF1QjtJQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDNUIsSUFBSSxHQUFHLENBQUMsU0FBUztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRTlCLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxHQUFHLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQztRQUVELHdCQUFXLEdBQUcsR0FBRSxHQUFHLEdBQUU7SUFDdkIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUcmFja0J5RnVuY3Rpb24sIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBQlAsIENvbmZpZ1N0YXRlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1yb3V0ZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncm91dGVzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlc0NvbXBvbmVudCB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRPbmUoJ3JvdXRlcycpKVxyXG4gIHJvdXRlcyQ6IE9ic2VydmFibGU8QUJQLkZ1bGxSb3V0ZVtdPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzbWFsbFNjcmVlbjogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBpc0Ryb3Bkb3duQ2hpbGREeW5hbWljOiBib29sZWFuO1xyXG5cclxuICBnZXQgdmlzaWJsZVJvdXRlcyQoKTogT2JzZXJ2YWJsZTxBQlAuRnVsbFJvdXRlW10+IHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlcyQucGlwZShtYXAocm91dGVzID0+IGdldFZpc2libGVSb3V0ZXMocm91dGVzKSkpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QUJQLkZ1bGxSb3V0ZT4gPSAoXywgaXRlbSkgPT4gaXRlbS5uYW1lO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIG9wZW5DaGFuZ2UoZXZlbnQ6IGJvb2xlYW4sIGNoaWxkcmVuQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgaWYgKCFldmVudCkge1xyXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbkNvbnRhaW5lci5zdHlsZSlcclxuICAgICAgICAuZmlsdGVyKGtleSA9PiBOdW1iZXIuaXNJbnRlZ2VyKCtrZXkpKVxyXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNoaWxkcmVuQ29udGFpbmVyLCBjaGlsZHJlbkNvbnRhaW5lci5zdHlsZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaGlsZHJlbkNvbnRhaW5lciwgJ2xlZnQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10pIHtcclxuICByZXR1cm4gcm91dGVzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgIGlmICh2YWwuaW52aXNpYmxlKSByZXR1cm4gYWNjO1xyXG5cclxuICAgIGlmICh2YWwuY2hpbGRyZW4gJiYgdmFsLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICB2YWwuY2hpbGRyZW4gPSBnZXRWaXNpYmxlUm91dGVzKHZhbC5jaGlsZHJlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsuLi5hY2MsIHZhbF07XHJcbiAgfSwgW10pO1xyXG59XHJcbiJdfQ==