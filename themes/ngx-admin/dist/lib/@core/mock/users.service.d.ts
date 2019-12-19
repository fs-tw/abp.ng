import { Observable } from 'rxjs';
import { Contacts, RecentUsers, UserData } from '../data/users';
export declare class UserService extends UserData {
    private time;
    private users;
    private types;
    private contacts;
    private recentUsers;
    getUsers(): Observable<any>;
    getContacts(): Observable<Contacts[]>;
    getRecentUsers(): Observable<RecentUsers[]>;
}
