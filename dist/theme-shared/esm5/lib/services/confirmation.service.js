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
var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.containerComponentRef = _this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent));
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
     * @param {?=} status
     * @return {?}
     */
    ConfirmationService.prototype.clear = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        if (status === void 0) { status = Confirmation.Status.dismiss; }
        this.confirmation$.next();
        this.status$.next(status);
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
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.contentProjectionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFVLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFFMUY7SUFPRSw2QkFBb0Isd0JBQWtEO1FBQWxELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFKdEUsa0JBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBMEIsQ0FBQyxDQUFDLENBQUM7SUFJVyxDQUFDOzs7OztJQUVsRSwwQ0FBWTs7OztJQUFwQjtRQUFBLGlCQVFDO1FBUEMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLHdCQUF3QixDQUFDLGNBQWMsQ0FDdkUsbUJBQW1CLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FDakUsQ0FBQztZQUVGLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvRCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7Ozs7O0lBRUQsa0NBQUk7Ozs7OztJQUFKLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7Ozs7SUFFRCxxQ0FBTzs7Ozs7O0lBQVAsVUFDRSxPQUFpQyxFQUNqQyxLQUErQixFQUMvQixPQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7OztJQUVELGtDQUFJOzs7Ozs7SUFBSixVQUNFLE9BQWlDLEVBQ2pDLEtBQStCLEVBQy9CLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRUQsbUNBQUs7Ozs7OztJQUFMLFVBQ0UsT0FBaUMsRUFDakMsS0FBK0IsRUFDL0IsT0FBdUM7UUFFdkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBRUQsa0NBQUk7Ozs7Ozs7SUFBSixVQUNFLE9BQWlDLEVBQ2pDLEtBQStCLEVBQy9CLFFBQWdDLEVBQ2hDLE9BQXVDO1FBRXZDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCO1lBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sU0FBQTtZQUNQLEtBQUssT0FBQTtZQUNMLFFBQVEsRUFBRSxRQUFRLElBQUksU0FBUztZQUMvQixPQUFPLFNBQUE7U0FDUixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxNQUF5RDtRQUF6RCx1QkFBQSxFQUFBLFNBQThCLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sNENBQWM7Ozs7SUFBdEI7UUFBQSxpQkFVQztRQVRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ3pCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUN2QixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWtCLElBQUssT0FBQSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQTNCLENBQTJCLEVBQUMsQ0FDNUQ7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1YsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkFyRkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIakIsd0JBQXdCOzs7OEJBSnpDO0NBNkZDLEFBdEZELElBc0ZDO1NBckZZLG1CQUFtQjs7O0lBQzlCLHNDQUFzQzs7SUFDdEMsNENBQThEOzs7OztJQUU5RCxvREFBbUU7Ozs7O0lBRXZELHVEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZywgQ29udGVudFByb2plY3Rpb25TZXJ2aWNlLCBQUk9KRUNUSU9OX1NUUkFURUdZIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uU2VydmljZSB7XHJcbiAgc3RhdHVzJDogU3ViamVjdDxDb25maXJtYXRpb24uU3RhdHVzPjtcclxuICBjb25maXJtYXRpb24kID0gbmV3IFJlcGxheVN1YmplY3Q8Q29uZmlybWF0aW9uLkRpYWxvZ0RhdGE+KDEpO1xyXG5cclxuICBwcml2YXRlIGNvbnRhaW5lckNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPENvbmZpcm1hdGlvbkNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVudFByb2plY3Rpb25TZXJ2aWNlOiBDb250ZW50UHJvamVjdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0Q29udGFpbmVyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmID0gdGhpcy5jb250ZW50UHJvamVjdGlvblNlcnZpY2UucHJvamVjdENvbnRlbnQoXHJcbiAgICAgICAgUFJPSkVDVElPTl9TVFJBVEVHWS5BcHBlbmRDb21wb25lbnRUb0JvZHkoQ29uZmlybWF0aW9uQ29tcG9uZW50KSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGFpbmVyQ29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnaW5mbycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc3VjY2VzcyhcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnc3VjY2VzcycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgd2FybihcclxuICAgIG1lc3NhZ2U6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBvcHRpb25zPzogUGFydGlhbDxDb25maXJtYXRpb24uT3B0aW9ucz4sXHJcbiAgKTogT2JzZXJ2YWJsZTxDb25maXJtYXRpb24uU3RhdHVzPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93KG1lc3NhZ2UsIHRpdGxlLCAnd2FybmluZycsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3IoXHJcbiAgICBtZXNzYWdlOiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvdyhtZXNzYWdlLCB0aXRsZSwgJ2Vycm9yJywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzaG93KFxyXG4gICAgbWVzc2FnZTogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU6IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHNldmVyaXR5PzogQ29uZmlybWF0aW9uLlNldmVyaXR5LFxyXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8Q29uZmlybWF0aW9uLk9wdGlvbnM+LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckNvbXBvbmVudFJlZikgdGhpcy5zZXRDb250YWluZXIoKTtcclxuXHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvbiQubmV4dCh7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBzZXZlcml0eTogc2V2ZXJpdHkgfHwgJ25ldXRyYWwnLFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXR1cyQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgdGhpcy5saXN0ZW5Ub0VzY2FwZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzJDtcclxuICB9XHJcblxyXG4gIGNsZWFyKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cyA9IENvbmZpcm1hdGlvbi5TdGF0dXMuZGlzbWlzcykge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb24kLm5leHQoKTtcclxuICAgIHRoaXMuc3RhdHVzJC5uZXh0KHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvRXNjYXBlKCkge1xyXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5dXAnKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5zdGF0dXMkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==