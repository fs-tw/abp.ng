import { Injector } from '@angular/core';
import { ActionData, ActionList } from '../../models/actions';
export declare abstract class AbstractActionsComponent<L extends ActionList<any>> extends ActionData<InferredRecord<L>> {
    readonly actionList: L;
    readonly getInjected: InferredData<L>['getInjected'];
    readonly record: InferredData<L>['record'];
    constructor(injector: Injector);
}
declare type InferredData<L> = ActionData<InferredRecord<L>>;
declare type InferredRecord<L> = L extends ActionList<infer R> ? R : never;
export {};
