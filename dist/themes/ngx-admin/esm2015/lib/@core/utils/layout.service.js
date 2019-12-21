/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/layout.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, share } from 'rxjs/operators';
export class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
    }
    /**
     * @return {?}
     */
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    /**
     * @return {?}
     */
    onChangeLayoutSize() {
        return this.layoutSize$.pipe(share(), delay(1));
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LayoutService.prototype.layoutSize$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL3V0aWxzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFHWSxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFZeEMsQ0FBQzs7OztJQVZDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUMxQixLQUFLLEVBQUUsRUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1QsQ0FBQztJQUNKLENBQUM7OztZQWRGLFVBQVU7Ozs7Ozs7SUFHVCxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XHJcblxyXG4gIHByb3RlY3RlZCBsYXlvdXRTaXplJCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNoYW5nZUxheW91dFNpemUoKSB7XHJcbiAgICB0aGlzLmxheW91dFNpemUkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGF5b3V0U2l6ZSQucGlwZShcclxuICAgICAgc2hhcmUoKSxcclxuICAgICAgZGVsYXkoMSksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=