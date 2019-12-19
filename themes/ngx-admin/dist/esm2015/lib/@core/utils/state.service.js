/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
export class StateService {
    /**
     * @param {?} directionService
     */
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile((/**
         * @return {?}
         */
        () => this.alive)))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        direction => this.updateSidebarIcons(direction)));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.alive = false;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        /** @type {?} */
        const isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    /**
     * @return {?}
     */
    getLayoutStates() {
        return observableOf(this.layouts);
    }
    /**
     * @return {?}
     */
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    /**
     * @return {?}
     */
    getSidebarStates() {
        return observableOf(this.sidebars);
    }
    /**
     * @return {?}
     */
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateService.ctorParameters = () => [
    { type: NbLayoutDirectionService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layouts;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebars;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.layoutState$;
    /**
     * @type {?}
     * @protected
     */
    StateService.prototype.sidebarState$;
    /** @type {?} */
    StateService.prototype.alive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvdXRpbHMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0UsTUFBTSxPQUFPLFlBQVk7Ozs7SUF3Q3ZCLFlBQVksZ0JBQTBDO1FBdEM1QyxZQUFPLEdBQVE7WUFDdkI7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLEVBQUUsRUFBRSxZQUFZO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1NBQ0YsQ0FBQztRQUVRLGFBQVEsR0FBUTtZQUN4QjtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixFQUFFLEVBQUUsT0FBTztnQkFDWCxRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsRUFBRSxFQUFFLEtBQUs7YUFDVjtTQUNGLENBQUM7UUFFUSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR1gsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUU7YUFDakMsSUFBSSxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQzthQUNqQyxTQUFTOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLFNBQTRCO2NBQy9DLENBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBRSxHQUFHLElBQUksQ0FBQyxRQUFROztjQUM1QyxLQUFLLEdBQUcsU0FBUyxLQUFLLGlCQUFpQixDQUFDLEdBQUc7O2NBQzNDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx5QkFBeUI7O2NBQzdFLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDakYsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7O1lBcEZGLFVBQVU7Ozs7WUFGRix3QkFBd0I7Ozs7Ozs7SUFLL0IsK0JBaUJFOzs7OztJQUVGLGdDQVlFOzs7OztJQUVGLG9DQUE4RDs7Ozs7SUFDOUQscUNBQWdFOztJQUVoRSw2QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcm90ZWN0ZWQgbGF5b3V0czogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnT25lIENvbHVtbicsXHJcbiAgICAgIGljb246ICduYi1sYXlvdXQtZGVmYXVsdCcsXHJcbiAgICAgIGlkOiAnb25lLWNvbHVtbicsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1R3byBDb2x1bW4nLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXR3by1jb2x1bW4nLFxyXG4gICAgICBpZDogJ3R3by1jb2x1bW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0NlbnRlciBDb2x1bW4nLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWNlbnRyZScsXHJcbiAgICAgIGlkOiAnY2VudGVyLWNvbHVtbicsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBzaWRlYmFyczogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnU2lkZWJhciBhdCBsYXlvdXQgc3RhcnQnLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcsXHJcbiAgICAgIGlkOiAnc3RhcnQnLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTaWRlYmFyIGF0IGxheW91dCBlbmQnLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnLFxyXG4gICAgICBpZDogJ2VuZCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBsYXlvdXRTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubGF5b3V0c1swXSk7XHJcbiAgcHJvdGVjdGVkIHNpZGViYXJTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuc2lkZWJhcnNbMF0pO1xyXG5cclxuICBhbGl2ZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSkge1xyXG4gICAgZGlyZWN0aW9uU2VydmljZS5vbkRpcmVjdGlvbkNoYW5nZSgpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmFsaXZlKSlcclxuICAgICAgLnN1YnNjcmliZShkaXJlY3Rpb24gPT4gdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uKSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uU2VydmljZS5nZXREaXJlY3Rpb24oKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IFsgc3RhcnRTaWRlYmFyLCBlbmRTaWRlYmFyIF0gPSB0aGlzLnNpZGViYXJzO1xyXG4gICAgY29uc3QgaXNMdHIgPSBkaXJlY3Rpb24gPT09IE5iTGF5b3V0RGlyZWN0aW9uLkxUUjtcclxuICAgIGNvbnN0IHN0YXJ0SWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcgOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnO1xyXG4gICAgY29uc3QgZW5kSWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnIDogJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnO1xyXG4gICAgc3RhcnRTaWRlYmFyLmljb24gPSBzdGFydEljb25DbGFzcztcclxuICAgIGVuZFNpZGViYXIuaWNvbiA9IGVuZEljb25DbGFzcztcclxuICB9XHJcblxyXG4gIHNldExheW91dFN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5sYXlvdXRTdGF0ZSQubmV4dChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYXlvdXRTdGF0ZXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmxheW91dHMpO1xyXG4gIH1cclxuXHJcbiAgb25MYXlvdXRTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5b3V0U3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2lkZWJhclN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5zaWRlYmFyU3RhdGUkLm5leHQoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZWJhclN0YXRlcygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc2lkZWJhcnMpO1xyXG4gIH1cclxuXHJcbiAgb25TaWRlYmFyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnNpZGViYXJTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==