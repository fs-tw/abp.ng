import { EntityPropContributorCallbacks, EntityPropDefaults, EntityPropsFactory } from '../models/entity-props';
import { CreateFormPropContributorCallbacks, CreateFormPropDefaults, CreateFormPropsFactory, EditFormPropContributorCallbacks, EditFormPropDefaults, EditFormPropsFactory } from '../models/form-props';
import { PropData, PropsFactory } from '../models/props';
export declare function createExtraPropertyValueResolver<T>(name: string): (data?: PropData<T>) => import("rxjs").Observable<any>;
export declare function mergeWithDefaultProps<F extends PropsFactory<any>>(extension: F, defaultProps: InferredPropDefaults<F>, ...contributors: InferredPropContributorCallbacks<F>[]): void;
declare type InferredPropDefaults<F> = F extends EntityPropsFactory<infer RE> ? EntityPropDefaults<RE> : F extends CreateFormPropsFactory<infer RCF> ? CreateFormPropDefaults<RCF> : F extends EditFormPropsFactory<infer REF> ? EditFormPropDefaults<REF> : never;
declare type InferredPropContributorCallbacks<F> = F extends EntityPropsFactory<infer RE> ? EntityPropContributorCallbacks<RE> : F extends CreateFormPropsFactory<infer RCF> ? CreateFormPropContributorCallbacks<RCF> : F extends EditFormPropsFactory<infer REF> ? EditFormPropContributorCallbacks<REF> : never;
export {};
