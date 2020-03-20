var SessionState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/session.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State, StateContext, Store, NgxsOnInit, Actions, ofActionSuccessful, } from '@ngxs/store';
import { from, fromEvent } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import { SetLanguage, SetTenant, ModifyOpenedTabCount, SetRemember, } from '../actions/session.actions';
import { LocalizationService } from '../services/localization.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
let SessionState = SessionState_1 = class SessionState {
    /**
     * @param {?} localizationService
     * @param {?} oAuthService
     * @param {?} store
     * @param {?} actions
     */
    constructor(localizationService, oAuthService, store, actions) {
        this.localizationService = localizationService;
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            const { sessionDetail } = this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} };
            /** @type {?} */
            const fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                this.oAuthService.logOut();
            }
            this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            }));
        }));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getLanguage({ language }) {
        return language;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getTenant({ tenant }) {
        return tenant;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getSessionDetail({ sessionDetail }) {
        return sessionDetail;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setLanguage({ patchState, dispatch }, { payload }) {
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration()).pipe(switchMap((/**
         * @return {?}
         */
        () => from(this.localizationService.registerLocale(payload)))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    setRemember({ getState, patchState }, { payload: remember }) {
        const { sessionDetail } = getState();
        patchState({
            sessionDetail: Object.assign({}, sessionDetail, { remember }),
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    modifyOpenedTabCount({ getState, patchState }, { operation }) {
        // tslint:disable-next-line: prefer-const
        let _a = getState().sessionDetail || ((/** @type {?} */ ({ openedTabCount: 0 }))), { openedTabCount, lastExitTime } = _a, detail = tslib_1.__rest(_a, ["openedTabCount", "lastExitTime"]);
        if (operation === 'increase') {
            openedTabCount++;
        }
        else if (operation === 'decrease') {
            openedTabCount--;
            lastExitTime = new Date().valueOf();
        }
        if (!openedTabCount || openedTabCount < 0) {
            openedTabCount = 0;
        }
        patchState({
            sessionDetail: Object.assign({ openedTabCount,
                lastExitTime }, detail),
        });
    }
};
SessionState.ctorParameters = () => [
    { type: LocalizationService },
    { type: OAuthService },
    { type: Store },
    { type: Actions }
];
SessionState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SessionState.ctorParameters = () => [
    { type: LocalizationService },
    { type: OAuthService },
    { type: Store },
    { type: Actions }
];
tslib_1.__decorate([
    Action(SetLanguage),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, SetLanguage]),
    tslib_1.__metadata("design:returntype", void 0)
], SessionState.prototype, "setLanguage", null);
tslib_1.__decorate([
    Action(SetTenant),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, SetTenant]),
    tslib_1.__metadata("design:returntype", void 0)
], SessionState.prototype, "setTenant", null);
tslib_1.__decorate([
    Action(SetRemember),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, SetRemember]),
    tslib_1.__metadata("design:returntype", void 0)
], SessionState.prototype, "setRemember", null);
tslib_1.__decorate([
    Action(ModifyOpenedTabCount),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, ModifyOpenedTabCount]),
    tslib_1.__metadata("design:returntype", void 0)
], SessionState.prototype, "modifyOpenedTabCount", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", String)
], SessionState, "getLanguage", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], SessionState, "getTenant", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], SessionState, "getSessionDetail", null);
SessionState = SessionState_1 = tslib_1.__decorate([
    State({
        name: 'SessionState',
        defaults: (/** @type {?} */ ({ sessionDetail: { openedTabCount: 0 } })),
    }),
    tslib_1.__metadata("design:paramtypes", [LocalizationService,
        OAuthService,
        Store,
        Actions])
], SessionState);
export { SessionState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.localizationService;
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.actions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxrQkFBa0IsR0FDbkIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxvQkFBb0IsRUFDcEIsV0FBVyxHQUNaLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFPOUIsWUFBWSwwQkFBWixZQUFZOzs7Ozs7O0lBZ0J2QixZQUNVLG1CQUF3QyxFQUN4QyxZQUEwQixFQUMxQixLQUFZLEVBQ1osT0FBZ0I7UUFIaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUV4QixPQUFPO2FBQ0osSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzth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IEFjdGlvbixcclxuICBTZWxlY3RvcixcclxuICBTdGF0ZSxcclxuICBTdGF0ZUNvbnRleHQsXHJcbiAgU3RvcmUsXHJcbiAgTmd4c09uSW5pdCxcclxuICBBY3Rpb25zLFxyXG4gIG9mQWN0aW9uU3VjY2Vzc2Z1bCxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBTZXRMYW5ndWFnZSxcclxuICBTZXRUZW5hbnQsXHJcbiAgTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgU2V0UmVtZW1iZXIsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAsIFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPFNlc3Npb24uU3RhdGU+KHtcclxuICBuYW1lOiAnU2Vzc2lvblN0YXRlJyxcclxuICBkZWZhdWx0czogeyBzZXNzaW9uRGV0YWlsOiB7IG9wZW5lZFRhYkNvdW50OiAwIH0gfSBhcyBTZXNzaW9uLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldExhbmd1YWdlKHsgbGFuZ3VhZ2UgfTogU2Vzc2lvbi5TdGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnQoeyB0ZW5hbnQgfTogU2Vzc2lvbi5TdGF0ZSk6IEFCUC5CYXNpY0l0ZW0ge1xyXG4gICAgcmV0dXJuIHRlbmFudDtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFNlc3Npb25EZXRhaWwoeyBzZXNzaW9uRGV0YWlsIH06IFNlc3Npb24uU3RhdGUpOiBTZXNzaW9uLlNlc3Npb25EZXRhaWwge1xyXG4gICAgcmV0dXJuIHNlc3Npb25EZXRhaWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uU2VydmljZTogTG9jYWxpemF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucyxcclxuICApIHtcclxuICAgIGFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKEdldEFwcENvbmZpZ3VyYXRpb24pKVxyXG4gICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlKSB8fCB7IHNlc3Npb25EZXRhaWw6IHt9IH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZpdmVNaW51dGVzQmVmb3JlID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgLSA1ICogNjAgKiAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5vcGVuZWRUYWJDb3VudCA9PT0gMCAmJlxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLnJlbWVtYmVyID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgPCBmaXZlTWludXRlc0JlZm9yZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnaW5jcmVhc2UnKSk7XHJcblxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICd1bmxvYWQnKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2RlY3JlYXNlJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0TGFuZ3VhZ2UpXHJcbiAgc2V0TGFuZ3VhZ2UoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRMYW5ndWFnZSkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIGxhbmd1YWdlOiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiBmcm9tKHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5yZWdpc3RlckxvY2FsZShwYXlsb2FkKSkpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0VGVuYW50KVxyXG4gIHNldFRlbmFudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0VGVuYW50KSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgdGVuYW50OiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFJlbWVtYmVyKVxyXG4gIHNldFJlbWVtYmVyKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQ6IHJlbWVtYmVyIH06IFNldFJlbWVtYmVyLFxyXG4gICkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgLi4uc2Vzc2lvbkRldGFpbCxcclxuICAgICAgICByZW1lbWJlcixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihNb2RpZnlPcGVuZWRUYWJDb3VudClcclxuICBtb2RpZnlPcGVuZWRUYWJDb3VudChcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBvcGVyYXRpb24gfTogTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgbGV0IHsgb3BlbmVkVGFiQ291bnQsIGxhc3RFeGl0VGltZSwgLi4uZGV0YWlsIH0gPVxyXG4gICAgICBnZXRTdGF0ZSgpLnNlc3Npb25EZXRhaWwgfHwgKHsgb3BlbmVkVGFiQ291bnQ6IDAgfSBhcyBTZXNzaW9uLlNlc3Npb25EZXRhaWwpO1xyXG5cclxuICAgIGlmIChvcGVyYXRpb24gPT09ICdpbmNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQrKztcclxuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVjcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50LS07XHJcbiAgICAgIGxhc3RFeGl0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3BlbmVkVGFiQ291bnQgfHwgb3BlbmVkVGFiQ291bnQgPCAwKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIG9wZW5lZFRhYkNvdW50LFxyXG4gICAgICAgIGxhc3RFeGl0VGltZSxcclxuICAgICAgICAuLi5kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19