/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/append-content.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { inject, InjectionToken } from '@angular/core';
import styles from '../constants/styles';
import { chartJsLoaded$ } from '../utils/widget-utils';
/** @type {?} */
export var THEME_SHARED_APPEND_CONTENT = new InjectionToken('THEME_SHARED_APPEND_CONTENT', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var domInsertion = inject(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        import('chart.js').then((/**
         * @return {?}
         */
        function () { return chartJsLoaded$.next(true); }));
    }),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kLWNvbnRlbnQudG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi90b2tlbnMvYXBwZW5kLWNvbnRlbnQudG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxNQUFNLE1BQU0scUJBQXFCLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUV2RCxNQUFNLEtBQU8sMkJBQTJCLEdBQUcsSUFBSSxjQUFjLENBQU8sNkJBQTZCLEVBQUU7SUFDakcsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTzs7O0lBQUU7O1lBQ0QsWUFBWSxHQUF3QixNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFFckUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJOzs7UUFBQyxjQUFNLE9BQUEsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQzNELENBQUMsQ0FBQTtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05URU5UX1NUUkFURUdZLCBEb21JbnNlcnRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgaW5qZWN0LCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2NvbnN0YW50cy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBjaGFydEpzTG9hZGVkJCB9IGZyb20gJy4uL3V0aWxzL3dpZGdldC11dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfU0hBUkVEX0FQUEVORF9DT05URU5UID0gbmV3IEluamVjdGlvblRva2VuPHZvaWQ+KCdUSEVNRV9TSEFSRURfQVBQRU5EX0NPTlRFTlQnLCB7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG4gIGZhY3Rvcnk6ICgpID0+IHtcclxuICAgIGNvbnN0IGRvbUluc2VydGlvbjogRG9tSW5zZXJ0aW9uU2VydmljZSA9IGluamVjdChEb21JbnNlcnRpb25TZXJ2aWNlKTtcclxuXHJcbiAgICBkb21JbnNlcnRpb24uaW5zZXJ0Q29udGVudChDT05URU5UX1NUUkFURUdZLkFwcGVuZFN0eWxlVG9IZWFkKHN0eWxlcykpO1xyXG5cclxuICAgIGltcG9ydCgnY2hhcnQuanMnKS50aGVuKCgpID0+IGNoYXJ0SnNMb2FkZWQkLm5leHQodHJ1ZSkpO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=