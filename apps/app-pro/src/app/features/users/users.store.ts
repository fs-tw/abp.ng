import { effect, inject } from "@angular/core";
import { signalStore, withHooks } from "@ngrx/signals";
import { GetIdentityRoleListInput, IdentityRoleCreateDto, IdentityRoleDto, IdentityRoleService, IdentityRoleUpdateDto } from "@volo/abp.ng.identity/proxy";
import { withListService } from "../../shared/list.feature";
import { withModal } from "../../shared/modal.feature";
import { Observable } from "rxjs";
import { PagedResultDto } from "@abp/ng.core";

// type IdentityRoleServiceMethods<E> = {
//     getList: (getListInput: GetIdentityRoleListInput) => Observable<PagedResultDto<E>>;
//     get: (id: string) => Observable<E>;
//     create: (data: IdentityRoleCreateDto) => Observable<E>;
//     update: (id: string, data: IdentityRoleUpdateDto) => Observable<E>;
// };

// export function identityRoleServiceWraper(service: IdentityRoleService): IdentityRoleServiceMethods<IdentityRoleDto> {
//     return {
//         getList: (getListInput: GetIdentityRoleListInput) => service.getList(getListInput),
//         get: (id: string) => service.get(id),
//         create: (data: IdentityRoleCreateDto) => service.create(data),
//         update: (id: string, data: IdentityRoleUpdateDto) => service.update(id, data),
//     };

// }

export const UsersStore = signalStore(
    withListService({
        collection: 'role',
        list: (getListInput: GetIdentityRoleListInput) => inject(IdentityRoleService).getList(getListInput)
    }),
    withModal({
        get: (id: string) => inject(IdentityRoleService).get(id),
        create: (data: IdentityRoleCreateDto) => inject(IdentityRoleService).create(data),
        update: (id: string, data: IdentityRoleUpdateDto) => inject(IdentityRoleService).update(id, data),
    }),
    withHooks({
        onInit(store) {
            effect(() => {
                //console.error('onInit')
            })


        },

    })

);