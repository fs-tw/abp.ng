import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Injector, } from '@angular/core';
import { EXTENSIONS_ACTION_CALLBACK, EXTENSIONS_ACTION_DATA, EXTENSIONS_ACTION_TYPE, } from '../../tokens/extensions.token';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
let PageToolbarComponent = class PageToolbarComponent extends AbstractActionsComponent {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.trackByFn = (_, item) => item.action || item.component;
    }
    createInjector(action) {
        const get = (token, notFoundValue, flags) => {
            return token === EXTENSIONS_ACTION_DATA
                ? this.data
                : token === EXTENSIONS_ACTION_CALLBACK
                    ? (data = this.data) => action.action(data)
                    : this.getInjected.call(this.injector, token, notFoundValue, flags);
        };
        return { get };
    }
};
PageToolbarComponent = __decorate([
    Component({
        exportAs: 'abpPageToolbar',
        selector: 'abp-page-toolbar',
        template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\" [abpPermission]=\"action.permission\">\r\n      <ng-container *ngIf=\"action.component as component; else button\">\r\n        <ng-container\r\n          *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n        ></ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #button>\r\n        <button (click)=\"action.action(data)\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n          <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n          {{ action.text | abpLocalization }}\r\n        </button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
        providers: [
            {
                provide: EXTENSIONS_ACTION_TYPE,
                useValue: 'toolbarActions',
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [Injector])
], PageToolbarComponent);
export { PageToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9wYWdlLXRvb2xiYXIvcGFnZS10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBR1QsUUFBUSxHQUdULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsc0JBQXNCLEVBQ3RCLHNCQUFzQixHQUN2QixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBYzFGLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQThCLFNBQVEsd0JBQThDO0lBSS9GLFlBQTZCLFFBQWtCO1FBQzdDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURXLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIdEMsY0FBUyxHQUF5QyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNyRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFJaEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUEyQjtRQUN4QyxNQUFNLEdBQUcsR0FBRyxDQUFJLEtBQWtDLEVBQUUsYUFBaUIsRUFBRSxLQUFtQixFQUFFLEVBQUU7WUFDNUYsT0FBTyxLQUFLLEtBQUssc0JBQXNCO2dCQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ1gsQ0FBQyxDQUFDLEtBQUssS0FBSywwQkFBMEI7b0JBQ3RDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUM7UUFFRixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUE7QUFuQlksb0JBQW9CO0lBWmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QiwyMUJBQTRDO1FBQzVDLFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7U0FDRjtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBS3VDLFFBQVE7R0FKcEMsb0JBQW9CLENBbUJoQztTQW5CWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3RGbGFncyxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbmplY3RvcixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbGJhckFjdGlvbkxpc3QsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9vbGJhci1hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBFWFRFTlNJT05TX0FDVElPTl9DQUxMQkFDSyxcclxuICBFWFRFTlNJT05TX0FDVElPTl9EQVRBLFxyXG4gIEVYVEVOU0lPTlNfQUNUSU9OX1RZUEUsXHJcbn0gZnJvbSAnLi4vLi4vdG9rZW5zL2V4dGVuc2lvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBBYnN0cmFjdEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1hY3Rpb25zL2Fic3RyYWN0LWFjdGlvbnMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGV4cG9ydEFzOiAnYWJwUGFnZVRvb2xiYXInLFxyXG4gIHNlbGVjdG9yOiAnYWJwLXBhZ2UtdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEVYVEVOU0lPTlNfQUNUSU9OX1RZUEUsXHJcbiAgICAgIHVzZVZhbHVlOiAndG9vbGJhckFjdGlvbnMnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVRvb2xiYXJDb21wb25lbnQ8UiA9IGFueT4gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvbnNDb21wb25lbnQ8VG9vbGJhckFjdGlvbkxpc3Q8Uj4+IHtcclxuICByZWFkb25seSB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUb29sYmFyQ29tcG9uZW50PFI+PiA9IChfLCBpdGVtKSA9PlxyXG4gICAgaXRlbS5hY3Rpb24gfHwgaXRlbS5jb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBzdXBlcihpbmplY3Rvcik7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbmplY3RvcihhY3Rpb246IFRvb2xiYXJDb21wb25lbnQ8Uj4pOiBJbmplY3RvciB7XHJcbiAgICBjb25zdCBnZXQgPSA8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpID0+IHtcclxuICAgICAgcmV0dXJuIHRva2VuID09PSBFWFRFTlNJT05TX0FDVElPTl9EQVRBXHJcbiAgICAgICAgPyB0aGlzLmRhdGFcclxuICAgICAgICA6IHRva2VuID09PSBFWFRFTlNJT05TX0FDVElPTl9DQUxMQkFDS1xyXG4gICAgICAgID8gKGRhdGEgPSB0aGlzLmRhdGEpID0+IGFjdGlvbi5hY3Rpb24oZGF0YSlcclxuICAgICAgICA6IHRoaXMuZ2V0SW5qZWN0ZWQuY2FsbCh0aGlzLmluamVjdG9yLCB0b2tlbiwgbm90Rm91bmRWYWx1ZSwgZmxhZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBnZXQgfTtcclxuICB9XHJcbn1cclxuIl19