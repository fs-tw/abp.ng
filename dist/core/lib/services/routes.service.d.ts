import { OnDestroy } from '@angular/core';
import { Actions, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ABP } from '../models/common';
import { TreeNode } from '../utils/tree-utils';
export declare abstract class AbstractTreeService<T extends object> {
    abstract id: string;
    abstract parentId: string;
    abstract hide: (item: T) => boolean;
    abstract sort: (a: T, b: T) => number;
    private _flat$;
    private _tree$;
    private _visible$;
    get flat(): T[];
    get flat$(): Observable<T[]>;
    get tree(): TreeNode<T>[];
    get tree$(): Observable<TreeNode<T>[]>;
    get visible(): TreeNode<T>[];
    get visible$(): Observable<TreeNode<T>[]>;
    protected createTree(items: T[]): TreeNode<T>[];
    private filterWith;
    private publish;
    add(items: T[]): T[];
    find(predicate: (item: TreeNode<T>) => boolean, tree?: TreeNode<T>[]): TreeNode<T> | null;
    patch(identifier: string, props: Partial<T>): T[] | false;
    refresh(): T[];
    remove(identifiers: string[]): T[];
    search(params: Partial<T>, tree?: TreeNode<T>[]): TreeNode<T> | null;
}
export declare abstract class AbstractNavTreeService<T extends ABP.Nav> extends AbstractTreeService<T> implements OnDestroy {
    protected actions: Actions;
    protected store: Store;
    readonly id = "name";
    readonly parentId = "parentName";
    readonly hide: (item: T) => boolean;
    readonly sort: (a: T, b: T) => number;
    constructor(actions: Actions, store: Store);
    protected isGranted({ requiredPolicy }: T): boolean;
    hasChildren(identifier: string): boolean;
    hasInvisibleChild(identifier: string): boolean;
    ngOnDestroy(): void;
}
export declare class RoutesService extends AbstractNavTreeService<ABP.Route> {
}
export declare class SettingTabsService extends AbstractNavTreeService<ABP.Tab> {
}
