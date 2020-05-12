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
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(contentProjectionService) {
        var _this = this;
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
        this.clear = (/**
         * @param {?=} status
         * @return {?}
         */
        function (status) {
            if (status === void 0) { status = Confirmation.Status.dismiss; }
            _this.confirmation$.next();
            _this.status$.next(status);
        });
    }
    /**
     * @private
     * @return {?}
     */
    ConfirmationService.prototype.setContainer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
            confirmation$: this.confirmation$,
            clear: this.clear,
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.containerComponentRef.changeDetectorRef.detectChanges();
        }), 0);
    };
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
        if (!this.containerComponentRef)
            this.setContainer();
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
     * @private
     * @return {?}
     */
    ConfirmationService.prototype.listenToEscape = /**
     * @private
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
    /** @nocollapse */
    ConfirmationService.ctorParameters = function () { return [
        { type: ContentProjectionService }
    ]; };
    /** @nocollapse */ ConfirmationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(i0.ɵɵinject(i1.ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
    return ConfirmationService;
}());
export { ConfirmationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBVSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRixPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFFdEQ7SUFZRSw2QkFBb0Isd0JBQWtEO1FBQXRFLGlCQUEwRTtRQUF0RCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBVHRFLGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQTBCLENBQUMsQ0FBQyxDQUFDO1FBSTlELFVBQUs7Ozs7UUFBRyxVQUFDLE1BQXlEO1lBQXpELHVCQUFBLEVBQUEsU0FBOEIsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQ2hFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDO0lBRXVFLENBQUM7Ozs7O0lBRWxFLDBDQUFZOzs7O0lBQXBCO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FDdkUsbUJBQW1CLENBQUMscUJBQXFCLENBQUMscUJBQXFCLEVBQUU7WUFDL0QsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQ0gsQ0FBQztRQUVGLFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9ELENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBSTs7Ozs7O0lBQUosVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELHFDQUFPOzs7Ozs7SUFBUCxVQUNFLE9BQWlDLEVBQ2pDLEtBQStCLEVBQy9CLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRUQsa0NBQUk7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFRCxtQ0FBSzs7Ozs7O0lBQUwsVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxrQ0FBSTs7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsUUFBZ0MsRUFDaEMsT0FBdUM7UUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsT0FBTyxTQUFBO1lBQ1AsS0FBSyxPQUFBO1lBQ0wsUUFBUSxFQUFFLFFBQVEsSUFBSSxTQUFTO1lBQy9CLE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sNENBQWM7Ozs7SUFBdEI7UUFBQSxpQkFVQztRQVRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3pCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUN2QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWtCLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQTNCLENBQTJCLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkF4RkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFQakIsd0JBQXdCOzs7OEJBQXpDO0NBZ0dDLEFBekZELElBeUZDO1NBeEZZLG1CQUFtQjs7O0lBQzlCLHNDQUFzQzs7SUFDdEMsNENBQThEOzs7OztJQUU5RCxvREFBbUU7O0lBRW5FLG9DQUdFOzs7OztJQUVVLHVEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZywgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlLCBQUk9KRUNUSU9OX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpcm1hdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgc3RhdHVzJDogU3ViamVjdDxDb25maXJtYXRpb24uU3RhdHVzPjtcclxuICBjb25maXJtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8Q29uZmlybWF0aW9uLkRpYWxvZ0RhdGE+KDEpO1xyXG5cclxuICBwcml2YXRlIGNvbnRhaW5lckNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbmZpcm1hdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIGNsZWFyID0gKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cyA9IENvbmZpcm1hdGlvbi5TdGF0dXMuZGlzbWlzcykgPT4ge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb24kLm5leHQoKTtcclxuICAgIHRoaXMuc3RhdHVzJC5uZXh0KHN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZW50UHJvamVjdGlvblNlcnZpY2U6IENvbnRlbnRQcm9qZWN0aW9uU2VydmljZSkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb250YWluZXIoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZiA9IHRoaXMuY29udGVudFByb2plY3Rpb25TZXJ2aWNlLnByb2plY3RDb250ZW50KFxyXG4gICAgICBQUk9KRUNUSU9OX1NUUkFURUdZLkFwcGVuZENvbXBvbmVudFRvQm9keShDb25maXJtYXRpb25Db21wb25lbnQsIHtcclxuICAgICAgICBjb25maXJtYXRpb24kOiB0aGlzLmNvbmZpcm1hdGlvbiQsXHJcbiAgICAgICAgY2xlYXI6IHRoaXMuY2xlYXIsXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXJDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBpbmZvKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdpbmZvJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICdzdWNjZXNzJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3YXJuKFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPENvbmZpcm1hdGlvbi5PcHRpb25zPixcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIHJldHVybiB0aGlzLnNob3cobWVzc2FnZSwgdGl0bGUsICd3YXJuaW5nJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnZXJyb3InLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNob3coXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgc2V2ZXJpdHk/OiBDb25maXJtYXRpb24uU2V2ZXJpdHksXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmKSB0aGlzLnNldENvbnRhaW5lcigpO1xyXG5cclxuICAgIHRoaXMuY29uZmlybWF0aW9uJC5uZXh0KHtcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHNldmVyaXR5OiBzZXZlcml0eSB8fCAnbmV1dHJhbCcsXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdHVzJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLmxpc3RlblRvRXNjYXBlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub0VzY2FwZSgpIHtcclxuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleXVwJylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuc3RhdHVzJCksXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDE1MCksXHJcbiAgICAgICAgZmlsdGVyKChrZXk6IEtleWJvYXJkRXZlbnQpID0+IGtleSAmJiBrZXkua2V5ID09PSAnRXNjYXBlJyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=