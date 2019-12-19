import { Observable } from 'rxjs';
import { Electricity, ElectricityChart, ElectricityData } from '../data/electricity';
export declare class ElectricityService extends ElectricityData {
    private listData;
    private chartPoints;
    chartData: ElectricityChart[];
    constructor();
    getListData(): Observable<Electricity[]>;
    getChartData(): Observable<ElectricityChart[]>;
}
