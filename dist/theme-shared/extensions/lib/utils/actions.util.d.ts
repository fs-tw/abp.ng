import { ActionsFactory } from '../models/actions';
import { EntityActionContributorCallbacks, EntityActionDefaults, EntityActionsFactory } from '../models/entity-actions';
import { ToolbarActionContributorCallbacks, ToolbarActionDefaults, ToolbarActionsFactory } from '../models/toolbar-actions';
export declare function mergeWithDefaultActions<F extends ActionsFactory<any>>(extension: F, defaultActions: InferredActionDefaults<F>, ...contributors: InferredActionContributorCallbacks<F>[]): void;
declare type InferredActionDefaults<F> = F extends EntityActionsFactory<infer RE> ? EntityActionDefaults<RE> : F extends ToolbarActionsFactory<infer RT> ? ToolbarActionDefaults<RT> : never;
declare type InferredActionContributorCallbacks<F> = F extends EntityActionsFactory<infer RE> ? EntityActionContributorCallbacks<RE> : F extends ToolbarActionsFactory<infer RT> ? ToolbarActionContributorCallbacks<RT> : never;
export {};
