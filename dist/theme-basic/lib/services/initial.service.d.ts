import { DomInsertionService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
export declare class InitialService {
    private domInsertion;
    private store;
    constructor(domInsertion: DomInsertionService, store: Store);
    appendStyle(): void;
}
