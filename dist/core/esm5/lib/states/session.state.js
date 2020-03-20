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
var SessionState = /** @class */ (function () {
    function SessionState(localizationService, oAuthService, store, actions) {
        var _this = this;
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
        var _this = this;
        var patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({
            language: payload,
        });
        return dispatch(new GetAppConfiguration()).pipe(switchMap((/**
         * @return {?}
         */
        function () { return from(_this.localizationService.registerLocale(payload)); })));
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
        { type: LocalizationService },
        { type: OAuthService },
        { type: Store },
        { type: Actions }
    ]; };
    SessionState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SessionState.ctorParameters = function () { return [
        { type: LocalizationService },
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
        tslib_1.__metadata("design:paramtypes", [LocalizationService,
            OAuthService,
            Store,
            Actions])
    ], SessionState);
    return SessionState;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULG9CQUFvQixFQUNwQixXQUFXLEdBQ1osTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUF1QnpDLHNCQUNVLG1CQUF3QyxFQUN4QyxZQUEwQixFQUMxQixLQUFZLEVBQ1osT0FBZ0I7UUFKMUIsaUJBOEJDO1FBN0JTLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFeEIsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7UUFB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U2VsZWN0b3IsXHJcbiAgU3RhdGUsXHJcbiAgU3RhdGVDb250ZXh0LFxyXG4gIFN0b3JlLFxyXG4gIE5neHNPbkluaXQsXHJcbiAgQWN0aW9ucyxcclxuICBvZkFjdGlvblN1Y2Nlc3NmdWwsXHJcbn0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRBcHBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9jb25maWcuYWN0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgU2V0TGFuZ3VhZ2UsXHJcbiAgU2V0VGVuYW50LFxyXG4gIE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gIFNldFJlbWVtYmVyLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvc2Vzc2lvbi5hY3Rpb25zJztcclxuaW1wb3J0IHsgQUJQLCBTZXNzaW9uIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBTdGF0ZTxTZXNzaW9uLlN0YXRlPih7XHJcbiAgbmFtZTogJ1Nlc3Npb25TdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgc2Vzc2lvbkRldGFpbDogeyBvcGVuZWRUYWJDb3VudDogMCB9IH0gYXMgU2Vzc2lvbi5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRMYW5ndWFnZSh7IGxhbmd1YWdlIH06IFNlc3Npb24uU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50KHsgdGVuYW50IH06IFNlc3Npb24uU3RhdGUpOiBBQlAuQmFzaWNJdGVtIHtcclxuICAgIHJldHVybiB0ZW5hbnQ7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRTZXNzaW9uRGV0YWlsKHsgc2Vzc2lvbkRldGFpbCB9OiBTZXNzaW9uLlN0YXRlKTogU2Vzc2lvbi5TZXNzaW9uRGV0YWlsIHtcclxuICAgIHJldHVybiBzZXNzaW9uRGV0YWlsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblNlcnZpY2U6IExvY2FsaXphdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgKSB7XHJcbiAgICBhY3Rpb25zXHJcbiAgICAgIC5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChHZXRBcHBDb25maWd1cmF0aW9uKSlcclxuICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZSkgfHwgeyBzZXNzaW9uRGV0YWlsOiB7fSB9O1xyXG5cclxuICAgICAgICBjb25zdCBmaXZlTWludXRlc0JlZm9yZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gNSAqIDYwICogMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwub3BlbmVkVGFiQ291bnQgPT09IDAgJiZcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmhhc1ZhbGlkQWNjZXNzVG9rZW4oKSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5yZW1lbWJlciA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lIDwgZml2ZU1pbnV0ZXNCZWZvcmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2luY3JlYXNlJykpO1xyXG5cclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAndW5sb2FkJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdkZWNyZWFzZScpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldExhbmd1YWdlKVxyXG4gIHNldExhbmd1YWdlKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0TGFuZ3VhZ2UpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZTogcGF5bG9hZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKS5waXBlKFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbSh0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UucmVnaXN0ZXJMb2NhbGUocGF5bG9hZCkpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFRlbmFudClcclxuICBzZXRUZW5hbnQoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPiwgeyBwYXlsb2FkIH06IFNldFRlbmFudCkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHRlbmFudDogcGF5bG9hZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRSZW1lbWJlcilcclxuICBzZXRSZW1lbWJlcihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkOiByZW1lbWJlciB9OiBTZXRSZW1lbWJlcixcclxuICApIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbkRldGFpbCB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIC4uLnNlc3Npb25EZXRhaWwsXHJcbiAgICAgICAgcmVtZW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oTW9kaWZ5T3BlbmVkVGFiQ291bnQpXHJcbiAgbW9kaWZ5T3BlbmVkVGFiQ291bnQoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgb3BlcmF0aW9uIH06IE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gICkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcclxuICAgIGxldCB7IG9wZW5lZFRhYkNvdW50LCBsYXN0RXhpdFRpbWUsIC4uLmRldGFpbCB9ID1cclxuICAgICAgZ2V0U3RhdGUoKS5zZXNzaW9uRGV0YWlsIHx8ICh7IG9wZW5lZFRhYkNvdW50OiAwIH0gYXMgU2Vzc2lvbi5TZXNzaW9uRGV0YWlsKTtcclxuXHJcbiAgICBpZiAob3BlcmF0aW9uID09PSAnaW5jcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50Kys7XHJcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ2RlY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudC0tO1xyXG4gICAgICBsYXN0RXhpdFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wZW5lZFRhYkNvdW50IHx8IG9wZW5lZFRhYkNvdW50IDwgMCkge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICBvcGVuZWRUYWJDb3VudCxcclxuICAgICAgICBsYXN0RXhpdFRpbWUsXHJcbiAgICAgICAgLi4uZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==