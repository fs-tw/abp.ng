import { Router } from '@angular/router';
import { ABP } from '../models/common';
import { RoutesService } from '../services/routes.service';
import { TreeNode } from './tree-utils';
import { NgZone } from '@angular/core';
export declare function findRoute(routes: RoutesService, path: string): TreeNode<ABP.Route>;
export declare function getRoutePath(router: Router, url?: string): string;
export declare function reloadRoute(router: Router, ngZone: NgZone): void;
