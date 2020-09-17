import { AddReplaceableComponent } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutPassportComponent, PageBarComponent } from '@fs/ng-alain/layout';
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
        new AddReplaceableComponent({
            key: "ThemeCore.PageBarComponent" /* PageBar */,
            component: PageBarComponent,
        }),
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2Jhc2ljL3NyYy9saWIvcHJvdmlkZXJzL3N0eWxlcy5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXlDLE1BQU0sY0FBYyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUloRSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRztJQUMxQztRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNiLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUYsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFZO0lBQzFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YseUVBQXlFO1FBRXpFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsS0FBWTtJQUMvQixLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2IsSUFBSSx1QkFBdUIsQ0FBQztZQUMxQixHQUFHLDREQUF5QztZQUM1QyxTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUM7UUFDRixJQUFJLHVCQUF1QixDQUFDO1lBQzFCLEdBQUcsb0RBQXFDO1lBQ3hDLFNBQVMsRUFBRSx1QkFBdUI7U0FDbkMsQ0FBQztRQUNGLElBQUksdUJBQXVCLENBQUM7WUFDMUIsR0FBRyxnREFBbUM7WUFDdEMsU0FBUyxFQUFFLHlCQUF5QjtTQUNyQyxDQUFDO1FBQ0YsSUFBSSx1QkFBdUIsQ0FBQztZQUMxQixHQUFHLDRDQUE4QjtZQUNqQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUM7S0FDSCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkUmVwbGFjZWFibGVDb21wb25lbnQsIENPTlRFTlRfU1RSQVRFR1ksIERvbUluc2VydGlvblNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IExheW91dFBhc3Nwb3J0Q29tcG9uZW50LCBQYWdlQmFyQ29tcG9uZW50IH0gZnJvbSAnQGZzL25nLWFsYWluL2xheW91dCc7XHJcbmltcG9ydCB7IExheW91dERlZmF1bHRDb21wb25lbnQgfSBmcm9tICdAZnMvbmctYWxhaW4vbGF5b3V0JztcclxuaW1wb3J0IHsgTGF5b3V0RnVsbFNjcmVlbkNvbXBvbmVudCB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBlVGhlbWVCYXNpY0NvbXBvbmVudHMgfSBmcm9tICdAYWJwL25nLnRoZW1lLmJhc2ljJztcclxuaW1wb3J0IHsgZVRoZW1lQ29yZUNvbXBvbmVudHMgfSBmcm9tICdAZnMvdGhlbWUuY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTSUNfVEhFTUVfU1RZTEVTX1BST1ZJREVSUyA9IFtcclxuICB7XHJcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICB1c2VGYWN0b3J5OiBjb25maWd1cmVTdHlsZXMsXHJcbiAgICBkZXBzOiBbU3RvcmVdLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVTdHlsZXMoc3RvcmU6IFN0b3JlKSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIC8vZG9tSW5zZXJ0aW9uLmluc2VydENvbnRlbnQoQ09OVEVOVF9TVFJBVEVHWS5BcHBlbmRTdHlsZVRvSGVhZChzdHlsZXMpKTtcclxuXHJcbiAgICBpbml0TGF5b3V0cyhzdG9yZSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdExheW91dHMoc3RvcmU6IFN0b3JlKSB7XHJcbiAgc3RvcmUuZGlzcGF0Y2goW1xyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuQXBwbGljYXRpb25MYXlvdXQsXHJcbiAgICAgIGNvbXBvbmVudDogTGF5b3V0RGVmYXVsdENvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuQWNjb3VudExheW91dCxcclxuICAgICAgY29tcG9uZW50OiBMYXlvdXRQYXNzcG9ydENvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVCYXNpY0NvbXBvbmVudHMuRW1wdHlMYXlvdXQsXHJcbiAgICAgIGNvbXBvbmVudDogTGF5b3V0RnVsbFNjcmVlbkNvbXBvbmVudCxcclxuICAgIH0pLFxyXG4gICAgbmV3IEFkZFJlcGxhY2VhYmxlQ29tcG9uZW50KHtcclxuICAgICAga2V5OiBlVGhlbWVDb3JlQ29tcG9uZW50cy5QYWdlQmFyLFxyXG4gICAgICBjb21wb25lbnQ6IFBhZ2VCYXJDb21wb25lbnQsXHJcbiAgICB9KSxcclxuICBdKTtcclxufVxyXG4iXX0=