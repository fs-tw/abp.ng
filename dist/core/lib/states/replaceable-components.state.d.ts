import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StateContext } from '@ngxs/store';
import { AddReplaceableComponent } from '../actions/replaceable-components.actions';
import { ReplaceableComponents } from '../models/replaceable-components';
export declare class ReplaceableComponentsState {
    private ngZone;
    private router;
    static getAll({ replaceableComponents, }: ReplaceableComponents.State): ReplaceableComponents.ReplaceableComponent[];
    static getComponent(key: string): (state: ReplaceableComponents.State) => ReplaceableComponents.ReplaceableComponent;
    constructor(ngZone: NgZone, router: Router);
    private reloadRoute;
    replaceableComponentsAction({ getState, patchState }: StateContext<ReplaceableComponents.State>, { payload, reload }: AddReplaceableComponent): void;
}
