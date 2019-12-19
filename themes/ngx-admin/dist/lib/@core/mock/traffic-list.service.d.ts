import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficList, TrafficListData } from '../data/traffic-list';
export declare class TrafficListService extends TrafficListData {
    private period;
    private getRandom;
    private data;
    constructor(period: PeriodsService);
    private getDataWeek;
    private getDataMonth;
    private getDataYear;
    private reduceData;
    getTrafficListData(period: string): Observable<TrafficList>;
}
