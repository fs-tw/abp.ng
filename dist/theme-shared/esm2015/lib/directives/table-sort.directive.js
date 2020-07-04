import { __decorate, __metadata, __param } from "tslib";
import { SortPipe } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Host, Input, Optional, Self, } from '@angular/core';
import clone from 'just-clone';
import snq from 'snq';
import { TableComponent } from '../components/table/table.component';
/**
 *
 * @deprecated To be deleted in v3.3
 */
let TableSortDirective = class TableSortDirective {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableSortDirective.prototype, "abpTableSort", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableSortDirective.prototype, "value", void 0);
TableSortDirective = __decorate([
    Directive({
        selector: '[abpTableSort]',
        providers: [SortPipe],
    }),
    __param(0, Host()), __param(0, Optional()), __param(0, Self()),
    __metadata("design:paramtypes", [TableComponent,
        SortPipe,
        ChangeDetectorRef])
], TableSortDirective);
export { TableSortDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLElBQUksR0FFTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVFyRTs7O0dBR0c7QUFLSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWE3QixZQUNzQyxRQUF3QixFQUNwRCxRQUFrQixFQUNsQixLQUF3QjtRQUZJLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3BELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFYbEMsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQVlmLENBQUM7SUFWSixJQUFJLEtBQUs7UUFDUCxPQUFPLENBQ0wsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtTQUNuSCxDQUFDO0lBQ0osQ0FBQztJQVFELFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWlCO1FBQ2hELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUssRUFBdUIsQ0FBQztZQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUN0QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTNCQztJQURDLEtBQUssRUFBRTs7d0RBQ3VCO0FBRy9CO0lBREMsS0FBSyxFQUFFOztpREFDVTtBQUxQLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUN0QixDQUFDO0lBZUcsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLElBQUksRUFBRSxDQUFBO3FDQUFtQixjQUFjO1FBQzFDLFFBQVE7UUFDWCxpQkFBaUI7R0FoQnZCLGtCQUFrQixDQTZCOUI7U0E3Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydE9yZGVyLCBTb3J0UGlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGNsb25lIGZyb20gJ2p1c3QtY2xvbmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVNvcnRPcHRpb25zIHtcclxuICBrZXk6IHN0cmluZztcclxuICBvcmRlcjogU29ydE9yZGVyO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBkZXByZWNhdGVkIFRvIGJlIGRlbGV0ZWQgaW4gdjMuM1xyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWJwVGFibGVTb3J0XScsXHJcbiAgcHJvdmlkZXJzOiBbU29ydFBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIGFicFRhYmxlU29ydDogVGFibGVTb3J0T3B0aW9ucztcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogYW55W10gPSBbXTtcclxuXHJcbiAgZ2V0IHRhYmxlKCk6IFRhYmxlQ29tcG9uZW50IHwgYW55IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuYWJwVGFibGUgfHwgc25xKCgpID0+IHRoaXMuY2RSZWZbJ192aWV3J10uY29tcG9uZW50KSB8fCBzbnEoKCkgPT4gdGhpcy5jZFJlZlsnY29udGV4dCddKSAvLyAnY29udGV4dCcgZm9yIGl2eVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2VsZigpIHByaXZhdGUgYWJwVGFibGU6IFRhYmxlQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBzb3J0UGlwZTogU29ydFBpcGUsXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHsgdmFsdWUsIGFicFRhYmxlU29ydCB9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy50YWJsZSAmJiAodmFsdWUgfHwgYWJwVGFibGVTb3J0KSkge1xyXG4gICAgICB0aGlzLmFicFRhYmxlU29ydCA9IHRoaXMuYWJwVGFibGVTb3J0IHx8ICh7fSBhcyBUYWJsZVNvcnRPcHRpb25zKTtcclxuICAgICAgdGhpcy50YWJsZS52YWx1ZSA9IHRoaXMuc29ydFBpcGUudHJhbnNmb3JtKFxyXG4gICAgICAgIGNsb25lKHRoaXMudmFsdWUpLFxyXG4gICAgICAgIHRoaXMuYWJwVGFibGVTb3J0Lm9yZGVyLFxyXG4gICAgICAgIHRoaXMuYWJwVGFibGVTb3J0LmtleSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19