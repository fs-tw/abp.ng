import { ABP, RoutesService, TreeNode } from '@abp/ng.core';
import { TrackByFunction } from '@angular/core';
export declare class RoutesComponent {
    readonly routes: RoutesService;
    smallScreen: boolean;
    trackByFn: TrackByFunction<TreeNode<ABP.Route>>;
    constructor(routes: RoutesService);
    isDropdown(node: TreeNode<ABP.Route>): boolean;
}
