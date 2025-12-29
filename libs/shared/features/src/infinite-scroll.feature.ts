import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { BehaviorSubject, Observable, of, Subject, Subscription, switchMap } from 'rxjs';
import { inject, Injector, runInInjectionContext, Signal, computed } from '@angular/core';
import {
  EmptyFeatureResult,
  SignalStoreFeature,
  WritableStateSource,
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

// ===== Helper Functions =====

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getInfiniteScrollKeys(options: { collection?: string }) {
  const dataSourceKey = options.collection
    ? `${options.collection}DataSource`
    : 'dataSource';
  const infiniteScrollStateKey = options.collection
    ? `${options.collection}InfiniteScrollState`
    : 'infiniteScrollState';

  const getDataSourceKey = options.collection
    ? `get${capitalize(options.collection)}DataSource`
    : 'getDataSource';
  const getListServiceKey = options.collection
    ? `get${capitalize(options.collection)}ListService`
    : 'getListService';
  const resetDataSourceKey = options.collection
    ? `reset${capitalize(options.collection)}DataSource`
    : 'resetDataSource';
  const updateInfiniteScrollQueryKey = options.collection
    ? `update${capitalize(options.collection)}InfiniteScrollQuery`
    : 'updateInfiniteScrollQuery';

  // Computed signals
  const totalCountKey = options.collection
    ? `${options.collection}TotalCount`
    : 'totalCount';
  const isLoadingKey = options.collection
    ? `${options.collection}IsLoading`
    : 'isLoading';
  const hasMoreKey = options.collection
    ? `${options.collection}HasMore`
    : 'hasMore';
  const dataKey = options.collection
    ? `${options.collection}Data`
    : 'data';

  return {
    dataSourceKey,
    infiniteScrollStateKey,
    getDataSourceKey,
    getListServiceKey,
    resetDataSourceKey,
    updateInfiniteScrollQueryKey,
    totalCountKey,
    isLoadingKey,
    hasMoreKey,
    dataKey,
  };
}

// ===== ListServiceDataSource Class =====

/**
 * ListService-based DataSource for infinite scrolling
 *
 * Used internally by withInfiniteScroll feature
 */
export class ListServiceDataSource<T, I = any> extends DataSource<T> {
  private readonly dataStream = new BehaviorSubject<T[]>([]);
  private readonly subscription = new Subscription();
  private readonly destroy$ = new Subject<void>();
  private fetchedPages = new Set<number>();
  private pendingPages = new Set<number>();

  readonly listService: ListService;
  readonly pageSize: number;
  private readonly injector: Injector;

  private _totalCount = 0;
  private _loading = false;
  private _query: Partial<I> = {};

  // Callbacks for state updates
  private onStateChange?: (state: InfiniteScrollStateUpdate) => void;

  get totalCount(): number {
    return this._totalCount;
  }

  get hasMore(): boolean {
    return this.dataStream.value.filter((x) => x != null).length < this._totalCount;
  }

  get loading(): boolean {
    return this._loading;
  }

  get data(): T[] {
    return this.dataStream.value.filter((x) => x != null);
  }

  get length(): number {
    return this.data.length;
  }

  constructor(
    injector: Injector,
    private readonly fetchFn: (input: I) => Observable<PagedResultDto<T>>,
    options?: { pageSize?: number }
  ) {
    super();
    this.injector = injector;
    this.listService = new ListService();
    this.pageSize = options?.pageSize ?? 20;

    // Hook listService.get() to trigger dataSource.reset()
    this.listService.hookToQuery(() => {
      this.reset();
      // Return a dummy observable - the actual data is managed by dataSource
      return this.dataStream.pipe(
        switchMap((items) => of({ items, totalCount: this._totalCount }))
      );
    });
  }

  /**
   * Set state change callback (used by feature)
   */
  setStateChangeCallback(callback: (state: InfiniteScrollStateUpdate) => void): void {
    this.onStateChange = callback;
  }

  /**
   * CDK DataSource interface: connect to CollectionViewer
   */
  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const startPage = Math.floor(range.start / this.pageSize);
        const endPage = Math.floor((range.end + this.pageSize - 1) / this.pageSize);

        for (let page = startPage; page <= endPage; page++) {
          this.fetchPage(page);
        }
      })
    );

    this.fetchPage(0);

    return this.dataStream.asObservable();
  }

  /**
   * CDK DataSource interface: disconnect
   */
  disconnect(): void {
    this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Set additional query parameters
   */
  setQuery(query: Partial<I>): void {
    this._query = query;
    this.reset();
  }

  /**
   * Update query parameters (merge with existing)
   */
  updateQuery(partialQuery: Partial<I>): void {
    this._query = { ...this._query, ...partialQuery };
    this.reset();
  }

  /**
   * Reset DataSource and reload
   */
  reset(): void {
    this.fetchedPages.clear();
    this.pendingPages.clear();
    this._totalCount = 0;
    this._loading = false;
    this.dataStream.next([]);
    this.notifyStateChange();
    this.fetchPage(0);
  }

  /**
   * Notify state change
   */
  private notifyStateChange(): void {
    if (this.onStateChange) {
      this.onStateChange({
        totalCount: this._totalCount,
        loading: this._loading,
        hasMore: this.hasMore,
        dataLength: this.data.length,
      });
    }
  }

  /**
   * Load specified page
   */
  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      return;
    }

    // If totalCount is known and page is out of range, skip
    // Note: page 0 always needs to load (initial totalCount is 0)
    if (page > 0 && this._totalCount > 0) {
      const skipCount = page * this.pageSize;
      if (skipCount >= this._totalCount) {
        return;
      }
    }

    if (this._loading) {
      this.pendingPages.add(page);
      return;
    }

    this._loading = true;
    this.fetchedPages.add(page);
    this.pendingPages.delete(page);
    this.notifyStateChange();

    const skipCount = page * this.pageSize;
    const input = {
      ...this._query,
      skipCount,
      maxResultCount: this.pageSize,
      filter: this.listService.filter || undefined,
      sorting: this.listService.sortKey
        ? `${this.listService.sortKey} ${this.listService.sortOrder}`
        : undefined,
    } as I;

    // Use runInInjectionContext to ensure inject() runs in correct context
    runInInjectionContext(this.injector, () => this.fetchFn(input)).subscribe({
      next: (result) => {
        this._totalCount = result.totalCount ?? 0;
        const currentData = [...this.dataStream.value];
        const items = result.items ?? [];

        while (currentData.length < skipCount + items.length) {
          currentData.push(null as unknown as T);
        }

        items.forEach((item, index) => {
          currentData[skipCount + index] = item;
        });

        this.dataStream.next(currentData);
        this._loading = false;
        this.notifyStateChange();

        this.processNextPendingPage();
      },
      error: (err) => {
        console.error(`[DataSource] Error fetching page ${page}`, err);
        this.fetchedPages.delete(page);
        this._loading = false;
        this.notifyStateChange();

        this.processNextPendingPage();
      },
    });
  }

  /**
   * Process next pending page
   */
  private processNextPendingPage(): void {
    // Clear pending pages that are out of range
    if (this._totalCount > 0) {
      const maxPage = Math.ceil(this._totalCount / this.pageSize) - 1;
      this.pendingPages.forEach((page) => {
        if (page > maxPage) {
          this.pendingPages.delete(page);
        }
      });
    }

    if (this.pendingPages.size > 0) {
      const nextPage = Math.min(...this.pendingPages);
      this.pendingPages.delete(nextPage);
      this.fetchPage(nextPage);
    }
  }
}

// ===== Types =====

export interface InfiniteScrollStateUpdate {
  totalCount: number;
  loading: boolean;
  hasMore: boolean;
  dataLength: number;
}

export interface InfiniteScrollState {
  totalCount: number;
  loading: boolean;
  hasMore: boolean;
  dataLength: number;
}

export type NamedInfiniteScrollState<Collection extends string> = {
  [K in Collection as `${K}InfiniteScrollState`]: InfiniteScrollState;
};

export type NamedInfiniteScrollSignals<T, Collection extends string> = {
  [K in Collection as `${K}TotalCount`]: Signal<number>;
} & {
  [K in Collection as `${K}IsLoading`]: Signal<boolean>;
} & {
  [K in Collection as `${K}HasMore`]: Signal<boolean>;
} & {
  [K in Collection as `${K}Data`]: Signal<T[]>;
};

export type NamedInfiniteScrollMethods<T, I, Collection extends string> = {
  [K in Collection as `get${Capitalize<K>}DataSource`]: () => ListServiceDataSource<T, I>;
} & {
  [K in Collection as `get${Capitalize<K>}ListService`]: () => ListService;
} & {
  [K in Collection as `reset${Capitalize<K>}DataSource`]: () => void;
} & {
  [K in Collection as `update${Capitalize<K>}InfiniteScrollQuery`]: (
    partialQuery: Partial<I>
  ) => void;
};

// ===== Feature Implementation =====

export function withInfiniteScroll<T, I, Collection extends string>(options: {
  collection: Collection;
  pageSize?: number;
  list: (input: I) => Observable<PagedResultDto<T>>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: NamedInfiniteScrollState<Collection>;
    props: NamedInfiniteScrollSignals<T, Collection>;
    methods: NamedInfiniteScrollMethods<T, I, Collection>;
  }
>;
export function withInfiniteScroll<T, I>(options: {
  pageSize?: number;
  list: (input: I) => Observable<PagedResultDto<T>>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: { infiniteScrollState: InfiniteScrollState };
    props: {
      totalCount: Signal<number>;
      isLoading: Signal<boolean>;
      hasMore: Signal<boolean>;
      data: Signal<T[]>;
    };
    methods: {
      getDataSource: () => ListServiceDataSource<T, I>;
      getListService: () => ListService;
      resetDataSource: () => void;
      updateInfiniteScrollQuery: (partialQuery: Partial<I>) => void;
    };
  }
>;
export function withInfiniteScroll<T, I, Collection extends string>(options: {
  collection?: Collection;
  pageSize?: number;
  list: (input: I) => Observable<PagedResultDto<T>>;
}) {
  const { list, pageSize = 20 } = options;
  const {
    infiniteScrollStateKey,
    getDataSourceKey,
    getListServiceKey,
    resetDataSourceKey,
    updateInfiniteScrollQueryKey,
    totalCountKey,
    isLoadingKey,
    hasMoreKey,
    dataKey,
  } = getInfiniteScrollKeys(options);

  return signalStoreFeature(
    withState({
      [infiniteScrollStateKey]: {
        totalCount: 0,
        loading: false,
        hasMore: false,
        dataLength: 0,
      } as InfiniteScrollState,
    }),
    withMethods(
      (
        store: Record<string, any> & WritableStateSource<object>,
        injector = inject(Injector)
      ) => {
        // Create DataSource instance
        const dataSource = new ListServiceDataSource<T, I>(injector, list, {
          pageSize,
        });

        // Set state change callback
        dataSource.setStateChangeCallback((state) => {
          patchState(store, {
            [infiniteScrollStateKey]: state,
          });
        });

        return {
          [getDataSourceKey]: () => dataSource,
          [getListServiceKey]: () => dataSource.listService,
          [resetDataSourceKey]: () => {
            dataSource.reset();
          },
          [updateInfiniteScrollQueryKey]: (partialQuery: Partial<I>) => {
            dataSource.updateQuery(partialQuery);
          },
        };
      }
    ),
    withComputed((store: Record<string, any>) => ({
      [totalCountKey]: computed(() => store[infiniteScrollStateKey]().totalCount),
      [isLoadingKey]: computed(() => store[infiniteScrollStateKey]().loading),
      [hasMoreKey]: computed(() => store[infiniteScrollStateKey]().hasMore),
      [dataKey]: computed(() => {
        // Note: This returns an empty array as placeholder
        // The actual data is managed by the DataSource
        // Use getDataSource() to access the real data
        return [];
      }),
    }))
  );
}
