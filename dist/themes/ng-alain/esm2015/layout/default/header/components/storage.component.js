import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
let HeaderStorageComponent = class HeaderStorageComponent {
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            },
        });
    }
};
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderStorageComponent.prototype, "_click", null);
HeaderStorageComponent = __decorate([
    Component({
        selector: 'header-storage',
        template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [NzModalService, NzMessageService])
], HeaderStorageComponent);
export { HeaderStorageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3N0b3JhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFjckQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFBb0IsUUFBd0IsRUFBVSxVQUE0QjtRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBQUcsQ0FBQztJQUd0RixNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDcEIsT0FBTyxFQUFFLG9DQUFvQztZQUM3QyxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNYLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFUQztJQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7b0RBU3JCO0FBWlUsc0JBQXNCO0lBWmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7R0FHVDtRQUNELHNEQUFzRDtRQUN0RCxJQUFJLEVBQUU7WUFDSixpQkFBaUIsRUFBRSxNQUFNO1NBQzFCO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FFOEIsY0FBYyxFQUFzQixnQkFBZ0I7R0FEdkUsc0JBQXNCLENBYWxDO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3RvcmFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwidG9vbFwiPjwvaT5cclxuICAgIHt7ICdtZW51LmNsZWFyLmxvY2FsLnN0b3JhZ2UnIHwgdHJhbnNsYXRlIH19XHJcbiAgYCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmQtYmxvY2tdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJTdG9yYWdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSwgcHJpdmF0ZSBtZXNzYWdlU3J2OiBOek1lc3NhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5tb2RhbFNydi5jb25maXJtKHtcclxuICAgICAgbnpUaXRsZTogJ01ha2Ugc3VyZSBjbGVhciBhbGwgbG9jYWwgc3RvcmFnZT8nLFxyXG4gICAgICBuek9uT2s6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTcnYuc3VjY2VzcygnQ2xlYXIgRmluaXNoZWQhJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19