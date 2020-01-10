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
var IdentityNgAlainModule = /** @class */ (function () {
    function IdentityNgAlainModule(store) {
        this.store = store;
        store.dispatch(new AddReplaceableComponent({ component: UsersComponent, key: 'Identity.UsersComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RolesComponent, key: 'Identity.RolesComponent' }));
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
    IdentityNgAlainModule.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return IdentityNgAlainModule;
}());
export { IdentityNgAlainModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityNgAlainModule.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2lkZW50aXR5L25nLWFsYWluLyIsInNvdXJjZXMiOlsibGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQztJQVdJLCtCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRyxDQUFDOztnQkFkSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFDLGNBQWMsQ0FBQztvQkFDN0MsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFDLGNBQWMsQ0FBQztvQkFDaEQsT0FBTyxFQUFFO3dCQUNMLFVBQVU7d0JBQ1Ysa0JBQWtCO3dCQUNsQixpQ0FBaUM7d0JBQ2pDLGNBQWM7cUJBQ2pCO2lCQUNKOzs7O2dCQVhRLEtBQUs7O0lBaUJiLDRCQUFDO0NBQUEsQUFmRixJQWVFO1NBTFcscUJBQXFCOzs7Ozs7SUFDbEIsc0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpdHlNb2R1bGUgfSBmcm9tICdAZnMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlLCBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSB9IGZyb20gJ0Bmcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4nO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtVc2Vyc0NvbXBvbmVudCxSb2xlc0NvbXBvbmVudF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtVc2Vyc0NvbXBvbmVudCxSb2xlc0NvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICBOZ0FsYWluQmFzaWNNb2R1bGUsXHJcbiAgICAgICAgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlLFxyXG4gICAgICAgIElkZW50aXR5TW9kdWxlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU5nQWxhaW5Nb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoeyBjb21wb25lbnQ6IFVzZXJzQ29tcG9uZW50LCBrZXk6ICdJZGVudGl0eS5Vc2Vyc0NvbXBvbmVudCcgfSkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKG5ldyBBZGRSZXBsYWNlYWJsZUNvbXBvbmVudCh7IGNvbXBvbmVudDogUm9sZXNDb21wb25lbnQsIGtleTogJ0lkZW50aXR5LlJvbGVzQ29tcG9uZW50JyB9KSk7XHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==