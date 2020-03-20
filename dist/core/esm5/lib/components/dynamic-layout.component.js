/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import snq from 'snq';
import { ConfigState } from '../states/config.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(router, route, store) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.store = store;
        var _a = this.store.selectSnapshot(ConfigState.getAll), layouts = _a.requirements.layouts, routes = _a.routes;
        if ((this.route.snapshot.data || {}).layout) {
            this.layout = layouts
                .filter((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return !!l; }))
                .find((/**
             * @param {?} l
             * @return {?}
             */
            function (l) {
                return snq((/**
                 * @return {?}
                 */
                function () { return l.type.toLowerCase().indexOf(_this.route.snapshot.data.layout); }), -1) > -1;
            }));
        }
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
                var layout_1 = (_this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                _this.layout = layouts
                    .filter((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return !!l; }))
                    .find((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return snq((/**
                 * @return {?}
                 */
                function () { return l.type.toLowerCase().indexOf(layout_1); }), -1) > -1; }));
            }
        }));
    }
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
    tslib_1.__decorate([
        Select(ConfigState.getOne('requirements')),
        tslib_1.__metadata("design:type", Observable)
    ], DynamicLayoutComponent.prototype, "requirements$", void 0);
    return DynamicLayoutComponent;
}());
export { DynamicLayoutComponent };
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.requirements$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBSXRCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWVFLGdDQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxLQUFZO1FBQXZGLGlCQTRCQztRQTVCbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUMvRSxJQUFBLGtEQUcyQyxFQUYvQixpQ0FBTyxFQUN2QixrQkFDK0M7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPO2lCQUNsQixNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQztpQkFDaEIsSUFBSTs7OztZQUNILFVBQUMsQ0FBTTtnQkFDTCxPQUFBLEdBQUc7OztnQkFBQyxj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Q0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUM1RCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTNCLENBQTJCLEVBQUM7WUFFbkUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDdkI7U0FDRjtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgVHlwZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciwgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJy4uL2VudW1zL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZHluYW1pYy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGF5b3V0ID8gY29tcG9uZW50T3V0bGV0IDogcm91dGVyT3V0bGV0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3JvdXRlck91dGxldD48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50T3V0bGV0XHJcbiAgICAgID48bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImxheW91dFwiPjwvbmctY29udGFpbmVyXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0xheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRPbmUoJ3JlcXVpcmVtZW50cycpKSByZXF1aXJlbWVudHMkOiBPYnNlcnZhYmxlPENvbmZpZy5SZXF1aXJlbWVudHM+O1xyXG5cclxuICBsYXlvdXQ6IFR5cGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJlcXVpcmVtZW50czogeyBsYXlvdXRzIH0sXHJcbiAgICAgIHJvdXRlcyxcclxuICAgIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFsbCk7XHJcblxyXG4gICAgaWYgKCh0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEgfHwge30pLmxheW91dCkge1xyXG4gICAgICB0aGlzLmxheW91dCA9IGxheW91dHNcclxuICAgICAgICAuZmlsdGVyKGwgPT4gISFsKVxyXG4gICAgICAgIC5maW5kKFxyXG4gICAgICAgICAgKGw6IGFueSkgPT5cclxuICAgICAgICAgICAgc25xKCgpID0+IGwudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhLmxheW91dCksIC0xKSA+IC0xLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IHNucSgoKSA9PiByb3V0ZXIucGFyc2VVcmwoZXZlbnQudXJsKS5yb290LmNoaWxkcmVuLnByaW1hcnkuc2VnbWVudHMsIFtcclxuICAgICAgICAgIHsgcGF0aDogcm91dGVyLnVybC5yZXBsYWNlKCcvJywgJycpIH0sXHJcbiAgICAgICAgXSBhcyBhbnkpO1xyXG5cclxuICAgICAgICBjb25zdCBsYXlvdXQgPSAodGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhIHx8IHt9KS5sYXlvdXQgfHwgZmluZExheW91dChzZWdtZW50cywgcm91dGVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBsYXlvdXRzXHJcbiAgICAgICAgICAuZmlsdGVyKGwgPT4gISFsKVxyXG4gICAgICAgICAgLmZpbmQoKGw6IGFueSkgPT4gc25xKCgpID0+IGwudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YobGF5b3V0KSwgLTEpID4gLTEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZExheW91dChzZWdtZW50czogVXJsU2VnbWVudFtdLCByb3V0ZXM6IEFCUC5GdWxsUm91dGVbXSk6IGVMYXlvdXRUeXBlIHtcclxuICBsZXQgbGF5b3V0ID0gZUxheW91dFR5cGUuZW1wdHk7XHJcblxyXG4gIGNvbnN0IHJvdXRlID0gcm91dGVzXHJcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gKHZhbC53cmFwcGVyID8gWy4uLmFjYywgLi4udmFsLmNoaWxkcmVuXSA6IFsuLi5hY2MsIHZhbF0pLCBbXSlcclxuICAgIC5maW5kKHIgPT4gci5wYXRoID09PSBzZWdtZW50c1swXS5wYXRoKTtcclxuXHJcbiAgaWYgKHJvdXRlKSB7XHJcbiAgICBpZiAocm91dGUubGF5b3V0KSB7XHJcbiAgICAgIGxheW91dCA9IHJvdXRlLmxheW91dDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoICYmIHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc3QgY2hpbGQgPSByb3V0ZS5jaGlsZHJlbi5maW5kKGMgPT4gYy5wYXRoID09PSBzZWdtZW50c1sxXS5wYXRoKTtcclxuXHJcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5sYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBjaGlsZC5sYXlvdXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBsYXlvdXQ7XHJcbn1cclxuIl19