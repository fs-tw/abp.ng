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
                    template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(even):hover{-webkit-filter:brightness(90%);filter:brightness(90%)}.ui-table .ui-table-empty{padding:20px 0;text-align:center;border:1px solid #e0e0e0;border-top-width:0}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;color:#333;border:1px solid #c8c8c8;padding:.25em .5em;text-align:center;font-weight:700}.ui-table .ui-table-thead>tr>th{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4}.ui-table .ui-table-tfoot>tr>td{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#fff}.ui-table .ui-sortable-column{transition:box-shadow .2s;cursor:pointer}.ui-table .ui-sortable-column:focus{outline:0;outline-offset:0;box-shadow:inset 0 0 0 .2em #8dcdff}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-size:14px;font-family:'Open Sans','Helvetica Neue',sans-serif}.ui-table .ui-editable-column input:focus{outline:#007ad9 solid 1px;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{cursor:pointer;background-color:#eaeaea;color:#333}.ui-table table{border-collapse:collapse;width:100%;table-layout:fixed}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{overflow:hidden;border:0}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5em;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.ui-table .ui-column-resizer-helper{background-color:#007ad9;width:1px;position:absolute;z-index:10;display:none}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{position:absolute;display:none}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{text-align:left;display:block;border:0;width:100%!important;box-sizing:border-box;float:left;clear:left}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em;font-weight:700}}.ui-table .ui-widget{font-family:'Open Sans','Helvetica Neue',sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{display:flex;justify-content:center;border-top:0;padding:0}.ui-table .op-0{opacity:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy50aGVtZS5zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBQUEsaUJBNEVDO1FBcEVDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBd0JuQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBR1QsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFHcEIsaUJBQVksR0FBRyx3Q0FBd0MsQ0FBQztRQUcvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWdDakQsY0FBUzs7Ozs7UUFBeUIsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUN6QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRSxDQUFDLEVBQUM7SUFDSixDQUFDO0lBOUJDLHNCQUNJLHdDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2pELENBQUM7Ozs7O1FBQ0QsVUFBaUIsUUFBZ0I7WUFDL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQztnQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLHNDQUFVOzs7O1FBQWQ7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBVzs7OztRQUFmO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COztnQkFFSyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHN3RkFBbUM7b0JBRW5DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozt3QkFLRSxLQUFLO2lDQUdMLEtBQUs7K0JBR0wsS0FBSzttQ0FHTCxLQUFLOytCQUdMLEtBQUs7NkJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7K0JBR0wsS0FBSzsrQkFHTCxLQUFLOzZCQUdMLE1BQU07NkJBR04sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsrQkFHeEQsS0FBSzs7SUE4QlIscUJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXRFWSxjQUFjOzs7Ozs7SUFDekIsdUNBQThCOztJQUM5Qix3Q0FBbUI7O0lBRW5CLCtCQUNhOztJQUViLHdDQUNpQzs7SUFFakMsc0NBQytCOztJQUUvQiwwQ0FDbUM7O0lBRW5DLHNDQUNxQjs7SUFFckIsb0NBQ29COztJQUVwQiw4QkFDYTs7SUFFYiw4QkFDUzs7SUFFVCxzQ0FDb0I7O0lBRXBCLHNDQUN3RDs7SUFFeEQsb0NBQ2lEOztJQUVqRCxvQ0FDdUM7O0lBNkJ2QyxtQ0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIF90b3RhbFJlY29yZHM6IG51bWJlcjtcclxuICBib2R5U2Nyb2xsTGVmdCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNjcm9sbEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNjcm9sbGFibGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcm93czogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhZ2UgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRyYWNraW5nUHJvcCA9ICdpZCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZW1wdHlNZXNzYWdlID0gJ0FicEFjY291bnQ6Ok5vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCd3cmFwcGVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgd3JhcHBlclJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdGFsUmVjb3JkcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVjb3JkcyB8fCB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICB9XHJcbiAgc2V0IHRvdGFsUmVjb3JkcyhuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgPCAwKSB0aGlzLl90b3RhbFJlY29yZHMgPSAwO1xyXG5cclxuICAgIHRoaXMuX3RvdGFsUmVjb3JkcyA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5yb3dzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudG90YWxSZWNvcmRzIC8gdGhpcy5yb3dzKTtcclxuICB9XHJcblxyXG4gIGdldCBzbGljZWRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICBpZiAoIXRoaXMucm93cyB8fCB0aGlzLnJvd3MgPj0gdGhpcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnJvd3M7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLnJvd3MpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248YW55PiA9IChfLCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZVt0aGlzLnRyYWNraW5nUHJvcF0gfHwgdmFsdWUgOiB2YWx1ZTtcclxuICB9O1xyXG59XHJcbiJdfQ==