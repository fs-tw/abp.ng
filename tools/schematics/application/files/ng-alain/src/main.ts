import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => {
    return platformBrowserDynamic()
        .bootstrapModule(AppModule, {
            defaultEncapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false,
        })
        .then(res => {
            if ((window as any).appBootstrap) {
                (window as any).appBootstrap();
            }
            return res;
        });
};
bootstrap();
