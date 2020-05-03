/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Confirmation } from '../models/confirmation';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ConfirmationService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent));
            this.containerComponentRef.changeDetectorRef.detectChanges();
        }), 0);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        if (!this.containerComponentRef)
            this.setContainer();
        this.confirmation$.next({
            message,
            title,
            severity: severity || 'neutral',
            options,
        });
        this.status$ = new Subject();
        this.listenToEscape();
        return this.status$;
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status = Confirmation.Status.dismiss) {
        this.confirmation$.next();
        this.status$.next(status);
    }
    /**
     * @private
     * @return {?}
     */
    listenToEscape() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.clear();
        }));
    }
}
ConfirmationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ConfirmationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfirmationService.prototype.status$;
    /** @type {?} */
    ConfirmationService.prototype.confirmation$;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.contentProjectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFVLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHMUYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQU05QixZQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUp0RSxrQkFBYSxHQUFHLElBQUksYUFBYSxDQUEwQixDQUFDLENBQUMsQ0FBQztJQUlXLENBQUM7Ozs7O0lBRWxFLFlBQVk7UUFDbEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQ3ZFLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLENBQ2pFLENBQUM7WUFFRixJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0QsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FDTCxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7OztJQUVELEtBQUssQ0FDSCxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTztZQUNQLEtBQUs7WUFDTCxRQUFRLEVBQUUsUUFBUSxJQUFJLFNBQVM7WUFDL0IsT0FBTztTQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLFNBQThCLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN6QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDdkIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7O1FBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQXJGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSGpCLHdCQUF3Qjs7Ozs7SUFLdkMsc0NBQXNDOztJQUN0Qyw0Q0FBOEQ7Ozs7O0lBRTlELG9EQUFtRTs7Ozs7SUFFdkQsdURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlnLCBDb250ZW50UHJvamVjdGlvblNlcnZpY2UsIFBST0pFQ1RJT05fU1RSQVRFR1kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25TZXJ2aWNlIHtcclxuICBzdGF0dXMkOiBTdWJqZWN0PENvbmZpcm1hdGlvbi5TdGF0dXM+O1xyXG4gIGNvbmZpcm1hdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDb25maXJtYXRpb24uRGlhbG9nRGF0YT4oMSk7XHJcblxyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29uZmlybWF0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50UHJvamVjdGlvblNlcnZpY2U6IENvbnRlbnRQcm9qZWN0aW9uU2VydmljZSkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYgPSB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uU2VydmljZS5wcm9qZWN0Q29udGVudChcclxuICAgICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShDb25maXJtYXRpb25Db21wb25lbnQpLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBpbmZvKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdpbmZvJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdzdWNjZXNzJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICd3YXJuaW5nJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnZXJyb3InLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNob3coXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgc2V2ZXJpdHk/OiBDb25maXJtYXRpb24uU2V2ZXJpdHksXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmKSB0aGlzLnNldENvbnRhaW5lcigpO1xyXG5cclxuICAgIHRoaXMuY29uZmlybWF0aW9uJC5uZXh0KHtcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHNldmVyaXR5OiBzZXZlcml0eSB8fCAnbmV1dHJhbCcsXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdHVzJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLmxpc3RlblRvRXNjYXBlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMkO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzID0gQ29uZmlybWF0aW9uLlN0YXR1cy5kaXNtaXNzKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbiQubmV4dCgpO1xyXG4gICAgdGhpcy5zdGF0dXMkLm5leHQoc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9Fc2NhcGUoKSB7XHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnN0YXR1cyQpLFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTApLFxyXG4gICAgICAgIGZpbHRlcigoa2V5OiBLZXlib2FyZEV2ZW50KSA9PiBrZXkgJiYga2V5LmtleSA9PT0gJ0VzY2FwZScpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXyA9PiB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19