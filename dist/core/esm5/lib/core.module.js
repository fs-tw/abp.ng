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
import { TableSortDirective } from './directives/table-sort.directive';
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
                        TableSortDirective,
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
                        TableSortDirective,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0YsT0FB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O3dCQUNaLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixRQUFRO3dCQUNSLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLDJCQUEyQjt3QkFDM0IsZ0JBQWdCO3dCQUNoQixrQ0FBa0M7d0JBQ2xDLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDO2lCQUNqRTs7SUFvQ0QsaUJBQUM7Q0FBQSxBQXZGRCxJQXVGQztTQW5DWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOZ3hzUm91dGVyUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlIH0gZnJvbSAnQG5neHMvc3RvcmFnZS1wbHVnaW4nO1xyXG5pbXBvcnQgeyBOZ3hzTW9kdWxlLCBOR1hTX1BMVUdJTlMgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IER5bmFtaWNMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlci1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGVib3VuY2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRWxsaXBzaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZWxsaXBzaXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybVN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3JtLXN1Ym1pdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Blcm1pc3Npb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2xpY2tFdmVudFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdG9wLXByb3BhZ2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFZpc2liaWxpdHlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL2FwaS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEFCUCB9IGZyb20gJy4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsaXphdGlvbi5waXBlJztcclxuaW1wb3J0IHsgU29ydFBpcGUgfSBmcm9tICcuL3BpcGVzL3NvcnQucGlwZSc7XHJcbmltcG9ydCB7IExvY2FsZVByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvbG9jYWxlLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9jb25maWcuc3RhdGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3RhdGUgfSBmcm9tICcuL3N0YXRlcy9wcm9maWxlLnN0YXRlJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAnLi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZSc7XHJcbmltcG9ydCB7IGdldEluaXRpYWxEYXRhLCBsb2NhbGVJbml0aWFsaXplciB9IGZyb20gJy4vdXRpbHMvaW5pdGlhbC11dGlscyc7XHJcbmltcG9ydCB7IENvbmZpZ1BsdWdpbiwgTkdYU19DT05GSUdfUExVR0lOX09QVElPTlMgfSBmcm9tICcuL3BsdWdpbnMvY29uZmlnLnBsdWdpbic7XHJcbmltcG9ydCB7IEZvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdHMvbmctbW9kZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFibGVTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhYmxlLXNvcnQuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmd4c01vZHVsZS5mb3JGZWF0dXJlKFtQcm9maWxlU3RhdGUsIFNlc3Npb25TdGF0ZSwgQ29uZmlnU3RhdGVdKSxcclxuICAgIE5neHNTdG9yYWdlUGx1Z2luTW9kdWxlLmZvclJvb3QoeyBrZXk6ICdTZXNzaW9uU3RhdGUnIH0pLFxyXG4gICAgTmd4c1JvdXRlclBsdWdpbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBSb3V0ZXJPdXRsZXRDb21wb25lbnQsXHJcbiAgICBEeW5hbWljTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxyXG4gICAgRWxsaXBzaXNEaXJlY3RpdmUsXHJcbiAgICBGb3JEaXJlY3RpdmUsXHJcbiAgICBGb3JtU3VibWl0RGlyZWN0aXZlLFxyXG4gICAgVGFibGVTb3J0RGlyZWN0aXZlLFxyXG4gICAgTG9jYWxpemF0aW9uUGlwZSxcclxuICAgIFNvcnRQaXBlLFxyXG4gICAgUGVybWlzc2lvbkRpcmVjdGl2ZSxcclxuICAgIFZpc2liaWxpdHlEaXJlY3RpdmUsXHJcbiAgICBJbnB1dEV2ZW50RGVib3VuY2VEaXJlY3RpdmUsXHJcbiAgICBDbGlja0V2ZW50U3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIFJvdXRlck91dGxldENvbXBvbmVudCxcclxuICAgIER5bmFtaWNMYXlvdXRDb21wb25lbnQsXHJcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXHJcbiAgICBFbGxpcHNpc0RpcmVjdGl2ZSxcclxuICAgIEZvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1TdWJtaXREaXJlY3RpdmUsXHJcbiAgICBMb2NhbGl6YXRpb25QaXBlLFxyXG4gICAgU29ydFBpcGUsXHJcbiAgICBUYWJsZVNvcnREaXJlY3RpdmUsXHJcbiAgICBQZXJtaXNzaW9uRGlyZWN0aXZlLFxyXG4gICAgVmlzaWJpbGl0eURpcmVjdGl2ZSxcclxuICAgIElucHV0RXZlbnREZWJvdW5jZURpcmVjdGl2ZSxcclxuICAgIExvY2FsaXphdGlvblBpcGUsXHJcbiAgICBDbGlja0V2ZW50U3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxyXG4gICAgQWJzdHJhY3ROZ01vZGVsQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxpemF0aW9uUGlwZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUm91dGVyT3V0bGV0Q29tcG9uZW50LCBEeW5hbWljTGF5b3V0Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnMgPSB7fSBhcyBBQlAuUm9vdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvY2FsZVByb3ZpZGVyLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfUExVR0lOUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBDb25maWdQbHVnaW4sXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IE5HWFNfQ09ORklHX1BMVUdJTl9PUFRJT05TLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgIHVzZUNsYXNzOiBBcGlJbnRlcmNlcHRvcixcclxuICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICBkZXBzOiBbSW5qZWN0b3JdLFxyXG4gICAgICAgICAgdXNlRmFjdG9yeTogZ2V0SW5pdGlhbERhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBsb2NhbGVJbml0aWFsaXplcixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19