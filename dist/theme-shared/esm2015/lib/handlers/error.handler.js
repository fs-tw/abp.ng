/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestOccurError } from '@abp/ng.core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, RendererFactory2, } from '@angular/core';
import { Navigate, RouterError, RouterState, RouterDataResolved } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import snq from 'snq';
import { HttpErrorWrapperComponent } from '../components/http-error-wrapper/http-error-wrapper.component';
import { ConfirmationService } from '../services/confirmation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "../services/confirmation.service";
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
        title: 'Internal server error',
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
        this.actions
            .pipe(ofActionSuccessful(RestOccurError, RouterError, RouterDataResolved))
            .subscribe((/**
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
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
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
            else if (res instanceof RouterError &&
                snq((/**
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
            else if (body.message) {
                title = DEFAULT_ERROR_MESSAGES.defaultError.title;
                message = body.message;
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
        this.store.dispatch(new Navigate(['/account/login'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState.url) },
        }));
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
        this.componentRef = this.cfRes
            .resolveComponentFactory(HttpErrorWrapperComponent)
            .create(this.injector);
        for (const key in instance) {
            if (this.componentRef.instance.hasOwnProperty(key)) {
                this.componentRef.instance[key] = instance[key];
            }
        }
        this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
        if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
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
    { type: undefined, decorators: [{ type: Inject, args: ['HTTP_ERROR_CONFIG',] }] }
];
/** @nocollapse */ ErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUcxRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFdkUsTUFBTSxPQUFPLHNCQUFzQixHQUFHO0lBQ3BDLFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsT0FBTyxFQUFFLGtDQUFrQztLQUM1QztJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFLDJFQUEyRTtLQUNyRjtJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsT0FBTyxFQUFFLGdEQUFnRDtLQUMxRDtJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSxxQkFB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QUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxNQUE2QjtRQUNoRCxPQUFPLEdBQUc7OztRQUNSLEdBQUcsRUFBRSxDQUNILElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVM7WUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdkUsQ0FBQztJQUNKLENBQUM7OztZQWhORixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBL0J6QixPQUFPO1lBQXNCLEtBQUs7WUFNbEMsbUJBQW1CO1lBakIxQixjQUFjO1lBQ2Qsd0JBQXdCO1lBS3hCLGdCQUFnQjtZQURoQixRQUFROzRDQWlETCxNQUFNLFNBQUMsbUJBQW1COzs7OztJQVY3QixvQ0FBc0Q7Ozs7O0lBR3BELCtCQUF3Qjs7Ozs7SUFDeEIsNkJBQW9COzs7OztJQUNwQiwyQ0FBZ0Q7Ozs7O0lBQ2hELDhCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVDOzs7OztJQUN2Qyx1Q0FBeUM7Ozs7O0lBQ3pDLGdDQUEwQjs7Ozs7SUFDMUIsdUNBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBSZXN0T2NjdXJFcnJvciB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgUmVuZGVyZXJGYWN0b3J5MixcclxuICBUeXBlLFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGUsIFJvdXRlckVycm9yLCBSb3V0ZXJTdGF0ZSwgUm91dGVyRGF0YVJlc29sdmVkIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IEFjdGlvbnMsIG9mQWN0aW9uU3VjY2Vzc2Z1bCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9odHRwLWVycm9yLXdyYXBwZXIvaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEh0dHBFcnJvckNvbmZpZywgRXJyb3JTY3JlZW5FcnJvckNvZGVzIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICcuLi9tb2RlbHMvdG9hc3Rlcic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUl9NRVNTQUdFUyA9IHtcclxuICBkZWZhdWx0RXJyb3I6IHtcclxuICAgIHRpdGxlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkIScsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDAxOiB7XHJcbiAgICB0aXRsZTogJ1lvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhJyxcclxuICAgIGRldGFpbHM6ICdZb3Ugc2hvdWxkIGJlIGF1dGhlbnRpY2F0ZWQgKHNpZ24gaW4pIGluIG9yZGVyIHRvIHBlcmZvcm0gdGhpcyBvcGVyYXRpb24uJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMzoge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IGFyZSBub3QgYWxsb3dlZCB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDQ6IHtcclxuICAgIHRpdGxlOiAnUmVzb3VyY2Ugbm90IGZvdW5kIScsXHJcbiAgICBkZXRhaWxzOiAnVGhlIHJlc291cmNlIHJlcXVlc3RlZCBjb3VsZCBub3QgZm91bmQgb24gdGhlIHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNTAwOiB7XHJcbiAgICB0aXRsZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyIHtcclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBASW5qZWN0KCdIVFRQX0VSUk9SX0NPTkZJRycpIHByaXZhdGUgaHR0cEVycm9yQ29uZmlnOiBIdHRwRXJyb3JDb25maWcsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFJlc3RPY2N1ckVycm9yLCBSb3V0ZXJFcnJvciwgUm91dGVyRGF0YVJlc29sdmVkKSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBSZXN0T2NjdXJFcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgeyBwYXlsb2FkOiBlcnIgPSB7fSBhcyBIdHRwRXJyb3JSZXNwb25zZSB8IGFueSB9ID0gcmVzO1xyXG4gICAgICAgICAgY29uc3QgYm9keSA9IHNucShcclxuICAgICAgICAgICAgKCkgPT4gKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuZXJyb3IuZXJyb3IsXHJcbiAgICAgICAgICAgIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlLFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgJiYgZXJyLmhlYWRlcnMuZ2V0KCdfQWJwRXJyb3JGb3JtYXQnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtYXRpb24kID0gdGhpcy5zaG93RXJyb3IobnVsbCwgbnVsbCwgYm9keSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgY29uZmlybWF0aW9uJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvTG9naW4oKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoICgoZXJyIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICBjYXNlIDQwMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoNDAxKVxyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuc2hvdzQwMVBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd0Vycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDFEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAxLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMubmF2aWdhdGVUb0xvZ2luKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAzJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwM0RldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKDQwNClcclxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDRQYWdlKClcclxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDREZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo1MDBNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNTAwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6SW50ZXJuYWxTZXJ2ZXJFcnJvck1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I1MDAuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGlmICgoZXJyIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5zdGF0dXNUZXh0ID09PSAnVW5rbm93biBFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgcmVzIGluc3RhbmNlb2YgUm91dGVyRXJyb3IgJiZcclxuICAgICAgICAgIHNucSgoKSA9PiByZXMuZXZlbnQuZXJyb3IuaW5kZXhPZignQ2Fubm90IG1hdGNoJykgPiAtMSwgZmFsc2UpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3c0MDRQYWdlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMgaW5zdGFuY2VvZiBSb3V0ZXJEYXRhUmVzb2x2ZWQgJiYgdGhpcy5jb21wb25lbnRSZWYpIHtcclxuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93NDAxUGFnZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGtleTogJ0FicEFjY291bnQ6OjQwMU1lc3NhZ2UnLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDRQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDA0TWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKFxyXG4gICAgbWVzc2FnZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgYm9keT86IGFueSxcclxuICApOiBPYnNlcnZhYmxlPFRvYXN0ZXIuU3RhdHVzPiB7XHJcbiAgICBpZiAoYm9keSkge1xyXG4gICAgICBpZiAoYm9keS5kZXRhaWxzKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGJvZHkuZGV0YWlscztcclxuICAgICAgICB0aXRsZSA9IGJvZHkubWVzc2FnZTtcclxuICAgICAgfSBlbHNlIGlmIChib2R5Lm1lc3NhZ2UpIHtcclxuICAgICAgICB0aXRsZSA9IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5Lm1lc3NhZ2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGJvZHkubWVzc2FnZSB8fCBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuZXJyb3IobWVzc2FnZSwgdGl0bGUsIHtcclxuICAgICAgaGlkZUNhbmNlbEJ0bjogdHJ1ZSxcclxuICAgICAgeWVzVGV4dDogJ0FicEFjY291bnQ6OkNsb3NlJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuYXZpZ2F0ZVRvTG9naW4oKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICBuZXcgTmF2aWdhdGUoWycvYWNjb3VudC9sb2dpbiddLCBudWxsLCB7XHJcbiAgICAgICAgc3RhdGU6IHsgcmVkaXJlY3RVcmw6IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUudXJsKSB9LFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFcnJvckNvbXBvbmVudChpbnN0YW5jZTogUGFydGlhbDxIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50Pikge1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICAgIGNvbnN0IGhvc3QgPSByZW5kZXJlci5zZWxlY3RSb290RWxlbWVudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY2ZSZXNcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaW5zdGFuY2UpIHtcclxuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmhpZGVDbG9zZUljb24gPSB0aGlzLmh0dHBFcnJvckNvbmZpZy5lcnJvclNjcmVlbi5oaWRlQ2xvc2VJY29uO1xyXG4gICAgaWYgKHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoaW5zdGFuY2Uuc3RhdHVzIGFzIEVycm9yU2NyZWVuRXJyb3JDb2RlcykpIHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2ZSZXMgPSB0aGlzLmNmUmVzO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5hcHBSZWYgPSB0aGlzLmFwcFJlZjtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jdXN0b21Db21wb25lbnQgPSB0aGlzLmh0dHBFcnJvckNvbmZpZy5lcnJvclNjcmVlbi5jb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICByZW5kZXJlci5hcHBlbmRDaGlsZChob3N0LCAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSk7XHJcblxyXG4gICAgY29uc3QgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGVzdHJveSQgPSBkZXN0cm95JDtcclxuICAgIGRlc3Ryb3kkLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYW5DcmVhdGVDdXN0b21FcnJvcihzdGF0dXM6IEVycm9yU2NyZWVuRXJyb3JDb2Rlcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHNucShcclxuICAgICAgKCkgPT5cclxuICAgICAgICB0aGlzLmh0dHBFcnJvckNvbmZpZy5lcnJvclNjcmVlbi5jb21wb25lbnQgJiZcclxuICAgICAgICB0aGlzLmh0dHBFcnJvckNvbmZpZy5lcnJvclNjcmVlbi5mb3JXaGljaEVycm9ycy5pbmRleE9mKHN0YXR1cykgPiAtMSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==