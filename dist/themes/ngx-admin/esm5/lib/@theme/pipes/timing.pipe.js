/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/timing.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    /**
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.transform = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        if (time) {
            /** @type {?} */
            var minutes = Math.floor(time / 60);
            /** @type {?} */
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    TimingPipe.prototype.initZero = /**
     * @private
     * @param {?} time
     * @return {?}
     */
    function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe.decorators = [
        { type: Pipe, args: [{ name: 'timing' },] }
    ];
    return TimingPipe;
}());
export { TimingPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9waXBlcy90aW1pbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFlQSxDQUFDOzs7OztJQWJDLDhCQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLElBQUksSUFBSSxFQUFFOztnQkFDRixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDOztnQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNyQyxPQUFPLEtBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFTLENBQUM7U0FDbEY7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTyw2QkFBUTs7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixPQUFPLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQWRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7O0lBZXhCLGlCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3RpbWluZycgfSlcclxuZXhwb3J0IGNsYXNzIFRpbWluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odGltZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh0aW1lKSB7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLmluaXRaZXJvKG1pbnV0ZXMpfSR7bWludXRlc306JHt0aGlzLmluaXRaZXJvKHNlY29uZHMpfSR7c2Vjb25kc31gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnMDA6MDAnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0WmVybyh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRpbWUgPCAxMCA/ICcwJyA6ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=