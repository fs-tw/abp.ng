/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-admin-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCardModule, NbActionsModule, NbLayoutModule, NbSidebarModule, NbSelectModule, NbSearchModule, NbContextMenuModule } from '@nebular/theme';
import { ThemeModule } from '@fs/ngx-admin';
import { NbSecurityModule } from '@nebular/security';
export class NgxAdminSharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxAdminSharedModule,
            providers: []
        };
    }
}
NgxAdminSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    //abp,
                    CoreModule,
                    ThemeSharedModule,
                    //ngx-admin
                    NbAuthModule,
                    NbMenuModule,
                    ThemeModule
                ],
                exports: [
                    //abp,
                    ThemeSharedModule,
                    //ngx-admin
                    ThemeModule,
                    NbLayoutModule,
                    NbSidebarModule,
                    NbSelectModule,
                    NbSearchModule,
                    NbAuthModule,
                    NbMenuModule,
                    NbIconModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    NbCheckboxModule,
                    NbCardModule,
                    NbActionsModule,
                    NbSecurityModule,
                    NbContextMenuModule
                ],
                providers: [],
                entryComponents: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFkbWluLXNoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYWRtaW4tc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDL1AsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQTBDckQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxFQUNWO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osTUFBTTtvQkFDTixVQUFVO29CQUNWLGlCQUFpQjtvQkFDakIsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztpQkFFWjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsTUFBTTtvQkFDTixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxjQUFjO29CQUNkLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUVwQjtnQkFDRCxTQUFTLEVBQUUsRUFDVjtnQkFDRCxlQUFlLEVBQUUsRUFDaEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVNoYXJlZE1vZHVsZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmJBdXRoTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XHJcbmltcG9ydCB7IE5iTWVudU1vZHVsZSwgTmJJY29uTW9kdWxlLCBOYkFsZXJ0TW9kdWxlLCBOYklucHV0TW9kdWxlLCBOYkJ1dHRvbk1vZHVsZSwgTmJDaGVja2JveE1vZHVsZSwgTmJDYXJkTW9kdWxlLCBOYkFjdGlvbnNNb2R1bGUsIE5iTGF5b3V0TW9kdWxlLCBOYlNpZGViYXJNb2R1bGUsIE5iU2VsZWN0TW9kdWxlLCBOYlNlYXJjaE1vZHVsZSwgTmJDb250ZXh0TWVudU1vZHVsZSwgTmJVc2VyTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQgeyBUaGVtZU1vZHVsZSB9IGZyb20gJ0Bmcy9uZ3gtYWRtaW4nO1xyXG5pbXBvcnQgeyBOYlNlY3VyaXR5TW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvc2VjdXJpdHknO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgLy9hYnAsXHJcbiAgICBDb3JlTW9kdWxlLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAvL25neC1hZG1pblxyXG4gICAgTmJBdXRoTW9kdWxlLFxyXG4gICAgTmJNZW51TW9kdWxlLFxyXG4gICAgVGhlbWVNb2R1bGVcclxuICAgIFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgLy9hYnAsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIC8vbmd4LWFkbWluXHJcbiAgICBUaGVtZU1vZHVsZSxcclxuICAgIE5iTGF5b3V0TW9kdWxlLFxyXG4gICAgTmJTaWRlYmFyTW9kdWxlLFxyXG4gICAgTmJTZWxlY3RNb2R1bGUsXHJcbiAgICBOYlNlYXJjaE1vZHVsZSxcclxuICAgIE5iQXV0aE1vZHVsZSxcclxuICAgIE5iTWVudU1vZHVsZSxcclxuICAgIE5iSWNvbk1vZHVsZSxcclxuICAgIE5iQWxlcnRNb2R1bGUsXHJcbiAgICBOYklucHV0TW9kdWxlLFxyXG4gICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxyXG4gICAgTmJDYXJkTW9kdWxlLFxyXG4gICAgTmJBY3Rpb25zTW9kdWxlLFxyXG4gICAgTmJTZWN1cml0eU1vZHVsZSxcclxuICAgIE5iQ29udGV4dE1lbnVNb2R1bGVcclxuICAgIFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hBZG1pblNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4QWRtaW5TaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19