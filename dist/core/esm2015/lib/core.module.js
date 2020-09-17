import { __decorate } from "tslib";
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule, NGXS_STORAGE_PLUGIN_OPTIONS, } from '@ngxs/storage-plugin';
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AbstractNgModelComponent } from './abstracts/ng-model.component';
import { DynamicLayoutComponent } from './components/dynamic-layout.component';
import { ReplaceableRouteContainerComponent } from './components/replaceable-route-container.component';
import { RouterOutletComponent } from './components/router-outlet.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { InputEventDebounceDirective } from './directives/debounce.directive';
import { EllipsisDirective } from './directives/ellipsis.directive';
import { ForDirective } from './directives/for.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { InitDirective } from './directives/init.directive';
import { PermissionDirective } from './directives/permission.directive';
import { ReplaceableTemplateDirective } from './directives/replaceable-template.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { VisibilityDirective } from './directives/visibility.directive';
import { OAuthConfigurationHandler } from './handlers/oauth-configuration.handler';
import { RoutesHandler } from './handlers/routes.handler';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LocalizationModule } from './localization.module';
import { LocalizationPipe, MockLocalizationPipe } from './pipes/localization.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ConfigPlugin, NGXS_CONFIG_PLUGIN_OPTIONS } from './plugins/config.plugin';
import { LocaleProvider } from './providers/locale.provider';
import { LocalizationService } from './services/localization.service';
import { ConfigState } from './states/config.state';
import { ProfileState } from './states/profile.state';
import { ReplaceableComponentsState } from './states/replaceable-components.state';
import { SessionState } from './states/session.state';
import { coreOptionsFactory, CORE_OPTIONS } from './tokens/options.token';
import { noop } from './utils/common-utils';
import './utils/date-extensions';
import { getInitialData, localeInitializer } from './utils/initial-utils';
import { oAuthStorage } from './strategies/auth-flow.strategy';
export function storageFactory() {
    return oAuthStorage;
}
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
let BaseCoreModule = class BaseCoreModule {
};
BaseCoreModule = __decorate([
    NgModule({
        exports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            AbstractNgModelComponent,
            AutofocusDirective,
            DynamicLayoutComponent,
            EllipsisDirective,
            ForDirective,
            FormSubmitDirective,
            InitDirective,
            InputEventDebounceDirective,
            PermissionDirective,
            ReplaceableRouteContainerComponent,
            ReplaceableTemplateDirective,
            RouterOutletComponent,
            SortPipe,
            StopPropagationDirective,
            VisibilityDirective,
        ],
        imports: [
            OAuthModule,
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
        ],
        declarations: [
            AbstractNgModelComponent,
            AutofocusDirective,
            DynamicLayoutComponent,
            EllipsisDirective,
            ForDirective,
            FormSubmitDirective,
            InitDirective,
            InputEventDebounceDirective,
            PermissionDirective,
            ReplaceableRouteContainerComponent,
            ReplaceableTemplateDirective,
            RouterOutletComponent,
            SortPipe,
            StopPropagationDirective,
            VisibilityDirective,
        ],
        entryComponents: [
            RouterOutletComponent,
            DynamicLayoutComponent,
            ReplaceableRouteContainerComponent,
        ],
    })
], BaseCoreModule);
export { BaseCoreModule };
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
let RootCoreModule = class RootCoreModule {
};
RootCoreModule = __decorate([
    NgModule({
        exports: [BaseCoreModule, LocalizationModule],
        imports: [
            BaseCoreModule,
            LocalizationModule,
            NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
            NgxsRouterPluginModule.forRoot(),
            NgxsStoragePluginModule.forRoot(),
            OAuthModule.forRoot(),
        ],
    })
], RootCoreModule);
export { RootCoreModule };
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
let TestCoreModule = class TestCoreModule {
};
TestCoreModule = __decorate([
    NgModule({
        exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
        imports: [RouterModule.forRoot([]), BaseCoreModule],
        declarations: [MockLocalizationPipe],
    })
], TestCoreModule);
export { TestCoreModule };
/**
 * CoreModule is the module that is publicly available
 */
let CoreModule = class CoreModule {
    static forTest({ baseHref = '/' } = {}) {
        return {
            ngModule: TestCoreModule,
            providers: [
                { provide: APP_BASE_HREF, useValue: baseHref },
                {
                    provide: LocalizationPipe,
                    useClass: MockLocalizationPipe,
                },
            ],
        };
    }
    static forRoot(options = {}) {
        var _a;
        return {
            ngModule: RootCoreModule,
            providers: [
                LocaleProvider,
                {
                    provide: NGXS_PLUGINS,
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
                    useValue: { environment: options.environment },
                },
                {
                    provide: 'CORE_OPTIONS',
                    useValue: options,
                },
                {
                    provide: CORE_OPTIONS,
                    useFactory: coreOptionsFactory,
                    deps: ['CORE_OPTIONS'],
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [OAuthConfigurationHandler],
                    useFactory: noop,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: getInitialData,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: localeInitializer,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [LocalizationService],
                    useFactory: noop,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [RoutesHandler],
                    useFactory: noop,
                },
                { provide: OAuthStorage, useFactory: storageFactory },
                {
                    provide: NGXS_STORAGE_PLUGIN_OPTIONS,
                    useValue: Object.assign(Object.assign({ storage: 0 /* LocalStorage */, serialize: JSON.stringify, deserialize: JSON.parse, beforeSerialize: ngxsStoragePluginSerialize, afterDeserialize: ngxsStoragePluginSerialize }, options.ngxsStoragePluginOptions), { key: [...(((_a = options.ngxsStoragePluginOptions) === null || _a === void 0 ? void 0 : _a.key) || []), 'SessionState'] }),
                },
            ],
        };
    }
};
CoreModule = __decorate([
    NgModule({
        exports: [BaseCoreModule, LocalizationModule],
        imports: [BaseCoreModule, LocalizationModule],
        providers: [LocalizationPipe],
    })
], CoreModule);
export { CoreModule };
export function ngxsStoragePluginSerialize(data) {
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsMkJBQTJCLEdBRTVCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsTUFBTSxVQUFVLGNBQWM7SUFDNUIsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBd0RILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUF2RDFCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixZQUFZO1lBRVosd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLDJCQUEyQjtZQUMzQixtQkFBbUI7WUFDbkIsa0NBQWtDO1lBQ2xDLDRCQUE0QjtZQUM1QixxQkFBcUI7WUFDckIsUUFBUTtZQUNSLHdCQUF3QjtZQUN4QixtQkFBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxXQUFXO1lBQ1gsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFlBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGFBQWE7WUFDYiwyQkFBMkI7WUFDM0IsbUJBQW1CO1lBQ25CLGtDQUFrQztZQUNsQyw0QkFBNEI7WUFDNUIscUJBQXFCO1lBQ3JCLFFBQVE7WUFDUix3QkFBd0I7WUFDeEIsbUJBQW1CO1NBQ3BCO1FBQ0QsZUFBZSxFQUFFO1lBQ2YscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixrQ0FBa0M7U0FDbkM7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWM7QUFFM0I7OztHQUdHO0FBWUgsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQVgxQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDN0MsT0FBTyxFQUFFO1lBQ1AsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM1RixzQkFBc0IsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsdUJBQXVCLENBQUMsT0FBTyxFQUFFO1lBQ2pDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7U0FDdEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWM7QUFFM0I7OztHQUdHO0FBTUgsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQUwxQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixDQUFDO1FBQzdELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDO1FBQ25ELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3JDLENBQUM7R0FDVyxjQUFjLENBQUc7U0FBakIsY0FBYztBQUUzQjs7R0FFRztBQU1ILElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsR0FBRyxHQUFHLEtBQUssRUFBYztRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO2dCQUM5QztvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBYzs7UUFDckMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLDBCQUEwQjtvQkFDbkMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7aUJBQy9DO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFVBQVUsRUFBRSxrQkFBa0I7b0JBQzlCLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDdkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDakMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ2hCLFVBQVUsRUFBRSxjQUFjO2lCQUMzQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNoQixVQUFVLEVBQUUsaUJBQWlCO2lCQUM5QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQzNCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUNyQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUU7Z0JBQ3JEO29CQUNFLE9BQU8sRUFBRSwyQkFBMkI7b0JBQ3BDLFFBQVEsZ0NBQ04sT0FBTyx3QkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQ3ZCLGVBQWUsRUFBRSwwQkFBMEIsRUFDM0MsZ0JBQWdCLEVBQUUsMEJBQTBCLElBQ3pDLE9BQU8sQ0FBQyx3QkFBd0IsS0FDbkMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQUEsT0FBTyxDQUFDLHdCQUF3QiwwQ0FBRSxHQUFHLEtBQUksRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLEdBQ3hFO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUF4RlksVUFBVTtJQUx0QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDN0MsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7R0FDVyxVQUFVLENBd0Z0QjtTQXhGWSxVQUFVO0FBMEZ2QixNQUFNLFVBQVUsMEJBQTBCLENBQUMsSUFBSTtJQUM3QyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfQkFTRV9IUkVGLCBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5neHNSb3V0ZXJQbHVnaW5Nb2R1bGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHtcclxuICBOZ3hzU3RvcmFnZVBsdWdpbk1vZHVsZSxcclxuICBOR1hTX1NUT1JBR0VfUExVR0lOX09QVElPTlMsXHJcbiAgU3RvcmFnZU9wdGlvbixcclxufSBmcm9tICdAbmd4cy9zdG9yYWdlLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUsIE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhNb2R1bGUsIE9BdXRoU3RvcmFnZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVwbGFjZWFibGUtcm91dGUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXItb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9mb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlYm91bmNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVsbGlwc2lzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2VsbGlwc2lzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybVN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXN1Ym1pdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbml0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wZXJtaXNzaW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVwbGFjZWFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N0b3AtcHJvcGFnYXRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVmlzaWJpbGl0eURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE9BdXRoQ29uZmlndXJhdGlvbkhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL29hdXRoLWNvbmZpZ3VyYXRpb24uaGFuZGxlcic7XHJcbmltcG9ydCB7IFJvdXRlc0hhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL3JvdXRlcy5oYW5kbGVyJztcclxuaW1wb3J0IHsgQXBpSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9hcGkuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tICcuL2xvY2FsaXphdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25QaXBlLCBNb2NrTG9jYWxpemF0aW9uUGlwZSB9IGZyb20gJy4vcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vcGlwZXMvc29ydC5waXBlJztcclxuaW1wb3J0IHsgQ29uZmlnUGx1Z2luLCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyB9IGZyb20gJy4vcGx1Z2lucy9jb25maWcucGx1Z2luJztcclxuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2NhbGUucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgUHJvZmlsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZSc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Nlc3Npb24uc3RhdGUnO1xyXG5pbXBvcnQgeyBjb3JlT3B0aW9uc0ZhY3RvcnksIENPUkVfT1BUSU9OUyB9IGZyb20gJy4vdG9rZW5zL29wdGlvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscy9jb21tb24tdXRpbHMnO1xyXG5pbXBvcnQgJy4vdXRpbHMvZGF0ZS1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZ2V0SW5pdGlhbERhdGEsIGxvY2FsZUluaXRpYWxpemVyIH0gZnJvbSAnLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuaW1wb3J0IHsgb0F1dGhTdG9yYWdlIH0gZnJvbSAnLi9zdHJhdGVnaWVzL2F1dGgtZmxvdy5zdHJhdGVneSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUZhY3RvcnkoKTogT0F1dGhTdG9yYWdlIHtcclxuICByZXR1cm4gb0F1dGhTdG9yYWdlO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZUNvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IGhvbGRzXHJcbiAqIGFsbCBpbXBvcnRzLCBkZWNsYXJhdGlvbnMsIGV4cG9ydHMsIGFuZCBlbnRyeUNvbXBvbmVudHNcclxuICogYnV0IG5vdCB0aGUgcHJvdmlkZXJzLlxyXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIGltcG9ydGVkIGFuZCBleHBvcnRlZCBieSBhbGwgb3RoZXJzLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG5cclxuICAgIEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBJbml0RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgUGVybWlzc2lvbkRpcmVjdGl2ZSxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgT0F1dGhNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgSW5pdERpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogUm9vdENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IHdpbGwgYmUgdXNlZCBhdCByb290IGxldmVsXHJcbiAqIGFuZCBpdCBpbnRyb2R1Y2VzIGltcG9ydHMgdXNlZnVsIGF0IHJvb3QgbGV2ZWwgKGUuZy4gTkdYUylcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJhc2VDb3JlTW9kdWxlLFxyXG4gICAgTG9jYWxpemF0aW9uTW9kdWxlLFxyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSwgUHJvZmlsZVN0YXRlLCBTZXNzaW9uU3RhdGUsIENvbmZpZ1N0YXRlXSksXHJcbiAgICBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE9BdXRoTW9kdWxlLmZvclJvb3QoKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvcmVNb2R1bGUge31cclxuXHJcbi8qKlxyXG4gKiBUZXN0Q29yZU1vZHVsZSBpcyB0aGUgbW9kdWxlIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRlc3RzXHJcbiAqIGFuZCBpdCBwcm92aWRlcyBtb2NrIGFsdGVybmF0aXZlc1xyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlLCBCYXNlQ29yZU1vZHVsZSwgTW9ja0xvY2FsaXphdGlvblBpcGVdLFxyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSksIEJhc2VDb3JlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNb2NrTG9jYWxpemF0aW9uUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q29yZU1vZHVsZSB7fVxyXG5cclxuLyoqXHJcbiAqIENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IGlzIHB1YmxpY2x5IGF2YWlsYWJsZVxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbQmFzZUNvcmVNb2R1bGUsIExvY2FsaXphdGlvbk1vZHVsZV0sXHJcbiAgaW1wb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW0xvY2FsaXphdGlvblBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclRlc3QoeyBiYXNlSHJlZiA9ICcvJyB9ID0ge30gYXMgQUJQLlRlc3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRlc3RDb3JlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGVzdENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogQVBQX0JBU0VfSFJFRiwgdXNlVmFsdWU6IGJhc2VIcmVmIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTG9jYWxpemF0aW9uUGlwZSxcclxuICAgICAgICAgIHVzZUNsYXNzOiBNb2NrTG9jYWxpemF0aW9uUGlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBBQlAuUm9vdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um9vdENvcmVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSb290Q29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTG9jYWxlUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IENvbmZpZ1BsdWdpbixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogeyBlbnZpcm9ubWVudDogb3B0aW9ucy5lbnZpcm9ubWVudCB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogJ0NPUkVfT1BUSU9OUycsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENPUkVfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvcmVPcHRpb25zRmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFsnQ09SRV9PUFRJT05TJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBBcGlJbnRlcmNlcHRvcixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbT0F1dGhDb25maWd1cmF0aW9uSGFuZGxlcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogZ2V0SW5pdGlhbERhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBsb2NhbGVJbml0aWFsaXplcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0xvY2FsaXphdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbm9vcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW1JvdXRlc0hhbmRsZXJdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbm9vcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogT0F1dGhTdG9yYWdlLCB1c2VGYWN0b3J5OiBzdG9yYWdlRmFjdG9yeSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfU1RPUkFHRV9QTFVHSU5fT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2U6IFN0b3JhZ2VPcHRpb24uTG9jYWxTdG9yYWdlLFxyXG4gICAgICAgICAgICBzZXJpYWxpemU6IEpTT04uc3RyaW5naWZ5LFxyXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogSlNPTi5wYXJzZSxcclxuICAgICAgICAgICAgYmVmb3JlU2VyaWFsaXplOiBuZ3hzU3RvcmFnZVBsdWdpblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgYWZ0ZXJEZXNlcmlhbGl6ZTogbmd4c1N0b3JhZ2VQbHVnaW5TZXJpYWxpemUsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnMubmd4c1N0b3JhZ2VQbHVnaW5PcHRpb25zLFxyXG4gICAgICAgICAgICBrZXk6IFsuLi4ob3B0aW9ucy5uZ3hzU3RvcmFnZVBsdWdpbk9wdGlvbnM/LmtleSB8fCBbXSksICdTZXNzaW9uU3RhdGUnXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmd4c1N0b3JhZ2VQbHVnaW5TZXJpYWxpemUoZGF0YSkge1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdfQ==