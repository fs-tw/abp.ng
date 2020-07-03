import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "@ngx-translate/core";
export class HeaderStorageComponent {
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
}
HeaderStorageComponent.ɵfac = function HeaderStorageComponent_Factory(t) { return new (t || HeaderStorageComponent)(i0.ɵɵdirectiveInject(i1.NzModalService), i0.ɵɵdirectiveInject(i2.NzMessageService)); };
HeaderStorageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderStorageComponent, selectors: [["header-storage"]], hostVars: 2, hostBindings: function HeaderStorageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function HeaderStorageComponent_click_HostBindingHandler() { return ctx._click(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("d-block", true);
    } }, decls: 3, vars: 3, consts: [["nz-icon", "", "nzType", "tool"]], template: function HeaderStorageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "i", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "menu.clear.local.storage"), " ");
    } }, directives: [i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], pipes: [i5.TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderStorageComponent, [{
        type: Component,
        args: [{
                selector: 'header-storage',
                template: `
    <i nz-icon nzType="tool"></i>
    {{ 'menu.clear.local.storage' | translate }}
  `,
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.d-block]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.NzModalService }, { type: i2.NzMessageService }]; }, { _click: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3N0b3JhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQWNyRCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW9CLFFBQXdCLEVBQVUsVUFBNEI7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7SUFHdEYsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0MsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OzRGQVpVLHNCQUFzQjsyREFBdEIsc0JBQXNCO21HQUF0QixZQUFROzs7O1FBVGpCLHVCQUE2QjtRQUM3QixZQUNGOzs7UUFERSxlQUNGO1FBREUsaUZBQ0Y7O2tEQU9XLHNCQUFzQjtjQVpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxzREFBc0Q7Z0JBQ3RELElBQUksRUFBRTtvQkFDSixpQkFBaUIsRUFBRSxNQUFNO2lCQUMxQjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBSUUsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItc3RvcmFnZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwidG9vbFwiPjwvaT5cclxuICAgIHt7ICdtZW51LmNsZWFyLmxvY2FsLnN0b3JhZ2UnIHwgdHJhbnNsYXRlIH19XHJcbiAgYCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmQtYmxvY2tdJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJTdG9yYWdlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU3J2OiBOek1vZGFsU2VydmljZSwgcHJpdmF0ZSBtZXNzYWdlU3J2OiBOek1lc3NhZ2VTZXJ2aWNlKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgX2NsaWNrKCkge1xyXG4gICAgdGhpcy5tb2RhbFNydi5jb25maXJtKHtcclxuICAgICAgbnpUaXRsZTogJ01ha2Ugc3VyZSBjbGVhciBhbGwgbG9jYWwgc3RvcmFnZT8nLFxyXG4gICAgICBuek9uT2s6ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VTcnYuc3VjY2VzcygnQ2xlYXIgRmluaXNoZWQhJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19