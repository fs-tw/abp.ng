/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentProjectionService, PROJECTION_STRATEGY } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { fromEvent, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';
import { Confirmation } from '../models/confirmation';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class ConfirmationService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
        this.clear = (/**
         * @param {?=} status
         * @return {?}
         */
        (status = Confirmation.Status.dismiss) => {
            this.confirmation$.next();
            this.status$.next(status);
        });
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
            confirmation$: this.confirmation$,
            clear: this.clear,
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
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
    /** @type {?} */
    ConfirmationService.prototype.clear;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.contentProjectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBVSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRixPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHdEQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQVc5QixZQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQVR0RSxrQkFBYSxHQUFHLElBQUksYUFBYSxDQUEwQixDQUFDLENBQUMsQ0FBQztRQUk5RCxVQUFLOzs7O1FBQUcsQ0FBQyxTQUE4QixZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDO0lBRXVFLENBQUM7Ozs7O0lBRWxFLFlBQVk7UUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQ3ZFLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFO1lBQy9ELGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUNILENBQUM7UUFFRixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0QsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FDTCxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FDRixPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7OztJQUVELEtBQUssQ0FDSCxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxJQUFJLENBQ0YsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTztZQUNQLEtBQUs7WUFDTCxRQUFRLEVBQUUsUUFBUSxJQUFJLFNBQVM7WUFDL0IsT0FBTztTQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN6QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDdkIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7O1FBQUMsQ0FBQyxHQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQXhGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUGpCLHdCQUF3Qjs7Ozs7SUFTdkMsc0NBQXNDOztJQUN0Qyw0Q0FBOEQ7Ozs7O0lBRTlELG9EQUFtRTs7SUFFbkUsb0NBR0U7Ozs7O0lBRVUsdURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBDb250ZW50UHJvamVjdGlvblNlcnZpY2UsIFBST0pFQ1RJT05fU1RSQVRFR1kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25TZXJ2aWNlIHtcclxuICBzdGF0dXMkOiBTdWJqZWN0PENvbmZpcm1hdGlvbi5TdGF0dXM+O1xyXG4gIGNvbmZpcm1hdGlvbiQgPSBuZXcgUmVwbGF5U3ViamVjdDxDb25maXJtYXRpb24uRGlhbG9nRGF0YT4oMSk7XHJcblxyXG4gIHByaXZhdGUgY29udGFpbmVyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q29uZmlybWF0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgY2xlYXIgPSAoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzID0gQ29uZmlybWF0aW9uLlN0YXR1cy5kaXNtaXNzKSA9PiB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbiQubmV4dCgpO1xyXG4gICAgdGhpcy5zdGF0dXMkLm5leHQoc3RhdHVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlbnRQcm9qZWN0aW9uU2VydmljZTogQ29udGVudFByb2plY3Rpb25TZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIHNldENvbnRhaW5lcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmID0gdGhpcy5jb250ZW50UHJvamVjdGlvblNlcnZpY2UucHJvamVjdENvbnRlbnQoXHJcbiAgICAgIFBST0pFQ1RJT05fU1RSQVRFR1kuQXBwZW5kQ29tcG9uZW50VG9Cb2R5KENvbmZpcm1hdGlvbkNvbXBvbmVudCwge1xyXG4gICAgICAgIGNvbmZpcm1hdGlvbiQ6IHRoaXMuY29uZmlybWF0aW9uJCxcclxuICAgICAgICBjbGVhcjogdGhpcy5jbGVhcixcclxuICAgICAgfSksXHJcbiAgICApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGluZm8oXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2luZm8nLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHN1Y2Nlc3MoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ3N1Y2Nlc3MnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHdhcm4oXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ3dhcm5pbmcnLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGVycm9yKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdlcnJvcicsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBzZXZlcml0eT86IENvbmZpcm1hdGlvbi5TZXZlcml0eSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIGlmICghdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYpIHRoaXMuc2V0Q29udGFpbmVyKCk7XHJcblxyXG4gICAgdGhpcy5jb25maXJtYXRpb24kLm5leHQoe1xyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgc2V2ZXJpdHk6IHNldmVyaXR5IHx8ICduZXV0cmFsJyxcclxuICAgICAgb3B0aW9ucyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0dXMkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIHRoaXMubGlzdGVuVG9Fc2NhcGUoKTtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvRXNjYXBlKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5zdGF0dXMkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==