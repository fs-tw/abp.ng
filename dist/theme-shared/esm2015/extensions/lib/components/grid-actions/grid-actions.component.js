import { ChangeDetectionStrategy, Component, Injector, Input, } from '@angular/core';
import { EXTENSIONS_ACTION_TYPE } from '../../tokens/extensions.token';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
export class GridActionsComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.icon = 'fa fa-cog';
        this.text = '';
        this.trackByFn = (_, item) => item.text;
    }
}
GridActionsComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'abpGridActions',
                selector: 'abp-grid-actions',
                template: "<div *ngIf=\"actionList.length > 1\" ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n  <button\r\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n    data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\"\r\n    ngbDropdownToggle\r\n  >\r\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\r\n  </button>\r\n  <div ngbDropdownMenu>\r\n    <ng-container\r\n      *ngFor=\"let action of actionList; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"btnItem\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: action }\"\r\n    >\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-container\r\n  *ngIf=\"actionList.length === 1\"\r\n  [ngTemplateOutlet]=\"btnItem\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: actionList.get(0).value }\"\r\n></ng-container>\r\n\r\n<ng-template #btnItem let-action>\r\n  <button\r\n    *ngIf=\"action.visible(data)\"\r\n    ngbDropdownItem\r\n    [abpPermission]=\"action.permission\"\r\n    (click)=\"action.action(data)\"\r\n    type=\"button\"\r\n    class=\"{{ actionList.length === 1 ? 'btn btn-primary' : '' }}\"\r\n    [class.text-center]=\"actionList.length === 1\"\r\n  >\r\n    <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n    <span *ngIf=\"action.icon; else ellipsis\">{{ action.text | abpLocalization }}</span>\r\n    <ng-template #ellipsis>\r\n      <div abpEllipsis>{{ action.text | abpLocalization }}</div>\r\n    </ng-template>\r\n  </button>\r\n</ng-template>\r\n",
                providers: [
                    {
                        provide: EXTENSIONS_ACTION_TYPE,
                        useValue: 'entityActions',
                    },
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
GridActionsComponent.ctorParameters = () => [
    { type: Injector }
];
GridActionsComponent.propDecorators = {
    icon: [{ type: Input }],
    index: [{ type: Input }],
    text: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hY3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9ncmlkLWFjdGlvbnMvZ3JpZC1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBYzFGLE1BQU0sT0FBTyxvQkFBOEIsU0FBUSx3QkFBNkM7SUFTOUYsWUFBWSxRQUFrQjtRQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFUVCxTQUFJLEdBQUcsV0FBVyxDQUFDO1FBSW5CLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFVixjQUFTLEdBQXFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUk5RSxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDg5Q0FBNEM7Z0JBQzVDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsc0JBQXNCO3dCQUMvQixRQUFRLEVBQUUsZUFBZTtxQkFDMUI7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQW5CQyxRQUFROzs7bUJBcUJQLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24sIEVudGl0eUFjdGlvbkxpc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXR5LWFjdGlvbnMnO1xyXG5pbXBvcnQgeyBFWFRFTlNJT05TX0FDVElPTl9UWVBFIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2V4dGVuc2lvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBBYnN0cmFjdEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1hY3Rpb25zL2Fic3RyYWN0LWFjdGlvbnMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGV4cG9ydEFzOiAnYWJwR3JpZEFjdGlvbnMnLFxyXG4gIHNlbGVjdG9yOiAnYWJwLWdyaWQtYWN0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEVYVEVOU0lPTlNfQUNUSU9OX1RZUEUsXHJcbiAgICAgIHVzZVZhbHVlOiAnZW50aXR5QWN0aW9ucycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQWN0aW9uc0NvbXBvbmVudDxSID0gYW55PiBleHRlbmRzIEFic3RyYWN0QWN0aW9uc0NvbXBvbmVudDxFbnRpdHlBY3Rpb25MaXN0PFI+PiB7XHJcbiAgQElucHV0KCkgaWNvbiA9ICdmYSBmYS1jb2cnO1xyXG5cclxuICBASW5wdXQoKSByZWFkb25seSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSB0ZXh0ID0gJyc7XHJcblxyXG4gIHJlYWRvbmx5IHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPEVudGl0eUFjdGlvbjxSPj4gPSAoXywgaXRlbSkgPT4gaXRlbS50ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHN1cGVyKGluamVjdG9yKTtcclxuICB9XHJcbn1cclxuIl19