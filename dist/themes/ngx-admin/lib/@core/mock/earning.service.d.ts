import { Observable } from 'rxjs';
import { LiveUpdateChart, PieChart, EarningData } from '../data/earning';
export declare class EarningService extends EarningData {
    private currentDate;
    private currentValue;
    private ONE_DAY;
    private pieChartData;
    private liveUpdateChartData;
    getDefaultLiveChartData(elementsNumber: number): {
        value: (string | number)[];
    }[];
    generateRandomLiveChartData(): {
        value: (string | number)[];
    };
    getEarningLiveUpdateCardData(currency: any): Observable<any[]>;
    getEarningCardData(currency: string): Observable<LiveUpdateChart>;
    getEarningPieChartData(): Observable<PieChart[]>;
}
