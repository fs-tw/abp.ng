import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class NgxDatatableDefaultDirective {
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
}
NgxDatatableDefaultDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line
                selector: 'ngx-datatable[default]',
                exportAs: 'ngxDatatableDefault',
            },] }
];
NgxDatatableDefaultDirective.ctorParameters = () => [
    { type: DatatableComponent },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NgxDatatableDefaultDirective.propDecorators = {
    class: [{ type: Input }],
    classes: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvbmd4LWRhdGF0YWJsZS1kZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBcUIsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPOUMsTUFBTSxPQUFPLDRCQUE0QjtJQVl2QyxZQUFvQixLQUF5QixFQUE0QixRQUFzQjtRQUEzRSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBWHZGLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUFHLG1CQUFtQixDQUFDO1FBUW5DLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBWkQsSUFDSSxPQUFPO1FBQ1QsT0FBTyxpQkFBaUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFXTyxnQkFBZ0IsQ0FBQyxRQUEyQjtRQUNsRCxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEQsSUFBSSxlQUFlLENBQUMsWUFBWSxLQUFLLGVBQWUsQ0FBQyxZQUFZLEVBQUU7WUFDakUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELFFBQVEsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN6QztTQUNGO2FBQU07WUFDTCxRQUFRLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLGlFQUFpRTtRQUNqRSxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFFOUMsSUFBSSxDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUV0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULDJCQUEyQjtnQkFDM0IsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7O1lBUm9CLGtCQUFrQjs0Q0FxQlcsTUFBTSxTQUFDLFFBQVE7OztvQkFQOUQsS0FBSztzQkFFTCxXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1vZGUsIERhdGF0YWJsZUNvbXBvbmVudCwgU2Nyb2xsZXJDb21wb25lbnQgfSBmcm9tICdAc3dpbWxhbmUvbmd4LWRhdGF0YWJsZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZVtkZWZhdWx0XScsXHJcbiAgZXhwb3J0QXM6ICduZ3hEYXRhdGFibGVEZWZhdWx0JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neERhdGF0YWJsZURlZmF1bHREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBwcml2YXRlIHJlc2l6ZURpZmYgPSAwO1xyXG5cclxuICBASW5wdXQoKSBjbGFzcyA9ICdtYXRlcmlhbCBib3JkZXJlZCc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYG5neC1kYXRhdGFibGUgJHt0aGlzLmNsYXNzfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhYmxlOiBEYXRhdGFibGVDb21wb25lbnQsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IE1vY2tEb2N1bWVudCkge1xyXG4gICAgdGhpcy50YWJsZS5jb2x1bW5Nb2RlID0gQ29sdW1uTW9kZS5mb3JjZTtcclxuICAgIHRoaXMudGFibGUuZm9vdGVySGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnRhYmxlLmhlYWRlckhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy50YWJsZS5yb3dIZWlnaHQgPSAnYXV0byc7XHJcbiAgICB0aGlzLnRhYmxlLnNjcm9sbGJhckggPSB0cnVlO1xyXG4gICAgdGhpcy50YWJsZS52aXJ0dWFsaXphdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhIb3Jpem9udGFsR2FwKHNjcm9sbGVyOiBTY3JvbGxlckNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgeyBib2R5LCBkb2N1bWVudEVsZW1lbnQgfSA9IHRoaXMuZG9jdW1lbnQ7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgIT09IGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgaWYgKHRoaXMucmVzaXplRGlmZiA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMucmVzaXplRGlmZiA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuICAgICAgICBzY3JvbGxlci5zY3JvbGxXaWR0aCAtPSB0aGlzLnJlc2l6ZURpZmY7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNjcm9sbGVyLnNjcm9sbFdpZHRoICs9IHRoaXMucmVzaXplRGlmZjtcclxuICAgICAgdGhpcy5yZXNpemVEaWZmID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZml4U3R5bGVPbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIC8vIGF2b2lkZWQgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIGluIGZhdm9yIG9mIHBlcmZvcm1hbmNlXHJcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsZXIgfSA9IHRoaXMudGFibGUuYm9keUNvbXBvbmVudDtcclxuXHJcbiAgICAgICAgaWYgKCFzY3JvbGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmZpeEhvcml6b250YWxHYXAoc2Nyb2xsZXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoc3Vic2NyaXB0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZml4U3R5bGVPbldpbmRvd1Jlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZml4OiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDM1MVxyXG5pbnRlcmZhY2UgTW9ja0RvY3VtZW50IHtcclxuICBib2R5OiBNb2NrQm9keTtcclxuICBkb2N1bWVudEVsZW1lbnQ6IE1vY2tEb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNb2NrQm9keSB7XHJcbiAgb2Zmc2V0V2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1vY2tEb2N1bWVudEVsZW1lbnQge1xyXG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xyXG4gIHNjcm9sbEhlaWdodDogbnVtYmVyO1xyXG59XHJcbiJdfQ==