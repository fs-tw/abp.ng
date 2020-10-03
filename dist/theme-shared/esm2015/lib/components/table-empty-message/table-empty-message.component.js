import { Component, Input } from '@angular/core';
export class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
}
TableEmptyMessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[abp-table-empty-message]',
                template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
            },] }
];
TableEmptyMessageComponent.propDecorators = {
    colspan: [{ type: Input }],
    message: [{ type: Input }],
    localizationResource: [{ type: Input }],
    localizationProp: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlLWVtcHR5LW1lc3NhZ2UvdGFibGUtZW1wdHktbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXekQsTUFBTSxPQUFPLDBCQUEwQjtJQVR2QztRQVdFLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFNWix5QkFBb0IsR0FBRyxZQUFZLENBQUM7UUFHcEMscUJBQWdCLEdBQUcsNEJBQTRCLENBQUM7SUFLbEQsQ0FBQztJQUhDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNsRixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULCtDQUErQztnQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7O3NCQUVFLEtBQUs7c0JBR0wsS0FBSzttQ0FHTCxLQUFLOytCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdbYWJwLXRhYmxlLWVtcHR5LW1lc3NhZ2VdJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHNwYW5cIj5cclxuICAgICAge3sgZW1wdHlNZXNzYWdlIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICA8L3RkPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlRW1wdHlNZXNzYWdlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGNvbHNwYW4gPSAyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhbGl6YXRpb25SZXNvdXJjZSA9ICdBYnBBY2NvdW50JztcclxuXHJcbiAgQElucHV0KClcclxuICBsb2NhbGl6YXRpb25Qcm9wID0gJ05vRGF0YUF2YWlsYWJsZUluRGF0YXRhYmxlJztcclxuXHJcbiAgZ2V0IGVtcHR5TWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZSB8fCBgJHt0aGlzLmxvY2FsaXphdGlvblJlc291cmNlfTo6JHt0aGlzLmxvY2FsaXphdGlvblByb3B9YDtcclxuICB9XHJcbn1cclxuIl19