import { Observable } from 'rxjs';
export declare abstract class SolarData {
    abstract getSolarData(): Observable<number>;
}
