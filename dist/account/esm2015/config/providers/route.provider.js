import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const ACCOUNT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
export function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/account',
                name: "AbpAccount::Menu:Account" /* Account */,
                invisible: true,
                layout: "application" /* application */,
                order: 1,
            },
            {
                path: '/account/login',
                name: "AbpAccount::Login" /* Login */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 1,
            },
            {
                path: '/account/register',
                name: "AbpAccount::Register" /* Register */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 2,
            },
            {
                path: '/account/manage-profile',
                name: "AbpAccount::ManageYourProfile" /* ManageProfile */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 3,
            },
        ]);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hY2NvdW50L2NvbmZpZy9zcmMvcHJvdmlkZXJzL3JvdXRlLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRztJQUNyQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0NBQzlGLENBQUM7QUFFRixNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQXFCO0lBQ25ELE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNUO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLDBDQUE0QjtnQkFDaEMsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsTUFBTSxpQ0FBeUI7Z0JBQy9CLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLGlDQUEwQjtnQkFDOUIsVUFBVSwwQ0FBNEI7Z0JBQ3RDLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QixJQUFJLHVDQUE2QjtnQkFDakMsVUFBVSwwQ0FBNEI7Z0JBQ3RDLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixJQUFJLHFEQUFrQztnQkFDdEMsVUFBVSwwQ0FBNEI7Z0JBQ3RDLEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZUxheW91dFR5cGUsIFJvdXRlc1NlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZUFjY291bnRSb3V0ZU5hbWVzIH0gZnJvbSAnLi4vZW51bXMvcm91dGUtbmFtZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDQ09VTlRfUk9VVEVfUFJPVklERVJTID0gW1xyXG4gIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBjb25maWd1cmVSb3V0ZXMsIGRlcHM6IFtSb3V0ZXNTZXJ2aWNlXSwgbXVsdGk6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVSb3V0ZXMocm91dGVzOiBSb3V0ZXNTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHJvdXRlcy5hZGQoW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hY2NvdW50JyxcclxuICAgICAgICBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuQWNjb3VudCxcclxuICAgICAgICBpbnZpc2libGU6IHRydWUsXHJcbiAgICAgICAgbGF5b3V0OiBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbixcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcvYWNjb3VudC9sb2dpbicsXHJcbiAgICAgICAgbmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLkxvZ2luLFxyXG4gICAgICAgIHBhcmVudE5hbWU6IGVBY2NvdW50Um91dGVOYW1lcy5BY2NvdW50LFxyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJy9hY2NvdW50L3JlZ2lzdGVyJyxcclxuICAgICAgICBuYW1lOiBlQWNjb3VudFJvdXRlTmFtZXMuUmVnaXN0ZXIsXHJcbiAgICAgICAgcGFyZW50TmFtZTogZUFjY291bnRSb3V0ZU5hbWVzLkFjY291bnQsXHJcbiAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnL2FjY291bnQvbWFuYWdlLXByb2ZpbGUnLFxyXG4gICAgICAgIG5hbWU6IGVBY2NvdW50Um91dGVOYW1lcy5NYW5hZ2VQcm9maWxlLFxyXG4gICAgICAgIHBhcmVudE5hbWU6IGVBY2NvdW50Um91dGVOYW1lcy5BY2NvdW50LFxyXG4gICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxufVxyXG4iXX0=