/**
 * @fileoverview added by tsickle
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
import { DynamicLayoutComponent } from './components/dynamic-layout.component';
import { RouterOutletComponent } from './components/router-outlet.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { InputEventDebounceDirective } from './directives/debounce.directive';
import { EllipsisDirective } from './directives/ellipsis.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { PermissionDirective } from './directives/permission.directive';
import { ClickEventStopPropagationDirective } from './directives/stop-propagation.directive';
import { VisibilityDirective } from './directives/visibility.directive';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LocalizationPipe } from './pipes/localization.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LocaleProvider } from './providers/locale.provider';
import { ConfigState } from './states/config.state';
import { ProfileState } from './states/profile.state';
import { SessionState } from './states/session.state';
import { getInitialData, localeInitializer } from './utils/initial-utils';
import { ConfigPlugin, NGXS_CONFIG_PLUGIN_OPTIONS } from './plugins/config.plugin';
import { ForDirective } from './directives/for.directive';
import { AbstractNgModelComponent } from './abstracts/ng-model.component';
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
                        NgxsModule.forFeature([ProfileState, SessionState, ConfigState]),
                        NgxsStoragePluginModule.forRoot({ key: 'SessionState' }),
                        NgxsRouterPluginModule.forRoot(),
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                    ],
                    declarations: [
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        LocalizationPipe,
                        SortPipe,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        ClickEventStopPropagationDirective,
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
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        LocalizationPipe,
                        SortPipe,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        LocalizationPipe,
                        ClickEventStopPropagationDirective,
                        AbstractNgModelComponent,
                    ],
                    providers: [LocalizationPipe],
                    entryComponents: [RouterOutletComponent, DynamicLayoutComponent],
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0YsT0FB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LG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixnQkFBZ0I7d0JBQ2hCLGtDQUFrQzt3QkFDbEMsd0JBQXdCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsZUFBZSxFQUFFLENBQUMscUJBQXFCLEVBQUUsc0JBQXNCLENBQUM7aUJBQ2pFOztJQW9DRCxpQkFBQztDQUFBLEFBckZELElBcUZDO1NBbkNZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5neHNSb3V0ZXJQbHVnaW5Nb2R1bGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUgfSBmcm9tICdAbmd4cy9zdG9yYWdlLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUsIE5HWFNfUExVR0lOUyB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgRHluYW1pY0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGVyLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWJvdW5jZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBFbGxpcHNpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9lbGxpcHNpcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3JtU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm0tc3VibWl0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDbGlja0V2ZW50U3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N0b3AtcHJvcGFnYXRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVmlzaWJpbGl0eURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXNpYmlsaXR5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFwaUludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvYXBpLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUGlwZSB9IGZyb20gJy4vcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUnO1xyXG5pbXBvcnQgeyBTb3J0UGlwZSB9IGZyb20gJy4vcGlwZXMvc29ydC5waXBlJztcclxuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2NhbGUucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTdGF0ZSB9IGZyb20gJy4vc3RhdGVzL3Byb2ZpbGUuc3RhdGUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9zZXNzaW9uLnN0YXRlJztcclxuaW1wb3J0IHsgZ2V0SW5pdGlhbERhdGEsIGxvY2FsZUluaXRpYWxpemVyIH0gZnJvbSAnLi91dGlscy9pbml0aWFsLXV0aWxzJztcclxuaW1wb3J0IHsgQ29uZmlnUGx1Z2luLCBOR1hTX0NPTkZJR19QTFVHSU5fT1BUSU9OUyB9IGZyb20gJy4vcGx1Z2lucy9jb25maWcucGx1Z2luJztcclxuaW1wb3J0IHsgRm9yRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0cy9uZy1tb2RlbC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ3hzTW9kdWxlLmZvckZlYXR1cmUoW1Byb2ZpbGVTdGF0ZSwgU2Vzc2lvblN0YXRlLCBDb25maWdTdGF0ZV0pLFxyXG4gICAgTmd4c1N0b3JhZ2VQbHVnaW5Nb2R1bGUuZm9yUm9vdCh7IGtleTogJ1Nlc3Npb25TdGF0ZScgfSksXHJcbiAgICBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBQZXJtaXNzaW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIENsaWNrRXZlbnRTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgUm91dGVyT3V0bGV0Q29tcG9uZW50LFxyXG4gICAgRHluYW1pY0xheW91dENvbXBvbmVudCxcclxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcclxuICAgIEVsbGlwc2lzRGlyZWN0aXZlLFxyXG4gICAgRm9yRGlyZWN0aXZlLFxyXG4gICAgRm9ybVN1Ym1pdERpcmVjdGl2ZSxcclxuICAgIExvY2FsaXphdGlvblBpcGUsXHJcbiAgICBTb3J0UGlwZSxcclxuICAgIFBlcm1pc3Npb25EaXJlY3RpdmUsXHJcbiAgICBWaXNpYmlsaXR5RGlyZWN0aXZlLFxyXG4gICAgSW5wdXRFdmVudERlYm91bmNlRGlyZWN0aXZlLFxyXG4gICAgTG9jYWxpemF0aW9uUGlwZSxcclxuICAgIENsaWNrRXZlbnRTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXHJcbiAgICBBYnN0cmFjdE5nTW9kZWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtMb2NhbGl6YXRpb25QaXBlXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtSb3V0ZXJPdXRsZXRDb21wb25lbnQsIER5bmFtaWNMYXlvdXRDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucyA9IHt9IGFzIEFCUC5Sb290KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgTG9jYWxlUHJvdmlkZXIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19QTFVHSU5TLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IENvbmZpZ1BsdWdpbixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgICAgdXNlQ2xhc3M6IEFwaUludGVyY2VwdG9yLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRJbml0aWFsRGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgZGVwczogW0luamVjdG9yXSxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvY2FsZUluaXRpYWxpemVyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=