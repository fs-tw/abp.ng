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
        var payload = _b.payload, _c = _b.dispatchAppConfiguration, dispatchAppConfiguration = _c === void 0 ? true : _c;
        patchState({
            language: payload,
        });
        if (dispatchAppConfiguration)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxNQUFNLEVBQ04sT0FBTyxFQUNQLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsS0FBSyxFQUNMLFlBQVksRUFDWixLQUFLLEdBQ04sTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSw0QkFBNEIsQ0FBQzs7SUF3QmxDLHNCQUFvQixZQUEwQixFQUFVLEtBQVksRUFBVSxPQUFnQjtRQUE5RixpQkF5QkM7UUF6Qm1CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFBQztZQUNELElBQUEsbUdBQWE7O2dCQUVmLGlCQUFpQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO1lBRTlELElBQ0UsYUFBYSxDQUFDLFlB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WTtnQkFGbkIsS0FBSztnQkFMTCxPQUFPOztJQW9FUDtRQURDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O3lEQUc0QixXQUFXOzttREFPMUQ7SUFHRDtRQURDLE1BQU0sQ0FBQyxTQUFTLENBQUM7O3lEQUNrRCxTQUFTOztpREFJNUU7SUFHRDtRQURDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O3lEQUdLLFdBQVc7O21EQVVuQztJQUdEO1FBREMsTUFBTSxDQUFDLG9CQUFvQixDQUFDOzt5REFHWixvQkFBb0I7OzREQXdCcEM7SUF0R0Q7UUFEQyxRQUFRLEVBQUU7Ozs7eUNBR1Y7SUFHRDtRQURDLFFBQVEsRUFBRTs7Ozt1Q0FHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7OzhDQUdWO0lBZFUsWUFBWTtRQUx4QixLQUFLLENBQWdCO1lBQ3BCLElBQUksRUFBRSxjQUFjO1lBQ3BCLFFBQVEsRUFBRSxtQkFBQSxFQUFFLGFBQWEsRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFpQjtTQUNwRSxDQUFDO2lEQWtCa0MsWUFBWSxFQUFpQixLQUFLLEVBQW1CLE9BQU87T0FoQm5GLFlBQVksQ0F5R3hCO0lBQUQsbUJBQUM7Q0FBQSxJQUFBO1NBekdZLFlBQVk7Ozs7OztJQWdCWCxvQ0FBa0M7Ozs7O0lBQUUsNkJBQW9COzs7OztJQUFFLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBY3Rpb24sXHJcbiAgQWN0aW9ucyxcclxuICBvZkFjdGlvblN1Y2Nlc3NmdWwsXHJcbiAgU2VsZWN0b3IsXHJcbiAgU3RhdGUsXHJcbiAgU3RhdGVDb250ZXh0LFxyXG4gIFN0b3JlLFxyXG59IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgU2V0TGFuZ3VhZ2UsXHJcbiAgU2V0UmVtZW1iZXIsXHJcbiAgU2V0VGVuYW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQUJQLCBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBTdGF0ZTxTZXNzaW9uLlN0YXRlPih7XHJcbiAgbmFtZTogJ1Nlc3Npb25TdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgc2Vzc2lvbkRldGFpbDogeyBvcGVuZWRUYWJDb3VudDogMCB9IH0gYXMgU2Vzc2lvbi5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRMYW5ndWFnZSh7IGxhbmd1YWdlIH06IFNlc3Npb24uU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50KHsgdGVuYW50IH06IFNlc3Npb24uU3RhdGUpOiBBQlAuQmFzaWNJdGVtIHtcclxuICAgIHJldHVybiB0ZW5hbnQ7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRTZXNzaW9uRGV0YWlsKHsgc2Vzc2lvbkRldGFpbCB9OiBTZXNzaW9uLlN0YXRlKTogU2Vzc2lvbi5TZXNzaW9uRGV0YWlsIHtcclxuICAgIHJldHVybiBzZXNzaW9uRGV0YWlsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUsIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucykge1xyXG4gICAgYWN0aW9uc1xyXG4gICAgICAucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoR2V0QXBwQ29uZmlndXJhdGlvbikpXHJcbiAgICAgIC5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2Vzc2lvbkRldGFpbCB9ID0gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUpIHx8IHsgc2Vzc2lvbkRldGFpbDoge30gfTtcclxuXHJcbiAgICAgICAgY29uc3QgZml2ZU1pbnV0ZXNCZWZvcmUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIDUgKiA2MCAqIDEwMDA7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLm9wZW5lZFRhYkNvdW50ID09PSAwICYmXHJcbiAgICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5oYXNWYWxpZEFjY2Vzc1Rva2VuKCkgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwucmVtZW1iZXIgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSA8IGZpdmVNaW51dGVzQmVmb3JlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdpbmNyZWFzZScpKTtcclxuXHJcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3VubG9hZCcpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnZGVjcmVhc2UnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRMYW5ndWFnZSlcclxuICBzZXRMYW5ndWFnZShcclxuICAgIHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkLCBkaXNwYXRjaEFwcENvbmZpZ3VyYXRpb24gPSB0cnVlIH06IFNldExhbmd1YWdlLFxyXG4gICkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIGxhbmd1YWdlOiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGRpc3BhdGNoQXBwQ29uZmlndXJhdGlvbikgcmV0dXJuIGRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRUZW5hbnQpXHJcbiAgc2V0VGVuYW50KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBTZXRUZW5hbnQpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICB0ZW5hbnQ6IHBheWxvYWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0UmVtZW1iZXIpXHJcbiAgc2V0UmVtZW1iZXIoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZDogcmVtZW1iZXIgfTogU2V0UmVtZW1iZXIsXHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IGdldFN0YXRlKCk7XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICAuLi5zZXNzaW9uRGV0YWlsLFxyXG4gICAgICAgIHJlbWVtYmVyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKE1vZGlmeU9wZW5lZFRhYkNvdW50KVxyXG4gIG1vZGlmeU9wZW5lZFRhYkNvdW50KFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IG9wZXJhdGlvbiB9OiBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICApIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XHJcbiAgICBsZXQgeyBvcGVuZWRUYWJDb3VudCwgbGFzdEV4aXRUaW1lLCAuLi5kZXRhaWwgfSA9XHJcbiAgICAgIGdldFN0YXRlKCkuc2Vzc2lvbkRldGFpbCB8fCAoeyBvcGVuZWRUYWJDb3VudDogMCB9IGFzIFNlc3Npb24uU2Vzc2lvbkRldGFpbCk7XHJcblxyXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCsrO1xyXG4gICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdkZWNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQtLTtcclxuICAgICAgbGFzdEV4aXRUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcGVuZWRUYWJDb3VudCB8fCBvcGVuZWRUYWJDb3VudCA8IDApIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgb3BlbmVkVGFiQ291bnQsXHJcbiAgICAgICAgbGFzdEV4aXRUaW1lLFxyXG4gICAgICAgIC4uLmRldGFpbCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=