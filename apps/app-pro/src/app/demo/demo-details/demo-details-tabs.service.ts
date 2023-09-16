import { Injectable, Injector, computed, effect, signal } from '@angular/core';
import { ABP, AbstractNavTreeService } from '@abp/ng.core';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface DemoDetailsTabsState {
  tabs: ABP.Tab[];
  selectedTab: ABP.Tab | null;
}

@Injectable({ providedIn: 'root' })
export class DemoDetailsTabsService extends AbstractNavTreeService<ABP.Tab> {
  private state = signal<DemoDetailsTabsState>({ selectedTab: null, tabs: [] });

  selectedTab = computed(() => this.state().selectedTab);

  selectedTab$ = new Subject<ABP.Tab | null>();

  constructor(injector: Injector) {
    super(injector);

    this.selectedTab$.pipe(takeUntilDestroyed()).subscribe((tab) => {
      this.state.update((state) => ({
        ...state,
        selectedTab: tab,
      }));
    });

    this.visible$.pipe(takeUntilDestroyed()).subscribe((tabs) => {
      if (this.selectedTab() === null && tabs.length > 0) {
        this.selectedTab$.next(tabs[0]);
      }
    });

    effect(() => {
      // console.log('state changed:', this.state());
    });
  }
}
