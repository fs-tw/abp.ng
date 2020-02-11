/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SortOrderIconComponent {
    constructor() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedSortKey(value) {
        this._selectedSortKey = value;
        this.selectedSortKeyChange.emit(value);
    }
    /**
     * @return {?}
     */
    get selectedSortKey() {
        return this._selectedSortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set order(value) {
        this._order = value;
        this.orderChange.emit(value);
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @return {?}
     */
    get icon() {
        if (this.selectedSortKey === this.sortKey)
            return `sorting_${this.order}`;
        else
            return 'sorting';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sort(key) {
        this.selectedSortKey = key;
        switch (this.order) {
            case '':
                this.order = 'asc';
                this.orderChange.emit('asc');
                break;
            case 'asc':
                this.order = 'desc';
                this.orderChange.emit('desc');
                break;
            case 'desc':
                this.order = '';
                this.orderChange.emit('');
                break;
        }
    }
}
SortOrderIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-sort-order-icon',
                template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
            }] }
];
SortOrderIconComponent.propDecorators = {
    sortKey: [{ type: Input }],
    selectedSortKey: [{ type: Input }],
    order: [{ type: Input }],
    orderChange: [{ type: Output }],
    selectedSortKeyChange: [{ type: Output }],
    iconClass: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._order;
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._selectedSortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.sortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.orderChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.selectedSortKeyChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.iconClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXZFLE1BQU0sT0FBTyxzQkFBc0I7SUFKbkM7UUE2QnFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBMkJ4RSxDQUFDOzs7OztJQTlDQyxJQUNJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsSUFDSSxLQUFLLENBQUMsS0FBMEI7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBUUQsSUFBSSxJQUFJO1FBQ04sSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDckUsT0FBTyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLE1BQU07U0FDVDtJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNkdBQStDO2FBQ2hEOzs7c0JBS0UsS0FBSzs4QkFHTCxLQUFLO29CQVNMLEtBQUs7MEJBU0wsTUFBTTtvQ0FDTixNQUFNO3dCQUVOLEtBQUs7Ozs7Ozs7SUEzQk4sd0NBQW9DOzs7OztJQUNwQyxrREFBaUM7O0lBRWpDLHlDQUNnQjs7SUFvQmhCLDZDQUE0RDs7SUFDNUQsdURBQXNFOztJQUV0RSwyQ0FDa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtc29ydC1vcmRlci1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRPcmRlckljb25Db21wb25lbnQge1xyXG4gIHByaXZhdGUgX29yZGVyOiAnYXNjJyB8ICdkZXNjJyB8ICcnO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkU29ydEtleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnRLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRTb3J0S2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkU29ydEtleSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFNvcnRLZXlDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBzZWxlY3RlZFNvcnRLZXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFNvcnRLZXk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcmRlcih2YWx1ZTogJ2FzYycgfCAnZGVzYycgfCAnJykge1xyXG4gICAgdGhpcy5fb3JkZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBvcmRlcigpOiAnYXNjJyB8ICdkZXNjJyB8ICcnIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZFNvcnRLZXlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU29ydEtleSA9PT0gdGhpcy5zb3J0S2V5KSByZXR1cm4gYHNvcnRpbmdfJHt0aGlzLm9yZGVyfWA7XHJcbiAgICBlbHNlIHJldHVybiAnc29ydGluZyc7XHJcbiAgfVxyXG5cclxuICBzb3J0KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU29ydEtleSA9IGtleTtcclxuICAgIHN3aXRjaCAodGhpcy5vcmRlcikge1xyXG4gICAgICBjYXNlICcnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnYXNjJztcclxuICAgICAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQoJ2FzYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhc2MnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnZGVzYyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCdkZXNjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Rlc2MnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnJztcclxuICAgICAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQoJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=