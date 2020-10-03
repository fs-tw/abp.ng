import { ChangeDetectionStrategy, Component, Injector, } from '@angular/core';
import { EXTENSIONS_ACTION_CALLBACK, EXTENSIONS_ACTION_DATA, EXTENSIONS_ACTION_TYPE, } from '../../tokens/extensions.token';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
export class PageToolbarComponent extends AbstractActionsComponent {
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
}
PageToolbarComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
PageToolbarComponent.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLXNoYXJlZC9leHRlbnNpb25zL3NyYy9saWIvY29tcG9uZW50cy9wYWdlLXRvb2xiYXIvcGFnZS10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFHVCxRQUFRLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLDBCQUEwQixFQUMxQixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFjMUYsTUFBTSxPQUFPLG9CQUE4QixTQUFRLHdCQUE4QztJQUkvRixZQUE2QixRQUFrQjtRQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEVyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSHRDLGNBQVMsR0FBeUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FDckUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBSWhDLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBMkI7UUFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBSSxLQUFrQyxFQUFFLGFBQWlCLEVBQUUsS0FBbUIsRUFBRSxFQUFFO1lBQzVGLE9BQU8sS0FBSyxLQUFLLHNCQUFzQjtnQkFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUNYLENBQUMsQ0FBQyxLQUFLLEtBQUssMEJBQTBCO29CQUN0QyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDO1FBRUYsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMjFCQUE0QztnQkFDNUMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCO2lCQUNGO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUF2QkMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdEZsYWdzLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIEluamVjdG9yLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBUeXBlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sYmFyQWN0aW9uTGlzdCwgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVscy90b29sYmFyLWFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIEVYVEVOU0lPTlNfQUNUSU9OX0NBTExCQUNLLFxyXG4gIEVYVEVOU0lPTlNfQUNUSU9OX0RBVEEsXHJcbiAgRVhURU5TSU9OU19BQ1RJT05fVFlQRSxcclxufSBmcm9tICcuLi8uLi90b2tlbnMvZXh0ZW5zaW9ucy50b2tlbic7XHJcbmltcG9ydCB7IEFic3RyYWN0QWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWFjdGlvbnMvYWJzdHJhY3QtYWN0aW9ucy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdhYnBQYWdlVG9vbGJhcicsXHJcbiAgc2VsZWN0b3I6ICdhYnAtcGFnZS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogRVhURU5TSU9OU19BQ1RJT05fVFlQRSxcclxuICAgICAgdXNlVmFsdWU6ICd0b29sYmFyQWN0aW9ucycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlVG9vbGJhckNvbXBvbmVudDxSID0gYW55PiBleHRlbmRzIEFic3RyYWN0QWN0aW9uc0NvbXBvbmVudDxUb29sYmFyQWN0aW9uTGlzdDxSPj4ge1xyXG4gIHJlYWRvbmx5IHRyYWNrQnlGbjogVHJhY2tCeUZ1bmN0aW9uPFRvb2xiYXJDb21wb25lbnQ8Uj4+ID0gKF8sIGl0ZW0pID0+XHJcbiAgICBpdGVtLmFjdGlvbiB8fCBpdGVtLmNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHN1cGVyKGluamVjdG9yKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUluamVjdG9yKGFjdGlvbjogVG9vbGJhckNvbXBvbmVudDxSPik6IEluamVjdG9yIHtcclxuICAgIGNvbnN0IGdldCA9IDxUPih0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+LCBub3RGb3VuZFZhbHVlPzogVCwgZmxhZ3M/OiBJbmplY3RGbGFncykgPT4ge1xyXG4gICAgICByZXR1cm4gdG9rZW4gPT09IEVYVEVOU0lPTlNfQUNUSU9OX0RBVEFcclxuICAgICAgICA/IHRoaXMuZGF0YVxyXG4gICAgICAgIDogdG9rZW4gPT09IEVYVEVOU0lPTlNfQUNUSU9OX0NBTExCQUNLXHJcbiAgICAgICAgPyAoZGF0YSA9IHRoaXMuZGF0YSkgPT4gYWN0aW9uLmFjdGlvbihkYXRhKVxyXG4gICAgICAgIDogdGhpcy5nZXRJbmplY3RlZC5jYWxsKHRoaXMuaW5qZWN0b3IsIHRva2VuLCBub3RGb3VuZFZhbHVlLCBmbGFncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7IGdldCB9O1xyXG4gIH1cclxufVxyXG4iXX0=