(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.theme.basic'), require('@fs/ng-alain/shared'), require('@fs/ng-alain/layout'), require('@angular/core'), require('@abp/ng.core'), require('@ngxs/store')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/basic', ['exports', '@abp/ng.theme.basic', '@fs/ng-alain/shared', '@fs/ng-alain/layout', '@angular/core', '@abp/ng.core', '@ngxs/store'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].basic = {}), global.ng_theme_basic, global.fs['ng-alain'].shared, global.fs['ng-alain'].layout, global.ng.core, global.ng_core, global.store));
}(this, (function (exports, ng_theme_basic, shared, layout, i0, ng_core, store) { 'use strict';

    var BASIC_THEME_STYLES_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [store.Store],
            multi: true,
        },
    ];
    function configureStyles(store) {
        return function () {
            //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
            initLayouts(store);
        };
    }
    function initLayouts(store) {
        store.dispatch([
            new ng_core.AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: layout.LayoutDefaultComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: layout.LayoutPassportComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: layout.LayoutFullScreenComponent,
            }),
        ]);
    }

    var NgAlainBasicModule = /** @class */ (function () {
        function NgAlainBasicModule() {
        }
        NgAlainBasicModule.forRoot = function () {
            return {
                ngModule: NgAlainBasicModule,
                providers: [BASIC_THEME_STYLES_PROVIDERS],
            };
        };
        return NgAlainBasicModule;
    }());
    NgAlainBasicModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgAlainBasicModule });
    NgAlainBasicModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgAlainBasicModule_Factory(t) { return new (t || NgAlainBasicModule)(); }, imports: [[
                shared.NgAlainSharedModule,
                ng_theme_basic.ThemeBasicModule,
                layout.LayoutModule
            ],
            shared.NgAlainSharedModule,
            ng_theme_basic.ThemeBasicModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgAlainBasicModule, { imports: [shared.NgAlainSharedModule,
                ng_theme_basic.ThemeBasicModule,
                layout.LayoutModule], exports: [shared.NgAlainSharedModule,
                ng_theme_basic.ThemeBasicModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgAlainBasicModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            shared.NgAlainSharedModule,
                            ng_theme_basic.ThemeBasicModule,
                            layout.LayoutModule
                        ],
                        exports: [
                            shared.NgAlainSharedModule,
                            ng_theme_basic.ThemeBasicModule
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BASIC_THEME_STYLES_PROVIDERS = BASIC_THEME_STYLES_PROVIDERS;
    exports.NgAlainBasicModule = NgAlainBasicModule;
    exports.configureStyles = configureStyles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-basic.umd.js.map
