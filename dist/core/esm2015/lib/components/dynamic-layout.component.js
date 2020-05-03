/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dynamic-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import snq from 'snq';
import { ConfigState } from '../states/config.state';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { takeUntilDestroy } from '../utils/rxjs-utils';
export class DynamicLayoutComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} store
     */
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        const { routes } = this.store.selectSnapshot(ConfigState.getAll);
        router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                const segments = snq((/**
                 * @return {?}
                 */
                () => router.parseUrl(event.url).root.children.primary.segments), (/** @type {?} */ ([
                    { path: router.url.replace('/', '') },
                ])));
                /** @type {?} */
                const layouts = {
                    application: this.getComponent('Theme.ApplicationLayoutComponent'),
                    account: this.getComponent('Theme.AccountLayoutComponent'),
                    empty: this.getComponent('Theme.EmptyLayoutComponent'),
                };
                /** @type {?} */
                const expectedLayout = (this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                this.layout = layouts[expectedLayout].component;
            }
        }));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    getComponent(key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
DynamicLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-dynamic-layout',
                template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngComponentOutlet="layout"></ng-container
    ></ng-template>
  `
            }] }
];
/** @nocollapse */
DynamicLayoutComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: Store }
];
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
    let layout = "empty" /* empty */;
    /** @type {?} */
    const route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => (val.wrapper ? [...acc, ...val.children] : [...acc, val])), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    r => r.path === segments[0].path));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            const child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.path === segments[1].path));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFJdEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBWXZELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUdqQyxZQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxLQUFZO1FBQW5FLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87Y0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRWhFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNELElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTs7c0JBQzVCLFFBQVEsR0FBRyxHQUFHOzs7Z0JBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFFLG1CQUFBO29CQUNwRixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7aUJBQ3RDLEVBQU8sQ0FBQzs7c0JBRUgsT0FBTyxHQUFHO29CQUNkLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGtDQUFrQyxDQUFDO29CQUNsRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQztvQkFDMUQsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUM7aUJBQ3ZEOztzQkFFSyxjQUFjLEdBQ2xCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztnQkFFekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsR0FBVztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxXQUFXLEtBQUksQ0FBQzs7O1lBeENqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7R0FNVDthQUNGOzs7O1lBbkJ1QyxNQUFNO1lBQXJDLGNBQWM7WUFDZCxLQUFLOzs7O0lBb0JaLHdDQUFrQjs7Ozs7SUFFTix3Q0FBc0I7Ozs7O0lBQUUsdUNBQTZCOzs7OztJQUFFLHVDQUFvQjs7Ozs7OztBQThCekYsU0FBUyxVQUFVLENBQUMsUUFBc0IsRUFBRSxNQUF1Qjs7UUFDN0QsTUFBTSxzQkFBb0I7O1VBRXhCLEtBQUssR0FBRyxNQUFNO1NBQ2pCLE1BQU07Ozs7O0lBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRSxFQUFFLENBQUM7U0FDbkYsSUFBSTs7OztJQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDO0lBRXpDLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDNUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDO1lBRW5FLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgZUxheW91dFR5cGUgfSBmcm9tICcuLi9lbnVtcy9jb21tb24nO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZHluYW1pYy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGF5b3V0ID8gY29tcG9uZW50T3V0bGV0IDogcm91dGVyT3V0bGV0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3JvdXRlck91dGxldD48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50T3V0bGV0XHJcbiAgICAgID48bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImxheW91dFwiPjwvbmctY29udGFpbmVyXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0xheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbGF5b3V0OiBUeXBlPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgY29uc3QgeyByb3V0ZXMgfSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0QWxsKTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gc25xKCgpID0+IHJvdXRlci5wYXJzZVVybChldmVudC51cmwpLnJvb3QuY2hpbGRyZW4ucHJpbWFyeS5zZWdtZW50cywgW1xyXG4gICAgICAgICAgeyBwYXRoOiByb3V0ZXIudXJsLnJlcGxhY2UoJy8nLCAnJykgfSxcclxuICAgICAgICBdIGFzIGFueSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheW91dHMgPSB7XHJcbiAgICAgICAgICBhcHBsaWNhdGlvbjogdGhpcy5nZXRDb21wb25lbnQoJ1RoZW1lLkFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50JyksXHJcbiAgICAgICAgICBhY2NvdW50OiB0aGlzLmdldENvbXBvbmVudCgnVGhlbWUuQWNjb3VudExheW91dENvbXBvbmVudCcpLFxyXG4gICAgICAgICAgZW1wdHk6IHRoaXMuZ2V0Q29tcG9uZW50KCdUaGVtZS5FbXB0eUxheW91dENvbXBvbmVudCcpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkTGF5b3V0ID1cclxuICAgICAgICAgICh0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEgfHwge30pLmxheW91dCB8fCBmaW5kTGF5b3V0KHNlZ21lbnRzLCByb3V0ZXMpO1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dHNbZXhwZWN0ZWRMYXlvdXRdLmNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbXBvbmVudChrZXk6IHN0cmluZyk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZS5nZXRDb21wb25lbnQoa2V5KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRMYXlvdXQoc2VnbWVudHM6IFVybFNlZ21lbnRbXSwgcm91dGVzOiBBQlAuRnVsbFJvdXRlW10pOiBlTGF5b3V0VHlwZSB7XHJcbiAgbGV0IGxheW91dCA9IGVMYXlvdXRUeXBlLmVtcHR5O1xyXG5cclxuICBjb25zdCByb3V0ZSA9IHJvdXRlc1xyXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+ICh2YWwud3JhcHBlciA/IFsuLi5hY2MsIC4uLnZhbC5jaGlsZHJlbl0gOiBbLi4uYWNjLCB2YWxdKSwgW10pXHJcbiAgICAuZmluZChyID0+IHIucGF0aCA9PT0gc2VnbWVudHNbMF0ucGF0aCk7XHJcblxyXG4gIGlmIChyb3V0ZSkge1xyXG4gICAgaWYgKHJvdXRlLmxheW91dCkge1xyXG4gICAgICBsYXlvdXQgPSByb3V0ZS5sYXlvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAmJiBzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gcm91dGUuY2hpbGRyZW4uZmluZChjID0+IGMucGF0aCA9PT0gc2VnbWVudHNbMV0ucGF0aCk7XHJcblxyXG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQubGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gY2hpbGQubGF5b3V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGF5b3V0O1xyXG59XHJcbiJdfQ==