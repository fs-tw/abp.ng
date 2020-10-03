import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SettingManagementComponent } from './components/setting-management.component';
import { SettingManagementRoutingModule } from './setting-management-routing.module';
import { SettingManagementState } from './states/setting-management.state';
export class SettingManagementModule {
    static forChild() {
        return {
            ngModule: SettingManagementModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(SettingManagementModule.forChild());
    }
}
SettingManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SettingManagementComponent],
                exports: [SettingManagementComponent],
                imports: [
                    SettingManagementRoutingModule,
                    CoreModule,
                    ThemeSharedModule,
                    NgxsModule.forFeature([SettingManagementState]),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1tYW5hZ2VtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL3NldHRpbmctbWFuYWdlbWVudC9zcmMvbGliL3NldHRpbmctbWFuYWdlbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQXVCLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVkzRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLE1BQU0sQ0FBQyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxJQUFJLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBcEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCw4QkFBOEI7b0JBQzlCLFVBQVU7b0JBQ1YsaUJBQWlCO29CQUNqQixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDaEQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmVNb2R1bGUsIExhenlNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4c01vZHVsZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNldHRpbmdNYW5hZ2VtZW50Um91dGluZ01vZHVsZSB9IGZyb20gJy4vc2V0dGluZy1tYW5hZ2VtZW50LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgU2V0dGluZ01hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3NldHRpbmctbWFuYWdlbWVudC5zdGF0ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NldHRpbmdNYW5hZ2VtZW50Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2V0dGluZ01hbmFnZW1lbnRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIFNldHRpbmdNYW5hZ2VtZW50Um91dGluZ01vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBUaGVtZVNoYXJlZE1vZHVsZSxcclxuICAgIE5neHNNb2R1bGUuZm9yRmVhdHVyZShbU2V0dGluZ01hbmFnZW1lbnRTdGF0ZV0pLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nTWFuYWdlbWVudE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2V0dGluZ01hbmFnZW1lbnRNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZXR0aW5nTWFuYWdlbWVudE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yTGF6eSgpOiBOZ01vZHVsZUZhY3Rvcnk8U2V0dGluZ01hbmFnZW1lbnRNb2R1bGU+IHtcclxuICAgIHJldHVybiBuZXcgTGF6eU1vZHVsZUZhY3RvcnkoU2V0dGluZ01hbmFnZW1lbnRNb2R1bGUuZm9yQ2hpbGQoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==