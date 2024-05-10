import { effect, inject } from "@angular/core";
import { signalStore, withHooks, withMethods } from "@ngrx/signals";
import { GetIdentityUsersInput, IdentityUserService } from "@volo/abp.ng.identity/proxy";
import { withCallState } from "../../shared/call-state.feature";
import { withQuery } from "../../shared/query.feature";
import { withListService } from "../../shared/list.feature";

export const UsersStore = signalStore(
    withCallState(),
    withQuery<GetIdentityUsersInput>(),
    withListService((getListInput: GetIdentityUsersInput) => inject(IdentityUserService).getList(getListInput)),
    withMethods(() => ({
    })),

    withHooks({
        onInit(store) {
            effect(() => {
                //store.query().filter
                //console.error('onInit')
            })


        },

    })

);