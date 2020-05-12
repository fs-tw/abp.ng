/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Confirmation } from '../../models/confirmation';
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    ConfirmationComponent.prototype.close = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.clear(status);
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConfirmationComponent.prototype.getIconClass = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var severity = _a.severity;
        switch (severity) {
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
    };
    ConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-confirmation',
                    template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
                }] }
    ];
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
    ConfirmationComponent.prototype.confirmation$;
    /** @type {?} */
    ConfirmationComponent.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQUFBO1FBTUUsWUFBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxZQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUF3QnhDLENBQUM7Ozs7O0lBbEJDLHFDQUFLOzs7O0lBQUwsVUFBTSxNQUEyQjtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLEVBQXFDO1lBQW5DLHNCQUFRO1FBQ3JCLFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssTUFBTTtnQkFDVCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssU0FBUztnQkFDWixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssU0FBUztnQkFDWixPQUFPLHlCQUF5QixDQUFDO1lBQ25DLEtBQUssT0FBTztnQkFDVixPQUFPLGlCQUFpQixDQUFDO1lBQzNCO2dCQUNFLE9BQU8sb0JBQW9CLENBQUM7U0FDL0I7SUFDSCxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLCs1Q0FBNEM7O2lCQUU3Qzs7SUE0QkQsNEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxxQkFBcUI7OztJQUNoQyx3Q0FBc0M7O0lBQ3RDLHVDQUFvQzs7SUFDcEMsd0NBQXNDOztJQUV0Qyw4Q0FBc0Q7O0lBRXRELHNDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uZmlybSA9IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybTtcclxuICByZWplY3QgPSBDb25maXJtYXRpb24uU3RhdHVzLnJlamVjdDtcclxuICBkaXNtaXNzID0gQ29uZmlybWF0aW9uLlN0YXR1cy5kaXNtaXNzO1xyXG5cclxuICBjb25maXJtYXRpb24kOiBSZXBsYXlTdWJqZWN0PENvbmZpcm1hdGlvbi5EaWFsb2dEYXRhPjtcclxuXHJcbiAgY2xlYXI6IChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHZvaWQ7XHJcblxyXG4gIGNsb3NlKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykge1xyXG4gICAgdGhpcy5jbGVhcihzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbkNsYXNzKHsgc2V2ZXJpdHkgfTogQ29uZmlybWF0aW9uLkRpYWxvZ0RhdGEpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChzZXZlcml0eSkge1xyXG4gICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWluZm8tY2lyY2xlJztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1jaGVjay1jaXJjbGUnO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAnZmEtdGltZXMtY2lyY2xlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2ZhLXF1ZXN0aW9uLWNpcmNsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==