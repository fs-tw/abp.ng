import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';

export type OmitQuery<Q> = Omit<
  Q,
  'filter' | 'sorting' | 'skipCount' | 'maxResultCount'
>;

export function withQuery<Query>(
  initialQuery: OmitQuery<Query> = {} as OmitQuery<Query>
) {
  return signalStoreFeature(
    withState({ query: initialQuery }),
    withMethods((store) => {
      return {
        updateQuery: (partialQuery: Partial<Query>) => {
          const newQuery = {
            ...store.query(),
            ...partialQuery,
          };
          patchState(store, { query: newQuery });
        },
        test: () => {
          console.log('test');
        },
      };
    })
  );
}
