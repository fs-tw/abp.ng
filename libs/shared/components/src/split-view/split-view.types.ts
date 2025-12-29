// ===== Split View Types =====

/**
 * List item display configuration
 */
export interface SplitViewListItemConfig<T> {
  /** Title resolver */
  title: (item: T) => string;
  /** Subtitle resolver (optional) */
  subtitle?: (item: T) => string;
  /** Badge resolver (optional, return null to hide) */
  badge?: (item: T) => string | null;
  /** Icon resolver (optional) */
  icon?: (item: T) => string;
}

/**
 * Detail Header configuration
 * Only configure title, actions are passed via ng-content
 */
export interface DetailHeaderConfig<T> {
  /** Title resolver */
  title: (item: T) => string;
}

/**
 * Split View configuration options
 */
export interface SplitViewOptions<T> {
  /** List item display configuration */
  listItem: SplitViewListItemConfig<T>;
  /** Item height (default 56px) */
  itemSize?: number;
  /** Left panel width (default 350px) */
  leftPanelWidth?: number;
  /** ID field name (default 'id') */
  idField?: keyof T;
}

/**
 * List item render data
 */
export interface SplitViewListItemData {
  title: string;
  subtitle?: string;
  badge?: string | null;
  icon?: string;
}

/**
 * Helper to create list item config with type inference
 */
export function createListItemConfig<T>(
  config: SplitViewListItemConfig<T>
): SplitViewListItemConfig<T> {
  return config;
}
