import { __decorate, __metadata, __param } from "tslib";
import { ListService } from '@abp/ng.core';
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ExtensionsService } from '../../services/extensions.service';
import { EXTENSIONS_IDENTIFIER } from '../../tokens/extensions.token';
const DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
let ExtensibleTableComponent = class ExtensibleTableComponent {
    constructor(locale, injector) {
        this.locale = locale;
        this.trackByFn = (_, item) => item.name;
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        this.propList = extensions.entityProps.get(name).props;
        this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    set actionsColumnWidth(width) {
        this.setColumnWidths(width ? Number(width) : undefined);
    }
    setColumnWidths(actionsColumn) {
        const widths = [actionsColumn];
        this.propList.forEach(({ value: prop }) => {
            widths.push(prop.columnWidth);
        });
        this.columnWidths = widths;
    }
    getDate(value, format) {
        return value ? formatDate(value, format, this.locale) : '';
    }
    getIcon(value) {
        return value
            ? '<div class="text-center text-success"><i class="fa fa-check"></i></div>'
            : '<div class="text-center text-danger"><i class="fa fa-times"></i></div>';
    }
    getContent(prop, data) {
        return prop.valueResolver(data).pipe(map(value => {
            switch (prop.type) {
                case "boolean" /* Boolean */:
                    return this.getIcon(value);
                case "date" /* Date */:
                    return this.getDate(value, 'yyyy-MM-dd');
                case "time" /* Time */:
                    return this.getDate(value, 'HH:mm');
                case "dateTime" /* DateTime */:
                    return this.getDate(value, 'yyyy-MM-dd HH:mm:ss Z');
                default:
                    return value;
                // More types can be handled in the future
            }
        }));
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ExtensibleTableComponent.prototype, "actionsText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ExtensibleTableComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", ListService)
], ExtensibleTableComponent.prototype, "list", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ExtensibleTableComponent.prototype, "recordsTotal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ExtensibleTableComponent.prototype, "actionsColumnWidth", null);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], ExtensibleTableComponent.prototype, "actionsTemplate", void 0);
ExtensibleTableComponent = __decorate([
    Component({
        exportAs: 'abpExtensibleTable',
        selector: 'abp-extensible-table',
        template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\r\n  <ngx-datatable-column\r\n    [name]=\"actionsText | abpLocalization\"\r\n    [maxWidth]=\"columnWidths[0]\"\r\n    [width]=\"columnWidths[0]\"\r\n    [sortable]=\"false\"\r\n  >\r\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\r\n      <ng-container\r\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\r\n      ></ng-container>\r\n      <ng-template #gridActions>\r\n        <abp-grid-actions\r\n          [index]=\"i\"\r\n          [record]=\"row\"\r\n          text=\"LanguageManagement::Actions\"\r\n        ></abp-grid-actions>\r\n      </ng-template>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n\r\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n    <ngx-datatable-column\r\n      [width]=\"columnWidths[i + 1] || 200\"\r\n      [name]=\"prop.displayName | abpLocalization\"\r\n      [prop]=\"prop.name\"\r\n      [sortable]=\"prop.sortable\"\r\n    >\r\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\r\n        <ng-container\r\n          *abpPropData=\"let data; fromList: propList; withRecord: row; atIndex: i\"\r\n          [abpPermission]=\"prop.permission\"\r\n        >\r\n          <div *ngIf=\"prop.visible(data)\" [innerHTML]=\"getContent(prop, data) | async\"></div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ng-container>\r\n</ngx-datatable>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(0, Inject(LOCALE_ID)),
    __metadata("design:paramtypes", [String, Injector])
], ExtensibleTableComponent);
export { ExtensibleTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL2NvbXBvbmVudHMvZXh0ZW5zaWJsZS10YWJsZS9leHRlbnNpYmxlLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdEUsTUFBTSw0QkFBNEIsR0FBRyxHQUFHLENBQUM7QUFRekMsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFnQm5DLFlBQXVDLE1BQWMsRUFBRSxRQUFrQjtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjVDLGNBQVMsR0FBbUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRzFFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQlEsSUFBSSxrQkFBa0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFnQk8sZUFBZSxDQUFDLGFBQXFCO1FBQzNDLE1BQU0sTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQW9CLEdBQUcsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFFTyxPQUFPLENBQUMsS0FBVyxFQUFFLE1BQWM7UUFDekMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFTyxPQUFPLENBQUMsS0FBYztRQUM1QixPQUFPLEtBQUs7WUFDVixDQUFDLENBQUMseUVBQXlFO1lBQzNFLENBQUMsQ0FBQyx3RUFBd0UsQ0FBQztJQUMvRSxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQW1CLEVBQUUsSUFBYztRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCO29CQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0I7b0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDM0M7b0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdEM7b0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN0RDtvQkFDRSxPQUFPLEtBQUssQ0FBQztnQkFDZiwwQ0FBMEM7YUFDM0M7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEzRFU7SUFBUixLQUFLLEVBQUU7OzZEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7c0RBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs4QkFBTyxXQUFXO3NEQUFDO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzs4REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7OztrRUFFUDtBQUNRO0lBQVIsS0FBSyxFQUFFOzhCQUFrQixXQUFXO2lFQUFNO0FBUmhDLHdCQUF3QjtJQU5wQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsd2lEQUFnRDtRQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0lBaUJhLFdBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzZDQUFtQyxRQUFRO0dBaEI5RCx3QkFBd0IsQ0E0RHBDO1NBNURZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBMT0NBTEVfSUQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZVByb3BUeXBlIH0gZnJvbSAnLi4vLi4vZW51bXMvcHJvcHMuZW51bSc7XHJcbmltcG9ydCB7IEVudGl0eVByb3AsIEVudGl0eVByb3BMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0eS1wcm9wcyc7XHJcbmltcG9ydCB7IFByb3BEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb3BzJztcclxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHRlbnNpb25zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFWFRFTlNJT05TX0lERU5USUZJRVIgfSBmcm9tICcuLi8uLi90b2tlbnMvZXh0ZW5zaW9ucy50b2tlbic7XHJcbmNvbnN0IERFRkFVTFRfQUNUSU9OU19DT0xVTU5fV0lEVEggPSAxNTA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBleHBvcnRBczogJ2FicEV4dGVuc2libGVUYWJsZScsXHJcbiAgc2VsZWN0b3I6ICdhYnAtZXh0ZW5zaWJsZS10YWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4dGVuc2libGUtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZW5zaWJsZVRhYmxlQ29tcG9uZW50PFIgPSBhbnk+IHtcclxuICBASW5wdXQoKSBhY3Rpb25zVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IFJbXTtcclxuICBASW5wdXQoKSBsaXN0OiBMaXN0U2VydmljZTtcclxuICBASW5wdXQoKSByZWNvcmRzVG90YWw6IG51bWJlcjtcclxuICBASW5wdXQoKSBzZXQgYWN0aW9uc0NvbHVtbldpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2V0Q29sdW1uV2lkdGhzKHdpZHRoID8gTnVtYmVyKHdpZHRoKSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgcmVhZG9ubHkgY29sdW1uV2lkdGhzOiBudW1iZXJbXTtcclxuXHJcbiAgcmVhZG9ubHkgcHJvcExpc3Q6IEVudGl0eVByb3BMaXN0PFI+O1xyXG5cclxuICByZWFkb25seSB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxFbnRpdHlQcm9wPFI+PiA9IChfLCBpdGVtKSA9PiBpdGVtLm5hbWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBpbmplY3Rvci5nZXQoRXh0ZW5zaW9uc1NlcnZpY2UpO1xyXG4gICAgY29uc3QgbmFtZSA9IGluamVjdG9yLmdldChFWFRFTlNJT05TX0lERU5USUZJRVIpO1xyXG4gICAgdGhpcy5wcm9wTGlzdCA9IGV4dGVuc2lvbnMuZW50aXR5UHJvcHMuZ2V0KG5hbWUpLnByb3BzO1xyXG4gICAgdGhpcy5zZXRDb2x1bW5XaWR0aHMoREVGQVVMVF9BQ1RJT05TX0NPTFVNTl9XSURUSCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENvbHVtbldpZHRocyhhY3Rpb25zQ29sdW1uOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHdpZHRocyA9IFthY3Rpb25zQ29sdW1uXTtcclxuICAgIHRoaXMucHJvcExpc3QuZm9yRWFjaCgoeyB2YWx1ZTogcHJvcCB9KSA9PiB7XHJcbiAgICAgIHdpZHRocy5wdXNoKHByb3AuY29sdW1uV2lkdGgpO1xyXG4gICAgfSk7XHJcbiAgICAodGhpcy5jb2x1bW5XaWR0aHMgYXMgYW55KSA9IHdpZHRocztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZSh2YWx1ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZSA/IGZvcm1hdERhdGUodmFsdWUsIGZvcm1hdCwgdGhpcy5sb2NhbGUpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEljb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICA/ICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1zdWNjZXNzXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L2Rpdj4nXHJcbiAgICAgIDogJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWRhbmdlclwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9kaXY+JztcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQocHJvcDogRW50aXR5UHJvcDxSPiwgZGF0YTogUHJvcERhdGEpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHByb3AudmFsdWVSZXNvbHZlcihkYXRhKS5waXBlKFxyXG4gICAgICBtYXAodmFsdWUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIGVQcm9wVHlwZS5Cb29sZWFuOlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJY29uKHZhbHVlKTtcclxuICAgICAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGU6XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGUodmFsdWUsICd5eXl5LU1NLWRkJyk7XHJcbiAgICAgICAgICBjYXNlIGVQcm9wVHlwZS5UaW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKHZhbHVlLCAnSEg6bW0nKTtcclxuICAgICAgICAgIGNhc2UgZVByb3BUeXBlLkRhdGVUaW1lOlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKHZhbHVlLCAneXl5eS1NTS1kZCBISDptbTpzcyBaJyk7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAvLyBNb3JlIHR5cGVzIGNhbiBiZSBoYW5kbGVkIGluIHRoZSBmdXR1cmVcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19