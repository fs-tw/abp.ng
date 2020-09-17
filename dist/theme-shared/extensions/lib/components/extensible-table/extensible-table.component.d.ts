import { ListService, ConfigStateService } from '@abp/ng.core';
import { Injector, TemplateRef, TrackByFunction, Type, InjectionToken, InjectFlags, SimpleChanges, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityProp, EntityPropList } from '../../models/entity-props';
import { PropData } from '../../models/props';
import { EntityActionList } from '../../models/entity-actions';
export declare class ExtensibleTableComponent<R = any> implements OnChanges {
    private locale;
    private config;
    protected _actionsText: string;
    set actionsText(value: string);
    get actionsText(): string;
    data: R[];
    list: ListService;
    recordsTotal: number;
    set actionsColumnWidth(width: number);
    actionsTemplate: TemplateRef<any>;
    getInjected: <T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags) => T;
    readonly columnWidths: number[];
    readonly propList: EntityPropList<R>;
    readonly actionList: EntityActionList<R>;
    readonly trackByFn: TrackByFunction<EntityProp<R>>;
    constructor(locale: string, config: ConfigStateService, injector: Injector);
    private setColumnWidths;
    private getDate;
    private getIcon;
    getContent(prop: EntityProp<R>, data: PropData): Observable<string>;
    ngOnChanges({ data }: SimpleChanges): void;
}
