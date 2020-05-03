/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import snq from 'snq';
import { ConfigState } from '../states/config.state';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(router, route, store) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.store = store;
        var routes = this.store.selectSnapshot(ConfigState.getAll).routes;
        router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var segments = snq((/**
                 * @return {?}
                 */
                function () { return router.parseUrl(event.url).root.children.primary.segments; }), (/** @type {?} */ ([
                    { path: router.url.replace('/', '') },
                ])));
                /** @type {?} */
                var layouts = {
                    application: _this.getComponent('Theme.ApplicationLayoutComponent'),
                    account: _this.getComponent('Theme.AccountLayoutComponent'),
                    empty: _this.getComponent('Theme.EmptyLayoutComponent'),
                };
                /** @type {?} */
                var expectedLayout = (_this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                _this.layout = layouts[expectedLayout].component;
            }
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    DynamicLayoutComponent.prototype.getComponent = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    };
    /**
     * @return {?}
     */
    DynamicLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    DynamicLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet\n      ><ng-container *ngComponentOutlet=\"layout\"></ng-container\n    ></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return DynamicLayoutComponent;
}());
export { DynamicLayoutComponent };
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.layout;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.store;
}
/**
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function findLayout(segments, routes) {
    /** @type {?} */
    var layout = "empty" /* empty */;
    /** @type {?} */
    var route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return (val.wrapper ? tslib_1.__spread(acc, val.children) : tslib_1.__spread(acc, [val])); }), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    function (r) { return r.path === segments[0].path; }));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            var child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.path === segments[1].path; }));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBSXRCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWFFLGdDQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxLQUFZO1FBQXZGLGlCQXFCQztRQXJCbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUM3RSxJQUFBLDZEQUFNO1FBRWQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ3hELElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTs7b0JBQzVCLFFBQVEsR0FBRyxHQUFHOzs7Z0JBQUMsY0FBTSxPQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBekQsQ0FBeUQsR0FBRSxtQkFBQTtvQkFDcEYsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2lCQUN0QyxFQUFPLENBQUM7O29CQUVILE9BQU8sR0FBRztvQkFDZCxXQUFXLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQ0FBa0MsQ0FBQztvQkFDbEUsT0FBTyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUM7b0JBQzFELEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDO2lCQUN2RDs7b0JBRUssY0FBYyxHQUNsQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7Z0JBRXpFLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUNqRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEdBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYLGNBQWUsQ0FBQzs7Z0JBeENqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGdUQU1UO2lCQUNGOzs7O2dCQW5CdUMsTUFBTTtnQkFBckMsY0FBYztnQkFDZCxLQUFLOztJQWtEZCw2QkFBQztDQUFBLEFBekNELElBeUNDO1NBL0JZLHNCQUFzQjs7O0lBQ2pDLHdDQUFrQjs7Ozs7SUFFTix3Q0FBc0I7Ozs7O0lBQUUsdUNBQTZCOzs7OztJQUFFLHVDQUFvQjs7Ozs7OztBQThCekYsU0FBUyxVQUFVLENBQUMsUUFBc0IsRUFBRSxNQUF1Qjs7UUFDN0QsTUFBTSxzQkFBb0I7O1FBRXhCLEtBQUssR0FBRyxNQUFNO1NBQ2pCLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQUssR0FBRyxFQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxrQkFBSyxHQUFHLEdBQUUsR0FBRyxFQUFDLENBQUMsRUFBekQsQ0FBeUQsR0FBRSxFQUFFLENBQUM7U0FDbkYsSUFBSTs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUEzQixDQUEyQixFQUFDO0lBRXpDLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFDNUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUEzQixDQUEyQixFQUFDO1lBRW5FLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jb21tb24nO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZHluYW1pYy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGF5b3V0ID8gY29tcG9uZW50T3V0bGV0IDogcm91dGVyT3V0bGV0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3JvdXRlck91dGxldD48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50T3V0bGV0XHJcbiAgICAgID48bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImxheW91dFwiPjwvbmctY29udGFpbmVyXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0xheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbGF5b3V0OiBUeXBlPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgY29uc3QgeyByb3V0ZXMgfSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QWxsKTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gc25xKCgpID0+IHJvdXRlci5wYXJzZVVybChldmVudC51cmwpLnJvb3QuY2hpbGRyZW4ucHJpbWFyeS5zZWdtZW50cywgW1xyXG4gICAgICAgICAgeyBwYXRoOiByb3V0ZXIudXJsLnJlcGxhY2UoJy8nLCAnJykgfSxcclxuICAgICAgICBdIGFzIGFueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dHMgPSB7XHJcbiAgICAgICAgICBhcHBsaWNhdGlvbjogdGhpcy5nZXRDb21wb25lbnQoJ1RoZW1lLkFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50JyksXHJcbiAgICAgICAgICBhY2NvdW50OiB0aGlzLmdldENvbXBvbmVudCgnVGhlbWUuQWNjb3VudExheW91dENvbXBvbmVudCcpLFxyXG4gICAgICAgICAgZW1wdHk6IHRoaXMuZ2V0Q29tcG9uZW50KCdUaGVtZS5FbXB0eUxheW91dENvbXBvbmVudCcpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkTGF5b3V0ID1cclxuICAgICAgICAgICh0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEgfHwge30pLmxheW91dCB8fCBmaW5kTGF5b3V0KHNlZ21lbnRzLCByb3V0ZXMpO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dHNbZXhwZWN0ZWRMYXlvdXRdLmNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbXBvbmVudChrZXk6IHN0cmluZyk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZS5nZXRDb21wb25lbnQoa2V5KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRMYXlvdXQoc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10pOiBlTGF5b3V0VHlwZSB7XHJcbiAgbGV0IGxheW91dCA9IGVMYXlvdXRUeXBlLmVtcHR5O1xyXG5cclxuICBjb25zdCByb3V0ZSA9IHJvdXRlc1xyXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+ICh2YWwud3JhcHBlciA/IFsuLi5hY2MsIC4uLnZhbC5jaGlsZHJlbl0gOiBbLi4uYWNjLCB2YWxdKSwgW10pXHJcbiAgICAuZmluZChyID0+IHIucGF0aCA9PT0gc2VnbWVudHNbMF0ucGF0aCk7XHJcblxyXG4gIGlmIChyb3V0ZSkge1xyXG4gICAgaWYgKHJvdXRlLmxheW91dCkge1xyXG4gICAgICBsYXlvdXQgPSByb3V0ZS5sYXlvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiBzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gcm91dGUuY2hpbGRyZW4uZmluZChjID0+IGMucGF0aCA9PT0gc2VnbWVudHNbMV0ucGF0aCk7XHJcblxyXG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQubGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gY2hpbGQubGF5b3V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGF5b3V0O1xyXG59XHJcbiJdfQ==