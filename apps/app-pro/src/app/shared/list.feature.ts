import { patchState, signalStoreFeature, type, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { CallState, setError, setLoaded, setLoading } from "./call-state.feature";
import { ListService, PagedResultDto } from "@abp/ng.core";
import { Observable, pipe, switchMap, tap } from "rxjs";
import { effect, inject, runInInjectionContext, Injector } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { OmitQuery } from "./query.feature";


export function withListService<E, I>(
    getList: (getListInput: I) => Observable<PagedResultDto<E>>
) {
    return signalStoreFeature(
        {
            state: type<{ callState: CallState, query: OmitQuery<I> }>()
        },
        withState({
            datas: { items: [], totalCount: 0 } as PagedResultDto<E>,
            getListInput: {} as I
        }),
        withMethods((store, injector = inject(Injector)) => {
            const list = new ListService(injector);
            return {
                hookToQuery: rxMethod<void>(
                    pipe(
                        tap(() => patchState(store, setLoading())),
                        switchMap(() => {

                            return list.hookToQuery((query) => {
                                patchState(store, setLoading());
                                const getListInput = {
                                    ...store.query(),
                                    ...query
                                }
                                patchState(store, { getListInput });
                                return runInInjectionContext(injector, () => getList(getListInput).pipe(
                                    tap(datas => {
                                        patchState(store, { datas });
                                    })
                                ))
                            });
                        }),
                        tap({
                            next: () => patchState(store, setLoaded()),
                            error: (error) => patchState(store, setError(error.message)),
                        }),
                    )
                ),
                listService: () => list,
            };
        }),
        withHooks({
            onInit(store) {
                store.hookToQuery();
                effect(() => {
                    const query = store.query();
                    store.listService().get();
                })


            },

        })
    );
}