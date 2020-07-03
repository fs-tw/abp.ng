import { ListService } from '@abp/ng.core';
import { Injector, TemplateRef, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityProp, EntityPropList } from '../../models/entity-props';
import { PropData } from '../../models/props';
export declare class ExtensibleTableComponent<R = any> {
    private locale;
    actionsText: string;
    data: R[];
    list: ListService;
    recordsTotal: number;
    set actionsColumnWidth(width: number);
    actionsTemplate: TemplateRef<any>;
    readonly columnWidths: number[];
    readonly propList: EntityPropList<R>;
    readonly trackByFn: TrackByFunction<EntityProp<R>>;
    constructor(locale: string, injector: Injector);
    private setColumnWidths;
    private getDate;
    private getIcon;
    getContent(prop: EntityProp<R>, data: PropData): Observable<string>;
}
