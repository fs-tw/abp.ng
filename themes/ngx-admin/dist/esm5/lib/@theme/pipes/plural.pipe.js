/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/plural.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    PluralPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxPlural' },] }
    ];
    return PluralPipe;
}());
export { PluralPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9waXBlcy9wbHVyYWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFXQSxDQUFDOzs7Ozs7O0lBUkMsOEJBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLEtBQWEsRUFBRSxXQUF3QjtRQUF4Qiw0QkFBQSxFQUFBLGdCQUF3QjtRQUM5RCxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNuQixPQUFPLEtBQUssS0FBSyxDQUFDO1lBQ2hCLENBQUMsQ0FBSSxLQUFLLFNBQUksS0FBTztZQUNyQixDQUFDLENBQUMsV0FBVztnQkFDWCxDQUFDLENBQUksS0FBSyxTQUFJLFdBQWE7Z0JBQzNCLENBQUMsQ0FBSSxLQUFLLFNBQUksS0FBSyxNQUFHLENBQUM7SUFDN0IsQ0FBQzs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7SUFXM0IsaUJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbmd4UGx1cmFsJyB9KVxyXG5leHBvcnQgY2xhc3MgUGx1cmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgbGFiZWw6IHN0cmluZywgcGx1cmFsTGFiZWw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGlucHV0ID0gaW5wdXQgfHwgMDtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gMVxyXG4gICAgICA/IGAke2lucHV0fSAke2xhYmVsfWBcclxuICAgICAgOiBwbHVyYWxMYWJlbFxyXG4gICAgICAgID8gYCR7aW5wdXR9ICR7cGx1cmFsTGFiZWx9YFxyXG4gICAgICAgIDogYCR7aW5wdXR9ICR7bGFiZWx9c2A7XHJcbiAgfVxyXG59XHJcbiJdfQ==