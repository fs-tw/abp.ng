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
export class ReplaceableRouteContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        (res = (/** @type {?} */ ({}))) => {
            this.externalComponent = res.component;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
ReplaceableRouteContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-replaceable-route-container',
                template: `
    <ng-container *ngComponentOutlet="externalComponent || defaultComponent"></ng-container>
  `
            }] }
];
/** @nocollapse */
ReplaceableRouteContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZWFibGUtcm91dGUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF2RCxNQUFNLE9BQU8sa0NBQWtDOzs7OztJQU83QyxZQUFvQixLQUFxQixFQUFVLEtBQVk7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVuRSxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTthQUMxQyxvQkFBb0IsRUFBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUVoRSxJQUFJLENBQUMsS0FBSzthQUNQLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2FBQ3BELFNBQVM7Ozs7UUFBQyxDQUFDLEdBQUcsR0FBRyxtQkFBQSxFQUFFLEVBQThDLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXLEtBQUksQ0FBQzs7O1lBNUJqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7WUFiUSxjQUFjO1lBQ2QsS0FBSzs7OztJQWNaLDhEQUE0Qjs7SUFFNUIsMERBQXFCOztJQUVyQiwrREFBNkI7Ozs7O0lBRWpCLG1EQUE2Qjs7Ozs7SUFBRSxtREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtcmVwbGFjZWFibGUtcm91dGUtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJleHRlcm5hbENvbXBvbmVudCB8fCBkZWZhdWx0Q29tcG9uZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZGVmYXVsdENvbXBvbmVudDogVHlwZTxhbnk+O1xyXG5cclxuICBjb21wb25lbnRLZXk6IHN0cmluZztcclxuXHJcbiAgZXh0ZXJuYWxDb21wb25lbnQ6IFR5cGU8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGVmYXVsdENvbXBvbmVudCA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YS5yZXBsYWNlYWJsZUNvbXBvbmVudC5kZWZhdWx0Q29tcG9uZW50O1xyXG4gICAgdGhpcy5jb21wb25lbnRLZXkgPSAodGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhXHJcbiAgICAgIC5yZXBsYWNlYWJsZUNvbXBvbmVudCBhcyBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUm91dGVEYXRhKS5rZXk7XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudEtleSkpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlcyA9IHt9IGFzIFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxDb21wb25lbnQgPSByZXMuY29tcG9uZW50O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG4iXX0=