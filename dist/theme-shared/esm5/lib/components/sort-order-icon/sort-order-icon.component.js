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
            if (!this.selectedSortKey)
                return 'sorting';
            if (this.selectedSortKey === this.sortKey)
                return "sorting_" + this.order;
            else
                return '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFO0lBQUE7UUE2QnFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBNEJ4RSxDQUFDO0lBL0NDLHNCQUNJLG1EQUFlOzs7O1FBSW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFQRCxVQUNvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUtELHNCQUNJLHlDQUFLOzs7O1FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFQRCxVQUNVLEtBQTBCO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBV0Qsc0JBQUksd0NBQUk7Ozs7UUFBUjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtnQkFBRSxPQUFPLFNBQVMsQ0FBQztZQUM1QyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTyxhQUFXLElBQUksQ0FBQyxLQUFPLENBQUM7O2dCQUNyRSxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxxQ0FBSTs7OztJQUFKLFVBQUssR0FBVztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNkdBQStDO2lCQUNoRDs7OzBCQUtFLEtBQUs7a0NBR0wsS0FBSzt3QkFTTCxLQUFLOzhCQVNMLE1BQU07d0NBQ04sTUFBTTs0QkFFTixLQUFLOztJQTBCUiw2QkFBQztDQUFBLEFBMURELElBMERDO1NBdERZLHNCQUFzQjs7Ozs7O0lBQ2pDLHdDQUFvQzs7Ozs7SUFDcEMsa0RBQWlDOztJQUVqQyx5Q0FDZ0I7O0lBb0JoQiw2Q0FBNEQ7O0lBQzVELHVEQUFzRTs7SUFFdEUsMkNBQ2tCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXNvcnQtb3JkZXItaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0T3JkZXJJY29uQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9vcmRlcjogJ2FzYycgfCAnZGVzYycgfCAnJztcclxuICBwcml2YXRlIF9zZWxlY3RlZFNvcnRLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0S2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkU29ydEtleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFNvcnRLZXkgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTb3J0S2V5Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWRTb3J0S2V5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRTb3J0S2V5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgb3JkZXIodmFsdWU6ICdhc2MnIHwgJ2Rlc2MnIHwgJycpIHtcclxuICAgIHRoaXMuX29yZGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgb3JkZXIoKTogJ2FzYycgfCAnZGVzYycgfCAnJyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3JkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRTb3J0S2V5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRTb3J0S2V5KSByZXR1cm4gJ3NvcnRpbmcnO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTb3J0S2V5ID09PSB0aGlzLnNvcnRLZXkpIHJldHVybiBgc29ydGluZ18ke3RoaXMub3JkZXJ9YDtcclxuICAgIGVsc2UgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgc29ydChrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZFNvcnRLZXkgPSBrZXk7XHJcbiAgICBzd2l0Y2ggKHRoaXMub3JkZXIpIHtcclxuICAgICAgY2FzZSAnJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJ2FzYyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCdhc2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXNjJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJ2Rlc2MnO1xyXG4gICAgICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCgnZGVzYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZXNjJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCcnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19