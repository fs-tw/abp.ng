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
    setLanguage({ patchState, dispatch }, { payload, dispatchAppConfiguration = true }) {
        patchState({
            language: payload,
        });
        if (dispatchAppConfiguration)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLEtBQUssRUFDTCxZQUFZLEVBQ1osS0FBSyxHQUNOLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sNEJBQTRCLENBQUM7SUFRdkIsWUFBWSwwQkFBWixZQUFZOzs7Ozs7SUFnQnZCLFlBQW9CLFlBQTBCLEVBQVUsS0FBWSxFQUFVLE9BQWdCO1FBQTFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7a0JBQ1IsRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxjQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUU7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QUFZO1lBQWlCLEtBQUs7WUFBbUIsT0FBTzs7O1lBakIvRixVQUFVOzs7O1lBaEJGLFlBQVk7WUFGbkIsS0FBSztZQUxMLE9BQU87O0FBb0VQO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7cURBRzRCLFdBQVc7OytDQU8xRDtBQUdEO0lBREMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7cURBQ2tELFNBQVM7OzZDQUk1RTtBQUdEO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7cURBR0ssV0FBVzs7K0NBVW5DO0FBR0Q7SUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3FEQUdaLG9CQUFvQjs7d0RBd0JwQztBQXRHRDtJQURDLFFBQVEsRUFBRTs7OztxQ0FHVjtBQUdEO0lBREMsUUFBUSxFQUFFOzs7O21DQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7MENBR1Y7QUFkVSxZQUFZO0lBTHhCLEtBQUssQ0FBZ0I7UUFDcEIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFLG1CQUFBLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQWlCO0tBQ3BFLENBQUM7NkNBa0JrQyxZQUFZLEVBQWlCLEtBQUssRUFBbUIsT0FBTztHQWhCbkYsWUFBWSxDQXlHeEI7U0F6R1ksWUFBWTs7Ozs7O0lBZ0JYLG9DQUFrQzs7Ozs7SUFBRSw2QkFBb0I7Ozs7O0lBQUUsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbixcclxuICBBY3Rpb25zLFxyXG4gIG9mQWN0aW9uU3VjY2Vzc2Z1bCxcclxuICBTZWxlY3RvcixcclxuICBTdGF0ZSxcclxuICBTdGF0ZUNvbnRleHQsXHJcbiAgU3RvcmUsXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICBTZXRMYW5ndWFnZSxcclxuICBTZXRSZW1lbWJlcixcclxuICBTZXRUZW5hbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAsIFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQFN0YXRlPFNlc3Npb24uU3RhdGU+KHtcclxuICBuYW1lOiAnU2Vzc2lvblN0YXRlJyxcclxuICBkZWZhdWx0czogeyBzZXNzaW9uRGV0YWlsOiB7IG9wZW5lZFRhYkNvdW50OiAwIH0gfSBhcyBTZXNzaW9uLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldExhbmd1YWdlKHsgbGFuZ3VhZ2UgfTogU2Vzc2lvbi5TdGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnQoeyB0ZW5hbnQgfTogU2Vzc2lvbi5TdGF0ZSk6IEFCUC5CYXNpY0l0ZW0ge1xyXG4gICAgcmV0dXJuIHRlbmFudDtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFNlc3Npb25EZXRhaWwoeyBzZXNzaW9uRGV0YWlsIH06IFNlc3Npb24uU3RhdGUpOiBTZXNzaW9uLlNlc3Npb25EZXRhaWwge1xyXG4gICAgcmV0dXJuIHNlc3Npb25EZXRhaWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSwgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zKSB7XHJcbiAgICBhY3Rpb25zXHJcbiAgICAgIC5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChHZXRBcHBDb25maWd1cmF0aW9uKSlcclxuICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZSkgfHwgeyBzZXNzaW9uRGV0YWlsOiB7fSB9O1xyXG5cclxuICAgICAgICBjb25zdCBmaXZlTWludXRlc0JlZm9yZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gNSAqIDYwICogMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwub3BlbmVkVGFiQ291bnQgPT09IDAgJiZcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmhhc1ZhbGlkQWNjZXNzVG9rZW4oKSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5yZW1lbWJlciA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lIDwgZml2ZU1pbnV0ZXNCZWZvcmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2luY3JlYXNlJykpO1xyXG5cclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAndW5sb2FkJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdkZWNyZWFzZScpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldExhbmd1YWdlKVxyXG4gIHNldExhbmd1YWdlKFxyXG4gICAgeyBwYXRjaFN0YXRlLCBkaXNwYXRjaCB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQsIGRpc3BhdGNoQXBwQ29uZmlndXJhdGlvbiA9IHRydWUgfTogU2V0TGFuZ3VhZ2UsXHJcbiAgKSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgbGFuZ3VhZ2U6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZGlzcGF0Y2hBcHBDb25maWd1cmF0aW9uKSByZXR1cm4gZGlzcGF0Y2gobmV3IEdldEFwcENvbmZpZ3VyYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFRlbmFudClcclxuICBzZXRUZW5hbnQoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPiwgeyBwYXlsb2FkIH06IFNldFRlbmFudCkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHRlbmFudDogcGF5bG9hZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRSZW1lbWJlcilcclxuICBzZXRSZW1lbWJlcihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkOiByZW1lbWJlciB9OiBTZXRSZW1lbWJlcixcclxuICApIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbkRldGFpbCB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIC4uLnNlc3Npb25EZXRhaWwsXHJcbiAgICAgICAgcmVtZW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oTW9kaWZ5T3BlbmVkVGFiQ291bnQpXHJcbiAgbW9kaWZ5T3BlbmVkVGFiQ291bnQoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgb3BlcmF0aW9uIH06IE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gICkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcclxuICAgIGxldCB7IG9wZW5lZFRhYkNvdW50LCBsYXN0RXhpdFRpbWUsIC4uLmRldGFpbCB9ID1cclxuICAgICAgZ2V0U3RhdGUoKS5zZXNzaW9uRGV0YWlsIHx8ICh7IG9wZW5lZFRhYkNvdW50OiAwIH0gYXMgU2Vzc2lvbi5TZXNzaW9uRGV0YWlsKTtcclxuXHJcbiAgICBpZiAob3BlcmF0aW9uID09PSAnaW5jcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50Kys7XHJcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ2RlY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudC0tO1xyXG4gICAgICBsYXN0RXhpdFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wZW5lZFRhYkNvdW50IHx8IG9wZW5lZFRhYkNvdW50IDwgMCkge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICBvcGVuZWRUYWJDb3VudCxcclxuICAgICAgICBsYXN0RXhpdFRpbWUsXHJcbiAgICAgICAgLi4uZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==