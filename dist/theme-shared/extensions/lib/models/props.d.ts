import { LinkedList } from '@abp/utils';
import { InjectFlags, InjectionToken, Type } from '@angular/core';
import { O } from 'ts-toolbelt';
import { ePropType } from '../enums/props.enum';
export declare abstract class PropList<R = any, A = Prop<R>> extends LinkedList<A> {
}
export declare abstract class PropData<R = any> {
    abstract getInjected: <T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) => T;
    index?: number;
    abstract record: R;
    get data(): ReadonlyPropData<R>;
}
export declare type ReadonlyPropData<R = any> = O.Readonly<Omit<PropData<R>, 'data'>>;
export declare abstract class Prop<R = any> {
    readonly type: ePropType;
    readonly name: string;
    readonly displayName: string;
    readonly permission: string;
    readonly visible: PropPredicate<R>;
    readonly isExtra: boolean;
    constructor(type: ePropType, name: string, displayName: string, permission: string, visible?: PropPredicate<R>, isExtra?: boolean);
}
export declare type PropCallback<T, R = any> = (data?: Omit<PropData<T>, 'data'>) => R;
export declare type PropPredicate<T> = (data?: Omit<PropData<T>, 'data'>) => boolean;
export declare abstract class PropsFactory<C extends Props<any>> {
    protected abstract _ctor: Type<C>;
    private contributorCallbacks;
    get(name: string): C;
}
export declare abstract class Props<L extends PropList> {
    private readonly callbackList;
    protected abstract _ctor: Type<L>;
    get props(): L;
    constructor(callbackList: PropContributorCallback<L>[]);
    addContributor(contributeCallback: PropContributorCallback<L>): void;
    clearContributors(): void;
}
export declare type PropContributorCallbacks<L extends PropList<any>> = Record<string, PropContributorCallback<L>[]>;
export declare type PropContributorCallback<L extends PropList<any>> = (propList: L) => any;
