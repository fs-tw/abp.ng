var SessionState_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/session.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Action, Actions, ofActionSuccessful, Selector, State, StateContext, Store, } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import { ModifyOpenedTabCount, SetLanguage, SetRemember, SetTenant, } from '../actions/session.actions';
let SessionState = SessionState_1 = class SessionState {
    /**
     * @param {?} oAuthService
     * @param {?} store
     * @param {?} actions
     */
    constructor(oAuthService, store, actions) {
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
        return dispatch(new GetAppConfiguration());
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
    { type: OAuthService },
    { type: Store },
    { type: Actions }
];
SessionState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SessionState.ctorParameters = () => [
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
    tslib_1.__metadata("design:paramtypes", [OAuthService, Store, Actions])
], SessionState);
export { SessionState };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sNEJBQTRCLENBQUM7SUFRdkIsWUFBWSwwQkFBWixZQUFZOzs7Ozs7SUFnQnZCLFlBQW9CLFlBQTBCLEVBQVUsS0FBWSxFQUFVLE9BQWdCO1FBQTFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxjQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUU7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Ozs7WUFoQkYsWUFBWTtZQUZuQixLQUFLO1lBTEwsT0FBTzs7QUFvRVA7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOztxREFDNEQsV0FBVzs7K0NBTTFGO0FBR0Q7SUFEQyxNQUFNLENBQUMsU0FBUyxDQUFDOztxREFDa0QsU0FBUzs7NkNBSTVFO0FBR0Q7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOztxREFHSyxXQUFXOzsrQ0FVbkM7QUFHRDtJQURDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzs7cURBR1osb0JBQW9COzt3REF3QnBDO0FBbkdEO0lBREMsUUFBUSxFQUFFOzs7O3FDQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7bUNBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7OzswQ0FHVjtBQWRVLFlBQVk7SUFMeEIsS0FBSyxDQUFnQjtRQUNwQixJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsbUJBQUEsRUFBRSxhQUFhLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBaUI7S0FDcEUsQ0FBQzs2Q0FrQmtDLFlBQVksRUFBaUIsS0FBSyxFQUFtQixPQUFPO0dBaEJuRixZQUFZLENBc0d4QjtTQXRHWSxZQUFZOzs7Ozs7SUFnQlgsb0NBQWtDOzs7OztJQUFFLDZCQUFvQjs7Ozs7SUFBRSwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uLFxyXG4gIEFjdGlvbnMsXHJcbiAgb2ZBY3Rpb25TdWNjZXNzZnVsLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFN0YXRlLFxyXG4gIFN0YXRlQ29udGV4dCxcclxuICBTdG9yZSxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gIFNldExhbmd1YWdlLFxyXG4gIFNldFJlbWVtYmVyLFxyXG4gIFNldFRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFCUCwgU2Vzc2lvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5AU3RhdGU8U2Vzc2lvbi5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdTZXNzaW9uU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHNlc3Npb25EZXRhaWw6IHsgb3BlbmVkVGFiQ291bnQ6IDAgfSB9IGFzIFNlc3Npb24uU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0TGFuZ3VhZ2UoeyBsYW5ndWFnZSB9OiBTZXNzaW9uLlN0YXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFRlbmFudCh7IHRlbmFudCB9OiBTZXNzaW9uLlN0YXRlKTogQUJQLkJhc2ljSXRlbSB7XHJcbiAgICByZXR1cm4gdGVuYW50O1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0U2Vzc2lvbkRldGFpbCh7IHNlc3Npb25EZXRhaWwgfTogU2Vzc2lvbi5TdGF0ZSk6IFNlc3Npb24uU2Vzc2lvbkRldGFpbCB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbkRldGFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlLCBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMpIHtcclxuICAgIGFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKEdldEFwcENvbmZpZ3VyYXRpb24pKVxyXG4gICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlKSB8fCB7IHNlc3Npb25EZXRhaWw6IHt9IH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZpdmVNaW51dGVzQmVmb3JlID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgLSA1ICogNjAgKiAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5vcGVuZWRUYWJDb3VudCA9PT0gMCAmJlxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLnJlbWVtYmVyID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgPCBmaXZlTWludXRlc0JlZm9yZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnaW5jcmVhc2UnKSk7XHJcblxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICd1bmxvYWQnKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2RlY3JlYXNlJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0TGFuZ3VhZ2UpXHJcbiAgc2V0TGFuZ3VhZ2UoeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRMYW5ndWFnZSkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIGxhbmd1YWdlOiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRUZW5hbnQpXHJcbiAgc2V0VGVuYW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRUZW5hbnQpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICB0ZW5hbnQ6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0UmVtZW1iZXIpXHJcbiAgc2V0UmVtZW1iZXIoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZDogcmVtZW1iZXIgfTogU2V0UmVtZW1iZXIsXHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICAuLi5zZXNzaW9uRGV0YWlsLFxyXG4gICAgICAgIHJlbWVtYmVyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKE1vZGlmeU9wZW5lZFRhYkNvdW50KVxyXG4gIG1vZGlmeU9wZW5lZFRhYkNvdW50KFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IG9wZXJhdGlvbiB9OiBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICApIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XHJcbiAgICBsZXQgeyBvcGVuZWRUYWJDb3VudCwgbGFzdEV4aXRUaW1lLCAuLi5kZXRhaWwgfSA9XHJcbiAgICAgIGdldFN0YXRlKCkuc2Vzc2lvbkRldGFpbCB8fCAoeyBvcGVuZWRUYWJDb3VudDogMCB9IGFzIFNlc3Npb24uU2Vzc2lvbkRldGFpbCk7XHJcblxyXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCsrO1xyXG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdkZWNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQtLTtcclxuICAgICAgbGFzdEV4aXRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcGVuZWRUYWJDb3VudCB8fCBvcGVuZWRUYWJDb3VudCA8IDApIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgb3BlbmVkVGFiQ291bnQsXHJcbiAgICAgICAgbGFzdEV4aXRUaW1lLFxyXG4gICAgICAgIC4uLmRldGFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=