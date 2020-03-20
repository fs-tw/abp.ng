/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @deprecated
 */
export class PaginationComponent {
    constructor() {
        this._value = 1;
        this.valueChange = new EventEmitter();
        this.totalPages = 0;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} page
         * @return {?}
         */
        (_, page) => page);
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value === newValue)
            return;
        this._value = newValue;
        this.valueChange.emit(newValue);
    }
    /**
     * @return {?}
     */
    get pageArray() {
        /** @type {?} */
        const count = this.totalPages < 5 ? this.totalPages : 5;
        if (this.value === 1 || this.value === 2) {
            return Array.from(new Array(count)).map((/**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */
            (_, index) => index + 1));
        }
        else if (this.value === this.totalPages || this.value === this.totalPages - 1) {
            return Array.from(new Array(count)).map((/**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */
            (_, index) => this.totalPages - count + 1 + index));
        }
        else {
            return [this.value - 2, this.value - 1, this.value, this.value + 1, this.value + 2];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value || this.value < 1 || this.value > this.totalPages) {
            this.value = 1;
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    changePage(page) {
        if (page < 1)
            return;
        else if (page > this.totalPages)
            return;
        this.value = page;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQU1oRzs7R0FFRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFRVSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBYVYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2xELGVBQVUsR0FBRyxDQUFDLENBQUM7UUFjZixjQUFTOzs7OztRQUE0QixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztJQWN6RCxDQUFDOzs7O0lBM0NDLElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLFFBQWdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRO1lBQUUsT0FBTztRQUVyQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBUUQsSUFBSSxTQUFTOztjQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDLENBQUM7U0FDbEU7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQy9FLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFDLENBQUM7U0FDNUY7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckY7SUFDSCxDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQztZQUFFLE9BQU87YUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXhDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNG1EQUF3QzthQUN6Qzs7O29CQU1FLEtBQUs7MEJBV0wsTUFBTTt5QkFHTixLQUFLOzs7Ozs7O0lBZk4scUNBQW1COztJQVluQiwwQ0FDa0Q7O0lBRWxELHlDQUNlOztJQWNmLHdDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfdmFsdWUgPSAxO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZShuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IG5ld1ZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRvdGFsUGFnZXMgPSAwO1xyXG5cclxuICBnZXQgcGFnZUFycmF5KCk6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy50b3RhbFBhZ2VzIDwgNSA/IHRoaXMudG90YWxQYWdlcyA6IDU7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IDEgfHwgdGhpcy52YWx1ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkoY291bnQpKS5tYXAoKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbHVlID09PSB0aGlzLnRvdGFsUGFnZXMgfHwgdGhpcy52YWx1ZSA9PT0gdGhpcy50b3RhbFBhZ2VzIC0gMSkge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkoY291bnQpKS5tYXAoKF8sIGluZGV4KSA9PiB0aGlzLnRvdGFsUGFnZXMgLSBjb3VudCArIDEgKyBpbmRleCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gW3RoaXMudmFsdWUgLSAyLCB0aGlzLnZhbHVlIC0gMSwgdGhpcy52YWx1ZSwgdGhpcy52YWx1ZSArIDEsIHRoaXMudmFsdWUgKyAyXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPG51bWJlcj4gPSAoXywgcGFnZSkgPT4gcGFnZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA8IDEgfHwgdGhpcy52YWx1ZSA+IHRoaXMudG90YWxQYWdlcykge1xyXG4gICAgICB0aGlzLnZhbHVlID0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBpZiAocGFnZSA8IDEpIHJldHVybjtcclxuICAgIGVsc2UgaWYgKHBhZ2UgPiB0aGlzLnRvdGFsUGFnZXMpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnZhbHVlID0gcGFnZTtcclxuICB9XHJcbn1cclxuIl19