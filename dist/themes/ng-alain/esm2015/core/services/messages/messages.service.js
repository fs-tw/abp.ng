import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
let MessagesService = class MessagesService {
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
};
MessagesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MessagesService_Factory() { return new MessagesService(i0.ɵɵinject(i1.NzModalService)); }, token: MessagesService, providedIn: "root" });
MessagesService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [NzModalService])
], MessagesService);
export { MessagesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9jb3JlL3NyYy9zZXJ2aWNlcy9tZXNzYWdlcy9tZXNzYWdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBR2pFLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFJMUIsWUFBb0IsUUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFBSSxDQUFDO0lBRWpELElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsSUFBSTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLE9BQU8sRUFBRSxLQUFLO1lBQ2QsU0FBUyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsTUFBTTtRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsQixPQUFPLEVBQUUsS0FBSztZQUNkLFNBQVMsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLFFBQWdCLE1BQU07UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDbEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxTQUFTLEVBQUUsT0FBTztTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxRQUFnQixNQUFNO1FBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsU0FBUyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFlLEVBQUUsZUFBc0QsRUFBRSxRQUFvQztRQUNqSCxJQUFJLE9BQU8sZUFBZSxJQUFJLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixNQUFNO29CQUNGLElBQUksUUFBUTt3QkFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixJQUFJLFFBQVE7d0JBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNsQixPQUFPLEVBQUUsS0FBSztnQkFDZCxTQUFTLEVBQUUsT0FBTztnQkFDbEIsTUFBTTtvQkFDRixJQUFJLGVBQWU7d0JBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELFVBQVU7b0JBQ04sSUFBSSxlQUFlO3dCQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQUNBLENBQUE7O0FBM0RZLGVBQWU7SUFEM0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FDQUtILGNBQWM7R0FKakMsZUFBZSxDQTJEM0I7U0EzRFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc1NlcnZpY2Uge1xyXG5cclxuICBjb25maXJtTW9kYWw6IE56TW9kYWxSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTcnY6IE56TW9kYWxTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBcIuioiuaBr1wiKTogYW55IHtcclxuICAgIHRoaXMubW9kYWxTcnYuaW5mbyh7XHJcbiAgICAgICAgbnpUaXRsZTogdGl0bGUsXHJcbiAgICAgICAgbnpDb250ZW50OiBtZXNzYWdlXHJcbiAgICB9KVxyXG59XHJcblxyXG5zdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IFwi5oiQ5Yqf6KiK5oGvXCIpOiBhbnkge1xyXG4gICAgdGhpcy5tb2RhbFNydi5zdWNjZXNzKHtcclxuICAgICAgICBuelRpdGxlOiB0aXRsZSxcclxuICAgICAgICBuekNvbnRlbnQ6IG1lc3NhZ2VcclxuICAgIH0pXHJcbn1cclxuXHJcbndhcm4obWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gXCLorablkYroqIrmga9cIik6IGFueSB7XHJcbiAgICB0aGlzLm1vZGFsU3J2Lndhcm5pbmcoe1xyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIG56Q29udGVudDogbWVzc2FnZVxyXG4gICAgfSlcclxufVxyXG5cclxuZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gXCLpjK/oqqToqIrmga9cIik6IGFueSB7XHJcbiAgICB0aGlzLm1vZGFsU3J2LmVycm9yKHtcclxuICAgICAgICBuelRpdGxlOiB0aXRsZSxcclxuICAgICAgICBuekNvbnRlbnQ6IG1lc3NhZ2VcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbmZpcm0obWVzc2FnZTogc3RyaW5nLCB0aXRsZU9yQ2FsbEJhY2s/OiBzdHJpbmcgfCAoKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCksIGNhbGxiYWNrPzogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCk6IGFueSB7XHJcbiAgICBpZiAodHlwZW9mIHRpdGxlT3JDYWxsQmFjayA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubW9kYWxTcnYuY29uZmlybSh7XHJcbiAgICAgICAgICAgIG56VGl0bGU6IHRpdGxlT3JDYWxsQmFjayxcclxuICAgICAgICAgICAgbnpDb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBuek9uT2soKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuek9uQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNydi5jb25maXJtKHtcclxuICAgICAgICAgICAgbnpUaXRsZTogXCLoq4vnorroqo1cIixcclxuICAgICAgICAgICAgbnpDb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBuek9uT2soKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVPckNhbGxCYWNrKSB0aXRsZU9yQ2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG56T25DYW5jZWwoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVPckNhbGxCYWNrKSB0aXRsZU9yQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxufVxyXG4iXX0=