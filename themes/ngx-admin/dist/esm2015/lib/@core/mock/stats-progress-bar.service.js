/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-progress-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsProgressBarData } from '../data/stats-progress-bar';
export class StatsProgressBarService extends StatsProgressBarData {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
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
    }
    /**
     * @return {?}
     */
    getProgressInfoData() {
        return observableOf(this.progressInfoData);
    }
}
StatsProgressBarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsProgressBarService.prototype.progressInfoData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svc3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBZ0Isb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdoRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsb0JBQW9CO0lBRGpFOztRQUVVLHFCQUFnQixHQUFtQjtZQUN6QztnQkFDRSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixLQUFLLEVBQUUsTUFBTTtnQkFDYixjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztZQUNEO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixLQUFLLEVBQUUsR0FBRztnQkFDVixjQUFjLEVBQUUsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztTQUNGLENBQUM7SUFLSixDQUFDOzs7O0lBSEMsbUJBQW1CO1FBQ2pCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXpCRixVQUFVOzs7Ozs7O0lBRVQsbURBbUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NJbmZvLCBTdGF0c1Byb2dyZXNzQmFyRGF0YSB9IGZyb20gJy4uL2RhdGEvc3RhdHMtcHJvZ3Jlc3MtYmFyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXRzUHJvZ3Jlc3NCYXJTZXJ2aWNlIGV4dGVuZHMgU3RhdHNQcm9ncmVzc0JhckRhdGEge1xyXG4gIHByaXZhdGUgcHJvZ3Jlc3NJbmZvRGF0YTogUHJvZ3Jlc3NJbmZvW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnVG9kYXnigJlzIFByb2ZpdCcsXHJcbiAgICAgIHZhbHVlOiA1NzI5MDAsXHJcbiAgICAgIGFjdGl2ZVByb2dyZXNzOiA3MCxcclxuICAgICAgZGVzY3JpcHRpb246ICdCZXR0ZXIgdGhhbiBsYXN0IHdlZWsgKDcwJSknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdOZXcgT3JkZXJzJyxcclxuICAgICAgdmFsdWU6IDYzNzgsXHJcbiAgICAgIGFjdGl2ZVByb2dyZXNzOiAzMCxcclxuICAgICAgZGVzY3JpcHRpb246ICdCZXR0ZXIgdGhhbiBsYXN0IHdlZWsgKDMwJSknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdOZXcgQ29tbWVudHMnLFxyXG4gICAgICB2YWx1ZTogMjAwLFxyXG4gICAgICBhY3RpdmVQcm9ncmVzczogNTUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQmV0dGVyIHRoYW4gbGFzdCB3ZWVrICg1NSUpJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgZ2V0UHJvZ3Jlc3NJbmZvRGF0YSgpOiBPYnNlcnZhYmxlPFByb2dyZXNzSW5mb1tdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMucHJvZ3Jlc3NJbmZvRGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==