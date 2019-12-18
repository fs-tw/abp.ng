(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/common'), require('@angular/core'), require('@nebular/auth'), require('@nebular/theme'), require('@fs/ngx-admin'), require('@nebular/security')) :
    typeof define === 'function' && define.amd ? define('@fs/ngx-admin/shared', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/common', '@angular/core', '@nebular/auth', '@nebular/theme', '@fs/ngx-admin', '@nebular/security'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ngx-admin'] = global.fs['ngx-admin'] || {}, global.fs['ngx-admin'].shared = {}), global.ng_core, global.ng_theme_shared, global.ng.common, global.ng.core, global.auth, global.theme, global.fs['ngx-admin'], global.security));
}(this, (function (exports, ng_core, ng_theme_shared, common, core, auth, theme, ngxAdmin, security) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-admin-shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxAdminSharedModule = /** @class */ (function () {
        function NgxAdminSharedModule() {
        }
        /**
         * @return {?}
         */
        NgxAdminSharedModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: NgxAdminSharedModule,
                providers: []
            };
        };
        NgxAdminSharedModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule,
                            //abp,
                            ng_core.CoreModule,
                            ng_theme_shared.ThemeSharedModule,
                            //ngx-admin
                            auth.NbAuthModule,
                            theme.NbMenuModule,
                            ngxAdmin.ThemeModule
                        ],
                        exports: [
                            //abp,
                            ng_theme_shared.ThemeSharedModule,
                            //ngx-admin
                            ngxAdmin.ThemeModule,
                            theme.NbLayoutModule,
                            theme.NbSidebarModule,
                            theme.NbSelectModule,
                            theme.NbSearchModule,
                            auth.NbAuthModule,
                            theme.NbMenuModule,
                            theme.NbIconModule,
                            theme.NbAlertModule,
                            theme.NbInputModule,
                            theme.NbButtonModule,
                            theme.NbCheckboxModule,
                            theme.NbCardModule,
                            theme.NbActionsModule,
                            security.NbSecurityModule,
                            theme.NbContextMenuModule
                        ],
                        providers: [],
                        entryComponents: []
                    },] }
        ];
        return NgxAdminSharedModule;
    }());

    exports.NgxAdminSharedModule = NgxAdminSharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ngx-admin-shared.umd.js.map
