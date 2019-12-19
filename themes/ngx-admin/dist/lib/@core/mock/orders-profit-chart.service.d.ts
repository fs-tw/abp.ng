import { Observable } from 'rxjs';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';
export declare class OrdersProfitChartService extends OrdersProfitChartData {
    private ordersChartService;
    private profitChartService;
    private summary;
    constructor(ordersChartService: OrdersChartData, profitChartService: ProfitChartData);
    getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]>;
    getOrdersChartData(period: string): Observable<OrdersChart>;
    getProfitChartData(period: string): Observable<ProfitChart>;
}
