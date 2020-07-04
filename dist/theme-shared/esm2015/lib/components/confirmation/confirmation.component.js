import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Confirmation } from '../../models/confirmation';
let ConfirmationComponent = class ConfirmationComponent {
    constructor() {
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
    }
    close(status) {
        this.clear(status);
    }
    getIconClass({ severity }) {
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
    }
};
ConfirmationComponent = __decorate([
    Component({
        selector: 'abp-confirmation',
        template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div\r\n    class=\"confirmation-backdrop\"\r\n    (click)=\"data.options?.dismissible ? close(dismiss) : null\"\r\n  ></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [".confirmation{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1060}.confirmation .confirmation-backdrop{height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;min-height:300px;padding:0;width:450px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{align-items:center;display:flex;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{font-size:80px;height:100px;stroke-width:1;text-align:center;width:100px}.confirmation .confirmation-dialog .content{display:block;flex-grow:1}.confirmation .confirmation-dialog .content .title{display:block;font-size:27px;font-weight:600;margin:0;padding:0;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;font-size:16px;font-weight:400;margin:10px auto;padding:20px;text-align:center}.confirmation .confirmation-dialog .footer{align-items:center;display:flex;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{border:none;border-radius:6px;display:inline-block;font-size:14px;font-weight:600;margin:0 5px;padding:10px 20px}"]
    })
], ConfirmationComponent);
export { ConfirmationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQWxDO1FBQ0UsWUFBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxZQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUF3QnhDLENBQUM7SUFsQkMsS0FBSyxDQUFDLE1BQTJCO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBMkI7UUFDaEQsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxNQUFNO2dCQUNULE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxTQUFTO2dCQUNaLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxTQUFTO2dCQUNaLE9BQU8seUJBQXlCLENBQUM7WUFDbkMsS0FBSyxPQUFPO2dCQUNWLE9BQU8saUJBQWlCLENBQUM7WUFDM0I7Z0JBQ0UsT0FBTyxvQkFBb0IsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBM0JZLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGkvQ0FBNEM7O0tBRTdDLENBQUM7R0FDVyxxQkFBcUIsQ0EyQmpDO1NBM0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uZmlybSA9IENvbmZpcm1hdGlvbi5TdGF0dXMuY29uZmlybTtcclxuICByZWplY3QgPSBDb25maXJtYXRpb24uU3RhdHVzLnJlamVjdDtcclxuICBkaXNtaXNzID0gQ29uZmlybWF0aW9uLlN0YXR1cy5kaXNtaXNzO1xyXG5cclxuICBjb25maXJtYXRpb24kOiBSZXBsYXlTdWJqZWN0PENvbmZpcm1hdGlvbi5EaWFsb2dEYXRhPjtcclxuXHJcbiAgY2xlYXI6IChzdGF0dXM6IENvbmZpcm1hdGlvbi5TdGF0dXMpID0+IHZvaWQ7XHJcblxyXG4gIGNsb3NlKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykge1xyXG4gICAgdGhpcy5jbGVhcihzdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbkNsYXNzKHsgc2V2ZXJpdHkgfTogQ29uZmlybWF0aW9uLkRpYWxvZ0RhdGEpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChzZXZlcml0eSkge1xyXG4gICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWluZm8tY2lyY2xlJztcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1jaGVjay1jaXJjbGUnO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAnZmEtdGltZXMtY2lyY2xlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ2ZhLXF1ZXN0aW9uLWNpcmNsZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==