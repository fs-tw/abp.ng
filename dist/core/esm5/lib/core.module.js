/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { ConfigState } from './states/config.state';
import { ProfileState } from './states/profile.state';
import { ReplaceableComponentsState } from './states/replaceable-components.state';
import { SessionState } from './states/session.state';
import { CORE_OPTIONS } from './tokens/options.token';
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
var BaseCoreModule = /** @class */ (function () {
    function BaseCoreModule() {
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
    return BaseCoreModule;
}());
export { BaseCoreModule };
/**
 * RootCoreModule is the module that will be used at root level
 * and it introduces imports useful at root level (e.g. NGXS)
 */
var RootCoreModule = /** @class */ (function () {
    function RootCoreModule() {
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
    return RootCoreModule;
}());
export { RootCoreModule };
/**
 * TestCoreModule is the module that will be used in tests
 * and it provides mock alternatives
 */
var TestCoreModule = /** @class */ (function () {
    function TestCoreModule() {
    }
    TestCoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [RouterModule, BaseCoreModule, MockLocalizationPipe],
                    imports: [RouterModule.forRoot([]), BaseCoreModule],
                    declarations: [MockLocalizationPipe],
                },] }
    ];
    return TestCoreModule;
}());
export { TestCoreModule };
/**
 * CoreModule is the module that is publicly available
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @param {?=} __0
     * @return {?}
     */
    CoreModule.forTest = /**
     * @param {?=} __0
     * @return {?}
     */
    function (_a) {
        var _b = (_a === void 0 ? (/** @type {?} */ ({})) : _a).baseHref, baseHref = _b === void 0 ? '/' : _b;
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
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        return {
            ngModule: RootCoreModule,
            providers: tslib_1.__spread([
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
                }
            ], OAuthModule.forRoot().providers, [
                { provide: OAuthStorage, useFactory: storageFactory },
            ]),
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    exports: [BaseCoreModule, LocalizationModule],
                    imports: [BaseCoreModule, LocalizationModule],
                    providers: [LocalizationPipe],
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxp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Z3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmFnZS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlLCBOR1hTX1BMVUdJTlMgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoTW9kdWxlLCBPQXV0aFN0b3JhZ2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdHMvbmctbW9kZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWJvdW5jZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGxpcHNpcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbml0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlcGxhY2VhYmxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2FwaS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gJy4vbG9jYWxpemF0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblBpcGUsIE1vY2tMb2NhbGl6YXRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbGl6YXRpb24ucGlwZSc7XHJcbmltcG9ydCB7IFNvcnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zb3J0LnBpcGUnO1xyXG5pbXBvcnQgeyBDb25maWdQbHVnaW4sIE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TIH0gZnJvbSAnLi9wbHVnaW5zL2NvbmZpZy5wbHVnaW4nO1xyXG5pbXBvcnQgeyBMb2NhbGVQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2xvY2FsZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgUHJvZmlsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZSc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Nlc3Npb24uc3RhdGUnO1xyXG5pbXBvcnQgeyBDT1JFX09QVElPTlMgfSBmcm9tICcuL3Rva2Vucy9vcHRpb25zLnRva2VuJztcclxuaW1wb3J0ICcuL3V0aWxzL2RhdGUtZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IGdldEluaXRpYWxEYXRhLCBsb2NhbGVJbml0aWFsaXplciB9IGZyb20gJy4vdXRpbHMvaW5pdGlhbC11dGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUZhY3RvcnkoKTogT0F1dGhTdG9yYWdlIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZUNvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IGhvbGRzXHJcbiAqIGFsbCBpbXBvcnRzLCBkZWNsYXJhdGlvbnMsIGV4cG9ydHMsIGFuZCBlbnRyeUNvbXBvbmVudHNcclxuICogYnV0IG5vdCB0aGUgcHJvdmlkZXJzLlxyXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIGltcG9ydGVkIGFuZCBleHBvcnRlZCBieSBhbGwgb3RoZXJzLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG5cclxuICAgIEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBJbml0RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgUGVybWlzc2lvbkRpcmVjdGl2ZSxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgT0F1dGhNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgSW5pdERpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogUm9vdENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IHdpbGwgYmUgdXNlZCBhdCByb290IGxldmVsXHJcbiAqIGFuZCBpdCBpbnRyb2R1Y2VzIGltcG9ydHMgdXNlZnVsIGF0IHJvb3QgbGV2ZWwgKGUuZy4gTkdYUylcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJhc2VDb3JlTW9kdWxlLFxyXG4gICAgTG9jYWxpemF0aW9uTW9kdWxlLFxyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSwgUHJvZmlsZVN0YXRlLCBTZXNzaW9uU3RhdGUsIENvbmZpZ1N0YXRlXSksXHJcbiAgICBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlLmZvclJvb3QoeyBrZXk6IFsnU2Vzc2lvblN0YXRlJ10gfSksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogVGVzdENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0ZXN0c1xyXG4gKiBhbmQgaXQgcHJvdmlkZXMgbW9jayBhbHRlcm5hdGl2ZXNcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZSwgQmFzZUNvcmVNb2R1bGUsIE1vY2tMb2NhbGl6YXRpb25QaXBlXSxcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3QoW10pLCBCYXNlQ29yZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTW9ja0xvY2FsaXphdGlvblBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvcmVNb2R1bGUge31cclxuXHJcbi8qKlxyXG4gKiBDb3JlTW9kdWxlIGlzIHRoZSBtb2R1bGUgdGhhdCBpcyBwdWJsaWNseSBhdmFpbGFibGVcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtCYXNlQ29yZU1vZHVsZSwgTG9jYWxpemF0aW9uTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtMb2NhbGl6YXRpb25QaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JUZXN0KHsgYmFzZUhyZWYgPSAnLycgfSA9IHt9IGFzIEFCUC5UZXN0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZXN0Q29yZU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRlc3RDb3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiBiYXNlSHJlZiB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IExvY2FsaXphdGlvblBpcGUsXHJcbiAgICAgICAgICB1c2VDbGFzczogTW9ja0xvY2FsaXphdGlvblBpcGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zID0ge30gYXMgQUJQLlJvb3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvb3RDb3JlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUm9vdENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvY2FsZVByb3ZpZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfUExVR0lOUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBDb25maWdQbHVnaW4sXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHsgZW52aXJvbm1lbnQ6IG9wdGlvbnMuZW52aXJvbm1lbnQgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENPUkVfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgICB1c2VDbGFzczogQXBpSW50ZXJjZXB0b3IsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldEluaXRpYWxEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbG9jYWxlSW5pdGlhbGl6ZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5PQXV0aE1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxyXG4gICAgICAgIHsgcHJvdmlkZTogT0F1dGhTdG9yYWdlLCB1c2VGYWN0b3J5OiBzdG9yYWdlRmFjdG9yeSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19