import { ABP } from '@abp/ng.core';

export namespace FS {
  export interface Route extends ABP.Route {
    profile?: any;
  }
}