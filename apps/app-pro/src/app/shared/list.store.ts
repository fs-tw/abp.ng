import { ListService, PagedResultDto } from "@abp/ng.core";
import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { GetIdentityRoleListInput, IdentityRoleDto, IdentityRoleService } from "@volo/abp.ng.identity/proxy";
import { pipe, switchMap, tap } from "rxjs";
import { rxMethod } from '@ngrx/signals/rxjs-interop';

type ListState<EntityDto, GetListInput> = {
    datas: PagedResultDto<EntityDto>;
    isLoading: boolean;
    filter: GetListInput;
};

const initialState: ListState<IdentityRoleDto, GetIdentityRoleListInput> = {
    datas: { items: [], totalCount: 0 },
    isLoading: false,
    filter: { maxResultCount: 10, skipCount: 0, sorting: '', filter: '' },
};

export const ListStore = signalStore(
    withState(initialState),
    withMethods((store, list: ListService<GetIdentityRoleListInput> = inject(ListService<GetIdentityRoleListInput>), service = inject(IdentityRoleService)) => ({
        init: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true })),
                switchMap(() => {
                    return list.hookToQuery((query) => {
                        patchState(store, { isLoading: true });
                        return service.getList({
                            ...store.filter(),
                            ...query
                        }).pipe(
                            tap(datas => {
                                patchState(store, { datas });
                            })
                        );
                    });
                }),
                tap(() => patchState(store, { isLoading: false })),
            )
        ),

        list(): void {
            // 👇 Updating state using the `patchState` function.
            //patchState(store, (state) => ({ filter: { ...state.filter, query } }));
        }
    }))

);