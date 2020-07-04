import { Injectable, Optional, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';
import { RouterStateSnapshot } from '@angular/router';
import { ConfigStateService, ABP } from '@abp/ng.core';
import { Router as FSRouter } from '../models/router'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeCoreService {
  constructor(
    private store: Store,
    private configStateService: ConfigStateService,
    @Optional() @Inject('ThemeCoreOptions') private options: any
  ) { }
  
  dispatchAddOrPatchRoute(route: ABP.Route): Observable<any> {
    return of();
    // let actions: Array<any> = [];

    // if (!this.configStateService.getRoute(null, route.name)) {
    //   actions.push(new AddRoute(route));
    // }
    // actions = actions.concat(convertTreeToList(route).map(r => new PatchRouteByName(r.name, r)));
    // return this.store.dispatch(actions);
    // function convertTreeToList(root): ABP.FullRoute[] {
    //   var stack: ABP.FullRoute[] = [], array: ABP.FullRoute[] = [];
    //   stack.push(root);
    //   while (stack.length !== 0) {
    //     var node = stack.pop();
    //     if (!!node.children && node.children.length > 0) {
    //       array.push(node);
    //     }
    //     if (!!node.children) {
    //       for (var i = node.children.length - 1; i >= 0; i--) {
    //         stack.push(node.children[i] as ABP.FullRoute);
    //       }
    //     }
    //   }
    //   return array;
    // }
  }
  createProcessor(state: RouterStateSnapshot): FSRouter.Processor {
    let routes = this.configStateService.getOne('routes');
    return new FSRouter.Processor(routes, state);
  }

  getParamKeyValue(paramKey: string, routerState: RouterStateSnapshot = null) {
    if (!routerState)
      routerState = this.store.selectSnapshot(RouterState.state);
    let targetRouter = searchTree(routerState.root, paramKey);
    if (targetRouter) return targetRouter.params[paramKey];
    return null;
    function searchTree(element, property) {
      if (property in element.params) {
        return element;
      } else if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
          result = searchTree(element.children[i], property);
        }
        return result;
      }
      return null;
    }
  }
}
