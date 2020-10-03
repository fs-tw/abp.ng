import { State, StateContext } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import { ReplaceableComponents } from '../models/replaceable-components';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
/**
 * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
 */
export declare class ReplaceableComponentsState {
    private service;
    static getAll({ replaceableComponents, }: ReplaceableComponents.State): ReplaceableComponents.ReplaceableComponent[];
    static getComponent(key: string): (state: ReplaceableComponents.State) => ReplaceableComponents.ReplaceableComponent;
    constructor(service: ReplaceableComponentsService);
    replaceableComponentsAction({ getState, patchState }: StateContext<ReplaceableComponents.State>, { payload, reload }: AddReplaceableComponent): void;
}
