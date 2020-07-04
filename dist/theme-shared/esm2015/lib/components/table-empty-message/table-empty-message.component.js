import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TableEmptyMessageComponent = class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "colspan", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableEmptyMessageComponent.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "localizationResource", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "localizationProp", void 0);
TableEmptyMessageComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: '[abp-table-empty-message]',
        template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
    })
], TableEmptyMessageComponent);
export { TableEmptyMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV3pELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBQXZDO1FBRUUsWUFBTyxHQUFHLENBQUMsQ0FBQztRQU1aLHlCQUFvQixHQUFHLFlBQVksQ0FBQztRQUdwQyxxQkFBZ0IsR0FBRyw0QkFBNEIsQ0FBQztJQUtsRCxDQUFDO0lBSEMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2xGLENBQUM7Q0FDRixDQUFBO0FBZEM7SUFEQyxLQUFLLEVBQUU7OzJEQUNJO0FBR1o7SUFEQyxLQUFLLEVBQUU7OzJEQUNRO0FBR2hCO0lBREMsS0FBSyxFQUFFOzt3RUFDNEI7QUFHcEM7SUFEQyxLQUFLLEVBQUU7O29FQUN3QztBQVhyQywwQkFBMEI7SUFUdEMsU0FBUyxDQUFDO1FBQ1QsK0NBQStDO1FBQy9DLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFOzs7O0dBSVQ7S0FDRixDQUFDO0dBQ1csMEJBQTBCLENBZ0J0QztTQWhCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbYWJwLXRhYmxlLWVtcHR5LW1lc3NhZ2VdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHNwYW5cIj5cclxuICAgICAge3sgZW1wdHlNZXNzYWdlIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICA8L3RkPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGNvbHNwYW4gPSAyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhbGl6YXRpb25SZXNvdXJjZSA9ICdBYnBBY2NvdW50JztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhbGl6YXRpb25Qcm9wID0gJ05vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJztcclxuXHJcbiAgZ2V0IGVtcHR5TWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZSB8fCBgJHt0aGlzLmxvY2FsaXphdGlvblJlc291cmNlfTo6JHt0aGlzLmxvY2FsaXphdGlvblByb3B9YDtcclxuICB9XHJcbn1cclxuIl19