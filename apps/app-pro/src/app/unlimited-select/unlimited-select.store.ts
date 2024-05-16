import { signalStore } from "@ngrx/signals";
import { withSelectedService } from "./unlimited-select.feature";
import { inject } from "@angular/core";
import { IdentityRoleService } from "@volo/abp.ng.identity/proxy";

export const SelectedStore = signalStore(
  withSelectedService({
    get: (id: string) => inject(IdentityRoleService).get(id),
  })
);