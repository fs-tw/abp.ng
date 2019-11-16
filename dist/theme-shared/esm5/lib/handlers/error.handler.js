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
import { ErrorComponent } from '../components/error/error.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUN0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRXZFLE1BQU0sS0FBTyxzQkFBc0IsR0FBRztJQUNwQyxZQUFZLEVBQUU7UUFDWixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLE9BQU8sRUFBRSxrQ0FBa0M7S0FDNUM7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRSwyRUFBMkU7S0FDckY7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUseUJBQXlCO1FBQ2hDLE9BQU8sRUFBRSxnREFBZ0Q7S0FDMUQ7SUFDRCxlQUFlLEVBQUU7UUFDZixLQUFLLEVBQUUscUJBQXFC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QUVELDJDQUFvQjs7OztJQUFwQixVQUFxQixNQUE2QjtRQUFsRCxpQkFNQztRQUxDLE9BQU8sR0FBRzs7O1FBQ1I7WUFDRSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVM7Z0JBQzFDLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRHBFLENBQ29FLEVBQ3ZFLENBQUM7SUFDSixDQUFDOztnQkE3TEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkEvQnpCLE9BQU87Z0JBQXNCLEtBQUs7Z0JBTWxDLG1CQUFtQjtnQkFqQjFCLGNBQWM7Z0JBQ2Qsd0JBQXdCO2dCQUt4QixnQkFBZ0I7Z0JBRGhCLFFBQVE7Z0RBaURMLE1BQU0sU0FBQyxtQkFBbUI7Ozt1QkF6RC9CO0NBMk9DLEFBOUxELElBOExDO1NBN0xZLFlBQVk7OztJQUN2QixvQ0FBMkM7Ozs7O0lBR3pDLCtCQUF3Qjs7Ozs7SUFDeEIsNkJBQW9COzs7OztJQUNwQiwyQ0FBZ0Q7Ozs7O0lBQ2hELDhCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVDOzs7OztJQUN2Qyx1Q0FBeUM7Ozs7O0lBQ3pDLGdDQUEwQjs7Ozs7SUFDMUIsdUNBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBSZXN0T2NjdXJFcnJvciB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0b3IsXHJcbiAgUmVuZGVyZXJGYWN0b3J5MixcclxuICBUeXBlLFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGUsIFJvdXRlckVycm9yLCBSb3V0ZXJTdGF0ZSwgUm91dGVyRGF0YVJlc29sdmVkIH0gZnJvbSAnQG5neHMvcm91dGVyLXBsdWdpbic7XHJcbmltcG9ydCB7IEFjdGlvbnMsIG9mQWN0aW9uU3VjY2Vzc2Z1bCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cEVycm9yQ29uZmlnLCBFcnJvclNjcmVlbkVycm9yQ29kZXMgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJy4uL21vZGVscy90b2FzdGVyJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbmZpcm1hdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VSUk9SX01FU1NBR0VTID0ge1xyXG4gIGRlZmF1bHRFcnJvcjoge1xyXG4gICAgdGl0bGU6ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQhJyxcclxuICAgIGRldGFpbHM6ICdFcnJvciBkZXRhaWwgbm90IHNlbnQgYnkgc2VydmVyLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDE6IHtcclxuICAgIHRpdGxlOiAnWW91IGFyZSBub3QgYXV0aGVudGljYXRlZCEnLFxyXG4gICAgZGV0YWlsczogJ1lvdSBzaG91bGQgYmUgYXV0aGVudGljYXRlZCAoc2lnbiBpbikgaW4gb3JkZXIgdG8gcGVyZm9ybSB0aGlzIG9wZXJhdGlvbi4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDAzOiB7XHJcbiAgICB0aXRsZTogJ1lvdSBhcmUgbm90IGF1dGhvcml6ZWQhJyxcclxuICAgIGRldGFpbHM6ICdZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIHBlcmZvcm0gdGhpcyBvcGVyYXRpb24uJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwNDoge1xyXG4gICAgdGl0bGU6ICdSZXNvdXJjZSBub3QgZm91bmQhJyxcclxuICAgIGRldGFpbHM6ICdUaGUgcmVzb3VyY2UgcmVxdWVzdGVkIGNvdWxkIG5vdCBmb3VuZCBvbiB0aGUgc2VydmVyLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I1MDA6IHtcclxuICAgIHRpdGxlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyxcclxuICAgIGRldGFpbHM6ICdFcnJvciBkZXRhaWwgbm90IHNlbnQgYnkgc2VydmVyLicsXHJcbiAgfSxcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXIge1xyXG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEVycm9yQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBASW5qZWN0KCdIVFRQX0VSUk9SX0NPTkZJRycpIHByaXZhdGUgaHR0cEVycm9yQ29uZmlnOiBIdHRwRXJyb3JDb25maWcsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFjdGlvbnMucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoUmVzdE9jY3VyRXJyb3IsIFJvdXRlckVycm9yLCBSb3V0ZXJEYXRhUmVzb2x2ZWQpKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIFJlc3RPY2N1ckVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXlsb2FkOiBlcnIgPSB7fSBhcyBIdHRwRXJyb3JSZXNwb25zZSB8IGFueSB9ID0gcmVzO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBzbnEoKCkgPT4gKGVyciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuZXJyb3IuZXJyb3IsIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmIGVyci5oZWFkZXJzLmdldCgnX0FicEVycm9yRm9ybWF0JykpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiQgPSB0aGlzLnNob3dFcnJvcihudWxsLCBudWxsLCBib2R5KTtcclxuXHJcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoICgoZXJyIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgdGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcig0MDEpXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2hvdzQwMVBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAzJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDNEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAzLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiA0MDMsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoNDA0KVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDRQYWdlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDA0RGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo1MDBNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkludGVybmFsU2VydmVyRXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgaWYgKChlcnIgYXMgSHR0cEVycm9yUmVzcG9uc2UpLnN0YXR1c1RleHQgPT09ICdVbmtub3duIEVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci5kZXRhaWxzLCBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFJvdXRlckVycm9yICYmIHNucSgoKSA9PiByZXMuZXZlbnQuZXJyb3IuaW5kZXhPZignQ2Fubm90IG1hdGNoJykgPiAtMSwgZmFsc2UpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93NDA0UGFnZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlcyBpbnN0YW5jZW9mIFJvdXRlckRhdGFSZXNvbHZlZCAmJiB0aGlzLmNvbXBvbmVudFJlZikge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93NDAxUGFnZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGtleTogJ0FicEFjY291bnQ6OjQwMU1lc3NhZ2UnLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDRQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDA0TWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKFxyXG4gICAgbWVzc2FnZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgYm9keT86IGFueSxcclxuICApOiBPYnNlcnZhYmxlPFRvYXN0ZXIuU3RhdHVzPiB7XHJcbiAgICBpZiAoYm9keSkge1xyXG4gICAgICBpZiAoYm9keS5kZXRhaWxzKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGJvZHkuZGV0YWlscztcclxuICAgICAgICB0aXRsZSA9IGJvZHkubWVzc2FnZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5tZXNzYWdlIHx8IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSwge1xyXG4gICAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlLFxyXG4gICAgICB5ZXNUZXh0OiAnQWJwQWNjb3VudDo6Q2xvc2UnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlVG9Mb2dpbigpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIG5ldyBOYXZpZ2F0ZShbJy9hY2NvdW50L2xvZ2luJ10sIG51bGwsIHsgc3RhdGU6IHsgcmVkaXJlY3RVcmw6IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUudXJsKSB9IH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVycm9yQ29tcG9uZW50KGluc3RhbmNlOiBQYXJ0aWFsPEVycm9yQ29tcG9uZW50Pikge1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICAgIGNvbnN0IGhvc3QgPSByZW5kZXJlci5zZWxlY3RSb290RWxlbWVudChkb2N1bWVudC5ib2R5LCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY2ZSZXMucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoRXJyb3JDb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkge1xyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlQ2xvc2VJY29uID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uaGlkZUNsb3NlSWNvbjtcclxuICAgIGlmICh0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKGluc3RhbmNlLnN0YXR1cyBhcyBFcnJvclNjcmVlbkVycm9yQ29kZXMpKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNmUmVzID0gdGhpcy5jZlJlcztcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaG9zdCwgKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gZGVzdHJveSQ7XHJcbiAgICBkZXN0cm95JC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuQ3JlYXRlQ3VzdG9tRXJyb3Ioc3RhdHVzOiBFcnJvclNjcmVlbkVycm9yQ29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50ICYmXHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMuaW5kZXhPZihzdGF0dXMpID4gLTEsXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=