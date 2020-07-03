import { LinkedList } from '@abp/utils';
import { InjectFlags, InjectionToken, Type } from '@angular/core';
import { O } from 'ts-toolbelt';
export declare abstract class ActionList<R = any, A = Action<R>> extends LinkedList<A> {
}
export declare abstract class ActionData<R = any> {
    abstract getInjected: <T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) => T;
    index?: number;
    abstract record: R;
    get data(): ReadonlyActionData<R>;
}
export declare type ReadonlyActionData<R = any> = O.Readonly<Omit<ActionData<R>, 'data'>>;
export declare abstract class Action<R = any> {
    readonly permission: string;
    readonly visible: ActionPredicate<R>;
    readonly action: ActionCallback<R>;
    constructor(permission: string, visible?: ActionPredicate<R>, action?: ActionCallback<R>);
}
export declare type ActionCallback<T, R = any> = (data?: Omit<ActionData<T>, 'data'>) => R;
export declare type ActionPredicate<T> = (data?: Omit<ActionData<T>, 'data'>) => boolean;
export declare abstract class ActionsFactory<C extends Actions<any>> {
    protected abstract _ctor: Type<C>;
    private contributorCallbacks;
    get(name: string): C;
}
export declare abstract class Actions<L extends ActionList> {
    private readonly callbackList;
    protected abstract _ctor: Type<L>;
    get actions(): L;
    constructor(callbackList: ActionContributorCallback<L>[]);
    addContributor(contributeCallback: ActionContributorCallback<L>): void;
    clearContributors(): void;
}
export declare type ActionContributorCallbacks<L extends ActionList<any>> = Record<string, ActionContributorCallback<L>[]>;
export declare type ActionContributorCallback<L extends ActionList<any>> = (actionList: L) => any;
