import { Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';
export declare class SecurityCamerasService extends SecurityCamerasData {
    private cameras;
    getCamerasData(): Observable<Camera[]>;
}
