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
export class ToastComponent {
    /**
     * @param {?} toastService
     * @param {?} localizationService
     */
    constructor(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    /**
     * @return {?}
     */
    get severityClass() {
        if (!this.toast || !this.toast.severity)
            return '';
        return `toast-${this.toast.severity}`;
    }
    /**
     * @return {?}
     */
    get iconClass() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (snq((/**
         * @return {?}
         */
        () => this.toast.options.sticky)))
            return;
        /** @type {?} */
        const timeout = snq((/**
         * @return {?}
         */
        () => this.toast.options.life)) || 5000;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.close();
        }), timeout);
    }
    /**
     * @return {?}
     */
    close() {
        this.toastService.remove(this.toast.options.id);
    }
    /**
     * @return {?}
     */
    tap() {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-toast',
                template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                styles: [".toast{display:-ms-grid;display:grid;-ms-grid-columns:50px 1fr;grid-template-columns:50px 1fr;gap:10px;margin:5px 0;padding:10px;border-radius:0;width:350px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 10px -5px rgba(0,0,0,.4);z-index:9999;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px rgba(0,0,0,.4);opacity:1}.toast:hover{border:2px solid #e3e3e3;background-color:#e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{border:2px solid #51a351;background-color:#51a351;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-success:hover{border:2px solid #499249;background-color:#499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{border:2px solid #2f96b4;background-color:#2f96b4;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-info:hover{border:2px solid #2a85a0;background-color:#2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{border:2px solid #f89406;background-color:#f89406;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-warning:hover{border:2px solid #df8505;background-color:#df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{border:2px solid #bd362f;background-color:#bd362f;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-error:hover{border:2px solid #a9302a;background-color:#a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{display:flex;align-items:center;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:25px;border:none;border-radius:50%;background:0 0;color:inherit}.toast .toast-content .toast-close-button:focus{outline:0}.toast .toast-content .toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.toast .toast-content .toast-message{margin:0;padding:0}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToasterService },
    { type: LocalizationService }
];
ToastComponent.propDecorators = {
    toast: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFPdEIsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBd0J6QixZQUNVLFlBQTRCLEVBQzVCLG1CQUF3QztRQUR4QyxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDOzs7O0lBdkJKLElBQUksYUFBYTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDbkQsT0FBTyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDM0IsS0FBSyxTQUFTO2dCQUNaLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxNQUFNO2dCQUNULE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxTQUFTO2dCQUNaLE9BQU8seUJBQXlCLENBQUM7WUFDbkMsS0FBSyxPQUFPO2dCQUNWLE9BQU8saUJBQWlCLENBQUM7WUFDM0I7Z0JBQ0UsT0FBTyx1QkFBdUIsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFBRSxPQUFPOztjQUMzQyxPQUFPLEdBQUcsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLElBQUksSUFBSTtRQUMxRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEdBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFFLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHlwQkFBcUM7O2FBRXRDOzs7O1lBUlEsY0FBYztZQUNkLG1CQUFtQjs7O29CQVN6QixLQUFLOzs7O0lBQU4sK0JBQ3FCOzs7OztJQXVCbkIsc0NBQW9DOzs7OztJQUNwQyw2Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uLy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90b2FzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHRvYXN0OiBUb2FzdGVyLlRvYXN0O1xyXG5cclxuICBnZXQgc2V2ZXJpdHlDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLnRvYXN0IHx8ICF0aGlzLnRvYXN0LnNldmVyaXR5KSByZXR1cm4gJyc7XHJcbiAgICByZXR1cm4gYHRvYXN0LSR7dGhpcy50b2FzdC5zZXZlcml0eX1gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb25DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLnRvYXN0LnNldmVyaXR5KSB7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHJldHVybiAnZmEtY2hlY2stY2lyY2xlJztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1pbmZvLWNpcmNsZSc7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHJldHVybiAnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgcmV0dXJuICdmYS10aW1lcy1jaXJjbGUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25TZXJ2aWNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoc25xKCgpID0+IHRoaXMudG9hc3Qub3B0aW9ucy5zdGlja3kpKSByZXR1cm47XHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc25xKCgpID0+IHRoaXMudG9hc3Qub3B0aW9ucy5saWZlKSB8fCA1MDAwO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLnRvYXN0U2VydmljZS5yZW1vdmUodGhpcy50b2FzdC5vcHRpb25zLmlkKTtcclxuICB9XHJcblxyXG4gIHRhcCgpIHtcclxuICAgIGlmICh0aGlzLnRvYXN0Lm9wdGlvbnMgJiYgdGhpcy50b2FzdC5vcHRpb25zLnRhcFRvRGlzbWlzcykgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=