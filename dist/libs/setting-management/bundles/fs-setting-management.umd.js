(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var SettingManagementModule = /** @class */ (function () {
        function SettingManagementModule() {
        }
        return SettingManagementModule;
    }());
    SettingManagementModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementModule });
    SettingManagementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementModule_Factory(t) { return new (t || SettingManagementModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingManagementModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SettingManagementModule = SettingManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management.umd.js.map
