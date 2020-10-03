import { Component } from '@angular/core';
import { Confirmation } from '../../models/confirmation';
export class ConfirmationComponent {
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
}
ConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-confirmation',
                template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div\r\n    class=\"confirmation-backdrop\"\r\n    (click)=\"data.options?.dismissible ? close(dismiss) : null\"\r\n  ></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".confirmation{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1060}.confirmation .confirmation-backdrop{height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;min-height:300px;padding:0;width:450px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{align-items:center;display:flex;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{font-size:80px;height:100px;stroke-width:1;text-align:center;width:100px}.confirmation .confirmation-dialog .content{display:block;flex-grow:1}.confirmation .confirmation-dialog .content .title{display:block;font-size:27px;font-weight:600;margin:0;padding:0;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;font-size:16px;font-weight:400;margin:10px auto;padding:20px;text-align:center}.confirmation .confirmation-dialog .footer{align-items:center;display:flex;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{border:none;border-radius:6px;display:inline-block;font-size:14px;font-weight:600;margin:0 5px;padding:10px 20px}"]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLFlBQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxXQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEMsWUFBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBd0J4QyxDQUFDO0lBbEJDLEtBQUssQ0FBQyxNQUEyQjtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQTJCO1FBQ2hELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssTUFBTTtnQkFDVCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssU0FBUztnQkFDWixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssU0FBUztnQkFDWixPQUFPLHlCQUF5QixDQUFDO1lBQ25DLEtBQUssT0FBTztnQkFDVixPQUFPLGlCQUFpQixDQUFDO1lBQzNCO2dCQUNFLE9BQU8sb0JBQW9CLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGkvQ0FBNEM7O2FBRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpcm1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1jb25maXJtYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uQ29tcG9uZW50IHtcclxuICBjb25maXJtID0gQ29uZmlybWF0aW9uLlN0YXR1cy5jb25maXJtO1xyXG4gIHJlamVjdCA9IENvbmZpcm1hdGlvbi5TdGF0dXMucmVqZWN0O1xyXG4gIGRpc21pc3MgPSBDb25maXJtYXRpb24uU3RhdHVzLmRpc21pc3M7XHJcblxyXG4gIGNvbmZpcm1hdGlvbiQ6IFJlcGxheVN1YmplY3Q8Q29uZmlybWF0aW9uLkRpYWxvZ0RhdGE+O1xyXG5cclxuICBjbGVhcjogKHN0YXR1czogQ29uZmlybWF0aW9uLlN0YXR1cykgPT4gdm9pZDtcclxuXHJcbiAgY2xvc2Uoc3RhdHVzOiBDb25maXJtYXRpb24uU3RhdHVzKSB7XHJcbiAgICB0aGlzLmNsZWFyKHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uQ2xhc3MoeyBzZXZlcml0eSB9OiBDb25maXJtYXRpb24uRGlhbG9nRGF0YSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHNldmVyaXR5KSB7XHJcbiAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgIHJldHVybiAnZmEtaW5mby1jaXJjbGUnO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWNoZWNrLWNpcmNsZSc7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHJldHVybiAnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgcmV0dXJuICdmYS10aW1lcy1jaXJjbGUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnZmEtcXVlc3Rpb24tY2lyY2xlJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19