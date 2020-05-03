import { ConfigState, PROJECTION_STRATEGY, ContentProjectionService, takeUntilDestroy, StartLoader, StopLoader, LocalizationService, SortPipe, RestOccurError, DomInsertionService, CONTENT_STRATEGY, LazyLoadService, noop, CoreModule } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Renderer2, Input, Output, ViewChild, ElementRef, ChangeDetectorRef, Injectable, ɵɵdefineInjectable, ɵɵinject, ViewEncapsulation, ViewContainerRef, ContentChild, ViewChildren, Directive, ComponentFactoryResolver, Injector, HostBinding, Host, Optional, Self, ApplicationRef, RendererFactory2, Inject, INJECTOR, InjectionToken, inject, APP_INITIALIZER, NgModule } from '@angular/core';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroy as takeUntilDestroy$1, NgxValidateCoreModule, validatePassword } from '@ngx-validate/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Store, ofActionSuccessful, Actions } from '@ngxs/store';
import { ReplaySubject, BehaviorSubject, Subject, fromEvent, interval, timer } from 'rxjs';
import { takeUntil, debounceTime, filter, distinctUntilChanged, take, map } from 'rxjs/operators';
import snq from 'snq';
import { animation, style, animate, trigger, transition, useAnimation, query, keyframes, state } from '@angular/animations';
import clone from 'just-clone';
import { RouterError, RouterDataResolved, Navigate, RouterState } from '@ngxs/router-plugin';
import { Validators } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} router
     * @param {?} store
     */
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.show = !!this.store.selectSnapshot((/**
         * @param {?} state
         * @return {?}
         */
        state => state.LeptonLayoutState));
        if (this.show) {
            /** @type {?} */
            let splittedUrl = this.router.url.split('/').filter((/**
             * @param {?} chunk
             * @return {?}
             */
            chunk => chunk));
            /** @type {?} */
            let currentUrl = this.store.selectSnapshot(ConfigState.getRoute(splittedUrl[0]));
            if (!currentUrl) {
                currentUrl = this.store.selectSnapshot(ConfigState.getRoute(null, null, this.router.url));
                splittedUrl = [this.router.url];
                if (!currentUrl) {
                    this.show = false;
                    return;
                }
            }
            this.segments.push(currentUrl.name);
            if (splittedUrl.length > 1) {
                const [, ...arr] = splittedUrl;
                /** @type {?} */
                let childRoute = currentUrl;
                for (let i = 0; i < arr.length; i++) {
                    /** @type {?} */
                    const element = arr[i];
                    childRoute = childRoute.children.find((/**
                     * @param {?} child
                     * @return {?}
                     */
                    child => child.path === element));
                    this.segments.push(childRoute.name);
                }
            }
        }
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-breadcrumb',
                template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: Router },
    { type: Store }
];
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.show;
    /** @type {?} */
    BreadcrumbComponent.prototype.segments;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/button/button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        // tslint:disable
        this.click = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        // tslint:enable
        this.abpClick = new EventEmitter();
        this.abpFocus = new EventEmitter();
        this.abpBlur = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get icon() {
        return `${this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none'}`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.attributes) {
            Object.keys(this.attributes).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
            }));
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-button',
                template: `
    <button
      #button
      [id]="buttonId"
      [attr.type]="buttonType"
      [ngClass]="buttonClass"
      [disabled]="loading || disabled"
      (click.stop)="click.next($event); abpClick.next($event)"
      (focus)="focus.next($event); abpFocus.next($event)"
      (blur)="blur.next($event); abpBlur.next($event)"
    >
      <i [ngClass]="icon" class="mr-1"></i><ng-content></ng-content>
    </button>
  `
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ButtonComponent.propDecorators = {
    buttonId: [{ type: Input }],
    buttonClass: [{ type: Input }],
    buttonType: [{ type: Input }],
    iconClass: [{ type: Input }],
    loading: [{ type: Input }],
    disabled: [{ type: Input }],
    attributes: [{ type: Input }],
    click: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    abpClick: [{ type: Output }],
    abpFocus: [{ type: Output }],
    abpBlur: [{ type: Output }],
    buttonRef: [{ type: ViewChild, args: ['button', { static: true },] }]
};
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.buttonId;
    /** @type {?} */
    ButtonComponent.prototype.buttonClass;
    /** @type {?} */
    ButtonComponent.prototype.buttonType;
    /** @type {?} */
    ButtonComponent.prototype.iconClass;
    /** @type {?} */
    ButtonComponent.prototype.loading;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.attributes;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.focus;
    /** @type {?} */
    ButtonComponent.prototype.blur;
    /** @type {?} */
    ButtonComponent.prototype.abpClick;
    /** @type {?} */
    ButtonComponent.prototype.abpFocus;
    /** @type {?} */
    ButtonComponent.prototype.abpBlur;
    /** @type {?} */
    ButtonComponent.prototype.buttonRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/widget-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} count
 * @return {?}
 */
function getRandomBackgroundColor(count) {
    /** @type {?} */
    const colors = [];
    for (let i = 0; i < count; i++) {
        /** @type {?} */
        const r = ((i + 5) * (i + 5) * 474) % 255;
        /** @type {?} */
        const g = ((i + 5) * (i + 5) * 1600) % 255;
        /** @type {?} */
        const b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
/** @type {?} */
const chartJsLoaded$ = new ReplaySubject(1);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    /**
     * @param {?} el
     * @param {?} cdRef
     */
    constructor(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new EventEmitter();
        this.initialized = new BehaviorSubject(this);
        this.onCanvasClick = (/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.chart) {
                /** @type {?} */
                const element = this.chart.getElementAtEvent(event);
                /** @type {?} */
                const dataset = this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset,
                    });
                }
            }
        });
        this.initChart = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const opts = this.options || {};
            opts.responsive = this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (this.height || this.width)) {
                opts.maintainAspectRatio = false;
            }
            this.chart = new Chart(this.canvas, {
                type: this.type,
                data: this.data,
                options: this.options,
                plugins: this.plugins,
            });
            this.cdRef.detectChanges();
        });
        this.generateLegend = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        });
        this.refresh = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.update();
                this.cdRef.detectChanges();
            }
        });
        this.reinit = (/**
         * @return {?}
         */
        () => {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        });
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    get canvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    get base64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        chartJsLoaded$.subscribe((/**
         * @return {?}
         */
        () => {
            this.testChartJs();
            this.initChart();
            this._initialized = true;
        }));
    }
    /**
     * @return {?}
     */
    testChartJs() {
        try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
        }
        catch (error) {
            throw new Error(`Chart is not found. Import the Chart from app.module like shown below:
      import('chart.js');
      `);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-chart',
                template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
ChartComponent.propDecorators = {
    type: [{ type: Input }],
    options: [{ type: Input }],
    plugins: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    responsive: [{ type: Input }],
    onDataSelect: [{ type: Output }],
    initialized: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ChartComponent.prototype.type;
    /** @type {?} */
    ChartComponent.prototype.options;
    /** @type {?} */
    ChartComponent.prototype.plugins;
    /** @type {?} */
    ChartComponent.prototype.width;
    /** @type {?} */
    ChartComponent.prototype.height;
    /** @type {?} */
    ChartComponent.prototype.responsive;
    /** @type {?} */
    ChartComponent.prototype.onDataSelect;
    /** @type {?} */
    ChartComponent.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype._initialized;
    /** @type {?} */
    ChartComponent.prototype._data;
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.onCanvasClick;
    /** @type {?} */
    ChartComponent.prototype.initChart;
    /** @type {?} */
    ChartComponent.prototype.generateLegend;
    /** @type {?} */
    ChartComponent.prototype.refresh;
    /** @type {?} */
    ChartComponent.prototype.reinit;
    /** @type {?} */
    ChartComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/confirmation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Confirmation;
(function (Confirmation) {
    /**
     * @record
     */
    function Options() { }
    Confirmation.Options = Options;
    if (false) {
        /** @type {?|undefined} */
        Options.prototype.id;
        /** @type {?|undefined} */
        Options.prototype.closable;
        /** @type {?|undefined} */
        Options.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.titleLocalizationParams;
        /** @type {?|undefined} */
        Options.prototype.hideCancelBtn;
        /** @type {?|undefined} */
        Options.prototype.hideYesBtn;
        /** @type {?|undefined} */
        Options.prototype.cancelText;
        /** @type {?|undefined} */
        Options.prototype.yesText;
    }
    /**
     * @record
     */
    function DialogData() { }
    Confirmation.DialogData = DialogData;
    if (false) {
        /** @type {?} */
        DialogData.prototype.message;
        /** @type {?|undefined} */
        DialogData.prototype.title;
        /** @type {?|undefined} */
        DialogData.prototype.severity;
        /** @type {?|undefined} */
        DialogData.prototype.options;
    }
    let Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Confirmation.Status || (Confirmation.Status = {}));
})(Confirmation || (Confirmation = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent));
            this.containerComponentRef.changeDetectorRef.detectChanges();
        }), 0);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} options
     * @return {?}
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?=} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        if (!this.containerComponentRef)
            this.setContainer();
        this.confirmation$.next({
            message,
            title,
            severity: severity || 'neutral',
            options,
        });
        this.status$ = new Subject();
        this.listenToEscape();
        return this.status$;
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status = Confirmation.Status.dismiss) {
        this.confirmation$.next();
        this.status$.next(status);
    }
    /**
     * @private
     * @return {?}
     */
    listenToEscape() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.clear();
        }));
    }
}
ConfirmationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ConfirmationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(ɵɵinject(ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfirmationService.prototype.status$;
    /** @type {?} */
    ConfirmationService.prototype.confirmation$;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ConfirmationService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/confirmation/confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationComponent {
    /**
     * @param {?} confirmationService
     */
    constructor(confirmationService) {
        this.confirmationService = confirmationService;
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
        this.visible = false;
        this.confirmationService.confirmation$.subscribe((/**
         * @param {?} confirmation
         * @return {?}
         */
        confirmation => {
            this.data = confirmation;
            this.visible = !!confirmation;
        }));
    }
    /**
     * @return {?}
     */
    get iconClass() {
        switch (this.data.severity) {
            case 'info':
                return 'fa-info-circle';
            case 'success':
                return 'fa-check-circle';
            case 'warning':
                return 'fa-exclamation-triangle';
            case 'error':
                return 'fa-times-circle';
            default:
                return 'fa-question-circle';
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    close(status) {
        this.confirmationService.clear(status);
    }
}
ConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-confirmation',
                template: "<div class=\"confirmation\" *ngIf=\"visible\">\r\n  <div class=\"confirmation-backdrop\"></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1 class=\"title\" *ngIf=\"data.title\">\r\n        {{ data.title | abpLocalization: data.options?.titleLocalizationParams }}\r\n      </h1>\r\n      <p class=\"message\" *ngIf=\"data.message\">\r\n        {{ data.message | abpLocalization: data.options?.messageLocalizationParams }}\r\n      </p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      >\r\n        {{ data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      >\r\n        {{ data.options?.yesText || 'AbpUi::Yes' | abpLocalization }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".confirmation{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:1060}.confirmation .confirmation-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;padding:0;width:450px;min-height:300px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{display:flex;align-items:center;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{width:100px;height:100px;stroke-width:1;font-size:80px;text-align:center}.confirmation .confirmation-dialog .content{flex-grow:1;display:block}.confirmation .confirmation-dialog .content .title{display:block;margin:0;padding:0;font-size:27px;font-weight:600;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;margin:10px auto;padding:20px;font-size:16px;font-weight:400;text-align:center}.confirmation .confirmation-dialog .footer{display:flex;align-items:center;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{display:inline-block;margin:0 5px;padding:10px 20px;border:none;border-radius:6px;font-size:14px;font-weight:600}"]
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
if (false) {
    /** @type {?} */
    ConfirmationComponent.prototype.confirm;
    /** @type {?} */
    ConfirmationComponent.prototype.reject;
    /** @type {?} */
    ConfirmationComponent.prototype.dismiss;
    /** @type {?} */
    ConfirmationComponent.prototype.visible;
    /** @type {?} */
    ConfirmationComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ConfirmationComponent.prototype.confirmationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpErrorWrapperComponent {
    constructor() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
    }
    /**
     * @return {?}
     */
    get statusText() {
        return this.status ? `[${this.status}]` : '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.backgroundColor =
            snq((/**
             * @return {?}
             */
            () => window.getComputedStyle(document.body).getPropertyValue('background-color'))) ||
                '#fff';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.customComponent) {
            /** @type {?} */
            const customComponentRef = this.cfRes
                .resolveComponentFactory(this.customComponent)
                .create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.destroy();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
HttpErrorWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-http-error-wrapper',
                template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
            }] }
];
HttpErrorWrapperComponent.propDecorators = {
    containerRef: [{ type: ViewChild, args: ['container', { static: false },] }]
};
if (false) {
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.appRef;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.cfRes;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.injector;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.status;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.title;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.details;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.customComponent;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.destroy$;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.hideCloseIcon;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.backgroundColor;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.isHomeShow;
    /** @type {?} */
    HttpErrorWrapperComponent.prototype.containerRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loader-bar/loader-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderBarComponent {
    /**
     * @param {?} actions
     * @param {?} router
     * @param {?} cdRef
     */
    constructor(actions, router, cdRef) {
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 820;
        this.filter = (/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload.url.indexOf('openid-configuration') < 0);
    }
    /**
     * @return {?}
     */
    get boxShadow() {
        return `0 0 10px rgba(${this.color}, 0.5)`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.actions
            .pipe(ofActionSuccessful(StartLoader, StopLoader), filter(this.filter), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action instanceof StartLoader)
                this.startLoading();
            else
                this.stopLoading();
        }));
        this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError)), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof NavigationStart)
                this.startLoading();
            else
                this.stopLoading();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.interval)
            this.interval.unsubscribe();
    }
    /**
     * @return {?}
     */
    startLoading() {
        if (this.isLoading || this.progressLevel !== 0)
            return;
        this.isLoading = true;
        this.interval = interval(this.intervalPeriod).subscribe((/**
         * @return {?}
         */
        () => {
            if (this.progressLevel < 75) {
                this.progressLevel += Math.random() * 10;
            }
            else if (this.progressLevel < 90) {
                this.progressLevel += 0.4;
            }
            else if (this.progressLevel < 100) {
                this.progressLevel += 0.1;
            }
            else {
                this.interval.unsubscribe();
            }
            this.cdRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    stopLoading() {
        if (this.interval)
            this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = timer(this.stopDelay).subscribe((/**
         * @return {?}
         */
        () => {
            this.progressLevel = 0;
            this.cdRef.detectChanges();
        }));
    }
}
LoaderBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-loader-bar',
                template: `
    <div id="abp-loader-bar" [ngClass]="containerClass" [class.is-loading]="isLoading">
      <div
        class="abp-progress"
        [style.width.vw]="progressLevel"
        [ngStyle]="{
          'background-color': color,
          'box-shadow': boxShadow
        }"
      ></div>
    </div>
  `,
                styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;transition:width .4s}"]
            }] }
];
/** @nocollapse */
LoaderBarComponent.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: ChangeDetectorRef }
];
LoaderBarComponent.propDecorators = {
    containerClass: [{ type: Input }],
    color: [{ type: Input }],
    isLoading: [{ type: Input }],
    filter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoaderBarComponent.prototype.containerClass;
    /** @type {?} */
    LoaderBarComponent.prototype.color;
    /** @type {?} */
    LoaderBarComponent.prototype.isLoading;
    /** @type {?} */
    LoaderBarComponent.prototype.progressLevel;
    /** @type {?} */
    LoaderBarComponent.prototype.interval;
    /** @type {?} */
    LoaderBarComponent.prototype.timer;
    /** @type {?} */
    LoaderBarComponent.prototype.intervalPeriod;
    /** @type {?} */
    LoaderBarComponent.prototype.stopDelay;
    /** @type {?} */
    LoaderBarComponent.prototype.filter;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoaderBarComponent.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/loading/loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-loading',
                template: `
    <div class="abp-loading">
      <i class="fa fa-spinner fa-pulse abp-spinner"></i>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      .abp-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1040;
      }

      .abp-loading .abp-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 14px;
        -moz-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }
    `]
            }] }
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-modal-container',
                template: `
    <ng-container #container></ng-container>
  `
            }] }
];
ModalContainerComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { static: true, read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    ModalContainerComponent.prototype.container;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeIn = animation([style({ opacity: '0' }), animate('{{ time}} {{ easing }}', style({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
const fadeOut = animation([style({ opacity: '1' }), animate('{{ time}} {{ easing }}', style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const fadeInDown = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInUp = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInLeft = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInRight = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutDown = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutUp = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutLeft = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutRight = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/modal.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeAnimation = trigger('fade', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
]);
/** @type {?} */
const dialogAnimation = trigger('dialog', [
    transition(':enter', useAnimation(fadeInDown)),
    transition(':leave', useAnimation(fadeOut)),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    clearModal() {
        this.getContainer().clear();
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    getContainer() {
        return this.containerComponentRef.instance.container;
    }
    /**
     * @template T
     * @param {?} template
     * @param {?=} context
     * @return {?}
     */
    renderTemplate(template, context) {
        /** @type {?} */
        const containerRef = this.getContainer();
        /** @type {?} */
        const strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.containerComponentRef.destroy();
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ModalService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(ContentProjectionService)); }, token: ModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} renderer
     * @param {?} confirmationService
     * @param {?} modalService
     */
    constructor(renderer, confirmationService, modalService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.modalService = modalService;
        this.centered = false;
        this.modalClass = '';
        this.size = 'lg';
        this.visibleChange = new EventEmitter();
        this.init = new EventEmitter();
        this.appear = new EventEmitter();
        this.disappear = new EventEmitter();
        this._visible = false;
        this._busy = false;
        this.isModalOpen = false;
        this.isConfirmationOpen = false;
        this.destroy$ = new Subject();
        this.toggle$ = new Subject();
        this.initToggleStream();
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (typeof value !== 'boolean')
            return;
        this.toggle$.next(value);
    }
    /**
     * @return {?}
     */
    get busy() {
        return this._busy;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set busy(value) {
        if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
        }
        this._busy = value;
    }
    /**
     * @return {?}
     */
    get isFormDirty() {
        return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
    }
    /**
     * @private
     * @return {?}
     */
    initToggleStream() {
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => this.toggle(value)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout((/**
             * @return {?}
             */
            () => this.listen()), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.modalService.clearModal();
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    close() {
        if (this.busy)
            return;
        if (this.isFormDirty) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((/**
             * @param {?} status
             * @return {?}
             */
            (status) => {
                this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    this.visible = false;
                }
            }));
        }
        else {
            this.visible = false;
        }
    }
    /**
     * @return {?}
     */
    listen() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => this.close()));
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.isFormDirty) {
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
                delete event.returnValue;
            }
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.abpClose)
                return;
            fromEvent(this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$), filter((/**
             * @return {?}
             */
            () => !!this.modalContent)))
                .subscribe((/**
             * @return {?}
             */
            () => this.close()));
        }), 0);
        this.init.emit();
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-modal',
                template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
                animations: [fadeAnimation],
                providers: [ModalService],
                styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ConfirmationService },
    { type: ModalService }
];
ModalComponent.propDecorators = {
    visible: [{ type: Input }],
    busy: [{ type: Input }],
    centered: [{ type: Input }],
    modalClass: [{ type: Input }],
    size: [{ type: Input }],
    abpSubmit: [{ type: ContentChild, args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
    abpHeader: [{ type: ContentChild, args: ['abpHeader', { static: false },] }],
    abpBody: [{ type: ContentChild, args: ['abpBody', { static: false },] }],
    abpFooter: [{ type: ContentChild, args: ['abpFooter', { static: false },] }],
    abpClose: [{ type: ContentChild, args: ['abpClose', { static: false, read: ElementRef },] }],
    template: [{ type: ViewChild, args: ['template', { static: false },] }],
    modalContent: [{ type: ViewChild, args: ['abpModalContent', { static: false },] }],
    abpButtons: [{ type: ViewChildren, args: ['abp-button',] }],
    visibleChange: [{ type: Output }],
    init: [{ type: Output }],
    appear: [{ type: Output }],
    disappear: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ModalComponent.prototype.centered;
    /** @type {?} */
    ModalComponent.prototype.modalClass;
    /** @type {?} */
    ModalComponent.prototype.size;
    /** @type {?} */
    ModalComponent.prototype.abpSubmit;
    /** @type {?} */
    ModalComponent.prototype.abpHeader;
    /** @type {?} */
    ModalComponent.prototype.abpBody;
    /** @type {?} */
    ModalComponent.prototype.abpFooter;
    /** @type {?} */
    ModalComponent.prototype.abpClose;
    /** @type {?} */
    ModalComponent.prototype.template;
    /** @type {?} */
    ModalComponent.prototype.modalContent;
    /** @type {?} */
    ModalComponent.prototype.abpButtons;
    /** @type {?} */
    ModalComponent.prototype.visibleChange;
    /** @type {?} */
    ModalComponent.prototype.init;
    /** @type {?} */
    ModalComponent.prototype.appear;
    /** @type {?} */
    ModalComponent.prototype.disappear;
    /** @type {?} */
    ModalComponent.prototype._visible;
    /** @type {?} */
    ModalComponent.prototype._busy;
    /** @type {?} */
    ModalComponent.prototype.isModalOpen;
    /** @type {?} */
    ModalComponent.prototype.isConfirmationOpen;
    /** @type {?} */
    ModalComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.toggle$;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.modalService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/pagination/pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class PaginationComponent {
    constructor() {
        this._value = 1;
        this.valueChange = new EventEmitter();
        this.totalPages = 0;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} page
         * @return {?}
         */
        (_, page) => page);
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value === newValue)
            return;
        this._value = newValue;
        this.valueChange.emit(newValue);
    }
    /**
     * @return {?}
     */
    get pageArray() {
        /** @type {?} */
        const count = this.totalPages < 5 ? this.totalPages : 5;
        if (this.value === 1 || this.value === 2) {
            return Array.from(new Array(count)).map((/**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */
            (_, index) => index + 1));
        }
        else if (this.value === this.totalPages || this.value === this.totalPages - 1) {
            return Array.from(new Array(count)).map((/**
             * @param {?} _
             * @param {?} index
             * @return {?}
             */
            (_, index) => this.totalPages - count + 1 + index));
        }
        else {
            return [this.value - 2, this.value - 1, this.value, this.value + 1, this.value + 2];
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value || this.value < 1 || this.value > this.totalPages) {
            this.value = 1;
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    changePage(page) {
        if (page < 1)
            return;
        else if (page > this.totalPages)
            return;
        this.value = page;
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-pagination',
                template: "<div\r\n  class=\"ui-paginator-bottom ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix\"\r\n>\r\n  <a\r\n    class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-backward\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === 1\"\r\n    tabindex=\"-1\"\r\n    (click)=\"changePage(value - 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-left\"></span></a\r\n  ><span class=\"ui-paginator-pages\"\r\n    ><a\r\n      *ngFor=\"let page of pageArray; trackBy: trackByFn\"\r\n      (click)=\"changePage(page)\"\r\n      class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\r\n      [class.ui-state-active]=\"page === value\"\r\n      tabindex=\"0\"\r\n      >{{ page }}</a\r\n    ></span\r\n  ><a\r\n    class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(value + 1)\"\r\n    ><span class=\"ui-paginator-icon pi pi-caret-right\"></span></a\r\n  ><a\r\n    class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\"\r\n    [class.ui-state-disabled]=\"value === totalPages\"\r\n    tabindex=\"0\"\r\n    (click)=\"changePage(totalPages)\"\r\n    ><span class=\"ui-paginator-icon pi pi-step-forward\"></span\r\n  ></a>\r\n</div>\r\n"
            }] }
];
PaginationComponent.propDecorators = {
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    totalPages: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._value;
    /** @type {?} */
    PaginationComponent.prototype.valueChange;
    /** @type {?} */
    PaginationComponent.prototype.totalPages;
    /** @type {?} */
    PaginationComponent.prototype.trackByFn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortOrderIconComponent {
    constructor() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedSortKey(value) {
        this._selectedSortKey = value;
        this.selectedSortKeyChange.emit(value);
    }
    /**
     * @return {?}
     */
    get selectedSortKey() {
        return this._selectedSortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set order(value) {
        this._order = value;
        this.orderChange.emit(value);
    }
    /**
     * @return {?}
     */
    get order() {
        return this._order;
    }
    /**
     * @return {?}
     */
    get icon() {
        if (this.selectedSortKey === this.sortKey)
            return `sorting_${this.order}`;
        else
            return 'sorting';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sort(key) {
        this.selectedSortKey = key;
        switch (this.order) {
            case '':
                this.order = 'asc';
                this.orderChange.emit('asc');
                break;
            case 'asc':
                this.order = 'desc';
                this.orderChange.emit('desc');
                break;
            case 'desc':
                this.order = '';
                this.orderChange.emit('');
                break;
        }
    }
}
SortOrderIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-sort-order-icon',
                template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
            }] }
];
SortOrderIconComponent.propDecorators = {
    sortKey: [{ type: Input }],
    selectedSortKey: [{ type: Input }],
    order: [{ type: Input }],
    orderChange: [{ type: Output }],
    selectedSortKeyChange: [{ type: Output }],
    iconClass: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._order;
    /**
     * @type {?}
     * @private
     */
    SortOrderIconComponent.prototype._selectedSortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.sortKey;
    /** @type {?} */
    SortOrderIconComponent.prototype.orderChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.selectedSortKeyChange;
    /** @type {?} */
    SortOrderIconComponent.prototype.iconClass;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    /**
     * @return {?}
     */
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
}
TableEmptyMessageComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: '[abp-table-empty-message]',
                template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
            }] }
];
TableEmptyMessageComponent.propDecorators = {
    colspan: [{ type: Input }],
    message: [{ type: Input }],
    localizationResource: [{ type: Input }],
    localizationProp: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableEmptyMessageComponent.prototype.colspan;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.message;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationResource;
    /** @type {?} */
    TableEmptyMessageComponent.prototype.localizationProp;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    constructor() {
        this.bodyScrollLeft = 0;
        this.page = 1;
        this.trackingProp = 'id';
        this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
        this.pageChange = new EventEmitter();
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} value
         * @return {?}
         */
        (_, value) => {
            return typeof value === 'object' ? value[this.trackingProp] || value : value;
        });
    }
    /**
     * @return {?}
     */
    get totalRecords() {
        return this._totalRecords || this.value.length;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set totalRecords(newValue) {
        if (newValue < 0)
            this._totalRecords = 0;
        this._totalRecords = newValue;
    }
    /**
     * @return {?}
     */
    get totalPages() {
        if (!this.rows) {
            return;
        }
        return Math.ceil(this.totalRecords / this.rows);
    }
    /**
     * @return {?}
     */
    get slicedValue() {
        if (!this.rows || this.rows >= this.value.length) {
            return this.value;
        }
        /** @type {?} */
        const start = (this.page - 1) * this.rows;
        return this.value.slice(start, start + this.rows);
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-table',
                template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div [style.margin-left.px]=\"-bodyScrollLeft\" class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"bodyScrollLeft = scrollableBody.scrollLeft\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(even):hover{-webkit-filter:brightness(90%);filter:brightness(90%)}.ui-table .ui-table-empty{padding:20px 0;text-align:center;border:1px solid #e0e0e0;border-top-width:0}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;color:#333;border:1px solid #c8c8c8;padding:.25em .5em;text-align:center;font-weight:700}.ui-table .ui-table-thead>tr>th{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#f4f4f4}.ui-table .ui-table-tfoot>tr>td{border:1px solid #c8c8c8;font-weight:700;color:#333;background-color:#fff}.ui-table .ui-sortable-column{transition:box-shadow .2s;cursor:pointer}.ui-table .ui-sortable-column:focus{outline:0;outline-offset:0;box-shadow:inset 0 0 0 .2em #8dcdff}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-size:14px;font-family:'Open Sans','Helvetica Neue',sans-serif}.ui-table .ui-editable-column input:focus{outline:#007ad9 solid 1px;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(even){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(even).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{cursor:pointer;background-color:#eaeaea;color:#333}.ui-table table{border-collapse:collapse;width:100%;table-layout:fixed}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{overflow:hidden;border:0}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5em;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.ui-table .ui-column-resizer-helper{background-color:#007ad9;width:1px;position:absolute;z-index:10;display:none}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{position:absolute;display:none}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{text-align:left;display:block;border:0;width:100%!important;box-sizing:border-box;float:left;clear:left}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em;font-weight:700}}.ui-table .ui-widget{font-family:'Open Sans','Helvetica Neue',sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{display:flex;justify-content:center;border-top:0;padding:0}.ui-table .op-0{opacity:0}"]
            }] }
];
TableComponent.propDecorators = {
    value: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    bodyTemplate: [{ type: Input }],
    colgroupTemplate: [{ type: Input }],
    scrollHeight: [{ type: Input }],
    scrollable: [{ type: Input }],
    rows: [{ type: Input }],
    page: [{ type: Input }],
    trackingProp: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    pageChange: [{ type: Output }],
    wrapperRef: [{ type: ViewChild, args: ['wrapper', { read: ElementRef, static: false },] }],
    totalRecords: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._totalRecords;
    /** @type {?} */
    TableComponent.prototype.bodyScrollLeft;
    /** @type {?} */
    TableComponent.prototype.value;
    /** @type {?} */
    TableComponent.prototype.headerTemplate;
    /** @type {?} */
    TableComponent.prototype.bodyTemplate;
    /** @type {?} */
    TableComponent.prototype.colgroupTemplate;
    /** @type {?} */
    TableComponent.prototype.scrollHeight;
    /** @type {?} */
    TableComponent.prototype.scrollable;
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.page;
    /** @type {?} */
    TableComponent.prototype.trackingProp;
    /** @type {?} */
    TableComponent.prototype.emptyMessage;
    /** @type {?} */
    TableComponent.prototype.pageChange;
    /** @type {?} */
    TableComponent.prototype.wrapperRef;
    /** @type {?} */
    TableComponent.prototype.trackByFn;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/toast.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const toastInOut = trigger('toastInOut', [
    transition('* <=> *', [
        query(':enter', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            animate('350ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
        ], { optional: true }),
        query(':leave', animate('450ms ease', style({ opacity: 0 })), {
            optional: true,
        }),
    ]),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToasterService {
    /**
     * @param {?} contentProjectionService
     */
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = (/** @type {?} */ ([]));
    }
    /**
     * @private
     * @return {?}
     */
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * Creates an info toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * Creates a success toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * Creates a warning toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    /**
     * Creates an error toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * Creates a toast with given parameters.
     * @param {?} message Content of the toast
     * @param {?=} title Title of the toast
     * @param {?=} severity Sets color of the toast. "success", "warning" etc.
     * @param {?=} options Spesific style or structural options for individual toast
     * @return {?}
     */
    show(message, title = null, severity = 'neutral', options = (/** @type {?} */ ({}))) {
        if (!this.containerComponentRef)
            this.setContainer();
        /** @type {?} */
        const id = ++this.lastId;
        this.toasts.push({
            message,
            title,
            severity,
            options: Object.assign({ closable: true, id }, options),
        });
        this.toasts$.next(this.toasts);
        return id;
    }
    /**
     * Removes the toast with given id.
     * @param {?} id ID of the toast to be removed.
     * @return {?}
     */
    remove(id) {
        this.toasts = this.toasts.filter((/**
         * @param {?} toast
         * @return {?}
         */
        toast => snq((/**
         * @return {?}
         */
        () => toast.options.id)) !== id));
        this.toasts$.next(this.toasts);
    }
    /**
     * Removes all open toasts at once.
     * @param {?=} key
     * @return {?}
     */
    clear(key) {
        this.toasts = !key
            ? []
            : this.toasts.filter((/**
             * @param {?} toast
             * @return {?}
             */
            toast => snq((/**
             * @return {?}
             */
            () => toast.options.containerKey)) !== key));
        this.toasts$.next(this.toasts);
    }
}
ToasterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ToasterService.ctorParameters = () => [
    { type: ContentProjectionService }
];
/** @nocollapse */ ToasterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(ɵɵinject(ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ToasterService.prototype.toasts$;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.lastId;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.toasts;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.containerComponentRef;
    /**
     * @type {?}
     * @private
     */
    ToasterService.prototype.contentProjectionService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast-container/toast-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastContainerComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.toasts = (/** @type {?} */ ([]));
        this.right = '30px';
        this.bottom = '30px';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toastService.toasts$.subscribe((/**
         * @param {?} toasts
         * @return {?}
         */
        toasts => {
            this.toasts = this.toastKey
                ? toasts.filter((/**
                 * @param {?} t
                 * @return {?}
                 */
                t => {
                    return t.options && t.options.containerKey !== this.toastKey;
                }))
                : toasts;
        }));
    }
    /**
     * @param {?} index
     * @param {?} toast
     * @return {?}
     */
    trackByFunc(index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    }
}
ToastContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-toast-container',
                template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
                animations: [toastInOut],
                styles: [".toast-container{position:fixed;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:350px;min-height:80px;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
            }] }
];
/** @nocollapse */
ToastContainerComponent.ctorParameters = () => [
    { type: ToasterService }
];
ToastContainerComponent.propDecorators = {
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    left: [{ type: Input }],
    toastKey: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ToastContainerComponent.prototype.toasts;
    /** @type {?} */
    ToastContainerComponent.prototype.top;
    /** @type {?} */
    ToastContainerComponent.prototype.right;
    /** @type {?} */
    ToastContainerComponent.prototype.bottom;
    /** @type {?} */
    ToastContainerComponent.prototype.left;
    /** @type {?} */
    ToastContainerComponent.prototype.toastKey;
    /**
     * @type {?}
     * @private
     */
    ToastContainerComponent.prototype.toastService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Toaster;
(function (Toaster) {
    /**
     * @record
     */
    function ToastOptions() { }
    Toaster.ToastOptions = ToastOptions;
    if (false) {
        /** @type {?|undefined} */
        ToastOptions.prototype.life;
        /** @type {?|undefined} */
        ToastOptions.prototype.sticky;
        /** @type {?|undefined} */
        ToastOptions.prototype.closable;
        /** @type {?|undefined} */
        ToastOptions.prototype.tapToDismiss;
        /** @type {?|undefined} */
        ToastOptions.prototype.messageLocalizationParams;
        /** @type {?|undefined} */
        ToastOptions.prototype.titleLocalizationParams;
        /** @type {?} */
        ToastOptions.prototype.id;
        /** @type {?|undefined} */
        ToastOptions.prototype.containerKey;
    }
    /**
     * @record
     */
    function Toast() { }
    Toaster.Toast = Toast;
    if (false) {
        /** @type {?} */
        Toast.prototype.message;
        /** @type {?|undefined} */
        Toast.prototype.title;
        /** @type {?|undefined} */
        Toast.prototype.severity;
        /** @type {?|undefined} */
        Toast.prototype.options;
    }
    /**
     * @deprecated Status will be removed from toaster model in v3.0
     */
    let Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Toaster.Status || (Toaster.Status = {}));
})(Toaster || (Toaster = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
    /**
     * @param {?} toastService
     * @param {?} localizationService
     */
    constructor(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    /**
     * @return {?}
     */
    get severityClass() {
        if (!this.toast || !this.toast.severity)
            return '';
        return `toast-${this.toast.severity}`;
    }
    /**
     * @return {?}
     */
    get iconClass() {
        switch (this.toast.severity) {
            case 'success':
                return 'fa-check-circle';
            case 'info':
                return 'fa-info-circle';
            case 'warning':
                return 'fa-exclamation-triangle';
            case 'error':
                return 'fa-times-circle';
            default:
                return 'fa-exclamation-circle';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (snq((/**
         * @return {?}
         */
        () => this.toast.options.sticky)))
            return;
        /** @type {?} */
        const timeout = snq((/**
         * @return {?}
         */
        () => this.toast.options.life)) || 5000;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.close();
        }), timeout);
    }
    /**
     * @return {?}
     */
    close() {
        this.toastService.remove(this.toast.options.id);
    }
    /**
     * @return {?}
     */
    tap() {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-toast',
                template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
                styles: [".toast{display:-ms-grid;display:grid;-ms-grid-columns:50px 1fr;grid-template-columns:50px 1fr;gap:10px;margin:5px 0;padding:10px;border-radius:0;width:350px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:0 0 10px -5px rgba(0,0,0,.4);z-index:9999;border:2px solid #f0f0f0;background-color:#f0f0f0;color:#000;box-shadow:0 0 10px -5px rgba(0,0,0,.4);opacity:1}.toast:hover{border:2px solid #e3e3e3;background-color:#e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{border:2px solid #51a351;background-color:#51a351;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-success:hover{border:2px solid #499249;background-color:#499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{border:2px solid #2f96b4;background-color:#2f96b4;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-info:hover{border:2px solid #2a85a0;background-color:#2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{border:2px solid #f89406;background-color:#f89406;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-warning:hover{border:2px solid #df8505;background-color:#df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{border:2px solid #bd362f;background-color:#bd362f;color:#fff;box-shadow:0 0 10px -5px rgba(0,0,0,.4)}.toast.toast-error:hover{border:2px solid #a9302a;background-color:#a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{display:flex;align-items:center;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{position:absolute;top:0;right:0;display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px 0 0;width:25px;height:25px;border:none;border-radius:50%;background:0 0;color:inherit}.toast .toast-content .toast-close-button:focus{outline:0}.toast .toast-content .toast-title{margin:0;padding:0;font-size:1rem;font-weight:600}.toast .toast-content .toast-message{margin:0;padding:0}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToasterService },
    { type: LocalizationService }
];
ToastComponent.propDecorators = {
    toast: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ToastComponent.prototype.toast;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.toastService;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype.localizationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = `
.is-invalid .form-control {
  border-color: #dc3545;
  border-style: solid !important;
}

.is-invalid .invalid-feedback,
.is-invalid + * .invalid-feedback {
  display: block;
}

.data-tables-filter {
  text-align: right;
}

.pointer {
  cursor: pointer;
}

.navbar .dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 18px;
}

.navbar .dropdown-menu {
  min-width: 215px;
}

.ui-table-scrollable-body::-webkit-scrollbar {
  height: 5px !important;
  width: 5px !important;
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.abp-ellipsis-inline {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.abp-ellipsis {
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-widget-overlay {
  z-index: 1000;
}

.color-white {
  color: #FFF !important;
}

.custom-checkbox > label {
  cursor: pointer;
}

/* <animations */

.fade-in-top {
  animation: fadeInTop 0.2s ease-in-out;
}

.fade-out-top {
  animation: fadeOutTop 0.2s ease-in-out;
}

.abp-collapsed-height {
  -moz-transition: max-height linear 0.35s;
  -ms-transition: max-height linear 0.35s;
  -o-transition: max-height linear 0.35s;
  -webkit-transition: max-height linear 0.35s;
  overflow:hidden;
  transition:max-height 0.35s linear;
  height:auto;
  max-height: 0;
}

.abp-mh-25 {
  max-height: 25vh;
}

.abp-mh-50 {
  transition:max-height 0.65s linear;
  max-height: 50vh;
}

.abp-mh-75 {
  transition:max-height 0.85s linear;
  max-height: 75vh;
}

.abp-mh-100 {
  transition:max-height 1s linear;
  max-height: 100vh;
}

[class^="sorting"] {
  opacity: .3;
  cursor: pointer;
}
[class^="sorting"]:before {
  right: 0.5rem;
  content: "↑";
}
[class^="sorting"]:after {
  right: 0.5rem;
  content: "↓";
}

.sorting_desc {
  opacity: 1;
}
.sorting_desc:before {
  opacity: .3;
}

.sorting_asc {
  opacity: 1;
}
.sorting_asc:after {
  opacity: .3;
}

@keyframes fadeInTop {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeOutTop {
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

/* </animations */

`;

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingDirective {
    /**
     * @param {?} elRef
     * @param {?} vcRef
     * @param {?} cdRes
     * @param {?} injector
     * @param {?} renderer
     */
    constructor(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    /**
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set loading(newValue) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!newValue && this.timerSubscription) {
                this.timerSubscription.unsubscribe();
                this.timerSubscription = null;
                this._loading = newValue;
                if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                return;
            }
            this.timerSubscription = timer(this.delay)
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (!this.componentRef) {
                    this.componentRef = this.cdRes
                        .resolveComponentFactory(LoadingComponent)
                        .create(this.injector);
                }
                if (newValue && !this.rootNode) {
                    this.rootNode = ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0];
                    this.targetElement.appendChild(this.rootNode);
                }
                else if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                this._loading = newValue;
                this.timerSubscription = null;
            }));
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.targetElement) {
            const { offsetHeight, offsetWidth } = this.elRef.nativeElement;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = (/** @type {?} */ (this.elRef.nativeElement.children[0]));
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
}
LoadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[abpLoading]' },] }
];
/** @nocollapse */
LoadingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: Renderer2 }
];
LoadingDirective.propDecorators = {
    position: [{ type: HostBinding, args: ['style.position',] }],
    loading: [{ type: Input, args: ['abpLoading',] }],
    targetElement: [{ type: Input, args: ['abpLoadingTargetElement',] }],
    delay: [{ type: Input, args: ['abpLoadingDelay',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype._loading;
    /** @type {?} */
    LoadingDirective.prototype.position;
    /** @type {?} */
    LoadingDirective.prototype.targetElement;
    /** @type {?} */
    LoadingDirective.prototype.delay;
    /** @type {?} */
    LoadingDirective.prototype.componentRef;
    /** @type {?} */
    LoadingDirective.prototype.rootNode;
    /** @type {?} */
    LoadingDirective.prototype.timerSubscription;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.cdRes;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LoadingDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/table-sort.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableSortOptions() { }
if (false) {
    /** @type {?} */
    TableSortOptions.prototype.key;
    /** @type {?} */
    TableSortOptions.prototype.order;
}
class TableSortDirective {
    /**
     * @param {?} abpTable
     * @param {?} sortPipe
     * @param {?} cdRef
     */
    constructor(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    /**
     * @return {?}
     */
    get table() {
        return (this.abpTable || snq((/**
         * @return {?}
         */
        () => this.cdRef['_view'].component)) || snq((/**
         * @return {?}
         */
        () => this.cdRef['context'])) // 'context' for ivy
        );
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ value, abpTableSort }) {
        if (this.table && (value || abpTableSort)) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    }
}
TableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[abpTableSort]',
                providers: [SortPipe],
            },] }
];
/** @nocollapse */
TableSortDirective.ctorParameters = () => [
    { type: TableComponent, decorators: [{ type: Host }, { type: Optional }, { type: Self }] },
    { type: SortPipe },
    { type: ChangeDetectorRef }
];
TableSortDirective.propDecorators = {
    abpTableSort: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TableSortDirective.prototype.abpTableSort;
    /** @type {?} */
    TableSortDirective.prototype.value;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.abpTable;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.sortPipe;
    /**
     * @type {?}
     * @private
     */
    TableSortDirective.prototype.cdRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_ERROR_MESSAGES = {
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
class ErrorHandler {
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
        this.filterRestErrors = (/**
         * @param {?} __0
         * @return {?}
         */
        ({ status }) => {
            if (typeof status !== 'number')
                return false;
            return this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
             * @param {?} code
             * @return {?}
             */
            code => code === status)) < 0;
        });
        this.filterRouteErrors = (/**
         * @param {?} instance
         * @return {?}
         */
        (instance) => {
            return (snq((/**
             * @return {?}
             */
            () => instance.event.error.indexOf('Cannot match') > -1)) &&
                this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
                 * @param {?} code
                 * @return {?}
                 */
                code => code === 404)) < 0);
        });
        this.listenToRestError();
        this.listenToRouterError();
        this.listenToRouterDataResolved();
    }
    /**
     * @private
     * @return {?}
     */
    listenToRouterError() {
        this.actions
            .pipe(ofActionSuccessful(RouterError), filter(this.filterRouteErrors))
            .subscribe((/**
         * @return {?}
         */
        () => this.show404Page()));
    }
    /**
     * @private
     * @return {?}
     */
    listenToRouterDataResolved() {
        this.actions
            .pipe(ofActionSuccessful(RouterDataResolved), filter((/**
         * @return {?}
         */
        () => !!this.componentRef)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.componentRef.destroy();
            this.componentRef = null;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    listenToRestError() {
        this.actions
            .pipe(ofActionSuccessful(RestOccurError), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), filter(this.filterRestErrors))
            .subscribe((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            /** @type {?} */
            const body = snq((/**
             * @return {?}
             */
            () => err.error.error), DEFAULT_ERROR_MESSAGES.defaultError.title);
            if (err.headers.get('_AbpErrorFormat')) {
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
                switch (err.status) {
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
                        if (err.statusText === 'Unknown Error') {
                            this.createErrorComponent({
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
                        this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                        break;
                }
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
/** @nocollapse */ ErrorHandler.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(ConfirmationService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(RendererFactory2), ɵɵinject(INJECTOR), ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/append-content.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_SHARED_APPEND_CONTENT = new InjectionToken('THEME_SHARED_APPEND_CONTENT', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const domInsertion = inject(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        import('chart.js').then((/**
         * @return {?}
         */
        () => chartJsLoaded$.next(true)));
    }),
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/http-error.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} config
 * @return {?}
 */
function httpErrorConfigFactory(config = (/** @type {?} */ ({}))) {
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (Object.assign({ skipHandledErrorCodes: [], errorScreen: {} }, config)));
}
/** @type {?} */
const HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/date-parser-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
/**
 * @param {?} value
 * @return {?}
 */
function isNumber(value) {
    return !isNaN(toInteger(value));
}
/**
 * @param {?} value
 * @return {?}
 */
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
class DateParserFormatter extends NgbDateParserFormatter {
    /**
     * @param {?} datePipe
     */
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if (value) {
            /** @type {?} */
            const dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
            }
            else if (dateParts.length === 3 &&
                isNumber(dateParts[0]) &&
                isNumber(dateParts[1]) &&
                isNumber(dateParts[2])) {
                return {
                    year: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    day: toInteger(dateParts[2]),
                };
            }
        }
        return null;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'shortDate');
        }
        else {
            return date
                ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}`
                : '';
        }
    }
}
DateParserFormatter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateParserFormatter.ctorParameters = () => [
    { type: DatePipe, decorators: [{ type: Optional }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DateParserFormatter.prototype.datePipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * @deprecated To be deleted in v2.6
 *
 * @param {?} injector
 * @return {?}
 */
function appendScript(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        import('chart.js').then((/**
         * @return {?}
         */
        () => chartJsLoaded$.next(true)));
        /** @type {?} */
        const lazyLoadService = injector.get(LazyLoadService);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
    });
    return fn;
}
class ThemeSharedModule {
    /**
     * @param {?} errorHandler
     */
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = (/** @type {?} */ ({}))) {
        return {
            ngModule: ThemeSharedModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [THEME_SHARED_APPEND_CONTENT],
                    useFactory: noop,
                },
                { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                {
                    provide: 'HTTP_ERROR_CONFIG',
                    useFactory: httpErrorConfigFactory,
                    deps: [HTTP_ERROR_CONFIG],
                },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter },
            ],
        };
    }
}
ThemeSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreModule, NgxValidateCoreModule, NgbPaginationModule],
                declarations: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    HttpErrorWrapperComponent,
                    LoaderBarComponent,
                    LoadingComponent,
                    ModalComponent,
                    ModalContainerComponent,
                    PaginationComponent,
                    TableComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    ToastContainerComponent,
                    SortOrderIconComponent,
                    LoadingDirective,
                    TableSortDirective,
                ],
                exports: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    LoaderBarComponent,
                    LoadingComponent,
                    ModalComponent,
                    PaginationComponent,
                    TableComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    ToastContainerComponent,
                    SortOrderIconComponent,
                    LoadingDirective,
                    TableSortDirective,
                ],
                providers: [DatePipe],
                entryComponents: [
                    HttpErrorWrapperComponent,
                    LoadingComponent,
                    ModalContainerComponent,
                    ToastContainerComponent,
                    ConfirmationComponent,
                ],
            },] }
];
/** @nocollapse */
ThemeSharedModule.ctorParameters = () => [
    { type: ErrorHandler }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeSharedModule.prototype.errorHandler;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/bounce.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const bounceIn = animation([
    style({ opacity: '0', display: '{{ display }}' }),
    animate('{{ time}} {{ easing }}', keyframes([
        style({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        style({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        style({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
    ]))
], {
    params: {
        time: '350ms',
        easing: 'cubic-bezier(.7,.31,.72,1.47)',
        display: 'block',
        transform: 'translate(-50%, -50%)'
    }
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/collapse.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const collapseY = animation([
    style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapseYWithMargin = animation([
    style({ 'margin-top': '0' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-left': '-100%' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const collapseX = animation([
    style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandY = animation([
    style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandYWithMargin = animation([
    style({ 'margin-top': '-100%' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-top': '0' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const expandX = animation([
    style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapse = trigger('collapse', [
    state('collapsed', style({ height: '0', overflow: 'hidden' })),
    state('expanded', style({ height: '*', overflow: 'hidden' })),
    transition('expanded => collapsed', useAnimation(collapseY)),
    transition('collapsed => expanded', useAnimation(expandY)),
]);
/** @type {?} */
const collapseWithMargin = trigger('collapseWithMargin', [
    state('collapsed', style({ 'margin-top': '-100%' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    transition('collapsed => expanded', useAnimation(expandYWithMargin)),
]);
/** @type {?} */
const collapseLinearWithMargin = trigger('collapseLinearWithMargin', [
    state('collapsed', style({ 'margin-top': '-100vh' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    transition('collapsed => expanded', useAnimation(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/slide.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const slideFromBottom = trigger('slideFromBottom', [
    transition('* <=> *', [
        style({ 'margin-top': '20px', opacity: '0' }),
        animate('0.2s ease-out', style({ opacity: '1', 'margin-top': '0px' })),
    ]),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/common.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RootParams() { }
if (false) {
    /** @type {?} */
    RootParams.prototype.httpErrorConfig;
}
/**
 * @record
 */
function HttpErrorConfig() { }
if (false) {
    /** @type {?|undefined} */
    HttpErrorConfig.prototype.skipHandledErrorCodes;
    /** @type {?|undefined} */
    HttpErrorConfig.prototype.errorScreen;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/setting-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SettingTab() { }
if (false) {
    /** @type {?} */
    SettingTab.prototype.component;
    /** @type {?} */
    SettingTab.prototype.name;
    /** @type {?} */
    SettingTab.prototype.order;
    /** @type {?|undefined} */
    SettingTab.prototype.requiredPolicy;
}
/** @type {?} */
const SETTING_TABS = (/** @type {?} */ ([]));
/**
 * @param {?} tab
 * @return {?}
 */
function addSettingTab(tab) {
    if (!Array.isArray(tab)) {
        tab = [tab];
    }
    SETTING_TABS.push(...tab);
}
/**
 * @return {?}
 */
function getSettingTabs() {
    return SETTING_TABS;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/statistics.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Statistics;
(function (Statistics) {
    /**
     * @record
     */
    function Response() { }
    Statistics.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.data;
    }
    /**
     * @record
     */
    function Data() { }
    Statistics.Data = Data;
    /**
     * @record
     */
    function Filter() { }
    Statistics.Filter = Filter;
    if (false) {
        /** @type {?} */
        Filter.prototype.startDate;
        /** @type {?} */
        Filter.prototype.endDate;
    }
})(Statistics || (Statistics = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/validation-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const { minLength, maxLength } = Validators;
/**
 * @param {?} store
 * @return {?}
 */
function getPasswordValidators(store) {
    /** @type {?} */
    const getRule = getRuleFn(store);
    /** @type {?} */
    const passwordRulesArr = (/** @type {?} */ ([]));
    /** @type {?} */
    let requiredLength = 1;
    if (getRule('RequireDigit') === 'true') {
        passwordRulesArr.push('number');
    }
    if (getRule('RequireLowercase') === 'true') {
        passwordRulesArr.push('small');
    }
    if (getRule('RequireUppercase') === 'true') {
        passwordRulesArr.push('capital');
    }
    if (getRule('RequireNonAlphanumeric') === 'true') {
        passwordRulesArr.push('special');
    }
    if (Number.isInteger(+getRule('RequiredLength'))) {
        requiredLength = +getRule('RequiredLength');
    }
    return [validatePassword(passwordRulesArr), minLength(requiredLength), maxLength(128)];
}
/**
 * @param {?} store
 * @return {?}
 */
function getRuleFn(store) {
    return (/**
     * @param {?} key
     * @return {?}
     */
    (key) => {
        /** @type {?} */
        const passwordRules = store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        return (passwordRules[`Abp.Identity.Password.${key}`] || '').toLowerCase();
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.theme.shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BreadcrumbComponent, ButtonComponent, ChartComponent, Confirmation, ConfirmationComponent, ConfirmationService, DateParserFormatter, HTTP_ERROR_CONFIG, LoaderBarComponent, LoadingComponent, LoadingDirective, ModalComponent, ModalService, PaginationComponent, SortOrderIconComponent, THEME_SHARED_APPEND_CONTENT, TableComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, Toaster, ToasterService, addSettingTab, appendScript, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getPasswordValidators, getRandomBackgroundColor, getSettingTabs, httpErrorConfigFactory, slideFromBottom, toastInOut, BreadcrumbComponent as ɵa, ButtonComponent as ɵb, THEME_SHARED_APPEND_CONTENT as ɵba, httpErrorConfigFactory as ɵbb, HTTP_ERROR_CONFIG as ɵbc, DateParserFormatter as ɵbd, ChartComponent as ɵc, ConfirmationComponent as ɵd, ConfirmationService as ɵe, HttpErrorWrapperComponent as ɵf, LoaderBarComponent as ɵg, LoadingComponent as ɵh, ModalComponent as ɵi, fadeAnimation as ɵj, fadeIn as ɵk, fadeOut as ɵl, ModalService as ɵm, ModalContainerComponent as ɵn, PaginationComponent as ɵo, TableComponent as ɵp, TableEmptyMessageComponent as ɵq, ToastComponent as ɵr, ToasterService as ɵs, ToastContainerComponent as ɵt, toastInOut as ɵu, SortOrderIconComponent as ɵv, LoadingDirective as ɵw, TableSortDirective as ɵx, ErrorHandler as ɵy };
//# sourceMappingURL=abp-ng.theme.shared.js.map
