import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/notification";
export class NotifyService {
    constructor(notification) {
        this.notification = notification;
    }
    showNotify(type, title, content) {
        this.notification.create(type, title, content);
    }
    success(content = '', title = "成功") {
        this.showNotify('success', title, content);
    }
    info(content = '', title = "訊息") {
        this.showNotify('info', title, content);
    }
    warning(content = '', title = "警告") {
        this.showNotify('warning', title, content);
    }
    error(content = '', title = "錯誤") {
        this.showNotify('error', title, content);
    }
}
NotifyService.ɵfac = function NotifyService_Factory(t) { return new (t || NotifyService)(i0.ɵɵinject(i1.NzNotificationService)); };
NotifyService.ɵprov = i0.ɵɵdefineInjectable({ token: NotifyService, factory: NotifyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotifyService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.NzNotificationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vY29yZS9zcmMvc2VydmljZXMvbm90aWZ5L25vdGlmeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUduRSxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUNVLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUN6QyxDQUFDO0lBRUwsVUFBVSxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBZTtRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFPLENBQUMsVUFBa0IsRUFBRSxFQUFFLFFBQWdCLElBQUk7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLENBQUMsVUFBa0IsRUFBRSxFQUFFLFFBQWdCLElBQUk7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxPQUFPLENBQUMsVUFBa0IsRUFBRSxFQUFFLFFBQWdCLElBQUk7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBa0IsRUFBRSxFQUFFLFFBQWdCLElBQUk7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7OzBFQXhCVSxhQUFhO3FEQUFiLGFBQWEsV0FBYixhQUFhLG1CQURBLE1BQU07a0RBQ25CLGFBQWE7Y0FEekIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ub3RpZmljYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHNob3dOb3RpZnkodHlwZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uLmNyZWF0ZSh0eXBlLCB0aXRsZSwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZyA9ICcnLCB0aXRsZTogc3RyaW5nID0gXCLmiJDlip9cIikge1xyXG4gICAgdGhpcy5zaG93Tm90aWZ5KCdzdWNjZXNzJywgdGl0bGUsIGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyhjb250ZW50OiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9IFwi6KiK5oGvXCIpIHtcclxuICAgIHRoaXMuc2hvd05vdGlmeSgnaW5mbycsIHRpdGxlLCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSBcIuitpuWRilwiKSB7XHJcbiAgICB0aGlzLnNob3dOb3RpZnkoJ3dhcm5pbmcnLCB0aXRsZSwgY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihjb250ZW50OiBzdHJpbmcgPSAnJywgdGl0bGU6IHN0cmluZyA9IFwi6Yyv6KqkXCIpIHtcclxuICAgIHRoaXMuc2hvd05vdGlmeSgnZXJyb3InLCB0aXRsZSwgY29udGVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=