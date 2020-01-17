/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/table-sort.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SortPipe } from '@abp/ng.core';
import { ChangeDetectorRef, Directive, Host, Input, Optional, Self, } from '@angular/core';
import clone from 'just-clone';
import snq from 'snq';
import { TableComponent } from '../components/table/table.component';
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
var TableSortDirective = /** @class */ (function () {
    function TableSortDirective(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    Object.defineProperty(TableSortDirective.prototype, "table", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return (this.abpTable || snq((/**
             * @return {?}
             */
            function () { return _this.cdRef['_view'].component; })) || snq((/**
             * @return {?}
             */
            function () { return _this.cdRef['context']; })) // 'context' for ivy
            );
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __0
     * @return {?}
     */
    TableSortDirective.prototype.ngOnChanges = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var value = _a.value, abpTableSort = _a.abpTableSort;
        if (this.table && (value || abpTableSort)) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    };
    TableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpTableSort]',
                    providers: [SortPipe],
                },] }
    ];
    /** @nocollapse */
    TableSortDirective.ctorParameters = function () { return [
        { type: TableComponent, decorators: [{ type: Host }, { type: Optional }, { type: Self }] },
        { type: SortPipe },
        { type: ChangeDetectorRef }
    ]; };
    TableSortDirective.propDecorators = {
        abpTableSort: [{ type: Input }],
        value: [{ type: Input }]
    };
    return TableSortDirective;
}());
export { TableSortDirective };
if (false) {
    /** @type {?} */
    TableSortDirective.prototype.abpTableSort;
    /** @type {?} */
    TableSortDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.abpTable;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.sortPipe;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFFckUsc0NBR0M7OztJQUZDLCtCQUFZOztJQUNaLGlDQUFpQjs7QUFHbkI7SUFpQkUsNEJBQ3NDLFFBQXdCLEVBQ3BELFFBQWtCLEVBQ2xCLEtBQXdCO1FBRkksYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQVhsQyxVQUFLLEdBQVUsRUFBRSxDQUFDO0lBWWYsQ0FBQztJQVZKLHNCQUFJLHFDQUFLOzs7O1FBQVQ7WUFBQSxpQkFJQztZQUhDLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBN0IsQ0FBNkIsRUFBQyxJQUFJLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUMsb0JBQW9CO2FBQ25ILENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7SUFRRCx3Q0FBVzs7OztJQUFYLFVBQVksRUFBc0M7WUFBcEMsZ0JBQUssRUFBRSw4QkFBWTtRQUMvQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFvQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDdEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3RCOzs7O2dCQVZRLGNBQWMsdUJBeUJsQixJQUFJLFlBQUksUUFBUSxZQUFJLElBQUk7Z0JBdENULFFBQVE7Z0JBRTFCLGlCQUFpQjs7OytCQXVCaEIsS0FBSzt3QkFHTCxLQUFLOztJQXlCUix5QkFBQztDQUFBLEFBakNELElBaUNDO1NBN0JZLGtCQUFrQjs7O0lBQzdCLDBDQUMrQjs7SUFFL0IsbUNBQ2tCOzs7OztJQVNoQixzQ0FBNEQ7Ozs7O0lBQzVELHNDQUEwQjs7Ozs7SUFDMUIsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydE9yZGVyLCBTb3J0UGlwZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGNsb25lIGZyb20gJ2p1c3QtY2xvbmUnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWJsZVNvcnRPcHRpb25zIHtcclxuICBrZXk6IHN0cmluZztcclxuICBvcmRlcjogU29ydE9yZGVyO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thYnBUYWJsZVNvcnRdJyxcclxuICBwcm92aWRlcnM6IFtTb3J0UGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVNvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpXHJcbiAgYWJwVGFibGVTb3J0OiBUYWJsZVNvcnRPcHRpb25zO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBhbnlbXSA9IFtdO1xyXG5cclxuICBnZXQgdGFibGUoKTogVGFibGVDb21wb25lbnQgfCBhbnkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5hYnBUYWJsZSB8fCBzbnEoKCkgPT4gdGhpcy5jZFJlZlsnX3ZpZXcnXS5jb21wb25lbnQpIHx8IHNucSgoKSA9PiB0aGlzLmNkUmVmWydjb250ZXh0J10pIC8vICdjb250ZXh0JyBmb3IgaXZ5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTZWxmKCkgcHJpdmF0ZSBhYnBUYWJsZTogVGFibGVDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHNvcnRQaXBlOiBTb3J0UGlwZSxcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoeyB2YWx1ZSwgYWJwVGFibGVTb3J0IH06IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0aGlzLnRhYmxlICYmICh2YWx1ZSB8fCBhYnBUYWJsZVNvcnQpKSB7XHJcbiAgICAgIHRoaXMuYWJwVGFibGVTb3J0ID0gdGhpcy5hYnBUYWJsZVNvcnQgfHwgKHt9IGFzIFRhYmxlU29ydE9wdGlvbnMpO1xyXG4gICAgICB0aGlzLnRhYmxlLnZhbHVlID0gdGhpcy5zb3J0UGlwZS50cmFuc2Zvcm0oXHJcbiAgICAgICAgY2xvbmUodGhpcy52YWx1ZSksXHJcbiAgICAgICAgdGhpcy5hYnBUYWJsZVNvcnQub3JkZXIsXHJcbiAgICAgICAgdGhpcy5hYnBUYWJsZVNvcnQua2V5LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=