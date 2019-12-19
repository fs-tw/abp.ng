export interface ProfitChart {
    chartLabel: string[];
    data: number[][];
}
export declare abstract class ProfitChartData {
    abstract getProfitChartData(period: string): ProfitChart;
}
