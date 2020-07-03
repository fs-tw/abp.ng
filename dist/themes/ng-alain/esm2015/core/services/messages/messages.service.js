import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
export class MessagesService {
    constructor(modalSrv) {
        this.modalSrv = modalSrv;
    }
    info(message, title = "訊息") {
        this.modalSrv.info({
            nzTitle: title,
            nzContent: message
        });
    }
    success(message, title = "成功訊息") {
        this.modalSrv.success({
            nzTitle: title,
            nzContent: message
        });
    }
    warn(message, title = "警告訊息") {
        this.modalSrv.warning({
            nzTitle: title,
            nzContent: message
        });
    }
    error(message, title = "錯誤訊息") {
        this.modalSrv.error({
            nzTitle: title,
            nzContent: message
        });
    }
    confirm(message, titleOrCallBack, callback) {
        if (typeof titleOrCallBack == 'string') {
            this.modalSrv.confirm({
                nzTitle: titleOrCallBack,
                nzContent: message,
                nzOnOk() {
                    if (callback)
                        callback(true);
                },
                nzOnCancel() {
                    if (callback)
                        callback(false);
                }
            });
        }
        else {
            this.modalSrv.confirm({
                nzTitle: "請確認",
                nzContent: message,
                nzOnOk() {
                    if (titleOrCallBack)
                        titleOrCallBack(true);
                },
                nzOnCancel() {
                    if (titleOrCallBack)
                        titleOrCallBack(false);
                }
            });
        }
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(i0.ɵɵinject(i1.NzModalService)); };
MessagesService.ɵprov = i0.ɵɵdefineInjectable({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MessagesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.NzModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9jb3JlL3NyYy9zZXJ2aWNlcy9tZXNzYWdlcy9tZXNzYWdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHakUsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFBb0IsUUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFBSSxDQUFDO0lBRWpELElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsSUFBSTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxLQUFLO1lBQ2QsU0FBUyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsTUFBTTtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsQixPQUFPLEVBQUUsS0FBSztZQUNkLFNBQVMsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLFFBQWdCLE1BQU07UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDbEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxTQUFTLEVBQUUsT0FBTztTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxRQUFnQixNQUFNO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsU0FBUyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlLEVBQUUsZUFBc0QsRUFBRSxRQUFvQztRQUNqSCxJQUFJLE9BQU8sZUFBZSxJQUFJLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixNQUFNO29CQUNGLElBQUksUUFBUTt3QkFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixJQUFJLFFBQVE7d0JBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNsQixPQUFPLEVBQUUsS0FBSztnQkFDZCxTQUFTLEVBQUUsT0FBTztnQkFDbEIsTUFBTTtvQkFDRixJQUFJLGVBQWU7d0JBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELFVBQVU7b0JBQ04sSUFBSSxlQUFlO3dCQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7OEVBMURZLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWUsbUJBREYsTUFBTTtrREFDbkIsZUFBZTtjQUQzQixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzU2VydmljZSB7XHJcblxyXG4gIGNvbmZpcm1Nb2RhbDogTnpNb2RhbFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNydjogTnpNb2RhbFNlcnZpY2UpIHsgfVxyXG5cclxuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IFwi6KiK5oGvXCIpOiBhbnkge1xyXG4gICAgdGhpcy5tb2RhbFNydi5pbmZvKHtcclxuICAgICAgICBuelRpdGxlOiB0aXRsZSxcclxuICAgICAgICBuekNvbnRlbnQ6IG1lc3NhZ2VcclxuICAgIH0pXHJcbn1cclxuXHJcbnN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gXCLmiJDlip/oqIrmga9cIik6IGFueSB7XHJcbiAgICB0aGlzLm1vZGFsU3J2LnN1Y2Nlc3Moe1xyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIG56Q29udGVudDogbWVzc2FnZVxyXG4gICAgfSlcclxufVxyXG5cclxud2FybihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBcIuitpuWRiuioiuaBr1wiKTogYW55IHtcclxuICAgIHRoaXMubW9kYWxTcnYud2FybmluZyh7XHJcbiAgICAgICAgbnpUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgbnpDb250ZW50OiBtZXNzYWdlXHJcbiAgICB9KVxyXG59XHJcblxyXG5lcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBcIumMr+iqpOioiuaBr1wiKTogYW55IHtcclxuICAgIHRoaXMubW9kYWxTcnYuZXJyb3Ioe1xyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIG56Q29udGVudDogbWVzc2FnZVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uZmlybShtZXNzYWdlOiBzdHJpbmcsIHRpdGxlT3JDYWxsQmFjaz86IHN0cmluZyB8ICgocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSwgY2FsbGJhY2s/OiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKTogYW55IHtcclxuICAgIGlmICh0eXBlb2YgdGl0bGVPckNhbGxCYWNrID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNydi5jb25maXJtKHtcclxuICAgICAgICAgICAgbnpUaXRsZTogdGl0bGVPckNhbGxCYWNrLFxyXG4gICAgICAgICAgICBuekNvbnRlbnQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG56T25PaygpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG56T25DYW5jZWwoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1vZGFsU3J2LmNvbmZpcm0oe1xyXG4gICAgICAgICAgICBuelRpdGxlOiBcIuiri+eiuuiqjVwiLFxyXG4gICAgICAgICAgICBuekNvbnRlbnQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG56T25PaygpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZU9yQ2FsbEJhY2spIHRpdGxlT3JDYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnpPbkNhbmNlbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZU9yQ2FsbEJhY2spIHRpdGxlT3JDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG59XHJcbiJdfQ==