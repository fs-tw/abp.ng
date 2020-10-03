import { SortPipe } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Host, Input, Optional, Self, } from '@angular/core';
import clone from 'just-clone';
import snq from 'snq';
import { TableComponent } from '../components/table/table.component';
/**
 *
 * @deprecated To be deleted in v3.3
 */
export class TableSortDirective {
    constructor(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    get table() {
        return (this.abpTable || snq(() => this.cdRef['_view'].component) || snq(() => this.cdRef['context']) // 'context' for ivy
        );
    }
    ngOnChanges({ value, abpTableSort }) {
        if (this.table && (value || abpTableSort)) {
            this.abpTableSort = this.abpTableSort || {};
            this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    }
}
TableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpTableSort]',
                providers: [SortPipe],
            },] }
];
TableSortDirective.ctorParameters = () => [
    { type: TableComponent, decorators: [{ type: Host }, { type: Optional }, { type: Self }] },
    { type: SortPipe },
    { type: ChangeDetectorRef }
];
TableSortDirective.propDecorators = {
    abpTableSort: [{ type: Input }],
    value: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBUXJFOzs7R0FHRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUFhN0IsWUFDc0MsUUFBd0IsRUFDcEQsUUFBa0IsRUFDbEIsS0FBd0I7UUFGSSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUNwRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBWGxDLFVBQUssR0FBVSxFQUFFLENBQUM7SUFZZixDQUFDO0lBVkosSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7U0FDbkgsQ0FBQztJQUNKLENBQUM7SUFRRCxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFpQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFLLEVBQXVCLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDdEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDdEI7OztZQWZRLGNBQWMsdUJBOEJsQixJQUFJLFlBQUksUUFBUSxZQUFJLElBQUk7WUEzQ1QsUUFBUTtZQUUxQixpQkFBaUI7OzsyQkE0QmhCLEtBQUs7b0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRPcmRlciwgU29ydFBpcGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVTb3J0T3B0aW9ucyB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgb3JkZXI6IFNvcnRPcmRlcjtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCBUbyBiZSBkZWxldGVkIGluIHYzLjNcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FicFRhYmxlU29ydF0nLFxyXG4gIHByb3ZpZGVyczogW1NvcnRQaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlU29ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICBhYnBUYWJsZVNvcnQ6IFRhYmxlU29ydE9wdGlvbnM7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueVtdID0gW107XHJcblxyXG4gIGdldCB0YWJsZSgpOiBUYWJsZUNvbXBvbmVudCB8IGFueSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmFicFRhYmxlIHx8IHNucSgoKSA9PiB0aGlzLmNkUmVmWydfdmlldyddLmNvbXBvbmVudCkgfHwgc25xKCgpID0+IHRoaXMuY2RSZWZbJ2NvbnRleHQnXSkgLy8gJ2NvbnRleHQnIGZvciBpdnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNlbGYoKSBwcml2YXRlIGFicFRhYmxlOiBUYWJsZUNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgc29ydFBpcGU6IFNvcnRQaXBlLFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyh7IHZhbHVlLCBhYnBUYWJsZVNvcnQgfTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHRoaXMudGFibGUgJiYgKHZhbHVlIHx8IGFicFRhYmxlU29ydCkpIHtcclxuICAgICAgdGhpcy5hYnBUYWJsZVNvcnQgPSB0aGlzLmFicFRhYmxlU29ydCB8fCAoe30gYXMgVGFibGVTb3J0T3B0aW9ucyk7XHJcbiAgICAgIHRoaXMudGFibGUudmFsdWUgPSB0aGlzLnNvcnRQaXBlLnRyYW5zZm9ybShcclxuICAgICAgICBjbG9uZSh0aGlzLnZhbHVlKSxcclxuICAgICAgICB0aGlzLmFicFRhYmxlU29ydC5vcmRlcixcclxuICAgICAgICB0aGlzLmFicFRhYmxlU29ydC5rZXksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==