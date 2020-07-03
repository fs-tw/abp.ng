import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StartupService } from '@fs/ng-alain/core';
import * as i0 from "@angular/core";
import * as i1 from "./global-config.module";
import * as i2 from "@fs/ng-alain/core";
import * as i3 from "@fs/ng-alain/shared";
import * as i4 from "@ngx-translate/core";
import * as i5 from "@abp/ng.theme.shared";
import * as i6 from "@abp/ng.theme.basic";
import * as i7 from "@fs/ng-alain/basic";
export declare function I18nHttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare function StartupServiceFactory(startupService: StartupService): () => Promise<any>;
export declare class NgAlainModule {
    static forRoot(): ModuleWithProviders<NgAlainModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<NgAlainModule, never, [typeof i1.GlobalConfigModule, typeof i2.CoreModule, typeof i3.STWidgetModule, typeof i4.TranslateModule, typeof i5.ThemeSharedModule, typeof i6.ThemeBasicModule, typeof i7.NgAlainBasicModule, typeof i3.JsonSchemaModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<NgAlainModule>;
}
