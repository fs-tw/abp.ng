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
        title: 'Internal server error',
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
        this.actions
            .pipe(ofActionSuccessful(RestOccurError, RouterError, RouterDataResolved))
            .subscribe((/**
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
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                                }, {
                                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
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
            else if (res instanceof RouterError &&
                snq((/**
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
        this.store.dispatch(new Navigate(['/account/login'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState.url) },
        }));
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
        this.componentRef = this.cfRes
            .resolveComponentFactory(HttpErrorWrapperComponent)
            .create(this.injector);
        for (var key in instance) {
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
        { type: undefined, decorators: [{ type: Inject, args: ['HTTP_ERROR_CONFIG',] }] }
    ]; };
    /** @nocollapse */ ErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUcxRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFdkUsTUFBTSxLQUFPLHNCQUFzQixHQUFHO0lBQ3BDLFlBQVksRUFBRTtRQUNaLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsT0FBTyxFQUFFLGtDQUFrQztLQUM1QztJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFLDJFQUEyRTtLQUNyRjtJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsT0FBTyxFQUFFLGdEQUFnRDtLQUMxRDtJQUNELGVBQWUsRUFBRTtRQUNmLEtBQUssRUFBRSxxQkFB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QztZQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsTUFBNkI7UUFBbEQsaUJBTUM7UUFMQyxPQUFPLEdBQUc7OztRQUNSO1lBQ0UsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTO2dCQUMxQyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQURwRSxDQUNvRSxFQUN2RSxDQUFDO0lBQ0osQ0FBQzs7Z0JBaE5GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBL0J6QixPQUFPO2dCQUFzQixLQUFLO2dCQU1sQyxtQkFBbUI7Z0JBakIxQixjQUFjO2dCQUNkLHdCQUF3QjtnQkFLeEIsZ0JBQWdCO2dCQURoQixRQUFRO2dEQWlETCxNQUFNLFNBQUMsbUJBQW1COzs7dUJBekQvQjtDQThQQyxBQWpORCxJQWlOQztTQWhOWSxZQUFZOzs7SUFDdkIsb0NBQXNEOzs7OztJQUdwRCwrQkFBd0I7Ozs7O0lBQ3hCLDZCQUFvQjs7Ozs7SUFDcEIsMkNBQWdEOzs7OztJQUNoRCw4QkFBOEI7Ozs7O0lBQzlCLDZCQUF1Qzs7Ozs7SUFDdkMsdUNBQXlDOzs7OztJQUN6QyxnQ0FBMEI7Ozs7O0lBQzFCLHVDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZywgUmVzdE9jY3VyRXJyb3IgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgVHlwZSxcclxuICBDb21wb25lbnRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlLCBSb3V0ZXJFcnJvciwgUm91dGVyU3RhdGUsIFJvdXRlckRhdGFSZXNvbHZlZCB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBvZkFjdGlvblN1Y2Nlc3NmdWwsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaHR0cC1lcnJvci13cmFwcGVyL2h0dHAtZXJyb3Itd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JDb25maWcsIEVycm9yU2NyZWVuRXJyb3JDb2RlcyB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAnLi4vbW9kZWxzL3RvYXN0ZXInO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JfTUVTU0FHRVMgPSB7XHJcbiAgZGVmYXVsdEVycm9yOiB7XHJcbiAgICB0aXRsZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCEnLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMToge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IHNob3VsZCBiZSBhdXRoZW50aWNhdGVkIChzaWduIGluKSBpbiBvcmRlciB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDM6IHtcclxuICAgIHRpdGxlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCEnLFxyXG4gICAgZGV0YWlsczogJ1lvdSBhcmUgbm90IGFsbG93ZWQgdG8gcGVyZm9ybSB0aGlzIG9wZXJhdGlvbi4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDA0OiB7XHJcbiAgICB0aXRsZTogJ1Jlc291cmNlIG5vdCBmb3VuZCEnLFxyXG4gICAgZGV0YWlsczogJ1RoZSByZXNvdXJjZSByZXF1ZXN0ZWQgY291bGQgbm90IGZvdW5kIG9uIHRoZSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjUwMDoge1xyXG4gICAgdGl0bGU6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XHJcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8SHR0cEVycm9yV3JhcHBlckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQEluamVjdCgnSFRUUF9FUlJPUl9DT05GSUcnKSBwcml2YXRlIGh0dHBFcnJvckNvbmZpZzogSHR0cEVycm9yQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5hY3Rpb25zXHJcbiAgICAgIC5waXBlKG9mQWN0aW9uU3VjY2Vzc2Z1bChSZXN0T2NjdXJFcnJvciwgUm91dGVyRXJyb3IsIFJvdXRlckRhdGFSZXNvbHZlZCkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgUmVzdE9jY3VyRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZDogZXJyID0ge30gYXMgSHR0cEVycm9yUmVzcG9uc2UgfCBhbnkgfSA9IHJlcztcclxuICAgICAgICAgIGNvbnN0IGJvZHkgPSBzbnEoXHJcbiAgICAgICAgICAgICgpID0+IChlcnIgYXMgSHR0cEVycm9yUmVzcG9uc2UpLmVycm9yLmVycm9yLFxyXG4gICAgICAgICAgICBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSxcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmIGVyci5oZWFkZXJzLmdldCgnX0FicEVycm9yRm9ybWF0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uJCA9IHRoaXMuc2hvd0Vycm9yKG51bGwsIG51bGwsIGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgIGNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0xvZ2luKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKDQwMSlcclxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDFQYWdlKClcclxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwMycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDNEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDMuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDMsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcig0MDQpXHJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5zaG93NDA0UGFnZSgpXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDA0RGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NTAwTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkludGVybmFsU2VydmVyRXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNTAwLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpZiAoKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuc3RhdHVzVGV4dCA9PT0gJ1Vua25vd24gRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHJlcyBpbnN0YW5jZW9mIFJvdXRlckVycm9yICYmXHJcbiAgICAgICAgICBzbnEoKCkgPT4gcmVzLmV2ZW50LmVycm9yLmluZGV4T2YoJ0Nhbm5vdCBtYXRjaCcpID4gLTEsIGZhbHNlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zaG93NDA0UGFnZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgUm91dGVyRGF0YVJlc29sdmVkICYmIHRoaXMuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdzQwMVBhZ2UoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo0MDFNZXNzYWdlJyxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAxLnRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDQwMSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93NDA0UGFnZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGtleTogJ0FicEFjY291bnQ6OjQwNE1lc3NhZ2UnLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFcnJvcihcclxuICAgIG1lc3NhZ2U/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICB0aXRsZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgKTogT2JzZXJ2YWJsZTxUb2FzdGVyLlN0YXR1cz4ge1xyXG4gICAgaWYgKGJvZHkpIHtcclxuICAgICAgaWYgKGJvZHkuZGV0YWlscykge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5LmRldGFpbHM7XHJcbiAgICAgICAgdGl0bGUgPSBib2R5Lm1lc3NhZ2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoYm9keS5tZXNzYWdlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZTtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5tZXNzYWdlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5Lm1lc3NhZ2UgfHwgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgIGhpZGVDYW5jZWxCdG46IHRydWUsXHJcbiAgICAgIHllc1RleHQ6ICdBYnBBY2NvdW50OjpDbG9zZScsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGVUb0xvZ2luKCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgbmV3IE5hdmlnYXRlKFsnL2FjY291bnQvbG9naW4nXSwgbnVsbCwge1xyXG4gICAgICAgIHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJvdXRlclN0YXRlLnVybCkgfSxcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXJyb3JDb21wb25lbnQoaW5zdGFuY2U6IFBhcnRpYWw8SHR0cEVycm9yV3JhcHBlckNvbXBvbmVudD4pIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgICBjb25zdCBob3N0ID0gcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNmUmVzXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50KVxyXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluc3RhbmNlKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlQ2xvc2VJY29uID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uaGlkZUNsb3NlSWNvbjtcclxuICAgIGlmICh0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKGluc3RhbmNlLnN0YXR1cyBhcyBFcnJvclNjcmVlbkVycm9yQ29kZXMpKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNmUmVzID0gdGhpcy5jZlJlcztcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaG9zdCwgKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gZGVzdHJveSQ7XHJcbiAgICBkZXN0cm95JC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuQ3JlYXRlQ3VzdG9tRXJyb3Ioc3RhdHVzOiBFcnJvclNjcmVlbkVycm9yQ29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50ICYmXHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMuaW5kZXhPZihzdGF0dXMpID4gLTEsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=