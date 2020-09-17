import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
/**
 *
 * @deprecated use ngx-datatale instead.
 */
let TableComponent = class TableComponent {
    constructor() {
        this.bodyScrollLeft = 0;
        this.page = 1;
        this.trackingProp = 'id';
        this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
        this.pageChange = new EventEmitter();
        this.trackByFn = (_, value) => {
            return typeof value === 'object' ? value[this.trackingProp] || value : value;
        };
    }
    get totalRecords() {
        return this._totalRecords || this.value.length;
    }
    set totalRecords(newValue) {
        if (newValue < 0)
            this._totalRecords = 0;
        this._totalRecords = newValue;
    }
    get totalPages() {
        if (!this.rows) {
            return;
        }
        return Math.ceil(this.totalRecords / this.rows);
    }
    get slicedValue() {
        if (!this.rows || this.rows >= this.value.length) {
            return this.value;
        }
        const start = (this.page - 1) * this.rows;
        return this.value.slice(start, start + this.rows);
    }
    ngOnInit() {
        this.marginCalculator = document.body.dir === 'rtl' ? rtlCalculator : ltrCalculator;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "headerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "bodyTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "colgroupTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "scrollable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TableComponent.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "page", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "trackingProp", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "emptyMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "pageChange", void 0);
__decorate([
    ViewChild('wrapper', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], TableComponent.prototype, "wrapperRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TableComponent.prototype, "totalRecords", null);
TableComponent = __decorate([
    Component({
        selector: 'abp-table',
        template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div #header class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"header.style.margin = marginCalculator(scrollableBody)\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(2n):hover{filter:brightness(90%)}.ui-table .ui-table-empty{border:1px solid #e0e0e0;border-top:0 solid #e0e0e0;padding:20px 0;text-align:center}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;padding:.571em 1em}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700}.ui-table .ui-table-thead>tr>th{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-table-tbody>tr>td{padding:.571em .857em}.ui-table .ui-table-tfoot>tr>td{background-color:#fff;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-sortable-column{transition:box-shadow .2s}.ui-table .ui-sortable-column:focus{box-shadow:inset 0 0 0 .2em #8dcdff;outline:0 none;outline-offset:0}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px}.ui-table .ui-editable-column input:focus{outline:1px solid #007ad9;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(2n){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{background-color:#eaeaea;color:#333;cursor:pointer}.ui-table .ui-column-resizer-helper{background-color:#007ad9}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}}.ui-table table{border-collapse:collapse;table-layout:fixed;width:100%}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table .ui-sortable-column{cursor:pointer}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700;padding:.25em .5em;text-align:center}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{border:0;overflow:hidden}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{border:1px solid transparent;cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5em}.ui-table .ui-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{display:none;position:absolute}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{border:0;box-sizing:border-box;clear:left;display:block;float:left;text-align:left;width:100%!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4em;min-width:30%;padding:.4em}}.ui-table .ui-widget{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{border-top:0;display:flex;justify-content:center;padding:0}.ui-table .op-0{opacity:0}"]
    })
], TableComponent);
export { TableComponent };
function ltrCalculator(div) {
    return `0 auto 0 -${div.scrollLeft}px`;
}
function rtlCalculator(div) {
    return `0 ${-(div.scrollWidth - div.clientWidth - div.scrollLeft)}px 0 auto`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFFWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCOzs7R0FHRztBQU9ILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFBM0I7UUFFRSxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQXdCbkIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUdULGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR3BCLGlCQUFZLEdBQUcsd0NBQXdDLENBQUM7UUFHL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFrQ2pELGNBQVMsR0FBeUIsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0UsQ0FBQyxDQUFDO0lBS0osQ0FBQztJQW5DQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLFFBQWdCO1FBQy9CLElBQUksUUFBUSxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBRUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3RGLENBQUM7Q0FDRixDQUFBO0FBdkVDO0lBREMsS0FBSyxFQUFFOzs2Q0FDSztBQUdiO0lBREMsS0FBSyxFQUFFOzhCQUNRLFdBQVc7c0RBQU07QUFHakM7SUFEQyxLQUFLLEVBQUU7OEJBQ00sV0FBVztvREFBTTtBQUcvQjtJQURDLEtBQUssRUFBRTs4QkFDVSxXQUFXO3dEQUFNO0FBR25DO0lBREMsS0FBSyxFQUFFOztvREFDYTtBQUdyQjtJQURDLEtBQUssRUFBRTs7a0RBQ1k7QUFHcEI7SUFEQyxLQUFLLEVBQUU7OzRDQUNLO0FBR2I7SUFEQyxLQUFLLEVBQUU7OzRDQUNDO0FBR1Q7SUFEQyxLQUFLLEVBQUU7O29EQUNZO0FBR3BCO0lBREMsS0FBSyxFQUFFOztvREFDZ0Q7QUFHeEQ7SUFEQyxNQUFNLEVBQUU7O2tEQUN3QztBQUdqRDtJQURDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7OEJBQy9CLFVBQVU7a0RBQWlCO0FBR3ZDO0lBREMsS0FBSyxFQUFFOzs7a0RBR1A7QUEzQ1UsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQiwrdUZBQW1DO1FBRW5DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO0dBQ1csY0FBYyxDQTRFMUI7U0E1RVksY0FBYztBQThFM0IsU0FBUyxhQUFhLENBQUMsR0FBbUI7SUFDeEMsT0FBTyxhQUFhLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBbUI7SUFDeEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDL0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCB1c2Ugbmd4LWRhdGF0YWxlIGluc3RlYWQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIF90b3RhbFJlY29yZHM6IG51bWJlcjtcclxuICBib2R5U2Nyb2xsTGVmdCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJvZHlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNjcm9sbEhlaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNjcm9sbGFibGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcm93czogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBhZ2UgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRyYWNraW5nUHJvcCA9ICdpZCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZW1wdHlNZXNzYWdlID0gJ0FicEFjY291bnQ6Ok5vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCd3cmFwcGVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXHJcbiAgd3JhcHBlclJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdGFsUmVjb3JkcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUmVjb3JkcyB8fCB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICB9XHJcbiAgc2V0IHRvdGFsUmVjb3JkcyhuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgPCAwKSB0aGlzLl90b3RhbFJlY29yZHMgPSAwO1xyXG5cclxuICAgIHRoaXMuX3RvdGFsUmVjb3JkcyA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5yb3dzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMudG90YWxSZWNvcmRzIC8gdGhpcy5yb3dzKTtcclxuICB9XHJcblxyXG4gIGdldCBzbGljZWRWYWx1ZSgpOiBhbnlbXSB7XHJcbiAgICBpZiAoIXRoaXMucm93cyB8fCB0aGlzLnJvd3MgPj0gdGhpcy52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLnJvd3M7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShzdGFydCwgc3RhcnQgKyB0aGlzLnJvd3MpO1xyXG4gIH1cclxuXHJcbiAgbWFyZ2luQ2FsY3VsYXRvcjogTWFyZ2luQ2FsY3VsYXRvcjtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248YW55PiA9IChfLCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZVt0aGlzLnRyYWNraW5nUHJvcF0gfHwgdmFsdWUgOiB2YWx1ZTtcclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWFyZ2luQ2FsY3VsYXRvciA9IGRvY3VtZW50LmJvZHkuZGlyID09PSAncnRsJyA/IHJ0bENhbGN1bGF0b3IgOiBsdHJDYWxjdWxhdG9yO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbHRyQ2FsY3VsYXRvcihkaXY6IEhUTUxEaXZFbGVtZW50KTogc3RyaW5nIHtcclxuICByZXR1cm4gYDAgYXV0byAwIC0ke2Rpdi5zY3JvbGxMZWZ0fXB4YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcnRsQ2FsY3VsYXRvcihkaXY6IEhUTUxEaXZFbGVtZW50KTogc3RyaW5nIHtcclxuICByZXR1cm4gYDAgJHstKGRpdi5zY3JvbGxXaWR0aCAtIGRpdi5jbGllbnRXaWR0aCAtIGRpdi5zY3JvbGxMZWZ0KX1weCAwIGF1dG9gO1xyXG59XHJcblxyXG50eXBlIE1hcmdpbkNhbGN1bGF0b3IgPSAoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4gc3RyaW5nO1xyXG4iXX0=