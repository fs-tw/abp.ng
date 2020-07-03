import { AddReplaceableComponent } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutPassportComponent } from '@fs/ng-alain/layout';
import { LayoutDefaultComponent } from '@fs/ng-alain/layout';
import { LayoutFullScreenComponent } from '@fs/ng-alain/layout';
export const BASIC_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
export function configureStyles(store) {
    return () => {
        //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
            component: LayoutDefaultComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.AccountLayoutComponent" /* AccountLayout */,
            component: LayoutPassportComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
            component: LayoutFullScreenComponent,
        }),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2Jhc2ljL3NyYy9saWIvcHJvdmlkZXJzL3N0eWxlcy5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXlDLE1BQU0sY0FBYyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdoRSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQztRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNiLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFZO0lBQzFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YseUVBQXlFO1FBRXpFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBWTtJQUMvQixLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2IsSUFBSSx1QkFBdUIsQ0FBQztZQUMxQixHQUFHLDREQUF5QztZQUM1QyxTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUM7UUFDRixJQUFJLHVCQUF1QixDQUFDO1lBQzFCLEdBQUcsb0RBQXFDO1lBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7U0FDbkMsQ0FBQztRQUNGLElBQUksdUJBQXVCLENBQUM7WUFDMUIsR0FBRyxnREFBbUM7WUFDdEMsU0FBUyxFQUFFLHlCQUF5QjtTQUNyQyxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50LCBDT05URU5UX1NUUkFURUdZLCBEb21JbnNlcnRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnQGZzL25nLWFsYWluL2xheW91dCc7XHJcbmltcG9ydCB7IExheW91dEZ1bGxTY3JlZW5Db21wb25lbnQgfSBmcm9tICdAZnMvbmctYWxhaW4vbGF5b3V0JztcclxuaW1wb3J0IHsgZVRoZW1lQmFzaWNDb21wb25lbnRzIH0gZnJvbSAnQGFicC9uZy50aGVtZS5iYXNpYyc7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfVEhFTUVfU1RZTEVTX1BST1ZJREVSUyA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICB1c2VGYWN0b3J5OiBjb25maWd1cmVTdHlsZXMsXHJcbiAgICBkZXBzOiBbU3RvcmVdLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTdHlsZXMoc3RvcmU6IFN0b3JlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vZG9tSW5zZXJ0aW9uLmluc2VydENvbnRlbnQoQ09OVEVOVF9TVFJBVEVHWS5BcHBlbmRTdHlsZVRvSGVhZChzdHlsZXMpKTtcclxuXHJcbiAgICBpbml0TGF5b3V0cyhzdG9yZSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdExheW91dHMoc3RvcmU6IFN0b3JlKSB7XHJcbiAgc3RvcmUuZGlzcGF0Y2goW1xyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuQXBwbGljYXRpb25MYXlvdXQsXHJcbiAgICAgIGNvbXBvbmVudDogTGF5b3V0RGVmYXVsdENvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuQWNjb3VudExheW91dCxcclxuICAgICAgY29tcG9uZW50OiBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuRW1wdHlMYXlvdXQsXHJcbiAgICAgIGNvbXBvbmVudDogTGF5b3V0RnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG59XHJcbiJdfQ==