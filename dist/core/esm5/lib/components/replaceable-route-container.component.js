/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/replaceable-route-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
var ReplaceableRouteContainerComponent = /** @class */ (function () {
    function ReplaceableRouteContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    /**
     * @return {?}
     */
    ReplaceableRouteContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
        this.componentKey = ((/** @type {?} */ (this.route.snapshot.data
            .replaceableComponent))).key;
        this.store
            .select(ReplaceableComponentsState.getComponent(this.componentKey))
            .pipe(takeUntilDestroy(this), distinctUntilChanged())
            .subscribe((/**
         * @param {?=} res
         * @return {?}
         */
        function (res) {
            if (res === void 0) { res = (/** @type {?} */ ({})); }
            _this.externalComponent = res.component;
        }));
    };
    /**
     * @return {?}
     */
    ReplaceableRouteContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    ReplaceableRouteContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-replaceable-route-container',
                    template: "\n    <ng-container *ngComponentOutlet=\"externalComponent || defaultComponent\"></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    ReplaceableRouteContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return ReplaceableRouteContainerComponent;
}());
export { ReplaceableRouteContainerComponent };
if (false) {
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.defaultComponent;
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.componentKey;
    /** @type {?} */
    ReplaceableRouteContainerComponent.prototype.externalComponent;
    /**
     * @type {?}
     * @private
     */
    ReplaceableRouteContainerComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ReplaceableRouteContainerComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtcm91dGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWFFLDRDQUFvQixLQUFxQixFQUFVLEtBQVk7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVuRSxxREFBUTs7O0lBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDdkYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7YUFDMUMsb0JBQW9CLEVBQW1DLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFFaEUsSUFBSSxDQUFDLEtBQUs7YUFDUCxNQUFNLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQzthQUNwRCxTQUFTOzs7O1FBQUMsVUFBQyxHQUFzRDtZQUF0RCxvQkFBQSxFQUFBLHlCQUFNLEVBQUUsRUFBOEM7WUFDaEUsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsd0RBQVc7OztJQUFYLGNBQWUsQ0FBQzs7Z0JBNUJqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLHNHQUVUO2lCQUNGOzs7O2dCQWJRLGNBQWM7Z0JBQ2QsS0FBSzs7SUFvQ2QseUNBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXZCWSxrQ0FBa0M7OztJQUM3Qyw4REFBNEI7O0lBRTVCLDBEQUFxQjs7SUFFckIsK0RBQTZCOzs7OztJQUVqQixtREFBNkI7Ozs7O0lBQUUsbURBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4uL21vZGVscy9yZXBsYWNlYWJsZS1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICcuLi91dGlscy9yeGpzLXV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXJlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiZXh0ZXJuYWxDb21wb25lbnQgfHwgZGVmYXVsdENvbXBvbmVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGRlZmF1bHRDb21wb25lbnQ6IFR5cGU8YW55PjtcclxuXHJcbiAgY29tcG9uZW50S2V5OiBzdHJpbmc7XHJcblxyXG4gIGV4dGVybmFsQ29tcG9uZW50OiBUeXBlPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRDb21wb25lbnQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEucmVwbGFjZWFibGVDb21wb25lbnQuZGVmYXVsdENvbXBvbmVudDtcclxuICAgIHRoaXMuY29tcG9uZW50S2V5ID0gKHRoaXMucm91dGUuc25hcHNob3QuZGF0YVxyXG4gICAgICAucmVwbGFjZWFibGVDb21wb25lbnQgYXMgUmVwbGFjZWFibGVDb21wb25lbnRzLlJvdXRlRGF0YSkua2V5O1xyXG5cclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdChSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZS5nZXRDb21wb25lbnQodGhpcy5jb21wb25lbnRLZXkpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95KHRoaXMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXMgPSB7fSBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQpID0+IHtcclxuICAgICAgICB0aGlzLmV4dGVybmFsQ29tcG9uZW50ID0gcmVzLmNvbXBvbmVudDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuIl19