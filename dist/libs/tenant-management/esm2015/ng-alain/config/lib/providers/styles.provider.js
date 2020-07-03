import { AddReplaceableComponent } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { TenantsComponent } from '@fs/tenant-management/ng-alain';
export const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
export function configureStyles(store) {
    return () => {
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "TenantManagement.TenantsComponent" /* Tenants */,
            component: TenantsComponent,
        })
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90ZW5hbnQtbWFuYWdlbWVudC9uZy1hbGFpbi9jb25maWcvc3JjL2xpYi9wcm92aWRlcnMvc3R5bGVzLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBeUMsTUFBTSxjQUFjLENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLGVBQWU7UUFDM0IsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2IsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQVk7SUFDMUMsT0FBTyxHQUFHLEVBQUU7UUFDVixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDL0IsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNiLElBQUksdUJBQXVCLENBQUM7WUFDMUIsR0FBRyxtREFBcUM7WUFDeEMsU0FBUyxFQUFFLGdCQUFnQjtTQUM1QixDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LCBDT05URU5UX1NUUkFURUdZLCBEb21JbnNlcnRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBlVGVuYW50TWFuYWdlbWVudENvbXBvbmVudHMgfSBmcm9tICdAYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJ0Bmcy90ZW5hbnQtbWFuYWdlbWVudC9uZy1hbGFpbic7XHJcblxyXG5leHBvcnQgY29uc3QgU1RZTEVTX1BST1ZJREVSUyA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICB1c2VGYWN0b3J5OiBjb25maWd1cmVTdHlsZXMsXHJcbiAgICBkZXBzOiBbU3RvcmVdLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTdHlsZXMoc3RvcmU6IFN0b3JlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGluaXRMYXlvdXRzKHN0b3JlKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TGF5b3V0cyhzdG9yZTogU3RvcmUpIHtcclxuICBzdG9yZS5kaXNwYXRjaChbXHJcbiAgICBuZXcgQWRkUmVwbGFjZWFibGVDb21wb25lbnQoe1xyXG4gICAgICBrZXk6IGVUZW5hbnRNYW5hZ2VtZW50Q29tcG9uZW50cy5UZW5hbnRzLFxyXG4gICAgICBjb21wb25lbnQ6IFRlbmFudHNDb21wb25lbnQsXHJcbiAgICB9KVxyXG4gIF0pO1xyXG59XHJcbiJdfQ==