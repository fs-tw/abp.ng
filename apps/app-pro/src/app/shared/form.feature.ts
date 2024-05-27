/* eslint-disable @typescript-eslint/ban-types */
import {
  SignalStoreFeature,
  patchState,
  signalStoreFeature,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Observable, filter, mergeMap, of, pipe, tap } from 'rxjs';
import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Form, FormGroup, RxMethod } from './types';
import { FormBuilder } from '@angular/forms';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { ToasterService } from '@abp/ng.theme.shared';

export function capitalize(str: string): string {
  return str ? str[0].toUpperCase() + str.substring(1) : str;
}

export function getFormKeys(options: { collection?: string }) {
  const savingKey = options.collection
    ? `${options.collection}Saving`
    : 'saving';

  const getFormKey = options.collection
    ? `get${capitalize(options.collection)}Form`
    : 'getForm';
  const fillFormKey = options.collection
    ? `fill${capitalize(options.collection)}Form`
    : 'fillForm';
  const sendFormKey = options.collection
    ? `send${capitalize(options.collection)}Form`
    : 'sendForm';

  return { savingKey, getFormKey, fillFormKey, sendFormKey };
}

export type NamedFormState<Collection extends string> = {
  [K in Collection as `${K}Saving`]: boolean;
};

export type NamedFormMethods<C, Collection extends string> = {
  [K in Collection as `get${Capitalize<K>}Form`]: () => Form<C>;
} & {
  [K in Collection as `fill${Capitalize<K>}Form`]: RxMethod<void>;
} & {
  [K in Collection as `send${Capitalize<K>}Form`]: RxMethod<void>;
};
export type FormState = {
  saving: boolean;
};

export type FormMethods<C> = {
  getForm: () => Form<C>;
  fillForm: RxMethod<void>;
  sendForm: RxMethod<void>;
};
export function withForm<I, R, C, Collection extends string>(options: {
  collection: Collection;
  formGroup: FormGroup<C>;
  fill?(input: I | void): Observable<R>;
  send(input: C): Observable<void>;
}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: NamedFormState<Collection>;
    signals: {};
    methods: NamedFormMethods<C, Collection>;
  }
>;
export function withForm<I, R, U>(options: {
  formGroup: FormGroup<U>;
  fill?(input: I | void): Observable<R>;
  send(input: U): Observable<void>;
}): SignalStoreFeature<
  {
    state: {};
    signals: {};
    methods: {};
  },
  {
    state: FormState;
    signals: {};
    methods: FormMethods<R>;
  }
>;

export function withForm<I, R, C, Collection extends string>(options: {
  collection?: Collection;
  formGroup: FormGroup<C>;
  fill?(input: I | void): Observable<R>;
  send(input: C): Observable<void>;
}) {
  const { fill, send, formGroup } = options;
  const { savingKey, getFormKey, fillFormKey, sendFormKey } =
    getFormKeys(options);
  return signalStoreFeature(
    withState(() => {
      return {
        [savingKey]: false,
      };
    }),
    withMethods((store: any, injector = inject(Injector)) => {
      const formBuilder = injector.get(FormBuilder);
      const toasterService = injector.get(ToasterService);
      const form = formBuilder.group(formGroup.controls);

      const _fetch = () =>
        (fill ?? of)().pipe(tap((datas) => form.patchValue(datas as any)));

      const _send = (input: C) => {
        return send(input).pipe(
          tapResponse({
            next: () => {
              //patchState(store, { [savingKey]: true });
            },
            error: (e) => {
              patchState(store, { [savingKey]: false });
            },
          })
        );
      };

      return {
        [getFormKey]: () => {
          return form as unknown as Form<R>;
        },
        [fillFormKey]: rxMethod<void>(
          pipe(mergeMap(() => runInInjectionContext(injector, () => _fetch())))
        ),
        [sendFormKey]: rxMethod<void>(
          pipe(
            filter(() => form.valid && !store[savingKey]()),
            tap(() => patchState(store, { [savingKey]: true })),
            mergeMap(() =>
              runInInjectionContext(injector, () => _send(form.value as C))
            ),
            mergeMap(() => runInInjectionContext(injector, () => _fetch())),
            tap(() => toasterService.success('AbpUi::SavingWithThreeDot')),
            tap(() => patchState(store, { [savingKey]: false }))
          )
        ),
      };
    }),
    withHooks({
      onInit(store) {
        store[fillFormKey]();
      },
    })
  );
}
