var SessionState_1;
import { __decorate, __metadata, __rest } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Actions, ofActionSuccessful, Selector, State, Store, } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { GetAppConfiguration } from '../actions/config.actions';
import { ModifyOpenedTabCount, SetLanguage, SetRemember, SetTenant, } from '../actions/session.actions';
let SessionState = SessionState_1 = class SessionState {
    constructor(oAuthService, store, actions) {
        this.oAuthService = oAuthService;
        this.store = store;
        this.actions = actions;
        actions
            .pipe(ofActionSuccessful(GetAppConfiguration))
            .pipe(take(1))
            .subscribe(() => {
            const { sessionDetail } = this.store.selectSnapshot(SessionState_1) || { sessionDetail: {} };
            const fiveMinutesBefore = new Date().valueOf() - 5 * 60 * 1000;
            if (sessionDetail.lastExitTime &&
                sessionDetail.openedTabCount === 0 &&
                this.oAuthService.hasValidAccessToken() &&
                sessionDetail.remember === false &&
                sessionDetail.lastExitTime < fiveMinutesBefore) {
                this.oAuthService.logOut();
            }
            this.store.dispatch(new ModifyOpenedTabCount('increase'));
            fromEvent(window, 'unload').subscribe(event => {
                this.store.dispatch(new ModifyOpenedTabCount('decrease'));
            });
        });
    }
    static getLanguage({ language }) {
        return language;
    }
    static getTenant({ tenant }) {
        return tenant;
    }
    static getSessionDetail({ sessionDetail }) {
        return sessionDetail;
    }
    setLanguage({ patchState, dispatch }, { payload, dispatchAppConfiguration = true }) {
        patchState({
            language: payload,
        });
        if (dispatchAppConfiguration)
            return dispatch(new GetAppConfiguration());
    }
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
    setRemember({ getState, patchState }, { payload: remember }) {
        const { sessionDetail } = getState();
        patchState({
            sessionDetail: Object.assign(Object.assign({}, sessionDetail), { remember }),
        });
    }
    modifyOpenedTabCount({ getState, patchState }, { operation }) {
        // tslint:disable-next-line: prefer-const
        let _a = getState().sessionDetail || { openedTabCount: 0 }, { openedTabCount, lastExitTime } = _a, detail = __rest(_a, ["openedTabCount", "lastExitTime"]);
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
__decorate([
    Action(SetLanguage),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetLanguage]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setLanguage", null);
__decorate([
    Action(SetTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetTenant]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setTenant", null);
__decorate([
    Action(SetRemember),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SetRemember]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "setRemember", null);
__decorate([
    Action(ModifyOpenedTabCount),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ModifyOpenedTabCount]),
    __metadata("design:returntype", void 0)
], SessionState.prototype, "modifyOpenedTabCount", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], SessionState, "getLanguage", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SessionState, "getTenant", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SessionState, "getSessionDetail", null);
SessionState = SessionState_1 = __decorate([
    State({
        name: 'SessionState',
        defaults: { sessionDetail: { openedTabCount: 0 } },
    }),
    Injectable(),
    __metadata("design:paramtypes", [OAuthService, Store, Actions])
], SessionState);
export { SessionState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpYi9zdGF0ZXMvc2Vzc2lvbi5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLE1BQU0sRUFDTixPQUFPLEVBQ1Asa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixLQUFLLEVBRUwsS0FBSyxHQUNOLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sNEJBQTRCLENBQUM7QUFRcEMsSUFBYSxZQUFZLG9CQUF6QixNQUFhLFlBQVk7SUFnQnZCLFlBQW9CLFlBQTBCLEVBQVUsS0FBWSxFQUFVLE9BQWdCO1FBQTFFLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDNUYsT0FBTzthQUNKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBRTNGLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUUvRCxJQUNFLGFBQWEsQ0FBQyxZQUFZO2dCQUMxQixhQUFhLENBQUMsY0FBYyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3ZDLGFBQWEsQ0FBQyxRQUFRLEtBQUssS0FBSztnQkFDaEMsYUFBYSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsRUFDOUM7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM1QjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUUxRCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkNELE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQWlCO1FBQzVDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFHRCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFpQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBR0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsYUFBYSxFQUFpQjtRQUN0RCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBOEJELFdBQVcsQ0FDVCxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQStCLEVBQ3JELEVBQUUsT0FBTyxFQUFFLHdCQUF3QixHQUFHLElBQUksRUFBZTtRQUV6RCxVQUFVLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztTQUNsQixDQUFDLENBQUM7UUFFSCxJQUFJLHdCQUF3QjtZQUFFLE9BQU8sUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFHRCxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQStCLEVBQUUsRUFBRSxPQUFPLEVBQWE7UUFDM0UsVUFBVSxDQUFDO1lBQ1QsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFdBQVcsQ0FDVCxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQStCLEVBQ3JELEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBZTtRQUVsQyxNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFFckMsVUFBVSxDQUFDO1lBQ1QsYUFBYSxrQ0FDUixhQUFhLEtBQ2hCLFFBQVEsR0FDVDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxvQkFBb0IsQ0FDbEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUErQixFQUNyRCxFQUFFLFNBQVMsRUFBd0I7UUFFbkMseUNBQXlDO1FBQ3pDLElBQUksc0RBQzBFLEVBRDFFLEVBQUUsY0FBYyxFQUFFLFlBQVksT0FDNEMsRUFEMUMsdURBQzBDLENBQUM7UUFFL0UsSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQzVCLGNBQWMsRUFBRSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ25DLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFFRCxVQUFVLENBQUM7WUFDVCxhQUFhLGtCQUNYLGNBQWM7Z0JBQ2QsWUFBWSxJQUNULE1BQU0sQ0FDVjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBN0RDO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7NkNBRzRCLFdBQVc7OytDQU8xRDtBQUdEO0lBREMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7NkNBQ2tELFNBQVM7OzZDQUk1RTtBQUdEO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7NkNBR0ssV0FBVzs7K0NBVW5DO0FBR0Q7SUFEQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7OzZDQUdaLG9CQUFvQjs7d0RBd0JwQztBQXRHRDtJQURDLFFBQVEsRUFBRTs7OztxQ0FHVjtBQUdEO0lBREMsUUFBUSxFQUFFOzs7O21DQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7MENBR1Y7QUFkVSxZQUFZO0lBTHhCLEtBQUssQ0FBZ0I7UUFDcEIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFtQjtLQUNwRSxDQUFDO0lBQ0QsVUFBVSxFQUFFO3FDQWlCdUIsWUFBWSxFQUFpQixLQUFLLEVBQW1CLE9BQU87R0FoQm5GLFlBQVksQ0F5R3hCO1NBekdZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uLFxyXG4gIEFjdGlvbnMsXHJcbiAgb2ZBY3Rpb25TdWNjZXNzZnVsLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFN0YXRlLFxyXG4gIFN0YXRlQ29udGV4dCxcclxuICBTdG9yZSxcclxufSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvY29uZmlnLmFjdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIE1vZGlmeU9wZW5lZFRhYkNvdW50LFxyXG4gIFNldExhbmd1YWdlLFxyXG4gIFNldFJlbWVtYmVyLFxyXG4gIFNldFRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3Nlc3Npb24uYWN0aW9ucyc7XHJcbmltcG9ydCB7IEFCUCwgU2Vzc2lvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5AU3RhdGU8U2Vzc2lvbi5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdTZXNzaW9uU3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHNlc3Npb25EZXRhaWw6IHsgb3BlbmVkVGFiQ291bnQ6IDAgfSB9IGFzIFNlc3Npb24uU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0TGFuZ3VhZ2UoeyBsYW5ndWFnZSB9OiBTZXNzaW9uLlN0YXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFRlbmFudCh7IHRlbmFudCB9OiBTZXNzaW9uLlN0YXRlKTogQUJQLkJhc2ljSXRlbSB7XHJcbiAgICByZXR1cm4gdGVuYW50O1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0U2Vzc2lvbkRldGFpbCh7IHNlc3Npb25EZXRhaWwgfTogU2Vzc2lvbi5TdGF0ZSk6IFNlc3Npb24uU2Vzc2lvbkRldGFpbCB7XHJcbiAgICByZXR1cm4gc2Vzc2lvbkRldGFpbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlLCBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMpIHtcclxuICAgIGFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKEdldEFwcENvbmZpZ3VyYXRpb24pKVxyXG4gICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNlc3Npb25EZXRhaWwgfSA9IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlKSB8fCB7IHNlc3Npb25EZXRhaWw6IHt9IH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZpdmVNaW51dGVzQmVmb3JlID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgLSA1ICogNjAgKiAxMDAwO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLmxhc3RFeGl0VGltZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5vcGVuZWRUYWJDb3VudCA9PT0gMCAmJlxyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UuaGFzVmFsaWRBY2Nlc3NUb2tlbigpICYmXHJcbiAgICAgICAgICBzZXNzaW9uRGV0YWlsLnJlbWVtYmVyID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgc2Vzc2lvbkRldGFpbC5sYXN0RXhpdFRpbWUgPCBmaXZlTWludXRlc0JlZm9yZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBNb2RpZnlPcGVuZWRUYWJDb3VudCgnaW5jcmVhc2UnKSk7XHJcblxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICd1bmxvYWQnKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoJ2RlY3JlYXNlJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0TGFuZ3VhZ2UpXHJcbiAgc2V0TGFuZ3VhZ2UoXHJcbiAgICB7IHBhdGNoU3RhdGUsIGRpc3BhdGNoIH06IFN0YXRlQ29udGV4dDxTZXNzaW9uLlN0YXRlPixcclxuICAgIHsgcGF5bG9hZCwgZGlzcGF0Y2hBcHBDb25maWd1cmF0aW9uID0gdHJ1ZSB9OiBTZXRMYW5ndWFnZSxcclxuICApIHtcclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZTogcGF5bG9hZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChkaXNwYXRjaEFwcENvbmZpZ3VyYXRpb24pIHJldHVybiBkaXNwYXRjaChuZXcgR2V0QXBwQ29uZmlndXJhdGlvbigpKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oU2V0VGVuYW50KVxyXG4gIHNldFRlbmFudCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LCB7IHBheWxvYWQgfTogU2V0VGVuYW50KSB7XHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgdGVuYW50OiBwYXlsb2FkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFNldFJlbWVtYmVyKVxyXG4gIHNldFJlbWVtYmVyKFxyXG4gICAgeyBnZXRTdGF0ZSwgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8U2Vzc2lvbi5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQ6IHJlbWVtYmVyIH06IFNldFJlbWVtYmVyLFxyXG4gICkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uRGV0YWlsIH0gPSBnZXRTdGF0ZSgpO1xyXG5cclxuICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICBzZXNzaW9uRGV0YWlsOiB7XHJcbiAgICAgICAgLi4uc2Vzc2lvbkRldGFpbCxcclxuICAgICAgICByZW1lbWJlcixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihNb2RpZnlPcGVuZWRUYWJDb3VudClcclxuICBtb2RpZnlPcGVuZWRUYWJDb3VudChcclxuICAgIHsgZ2V0U3RhdGUsIHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFNlc3Npb24uU3RhdGU+LFxyXG4gICAgeyBvcGVyYXRpb24gfTogTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbiAgKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxyXG4gICAgbGV0IHsgb3BlbmVkVGFiQ291bnQsIGxhc3RFeGl0VGltZSwgLi4uZGV0YWlsIH0gPVxyXG4gICAgICBnZXRTdGF0ZSgpLnNlc3Npb25EZXRhaWwgfHwgKHsgb3BlbmVkVGFiQ291bnQ6IDAgfSBhcyBTZXNzaW9uLlNlc3Npb25EZXRhaWwpO1xyXG5cclxuICAgIGlmIChvcGVyYXRpb24gPT09ICdpbmNyZWFzZScpIHtcclxuICAgICAgb3BlbmVkVGFiQ291bnQrKztcclxuICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnZGVjcmVhc2UnKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50LS07XHJcbiAgICAgIGxhc3RFeGl0VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghb3BlbmVkVGFiQ291bnQgfHwgb3BlbmVkVGFiQ291bnQgPCAwKSB7XHJcbiAgICAgIG9wZW5lZFRhYkNvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgc2Vzc2lvbkRldGFpbDoge1xyXG4gICAgICAgIG9wZW5lZFRhYkNvdW50LFxyXG4gICAgICAgIGxhc3RFeGl0VGltZSxcclxuICAgICAgICAuLi5kZXRhaWwsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19