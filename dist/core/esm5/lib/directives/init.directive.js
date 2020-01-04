/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/init.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
var InitDirective = /** @class */ (function () {
    function InitDirective(elRef) {
        this.elRef = elRef;
        this.init = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InitDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.init.emit(this.elRef);
    };
    InitDirective.decorators = [
        { type: Directive, args: [{ selector: '[abpInit]' },] }
    ];
    /** @nocollapse */
    InitDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    InitDirective.propDecorators = {
        init: [{ type: Output, args: ['abpInit',] }]
    };
    return InitDirective;
}());
export { InitDirective };
if (false) {
    /** @type {?} */
    InitDirective.prototype.init;
    /**
     * @type {?}
     * @private
     */
    InitDirective.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTNGO0lBSUUsdUJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFGVCxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFFL0IsQ0FBQzs7OztJQUV6Qyx1Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBUkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTs7OztnQkFGTSxVQUFVOzs7dUJBSWpELE1BQU0sU0FBQyxTQUFTOztJQU9uQixvQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLGFBQWE7OztJQUN4Qiw2QkFBdUU7Ozs7O0lBRTNELDhCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thYnBJbml0XScgfSlcclxuZXhwb3J0IGNsYXNzIEluaXREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBAT3V0cHV0KCdhYnBJbml0JykgcmVhZG9ubHkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZjxhbnk+PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmluaXQuZW1pdCh0aGlzLmVsUmVmKTtcclxuICB9XHJcbn1cclxuIl19