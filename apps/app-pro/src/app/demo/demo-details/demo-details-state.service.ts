import { Injectable, computed, effect, signal } from '@angular/core';
import { IdentityUserDto } from '@volo/abp.ng.identity/proxy';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface DemoState {
  selectedRole: IdentityUserDto | null;
}

@Injectable({
  providedIn: 'root',
})
export class DemoDetailsStateService {
  private state = signal<DemoState>({ selectedRole: null });

  selectedData = computed(() => this.state().selectedRole);

  selectedData$ = new Subject<IdentityUserDto | null>();

  constructor() {
    this.selectedData$.pipe(takeUntilDestroyed()).subscribe((role) => {
      this.state.update((state) => ({
        ...state,
        selectedRole: role,
      }));
    });

    effect(() => {
      // console.log('state changed:', this.state());
    });
  }
}
