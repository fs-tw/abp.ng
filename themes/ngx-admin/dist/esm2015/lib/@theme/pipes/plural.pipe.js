/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/plural.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class PluralPipe {
    /**
     * @param {?} input
     * @param {?} label
     * @param {?=} pluralLabel
     * @return {?}
     */
    transform(input, label, pluralLabel = '') {
        input = input || 0;
        return input === 1
            ? `${input} ${label}`
            : pluralLabel
                ? `${input} ${pluralLabel}`
                : `${input} ${label}s`;
    }
}
PluralPipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxPlural' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9waXBlcy9wbHVyYWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxVQUFVOzs7Ozs7O0lBRXJCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLGNBQXNCLEVBQUU7UUFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkIsT0FBTyxLQUFLLEtBQUssQ0FBQztZQUNoQixDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxFQUFFO1lBQ3JCLENBQUMsQ0FBQyxXQUFXO2dCQUNYLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxXQUFXLEVBQUU7Z0JBQzNCLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUM3QixDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbmd4UGx1cmFsJyB9KVxyXG5leHBvcnQgY2xhc3MgUGx1cmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlciwgbGFiZWw6IHN0cmluZywgcGx1cmFsTGFiZWw6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGlucHV0ID0gaW5wdXQgfHwgMDtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gMVxyXG4gICAgICA/IGAke2lucHV0fSAke2xhYmVsfWBcclxuICAgICAgOiBwbHVyYWxMYWJlbFxyXG4gICAgICAgID8gYCR7aW5wdXR9ICR7cGx1cmFsTGFiZWx9YFxyXG4gICAgICAgIDogYCR7aW5wdXR9ICR7bGFiZWx9c2A7XHJcbiAgfVxyXG59XHJcbiJdfQ==