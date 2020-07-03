import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';
import { LocalizationService } from '@abp/ng.core';
import snq from 'snq';
let ToastComponent = class ToastComponent {
    constructor(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    get severityClass() {
        if (!this.toast || !this.toast.severity)
            return '';
        return `toast-${this.toast.severity}`;
    }
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
    ngOnInit() {
        if (snq(() => this.toast.options.sticky))
            return;
        const timeout = snq(() => this.toast.options.life) || 5000;
        setTimeout(() => {
            this.close();
        }, timeout);
    }
    close() {
        this.toastService.remove(this.toast.options.id);
    }
    tap() {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "toast", void 0);
ToastComponent = __decorate([
    Component({
        selector: 'abp-toast',
        template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
        styles: [".toast{-moz-user-select:none;-ms-grid-columns:50px 1fr;-ms-user-select:none;-webkit-user-select:none;background-color:#f0f0f0;border:2px solid #f0f0f0;border-radius:0;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#000;display:-ms-grid;display:grid;gap:10px;grid-template-columns:50px 1fr;margin:5px 0;opacity:1;padding:10px;user-select:none;width:350px;z-index:9999}.toast:hover{background-color:#e3e3e3;border:2px solid #e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{background-color:#51a351;border:2px solid #51a351;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-success:hover{background-color:#499249;border:2px solid #499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{background-color:#2f96b4;border:2px solid #2f96b4;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-info:hover{background-color:#2a85a0;border:2px solid #2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{background-color:#f89406;border:2px solid #f89406;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-warning:hover{background-color:#df8505;border:2px solid #df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{background-color:#bd362f;border:2px solid #bd362f;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-error:hover{background-color:#a9302a;border:2px solid #a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{align-items:center;display:flex;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{align-items:center;background:transparent;border:none;border-radius:50%;color:inherit;display:flex;height:25px;justify-content:center;margin:0;padding:0 5px 0 0;position:absolute;right:0;top:0;width:25px}.toast .toast-content .toast-close-button:focus{outline:none}.toast .toast-content .toast-title{font-size:1rem;font-weight:600;margin:0;padding:0}.toast .toast-content .toast-message{margin:0;max-width:240px;padding:0}"]
    }),
    __metadata("design:paramtypes", [ToasterService,
        LocalizationService])
], ToastComponent);
export { ToastComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBT3RCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUF3QnpCLFlBQ1UsWUFBNEIsRUFDNUIsbUJBQXdDO1FBRHhDLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUF2QkosSUFBSSxhQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNuRCxPQUFPLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUMzQixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxpQkFBaUIsQ0FBQztZQUMzQixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLFNBQVM7Z0JBQ1osT0FBTyx5QkFBeUIsQ0FBQztZQUNuQyxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxpQkFBaUIsQ0FBQztZQUMzQjtnQkFDRSxPQUFPLHVCQUF1QixDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQU9ELFFBQVE7UUFDTixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBQ2pELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDM0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUUsQ0FBQztDQUNGLENBQUE7QUExQ0M7SUFEQyxLQUFLLEVBQUU7OzZDQUNhO0FBRlYsY0FBYztJQUwxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQix5cEJBQXFDOztLQUV0QyxDQUFDO3FDQTBCd0IsY0FBYztRQUNQLG1CQUFtQjtHQTFCdkMsY0FBYyxDQTRDMUI7U0E1Q1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RvYXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10b2FzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgdG9hc3Q6IFRvYXN0ZXIuVG9hc3Q7XHJcblxyXG4gIGdldCBzZXZlcml0eUNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMudG9hc3QgfHwgIXRoaXMudG9hc3Quc2V2ZXJpdHkpIHJldHVybiAnJztcclxuICAgIHJldHVybiBgdG9hc3QtJHt0aGlzLnRvYXN0LnNldmVyaXR5fWA7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbkNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudG9hc3Quc2V2ZXJpdHkpIHtcclxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1jaGVjay1jaXJjbGUnO1xyXG4gICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLWluZm8tY2lyY2xlJztcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgcmV0dXJuICdmYS1leGNsYW1hdGlvbi10cmlhbmdsZSc7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICByZXR1cm4gJ2ZhLXRpbWVzLWNpcmNsZSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdmYS1leGNsYW1hdGlvbi1jaXJjbGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblNlcnZpY2U6IExvY2FsaXphdGlvblNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmIChzbnEoKCkgPT4gdGhpcy50b2FzdC5vcHRpb25zLnN0aWNreSkpIHJldHVybjtcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzbnEoKCkgPT4gdGhpcy50b2FzdC5vcHRpb25zLmxpZmUpIHx8IDUwMDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMudG9hc3RTZXJ2aWNlLnJlbW92ZSh0aGlzLnRvYXN0Lm9wdGlvbnMuaWQpO1xyXG4gIH1cclxuXHJcbiAgdGFwKCkge1xyXG4gICAgaWYgKHRoaXMudG9hc3Qub3B0aW9ucyAmJiB0aGlzLnRvYXN0Lm9wdGlvbnMudGFwVG9EaXNtaXNzKSB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==