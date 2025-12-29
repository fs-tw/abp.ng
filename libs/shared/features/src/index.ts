// Types
export * from './types';

// Features - export specific items to avoid naming conflicts
export { withCallState, setLoading, setLoaded, setError, type CallState } from './call-state.feature';
export { withDefaults, type Defaults } from './defaults.feature';
export {
  withEditModal,
  setEditModal,
  getEditModalKeys,
  type EditModal,
  type EditModalState,
  type EditModalMethods,
  type EditModalSignals,
  type NamedEditModalState,
  type NamedEditModalMethods,
  type NamedEditModalSignals
} from './edit-modal.feature';
export {
  withForm,
  getFormKeys,
  type FormState,
  type FormMethods,
  type NamedFormState,
  type NamedFormMethods
} from './form.feature';
export {
  withListService,
  getListServiceKeys,
  type OmitQuery,
  type ListServiceState,
  type ListServiceMethods,
  type NamedListServiceState,
  type NamedListServiceMethods
} from './list.feature';
export { withQuery } from './query.feature';
export {
  withRoutes,
  getRoutesKeys,
  RoutesService,
  type Routes,
  type RoutesState,
  type RoutesMethods,
  type NamedRoutesState,
  type NamedRoutesMethods
} from './routes.feature';
export {
  withSelect,
  getSelectKeys,
  type SelectState,
  type SelectMethods,
  type NamedSelectState,
  type NamedSelectMethods
} from './select.feature';
export {
  withSelected,
  getSelectedKeys,
  type Selected,
  type SelectedState,
  type SelectedMethods,
  type NamedSelectedState,
  type NamedSelectedMethods
} from './selected.feature';

// Infinite Scroll Feature (requires @angular/cdk)
export {
  withInfiniteScroll,
  getInfiniteScrollKeys,
  ListServiceDataSource,
  type InfiniteScrollState,
  type InfiniteScrollStateUpdate,
  type NamedInfiniteScrollState,
  type NamedInfiniteScrollSignals,
  type NamedInfiniteScrollMethods
} from './infinite-scroll.feature';

// Detail Cache Feature
export {
  withDetailCache,
  type DetailCacheState,
  type DetailCacheMethods,
  type DetailCacheOptions
} from './detail-cache.feature';
