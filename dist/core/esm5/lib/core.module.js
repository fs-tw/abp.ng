/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AbstractNgModelComponent } from './abstracts/ng-model.component';
import { DynamicLayoutComponent } from './components/dynamic-layout.component';
import { RouterOutletComponent } from './components/router-outlet.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { InputEventDebounceDirective } from './directives/debounce.directive';
import { EllipsisDirective } from './directives/ellipsis.directive';
import { ForDirective } from './directives/for.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { PermissionDirective } from './directives/permission.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { VisibilityDirective } from './directives/visibility.directive';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LocalizationPipe } from './pipes/localization.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ConfigPlugin, NGXS_CONFIG_PLUGIN_OPTIONS } from './plugins/config.plugin';
import { LocaleProvider } from './providers/locale.provider';
import { ConfigState } from './states/config.state';
import { ProfileState } from './states/profile.state';
import { SessionState } from './states/session.state';
import { getInitialData, localeInitializer } from './utils/initial-utils';
import './utils/date-extensions';
import { ReplaceableRouteContainerComponent } from './components/replaceable-route-container.component';
import { ReplaceableComponentsState } from './states/replaceable-components.state';
import { InitDirective } from './directives/init.directive';
import { ReplaceableTemplateDirective } from './directives/replaceable-template.directive';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
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
            ngModule: CoreModule,
            providers: [
                LocaleProvider,
                {
                    provide: NGXS_PLUGINS,
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
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
            ],
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgxsModule.forFeature([ReplaceableComponentsState, ProfileState, SessionState, ConfigState]),
                        NgxsRouterPluginModule.forRoot(),
                        NgxsStoragePluginModule.forRoot({ key: ['SessionState'] }),
                        OAuthModule.forRoot(),
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                    ],
                    declarations: [
                        ReplaceableRouteContainerComponent,
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        LocalizationPipe,
                        SortPipe,
                        InitDirective,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        StopPropagationDirective,
                        ReplaceableTemplateDirective,
                        AbstractNgModelComponent,
                    ],
                    exports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        AbstractNgModelComponent,
                        ReplaceableRouteContainerComponent,
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        InitDirective,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        ReplaceableTemplateDirective,
                        StopPropagationDirective,
                        LocalizationPipe,
                        SortPipe,
                        LocalizationPipe,
                    ],
                    providers: [LocalizationPipe],
                    entryComponents: [
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        ReplaceableRouteContainerComponent,
                    ],
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxF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QW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFFBQVE7d0JBQ1IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLGtDQUFrQzt3QkFDbEMsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLFFBQVE7d0JBQ1IsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsZUFBZSxFQUFFO3dCQUNmLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixrQ0FBa0M7cUJBQ25DO2lCQUNGOztJQW9DRCxpQkFBQztDQUFBLEFBaEdELElBZ0dDO1NBbkNZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5neHNSb3V0ZXJQbHVnaW5Nb2R1bGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUgfSBmcm9tICdAbmd4cy9zdG9yYWdlLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUsIE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdHMvbmctbW9kZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWJvdW5jZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGxpcHNpcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1TdWJtaXREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm9ybS1zdWJtaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9wZXJtaXNzaW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2FwaS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsaXphdGlvbi5waXBlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuL3BpcGVzL3NvcnQucGlwZSc7XHJcbmltcG9ydCB7IENvbmZpZ1BsdWdpbiwgTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMgfSBmcm9tICcuL3BsdWdpbnMvY29uZmlnLnBsdWdpbic7XHJcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbG9jYWxlLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9wcm9maWxlLnN0YXRlJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZSc7XHJcbmltcG9ydCB7IGdldEluaXRpYWxEYXRhLCBsb2NhbGVJbml0aWFsaXplciB9IGZyb20gJy4vdXRpbHMvaW5pdGlhbC11dGlscyc7XHJcbmltcG9ydCAnLi91dGlscy9kYXRlLWV4dGVuc2lvbnMnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZVJvdXRlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlcGxhY2VhYmxlLXJvdXRlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHNTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3JlcGxhY2VhYmxlLWNvbXBvbmVudHMuc3RhdGUnO1xyXG5pbXBvcnQgeyBJbml0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luaXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXBsYWNlYWJsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW1JlcGxhY2VhYmxlQ29tcG9uZW50c1N0YXRlLCBQcm9maWxlU3RhdGUsIFNlc3Npb25TdGF0ZSwgQ29uZmlnU3RhdGVdKSxcclxuICAgIE5neHNSb3V0ZXJQbHVnaW5Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUuZm9yUm9vdCh7IGtleTogWydTZXNzaW9uU3RhdGUnXSB9KSxcclxuICAgIE9BdXRoTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJlcGxhY2VhYmxlUm91dGVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgTG9jYWxpemF0aW9uUGlwZSxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgSW5pdERpcmVjdGl2ZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgUmVwbGFjZWFibGVUZW1wbGF0ZURpcmVjdGl2ZSxcclxuICAgIEFic3RyYWN0TmdNb2RlbENvbXBvbmVudCxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIEVsbGlwc2lzRGlyZWN0aXZlLFxyXG4gICAgRm9yRGlyZWN0aXZlLFxyXG4gICAgRm9ybVN1Ym1pdERpcmVjdGl2ZSxcclxuICAgIEluaXREaXJlY3RpdmUsXHJcbiAgICBQZXJtaXNzaW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIFJlcGxhY2VhYmxlVGVtcGxhdGVEaXJlY3RpdmUsXHJcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBMb2NhbGl6YXRpb25QaXBlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxpemF0aW9uUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgUmVwbGFjZWFibGVSb3V0ZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucyA9IHt9IGFzIEFCUC5Sb290KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTG9jYWxlUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IENvbmZpZ1BsdWdpbixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEFwaUludGVyY2VwdG9yLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRJbml0aWFsRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvY2FsZUluaXRpYWxpemVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=