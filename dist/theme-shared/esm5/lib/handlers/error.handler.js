/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestOccurError } from '@abp/ng.core';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, RendererFactory2, } from '@angular/core';
import { Navigate, RouterDataResolved, RouterError, RouterState } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
        this.filterRestErrors = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var status = _a.status;
            if (typeof status !== 'number')
                return false;
            return _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return code === status; })) < 0;
        });
        this.filterRouteErrors = (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            return (snq((/**
             * @return {?}
             */
            function () { return instance.event.error.indexOf('Cannot match') > -1; })) &&
                _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
                 * @param {?} code
                 * @return {?}
                 */
                function (code) { return code === 404; })) < 0);
        });
        this.listenToRestError();
        this.listenToRouterError();
        this.listenToRouterDataResolved();
    }
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterError), filter(this.filterRouteErrors))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show404Page(); }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterDataResolved = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterDataResolved), filter((/**
         * @return {?}
         */
        function () { return !!_this.componentRef; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRestError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RestOccurError), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), filter(this.filterRestErrors))
            .subscribe((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            /** @type {?} */
            var body = snq((/**
             * @return {?}
             */
            function () { return err.error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
            if (err.headers.get('_AbpErrorFormat')) {
                /** @type {?} */
                var confirmation$ = _this.showError(null, null, body);
                if (err.status === 401) {
                    confirmation$.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.navigateToLogin();
                    }));
                }
            }
            else {
                switch (err.status) {
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
                        if (err.statusText === 'Unknown Error') {
                            _this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::DefaultErrorMessage',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                },
                                details: err.message,
                                isHomeShow: false,
                            });
                        }
                        break;
                    default:
                        _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                        break;
                }
            }
        }));
    };
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
            /* istanbul ignore else */
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
    ErrorHandler.prototype.filterRestErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.filterRouteErrors;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXRELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBR3hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRzFHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQUV2RSxNQUFNLEtBQU8sc0JBQXNCLEdBQUc7SUFDcEMsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixPQUFPLEVBQUUsa0NBQWtDO0tBQzVDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQyxPQUFPLEVBQUUsMkVBQTJFO0tBQ3JGO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsS0FBSyxFQUFFLHlCQUF5QjtRQUNoQyxPQUFPLEVBQUUsZ0RBQWdEO0tBQzFEO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsS0FBSyxF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QUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsTUFBNkI7UUFBbEQsaUJBTUM7UUFMQyxPQUFPLEdBQUc7OztRQUNSO1lBQ0UsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTO2dCQUMxQyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQURwRSxDQUNvRSxFQUN2RSxDQUFDO0lBQ0osQ0FBQzs7Z0JBak9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBaEN6QixPQUFPO2dCQUFzQixLQUFLO2dCQU9sQyxtQkFBbUI7Z0JBakIxQixjQUFjO2dCQUNkLHdCQUF3QjtnQkFNeEIsZ0JBQWdCO2dCQURoQixRQUFRO2dEQWdETCxNQUFNLFNBQUMsbUJBQW1COzs7dUJBekQvQjtDQTRSQyxBQS9PRCxJQStPQztTQTlPWSxZQUFZOzs7SUFDdkIsb0NBQXNEOzs7OztJQWlPdEQsd0NBSUU7Ozs7O0lBRUYseUNBS0U7Ozs7O0lBek9BLCtCQUF3Qjs7Ozs7SUFDeEIsNkJBQW9COzs7OztJQUNwQiwyQ0FBZ0Q7Ozs7O0lBQ2hELDhCQUE4Qjs7Ozs7SUFDOUIsNkJBQXVDOzs7OztJQUN2Qyx1Q0FBeUM7Ozs7O0lBQ3pDLGdDQUEwQjs7Ozs7SUFDMUIsdUNBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnLCBSZXN0T2NjdXJFcnJvciB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIFJlbmRlcmVyRmFjdG9yeTIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlLCBSb3V0ZXJEYXRhUmVzb2x2ZWQsIFJvdXRlckVycm9yLCBSb3V0ZXJTdGF0ZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBvZkFjdGlvblN1Y2Nlc3NmdWwsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc25xIGZyb20gJ3NucSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2h0dHAtZXJyb3Itd3JhcHBlci9odHRwLWVycm9yLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JTY3JlZW5FcnJvckNvZGVzLCBIdHRwRXJyb3JDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpcm1hdGlvbic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maXJtYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUl9NRVNTQUdFUyA9IHtcclxuICBkZWZhdWx0RXJyb3I6IHtcclxuICAgIHRpdGxlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkIScsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDAxOiB7XHJcbiAgICB0aXRsZTogJ1lvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhJyxcclxuICAgIGRldGFpbHM6ICdZb3Ugc2hvdWxkIGJlIGF1dGhlbnRpY2F0ZWQgKHNpZ24gaW4pIGluIG9yZGVyIHRvIHBlcmZvcm0gdGhpcyBvcGVyYXRpb24uJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMzoge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IGFyZSBub3QgYWxsb3dlZCB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDQ6IHtcclxuICAgIHRpdGxlOiAnUmVzb3VyY2Ugbm90IGZvdW5kIScsXHJcbiAgICBkZXRhaWxzOiAnVGhlIHJlc291cmNlIHJlcXVlc3RlZCBjb3VsZCBub3QgZm91bmQgb24gdGhlIHNlcnZlci4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNTAwOiB7XHJcbiAgICB0aXRsZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicsXHJcbiAgICBkZXRhaWxzOiAnRXJyb3IgZGV0YWlsIG5vdCBzZW50IGJ5IHNlcnZlci4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyIHtcclxuICBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFjdGlvbnM6IEFjdGlvbnMsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgY2ZSZXM6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBASW5qZWN0KCdIVFRQX0VSUk9SX0NPTkZJRycpIHByaXZhdGUgaHR0cEVycm9yQ29uZmlnOiBIdHRwRXJyb3JDb25maWcsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxpc3RlblRvUmVzdEVycm9yKCk7XHJcbiAgICB0aGlzLmxpc3RlblRvUm91dGVyRXJyb3IoKTtcclxuICAgIHRoaXMubGlzdGVuVG9Sb3V0ZXJEYXRhUmVzb2x2ZWQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9Sb3V0ZXJFcnJvcigpIHtcclxuICAgIHRoaXMuYWN0aW9uc1xyXG4gICAgICAucGlwZShvZkFjdGlvblN1Y2Nlc3NmdWwoUm91dGVyRXJyb3IpLCBmaWx0ZXIodGhpcy5maWx0ZXJSb3V0ZUVycm9ycykpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zaG93NDA0UGFnZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9Sb3V0ZXJEYXRhUmVzb2x2ZWQoKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgb2ZBY3Rpb25TdWNjZXNzZnVsKFJvdXRlckRhdGFSZXNvbHZlZCksXHJcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5jb21wb25lbnRSZWYpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsaXN0ZW5Ub1Jlc3RFcnJvcigpIHtcclxuICAgIHRoaXMuYWN0aW9uc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBvZkFjdGlvblN1Y2Nlc3NmdWwoUmVzdE9jY3VyRXJyb3IpLFxyXG4gICAgICAgIG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgIGZpbHRlcih0aGlzLmZpbHRlclJlc3RFcnJvcnMpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZXJyID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gc25xKCgpID0+IGVyci5lcnJvci5lcnJvciwgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUpO1xyXG5cclxuICAgICAgICBpZiAoZXJyLmhlYWRlcnMuZ2V0KCdfQWJwRXJyb3JGb3JtYXQnKSkge1xyXG4gICAgICAgICAgY29uc3QgY29uZmlybWF0aW9uJCA9IHRoaXMuc2hvd0Vycm9yKG51bGwsIG51bGwsIGJvZHkpO1xyXG5cclxuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgY29uZmlybWF0aW9uJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0xvZ2luKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgdGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcig0MDEpXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2hvdzQwMVBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAxRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAzJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDNEZXRhaWwnLFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAzLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiA0MDMsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA0OlxyXG4gICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoNDA0KVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDRQYWdlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDA0RGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo1MDBNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC50aXRsZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkludGVybmFsU2VydmVyRXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjUwMC5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgaWYgKGVyci5zdGF0dXNUZXh0ID09PSAnVW5rbm93biBFcnJvcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbHM6IGVyci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICBpc0hvbWVTaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihcclxuICAgICAgICAgICAgICAgIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZSxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDFQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDAxTWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMS50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvdzQwNFBhZ2UoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBrZXk6ICdBYnBBY2NvdW50Ojo0MDRNZXNzYWdlJyxcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LnRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0dXM6IDQwNCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3IoXHJcbiAgICBtZXNzYWdlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgdGl0bGU/OiBDb25maWcuTG9jYWxpemF0aW9uUGFyYW0sXHJcbiAgICBib2R5PzogYW55LFxyXG4gICk6IE9ic2VydmFibGU8Q29uZmlybWF0aW9uLlN0YXR1cz4ge1xyXG4gICAgaWYgKGJvZHkpIHtcclxuICAgICAgaWYgKGJvZHkuZGV0YWlscykge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5LmRldGFpbHM7XHJcbiAgICAgICAgdGl0bGUgPSBib2R5Lm1lc3NhZ2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoYm9keS5tZXNzYWdlKSB7XHJcbiAgICAgICAgdGl0bGUgPSBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci50aXRsZTtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5tZXNzYWdlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3NhZ2UgPSBib2R5Lm1lc3NhZ2UgfHwgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmVycm9yKG1lc3NhZ2UsIHRpdGxlLCB7XHJcbiAgICAgIGhpZGVDYW5jZWxCdG46IHRydWUsXHJcbiAgICAgIHllc1RleHQ6ICdBYnBBY2NvdW50OjpDbG9zZScsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGVUb0xvZ2luKCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgbmV3IE5hdmlnYXRlKFsnL2FjY291bnQvbG9naW4nXSwgbnVsbCwge1xyXG4gICAgICAgIHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJvdXRlclN0YXRlLnVybCkgfSxcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRXJyb3JDb21wb25lbnQoaW5zdGFuY2U6IFBhcnRpYWw8SHR0cEVycm9yV3JhcHBlckNvbXBvbmVudD4pIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgICBjb25zdCBob3N0ID0gcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNmUmVzXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50KVxyXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIGluc3RhbmNlKSB7XHJcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlQ2xvc2VJY29uID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uaGlkZUNsb3NlSWNvbjtcclxuICAgIGlmICh0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKGluc3RhbmNlLnN0YXR1cyBhcyBFcnJvclNjcmVlbkVycm9yQ29kZXMpKSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmNmUmVzID0gdGhpcy5jZlJlcztcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuYXBwUmVmID0gdGhpcy5hcHBSZWY7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY3VzdG9tQ29tcG9uZW50ID0gdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgcmVuZGVyZXIuYXBwZW5kQ2hpbGQoaG9zdCwgKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0pO1xyXG5cclxuICAgIGNvbnN0IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmRlc3Ryb3kkID0gZGVzdHJveSQ7XHJcbiAgICBkZXN0cm95JC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gbnVsbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuQ3JlYXRlQ3VzdG9tRXJyb3Ioc3RhdHVzOiBFcnJvclNjcmVlbkVycm9yQ29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzbnEoXHJcbiAgICAgICgpID0+XHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50ICYmXHJcbiAgICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMuaW5kZXhPZihzdGF0dXMpID4gLTEsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJSZXN0RXJyb3JzID0gKHsgc3RhdHVzIH06IEh0dHBFcnJvclJlc3BvbnNlKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHN0YXR1cyAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwRXJyb3JDb25maWcuc2tpcEhhbmRsZWRFcnJvckNvZGVzLmZpbmRJbmRleChjb2RlID0+IGNvZGUgPT09IHN0YXR1cykgPCAwO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyUm91dGVFcnJvcnMgPSAoaW5zdGFuY2U6IFJvdXRlckVycm9yPGFueT4pOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNucSgoKSA9PiBpbnN0YW5jZS5ldmVudC5lcnJvci5pbmRleE9mKCdDYW5ub3QgbWF0Y2gnKSA+IC0xKSAmJlxyXG4gICAgICB0aGlzLmh0dHBFcnJvckNvbmZpZy5za2lwSGFuZGxlZEVycm9yQ29kZXMuZmluZEluZGV4KGNvZGUgPT4gY29kZSA9PT0gNDA0KSA8IDBcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iXX0=