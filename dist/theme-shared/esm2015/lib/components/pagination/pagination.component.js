/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQU1oRyxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS1UsV0FBTSxHQUFHLENBQUMsQ0FBQztRQWFWLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUdsRCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBY2YsY0FBUzs7Ozs7UUFBNEIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFjekQsQ0FBQzs7OztJQTNDQyxJQUNJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFnQjtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUTtZQUFFLE9BQU87UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQVFELElBQUksU0FBUzs7Y0FDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUN4QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBQyxDQUFDO1NBQ2xFO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUMvRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBQyxDQUFDO1NBQzVGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JGO0lBQ0gsQ0FBQzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUM7WUFBRSxPQUFPO2FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRtREFBd0M7YUFDekM7OztvQkFHRSxLQUFLOzBCQVdMLE1BQU07eUJBR04sS0FBSzs7Ozs7OztJQWZOLHFDQUFtQjs7SUFZbkIsMENBQ2tEOztJQUVsRCx5Q0FDZTs7SUFjZix3Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLXBhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF92YWx1ZSA9IDE7XHJcbiAgQElucHV0KClcclxuICBnZXQgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gbmV3VmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG90YWxQYWdlcyA9IDA7XHJcblxyXG4gIGdldCBwYWdlQXJyYXkoKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgY291bnQgPSB0aGlzLnRvdGFsUGFnZXMgPCA1ID8gdGhpcy50b3RhbFBhZ2VzIDogNTtcclxuXHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gMSB8fCB0aGlzLnZhbHVlID09PSAyKSB7XHJcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShjb3VudCkpLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgMSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsdWUgPT09IHRoaXMudG90YWxQYWdlcyB8fCB0aGlzLnZhbHVlID09PSB0aGlzLnRvdGFsUGFnZXMgLSAxKSB7XHJcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShjb3VudCkpLm1hcCgoXywgaW5kZXgpID0+IHRoaXMudG90YWxQYWdlcyAtIGNvdW50ICsgMSArIGluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBbdGhpcy52YWx1ZSAtIDIsIHRoaXMudmFsdWUgLSAxLCB0aGlzLnZhbHVlLCB0aGlzLnZhbHVlICsgMSwgdGhpcy52YWx1ZSArIDJdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248bnVtYmVyPiA9IChfLCBwYWdlKSA9PiBwYWdlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSB8fCB0aGlzLnZhbHVlIDwgMSB8fCB0aGlzLnZhbHVlID4gdGhpcy50b3RhbFBhZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZShwYWdlOiBudW1iZXIpIHtcclxuICAgIGlmIChwYWdlIDwgMSkgcmV0dXJuO1xyXG4gICAgZWxzZSBpZiAocGFnZSA+IHRoaXMudG90YWxQYWdlcykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudmFsdWUgPSBwYWdlO1xyXG4gIH1cclxufVxyXG4iXX0=