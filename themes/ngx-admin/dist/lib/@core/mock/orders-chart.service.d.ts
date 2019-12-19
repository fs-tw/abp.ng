import { PeriodsService } from './periods.service';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
export declare class OrdersChartService extends OrdersChartData {
    private period;
    private year;
    private data;
    constructor(period: PeriodsService);
    private getDataForWeekPeriod;
    private getDataForMonthPeriod;
    private getDataForYearPeriod;
    getDataLabels(nPoints: number, labelsArray: string[]): string[];
    getOrdersChartData(period: string): OrdersChart;
}
