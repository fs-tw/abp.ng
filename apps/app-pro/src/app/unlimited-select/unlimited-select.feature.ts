import {
    patchState,
    signalStoreFeature,
    withMethods,
    withState,
  } from '@ngrx/signals';
  import {
    Observable,
    Unsubscribable,
    pipe,
    switchMap,
    tap,
  } from 'rxjs';
  import {
    inject,
    runInInjectionContext,
    Injector,
    Signal,
  } from '@angular/core';
  import { rxMethod } from '@ngrx/signals/rxjs-interop';
  type RxMethodInput<Input> = Input | Observable<Input> | Signal<Input>;
  type RxMethod<Input> = ((input: RxMethodInput<Input>) => Unsubscribable) &
    Unsubscribable;
  
  export type SelectedState<E> = {
    items: E[];
    selectedId: string;
  };
  
  export type SelectMethods = {
    get: RxMethod<string>;
  };
  
  export function withSelectedService<E>(options: {
    get: (id: string) => Observable<E>;
  }) {
    return signalStoreFeature(
      withState({
        items: [],
        selectedId: '',
      } as SelectedState<E>),
      withMethods((store, injector = inject(Injector)) => {
        return {
          get: rxMethod<string>(
            pipe(
              switchMap((id) => {
                return runInInjectionContext(injector, () => {
                  return options.get(id).pipe(
                    tap((data) => {
                      patchState(store, { selectedId: id, items: [data] });
                    })
                  );
                });
              })
            )
          ),
        };
      })
    );
  }
  