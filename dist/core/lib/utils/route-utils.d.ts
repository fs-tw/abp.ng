import { Router } from '@angular/router';
import { ABP } from '../models/common';
import { RoutesService } from '../services/routes.service';
import { TreeNode } from './tree-utils';
export declare function findRoute(routes: RoutesService, path: string): TreeNode<ABP.Route>;
export declare function getRoutePath(router: Router): string;
