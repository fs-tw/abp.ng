import { Observable } from 'rxjs';
export interface UserActive {
    date: string;
    pagesVisitCount: number;
    deltaUp: boolean;
    newVisits: number;
}
export declare abstract class UserActivityData {
    abstract getUserActivityData(period: string): Observable<UserActive[]>;
}
