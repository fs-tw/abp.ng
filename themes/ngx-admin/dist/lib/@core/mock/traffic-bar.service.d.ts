import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficBarData, TrafficBar } from '../data/traffic-bar';
export declare class TrafficBarService extends TrafficBarData {
    private period;
    private data;
    constructor(period: PeriodsService);
    getDataForWeekPeriod(): TrafficBar;
    getDataForMonthPeriod(): TrafficBar;
    getDataForYearPeriod(): TrafficBar;
    getTrafficBarData(period: string): Observable<TrafficBar>;
}
