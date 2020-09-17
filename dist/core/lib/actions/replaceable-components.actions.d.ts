import { ReplaceableComponents } from '../models/replaceable-components';
/**
 * @see usage: https://github.com/abpframework/abp/pull/2522#issue-358333183
 */
export declare class AddReplaceableComponent {
    payload: ReplaceableComponents.ReplaceableComponent;
    reload?: boolean;
    static readonly type = "[ReplaceableComponents] Add";
    constructor(payload: ReplaceableComponents.ReplaceableComponent, reload?: boolean);
}
