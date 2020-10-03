import { ReplaceableComponents } from '../models/replaceable-components';
/**
 * @deprecated To be deleted in v4.0. Use ReplaceableComponentsService instead. See the doc (https://docs.abp.io/en/abp/latest/UI/Angular/Component-Replacement)
 */
export declare class AddReplaceableComponent {
    payload: ReplaceableComponents.ReplaceableComponent;
    reload?: boolean;
    static readonly type = "[ReplaceableComponents] Add";
    constructor(payload: ReplaceableComponents.ReplaceableComponent, reload?: boolean);
}
