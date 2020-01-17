/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this._value = 1;
        this.valueChange = new EventEmitter();
        this.totalPages = 0;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} page
         * @return {?}
         */
        function (_, page) { return page; });
    }
    Object.defineProperty(PaginationComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value === newValue)
                return;
            this._value = newValue;
            this.valueChange.emit(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageArray", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var count = this.totalPages < 5 ? this.totalPages : 5;
            if (this.value === 1 || this.value === 2) {
                return Array.from(new Array(count)).map((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                function (_, index) { return index + 1; }));
            }
            else if (this.value === this.totalPages || this.value === this.totalPages - 1) {
                return Array.from(new Array(count)).map((/**
                 * @param {?} _
                 * @param {?} index
                 * @return {?}
                 */
                function (_, index) { return _this.totalPages - count + 1 + index; }));
            }
            else {
                return [this.value - 2, this.value - 1, this.value, this.value + 1, this.value + 2];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value || this.value < 1 || this.value > this.totalPages) {
            this.value = 1;
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PaginationComponent.prototype.changePage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page < 1)
            return;
        else if (page > this.totalPages)
            return;
        this.value = page;
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-pagination',
                    template: "<div\r\n  class=\"ui-paginator-bottom ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix\"\r\n>\r\n  <a\r\n    class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-backward\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(value - 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-left\"></span></a\r\n  ><span class=\"ui-paginator-pages\"\r\n    ><a\r\n      *ngFor=\"let page of pageArray; trackBy: trackByFn\"\r\n      (click)=\"changePage(page)\"\r\n      class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\r\n      [class.ui-state-active]=\"page === value\"\r\n      tabindex=\"0\"\r\n      >{{ page }}</a\r\n    ></span\r\n  ><a\r\n    class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(value + 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-right\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(totalPages)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-forward\"></span\r\n  ></a>\r\n</div>\r\n"
                }] }
    ];
    PaginationComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        totalPages: [{ type: Input }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._value;
    /** @type {?} */
    PaginationComponent.prototype.valueChange;
    /** @type {?} */
    PaginationComponent.prototype.totalPages;
    /** @type {?} */
    PaginationComponent.prototype.trackByFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUVoRztJQUFBO1FBS1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQWFWLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdsRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBY2YsY0FBUzs7Ozs7UUFBNEIsVUFBQyxDQUFDLEVBQUUsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQWN6RCxDQUFDO0lBM0NDLHNCQUNJLHNDQUFLOzs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFVLFFBQWdCO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRO2dCQUFFLE9BQU87WUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BTkE7SUFjRCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQUEsaUJBVUM7O2dCQVRPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztnQkFBQyxVQUFDLENBQUMsRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsQ0FBQyxFQUFULENBQVMsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O2dCQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQW5DLENBQW1DLEVBQUMsQ0FBQzthQUM1RjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFJRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPO2FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDRtREFBd0M7aUJBQ3pDOzs7d0JBR0UsS0FBSzs4QkFXTCxNQUFNOzZCQUdOLEtBQUs7O0lBNkJSLDBCQUFDO0NBQUEsQUFqREQsSUFpREM7U0E3Q1ksbUJBQW1COzs7Ozs7SUFDOUIscUNBQW1COztJQVluQiwwQ0FDa0Q7O0lBRWxELHlDQUNlOztJQWNmLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX3ZhbHVlID0gMTtcclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSBuZXdWYWx1ZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICB0b3RhbFBhZ2VzID0gMDtcclxuXHJcbiAgZ2V0IHBhZ2VBcnJheSgpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBjb3VudCA9IHRoaXMudG90YWxQYWdlcyA8IDUgPyB0aGlzLnRvdGFsUGFnZXMgOiA1O1xyXG5cclxuICAgIGlmICh0aGlzLnZhbHVlID09PSAxIHx8IHRoaXMudmFsdWUgPT09IDIpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KGNvdW50KSkubWFwKChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy50b3RhbFBhZ2VzIHx8IHRoaXMudmFsdWUgPT09IHRoaXMudG90YWxQYWdlcyAtIDEpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KGNvdW50KSkubWFwKChfLCBpbmRleCkgPT4gdGhpcy50b3RhbFBhZ2VzIC0gY291bnQgKyAxICsgaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLnZhbHVlIC0gMiwgdGhpcy52YWx1ZSAtIDEsIHRoaXMudmFsdWUsIHRoaXMudmFsdWUgKyAxLCB0aGlzLnZhbHVlICsgMl07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxudW1iZXI+ID0gKF8sIHBhZ2UpID0+IHBhZ2U7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUgPCAxIHx8IHRoaXMudmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgaWYgKHBhZ2UgPCAxKSByZXR1cm47XHJcbiAgICBlbHNlIGlmIChwYWdlID4gdGhpcy50b3RhbFBhZ2VzKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHBhZ2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==