import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionData } from '@abp/ng.theme.shared/extensions';
import { Contributors } from '../utils/defaults.util';
export class ActionEvent {
  method: string;
  data?: ActionData<any>;
}
type Actions$ = {
  [key: string]: Subject<ActionEvent>;
};
type ContributorStore = {
  [key: string]: Contributors;
};

@Injectable({
  providedIn: 'root',
})
export class ActionEventHub {
  private actions$: Actions$ = {} as any;
  private contributorStore: ContributorStore = {} as any;
  constructor() {}

  AddContributors(key: string, contributors: Contributors) {
    if (!this.contributorStore[key]) {
      this.contributorStore[key] = contributors;
    }
  }

  GetContributors(key: string) {
    return this.contributorStore[key];
  }

  Register(key: string) {
    if (!this.actions$[key]) {
      this.actions$[key] = new Subject<ActionEvent>();
    }
    return this.actions$[key];
  }

  Notify<T>(key: string, data?: ActionEvent) {
    this.actions$[key].next(data);
  }
}
