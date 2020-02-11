/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { LocalizationService } from '@abp/ng.core';
import { Toaster } from '../../models/toaster';
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(confirmationService, localizationService) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.localizationService = localizationService;
        this.confirm = Toaster.Status.confirm;
        this.reject = Toaster.Status.reject;
        this.dismiss = Toaster.Status.dismiss;
        this.visible = false;
        this.confirmationService.confirmation$.subscribe((/**
         * @param {?} confirmation
         * @return {?}
         */
        function (confirmation) {
            _this.data = confirmation;
            _this.visible = !!confirmation;
        }));
    }
    Object.defineProperty(ConfirmationComponent.prototype, "iconClass", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.data.severity) {
                case 'info':
                    return 'fa-info-circle';
                case 'success':
                    return 'fa-check-circle';
                case 'warning':
                    return 'fa-exclamation-triangle';
                case 'error':
                    return 'fa-times-circle';
                default:
                    return 'fa-question-circle';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} status
     * @return {?}
     */
    ConfirmationComponent.prototype.close = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.confirmationService.clear(status);
    };
    ConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-confirmation',
                    template: "<div class=\"confirmation\" *ngIf=\"visible\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1 class=\"title\" *ngIf=\"data.title\">\r\n        {{ data.title | abpLocalization: data.options?.titleLocalizationParams }}\r\n      </h1>\r\n      <p class=\"message\" *ngIf=\"data.message\">\r\n        {{ data.message | abpLocalization: data.options?.messageLocalizationParams }}\r\n      </p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      >\r\n        {{ data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      >\r\n        {{ data.options?.yesText || 'AbpUi::Yes' | abpLocalization }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    ConfirmationComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: LocalizationService }
    ]; };
    return ConfirmationComponent;
}());
export { ConfirmationComponent };
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.confirm;
    /** @type {?} */
    ConfirmationComponent.prototype.reject;
    /** @type {?} */
    ConfirmationComponent.prototype.dismiss;
    /** @type {?} */
    ConfirmationComponent.prototype.visible;
    /** @type {?} */
    ConfirmationComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ConfirmationComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ConfirmationComponent.prototype.localizationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0M7SUE2QkUsK0JBQ1UsbUJBQXdDLEVBQ3hDLG1CQUF3QztRQUZsRCxpQkFRQztRQVBTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQXpCbEQsWUFBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMvQixZQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFakMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQXVCZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLFlBQVk7WUFDM0QsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXZCRCxzQkFBSSw0Q0FBUzs7OztRQUFiO1lBQ0UsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsS0FBSyxNQUFNO29CQUNULE9BQU8sZ0JBQWdCLENBQUM7Z0JBQzFCLEtBQUssU0FBUztvQkFDWixPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixLQUFLLFNBQVM7b0JBQ1osT0FBTyx5QkFBeUIsQ0FBQztnQkFDbkMsS0FBSyxPQUFPO29CQUNWLE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCO29CQUNFLE9BQU8sb0JBQW9CLENBQUM7YUFDL0I7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFZRCxxQ0FBSzs7OztJQUFMLFVBQU0sTUFBc0I7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGcwQ0FBNEM7O2lCQUU3Qzs7OztnQkFUUSxtQkFBbUI7Z0JBRW5CLG1CQUFtQjs7SUE2QzVCLDRCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1kscUJBQXFCOzs7SUFDaEMsd0NBQWlDOztJQUNqQyx1Q0FBK0I7O0lBQy9CLHdDQUFpQzs7SUFFakMsd0NBQWdCOztJQUVoQixxQ0FBOEI7Ozs7O0lBa0I1QixvREFBZ0Q7Ozs7O0lBQ2hELG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9hc3Rlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IHtcclxuICBjb25maXJtID0gVG9hc3Rlci5TdGF0dXMuY29uZmlybTtcclxuICByZWplY3QgPSBUb2FzdGVyLlN0YXR1cy5yZWplY3Q7XHJcbiAgZGlzbWlzcyA9IFRvYXN0ZXIuU3RhdHVzLmRpc21pc3M7XHJcblxyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgZGF0YTogQ29uZmlybWF0aW9uLkRpYWxvZ0RhdGE7XHJcblxyXG4gIGdldCBpY29uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy5kYXRhLnNldmVyaXR5KSB7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHJldHVybiAnZmEtaW5mby1jaXJjbGUnO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWNoZWNrLWNpcmNsZSc7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHJldHVybiAnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgcmV0dXJuICdmYS10aW1lcy1jaXJjbGUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnZmEtcXVlc3Rpb24tY2lyY2xlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25TZXJ2aWNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKGNvbmZpcm1hdGlvbiA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YSA9IGNvbmZpcm1hdGlvbjtcclxuICAgICAgdGhpcy52aXNpYmxlID0gISFjb25maXJtYXRpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHN0YXR1czogVG9hc3Rlci5TdGF0dXMpIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jbGVhcihzdGF0dXMpO1xyXG4gIH1cclxufVxyXG4iXX0=