import { Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
export declare class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    private data;
    constructor();
    getDataForFirstLine(): number[];
    getDataForSecondLine(): number[];
    createEmptyArray(nPoints: number): any[];
    getChartData(): Observable<{
        firstLine: number[];
        secondLine: number[];
    }>;
}
