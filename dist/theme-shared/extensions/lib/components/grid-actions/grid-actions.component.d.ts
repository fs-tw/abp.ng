import { Injector, TrackByFunction } from '@angular/core';
import { EntityAction, EntityActionList } from '../../models/entity-actions';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
export declare class GridActionsComponent<R = any> extends AbstractActionsComponent<EntityActionList<R>> {
    icon: string;
    readonly index: number;
    text: string;
    readonly trackByFn: TrackByFunction<EntityAction<R>>;
    constructor(injector: Injector);
}
