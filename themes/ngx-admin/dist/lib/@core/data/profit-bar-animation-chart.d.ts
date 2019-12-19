import { Observable } from 'rxjs';
export declare abstract class ProfitBarAnimationChartData {
    abstract getChartData(): Observable<{
        firstLine: number[];
        secondLine: number[];
    }>;
}
