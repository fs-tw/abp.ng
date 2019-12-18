/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/pipes/timing.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TimingPipe {
    /**
     * @param {?} time
     * @return {?}
     */
    transform(time) {
        if (time) {
            /** @type {?} */
            const minutes = Math.floor(time / 60);
            /** @type {?} */
            const seconds = Math.floor(time % 60);
            return `${this.initZero(minutes)}${minutes}:${this.initZero(seconds)}${seconds}`;
        }
        return '00:00';
    }
    /**
     * @private
     * @param {?} time
     * @return {?}
     */
    initZero(time) {
        return time < 10 ? '0' : '';
    }
}
TimingPipe.decorators = [
    { type: Pipe, args: [{ name: 'timing' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0B0aGVtZS9waXBlcy90aW1pbmcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3BELE1BQU0sT0FBTyxVQUFVOzs7OztJQUNyQixTQUFTLENBQUMsSUFBWTtRQUNwQixJQUFJLElBQUksRUFBRTs7a0JBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7a0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUM7U0FDbEY7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsSUFBWTtRQUMzQixPQUFPLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQWRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICd0aW1pbmcnIH0pXHJcbmV4cG9ydCBjbGFzcyBUaW1pbmdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodGltZSkge1xyXG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lICUgNjApO1xyXG4gICAgICByZXR1cm4gYCR7dGhpcy5pbml0WmVybyhtaW51dGVzKX0ke21pbnV0ZXN9OiR7dGhpcy5pbml0WmVybyhzZWNvbmRzKX0ke3NlY29uZHN9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJzAwOjAwJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFplcm8odGltZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aW1lIDwgMTAgPyAnMCcgOiAnJztcclxuICB9XHJcbn1cclxuIl19