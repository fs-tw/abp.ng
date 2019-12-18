/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/capitalize.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    CapitalizePipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
    ];
    return CapitalizePipe;
}());
export { CapitalizePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvcGlwZXMvY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQVFBLENBQUM7Ozs7O0lBTEMsa0NBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU07WUFDMUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOztnQkFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztJQVEvQixxQkFBQztDQUFBLEFBUkQsSUFRQztTQVBZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduZ3hDYXBpdGFsaXplJyB9KVxyXG5leHBvcnQgY2xhc3MgQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGlucHV0ICYmIGlucHV0Lmxlbmd0aFxyXG4gICAgICA/IChpbnB1dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgIDogaW5wdXQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==