import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@delon/acl";
import * as i3 from "@delon/mock";
export declare class GlobalConfigModule {
    constructor(parentModule: GlobalConfigModule);
    static forRoot(): ModuleWithProviders<GlobalConfigModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<GlobalConfigModule, never, [typeof i1.AlainThemeModule, typeof i2.DelonACLModule, typeof i3.DelonMockModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<GlobalConfigModule>;
}
