/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/capitalize.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CapitalizePipe {
    /**
     * @param {?} input
     * @return {?}
     */
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxCapitalize' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvcGlwZXMvY2FwaXRhbGl6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBRXpCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQzs7O1lBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ25neENhcGl0YWxpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQubGVuZ3RoXHJcbiAgICAgID8gKGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgOiBpbnB1dDtcclxuICB9XHJcbn1cclxuIl19