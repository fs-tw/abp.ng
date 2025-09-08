import { Injector, inject, runInInjectionContext } from '@angular/core';
import {
  EmptyFeatureResult,
  SignalStoreFeature,
  WritableStateSource,
  patchState,
  signalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, of, pipe, switchMap, tap } from 'rxjs';

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getSelectedKeys(options: { collection?: string }) {
  const selectedKey = options.collection
    ? `${options.collection}Selected`
    : 'selected';

  const updateSelectedKey = options.collection
    ? `update${capitalize(options.collection)}Selected`
    : 'updateSelected';

  return { selectedKey, updateSelectedKey };
}

export type Selected<E> = {
  id: string | null;
  entity: E | null;
};

export type NamedSelectedState<E, Collection extends string> = {
  [K in Collection as `${K}Selected`]: Selected<E>;
};

export type NamedSelectedMethods<E, Collection extends string> = {
  [K in Collection as `update${Capitalize<K>}Selected`]: (
    partialSelected: Partial<Selected<E>>
  ) => void;
};

export type SelectedState<E> = {
  selected: Selected<E>;
};

export type SelectedMethods<E> = {
  updateSelected: (partialSelected: Partial<Selected<E>>) => void;
};

export function withSelected<E, Collection extends string>(options: {
  collection: Collection;
  get: (id: string) => Observable<E>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: NamedSelectedState<E, Collection>;
    props: object;
    methods: NamedSelectedMethods<E, Collection>;
  }
>;
export function withSelected<E>(options: {
  get: (id: string) => Observable<E>;
}): SignalStoreFeature<
  EmptyFeatureResult,
  {
    state: SelectedState<E>;
    props: object;
    methods: SelectedMethods<E>;
  }
>;
export function withSelected<E, Collection extends string>(options: {
  collection?: Collection;
  get: (id: string) => Observable<E>;
}) {
  const { get } = options;
  const { selectedKey, updateSelectedKey } = getSelectedKeys(options);
  return signalStoreFeature(
    withState({
      [selectedKey]: {
        id: '',
        entity: null,
      } as Selected<E>,
    }),
    withMethods((store: Record<string, any> & WritableStateSource<object>) => {
      return {
        [updateSelectedKey]: (partialSelected: Partial<Selected<E>>) => {
          const newSelected = {
            ...store[selectedKey](),
            ...partialSelected,
          };
          patchState(store, { [selectedKey]: newSelected });
        },
      };
    }),
    withHooks({
      onInit(
        store: Record<string, any> & WritableStateSource<object>,
        injector = inject(Injector)
      ) {
        const { selectedKey, updateSelectedKey } = getSelectedKeys(options);
        const hookSelectedId = rxMethod<void>(
          pipe(
            switchMap(() => {
              const id = store[selectedKey]().id || '';
              if (id === '') {
                store[updateSelectedKey]({ entity: null });
                return of(null);
              } else {
                return runInInjectionContext(injector, () =>
                  get(id).pipe(
                    tap((data) => {
                      store[updateSelectedKey]({ entity: data });
                    })
                  )
                );
              }
            })
          )
        );

        hookSelectedId(store[selectedKey].id);
      },
    })
  );
}
