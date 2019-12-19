(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingManagementModule = /** @class */ (function () {
        function SettingManagementModule() {
        }
        SettingManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return SettingManagementModule;
    }());

    exports.SettingManagementModule = SettingManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management.umd.js.map
