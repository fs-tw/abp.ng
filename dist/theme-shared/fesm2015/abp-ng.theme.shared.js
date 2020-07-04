import { animation, style, animate, keyframes, trigger, state, transition, useAnimation, query } from '@angular/animations';
import { __rest, __decorate, __metadata, __param } from 'tslib';
import { takeUntilDestroy, getRoutePath, RoutesService, StartLoader, StopLoader, PROJECTION_STRATEGY, ContentProjectionService, LocalizationService, ListService, SortPipe, RestOccurError, getLocaleDirection, LazyLoadService, LOADING_STRATEGY, DomInsertionService, CONTENT_STRATEGY, noop, CoreModule, ConfigState } from '@abp/ng.core';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer2, ViewEncapsulation, ɵɵdefineInjectable, ɵɵinject, Injectable, ViewContainerRef, ContentChild, TemplateRef, ViewChildren, HostBinding, Directive, ComponentFactoryResolver, Injector, Host, Optional, Self, ApplicationRef, RendererFactory2, INJECTOR, Inject, InjectionToken, APP_INITIALIZER, inject, NgModule } from '@angular/core';
import { NavigationEnd, Router, NavigationStart, NavigationError } from '@angular/router';
import { filter, startWith, map, takeUntil, debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { ReplaySubject, BehaviorSubject, timer, Subject, fromEvent, Subscription } from 'rxjs';
import { takeUntilDestroy as takeUntilDestroy$1, NgxValidateCoreModule, validatePassword } from '@ngx-validate/core';
import { ofActionSuccessful, Actions, Store } from '@ngxs/store';
import snq from 'snq';
import { ColumnMode, DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import clone from 'just-clone';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterError, RouterDataResolved, Navigate, RouterState } from '@ngxs/router-plugin';
import { DatePipe } from '@angular/common';
import { NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Validators } from '@angular/forms';

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

const collapseY = animation([
    style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
const collapseYWithMargin = animation([
    style({ 'margin-top': '0' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-left': '-100%' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
const collapseX = animation([
    style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
const expandY = animation([
    style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
const expandYWithMargin = animation([
    style({ 'margin-top': '-100%' }),
    animate('{{ time }} {{ easing }}', style({ 'margin-top': '0' })),
], {
    params: { time: '500ms', easing: 'ease' },
});
const expandX = animation([
    style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
const collapse = trigger('collapse', [
    state('collapsed', style({ height: '0', overflow: 'hidden' })),
    state('expanded', style({ height: '*', overflow: 'hidden' })),
    transition('expanded => collapsed', useAnimation(collapseY)),
    transition('collapsed => expanded', useAnimation(expandY)),
]);
const collapseWithMargin = trigger('collapseWithMargin', [
    state('collapsed', style({ 'margin-top': '-100%' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    transition('collapsed => expanded', useAnimation(expandYWithMargin)),
]);
const collapseLinearWithMargin = trigger('collapseLinearWithMargin', [
    state('collapsed', style({ 'margin-top': '-100vh' })),
    state('expanded', style({ 'margin-top': '0' })),
    transition('expanded => collapsed', useAnimation(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    transition('collapsed => expanded', useAnimation(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

const fadeIn = animation([style({ opacity: '0' }), animate('{{ time}} {{ easing }}', style({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
const fadeOut = animation([style({ opacity: '1' }), animate('{{ time}} {{ easing }}', style({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
const fadeInDown = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeInUp = animation([
    style({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeInLeft = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeInRight = animation([
    style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeOutDown = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeOutUp = animation([
    style({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeOutLeft = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
const fadeOutRight = animation([
    style({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    animate('{{ time }} {{ easing }}', style({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

const fadeAnimation = trigger('fade', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
]);
const dialogAnimation = trigger('dialog', [
    transition(':enter', useAnimation(fadeInDown)),
    transition(':leave', useAnimation(fadeOut)),
]);

const slideFromBottom = trigger('slideFromBottom', [
    transition('* <=> *', [
        style({ 'margin-top': '20px', opacity: '0' }),
        animate('0.2s ease-out', style({ opacity: '1', 'margin-top': '0px' })),
    ]),
]);

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

let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(cdRef, router, routes) {
        this.cdRef = cdRef;
        this.router = router;
        this.routes = routes;
        this.segments = [];
    }
    ngOnDestroy() { }
    ngOnInit() {
        this.router.events
            .pipe(takeUntilDestroy(this), filter(event => event instanceof NavigationEnd), 
        // tslint:disable-next-line:deprecation
        startWith(null), map(() => this.routes.search({ path: getRoutePath(this.router) })))
            .subscribe(route => {
            this.segments = [];
            if (route) {
                let node = { parent: route };
                while (node.parent) {
                    node = node.parent;
                    const { parent, children, isLeaf } = node, segment = __rest(node, ["parent", "children", "isLeaf"]);
                    if (!isAdministration(segment))
                        this.segments.unshift(segment);
                }
                this.cdRef.detectChanges();
            }
        });
    }
};
BreadcrumbComponent = __decorate([
    Component({
        selector: 'abp-breadcrumb',
        template: "<ol class=\"breadcrumb\" *ngIf=\"segments.length\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment.name | abpLocalization }}\r\n  </li>\r\n</ol>\r\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        Router,
        RoutesService])
], BreadcrumbComponent);
function isAdministration(route) {
    return route.name === "AbpUiNavigation::Menu:Administration" /* Administration */;
}

let ButtonComponent = class ButtonComponent {
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
    get icon() {
        return `${this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none'}`;
    }
    ngOnInit() {
        if (this.attributes) {
            Object.keys(this.attributes).forEach(key => {
                this.renderer.setAttribute(this.buttonRef.nativeElement, key, this.attributes[key]);
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "buttonType", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "iconClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "loading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "attributes", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "click", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "focus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "blur", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "abpBlur", void 0);
__decorate([
    ViewChild('button', { static: true }),
    __metadata("design:type", ElementRef)
], ButtonComponent.prototype, "buttonRef", void 0);
ButtonComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [Renderer2])
], ButtonComponent);

function getRandomBackgroundColor(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const r = ((i + 5) * (i + 5) * 474) % 255;
        const g = ((i + 5) * (i + 5) * 1600) % 255;
        const b = ((i + 5) * (i + 5) * 84065) % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
    }
    return colors;
}
const chartJsLoaded$ = new ReplaySubject(1);

let ChartComponent = class ChartComponent {
    constructor(el, cdRef) {
        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        // tslint:disable-next-line: no-output-on-prefix
        this.onDataSelect = new EventEmitter();
        this.initialized = new BehaviorSubject(this);
        this.onCanvasClick = event => {
            if (this.chart) {
                const element = this.chart.getElementAtEvent(event);
                const dataset = this.chart.getDatasetAtEvent(event);
                if (element && element.length && dataset) {
                    this.onDataSelect.emit({
                        originalEvent: event,
                        element: element[0],
                        dataset,
                    });
                }
            }
        };
        this.initChart = () => {
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
        };
        this.generateLegend = () => {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        };
        this.refresh = () => {
            if (this.chart) {
                this.chart.update();
                this.cdRef.detectChanges();
            }
        };
        this.reinit = () => {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        };
    }
    get data() {
        return this._data;
    }
    set data(val) {
        this._data = val;
        this.reinit();
    }
    get canvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    get base64Image() {
        return this.chart.toBase64Image();
    }
    ngAfterViewInit() {
        chartJsLoaded$.subscribe(() => {
            this.testChartJs();
            this.initChart();
            this._initialized = true;
        });
    }
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
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartComponent.prototype, "plugins", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "responsive", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ChartComponent.prototype, "onDataSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "initialized", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChartComponent.prototype, "data", null);
ChartComponent = __decorate([
    Component({
        selector: 'abp-chart',
        template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], ChartComponent);

var Confirmation;
(function (Confirmation) {
    let Status;
    (function (Status) {
        Status["confirm"] = "confirm";
        Status["reject"] = "reject";
        Status["dismiss"] = "dismiss";
    })(Status = Confirmation.Status || (Confirmation.Status = {}));
})(Confirmation || (Confirmation = {}));

let ConfirmationComponent = class ConfirmationComponent {
    constructor() {
        this.confirm = Confirmation.Status.confirm;
        this.reject = Confirmation.Status.reject;
        this.dismiss = Confirmation.Status.dismiss;
    }
    close(status) {
        this.clear(status);
    }
    getIconClass({ severity }) {
        switch (severity) {
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
};
ConfirmationComponent = __decorate([
    Component({
        selector: 'abp-confirmation',
        template: "<div class=\"confirmation\" *ngIf=\"confirmation$ | async as data\">\r\n  <div\r\n    class=\"confirmation-backdrop\"\r\n    (click)=\"data.options?.dismissible ? close(dismiss) : null\"\r\n  ></div>\r\n  <div class=\"confirmation-dialog\">\r\n    <div class=\"icon-container\" [ngClass]=\"data.severity\" *ngIf=\"data.severity\">\r\n      <i class=\"fa icon\" [ngClass]=\"getIconClass(data)\"></i>\r\n    </div>\r\n    <div class=\"content\">\r\n      <h1\r\n        class=\"title\"\r\n        *ngIf=\"data.title\"\r\n        [innerHTML]=\"data.title | abpLocalization: data.options?.titleLocalizationParams\"\r\n      ></h1>\r\n      <p\r\n        class=\"message\"\r\n        *ngIf=\"data.message\"\r\n        [innerHTML]=\"data.message | abpLocalization: data.options?.messageLocalizationParams\"\r\n      ></p>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <button\r\n        id=\"cancel\"\r\n        class=\"confirmation-button confirmation-button--reject\"\r\n        [innerHTML]=\"data.options?.cancelText || 'AbpUi::Cancel' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideCancelBtn\"\r\n        (click)=\"close(reject)\"\r\n      ></button>\r\n      <button\r\n        id=\"confirm\"\r\n        class=\"confirmation-button confirmation-button--approve\"\r\n        [innerHTML]=\"data.options?.yesText || 'AbpUi::Yes' | abpLocalization\"\r\n        *ngIf=\"!data?.options?.hideYesBtn\"\r\n        (click)=\"close(confirm)\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [".confirmation{align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1060}.confirmation .confirmation-backdrop{height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1061!important}.confirmation .confirmation-dialog{display:flex;flex-direction:column;margin:20px auto;min-height:300px;padding:0;width:450px;z-index:1062!important}@media screen and (max-width:500px){.confirmation .confirmation-dialog{width:90vw}}.confirmation .confirmation-dialog .icon-container{align-items:center;display:flex;justify-content:center;margin:0 0 10px;padding:20px}.confirmation .confirmation-dialog .icon-container .icon{font-size:80px;height:100px;stroke-width:1;text-align:center;width:100px}.confirmation .confirmation-dialog .content{display:block;flex-grow:1}.confirmation .confirmation-dialog .content .title{display:block;font-size:27px;font-weight:600;margin:0;padding:0;text-align:center}.confirmation .confirmation-dialog .content .message{display:block;font-size:16px;font-weight:400;margin:10px auto;padding:20px;text-align:center}.confirmation .confirmation-dialog .footer{align-items:center;display:flex;justify-content:flex-end;margin:10px 0 0;padding:20px;width:100%}.confirmation .confirmation-dialog .footer .confirmation-button{border:none;border-radius:6px;display:inline-block;font-size:14px;font-weight:600;margin:0 5px;padding:10px 20px}"]
    })
], ConfirmationComponent);

let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() { }
};
LoadingComponent = __decorate([
    Component({
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
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

let LoaderBarComponent = class LoaderBarComponent {
    constructor(actions, router, cdRef) {
        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 800;
        this.filter = (action) => action.payload.url.indexOf('openid-configuration') < 0;
        this.clearProgress = () => {
            this.progressLevel = 0;
            this.cdRef.detectChanges();
        };
        this.reportProgress = () => {
            if (this.progressLevel < 75) {
                this.progressLevel += 1 + Math.random() * 9;
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
        };
    }
    get boxShadow() {
        return `0 0 10px rgba(${this.color}, 0.5)`;
    }
    subscribeToLoadActions() {
        this.actions
            .pipe(ofActionSuccessful(StartLoader, StopLoader), filter(this.filter), takeUntilDestroy$1(this))
            .subscribe(action => {
            if (action instanceof StartLoader)
                this.startLoading();
            else
                this.stopLoading();
        });
    }
    subscribeToRouterEvents() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError), takeUntilDestroy$1(this))
            .subscribe(event => {
            if (event instanceof NavigationStart)
                this.startLoading();
            else
                this.stopLoading();
        });
    }
    ngOnInit() {
        this.subscribeToLoadActions();
        this.subscribeToRouterEvents();
    }
    ngOnDestroy() {
        if (this.interval)
            this.interval.unsubscribe();
    }
    startLoading() {
        if (this.isLoading || (this.interval && !this.interval.closed))
            return;
        this.isLoading = true;
        this.interval = timer(0, this.intervalPeriod).subscribe(this.reportProgress);
    }
    stopLoading() {
        if (this.interval)
            this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = timer(this.stopDelay).subscribe(this.clearProgress);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "containerClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "isLoading", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], LoaderBarComponent.prototype, "filter", void 0);
LoaderBarComponent = __decorate([
    Component({
        selector: 'abp-loader-bar',
        template: `
    <div id="abp-loader-bar" [ngClass]="containerClass" [class.is-loading]="isLoading">
      <div
        class="abp-progress"
        [class.progressing]="progressLevel"
        [style.width.vw]="progressLevel"
        [ngStyle]="{
          'background-color': color,
          'box-shadow': boxShadow
        }"
      ></div>
    </div>
  `,
        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0}.abp-loader-bar .abp-progress.progressing{transition:width .4s ease}"]
    }),
    __metadata("design:paramtypes", [Actions, Router, ChangeDetectorRef])
], LoaderBarComponent);

let ConfirmationService = class ConfirmationService {
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.confirmation$ = new ReplaySubject(1);
        this.clear = (status = Confirmation.Status.dismiss) => {
            this.confirmation$.next();
            this.status$.next(status);
        };
    }
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ConfirmationComponent, {
            confirmation$: this.confirmation$,
            clear: this.clear,
        }));
        setTimeout(() => {
            this.containerComponentRef.changeDetectorRef.detectChanges();
        }, 0);
    }
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    show(message, title, severity, options = {}) {
        if (!this.containerComponentRef)
            this.setContainer();
        this.confirmation$.next({
            message,
            title,
            severity: severity || 'neutral',
            options,
        });
        this.status$ = new Subject();
        const { dismissible = true } = options;
        if (dismissible)
            this.listenToEscape();
        return this.status$;
    }
    listenToEscape() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.status$), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(_ => {
            this.clear();
        });
    }
};
ConfirmationService.ɵprov = ɵɵdefineInjectable({ factory: function ConfirmationService_Factory() { return new ConfirmationService(ɵɵinject(ContentProjectionService)); }, token: ConfirmationService, providedIn: "root" });
ConfirmationService = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [ContentProjectionService])
], ConfirmationService);

let ModalContainerComponent = class ModalContainerComponent {
};
__decorate([
    ViewChild('container', { static: true, read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ModalContainerComponent.prototype, "container", void 0);
ModalContainerComponent = __decorate([
    Component({
        selector: 'abp-modal-container',
        template: `
    <ng-container #container></ng-container>
  `
    })
], ModalContainerComponent);

let ModalService = class ModalService {
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.setContainer();
    }
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ModalContainerComponent));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    clearModal() {
        this.getContainer().clear();
        this.detectChanges();
    }
    detectChanges() {
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    getContainer() {
        return this.containerComponentRef.instance.container;
    }
    renderTemplate(template, context) {
        const containerRef = this.getContainer();
        const strategy = PROJECTION_STRATEGY.ProjectTemplateToContainer(template, containerRef, context);
        this.contentProjectionService.projectContent(strategy);
    }
    ngOnDestroy() {
        this.containerComponentRef.destroy();
    }
};
ModalService.ɵprov = ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(ɵɵinject(ContentProjectionService)); }, token: ModalService, providedIn: "root" });
ModalService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ContentProjectionService])
], ModalService);

let ModalComponent = class ModalComponent {
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
    get visible() {
        return this._visible;
    }
    set visible(value) {
        if (typeof value !== 'boolean')
            return;
        this.toggle$.next(value);
    }
    get busy() {
        return this._busy;
    }
    set busy(value) {
        if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
        }
        this._busy = value;
    }
    get isFormDirty() {
        return Boolean(document.querySelector('.modal-dialog .ng-dirty'));
    }
    initToggleStream() {
        this.toggle$
            .pipe(takeUntilDestroy(this), debounceTime(0), distinctUntilChanged())
            .subscribe(value => this.toggle(value));
    }
    toggle(value) {
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            this.modalService.renderTemplate(this.template);
            setTimeout(() => this.listen(), 0);
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
    ngOnDestroy() {
        this.destroy$.next();
    }
    close() {
        if (this.busy)
            return;
        if (this.isFormDirty) {
            if (this.isConfirmationOpen)
                return;
            this.isConfirmationOpen = true;
            this.confirmationService
                .warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure')
                .subscribe((status) => {
                this.isConfirmationOpen = false;
                if (status === Confirmation.Status.confirm) {
                    this.visible = false;
                }
            });
        }
        else {
            this.visible = false;
        }
    }
    listen() {
        fromEvent(document, 'keyup')
            .pipe(takeUntil(this.destroy$), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(() => this.close());
        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.destroy$))
            .subscribe(event => {
            if (this.isFormDirty) {
                event.returnValue = true;
            }
            else {
                event.returnValue = false;
                delete event.returnValue;
            }
        });
        setTimeout(() => {
            if (!this.abpClose)
                return;
            fromEvent(this.abpClose.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$), filter(() => !!this.modalContent))
                .subscribe(() => this.close());
        }, 0);
        this.init.emit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "visible", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ModalComponent.prototype, "busy", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "centered", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "size", void 0);
__decorate([
    ContentChild(ButtonComponent, { static: false, read: ButtonComponent }),
    __metadata("design:type", ButtonComponent)
], ModalComponent.prototype, "abpSubmit", void 0);
__decorate([
    ContentChild('abpHeader', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpHeader", void 0);
__decorate([
    ContentChild('abpBody', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpBody", void 0);
__decorate([
    ContentChild('abpFooter', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "abpFooter", void 0);
__decorate([
    ContentChild('abpClose', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "abpClose", void 0);
__decorate([
    ViewChild('template', { static: false }),
    __metadata("design:type", TemplateRef)
], ModalComponent.prototype, "template", void 0);
__decorate([
    ViewChild('abpModalContent', { static: false }),
    __metadata("design:type", ElementRef)
], ModalComponent.prototype, "modalContent", void 0);
__decorate([
    ViewChildren('abp-button'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "abpButtons", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "visibleChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "init", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "appear", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "disappear", void 0);
ModalComponent = __decorate([
    Component({
        selector: 'abp-modal',
        template: "<ng-template #template>\r\n  <div\r\n    *ngIf=\"visible\"\r\n    [@fade]=\"isModalOpen\"\r\n    id=\"modal-container\"\r\n    class=\"modal show {{ modalClass }}\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n    <div\r\n      id=\"abp-modal-dialog\"\r\n      class=\"modal-dialog modal-{{ size }}\"\r\n      role=\"document\"\r\n      [class.modal-dialog-centered]=\"centered\"\r\n      #abpModalContent\r\n    >\r\n      <div id=\"abp-modal-content\" class=\"modal-content\">\r\n        <div id=\"abp-modal-header\" class=\"modal-header\">\r\n          <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n          \u200B\r\n          <button\r\n            id=\"abp-modal-close-button\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"close()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div id=\"abp-modal-body\" class=\"modal-body\">\r\n          <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n        </div>\r\n        <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n          <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-content></ng-content>\r\n",
        animations: [fadeAnimation],
        providers: [ModalService],
        styles: [".modal.show{display:block!important}.modal-backdrop{opacity:.8}.modal::-webkit-scrollbar{width:7px}.modal::-webkit-scrollbar-track{background:#ddd}.modal::-webkit-scrollbar-thumb{background:#8a8686}.modal-dialog{z-index:1050}"]
    }),
    __metadata("design:paramtypes", [Renderer2,
        ConfirmationService,
        ModalService])
], ModalComponent);

let SortOrderIconComponent = class SortOrderIconComponent {
    constructor() {
        this.orderChange = new EventEmitter();
        this.selectedSortKeyChange = new EventEmitter();
    }
    set selectedSortKey(value) {
        this._selectedSortKey = value;
        this.selectedSortKeyChange.emit(value);
    }
    get selectedSortKey() {
        return this._selectedSortKey;
    }
    set order(value) {
        this._order = value;
        this.orderChange.emit(value);
    }
    get order() {
        return this._order;
    }
    get icon() {
        if (this.selectedSortKey === this.sortKey)
            return `sorting_${this.order}`;
        else
            return 'sorting';
    }
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SortOrderIconComponent.prototype, "sortKey", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SortOrderIconComponent.prototype, "selectedSortKey", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SortOrderIconComponent.prototype, "order", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SortOrderIconComponent.prototype, "orderChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SortOrderIconComponent.prototype, "selectedSortKeyChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SortOrderIconComponent.prototype, "iconClass", void 0);
SortOrderIconComponent = __decorate([
    Component({
        selector: 'abp-sort-order-icon',
        template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
    })
], SortOrderIconComponent);

let TableEmptyMessageComponent = class TableEmptyMessageComponent {
    constructor() {
        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
    }
    get emptyMessage() {
        return this.message || `${this.localizationResource}::${this.localizationProp}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "colspan", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableEmptyMessageComponent.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "localizationResource", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableEmptyMessageComponent.prototype, "localizationProp", void 0);
TableEmptyMessageComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: '[abp-table-empty-message]',
        template: `
    <td class="text-center" [attr.colspan]="colspan">
      {{ emptyMessage | abpLocalization }}
    </td>
  `
    })
], TableEmptyMessageComponent);

/**
 *
 * @deprecated use ngx-datatale instead.
 */
let TableComponent = class TableComponent {
    constructor() {
        this.bodyScrollLeft = 0;
        this.page = 1;
        this.trackingProp = 'id';
        this.emptyMessage = 'AbpAccount::NoDataAvailableInDatatable';
        this.pageChange = new EventEmitter();
        this.trackByFn = (_, value) => {
            return typeof value === 'object' ? value[this.trackingProp] || value : value;
        };
    }
    get totalRecords() {
        return this._totalRecords || this.value.length;
    }
    set totalRecords(newValue) {
        if (newValue < 0)
            this._totalRecords = 0;
        this._totalRecords = newValue;
    }
    get totalPages() {
        if (!this.rows) {
            return;
        }
        return Math.ceil(this.totalRecords / this.rows);
    }
    get slicedValue() {
        if (!this.rows || this.rows >= this.value.length) {
            return this.value;
        }
        const start = (this.page - 1) * this.rows;
        return this.value.slice(start, start + this.rows);
    }
    ngOnInit() {
        this.marginCalculator = document.body.dir === 'rtl' ? rtlCalculator : ltrCalculator;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "headerTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "bodyTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TableComponent.prototype, "colgroupTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TableComponent.prototype, "scrollHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TableComponent.prototype, "scrollable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TableComponent.prototype, "rows", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "page", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "trackingProp", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableComponent.prototype, "emptyMessage", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TableComponent.prototype, "pageChange", void 0);
__decorate([
    ViewChild('wrapper', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], TableComponent.prototype, "wrapperRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], TableComponent.prototype, "totalRecords", null);
TableComponent = __decorate([
    Component({
        selector: 'abp-table',
        template: "<div #wrapper class=\"ui-table ui-widget\">\r\n  <div class=\"ui-table-wrapper\">\r\n    <ng-container\r\n      *ngTemplateOutlet=\"scrollable ? scrollableTemplate : defaultTemplate\"\r\n    ></ng-container>\r\n    <div class=\"pagination-wrapper\">\r\n      <ngb-pagination\r\n        [class.op-0]=\"!totalPages\"\r\n        [collectionSize]=\"totalPages\"\r\n        [pageSize]=\"1\"\r\n        [page]=\"page\"\r\n        (pageChange)=\"pageChange.emit($event)\"\r\n        [maxSize]=\"3\"\r\n        [rotate]=\"true\"\r\n      ></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #scrollableTemplate>\r\n  <div class=\"ui-table-scrollable-wrapper\">\r\n    <div class=\"ui-table-scrollable-view\"></div>\r\n    <div class=\"ui-table-scrollable-header ui-widget-header\">\r\n      <div #header class=\"ui-table-scrollable-header-box\">\r\n        <table class=\"ui-table-scrollable-header-table\">\r\n          <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n          <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n          <tbody></tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div\r\n      #scrollableBody\r\n      (scroll)=\"header.style.margin = marginCalculator(scrollableBody)\"\r\n      class=\"ui-table-scrollable-body\"\r\n      [style.max-height]=\"scrollHeight\"\r\n    >\r\n      <table class=\"ui-table-scrollable-body-table\">\r\n        <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n        <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultTemplate>\r\n  <table>\r\n    <ng-container *ngTemplateOutlet=\"colGroup\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"head\"></ng-container>\r\n    <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #colGroup>\r\n  <ng-container *ngTemplateOutlet=\"colgroupTemplate\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #head>\r\n  <thead class=\"ui-table-thead\">\r\n    <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\r\n  </thead>\r\n</ng-template>\r\n\r\n<ng-template #body>\r\n  <tbody class=\"ui-table-tbody\" *ngIf=\"value && value.length; else emptyTemplate\">\r\n    <ng-template\r\n      #bodyTemplateWrapper\r\n      *ngFor=\"let val of slicedValue; let index = index; trackBy: trackByFn\"\r\n      [ngTemplateOutlet]=\"bodyTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: val, rowIndex: index }\"\r\n    ></ng-template>\r\n  </tbody>\r\n</ng-template>\r\n\r\n<ng-template #emptyTemplate>\r\n  <caption class=\"ui-table-empty\">\r\n    {{\r\n      emptyMessage | abpLocalization\r\n    }}\r\n  </caption>\r\n</ng-template>\r\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".ui-table{position:relative}.ui-table .ui-table-tbody>tr:hover,.ui-table .ui-table-tbody>tr:nth-child(2n):hover{-webkit-filter:brightness(90%);filter:brightness(90%)}.ui-table .ui-table-empty{border:1px solid #e0e0e0;border-top:0 solid #e0e0e0;padding:20px 0;text-align:center}.ui-table .ui-table-caption,.ui-table .ui-table-summary{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;padding:.571em 1em}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700}.ui-table .ui-table-thead>tr>th{background-color:#f4f4f4;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-table-tbody>tr>td{padding:.571em .857em}.ui-table .ui-table-tfoot>tr>td{background-color:#fff;border:1px solid #c8c8c8;color:#333;font-weight:700;padding:.571em .857em}.ui-table .ui-sortable-column{transition:box-shadow .2s}.ui-table .ui-sortable-column:focus{box-shadow:inset 0 0 0 .2em #8dcdff;outline:0 none;outline-offset:0}.ui-table .ui-sortable-column .ui-sortable-column-icon{color:#848484}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover{background-color:#e0e0e0;color:#333}.ui-table .ui-sortable-column:not(.ui-state-highlight):hover .ui-sortable-column-icon{color:#333}.ui-table .ui-sortable-column.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-sortable-column.ui-state-highlight .ui-sortable-column-icon{color:#fff}.ui-table .ui-editable-column input{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px}.ui-table .ui-editable-column input:focus{outline:1px solid #007ad9;outline-offset:2px}.ui-table .ui-table-tbody>tr{background-color:#fff;color:#333}.ui-table .ui-table-tbody>tr>td{background-color:inherit;border:1px solid #c8c8c8}.ui-table .ui-table-tbody>tr.ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr.ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-top>td{box-shadow:inset 0 2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr.ui-table-dragpoint-bottom>td{box-shadow:inset 0 -2px 0 0 #007ad9}.ui-table .ui-table-tbody>tr:nth-child(2n){background-color:#f9f9f9}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight{background-color:#007ad9;color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-state-highlight a{color:#fff}.ui-table .ui-table-tbody>tr:nth-child(2n).ui-contextmenu-selected{background-color:#007ad9;color:#fff}.ui-table.ui-table-hoverable-rows .ui-table-tbody>tr.ui-selectable-row:not(.ui-state-highlight):not(.ui-contextmenu-selected):hover{background-color:#eaeaea;color:#333;cursor:pointer}.ui-table .ui-column-resizer-helper{background-color:#007ad9}@media screen and (max-width:40em){.ui-table.ui-table-responsive .ui-table-tbody>tr>td{border:0}}.ui-table table{border-collapse:collapse;table-layout:fixed;width:100%}.ui-table .ui-table-tbody>tr>td,.ui-table .ui-table-tfoot>tr>td,.ui-table .ui-table-thead>tr>th{padding:.571em .857em}.ui-table .ui-sortable-column{cursor:pointer}.ui-table p-sorticon{vertical-align:middle}.ui-table .ui-table-auto-layout>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-auto-layout>.ui-table-wrapper>table{table-layout:auto}.ui-table .ui-table-caption,.ui-table .ui-table-summary{font-weight:700;padding:.25em .5em;text-align:center}.ui-table .ui-table-caption{border-bottom:0}.ui-table .ui-table-summary{border-top:0}.ui-table .ui-table-scrollable-wrapper{position:relative}.ui-table .ui-table-scrollable-footer,.ui-table .ui-table-scrollable-header{border:0;overflow:hidden}.ui-table .ui-table-scrollable-body{overflow:auto;position:relative}.ui-table .ui-table-virtual-table{position:absolute}.ui-table .ui-table-loading-virtual-table{display:none}.ui-table .ui-table-frozen-view .ui-table-scrollable-body{overflow:hidden}.ui-table .ui-table-frozen-view>.ui-table-scrollable-body>table>.ui-table-tbody>tr>td:last-child{border-right:0}.ui-table .ui-table-unfrozen-view{position:absolute;top:0}.ui-table .ui-table-resizable>.ui-table-wrapper{overflow-x:auto}.ui-table .ui-table-resizable .ui-table-tbody>tr>td,.ui-table .ui-table-resizable .ui-table-tfoot>tr>td,.ui-table .ui-table-resizable .ui-table-thead>tr>th{overflow:hidden}.ui-table .ui-table-resizable .ui-resizable-column{background-clip:padding-box;position:relative}.ui-table .ui-table-resizable-fit .ui-resizable-column:last-child .ui-column-resizer{display:none}.ui-table .ui-column-resizer{border:1px solid transparent;cursor:col-resize;display:block;height:100%;margin:0;padding:0;position:absolute!important;right:0;top:0;width:.5em}.ui-table .ui-column-resizer-helper{display:none;position:absolute;width:1px;z-index:10}.ui-table .ui-table-tbody>tr>td.ui-editing-cell{padding:0}.ui-table .ui-table-tbody>tr>td.ui-editing-cell p-celleditor>*{width:100%}.ui-table .ui-table-reorder-indicator-down,.ui-table .ui-table-reorder-indicator-up{display:none;position:absolute}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:none}@media screen and (max-width:40em){.ui-table .ui-table-responsive .ui-table-tfoot>tr>td,.ui-table .ui-table-responsive .ui-table-thead>tr>th,.ui-table .ui-table-responsive colgroup{display:none!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td{border:0;box-sizing:border-box;clear:left;display:block;float:left;text-align:left;width:100%!important}.ui-table .ui-table-responsive .ui-table-tbody>tr>td .ui-column-title{display:inline-block;font-weight:700;margin:-.4em 1em -.4em -.4em;min-width:30%;padding:.4em}}.ui-table .ui-widget{font-family:Open Sans,Helvetica Neue,sans-serif;font-size:14px;text-decoration:none}.ui-table .page-item.disabled .page-link,.ui-table .page-link{background-color:transparent;border:none}.ui-table .page-item.disabled .page-link{box-shadow:none}.ui-table .pagination{margin-bottom:0}.ui-table .pagination-wrapper{border-top:0;display:flex;justify-content:center;padding:0}.ui-table .op-0{opacity:0}"]
    })
], TableComponent);
function ltrCalculator(div) {
    return `0 auto 0 -${div.scrollLeft}px`;
}
function rtlCalculator(div) {
    return `0 ${-(div.scrollWidth - div.clientWidth - div.scrollLeft)}px 0 auto`;
}

let ToastContainerComponent = class ToastContainerComponent {
    constructor() {
        this.toasts = [];
        this.right = '30px';
        this.bottom = '30px';
    }
    ngOnInit() {
        this.toasts$.subscribe(toasts => {
            this.toasts = this.toastKey
                ? toasts.filter(t => {
                    return t.options && t.options.containerKey !== this.toastKey;
                })
                : toasts;
        });
    }
    trackByFunc(index, toast) {
        if (!toast)
            return null;
        return toast.options.id;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "top", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastContainerComponent.prototype, "right", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastContainerComponent.prototype, "bottom", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "left", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ToastContainerComponent.prototype, "toastKey", void 0);
ToastContainerComponent = __decorate([
    Component({
        selector: 'abp-toast-container',
        template: "<div\r\n  class=\"toast-container\"\r\n  [style.top]=\"top || 'auto'\"\r\n  [style.right]=\"right || 'auto'\"\r\n  [style.bottom]=\"bottom || 'auto'\"\r\n  [style.left]=\"left || 'auto'\"\r\n  [style.display]=\"toasts.length ? 'flex' : 'none'\"\r\n  [@toastInOut]=\"toasts.length\"\r\n>\r\n  <abp-toast [toast]=\"toast\" *ngFor=\"let toast of toasts; trackBy: trackByFunc\"></abp-toast>\r\n</div>\r\n",
        animations: [toastInOut],
        styles: [".toast-container{align-items:center;display:flex;flex-direction:column;justify-content:flex-end;min-height:80px;min-width:350px;position:fixed;z-index:1900}.toast-container.new-on-top{flex-direction:column-reverse}"]
    })
], ToastContainerComponent);

let ToasterService = class ToasterService {
    constructor(contentProjectionService) {
        this.contentProjectionService = contentProjectionService;
        this.toasts$ = new ReplaySubject(1);
        this.lastId = -1;
        this.toasts = [];
    }
    setContainer() {
        this.containerComponentRef = this.contentProjectionService.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(ToastContainerComponent, { toasts$: this.toasts$ }));
        this.containerComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * Creates an info toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    info(message, title, options) {
        return this.show(message, title, 'info', options);
    }
    /**
     * Creates a success toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    success(message, title, options) {
        return this.show(message, title, 'success', options);
    }
    /**
     * Creates a warning toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    warn(message, title, options) {
        return this.show(message, title, 'warning', options);
    }
    /**
     * Creates an error toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param options Spesific style or structural options for individual toast
     */
    error(message, title, options) {
        return this.show(message, title, 'error', options);
    }
    /**
     * Creates a toast with given parameters.
     * @param message Content of the toast
     * @param title Title of the toast
     * @param severity Sets color of the toast. "success", "warning" etc.
     * @param options Spesific style or structural options for individual toast
     */
    show(message, title = null, severity = 'neutral', options = {}) {
        if (!this.containerComponentRef)
            this.setContainer();
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
     * @param id ID of the toast to be removed.
     */
    remove(id) {
        this.toasts = this.toasts.filter(toast => snq(() => toast.options.id) !== id);
        this.toasts$.next(this.toasts);
    }
    /**
     * Removes all open toasts at once.
     */
    clear(key) {
        this.toasts = !key
            ? []
            : this.toasts.filter(toast => snq(() => toast.options.containerKey) !== key);
        this.toasts$.next(this.toasts);
    }
};
ToasterService.ɵprov = ɵɵdefineInjectable({ factory: function ToasterService_Factory() { return new ToasterService(ɵɵinject(ContentProjectionService)); }, token: ToasterService, providedIn: "root" });
ToasterService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ContentProjectionService])
], ToasterService);

let ToastComponent = class ToastComponent {
    constructor(toastService, localizationService) {
        this.toastService = toastService;
        this.localizationService = localizationService;
    }
    get severityClass() {
        if (!this.toast || !this.toast.severity)
            return '';
        return `toast-${this.toast.severity}`;
    }
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
    ngOnInit() {
        if (snq(() => this.toast.options.sticky))
            return;
        const timeout = snq(() => this.toast.options.life) || 5000;
        setTimeout(() => {
            this.close();
        }, timeout);
    }
    close() {
        this.toastService.remove(this.toast.options.id);
    }
    tap() {
        if (this.toast.options && this.toast.options.tapToDismiss)
            this.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "toast", void 0);
ToastComponent = __decorate([
    Component({
        selector: 'abp-toast',
        template: "<div class=\"toast\" [ngClass]=\"severityClass\" (click)=\"tap()\">\r\n  <div class=\"toast-icon\">\r\n    <i class=\"fa icon\" [ngClass]=\"iconClass\"></i>\r\n  </div>\r\n  <div class=\"toast-content\">\r\n    <button class=\"toast-close-button\" (click)=\"close()\" *ngIf=\"toast.options.closable\">\r\n      <i class=\"fa fa-times\"></i>\r\n    </button>\r\n    <div class=\"toast-title\">\r\n      {{ toast.title | abpLocalization: toast.options?.titleLocalizationParams }}\r\n    </div>\r\n    <p class=\"toast-message\">\r\n      {{ toast.message | abpLocalization: toast.options?.messageLocalizationParams }}\r\n    </p>\r\n  </div>\r\n</div>\r\n",
        styles: [".toast{-moz-user-select:none;-ms-grid-columns:50px 1fr;-ms-user-select:none;-webkit-user-select:none;background-color:#f0f0f0;border:2px solid #f0f0f0;border-radius:0;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#000;display:-ms-grid;display:grid;gap:10px;grid-template-columns:50px 1fr;margin:5px 0;opacity:1;padding:10px;user-select:none;width:350px;z-index:9999}.toast:hover{background-color:#e3e3e3;border:2px solid #e3e3e3;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-success{background-color:#51a351;border:2px solid #51a351;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-success:hover{background-color:#499249;border:2px solid #499249;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-info{background-color:#2f96b4;border:2px solid #2f96b4;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-info:hover{background-color:#2a85a0;border:2px solid #2a85a0;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-warning{background-color:#f89406;border:2px solid #f89406;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-warning:hover{background-color:#df8505;border:2px solid #df8505;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast.toast-error{background-color:#bd362f;border:2px solid #bd362f;box-shadow:0 0 10px -5px rgba(0,0,0,.4);color:#fff}.toast.toast-error:hover{background-color:#a9302a;border:2px solid #a9302a;box-shadow:0 0 15px -5px rgba(0,0,0,.4)}.toast .toast-icon{align-items:center;display:flex;justify-content:center}.toast .toast-icon .icon{font-size:36px}.toast .toast-content{position:relative}.toast .toast-content .toast-close-button{align-items:center;background:transparent;border:none;border-radius:50%;color:inherit;display:flex;height:25px;justify-content:center;margin:0;padding:0 5px 0 0;position:absolute;right:0;top:0;width:25px}.toast .toast-content .toast-close-button:focus{outline:none}.toast .toast-content .toast-title{font-size:1rem;font-weight:600;margin:0;padding:0}.toast .toast-content .toast-message{margin:0;max-width:240px;padding:0}"]
    }),
    __metadata("design:paramtypes", [ToasterService,
        LocalizationService])
], ToastComponent);

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

[dir=rtl] .data-tables-filter {
  text-align: left;
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
.ngx-datatable.material {
  box-shadow: none;
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
const BOOTSTRAP = 'bootstrap-{{dir}}.min.css';

let LoadingDirective = class LoadingDirective {
    constructor(elRef, vcRef, cdRes, injector, renderer) {
        this.elRef = elRef;
        this.vcRef = vcRef;
        this.cdRes = cdRes;
        this.injector = injector;
        this.renderer = renderer;
        this.position = 'relative';
        this.delay = 0;
    }
    get loading() {
        return this._loading;
    }
    set loading(newValue) {
        setTimeout(() => {
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
                .subscribe(() => {
                if (!this.componentRef) {
                    this.componentRef = this.cdRes
                        .resolveComponentFactory(LoadingComponent)
                        .create(this.injector);
                }
                if (newValue && !this.rootNode) {
                    this.rootNode = this.componentRef.hostView.rootNodes[0];
                    this.targetElement.appendChild(this.rootNode);
                }
                else if (this.rootNode) {
                    this.renderer.removeChild(this.rootNode.parentElement, this.rootNode);
                    this.rootNode = null;
                }
                this._loading = newValue;
                this.timerSubscription = null;
            });
        }, 0);
    }
    ngOnInit() {
        if (!this.targetElement) {
            const { offsetHeight, offsetWidth } = this.elRef.nativeElement;
            if (!offsetHeight && !offsetWidth && this.elRef.nativeElement.children.length) {
                this.targetElement = this.elRef.nativeElement.children[0];
            }
            else {
                this.targetElement = this.elRef.nativeElement;
            }
        }
    }
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
};
__decorate([
    HostBinding('style.position'),
    __metadata("design:type", Object)
], LoadingDirective.prototype, "position", void 0);
__decorate([
    Input('abpLoading'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], LoadingDirective.prototype, "loading", null);
__decorate([
    Input('abpLoadingTargetElement'),
    __metadata("design:type", HTMLElement)
], LoadingDirective.prototype, "targetElement", void 0);
__decorate([
    Input('abpLoadingDelay'),
    __metadata("design:type", Object)
], LoadingDirective.prototype, "delay", void 0);
LoadingDirective = __decorate([
    Directive({ selector: '[abpLoading]' }),
    __metadata("design:paramtypes", [ElementRef,
        ViewContainerRef,
        ComponentFactoryResolver,
        Injector,
        Renderer2])
], LoadingDirective);

let NgxDatatableDefaultDirective = class NgxDatatableDefaultDirective {
    constructor(table) {
        this.table = table;
        this.class = 'material bordered';
        this.table.columnMode = ColumnMode.force;
        this.table.footerHeight = 50;
        this.table.headerHeight = 50;
        this.table.rowHeight = 'auto';
        this.table.scrollbarH = true;
        this.table.virtualization = false;
    }
    get classes() {
        return `ngx-datatable ${this.class}`;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxDatatableDefaultDirective.prototype, "class", void 0);
__decorate([
    HostBinding('class'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], NgxDatatableDefaultDirective.prototype, "classes", null);
NgxDatatableDefaultDirective = __decorate([
    Directive({
        // tslint:disable-next-line
        selector: 'ngx-datatable[default]',
        exportAs: 'ngxDatatableDefault',
    }),
    __metadata("design:paramtypes", [DatatableComponent])
], NgxDatatableDefaultDirective);

let NgxDatatableListDirective = class NgxDatatableListDirective {
    constructor(table, cdRef, localizationService) {
        this.table = table;
        this.cdRef = cdRef;
        this.localizationService = localizationService;
        this.subscription = new Subscription();
        this.setInitialValues();
    }
    setInitialValues() {
        this.table.externalPaging = true;
        this.table.externalSorting = true;
        this.table.messages = {
            emptyMessage: this.localizationService.localizeSync('AbpUi', 'NoDataAvailableInDatatable', 'No data available'),
            totalMessage: this.localizationService.localizeSync('AbpUi', 'Total', 'total'),
            selectedMessage: this.localizationService.localizeSync('AbpUi', 'Selected', 'selected'),
        };
    }
    subscribeToPage() {
        const sub = this.table.page.subscribe(({ offset }) => {
            this.list.page = offset;
            this.table.offset = offset;
        });
        this.subscription.add(sub);
    }
    subscribeToSort() {
        const sub = this.table.sort.subscribe(({ sorts: [{ prop, dir }] }) => {
            if (prop === this.list.sortKey && this.list.sortOrder === 'desc') {
                this.list.sortKey = '';
                this.list.sortOrder = '';
                this.table.sorts = [];
                this.cdRef.detectChanges();
            }
            else {
                this.list.sortKey = prop;
                this.list.sortOrder = dir;
            }
        });
        this.subscription.add(sub);
    }
    subscribeToIsLoading() {
        const sub = this.list.isLoading$.subscribe(loading => {
            this.table.loadingIndicator = loading;
            this.cdRef.detectChanges();
        });
        this.subscription.add(sub);
    }
    ngOnChanges({ list }) {
        if (!list.firstChange)
            return;
        const { maxResultCount, page } = list.currentValue;
        this.table.limit = maxResultCount;
        this.table.offset = page;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscribeToPage();
        this.subscribeToSort();
        this.subscribeToIsLoading();
    }
};
__decorate([
    Input(),
    __metadata("design:type", ListService)
], NgxDatatableListDirective.prototype, "list", void 0);
NgxDatatableListDirective = __decorate([
    Directive({
        // tslint:disable-next-line
        selector: 'ngx-datatable[list]',
        exportAs: 'ngxDatatableList',
    }),
    __metadata("design:paramtypes", [DatatableComponent,
        ChangeDetectorRef,
        LocalizationService])
], NgxDatatableListDirective);

/**
 *
 * @deprecated To be deleted in v3.3
 */
let TableSortDirective = class TableSortDirective {
    constructor(abpTable, sortPipe, cdRef) {
        this.abpTable = abpTable;
        this.sortPipe = sortPipe;
        this.cdRef = cdRef;
        this.value = [];
    }
    get table() {
        return (this.abpTable || snq(() => this.cdRef['_view'].component) || snq(() => this.cdRef['context']) // 'context' for ivy
        );
    }
    ngOnChanges({ value, abpTableSort }) {
        if (this.table && (value || abpTableSort)) {
            this.abpTableSort = this.abpTableSort || {};
            this.table.value = this.sortPipe.transform(clone(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TableSortDirective.prototype, "abpTableSort", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TableSortDirective.prototype, "value", void 0);
TableSortDirective = __decorate([
    Directive({
        selector: '[abpTableSort]',
        providers: [SortPipe],
    }),
    __param(0, Host()), __param(0, Optional()), __param(0, Self()),
    __metadata("design:paramtypes", [TableComponent,
        SortPipe,
        ChangeDetectorRef])
], TableSortDirective);

let HttpErrorWrapperComponent = class HttpErrorWrapperComponent {
    constructor() {
        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
        this.isHomeShow = true;
    }
    get statusText() {
        return this.status ? `[${this.status}]` : '';
    }
    ngOnInit() {
        this.backgroundColor =
            snq(() => window.getComputedStyle(document.body).getPropertyValue('background-color')) ||
                '#fff';
    }
    ngAfterViewInit() {
        if (this.customComponent) {
            const customComponentRef = this.cfRes
                .resolveComponentFactory(this.customComponent)
                .create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(customComponentRef.hostView.rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        fromEvent(document, 'keyup')
            .pipe(takeUntilDestroy(this), debounceTime(150), filter((key) => key && key.key === 'Escape'))
            .subscribe(() => {
            this.destroy();
        });
    }
    ngOnDestroy() { }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
__decorate([
    ViewChild('container', { static: false }),
    __metadata("design:type", ElementRef)
], HttpErrorWrapperComponent.prototype, "containerRef", void 0);
HttpErrorWrapperComponent = __decorate([
    Component({
        selector: 'abp-http-error-wrapper',
        template: "<div\r\n  #container\r\n  id=\"abp-http-error-container\"\r\n  class=\"error\"\r\n  [style.backgroundColor]=\"backgroundColor\"\r\n>\r\n  <button\r\n    *ngIf=\"!hideCloseIcon\"\r\n    id=\"abp-close-button\"\r\n    type=\"button\"\r\n    class=\"close mr-2\"\r\n    (click)=\"destroy()\"\r\n  >\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a\r\n            *ngIf=\"isHomeShow\"\r\n            (click)=\"destroy()\"\r\n            routerLink=\"/\"\r\n            class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [".error{height:100vh;position:fixed;top:0;width:100vw;z-index:999999}.centered{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}"]
    })
], HttpErrorWrapperComponent);

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
let ErrorHandler = class ErrorHandler {
    constructor(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.filterRestErrors = ({ status }) => {
            if (typeof status !== 'number')
                return false;
            return this.httpErrorConfig.skipHandledErrorCodes.findIndex(code => code === status) < 0;
        };
        this.filterRouteErrors = (instance) => {
            return (snq(() => instance.event.error.indexOf('Cannot match') > -1) &&
                this.httpErrorConfig.skipHandledErrorCodes.findIndex(code => code === 404) < 0);
        };
        this.listenToRestError();
        this.listenToRouterError();
        this.listenToRouterDataResolved();
    }
    listenToRouterError() {
        this.actions
            .pipe(ofActionSuccessful(RouterError), filter(this.filterRouteErrors))
            .subscribe(() => this.show404Page());
    }
    listenToRouterDataResolved() {
        this.actions
            .pipe(ofActionSuccessful(RouterDataResolved), filter(() => !!this.componentRef))
            .subscribe(() => {
            this.componentRef.destroy();
            this.componentRef = null;
        });
    }
    listenToRestError() {
        this.actions
            .pipe(ofActionSuccessful(RestOccurError), map(action => action.payload), filter(this.filterRestErrors))
            .subscribe(err => {
            const body = snq(() => err.error.error, DEFAULT_ERROR_MESSAGES.defaultError.title);
            if (err instanceof HttpErrorResponse && err.headers.get('_AbpErrorFormat')) {
                const confirmation$ = this.showError(null, null, body);
                if (err.status === 401) {
                    confirmation$.subscribe(() => {
                        this.navigateToLogin();
                    });
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
                            }).subscribe(() => this.navigateToLogin());
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
        });
    }
    show401Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    }
    show404Page() {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    }
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
    navigateToLogin() {
        this.store.dispatch(new Navigate(['/account/login'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState.url) },
        }));
    }
    createErrorComponent(instance) {
        const renderer = this.rendererFactory.createRenderer(null, null);
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
        if (this.canCreateCustomError(instance.status)) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
        }
        this.appRef.attachView(this.componentRef.hostView);
        renderer.appendChild(host, this.componentRef.hostView.rootNodes[0]);
        const destroy$ = new Subject();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe(() => {
            this.componentRef.destroy();
            this.componentRef = null;
        });
    }
    canCreateCustomError(status) {
        return snq(() => this.httpErrorConfig.errorScreen.component &&
            this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1);
    }
};
ErrorHandler.ɵprov = ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(ɵɵinject(Actions), ɵɵinject(Store), ɵɵinject(ConfirmationService), ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(RendererFactory2), ɵɵinject(INJECTOR), ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
ErrorHandler = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(7, Inject('HTTP_ERROR_CONFIG')),
    __metadata("design:paramtypes", [Actions,
        Store,
        ConfirmationService,
        ApplicationRef,
        ComponentFactoryResolver,
        RendererFactory2,
        Injector, Object])
], ErrorHandler);

const LAZY_STYLES = new InjectionToken('LAZY_STYLES');

let LazyStyleHandler = class LazyStyleHandler {
    constructor(injector) {
        this._dir = 'ltr';
        this.loaded = new Map();
        this.setStyles(injector);
        this.setLazyLoad(injector);
        this.listenToLanguageChanges(injector);
    }
    set dir(dir) {
        if (dir === this._dir)
            return;
        this.switchCSS(dir);
        this.setBodyDir(dir);
        this._dir = dir;
    }
    get dir() {
        return this._dir;
    }
    getHrefFromLink(link) {
        if (!link)
            return '';
        const a = document.createElement('a');
        a.href = link.href;
        return a.pathname.replace(/^\//, '');
    }
    getLoadedBootstrap() {
        const href = createLazyStyleHref(BOOTSTRAP, this.dir);
        const selector = `[href*="${href.replace(/\.css$/, '')}"]`;
        const link = document.querySelector(selector);
        return { href, link };
    }
    listenToLanguageChanges(injector) {
        const l10n = injector.get(LocalizationService);
        // will always listen, no need to unsubscribe
        l10n.languageChange
            .pipe(map(({ payload }) => payload), startWith(l10n.currentLang))
            .subscribe(locale => {
            this.dir = getLocaleDirection(locale);
        });
    }
    setBodyDir(dir) {
        document.body.dir = dir;
    }
    setLazyLoad(injector) {
        this.lazyLoad = injector.get(LazyLoadService);
        const { href, link } = this.getLoadedBootstrap();
        this.lazyLoad.loaded.set(href, link);
    }
    setStyles(injector) {
        this.styles = injector.get(LAZY_STYLES, [BOOTSTRAP]);
    }
    switchCSS(dir) {
        this.styles.forEach(style => {
            const oldHref = createLazyStyleHref(style, this.dir);
            const newHref = createLazyStyleHref(style, dir);
            const link = this.loaded.get(newHref);
            const href = this.getHrefFromLink(link) || newHref;
            const strategy = LOADING_STRATEGY.PrependAnonymousStyleToHead(href);
            this.lazyLoad.load(strategy).subscribe(() => {
                const oldLink = this.lazyLoad.loaded.get(oldHref);
                this.loaded.delete(newHref);
                this.loaded.set(oldHref, oldLink);
                const newLink = this.lazyLoad.loaded.get(href);
                this.lazyLoad.loaded.delete(href);
                this.lazyLoad.loaded.set(newHref, newLink);
                this.lazyLoad.remove(oldHref);
            });
        });
    }
};
LazyStyleHandler.ɵprov = ɵɵdefineInjectable({ factory: function LazyStyleHandler_Factory() { return new LazyStyleHandler(ɵɵinject(INJECTOR)); }, token: LazyStyleHandler, providedIn: "root" });
LazyStyleHandler = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Injector])
], LazyStyleHandler);
function createLazyStyleHref(style, dir) {
    return style.replace(/{{\s*dir\s*}}/g, dir);
}
function initLazyStyleHandler(injector) {
    return () => new LazyStyleHandler(injector);
}

const THEME_SHARED_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: undefined,
                name: "AbpUiNavigation::Menu:Administration" /* Administration */,
                iconClass: 'fa fa-wrench',
                order: 100,
            },
        ]);
    };
}

let NavItemsService = class NavItemsService {
    constructor() {
        this._items$ = new BehaviorSubject([]);
    }
    get items() {
        return this._items$.value;
    }
    get items$() {
        return this._items$.asObservable();
    }
    addItems(items) {
        this._items$.next([...this.items, ...items].sort(sortItems));
    }
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index > -1) {
            this._items$.next([...this.items.slice(0, index), ...this.items.slice(index + 1)]);
        }
    }
    patchItem(id, item) {
        const index = this.items.findIndex(i => i.id === id);
        if (index > -1) {
            this._items$.next([
                ...this.items.slice(0, index),
                Object.assign(Object.assign({}, this.items[index]), item),
                ...this.items.slice(index + 1),
            ].sort(sortItems));
        }
    }
};
NavItemsService.ɵprov = ɵɵdefineInjectable({ factory: function NavItemsService_Factory() { return new NavItemsService(); }, token: NavItemsService, providedIn: "root" });
NavItemsService = __decorate([
    Injectable({ providedIn: 'root' })
], NavItemsService);
function sortItems(a, b) {
    if (!a.order)
        return 1;
    if (!b.order)
        return -1;
    return a.order - b.order;
}

const THEME_SHARED_APPEND_CONTENT = new InjectionToken('THEME_SHARED_APPEND_CONTENT', {
    providedIn: 'root',
    factory: () => {
        const domInsertion = inject(DomInsertionService);
        domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        import('chart.js').then(() => chartJsLoaded$.next(true));
    },
});

function httpErrorConfigFactory(config = {}) {
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return Object.assign({ skipHandledErrorCodes: [], errorScreen: {} }, config);
}
const HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');

function padNumber(value) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    }
    else {
        return '';
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
let DateParserFormatter = class DateParserFormatter extends NgbDateParserFormatter {
    constructor(datePipe) {
        super();
        this.datePipe = datePipe;
    }
    parse(value) {
        if (value) {
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
};
DateParserFormatter = __decorate([
    Injectable(),
    __param(0, Optional()),
    __metadata("design:paramtypes", [DatePipe])
], DateParserFormatter);

var ThemeSharedModule_1;
let ThemeSharedModule = ThemeSharedModule_1 = class ThemeSharedModule {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    static forRoot(options = {}) {
        return {
            ngModule: ThemeSharedModule_1,
            providers: [
                THEME_SHARED_ROUTE_PROVIDERS,
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [THEME_SHARED_APPEND_CONTENT],
                    useFactory: noop,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: initLazyStyleHandler,
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
};
ThemeSharedModule = ThemeSharedModule_1 = __decorate([
    NgModule({
        imports: [CoreModule, NgxDatatableModule, NgxValidateCoreModule, NgbPaginationModule],
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
            TableComponent,
            TableEmptyMessageComponent,
            ToastComponent,
            ToastContainerComponent,
            SortOrderIconComponent,
            NgxDatatableDefaultDirective,
            NgxDatatableListDirective,
            LoadingDirective,
            TableSortDirective,
        ],
        exports: [
            NgxDatatableModule,
            BreadcrumbComponent,
            ButtonComponent,
            ChartComponent,
            ConfirmationComponent,
            LoaderBarComponent,
            LoadingComponent,
            ModalComponent,
            TableComponent,
            TableEmptyMessageComponent,
            ToastComponent,
            ToastContainerComponent,
            SortOrderIconComponent,
            NgxDatatableDefaultDirective,
            NgxDatatableListDirective,
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
    }),
    __metadata("design:paramtypes", [ErrorHandler])
], ThemeSharedModule);

const { minLength, maxLength } = Validators;
function getPasswordValidators(store) {
    const getRule = getRuleFn(store);
    const passwordRulesArr = [];
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
function getRuleFn(store) {
    return (key) => {
        const passwordRules = store.selectSnapshot(ConfigState.getSettings('Identity.Password'));
        return (passwordRules[`Abp.Identity.Password.${key}`] || '').toLowerCase();
    };
}

/*
 * Public API Surface of theme-shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BOOTSTRAP, BreadcrumbComponent, ButtonComponent, ChartComponent, Confirmation, ConfirmationComponent, ConfirmationService, DateParserFormatter, ErrorHandler, HTTP_ERROR_CONFIG, LAZY_STYLES, LoaderBarComponent, LoadingComponent, LoadingDirective, ModalComponent, ModalService, NavItemsService, NgxDatatableDefaultDirective, NgxDatatableListDirective, SortOrderIconComponent, THEME_SHARED_APPEND_CONTENT, THEME_SHARED_ROUTE_PROVIDERS, TableComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, ToastContainerComponent, ToasterService, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, configureRoutes, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getPasswordValidators, getRandomBackgroundColor, httpErrorConfigFactory, slideFromBottom, toastInOut, BreadcrumbComponent as ɵa, ButtonComponent as ɵb, THEME_SHARED_ROUTE_PROVIDERS as ɵbb, configureRoutes as ɵbc, THEME_SHARED_APPEND_CONTENT as ɵbd, initLazyStyleHandler as ɵbe, httpErrorConfigFactory as ɵbf, HTTP_ERROR_CONFIG as ɵbg, DateParserFormatter as ɵbh, ChartComponent as ɵc, ConfirmationComponent as ɵd, HttpErrorWrapperComponent as ɵe, LoaderBarComponent as ɵf, LoadingComponent as ɵg, ModalComponent as ɵh, fadeAnimation as ɵi, fadeIn as ɵj, fadeOut as ɵk, ModalService as ɵl, ConfirmationService as ɵm, ModalContainerComponent as ɵn, TableComponent as ɵo, TableEmptyMessageComponent as ɵp, ToastComponent as ɵq, ToasterService as ɵr, ToastContainerComponent as ɵs, toastInOut as ɵt, SortOrderIconComponent as ɵu, NgxDatatableDefaultDirective as ɵv, NgxDatatableListDirective as ɵw, LoadingDirective as ɵx, TableSortDirective as ɵy, ErrorHandler as ɵz };
//# sourceMappingURL=abp-ng.theme.shared.js.map
