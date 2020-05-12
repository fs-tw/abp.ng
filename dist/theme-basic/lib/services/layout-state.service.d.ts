import { Store } from '@ngxs/store';
import { AddNavigationElement, RemoveNavigationElementByName } from '../actions';
import { Layout } from '../models/layout';
export declare class LayoutStateService {
    private store;
    constructor(store: Store);
    getNavigationElements(): Layout.NavigationElement[];
    dispatchAddNavigationElement(...args: ConstructorParameters<typeof AddNavigationElement>): import("rxjs").Observable<any>;
    dispatchRemoveNavigationElementByName(...args: ConstructorParameters<typeof RemoveNavigationElementByName>): import("rxjs").Observable<any>;
}
