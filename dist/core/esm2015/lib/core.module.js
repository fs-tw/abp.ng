import { __decorate } from "tslib";
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
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
import { CORE_OPTIONS } from './tokens/options.token';
import { noop } from './utils/common-utils';
import './utils/date-extensions';
import { getInitialData, localeInitializer } from './utils/initial-utils';
export function storageFactory() {
    return localStorage;
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
            NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
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
                    provide: CORE_OPTIONS,
                    useValue: options,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDeEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFF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QUUsSUFBSTtpQkFDakI7Z0JBQ0QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUU7YUFDdEQ7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFqRVksVUFBVTtJQUx0QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDN0MsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7R0FDVyxVQUFVLENBaUV0QjtTQWpFWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiwgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmFnZS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlLCBOR1hTX1BMVUdJTlMgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoTW9kdWxlLCBPQXV0aFN0b3JhZ2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdHMvbmctbW9kZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWJvdW5jZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGxpcHNpcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlcGxhY2VhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXNIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9yb3V0ZXMuaGFuZGxlcic7XHJcbmltcG9ydCB7IEFwaUludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvYXBpLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSAnLi9sb2NhbGl6YXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUGlwZSwgTW9ja0xvY2FsaXphdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsaXphdGlvbi5waXBlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuL3BpcGVzL3NvcnQucGlwZSc7XHJcbmltcG9ydCB7IENvbmZpZ1BsdWdpbiwgTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMgfSBmcm9tICcuL3BsdWdpbnMvY29uZmlnLnBsdWdpbic7XHJcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbG9jYWxlLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Byb2ZpbGUuc3RhdGUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuc3RhdGUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9zZXNzaW9uLnN0YXRlJztcclxuaW1wb3J0IHsgQ09SRV9PUFRJT05TIH0gZnJvbSAnLi90b2tlbnMvb3B0aW9ucy50b2tlbic7XHJcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzL2NvbW1vbi11dGlscyc7XHJcbmltcG9ydCAnLi91dGlscy9kYXRlLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBnZXRJbml0aWFsRGF0YSwgbG9jYWxlSW5pdGlhbGl6ZXIgfSBmcm9tICcuL3V0aWxzL2luaXRpYWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VGYWN0b3J5KCk6IE9BdXRoU3RvcmFnZSB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2VDb3JlTW9kdWxlIGlzIHRoZSBtb2R1bGUgdGhhdCBob2xkc1xyXG4gKiBhbGwgaW1wb3J0cywgZGVjbGFyYXRpb25zLCBleHBvcnRzLCBhbmQgZW50cnlDb21wb25lbnRzXHJcbiAqIGJ1dCBub3QgdGhlIHByb3ZpZGVycy5cclxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSBpbXBvcnRlZCBhbmQgZXhwb3J0ZWQgYnkgYWxsIG90aGVycy5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgSW5pdERpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE9BdXRoTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50LFxyXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIEVsbGlwc2lzRGlyZWN0aXZlLFxyXG4gICAgRm9yRGlyZWN0aXZlLFxyXG4gICAgRm9ybVN1Ym1pdERpcmVjdGl2ZSxcclxuICAgIEluaXREaXJlY3RpdmUsXHJcbiAgICBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUsXHJcbiAgICBQZXJtaXNzaW9uRGlyZWN0aXZlLFxyXG4gICAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcclxuICAgIFZpc2liaWxpdHlEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29yZU1vZHVsZSB7fVxyXG5cclxuLyoqXHJcbiAqIFJvb3RDb3JlTW9kdWxlIGlzIHRoZSBtb2R1bGUgdGhhdCB3aWxsIGJlIHVzZWQgYXQgcm9vdCBsZXZlbFxyXG4gKiBhbmQgaXQgaW50cm9kdWNlcyBpbXBvcnRzIHVzZWZ1bCBhdCByb290IGxldmVsIChlLmcuIE5HWFMpXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtCYXNlQ29yZU1vZHVsZSwgTG9jYWxpemF0aW9uTW9kdWxlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCYXNlQ29yZU1vZHVsZSxcclxuICAgIExvY2FsaXphdGlvbk1vZHVsZSxcclxuICAgIE5neHNNb2R1bGUuZm9yRmVhdHVyZShbUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUsIFByb2ZpbGVTdGF0ZSwgU2Vzc2lvblN0YXRlLCBDb25maWdTdGF0ZV0pLFxyXG4gICAgTmd4c1JvdXRlclBsdWdpbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZ3hzU3RvcmFnZVBsdWdpbk1vZHVsZS5mb3JSb290KHsga2V5OiBbJ1Nlc3Npb25TdGF0ZSddIH0pLFxyXG4gICAgT0F1dGhNb2R1bGUuZm9yUm9vdCgpLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29yZU1vZHVsZSB7fVxyXG5cclxuLyoqXHJcbiAqIFRlc3RDb3JlTW9kdWxlIGlzIHRoZSBtb2R1bGUgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGVzdHNcclxuICogYW5kIGl0IHByb3ZpZGVzIG1vY2sgYWx0ZXJuYXRpdmVzXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGUsIEJhc2VDb3JlTW9kdWxlLCBNb2NrTG9jYWxpemF0aW9uUGlwZV0sXHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KFtdKSwgQmFzZUNvcmVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW01vY2tMb2NhbGl6YXRpb25QaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlc3RDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogQ29yZU1vZHVsZSBpcyB0aGUgbW9kdWxlIHRoYXQgaXMgcHVibGljbHkgYXZhaWxhYmxlXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtCYXNlQ29yZU1vZHVsZSwgTG9jYWxpemF0aW9uTW9kdWxlXSxcclxuICBpbXBvcnRzOiBbQmFzZUNvcmVNb2R1bGUsIExvY2FsaXphdGlvbk1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxpemF0aW9uUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yVGVzdCh7IGJhc2VIcmVmID0gJy8nIH0gPSB7fSBhcyBBQlAuVGVzdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGVzdENvcmVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUZXN0Q29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogYmFzZUhyZWYgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IE1vY2tMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucyA9IHt9IGFzIEFCUC5Sb290KTogTW9kdWxlV2l0aFByb3ZpZGVyczxSb290Q29yZU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFJvb3RDb3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBMb2NhbGVQcm92aWRlcixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX1BMVUdJTlMsXHJcbiAgICAgICAgICB1c2VDbGFzczogQ29uZmlnUGx1Z2luLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiB7IGVudmlyb25tZW50OiBvcHRpb25zLmVudmlyb25tZW50IH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBDT1JFX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEFwaUludGVyY2VwdG9yLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRJbml0aWFsRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvY2FsZUluaXRpYWxpemVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbTG9jYWxpemF0aW9uU2VydmljZV0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbUm91dGVzSGFuZGxlcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBub29wLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBPQXV0aFN0b3JhZ2UsIHVzZUZhY3Rvcnk6IHN0b3JhZ2VGYWN0b3J5IH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=