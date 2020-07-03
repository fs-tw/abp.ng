import { StateContext } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import { ReplaceableComponents } from '../models/replaceable-components';
export declare class ReplaceableComponentsState {
    static getAll({ replaceableComponents, }: ReplaceableComponents.State): ReplaceableComponents.ReplaceableComponent[];
    static getComponent(key: string): (state: ReplaceableComponents.State) => ReplaceableComponents.ReplaceableComponent;
    replaceableComponentsAction({ getState, patchState }: StateContext<ReplaceableComponents.State>, { payload }: AddReplaceableComponent): void;
}
