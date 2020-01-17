/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { LocalizationService } from '@abp/ng.core';
import { Toaster } from '../../models/toaster';
export class ConfirmationComponent {
    /**
     * @param {?} confirmationService
     * @param {?} localizationService
     */
    constructor(confirmationService, localizationService) {
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
                template: "<div class=\"confirmation show\" *ngIf=\"visible\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1 class=\"title\" *ngIf=\"data.title\">\r\n        {{ data.title | abpLocalization: data.options?.titleLocalizationParams }}\r\n      </h1>\r\n      <p class=\"message\" *ngIf=\"data.message\">\r\n        {{ data.message | abpLocalization: data.options?.messageLocalizationParams }}\r\n      </p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button-reject\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      >\r\n        {{ data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button-approve\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      >\r\n        {{ data.options?.yesText || 'AbpUi::Yes' | abpLocalization }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:none;place-items:center;z-index:1060}.confirmation.show{display:-ms-grid;display:grid}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.7);z-index:1061!important}.confirmation .confirmation-dialog{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:20px auto;padding:0;border:none;border-radius:10px;width:450px;min-height:300px;background-color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.5);z-index:1062!important}.confirmation .confirmation-dialog .icon-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;fill:#fff;font-size:80px;text-align:center}.confirmation .confirmation-dialog .icon-container.info .icon{stroke:#2f96b4;color:#2f96b4}.confirmation .confirmation-dialog .icon-container.success .icon{stroke:#51a351;color:#51a351}.confirmation .confirmation-dialog .icon-container.warning .icon{stroke:#f89406;color:#f89406}.confirmation .confirmation-dialog .icon-container.error .icon{stroke:#bd362f;color:#bd362f}.confirmation .confirmation-dialog .content{-webkit-box-flex:1;flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;color:#777;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;color:#777;font-size:14px;font-weight:600;background-color:#eee}.confirmation .confirmation-dialog .footer .confirmation-button:hover{background-color:#e1e1e1}.confirmation .confirmation-dialog .footer .confirmation-button-approve{background-color:#2f96b4;color:#fff}.confirmation .confirmation-dialog .footer .confirmation-button-approve:hover{background-color:#2a85a0}"]
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: ConfirmationService },
    { type: LocalizationService }
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
    /**
     * @type {?}
     * @private
     */
    ConfirmationComponent.prototype.localizationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPL0MsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUF3QmhDLFlBQ1UsbUJBQXdDLEVBQ3hDLG1CQUF3QztRQUR4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF6QmxELFlBQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDL0IsWUFBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRWpDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUF1QmQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQXZCRCxJQUFJLFNBQVM7UUFDWCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFCLEtBQUssTUFBTTtnQkFDVCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssU0FBUztnQkFDWixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssU0FBUztnQkFDWixPQUFPLHlCQUF5QixDQUFDO1lBQ25DLEtBQUssT0FBTztnQkFDVixPQUFPLGlCQUFpQixDQUFDO1lBQzNCO2dCQUNFLE9BQU8sb0JBQW9CLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQVlELEtBQUssQ0FBQyxNQUFzQjtRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbTBDQUE0Qzs7YUFFN0M7Ozs7WUFUUSxtQkFBbUI7WUFFbkIsbUJBQW1COzs7O0lBUzFCLHdDQUFpQzs7SUFDakMsdUNBQStCOztJQUMvQix3Q0FBaUM7O0lBRWpDLHdDQUFnQjs7SUFFaEIscUNBQThCOzs7OztJQWtCNUIsb0RBQWdEOzs7OztJQUNoRCxvREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpcm1hdGlvbic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uZmlybSA9IFRvYXN0ZXIuU3RhdHVzLmNvbmZpcm07XHJcbiAgcmVqZWN0ID0gVG9hc3Rlci5TdGF0dXMucmVqZWN0O1xyXG4gIGRpc21pc3MgPSBUb2FzdGVyLlN0YXR1cy5kaXNtaXNzO1xyXG5cclxuICB2aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIGRhdGE6IENvbmZpcm1hdGlvbi5EaWFsb2dEYXRhO1xyXG5cclxuICBnZXQgaWNvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5zZXZlcml0eSkge1xyXG4gICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWluZm8tY2lyY2xlJztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1jaGVjay1jaXJjbGUnO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAnZmEtdGltZXMtY2lyY2xlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2ZhLXF1ZXN0aW9uLWNpcmNsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uU2VydmljZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtYXRpb24kLnN1YnNjcmliZShjb25maXJtYXRpb24gPT4ge1xyXG4gICAgICB0aGlzLmRhdGEgPSBjb25maXJtYXRpb247XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9ICEhY29uZmlybWF0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShzdGF0dXM6IFRvYXN0ZXIuU3RhdHVzKSB7XHJcbiAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY2xlYXIoc3RhdHVzKTtcclxuICB9XHJcbn1cclxuIl19