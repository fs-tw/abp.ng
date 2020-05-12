import { TrackByFunction, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ABP } from '@abp/ng.core';
export declare class RoutesComponent {
    private renderer;
    routes$: Observable<ABP.FullRoute[]>;
    smallScreen: boolean;
    isDropdownChildDynamic: boolean;
    readonly visibleRoutes$: Observable<ABP.FullRoute[]>;
    trackByFn: TrackByFunction<ABP.FullRoute>;
    constructor(renderer: Renderer2);
    openChange(event: boolean, childrenContainer: HTMLDivElement): void;
}
