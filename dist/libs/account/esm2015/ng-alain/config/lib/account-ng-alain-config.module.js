import { NgModule } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import { AccountConfigModule } from '@abp/ng.account/config';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.account/config";
export class AccountNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: AccountNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
AccountNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountNgAlainConfigModule });
AccountNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountNgAlainConfigModule_Factory(t) { return new (t || AccountNgAlainConfigModule)(); }, imports: [[
            AccountConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountNgAlainConfigModule, { imports: [i1.AccountConfigModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AccountConfigModule.forRoot()
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1uZy1hbGFpbi1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL2NvbmZpZy9zcmMvbGliL2FjY291bnQtbmctYWxhaW4tY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQU83RCxNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDO1NBQy9DLENBQUM7SUFDSixDQUFDOzs4REFOVSwwQkFBMEI7bUlBQTFCLDBCQUEwQixrQkFKNUI7WUFDUCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7U0FDOUI7d0ZBRVUsMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FMdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7aUJBQzlCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURV9QUk9WSURFUlMgfSBmcm9tICcuL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlcic7XHJcbmltcG9ydCB7IFNUWUxFU19QUk9WSURFUlMgfSBmcm9tICcuL3Byb3ZpZGVycy9zdHlsZXMucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBY2NvdW50Q29uZmlnTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50L2NvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEFjY291bnRDb25maWdNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudE5nQWxhaW5Db25maWdNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWNjb3VudE5nQWxhaW5Db25maWdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBY2NvdW50TmdBbGFpbkNvbmZpZ01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbUk9VVEVfUFJPVklERVJTLCBTVFlMRVNfUFJPVklERVJTXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==