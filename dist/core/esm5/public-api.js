/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of core
 */
// export * from './lib/handlers';
export { AbstractNgModelComponent } from './lib/abstracts';
export { PatchRouteByName, GetAppConfiguration, AddRoute, SetEnvironment, StartLoader, StopLoader, GetProfile, UpdateProfile, ChangePassword, AddReplaceableComponent, RestOccurError, SetLanguage, SetTenant, ModifyOpenedTabCount, SetRemember } from './lib/actions';
export { DynamicLayoutComponent, ReplaceableRouteContainerComponent, RouterOutletComponent } from './lib/components';
export {} from './lib/constants';
export { CoreModule } from './lib/core.module';
export { AutofocusDirective, EllipsisDirective, ForDirective, FormSubmitDirective, InitDirective, PermissionDirective, ReplaceableTemplateDirective, VisibilityDirective } from './lib/directives';
export {} from './lib/enums';
export { AuthGuard, PermissionGuard } from './lib/guards';
export { ApiInterceptor } from './lib/interceptors';
export { ListResultDto, PagedResultDto, LimitedResultRequestDto, PagedResultRequestDto, PagedAndSortedResultRequestDto, EntityDto, CreationAuditedEntityDto, CreationAuditedEntityWithUserDto, AuditedEntityDto, AuditedEntityWithUserDto, FullAuditedEntityDto, FullAuditedEntityWithUserDto, Rest } from './lib/models';
export { LocalizationPipe, MockLocalizationPipe, SortPipe } from './lib/pipes';
export { NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin } from './lib/plugins';
export { ApplicationConfigurationService, AuthService, ConfigStateService, ContentProjectionService, DomInsertionService, LazyLoadService, LocalizationService, ProfileStateService, ProfileService, RestService, SessionStateService, trackBy, trackByDeep, TrackByService } from './lib/services';
export { ReplaceableComponentsState, ConfigState, ProfileState, SessionState } from './lib/states';
export { ContainerStrategy, ClearContainerStrategy, InsertIntoContainerStrategy, CONTAINER_STRATEGY, ContentSecurityStrategy, LooseContentSecurityStrategy, NoContentSecurityStrategy, CONTENT_SECURITY_STRATEGY, ContentStrategy, StyleContentStrategy, ScriptContentStrategy, CONTENT_STRATEGY, ContextStrategy, NoContextStrategy, ComponentContextStrategy, TemplateContextStrategy, CONTEXT_STRATEGY, CrossOriginStrategy, CROSS_ORIGIN_STRATEGY, DomStrategy, DOM_STRATEGY, LoadingStrategy, ScriptLoadingStrategy, StyleLoadingStrategy, LOADING_STRATEGY, ProjectionStrategy, ComponentProjectionStrategy, RootComponentProjectionStrategy, TemplateProjectionStrategy, PROJECTION_STRATEGY } from './lib/strategies';
export { CORE_OPTIONS } from './lib/tokens';
export { noop, isUndefinedOrEmptyString, mapEnumToOptions, uuid, generateHash, generatePassword, getInitialData, localeInitializer, registerLocale, fromLazyLoad, isNumber, organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes, takeUntilDestroy } from './lib/utils';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbInB1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EseUNBQWMsaUJBQWlCLENBQUM7QUFDaEMsd1BBQWMsZUFBZSxDQUFDO0FBQzlCLGtHQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGVBQWMsaUJBQWlCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLGdMQUFjLGtCQUFrQixDQUFDO0FBQ2pDLGVBQWMsYUFBYSxDQUFDO0FBQzVCLDJDQUFjLGNBQWMsQ0FBQztBQUM3QiwrQkFBYyxvQkFBb0IsQ0FBQztBQUNuQywyU0FBYyxjQUFjLENBQUM7QUFDN0IsaUVBQWMsYUFBYSxDQUFDO0FBQzVCLHlEQUFjLGVBQWUsQ0FBQztBQUM5QixtUkFBYyxnQkFBZ0IsQ0FBQztBQUMvQixvRkFBYyxjQUFjLENBQUM7QUFDN0IsMnFCQUFjLGtCQUFrQixDQUFDO0FBQ2pDLDZCQUFjLGNBQWMsQ0FBQztBQUM3QiwyUUFBYyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2YgY29yZVxyXG4gKi9cclxuXHJcbi8vIGV4cG9ydCAqIGZyb20gJy4vbGliL2hhbmRsZXJzJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvYWJzdHJhY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvYWN0aW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb25zdGFudHMnO1xyXG5leHBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9saWIvY29yZS5tb2R1bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9kaXJlY3RpdmVzJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvZW51bXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9ndWFyZHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9pbnRlcmNlcHRvcnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9waXBlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3BsdWdpbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3N0YXRlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL3N0cmF0ZWdpZXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi90b2tlbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi91dGlscyc7XHJcbiJdfQ==