import { Observable } from 'rxjs';
import { SolarData } from '../data/solar';
export declare class SolarService extends SolarData {
    private value;
    getSolarData(): Observable<number>;
}
