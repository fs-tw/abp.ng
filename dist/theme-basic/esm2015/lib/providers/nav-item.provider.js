import { NavItemsService } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { CurrentUserComponent } from '../components/nav-items/current-user.component';
import { LanguagesComponent } from '../components/nav-items/languages.component';
export const BASIC_THEME_NAV_ITEM_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureNavItems,
        deps: [NavItemsService],
        multi: true,
    },
];
export function configureNavItems(navItems) {
    return () => {
        navItems.addItems([
            {
                id: "Theme.LanguagesComponent" /* Languages */,
                order: 100,
                component: LanguagesComponent,
            },
            {
                id: "Theme.CurrentUserComponent" /* CurrentUser */,
                order: 100,
                component: CurrentUserComponent,
            },
        ]);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1iYXNpYy9zcmMvbGliL3Byb3ZpZGVycy9uYXYtaXRlbS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUdqRixNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRztJQUM1QztRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3ZCLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFFBQXlCO0lBQ3pELE9BQU8sR0FBRyxFQUFFO1FBQ1YsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNoQjtnQkFDRSxFQUFFLDRDQUFpQztnQkFDbkMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsU0FBUyxFQUFFLGtCQUFrQjthQUM5QjtZQUNEO2dCQUNFLEVBQUUsZ0RBQW1DO2dCQUNyQyxLQUFLLEVBQUUsR0FBRztnQkFDVixTQUFTLEVBQUUsb0JBQW9CO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdkl0ZW1zU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtaXRlbXMvY3VycmVudC11c2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmd1YWdlc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2LWl0ZW1zL2xhbmd1YWdlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBlVGhlbWVCYXNpY0NvbXBvbmVudHMgfSBmcm9tICcuLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19USEVNRV9OQVZfSVRFTV9QUk9WSURFUlMgPSBbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgdXNlRmFjdG9yeTogY29uZmlndXJlTmF2SXRlbXMsXHJcbiAgICBkZXBzOiBbTmF2SXRlbXNTZXJ2aWNlXSxcclxuICAgIG11bHRpOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlTmF2SXRlbXMobmF2SXRlbXM6IE5hdkl0ZW1zU2VydmljZSkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBuYXZJdGVtcy5hZGRJdGVtcyhbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogZVRoZW1lQmFzaWNDb21wb25lbnRzLkxhbmd1YWdlcyxcclxuICAgICAgICBvcmRlcjogMTAwLFxyXG4gICAgICAgIGNvbXBvbmVudDogTGFuZ3VhZ2VzQ29tcG9uZW50LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5DdXJyZW50VXNlcixcclxuICAgICAgICBvcmRlcjogMTAwLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ3VycmVudFVzZXJDb21wb25lbnQsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICB9O1xyXG59XHJcbiJdfQ==