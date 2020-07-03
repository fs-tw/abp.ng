export declare class BaseTreeNode<T extends object> {
    children: TreeNode<T>[];
    isLeaf: boolean;
    parent: TreeNode<T>;
    constructor(props: T);
    static create<T extends object>(props: T): TreeNode<T>;
}
export declare function createTreeFromList<T extends object, R extends unknown>(list: T[], keySelector: (item: T) => number | string | symbol, parentKeySelector: typeof keySelector, valueMapper: (item: T) => R): R[];
export declare function createMapFromList<T extends object, R extends unknown>(list: T[], keySelector: (item: T) => number | string | symbol, valueMapper: (item: T) => R): Map<string | number | symbol, R>;
export declare type TreeNode<T extends object> = {
    [K in keyof T]: T[K];
} & {
    children: TreeNode<T>[];
    isLeaf: boolean;
    parent?: TreeNode<T>;
};
