import { ModuleWithProviders } from '@angular/core';
import { ErrorHandler } from './handlers/error.handler';
import { RootParams } from './models/common';
export declare class ThemeSharedModule {
    private errorHandler;
    constructor(errorHandler: ErrorHandler);
    static forRoot(options?: RootParams): ModuleWithProviders<ThemeSharedModule>;
}
