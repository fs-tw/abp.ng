import { Injector, ModuleWithProviders, NgModuleFactory, NgModuleRef, Type } from '@angular/core';
export declare class LazyModuleFactory<T> extends NgModuleFactory<T> {
    private moduleWithProviders;
    get moduleType(): Type<T>;
    constructor(moduleWithProviders: ModuleWithProviders<T>);
    create(parentInjector: Injector | null): NgModuleRef<T>;
}
