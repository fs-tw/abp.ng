/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent, Subject, ReplaySubject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import { Toaster } from '../models/toaster';
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
        this.status$.next(status || Toaster.Status.dismiss);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHNUM7SUFBQTtRQUdFLGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQTBCLENBQUMsQ0FBQyxDQUFDO0tBbUUvRDs7Ozs7OztJQWpFQyxrQ0FBSTs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELHFDQUFPOzs7Ozs7SUFBUCxVQUNFLE9BQWlDLEVBQ2pDLEtBQStCLEVBQy9CLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRUQsa0NBQUk7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFRCxtQ0FBSzs7Ozs7O0lBQUwsVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxrQ0FBSTs7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBMkIsRUFDM0IsT0FBdUM7UUFFdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxTQUFBO1lBQ1AsS0FBSyxPQUFBO1lBQ0wsUUFBUSxFQUFFLFFBQVEsSUFBSSxTQUFTO1lBQy9CLE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsbUNBQUs7Ozs7SUFBTCxVQUFNLE1BQXVCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUFBLGlCQVVDO1FBVEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3ZCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTTs7OztRQUFDLFVBQUMsR0FBa0IsSUFBSyxPQUFBLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsRUFBQyxDQUM1RDthQUNBLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7O2dCQXJFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBUGxDO0NBNkVDLEFBdEVELElBc0VDO1NBckVZLG1CQUFtQjs7O0lBQzlCLHNDQUFpQzs7SUFDakMsNENBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi9tb2RlbHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgc3RhdHVzJDogU3ViamVjdDxUb2FzdGVyLlN0YXR1cz47XHJcbiAgY29uZmlybWF0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENvbmZpcm1hdGlvbi5EaWFsb2dEYXRhPigxKTtcclxuXHJcbiAgaW5mbyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxUb2FzdGVyLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2luZm8nLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHN1Y2Nlc3MoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8VG9hc3Rlci5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdzdWNjZXNzJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPFRvYXN0ZXIuU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnd2FybmluZycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8VG9hc3Rlci5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdlcnJvcicsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBzZXZlcml0eT86IFRvYXN0ZXIuU2V2ZXJpdHksXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxUb2FzdGVyLlN0YXR1cz4ge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb24kLm5leHQoe1xyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgc2V2ZXJpdHk6IHNldmVyaXR5IHx8ICduZXV0cmFsJyxcclxuICAgICAgb3B0aW9ucyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0dXMkID0gbmV3IFN1YmplY3QoKTtcclxuICAgIHRoaXMubGlzdGVuVG9Fc2NhcGUoKTtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyQ7XHJcbiAgfVxyXG5cclxuICBjbGVhcihzdGF0dXM/OiBUb2FzdGVyLlN0YXR1cykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb24kLm5leHQoKTtcclxuICAgIHRoaXMuc3RhdHVzJC5uZXh0KHN0YXR1cyB8fCBUb2FzdGVyLlN0YXR1cy5kaXNtaXNzKTtcclxuICB9XHJcblxyXG4gIGxpc3RlblRvRXNjYXBlKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5zdGF0dXMkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==