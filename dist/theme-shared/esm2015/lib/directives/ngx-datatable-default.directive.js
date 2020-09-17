import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
let NgxDatatableDefaultDirective = class NgxDatatableDefaultDirective {
    constructor(table, document) {
        this.table = table;
        this.document = document;
        this.subscription = new Subscription();
        this.resizeDiff = 0;
        this.class = 'material bordered';
        this.table.columnMode = ColumnMode.force;
        this.table.footerHeight = 50;
        this.table.headerHeight = 50;
        this.table.rowHeight = 'auto';
        this.table.scrollbarH = true;
        this.table.virtualization = false;
    }
    get classes() {
        return `ngx-datatable ${this.class}`;
    }
    fixHorizontalGap(scroller) {
        const { body, documentElement } = this.document;
        if (documentElement.scrollHeight !== documentElement.clientHeight) {
            if (this.resizeDiff === 0) {
                this.resizeDiff = window.innerWidth - body.offsetWidth;
                scroller.scrollWidth -= this.resizeDiff;
            }
        }
        else {
            scroller.scrollWidth += this.resizeDiff;
            this.resizeDiff = 0;
        }
    }
    fixStyleOnWindowResize() {
        // avoided @HostListener('window:resize') in favor of performance
        const subscription = fromEvent(window, 'resize')
            .pipe(debounceTime(500))
            .subscribe(() => {
            const { scroller } = this.table.bodyComponent;
            if (!scroller)
                return;
            this.fixHorizontalGap(scroller);
        });
        this.subscription.add(subscription);
    }
    ngAfterViewInit() {
        this.fixStyleOnWindowResize();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDatatableDefaultDirective.prototype, "class", void 0);
__decorate([
    HostBinding('class'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], NgxDatatableDefaultDirective.prototype, "classes", null);
NgxDatatableDefaultDirective = __decorate([
    Directive({
        // tslint:disable-next-line
        selector: 'ngx-datatable[default]',
        exportAs: 'ngxDatatableDefault',
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [DatatableComponent, Object])
], NgxDatatableDefaultDirective);
export { NgxDatatableDefaultDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQXFCLE1BQU0seUJBQXlCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBWXZDLFlBQW9CLEtBQXlCLEVBQTRCLFFBQXNCO1FBQTNFLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFYdkYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFZCxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFRbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFYRCxJQUFJLE9BQU87UUFDVCxPQUFPLGlCQUFpQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQVdPLGdCQUFnQixDQUFDLFFBQTJCO1FBQ2xELE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoRCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEtBQUssZUFBZSxDQUFDLFlBQVksRUFBRTtZQUNqRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDdkQsUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pDO1NBQ0Y7YUFBTTtZQUNMLFFBQVEsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsaUVBQWlFO1FBQ2pFLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUU5QyxJQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPO1lBRXRCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFBO0FBcERVO0lBQVIsS0FBSyxFQUFFOzsyREFBNkI7QUFHckM7SUFEQyxXQUFXLENBQUMsT0FBTyxDQUFDOzs7MkRBR3BCO0FBVlUsNEJBQTRCO0lBTHhDLFNBQVMsQ0FBQztRQUNULDJCQUEyQjtRQUMzQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxxQkFBcUI7S0FDaEMsQ0FBQztJQWFnRCxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FBckMsa0JBQWtCO0dBWmxDLDRCQUE0QixDQXlEeEM7U0F6RFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTW9kZSwgRGF0YXRhYmxlQ29tcG9uZW50LCBTY3JvbGxlckNvbXBvbmVudCB9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgc2VsZWN0b3I6ICduZ3gtZGF0YXRhYmxlW2RlZmF1bHRdJyxcclxuICBleHBvcnRBczogJ25neERhdGF0YWJsZURlZmF1bHQnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0YXRhYmxlRGVmYXVsdERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgcmVzaXplRGlmZiA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIGNsYXNzID0gJ21hdGVyaWFsIGJvcmRlcmVkJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgbmd4LWRhdGF0YWJsZSAke3RoaXMuY2xhc3N9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFibGU6IERhdGF0YWJsZUNvbXBvbmVudCwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogTW9ja0RvY3VtZW50KSB7XHJcbiAgICB0aGlzLnRhYmxlLmNvbHVtbk1vZGUgPSBDb2x1bW5Nb2RlLmZvcmNlO1xyXG4gICAgdGhpcy50YWJsZS5mb290ZXJIZWlnaHQgPSA1MDtcclxuICAgIHRoaXMudGFibGUuaGVhZGVySGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnRhYmxlLnJvd0hlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMudGFibGUuc2Nyb2xsYmFySCA9IHRydWU7XHJcbiAgICB0aGlzLnRhYmxlLnZpcnR1YWxpemF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpeEhvcml6b250YWxHYXAoc2Nyb2xsZXI6IFNjcm9sbGVyQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCB7IGJvZHksIGRvY3VtZW50RWxlbWVudCB9ID0gdGhpcy5kb2N1bWVudDtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAhPT0gZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xyXG4gICAgICBpZiAodGhpcy5yZXNpemVEaWZmID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVEaWZmID0gd2luZG93LmlubmVyV2lkdGggLSBib2R5Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFdpZHRoIC09IHRoaXMucmVzaXplRGlmZjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2Nyb2xsZXIuc2Nyb2xsV2lkdGggKz0gdGhpcy5yZXNpemVEaWZmO1xyXG4gICAgICB0aGlzLnJlc2l6ZURpZmYgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhTdHlsZU9uV2luZG93UmVzaXplKCkge1xyXG4gICAgLy8gYXZvaWRlZCBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgaW4gZmF2b3Igb2YgcGVyZm9ybWFuY2VcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoNTAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzY3JvbGxlciB9ID0gdGhpcy50YWJsZS5ib2R5Q29tcG9uZW50O1xyXG5cclxuICAgICAgICBpZiAoIXNjcm9sbGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZml4SG9yaXpvbnRhbEdhcChzY3JvbGxlcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChzdWJzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5maXhTdHlsZU9uV2luZG93UmVzaXplKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmaXg6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMzUxXHJcbmludGVyZmFjZSBNb2NrRG9jdW1lbnQge1xyXG4gIGJvZHk6IE1vY2tCb2R5O1xyXG4gIGRvY3VtZW50RWxlbWVudDogTW9ja0RvY3VtZW50RWxlbWVudDtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1vY2tCb2R5IHtcclxuICBvZmZzZXRXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW9ja0RvY3VtZW50RWxlbWVudCB7XHJcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XHJcbiAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuIl19