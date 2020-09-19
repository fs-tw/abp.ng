import { Injectable } from '@angular/core';
import { RestService, PagedResultDto, SessionState } from '@abp/ng.core';
import { Store } from '@ngxs/store';
export class LoginDto {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
  //tenanId: string;
}


@Injectable()
export class LoginService {

  constructor(
    private restService: RestService,
    private store: Store,
  ) {

  }


  login(body: LoginDto) {
    const tenant = this.store.selectSnapshot(SessionState.getTenant);
    return this.restService.request(
      {
        url: '/api/token/authenticate',
        method: 'POST',
        body,
        headers: { ...(tenant && tenant.id && { __tenant: tenant.id }) }
      });
  }

}




// {
//   "userNameOrEmailAddress": "string",
//   "password": "string",
//   "rememberClient": true,
//   "tenanId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }