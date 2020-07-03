import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let SortOrderIconComponent = class SortOrderIconComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SortOrderIconComponent.prototype, "sortKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SortOrderIconComponent.prototype, "selectedSortKey", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SortOrderIconComponent.prototype, "order", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SortOrderIconComponent.prototype, "orderChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SortOrderIconComponent.prototype, "selectedSortKeyChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SortOrderIconComponent.prototype, "iconClass", void 0);
SortOrderIconComponent = __decorate([
    Component({
        selector: 'abp-sort-order-icon',
        template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
    })
], SortOrderIconComponent);
export { SortOrderIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vcmRlci1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1vcmRlci1pY29uL3NvcnQtb3JkZXItaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNdkUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFBbkM7UUF5QnFCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6QywwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBMkJ4RSxDQUFDO0lBN0NDLElBQUksZUFBZSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQUksS0FBSyxDQUFDLEtBQTBCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVFELElBQUksSUFBSTtRQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ3JFLE9BQU8sU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLE1BQU07U0FDVDtJQUNILENBQUM7Q0FDRixDQUFBO0FBaERDO0lBREMsS0FBSyxFQUFFOzt1REFDUTtBQUdoQjtJQURDLEtBQUssRUFBRTs7OzZEQUlQO0FBTUQ7SUFEQyxLQUFLLEVBQUU7OzttREFJUDtBQUtTO0lBQVQsTUFBTSxFQUFFOzsyREFBbUQ7QUFDbEQ7SUFBVCxNQUFNLEVBQUU7O3FFQUE2RDtBQUd0RTtJQURDLEtBQUssRUFBRTs7eURBQ1U7QUE3QlAsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsNkdBQStDO0tBQ2hELENBQUM7R0FDVyxzQkFBc0IsQ0FxRGxDO1NBckRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1zb3J0LW9yZGVyLWljb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb3J0LW9yZGVyLWljb24uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydE9yZGVySWNvbkNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfb3JkZXI6ICdhc2MnIHwgJ2Rlc2MnIHwgJyc7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRTb3J0S2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc29ydEtleTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZFNvcnRLZXkodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRTb3J0S2V5ID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkU29ydEtleUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IHNlbGVjdGVkU29ydEtleSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkU29ydEtleTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG9yZGVyKHZhbHVlOiAnYXNjJyB8ICdkZXNjJyB8ICcnKSB7XHJcbiAgICB0aGlzLl9vcmRlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmRlckNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG9yZGVyKCk6ICdhc2MnIHwgJ2Rlc2MnIHwgJycge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yZGVyO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9yZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkU29ydEtleUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb25DbGFzczogc3RyaW5nO1xyXG5cclxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRTb3J0S2V5ID09PSB0aGlzLnNvcnRLZXkpIHJldHVybiBgc29ydGluZ18ke3RoaXMub3JkZXJ9YDtcclxuICAgIGVsc2UgcmV0dXJuICdzb3J0aW5nJztcclxuICB9XHJcblxyXG4gIHNvcnQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRTb3J0S2V5ID0ga2V5O1xyXG4gICAgc3dpdGNoICh0aGlzLm9yZGVyKSB7XHJcbiAgICAgIGNhc2UgJyc6XHJcbiAgICAgICAgdGhpcy5vcmRlciA9ICdhc2MnO1xyXG4gICAgICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCgnYXNjJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2FzYyc6XHJcbiAgICAgICAgdGhpcy5vcmRlciA9ICdkZXNjJztcclxuICAgICAgICB0aGlzLm9yZGVyQ2hhbmdlLmVtaXQoJ2Rlc2MnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGVzYyc6XHJcbiAgICAgICAgdGhpcy5vcmRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMub3JkZXJDaGFuZ2UuZW1pdCgnJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==