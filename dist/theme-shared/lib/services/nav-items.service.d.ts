import { Observable } from 'rxjs';
import { NavItem } from '../models/nav-item';
export declare class NavItemsService {
    private _items$;
    get items(): NavItem[];
    get items$(): Observable<NavItem[]>;
    addItems(newItems: NavItem[]): void;
    removeItem(id: string | number): void;
    patchItem(id: string | number, item: Partial<Omit<NavItem, 'id'>>): void;
}
