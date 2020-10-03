import { Component, Injector, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LocalizationService } from '../services/localization.service';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
import { RoutesService } from '../services/routes.service';
import { SubscriptionService } from '../services/subscription.service';
import { findRoute, getRoutePath } from '../utils/route-utils';
export class DynamicLayoutComponent {
    constructor(injector, localizationService, replaceableComponents, subscription, dynamicLayoutComponent) {
        this.localizationService = localizationService;
        this.replaceableComponents = replaceableComponents;
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
            var _a;
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
                this.layout = (_a = this.getComponent(key)) === null || _a === void 0 ? void 0 : _a.component;
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
        return this.replaceableComponents.get(key);
    }
}
DynamicLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-dynamic-layout',
                template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet
      ><ng-container *ngIf="isLayoutVisible" [ngComponentOutlet]="layout"></ng-container
    ></ng-template>
  `,
                providers: [SubscriptionService]
            },] }
];
DynamicLayoutComponent.ctorParameters = () => [
    { type: Injector },
    { type: LocalizationService },
    { type: ReplaceableComponentsService },
    { type: SubscriptionService },
    { type: DynamicLayoutComponent, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFjL0QsTUFBTSxPQUFPLHNCQUFzQjtJQVlqQyxZQUNFLFFBQWtCLEVBQ1YsbUJBQXdDLEVBQ3hDLHFCQUFtRCxFQUNuRCxZQUFpQyxFQUNqQixzQkFBOEM7UUFIOUQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQThCO1FBQ25ELGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQWIzQywwRUFBMEU7UUFDakUsWUFBTyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3pCLENBQUMsYUFBYSxFQUFFLGtDQUFrQyxDQUFDO1lBQ25ELENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1lBQzNDLENBQUMsT0FBTyxFQUFFLDRCQUE0QixDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBU3JCLElBQUksc0JBQXNCO1lBQUUsT0FBTztRQUNuQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFOztZQUM5QyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksY0FBYyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUV4RCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUF5QixDQUFDO29CQUUvQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUVuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7NEJBQzdCLE1BQU07eUJBQ1A7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsSUFBSSxDQUFDLGNBQWM7b0JBQUUsY0FBYyxzQkFBb0IsQ0FBQztnQkFFeEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLFNBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMENBQUUsU0FBUyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU8sc0JBQXNCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7R0FNVDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNqQzs7O1lBdEJtQixRQUFRO1lBS25CLG1CQUFtQjtZQUNuQiw0QkFBNEI7WUFFNUIsbUJBQW1CO1lBZ0N3QixzQkFBc0IsdUJBQXJFLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT3B0aW9uYWwsIFNraXBTZWxmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBlTGF5b3V0VHlwZSB9IGZyb20gJy4uL2VudW1zL2NvbW1vbic7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4uL21vZGVscy9yZXBsYWNlYWJsZS1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdWJzY3JpcHRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IGZpbmRSb3V0ZSwgZ2V0Um91dGVQYXRoIH0gZnJvbSAnLi4vdXRpbHMvcm91dGUtdXRpbHMnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL3V0aWxzL3RyZWUtdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtZHluYW1pYy1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGF5b3V0ID8gY29tcG9uZW50T3V0bGV0IDogcm91dGVyT3V0bGV0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGUgI3JvdXRlck91dGxldD48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50T3V0bGV0XHJcbiAgICAgID48bmctY29udGFpbmVyICpuZ0lmPVwiaXNMYXlvdXRWaXNpYmxlXCIgW25nQ29tcG9uZW50T3V0bGV0XT1cImxheW91dFwiPjwvbmctY29udGFpbmVyXHJcbiAgICA+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1N1YnNjcmlwdGlvblNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0xheW91dENvbXBvbmVudCB7XHJcbiAgbGF5b3V0OiBUeXBlPGFueT47XHJcblxyXG4gIC8vIFRPRE86IENvbnNpZGVyIGEgc2hhcmVkIGVudW0gKGVUaGVtZVNoYXJlZENvbXBvbmVudHMpIGZvciBrbm93biBsYXlvdXRzXHJcbiAgcmVhZG9ubHkgbGF5b3V0cyA9IG5ldyBNYXAoW1xyXG4gICAgWydhcHBsaWNhdGlvbicsICdUaGVtZS5BcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCddLFxyXG4gICAgWydhY2NvdW50JywgJ1RoZW1lLkFjY291bnRMYXlvdXRDb21wb25lbnQnXSxcclxuICAgIFsnZW1wdHknLCAnVGhlbWUuRW1wdHlMYXlvdXRDb21wb25lbnQnXSxcclxuICBdKTtcclxuXHJcbiAgaXNMYXlvdXRWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblNlcnZpY2U6IExvY2FsaXphdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlcGxhY2VhYmxlQ29tcG9uZW50czogUmVwbGFjZWFibGVDb21wb25lbnRzU2VydmljZSxcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25TZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgZHluYW1pY0xheW91dENvbXBvbmVudDogRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICApIHtcclxuICAgIGlmIChkeW5hbWljTGF5b3V0Q29tcG9uZW50KSByZXR1cm47XHJcbiAgICBjb25zdCByb3V0ZSA9IGluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSBpbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgIGNvbnN0IHJvdXRlcyA9IGluamVjdG9yLmdldChSb3V0ZXNTZXJ2aWNlKTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUocm91dGVyLmV2ZW50cywgZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgbGV0IGV4cGVjdGVkTGF5b3V0ID0gKHJvdXRlLnNuYXBzaG90LmRhdGEgfHwge30pLmxheW91dDtcclxuXHJcbiAgICAgICAgaWYgKCFleHBlY3RlZExheW91dCkge1xyXG4gICAgICAgICAgbGV0IG5vZGUgPSBmaW5kUm91dGUocm91dGVzLCBnZXRSb3V0ZVBhdGgocm91dGVyKSk7XHJcbiAgICAgICAgICBub2RlID0geyBwYXJlbnQ6IG5vZGUgfSBhcyBUcmVlTm9kZTxBQlAuUm91dGU+O1xyXG5cclxuICAgICAgICAgIHdoaWxlIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5sYXlvdXQpIHtcclxuICAgICAgICAgICAgICBleHBlY3RlZExheW91dCA9IG5vZGUubGF5b3V0O1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWV4cGVjdGVkTGF5b3V0KSBleHBlY3RlZExheW91dCA9IGVMYXlvdXRUeXBlLmVtcHR5O1xyXG5cclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmxheW91dHMuZ2V0KGV4cGVjdGVkTGF5b3V0KTtcclxuICAgICAgICB0aGlzLmxheW91dCA9IHRoaXMuZ2V0Q29tcG9uZW50KGtleSk/LmNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5saXN0ZW5Ub0xhbmd1YWdlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvTGFuZ3VhZ2VDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGRPbmUodGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmxhbmd1YWdlQ2hhbmdlLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNMYXlvdXRWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuaXNMYXlvdXRWaXNpYmxlID0gdHJ1ZSksIDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbXBvbmVudChrZXk6IHN0cmluZyk6IFJlcGxhY2VhYmxlQ29tcG9uZW50cy5SZXBsYWNlYWJsZUNvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlYWJsZUNvbXBvbmVudHMuZ2V0KGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==