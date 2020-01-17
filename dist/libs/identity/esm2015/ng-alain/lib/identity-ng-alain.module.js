/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { IdentityModule } from '@fs/identity';
import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import { Store } from '@ngxs/store';
export class IdentityNgAlainModule {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: UsersComponent, key: 'Identity.UsersComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RolesComponent, key: 'Identity.RolesComponent' }));
    }
}
IdentityNgAlainModule.decorators = [
    { type: NgModule, args: [{
                declarations: [UsersComponent, RolesComponent],
                entryComponents: [UsersComponent, RolesComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementNgAlainModule,
                    IdentityModule
                ]
            },] }
];
/** @nocollapse */
IdentityNgAlainModule.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2lkZW50aXR5L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVlwQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBQzlCLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7OztZQWRKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO2dCQUM3QyxlQUFlLEVBQUUsQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO2dCQUNoRCxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixrQkFBa0I7b0JBQ2xCLGlDQUFpQztvQkFDakMsY0FBYztpQkFDakI7YUFDSjs7OztZQVhRLEtBQUs7Ozs7Ozs7SUFhRSxzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZGVudGl0eU1vZHVsZSB9IGZyb20gJ0Bmcy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUsIEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdBbGFpbkJhc2ljTW9kdWxlIH0gZnJvbSAnQGZzL25nLWFsYWluL2Jhc2ljJztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIH0gZnJvbSAnQGZzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9uZy1hbGFpbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1VzZXJzQ29tcG9uZW50LFJvbGVzQ29tcG9uZW50XSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1VzZXJzQ29tcG9uZW50LFJvbGVzQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb3JlTW9kdWxlLFxyXG4gICAgICAgIE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgICAgICBQZXJtaXNzaW9uTWFuYWdlbWVudE5nQWxhaW5Nb2R1bGUsXHJcbiAgICAgICAgSWRlbnRpdHlNb2R1bGVcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5TmdBbGFpbk1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7IGNvbXBvbmVudDogVXNlcnNDb21wb25lbnQsIGtleTogJ0lkZW50aXR5LlVzZXJzQ29tcG9uZW50JyB9KSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHsgY29tcG9uZW50OiBSb2xlc0NvbXBvbmVudCwga2V5OiAnSWRlbnRpdHkuUm9sZXNDb21wb25lbnQnIH0pKTtcclxuICAgIH1cclxuIH1cclxuIl19