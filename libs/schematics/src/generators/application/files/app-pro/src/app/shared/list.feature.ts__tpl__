/* eslint-disable @typescript-eslint/ban-types */
import {
  SignalStoreFeature,
  StateSignal,
  patchState,
  signalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { Observable, pipe, switchMap, tap } from 'rxjs';
import { inject, runInInjectionContext, Injector } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { RxMethod } from './types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type OmitQuery<Q> = Omit<
  Q,
  'filter' | 'sorting' | 'skipCount' | 'maxResultCount'
>;

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getListServiceKeys(options: { collection?: string }) {
  const queryKey = options.collection ? `${options.collection}Query` : 'query';
  const listInputKey = options.collection
    ? `${options.collection}ListInput`
    : 'listInput';
  const datasKey = options.collection ? `${options.collection}Datas` : 'datas';
  const loadingKey = options.collection
    ? `${options.collection}Loading`
    : 'loading';

  const hookQueryKey = options.collection
    ? `hook${capitalize(options.collection)}Query`
    : 'hookQuery';
  const getListServiceKey = options.collection
    ? `get${capitalize(options.collection)}ListService`
    : 'getListService';
  const updateQueryKey = options.collection
    ? `update${capitalize(options.collection)}Query`
    : 'updateQuery';

  return {
    queryKey,
    listInputKey,
    datasKey,
    hookQueryKey,
    getListServiceKey,
    updateQueryKey,
    loadingKey,
  };
}

export type NamedListServiceState<E, I, Collection extends string> = {
  [K in Collection as `${K}Query`]: I;
} & {
  [K in Collection as `${K}ListInput`]: OmitQuery<I>;
} & {
  [K in Collection as `${K}Datas`]: PagedResultDto<E>;
} & {
  [K in Collection as `${K}Loading`]: boolean;
};

export type NamedListServiceMethods<I, Collection extends string> = {
  [K in Collection as `hook${Capitalize<K>}Query`]: RxMethod<void>;
} & {
  [K in Collection as `get${Capitalize<K>}ListService`]: () => ListService;
} & {
  [K in Collection as `update${Capitalize<K>}Query`]: (
    partialQuery: Partial<I>
  ) => void;
};

export type ListServiceState<E, I> = {
  query: OmitQuery<I>;
  listInput: I;
  datas: PagedResultDto<E>;
  loading: boolean;
};

export type ListServiceMethods<I> = {
  hookQuery: RxMethod<void>;
  getListService: () => ListService;
  updateQuery: (partialQuery: Partial<I>) => void;
};

export function withListService<E, I, Collection extends string>(options: {
  collection: Collection;
  ignoreHook?: boolean;
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: NamedListServiceState<E, I, Collection>;
    signals: {};
    methods: NamedListServiceMethods<I, Collection>;
  }
>;
export function withListService<E, I>(options: {
  ignoreHook?: boolean;
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: ListServiceState<E, I>;
    signals: {};
    methods: ListServiceMethods<I>;
  }
>;
export function withListService<E, I, Collection extends string>(options: {
  collection?: Collection;
  ignoreHook?: boolean;
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}) {
  const { list, ignoreHook: ignoreHook } = options;
  const {
    queryKey,
    listInputKey,
    datasKey,
    hookQueryKey,
    getListServiceKey,
    updateQueryKey,
    loadingKey,
  } = getListServiceKeys(options);

  return signalStoreFeature(
    withState({
      [queryKey]: {} as OmitQuery<I>,
      [listInputKey]: {} as I,
      [datasKey]: { items: [], totalCount: 0 } as PagedResultDto<E>,
      [loadingKey]: false,
    }),
    withMethods(
      (
        store: Record<string, any> & StateSignal<object>,
        injector = inject(Injector)
      ) => {
        const listService = new ListService(injector);
        return {
          [hookQueryKey]: rxMethod<void>(
            pipe(
              switchMap(() => {
                listService.isLoading$
                  .pipe(
                    takeUntilDestroyed(),
                    tap((x) => patchState(store, { [loadingKey]: x }))
                  )
                  .subscribe();
                // listService.isLoading$.subscribe(x=>{
                //     patchState(store, { isLoading: x });
                // })
                return listService.hookToQuery((query) => {
                  const listInput = {
                    ...store[queryKey](),
                    ...query,
                  };
                  patchState(store, { [listInputKey]: listInput });
                  return runInInjectionContext(injector, () =>
                    list(listInput).pipe(
                      tap((datas) => {
                        patchState(store, { [datasKey]: datas });
                      })
                    )
                  );
                });
              })
            )
          ),
          [getListServiceKey]: () => listService,
          [updateQueryKey]: (partialQuery: Partial<I>) => {
            const newQuery = {
              ...store[queryKey](),
              ...partialQuery,
            };
            patchState(store, { [queryKey]: newQuery });
            listService.page = 0;
            listService.get();
          },
        };
      }
    ),
    withHooks({
      onInit(
        store: Record<string, any> & StateSignal<object>,
        injector = inject(Injector)
      ) {
        if (!ignoreHook) store[hookQueryKey]();
      },
    })
  );
}
