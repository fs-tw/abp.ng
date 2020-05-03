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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFkbWluLWJhc2ljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbmd4LWFkbWluLWJhc2ljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUEyQixNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQTtBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzlDLE1BQU0sS0FBTyxPQUFPLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBQztBQUVqRztJQUFBO0lBMEJtQyxDQUFDOztnQkExQm5DLFFBQVEsU0FBQztvQkFDUixZQUFZO3dCQUNWLGVBQWU7d0JBQ2Ysd0JBQXdCO3VCQUNyQixPQUFPLENBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEtBQUs7d0JBQ0wsVUFBVTt3QkFDVixnQkFBZ0I7d0JBRWhCLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixZQUFZO3FCQUNiO29CQUNELE9BQU87d0JBQ0wsZ0JBQWdCO3dCQUVoQixXQUFXO3dCQUNYLG9CQUFvQjt1QkFHakIsT0FBTyxDQUNYO29CQUNELGVBQWUsbUJBQU0sT0FBTyxDQUFDO2lCQUM5Qjs7SUFDa0MsMEJBQUM7Q0FBQSxBQTFCcEMsSUEwQm9DO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUsIEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVCYXNpY01vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuYmFzaWMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hBZG1pblNoYXJlZE1vZHVsZSB9IGZyb20gJ0Bmcy9uZ3gtYWRtaW4vc2hhcmVkJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwbGljYXRpb24tbGF5b3V0L2FwcGxpY2F0aW9uLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0cy9vbmUtY29sdW1uL29uZS1jb2x1bW4ubGF5b3V0JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3VudExheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvdW50LWxheW91dC9hY2NvdW50LWxheW91dC5jb21wb25lbnQnXHJcbmltcG9ydCB7IEVtcHR5TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtcHR5LWxheW91dC9lbXB0eS1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmJVc2VyTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL1N0b3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExBWU9VVFMgPSBbQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQsIEFjY291bnRMYXlvdXRDb21wb25lbnQsIEVtcHR5TGF5b3V0Q29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIZWFkZXJDb21wb25lbnQsXHJcbiAgICBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQsXHJcbiAgICAuLi5MQVlPVVRTXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvL2FicFxyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIFRoZW1lQmFzaWNNb2R1bGUsXHJcblxyXG4gICAgLy9uZ3gtYWRtaW5cclxuICAgIE5neEFkbWluU2hhcmVkTW9kdWxlLFxyXG4gICAgTmJVc2VyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUaGVtZUJhc2ljTW9kdWxlLFxyXG5cclxuICAgIC8vbmd4LWFkbWluXHJcbiAgICBOZ3hBZG1pblNoYXJlZE1vZHVsZSxcclxuXHJcblxyXG4gICAgLi4uTEFZT1VUU1xyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uTEFZT1VUU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hBZG1pbkJhc2ljTW9kdWxlIHsgfVxyXG4iXX0=