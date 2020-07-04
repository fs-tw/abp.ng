import { Injector, TrackByFunction } from '@angular/core';
import { ToolbarActionList, ToolbarComponent } from '../../models/toolbar-actions';
import { AbstractActionsComponent } from '../abstract-actions/abstract-actions.component';
export declare class PageToolbarComponent<R = any> extends AbstractActionsComponent<ToolbarActionList<R>> {
    private readonly injector;
    readonly trackByFn: TrackByFunction<ToolbarComponent<R>>;
    constructor(injector: Injector);
    createInjector(action: ToolbarComponent<R>): Injector;
}
