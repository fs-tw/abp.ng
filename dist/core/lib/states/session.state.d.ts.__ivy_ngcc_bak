import { Actions, StateContext, Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { ModifyOpenedTabCount, SetLanguage, SetRemember, SetTenant } from '../actions/session.actions';
import { ABP, Session } from '../models';
export declare class SessionState {
    private oAuthService;
    private store;
    private actions;
    static getLanguage({ language }: Session.State): string;
    static getTenant({ tenant }: Session.State): ABP.BasicItem;
    static getSessionDetail({ sessionDetail }: Session.State): Session.SessionDetail;
    constructor(oAuthService: OAuthService, store: Store, actions: Actions);
    setLanguage({ patchState, dispatch }: StateContext<Session.State>, { payload, dispatchAppConfiguration }: SetLanguage): import("rxjs").Observable<void>;
    setTenant({ patchState }: StateContext<Session.State>, { payload }: SetTenant): void;
    setRemember({ getState, patchState }: StateContext<Session.State>, { payload: remember }: SetRemember): void;
    modifyOpenedTabCount({ getState, patchState }: StateContext<Session.State>, { operation }: ModifyOpenedTabCount): void;
}
