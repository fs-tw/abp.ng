/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/init.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
export class InitDirective {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.init.emit(this.elRef);
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpInit]' },] }
];
/** @nocollapse */
InitDirective.ctorParameters = () => [
    { type: ElementRef }
];
InitDirective.propDecorators = {
    init: [{ type: Output, args: ['abpInit',] }]
};
if (false) {
    /** @type {?} */
    InitDirective.prototype.init;
    /**
     * @type {?}
     * @private
     */
    InitDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRzNGLE1BQU0sT0FBTyxhQUFhOzs7O0lBR3hCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFGVCxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFFL0IsQ0FBQzs7OztJQUV6QyxlQUFlO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQVJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7Ozs7WUFGTSxVQUFVOzs7bUJBSWpELE1BQU0sU0FBQyxTQUFTOzs7O0lBQWpCLDZCQUF1RTs7Ozs7SUFFM0QsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FicEluaXRdJyB9KVxyXG5leHBvcnQgY2xhc3MgSW5pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBPdXRwdXQoJ2FicEluaXQnKSByZWFkb25seSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPGFueT4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdC5lbWl0KHRoaXMuZWxSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=