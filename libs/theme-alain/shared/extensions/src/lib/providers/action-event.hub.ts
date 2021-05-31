import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionData } from '@abp/ng.theme.shared/extensions';
import { Contributors } from '../utils/defaults.util';
export class ActionEvent<R> {
  method: string;
  data?: ActionData<R>;
}
type Actions$<R> = {
  [key: string]: Subject<ActionEvent<R>>;
};
type ContributorStore<R> = {
  [key: string]: Contributors<R>;
};

@Injectable({
  providedIn: 'root',
})
export class ActionEventHub<R> {  
  private actions$: Actions$<R> = {} as any;
  private contributorStore: ContributorStore<R> = {} as any;
  constructor() {}

  AddContributors(key: string, contributors: Contributors<R>) {
    if (!this.contributorStore[key]) {
      this.contributorStore[key] = contributors;
    }
  }

  GetContributors(key: string) {
    return this.contributorStore[key];
  }

  Register(key: string) {
    if (!this.actions$[key]) {
      this.actions$[key] = new Subject<ActionEvent<R>>();
    }
    return this.actions$[key];
  }

  Notify(key: string, data?: ActionEvent<R>) {
    this.actions$[key].next(data);
  }
}
