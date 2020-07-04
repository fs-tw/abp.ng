import { EntityActionsFactory } from '../models/entity-actions';
import { EntityPropsFactory } from '../models/entity-props';
import { CreateFormPropsFactory, EditFormPropsFactory } from '../models/form-props';
import { ToolbarActionsFactory } from '../models/toolbar-actions';
export declare class ExtensionsService<R = any> {
    readonly entityActions: EntityActionsFactory<R>;
    readonly toolbarActions: ToolbarActionsFactory<R[]>;
    readonly entityProps: EntityPropsFactory<R>;
    readonly createFormProps: CreateFormPropsFactory<R>;
    readonly editFormProps: EditFormPropsFactory<R>;
}
