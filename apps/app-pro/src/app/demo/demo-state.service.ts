import { Injectable, computed, effect, signal } from '@angular/core';
import { IdentityUserDto } from '@volo/abp.ng.identity/proxy';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// export interface DemoState {
//   selectedRole: IdentityUserDto | null;
// }

@Injectable({
  providedIn: 'root',
})
export class DemoStateService {
  // private state = signal<DemoState>({ selectedRole: null });

  // selectedRole = computed(() => this.state().selectedRole);

  // selected$ = new Subject<IdentityUserDto | null>();

  constructor() {
    // this.selected$
    //   .pipe(takeUntilDestroyed())
    //   .subscribe((role) => {
    //     this.state.update((state) => ({
    //       ...state,
    //       selectedRole: role
    //     }));
    //   });
    // effect(() => {
    //   // console.log('state changed:', this.state());
    // });
  }
}
