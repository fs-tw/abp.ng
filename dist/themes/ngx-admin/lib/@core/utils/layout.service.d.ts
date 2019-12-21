import { Observable, Subject } from 'rxjs';
export declare class LayoutService {
    protected layoutSize$: Subject<unknown>;
    changeLayoutSize(): void;
    onChangeLayoutSize(): Observable<any>;
}
