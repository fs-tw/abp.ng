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
var SessionState = /** @class */ (function () {
    function SessionState(oAuthService, store, actions) {
        var _this = this;
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            var sessionDetail = (_this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} }).sessionDetail;
            /** @type {?} */
            var fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                _this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                _this.oAuthService.logOut();
            }
            _this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            }));
        }));
    }
    SessionState_1 = SessionState;
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getLanguage = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var language = _a.language;
        return language;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getTenant = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var tenant = _a.tenant;
        return tenant;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getSessionDetail = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var sessionDetail = _a.sessionDetail;
        return sessionDetail;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setLanguage = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration());
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setTenant = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            tenant: payload,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setRemember = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var remember = _b.payload;
        var sessionDetail = getState().sessionDetail;
        patchState({
            sessionDetail: tslib_1.__assign({}, sessionDetail, { remember: remember }),
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.modifyOpenedTabCount = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var operation = _b.operation;
        // tslint:disable-next-line: prefer-const
        var _c = getState().sessionDetail || ((/** @type {?} */ ({ openedTabCount: 0 }))), openedTabCount = _c.openedTabCount, lastExitTime = _c.lastExitTime, detail = tslib_1.__rest(_c, ["openedTabCount", "lastExitTime"]);
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
            sessionDetail: tslib_1.__assign({ openedTabCount: openedTabCount,
                lastExitTime: lastExitTime }, detail),
        });
    };
    var SessionState_1;
    SessionState.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store },
        { type: Actions }
    ]; };
    SessionState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionState.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store },
        { type: Actions }
    ]; };
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
    return SessionState;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxNQUFNLEVBQ04sT0FBTyxFQUNQLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEdBQ04sTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSw0QkFBNEIsQ0FBQzs7SUF3QmxDLHNCQUFvQixZQUEwQixFQUFVLEtBQVksRUFBVSxPQUFnQjtRQUE5RixpQkF5QkM7UUF6Qm1CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFBQztZQUNELElBQUEsbUdBQWE7O2dCQUVmLGlCQUFpQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO1lBRTlELElBQ0UsYUFBYSxDQUFDLFlB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QUFDLFdBQVcsQ0FBQzs7eURBQzRELFdBQVc7O21EQU0xRjtJQUdEO1FBREMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7eURBQ2tELFNBQVM7O2lEQUk1RTtJQUdEO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7eURBR0ssV0FBVzs7bURBVW5DO0lBR0Q7UUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3lEQUdaLG9CQUFvQjs7NERBd0JwQztJQW5HRDtRQURDLFFBQVEsRUFBRTs7Ozt5Q0FHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7O3VDQUdWO0lBR0Q7UUFEQyxRQUFRLEVBQUU7Ozs7OENBR1Y7SUFkVSxZQUFZO1FBTHhCLEtBQUssQ0FBZ0I7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsUUFBUSxFQUFFLG1CQUFBLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQWlCO1NBQ3BFLENBQUM7aURBa0JrQyxZQUFZLEVBQWlCLEtBQUssRUFBbUIsT0FBTztPQWhCbkYsWUFBWSxDQXNHeEI7SUFBRCxtQkFBQztDQUFBLElBQUE7U0F0R1ksWUFBWTs7Ozs7O0lBZ0JYLG9DQUFrQzs7Ozs7SUFBRSw2QkFBb0I7Ozs7O0lBQUUsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbixcclxuICBBY3Rpb25zLFxyXG4gIG9mQWN0aW9uU3VjY2Vzc2Z1bCxcclxuICBTZWxlY3RvcixcclxuICBTdGF0ZSxcclxuICBTdGF0ZUNvbnRleHQsXHJcbiAgU3RvcmUsXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEdldEFwcENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25zJztcclxuaW1wb3J0IHtcclxuICBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICBTZXRMYW5ndWFnZSxcclxuICBTZXRSZW1lbWJlcixcclxuICBTZXRUZW5hbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBBQlAsIFNlc3Npb24gfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQFN0YXRlPFNlc3Npb24uU3RhdGU+KHtcclxuICBuYW1lOiAnU2Vzc2lvblN0YXRlJyxcclxuICBkZWZhdWx0czogeyBzZXNzaW9uRGV0YWlsOiB7IG9wZW5lZFRhYkNvdW50OiAwIH0gfSBhcyBTZXNzaW9uLlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldExhbmd1YWdlKHsgbGFuZ3VhZ2UgfTogU2Vzc2lvbi5TdGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnQoeyB0ZW5hbnQgfTogU2Vzc2lvbi5TdGF0ZSk6IEFCUC5CYXNpY0l0ZW0ge1xyXG4gICAgcmV0dXJuIHRlbmFudDtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFNlc3Npb25EZXRhaWwoeyBzZXNzaW9uRGV0YWlsIH06IFNlc3Npb24uU3RhdGUpOiBTZXNzaW9uLlNlc3Npb25EZXRhaWwge1xyXG4gICAgcmV0dXJuIHNlc3Npb25EZXRhaWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSwgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zKSB7XHJcbiAgICBhY3Rpb25zXHJcbiAgICAgIC5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChHZXRBcHBDb25maWd1cmF0aW9uKSlcclxuICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZSkgfHwgeyBzZXNzaW9uRGV0YWlsOiB7fSB9O1xyXG5cclxuICAgICAgICBjb25zdCBmaXZlTWludXRlc0JlZm9yZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gNSAqIDYwICogMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwub3BlbmVkVGFiQ291bnQgPT09IDAgJiZcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmhhc1ZhbGlkQWNjZXNzVG9rZW4oKSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5yZW1lbWJlciA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lIDwgZml2ZU1pbnV0ZXNCZWZvcmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2luY3JlYXNlJykpO1xyXG5cclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAndW5sb2FkJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdkZWNyZWFzZScpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldExhbmd1YWdlKVxyXG4gIHNldExhbmd1YWdlKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0TGFuZ3VhZ2UpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZTogcGF5bG9hZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0VGVuYW50KVxyXG4gIHNldFRlbmFudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0VGVuYW50KSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgdGVuYW50OiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFJlbWVtYmVyKVxyXG4gIHNldFJlbWVtYmVyKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQ6IHJlbWVtYmVyIH06IFNldFJlbWVtYmVyLFxyXG4gICkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgLi4uc2Vzc2lvbkRldGFpbCxcclxuICAgICAgICByZW1lbWJlcixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihNb2RpZnlPcGVuZWRUYWJDb3VudClcclxuICBtb2RpZnlPcGVuZWRUYWJDb3VudChcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBvcGVyYXRpb24gfTogTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgbGV0IHsgb3BlbmVkVGFiQ291bnQsIGxhc3RFeGl0VGltZSwgLi4uZGV0YWlsIH0gPVxyXG4gICAgICBnZXRTdGF0ZSgpLnNlc3Npb25EZXRhaWwgfHwgKHsgb3BlbmVkVGFiQ291bnQ6IDAgfSBhcyBTZXNzaW9uLlNlc3Npb25EZXRhaWwpO1xyXG5cclxuICAgIGlmIChvcGVyYXRpb24gPT09ICdpbmNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQrKztcclxuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVjcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50LS07XHJcbiAgICAgIGxhc3RFeGl0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3BlbmVkVGFiQ291bnQgfHwgb3BlbmVkVGFiQ291bnQgPCAwKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIG9wZW5lZFRhYkNvdW50LFxyXG4gICAgICAgIGxhc3RFeGl0VGltZSxcclxuICAgICAgICAuLi5kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19