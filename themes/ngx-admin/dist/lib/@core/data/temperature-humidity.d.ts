import { Observable } from 'rxjs';
export interface Temperature {
    value: number;
    min: number;
    max: number;
}
export declare abstract class TemperatureHumidityData {
    abstract getTemperatureData(): Observable<Temperature>;
    abstract getHumidityData(): Observable<Temperature>;
}
