import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export declare function I18nHttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
import { StartupService } from '@fs/ng-alain/core';
export declare function StartupServiceFactory(startupService: StartupService): () => Promise<any>;
export declare class NgAlainModule {
    static forRoot(): ModuleWithProviders<NgAlainModule>;
}
