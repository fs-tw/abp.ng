/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestOccurError } from '@abp/ng.core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, RendererFactory2, } from '@angular/core';
import { Navigate, RouterError, RouterState, RouterDataResolved } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import snq from 'snq';
import { ErrorComponent } from '../components/error/error.component';
import { ConfirmationService } from '../services/confirmation.service';
import { HTTP_ERROR_CONFIG } from '../tokens/error-pages.token';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "../services/confirmation.service";
import * as i3 from "../tokens/error-pages.token";
/** @type {?} */
export const DEFAULT_ERROR_MESSAGES = {
    defaultError: {
        title: 'An error has occurred!',
        details: 'Error detail not sent by server.',
    },
    defaultError401: {
        title: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.',
    },
    defaultError403: {
        title: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.',
    },
    defaultError404: {
        title: 'Resource not found!',
        details: 'The resource requested could not found on the server.',
    },
    defaultError500: {
        title: '500',
        details: 'Error detail not sent by server.',
    },
};
export class ErrorHandler {
    /**
     * @param {?} actions
     * @param {?} store
     * @param {?} confirmationService
     * @param {?} appRef
     * @param {?} cfRes
     * @param {?} rendererFactory
     * @param {?} injector
     * @param {?} httpErrorConfig
     */
    constructor(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.actions.pipe(ofActionSuccessful(RestOccurError, RouterError, RouterDataResolved)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res instanceof RestOccurError) {
                const { payload: err = (/** @type {?} */ ({})) } = res;
                /** @type {?} */
                const body = snq((/**
                 * @return {?}
                 */
                () => ((/** @type {?} */ (err))).error.error), DEFAULT_ERROR_MESSAGES.defaultError.title);
                if (err instanceof HttpErrorResponse && err.headers.get('_AbpErrorFormat')) {
                    /** @type {?} */
                    const confirmation$ = this.showError(null, null, body);
                    if (err.status === 401) {
                        confirmation$.subscribe((/**
                         * @return {?}
                         */
                        () => {
                            this.navigateToLogin();
                        }));
                    }
                }
                else {
                    switch (((/** @type {?} */ (err))).status) {
                        case 401:
                            this.canCreateCustomError(401)
                                ? this.show401Page()
                                : this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage401',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage401Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                }).subscribe((/**
                                 * @return {?}
                                 */
                                () => this.navigateToLogin()));
                            break;
                        case 403:
                            this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::DefaultErrorMessage403',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                                },
                                details: {
                                    key: 'AbpAccount::DefaultErrorMessage403Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                                },
                                status: 403,
                            });
                            break;
                        case 404:
                            this.canCreateCustomError(404)
                                ? this.show404Page()
                                : this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage404',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                });
                            break;
                        case 500:
                            this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::500Message',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                                },
                                details: {
                                    key: 'AbpAccount::InternalServerErrorMessage',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                                },
                                status: 500,
                            });
                            break;
                        case 0:
                            if (((/** @type {?} */ (err))).statusText === 'Unknown Error') {
                                this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::DefaultErrorMessage',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                    },
                                });
                            }
                            break;
                        default:
                            this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                            break;
                    }
                }
            }
            else if (res instanceof RouterError && snq((/**
             * @return {?}
             */
            () => res.event.error.indexOf('Cannot match') > -1), false)) {
                this.show404Page();
            }
            else if (res instanceof RouterDataResolved && this.componentRef) {
                this.componentRef.destroy();
                this.componentRef = null;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    show401Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    }
    /**
     * @private
     * @return {?}
     */
    show404Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    }
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    showError(message, title, body) {
        if (body) {
            if (body.details) {
                message = body.details;
                title = body.message;
            }
            else {
                message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
            }
        }
        return this.confirmationService.error(message, title, {
            hideCancelBtn: true,
            yesText: 'AbpAccount::Close',
        });
    }
    /**
     * @private
     * @return {?}
     */
    navigateToLogin() {
        console.warn(this.store.selectSnapshot(RouterState.url));
        this.store.dispatch(new Navigate(['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(RouterState.url) } }));
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    createErrorComponent(instance) {
        /** @type {?} */
        const renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        const host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes.resolveComponentFactory(ErrorComponent).create(this.injector);
        for (const key in this.componentRef.instance) {
            if (this.componentRef.instance.hasOwnProperty(key)) {
                this.componentRef.instance[key] = instance[key];
            }
        }
        if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
        }
        this.appRef.attachView(this.componentRef.hostView);
        renderer.appendChild(host, ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]);
        /** @type {?} */
        const destroy$ = new Subject();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        () => {
            this.componentRef.destroy();
            this.componentRef = null;
        }));
    }
    /**
     * @param {?} status
     * @return {?}
     */
    canCreateCustomError(status) {
        return snq((/**
         * @return {?}
         */
        () => this.httpErrorConfig.errorScreen.component &&
            this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1));
    }
}
ErrorHandler.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ErrorHandler.ctorParameters = () => [
    { type: Actions },
    { type: Store },
    { type: ConfirmationService },
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: RendererFactory2 },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [HTTP_ERROR_CONFIG,] }] }
];
/** @nocollapse */ ErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.HTTP_ERROR_CONFIG)); }, token: ErrorHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    ErrorHandler.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.cfRes;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.httpErrorConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEdBR2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0FBRWhFLE1BQU0sT0FBTyxzQkFBc0IsR0FBRztJQUNwQyxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLE9BQU8sRUFBRSxrQ0FBa0M7S0FDNUM7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRSwyRUFBMkU7S0FDckY7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUseUJBQXlCO1FBQ2hDLE9BQU8sRUFBRSxnREFB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LENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN2RSxDQUFDO0lBQ0osQ0FBQzs7O1lBNUxGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFoQ3pCLE9BQU87WUFBc0IsS0FBSztZQU1sQyxtQkFBbUI7WUFqQjFCLGNBQWM7WUFDZCx3QkFBd0I7WUFLeEIsZ0JBQWdCO1lBRGhCLFFBQVE7NENBa0RMLE1BQU0sU0FBQyxpQkFBaUI7Ozs7O0lBVjNCLG9DQUEyQzs7Ozs7SUFHekMsK0JBQXdCOzs7OztJQUN4Qiw2QkFBb0I7Ozs7O0lBQ3BCLDJDQUFnRDs7Ozs7SUFDaEQsOEJBQThCOzs7OztJQUM5Qiw2QkFBdUM7Ozs7O0lBQ3ZDLHVDQUF5Qzs7Ozs7SUFDekMsZ0NBQTBCOzs7OztJQUMxQix1Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcsIFJlc3RPY2N1ckVycm9yIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbmplY3RvcixcclxuICBSZW5kZXJlckZhY3RvcnkyLFxyXG4gIFR5cGUsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGVyRXJyb3IsIFJvdXRlclN0YXRlLCBSb3V0ZXJEYXRhUmVzb2x2ZWQgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JDb25maWcsIEVycm9yU2NyZWVuRXJyb3JDb2RlcyB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIVFRQX0VSUk9SX0NPTkZJRyB9IGZyb20gJy4uL3Rva2Vucy9lcnJvci1wYWdlcy50b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUl9NRVNTQUdFUyA9IHtcclxuICBkZWZhdWx0RXJyb3I6IHtcclxuICAgIHRpdGxlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkIScsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDAxOiB7XHJcbiAgICB0aXRsZTogJ1lvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhJyxcclxuICAgIGRldGFpbHM6ICdZb3Ugc2hvdWxkIGJlIGF1dGhlbnRpY2F0ZWQgKHNpZ24gaW4pIGluIG9yZGVyIHRvIHBlcmZvcm0gdGhpcyBvcGVyYXRpb24uJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMzoge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IGFyZSBub3QgYWxsb3dlZCB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDQ6IHtcclxuICAgIHRpdGxlOiAnUmVzb3VyY2Ugbm90IGZvdW5kIScsXHJcbiAgICBkZXRhaWxzOiAnVGhlIHJlc291cmNlIHJlcXVlc3RlZCBjb3VsZCBub3QgZm91bmQgb24gdGhlIHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNTAwOiB7XHJcbiAgICB0aXRsZTogJzUwMCcsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyIHtcclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxFcnJvckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQEluamVjdChIVFRQX0VSUk9SX0NPTkZJRykgcHJpdmF0ZSBodHRwRXJyb3JDb25maWc6IEh0dHBFcnJvckNvbmZpZyxcclxuICApIHtcclxuICAgIHRoaXMuYWN0aW9ucy5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChSZXN0T2NjdXJFcnJvciwgUm91dGVyRXJyb3IsIFJvdXRlckRhdGFSZXNvbHZlZCkpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzIGluc3RhbmNlb2YgUmVzdE9jY3VyRXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7IHBheWxvYWQ6IGVyciA9IHt9IGFzIEh0dHBFcnJvclJlc3BvbnNlIHwgYW55IH0gPSByZXM7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHNucSgoKSA9PiAoZXJyIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5lcnJvci5lcnJvciwgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUpO1xyXG5cclxuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiYgZXJyLmhlYWRlcnMuZ2V0KCdfQWJwRXJyb3JGb3JtYXQnKSkge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uJCA9IHRoaXMuc2hvd0Vycm9yKG51bGwsIG51bGwsIGJvZHkpO1xyXG5cclxuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgY29uZmlybWF0aW9uJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0xvZ2luKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKChlcnIgYXMgSHR0cEVycm9yUmVzcG9uc2UpLnN0YXR1cykge1xyXG4gICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICB0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKDQwMSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5zaG93NDAxUGFnZSgpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd0Vycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDFEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMubmF2aWdhdGVUb0xvZ2luKCkpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDMnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwM0RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDMuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgdGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcig0MDQpXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2hvdzQwNFBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDA0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDA0RGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OjUwME1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNTAwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6SW50ZXJuYWxTZXJ2ZXJFcnJvck1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNTAwLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICBpZiAoKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuc3RhdHVzVGV4dCA9PT0gJ1Vua25vd24gRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLmRldGFpbHMsIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgUm91dGVyRXJyb3IgJiYgc25xKCgpID0+IHJlcy5ldmVudC5lcnJvci5pbmRleE9mKCdDYW5ub3QgbWF0Y2gnKSA+IC0xLCBmYWxzZSkpIHtcclxuICAgICAgICB0aGlzLnNob3c0MDRQYWdlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgUm91dGVyRGF0YVJlc29sdmVkICYmIHRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDFQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDAxTWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdzQwNFBhZ2UoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo0MDRNZXNzYWdlJyxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LnRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoXHJcbiAgICBtZXNzYWdlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBib2R5PzogYW55LFxyXG4gICk6IE9ic2VydmFibGU8VG9hc3Rlci5TdGF0dXM+IHtcclxuICAgIGlmIChib2R5KSB7XHJcbiAgICAgIGlmIChib2R5LmRldGFpbHMpIHtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5kZXRhaWxzO1xyXG4gICAgICAgIHRpdGxlID0gYm9keS5tZXNzYWdlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5Lm1lc3NhZ2UgfHwgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgIGhpZGVDYW5jZWxCdG46IHRydWUsXHJcbiAgICAgIHllc1RleHQ6ICdBYnBBY2NvdW50OjpDbG9zZScsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGVUb0xvZ2luKCkge1xyXG4gICAgY29uc29sZS53YXJuKHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUudXJsKSk7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBuZXcgTmF2aWdhdGUoWycvYWNjb3VudC9sb2dpbiddLCBudWxsLCB7IHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJvdXRlclN0YXRlLnVybCkgfSB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFcnJvckNvbXBvbmVudChpbnN0YW5jZTogUGFydGlhbDxFcnJvckNvbXBvbmVudD4pIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgICBjb25zdCBob3N0ID0gcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNmUmVzLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEVycm9yQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKGluc3RhbmNlLnN0YXR1cyBhcyBFcnJvclNjcmVlbkVycm9yQ29kZXMpKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNmUmVzID0gdGhpcy5jZlJlcztcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaG9zdCwgKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gZGVzdHJveSQ7XHJcbiAgICBkZXN0cm95JC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuQ3JlYXRlQ3VzdG9tRXJyb3Ioc3RhdHVzOiBFcnJvclNjcmVlbkVycm9yQ29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50ICYmXHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMuaW5kZXhPZihzdGF0dXMpID4gLTEsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=