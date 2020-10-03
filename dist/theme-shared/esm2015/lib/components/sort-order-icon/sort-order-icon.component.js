import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SortOrderIconComponent {
    constructor() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    set selectedSortKey(value) {
        this._selectedSortKey = value;
        this.selectedSortKeyChange.emit(value);
    }
    get selectedSortKey() {
        return this._selectedSortKey;
    }
    set order(value) {
        this._order = value;
        this.orderChange.emit(value);
    }
    get order() {
        return this._order;
    }
    get icon() {
        if (this.selectedSortKey === this.sortKey)
            return `sorting_${this.order}`;
        else
            return 'sorting';
    }
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
            },] }
];
SortOrderIconComponent.propDecorators = {
    sortKey: [{ type: Input }],
    selectedSortKey: [{ type: Input }],
    order: [{ type: Input }],
    orderChange: [{ type: Output }],
    selectedSortKeyChange: [{ type: Output }],
    iconClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU12RSxNQUFNLE9BQU8sc0JBQXNCO0lBSm5DO1FBNkJxQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsMEJBQXFCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQTJCeEUsQ0FBQztJQTlDQyxJQUNJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUEwQjtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFRRCxJQUFJLElBQUk7UUFDTixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLFdBQVcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztZQUNyRSxPQUFPLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztRQUMzQixRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDZHQUErQzthQUNoRDs7O3NCQUtFLEtBQUs7OEJBR0wsS0FBSztvQkFTTCxLQUFLOzBCQVNMLE1BQU07b0NBQ04sTUFBTTt3QkFFTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXNvcnQtb3JkZXItaWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0T3JkZXJJY29uQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF9vcmRlcjogJ2FzYycgfCAnZGVzYycgfCAnJztcclxuICBwcml2YXRlIF9zZWxlY3RlZFNvcnRLZXk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzb3J0S2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkU29ydEtleSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFNvcnRLZXkgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTb3J0S2V5Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgc2VsZWN0ZWRTb3J0S2V5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRTb3J0S2V5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgb3JkZXIodmFsdWU6ICdhc2MnIHwgJ2Rlc2MnIHwgJycpIHtcclxuICAgIHRoaXMuX29yZGVyID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgb3JkZXIoKTogJ2FzYycgfCAnZGVzYycgfCAnJyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JkZXI7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3JkZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRTb3J0S2V5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaWNvbkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNvcnRLZXkgPT09IHRoaXMuc29ydEtleSkgcmV0dXJuIGBzb3J0aW5nXyR7dGhpcy5vcmRlcn1gO1xyXG4gICAgZWxzZSByZXR1cm4gJ3NvcnRpbmcnO1xyXG4gIH1cclxuXHJcbiAgc29ydChrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZFNvcnRLZXkgPSBrZXk7XHJcbiAgICBzd2l0Y2ggKHRoaXMub3JkZXIpIHtcclxuICAgICAgY2FzZSAnJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJ2FzYyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCdhc2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXNjJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJ2Rlc2MnO1xyXG4gICAgICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCgnZGVzYycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZXNjJzpcclxuICAgICAgICB0aGlzLm9yZGVyID0gJyc7XHJcbiAgICAgICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KCcnKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19