/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AbstractToaster } from '../abstracts/toaster';
import { MessageService } from 'primeng/components/common/messageservice';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "primeng/components/common/messageservice";
var ConfirmationService = /** @class */ (function (_super) {
    tslib_1.__extends(ConfirmationService, _super);
    function ConfirmationService(messageService) {
        var _this = _super.call(this, messageService) || this;
        _this.messageService = messageService;
        _this.key = 'abpConfirmation';
        _this.sticky = true;
        _this.destroy$ = new Subject();
        return _this;
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    ConfirmationService.prototype.show = /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    function (message, title, severity, options) {
        this.listenToEscape();
        return _super.prototype.show.call(this, message, title, severity, options);
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
        _super.prototype.clear.call(this, status);
        this.destroy$.next();
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
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((/**
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
        { type: MessageService }
    ]; };
    /** @nocollapse */ ConfirmationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(i0.ɵɵinject(i1.MessageService)); }, token: ConfirmationService, providedIn: "root" });
    return ConfirmationService;
}(AbstractToaster));
export { ConfirmationService };
if (false) {
    /** @type {?} */
    ConfirmationService.prototype.key;
    /** @type {?} */
    ConfirmationService.prototype.sticky;
    /** @type {?} */
    ConfirmationService.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    ConfirmationService.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUdqRTtJQUN5QywrQ0FBcUM7SUFPNUUsNkJBQXNCLGNBQThCO1FBQXBELFlBQ0Usa0JBQU0sY0FBYyxDQUFDLFNBQ3RCO1FBRnFCLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU5wRCxTQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFFeEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUVkLGNBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOztJQUl6QixDQUFDOzs7Ozs7OztJQUVELGtDQUFJOzs7Ozs7O0lBQUosVUFDRSxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQTBCLEVBQzFCLE9BQThCO1FBRTlCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixPQUFPLGlCQUFNLElBQUksWUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELG1DQUFLOzs7O0lBQUwsVUFBTSxNQUF1QjtRQUMzQixpQkFBTSxLQUFLLFlBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQUEsaUJBVUM7UUFUQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUN6QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7O1FBQUMsVUFBQyxHQUFrQixJQUFLLE9BQUEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUEzQixDQUEyQixFQUFDLENBQzVEO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQztZQUNWLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBdkNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLGNBQWM7Ozs4QkFIdkI7Q0FnREMsQUF4Q0QsQ0FDeUMsZUFBZSxHQXVDdkQ7U0F2Q1ksbUJBQW1COzs7SUFDOUIsa0NBQXdCOztJQUV4QixxQ0FBYzs7SUFFZCx1Q0FBeUI7Ozs7O0lBRWIsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFRvYXN0ZXIgfSBmcm9tICcuLi9hYnN0cmFjdHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvY29tcG9uZW50cy9jb21tb24vbWVzc2FnZXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL21vZGVscy90b2FzdGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25TZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RUb2FzdGVyPENvbmZpcm1hdGlvbi5PcHRpb25zPiB7XHJcbiAga2V5ID0gJ2FicENvbmZpcm1hdGlvbic7XHJcblxyXG4gIHN0aWNreSA9IHRydWU7XHJcblxyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhcclxuICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBzZXZlcml0eTogVG9hc3Rlci5TZXZlcml0eSxcclxuICAgIG9wdGlvbnM/OiBDb25maXJtYXRpb24uT3B0aW9ucyxcclxuICApOiBPYnNlcnZhYmxlPFRvYXN0ZXIuU3RhdHVzPiB7XHJcbiAgICB0aGlzLmxpc3RlblRvRXNjYXBlKCk7XHJcblxyXG4gICAgcmV0dXJuIHN1cGVyLnNob3cobWVzc2FnZSwgdGl0bGUsIHNldmVyaXR5LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKHN0YXR1cz86IFRvYXN0ZXIuU3RhdHVzKSB7XHJcbiAgICBzdXBlci5jbGVhcihzdGF0dXMpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuVG9Fc2NhcGUoKSB7XHJcbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwKSxcclxuICAgICAgICBmaWx0ZXIoKGtleTogS2V5Ym9hcmRFdmVudCkgPT4ga2V5ICYmIGtleS5rZXkgPT09ICdFc2NhcGUnKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==