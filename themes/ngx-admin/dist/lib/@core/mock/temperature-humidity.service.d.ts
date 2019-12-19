import { Observable } from 'rxjs';
import { TemperatureHumidityData, Temperature } from '../data/temperature-humidity';
export declare class TemperatureHumidityService extends TemperatureHumidityData {
    private temperatureDate;
    private humidityDate;
    getTemperatureData(): Observable<Temperature>;
    getHumidityData(): Observable<Temperature>;
}
