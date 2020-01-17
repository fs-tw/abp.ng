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
export class TableSortDirective {
    /**
     * @param {?} abpTable
     * @param {?} sortPipe
     * @param {?} cdRef
     */
    constructor(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    /**
     * @return {?}
     */
    get table() {
        return (this.abpTable || snq((/**
         * @return {?}
         */
        () => this.cdRef['_view'].component)) || snq((/**
         * @return {?}
         */
        () => this.cdRef['context'])) // 'context' for ivy
        );
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ value, abpTableSort }) {
        if (this.table && (value || abpTableSort)) {
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
    { type: TableComponent, decorators: [{ type: Host }, { type: Optional }, { type: Self }] },
    { type: SortPipe },
    { type: ChangeDetectorRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFFckUsc0NBR0M7OztJQUZDLCtCQUFZOztJQUNaLGlDQUFpQjs7QUFPbkIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBYTdCLFlBQ3NDLFFBQXdCLEVBQ3BELFFBQWtCLEVBQ2xCLEtBQXdCO1FBRkksYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDcEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQVhsQyxVQUFLLEdBQVUsRUFBRSxDQUFDO0lBWWYsQ0FBQzs7OztJQVZKLElBQUksS0FBSztRQUNQLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLG9CQUFvQjtTQUNuSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFRRCxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFpQjtRQUNoRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFvQixDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDdEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDdEI7Ozs7WUFWUSxjQUFjLHVCQXlCbEIsSUFBSSxZQUFJLFFBQVEsWUFBSSxJQUFJO1lBdENULFFBQVE7WUFFMUIsaUJBQWlCOzs7MkJBdUJoQixLQUFLO29CQUdMLEtBQUs7Ozs7SUFITiwwQ0FDK0I7O0lBRS9CLG1DQUNrQjs7Ozs7SUFTaEIsc0NBQTREOzs7OztJQUM1RCxzQ0FBMEI7Ozs7O0lBQzFCLG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvcnRPcmRlciwgU29ydFBpcGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPcHRpb25hbCxcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBjbG9uZSBmcm9tICdqdXN0LWNsb25lJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVTb3J0T3B0aW9ucyB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgb3JkZXI6IFNvcnRPcmRlcjtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWJwVGFibGVTb3J0XScsXHJcbiAgcHJvdmlkZXJzOiBbU29ydFBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIGFicFRhYmxlU29ydDogVGFibGVTb3J0T3B0aW9ucztcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogYW55W10gPSBbXTtcclxuXHJcbiAgZ2V0IHRhYmxlKCk6IFRhYmxlQ29tcG9uZW50IHwgYW55IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuYWJwVGFibGUgfHwgc25xKCgpID0+IHRoaXMuY2RSZWZbJ192aWV3J10uY29tcG9uZW50KSB8fCBzbnEoKCkgPT4gdGhpcy5jZFJlZlsnY29udGV4dCddKSAvLyAnY29udGV4dCcgZm9yIGl2eVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2VsZigpIHByaXZhdGUgYWJwVGFibGU6IFRhYmxlQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBzb3J0UGlwZTogU29ydFBpcGUsXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHsgdmFsdWUsIGFicFRhYmxlU29ydCB9OiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy50YWJsZSAmJiAodmFsdWUgfHwgYWJwVGFibGVTb3J0KSkge1xyXG4gICAgICB0aGlzLmFicFRhYmxlU29ydCA9IHRoaXMuYWJwVGFibGVTb3J0IHx8ICh7fSBhcyBUYWJsZVNvcnRPcHRpb25zKTtcclxuICAgICAgdGhpcy50YWJsZS52YWx1ZSA9IHRoaXMuc29ydFBpcGUudHJhbnNmb3JtKFxyXG4gICAgICAgIGNsb25lKHRoaXMudmFsdWUpLFxyXG4gICAgICAgIHRoaXMuYWJwVGFibGVTb3J0Lm9yZGVyLFxyXG4gICAgICAgIHRoaXMuYWJwVGFibGVTb3J0LmtleSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19