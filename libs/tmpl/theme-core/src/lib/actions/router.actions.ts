import { Router } from '../models/router/router';

export class UpdateProfile {
  static readonly type = '[Router] UpdateProfile';
  constructor(public payload: Router.Profile) {}
}
export class UpdateProcessor {
  static readonly type = '[Router] UpdateProcessor';
  constructor(public payload: Router.Processor) {}
}
