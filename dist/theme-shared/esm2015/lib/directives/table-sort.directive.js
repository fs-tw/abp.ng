/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Optional, Self } from '@angular/core';
import { Table } from 'primeng/table';
import clone from 'just-clone';
import { SortPipe } from '@abp/ng.core';
/**
 * @record
 */
export function TableSortOptions() { }
if (false) {
    /** @type {?} */
    TableSortOptions.prototype.key;
    /** @type {?} */
    TableSortOptions.prototype.order;
}
export class TableSortDirective {
    /**
     * @param {?} table
     * @param {?} sortPipe
     */
    constructor(table, sortPipe) {
        this.table = table;
        this.sortPipe = sortPipe;
        this.value = [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ value, abpTableSort }) {
        if (value || abpTableSort) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
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
/** @nocollapse */
TableSortDirective.ctorParameters = () => [
    { type: Table, decorators: [{ type: Optional }, { type: Self }] },
    { type: SortPipe }
];
TableSortDirective.propDecorators = {
    abpTableSort: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableSortDirective.prototype.abpTableSort;
    /** @type {?} */
    TableSortDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.table;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.sortPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUUsUUFBUSxFQUFhLE1BQU0sY0FBYyxDQUFDOzs7O0FBRW5ELHNDQUdDOzs7SUFGQywrQkFBWTs7SUFDWixpQ0FBaUI7O0FBT25CLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBSzdCLFlBQXdDLEtBQVksRUFBVSxRQUFrQjtRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQURoRixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBQ2lFLENBQUM7Ozs7O0lBQ3BGLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWlCO1FBQ2hELElBQUksS0FBSyxJQUFJLFlBQVksRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxtQkFBQSxFQUFFLEVBQW9CLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0c7SUFDSCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O1lBWlEsS0FBSyx1QkFrQkMsUUFBUSxZQUFJLElBQUk7WUFoQnRCLFFBQVE7OzsyQkFZZCxLQUFLO29CQUVMLEtBQUs7Ozs7SUFGTiwwQ0FDK0I7O0lBQy9CLG1DQUNrQjs7Ozs7SUFDTixtQ0FBd0M7Ozs7O0lBQUUsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xyXG5pbXBvcnQgY2xvbmUgZnJvbSAnanVzdC1jbG9uZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlLCBTb3J0T3JkZXIgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVNvcnRPcHRpb25zIHtcclxuICBrZXk6IHN0cmluZztcclxuICBvcmRlcjogU29ydE9yZGVyO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYnBUYWJsZVNvcnRdJyxcclxuICBwcm92aWRlcnM6IFtTb3J0UGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgYWJwVGFibGVTb3J0OiBUYWJsZVNvcnRPcHRpb25zO1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueVtdID0gW107XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBwcml2YXRlIHRhYmxlOiBUYWJsZSwgcHJpdmF0ZSBzb3J0UGlwZTogU29ydFBpcGUpIHt9XHJcbiAgbmdPbkNoYW5nZXMoeyB2YWx1ZSwgYWJwVGFibGVTb3J0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh2YWx1ZSB8fCBhYnBUYWJsZVNvcnQpIHtcclxuICAgICAgdGhpcy5hYnBUYWJsZVNvcnQgPSB0aGlzLmFicFRhYmxlU29ydCB8fCAoe30gYXMgVGFibGVTb3J0T3B0aW9ucyk7XHJcbiAgICAgIHRoaXMudGFibGUudmFsdWUgPSB0aGlzLnNvcnRQaXBlLnRyYW5zZm9ybShjbG9uZSh0aGlzLnZhbHVlKSwgdGhpcy5hYnBUYWJsZVNvcnQub3JkZXIsIHRoaXMuYWJwVGFibGVTb3J0LmtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==