import { Injectable } from '@angular/core';
import { ABP, AbstractNavTreeService } from '@abp/ng.core';

@Injectable({ providedIn: 'root' })
export class DemoTabsService extends AbstractNavTreeService<ABP.Tab> {}
