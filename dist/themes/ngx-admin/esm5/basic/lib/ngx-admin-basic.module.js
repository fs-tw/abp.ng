/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-admin-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { NgxAdminSharedModule } from '@fs/ngx-admin/shared';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
import { OneColumnLayoutComponent } from './components/layouts/one-column/one-column.layout';
import { HeaderComponent } from './components/header/header.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { EmptyLayoutComponent } from './components/empty-layout/empty-layout.component';
import { NbUserModule } from '@nebular/theme';
/** @type {?} */
export var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
var NgxAdminBasicModule = /** @class */ (function () {
    function NgxAdminBasicModule() {
    }
    NgxAdminBasicModule.decorators = [
        { type: NgModule, args: [{
                    declarations: tslib_1.__spread([
                        HeaderComponent,
                        OneColumnLayoutComponent
                    ], LAYOUTS),
                    imports: [
                        //abp
                        CoreModule,
                        ThemeBasicModule,
                        //ngx-admin
                        NgxAdminSharedModule,
                        NbUserModule
                    ],
                    exports: tslib_1.__spread([
                        //abp
                        CoreModule,
                        ThemeBasicModule,
                        //ngx-admin
                        NgxAdminSharedModule
                    ], LAYOUTS),
                    entryComponents: tslib_1.__spread(LAYOUTS),
                },] }
    ];
    return NgxAdminBasicModule;
}());
export { NgxAdminBasicModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFkbWluLWJhc2ljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbmd4LWFkbWluLWJhc2ljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDMUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFBO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFOUMsTUFBTSxLQUFPLE9BQU8sR0FBRyxDQUFDLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO0FBRWpHO0lBQUE7SUE0Qm1DLENBQUM7O2dCQTVCbkMsUUFBUSxTQUFDO29CQUNSLFlBQVk7d0JBQ1YsZUFBZTt3QkFDZix3QkFBd0I7dUJBQ3JCLE9BQU8sQ0FDWDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsS0FBSzt3QkFDTCxVQUFVO3dCQUNWLGdCQUFnQjt3QkFFaEIsV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTzt3QkFDTCxLQUFLO3dCQUNMLFVBQVU7d0JBQ1YsZ0JBQWdCO3dCQUVoQixXQUFXO3dCQUNYLG9CQUFvQjt1QkFHakIsT0FBTyxDQUNYO29CQUNELGVBQWUsbUJBQU0sT0FBTyxDQUFDO2lCQUM5Qjs7SUFDa0MsMEJBQUM7Q0FBQSxBQTVCcEMsSUE0Qm9DO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZUJhc2ljTW9kdWxlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5iYXNpYyc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEFkbWluU2hhcmVkTW9kdWxlIH0gZnJvbSAnQGZzL25neC1hZG1pbi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9uZUNvbHVtbkxheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXRzL29uZS1jb2x1bW4vb25lLWNvbHVtbi5sYXlvdXQnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FjY291bnQtbGF5b3V0L2FjY291bnQtbGF5b3V0LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRW1wdHlMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1wdHktbGF5b3V0L2VtcHR5LWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYlVzZXJNb2R1bGUgfSBmcm9tICdAbmVidWxhci90aGVtZSc7ICBcclxuXHJcbmV4cG9ydCBjb25zdCBMQVlPVVRTID0gW0FwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50LCBBY2NvdW50TGF5b3V0Q29tcG9uZW50LCBFbXB0eUxheW91dENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgLi4uTEFZT1VUU1xyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLy9hYnBcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZUJhc2ljTW9kdWxlLFxyXG5cclxuICAgIC8vbmd4LWFkbWluXHJcbiAgICBOZ3hBZG1pblNoYXJlZE1vZHVsZSxcclxuICAgIE5iVXNlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLy9hYnBcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZUJhc2ljTW9kdWxlLFxyXG5cclxuICAgIC8vbmd4LWFkbWluXHJcbiAgICBOZ3hBZG1pblNoYXJlZE1vZHVsZSxcclxuICAgIFxyXG5cclxuICAgIC4uLkxBWU9VVFNcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLkxBWU9VVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QWRtaW5CYXNpY01vZHVsZSB7IH1cclxuIl19