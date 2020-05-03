/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Confirmation } from '../../models/confirmation';
import { ConfirmationService } from '../../services/confirmation.service';
export class ConfirmationComponent {
    /**
     * @param {?} confirmationService
     */
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
        this.visible = false;
        this.confirmationService.confirmation$.subscribe((/**
         * @param {?} confirmation
         * @return {?}
         */
        confirmation => {
            this.data = confirmation;
            this.visible = !!confirmation;
        }));
    }
    /**
     * @return {?}
     */
    get iconClass() {
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
    }
    /**
     * @param {?} status
     * @return {?}
     */
    close(status) {
        this.confirmationService.clear(status);
    }
}
ConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-confirmation',
                template: "<div class=\"confirmation\" *ngIf=\"visible\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1 class=\"title\" *ngIf=\"data.title\">\r\n        {{ data.title | abpLocalization: data.options?.titleLocalizationParams }}\r\n      </h1>\r\n      <p class=\"message\" *ngIf=\"data.message\">\r\n        {{ data.message | abpLocalization: data.options?.messageLocalizationParams }}\r\n      </p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      >\r\n        {{ data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      >\r\n        {{ data.options?.yesText || 'AbpUi::Yes' | abpLocalization }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU8xRSxNQUFNLE9BQU8scUJBQXFCOzs7O0lBd0JoQyxZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQXZCNUQsWUFBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxZQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW9CZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxZQUFZLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBcEJELElBQUksU0FBUztRQUNYLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDMUIsS0FBSyxNQUFNO2dCQUNULE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxTQUFTO2dCQUNaLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxTQUFTO2dCQUNaLE9BQU8seUJBQXlCLENBQUM7WUFDbkMsS0FBSyxPQUFPO2dCQUNWLE9BQU8saUJBQWlCLENBQUM7WUFDM0I7Z0JBQ0UsT0FBTyxvQkFBb0IsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7O0lBU0QsS0FBSyxDQUFDLE1BQTJCO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnMENBQTRDOzthQUU3Qzs7OztZQU5RLG1CQUFtQjs7OztJQVExQix3Q0FBc0M7O0lBQ3RDLHVDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUV0Qyx3Q0FBZ0I7O0lBRWhCLHFDQUE4Qjs7Ozs7SUFpQmxCLG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlybWF0aW9uJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNvbmZpcm1hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Db21wb25lbnQge1xyXG4gIGNvbmZpcm0gPSBDb25maXJtYXRpb24uU3RhdHVzLmNvbmZpcm07XHJcbiAgcmVqZWN0ID0gQ29uZmlybWF0aW9uLlN0YXR1cy5yZWplY3Q7XHJcbiAgZGlzbWlzcyA9IENvbmZpcm1hdGlvbi5TdGF0dXMuZGlzbWlzcztcclxuXHJcbiAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBkYXRhOiBDb25maXJtYXRpb24uRGlhbG9nRGF0YTtcclxuXHJcbiAgZ2V0IGljb25DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0aGlzLmRhdGEuc2V2ZXJpdHkpIHtcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1pbmZvLWNpcmNsZSc7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHJldHVybiAnZmEtY2hlY2stY2lyY2xlJztcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLXRpbWVzLWNpcmNsZSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdmYS1xdWVzdGlvbi1jaXJjbGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybWF0aW9uJC5zdWJzY3JpYmUoY29uZmlybWF0aW9uID0+IHtcclxuICAgICAgdGhpcy5kYXRhID0gY29uZmlybWF0aW9uO1xyXG4gICAgICB0aGlzLnZpc2libGUgPSAhIWNvbmZpcm1hdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2Uoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY2xlYXIoc3RhdHVzKTtcclxuICB9XHJcbn1cclxuIl19