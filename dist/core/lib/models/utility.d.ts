import { TemplateRef, Type } from '@angular/core';
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Serializable ? DeepPartial<T[P]> : T[P];
};
declare type Serializable = Record<string | number | symbol, string | number | boolean | Record<string | number | symbol, any>>;
export declare type InferredInstanceOf<T> = T extends Type<infer U> ? U : never;
export declare type InferredContextOf<T> = T extends TemplateRef<infer U> ? U : never;
export {};
