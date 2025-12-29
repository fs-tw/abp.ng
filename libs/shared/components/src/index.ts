// ng-zorro Configuration
export {
  NG_ZORRO_PROVIDERS,
  createNzProviders,
  SHARED_ICON_NAMES,
  type SharedIconType
} from './ng-zorro.config';

// Directives
export * from './extensions-identifier.directive';

// Services
export { TabsService, RoutesService as TabRoutesService, type TabsState } from './tabs.service';
export * from './provider_collection';

// ============================================================
// UI Components (require optional peer dependencies)
// ============================================================

// Extensible Table (requires @swimlane/ngx-datatable, @ng-bootstrap/ng-bootstrap)
export { ExtensibleTableComponent } from './extensible-table';

// NZ Extensible Form (requires ng-zorro-antd)
export {
  NzExtensibleFormComponent,
  NzExtensibleFormPropComponent
} from './nz-extensible-form';

// Entity Selector (requires ng-zorro-antd)
export {
  EntitySelectorComponent,
  type EntitySelectorItem
} from './entity-selector';

// Split View (requires ng-zorro-antd, @angular/cdk)
export {
  SplitViewComponent,
  SplitViewFilterDirective,
  SplitViewItemDirective,
  SplitViewDetailDirective,
  SplitViewActionsDirective,
  createListItemConfig,
  type SplitViewListItemConfig,
  type DetailHeaderConfig,
  type SplitViewOptions,
  type SplitViewListItemData
} from './split-view';

// Tab Title (requires ng-zorro-antd)
export { TabTitleComponent } from './tab-title';

// Detail Tabset (requires ng-zorro-antd)
export {
  DetailTabComponent,
  DetailTabsetComponent,
  type BooleanGetter
} from './detail-tabset';
