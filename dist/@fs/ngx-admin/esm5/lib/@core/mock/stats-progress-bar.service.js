/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-progress-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsProgressBarData } from '../data/stats-progress-bar';
var StatsProgressBarService = /** @class */ (function (_super) {
    tslib_1.__extends(StatsProgressBarService, _super);
    function StatsProgressBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    StatsProgressBarService.prototype.getProgressInfoData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.progressInfoData);
    };
    StatsProgressBarService.decorators = [
        { type: Injectable }
    ];
    return StatsProgressBarService;
}(StatsProgressBarData));
export { StatsProgressBarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsProgressBarService.prototype.progressInfoData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svc3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQWdCLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEY7SUFDNkMsbURBQW9CO0lBRGpFO1FBQUEscUVBMEJDO1FBeEJTLHNCQUFnQixHQUFtQjtZQUN6QztnQkFDRSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsTUFBTTtnQkFDYixjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixLQUFLLEVBQUUsR0FBRztnQkFDVixjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztTQUNGLENBQUM7O0lBS0osQ0FBQzs7OztJQUhDLHFEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBekJGLFVBQVU7O0lBMEJYLDhCQUFDO0NBQUEsQUExQkQsQ0FDNkMsb0JBQW9CLEdBeUJoRTtTQXpCWSx1QkFBdUI7Ozs7OztJQUNsQyxtREFtQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0luZm8sIFN0YXRzUHJvZ3Jlc3NCYXJEYXRhIH0gZnJvbSAnLi4vZGF0YS9zdGF0cy1wcm9ncmVzcy1iYXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdHNQcm9ncmVzc0JhclNlcnZpY2UgZXh0ZW5kcyBTdGF0c1Byb2dyZXNzQmFyRGF0YSB7XHJcbiAgcHJpdmF0ZSBwcm9ncmVzc0luZm9EYXRhOiBQcm9ncmVzc0luZm9bXSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdUb2RheeKAmXMgUHJvZml0JyxcclxuICAgICAgdmFsdWU6IDU3MjkwMCxcclxuICAgICAgYWN0aXZlUHJvZ3Jlc3M6IDcwLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0JldHRlciB0aGFuIGxhc3Qgd2VlayAoNzAlKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ05ldyBPcmRlcnMnLFxyXG4gICAgICB2YWx1ZTogNjM3OCxcclxuICAgICAgYWN0aXZlUHJvZ3Jlc3M6IDMwLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0JldHRlciB0aGFuIGxhc3Qgd2VlayAoMzAlKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ05ldyBDb21tZW50cycsXHJcbiAgICAgIHZhbHVlOiAyMDAsXHJcbiAgICAgIGFjdGl2ZVByb2dyZXNzOiA1NSxcclxuICAgICAgZGVzY3JpcHRpb246ICdCZXR0ZXIgdGhhbiBsYXN0IHdlZWsgKDU1JSknLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBnZXRQcm9ncmVzc0luZm9EYXRhKCk6IE9ic2VydmFibGU8UHJvZ3Jlc3NJbmZvW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5wcm9ncmVzc0luZm9EYXRhKTtcclxuICB9XHJcbn1cclxuIl19