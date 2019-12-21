(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/theme-shared/fesm2015/abp-ng.theme.shared.js ***!
  \*********************************************************************************************************/
/*! exports provided: BreadcrumbComponent, ButtonComponent, ChartComponent, ConfirmationComponent, ConfirmationService, DateParserFormatter, LoaderBarComponent, ModalComponent, SortOrderIconComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, Toaster, ToasterService, addSettingTab, appendScript, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getRandomBackgroundColor, getSettingTabs, slideFromBottom, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵs, ɵt, ɵu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationService", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateParserFormatter", function() { return DateParserFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderBarComponent", function() { return LoaderBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrderIconComponent", function() { return SortOrderIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEmptyMessageComponent", function() { return TableEmptyMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortDirective", function() { return TableSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSharedModule", function() { return ThemeSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return Toaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSettingTab", function() { return addSettingTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendScript", function() { return appendScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartJsLoaded$", function() { return chartJsLoaded$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapse", function() { return collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseLinearWithMargin", function() { return collapseLinearWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseWithMargin", function() { return collapseWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseX", function() { return collapseX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseY", function() { return collapseY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseYWithMargin", function() { return collapseYWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogAnimation", function() { return dialogAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandX", function() { return expandX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandY", function() { return expandY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandYWithMargin", function() { return expandYWithMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDown", function() { return fadeInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInRight", function() { return fadeInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDown", function() { return fadeOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutLeft", function() { return fadeOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutRight", function() { return fadeOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUp", function() { return fadeOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBackgroundColor", function() { return getRandomBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingTabs", function() { return getSettingTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideFromBottom", function() { return slideFromBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ConfirmationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ConfirmationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return AbstractToaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return HttpErrorWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return LoaderBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return fadeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TableEmptyMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return ToastComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SortOrderIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TableSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return httpErrorConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return HTTP_ERROR_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return DateParserFormatter; });
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "../../node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");


















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
            let currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(splittedUrl[0]));
            if (!currentUrl) {
                currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(null, null, this.router.url));
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-breadcrumb',
                template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
if (false) {}

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
        /**
         * @deprecated use abpClick instead
         */
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @deprecated use abpFocus instead
         */
        // tslint:disable-next-line: no-output-native
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @deprecated use abpBlur instead
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:enable
        this.abpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ButtonComponent.propDecorators = {
    buttonId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    abpBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    buttonRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['button', { static: true },] }]
};
if (false) {}

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
const chartJsLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);

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
        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-chart',
                template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
ChartComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ChartComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plugins: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onDataSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    initialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstracts/toaster.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        this.messageService = messageService;
        this.key = 'abpToast';
        this.sticky = false;
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
        return this.show(message, title, 'warn', options);
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
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        this.messageService.clear(this.key);
        this.messageService.add(Object.assign({ severity, detail: message || '', summary: title || '' }, options, { key: this.key }, (typeof (options || ((/** @type {?} */ ({})))).sticky === 'undefined' && { sticky: this.sticky })));
        this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        return this.status$;
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status) {
        this.messageService.clear(this.key);
        this.status$.next(status || "dismiss" /* dismiss */);
        this.status$.complete();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/confirmation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmationService extends AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        super(messageService);
        this.messageService = messageService;
        this.key = 'abpConfirmation';
        this.sticky = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    /**
     * @param {?} message
     * @param {?} title
     * @param {?} severity
     * @param {?=} options
     * @return {?}
     */
    show(message, title, severity, options) {
        this.listenToEscape();
        return super.show(message, title, severity, options);
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    clear(status) {
        super.clear(status);
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    listenToEscape() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ConfirmationService.ctorParameters = () => [
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
/** @nocollapse */ ConfirmationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConfirmationService_Factory() { return new ConfirmationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ConfirmationService, providedIn: "root" });
if (false) {}

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
        this.confirm = "confirm" /* confirm */;
        this.reject = "reject" /* reject */;
        this.dismiss = "dismiss" /* dismiss */;
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-confirmation',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <p-toast
      position="center"
      key="abpConfirmation"
      (onClose)="close(dismiss)"
      [modal]="true"
      [baseZIndex]="1000"
      styleClass="abp-confirm"
    >
      <ng-template let-message pTemplate="message">
        <i class="fa fa-exclamation-circle abp-confirm-icon"></i>
        <div *ngIf="message.summary" class="abp-confirm-summary">
          {{ message.summary | abpLocalization: message.titleLocalizationParams }}
        </div>
        <div class="abp-confirm-body">
          {{ message.detail | abpLocalization: message.messageLocalizationParams }}
        </div>

        <div class="abp-confirm-footer justify-content-center">
          <button
            *ngIf="!message.hideCancelBtn"
            id="cancel"
            type="button"
            class="btn btn-sm btn-primary"
            (click)="close(reject)"
          >
            {{ message.cancelText || message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}
          </button>
          <button
            *ngIf="!message.hideYesBtn"
            id="confirm"
            type="button"
            class="btn btn-sm btn-primary"
            (click)="close(confirm)"
            autofocus
          >
            <span>{{ message.yesText || message.yesCopy || 'AbpIdentity::Yes' | abpLocalization }}</span>
          </button>
        </div>
      </ng-template>
    </p-toast>
  `
            }] }
];
/** @nocollapse */
ConfirmationComponent.ctorParameters = () => [
    { type: ConfirmationService }
];
if (false) {}

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
            Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
             * @return {?}
             */
            () => window.getComputedStyle(document.body).getPropertyValue('background-color'))) || '#fff';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.customComponent) {
            /** @type {?} */
            const customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(((/** @type {?} */ (customComponentRef.hostView))).rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-http-error-wrapper',
                template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
HttpErrorWrapperComponent.propDecorators = {
    containerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container', { static: false },] }]
};
if (false) {}

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
            .pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StopLoader"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(this.filter), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"])
                this.startLoading();
            else
                this.stopLoading();
        }));
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationError"])), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"])
                this.startLoading();
            else
                this.stopLoading();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.interval.unsubscribe();
    }
    /**
     * @return {?}
     */
    startLoading() {
        if (this.isLoading || this.progressLevel !== 0)
            return;
        this.isLoading = true;
        this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(this.intervalPeriod).subscribe((/**
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
        this.interval.unsubscribe();
        this.progressLevel = 100;
        this.isLoading = false;
        if (this.timer && !this.timer.closed)
            return;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.stopDelay).subscribe((/**
         * @return {?}
         */
        () => {
            this.progressLevel = 0;
            this.cdRef.detectChanges();
        }));
    }
}
LoaderBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
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
                styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;-webkit-transition:opacity .4s linear .4s;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;-webkit-transition:none;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;-webkit-transition:width .4s;transition:width .4s}"]
            }] }
];
/** @nocollapse */
LoaderBarComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
LoaderBarComponent.propDecorators = {
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/fade.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1' }))], {
    params: { time: '350ms', easing: 'ease' },
});
/** @type {?} */
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0' }))], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const fadeInDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeInRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateY(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateY(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });
/** @type {?} */
const fadeOutRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} translateX(0)' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} translateX(-20px)' })),
], { params: { time: '350ms', easing: 'ease', transform: '' } });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/modal.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeIn)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut)),
]);
/** @type {?} */
const dialogAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('dialog', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeInDown)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut)),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/modal/modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    /**
     * @param {?} renderer
     * @param {?} confirmationService
     */
    constructor(renderer, confirmationService) {
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.centered = false;
        this.modalClass = '';
        this.size = 'lg';
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disappear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._visible = false;
        this._busy = false;
        this.isModalOpen = false;
        this.isConfirmationOpen = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
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
        this.isModalOpen = value;
        this._visible = value;
        this.visibleChange.emit(value);
        if (value) {
            setTimeout((/**
             * @return {?}
             */
            () => this.listen()), 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
        }
        else {
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
        }
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
    ngOnDestroy() {
        this.destroy$.next();
    }
    /**
     * @return {?}
     */
    close() {
        if (this.busy)
            return;
        /** @type {?} */
        let node;
        if (!this.modalContent) {
            node = (/** @type {?} */ (document.getElementById('modal-container')));
        }
        /** @type {?} */
        const nodes = getFlatNodes(((/** @type {?} */ ((node || this.modalContent.nativeElement).querySelector('#abp-modal-body')))).childNodes);
        if (hasNgDirty(nodes)) {
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
                if (status === "confirm" /* confirm */) {
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key && key.key === 'Escape')))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.close();
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.abpClose)
                return;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.abpClose.nativeElement, 'click')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((/**
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-modal',
                template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                animations: [fadeAnimation]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ConfirmationService }
];
ModalComponent.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    busy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    modalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    abpSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [ButtonComponent, { static: false, read: ButtonComponent },] }],
    abpHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpHeader', { static: false },] }],
    abpBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpBody', { static: false },] }],
    abpFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpFooter', { static: false },] }],
    abpClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['abpClose', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['abpModalContent', { static: false },] }],
    abpButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['abp-button',] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    appear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    disappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}
/**
 * @param {?} nodes
 * @return {?}
 */
function getFlatNodes(nodes) {
    return Array.from(nodes).reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => [...acc, ...(val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val])]), []);
}
/**
 * @param {?} nodes
 * @return {?}
 */
function hasNgDirty(nodes) {
    return nodes.findIndex((/**
     * @param {?} node
     * @return {?}
     */
    node => (node.className || '').indexOf('ng-dirty') > -1)) > -1;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortOrderIconComponent {
    constructor() {
        this.selectedKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSortKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.orderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @deprecated use selectedSortKey instead.
     * @param {?} value
     * @return {?}
     */
    set selectedKey(value) {
        this.selectedSortKey = value;
        this.selectedKeyChange.emit(value);
    }
    /**
     * @return {?}
     */
    get selectedKey() {
        return this._selectedSortKey;
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
     * @deprecated use sortKey instead.
     * @return {?}
     */
    get key() {
        return this.sortKey;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set key(value) {
        this.sortKey = value;
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
        if (!this.selectedSortKey)
            return 'fa-sort';
        if (this.selectedSortKey === this.sortKey)
            return `fa-sort-${this.order}`;
        else
            return '';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sort(key) {
        this.selectedKey = key; // TODO: To be removed
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
                this.selectedKey = ''; // TODO: To be removed
                this.orderChange.emit('');
                break;
        }
    }
}
SortOrderIconComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-sort-order-icon',
                template: "<span class=\"float-right {{ iconClass }}\">\r\n  <i class=\"fa {{ icon }}\"></i>\r\n</span>\r\n"
            }] }
];
SortOrderIconComponent.propDecorators = {
    selectedKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedSortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    selectedKeyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    selectedSortKeyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    sortKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    orderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    iconClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
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
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localizationResource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    localizationProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/toast/toast.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastComponent {
}
ToastComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'abp-toast',
                // tslint:disable-next-line: component-max-inline-declarations
                template: `
    <p-toast position="bottom-right" key="abpToast" styleClass="abp-toast" [baseZIndex]="1000">
      <ng-template let-message pTemplate="message">
        <span
          class="ui-toast-icon pi"
          [ngClass]="{
            'pi-info-circle': message.severity === 'info',
            'pi-exclamation-triangle': message.severity === 'warn',
            'pi-times': message.severity === 'error',
            'pi-check': message.severity === 'success'
          }"
        ></span>
        <div class="ui-toast-message-text-content">
          <div class="ui-toast-summary">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>
          <div class="ui-toast-detail">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>
        </div>
      </ng-template>
    </p-toast>
  `
            }] }
];

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
}

.ui-table-scrollable-body::-webkit-scrollbar-track {
  background: #ddd;
}

.ui-table-scrollable-body::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal.show {
  display: block !important;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 7px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1040;
}

.modal::-webkit-scrollbar {
  width: 7px;
}

.modal::-webkit-scrollbar-track {
  background: #ddd;
}

.modal::-webkit-scrollbar-thumb {
  background: #8a8686;
}

.modal-dialog {
  z-index: 1050;
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

.abp-toast .ui-toast-message {
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;
  color: #1b1d29;
}

.abp-toast .ui-toast-message-content {
  padding: 10px;
}

.abp-toast .ui-toast-message-content .ui-toast-icon {
  top: 0;
  left: 0;
  padding: 10px;
}

.abp-toast .ui-toast-summary {
  margin: 0;
  font-weight: 700;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error {
  border: 2px solid #ba1659;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {
  color: #ba1659;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn {
  border: 2px solid #ed5d98;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-message-content .ui-toast-icon {
  color: #ed5d98;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success {
  border: 2px solid #1c9174;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {
  color: #1c9174;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info {
  border: 2px solid #fccb31;
  background-color: #f4f4f7;
}

body abp-toast .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {
  color: #fccb31;
}

.abp-confirm .ui-toast-message {
  box-sizing: border-box;
  padding: 0px;
  border:0 none;
  border-radius: 4px;
  background-color: transparent !important;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.abp-confirm .ui-toast-message-content {
  padding: 0px;
}

.abp-confirm .abp-confirm-icon {
  margin: 32px 50px 5px !important;
  color: #f8bb86 !important;
  font-size: 52px !important;
}

.abp-confirm .ui-toast-close-icon {
  display: none !important;
}

.abp-confirm .abp-confirm-summary {
  display: block !important;
  margin-bottom: 13px !important;
  padding: 13px 16px 0px !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}

.abp-confirm .abp-confirm-body {
  display: inline-block !important;
  padding: 0px 10px !important;
}

.abp-confirm .abp-confirm-footer {
  display: block;
  margin-top: 30px;
  padding: 16px;
  text-align: right;
}

.abp-confirm .abp-confirm-footer .btn {
  margin-left: 10px !important;
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
 * Generated from: lib/directives/table-sort.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableSortOptions() { }
if (false) {}
class TableSortDirective {
    /**
     * @param {?} table
     * @param {?} sortPipe
     */
    constructor(table, sortPipe) {
        this.table = table;
        this.sortPipe = sortPipe;
        this.value = [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ value, abpTableSort }) {
        if (value || abpTableSort) {
            this.abpTableSort = this.abpTableSort || ((/** @type {?} */ ({})));
            this.table.value = this.sortPipe.transform(just_clone__WEBPACK_IMPORTED_MODULE_12___default()(this.value), this.abpTableSort.order, this.abpTableSort.key);
        }
    }
}
TableSortDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[abpTableSort]',
                providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"]],
            },] }
];
/** @nocollapse */
TableSortDirective.ctorParameters = () => [
    { type: primeng_table__WEBPACK_IMPORTED_MODULE_11__["Table"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"] }
];
TableSortDirective.propDecorators = {
    abpTableSort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
if (false) {}

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
        this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"])).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"]) {
                const { payload: err = (/** @type {?} */ ({})) } = res;
                /** @type {?} */
                const body = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
                 * @return {?}
                 */
                () => ((/** @type {?} */ (err))).error.error), DEFAULT_ERROR_MESSAGES.defaultError.title);
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpErrorResponse"] && err.headers.get('_AbpErrorFormat')) {
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
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"] && Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
             * @return {?}
             */
            () => res.event.error.indexOf('Cannot match') > -1), false)) {
                this.show404Page();
            }
            else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"] && this.componentRef) {
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
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['/account/login'], null, { state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterState"].url) } }));
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
        this.componentRef = this.cfRes.resolveComponentFactory(HttpErrorWrapperComponent).create(this.injector);
        for (const key in this.componentRef.instance) {
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
        const destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
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
        return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])((/**
         * @return {?}
         */
        () => this.httpErrorConfig.errorScreen.component &&
            this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1));
    }
}
ErrorHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ErrorHandler.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: ConfirmationService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['HTTP_ERROR_CONFIG',] }] }
];
/** @nocollapse */ ErrorHandler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ErrorHandler_Factory() { return new ErrorHandler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ConfirmationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
if (false) {}

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
    return (/** @type {?} */ (Object.assign({ errorScreen: {} }, config)));
}
/** @type {?} */
const HTTP_ERROR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_ERROR_CONFIG');

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
class DateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"] {
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
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
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
            return this.datePipe.transform(new Date(date.year, date.month, date.day), 'shortDate');
        }
        else {
            return date
                ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ''}-${isNumber(date.day) ? padNumber(date.day) : ''}`
                : '';
        }
    }
}
DateParserFormatter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];
/** @nocollapse */
DateParserFormatter.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function appendScript(injector) {
    /** @type {?} */
    const fn = (/**
     * @return {?}
     */
    () => {
        __webpack_require__.e(/*! import() | chart-js */ "chart-js").then(__webpack_require__.t.bind(null, /*! chart.js */ "../../node_modules/chart.js/dist/Chart.js", 7)).then((/**
         * @return {?}
         */
        () => chartJsLoaded$.next(true)));
        /** @type {?} */
        const lazyLoadService = injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LazyLoadService"]);
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
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                    useFactory: appendScript,
                },
                { provide: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"], useClass: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
                { provide: HTTP_ERROR_CONFIG, useValue: options.httpErrorConfig },
                {
                    provide: 'HTTP_ERROR_CONFIG',
                    useFactory: httpErrorConfigFactory,
                    deps: [HTTP_ERROR_CONFIG],
                },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"], useClass: DateParserFormatter },
            ],
        };
    }
}
ThemeSharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["NgxValidateCoreModule"]],
                declarations: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    HttpErrorWrapperComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                exports: [
                    BreadcrumbComponent,
                    ButtonComponent,
                    ChartComponent,
                    ConfirmationComponent,
                    LoaderBarComponent,
                    ModalComponent,
                    TableEmptyMessageComponent,
                    ToastComponent,
                    SortOrderIconComponent,
                    TableSortDirective,
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
                entryComponents: [HttpErrorWrapperComponent],
            },] }
];
/** @nocollapse */
ThemeSharedModule.ctorParameters = () => [
    { type: ErrorHandler }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/bounce.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const bounceIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', display: '{{ display }}' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
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
const collapseY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapseYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const collapseX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '0', padding: '0px' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const expandYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' }))], {
    params: { time: '500ms', easing: 'ease' },
});
/** @type {?} */
const expandX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ width: '*', padding: '*' })),
], { params: { time: '350ms', easing: 'ease' } });
/** @type {?} */
const collapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseY)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandY)),
]);
/** @type {?} */
const collapseWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin), {
        params: { time: '400ms', easing: 'linear' },
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin)),
]);
/** @type {?} */
const collapseLinearWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseLinearWithMargin', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '-100%' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin, { params: { time: '200ms', easing: 'linear' } })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin, { params: { time: '250ms', easing: 'linear' } })),
]);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/animations/slide.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const slideFromBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('slideFromBottom', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ 'margin-top': '20px', opacity: '0' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ opacity: '1', 'margin-top': '0px' })),
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
if (false) {}
/**
 * @record
 */
function HttpErrorConfig() { }
if (false) {}

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
    if (false) {}
})(Confirmation || (Confirmation = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/setting-management.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SettingTab() { }
if (false) {}
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
    if (false) {}
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
    if (false) {}
})(Statistics || (Statistics = {}));

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
    function Options() { }
    Toaster.Options = Options;
    if (false) {}
})(Toaster || (Toaster = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/toaster.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToasterService extends AbstractToaster {
    /**
     * @param {?} messageService
     */
    constructor(messageService) {
        super(messageService);
        this.messageService = messageService;
    }
    /**
     * @param {?} messages
     * @return {?}
     */
    addAll(messages) {
        this.messageService.addAll(messages.map((/**
         * @param {?} message
         * @return {?}
         */
        message => (Object.assign({ key: this.key }, message)))));
    }
}
ToasterService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ToasterService.ctorParameters = () => [
    { type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
/** @nocollapse */ ToasterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ToasterService_Factory() { return new ToasterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"])); }, token: ToasterService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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


//# sourceMappingURL=abp-ng.theme.shared.js.map


/***/ }),

/***/ "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@angular/common/locales lazy ^\.\/.*\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$ namespace object ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af.js": [
		"../../node_modules/@angular/common/locales/af.js",
		0
	],
	"./am.js": [
		"../../node_modules/@angular/common/locales/am.js",
		1
	],
	"./ar-SA.js": [
		"../../node_modules/@angular/common/locales/ar-SA.js",
		2
	],
	"./as.js": [
		"../../node_modules/@angular/common/locales/as.js",
		3
	],
	"./az-Latn.js": [
		"../../node_modules/@angular/common/locales/az-Latn.js",
		4
	],
	"./bas.js": [
		"../../node_modules/@angular/common/locales/bas.js",
		5
	],
	"./be.js": [
		"../../node_modules/@angular/common/locales/be.js",
		6
	],
	"./bg.js": [
		"../../node_modules/@angular/common/locales/bg.js",
		7
	],
	"./bn-IN.js": [
		"../../node_modules/@angular/common/locales/bn-IN.js",
		8
	],
	"./bs-Latn.js": [
		"../../node_modules/@angular/common/locales/bs-Latn.js",
		9
	],
	"./bs.js": [
		"../../node_modules/@angular/common/locales/bs.js",
		10
	],
	"./ca-ES-VALENCIA.js": [
		"../../node_modules/@angular/common/locales/ca-ES-VALENCIA.js",
		11
	],
	"./ca.js": [
		"../../node_modules/@angular/common/locales/ca.js",
		12
	],
	"./chr.js": [
		"../../node_modules/@angular/common/locales/chr.js",
		13
	],
	"./cs.js": [
		"../../node_modules/@angular/common/locales/cs.js",
		14
	],
	"./cy.js": [
		"../../node_modules/@angular/common/locales/cy.js",
		15
	],
	"./da.js": [
		"../../node_modules/@angular/common/locales/da.js",
		16
	],
	"./de.js": [
		"../../node_modules/@angular/common/locales/de.js",
		17
	],
	"./dyo.js": [
		"../../node_modules/@angular/common/locales/dyo.js",
		18
	],
	"./el.js": [
		"../../node_modules/@angular/common/locales/el.js",
		19
	],
	"./en-GB.js": [
		"../../node_modules/@angular/common/locales/en-GB.js",
		20
	],
	"./en.js": [
		"../../node_modules/@angular/common/locales/en.js",
		21
	],
	"./es-MX.js": [
		"../../node_modules/@angular/common/locales/es-MX.js",
		22
	],
	"./es-US.js": [
		"../../node_modules/@angular/common/locales/es-US.js",
		23
	],
	"./es.js": [
		"../../node_modules/@angular/common/locales/es.js",
		24
	],
	"./et.js": [
		"../../node_modules/@angular/common/locales/et.js",
		25
	],
	"./eu.js": [
		"../../node_modules/@angular/common/locales/eu.js",
		26
	],
	"./ewo.js": [
		"../../node_modules/@angular/common/locales/ewo.js",
		27
	],
	"./extra/af.js": [
		"../../node_modules/@angular/common/locales/extra/af.js",
		28
	],
	"./extra/am.js": [
		"../../node_modules/@angular/common/locales/extra/am.js",
		29
	],
	"./extra/ar-SA.js": [
		"../../node_modules/@angular/common/locales/extra/ar-SA.js",
		30
	],
	"./extra/as.js": [
		"../../node_modules/@angular/common/locales/extra/as.js",
		31
	],
	"./extra/az-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/az-Latn.js",
		32
	],
	"./extra/bas.js": [
		"../../node_modules/@angular/common/locales/extra/bas.js",
		33
	],
	"./extra/be.js": [
		"../../node_modules/@angular/common/locales/extra/be.js",
		34
	],
	"./extra/bg.js": [
		"../../node_modules/@angular/common/locales/extra/bg.js",
		35
	],
	"./extra/bn-IN.js": [
		"../../node_modules/@angular/common/locales/extra/bn-IN.js",
		36
	],
	"./extra/bs-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/bs-Latn.js",
		37
	],
	"./extra/bs.js": [
		"../../node_modules/@angular/common/locales/extra/bs.js",
		38
	],
	"./extra/ca-ES-VALENCIA.js": [
		"../../node_modules/@angular/common/locales/extra/ca-ES-VALENCIA.js",
		39
	],
	"./extra/ca.js": [
		"../../node_modules/@angular/common/locales/extra/ca.js",
		40
	],
	"./extra/chr.js": [
		"../../node_modules/@angular/common/locales/extra/chr.js",
		41
	],
	"./extra/cs.js": [
		"../../node_modules/@angular/common/locales/extra/cs.js",
		42
	],
	"./extra/cy.js": [
		"../../node_modules/@angular/common/locales/extra/cy.js",
		43
	],
	"./extra/da.js": [
		"../../node_modules/@angular/common/locales/extra/da.js",
		44
	],
	"./extra/de.js": [
		"../../node_modules/@angular/common/locales/extra/de.js",
		45
	],
	"./extra/dyo.js": [
		"../../node_modules/@angular/common/locales/extra/dyo.js",
		46
	],
	"./extra/el.js": [
		"../../node_modules/@angular/common/locales/extra/el.js",
		47
	],
	"./extra/en-GB.js": [
		"../../node_modules/@angular/common/locales/extra/en-GB.js",
		48
	],
	"./extra/en.js": [
		"../../node_modules/@angular/common/locales/extra/en.js",
		49
	],
	"./extra/es-MX.js": [
		"../../node_modules/@angular/common/locales/extra/es-MX.js",
		50
	],
	"./extra/es-US.js": [
		"../../node_modules/@angular/common/locales/extra/es-US.js",
		51
	],
	"./extra/es.js": [
		"../../node_modules/@angular/common/locales/extra/es.js",
		52
	],
	"./extra/et.js": [
		"../../node_modules/@angular/common/locales/extra/et.js",
		53
	],
	"./extra/eu.js": [
		"../../node_modules/@angular/common/locales/extra/eu.js",
		54
	],
	"./extra/ewo.js": [
		"../../node_modules/@angular/common/locales/extra/ewo.js",
		55
	],
	"./extra/fa.js": [
		"../../node_modules/@angular/common/locales/extra/fa.js",
		56
	],
	"./extra/fi.js": [
		"../../node_modules/@angular/common/locales/extra/fi.js",
		57
	],
	"./extra/fr-CA.js": [
		"../../node_modules/@angular/common/locales/extra/fr-CA.js",
		58
	],
	"./extra/fr.js": [
		"../../node_modules/@angular/common/locales/extra/fr.js",
		59
	],
	"./extra/fur.js": [
		"../../node_modules/@angular/common/locales/extra/fur.js",
		60
	],
	"./extra/ga.js": [
		"../../node_modules/@angular/common/locales/extra/ga.js",
		61
	],
	"./extra/gd.js": [
		"../../node_modules/@angular/common/locales/extra/gd.js",
		62
	],
	"./extra/gl.js": [
		"../../node_modules/@angular/common/locales/extra/gl.js",
		63
	],
	"./extra/gsw.js": [
		"../../node_modules/@angular/common/locales/extra/gsw.js",
		64
	],
	"./extra/gu.js": [
		"../../node_modules/@angular/common/locales/extra/gu.js",
		65
	],
	"./extra/ha.js": [
		"../../node_modules/@angular/common/locales/extra/ha.js",
		66
	],
	"./extra/he.js": [
		"../../node_modules/@angular/common/locales/extra/he.js",
		67
	],
	"./extra/hi.js": [
		"../../node_modules/@angular/common/locales/extra/hi.js",
		68
	],
	"./extra/hr.js": [
		"../../node_modules/@angular/common/locales/extra/hr.js",
		69
	],
	"./extra/hu.js": [
		"../../node_modules/@angular/common/locales/extra/hu.js",
		70
	],
	"./extra/hy.js": [
		"../../node_modules/@angular/common/locales/extra/hy.js",
		71
	],
	"./extra/id.js": [
		"../../node_modules/@angular/common/locales/extra/id.js",
		72
	],
	"./extra/ig.js": [
		"../../node_modules/@angular/common/locales/extra/ig.js",
		73
	],
	"./extra/is.js": [
		"../../node_modules/@angular/common/locales/extra/is.js",
		74
	],
	"./extra/it.js": [
		"../../node_modules/@angular/common/locales/extra/it.js",
		75
	],
	"./extra/ja.js": [
		"../../node_modules/@angular/common/locales/extra/ja.js",
		76
	],
	"./extra/ka.js": [
		"../../node_modules/@angular/common/locales/extra/ka.js",
		77
	],
	"./extra/kam.js": [
		"../../node_modules/@angular/common/locales/extra/kam.js",
		78
	],
	"./extra/kde.js": [
		"../../node_modules/@angular/common/locales/extra/kde.js",
		79
	],
	"./extra/kk.js": [
		"../../node_modules/@angular/common/locales/extra/kk.js",
		80
	],
	"./extra/km.js": [
		"../../node_modules/@angular/common/locales/extra/km.js",
		81
	],
	"./extra/kn.js": [
		"../../node_modules/@angular/common/locales/extra/kn.js",
		82
	],
	"./extra/ko.js": [
		"../../node_modules/@angular/common/locales/extra/ko.js",
		83
	],
	"./extra/kok.js": [
		"../../node_modules/@angular/common/locales/extra/kok.js",
		84
	],
	"./extra/lb.js": [
		"../../node_modules/@angular/common/locales/extra/lb.js",
		85
	],
	"./extra/lt.js": [
		"../../node_modules/@angular/common/locales/extra/lt.js",
		86
	],
	"./extra/lv.js": [
		"../../node_modules/@angular/common/locales/extra/lv.js",
		87
	],
	"./extra/mas.js": [
		"../../node_modules/@angular/common/locales/extra/mas.js",
		88
	],
	"./extra/mk.js": [
		"../../node_modules/@angular/common/locales/extra/mk.js",
		89
	],
	"./extra/ml.js": [
		"../../node_modules/@angular/common/locales/extra/ml.js",
		90
	],
	"./extra/mn.js": [
		"../../node_modules/@angular/common/locales/extra/mn.js",
		91
	],
	"./extra/mr.js": [
		"../../node_modules/@angular/common/locales/extra/mr.js",
		92
	],
	"./extra/ms.js": [
		"../../node_modules/@angular/common/locales/extra/ms.js",
		93
	],
	"./extra/mt.js": [
		"../../node_modules/@angular/common/locales/extra/mt.js",
		94
	],
	"./extra/nb.js": [
		"../../node_modules/@angular/common/locales/extra/nb.js",
		95
	],
	"./extra/ne.js": [
		"../../node_modules/@angular/common/locales/extra/ne.js",
		96
	],
	"./extra/nl-BE.js": [
		"../../node_modules/@angular/common/locales/extra/nl-BE.js",
		97
	],
	"./extra/nl.js": [
		"../../node_modules/@angular/common/locales/extra/nl.js",
		98
	],
	"./extra/nn.js": [
		"../../node_modules/@angular/common/locales/extra/nn.js",
		99
	],
	"./extra/or.js": [
		"../../node_modules/@angular/common/locales/extra/or.js",
		100
	],
	"./extra/pa-Arab.js": [
		"../../node_modules/@angular/common/locales/extra/pa-Arab.js",
		101
	],
	"./extra/pa-Guru.js": [
		"../../node_modules/@angular/common/locales/extra/pa-Guru.js",
		102
	],
	"./extra/pa.js": [
		"../../node_modules/@angular/common/locales/extra/pa.js",
		103
	],
	"./extra/pl.js": [
		"../../node_modules/@angular/common/locales/extra/pl.js",
		104
	],
	"./extra/pt-PT.js": [
		"../../node_modules/@angular/common/locales/extra/pt-PT.js",
		105
	],
	"./extra/pt.js": [
		"../../node_modules/@angular/common/locales/extra/pt.js",
		106
	],
	"./extra/ro.js": [
		"../../node_modules/@angular/common/locales/extra/ro.js",
		107
	],
	"./extra/ru.js": [
		"../../node_modules/@angular/common/locales/extra/ru.js",
		108
	],
	"./extra/rw.js": [
		"../../node_modules/@angular/common/locales/extra/rw.js",
		109
	],
	"./extra/ses.js": [
		"../../node_modules/@angular/common/locales/extra/ses.js",
		110
	],
	"./extra/shi-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/shi-Latn.js",
		111
	],
	"./extra/shi.js": [
		"../../node_modules/@angular/common/locales/extra/shi.js",
		112
	],
	"./extra/si.js": [
		"../../node_modules/@angular/common/locales/extra/si.js",
		113
	],
	"./extra/sk.js": [
		"../../node_modules/@angular/common/locales/extra/sk.js",
		114
	],
	"./extra/sl.js": [
		"../../node_modules/@angular/common/locales/extra/sl.js",
		115
	],
	"./extra/smn.js": [
		"../../node_modules/@angular/common/locales/extra/smn.js",
		116
	],
	"./extra/sq.js": [
		"../../node_modules/@angular/common/locales/extra/sq.js",
		117
	],
	"./extra/sr-Cyrl-BA.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Cyrl-BA.js",
		118
	],
	"./extra/sr-Cyrl.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Cyrl.js",
		119
	],
	"./extra/sr-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/sr-Latn.js",
		120
	],
	"./extra/sv.js": [
		"../../node_modules/@angular/common/locales/extra/sv.js",
		121
	],
	"./extra/sw.js": [
		"../../node_modules/@angular/common/locales/extra/sw.js",
		122
	],
	"./extra/ta.js": [
		"../../node_modules/@angular/common/locales/extra/ta.js",
		123
	],
	"./extra/te.js": [
		"../../node_modules/@angular/common/locales/extra/te.js",
		124
	],
	"./extra/tg.js": [
		"../../node_modules/@angular/common/locales/extra/tg.js",
		125
	],
	"./extra/th.js": [
		"../../node_modules/@angular/common/locales/extra/th.js",
		126
	],
	"./extra/ti.js": [
		"../../node_modules/@angular/common/locales/extra/ti.js",
		127
	],
	"./extra/tk.js": [
		"../../node_modules/@angular/common/locales/extra/tk.js",
		128
	],
	"./extra/tr.js": [
		"../../node_modules/@angular/common/locales/extra/tr.js",
		129
	],
	"./extra/tt.js": [
		"../../node_modules/@angular/common/locales/extra/tt.js",
		130
	],
	"./extra/ug.js": [
		"../../node_modules/@angular/common/locales/extra/ug.js",
		131
	],
	"./extra/uk.js": [
		"../../node_modules/@angular/common/locales/extra/uk.js",
		132
	],
	"./extra/ur.js": [
		"../../node_modules/@angular/common/locales/extra/ur.js",
		133
	],
	"./extra/uz-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/uz-Latn.js",
		134
	],
	"./extra/vai-Latn.js": [
		"../../node_modules/@angular/common/locales/extra/vai-Latn.js",
		135
	],
	"./extra/vi.js": [
		"../../node_modules/@angular/common/locales/extra/vi.js",
		136
	],
	"./extra/wo.js": [
		"../../node_modules/@angular/common/locales/extra/wo.js",
		137
	],
	"./extra/yo.js": [
		"../../node_modules/@angular/common/locales/extra/yo.js",
		138
	],
	"./extra/zh-Hans.js": [
		"../../node_modules/@angular/common/locales/extra/zh-Hans.js",
		139
	],
	"./extra/zh-Hant.js": [
		"../../node_modules/@angular/common/locales/extra/zh-Hant.js",
		140
	],
	"./extra/zu.js": [
		"../../node_modules/@angular/common/locales/extra/zu.js",
		141
	],
	"./fa.js": [
		"../../node_modules/@angular/common/locales/fa.js",
		142
	],
	"./fi.js": [
		"../../node_modules/@angular/common/locales/fi.js",
		143
	],
	"./fr-CA.js": [
		"../../node_modules/@angular/common/locales/fr-CA.js",
		144
	],
	"./fr.js": [
		"../../node_modules/@angular/common/locales/fr.js",
		145
	],
	"./fur.js": [
		"../../node_modules/@angular/common/locales/fur.js",
		146
	],
	"./ga.js": [
		"../../node_modules/@angular/common/locales/ga.js",
		147
	],
	"./gd.js": [
		"../../node_modules/@angular/common/locales/gd.js",
		148
	],
	"./gl.js": [
		"../../node_modules/@angular/common/locales/gl.js",
		149
	],
	"./gsw.js": [
		"../../node_modules/@angular/common/locales/gsw.js",
		150
	],
	"./gu.js": [
		"../../node_modules/@angular/common/locales/gu.js",
		151
	],
	"./ha.js": [
		"../../node_modules/@angular/common/locales/ha.js",
		152
	],
	"./he.js": [
		"../../node_modules/@angular/common/locales/he.js",
		153
	],
	"./hi.js": [
		"../../node_modules/@angular/common/locales/hi.js",
		154
	],
	"./hr.js": [
		"../../node_modules/@angular/common/locales/hr.js",
		155
	],
	"./hu.js": [
		"../../node_modules/@angular/common/locales/hu.js",
		156
	],
	"./hy.js": [
		"../../node_modules/@angular/common/locales/hy.js",
		157
	],
	"./id.js": [
		"../../node_modules/@angular/common/locales/id.js",
		158
	],
	"./ig.js": [
		"../../node_modules/@angular/common/locales/ig.js",
		159
	],
	"./is.js": [
		"../../node_modules/@angular/common/locales/is.js",
		160
	],
	"./it.js": [
		"../../node_modules/@angular/common/locales/it.js",
		161
	],
	"./ja.js": [
		"../../node_modules/@angular/common/locales/ja.js",
		162
	],
	"./ka.js": [
		"../../node_modules/@angular/common/locales/ka.js",
		163
	],
	"./kam.js": [
		"../../node_modules/@angular/common/locales/kam.js",
		164
	],
	"./kde.js": [
		"../../node_modules/@angular/common/locales/kde.js",
		165
	],
	"./kk.js": [
		"../../node_modules/@angular/common/locales/kk.js",
		166
	],
	"./km.js": [
		"../../node_modules/@angular/common/locales/km.js",
		167
	],
	"./kn.js": [
		"../../node_modules/@angular/common/locales/kn.js",
		168
	],
	"./ko.js": [
		"../../node_modules/@angular/common/locales/ko.js",
		169
	],
	"./kok.js": [
		"../../node_modules/@angular/common/locales/kok.js",
		170
	],
	"./lb.js": [
		"../../node_modules/@angular/common/locales/lb.js",
		171
	],
	"./lt.js": [
		"../../node_modules/@angular/common/locales/lt.js",
		172
	],
	"./lv.js": [
		"../../node_modules/@angular/common/locales/lv.js",
		173
	],
	"./mas.js": [
		"../../node_modules/@angular/common/locales/mas.js",
		174
	],
	"./mk.js": [
		"../../node_modules/@angular/common/locales/mk.js",
		175
	],
	"./ml.js": [
		"../../node_modules/@angular/common/locales/ml.js",
		176
	],
	"./mn.js": [
		"../../node_modules/@angular/common/locales/mn.js",
		177
	],
	"./mr.js": [
		"../../node_modules/@angular/common/locales/mr.js",
		178
	],
	"./ms.js": [
		"../../node_modules/@angular/common/locales/ms.js",
		179
	],
	"./mt.js": [
		"../../node_modules/@angular/common/locales/mt.js",
		180
	],
	"./nb.js": [
		"../../node_modules/@angular/common/locales/nb.js",
		181
	],
	"./ne.js": [
		"../../node_modules/@angular/common/locales/ne.js",
		182
	],
	"./nl-BE.js": [
		"../../node_modules/@angular/common/locales/nl-BE.js",
		183
	],
	"./nl.js": [
		"../../node_modules/@angular/common/locales/nl.js",
		184
	],
	"./nn.js": [
		"../../node_modules/@angular/common/locales/nn.js",
		185
	],
	"./or.js": [
		"../../node_modules/@angular/common/locales/or.js",
		186
	],
	"./pa-Arab.js": [
		"../../node_modules/@angular/common/locales/pa-Arab.js",
		187
	],
	"./pa-Guru.js": [
		"../../node_modules/@angular/common/locales/pa-Guru.js",
		188
	],
	"./pa.js": [
		"../../node_modules/@angular/common/locales/pa.js",
		189
	],
	"./pl.js": [
		"../../node_modules/@angular/common/locales/pl.js",
		190
	],
	"./pt-PT.js": [
		"../../node_modules/@angular/common/locales/pt-PT.js",
		191
	],
	"./pt.js": [
		"../../node_modules/@angular/common/locales/pt.js",
		192
	],
	"./ro.js": [
		"../../node_modules/@angular/common/locales/ro.js",
		193
	],
	"./ru.js": [
		"../../node_modules/@angular/common/locales/ru.js",
		194
	],
	"./rw.js": [
		"../../node_modules/@angular/common/locales/rw.js",
		195
	],
	"./ses.js": [
		"../../node_modules/@angular/common/locales/ses.js",
		196
	],
	"./shi-Latn.js": [
		"../../node_modules/@angular/common/locales/shi-Latn.js",
		197
	],
	"./shi.js": [
		"../../node_modules/@angular/common/locales/shi.js",
		198
	],
	"./si.js": [
		"../../node_modules/@angular/common/locales/si.js",
		199
	],
	"./sk.js": [
		"../../node_modules/@angular/common/locales/sk.js",
		200
	],
	"./sl.js": [
		"../../node_modules/@angular/common/locales/sl.js",
		201
	],
	"./smn.js": [
		"../../node_modules/@angular/common/locales/smn.js",
		202
	],
	"./sq.js": [
		"../../node_modules/@angular/common/locales/sq.js",
		203
	],
	"./sr-Cyrl-BA.js": [
		"../../node_modules/@angular/common/locales/sr-Cyrl-BA.js",
		204
	],
	"./sr-Cyrl.js": [
		"../../node_modules/@angular/common/locales/sr-Cyrl.js",
		205
	],
	"./sr-Latn.js": [
		"../../node_modules/@angular/common/locales/sr-Latn.js",
		206
	],
	"./sv.js": [
		"../../node_modules/@angular/common/locales/sv.js",
		207
	],
	"./sw.js": [
		"../../node_modules/@angular/common/locales/sw.js",
		208
	],
	"./ta.js": [
		"../../node_modules/@angular/common/locales/ta.js",
		209
	],
	"./te.js": [
		"../../node_modules/@angular/common/locales/te.js",
		210
	],
	"./tg.js": [
		"../../node_modules/@angular/common/locales/tg.js",
		211
	],
	"./th.js": [
		"../../node_modules/@angular/common/locales/th.js",
		212
	],
	"./ti.js": [
		"../../node_modules/@angular/common/locales/ti.js",
		213
	],
	"./tk.js": [
		"../../node_modules/@angular/common/locales/tk.js",
		214
	],
	"./tr.js": [
		"../../node_modules/@angular/common/locales/tr.js",
		215
	],
	"./tt.js": [
		"../../node_modules/@angular/common/locales/tt.js",
		216
	],
	"./ug.js": [
		"../../node_modules/@angular/common/locales/ug.js",
		217
	],
	"./uk.js": [
		"../../node_modules/@angular/common/locales/uk.js",
		218
	],
	"./ur.js": [
		"../../node_modules/@angular/common/locales/ur.js",
		219
	],
	"./uz-Latn.js": [
		"../../node_modules/@angular/common/locales/uz-Latn.js",
		220
	],
	"./vai-Latn.js": [
		"../../node_modules/@angular/common/locales/vai-Latn.js",
		221
	],
	"./vi.js": [
		"../../node_modules/@angular/common/locales/vi.js",
		222
	],
	"./wo.js": [
		"../../node_modules/@angular/common/locales/wo.js",
		223
	],
	"./yo.js": [
		"../../node_modules/@angular/common/locales/yo.js",
		224
	],
	"./zh-Hans.js": [
		"../../node_modules/@angular/common/locales/zh-Hans.js",
		225
	],
	"./zh-Hant.js": [
		"../../node_modules/@angular/common/locales/zh-Hant.js",
		226
	],
	"./zu.js": [
		"../../node_modules/@angular/common/locales/zu.js",
		227
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.html ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"navbar navbar-expand-md navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container \">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <ng-container\r\n            *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n            [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n          >\r\n          </ng-container>\r\n\r\n          <ng-template #defaultLink let-route>\r\n            <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n              <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n                ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownLink let-route>\r\n            <li\r\n              #navbarRootDropdown\r\n              *abpPermission=\"route.requiredPolicy\"\r\n              [abpVisibility]=\"routeContainer\"\r\n              class=\"nav-item dropdown\"\r\n              display=\"static\"\r\n              (click)=\"\r\n                navbarRootDropdown.expand ? (navbarRootDropdown.expand = false) : (navbarRootDropdown.expand = true)\r\n              \"\r\n            >\r\n              <a\r\n                class=\"nav-link dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}\r\n              </a>\r\n              <div\r\n                #routeContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && navbarRootDropdown.expand\"\r\n              >\r\n                <ng-template\r\n                  #forTemplate\r\n                  ngFor\r\n                  [ngForOf]=\"route.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #childWrapper let-child>\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n            ></ng-template>\r\n          </ng-template>\r\n\r\n          <ng-template #defaultChild let-child>\r\n            <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n                <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                {{ child.name | abpLocalization }}</a\r\n              >\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownChild let-child>\r\n            <div\r\n              [abpVisibility]=\"childrenContainer\"\r\n              class=\"dropdown-submenu\"\r\n              ngbDropdown\r\n              #dropdownSubmenu=\"ngbDropdown\"\r\n              [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n              placement=\"right-top\"\r\n              [autoClose]=\"true\"\r\n              *abpPermission=\"child.requiredPolicy\"\r\n              (openChange)=\"openChange($event, childrenContainer)\"\r\n            >\r\n              <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n                <a\r\n                  abpEllipsis=\"210px\"\r\n                  [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n                  role=\"button\"\r\n                  class=\"btn d-block text-left dropdown-toggle\"\r\n                >\r\n                  <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                  {{ child.name | abpLocalization }}\r\n                </a>\r\n              </div>\r\n              <div\r\n                #childrenContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n              >\r\n                <ng-template\r\n                  ngFor\r\n                  [ngForOf]=\"child.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav\">\r\n          <ng-container\r\n            *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n            [ngTemplateOutlet]=\"element\"\r\n          ></ng-container>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div [@slideFromBottom]=\"outlet && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\" class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n\r\n<ng-template #language>\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li *ngIf=\"(currentUser$ | async)?.isAuthenticated\" class=\"nav-item\">\r\n    <div ngbDropdown class=\"dropdown\" #currentUserDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"><i class=\"fa fa-cog mr-1\"></i>{{\r\n          'AbpAccount::ManageYourProfile' | abpLocalization\r\n        }}</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"fa fa-power-off mr-1\"></i>{{\r\n          'AbpUi::Logout' | abpLocalization\r\n        }}</a>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n");

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!***************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../../packages/account-config/src/lib/account-config.module.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/account-config.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function() { return accountOptionsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return ACCOUNT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function() { return AccountConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/account-config.service */ "../../packages/account-config/src/lib/services/account-config.service.ts");
var AccountConfigModule_1;





function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
const ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ACCOUNT_OPTIONS');
let AccountConfigModule = AccountConfigModule_1 = class AccountConfigModule {
    static forRoot(options = {}) {
        return {
            ngModule: AccountConfigModule_1,
            providers: [
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
};
AccountConfigModule = AccountConfigModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"]],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"], multi: true, deps: [_services_account_config_service__WEBPACK_IMPORTED_MODULE_4__["AccountConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"] }],
    })
], AccountConfigModule);



/***/ }),

/***/ "../../packages/account-config/src/lib/services/account-config.service.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/services/account-config.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AccountConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountConfigService", function() { return AccountConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




let AccountConfigService = class AccountConfigService {
    constructor(router, restService) {
        this.router = router;
        this.restService = restService;
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])({
            name: 'AbpAccount::Menu:Account',
            path: 'account',
            invisible: true,
            layout: "application" /* application */,
            children: [
                { path: 'login', name: 'AbpAccount::Login', order: 1 },
                { path: 'register', name: 'AbpAccount::Register', order: 2 },
                { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3 },
            ],
        });
    }
};
AccountConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
];
AccountConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
], AccountConfigService);



/***/ }),

/***/ "../../packages/account-config/src/public-api.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/public-api.ts ***!
  \*************************************************************************************************/
/*! exports provided: AccountConfigService, accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/account-config.service */ "../../packages/account-config/src/lib/services/account-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountConfigService", function() { return _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__["AccountConfigService"]; });

/* harmony import */ var _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/account-config.module */ "../../packages/account-config/src/lib/account-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["accountOptionsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function() { return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["AccountConfigModule"]; });






/***/ }),

/***/ "../../packages/core/src/lib/abstracts/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/abstracts/index.ts ***!
  \************************************************************************************************/
/*! exports provided: AbstractNgModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-model.component */ "../../packages/core/src/lib/abstracts/ng-model.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function() { return _ng_model_component__WEBPACK_IMPORTED_MODULE_1__["AbstractNgModelComponent"]; });





/***/ }),

/***/ "../../packages/core/src/lib/abstracts/ng-model.component.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/abstracts/ng-model.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AbstractNgModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function() { return AbstractNgModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AbstractNgModelComponent = class AbstractNgModelComponent {
    constructor(injector) {
        this.injector = injector;
        this.cdRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]);
    }
    set value(value) {
        this._value = value;
        this.notifyValueChange();
    }
    get value() {
        return this._value;
    }
    notifyValueChange() {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }
    writeValue(value) {
        this._value = value;
        setTimeout(() => this.cdRef.detectChanges(), 0);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
};
AbstractNgModelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AbstractNgModelComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], AbstractNgModelComponent.prototype, "value", null);
AbstractNgModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'abp-abstract-ng-model', template: '' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], AbstractNgModelComponent);



/***/ }),

/***/ "../../packages/core/src/lib/actions/config.actions.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/config.actions.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PatchRouteByName, GetAppConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function() { return PatchRouteByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function() { return GetAppConfiguration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class PatchRouteByName {
    constructor(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
}
PatchRouteByName.type = '[Config] Patch Route By Name';
class GetAppConfiguration {
}
GetAppConfiguration.type = '[Config] Get App Configuration';


/***/ }),

/***/ "../../packages/core/src/lib/actions/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: PatchRouteByName, GetAppConfiguration, StartLoader, StopLoader, GetProfile, UpdateProfile, ChangePassword, RestOccurError, SetLanguage, SetTenant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.actions */ "../../packages/core/src/lib/actions/config.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function() { return _config_actions__WEBPACK_IMPORTED_MODULE_1__["PatchRouteByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function() { return _config_actions__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]; });

/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.actions */ "../../packages/core/src/lib/actions/loader.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartLoader", function() { return _loader_actions__WEBPACK_IMPORTED_MODULE_2__["StartLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopLoader", function() { return _loader_actions__WEBPACK_IMPORTED_MODULE_2__["StopLoader"]; });

/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.actions */ "../../packages/core/src/lib/actions/profile.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"]; });

/* harmony import */ var _rest_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest.actions */ "../../packages/core/src/lib/actions/rest.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestOccurError", function() { return _rest_actions__WEBPACK_IMPORTED_MODULE_4__["RestOccurError"]; });

/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.actions */ "../../packages/core/src/lib/actions/session.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLanguage", function() { return _session_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTenant", function() { return _session_actions__WEBPACK_IMPORTED_MODULE_5__["SetTenant"]; });









/***/ }),

/***/ "../../packages/core/src/lib/actions/loader.actions.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/loader.actions.ts ***!
  \*******************************************************************************************************/
/*! exports provided: StartLoader, StopLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartLoader", function() { return StartLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopLoader", function() { return StopLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class StartLoader {
    constructor(payload) {
        this.payload = payload;
    }
}
StartLoader.type = '[Loader] Start';
class StopLoader {
    constructor(payload) {
        this.payload = payload;
    }
}
StopLoader.type = '[Loader] Stop';


/***/ }),

/***/ "../../packages/core/src/lib/actions/profile.actions.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/profile.actions.ts ***!
  \********************************************************************************************************/
/*! exports provided: GetProfile, UpdateProfile, ChangePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class GetProfile {
}
GetProfile.type = '[Profile] Get';
class UpdateProfile {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateProfile.type = '[Profile] Update';
class ChangePassword {
    constructor(payload) {
        this.payload = payload;
    }
}
ChangePassword.type = '[Profile] Change Password';


/***/ }),

/***/ "../../packages/core/src/lib/actions/rest.actions.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/rest.actions.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RestOccurError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestOccurError", function() { return RestOccurError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class RestOccurError {
    constructor(payload) {
        this.payload = payload;
    }
}
RestOccurError.type = '[Rest] Error';


/***/ }),

/***/ "../../packages/core/src/lib/actions/session.actions.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/session.actions.ts ***!
  \********************************************************************************************************/
/*! exports provided: SetLanguage, SetTenant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLanguage", function() { return SetLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTenant", function() { return SetTenant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class SetLanguage {
    constructor(payload) {
        this.payload = payload;
    }
}
SetLanguage.type = '[Session] Set Language';
class SetTenant {
    constructor(payload) {
        this.payload = payload;
    }
}
SetTenant.type = '[Session] Set Tenant';


/***/ }),

/***/ "../../packages/core/src/lib/components/dynamic-layout.component.ts":
/*!********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/dynamic-layout.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DynamicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return DynamicLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/config.state */ "../../packages/core/src/lib/states/config.state.ts");
/* harmony import */ var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/rxjs-utils */ "../../packages/core/src/lib/utils/rxjs-utils.ts");








let DynamicLayoutComponent = class DynamicLayoutComponent {
    constructor(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        const { requirements: { layouts }, routes } = this.store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getAll);
        if ((this.route.snapshot.data || {}).layout) {
            this.layout = layouts
                .filter(l => !!l)
                .find((l) => Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(() => l.type.toLowerCase().indexOf(this.route.snapshot.data.layout), -1) > -1);
        }
        this.router.events.pipe(Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_7__["takeUntilDestroy"])(this)).subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                const { segments } = this.router.parseUrl(event.url).root.children.primary;
                const layout = (this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                this.layout = layouts
                    .filter(l => !!l)
                    .find((l) => Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(() => l.type.toLowerCase().indexOf(layout), -1) > -1);
            }
        });
    }
    ngOnDestroy() { }
};
DynamicLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getOne('requirements')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], DynamicLayoutComponent.prototype, "requirements$", void 0);
DynamicLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-dynamic-layout',
        template: `
    <ng-container *ngTemplateOutlet="layout ? componentOutlet : routerOutlet"></ng-container>
    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>
    <ng-template #componentOutlet><ng-container *ngComponentOutlet="layout"></ng-container></ng-template>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], DynamicLayoutComponent);

function findLayout(segments, routes) {
    let layout = "empty" /* empty */;
    const route = routes
        .reduce((acc, val) => (val.wrapper ? [...acc, ...val.children] : [...acc, val]), [])
        .find(r => r.path === segments[0].path);
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            const child = route.children.find(c => c.path === segments[1].path);
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}


/***/ }),

/***/ "../../packages/core/src/lib/components/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: DynamicLayoutComponent, RouterOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-layout.component */ "../../packages/core/src/lib/components/dynamic-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return _dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"]; });

/* harmony import */ var _router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router-outlet.component */ "../../packages/core/src/lib/components/router-outlet.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function() { return _router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["RouterOutletComponent"]; });






/***/ }),

/***/ "../../packages/core/src/lib/components/router-outlet.component.ts":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/router-outlet.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RouterOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function() { return RouterOutletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let RouterOutletComponent = class RouterOutletComponent {
};
RouterOutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-router-outlet',
        template: `
    <router-outlet></router-outlet>
  `,
    })
], RouterOutletComponent);



/***/ }),

/***/ "../../packages/core/src/lib/constants/different-locales.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/constants/different-locales.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// Different locales from .NET
// Key is .NET locale, value is Angular locale

/* harmony default export */ __webpack_exports__["default"] = ({
    'ar-sa': 'ar-SA',
    'ca-ES-valencia': 'ca-ES-VALENCIA',
    'de-de': 'de',
    'es-ES': 'es',
    'en-US': 'en',
    'fil-Latn': 'en',
    'ku-Arab': 'en',
    'ky-Cyrl': 'en',
    'mi-Latn': 'en',
    'prs-Arab': 'en',
    'qut-Latn': 'en',
    nso: 'en',
    quz: 'en',
    'fr-FR': 'fr',
    'gd-Latn': 'gd',
    'ha-Latn': 'ha',
    'ig-Latn': 'ig',
    'it-it': 'it',
    'mn-Cyrl': 'mn',
    'pt-BR': 'pt',
    'sd-Arab': 'pa-Arab',
    'sr-Cyrl-RS': 'sr-Cyrl',
    'sr-Latn-RS': 'sr-Latn',
    'tg-Cyrl': 'tg',
    'tk-Latn': 'tk',
    'tt-Cyrl': 'tt',
    'ug-Arab': 'ug',
    'yo-Latn': 'yo',
});


/***/ }),

/***/ "../../packages/core/src/lib/core.module.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/core.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/storage-plugin */ "../../node_modules/@ngxs/storage-plugin/fesm2015/ngxs-storage-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./abstracts/ng-model.component */ "../../packages/core/src/lib/abstracts/ng-model.component.ts");
/* harmony import */ var _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dynamic-layout.component */ "../../packages/core/src/lib/components/dynamic-layout.component.ts");
/* harmony import */ var _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/router-outlet.component */ "../../packages/core/src/lib/components/router-outlet.component.ts");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/autofocus.directive */ "../../packages/core/src/lib/directives/autofocus.directive.ts");
/* harmony import */ var _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/debounce.directive */ "../../packages/core/src/lib/directives/debounce.directive.ts");
/* harmony import */ var _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/ellipsis.directive */ "../../packages/core/src/lib/directives/ellipsis.directive.ts");
/* harmony import */ var _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/for.directive */ "../../packages/core/src/lib/directives/for.directive.ts");
/* harmony import */ var _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/form-submit.directive */ "../../packages/core/src/lib/directives/form-submit.directive.ts");
/* harmony import */ var _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/permission.directive */ "../../packages/core/src/lib/directives/permission.directive.ts");
/* harmony import */ var _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/stop-propagation.directive */ "../../packages/core/src/lib/directives/stop-propagation.directive.ts");
/* harmony import */ var _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/visibility.directive */ "../../packages/core/src/lib/directives/visibility.directive.ts");
/* harmony import */ var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./interceptors/api.interceptor */ "../../packages/core/src/lib/interceptors/api.interceptor.ts");
/* harmony import */ var _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/localization.pipe */ "../../packages/core/src/lib/pipes/localization.pipe.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/sort.pipe */ "../../packages/core/src/lib/pipes/sort.pipe.ts");
/* harmony import */ var _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plugins/config.plugin */ "../../packages/core/src/lib/plugins/config.plugin.ts");
/* harmony import */ var _providers_locale_provider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./providers/locale.provider */ "../../packages/core/src/lib/providers/locale.provider.ts");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./states/config.state */ "../../packages/core/src/lib/states/config.state.ts");
/* harmony import */ var _states_profile_state__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./states/profile.state */ "../../packages/core/src/lib/states/profile.state.ts");
/* harmony import */ var _states_session_state__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./states/session.state */ "../../packages/core/src/lib/states/session.state.ts");
/* harmony import */ var _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/initial-utils */ "../../packages/core/src/lib/utils/initial-utils.ts");
/* harmony import */ var _utils_date_extensions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/date-extensions */ "../../packages/core/src/lib/utils/date-extensions.ts");
var CoreModule_1;































let CoreModule = CoreModule_1 = class CoreModule {
    static forRoot(options = {}) {
        return {
            ngModule: CoreModule_1,
            providers: [
                _providers_locale_provider__WEBPACK_IMPORTED_MODULE_25__["LocaleProvider"],
                {
                    provide: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NGXS_PLUGINS"],
                    useClass: _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__["ConfigPlugin"],
                    multi: true,
                },
                {
                    provide: _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__["NGXS_CONFIG_PLUGIN_OPTIONS"],
                    useValue: options,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_21__["ApiInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                    useFactory: _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__["getInitialData"],
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                    multi: true,
                    deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                    useFactory: _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__["localeInitializer"],
                },
            ],
        };
    }
};
CoreModule = CoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forFeature([_states_profile_state__WEBPACK_IMPORTED_MODULE_27__["ProfileState"], _states_session_state__WEBPACK_IMPORTED_MODULE_28__["SessionState"], _states_config_state__WEBPACK_IMPORTED_MODULE_26__["ConfigState"]]),
            _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsRouterPluginModule"].forRoot(),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsStoragePluginModule"].forRoot({ key: ['SessionState'] }),
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ],
        declarations: [
            _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"],
            _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"],
            _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"],
            _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__["EllipsisDirective"],
            _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__["ForDirective"],
            _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__["FormSubmitDirective"],
            _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"],
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__["SortPipe"],
            _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__["PermissionDirective"],
            _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__["VisibilityDirective"],
            _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__["InputEventDebounceDirective"],
            _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"],
            _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__["AbstractNgModelComponent"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"],
            _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"],
            _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"],
            _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__["EllipsisDirective"],
            _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__["ForDirective"],
            _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__["FormSubmitDirective"],
            _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"],
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__["SortPipe"],
            _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__["PermissionDirective"],
            _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__["VisibilityDirective"],
            _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__["InputEventDebounceDirective"],
            _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"],
            _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"],
            _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__["AbstractNgModelComponent"],
        ],
        providers: [_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"]],
        entryComponents: [_components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"], _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"]],
    })
], CoreModule);



/***/ }),

/***/ "../../packages/core/src/lib/directives/autofocus.directive.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/autofocus.directive.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AutofocusDirective = class AutofocusDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => this.elRef.nativeElement.focus(), this.delay);
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('autofocus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AutofocusDirective.prototype, "delay", void 0);
AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[autofocus]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AutofocusDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/debounce.directive.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/debounce.directive.ts ***!
  \**************************************************************************************************************/
/*! exports provided: InputEventDebounceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputEventDebounceDirective", function() { return InputEventDebounceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let InputEventDebounceDirective = class InputEventDebounceDirective {
    constructor(el) {
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.el.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.debounce), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this))
            .subscribe((event) => {
            this.debounceEvent.emit(event);
        });
    }
    ngOnDestroy() { }
};
InputEventDebounceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputEventDebounceDirective.prototype, "debounce", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('input.debounce'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputEventDebounceDirective.prototype, "debounceEvent", void 0);
InputEventDebounceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[input.debounce]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], InputEventDebounceDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/ellipsis.directive.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/ellipsis.directive.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EllipsisDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function() { return EllipsisDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let EllipsisDirective = class EllipsisDirective {
    constructor(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    get inlineClass() {
        return this.enabled && this.width;
    }
    get class() {
        return this.enabled && !this.width;
    }
    get maxWidth() {
        return this.enabled && this.width ? this.width || '170px' : undefined;
    }
    ngAfterViewInit() {
        this.title = this.title || this.elRef.nativeElement.innerText;
        this.cdRef.detectChanges();
    }
};
EllipsisDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpEllipsis'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EllipsisDirective.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('title'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EllipsisDirective.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpEllipsisEnabled'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EllipsisDirective.prototype, "enabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.abp-ellipsis-inline'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EllipsisDirective.prototype, "inlineClass", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.abp-ellipsis'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EllipsisDirective.prototype, "class", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.max-width'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EllipsisDirective.prototype, "maxWidth", null);
EllipsisDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[abpEllipsis]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], EllipsisDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/for.directive.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/for.directive.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForDirective", function() { return ForDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_3__);




class AbpForContext {
    constructor($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
}
class RecordView {
    constructor(record, view) {
        this.record = record;
        this.view = view;
    }
}
let ForDirective = class ForDirective {
    constructor(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    get compareFn() {
        return this.compareBy || just_compare__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
    get trackByFn() {
        return this.trackBy || ((index, item) => item.id || index);
    }
    iterateOverAppliedOperations(changes) {
        const rw = [];
        changes.forEachOperation((record, previousIndex, currentIndex) => {
            if (record.previousIndex == null) {
                const view = this.vcRef.createEmbeddedView(this.tempRef, new AbpForContext(null, -1, -1, this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                this.vcRef.remove(previousIndex);
            }
            else {
                const view = this.vcRef.get(previousIndex);
                this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, view));
            }
        });
        for (let i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    }
    iterateOverAttachedViews(changes) {
        for (let i = 0, l = this.vcRef.length; i < l; i++) {
            const viewRef = this.vcRef.get(i);
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((record) => {
            const viewRef = this.vcRef.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
        });
    }
    projectItems(items) {
        if (!items.length && this.emptyRef) {
            this.vcRef.clear();
            // tslint:disable-next-line: no-unused-expression
            this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
            this.isShowEmptyRef = true;
            this.differ = null;
            return;
        }
        if (this.emptyRef && this.isShowEmptyRef) {
            this.vcRef.clear();
            this.isShowEmptyRef = false;
        }
        if (!this.differ && items) {
            this.differ = this.differs.find(items).create(this.trackByFn);
        }
        if (this.differ) {
            const changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    }
    sortItems(items) {
        if (this.orderBy) {
            items.sort((a, b) => (a[this.orderBy] > b[this.orderBy] ? 1 : a[this.orderBy] < b[this.orderBy] ? -1 : 0));
        }
        else {
            items.sort();
        }
    }
    ngOnChanges() {
        let items = just_clone__WEBPACK_IMPORTED_MODULE_3___default()(this.items);
        if (!Array.isArray(items))
            return;
        const compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter(item => compareFn(item[this.filterBy], this.filterVal));
        }
        switch (this.orderDir) {
            case 'ASC':
                this.sortItems(items);
                this.projectItems(items);
                break;
            case 'DESC':
                this.sortItems(items);
                items.reverse();
                this.projectItems(items);
                break;
            default:
                this.projectItems(items);
        }
    }
};
ForDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOf'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ForDirective.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOrderBy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ForDirective.prototype, "orderBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOrderDir'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ForDirective.prototype, "orderDir", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForFilterBy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ForDirective.prototype, "filterBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForFilterVal'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForDirective.prototype, "filterVal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForTrackBy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForDirective.prototype, "trackBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForCompareBy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], ForDirective.prototype, "compareBy", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForEmptyRef'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ForDirective.prototype, "emptyRef", void 0);
ForDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[abpFor]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]])
], ForDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/form-submit.directive.ts":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/form-submit.directive.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FormSubmitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return FormSubmitDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "../../packages/core/src/lib/utils/index.ts");






let FormSubmitDirective = class FormSubmitDirective {
    constructor(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.debounce = 200;
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.executedNgSubmit = false;
    }
    ngOnInit() {
        this.formGroupDirective.ngSubmit.pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"])(this)).subscribe(() => {
            this.markAsDirty();
            this.executedNgSubmit = true;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.host.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.debounce), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((key) => key && key.key === 'Enter'), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"])(this))
            .subscribe(() => {
            if (!this.executedNgSubmit) {
                this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            this.executedNgSubmit = false;
        });
    }
    ngOnDestroy() { }
    markAsDirty() {
        const { form } = this.formGroupDirective;
        setDirty(form.controls);
        form.markAsDirty();
        this.cdRef.detectChanges();
    }
};
FormSubmitDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormSubmitDirective.prototype, "debounce", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormSubmitDirective.prototype, "notValidateOnSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormSubmitDirective.prototype, "ngSubmit", void 0);
FormSubmitDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: 'form[ngSubmit][formGroup]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], FormSubmitDirective);

function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach(group => {
            setDirty(group.controls);
        });
        return;
    }
    Object.keys(controls).forEach(key => {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    });
}


/***/ }),

/***/ "../../packages/core/src/lib/directives/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: AutofocusDirective, EllipsisDirective, ForDirective, FormSubmitDirective, PermissionDirective, VisibilityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autofocus.directive */ "../../packages/core/src/lib/directives/autofocus.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return _autofocus_directive__WEBPACK_IMPORTED_MODULE_1__["AutofocusDirective"]; });

/* harmony import */ var _ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsis.directive */ "../../packages/core/src/lib/directives/ellipsis.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function() { return _ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__["EllipsisDirective"]; });

/* harmony import */ var _for_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./for.directive */ "../../packages/core/src/lib/directives/for.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForDirective", function() { return _for_directive__WEBPACK_IMPORTED_MODULE_3__["ForDirective"]; });

/* harmony import */ var _form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-submit.directive */ "../../packages/core/src/lib/directives/form-submit.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return _form_submit_directive__WEBPACK_IMPORTED_MODULE_4__["FormSubmitDirective"]; });

/* harmony import */ var _permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permission.directive */ "../../packages/core/src/lib/directives/permission.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return _permission_directive__WEBPACK_IMPORTED_MODULE_5__["PermissionDirective"]; });

/* harmony import */ var _visibility_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility.directive */ "../../packages/core/src/lib/directives/visibility.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return _visibility_directive__WEBPACK_IMPORTED_MODULE_6__["VisibilityDirective"]; });










/***/ }),

/***/ "../../packages/core/src/lib/directives/permission.directive.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/permission.directive.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return PermissionDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "../../packages/core/src/lib/utils/index.ts");





let PermissionDirective = class PermissionDirective {
    constructor(elRef, renderer, store, templateRef, vcRef) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.templateRef = templateRef;
        this.vcRef = vcRef;
    }
    check() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.store
            .select(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getGrantedPolicy(this.condition))
            .pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["takeUntilDestroy"])(this))
            .subscribe(isGranted => {
            if (this.templateRef && isGranted) {
                this.vcRef.clear();
                this.vcRef.createEmbeddedView(this.templateRef);
            }
            else if (this.templateRef && !isGranted) {
                this.vcRef.clear();
            }
            else if (!isGranted && !this.templateRef) {
                this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
            }
        });
    }
    ngOnInit() {
        if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() { }
    ngOnChanges({ condition }) {
        if ((condition || { currentValue: null }).currentValue) {
            this.check();
        }
    }
};
PermissionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpPermission'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PermissionDirective.prototype, "condition", void 0);
PermissionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[abpPermission]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], PermissionDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/stop-propagation.directive.ts":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/stop-propagation.directive.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: StopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPropagationDirective", function() { return StopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/rxjs-utils */ "../../packages/core/src/lib/utils/rxjs-utils.ts");




let StopPropagationDirective = class StopPropagationDirective {
    constructor(el) {
        this.el = el;
        this.stopPropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.el.nativeElement, 'click')
            .pipe(Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_3__["takeUntilDestroy"])(this))
            .subscribe((event) => {
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        });
    }
    ngOnDestroy() { }
};
StopPropagationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('click.stop'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StopPropagationDirective.prototype, "stopPropEvent", void 0);
StopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[click.stop]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], StopPropagationDirective);



/***/ }),

/***/ "../../packages/core/src/lib/directives/visibility.directive.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/visibility.directive.ts ***!
  \****************************************************************************************************************/
/*! exports provided: VisibilityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");




let VisibilityDirective = class VisibilityDirective {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngAfterViewInit() {
        if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
        }
        let observer;
        observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (!mutation.target)
                    return;
                const htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Array.from(mutation.target.childNodes).filter(node => node instanceof HTMLElement), []);
                if (!htmlNodes.length) {
                    this.removeFromDOM();
                }
            });
        });
        observer.observe(this.focusedElement, {
            childList: true,
        });
        setTimeout(() => {
            const htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Array.from(this.focusedElement.childNodes).filter(node => node instanceof HTMLElement), []);
            if (!htmlNodes.length)
                this.removeFromDOM();
        }, 0);
        this.completed$.subscribe(() => observer.disconnect());
    }
    disconnect() {
        this.completed$.next();
        this.completed$.complete();
    }
    removeFromDOM() {
        if (!this.elRef.nativeElement)
            return;
        this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
        this.disconnect();
    }
};
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpVisibility'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)
], VisibilityDirective.prototype, "focusedElement", void 0);
VisibilityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[abpVisibility]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], VisibilityDirective);



/***/ }),

/***/ "../../packages/core/src/lib/enums/common.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/enums/common.ts ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");



/***/ }),

/***/ "../../packages/core/src/lib/enums/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/enums/index.ts ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../packages/core/src/lib/enums/common.ts");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "../../packages/core/src/lib/guards/auth.guard.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/auth.guard.ts ***!
  \**************************************************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");




let AuthGuard = class AuthGuard {
    constructor(oauthService, router) {
        this.oauthService = oauthService;
        this.router = router;
    }
    canActivate(_, state) {
        const hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        return this.router.createUrlTree(['/account/login'], { state: { redirectUrl: state.url } });
    }
};
AuthGuard.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "../../packages/core/src/lib/guards/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthGuard, PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "../../packages/core/src/lib/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _permission_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.guard */ "../../packages/core/src/lib/guards/permission.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return _permission_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionGuard"]; });






/***/ }),

/***/ "../../packages/core/src/lib/guards/permission.guard.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/permission.guard.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermissionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return PermissionGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "../../packages/core/src/lib/actions/index.ts");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");







let PermissionGuard = class PermissionGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        let resource = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => route.data.routes.requiredPolicy) || Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => route.data.requiredPolicy);
        if (!resource) {
            resource = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => route.routeConfig.children.find(child => state.url.indexOf(child.path) > -1).data.requiredPolicy);
        }
        return this.store.select(_states__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getGrantedPolicy(resource)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(access => {
            if (!access) {
                this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_5__["RestOccurError"]({ status: 403 }));
            }
        }));
    }
};
PermissionGuard.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
PermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], PermissionGuard);



/***/ }),

/***/ "../../packages/core/src/lib/interceptors/api.interceptor.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/interceptors/api.interceptor.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");
/* harmony import */ var _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/loader.actions */ "../../packages/core/src/lib/actions/loader.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







let ApiInterceptor = class ApiInterceptor {
    constructor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    intercept(request, next) {
        this.store.dispatch(new _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__["StartLoader"](request));
        const headers = {};
        const token = this.oAuthService.getAccessToken();
        if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const lang = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_4__["SessionState"].getLanguage);
        if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
        }
        const tenant = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_4__["SessionState"].getTenant);
        if (!request.headers.has('__tenant') && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return next
            .handle(request.clone({
            setHeaders: headers,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => this.store.dispatch(new _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__["StopLoader"](request))));
    }
};
ApiInterceptor.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], ApiInterceptor);



/***/ }),

/***/ "../../packages/core/src/lib/interceptors/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/interceptors/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _api_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.interceptor */ "../../packages/core/src/lib/interceptors/api.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return _api_interceptor__WEBPACK_IMPORTED_MODULE_1__["ApiInterceptor"]; });





/***/ }),

/***/ "../../packages/core/src/lib/models/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/models/index.ts ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rest */ "../../packages/core/src/lib/models/rest.ts");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "../../packages/core/src/lib/models/rest.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/models/rest.ts ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");



/***/ }),

/***/ "../../packages/core/src/lib/pipes/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/index.ts ***!
  \********************************************************************************************/
/*! exports provided: LocalizationPipe, SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _localization_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization.pipe */ "../../packages/core/src/lib/pipes/localization.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function() { return _localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"]; });

/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.pipe */ "../../packages/core/src/lib/pipes/sort.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return _sort_pipe__WEBPACK_IMPORTED_MODULE_2__["SortPipe"]; });






/***/ }),

/***/ "../../packages/core/src/lib/pipes/localization.pipe.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/localization.pipe.ts ***!
  \********************************************************************************************************/
/*! exports provided: LocalizationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function() { return LocalizationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");




let LocalizationPipe = class LocalizationPipe {
    constructor(store) {
        this.store = store;
    }
    transform(value = '', ...interpolateParams) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getLocalization(value, ...interpolateParams.reduce((acc, val) => (Array.isArray(val) ? [...acc, ...val] : [...acc, val]), [])));
    }
};
LocalizationPipe.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
LocalizationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'abpLocalization',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], LocalizationPipe);



/***/ }),

/***/ "../../packages/core/src/lib/pipes/sort.pipe.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/sort.pipe.ts ***!
  \************************************************************************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SortPipe = class SortPipe {
    transform(value, sortOrder = 'asc', sortKey) {
        sortOrder = sortOrder && sortOrder.toLowerCase();
        if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc'))
            return value;
        let numberArray = [];
        let stringArray = [];
        if (!sortKey) {
            numberArray = value.filter(item => typeof item === 'number').sort();
            stringArray = value.filter(item => typeof item === 'string').sort();
        }
        else {
            numberArray = value
                .filter(item => typeof item[sortKey] === 'number')
                .sort((a, b) => a[sortKey] - b[sortKey]);
            stringArray = value
                .filter(item => typeof item[sortKey] === 'string')
                .sort((a, b) => {
                if (a[sortKey] < b[sortKey])
                    return -1;
                else if (a[sortKey] > b[sortKey])
                    return 1;
                else
                    return 0;
            });
        }
        const sorted = [
            ...numberArray,
            ...stringArray,
            ...value.filter(item => typeof (sortKey ? item[sortKey] : item) !== 'number' &&
                typeof (sortKey ? item[sortKey] : item) !== 'string'),
        ];
        return sortOrder === 'asc' ? sorted : sorted.reverse();
    }
};
SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'abpSort',
    })
], SortPipe);



/***/ }),

/***/ "../../packages/core/src/lib/plugins/config.plugin.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/plugins/config.plugin.ts ***!
  \******************************************************************************************************/
/*! exports provided: NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function() { return NGXS_CONFIG_PLUGIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function() { return ConfigPlugin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _utils_route_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/route-utils */ "../../packages/core/src/lib/utils/route-utils.ts");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! just-clone */ "../../node_modules/just-clone/index.js");
/* harmony import */ var just_clone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_6__);







const NGXS_CONFIG_PLUGIN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGXS_CONFIG_PLUGIN_OPTIONS');
let ConfigPlugin = class ConfigPlugin {
    constructor(options, router) {
        this.options = options;
        this.router = router;
        this.initialized = false;
    }
    handle(state, event, next) {
        const matches = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["actionMatcher"])(event);
        const isInitAction = matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["InitState"]) || matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["UpdateState"]);
        if (isInitAction && !this.initialized) {
            const transformedRoutes = transformRoutes(this.router.config);
            let { routes } = transformedRoutes;
            const { wrappers } = transformedRoutes;
            routes = Object(_utils_route_utils__WEBPACK_IMPORTED_MODULE_5__["organizeRoutes"])(routes, wrappers);
            const flattedRoutes = flatRoutes(just_clone__WEBPACK_IMPORTED_MODULE_6___default()(routes));
            state = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["setValue"])(state, 'ConfigState', Object.assign({}, (state.ConfigState && Object.assign({}, state.ConfigState)), this.options, { routes,
                flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    }
};
ConfigPlugin.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConfigPlugin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGXS_CONFIG_PLUGIN_OPTIONS)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ConfigPlugin);

function transformRoutes(routes = [], wrappers = []) {
    // TODO: remove in v1
    const oldAbpRoutes = routes
        .filter(route => {
        return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => route.data.routes.routes.find(r => r.path === route.path), false);
    })
        .reduce((acc, val) => [...acc, ...val.data.routes.routes], []);
    // tslint:disable-next-line: deprecation
    const abpRoutes = [...Object(_utils_route_utils__WEBPACK_IMPORTED_MODULE_5__["getAbpRoutes"])(), ...oldAbpRoutes];
    wrappers = abpRoutes.filter(ar => ar.wrapper);
    const transformed = [];
    routes
        .filter(route => route.component || route.loadChildren)
        .forEach(route => {
        const abpPackage = abpRoutes.find(abp => abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper);
        const { length } = transformed;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length && (route.data || {}).routes) {
            transformed.push(Object.assign({}, route.data.routes, { path: route.path, name: Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => route.data.routes.name, route.path), children: route.data.routes.children || [] }));
        }
    });
    return { routes: setUrls(transformed), wrappers };
}
function setUrls(routes, parentUrl) {
    if (parentUrl) {
        // this if block using for only recursive call
        return routes.map(route => (Object.assign({}, route, { url: `${parentUrl}/${route.path}` }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, `${parentUrl}/${route.path}`),
        }))));
    }
    return routes.map(route => (Object.assign({}, route, { url: `/${route.path}` }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, `/${route.path}`),
    }))));
}
function flatRoutes(routes) {
    const flat = (r) => {
        return r.reduce((acc, val) => {
            let value = [val];
            if (val.children) {
                value = [val, ...flat(val.children)];
            }
            return [...acc, ...value];
        }, []);
    };
    return flat(routes);
}


/***/ }),

/***/ "../../packages/core/src/lib/plugins/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/plugins/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.plugin */ "../../packages/core/src/lib/plugins/config.plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function() { return _config_plugin__WEBPACK_IMPORTED_MODULE_1__["NGXS_CONFIG_PLUGIN_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function() { return _config_plugin__WEBPACK_IMPORTED_MODULE_1__["ConfigPlugin"]; });





/***/ }),

/***/ "../../packages/core/src/lib/providers/locale.provider.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/providers/locale.provider.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LocaleId, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleId", function() { return LocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _constants_different_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/different-locales */ "../../packages/core/src/lib/constants/different-locales.ts");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/localization.service */ "../../packages/core/src/lib/services/localization.service.ts");




class LocaleId extends String {
    constructor(localizationService) {
        super();
        this.localizationService = localizationService;
    }
    toString() {
        const { currentLang } = this.localizationService;
        return _constants_different_locales__WEBPACK_IMPORTED_MODULE_2__["default"][currentLang] || currentLang;
    }
    valueOf() {
        return this.toString();
    }
}
const LocaleProvider = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
    useClass: LocaleId,
    deps: [_services_localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]],
};


/***/ }),

/***/ "../../packages/core/src/lib/services/application-configuration.service.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/application-configuration.service.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ApplicationConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function() { return ApplicationConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "../../packages/core/src/lib/services/rest.service.ts");



let ApplicationConfigurationService = class ApplicationConfigurationService {
    constructor(rest) {
        this.rest = rest;
    }
    getConfiguration() {
        const request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request);
    }
};
ApplicationConfigurationService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
ApplicationConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
], ApplicationConfigurationService);



/***/ }),

/***/ "../../packages/core/src/lib/services/config-state.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/config-state.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ConfigStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigStateService", function() { return ConfigStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");




let ConfigStateService = class ConfigStateService {
    constructor(store) {
        this.store = store;
    }
    getAll() {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getAll);
    }
    getApplicationInfo() {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getApplicationInfo);
    }
    getOne(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getOne(...args));
    }
    getDeep(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getDeep(...args));
    }
    getRoute(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getRoute(...args));
    }
    getApiUrl(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getApiUrl(...args));
    }
    getSetting(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getSetting(...args));
    }
    getSettings(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getSettings(...args));
    }
    getGrantedPolicy(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getGrantedPolicy(...args));
    }
    getLocalization(...args) {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getLocalization(...args));
    }
};
ConfigStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ConfigStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], ConfigStateService);



/***/ }),

/***/ "../../packages/core/src/lib/services/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: ApplicationConfigurationService, ConfigStateService, LazyLoadService, LocalizationService, ProfileService, RestService, ProfileStateService, SessionStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _application_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-configuration.service */ "../../packages/core/src/lib/services/application-configuration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function() { return _application_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationConfigurationService"]; });

/* harmony import */ var _config_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-state.service */ "../../packages/core/src/lib/services/config-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigStateService", function() { return _config_state_service__WEBPACK_IMPORTED_MODULE_2__["ConfigStateService"]; });

/* harmony import */ var _lazy_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-load.service */ "../../packages/core/src/lib/services/lazy-load.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyLoadService", function() { return _lazy_load_service__WEBPACK_IMPORTED_MODULE_3__["LazyLoadService"]; });

/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localization.service */ "../../packages/core/src/lib/services/localization.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return _localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"]; });

/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.service */ "../../packages/core/src/lib/services/profile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]; });

/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rest.service */ "../../packages/core/src/lib/services/rest.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]; });

/* harmony import */ var _profile_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-state.service */ "../../packages/core/src/lib/services/profile-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileStateService", function() { return _profile_state_service__WEBPACK_IMPORTED_MODULE_7__["ProfileStateService"]; });

/* harmony import */ var _session_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session-state.service */ "../../packages/core/src/lib/services/session-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStateService", function() { return _session_state_service__WEBPACK_IMPORTED_MODULE_8__["SessionStateService"]; });












/***/ }),

/***/ "../../packages/core/src/lib/services/lazy-load.service.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/lazy-load.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LazyLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadService", function() { return LazyLoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../packages/core/src/lib/utils/index.ts");




let LazyLoadService = class LazyLoadService {
    constructor() {
        this.loadedLibraries = {};
    }
    load(urlOrUrls, type, content = '', targetQuery = 'body', position = 'beforeend') {
        if (!urlOrUrls && !content) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Should pass url or content');
        }
        else if (!urlOrUrls && content) {
            urlOrUrls = [null];
        }
        if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            urlOrUrls.forEach((url, index) => {
                const key = url ? url.slice(url.lastIndexOf('/') + 1) : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])();
                if (this.loadedLibraries[key]) {
                    subscriber.next();
                    subscriber.complete();
                    return;
                }
                this.loadedLibraries[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
                let library;
                if (type === 'script') {
                    library = document.createElement('script');
                    library.type = 'text/javascript';
                    if (url) {
                        library.src = url;
                    }
                    library.text = content;
                }
                else if (url) {
                    library = document.createElement('link');
                    library.type = 'text/css';
                    library.rel = 'stylesheet';
                    if (url) {
                        library.href = url;
                    }
                }
                else {
                    library = document.createElement('style');
                    library.textContent = content;
                }
                library.onload = () => {
                    this.loadedLibraries[key].next();
                    this.loadedLibraries[key].complete();
                    if (index === urlOrUrls.length - 1) {
                        subscriber.next();
                        subscriber.complete();
                    }
                };
                document.querySelector(targetQuery).insertAdjacentElement(position, library);
            });
        });
    }
};
LazyLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LazyLoadService);



/***/ }),

/***/ "../../packages/core/src/lib/services/localization.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/localization.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/config.state */ "../../packages/core/src/lib/states/config.state.ts");
/* harmony import */ var _utils_initial_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/initial-utils */ "../../packages/core/src/lib/utils/initial-utils.ts");







let LocalizationService = class LocalizationService {
    constructor(store, router, ngZone, otherInstance) {
        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        if (otherInstance)
            throw new Error('LocalizationService should have only one instance.');
    }
    get currentLang() {
        return this.store.selectSnapshot(state => state.SessionState.language);
    }
    setRouteReuse(reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    }
    registerLocale(locale) {
        const { shouldReuseRoute } = this.router.routeReuseStrategy;
        this.setRouteReuse(() => false);
        this.router.navigated = false;
        return Object(_utils_initial_utils__WEBPACK_IMPORTED_MODULE_6__["registerLocale"])(locale).then(() => {
            this.ngZone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.router.navigateByUrl(this.router.url).catch(rxjs__WEBPACK_IMPORTED_MODULE_4__["noop"]);
                this.setRouteReuse(shouldReuseRoute);
            }));
        });
    }
    get(key, ...interpolateParams) {
        return this.store.select(_states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"].getLocalization(key, ...interpolateParams));
    }
    instant(key, ...interpolateParams) {
        return this.store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"].getLocalization(key, ...interpolateParams));
    }
};
LocalizationService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: LocalizationService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
LocalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        LocalizationService])
], LocalizationService);



/***/ }),

/***/ "../../packages/core/src/lib/services/profile-state.service.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/profile-state.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProfileStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileStateService", function() { return ProfileStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");




let ProfileStateService = class ProfileStateService {
    constructor(store) {
        this.store = store;
    }
    getProfile() {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ProfileState"].getProfile);
    }
};
ProfileStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ProfileStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], ProfileStateService);



/***/ }),

/***/ "../../packages/core/src/lib/services/profile.service.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/profile.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest.service */ "../../packages/core/src/lib/services/rest.service.ts");



let ProfileService = class ProfileService {
    constructor(rest) {
        this.rest = rest;
    }
    get() {
        const request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request);
    }
    update(body) {
        const request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body,
        };
        return this.rest.request(request);
    }
    changePassword(body, skipHandleError = false) {
        const request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body,
        };
        return this.rest.request(request, { skipHandleError });
    }
};
ProfileService.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
], ProfileService);



/***/ }),

/***/ "../../packages/core/src/lib/services/rest.service.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/rest.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_rest_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/rest.actions */ "../../packages/core/src/lib/actions/rest.actions.ts");
/* harmony import */ var _states_config_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../states/config.state */ "../../packages/core/src/lib/states/config.state.ts");








let RestService = class RestService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    handleError(err) {
        this.store.dispatch(new _actions_rest_actions__WEBPACK_IMPORTED_MODULE_6__["RestOccurError"](err));
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    }
    request(request, config, api) {
        config = config || {};
        const { observe = "body" /* Body */, skipHandleError } = config;
        const url = (api || this.store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_7__["ConfigState"].getApiUrl())) + request.url;
        const { method, params } = request, options = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](request, ["method", "params"]);
        return this.http
            .request(method, url, Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((acc, key) => (Object.assign({}, acc, (typeof params[key] !== 'undefined' && params[key] !== '' && { [key]: params[key] }))), {}),
        }), options))
            .pipe(observe === "body" /* Body */ ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            if (skipHandleError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }
            return this.handleError(err);
        }));
    }
};
RestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], RestService);



/***/ }),

/***/ "../../packages/core/src/lib/services/session-state.service.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/session-state.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SessionStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStateService", function() { return SessionStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states */ "../../packages/core/src/lib/states/index.ts");




let SessionStateService = class SessionStateService {
    constructor(store) {
        this.store = store;
    }
    getLanguage() {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getLanguage);
    }
    getTenant() {
        return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getTenant);
    }
};
SessionStateService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
SessionStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], SessionStateService);



/***/ }),

/***/ "../../packages/core/src/lib/states/config.state.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/config.state.ts ***!
  \****************************************************************************************************/
/*! exports provided: ConfigState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigState", function() { return ConfigState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/config.actions */ "../../packages/core/src/lib/actions/config.actions.ts");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/session.actions */ "../../packages/core/src/lib/actions/session.actions.ts");
/* harmony import */ var _services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/application-configuration.service */ "../../packages/core/src/lib/services/application-configuration.service.ts");
/* harmony import */ var _utils_route_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/route-utils */ "../../packages/core/src/lib/utils/route-utils.ts");
/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session.state */ "../../packages/core/src/lib/states/session.state.ts");
var ConfigState_1;










let ConfigState = ConfigState_1 = class ConfigState {
    constructor(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
        this.store = store;
    }
    static getAll(state) {
        return state;
    }
    static getApplicationInfo(state) {
        return state.environment.application || {};
    }
    static getOne(key) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            return state[key];
        });
        return selector;
    }
    static getDeep(keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            return keys.reduce((acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }, state);
        });
        return selector;
    }
    static getRoute(path, name, url) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            const { flattedRoutes } = state;
            return flattedRoutes.find(route => {
                if (path && route.path === path) {
                    return route;
                }
                else if (name && route.name === name) {
                    return route;
                }
                else if (url && route.url === url) {
                    return route;
                }
            });
        });
        return selector;
    }
    static getApiUrl(key) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            return state.environment.apis[key || 'default'].url;
        });
        return selector;
    }
    static getSetting(key) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => state.setting.values[key]);
        });
        return selector;
    }
    static getSettings(keyword) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            if (keyword) {
                const keys = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Object.keys(state.setting.values).filter(key => key.indexOf(keyword) > -1), []);
                if (keys.length) {
                    return keys.reduce((acc, key) => (Object.assign({}, acc, { [key]: state.setting.values[key] })), {});
                }
            }
            return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => state.setting.values, {});
        });
        return selector;
    }
    static getGrantedPolicy(key) {
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            if (!key)
                return true;
            const getPolicy = k => Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => state.auth.grantedPolicies[k], false);
            const orRegexp = /\|\|/g;
            const andRegexp = /&&/g;
            if (orRegexp.test(key)) {
                const keys = key.split('||').filter(k => !!k);
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            }
            else if (andRegexp.test(key)) {
                const keys = key.split('&&').filter(k => !!k);
                if (keys.length !== 2)
                    return false;
                return getPolicy(keys[0].trim()) && getPolicy(keys[1].trim());
            }
            return getPolicy(key);
        });
        return selector;
    }
    static getLocalization(key, ...interpolateParams) {
        let defaultValue;
        if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
        }
        if (!key)
            key = '';
        const keys = key.split('::');
        const selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], (state) => {
            if (!state.localization)
                return defaultValue || key;
            const { defaultResourceName } = state.environment.localization;
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error(`Please check your environment. May you forget set defaultResourceName?
              Here is the example:
               { production: false,
                 localization: {
                   defaultResourceName: 'MyProjectName'
                  }
               }`);
                }
                keys[0] = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(() => defaultResourceName);
            }
            let localization = keys.reduce((acc, val) => {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }, state.localization.values);
            interpolateParams = interpolateParams.filter(params => params != null);
            if (localization && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach(param => {
                    localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                });
            }
            if (typeof localization !== 'string')
                localization = '';
            return localization || defaultValue || key;
        });
        return selector;
    }
    addData({ patchState, dispatch }) {
        return this.appConfigurationService.getConfiguration().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(configuration => patchState(Object.assign({}, configuration))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(configuration => {
            let defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            return this.store.selectSnapshot(_session_state__WEBPACK_IMPORTED_MODULE_9__["SessionState"].getLanguage)
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
                : dispatch(new _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__["SetLanguage"](defaultLang));
        }));
    }
    patchRoute({ patchState, getState }, { name, newValue }) {
        let routes = getState().routes;
        const index = routes.findIndex(route => route.name === name);
        routes = patchRouteDeep(routes, name, newValue);
        return patchState({
            routes,
        });
    }
};
ConfigState.ctorParameters = () => [
    { type: _services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationConfigurationService"] },
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["GetAppConfiguration"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConfigState.prototype, "addData", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["PatchRouteByName"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["PatchRouteByName"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConfigState.prototype, "patchRoute", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ConfigState, "getAll", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)
], ConfigState, "getApplicationInfo", null);
ConfigState = ConfigState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'ConfigState',
        defaults: {},
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationConfigurationService"],
        _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
], ConfigState);

function patchRouteDeep(routes, name, newValue, parentUrl = '') {
    routes = routes.map(route => {
        if (route.name === name) {
            newValue.url = `${parentUrl}/${(!newValue.path && newValue.path === ''
                ? route.path
                : newValue.path) || ''}`;
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map(child => (Object.assign({}, child, { url: `${newValue.url}/${child.path}`.replace('//', '/') })));
            }
            return Object.assign({}, route, newValue);
        }
        else if (route.children && route.children.length) {
            route.children = patchRouteDeep(route.children, name, newValue, (parentUrl || '/') + route.path);
        }
        return route;
    });
    if (parentUrl) {
        // recursive block
        return routes;
    }
    return Object(_utils_route_utils__WEBPACK_IMPORTED_MODULE_8__["organizeRoutes"])(routes);
}


/***/ }),

/***/ "../../packages/core/src/lib/states/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProfileState, ConfigState, SessionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.state */ "../../packages/core/src/lib/states/profile.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileState", function() { return _profile_state__WEBPACK_IMPORTED_MODULE_1__["ProfileState"]; });

/* harmony import */ var _config_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.state */ "../../packages/core/src/lib/states/config.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigState", function() { return _config_state__WEBPACK_IMPORTED_MODULE_2__["ConfigState"]; });

/* harmony import */ var _session_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.state */ "../../packages/core/src/lib/states/session.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return _session_state__WEBPACK_IMPORTED_MODULE_3__["SessionState"]; });







/***/ }),

/***/ "../../packages/core/src/lib/states/profile.state.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/profile.state.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProfileState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileState", function() { return ProfileState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/profile.actions */ "../../packages/core/src/lib/actions/profile.actions.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile.service */ "../../packages/core/src/lib/services/profile.service.ts");





let ProfileState = class ProfileState {
    constructor(profileService) {
        this.profileService = profileService;
    }
    static getProfile({ profile }) {
        return profile;
    }
    getProfile({ patchState }) {
        return this.profileService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(profile => patchState({
            profile,
        })));
    }
    updateProfile({ patchState }, { payload }) {
        return this.profileService.update(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(profile => patchState({
            profile,
        })));
    }
    changePassword(_, { payload }) {
        return this.profileService.changePassword(payload, true);
    }
};
ProfileState.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetProfile"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ProfileState.prototype, "getProfile", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ProfileState.prototype, "updateProfile", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ProfileState.prototype, "changePassword", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)
], ProfileState, "getProfile", null);
ProfileState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'ProfileState',
        defaults: {},
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
], ProfileState);



/***/ }),

/***/ "../../packages/core/src/lib/states/session.state.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/session.state.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SessionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return SessionState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/config.actions */ "../../packages/core/src/lib/actions/config.actions.ts");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/session.actions */ "../../packages/core/src/lib/actions/session.actions.ts");
/* harmony import */ var _services_localization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/localization.service */ "../../packages/core/src/lib/services/localization.service.ts");







let SessionState = class SessionState {
    constructor(localizationService) {
        this.localizationService = localizationService;
    }
    static getLanguage({ language }) {
        return language;
    }
    static getTenant({ tenant }) {
        return tenant;
    }
    setLanguage({ patchState, dispatch }, { payload }) {
        patchState({
            language: payload,
        });
        return dispatch(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__["GetAppConfiguration"]()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.localizationService.registerLocale(payload))));
    }
    setTenant({ patchState }, { payload }) {
        patchState({
            tenant: payload,
        });
    }
};
SessionState.ctorParameters = () => [
    { type: _services_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguage"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguage"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SessionState.prototype, "setLanguage", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetTenant"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetTenant"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SessionState.prototype, "setTenant", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)
], SessionState, "getLanguage", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)
], SessionState, "getTenant", null);
SessionState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'SessionState',
        defaults: {},
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"]])
], SessionState);



/***/ }),

/***/ "../../packages/core/src/lib/tokens/common.token.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/tokens/common.token.ts ***!
  \****************************************************************************************************/
/*! exports provided: environmentFactory, configFactory, ENVIRONMENT, CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentFactory", function() { return environmentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return ENVIRONMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


function environmentFactory(environment) {
    return Object.assign({}, environment);
}
function configFactory(config) {
    return Object.assign({}, config);
}
const ENVIRONMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ENVIRONMENT');
const CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CONFIG');


/***/ }),

/***/ "../../packages/core/src/lib/tokens/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/tokens/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: environmentFactory, configFactory, ENVIRONMENT, CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.token */ "../../packages/core/src/lib/tokens/common.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "environmentFactory", function() { return _common_token__WEBPACK_IMPORTED_MODULE_1__["environmentFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return _common_token__WEBPACK_IMPORTED_MODULE_1__["configFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return _common_token__WEBPACK_IMPORTED_MODULE_1__["ENVIRONMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return _common_token__WEBPACK_IMPORTED_MODULE_1__["CONFIG"]; });





/***/ }),

/***/ "../../packages/core/src/lib/utils/common-utils.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/common-utils.ts ***!
  \***************************************************************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function noop() {
    // tslint:disable-next-line: only-arrow-functions
    const fn = function () { };
    return fn;
}


/***/ }),

/***/ "../../packages/core/src/lib/utils/date-extensions.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/date-extensions.ts ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

Date.prototype.toLocalISOString = function () {
    const timezoneOffset = this.getTimezoneOffset();
    return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
};


/***/ }),

/***/ "../../packages/core/src/lib/utils/generator-utils.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/generator-utils.ts ***!
  \******************************************************************************************************/
/*! exports provided: uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function uuid(a) {
    return a
        ? // tslint:disable-next-line: no-bitwise
            (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}


/***/ }),

/***/ "../../packages/core/src/lib/utils/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/index.ts ***!
  \********************************************************************************************/
/*! exports provided: noop, uuid, getInitialData, localeInitializer, registerLocale, organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes, takeUntilDestroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-utils */ "../../packages/core/src/lib/utils/common-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]; });

/* harmony import */ var _generator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generator-utils */ "../../packages/core/src/lib/utils/generator-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _generator_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"]; });

/* harmony import */ var _initial_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-utils */ "../../packages/core/src/lib/utils/initial-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["getInitialData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeInitializer", function() { return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["localeInitializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLocale", function() { return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["registerLocale"]; });

/* harmony import */ var _route_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-utils */ "../../packages/core/src/lib/utils/route-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "organizeRoutes", function() { return _route_utils__WEBPACK_IMPORTED_MODULE_4__["organizeRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setChildRoute", function() { return _route_utils__WEBPACK_IMPORTED_MODULE_4__["setChildRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortRoutes", function() { return _route_utils__WEBPACK_IMPORTED_MODULE_4__["sortRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function() { return _route_utils__WEBPACK_IMPORTED_MODULE_4__["addAbpRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function() { return _route_utils__WEBPACK_IMPORTED_MODULE_4__["getAbpRoutes"]; });

/* harmony import */ var _rxjs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rxjs-utils */ "../../packages/core/src/lib/utils/rxjs-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function() { return _rxjs_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"]; });









/***/ }),

/***/ "../../packages/core/src/lib/utils/initial-utils.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/initial-utils.ts ***!
  \****************************************************************************************************/
/*! exports provided: getInitialData, localeInitializer, registerLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return getInitialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeInitializer", function() { return localeInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLocale", function() { return registerLocale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_config_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/config.actions */ "../../packages/core/src/lib/actions/config.actions.ts");
/* harmony import */ var _constants_different_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/different-locales */ "../../packages/core/src/lib/constants/different-locales.ts");





function getInitialData(injector) {
    const fn = () => {
        const store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]);
        return store.dispatch(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_3__["GetAppConfiguration"]()).toPromise();
    };
    return fn;
}
function localeInitializer(injector) {
    const fn = () => {
        const store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]);
        const lang = store.selectSnapshot(state => state.SessionState.language) || 'en';
        return new Promise((resolve, reject) => {
            registerLocale(lang).then(() => resolve('resolved'), reject);
        });
    };
    return fn;
}
function registerLocale(locale) {
    return __webpack_require__("../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$")(`./${_constants_different_locales__WEBPACK_IMPORTED_MODULE_4__["default"][locale] || locale}.js`).then(module => {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(module.default);
    });
}


/***/ }),

/***/ "../../packages/core/src/lib/utils/route-utils.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/route-utils.ts ***!
  \**************************************************************************************************/
/*! exports provided: organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizeRoutes", function() { return organizeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setChildRoute", function() { return setChildRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRoutes", function() { return sortRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function() { return addAbpRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function() { return getAbpRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function organizeRoutes(routes, wrappers = [], parentNameArr = [], parentName = null) {
    const filter = route => {
        if (route.children && route.children.length) {
            route.children = organizeRoutes(route.children, wrappers, parentNameArr, route.name);
        }
        if (route.parentName && route.parentName !== parentName) {
            parentNameArr.push(route);
            return false;
        }
        return true;
    };
    if (parentName) {
        // recursive block
        return routes.filter(filter);
    }
    const filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute([...filteredRoutes, ...wrappers], parentNameArr));
    }
    return filteredRoutes;
}
function setChildRoute(routes, parentNameArr) {
    return routes.map(route => {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        const foundedChildren = parentNameArr.filter(parent => parent.parentName === route.name);
        if (foundedChildren && foundedChildren.length) {
            route.children = [...(route.children || []), ...foundedChildren];
        }
        return route;
    });
}
function sortRoutes(routes = []) {
    if (!routes.length)
        return [];
    return routes
        .map((route, index) => {
        return Object.assign({}, route, { order: typeof route.order === 'undefined' ? index + 1 : route.order });
    })
        .sort((a, b) => a.order - b.order)
        .map(route => {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    });
}
const ABP_ROUTES = [];
function addAbpRoutes(routes) {
    if (!Array.isArray(routes)) {
        routes = [routes];
    }
    ABP_ROUTES.push(...routes);
}
function getAbpRoutes() {
    return ABP_ROUTES;
}


/***/ }),

/***/ "../../packages/core/src/lib/utils/rxjs-utils.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/rxjs-utils.ts ***!
  \*************************************************************************************************/
/*! exports provided: takeUntilDestroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function() { return takeUntilDestroy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



function isFunction(value) {
    return typeof value === 'function';
}
const takeUntilDestroy = (componentInstance, destroyMethodName = 'ngOnDestroy') => (source) => {
    const originalDestroy = componentInstance[destroyMethodName];
    if (isFunction(originalDestroy) === false) {
        throw new Error(`${componentInstance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
    }
    if (!componentInstance['__takeUntilDestroy']) {
        componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        componentInstance[destroyMethodName] = function () {
            // tslint:disable-next-line: no-unused-expression
            isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
            componentInstance['__takeUntilDestroy'].next(true);
            componentInstance['__takeUntilDestroy'].complete();
        };
    }
    return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(componentInstance['__takeUntilDestroy']));
};


/***/ }),

/***/ "../../packages/core/src/public-api.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/public-api.ts ***!
  \***************************************************************************************/
/*! exports provided: AbstractNgModelComponent, PatchRouteByName, GetAppConfiguration, StartLoader, StopLoader, GetProfile, UpdateProfile, ChangePassword, RestOccurError, SetLanguage, SetTenant, DynamicLayoutComponent, RouterOutletComponent, AutofocusDirective, EllipsisDirective, ForDirective, FormSubmitDirective, PermissionDirective, VisibilityDirective, ApiInterceptor, CoreModule, AuthGuard, PermissionGuard, LocalizationPipe, SortPipe, NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin, ApplicationConfigurationService, ConfigStateService, LazyLoadService, LocalizationService, ProfileService, RestService, ProfileStateService, SessionStateService, ProfileState, ConfigState, SessionState, environmentFactory, configFactory, ENVIRONMENT, CONFIG, noop, uuid, getInitialData, localeInitializer, registerLocale, organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes, takeUntilDestroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/abstracts */ "../../packages/core/src/lib/abstracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function() { return _lib_abstracts__WEBPACK_IMPORTED_MODULE_1__["AbstractNgModelComponent"]; });

/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/core/src/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["PatchRouteByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetAppConfiguration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartLoader", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["StartLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopLoader", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["StopLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["ChangePassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestOccurError", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["RestOccurError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetLanguage", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["SetLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTenant", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["SetTenant"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/core/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["DynamicLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["RouterOutletComponent"]; });

/* harmony import */ var _lib_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/directives */ "../../packages/core/src/lib/directives/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["EllipsisDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["ForDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["FormSubmitDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["VisibilityDirective"]; });

/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/enums */ "../../packages/core/src/lib/enums/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/guards */ "../../packages/core/src/lib/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionGuard", function() { return _lib_guards__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"]; });

/* harmony import */ var _lib_interceptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/interceptors */ "../../packages/core/src/lib/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return _lib_interceptors__WEBPACK_IMPORTED_MODULE_7__["ApiInterceptor"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/models */ "../../packages/core/src/lib/models/index.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/pipes */ "../../packages/core/src/lib/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_9__["SortPipe"]; });

/* harmony import */ var _lib_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/plugins */ "../../packages/core/src/lib/plugins/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function() { return _lib_plugins__WEBPACK_IMPORTED_MODULE_10__["NGXS_CONFIG_PLUGIN_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function() { return _lib_plugins__WEBPACK_IMPORTED_MODULE_10__["ConfigPlugin"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/services */ "../../packages/core/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ApplicationConfigurationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ConfigStateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyLoadService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["LazyLoadService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["LocalizationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["RestService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ProfileStateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_11__["SessionStateService"]; });

/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/states */ "../../packages/core/src/lib/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_12__["ProfileState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_12__["ConfigState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_12__["SessionState"]; });

/* harmony import */ var _lib_tokens__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/tokens */ "../../packages/core/src/lib/tokens/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "environmentFactory", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["environmentFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["configFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["ENVIRONMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["CONFIG"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/utils */ "../../packages/core/src/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["getInitialData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localeInitializer", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["localeInitializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLocale", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["registerLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "organizeRoutes", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["organizeRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setChildRoute", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["setChildRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortRoutes", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["sortRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["addAbpRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["getAbpRoutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["takeUntilDestroy"]; });

/* harmony import */ var _lib_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/core.module */ "../../packages/core/src/lib/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _lib_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"]; });

/*
 * Public API Surface of core
 */

// export * from './lib/handlers';

















/***/ }),

/***/ "../../packages/identity-config/src/lib/identity-config.module.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/identity-config.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: IdentityConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function() { return IdentityConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/identity-config.service */ "../../packages/identity-config/src/lib/services/identity-config.service.ts");




let IdentityConfigModule = class IdentityConfigModule {
};
IdentityConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], deps: [_services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"], multi: true }],
    })
], IdentityConfigModule);



/***/ }),

/***/ "../../packages/identity-config/src/lib/services/identity-config.service.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/services/identity-config.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: IdentityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function() { return IdentityConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");




let IdentityConfigService = class IdentityConfigService {
    constructor(router, restService) {
        this.router = router;
        this.restService = restService;
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])([
            {
                name: 'AbpUiNavigation::Menu:Administration',
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: 'AbpIdentity::Menu:IdentityManagement',
                path: 'identity',
                order: 1,
                parentName: 'AbpUiNavigation::Menu:Administration',
                layout: "application" /* application */,
                iconClass: 'fa fa-id-card-o',
                children: [
                    { path: 'roles', name: 'AbpIdentity::Roles', order: 1, requiredPolicy: 'AbpIdentity.Roles' },
                    { path: 'users', name: 'AbpIdentity::Users', order: 2, requiredPolicy: 'AbpIdentity.Users' },
                ],
            },
        ]);
    }
};
IdentityConfigService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"] }
];
IdentityConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
], IdentityConfigService);



/***/ }),

/***/ "../../packages/identity-config/src/public-api.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/public-api.ts ***!
  \**************************************************************************************************/
/*! exports provided: IdentityConfigService, IdentityConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/identity-config.service */ "../../packages/identity-config/src/lib/services/identity-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function() { return _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__["IdentityConfigService"]; });

/* harmony import */ var _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/identity-config.module */ "../../packages/identity-config/src/lib/identity-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function() { return _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__["IdentityConfigModule"]; });






/***/ }),

/***/ "../../packages/setting-management-config/src/lib/services/setting-management-config.service.ts":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/lib/services/setting-management-config.service.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: SettingManagementConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigService", function() { return SettingManagementConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");





let SettingManagementConfigService = class SettingManagementConfigService {
    constructor(store) {
        this.store = store;
        const route = {
            name: 'AbpSettingManagement::Settings',
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            requiredPolicy: 'AbpAccount.SettingManagement',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
        };
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])(route);
        setTimeout(() => {
            const tabs = Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["getSettingTabs"])();
            if (!tabs || !tabs.length) {
                this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["PatchRouteByName"]('AbpSettingManagement::Settings', Object.assign({}, route, { invisible: true })));
            }
        });
    }
};
SettingManagementConfigService.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
SettingManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
], SettingManagementConfigService);



/***/ }),

/***/ "../../packages/setting-management-config/src/lib/setting-management-config.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/lib/setting-management-config.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: SettingManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function() { return SettingManagementConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/setting-management-config.service */ "../../packages/setting-management-config/src/lib/services/setting-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");




let SettingManagementConfigModule = class SettingManagementConfigModule {
};
SettingManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__["SettingManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
    })
], SettingManagementConfigModule);



/***/ }),

/***/ "../../packages/setting-management-config/src/public-api.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/public-api.ts ***!
  \************************************************************************************************************/
/*! exports provided: SettingManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/setting-management-config.module */ "../../packages/setting-management-config/src/lib/setting-management-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function() { return _lib_setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementConfigModule"]; });





/***/ }),

/***/ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: TenantManagementConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function() { return TenantManagementConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");



let TenantManagementConfigService = class TenantManagementConfigService {
    constructor() {
        Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])({
            name: 'AbpTenantManagement::Menu:TenantManagement',
            path: 'tenant-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            layout: "application" /* application */,
            iconClass: 'fa fa-users',
            children: [
                {
                    path: 'tenants',
                    name: 'AbpTenantManagement::Tenants',
                    order: 1,
                    requiredPolicy: 'AbpTenantManagement.Tenants',
                },
            ],
        });
    }
};
TenantManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TenantManagementConfigService);



/***/ }),

/***/ "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/tenant-management-config.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: TenantManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function() { return TenantManagementConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tenant-management-config.service */ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");




let TenantManagementConfigModule = class TenantManagementConfigModule {
};
TenantManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], deps: [_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigService"]], useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"], multi: true }],
    })
], TenantManagementConfigModule);



/***/ }),

/***/ "../../packages/tenant-management-config/src/public-api.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/public-api.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TenantManagementConfigService, TenantManagementConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/tenant-management-config.service */ "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function() { return _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__["TenantManagementConfigService"]; });

/* harmony import */ var _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tenant-management-config.module */ "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function() { return _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigModule"]; });






/***/ }),

/***/ "../../packages/theme-basic/src/lib/actions/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddNavigationElement, RemoveNavigationElementByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.actions */ "../../packages/theme-basic/src/lib/actions/layout.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["AddNavigationElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveNavigationElementByName"]; });





/***/ }),

/***/ "../../packages/theme-basic/src/lib/actions/layout.actions.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/layout.actions.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddNavigationElement, RemoveNavigationElementByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return AddNavigationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return RemoveNavigationElementByName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class AddNavigationElement {
    constructor(payload) {
        this.payload = payload;
    }
}
AddNavigationElement.type = '[Layout] Add Navigation Element';
class RemoveNavigationElementByName {
    constructor(name) {
        this.name = name;
    }
}
RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';


/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AccountLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return AccountLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AccountLayoutComponent = class AccountLayoutComponent {
};
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-layout-account',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast></abp-toast>
  `,
    })
], AccountLayoutComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ApplicationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return ApplicationLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! just-compare */ "../../node_modules/just-compare/index.js");
/* harmony import */ var just_compare__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions */ "../../packages/theme-basic/src/lib/actions/index.ts");
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../states */ "../../packages/theme-basic/src/lib/states/index.ts");













let ApplicationLayoutComponent = class ApplicationLayoutComponent {
    constructor(store, oauthService, renderer) {
        this.store = store;
        this.oauthService = oauthService;
        this.renderer = renderer;
        this.isCollapsed = true;
        this.rightPartElements = [];
        this.trackByFn = (_, item) => item.name;
        this.trackElementByFn = (_, element) => element;
    }
    get appInfo() {
        return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getApplicationInfo);
    }
    get visibleRoutes$() {
        return this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(routes => getVisibleRoutes(routes)));
    }
    get defaultLanguage$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(() => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName), ''));
    }
    get dropdownLanguages$() {
        return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(languages => Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)), []));
    }
    get selectedLangCulture() {
        return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getLanguage);
    }
    checkWindowWidth() {
        setTimeout(() => {
            if (window.innerWidth < 768) {
                this.isDropdownChildDynamic = false;
                if (this.smallScreen === false) {
                    this.isCollapsed = false;
                    setTimeout(() => {
                        this.isCollapsed = true;
                    }, 100);
                }
                this.smallScreen = true;
            }
            else {
                this.isDropdownChildDynamic = true;
                this.smallScreen = false;
            }
        }, 0);
    }
    ngAfterViewInit() {
        const navigations = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements).map(({ name }) => name);
        if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_11__["AddNavigationElement"]([
                { element: this.languageRef, order: 4, name: 'LanguageRef' },
                { element: this.currentUserRef, order: 5, name: 'CurrentUserRef' },
            ]));
        }
        this.navElements$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(elements => elements.map(({ element }) => element)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(elements => !just_compare__WEBPACK_IMPORTED_MODULE_7___default()(elements, this.rightPartElements)), Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this))
            .subscribe(elements => {
            setTimeout(() => (this.rightPartElements = elements), 0);
        });
        this.checkWindowWidth();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize')
            .pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150))
            .subscribe(() => {
            this.checkWindowWidth();
        });
    }
    ngOnDestroy() { }
    onChangeLang(cultureName) {
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetLanguage"](cultureName));
    }
    logout() {
        this.oauthService.logOut();
        this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"](['/'], null, {
            state: { redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["RouterState"]).state.url },
        }));
        this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]());
    }
    openChange(event, childrenContainer) {
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter(key => Number.isInteger(+key))
                .forEach(key => {
                this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            });
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    }
};
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.ctorParameters = () => [
    { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('routes')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "routes$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('currentUser')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getDeep('localization.languages')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "languages$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])
], ApplicationLayoutComponent.prototype, "navElements$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('currentUser', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
], ApplicationLayoutComponent.prototype, "currentUserRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('language', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
], ApplicationLayoutComponent.prototype, "languageRef", void 0);
ApplicationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abp-layout-application',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-layout.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html")).default,
        animations: [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["slideFromBottom"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["collapseWithMargin"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])
], ApplicationLayoutComponent);

function getVisibleRoutes(routes) {
    return routes.reduce((acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }, []);
}


/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: EmptyLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return EmptyLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let EmptyLayoutComponent = class EmptyLayoutComponent {
};
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-layout-empty',
        template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast></abp-toast>
  `,
    })
], EmptyLayoutComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent, ValidationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-layout/account-layout.component */ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__["AccountLayoutComponent"]; });

/* harmony import */ var _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-layout/application-layout.component */ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationLayoutComponent"]; });

/* harmony import */ var _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-layout/empty-layout.component */ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"]; });

/* harmony import */ var _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-error/validation-error.component */ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorComponent"]; });








/***/ }),

/***/ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ValidationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return ValidationErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");



let ValidationErrorComponent = class ValidationErrorComponent extends _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorComponent"] {
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map(error => {
            if (!error.message)
                return error;
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        });
    }
};
ValidationErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'abp-validation-error',
        template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
    })
], ValidationErrorComponent);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/constants/styles.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/constants/styles.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = (`
.content-header-title {
    font-size: 24px;
}

.entry-row {
    margin-bottom: 15px;
}

#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}

.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
    .navbar .dropdown-menu a {
        font-size: .9em;
        padding: 10px 15px;
        display: block;
        min-width: 210px;
        text-align: left;
        border-radius: 0.25rem;
        min-height: 44px;
    }
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}

.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.abp-confirm .abp-confirm-footer {
    background-color: #f4f4f7 !important;
}
.abp-confirm .ui-toast-message-content {
    background-color: #fff !important;
}

@media screen and (min-width: 768px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
`);


/***/ }),

/***/ "../../packages/theme-basic/src/lib/services/initial.service.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/services/initial.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: InitialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialService", function() { return InitialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/styles */ "../../packages/theme-basic/src/lib/constants/styles.ts");




let InitialService = class InitialService {
    constructor(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
    }
    appendStyle() {
        return this.lazyLoadService.load(null, 'style', _constants_styles__WEBPACK_IMPORTED_MODULE_3__["default"], 'head', 'beforeend');
    }
};
InitialService.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"] }
];
InitialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"]])
], InitialService);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/states/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.state */ "../../packages/theme-basic/src/lib/states/layout.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return _layout_state__WEBPACK_IMPORTED_MODULE_1__["LayoutState"]; });





/***/ }),

/***/ "../../packages/theme-basic/src/lib/states/layout.state.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/layout.state.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return LayoutState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/layout.actions */ "../../packages/theme-basic/src/lib/actions/layout.actions.ts");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");




let LayoutState = class LayoutState {
    static getNavigationElements({ navigationElements }) {
        return navigationElements;
    }
    layoutAddAction({ getState, patchState }, { payload = [] }) {
        let { navigationElements } = getState();
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(() => payload.filter(({ name }) => navigationElements.findIndex(nav => nav.name === name) < 0), []);
        }
        if (!payload.length)
            return;
        navigationElements = [...navigationElements, ...payload]
            .map(element => (Object.assign({}, element, { order: element.order || 99 })))
            .sort((a, b) => a.order - b.order);
        return patchState({
            navigationElements,
        });
    }
    layoutRemoveAction({ getState, patchState }, { name }) {
        let { navigationElements } = getState();
        const index = navigationElements.findIndex(element => element.name === name);
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements,
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutState.prototype, "layoutAddAction", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LayoutState.prototype, "layoutRemoveAction", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
], LayoutState, "getNavigationElements", null);
LayoutState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'LayoutState',
        defaults: { navigationElements: [] },
    })
], LayoutState);



/***/ }),

/***/ "../../packages/theme-basic/src/lib/theme-basic.module.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/theme-basic.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LAYOUTS, ThemeBasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUTS", function() { return LAYOUTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function() { return ThemeBasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "../../node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account-layout/account-layout.component */ "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
/* harmony import */ var _components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/application-layout/application-layout.component */ "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
/* harmony import */ var _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/empty-layout/empty-layout.component */ "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
/* harmony import */ var _states_layout_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/layout.state */ "../../packages/theme-basic/src/lib/states/layout.state.ts");
/* harmony import */ var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/validation-error/validation-error.component */ "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
/* harmony import */ var _services_initial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/initial.service */ "../../packages/theme-basic/src/lib/services/initial.service.ts");














const LAYOUTS = [_components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationLayoutComponent"], _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__["AccountLayoutComponent"], _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"]];
let ThemeBasicModule = class ThemeBasicModule {
    constructor(initialService) {
        this.initialService = initialService;
    }
};
ThemeBasicModule.ctorParameters = () => [
    { type: _services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"] }
];
ThemeBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [...LAYOUTS, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]],
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"],
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_states_layout_state__WEBPACK_IMPORTED_MODULE_11__["LayoutState"]]),
            _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"].forRoot({
                targetSelector: '.form-group',
                blueprints: {
                    email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
                    max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthoOf{0}[{{ requiredLength }}]',
                    min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                    minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                    required: 'AbpAccount::ThisFieldIsRequired.',
                    passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                },
                errorTemplate: _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"],
            }),
        ],
        exports: [...LAYOUTS],
        entryComponents: [...LAYOUTS, _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"]])
], ThemeBasicModule);



/***/ }),

/***/ "../../packages/theme-basic/src/public-api.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/public-api.ts ***!
  \**********************************************************************************************/
/*! exports provided: LAYOUTS, ThemeBasicModule, AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent, ValidationErrorComponent, LayoutState, AddNavigationElement, RemoveNavigationElementByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/theme-basic.module */ "../../packages/theme-basic/src/lib/theme-basic.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUTS", function() { return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["LAYOUTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function() { return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["ThemeBasicModule"]; });

/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/theme-basic/src/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/theme-basic/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["AccountLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ApplicationLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ValidationErrorComponent"]; });

/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/states */ "../../packages/theme-basic/src/lib/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_4__["LayoutState"]; });

/*
 * Public API Surface of theme-basic
 */







/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
        data: {
            routes: {
                name: '::Menu:Home',
            },
        },
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-account-wrapper-module */ "lazy-libs-account-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/account-wrapper.module */ "./src/app/lazy-libs/account-wrapper.module.ts")).then(m => m.AccountWrapperModule),
    },
    {
        path: 'identity',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-identity-wrapper-module */ "lazy-libs-identity-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/identity-wrapper.module */ "./src/app/lazy-libs/identity-wrapper.module.ts")).then(m => m.IdentityWrapperModule),
    },
    {
        path: 'tenant-management',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-tenant-management-wrapper-module */ "lazy-libs-tenant-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/tenant-management-wrapper.module */ "./src/app/lazy-libs/tenant-management-wrapper.module.ts")).then(m => m.TenantManagementWrapperModule),
    },
    {
        path: 'setting-management',
        loadChildren: () => __webpack_require__.e(/*! import() | lazy-libs-setting-management-wrapper-module */ "lazy-libs-setting-management-wrapper-module").then(__webpack_require__.bind(null, /*! ./lazy-libs/setting-management-wrapper.module */ "./src/app/lazy-libs/setting-management-wrapper.module.ts")).then(m => m.SettingManagementWrapperModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
    }
    ngOnInit() {
        this.lazyLoadService
            .load(['primeng.min.css', 'primeicons.css', 'primeng-nova-light-theme.css', 'font-awesome.min.css'], 'style', null, 'head')
            .subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyLoadService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: `
    <abp-loader-bar></abp-loader-bar>
    <router-outlet></router-outlet>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyLoadService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.basic */ "../../packages/theme-basic/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/logger-plugin */ "../../node_modules/@ngxs/logger-plugin/fesm2015/ngxs-logger-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @abp/ng.account.config */ "../../packages/account-config/src/public-api.ts");
/* harmony import */ var _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @abp/ng.identity.config */ "../../packages/identity-config/src/public-api.ts");
/* harmony import */ var _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @abp/ng.tenant-management.config */ "../../packages/tenant-management-config/src/public-api.ts");
/* harmony import */ var _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @abp/ng.setting-management.config */ "../../packages/setting-management-config/src/public-api.ts");

















const LOGGERS = [_ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsLoggerPluginModule"].forRoot({ disabled: false })];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        imports: [
            _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forRoot({
                environment: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"],
                requirements: {
                    layouts: _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["LAYOUTS"],
                },
            }),
            _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_12__["ThemeSharedModule"].forRoot(),
            _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_13__["AccountConfigModule"].forRoot({ redirectUrl: '/' }),
            _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_14__["IdentityConfigModule"],
            _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_15__["TenantManagementConfigModule"],
            _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_16__["SettingManagementConfigModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ...(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? [] : LOGGERS),
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../packages/core/src/public-api.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.basic */ "../../packages/theme-basic/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__["ThemeBasicModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]],
        exports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__["ThemeBasicModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    hmr: false,
    application: {
        name: 'MyProjectName',
        logoUrl: '',
    },
    oAuthConfig: {
        issuer: 'https://localhost:44305',
        clientId: 'MyProjectName_App',
        dummyClientSecret: '1q2w3e*',
        scope: 'MyProjectName',
        showDebugInformation: true,
        oidc: false,
        requireHttps: true,
    },
    apis: {
        default: {
            url: 'https://localhost:44305',
        },
    },
    localization: {
        defaultResourceName: 'MyProjectName',
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\YinChang\Documents\Works\GitHub\abp.ng\apps\dev-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map