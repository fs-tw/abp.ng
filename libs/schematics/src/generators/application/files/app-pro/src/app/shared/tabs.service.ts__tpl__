import { Injectable, Injector, computed } from '@angular/core';
import { ABP, AbstractNavTreeService } from '@abp/ng.core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { patchState, signalState } from '@ngrx/signals';

export type TabsState = {
  tabs: ABP.Tab[];
  selectedTab: ABP.Tab | null;
}
class NavTreeService extends AbstractNavTreeService<ABP.Tab> { }

@Injectable()
export class TabsService {
  private navTreeService: NavTreeService;

  private state = signalState<TabsState>({ tabs: [], selectedTab: null });

  tabs = computed(() => this.state().tabs);

  selectedTab = computed(() => this.state().selectedTab);

  constructor(injector: Injector) {
    this.navTreeService = new NavTreeService(injector);

    this.navTreeService.visible$.pipe(takeUntilDestroyed()).subscribe((tabs) => {
      patchState(this.state, { tabs });

      if (this.selectedTab() === null && tabs.length > 0) {
        this.select(tabs[0]);
      } else {
        this.select(null);
      }
    });
  }

  select(tab: ABP.Tab | null) {
    patchState(this.state, {
      selectedTab: tab
    });
  }

  add(tabs: ABP.Tab[]) {
    this.navTreeService.add(tabs);

  }
}

@Injectable()
export class RoutesService extends AbstractNavTreeService<ABP.Route> {

}
