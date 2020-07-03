(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.setting-management')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/wrap', ['exports', '@angular/core', '@abp/ng.setting-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management'].wrap = {}), global.ng.core, global.ng_settingManagement));
}(this, (function (exports, i0, ng_settingManagement) { 'use strict';

    var SettingManagementWrapModule = /** @class */ (function () {
        function SettingManagementWrapModule() {
        }
        return SettingManagementWrapModule;
    }());
    SettingManagementWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementWrapModule });
    SettingManagementWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementWrapModule_Factory(t) { return new (t || SettingManagementWrapModule)(); }, imports: [[ng_settingManagement.SettingManagementModule],
            ng_settingManagement.SettingManagementModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementWrapModule, { imports: [ng_settingManagement.SettingManagementModule], exports: [ng_settingManagement.SettingManagementModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingManagementWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_settingManagement.SettingManagementModule],
                        exports: [ng_settingManagement.SettingManagementModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SettingManagementWrapModule = SettingManagementWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-wrap.umd.js.map
