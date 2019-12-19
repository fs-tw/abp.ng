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
var NgxAdminSharedModule = /** @class */ (function () {
    function NgxAdminSharedModule() {
    }
    /**
     * @return {?}
     */
    NgxAdminSharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxAdminSharedModule,
            providers: []
        };
    };
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
    return NgxAdminSharedModule;
}());
export { NgxAdminSharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFkbWluLXNoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYWRtaW4tc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDL1AsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRDtJQUFBO0lBa0RBLENBQUM7Ozs7SUFSUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFDVjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLE1BQU07d0JBQ04sVUFBVTt3QkFDVixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFdBQVc7cUJBRVo7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLE1BQU07d0JBQ04saUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjtxQkFFcEI7b0JBQ0QsU0FBUyxFQUFFLEVBQ1Y7b0JBQ0QsZUFBZSxFQUFFLEVBQ2hCO2lCQUNGOztJQVVELDJCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FUWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5iQXV0aE1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xyXG5pbXBvcnQgeyBOYk1lbnVNb2R1bGUsIE5iSWNvbk1vZHVsZSwgTmJBbGVydE1vZHVsZSwgTmJJbnB1dE1vZHVsZSwgTmJCdXR0b25Nb2R1bGUsIE5iQ2hlY2tib3hNb2R1bGUsIE5iQ2FyZE1vZHVsZSwgTmJBY3Rpb25zTW9kdWxlLCBOYkxheW91dE1vZHVsZSwgTmJTaWRlYmFyTW9kdWxlLCBOYlNlbGVjdE1vZHVsZSwgTmJTZWFyY2hNb2R1bGUsIE5iQ29udGV4dE1lbnVNb2R1bGUsIE5iVXNlck1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHsgVGhlbWVNb2R1bGUgfSBmcm9tICdAZnMvbmd4LWFkbWluJztcclxuaW1wb3J0IHsgTmJTZWN1cml0eU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3NlY3VyaXR5JztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIC8vYWJwLFxyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIFRoZW1lU2hhcmVkTW9kdWxlLFxyXG4gICAgLy9uZ3gtYWRtaW5cclxuICAgIE5iQXV0aE1vZHVsZSxcclxuICAgIE5iTWVudU1vZHVsZSxcclxuICAgIFRoZW1lTW9kdWxlXHJcbiAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIC8vYWJwLFxyXG4gICAgVGhlbWVTaGFyZWRNb2R1bGUsXHJcbiAgICAvL25neC1hZG1pblxyXG4gICAgVGhlbWVNb2R1bGUsXHJcbiAgICBOYkxheW91dE1vZHVsZSxcclxuICAgIE5iU2lkZWJhck1vZHVsZSxcclxuICAgIE5iU2VsZWN0TW9kdWxlLFxyXG4gICAgTmJTZWFyY2hNb2R1bGUsXHJcbiAgICBOYkF1dGhNb2R1bGUsXHJcbiAgICBOYk1lbnVNb2R1bGUsXHJcbiAgICBOYkljb25Nb2R1bGUsXHJcbiAgICBOYkFsZXJ0TW9kdWxlLFxyXG4gICAgTmJJbnB1dE1vZHVsZSxcclxuICAgIE5iQnV0dG9uTW9kdWxlLFxyXG4gICAgTmJDaGVja2JveE1vZHVsZSxcclxuICAgIE5iQ2FyZE1vZHVsZSxcclxuICAgIE5iQWN0aW9uc01vZHVsZSxcclxuICAgIE5iU2VjdXJpdHlNb2R1bGUsXHJcbiAgICBOYkNvbnRleHRNZW51TW9kdWxlXHJcbiAgICBcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4QWRtaW5TaGFyZWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neEFkbWluU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==