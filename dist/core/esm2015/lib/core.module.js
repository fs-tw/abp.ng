/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @return {?}
 */
export function storageFactory() {
    return localStorage;
}
/**
 * BaseCoreModule is the module that holds
 * all imports, declarations, exports, and entryComponents
 * but not the providers.
 * This module will be imported and exported by all others.
 */
export class BaseCoreModule {
}
BaseCoreModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
export class RootCoreModule {
}
RootCoreModule.decorators = [
    { type: NgModule, args: [{
                exports: [BaseCoreModule, LocalizationModule],
                imports: [
                    BaseCoreModule,
                    LocalizationModule,
                    NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
                    NgxsRouterPluginModule.forRoot(),
                    NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
                ],
            },] }
];
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
export class TestCoreModule {
}
TestCoreModule.decorators = [
    { type: NgModule, args: [{
                exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
                imports: [RouterModule.forRoot([]), BaseCoreModule],
                declarations: [MockLocalizationPipe],
            },] }
];
/**
 * CoreModule is the module that is publicly available
 */
export class CoreModule {
    /**
     * @param {?=} __0
     * @return {?}
     */
    static forTest({ baseHref = '/' } = (/** @type {?} */ ({}))) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
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
                ...OAuthModule.forRoot().providers,
                { provide: OAuthStorage, useFactory: storageFactory },
            ],
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                exports: [BaseCoreModule, LocalizationModule],
                imports: [BaseCoreModule, LocalizationModule],
                providers: [LocalizationPipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlD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IHsgQVBQX0JBU0VfSFJFRiwgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmFnZS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlLCBOR1hTX1BMVUdJTlMgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoTW9kdWxlLCBPQXV0aFN0b3JhZ2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdHMvbmctbW9kZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWJvdW5jZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGxpcHNpcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlcGxhY2VhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2FwaS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gJy4vbG9jYWxpemF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblBpcGUsIE1vY2tMb2NhbGl6YXRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbGl6YXRpb24ucGlwZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zb3J0LnBpcGUnO1xyXG5pbXBvcnQgeyBDb25maWdQbHVnaW4sIE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TIH0gZnJvbSAnLi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4nO1xyXG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2xvY2FsZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9wcm9maWxlLnN0YXRlJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVDb21wb25lbnRzU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9yZXBsYWNlYWJsZS1jb21wb25lbnRzLnN0YXRlJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZSc7XHJcbmltcG9ydCB7IENPUkVfT1BUSU9OUyB9IGZyb20gJy4vdG9rZW5zL29wdGlvbnMudG9rZW4nO1xyXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlscy9jb21tb24tdXRpbHMnO1xyXG5pbXBvcnQgJy4vdXRpbHMvZGF0ZS1leHRlbnNpb25zJztcclxuaW1wb3J0IHsgZ2V0SW5pdGlhbERhdGEsIGxvY2FsZUluaXRpYWxpemVyIH0gZnJvbSAnLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlRmFjdG9yeSgpOiBPQXV0aFN0b3JhZ2Uge1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlQ29yZU1vZHVsZSBpcyB0aGUgbW9kdWxlIHRoYXQgaG9sZHNcclxuICogYWxsIGltcG9ydHMsIGRlY2xhcmF0aW9ucywgZXhwb3J0cywgYW5kIGVudHJ5Q29tcG9uZW50c1xyXG4gKiBidXQgbm90IHRoZSBwcm92aWRlcnMuXHJcbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgaW1wb3J0ZWQgYW5kIGV4cG9ydGVkIGJ5IGFsbCBvdGhlcnMuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcblxyXG4gICAgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50LFxyXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIEVsbGlwc2lzRGlyZWN0aXZlLFxyXG4gICAgRm9yRGlyZWN0aXZlLFxyXG4gICAgRm9ybVN1Ym1pdERpcmVjdGl2ZSxcclxuICAgIEluaXREaXJlY3RpdmUsXHJcbiAgICBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUsXHJcbiAgICBQZXJtaXNzaW9uRGlyZWN0aXZlLFxyXG4gICAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcclxuICAgIFZpc2liaWxpdHlEaXJlY3RpdmUsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBPQXV0aE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBJbml0RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgUGVybWlzc2lvbkRpcmVjdGl2ZSxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzZUNvcmVNb2R1bGUge31cclxuXHJcbi8qKlxyXG4gKiBSb290Q29yZU1vZHVsZSBpcyB0aGUgbW9kdWxlIHRoYXQgd2lsbCBiZSB1c2VkIGF0IHJvb3QgbGV2ZWxcclxuICogYW5kIGl0IGludHJvZHVjZXMgaW1wb3J0cyB1c2VmdWwgYXQgcm9vdCBsZXZlbCAoZS5nLiBOR1hTKVxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbQmFzZUNvcmVNb2R1bGUsIExvY2FsaXphdGlvbk1vZHVsZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQmFzZUNvcmVNb2R1bGUsXHJcbiAgICBMb2NhbGl6YXRpb25Nb2R1bGUsXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlLCBQcm9maWxlU3RhdGUsIFNlc3Npb25TdGF0ZSwgQ29uZmlnU3RhdGVdKSxcclxuICAgIE5neHNSb3V0ZXJQbHVnaW5Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUuZm9yUm9vdCh7IGtleTogWydTZXNzaW9uU3RhdGUnXSB9KSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvcmVNb2R1bGUge31cclxuXHJcbi8qKlxyXG4gKiBUZXN0Q29yZU1vZHVsZSBpcyB0aGUgbW9kdWxlIHRoYXQgd2lsbCBiZSB1c2VkIGluIHRlc3RzXHJcbiAqIGFuZCBpdCBwcm92aWRlcyBtb2NrIGFsdGVybmF0aXZlc1xyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlLCBCYXNlQ29yZU1vZHVsZSwgTW9ja0xvY2FsaXphdGlvblBpcGVdLFxyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXSksIEJhc2VDb3JlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNb2NrTG9jYWxpemF0aW9uUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q29yZU1vZHVsZSB7fVxyXG5cclxuLyoqXHJcbiAqIENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IGlzIHB1YmxpY2x5IGF2YWlsYWJsZVxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbQmFzZUNvcmVNb2R1bGUsIExvY2FsaXphdGlvbk1vZHVsZV0sXHJcbiAgaW1wb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW0xvY2FsaXphdGlvblBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclRlc3QoeyBiYXNlSHJlZiA9ICcvJyB9ID0ge30gYXMgQUJQLlRlc3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRlc3RDb3JlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGVzdENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogQVBQX0JBU0VfSFJFRiwgdXNlVmFsdWU6IGJhc2VIcmVmIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTG9jYWxpemF0aW9uUGlwZSxcclxuICAgICAgICAgIHVzZUNsYXNzOiBNb2NrTG9jYWxpemF0aW9uUGlwZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBBQlAuUm9vdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Um9vdENvcmVNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBSb290Q29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTG9jYWxlUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IENvbmZpZ1BsdWdpbixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogeyBlbnZpcm9ubWVudDogb3B0aW9ucy5lbnZpcm9ubWVudCB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQ09SRV9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBBcGlJbnRlcmNlcHRvcixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogZ2V0SW5pdGlhbERhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBsb2NhbGVJbml0aWFsaXplcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0xvY2FsaXphdGlvblNlcnZpY2VdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbm9vcCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLk9BdXRoTW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXHJcbiAgICAgICAgeyBwcm92aWRlOiBPQXV0aFN0b3JhZ2UsIHVzZUZhY3Rvcnk6IHN0b3JhZ2VGYWN0b3J5IH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=