/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/storage.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
export class HeaderStorageComponent {
    /**
     * @param {?} modalSrv
     * @param {?} messageSrv
     */
    constructor(modalSrv, messageSrv) {
        this.modalSrv = modalSrv;
        this.messageSrv = messageSrv;
    }
    /**
     * @return {?}
     */
    _click() {
        this.modalSrv.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: (/**
             * @return {?}
             */
            () => {
                localStorage.clear();
                this.messageSrv.success('Clear Finished!');
            }),
        });
    }
}
HeaderStorageComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
HeaderStorageComponent.ctorParameters = () => [
    { type: NzModalService },
    { type: NzMessageService }
];
HeaderStorageComponent.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.modalSrv;
    /**
     * @type {?}
     * @private
     */
    HeaderStorageComponent.prototype.messageSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvc3RvcmFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY2pFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQW9CLFFBQXdCLEVBQVUsVUFBNEI7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7Ozs7SUFHdEYsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsTUFBTTs7O1lBQUUsR0FBRyxFQUFFO2dCQUNYLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUE7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7O0dBR1Q7O2dCQUVELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWJRLGNBQWM7WUFBRSxnQkFBZ0I7OztxQkFpQnRDLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBRlQsMENBQWdDOzs7OztJQUFFLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3RvcmFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwidG9vbFwiPjwvaT5cclxuICAgIHt7ICdtZW51LmNsZWFyLmxvY2FsLnN0b3JhZ2UnIHwgdHJhbnNsYXRlIH19XHJcbiAgYCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmQtYmxvY2tdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJTdG9yYWdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSwgcHJpdmF0ZSBtZXNzYWdlU3J2OiBOek1lc3NhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5tb2RhbFNydi5jb25maXJtKHtcclxuICAgICAgbnpUaXRsZTogJ01ha2Ugc3VyZSBjbGVhciBhbGwgbG9jYWwgc3RvcmFnZT8nLFxyXG4gICAgICBuek9uT2s6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTcnYuc3VjY2VzcygnQ2xlYXIgRmluaXNoZWQhJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19