import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActive, UserActivityData } from '../data/user-activity';
export declare class UserActivityService extends UserActivityData {
    private periods;
    private getRandom;
    private generateUserActivityRandomData;
    data: {};
    constructor(periods: PeriodsService);
    private getDataWeek;
    private getDataMonth;
    private getDataYear;
    getUserActivityData(period: string): Observable<UserActive[]>;
}
