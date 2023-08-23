import { Injectable } from '@angular/core';
import { InternalStore } from '@abp/ng.core';
import { IdentityUserDto } from '@volo/abp.ng.identity/proxy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoStateService {
  private store = new InternalStore({} as DemoState);
  state$ = this.store.sliceState((state) => state);

  getSelected$(): Observable<IdentityUserDto | undefined> {
    return this.store.sliceState((state) => state.selectedUser);
  }

  getSelected(): IdentityUserDto | undefined {
    return this.store.state.selectedUser;
  }
  setSelected(selectedUser: IdentityUserDto | undefined) {
    this.store.patch({ selectedUser });
  }
}

export interface DemoState {
  selectedUser: IdentityUserDto | undefined;
}
