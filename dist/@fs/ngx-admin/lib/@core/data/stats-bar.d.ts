import { Observable } from 'rxjs';
export declare abstract class StatsBarData {
    abstract getStatsBarData(): Observable<number[]>;
}
