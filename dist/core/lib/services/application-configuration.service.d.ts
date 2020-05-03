import { Observable } from 'rxjs';
import { ApplicationConfiguration } from '../models/application-configuration';
import { RestService } from './rest.service';
import { Store } from '@ngxs/store';
export declare class ApplicationConfigurationService {
    private rest;
    private store;
    readonly apiName: string;
    constructor(rest: RestService, store: Store);
    getConfiguration(): Observable<ApplicationConfiguration.Response>;
}
