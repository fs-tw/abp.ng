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
export var DEFAULT_ERROR_MESSAGES = {
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
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        var _this = this;
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
        function (res) {
            if (res instanceof RestOccurError) {
                var _a = res.payload, err_1 = _a === void 0 ? (/** @type {?} */ ({})) : _a;
                /** @type {?} */
                var body = snq((/**
                 * @return {?}
                 */
                function () { return ((/** @type {?} */ (err_1))).error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
                if (err_1 instanceof HttpErrorResponse && err_1.headers.get('_AbpErrorFormat')) {
                    /** @type {?} */
                    var confirmation$ = _this.showError(null, null, body);
                    if (err_1.status === 401) {
                        confirmation$.subscribe((/**
                         * @return {?}
                         */
                        function () {
                            _this.navigateToLogin();
                        }));
                    }
                }
                else {
                    switch (((/** @type {?} */ (err_1))).status) {
                        case 401:
                            _this.canCreateCustomError(401)
                                ? _this.show401Page()
                                : _this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage401',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage401Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                                }).subscribe((/**
                                 * @return {?}
                                 */
                                function () { return _this.navigateToLogin(); }));
                            break;
                        case 403:
                            _this.createErrorComponent({
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
                            _this.canCreateCustomError(404)
                                ? _this.show404Page()
                                : _this.showError({
                                    key: 'AbpAccount::DefaultErrorMessage404',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                });
                            break;
                        case 500:
                            _this.createErrorComponent({
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
                            if (((/** @type {?} */ (err_1))).statusText === 'Unknown Error') {
                                _this.createErrorComponent({
                                    title: {
                                        key: 'AbpAccount::DefaultErrorMessage',
                                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                    },
                                });
                            }
                            break;
                        default:
                            _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                            break;
                    }
                }
            }
            else if (res instanceof RouterError && snq((/**
             * @return {?}
             */
            function () { return res.event.error.indexOf('Cannot match') > -1; }), false)) {
                _this.show404Page();
            }
            else if (res instanceof RouterDataResolved && _this.componentRef) {
                _this.componentRef.destroy();
                _this.componentRef = null;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show401Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show404Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    };
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    ErrorHandler.prototype.showError = /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    function (message, title, body) {
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
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.navigateToLogin = /**
     * @private
     * @return {?}
     */
    function () {
        console.warn(this.store.selectSnapshot(RouterState.url));
        this.store.dispatch(new Navigate(['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(RouterState.url) } }));
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    ErrorHandler.prototype.createErrorComponent = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        /** @type {?} */
        var renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        var host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes.resolveComponentFactory(ErrorComponent).create(this.injector);
        for (var key in this.componentRef.instance) {
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
        var destroy$ = new Subject();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ErrorHandler.prototype.canCreateCustomError = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return snq((/**
         * @return {?}
         */
        function () {
            return _this.httpErrorConfig.errorScreen.component &&
                _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
        }));
    };
    ErrorHandler.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ErrorHandler.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: ConfirmationService },
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: RendererFactory2 },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [HTTP_ERROR_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.HTTP_ERROR_CONFIG)); }, token: ErrorHandler, providedIn: "root" });
    return ErrorHandler;
}());
export { ErrorHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBVSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsRUFFeEIsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEVBQ1IsZ0JBQWdCLEdBR2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0FBRWhFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLE9BQU8sRUFBRSxrQ0FBa0M7S0FDNUM7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRSwyRUFBMkU7S0FDckY7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUseUJBQXlCO1FBQ2hDLE9BQU8sRUFBRSxnREFB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LENBQUMsV0FBVyxDQUFDLFNBQVM7Z0JBQzFDLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRHBFLENBQ29FLEVBQ3ZFLENBQUM7SUFDSixDQUFDOztnQkE1TEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFoQ3pCLE9BQU87Z0JBQXNCLEtBQUs7Z0JBTWxDLG1CQUFtQjtnQkFqQjFCLGNBQWM7Z0JBQ2Qsd0JBQXdCO2dCQUt4QixnQkFBZ0I7Z0JBRGhCLFFBQVE7Z0RBa0RMLE1BQU0sU0FBQyxpQkFBaUI7Ozt1QkExRDdCO0NBMk9DLEFBN0xELElBNkxDO1NBNUxZLFlBQVk7OztJQUN2QixvQ0FBMkM7Ozs7O0lBR3pDLCtCQUF3Qjs7Ozs7SUFDeEIsNkJBQW9COzs7OztJQUNwQiwyQ0FBZ0Q7Ozs7O0lBQ2hELDhCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVDOzs7OztJQUN2Qyx1Q0FBeUM7Ozs7O0lBQ3pDLGdDQUEwQjs7Ozs7SUFDMUIsdUNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBSZXN0T2NjdXJFcnJvciB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgUmVuZGVyZXJGYWN0b3J5MixcclxuICBUeXBlLFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGUsIFJvdXRlckVycm9yLCBSb3V0ZXJTdGF0ZSwgUm91dGVyRGF0YVJlc29sdmVkIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IEFjdGlvbnMsIG9mQWN0aW9uU3VjY2Vzc2Z1bCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cEVycm9yQ29uZmlnLCBFcnJvclNjcmVlbkVycm9yQ29kZXMgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSFRUUF9FUlJPUl9DT05GSUcgfSBmcm9tICcuLi90b2tlbnMvZXJyb3ItcGFnZXMudG9rZW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JfTUVTU0FHRVMgPSB7XHJcbiAgZGVmYXVsdEVycm9yOiB7XHJcbiAgICB0aXRsZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCEnLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMToge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IHNob3VsZCBiZSBhdXRoZW50aWNhdGVkIChzaWduIGluKSBpbiBvcmRlciB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDM6IHtcclxuICAgIHRpdGxlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCEnLFxyXG4gICAgZGV0YWlsczogJ1lvdSBhcmUgbm90IGFsbG93ZWQgdG8gcGVyZm9ybSB0aGlzIG9wZXJhdGlvbi4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDA0OiB7XHJcbiAgICB0aXRsZTogJ1Jlc291cmNlIG5vdCBmb3VuZCEnLFxyXG4gICAgZGV0YWlsczogJ1RoZSByZXNvdXJjZSByZXF1ZXN0ZWQgY291bGQgbm90IGZvdW5kIG9uIHRoZSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjUwMDoge1xyXG4gICAgdGl0bGU6ICc1MDAnLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XHJcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RXJyb3JDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWN0aW9uczogQWN0aW9ucyxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgcHJpdmF0ZSBjZlJlczogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIEBJbmplY3QoSFRUUF9FUlJPUl9DT05GSUcpIHByaXZhdGUgaHR0cEVycm9yQ29uZmlnOiBIdHRwRXJyb3JDb25maWcsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFjdGlvbnMucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoUmVzdE9jY3VyRXJyb3IsIFJvdXRlckVycm9yLCBSb3V0ZXJEYXRhUmVzb2x2ZWQpKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFJlc3RPY2N1ckVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXlsb2FkOiBlcnIgPSB7fSBhcyBIdHRwRXJyb3JSZXNwb25zZSB8IGFueSB9ID0gcmVzO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzbnEoKCkgPT4gKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuZXJyb3IuZXJyb3IsIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmIGVyci5oZWFkZXJzLmdldCgnX0FicEVycm9yRm9ybWF0JykpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiQgPSB0aGlzLnNob3dFcnJvcihudWxsLCBudWxsLCBib2R5KTtcclxuXHJcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoICgoZXJyIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgdGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcig0MDEpXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2hvdzQwMVBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAzJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDNEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAzLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiA0MDMsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoNDA0KVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDRQYWdlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNERldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo1MDBNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkludGVybmFsU2VydmVyRXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgaWYgKChlcnIgYXMgSHR0cEVycm9yUmVzcG9uc2UpLnN0YXR1c1RleHQgPT09ICdVbmtub3duIEVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci5kZXRhaWxzLCBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFJvdXRlckVycm9yICYmIHNucSgoKSA9PiByZXMuZXZlbnQuZXJyb3IuaW5kZXhPZignQ2Fubm90IG1hdGNoJykgPiAtMSwgZmFsc2UpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93NDA0UGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFJvdXRlckRhdGFSZXNvbHZlZCAmJiB0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93NDAxUGFnZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGtleTogJ0FicEFjY291bnQ6OjQwMU1lc3NhZ2UnLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDRQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDA0TWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKFxyXG4gICAgbWVzc2FnZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgYm9keT86IGFueSxcclxuICApOiBPYnNlcnZhYmxlPFRvYXN0ZXIuU3RhdHVzPiB7XHJcbiAgICBpZiAoYm9keSkge1xyXG4gICAgICBpZiAoYm9keS5kZXRhaWxzKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGJvZHkuZGV0YWlscztcclxuICAgICAgICB0aXRsZSA9IGJvZHkubWVzc2FnZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5tZXNzYWdlIHx8IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSwge1xyXG4gICAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlLFxyXG4gICAgICB5ZXNUZXh0OiAnQWJwQWNjb3VudDo6Q2xvc2UnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlVG9Mb2dpbigpIHtcclxuICAgIGNvbnNvbGUud2Fybih0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJvdXRlclN0YXRlLnVybCkpO1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgbmV3IE5hdmlnYXRlKFsnL2FjY291bnQvbG9naW4nXSwgbnVsbCwgeyBzdGF0ZTogeyByZWRpcmVjdFVybDogdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSb3V0ZXJTdGF0ZS51cmwpIH0gfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXJyb3JDb21wb25lbnQoaW5zdGFuY2U6IFBhcnRpYWw8RXJyb3JDb21wb25lbnQ+KSB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgY29uc3QgaG9zdCA9IHJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KGRvY3VtZW50LmJvZHksIHRydWUpO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jZlJlcy5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShFcnJvckNvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcihpbnN0YW5jZS5zdGF0dXMgYXMgRXJyb3JTY3JlZW5FcnJvckNvZGVzKSkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jZlJlcyA9IHRoaXMuY2ZSZXM7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGhvc3QsICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdKTtcclxuXHJcbiAgICBjb25zdCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95JCA9IGRlc3Ryb3kkO1xyXG4gICAgZGVzdHJveSQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbkNyZWF0ZUN1c3RvbUVycm9yKHN0YXR1czogRXJyb3JTY3JlZW5FcnJvckNvZGVzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gc25xKFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmNvbXBvbmVudCAmJlxyXG4gICAgICAgIHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmZvcldoaWNoRXJyb3JzLmluZGV4T2Yoc3RhdHVzKSA+IC0xLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19