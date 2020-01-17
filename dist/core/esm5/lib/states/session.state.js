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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsWUFBWSxFQUNaLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLGtCQUFrQixHQUNuQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULG9CQUFvQixFQUNwQixXQUFXLEdBQ1osTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBc0JqRCxzQkFDVSxtQkFBd0MsRUFDeEMsWUFBMEIsRUFDMUIsS0FBWSxFQUNaLE9BQWdCO1FBSjFCLGlCQThCQztRQTdCUyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRXhCLE9BQU87YUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7O1FBQUM7WUFDRCxJQUFBLG1HQUFhOztnQkFFZixpQkFBaUIsR0FBRyxJQUFJ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QUVELFVBQVUsQ0FBQztZQUNULGFBQWEscUJBQ1gsY0FBYyxnQkFBQTtnQkFDZCxZQUFZLGNBQUEsSUFDVCxNQUFNLENBQ1Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Z0JBM0Y4QixtQkFBbUI7Z0JBQzFCLFlBQVk7Z0JBQ25CLEtBQUs7Z0JBQ0gsT0FBTzs7SUE2QjFCO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7eURBQzRELFdBQVc7O21EQVExRjtJQUdEO1FBREMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7eURBQ2tELFNBQVM7O2lEQUk1RTtJQUdEO1FBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7eURBR0ssV0FBVzs7bURBVW5DO0lBR0Q7UUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7O3lEQUdaLG9CQUFvQjs7NERBd0JwQztJQTFHRDtRQURDLFFBQVEsRUFBRTs7Ozt5Q0FHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7O3VDQUdWO0lBR0Q7UUFEQyxRQUFRLEVBQUU7Ozs7OENBR1Y7SUFkVSxZQUFZO1FBSnhCLEtBQUssQ0FBZ0I7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsUUFBUSxFQUFFLG1CQUFBLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQWlCO1NBQ3BFLENBQUM7aURBa0IrQixtQkFBbUI7WUFDMUIsWUFBWTtZQUNuQixLQUFLO1lBQ0gsT0FBTztPQXBCZixZQUFZLENBNkd4QjtJQUFELG1CQUFDO0NBQUEsSUFBQTtTQTdHWSxZQUFZOzs7Ozs7SUFpQnJCLDJDQUFnRDs7Ozs7SUFDaEQsb0NBQWtDOzs7OztJQUNsQyw2QkFBb0I7Ozs7O0lBQ3BCLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWN0aW9uLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFN0YXRlLFxyXG4gIFN0YXRlQ29udGV4dCxcclxuICBTdG9yZSxcclxuICBOZ3hzT25Jbml0LFxyXG4gIEFjdGlvbnMsXHJcbiAgb2ZBY3Rpb25TdWNjZXNzZnVsLFxyXG59IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIFNldExhbmd1YWdlLFxyXG4gIFNldFRlbmFudCxcclxuICBNb2RpZnlPcGVuZWRUYWJDb3VudCxcclxuICBTZXRSZW1lbWJlcixcclxufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFCUCwgU2Vzc2lvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5cclxuQFN0YXRlPFNlc3Npb24uU3RhdGU+KHtcclxuICBuYW1lOiAnU2Vzc2lvblN0YXRlJyxcclxuICBkZWZhdWx0czogeyBzZXNzaW9uRGV0YWlsOiB7IG9wZW5lZFRhYkNvdW50OiAwIH0gfSBhcyBTZXNzaW9uLlN0YXRlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRMYW5ndWFnZSh7IGxhbmd1YWdlIH06IFNlc3Npb24uU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50KHsgdGVuYW50IH06IFNlc3Npb24uU3RhdGUpOiBBQlAuQmFzaWNJdGVtIHtcclxuICAgIHJldHVybiB0ZW5hbnQ7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRTZXNzaW9uRGV0YWlsKHsgc2Vzc2lvbkRldGFpbCB9OiBTZXNzaW9uLlN0YXRlKTogU2Vzc2lvbi5TZXNzaW9uRGV0YWlsIHtcclxuICAgIHJldHVybiBzZXNzaW9uRGV0YWlsO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvblNlcnZpY2U6IExvY2FsaXphdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgKSB7XHJcbiAgICBhY3Rpb25zXHJcbiAgICAgIC5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChHZXRBcHBDb25maWd1cmF0aW9uKSlcclxuICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZSkgfHwgeyBzZXNzaW9uRGV0YWlsOiB7fSB9O1xyXG5cclxuICAgICAgICBjb25zdCBmaXZlTWludXRlc0JlZm9yZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpIC0gNSAqIDYwICogMTAwMDtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwub3BlbmVkVGFiQ291bnQgPT09IDAgJiZcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmhhc1ZhbGlkQWNjZXNzVG9rZW4oKSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5yZW1lbWJlciA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgIHNlc3Npb25EZXRhaWwubGFzdEV4aXRUaW1lIDwgZml2ZU1pbnV0ZXNCZWZvcmVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2luY3JlYXNlJykpO1xyXG5cclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAndW5sb2FkJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1vZGlmeU9wZW5lZFRhYkNvdW50KCdkZWNyZWFzZScpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldExhbmd1YWdlKVxyXG4gIHNldExhbmd1YWdlKHsgcGF0Y2hTdGF0ZSwgZGlzcGF0Y2ggfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0TGFuZ3VhZ2UpIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZTogcGF5bG9hZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKS5waXBlKFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gZnJvbSh0aGlzLmxvY2FsaXphdGlvblNlcnZpY2UucmVnaXN0ZXJMb2NhbGUocGF5bG9hZCkpKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFRlbmFudClcclxuICBzZXRUZW5hbnQoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPiwgeyBwYXlsb2FkIH06IFNldFRlbmFudCkge1xyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHRlbmFudDogcGF5bG9hZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihTZXRSZW1lbWJlcilcclxuICBzZXRSZW1lbWJlcihcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBwYXlsb2FkOiByZW1lbWJlciB9OiBTZXRSZW1lbWJlcixcclxuICApIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbkRldGFpbCB9ID0gZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIC4uLnNlc3Npb25EZXRhaWwsXHJcbiAgICAgICAgcmVtZW1iZXIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oTW9kaWZ5T3BlbmVkVGFiQ291bnQpXHJcbiAgbW9kaWZ5T3BlbmVkVGFiQ291bnQoXHJcbiAgICB7IGdldFN0YXRlLCBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgb3BlcmF0aW9uIH06IE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gICkge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcclxuICAgIGxldCB7IG9wZW5lZFRhYkNvdW50LCBsYXN0RXhpdFRpbWUsIC4uLmRldGFpbCB9ID1cclxuICAgICAgZ2V0U3RhdGUoKS5zZXNzaW9uRGV0YWlsIHx8ICh7IG9wZW5lZFRhYkNvdW50OiAwIH0gYXMgU2Vzc2lvbi5TZXNzaW9uRGV0YWlsKTtcclxuXHJcbiAgICBpZiAob3BlcmF0aW9uID09PSAnaW5jcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50Kys7XHJcbiAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ2RlY3JlYXNlJykge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudC0tO1xyXG4gICAgICBsYXN0RXhpdFRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW9wZW5lZFRhYkNvdW50IHx8IG9wZW5lZFRhYkNvdW50IDwgMCkge1xyXG4gICAgICBvcGVuZWRUYWJDb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgIHNlc3Npb25EZXRhaWw6IHtcclxuICAgICAgICBvcGVuZWRUYWJDb3VudCxcclxuICAgICAgICBsYXN0RXhpdFRpbWUsXHJcbiAgICAgICAgLi4uZGV0YWlsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==