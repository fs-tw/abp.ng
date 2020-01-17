import { StateContext, Store, Actions } from '@ngxs/store';
import { SetLanguage, SetTenant, ModifyOpenedTabCount, SetRemember } from '../actions/session.actions';
import { ABP, Session } from '../models';
import { LocalizationService } from '../services/localization.service';
import { OAuthService } from 'angular-oauth2-oidc';
export declare class SessionState {
    private localizationService;
    private oAuthService;
    private store;
    private actions;
    static getLanguage({ language }: Session.State): string;
    static getTenant({ tenant }: Session.State): ABP.BasicItem;
    static getSessionDetail({ sessionDetail }: Session.State): Session.SessionDetail;
    constructor(localizationService: LocalizationService, oAuthService: OAuthService, store: Store, actions: Actions);
    setLanguage({ patchState, dispatch }: StateContext<Session.State>, { payload }: SetLanguage): import("rxjs").Observable<void>;
    setTenant({ patchState }: StateContext<Session.State>, { payload }: SetTenant): void;
    setRemember({ getState, patchState }: StateContext<Session.State>, { payload: remember }: SetRemember): void;
    modifyOpenedTabCount({ getState, patchState }: StateContext<Session.State>, { operation }: ModifyOpenedTabCount): void;
}
