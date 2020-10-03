import { ListService, ConfigStateService, getShortDateFormat, getShortDateShortTimeFormat, getShortTimeFormat, } from '@abp/ng.core';
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Injector, Input, LOCALE_ID, TemplateRef, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ExtensionsService } from '../../services/extensions.service';
import { EXTENSIONS_IDENTIFIER } from '../../tokens/extensions.token';
const DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
export class ExtensibleTableComponent {
    constructor(locale, config, injector) {
        this.locale = locale;
        this.config = config;
        this.trackByFn = (_, item) => item.name;
        // tslint:disable-next-line
        this.getInjected = injector.get.bind(injector);
        const extensions = injector.get(ExtensionsService);
        const name = injector.get(EXTENSIONS_IDENTIFIER);
        this.propList = extensions.entityProps.get(name).props;
        this.actionList = extensions['entityActions'].get(name)
            .actions;
        this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
    }
    set actionsText(value) {
        this._actionsText = value;
    }
    get actionsText() {
        var _a;
        return (_a = this._actionsText) !== null && _a !== void 0 ? _a : (this.actionList.length > 1 ? 'AbpUi::Actions' : '');
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
                    return this.getDate(value, getShortDateFormat(this.config));
                case "time" /* Time */:
                    return this.getDate(value, getShortTimeFormat(this.config));
                case "dateTime" /* DateTime */:
                    return this.getDate(value, getShortDateShortTimeFormat(this.config));
                default:
                    return value;
                // More types can be handled in the future
            }
        }));
    }
    ngOnChanges({ data }) {
        if (!(data === null || data === void 0 ? void 0 : data.currentValue))
            return;
        this.data = data.currentValue.map((record, index) => {
            this.propList.forEach(prop => {
                const propData = { getInjected: this.getInjected, record, index };
                record[`_${prop.value.name}`] = {
                    visible: prop.value.visible(propData),
                    value: this.getContent(prop.value, propData),
                };
            });
            return record;
        });
    }
}
ExtensibleTableComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'abpExtensibleTable',
                selector: 'abp-extensible-table',
                template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\r\n  <ngx-datatable-column\r\n    *ngIf=\"actionsTemplate || actionList.length\"\r\n    [name]=\"actionsText | abpLocalization\"\r\n    [maxWidth]=\"columnWidths[0]\"\r\n    [width]=\"columnWidths[0]\"\r\n    [sortable]=\"false\"\r\n  >\r\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\r\n      <ng-container\r\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\r\n      ></ng-container>\r\n      <ng-template #gridActions>\r\n        <abp-grid-actions\r\n          [index]=\"i\"\r\n          [record]=\"row\"\r\n          text=\"AbpUi::Actions\"\r\n        ></abp-grid-actions>\r\n      </ng-template>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n\r\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n    <ngx-datatable-column\r\n      [width]=\"columnWidths[i + 1] || 200\"\r\n      [name]=\"prop.displayName | abpLocalization\"\r\n      [prop]=\"prop.name\"\r\n      [sortable]=\"prop.sortable\"\r\n    >\r\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\r\n        <ng-container [abpPermission]=\"prop.permission\">\r\n          <div\r\n            *ngIf=\"row['_' + prop.name].visible\"\r\n            [innerHTML]=\"row['_' + prop.name].value | async\"\r\n            (click)=\"prop.action && prop.action({ getInjected: getInjected, record: row, index: i })\"\r\n            [class.pointer]=\"prop.action\"\r\n          ></div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ng-container>\r\n</ngx-datatable>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ExtensibleTableComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: ConfigStateService },
    { type: Injector }
];
ExtensibleTableComponent.propDecorators = {
    actionsText: [{ type: Input }],
    data: [{ type: Input }],
    list: [{ type: Input }],
    recordsTotal: [{ type: Input }],
    actionsColumnWidth: [{ type: Input }],
    actionsTemplate: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaWJsZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvZXh0ZW5zaW9ucy9zcmMvbGliL2NvbXBvbmVudHMvZXh0ZW5zaWJsZS10YWJsZS9leHRlbnNpYmxlLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLGtCQUFrQixHQUNuQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsR0FPWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdEUsTUFBTSw0QkFBNEIsR0FBRyxHQUFHLENBQUM7QUFRekMsTUFBTSxPQUFPLHdCQUF3QjtJQTRCbkMsWUFDNkIsTUFBYyxFQUNqQyxNQUEwQixFQUNsQyxRQUFrQjtRQUZTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFKM0IsY0FBUyxHQUFtQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFPMUUsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENB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LGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsWUFBWSxDQUFBO1lBQUUsT0FBTztRQUVoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzQixNQUFNLFFBQVEsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVMsQ0FBQztnQkFDekUsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHO29CQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztpQkFDN0MsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFyR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLG9yREFBZ0Q7Z0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7eUNBOEJJLE1BQU0sU0FBQyxTQUFTO1lBbEVuQixrQkFBa0I7WUFVbEIsUUFBUTs7OzBCQTZCUCxLQUFLO21CQVFMLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTGlzdFNlcnZpY2UsXHJcbiAgQ29uZmlnU3RhdGVTZXJ2aWNlLFxyXG4gIGdldFNob3J0RGF0ZUZvcm1hdCxcclxuICBnZXRTaG9ydERhdGVTaG9ydFRpbWVGb3JtYXQsXHJcbiAgZ2V0U2hvcnRUaW1lRm9ybWF0LFxyXG59IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgTE9DQUxFX0lELFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBUeXBlLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIEluamVjdEZsYWdzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZVByb3BUeXBlIH0gZnJvbSAnLi4vLi4vZW51bXMvcHJvcHMuZW51bSc7XHJcbmltcG9ydCB7IEVudGl0eVByb3AsIEVudGl0eVByb3BMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudGl0eS1wcm9wcyc7XHJcbmltcG9ydCB7IFByb3BEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb3BzJztcclxuaW1wb3J0IHsgRXh0ZW5zaW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9leHRlbnNpb25zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFWFRFTlNJT05TX0lERU5USUZJRVIgfSBmcm9tICcuLi8uLi90b2tlbnMvZXh0ZW5zaW9ucy50b2tlbic7XHJcbmltcG9ydCB7IEVudGl0eUFjdGlvbkxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXR5LWFjdGlvbnMnO1xyXG5jb25zdCBERUZBVUxUX0FDVElPTlNfQ09MVU1OX1dJRFRIID0gMTUwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdhYnBFeHRlbnNpYmxlVGFibGUnLFxyXG4gIHNlbGVjdG9yOiAnYWJwLWV4dGVuc2libGUtdGFibGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leHRlbnNpYmxlLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4dGVuc2libGVUYWJsZUNvbXBvbmVudDxSID0gYW55PiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgcHJvdGVjdGVkIF9hY3Rpb25zVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFjdGlvbnNUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2FjdGlvbnNUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG4gIGdldCBhY3Rpb25zVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnNUZXh0ID8/ICh0aGlzLmFjdGlvbkxpc3QubGVuZ3RoID4gMSA/ICdBYnBVaTo6QWN0aW9ucycgOiAnJyk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBkYXRhOiBSW107XHJcbiAgQElucHV0KCkgbGlzdDogTGlzdFNlcnZpY2U7XHJcbiAgQElucHV0KCkgcmVjb3Jkc1RvdGFsOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc2V0IGFjdGlvbnNDb2x1bW5XaWR0aCh3aWR0aDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldENvbHVtbldpZHRocyh3aWR0aCA/IE51bWJlcih3aWR0aCkgOiB1bmRlZmluZWQpO1xyXG4gIH1cclxuICBASW5wdXQoKSBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldEluamVjdGVkOiA8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpID0+IFQ7XHJcblxyXG4gIHJlYWRvbmx5IGNvbHVtbldpZHRoczogbnVtYmVyW107XHJcblxyXG4gIHJlYWRvbmx5IHByb3BMaXN0OiBFbnRpdHlQcm9wTGlzdDxSPjtcclxuXHJcbiAgcmVhZG9ubHkgYWN0aW9uTGlzdDogRW50aXR5QWN0aW9uTGlzdDxSPjtcclxuXHJcbiAgcmVhZG9ubHkgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248RW50aXR5UHJvcDxSPj4gPSAoXywgaXRlbSkgPT4gaXRlbS5uYW1lO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1N0YXRlU2VydmljZSxcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICApIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgdGhpcy5nZXRJbmplY3RlZCA9IGluamVjdG9yLmdldC5iaW5kKGluamVjdG9yKTtcclxuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBpbmplY3Rvci5nZXQoRXh0ZW5zaW9uc1NlcnZpY2UpO1xyXG4gICAgY29uc3QgbmFtZSA9IGluamVjdG9yLmdldChFWFRFTlNJT05TX0lERU5USUZJRVIpO1xyXG4gICAgdGhpcy5wcm9wTGlzdCA9IGV4dGVuc2lvbnMuZW50aXR5UHJvcHMuZ2V0KG5hbWUpLnByb3BzO1xyXG4gICAgdGhpcy5hY3Rpb25MaXN0ID0gKGV4dGVuc2lvbnNbJ2VudGl0eUFjdGlvbnMnXS5nZXQobmFtZSlcclxuICAgICAgLmFjdGlvbnMgYXMgdW5rbm93bikgYXMgRW50aXR5QWN0aW9uTGlzdDxSPjtcclxuICAgIHRoaXMuc2V0Q29sdW1uV2lkdGhzKERFRkFVTFRfQUNUSU9OU19DT0xVTU5fV0lEVEgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDb2x1bW5XaWR0aHMoYWN0aW9uc0NvbHVtbjogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB3aWR0aHMgPSBbYWN0aW9uc0NvbHVtbl07XHJcbiAgICB0aGlzLnByb3BMaXN0LmZvckVhY2goKHsgdmFsdWU6IHByb3AgfSkgPT4ge1xyXG4gICAgICB3aWR0aHMucHVzaChwcm9wLmNvbHVtbldpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgKHRoaXMuY29sdW1uV2lkdGhzIGFzIGFueSkgPSB3aWR0aHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGUodmFsdWU6IERhdGUsIGZvcm1hdDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPyBmb3JtYXREYXRlKHZhbHVlLCBmb3JtYXQsIHRoaXMubG9jYWxlKSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJY29uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICAgICAgPyAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtc3VjY2Vzc1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+PC9kaXY+J1xyXG4gICAgICA6ICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1kYW5nZXJcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPjwvZGl2Pic7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KHByb3A6IEVudGl0eVByb3A8Uj4sIGRhdGE6IFByb3BEYXRhKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBwcm9wLnZhbHVlUmVzb2x2ZXIoZGF0YSkucGlwZShcclxuICAgICAgbWFwKHZhbHVlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBlUHJvcFR5cGUuQm9vbGVhbjpcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SWNvbih2YWx1ZSk7XHJcbiAgICAgICAgICBjYXNlIGVQcm9wVHlwZS5EYXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKHZhbHVlLCBnZXRTaG9ydERhdGVGb3JtYXQodGhpcy5jb25maWcpKTtcclxuICAgICAgICAgIGNhc2UgZVByb3BUeXBlLlRpbWU6XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGUodmFsdWUsIGdldFNob3J0VGltZUZvcm1hdCh0aGlzLmNvbmZpZykpO1xyXG4gICAgICAgICAgY2FzZSBlUHJvcFR5cGUuRGF0ZVRpbWU6XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGUodmFsdWUsIGdldFNob3J0RGF0ZVNob3J0VGltZUZvcm1hdCh0aGlzLmNvbmZpZykpO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgLy8gTW9yZSB0eXBlcyBjYW4gYmUgaGFuZGxlZCBpbiB0aGUgZnV0dXJlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyh7IGRhdGEgfTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCFkYXRhPy5jdXJyZW50VmFsdWUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmN1cnJlbnRWYWx1ZS5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wTGlzdC5mb3JFYWNoKHByb3AgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb3BEYXRhID0geyBnZXRJbmplY3RlZDogdGhpcy5nZXRJbmplY3RlZCwgcmVjb3JkLCBpbmRleCB9IGFzIGFueTtcclxuICAgICAgICByZWNvcmRbYF8ke3Byb3AudmFsdWUubmFtZX1gXSA9IHtcclxuICAgICAgICAgIHZpc2libGU6IHByb3AudmFsdWUudmlzaWJsZShwcm9wRGF0YSksXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb250ZW50KHByb3AudmFsdWUsIHByb3BEYXRhKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiByZWNvcmQ7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19