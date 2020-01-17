/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        var _this = this;
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
        function (_, value) {
            return typeof value === 'object' ? value[_this.trackingProp] || value : value;
        });
    }
    Object.defineProperty(TableComponent.prototype, "totalRecords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalRecords || this.value.length;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (newValue < 0)
                this._totalRecords = 0;
            this._totalRecords = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.rows) {
                return;
            }
            return Math.ceil(this.totalRecords / this.rows);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "slicedValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.rows || this.rows >= this.value.length) {
                return this.value;
            }
            /** @type {?} */
            var start = (this.page - 1) * this.rows;
            return this.value.slice(start, start + this.rows);
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-table',
                    template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <abp-pagination\r\n      *ngIf=\"rows\"\r\n      [totalPages]=\"totalPages\"\r\n      [(value)]=\"page\"\r\n      (valueChange)=\"pageChange.emit($event)\"\r\n    ></abp-pagination>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\">\r\n    <ng-container *ngIf=\"value && value.length; else emptyTemplate\">\r\n      <ng-template\r\n        #bodyTemplateWrapper\r\n        *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n        [ngTemplateOutlet]=\"bodyTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n      ></ng-template>\r\n    </ng-container>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <tr class=\"empty-row\" #emptyRow>\r\n    <div [style.width.px]=\"emptyRow.offsetWidth\">\r\n      {{ emptyMessage | abpLocalization }}\r\n    </div>\r\n  </tr>\r\n</ng-template>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      .ui-table .ui-table-tbody > tr:nth-child(even):hover,\n      .ui-table .ui-table-tbody > tr:hover {\n        filter: brightness(90%);\n      }\n\n      .ui-table .ui-table-tbody > tr.empty-row:hover {\n        filter: none;\n      }\n\n      .ui-table .ui-table-tbody > tr.empty-row > div {\n        margin: 10px;\n        text-align: center;\n      }\n    "]
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
    return TableComponent;
}());
export { TableComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBQUEsaUJBNEZDO1FBcEVDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBd0JuQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBR1QsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFHcEIsaUJBQVksR0FBRyx3Q0FBd0MsQ0FBQztRQUcvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWdDakQsY0FBUzs7Ozs7UUFBeUIsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUN6QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRSxDQUFDLEVBQUM7SUFDSixDQUFDO0lBOUJDLHNCQUNJLHdDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2pELENBQUM7Ozs7O1FBQ0QsVUFBaUIsUUFBZ0I7WUFDL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQztnQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLHNDQUFVOzs7O1FBQWQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBVzs7OztRQUFmO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COztnQkFFSyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDJzRkFBbUM7b0JBa0JuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs2QkFoQm5DLCtXQWNDO2lCQUdKOzs7d0JBS0UsS0FBSztpQ0FHTCxLQUFLOytCQUdMLEtBQUs7bUNBR0wsS0FBSzsrQkFHTCxLQUFLOzZCQUdMLEtBQUs7dUJBR0wsS0FBSzt1QkFHTCxLQUFLOytCQUdMLEtBQUs7K0JBR0wsS0FBSzs2QkFHTCxNQUFNOzZCQUdOLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7K0JBR3hELEtBQUs7O0lBOEJSLHFCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0F0RVksY0FBYzs7Ozs7O0lBQ3pCLHVDQUE4Qjs7SUFDOUIsd0NBQW1COztJQUVuQiwrQkFDYTs7SUFFYix3Q0FDaUM7O0lBRWpDLHNDQUMrQjs7SUFFL0IsMENBQ21DOztJQUVuQyxzQ0FDcUI7O0lBRXJCLG9DQUNvQjs7SUFFcEIsOEJBQ2E7O0lBRWIsOEJBQ1M7O0lBRVQsc0NBQ29COztJQUVwQixzQ0FDd0Q7O0lBRXhELG9DQUNpRDs7SUFFakQsb0NBQ3VDOztJQTZCdkMsbUNBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAndGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyLFxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHI6aG92ZXIge1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktdGFibGUgLnVpLXRhYmxlLXRib2R5ID4gdHIuZW1wdHktcm93OmhvdmVyIHtcclxuICAgICAgICBmaWx0ZXI6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ci5lbXB0eS1yb3cgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3RvdGFsUmVjb3JkczogbnVtYmVyO1xyXG4gIGJvZHlTY3JvbGxMZWZ0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogYW55W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYm9keVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsSGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2Nyb2xsYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICByb3dzOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFnZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdHJhY2tpbmdQcm9wID0gJ2lkJztcclxuXHJcbiAgQElucHV0KClcclxuICBlbXB0eU1lc3NhZ2UgPSAnQWJwQWNjb3VudDo6Tm9EYXRhQXZhaWxhYmxlSW5EYXRhdGFibGUnO1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSlcclxuICB3cmFwcGVyUmVmOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdG90YWxSZWNvcmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxSZWNvcmRzIHx8IHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gIH1cclxuICBzZXQgdG90YWxSZWNvcmRzKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChuZXdWYWx1ZSA8IDApIHRoaXMuX3RvdGFsUmVjb3JkcyA9IDA7XHJcblxyXG4gICAgdGhpcy5fdG90YWxSZWNvcmRzID0gbmV3VmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLnJvd3MpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLnJvd3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWNlZFZhbHVlKCk6IGFueVtdIHtcclxuICAgIGlmICghdGhpcy5yb3dzIHx8IHRoaXMucm93cyA+PSB0aGlzLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMucm93cztcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKHN0YXJ0LCBzdGFydCArIHRoaXMucm93cyk7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gKF8sIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlW3RoaXMudHJhY2tpbmdQcm9wXSB8fCB2YWx1ZSA6IHZhbHVlO1xyXG4gIH07XHJcbn1cclxuIl19