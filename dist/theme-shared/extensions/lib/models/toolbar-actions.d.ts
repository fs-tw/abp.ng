import { Type } from '@angular/core';
import { O } from 'ts-toolbelt';
import { Action, ActionContributorCallback, ActionContributorCallbacks, ActionList, Actions, ActionsFactory } from './actions';
export declare class ToolbarActionList<R = any> extends ActionList<R, ToolbarAction<R> | ToolbarComponent<R>> {
}
export declare class ToolbarActions<R = any> extends Actions<ToolbarActionList<R>> {
    protected _ctor: Type<ToolbarActionList<R>>;
}
export declare class ToolbarActionsFactory<R = any> extends ActionsFactory<ToolbarActions<R>> {
    protected _ctor: Type<ToolbarActions<R>>;
}
export declare class ToolbarAction<R = any> extends Action<R> {
    readonly text: string;
    readonly icon: string;
    constructor(options: ToolbarActionOptions<R>);
    static create<R = any>(options: ToolbarActionOptions<R>): ToolbarAction<R>;
    static createMany<R = any>(arrayOfOptions: ToolbarActionOptions<R>[]): ToolbarAction<R>[];
}
export declare class ToolbarComponent<R = any> extends Action<R> {
    readonly component: Type<any>;
    constructor(options: ToolbarComponentOptions<R>);
    static create<R = any>(options: ToolbarComponentOptions<R>): ToolbarComponent<R>;
    static createMany<R = any>(arrayOfOptions: ToolbarComponentOptions<R>[]): ToolbarComponent<R>[];
}
export declare type ToolbarActionOptions<R = any> = O.Optional<O.Writable<ToolbarAction<R>>, 'permission' | 'visible' | 'icon'>;
export declare type ToolbarComponentOptions<R = any> = O.Optional<O.Writable<ToolbarComponent<R>>, 'permission' | 'visible' | 'action'>;
export declare type ToolbarActionDefaults<R = any> = Record<string, ToolbarAction<R>[]>;
export declare type ToolbarActionContributorCallback<R = any> = ActionContributorCallback<ToolbarActionList<R>>;
export declare type ToolbarActionContributorCallbacks<R = any> = ActionContributorCallbacks<ToolbarActionList<R>>;
