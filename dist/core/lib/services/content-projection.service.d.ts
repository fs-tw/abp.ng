import { Injector, TemplateRef, Type } from '@angular/core';
import { ProjectionStrategy } from '../strategies/projection.strategy';
export declare class ContentProjectionService {
    private injector;
    constructor(injector: Injector);
    projectContent<T extends Type<any> | TemplateRef<any>>(projectionStrategy: ProjectionStrategy<T>, injector?: Injector): T extends Type<infer U> ? import("@angular/core").ComponentRef<U> : T extends TemplateRef<infer C> ? import("@angular/core").EmbeddedViewRef<C> : never;
}
