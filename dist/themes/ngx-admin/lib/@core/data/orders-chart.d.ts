export interface OrdersChart {
    chartLabel: string[];
    linesData: number[][];
}
export declare abstract class OrdersChartData {
    abstract getOrdersChartData(period: string): OrdersChart;
}
