import { Observable } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
export declare class StatsBarService extends StatsBarData {
    private statsBarData;
    getStatsBarData(): Observable<number[]>;
}
