import {
  EmptyFeatureResult,
  SignalStoreFeature,
  WritableStateSource,
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { inject, Injector, runInInjectionContext, computed } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of, forkJoin, catchError, tap, finalize } from 'rxjs';
import { map } from 'rxjs/operators';

// ========== Helper Functions ==========

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

function getDetailCacheKeys(options: { collection: string }) {
  const collection = options.collection;
  const cap = capitalize(collection);

  return {
    // State keys
    detailCacheKey: `${collection}DetailCache`,
    detailLoadingKey: `${collection}DetailLoading`,
    detailErrorsKey: `${collection}DetailErrors`,

    // Method keys
    getDetailKey: `get${cap}Detail`,
    getDetailObservableKey: `get${cap}Detail$`,
    loadDetailKey: `load${cap}Detail`,
    preloadDetailsKey: `preload${cap}Details`,
    clearCacheKey: `clear${cap}DetailCache`,
    removeFromCacheKey: `remove${cap}DetailFromCache`,
    isLoadingKey: `is${cap}DetailLoading`,
    getErrorKey: `get${cap}DetailError`,
  };
}

// ========== Type Definitions ==========

export type DetailCacheState<D, Collection extends string> = {
  [K in Collection as `${K}DetailCache`]: Map<string, D>;
} & {
  [K in Collection as `${K}DetailLoading`]: Set<string>;
} & {
  [K in Collection as `${K}DetailErrors`]: Map<string, Error>;
};

export type DetailCacheMethods<D, Collection extends string> = {
  [K in Collection as `get${Capitalize<K>}Detail`]: (id: string) => D | null;
} & {
  [K in Collection as `get${Capitalize<K>}Detail$`]: (
    id: string
  ) => Observable<D | null>;
} & {
  [K in Collection as `load${Capitalize<K>}Detail`]: (
    id: string
  ) => Observable<D>;
} & {
  [K in Collection as `preload${Capitalize<K>}Details`]: (
    ids: string[]
  ) => Observable<void>;
} & {
  [K in Collection as `clear${Capitalize<K>}DetailCache`]: () => void;
} & {
  [K in Collection as `remove${Capitalize<K>}DetailFromCache`]: (
    id: string
  ) => void;
} & {
  [K in Collection as `is${Capitalize<K>}DetailLoading`]: (
    id: string
  ) => boolean;
} & {
  [K in Collection as `get${Capitalize<K>}DetailError`]: (
    id: string
  ) => Error | null;
};

// ========== Configuration Options ==========

export interface DetailCacheOptions<D> {
  collection: string;
  getDetail: (id: string) => Observable<D>;
  cacheStrategy?: 'lru' | 'all';
  maxCacheSize?: number;
}

// ========== Feature Implementation ==========

export function withDetailCache<D, Collection extends string>(
  options: DetailCacheOptions<D> & { collection: Collection }
): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: DetailCacheState<D, Collection>;
    props: object;
    methods: DetailCacheMethods<D, Collection>;
  }
> {
  const { getDetail, cacheStrategy = 'all', maxCacheSize = 100 } = options;

  const keys = getDetailCacheKeys({ collection: options.collection });

  return signalStoreFeature(
    // ========== State Definition ==========
    withState({
      [keys.detailCacheKey]: new Map<string, D>(),
      [keys.detailLoadingKey]: new Set<string>(),
      [keys.detailErrorsKey]: new Map<string, Error>(),
    }),

    // ========== Methods Definition ==========
    withMethods(
      (
        store: Record<string, any> & WritableStateSource<object>,
        injector = inject(Injector)
      ) => {
        // LRU cache eviction strategy
        const evictIfNeeded = () => {
          if (cacheStrategy !== 'lru') return;

          const cache = store[keys.detailCacheKey]() as Map<string, D>;
          if (cache.size >= maxCacheSize) {
            // Remove earliest item
            const firstKey = cache.keys().next().value;
            if (firstKey) {
              const newCache = new Map(cache);
              newCache.delete(firstKey);
              patchState(store, { [keys.detailCacheKey]: newCache });
            }
          }
        };

        // Internal load function (can be called by other methods)
        const loadDetail = (id: string): Observable<D> => {
          // Check cache
          const cache = store[keys.detailCacheKey]() as Map<string, D>;
          if (cache.has(id)) {
            const cachedData = cache.get(id);
            if (cachedData !== undefined) {
              return of(cachedData);
            }
          }

          // Check if already loading
          const loading = store[keys.detailLoadingKey]() as Set<string>;
          if (loading.has(id)) {
            // Already loading, return empty observable
            // TODO: Improve to wait for loading completion and return result
            return of(null as unknown as D);
          }

          // Start loading
          const newLoading = new Set(loading);
          newLoading.add(id);
          patchState(store, { [keys.detailLoadingKey]: newLoading });

          return runInInjectionContext(injector, () => getDetail(id)).pipe(
            tap((data) => {
              evictIfNeeded();

              // Update cache
              const cache = store[keys.detailCacheKey]() as Map<string, D>;
              const newCache = new Map(cache);
              newCache.set(id, data);

              // Clear error
              const errors = store[keys.detailErrorsKey]() as Map<
                string,
                Error
              >;
              const newErrors = new Map(errors);
              newErrors.delete(id);

              patchState(store, {
                [keys.detailCacheKey]: newCache,
                [keys.detailErrorsKey]: newErrors,
              });
            }),
            catchError((error: Error) => {
              // Record error
              const errors = store[keys.detailErrorsKey]() as Map<
                string,
                Error
              >;
              const newErrors = new Map(errors);
              newErrors.set(id, error);

              patchState(store, {
                [keys.detailErrorsKey]: newErrors,
              });

              throw error;
            }),
            finalize(() => {
              // Remove loading state
              const loading = store[keys.detailLoadingKey]() as Set<string>;
              const newLoading = new Set(loading);
              newLoading.delete(id);
              patchState(store, { [keys.detailLoadingKey]: newLoading });
            })
          );
        };

        return {
          // 1. Get cached detail data (sync)
          [keys.getDetailKey]: (id: string): D | null => {
            const cache = store[keys.detailCacheKey]() as Map<string, D>;
            return cache.get(id) ?? null;
          },

          // 2. Get cached detail data (Observable, watch changes)
          [keys.getDetailObservableKey]: (id: string): Observable<D | null> => {
            // Create a computed signal to track cache value for specific id
            const detailSignal = computed(() => {
              const cache = store[keys.detailCacheKey]() as Map<string, D>;
              return cache.get(id) ?? null;
            });

            // Convert to Observable, emits new value when cache changes
            return toObservable(detailSignal, { injector });
          },

          // 3. Load detail data (async)
          [keys.loadDetailKey]: (id: string): Observable<D> => {
            return loadDetail(id);
          },

          // 4. Batch preload
          [keys.preloadDetailsKey]: (ids: string[]): Observable<void> => {
            const cache = store[keys.detailCacheKey]() as Map<string, D>;
            const uncachedIds = ids.filter((id) => !cache.has(id));

            if (uncachedIds.length === 0) {
              return of(void 0);
            }

            const loadObservables = uncachedIds.map((id) =>
              loadDetail(id).pipe(
                catchError(() => of(null as unknown as D)) // Ignore individual load errors
              )
            );

            return forkJoin(loadObservables).pipe(
              map(() => void 0)
            ) as Observable<void>;
          },

          // 5. Clear cache
          [keys.clearCacheKey]: (): void => {
            patchState(store, {
              [keys.detailCacheKey]: new Map<string, D>(),
              [keys.detailErrorsKey]: new Map<string, Error>(),
            });
          },

          // 6. Remove single cache entry
          [keys.removeFromCacheKey]: (id: string): void => {
            const cache = store[keys.detailCacheKey]() as Map<string, D>;
            const newCache = new Map(cache);
            newCache.delete(id);

            const errors = store[keys.detailErrorsKey]() as Map<string, Error>;
            const newErrors = new Map(errors);
            newErrors.delete(id);

            patchState(store, {
              [keys.detailCacheKey]: newCache,
              [keys.detailErrorsKey]: newErrors,
            });
          },

          // 7. Check if loading
          [keys.isLoadingKey]: (id: string): boolean => {
            const loading = store[keys.detailLoadingKey]() as Set<string>;
            return loading.has(id);
          },

          // 8. Get error info
          [keys.getErrorKey]: (id: string): Error | null => {
            const errors = store[keys.detailErrorsKey]() as Map<string, Error>;
            return errors.get(id) ?? null;
          },
        };
      }
    )
  ) as unknown as SignalStoreFeature<
    EmptyFeatureResult,
    {
      state: DetailCacheState<D, Collection>;
      props: object;
      methods: DetailCacheMethods<D, Collection>;
    }
  >;
}
