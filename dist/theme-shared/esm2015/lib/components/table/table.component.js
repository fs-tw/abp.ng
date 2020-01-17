/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
export class TableComponent {
    constructor() {
        this.bodyScrollLeft = 0;
        this.page = 1;
        this.trackingProp = 'id';
        this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
        this.pageChange = new EventEmitter();
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} value
         * @return {?}
         */
        (_, value) => {
            return typeof value === 'object' ? value[this.trackingProp] || value : value;
        });
    }
    /**
     * @return {?}
     */
    get totalRecords() {
        return this._totalRecords || this.value.length;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set totalRecords(newValue) {
        if (newValue < 0)
            this._totalRecords = 0;
        this._totalRecords = newValue;
    }
    /**
     * @return {?}
     */
    get totalPages() {
        if (!this.rows) {
            return;
        }
        return Math.ceil(this.totalRecords / this.rows);
    }
    /**
     * @return {?}
     */
    get slicedValue() {
        if (!this.rows || this.rows >= this.value.length) {
            return this.value;
        }
        /** @type {?} */
        const start = (this.page - 1) * this.rows;
        return this.value.slice(start, start + this.rows);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-table',
                template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <abp-pagination\r\n      *ngIf=\"rows\"\r\n      [totalPages]=\"totalPages\"\r\n      [(value)]=\"page\"\r\n      (valueChange)=\"pageChange.emit($event)\"\r\n    ></abp-pagination>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\">\r\n    <ng-container *ngIf=\"value && value.length; else emptyTemplate\">\r\n      <ng-template\r\n        #bodyTemplateWrapper\r\n        *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n        [ngTemplateOutlet]=\"bodyTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n      ></ng-template>\r\n    </ng-container>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <tr class=\"empty-row\" #emptyRow>\r\n    <div [style.width.px]=\"emptyRow.offsetWidth\">\r\n      {{ emptyMessage | abpLocalization }}\r\n    </div>\r\n  </tr>\r\n</ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [`
      .ui-table .ui-table-tbody > tr:nth-child(even):hover,
      .ui-table .ui-table-tbody > tr:hover {
        filter: brightness(90%);
      }

      .ui-table .ui-table-tbody > tr.empty-row:hover {
        filter: none;
      }

      .ui-table .ui-table-tbody > tr.empty-row > div {
        margin: 10px;
        text-align: center;
      }
    `]
            }] }
];
TableComponent.propDecorators = {
    value: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    bodyTemplate: [{ type: Input }],
    colgroupTemplate: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    scrollable: [{ type: Input }],
    rows: [{ type: Input }],
    page: [{ type: Input }],
    trackingProp: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    pageChange: [{ type: Output }],
    wrapperRef: [{ type: ViewChild, args: ['wrapper', { read: ElementRef, static: false },] }],
    totalRecords: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._totalRecords;
    /** @type {?} */
    TableComponent.prototype.bodyScrollLeft;
    /** @type {?} */
    TableComponent.prototype.value;
    /** @type {?} */
    TableComponent.prototype.headerTemplate;
    /** @type {?} */
    TableComponent.prototype.bodyTemplate;
    /** @type {?} */
    TableComponent.prototype.colgroupTemplate;
    /** @type {?} */
    TableComponent.prototype.scrollHeight;
    /** @type {?} */
    TableComponent.prototype.scrollable;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.page;
    /** @type {?} */
    TableComponent.prototype.trackingProp;
    /** @type {?} */
    TableComponent.prototype.emptyMessage;
    /** @type {?} */
    TableComponent.prototype.pageChange;
    /** @type {?} */
    TableComponent.prototype.wrapperRef;
    /** @type {?} */
    TableComponent.prototype.trackByFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQXdCdkIsTUFBTSxPQUFPLGNBQWM7SUF0QjNCO1FBd0JFLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBd0JuQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBR1QsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFHcEIsaUJBQVksR0FBRyx3Q0FBd0MsQ0FBQztRQUcvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWdDakQsY0FBUzs7Ozs7UUFBeUIsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0UsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQTlCQyxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFDRCxJQUFJLFlBQVksQ0FBQyxRQUFnQjtRQUMvQixJQUFJLFFBQVEsR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksVUFBVTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Y0FFSyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMnNGQUFtQztnQkFrQm5DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO3lCQWhCbkM7Ozs7Ozs7Ozs7Ozs7O0tBY0M7YUFHSjs7O29CQUtFLEtBQUs7NkJBR0wsS0FBSzsyQkFHTCxLQUFLOytCQUdMLEtBQUs7MkJBR0wsS0FBSzt5QkFHTCxLQUFLO21CQUdMLEtBQUs7bUJBR0wsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7eUJBR0wsTUFBTTt5QkFHTixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUd4RCxLQUFLOzs7Ozs7O0lBdkNOLHVDQUE4Qjs7SUFDOUIsd0NBQW1COztJQUVuQiwrQkFDYTs7SUFFYix3Q0FDaUM7O0lBRWpDLHNDQUMrQjs7SUFFL0IsMENBQ21DOztJQUVuQyxzQ0FDcUI7O0lBRXJCLG9DQUNvQjs7SUFFcEIsOEJBQ2E7O0lBRWIsOEJBQ1M7O0lBRVQsc0NBQ29COztJQUVwQixzQ0FDd0Q7O0lBRXhELG9DQUNpRDs7SUFFakQsb0NBQ3VDOztJQTZCdkMsbUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAndGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyLFxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIuZW1wdHktcm93OmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ci5lbXB0eS1yb3cgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3RvdGFsUmVjb3JkczogbnVtYmVyO1xyXG4gIGJvZHlTY3JvbGxMZWZ0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICByb3dzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFnZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdHJhY2tpbmdQcm9wID0gJ2lkJztcclxuXHJcbiAgQElucHV0KClcclxuICBlbXB0eU1lc3NhZ2UgPSAnQWJwQWNjb3VudDo6Tm9EYXRhQXZhaWxhYmxlSW5EYXRhdGFibGUnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcclxuICB3cmFwcGVyUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdG90YWxSZWNvcmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzIHx8IHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gIH1cclxuICBzZXQgdG90YWxSZWNvcmRzKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChuZXdWYWx1ZSA8IDApIHRoaXMuX3RvdGFsUmVjb3JkcyA9IDA7XHJcblxyXG4gICAgdGhpcy5fdG90YWxSZWNvcmRzID0gbmV3VmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLnJvd3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLnJvd3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWNlZFZhbHVlKCk6IGFueVtdIHtcclxuICAgIGlmICghdGhpcy5yb3dzIHx8IHRoaXMucm93cyA+PSB0aGlzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucm93cztcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMucm93cyk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gKF8sIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlW3RoaXMudHJhY2tpbmdQcm9wXSB8fCB2YWx1ZSA6IHZhbHVlO1xyXG4gIH07XHJcbn1cclxuIl19