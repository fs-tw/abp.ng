import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { NbMenuModule, NbLayoutModule, NbSidebarModule, NbSelectModule, NbSearchModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, NbCardModule, NbActionsModule, NbContextMenuModule } from '@nebular/theme';
import { ThemeModule } from '@fs/ngx-admin';
import { NbSecurityModule } from '@nebular/security';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-admin-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAdminSharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxAdminSharedModule,
            providers: []
        };
    }
}
NgxAdminSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    //abp,
                    CoreModule,
                    ThemeSharedModule,
                    //ngx-admin
                    NbAuthModule,
                    NbMenuModule,
                    ThemeModule
                ],
                exports: [
                    //abp,
                    ThemeSharedModule,
                    //ngx-admin
                    ThemeModule,
                    NbLayoutModule,
                    NbSidebarModule,
                    NbSelectModule,
                    NbSearchModule,
                    NbAuthModule,
                    NbMenuModule,
                    NbIconModule,
                    NbAlertModule,
                    NbInputModule,
                    NbButtonModule,
                    NbCheckboxModule,
                    NbCardModule,
                    NbActionsModule,
                    NbSecurityModule,
                    NbContextMenuModule
                ],
                providers: [],
                entryComponents: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-ngx-admin-shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxAdminSharedModule };
//# sourceMappingURL=fs-ngx-admin-shared.js.map
