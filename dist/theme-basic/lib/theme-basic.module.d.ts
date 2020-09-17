import { ModuleWithProviders } from '@angular/core';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';
export declare const LAYOUTS: (typeof AccountLayoutComponent | typeof ApplicationLayoutComponent)[];
export declare class ThemeBasicModule {
    static forRoot(): ModuleWithProviders<ThemeBasicModule>;
}
export declare class RootThemeBasicModule {
}
