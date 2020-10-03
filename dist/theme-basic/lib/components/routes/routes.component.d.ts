import { ABP, RoutesService, TreeNode } from '@abp/ng.core';
import { ElementRef, QueryList, Renderer2, TrackByFunction } from '@angular/core';
export declare class RoutesComponent {
    readonly routes: RoutesService;
    protected renderer: Renderer2;
    smallScreen: boolean;
    childrenContainers: QueryList<ElementRef<HTMLDivElement>>;
    trackByFn: TrackByFunction<TreeNode<ABP.Route>>;
    constructor(routes: RoutesService, renderer: Renderer2);
    isDropdown(node: TreeNode<ABP.Route>): boolean;
    closeDropdown(): void;
}
