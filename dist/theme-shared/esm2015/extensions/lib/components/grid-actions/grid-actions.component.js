import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Injector, Input, } from '@angular/core';
import { EXTENSIONS_ACTION_TYPE } from '../../tokens/extensions.token';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
let GridActionsComponent = class GridActionsComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridActionsComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], GridActionsComponent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridActionsComponent.prototype, "text", void 0);
GridActionsComponent = __decorate([
    Component({
        exportAs: 'abpGridActions',
        selector: 'abp-grid-actions',
        template: "<div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n  <button\r\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n    data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\"\r\n    ngbDropdownToggle\r\n  >\r\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\r\n  </button>\r\n  <div ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n      <button\r\n        *ngIf=\"action.visible(data)\"\r\n        ngbDropdownItem\r\n        [abpPermission]=\"action.permission\"\r\n        (click)=\"action.action(data)\"\r\n        type=\"button\"\r\n      >\r\n        <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n        {{ action.text | abpLocalization }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
        providers: [
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'entityActions',
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Injector])
], GridActionsComponent);
export { GridActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9ncmlkLWFjdGlvbnMvZ3JpZC1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQWMxRixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUE4QixTQUFRLHdCQUE2QztJQVM5RixZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQVRULFNBQUksR0FBRyxXQUFXLENBQUM7UUFJbkIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGNBQVMsR0FBcUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBSTlFLENBQUM7Q0FDRixDQUFBO0FBWFU7SUFBUixLQUFLLEVBQUU7O2tEQUFvQjtBQUVuQjtJQUFSLEtBQUssRUFBRTs7bURBQXdCO0FBRXZCO0lBQVIsS0FBSyxFQUFFOztrREFBVztBQUxSLG9CQUFvQjtJQVpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsNjBCQUE0QztRQUM1QyxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixRQUFRLEVBQUUsZUFBZTthQUMxQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FVc0IsUUFBUTtHQVRuQixvQkFBb0IsQ0FZaEM7U0FaWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudGl0eUFjdGlvbiwgRW50aXR5QWN0aW9uTGlzdCB9IGZyb20gJy4uLy4uL21vZGVscy9lbnRpdHktYWN0aW9ucyc7XHJcbmltcG9ydCB7IEVYVEVOU0lPTlNfQUNUSU9OX1RZUEUgfSBmcm9tICcuLi8uLi90b2tlbnMvZXh0ZW5zaW9ucy50b2tlbic7XHJcbmltcG9ydCB7IEFic3RyYWN0QWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWFjdGlvbnMvYWJzdHJhY3QtYWN0aW9ucy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdhYnBHcmlkQWN0aW9ucycsXHJcbiAgc2VsZWN0b3I6ICdhYnAtZ3JpZC1hY3Rpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpZC1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRVhURU5TSU9OU19BQ1RJT05fVFlQRSxcclxuICAgICAgdXNlVmFsdWU6ICdlbnRpdHlBY3Rpb25zJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRBY3Rpb25zQ29tcG9uZW50PFIgPSBhbnk+IGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25zQ29tcG9uZW50PEVudGl0eUFjdGlvbkxpc3Q8Uj4+IHtcclxuICBASW5wdXQoKSBpY29uID0gJ2ZhIGZhLWNvZyc7XHJcblxyXG4gIEBJbnB1dCgpIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcclxuXHJcbiAgcmVhZG9ubHkgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248RW50aXR5QWN0aW9uPFI+PiA9IChfLCBpdGVtKSA9PiBpdGVtLnRleHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgc3VwZXIoaW5qZWN0b3IpO1xyXG4gIH1cclxufVxyXG4iXX0=