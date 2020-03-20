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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUVoRztJQUFBO1FBUVUsV0FBTSxHQUFHLENBQUMsQ0FBQztRQWFWLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdsRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBY2YsY0FBUzs7Ozs7UUFBNEIsVUFBQyxDQUFDLEVBQUUsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksRUFBQztJQWN6RCxDQUFDO0lBM0NDLHNCQUNJLHNDQUFLOzs7O1FBRFQ7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFDRCxVQUFVLFFBQWdCO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRO2dCQUFFLE9BQU87WUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BTkE7SUFjRCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQUEsaUJBVUM7O2dCQVRPLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztnQkFBQyxVQUFDLENBQUMsRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsQ0FBQyxFQUFULENBQVMsRUFBQyxDQUFDO2FBQ2xFO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7Z0JBQy9FLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O2dCQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQW5DLENBQW1DLEVBQUMsQ0FBQzthQUM1RjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFJRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPO2FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDRtREFBd0M7aUJBQ3pDOzs7d0JBTUUsS0FBSzs4QkFXTCxNQUFNOzZCQUdOLEtBQUs7O0lBNkJSLDBCQUFDO0NBQUEsQUFwREQsSUFvREM7U0E3Q1ksbUJBQW1COzs7Ozs7SUFDOUIscUNBQW1COztJQVluQiwwQ0FDa0Q7O0lBRWxELHlDQUNlOztJQWNmLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfdmFsdWUgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZShuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG5ld1ZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvdGFsUGFnZXMgPSAwO1xyXG5cclxuICBnZXQgcGFnZUFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy50b3RhbFBhZ2VzIDwgNSA/IHRoaXMudG90YWxQYWdlcyA6IDU7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IDEgfHwgdGhpcy52YWx1ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkoY291bnQpKS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlID09PSB0aGlzLnRvdGFsUGFnZXMgfHwgdGhpcy52YWx1ZSA9PT0gdGhpcy50b3RhbFBhZ2VzIC0gMSkge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkoY291bnQpKS5tYXAoKF8sIGluZGV4KSA9PiB0aGlzLnRvdGFsUGFnZXMgLSBjb3VudCArIDEgKyBpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW3RoaXMudmFsdWUgLSAyLCB0aGlzLnZhbHVlIC0gMSwgdGhpcy52YWx1ZSwgdGhpcy52YWx1ZSArIDEsIHRoaXMudmFsdWUgKyAyXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPG51bWJlcj4gPSAoXywgcGFnZSkgPT4gcGFnZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA8IDEgfHwgdGhpcy52YWx1ZSA+IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAocGFnZSA8IDEpIHJldHVybjtcclxuICAgIGVsc2UgaWYgKHBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gcGFnZTtcclxuICB9XHJcbn1cclxuIl19