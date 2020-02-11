/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var SortOrderIconComponent = /** @class */ (function () {
    function SortOrderIconComponent() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    Object.defineProperty(SortOrderIconComponent.prototype, "selectedSortKey", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedSortKey;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectedSortKey = value;
            this.selectedSortKeyChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "order", {
        get: /**
         * @return {?}
         */
        function () {
            return this._order;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._order = value;
            this.orderChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortOrderIconComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.selectedSortKey === this.sortKey)
                return "sorting_" + this.order;
            else
                return 'sorting';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    SortOrderIconComponent.prototype.sort = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
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
    };
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
    return SortOrderIconComponent;
}());
export { SortOrderIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUE2QnFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBMkJ4RSxDQUFDO0lBOUNDLHNCQUNJLG1EQUFlOzs7O1FBSW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFQRCxVQUNvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLHlDQUFLOzs7O1FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFQRCxVQUNVLEtBQTBCO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBV0Qsc0JBQUksd0NBQUk7Ozs7UUFBUjtZQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsT0FBTztnQkFBRSxPQUFPLGFBQVcsSUFBSSxDQUFDLEtBQU8sQ0FBQzs7Z0JBQ3JFLE9BQU8sU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQUVELHFDQUFJOzs7O0lBQUosVUFBSyxHQUFXO1FBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7UUFDM0IsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw2R0FBK0M7aUJBQ2hEOzs7MEJBS0UsS0FBSztrQ0FHTCxLQUFLO3dCQVNMLEtBQUs7OEJBU0wsTUFBTTt3Q0FDTixNQUFNOzRCQUVOLEtBQUs7O0lBeUJSLDZCQUFDO0NBQUEsQUF6REQsSUF5REM7U0FyRFksc0JBQXNCOzs7Ozs7SUFDakMsd0NBQW9DOzs7OztJQUNwQyxrREFBaUM7O0lBRWpDLHlDQUNnQjs7SUFvQmhCLDZDQUE0RDs7SUFDNUQsdURBQXNFOztJQUV0RSwyQ0FDa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtc29ydC1vcmRlci1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRPcmRlckljb25Db21wb25lbnQge1xyXG4gIHByaXZhdGUgX29yZGVyOiAnYXNjJyB8ICdkZXNjJyB8ICcnO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkU29ydEtleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNvcnRLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRTb3J0S2V5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkU29ydEtleSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZWxlY3RlZFNvcnRLZXlDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBzZWxlY3RlZFNvcnRLZXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFNvcnRLZXk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcmRlcih2YWx1ZTogJ2FzYycgfCAnZGVzYycgfCAnJykge1xyXG4gICAgdGhpcy5fb3JkZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBvcmRlcigpOiAnYXNjJyB8ICdkZXNjJyB8ICcnIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmRlcjtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcmRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZFNvcnRLZXlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBpY29uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkU29ydEtleSA9PT0gdGhpcy5zb3J0S2V5KSByZXR1cm4gYHNvcnRpbmdfJHt0aGlzLm9yZGVyfWA7XHJcbiAgICBlbHNlIHJldHVybiAnc29ydGluZyc7XHJcbiAgfVxyXG5cclxuICBzb3J0KGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkU29ydEtleSA9IGtleTtcclxuICAgIHN3aXRjaCAodGhpcy5vcmRlcikge1xyXG4gICAgICBjYXNlICcnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnYXNjJztcclxuICAgICAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQoJ2FzYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhc2MnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnZGVzYyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCdkZXNjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Rlc2MnOlxyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnJztcclxuICAgICAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQoJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=