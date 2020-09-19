import { RouterStateSnapshot } from '@angular/router';
import { ABP, TreeNode } from '@abp/ng.core';
export namespace Router {
  export interface State {
    profile: Profile;
    processor: Processor;
  }

  export interface Profile {
    [key: string]: any;
  }
  export class RouteModel {
    parent: RouteModel;
    route: TreeNode<ABP.Route>;
  }

  export class Processor {
    get currentUrl(): string {
      var current_url = this.routerState.url.split("?")[0];
      return decodeURI(current_url);
    }
    get flattedRoutes(): RouteModel[] {
      return this.routes
        .map(r => this.convertTreeToList(r))
        .reduce((a, b) => { return a.concat(b); });
    }
    get currentRoute(): RouteModel {
      let result = this.flattedRoutes.find(rr => {
        let target = this.formatParams(rr.route.path);
        return target == this.currentUrl
      });
      return result;

    }
    get profilesOfRoute(): any {
      let result = [];
      let node = this.currentRoute;
      if (!node) return [];
      pushNode(node);
      while (!!node.parent) {
        node = node.parent;
        pushNode(node);
      }
      return result;

      function pushNode(node) {
        if (!!node && !!node.route && !!node.route['profile']) {
          result.push(node.route);
        }
      }
    }
    get currentProfileOfRoute(): any {
      let result = {};
      let stack = this.profilesOfRoute;
      while (stack.length !== 0) {
        let node = stack.pop();
        result = { ...result, ...node.profile };
      }
      return result;
    }

    constructor(
      private routes: ABP.Route[],
      public routerState: RouterStateSnapshot
    ) {

    }

    public formatParams(text: string) {
      if (!text) return '';
      let regexp = /:([^(:\/\-\ )]+)/g;
      let result = text;
      let match = text.match(regexp);
      if (!!match) {
        text.match(regexp).forEach(i => {
          let parameter = i.substr(1);
          let itemId = this.getParamKeyValue(parameter);
          result = result.replace(":" + parameter, itemId);
        });
      }
      return result;
    }

    private convertTreeToList(root): RouteModel[] {
      var stack: RouteModel[] = [], array: RouteModel[] = [], hashMap = {};
      stack.push({ parent: null, route: root } as RouteModel);

      while (stack.length !== 0) {
        var node = stack.pop();
        this.visitNode(node, hashMap, array);
        if (!!node.route.children) {
          for (var i = node.route.children.length - 1; i >= 0; i--) {
            stack.push({ parent: node, route: node.route.children[i] } as RouteModel);
          }
        }
      }

      return array;
    }

    private visitNode(node: RouteModel, hashMap, array) {
      if (!hashMap[node.route.path]) {
        hashMap[node.route.path] = true;
        array.push(node);
      }
    }

    public getParamKeyValue(paramKey: string, routerState: RouterStateSnapshot = null) {
      let usedRouterState = routerState ? routerState : this.routerState;

      let targetRouter = this.searchTree(usedRouterState.root, paramKey);
      if (targetRouter) return targetRouter.params[paramKey];
      return null;
    }
    private searchTree(element, property) {
      if (property in element.params) {
        return element;
      } else if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
          result = this.searchTree(element.children[i], property);
        }
        return result;
      }
      return null;
    }
  }
}
