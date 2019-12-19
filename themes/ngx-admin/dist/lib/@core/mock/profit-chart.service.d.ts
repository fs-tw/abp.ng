import { PeriodsService } from './periods.service';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';
export declare class ProfitChartService extends ProfitChartData {
    private period;
    private year;
    private data;
    constructor(period: PeriodsService);
    private getDataForWeekPeriod;
    private getDataForMonthPeriod;
    private getDataForYearPeriod;
    private getRandomData;
    getProfitChartData(period: string): ProfitChart;
}
