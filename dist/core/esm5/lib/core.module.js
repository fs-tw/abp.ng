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
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [LocalizationService],
                    useFactory: noop,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxp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Q0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7O0lBNkRELGlCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E1RFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9CQVNFX0hSRUYsIENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIEluamVjdG9yLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmd4c1JvdXRlclBsdWdpbk1vZHVsZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBOZ3hzU3RvcmFnZVBsdWdpbk1vZHVsZSB9IGZyb20gJ0BuZ3hzL3N0b3JhZ2UtcGx1Z2luJztcclxuaW1wb3J0IHsgTmd4c01vZHVsZSwgTkdYU19QTFVHSU5TIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aE1vZHVsZSwgT0F1dGhTdG9yYWdlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3RzL25nLW1vZGVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IER5bmFtaWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXBsYWNlYWJsZS1yb3V0ZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlci1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVib3VuY2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRWxsaXBzaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxsaXBzaXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JtU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEluaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaW5pdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Blcm1pc3Npb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXBsYWNlYWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBWaXNpYmlsaXR5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Zpc2liaWxpdHkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQXBpSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9hcGkuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tICcuL2xvY2FsaXphdGlvbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICcuL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25QaXBlLCBNb2NrTG9jYWxpemF0aW9uUGlwZSB9IGZyb20gJy4vcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vcGlwZXMvc29ydC5waXBlJztcclxuaW1wb3J0IHsgQ29uZmlnUGx1Z2luLCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyB9IGZyb20gJy4vcGx1Z2lucy9jb25maWcucGx1Z2luJztcclxuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2NhbGUucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgUHJvZmlsZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcHJvZmlsZS5zdGF0ZSc7XHJcbmltcG9ydCB7IFJlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvcmVwbGFjZWFibGUtY29tcG9uZW50cy5zdGF0ZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Nlc3Npb24uc3RhdGUnO1xyXG5pbXBvcnQgeyBDT1JFX09QVElPTlMgfSBmcm9tICcuL3Rva2Vucy9vcHRpb25zLnRva2VuJztcclxuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbHMvY29tbW9uLXV0aWxzJztcclxuaW1wb3J0ICcuL3V0aWxzL2RhdGUtZXh0ZW5zaW9ucyc7XHJcbmltcG9ydCB7IGdldEluaXRpYWxEYXRhLCBsb2NhbGVJbml0aWFsaXplciB9IGZyb20gJy4vdXRpbHMvaW5pdGlhbC11dGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZUZhY3RvcnkoKTogT0F1dGhTdG9yYWdlIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlO1xyXG59XHJcblxyXG4vKipcclxuICogQmFzZUNvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IGhvbGRzXHJcbiAqIGFsbCBpbXBvcnRzLCBkZWNsYXJhdGlvbnMsIGV4cG9ydHMsIGFuZCBlbnRyeUNvbXBvbmVudHNcclxuICogYnV0IG5vdCB0aGUgcHJvdmlkZXJzLlxyXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIGltcG9ydGVkIGFuZCBleHBvcnRlZCBieSBhbGwgb3RoZXJzLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG5cclxuICAgIEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBJbml0RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgUGVybWlzc2lvbkRpcmVjdGl2ZSxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBSZXBsYWNlYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgT0F1dGhNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgSW5pdERpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogUm9vdENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IHdpbGwgYmUgdXNlZCBhdCByb290IGxldmVsXHJcbiAqIGFuZCBpdCBpbnRyb2R1Y2VzIGltcG9ydHMgdXNlZnVsIGF0IHJvb3QgbGV2ZWwgKGUuZy4gTkdYUylcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJhc2VDb3JlTW9kdWxlLFxyXG4gICAgTG9jYWxpemF0aW9uTW9kdWxlLFxyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSwgUHJvZmlsZVN0YXRlLCBTZXNzaW9uU3RhdGUsIENvbmZpZ1N0YXRlXSksXHJcbiAgICBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlLmZvclJvb3QoeyBrZXk6IFsnU2Vzc2lvblN0YXRlJ10gfSksXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb3JlTW9kdWxlIHt9XHJcblxyXG4vKipcclxuICogVGVzdENvcmVNb2R1bGUgaXMgdGhlIG1vZHVsZSB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0ZXN0c1xyXG4gKiBhbmQgaXQgcHJvdmlkZXMgbW9jayBhbHRlcm5hdGl2ZXNcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZSwgQmFzZUNvcmVNb2R1bGUsIE1vY2tMb2NhbGl6YXRpb25QaXBlXSxcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3QoW10pLCBCYXNlQ29yZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTW9ja0xvY2FsaXphdGlvblBpcGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvcmVNb2R1bGUge31cclxuXHJcbi8qKlxyXG4gKiBDb3JlTW9kdWxlIGlzIHRoZSBtb2R1bGUgdGhhdCBpcyBwdWJsaWNseSBhdmFpbGFibGVcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW0Jhc2VDb3JlTW9kdWxlLCBMb2NhbGl6YXRpb25Nb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtCYXNlQ29yZU1vZHVsZSwgTG9jYWxpemF0aW9uTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtMb2NhbGl6YXRpb25QaXBlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JUZXN0KHsgYmFzZUhyZWYgPSAnLycgfSA9IHt9IGFzIEFCUC5UZXN0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZXN0Q29yZU1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRlc3RDb3JlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiBiYXNlSHJlZiB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IExvY2FsaXphdGlvblBpcGUsXHJcbiAgICAgICAgICB1c2VDbGFzczogTW9ja0xvY2FsaXphdGlvblBpcGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zID0ge30gYXMgQUJQLlJvb3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJvb3RDb3JlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUm9vdENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvY2FsZVByb3ZpZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfUExVR0lOUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBDb25maWdQbHVnaW4sXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IHsgZW52aXJvbm1lbnQ6IG9wdGlvbnMuZW52aXJvbm1lbnQgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENPUkVfT1BUSU9OUyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgICB1c2VDbGFzczogQXBpSW50ZXJjZXB0b3IsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldEluaXRpYWxEYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogbG9jYWxlSW5pdGlhbGl6ZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtMb2NhbGl6YXRpb25TZXJ2aWNlXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IG5vb3AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5PQXV0aE1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxyXG4gICAgICAgIHsgcHJvdmlkZTogT0F1dGhTdG9yYWdlLCB1c2VGYWN0b3J5OiBzdG9yYWdlRmFjdG9yeSB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19