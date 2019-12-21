import { Observable } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
export declare class TrafficChartService extends TrafficChartData {
    private data;
    getTrafficChartData(): Observable<number[]>;
}
