/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/stop-propagation.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroy } from '../utils/rxjs-utils';
var StopPropagationDirective = /** @class */ (function () {
    function StopPropagationDirective(el) {
        this.el = el;
        this.stopPropEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StopPropagationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.el.nativeElement, 'click')
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            _this.stopPropEvent.emit(event);
        }));
    };
    /**
     * @return {?}
     */
    StopPropagationDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    StopPropagationDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[click.stop]',
                },] }
    ];
    /** @nocollapse */
    StopPropagationDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StopPropagationDirective.propDecorators = {
        stopPropEvent: [{ type: Output, args: ['click.stop',] }]
    };
    return StopPropagationDirective;
}());
export { StopPropagationDirective };
if (false) {
    /** @type {?} */
    StopPropagationDirective.prototype.stopPropEvent;
    /**
     * @type {?}
     * @private
     */
    StopPropagationDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQU9FLGtDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZILGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUV6QyxDQUFDOzs7O0lBRXRDLDJDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLFVBQUMsS0FBaUI7WUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWCxjQUFxQixDQUFDOztnQkFsQnZCLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVBtQixVQUFVOzs7Z0NBUzNCLE1BQU0sU0FBQyxZQUFZOztJQWN0QiwrQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksd0JBQXdCOzs7SUFDbkMsaURBQThFOzs7OztJQUVsRSxzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJy4uL3V0aWxzL3J4anMtdXRpbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkaXJlY3RpdmUtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ1tjbGljay5zdG9wXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQE91dHB1dCgnY2xpY2suc3RvcCcpIHJlYWRvbmx5IHN0b3BQcm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcclxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0b3BQcm9wRXZlbnQuZW1pdChldmVudCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==