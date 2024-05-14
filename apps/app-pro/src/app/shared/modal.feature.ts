import { Injector, inject, runInInjectionContext } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable, finalize, of, pipe, switchMap, tap } from 'rxjs';

export type Options<E, U, C> =
  {
    get: (id: string) => Observable<E>,
    update: (id: string, data: U) => Observable<E>,
    create: (data: C) => Observable<E>,
  }

export type ModalState<E> =
  {
    visible: boolean,
    busy: boolean
    selectedId: string | null,
    selected: E | null
  }

export function withModal<E, U, C>(
  options: Options<E, U, C>
) {
  const { get, create, update } = options;
  return signalStoreFeature(
    withState<{ modal: ModalState<E> }>({
      modal:
      {
        visible: false,
        busy: false,
        selectedId: null,
        selected: null
      }
    }),
    withMethods((store) => {
      return {
        updateModal: (partialModal: Partial<ModalState<E>>) => {
          const newModal = {
            ...store.modal(),
            ...partialModal
          };
          patchState(store, { modal: newModal });
        },

      }
    }),
    withMethods((store, injector = inject(Injector)) => {
      return {
        save: rxMethod<UntypedFormGroup>(
          pipe(
            switchMap((form: UntypedFormGroup) => {
              return runInInjectionContext(injector, () => {
                if (!form.valid) return of();
                store.updateModal({ busy: true });

                const id = store.modal().selectedId;

                return (id
                  ? update(id, {
                    ...store.modal().selected,
                    ...form.value,
                  })
                  : create(form.value)
                )
                  .pipe(
                    tap(() => {
                      //this.roleListService.get();
                      store.updateModal({ visible: false });
                    }),
                    finalize(() => {
                      store.updateModal({ busy: false });
                    }));
              });

            })
          )
        ),
      };
    }),
    withHooks({
      onInit(store, injector = inject(Injector)) {
        const hookSelectedId = rxMethod<void>(
          pipe(
            switchMap(() => {
              if (store.modal().selectedId === undefined) {
                store.updateModal({ selected: undefined });
                return of(undefined);
              }
              else {
                return runInInjectionContext(injector, () => get(store.modal().selectedId || '').pipe(
                  tap(data => {
                    store.updateModal({ selected: data });
                  })));

              }

            })
          )
        );

        hookSelectedId(store.modal.selectedId);
        //store.form();

      },

    })
  );
}
