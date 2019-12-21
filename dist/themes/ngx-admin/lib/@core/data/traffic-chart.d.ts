import { Observable } from 'rxjs';
export declare abstract class TrafficChartData {
    abstract getTrafficChartData(): Observable<number[]>;
}
