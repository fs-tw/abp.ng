import { addAbpRoutes, eLayoutType, RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IdentityConfigService {
  constructor(private router: Router, private restService: RestService) {
    addAbpRoutes([{
      name: 'Identity',
      path: 'identity',
      iconClass: 'fa fa-folder',
      children: [
        {
          path: 'sample', name: 'Sample', iconClass: 'fa fa-university', order: 1,
          children: []
        },
      ]
    }]);
  }
}
