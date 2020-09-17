import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { O } from 'ts-toolbelt';
import { Prop, PropCallback, PropContributorCallback, PropContributorCallbacks, PropList, Props, PropsFactory } from './props';
import { ActionCallback } from './actions';
export declare class EntityPropList<R = any> extends PropList<R, EntityProp<R>> {
}
export declare class EntityProps<R = any> extends Props<EntityPropList<R>> {
    protected _ctor: Type<EntityPropList<R>>;
}
export declare class EntityPropsFactory<R = any> extends PropsFactory<EntityProps<R>> {
    protected _ctor: Type<EntityProps<R>>;
}
export declare class EntityProp<R = any> extends Prop<R> {
    readonly columnWidth: number | undefined;
    readonly sortable: boolean;
    readonly valueResolver: PropCallback<R, Observable<any>>;
    readonly action: ActionCallback<R>;
    constructor(options: EntityPropOptions<R>);
    static create<R = any>(options: EntityPropOptions<R>): EntityProp<R>;
    static createMany<R = any>(arrayOfOptions: EntityPropOptions<R>[]): EntityProp<R>[];
}
export declare type EntityPropOptions<R = any> = O.Optional<O.Writable<EntityProp<R>>, 'permission' | 'visible' | 'displayName' | 'isExtra' | 'columnWidth' | 'sortable' | 'valueResolver' | 'action'>;
export declare type EntityPropDefaults<R = any> = Record<string, EntityProp<R>[]>;
export declare type EntityPropContributorCallback<R = any> = PropContributorCallback<EntityPropList<R>>;
export declare type EntityPropContributorCallbacks<R = any> = PropContributorCallbacks<EntityPropList<R>>;
