import { Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';
export declare class StatsProgressBarService extends StatsProgressBarData {
    private progressInfoData;
    getProgressInfoData(): Observable<ProgressInfo[]>;
}
