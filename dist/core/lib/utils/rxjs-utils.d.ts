import { Observable } from 'rxjs';
/**
 * @deprecated no longer working, please use SubscriptionService (https://docs.abp.io/en/abp/latest/UI/Angular/Subscription-Service) instead.
 */
export declare const takeUntilDestroy: (componentInstance: any, destroyMethodName?: string) => <T>(source: Observable<T>) => Observable<T>;
