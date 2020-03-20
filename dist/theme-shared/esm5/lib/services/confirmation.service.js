/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Confirmation } from '../models/confirmation';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService() {
        this.confirmation$ = new ReplaySubject(1);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.info = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'info', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.success = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'success', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.warn = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'warning', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.error = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    function (message, title, options) {
        return this.show(message, title, 'error', options);
    };
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.show = /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    function (message, title, severity, options) {
        this.confirmation$.next({
            message: message,
            title: title,
            severity: severity || 'neutral',
            options: options,
        });
        this.status$ = new Subject();
        this.listenToEscape();
        return this.status$;
    };
    /**
     * @param {?=} status
     * @return {?}
     */
    ConfirmationService.prototype.clear = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        this.confirmation$.next();
        this.status$.next(status || Confirmation.Status.dismiss);
    };
    /**
     * @return {?}
     */
    ConfirmationService.prototype.listenToEscape = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Escape'; })))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.clear();
        }));
    };
    ConfirmationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ConfirmationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(); }, token: ConfirmationService, providedIn: "root" });
    return ConfirmationService;
}());
export { ConfirmationService };
if (false) {
    /** @type {?} */
    ConfirmationService.prototype.status$;
    /** @type {?} */
    ConfirmationService.prototype.confirmation$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQWMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHakU7SUFBQTtRQUdFLGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQTBCLENBQUMsQ0FBQyxDQUFDO0tBbUUvRDs7Ozs7OztJQWpFQyxrQ0FBSTs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELHFDQUFPOzs7Ozs7SUFBUCxVQUNFLE9BQWlDLEVBQ2pDLEtBQStCLEVBQy9CLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRUQsa0NBQUk7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFRCxtQ0FBSzs7Ozs7O0lBQUwsVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxrQ0FBSTs7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxTQUFBO1lBQ1AsS0FBSyxPQUFBO1lBQ0wsUUFBUSxFQUFFLFFBQVEsSUFBSSxTQUFTO1lBQy9CLE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsbUNBQUs7Ozs7SUFBTCxVQUFNLE1BQTRCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUFBLGlCQVVDO1FBVEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3ZCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLFVBQUMsR0FBa0IsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsRUFBQyxDQUM1RDthQUNBLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXJFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBTmxDO0NBNEVDLEFBdEVELElBc0VDO1NBckVZLG1CQUFtQjs7O0lBQzlCLHNDQUFzQzs7SUFDdEMsNENBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgc3RhdHVzJDogU3ViamVjdDxDb25maXJtYXRpb24uU3RhdHVzPjtcclxuICBjb25maXJtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8Q29uZmlybWF0aW9uLkRpYWxvZ0RhdGE+KDEpO1xyXG5cclxuICBpbmZvKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdpbmZvJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdzdWNjZXNzJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICd3YXJuaW5nJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnZXJyb3InLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNob3coXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgc2V2ZXJpdHk/OiBDb25maXJtYXRpb24uU2V2ZXJpdHksXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbiQubmV4dCh7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzZXZlcml0eTogc2V2ZXJpdHkgfHwgJ25ldXRyYWwnLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXR1cyQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgdGhpcy5saXN0ZW5Ub0VzY2FwZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzJDtcclxuICB9XHJcblxyXG4gIGNsZWFyKHN0YXR1cz86IENvbmZpcm1hdGlvbi5TdGF0dXMpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uJC5uZXh0KCk7XHJcbiAgICB0aGlzLnN0YXR1cyQubmV4dChzdGF0dXMgfHwgQ29uZmlybWF0aW9uLlN0YXR1cy5kaXNtaXNzKTtcclxuICB9XHJcblxyXG4gIGxpc3RlblRvRXNjYXBlKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5zdGF0dXMkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==