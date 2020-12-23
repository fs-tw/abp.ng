import { AbpApplicationConfigurationService, AuthFlowStrategy, ConfigStateService, RestService } from '@abp/ng.core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
export const oAuthStorage = localStorage;

export class AuthPasswordFlowStrategy extends AuthFlowStrategy {
    readonly isInternalAuth = true;

    login() {
        const router = this.injector.get(Router);
        router.navigateByUrl('/account/login');
    }

    checkIfInternalAuth() {
        return true;
    }

    logout() {
        const rest = this.injector.get(RestService);
        const configStateService = this.injector.get(ConfigStateService);
        const abpApplicationConfigurationService = this.injector.get(AbpApplicationConfigurationService);
        const issuer: string = configStateService.getDeep('environment.oAuthConfig.issuer');

        return rest
            .request(
                {
                    method: 'GET',
                    url: '/api/account/logout',
                },
                null,
                issuer,
            )
            .pipe(
                tap(() => this.oAuthService.logOut()),
                switchMap(() => {
                    return abpApplicationConfigurationService.get()
                        .pipe(tap(x => configStateService.setState(x)))
                }),
            );
    }

    destroy() { }
}