import { ModuleWithProviders } from '@angular/core';
import { StartupService } from '@fs/ng-alain';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export declare function StartupServiceFactory(startupService: StartupService): () => Promise<any>;
export declare function I18nHttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare class NgAlainSharedModule {
    static forRoot(): ModuleWithProviders;
}
