/* eslint-disable @typescript-eslint/ban-types */
import { EXTENSIONS_IDENTIFIER, FormPropData, generateFormFromProps } from '@abp/ng.components/extensible';
import { Injector, Signal, computed, inject, runInInjectionContext } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
  PartialStateUpdater,
  SignalStoreFeature,
  StateSignal,
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { Observable, finalize, of, pipe, switchMap, tap } from 'rxjs';
import { getListServiceKeys } from './list.feature';
import { RxMethod } from './types';

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getEditModalKeys(options: { collection?: string }) {
  const editModalKey = options.collection ? `${options.collection}EditModal` : 'editModal';

  const updateEditModalKey = options.collection ? `update${capitalize(options.collection)}EditModal` : 'updateEditModal';
  const saveEditModalKey = options.collection ? `save${capitalize(options.collection)}EditModal` : 'saveEditModal';
  const fetchSelectedKey = options.collection ? `fetch${capitalize(options.collection)}Selected` : 'fetchSelected';
  const openEditModalKey = options.collection ? `open${capitalize(options.collection)}EditModal` : 'openEditModal';

  const formKey = options.collection ? `${options.collection}Form` : 'form';

  return { editModalKey, updateEditModalKey, saveEditModalKey, fetchSelectedKey, openEditModalKey, formKey };
}

export type EditModal<E> =
  {
    visible: boolean,
    busy: boolean
    selectedId: string | null,
    selected: E | null
  }

export type NamedEditModalState<E, Collection extends string> =
  {
    [K in Collection as `${K}EditModal`]: EditModal<E>;
  }

export type NamedEditModalSignals<Collection extends string> =
  {
    [K in Collection as `${K}Form`]: Signal<UntypedFormGroup>;
  }

export type NamedEditModalMethods<E, Collection extends string> =
  {
    [K in Collection as `update${Capitalize<K>}EditModal`]: (partialEditModal: Partial<EditModal<E>>) => void;
  } & {
    [K in Collection as `save${Capitalize<K>}EditModal`]: RxMethod<UntypedFormGroup>;
  } & {
    [K in Collection as `fetch${Capitalize<K>}Selected`]: RxMethod<void>;
  } & {
    [K in Collection as `open${Capitalize<K>}EditModal`]: (id: string | null) => void;
  }

export type EditModalState<E> =
  {
    editModal: EditModal<E>;
  }
export type EditModalSignals =
  {
    Form: Signal<UntypedFormGroup>;
  }
export type EditModalMethods<E> =
  {
    updateEditModal: (partialEditModal: Partial<EditModal<E>>) => void;
    saveEditModal: RxMethod<UntypedFormGroup>;
    fetchSelected: RxMethod<void>;
    openEditModal: (id: string | null) => void;
  }
export function withEditModal<E, U, C, Collection extends string>(
  options: {
    collection: Collection,
    extensionsIdentifier?: string
    get: (id: string) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    create: (data: C) => Observable<E>,
  }
): SignalStoreFeature<
  {
    state: {},
    signals: {},
    methods: {},
  },
  {
    state: NamedEditModalState<E, Collection>
    signals: NamedEditModalSignals<Collection>
    methods: NamedEditModalMethods<E, Collection>
  }
>;
export function withEditModal<E, U, C>(
  options: {
    extensionsIdentifier?: string
    get: (id: string) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    create: (data: C) => Observable<E>,
  }
): SignalStoreFeature<
  {
    state: {},
    signals: {},
    methods: {},
  },
  {
    state: EditModalState<E>
    signals: EditModalSignals
    methods: EditModalMethods<E>
  }
>;
export function withEditModal<E, U, C, Collection extends string>(
  options: {
    collection?: Collection,
    extensionsIdentifier?: string
    get: (id: string) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    create: (data: C) => Observable<E>,
  }
) {
  const { get, create, update, extensionsIdentifier } = options;
  const { editModalKey, updateEditModalKey, saveEditModalKey, fetchSelectedKey, openEditModalKey, formKey } = getEditModalKeys(options);

  return signalStoreFeature(
    withState({
      [editModalKey]: {
        visible: false,
        busy: false,
        selectedId: null,
        selected: null
      } as EditModal<E>
    }),
    withMethods((store: Record<string, any> & StateSignal<object>, injector = inject(Injector)) => {
      const _fetchSelected = rxMethod<void>(
        pipe(
          switchMap(() => {
            if (store[editModalKey]().selectedId === null) {
              patchState(store, setEditModal(options, { selected: {} as E }));
              return of(null);
            }
            else {
              return runInInjectionContext(injector, () => get(store[editModalKey]().selectedId || '').pipe(
                tap(data => {
                  patchState(store, setEditModal(options, { selected: data }));
                })));

            }

          })
        )
      );
      return {
        [updateEditModalKey]: (partialEditModal: Partial<EditModal<E>>) => {
          patchState(store, setEditModal(options, partialEditModal));
        },
        [saveEditModalKey]: rxMethod<UntypedFormGroup>(
          pipe(
            switchMap((form: UntypedFormGroup) => {
              const { getListServiceKey } = getListServiceKeys(options);
              return runInInjectionContext(injector, () => {
                if (!form.valid) return of();
                patchState(store, setEditModal(options, { busy: true }));
                const id = store[editModalKey]().selectedId;

                return (id
                  ? update(id, {
                    ...store[editModalKey]().selected,
                    ...form.value,
                  })
                  : create(form.value)
                )
                  .pipe(
                    tapResponse({
                      next: () => {
                        patchState(store, setEditModal(options, { visible: false }));
                        store[getListServiceKey]().get();                        
                      },
                      error: console.error,
                    }),
                    finalize(() => {
                      patchState(store, setEditModal(options, { busy: false }));
                    }));
              });

            })
          )
        ),
        [fetchSelectedKey]: _fetchSelected,
        [openEditModalKey]: (id: string | null) => {
          patchState(store, setEditModal(options, { selectedId: id, visible: true }));
          _fetchSelected();
        }
      }
    }),
    withComputed((store: any, injector = inject(Injector)) => {
      const getInjector = (id: string | null) => id === null ? injector : Injector.create({
        providers: [{ provide: EXTENSIONS_IDENTIFIER, useValue: id }],
        parent: injector,
      });
      return {
        [formKey]: computed(() => {
          const form = generateFormFromProps(new FormPropData(getInjector(extensionsIdentifier || null), store[editModalKey].selected()));
          return form;
        })
      }
    }),
    // withHooks({
    //   onInit(store: Record<string, any> & StateSignal<object>, injector = inject(Injector)) {
    //     //store[fetchSelectedKey](store[editModalKey].selectedId);
    //   },

    // })
  );
}

export function setEditModal<E, Collection extends string>(
  options: {
    collection: Collection
  },
  partialEditModal: Partial<EditModal<E>>
): PartialStateUpdater<NamedEditModalState<E, Collection>>;
export function setEditModal<E>(
  options: {
  },
  partialEditModal: Partial<EditModal<E>>
): PartialStateUpdater<EditModalState<E>>;
export function setEditModal<E, Collection extends string>(
  options: {
    collection?: Collection
  },
  partialEditModal: Partial<EditModal<E>>
): PartialStateUpdater<NamedEditModalState<E, Collection> | EditModalState<E>> {
  const { editModalKey } = getEditModalKeys(options);
  return (state: any) => {
    const newEditModal = {
      ...state[editModalKey],
      ...partialEditModal
    };
    return { [editModalKey]: newEditModal };
  };
}

