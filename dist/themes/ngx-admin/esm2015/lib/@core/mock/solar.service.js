/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/solar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SolarData } from '../data/solar';
export class SolarService extends SolarData {
    constructor() {
        super(...arguments);
        this.value = 42;
    }
    /**
     * @return {?}
     */
    getSolarData() {
        return observableOf(this.value);
    }
}
SolarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SolarService.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay9zb2xhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxZQUFhLFNBQVEsU0FBUztJQUQzQzs7UUFFVSxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBS3JCLENBQUM7Ozs7SUFIQyxZQUFZO1FBQ1YsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQU5GLFVBQVU7Ozs7Ozs7SUFFVCw2QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU29sYXJEYXRhIH0gZnJvbSAnLi4vZGF0YS9zb2xhcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb2xhclNlcnZpY2UgZXh0ZW5kcyBTb2xhckRhdGEge1xyXG4gIHByaXZhdGUgdmFsdWUgPSA0MjtcclxuXHJcbiAgZ2V0U29sYXJEYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=