import { __decorate, __metadata, __param } from "tslib";
import { Component, Injector, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LocalizationService } from '../services/localization.service';
import { RoutesService } from '../services/routes.service';
import { SubscriptionService } from '../services/subscription.service';
import { ReplaceableComponentsState } from '../states/replaceable-components.state';
import { findRoute, getRoutePath } from '../utils/route-utils';
let DynamicLayoutComponent = class DynamicLayoutComponent {
    constructor(injector, localizationService, store, subscription, dynamicLayoutComponent) {
        this.localizationService = localizationService;
        this.store = store;
        this.subscription = subscription;
        // TODO: Consider a shared enum (eThemeSharedComponents) for known layouts
        this.layouts = new Map([
            ['application', 'Theme.ApplicationLayoutComponent'],
            ['account', 'Theme.AccountLayoutComponent'],
            ['empty', 'Theme.EmptyLayoutComponent'],
        ]);
        this.isLayoutVisible = true;
        if (dynamicLayoutComponent)
            return;
        const route = injector.get(ActivatedRoute);
        const router = injector.get(Router);
        const routes = injector.get(RoutesService);
        this.subscription.addOne(router.events, event => {
            if (event instanceof NavigationEnd) {
                let expectedLayout = (route.snapshot.data || {}).layout;
                if (!expectedLayout) {
                    let node = findRoute(routes, getRoutePath(router));
                    node = { parent: node };
                    while (node.parent) {
                        node = node.parent;
                        if (node.layout) {
                            expectedLayout = node.layout;
                            break;
                        }
                    }
                }
                if (!expectedLayout)
                    expectedLayout = "empty" /* empty */;
                const key = this.layouts.get(expectedLayout);
                this.layout = this.getComponent(key).component;
            }
        });
        this.listenToLanguageChange();
    }
    listenToLanguageChange() {
        this.subscription.addOne(this.localizationService.languageChange, () => {
            this.isLayoutVisible = false;
            setTimeout(() => (this.isLayoutVisible = true), 0);
        });
    }
    getComponent(key) {
        return this.store.selectSnapshot(ReplaceableComponentsState.getComponent(key));
    }
};
DynamicLayoutComponent = __decorate([
    Component({
        selector: 'abp-dynamic-layout',
        template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngIf="isLayoutVisible" [ngComponentOutlet]="layout"></ng-container
    ></ng-template>
  `,
        providers: [SubscriptionService]
    }),
    __param(4, Optional()), __param(4, SkipSelf()),
    __metadata("design:paramtypes", [Injector,
        LocalizationService,
        Store,
        SubscriptionService,
        DynamicLayoutComponent])
], DynamicLayoutComponent);
export { DynamicLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFjL0QsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFZakMsWUFDRSxRQUFrQixFQUNWLG1CQUF3QyxFQUN4QyxLQUFZLEVBQ1osWUFBaUMsRUFDakIsc0JBQThDO1FBSDlELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQWIzQywwRUFBMEU7UUFDakUsWUFBTyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3pCLENBQUMsYUFBYSxFQUFFLGtDQUFrQyxDQUFDO1lBQ25ELENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1lBQzNDLENBQUMsT0FBTyxFQUFFLDRCQUE0QixDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBU3JCLElBQUksc0JBQXNCO1lBQUUsT0FBTztRQUNuQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBRXhELElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ25ELElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQXlCLENBQUM7b0JBRS9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBRW5CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDZixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDN0IsTUFBTTt5QkFDUDtxQkFDRjtpQkFDRjtnQkFFRCxJQUFJLENBQUMsY0FBYztvQkFBRSxjQUFjLHNCQUFvQixDQUFDO2dCQUV4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUNoRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtZQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFXO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNGLENBQUE7QUE5RFksc0JBQXNCO0lBWGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFOzs7Ozs7R0FNVDtRQUNELFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ2pDLENBQUM7SUFrQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBSmIsUUFBUTtRQUNXLG1CQUFtQjtRQUNqQyxLQUFLO1FBQ0UsbUJBQW1CO1FBQ08sc0JBQXNCO0dBakI3RCxzQkFBc0IsQ0E4RGxDO1NBOURZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIE9wdGlvbmFsLCBTa2lwU2VsZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGVMYXlvdXRUeXBlIH0gZnJvbSAnLi4vZW51bXMvY29tbW9uJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcm91dGVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc3Vic2NyaXB0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgZmluZFJvdXRlLCBnZXRSb3V0ZVBhdGggfSBmcm9tICcuLi91dGlscy9yb3V0ZS11dGlscyc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vdXRpbHMvdHJlZS11dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1keW5hbWljLWxheW91dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsYXlvdXQgPyBjb21wb25lbnRPdXRsZXQgOiByb3V0ZXJPdXRsZXRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcm91dGVyT3V0bGV0Pjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD48L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRPdXRsZXRcclxuICAgICAgPjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xheW91dFZpc2libGVcIiBbbmdDb21wb25lbnRPdXRsZXRdPVwibGF5b3V0XCI+PC9uZy1jb250YWluZXJcclxuICAgID48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbU3Vic2NyaXB0aW9uU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljTGF5b3V0Q29tcG9uZW50IHtcclxuICBsYXlvdXQ6IFR5cGU8YW55PjtcclxuXHJcbiAgLy8gVE9ETzogQ29uc2lkZXIgYSBzaGFyZWQgZW51bSAoZVRoZW1lU2hhcmVkQ29tcG9uZW50cykgZm9yIGtub3duIGxheW91dHNcclxuICByZWFkb25seSBsYXlvdXRzID0gbmV3IE1hcChbXHJcbiAgICBbJ2FwcGxpY2F0aW9uJywgJ1RoZW1lLkFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50J10sXHJcbiAgICBbJ2FjY291bnQnLCAnVGhlbWUuQWNjb3VudExheW91dENvbXBvbmVudCddLFxyXG4gICAgWydlbXB0eScsICdUaGVtZS5FbXB0eUxheW91dENvbXBvbmVudCddLFxyXG4gIF0pO1xyXG5cclxuICBpc0xheW91dFZpc2libGUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uU2VydmljZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBkeW5hbWljTGF5b3V0Q29tcG9uZW50OiBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICkge1xyXG4gICAgaWYgKGR5bmFtaWNMYXlvdXRDb21wb25lbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHJvdXRlID0gaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IGluamVjdG9yLmdldChSb3V0ZXIpO1xyXG4gICAgY29uc3Qgcm91dGVzID0gaW5qZWN0b3IuZ2V0KFJvdXRlc1NlcnZpY2UpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZE9uZShyb3V0ZXIuZXZlbnRzLCBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRMYXlvdXQgPSAocm91dGUuc25hcHNob3QuZGF0YSB8fCB7fSkubGF5b3V0O1xyXG5cclxuICAgICAgICBpZiAoIWV4cGVjdGVkTGF5b3V0KSB7XHJcbiAgICAgICAgICBsZXQgbm9kZSA9IGZpbmRSb3V0ZShyb3V0ZXMsIGdldFJvdXRlUGF0aChyb3V0ZXIpKTtcclxuICAgICAgICAgIG5vZGUgPSB7IHBhcmVudDogbm9kZSB9IGFzIFRyZWVOb2RlPEFCUC5Sb3V0ZT47XHJcblxyXG4gICAgICAgICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLmxheW91dCkge1xyXG4gICAgICAgICAgICAgIGV4cGVjdGVkTGF5b3V0ID0gbm9kZS5sYXlvdXQ7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZXhwZWN0ZWRMYXlvdXQpIGV4cGVjdGVkTGF5b3V0ID0gZUxheW91dFR5cGUuZW1wdHk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMubGF5b3V0cy5nZXQoZXhwZWN0ZWRMYXlvdXQpO1xyXG4gICAgICAgIHRoaXMubGF5b3V0ID0gdGhpcy5nZXRDb21wb25lbnQoa2V5KS5jb21wb25lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubGlzdGVuVG9MYW5ndWFnZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub0xhbmd1YWdlQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5sYW5ndWFnZUNoYW5nZSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTGF5b3V0VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmlzTGF5b3V0VmlzaWJsZSA9IHRydWUpLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb21wb25lbnQoa2V5OiBzdHJpbmcpOiBSZXBsYWNlYWJsZUNvbXBvbmVudHMuUmVwbGFjZWFibGVDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUuZ2V0Q29tcG9uZW50KGtleSkpO1xyXG4gIH1cclxufVxyXG4iXX0=