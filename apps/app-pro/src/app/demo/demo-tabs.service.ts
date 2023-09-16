import { Injectable, Injector, computed, effect, signal } from '@angular/core';
import { ABP, AbstractNavTreeService } from '@abp/ng.core';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// export interface DemoTabsState {
//     selectedTab: ABP.Tab | null;
// }

@Injectable({ providedIn: 'root' })
export class DemoTabsService extends AbstractNavTreeService<ABP.Tab> {
  // private state = signal<DemoTabsState>({ selectedTab: null });

  //selectedTab = computed(() => this.state().selectedTab);

  //selected$ = new Subject<string | null>();

  constructor(injector: Injector) {
    super(injector);
    // this.selected$
    //     .pipe(takeUntilDestroyed())
    //     .subscribe((tabName) => {
    //         this.state.update((state) => ({
    //             ...state,
    //             selectedTab: this.flat.find(x => x.name === tabName) ?? null
    //         }));
    //     });

    effect(() => {
      // console.log('state changed:', this.state());
    });
  }
}
