/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Toaster } from '../../models/toaster';
import { ToasterService } from '../../services/toaster.service';
import { LocalizationService } from '@abp/ng.core';
import snq from 'snq';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    Object.defineProperty(ToastComponent.prototype, "severityClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.toast || !this.toast.severity)
                return '';
            return "toast-" + this.toast.severity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastComponent.prototype, "iconClass", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.toast.severity) {
                case 'success':
                    return 'fa-check-circle';
                case 'info':
                    return 'fa-info-circle';
                case 'warning':
                    return 'fa-exclamation-triangle';
                case 'error':
                    return 'fa-times-circle';
                default:
                    return 'fa-exclamation-circle';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (snq((/**
         * @return {?}
         */
        function () { return _this.toast.options.sticky; })))
            return;
        /** @type {?} */
        var timeout = snq((/**
         * @return {?}
         */
        function () { return _this.toast.options.life; })) || 5000;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.close();
        }), timeout);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.toastService.remove(this.toast.options.id);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tap = /**
     * @return {?}
     */
    function () {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-toast',
                    template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <div class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".toast{display:-ms-grid;display:grid;-ms-grid-columns:50px 1fr;grid-template-columns:50px 1fr;gap:10px;margin:5px 0;padding:10px;border-radius:0;width:350px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 10px -5px rgba(0,0,0,.4);z-index:9999;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px rgba(0,0,0,.4);opacity:1}.toast:hover{border:2px solid #e3e3e3;background-color:#e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{border:2px solid #51a351;background-color:#51a351;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-success:hover{border:2px solid #499249;background-color:#499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{border:2px solid #2f96b4;background-color:#2f96b4;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-info:hover{border:2px solid #2a85a0;background-color:#2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{border:2px solid #f89406;background-color:#f89406;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-warning:hover{border:2px solid #df8505;background-color:#df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{border:2px solid #bd362f;background-color:#bd362f;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-error:hover{border:2px solid #a9302a;background-color:#a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .close-button{position:absolute;top:0;right:0;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0;padding:5px 10px 5px 5px;width:25px;height:25px;border:none;border-radius:50%;background:0 0}.toast .toast-content .close-button:focus{outline:0}.toast .toast-content .close-button .close-icon{width:16px;height:16px;stroke:#000}.toast .toast-content .toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToasterService },
        { type: LocalizationService }
    ]; };
    ToastComponent.propDecorators = {
        toast: [{ type: Input }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.toast;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.toastService;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.localizationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFdEI7SUE2QkUsd0JBQ1UsWUFBNEIsRUFDNUIsbUJBQXdDO1FBRHhDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUF2Qkosc0JBQUkseUNBQWE7Ozs7UUFBakI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFBRSxPQUFPLEVBQUUsQ0FBQztZQUNuRCxPQUFPLFdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFVLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBUzs7OztRQUFiO1lBQ0UsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsS0FBSyxTQUFTO29CQUNaLE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLEtBQUssTUFBTTtvQkFDVCxPQUFPLGdCQUFnQixDQUFDO2dCQUMxQixLQUFLLFNBQVM7b0JBQ1osT0FBTyx5QkFBeUIsQ0FBQztnQkFDbkMsS0FBSyxPQUFPO29CQUNWLE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCO29CQUNFLE9BQU8sdUJBQXVCLENBQUM7YUFDbEM7UUFDSCxDQUFDOzs7T0FBQTs7OztJQU9ELGlDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUF6QixDQUF5QixFQUFDO1lBQUUsT0FBTzs7WUFDM0MsT0FBTyxHQUFHLEdBQUc7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQXZCLENBQXVCLEVBQUMsSUFBSSxJQUFJO1FBQzFELFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELDhCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCw0QkFBRzs7O0lBQUg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUUsQ0FBQzs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdXBCQUFxQzs7aUJBRXRDOzs7O2dCQVJRLGNBQWM7Z0JBQ2QsbUJBQW1COzs7d0JBU3pCLEtBQUs7O0lBMkNSLHFCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksY0FBYzs7O0lBQ3pCLCtCQUNxQjs7Ozs7SUF1Qm5CLHNDQUFvQzs7Ozs7SUFDcEMsNkNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdG9hc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXRvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KClcclxuICB0b2FzdDogVG9hc3Rlci5Ub2FzdDtcclxuXHJcbiAgZ2V0IHNldmVyaXR5Q2xhc3MoKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy50b2FzdCB8fCAhdGhpcy50b2FzdC5zZXZlcml0eSkgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIGB0b2FzdC0ke3RoaXMudG9hc3Quc2V2ZXJpdHl9YDtcclxuICB9XHJcblxyXG4gIGdldCBpY29uQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAodGhpcy50b2FzdC5zZXZlcml0eSkge1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWNoZWNrLWNpcmNsZSc7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHJldHVybiAnZmEtaW5mby1jaXJjbGUnO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAnZmEtdGltZXMtY2lyY2xlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uU2VydmljZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHNucSgoKSA9PiB0aGlzLnRvYXN0Lm9wdGlvbnMuc3RpY2t5KSkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNucSgoKSA9PiB0aGlzLnRvYXN0Lm9wdGlvbnMubGlmZSkgfHwgNTAwMDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy50b2FzdFNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3Qub3B0aW9ucy5pZCk7XHJcbiAgfVxyXG5cclxuICB0YXAoKSB7XHJcbiAgICBpZiAodGhpcy50b2FzdC5vcHRpb25zICYmIHRoaXMudG9hc3Qub3B0aW9ucy50YXBUb0Rpc21pc3MpIHRoaXMuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19