import { Observable } from 'rxjs';

export interface IConfigService{
    registerRoutes():Observable<any>
}

export function InitConfigService(configService: IConfigService) {
    const fn = () => {
      return configService.registerRoutes().toPromise();
    };
    return fn;
  }