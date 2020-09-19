import { Injectable } from '@angular/core';
import { FS } from '../models/common';
import { AbstractNavTreeService, RoutesService } from '@abp/ng.core';

@Injectable({ providedIn: 'root' })
export class WrapRoutesService {

  constructor(private routesService: RoutesService) {

  }
  get Proxy():AbstractNavTreeService<FS.Route>{
    return this.routesService as AbstractNavTreeService<FS.Route>;
  }
}

