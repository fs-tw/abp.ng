import { TemplateRef, Type } from '@angular/core';
export declare type InferredInstanceOf<T> = T extends Type<infer U> ? U : never;
export declare type InferredContextOf<T> = T extends TemplateRef<infer U> ? U : never;
