import {
  EmptyFeatureResult,
  SignalStoreFeature,
  patchState,
  signalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

import { effect } from '@angular/core';
import { Observable, asapScheduler } from 'rxjs';
import { getSelectedKeys } from './selected.feature';
import { getListServiceKeys } from './list.feature';
import { PagedResultDto } from '@abp/ng.core';

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getSelectKeys(options: { collection?: string }) {
  const itemsKey = options.collection ? `${options.collection}Items` : 'items';

  const updateItemsKey = options.collection
    ? `update${capitalize(options.collection)}Items`
    : 'items';
  const clearItemsKey = options.collection
    ? `clear${capitalize(options.collection)}Items`
    : 'items';
  const loadMoreKey = options.collection
    ? `loadMore${capitalize(options.collection)}`
    : 'loadMore';
  const searchKey = options.collection
    ? `search${capitalize(options.collection)}`
    : 'search';

  return { itemsKey, updateItemsKey, clearItemsKey, loadMoreKey, searchKey };
}

export type NamedSelectState<E, Collection extends string> = {
  [K in Collection as `${K}Items`]: E[];
};

export type NamedSelectMethods<Collection extends string> = {
  [K in Collection as `update${Capitalize<K>}Items`]: () => void;
} & {
  [K in Collection as `clear${Capitalize<K>}Items`]: () => void;
} & {
  [K in Collection as `loadMore${Capitalize<K>}`]: () => void;
} & {
  [K in Collection as `search${Capitalize<K>}`]: (filter: string) => void;
};

export type SelectState<E> = {
  items: E[];
};

export type SelectMethods = {
  updateItems: () => void;
  clearItems: () => void;
  loadMore: () => void;
  search: (filter: string) => void;
};

export function withSelect<E, I, Collection extends string>(options: {
  collection: Collection;
  filterColumn: keyof I;
  sortKey: keyof E;
  sortOrder: 'asc' | 'desc';
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: NamedSelectState<E, Collection>;
    props: object;
    methods: NamedSelectMethods<Collection>;
  }
>;
export function withSelect<E, I>(options: {
  filterColumn: keyof E;
  sortKey: keyof E;
  sortOrder: 'asc' | 'desc';
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: SelectState<E>;
    props: object;
    methods: SelectMethods;
  }
>;
export function withSelect<E, I, Collection extends string>(options: {
  collection?: Collection;
  filterColumn: keyof E;
  sortKey: keyof E;
  sortOrder: 'asc' | 'desc';
  list: (getListInput: I) => Observable<PagedResultDto<E>>;
}) {
  const { collection, filterColumn, sortKey, sortOrder } = options;

  const { selectedKey } = getSelectedKeys(options);
  const {
    datasKey,
    loadingKey,
    getListServiceKey,
    queryKey,
    updateQueryKey,
    hookQueryKey,
  } = getListServiceKeys(options);
  const { itemsKey, updateItemsKey, clearItemsKey, loadMoreKey, searchKey } =
    getSelectKeys(options);

  return signalStoreFeature(
    withState({
      [itemsKey]: [] as E[],
    }),
    withMethods((store: any) => {
      return {
        [updateItemsKey]() {
          const selectedEntity = store[selectedKey].entity();
          const selectedItems = selectedEntity ? [selectedEntity] : [];

          const allItems = [
            ...store[itemsKey](),
            ...(store[datasKey]().items || []),
          ];
          const allItemIds = allItems.map((item) => item.id);

          const filteredSelectedItems = selectedItems.filter(
            (item) => !allItemIds.includes(item.id)
          );

          const items = [...filteredSelectedItems, ...allItems];
          patchState(store, { [itemsKey]: items });
        },
        [clearItemsKey]() {
          patchState(store, { [itemsKey]: [] });
        },
        [loadMoreKey]() {
          if (store[loadingKey]()) {
            return;
          }
          patchState(store, { [loadingKey]: true });
          const list = store[getListServiceKey]();
          const totalCount = store[datasKey]().totalCount || 0;
          const nextSkipCount = (list.page + 1) * list.maxResultCount;
          if (nextSkipCount < totalCount) list.page += 1;
        },
        [searchKey](filter: string) {
          if (store[queryKey]()[filterColumn] || '' !== filter) {
            patchState(store, { [itemsKey]: [] });
            store[updateQueryKey]({ [filterColumn]: filter });
          }
        },
      };
    }),
    withHooks({
      onInit(store: any) {
        store[getListServiceKey]().sortKey = sortKey;
        store[getListServiceKey]().sortOrder = sortOrder;
        store[getListServiceKey]().maxResultCount = 10;
        store[hookQueryKey]();
        effect(() => {
          const datas = store[datasKey]().items;
          asapScheduler.schedule(() => store[updateItemsKey]());
        });
      },
    })
  );
}
