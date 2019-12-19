/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
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
        function () { return _this.alive; })))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return _this.updateSidebarIcons(direction); }));
        this.updateSidebarIcons(directionService.getDirection());
    }
    /**
     * @return {?}
     */
    StateService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.alive = false;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    StateService.prototype.updateSidebarIcons = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _a = tslib_1.__read(this.sidebars, 2), startSidebar = _a[0], endSidebar = _a[1];
        /** @type {?} */
        var isLtr = direction === NbLayoutDirection.LTR;
        /** @type {?} */
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        /** @type {?} */
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setLayoutState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.layoutState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getLayoutStates = /**
     * @return {?}
     */
    function () {
        return observableOf(this.layouts);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onLayoutState = /**
     * @return {?}
     */
    function () {
        return this.layoutState$.asObservable();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    StateService.prototype.setSidebarState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.sidebarState$.next(state);
    };
    /**
     * @return {?}
     */
    StateService.prototype.getSidebarStates = /**
     * @return {?}
     */
    function () {
        return observableOf(this.sidebars);
    };
    /**
     * @return {?}
     */
    StateService.prototype.onSidebarState = /**
     * @return {?}
     */
    function () {
        return this.sidebarState$.asObservable();
    };
    StateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateService.ctorParameters = function () { return [
        { type: NbLayoutDirectionService }
    ]; };
    return StateService;
}());
export { StateService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvdXRpbHMvc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdFO0lBeUNFLHNCQUFZLGdCQUEwQztRQUF0RCxpQkFNQztRQTVDUyxZQUFPLEdBQVE7WUFDdkI7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLEVBQUUsRUFBRSxZQUFZO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1NBQ0YsQ0FBQztRQUVRLGFBQVEsR0FBUTtZQUN4QjtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixFQUFFLEVBQUUsT0FBTztnQkFDWCxRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsRUFBRSxFQUFFLEtBQUs7YUFDVjtTQUNGLENBQUM7UUFFUSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR1gsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUU7YUFDakMsSUFBSSxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQyxDQUFDO2FBQ2pDLFNBQVM7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyx5Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLFNBQTRCO1FBQy9DLElBQUEscUNBQTRDLEVBQTFDLG9CQUFZLEVBQUUsa0JBQTRCOztZQUM1QyxLQUFLLEdBQUcsU0FBUyxLQUFLLGlCQUFpQixDQUFDLEdBQUc7O1lBQzNDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyx5QkFBeUI7O1lBQzdFLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDakYsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxxQ0FBYzs7OztJQUFkLFVBQWUsS0FBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsc0NBQWU7OztJQUFmO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxvQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxzQ0FBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELHVDQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxxQ0FBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBcEZGLFVBQVU7Ozs7Z0JBRkYsd0JBQXdCOztJQXVGakMsbUJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQXBGWSxZQUFZOzs7Ozs7SUFFdkIsK0JBaUJFOzs7OztJQUVGLGdDQVlFOzs7OztJQUVGLG9DQUE4RDs7Ozs7SUFDOUQscUNBQWdFOztJQUVoRSw2QkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlLCAgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSwgTmJMYXlvdXREaXJlY3Rpb24gfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcm90ZWN0ZWQgbGF5b3V0czogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnT25lIENvbHVtbicsXHJcbiAgICAgIGljb246ICduYi1sYXlvdXQtZGVmYXVsdCcsXHJcbiAgICAgIGlkOiAnb25lLWNvbHVtbicsXHJcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1R3byBDb2x1bW4nLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXR3by1jb2x1bW4nLFxyXG4gICAgICBpZDogJ3R3by1jb2x1bW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0NlbnRlciBDb2x1bW4nLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LWNlbnRyZScsXHJcbiAgICAgIGlkOiAnY2VudGVyLWNvbHVtbicsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBzaWRlYmFyczogYW55ID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnU2lkZWJhciBhdCBsYXlvdXQgc3RhcnQnLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcsXHJcbiAgICAgIGlkOiAnc3RhcnQnLFxyXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTaWRlYmFyIGF0IGxheW91dCBlbmQnLFxyXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnLFxyXG4gICAgICBpZDogJ2VuZCcsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHByb3RlY3RlZCBsYXlvdXRTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubGF5b3V0c1swXSk7XHJcbiAgcHJvdGVjdGVkIHNpZGViYXJTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuc2lkZWJhcnNbMF0pO1xyXG5cclxuICBhbGl2ZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvblNlcnZpY2U6IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSkge1xyXG4gICAgZGlyZWN0aW9uU2VydmljZS5vbkRpcmVjdGlvbkNoYW5nZSgpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmFsaXZlKSlcclxuICAgICAgLnN1YnNjcmliZShkaXJlY3Rpb24gPT4gdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uKSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uU2VydmljZS5nZXREaXJlY3Rpb24oKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IFsgc3RhcnRTaWRlYmFyLCBlbmRTaWRlYmFyIF0gPSB0aGlzLnNpZGViYXJzO1xyXG4gICAgY29uc3QgaXNMdHIgPSBkaXJlY3Rpb24gPT09IE5iTGF5b3V0RGlyZWN0aW9uLkxUUjtcclxuICAgIGNvbnN0IHN0YXJ0SWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItbGVmdCcgOiAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnO1xyXG4gICAgY29uc3QgZW5kSWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnIDogJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnO1xyXG4gICAgc3RhcnRTaWRlYmFyLmljb24gPSBzdGFydEljb25DbGFzcztcclxuICAgIGVuZFNpZGViYXIuaWNvbiA9IGVuZEljb25DbGFzcztcclxuICB9XHJcblxyXG4gIHNldExheW91dFN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5sYXlvdXRTdGF0ZSQubmV4dChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRMYXlvdXRTdGF0ZXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmxheW91dHMpO1xyXG4gIH1cclxuXHJcbiAgb25MYXlvdXRTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5b3V0U3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2lkZWJhclN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgdGhpcy5zaWRlYmFyU3RhdGUkLm5leHQoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZWJhclN0YXRlcygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc2lkZWJhcnMpO1xyXG4gIH1cclxuXHJcbiAgb25TaWRlYmFyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnNpZGViYXJTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==