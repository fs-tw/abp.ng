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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxrQkFBa0IsR0FDbkIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxvQkFBb0IsRUFDcEIsV0FBVyxHQUNaLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0lBTXRDLFlBQVksMEJBQVosWUFBWTs7Ozs7OztJQWdCdkIsWUFDVSxtQkFBd0MsRUFDeEMsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLE9BQWdCO1FBSGhCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFeEIsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxhQUFh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QUcsQ0FBQyxFQUFFO1lBQ3pDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFFRCxVQUFVLENBQUM7WUFDVCxhQUFhLGtCQUNYLGNBQWM7Z0JBQ2QsWUFBWSxJQUNULE1BQU0sQ0FDVjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQTVGZ0MsbUJBQW1CO1lBQzFCLFlBQVk7WUFDbkIsS0FBSztZQUNILE9BQU87O0FBNkIxQjtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O3FEQUM0RCxXQUFXOzsrQ0FRMUY7QUFHRDtJQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O3FEQUNrRCxTQUFTOzs2Q0FJNUU7QUFHRDtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O3FEQUdLLFdBQVc7OytDQVVuQztBQUdEO0lBREMsTUFBTSxDQUFDLG9CQUFvQixDQUFDOztxREFHWixvQkFBb0I7O3dEQXdCcEM7QUExR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7cUNBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7OzttQ0FHVjtBQUdEO0lBREMsUUFBUSxFQUFFOzs7OzBDQUdWO0FBZFUsWUFBWTtJQUp4QixLQUFLLENBQWdCO1FBQ3BCLElBQUksRUFBRSxjQUFjO1FBQ3BCLFFBQVEsRUFBRSxtQkFBQSxFQUFFLGFBQWEsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFpQjtLQUNwRSxDQUFDOzZDQWtCK0IsbUJBQW1CO1FBQzFCLFlBQVk7UUFDbkIsS0FBSztRQUNILE9BQU87R0FwQmYsWUFBWSxDQTZHeEI7U0E3R1ksWUFBWTs7Ozs7O0lBaUJyQiwyQ0FBZ0Q7Ozs7O0lBQ2hELG9DQUFrQzs7Ozs7SUFDbEMsNkJBQW9COzs7OztJQUNwQiwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFjdGlvbixcclxuICBTZWxlY3RvcixcclxuICBTdGF0ZSxcclxuICBTdGF0ZUNvbnRleHQsXHJcbiAgU3RvcmUsXHJcbiAgTmd4c09uSW5pdCxcclxuICBBY3Rpb25zLFxyXG4gIG9mQWN0aW9uU3VjY2Vzc2Z1bCxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBTZXRMYW5ndWFnZSxcclxuICBTZXRUZW5hbnQsXHJcbiAgTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgU2V0UmVtZW1iZXIsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAsIFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuXHJcbkBTdGF0ZTxTZXNzaW9uLlN0YXRlPih7XHJcbiAgbmFtZTogJ1Nlc3Npb25TdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgc2Vzc2lvbkRldGFpbDogeyBvcGVuZWRUYWJDb3VudDogMCB9IH0gYXMgU2Vzc2lvbi5TdGF0ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0TGFuZ3VhZ2UoeyBsYW5ndWFnZSB9OiBTZXNzaW9uLlN0YXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFRlbmFudCh7IHRlbmFudCB9OiBTZXNzaW9uLlN0YXRlKTogQUJQLkJhc2ljSXRlbSB7XHJcbiAgICByZXR1cm4gdGVuYW50O1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0U2Vzc2lvbkRldGFpbCh7IHNlc3Npb25EZXRhaWwgfTogU2Vzc2lvbi5TdGF0ZSk6IFNlc3Npb24uU2Vzc2lvbkRldGFpbCB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbkRldGFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb25TZXJ2aWNlOiBMb2NhbGl6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICkge1xyXG4gICAgYWN0aW9uc1xyXG4gICAgICAucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoR2V0QXBwQ29uZmlndXJhdGlvbikpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2Vzc2lvbkRldGFpbCB9ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUpIHx8IHsgc2Vzc2lvbkRldGFpbDoge30gfTtcclxuXHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnV0ZXNCZWZvcmUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIDUgKiA2MCAqIDEwMDA7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLm9wZW5lZFRhYkNvdW50ID09PSAwICYmXHJcbiAgICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5oYXNWYWxpZEFjY2Vzc1Rva2VuKCkgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwucmVtZW1iZXIgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSA8IGZpdmVNaW51dGVzQmVmb3JlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdpbmNyZWFzZScpKTtcclxuXHJcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3VubG9hZCcpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnZGVjcmVhc2UnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRMYW5ndWFnZSlcclxuICBzZXRMYW5ndWFnZSh7IHBhdGNoU3RhdGUsIGRpc3BhdGNoIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPiwgeyBwYXlsb2FkIH06IFNldExhbmd1YWdlKSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgbGFuZ3VhZ2U6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSkucGlwZShcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IGZyb20odGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLnJlZ2lzdGVyTG9jYWxlKHBheWxvYWQpKSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRUZW5hbnQpXHJcbiAgc2V0VGVuYW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRUZW5hbnQpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICB0ZW5hbnQ6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0UmVtZW1iZXIpXHJcbiAgc2V0UmVtZW1iZXIoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZDogcmVtZW1iZXIgfTogU2V0UmVtZW1iZXIsXHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICAuLi5zZXNzaW9uRGV0YWlsLFxyXG4gICAgICAgIHJlbWVtYmVyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKE1vZGlmeU9wZW5lZFRhYkNvdW50KVxyXG4gIG1vZGlmeU9wZW5lZFRhYkNvdW50KFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IG9wZXJhdGlvbiB9OiBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICApIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XHJcbiAgICBsZXQgeyBvcGVuZWRUYWJDb3VudCwgbGFzdEV4aXRUaW1lLCAuLi5kZXRhaWwgfSA9XHJcbiAgICAgIGdldFN0YXRlKCkuc2Vzc2lvbkRldGFpbCB8fCAoeyBvcGVuZWRUYWJDb3VudDogMCB9IGFzIFNlc3Npb24uU2Vzc2lvbkRldGFpbCk7XHJcblxyXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCsrO1xyXG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdkZWNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQtLTtcclxuICAgICAgbGFzdEV4aXRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcGVuZWRUYWJDb3VudCB8fCBvcGVuZWRUYWJDb3VudCA8IDApIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgb3BlbmVkVGFiQ291bnQsXHJcbiAgICAgICAgbGFzdEV4aXRUaW1lLFxyXG4gICAgICAgIC4uLmRldGFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=