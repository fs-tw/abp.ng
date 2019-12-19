/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/number-with-commas.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var NumberWithCommasPipe = /** @class */ (function () {
    function NumberWithCommasPipe() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    NumberWithCommasPipe.prototype.transform = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxNumberWithCommas' },] }
    ];
    return NumberWithCommasPipe;
}());
export { NumberWithCommasPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXdpdGgtY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9waXBlcy9udW1iZXItd2l0aC1jb21tYXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFNQSxDQUFDOzs7OztJQUhDLHdDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7SUFNckMsMkJBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduZ3hOdW1iZXJXaXRoQ29tbWFzJyB9KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyV2l0aENvbW1hc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChpbnB1dCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==