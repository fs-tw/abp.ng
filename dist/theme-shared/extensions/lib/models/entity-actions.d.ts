import { Type } from '@angular/core';
import { O } from 'ts-toolbelt';
import { Action, ActionContributorCallback, ActionContributorCallbacks, ActionList, Actions, ActionsFactory } from './actions';
export declare class EntityActionList<R = any> extends ActionList<R, EntityAction<R>> {
}
export declare class EntityActions<R = any> extends Actions<EntityActionList<R>> {
    protected _ctor: Type<EntityActionList<R>>;
}
export declare class EntityActionsFactory<R = any> extends ActionsFactory<EntityActions<R>> {
    protected _ctor: Type<EntityActions<R>>;
}
export declare class EntityAction<R = any> extends Action<R> {
    readonly text: string;
    readonly icon: string;
    constructor(options: EntityActionOptions<R>);
    static create<R = any>(options: EntityActionOptions<R>): EntityAction<R>;
    static createMany<R = any>(arrayOfOptions: EntityActionOptions<R>[]): EntityAction<R>[];
}
export declare type EntityActionOptions<R = any> = O.Optional<O.Writable<EntityAction<R>>, 'permission' | 'visible' | 'icon'>;
export declare type EntityActionDefaults<R = any> = Record<string, EntityAction<R>[]>;
export declare type EntityActionContributorCallback<R = any> = ActionContributorCallback<EntityActionList<R>>;
export declare type EntityActionContributorCallbacks<R = any> = ActionContributorCallbacks<EntityActionList<R>>;
