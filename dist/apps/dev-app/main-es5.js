function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js":
  /*!*********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/dist/theme-shared/fesm2015/abp-ng.theme.shared.js ***!
    \*********************************************************************************************************/

  /*! exports provided: BreadcrumbComponent, ButtonComponent, ChartComponent, ConfirmationComponent, ConfirmationService, DateParserFormatter, LoaderBarComponent, ModalComponent, SortOrderIconComponent, TableEmptyMessageComponent, TableSortDirective, ThemeSharedModule, ToastComponent, Toaster, ToasterService, addSettingTab, appendScript, bounceIn, chartJsLoaded$, collapse, collapseLinearWithMargin, collapseWithMargin, collapseX, collapseY, collapseYWithMargin, dialogAnimation, expandX, expandY, expandYWithMargin, fadeAnimation, fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp, fadeOut, fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp, getRandomBackgroundColor, getSettingTabs, slideFromBottom, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵs, ɵt, ɵu */

  /***/
  function distThemeSharedFesm2015AbpNgThemeSharedJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationService", function () {
      return ConfirmationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateParserFormatter", function () {
      return DateParserFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderBarComponent", function () {
      return LoaderBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortOrderIconComponent", function () {
      return SortOrderIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableEmptyMessageComponent", function () {
      return TableEmptyMessageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableSortDirective", function () {
      return TableSortDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeSharedModule", function () {
      return ThemeSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toaster", function () {
      return Toaster;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToasterService", function () {
      return ToasterService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addSettingTab", function () {
      return addSettingTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appendScript", function () {
      return appendScript;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return bounceIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chartJsLoaded$", function () {
      return chartJsLoaded$;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapse", function () {
      return collapse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseLinearWithMargin", function () {
      return collapseLinearWithMargin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseWithMargin", function () {
      return collapseWithMargin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseX", function () {
      return collapseX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseY", function () {
      return collapseY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "collapseYWithMargin", function () {
      return collapseYWithMargin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dialogAnimation", function () {
      return dialogAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "expandX", function () {
      return expandX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "expandY", function () {
      return expandY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "expandYWithMargin", function () {
      return expandYWithMargin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
      return fadeAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeIn", function () {
      return fadeIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInDown", function () {
      return fadeInDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInLeft", function () {
      return fadeInLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInRight", function () {
      return fadeInRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp", function () {
      return fadeInUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOut", function () {
      return fadeOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOutDown", function () {
      return fadeOutDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOutLeft", function () {
      return fadeOutLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOutRight", function () {
      return fadeOutRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeOutUp", function () {
      return fadeOutUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRandomBackgroundColor", function () {
      return getRandomBackgroundColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSettingTabs", function () {
      return getSettingTabs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideFromBottom", function () {
      return slideFromBottom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return BreadcrumbComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return ButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return ChartComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return ConfirmationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return ConfirmationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return AbstractToaster;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return HttpErrorWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return LoaderBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return ModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return fadeAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return fadeIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return fadeOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return TableEmptyMessageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return ToastComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return SortOrderIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return TableSortDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return ErrorHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return httpErrorConfigFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return HTTP_ERROR_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return DateParserFormatter;
    });
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /* harmony import */


    var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/components/common/messageservice */
    "../../node_modules/primeng/components/common/messageservice.js");
    /* harmony import */


    var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/toast */
    "../../node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/table */
    "../../node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! just-clone */
    "../../node_modules/just-clone/index.js");
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/breadcrumb/breadcrumb.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} router
       * @param {?} store
       */
      function BreadcrumbComponent(router, store) {
        _classCallCheck(this, BreadcrumbComponent);

        this.router = router;
        this.store = store;
        this.segments = [];
      }
      /**
       * @return {?}
       */


      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.show = !!this.store.selectSnapshot(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.LeptonLayoutState;
          });

          if (this.show) {
            /** @type {?} */
            var splittedUrl = this.router.url.split('/').filter(
            /**
            * @param {?} chunk
            * @return {?}
            */
            function (chunk) {
              return chunk;
            });
            /** @type {?} */

            var currentUrl = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["ConfigState"].getRoute(splittedUrl[0]));

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
              var _splittedUrl = splittedUrl,
                  _splittedUrl2 = _toArray(_splittedUrl),
                  arr = _splittedUrl2.slice(1);
              /** @type {?} */


              var childRoute = currentUrl;

              var _loop = function _loop(i) {
                /** @type {?} */
                var element = arr[i];
                childRoute = childRoute.children.find(
                /**
                * @param {?} child
                * @return {?}
                */
                function (child) {
                  return child.path === element;
                });

                _this.segments.push(childRoute.name);
              };

              for (var i = 0; i < arr.length; i++) {
                _loop(i);
              }
            }
          }
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-breadcrumb',
        template: "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">\r\n    <a routerLink=\"/\"><i class=\"fa fa-home\"></i> </a>\r\n  </li>\r\n  <li\r\n    *ngFor=\"let segment of segments; let last = last\"\r\n    class=\"breadcrumb-item\"\r\n    [class.active]=\"last\"\r\n    aria-current=\"page\"\r\n  >\r\n    {{ segment | abpLocalization }}\r\n  </li>\r\n</ol>\r\n"
      }]
    }];
    /** @nocollapse */

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/button/button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ButtonComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       */
      function ButtonComponent(renderer) {
        _classCallCheck(this, ButtonComponent);

        this.renderer = renderer;
        this.buttonId = '';
        this.buttonClass = 'btn btn-primary';
        this.buttonType = 'button';
        this.loading = false;
        this.disabled = false;
        this.abpClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abpBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(ButtonComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this2 = this;

          if (this.attributes) {
            Object.keys(this.attributes).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this2.renderer.setAttribute(_this2.buttonRef.nativeElement, key, _this2.attributes[key]);
            });
          }
        }
      }, {
        key: "icon",
        get: function get() {
          return "".concat(this.loading ? 'fa fa-spinner fa-spin' : this.iconClass || 'd-none');
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-button',
        template: "\n    <button\n      #button\n      [id]=\"buttonId\"\n      [attr.type]=\"buttonType\"\n      [ngClass]=\"buttonClass\"\n      [disabled]=\"loading || disabled\"\n      (click.stop)=\"abpClick.next($event)\"\n      (focus)=\"abpFocus.next($event)\"\n      (blur)=\"abpBlur.next($event)\"\n    >\n      <i [ngClass]=\"icon\" class=\"mr-1\"></i><ng-content></ng-content>\n    </button>\n  "
      }]
    }];
    /** @nocollapse */

    ButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    ButtonComponent.propDecorators = {
      buttonId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      buttonClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      buttonType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      iconClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      attributes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      abpClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      abpFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      abpBlur: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      buttonRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['button', {
          "static": true
        }]
      }]
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
      var colors = [];

      for (var i = 0; i < count; i++) {
        /** @type {?} */
        var r = (i + 5) * (i + 5) * 474 % 255;
        /** @type {?} */

        var g = (i + 5) * (i + 5) * 1600 % 255;
        /** @type {?} */

        var b = (i + 5) * (i + 5) * 84065 % 255;
        colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.7)');
      }

      return colors;
    }
    /** @type {?} */


    var chartJsLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/chart/chart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ChartComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} el
       * @param {?} cdRef
       */
      function ChartComponent(el, cdRef) {
        var _this3 = this;

        _classCallCheck(this, ChartComponent);

        this.el = el;
        this.cdRef = cdRef;
        this.options = {};
        this.plugins = [];
        this.responsive = true; // tslint:disable-next-line: no-output-on-prefix

        this.onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this);

        this.onCanvasClick =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this3.chart) {
            /** @type {?} */
            var element = _this3.chart.getElementAtEvent(event);
            /** @type {?} */


            var dataset = _this3.chart.getDatasetAtEvent(event);

            if (element && element.length && dataset) {
              _this3.onDataSelect.emit({
                originalEvent: event,
                element: element[0],
                dataset: dataset
              });
            }
          }
        };

        this.initChart =
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var opts = _this3.options || {};
          opts.responsive = _this3.responsive; // allows chart to resize in responsive mode

          if (opts.responsive && (_this3.height || _this3.width)) {
            opts.maintainAspectRatio = false;
          }

          _this3.chart = new Chart(_this3.canvas, {
            type: _this3.type,
            data: _this3.data,
            options: _this3.options,
            plugins: _this3.plugins
          });

          _this3.cdRef.detectChanges();
        };

        this.generateLegend =
        /**
        * @return {?}
        */
        function () {
          if (_this3.chart) {
            return _this3.chart.generateLegend();
          }
        };

        this.refresh =
        /**
        * @return {?}
        */
        function () {
          if (_this3.chart) {
            _this3.chart.update();

            _this3.cdRef.detectChanges();
          }
        };

        this.reinit =
        /**
        * @return {?}
        */
        function () {
          if (_this3.chart) {
            _this3.chart.destroy();

            _this3.initChart();
          }
        };
      }
      /**
       * @return {?}
       */


      _createClass(ChartComponent, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this4 = this;

          chartJsLoaded$.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4.testChartJs();

            _this4.initChart();

            _this4._initialized = true;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "testChartJs",
        value: function testChartJs() {
          try {
            // tslint:disable-next-line: no-unused-expression
            Chart;
          } catch (error) {
            throw new Error("Chart is not found. Import the Chart from app.module like shown below:\n      import('chart.js');\n      ");
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.chart) {
            this.chart.destroy();
            this._initialized = false;
            this.chart = null;
          }
        }
      }, {
        key: "data",
        get: function get() {
          return this._data;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._data = val;
          this.reinit();
        }
        /**
         * @return {?}
         */

      }, {
        key: "canvas",
        get: function get() {
          return this.el.nativeElement.children[0].children[0];
        }
        /**
         * @return {?}
         */

      }, {
        key: "base64Image",
        get: function get() {
          return this.chart.toBase64Image();
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-chart',
        template: "<div\r\n  style=\"position:relative\"\r\n  [style.width]=\"responsive && !width ? null : width\"\r\n  [style.height]=\"responsive && !height ? null : height\"\r\n>\r\n  <canvas\r\n    [attr.width]=\"responsive && !width ? null : width\"\r\n    [attr.height]=\"responsive && !height ? null : height\"\r\n    (click)=\"onCanvasClick($event)\"\r\n  ></canvas>\r\n</div>\r\n"
      }]
    }];
    /** @nocollapse */

    ChartComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    ChartComponent.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      plugins: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      responsive: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      onDataSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      initialized: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
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


    var AbstractToaster =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} messageService
       */
      function AbstractToaster(messageService) {
        _classCallCheck(this, AbstractToaster);

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


      _createClass(AbstractToaster, [{
        key: "info",
        value: function info(message, title, options) {
          return this.show(message, title, 'info', options);
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "success",
        value: function success(message, title, options) {
          return this.show(message, title, 'success', options);
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "warn",
        value: function warn(message, title, options) {
          return this.show(message, title, 'warn', options);
        }
        /**
         * @param {?} message
         * @param {?} title
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "error",
        value: function error(message, title, options) {
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

      }, {
        key: "show",
        value: function show(message, title, severity, options) {
          this.messageService.clear(this.key);
          this.messageService.add(Object.assign({
            severity: severity,
            detail: message || '',
            summary: title || ''
          }, options, {
            key: this.key
          }, typeof (options ||
          /** @type {?} */
          {}).sticky === 'undefined' && {
            sticky: this.sticky
          }));
          this.status$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          return this.status$;
        }
        /**
         * @param {?=} status
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear(status) {
          this.messageService.clear(this.key);
          this.status$.next(status || "dismiss"
          /* dismiss */
          );
          this.status$.complete();
        }
      }]);

      return AbstractToaster;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/confirmation.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ConfirmationService =
    /*#__PURE__*/
    function (_AbstractToaster) {
      _inherits(ConfirmationService, _AbstractToaster);

      /**
       * @param {?} messageService
       */
      function ConfirmationService(messageService) {
        var _this5;

        _classCallCheck(this, ConfirmationService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmationService).call(this, messageService));
        _this5.messageService = messageService;
        _this5.key = 'abpConfirmation';
        _this5.sticky = true;
        _this5.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        return _this5;
      }
      /**
       * @param {?} message
       * @param {?} title
       * @param {?} severity
       * @param {?=} options
       * @return {?}
       */


      _createClass(ConfirmationService, [{
        key: "show",
        value: function show(message, title, severity, options) {
          this.listenToEscape();
          return _get(_getPrototypeOf(ConfirmationService.prototype), "show", this).call(this, message, title, severity, options);
        }
        /**
         * @param {?=} status
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear(status) {
          _get(_getPrototypeOf(ConfirmationService.prototype), "clear", this).call(this, status);

          this.destroy$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "listenToEscape",
        value: function listenToEscape() {
          var _this6 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return key && key.key === 'Escape';
          })).subscribe(
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            _this6.clear();
          });
        }
      }]);

      return ConfirmationService;
    }(AbstractToaster);

    ConfirmationService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ConfirmationService.ctorParameters = function () {
      return [{
        type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };
    /** @nocollapse */


    ConfirmationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ConfirmationService_Factory() {
        return new ConfirmationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
      },
      token: ConfirmationService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/confirmation/confirmation.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ConfirmationComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} confirmationService
       */
      function ConfirmationComponent(confirmationService) {
        _classCallCheck(this, ConfirmationComponent);

        this.confirmationService = confirmationService;
        this.confirm = "confirm"
        /* confirm */
        ;
        this.reject = "reject"
        /* reject */
        ;
        this.dismiss = "dismiss"
        /* dismiss */
        ;
      }
      /**
       * @param {?} status
       * @return {?}
       */


      _createClass(ConfirmationComponent, [{
        key: "close",
        value: function close(status) {
          this.confirmationService.clear(status);
        }
      }]);

      return ConfirmationComponent;
    }();

    ConfirmationComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-confirmation',
        // tslint:disable-next-line: component-max-inline-declarations
        template: "\n    <p-toast\n      position=\"center\"\n      key=\"abpConfirmation\"\n      (onClose)=\"close(dismiss)\"\n      [modal]=\"true\"\n      [baseZIndex]=\"1000\"\n      styleClass=\"abp-confirm\"\n    >\n      <ng-template let-message pTemplate=\"message\">\n        <i class=\"fa fa-exclamation-circle abp-confirm-icon\"></i>\n        <div *ngIf=\"message.summary\" class=\"abp-confirm-summary\">\n          {{ message.summary | abpLocalization: message.titleLocalizationParams }}\n        </div>\n        <div class=\"abp-confirm-body\">\n          {{ message.detail | abpLocalization: message.messageLocalizationParams }}\n        </div>\n\n        <div class=\"abp-confirm-footer justify-content-center\">\n          <button\n            *ngIf=\"!message.hideCancelBtn\"\n            id=\"cancel\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(reject)\"\n          >\n            {{ message.cancelText || message.cancelCopy || 'AbpIdentity::Cancel' | abpLocalization }}\n          </button>\n          <button\n            *ngIf=\"!message.hideYesBtn\"\n            id=\"confirm\"\n            type=\"button\"\n            class=\"btn btn-sm btn-primary\"\n            (click)=\"close(confirm)\"\n            autofocus\n          >\n            <span>{{ message.yesText || message.yesCopy || 'AbpIdentity::Yes' | abpLocalization }}</span>\n          </button>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
      }]
    }];
    /** @nocollapse */

    ConfirmationComponent.ctorParameters = function () {
      return [{
        type: ConfirmationService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/http-error-wrapper/http-error-wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HttpErrorWrapperComponent =
    /*#__PURE__*/
    function () {
      function HttpErrorWrapperComponent() {
        _classCallCheck(this, HttpErrorWrapperComponent);

        this.status = 0;
        this.title = 'Oops!';
        this.details = 'Sorry, an error has occured.';
        this.customComponent = null;
        this.hideCloseIcon = false;
      }
      /**
       * @return {?}
       */


      _createClass(HttpErrorWrapperComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.backgroundColor = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
          /**
          * @return {?}
          */
          function () {
            return window.getComputedStyle(document.body).getPropertyValue('background-color');
          }) || '#fff';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          if (this.customComponent) {
            /** @type {?} */
            var customComponentRef = this.cfRes.resolveComponentFactory(this.customComponent).create(this.injector);
            customComponentRef.instance.errorStatus = this.status;
            customComponentRef.instance.destroy$ = this.destroy$;
            this.appRef.attachView(customComponentRef.hostView);
            this.containerRef.nativeElement.appendChild(
            /** @type {?} */
            customComponentRef.hostView.rootNodes[0]);
            customComponentRef.changeDetectorRef.detectChanges();
          }

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup').pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return key && key.key === 'Escape';
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7.destroy();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "statusText",
        get: function get() {
          return this.status ? "[".concat(this.status, "]") : '';
        }
      }]);

      return HttpErrorWrapperComponent;
    }();

    HttpErrorWrapperComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-http-error-wrapper',
        template: "<div #container id=\"abp-http-error-container\" class=\"error\" [style.backgroundColor]=\"backgroundColor\">\r\n  <button *ngIf=\"!hideCloseIcon\" id=\"abp-close-button\" type=\"button\" class=\"close mr-2\" (click)=\"destroy()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n\r\n  <div *ngIf=\"!customComponent\" class=\"row centered\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>{{ statusText }} {{ title | abpLocalization }}</h1>\r\n        <div class=\"error-details\">\r\n          {{ details | abpLocalization }}\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a (click)=\"destroy()\" routerLink=\"/\" class=\"btn btn-primary btn-md mt-2\"\r\n            ><span class=\"glyphicon glyphicon-home\"></span>\r\n            {{ { key: '::Menu:Home', defaultValue: 'Home' } | abpLocalization }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        styles: [".error{position:fixed;top:0;width:100vw;height:100vh;z-index:999999}.centered{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}"]
      }]
    }];
    HttpErrorWrapperComponent.propDecorators = {
      containerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['container', {
          "static": false
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/loader-bar/loader-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LoaderBarComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} actions
       * @param {?} router
       * @param {?} cdRef
       */
      function LoaderBarComponent(actions, router, cdRef) {
        _classCallCheck(this, LoaderBarComponent);

        this.actions = actions;
        this.router = router;
        this.cdRef = cdRef;
        this.containerClass = 'abp-loader-bar';
        this.color = '#77b6ff';
        this.isLoading = false;
        this.progressLevel = 0;
        this.intervalPeriod = 350;
        this.stopDelay = 820;

        this.filter =
        /**
        * @param {?} action
        * @return {?}
        */
        function (action) {
          return action.payload.url.indexOf('openid-configuration') < 0;
        };
      }
      /**
       * @return {?}
       */


      _createClass(LoaderBarComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this8 = this;

          this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StopLoader"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(this.filter), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this)).subscribe(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            if (action instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["StartLoader"]) _this8.startLoading();else _this8.stopLoading();
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationError"];
          }), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) _this8.startLoading();else _this8.stopLoading();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.interval.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "startLoading",
        value: function startLoading() {
          var _this9 = this;

          if (this.isLoading || this.progressLevel !== 0) return;
          this.isLoading = true;
          this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(this.intervalPeriod).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this9.progressLevel < 75) {
              _this9.progressLevel += Math.random() * 10;
            } else if (_this9.progressLevel < 90) {
              _this9.progressLevel += 0.4;
            } else if (_this9.progressLevel < 100) {
              _this9.progressLevel += 0.1;
            } else {
              _this9.interval.unsubscribe();
            }

            _this9.cdRef.detectChanges();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "stopLoading",
        value: function stopLoading() {
          var _this10 = this;

          this.interval.unsubscribe();
          this.progressLevel = 100;
          this.isLoading = false;
          if (this.timer && !this.timer.closed) return;
          this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(this.stopDelay).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this10.progressLevel = 0;

            _this10.cdRef.detectChanges();
          });
        }
      }, {
        key: "boxShadow",
        get: function get() {
          return "0 0 10px rgba(".concat(this.color, ", 0.5)");
        }
      }]);

      return LoaderBarComponent;
    }();

    LoaderBarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-loader-bar',
        template: "\n    <div id=\"abp-loader-bar\" [ngClass]=\"containerClass\" [class.is-loading]=\"isLoading\">\n      <div\n        class=\"abp-progress\"\n        [style.width.vw]=\"progressLevel\"\n        [ngStyle]=\"{\n          'background-color': color,\n          'box-shadow': boxShadow\n        }\"\n      ></div>\n    </div>\n  ",
        styles: [".abp-loader-bar{left:0;opacity:0;position:fixed;top:0;transition:opacity .4s linear .4s;z-index:99999}.abp-loader-bar.is-loading{opacity:1;transition:none}.abp-loader-bar .abp-progress{height:3px;left:0;position:fixed;top:0;transition:width .4s}"]
      }]
    }];
    /** @nocollapse */

    LoaderBarComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    LoaderBarComponent.propDecorators = {
      containerClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      filter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/fade.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var fadeInDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateY(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateY(0)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeInUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateY(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateY(0)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeInLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateX(20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateX(0)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeInRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateX(-20px)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateX(0)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeOutDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateY(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateY(20px)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeOutUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateY(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateY(-20px)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateX(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateX(20px)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /** @type {?} */

    var fadeOutRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} translateX(0)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} translateX(-20px)'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease',
        transform: ''
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/modal.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeIn)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut))]);
    /** @type {?} */

    var dialogAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('dialog', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeInDown)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(fadeOut))]);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/modal/modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ModalComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} renderer
       * @param {?} confirmationService
       */
      function ModalComponent(renderer, confirmationService) {
        _classCallCheck(this, ModalComponent);

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


      _createClass(ModalComponent, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.destroy$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var _this11 = this;

          if (this.busy) return;
          /** @type {?} */

          var node;

          if (!this.modalContent) {
            node =
            /** @type {?} */
            document.getElementById('modal-container');
          }
          /** @type {?} */


          var nodes = getFlatNodes(
          /** @type {?} */
          (node || this.modalContent.nativeElement).querySelector('#abp-modal-body').childNodes);

          if (hasNgDirty(nodes)) {
            if (this.isConfirmationOpen) return;
            this.isConfirmationOpen = true;
            this.confirmationService.warn('AbpAccount::AreYouSureYouWantToCancelEditingWarningMessage', 'AbpAccount::AreYouSure').subscribe(
            /**
            * @param {?} status
            * @return {?}
            */
            function (status) {
              _this11.isConfirmationOpen = false;

              if (status === "confirm"
              /* confirm */
              ) {
                  _this11.visible = false;
                }
            });
          } else {
            this.visible = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "listen",
        value: function listen() {
          var _this12 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return key && key.key === 'Escape';
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this12.close();
          });
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (!_this12.abpClose) return;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_this12.abpClose.nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this12.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return !!_this12.modalContent;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this12.close();
            });
          }, 0);
          this.init.emit();
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this13 = this;

          if (typeof value !== 'boolean') return;
          this.isModalOpen = value;
          this._visible = value;
          this.visibleChange.emit(value);

          if (value) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this13.listen();
            }, 0);
            this.renderer.addClass(document.body, 'modal-open');
            this.appear.emit();
          } else {
            this.renderer.removeClass(document.body, 'modal-open');
            this.disappear.emit();
            this.destroy$.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "busy",
        get: function get() {
          return this._busy;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this.abpSubmit && this.abpSubmit instanceof ButtonComponent) {
            this.abpSubmit.loading = value;
          }

          this._busy = value;
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-modal',
        template: "<div\r\n  *ngIf=\"visible\"\r\n  [@fade]=\"isModalOpen\"\r\n  id=\"modal-container\"\r\n  class=\"modal show {{ modalClass }}\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n>\r\n  <div class=\"modal-backdrop\" (click)=\"close()\"></div>\r\n  <div\r\n    id=\"abp-modal-dialog\"\r\n    class=\"modal-dialog modal-{{ size }}\"\r\n    role=\"document\"\r\n    [class.modal-dialog-centered]=\"centered\"\r\n    #abpModalContent\r\n  >\r\n    <div id=\"abp-modal-content\" class=\"modal-content\">\r\n      <div id=\"abp-modal-header\" class=\"modal-header\">\r\n        <ng-container *ngTemplateOutlet=\"abpHeader\"></ng-container>\r\n        \u200B\r\n        <button id=\"abp-modal-close-button\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div id=\"abp-modal-body\" class=\"modal-body\">\r\n        <ng-container *ngTemplateOutlet=\"abpBody\"></ng-container>\r\n      </div>\r\n      <div id=\"abp-modal-footer\" class=\"modal-footer\">\r\n        <ng-container *ngTemplateOutlet=\"abpFooter\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
        animations: [fadeAnimation]
      }]
    }];
    /** @nocollapse */

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: ConfirmationService
      }];
    };

    ModalComponent.propDecorators = {
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      busy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      modalClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      abpSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: [ButtonComponent, {
          "static": false,
          read: ButtonComponent
        }]
      }],
      abpHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: ['abpHeader', {
          "static": false
        }]
      }],
      abpBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: ['abpBody', {
          "static": false
        }]
      }],
      abpFooter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: ['abpFooter', {
          "static": false
        }]
      }],
      abpClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
        args: ['abpClose', {
          "static": false,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }]
      }],
      modalContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['abpModalContent', {
          "static": false
        }]
      }],
      abpButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
        args: ['abp-button']
      }],
      visibleChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      init: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      appear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      disappear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };

    if (false) {}
    /**
     * @param {?} nodes
     * @return {?}
     */


    function getFlatNodes(nodes) {
      return Array.from(nodes).reduce(
      /**
      * @param {?} acc
      * @param {?} val
      * @return {?}
      */
      function (acc, val) {
        return [].concat(_toConsumableArray(acc), _toConsumableArray(val.childNodes && val.childNodes.length ? getFlatNodes(val.childNodes) : [val]));
      }, []);
    }
    /**
     * @param {?} nodes
     * @return {?}
     */


    function hasNgDirty(nodes) {
      return nodes.findIndex(
      /**
      * @param {?} node
      * @return {?}
      */
      function (node) {
        return (node.className || '').indexOf('ng-dirty') > -1;
      }) > -1;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/sort-order-icon/sort-order-icon.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SortOrderIconComponent =
    /*#__PURE__*/
    function () {
      function SortOrderIconComponent() {
        _classCallCheck(this, SortOrderIconComponent);

        this.orderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedSortKeyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(SortOrderIconComponent, [{
        key: "sort",

        /**
         * @param {?} key
         * @return {?}
         */
        value: function sort(key) {
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
      }, {
        key: "selectedSortKey",
        set: function set(value) {
          this._selectedSortKey = value;
          this.selectedSortKeyChange.emit(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._selectedSortKey;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "order",
        set: function set(value) {
          this._order = value;
          this.orderChange.emit(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._order;
        }
        /**
         * @return {?}
         */

      }, {
        key: "icon",
        get: function get() {
          if (!this.selectedSortKey) return 'sorting';
          if (this.selectedSortKey === this.sortKey) return "sorting_".concat(this.order);else return '';
        }
      }]);

      return SortOrderIconComponent;
    }();

    SortOrderIconComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-sort-order-icon',
        template: "<div class=\"float-right {{ iconClass }}\">\r\n  <span class=\"{{ icon }}\"></span>\r\n</div>\r\n"
      }]
    }];
    SortOrderIconComponent.propDecorators = {
      sortKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      selectedSortKey: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      order: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      orderChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      selectedSortKeyChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      iconClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/table-empty-message/table-empty-message.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TableEmptyMessageComponent =
    /*#__PURE__*/
    function () {
      function TableEmptyMessageComponent() {
        _classCallCheck(this, TableEmptyMessageComponent);

        this.colspan = 2;
        this.localizationResource = 'AbpAccount';
        this.localizationProp = 'NoDataAvailableInDatatable';
      }
      /**
       * @return {?}
       */


      _createClass(TableEmptyMessageComponent, [{
        key: "emptyMessage",
        get: function get() {
          return this.message || "".concat(this.localizationResource, "::").concat(this.localizationProp);
        }
      }]);

      return TableEmptyMessageComponent;
    }();

    TableEmptyMessageComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        // tslint:disable-next-line: component-selector
        selector: '[abp-table-empty-message]',
        template: "\n    <td class=\"text-center\" [attr.colspan]=\"colspan\">\n      {{ emptyMessage | abpLocalization }}\n    </td>\n  "
      }]
    }];
    TableEmptyMessageComponent.propDecorators = {
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      localizationResource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      localizationProp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toast/toast.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ToastComponent = function ToastComponent() {
      _classCallCheck(this, ToastComponent);
    };

    ToastComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'abp-toast',
        // tslint:disable-next-line: component-max-inline-declarations
        template: "\n    <p-toast position=\"bottom-right\" key=\"abpToast\" styleClass=\"abp-toast\" [baseZIndex]=\"1000\">\n      <ng-template let-message pTemplate=\"message\">\n        <span\n          class=\"ui-toast-icon pi\"\n          [ngClass]=\"{\n            'pi-info-circle': message.severity === 'info',\n            'pi-exclamation-triangle': message.severity === 'warn',\n            'pi-times': message.severity === 'error',\n            'pi-check': message.severity === 'success'\n          }\"\n        ></span>\n        <div class=\"ui-toast-message-text-content\">\n          <div class=\"ui-toast-summary\">{{ message.summary | abpLocalization: message.titleLocalizationParams }}</div>\n          <div class=\"ui-toast-detail\">{{ message.detail | abpLocalization: message.messageLocalizationParams }}</div>\n        </div>\n      </ng-template>\n    </p-toast>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/constants/styles.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var styles = "\n.is-invalid .form-control {\n  border-color: #dc3545;\n  border-style: solid !important;\n}\n\n.is-invalid .invalid-feedback,\n.is-invalid + * .invalid-feedback {\n  display: block;\n}\n\n.data-tables-filter {\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.navbar .dropdown-submenu a::after {\n  transform: rotate(-90deg);\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.navbar .dropdown-menu {\n  min-width: 215px;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar {\n  height: 5px !important;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.ui-table-scrollable-body::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.modal.show {\n  display: block !important;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: calc(100% - 7px);\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1040;\n}\n\n.modal::-webkit-scrollbar {\n  width: 7px;\n}\n\n.modal::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.modal::-webkit-scrollbar-thumb {\n  background: #8a8686;\n}\n\n.modal-dialog {\n  z-index: 1050;\n}\n\n.abp-ellipsis-inline {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-ellipsis {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.abp-toast .ui-toast-message {\n  box-sizing: border-box;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: #1b1d29;\n}\n\n.abp-toast .ui-toast-message-content {\n  padding: 10px;\n}\n\n.abp-toast .ui-toast-message-content .ui-toast-icon {\n  top: 0;\n  left: 0;\n  padding: 10px;\n}\n\n.abp-toast .ui-toast-summary {\n  margin: 0;\n  font-weight: 700;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-error {\n  border: 2px solid #ba1659;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-error .ui-toast-message-content .ui-toast-icon {\n  color: #ba1659;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn {\n  border: 2px solid #ed5d98;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-warn .ui-toast-message-content .ui-toast-icon {\n  color: #ed5d98;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-success {\n  border: 2px solid #1c9174;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-success .ui-toast-message-content .ui-toast-icon {\n  color: #1c9174;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-info {\n  border: 2px solid #fccb31;\n  background-color: #f4f4f7;\n}\n\nbody abp-toast .ui-toast .ui-toast-message.ui-toast-message-info .ui-toast-message-content .ui-toast-icon {\n  color: #fccb31;\n}\n\n.abp-confirm .ui-toast-message {\n  box-sizing: border-box;\n  padding: 0px;\n  border:0 none;\n  border-radius: 4px;\n  background-color: transparent !important;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n}\n\n.abp-confirm .ui-toast-message-content {\n  padding: 0px;\n}\n\n.abp-confirm .abp-confirm-icon {\n  margin: 32px 50px 5px !important;\n  color: #f8bb86 !important;\n  font-size: 52px !important;\n}\n\n.abp-confirm .ui-toast-close-icon {\n  display: none !important;\n}\n\n.abp-confirm .abp-confirm-summary {\n  display: block !important;\n  margin-bottom: 13px !important;\n  padding: 13px 16px 0px !important;\n  font-weight: 600 !important;\n  font-size: 18px !important;\n}\n\n.abp-confirm .abp-confirm-body {\n  display: inline-block !important;\n  padding: 0px 10px !important;\n}\n\n.abp-confirm .abp-confirm-footer {\n  display: block;\n  margin-top: 30px;\n  padding: 16px;\n  text-align: right;\n}\n\n.abp-confirm .abp-confirm-footer .btn {\n  margin-left: 10px !important;\n}\n\n.ui-widget-overlay {\n  z-index: 1000;\n}\n\n.color-white {\n  color: #FFF !important;\n}\n\n.custom-checkbox > label {\n  cursor: pointer;\n}\n\n/* <animations */\n\n.fade-in-top {\n  animation: fadeInTop 0.2s ease-in-out;\n}\n\n.fade-out-top {\n  animation: fadeOutTop 0.2s ease-in-out;\n}\n\n.abp-collapsed-height {\n  -moz-transition: max-height linear 0.35s;\n  -ms-transition: max-height linear 0.35s;\n  -o-transition: max-height linear 0.35s;\n  -webkit-transition: max-height linear 0.35s;\n  overflow:hidden;\n  transition:max-height 0.35s linear;\n  height:auto;\n  max-height: 0;\n}\n\n.abp-mh-25 {\n  max-height: 25vh;\n}\n\n.abp-mh-50 {\n  transition:max-height 0.65s linear;\n  max-height: 50vh;\n}\n\n.abp-mh-75 {\n  transition:max-height 0.85s linear;\n  max-height: 75vh;\n}\n\n.abp-mh-100 {\n  transition:max-height 1s linear;\n  max-height: 100vh;\n}\n\n[class^=\"sorting\"] {\n  opacity: .3;\n  cursor: pointer;\n}\n[class^=\"sorting\"]:before {\n  right: 0.5rem;\n  content: \"\u2191\";\n}\n[class^=\"sorting\"]:after {\n  right: 0.5rem;\n  content: \"\u2193\";\n}\n\n.sorting_desc {\n  opacity: 1;\n}\n.sorting_desc:before {\n  opacity: .3;\n}\n\n.sorting_asc {\n  opacity: 1;\n}\n.sorting_asc:after {\n  opacity: .3;\n}\n\n@keyframes fadeInTop {\n  from {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOutTop {\n  to {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n}\n\n/* </animations */\n\n";
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/table-sort.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function TableSortOptions() {}

    if (false) {}

    var TableSortDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} table
       * @param {?} sortPipe
       */
      function TableSortDirective(table, sortPipe) {
        _classCallCheck(this, TableSortDirective);

        this.table = table;
        this.sortPipe = sortPipe;
        this.value = [];
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      _createClass(TableSortDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(_ref) {
          var value = _ref.value,
              abpTableSort = _ref.abpTableSort;

          if (value || abpTableSort) {
            this.abpTableSort = this.abpTableSort ||
            /** @type {?} */
            {};
            this.table.value = this.sortPipe.transform(just_clone__WEBPACK_IMPORTED_MODULE_12___default()(this.value), this.abpTableSort.order, this.abpTableSort.key);
          }
        }
      }]);

      return TableSortDirective;
    }();

    TableSortDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[abpTableSort]',
        providers: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"]]
      }]
    }];
    /** @nocollapse */

    TableSortDirective.ctorParameters = function () {
      return [{
        type: primeng_table__WEBPACK_IMPORTED_MODULE_11__["Table"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["SortPipe"]
      }];
    };

    TableSortDirective.propDecorators = {
      abpTableSort: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/handlers/error.handler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_ERROR_MESSAGES = {
      defaultError: {
        title: 'An error has occurred!',
        details: 'Error detail not sent by server.'
      },
      defaultError401: {
        title: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.'
      },
      defaultError403: {
        title: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.'
      },
      defaultError404: {
        title: 'Resource not found!',
        details: 'The resource requested could not found on the server.'
      },
      defaultError500: {
        title: 'Internal server error',
        details: 'Error detail not sent by server.'
      }
    };

    var ErrorHandler =
    /*#__PURE__*/
    function () {
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
      function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        var _this14 = this;

        _classCallCheck(this, ErrorHandler);

        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.actions.pipe(Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["ofActionSuccessful"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"], _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"])).subscribe(
        /**
        * @param {?} res
        * @return {?}
        */
        function (res) {
          if (res instanceof _abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["RestOccurError"]) {
            var _res$payload = res.payload,
                err = _res$payload === void 0 ?
            /** @type {?} */
            {} : _res$payload;
            /** @type {?} */

            var body = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
            /**
            * @return {?}
            */
            function () {
              return (
                /** @type {?} */
                err.error.error
              );
            }, DEFAULT_ERROR_MESSAGES.defaultError.title);

            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpErrorResponse"] && err.headers.get('_AbpErrorFormat')) {
              /** @type {?} */
              var confirmation$ = _this14.showError(null, null, body);

              if (err.status === 401) {
                confirmation$.subscribe(
                /**
                * @return {?}
                */
                function () {
                  _this14.navigateToLogin();
                });
              }
            } else {
              switch (
              /** @type {?} */
              err.status) {
                case 401:
                  _this14.canCreateCustomError(401) ? _this14.show401Page() : _this14.showError({
                    key: 'AbpAccount::DefaultErrorMessage401',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title
                  }, {
                    key: 'AbpAccount::DefaultErrorMessage401Detail',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details
                  }).subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this14.navigateToLogin();
                  });
                  break;

                case 403:
                  _this14.createErrorComponent({
                    title: {
                      key: 'AbpAccount::DefaultErrorMessage403',
                      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title
                    },
                    details: {
                      key: 'AbpAccount::DefaultErrorMessage403Detail',
                      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details
                    },
                    status: 403
                  });

                  break;

                case 404:
                  _this14.canCreateCustomError(404) ? _this14.show404Page() : _this14.showError({
                    key: 'AbpAccount::DefaultErrorMessage404',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details
                  }, {
                    key: 'AbpAccount::DefaultErrorMessage404Detail',
                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title
                  });
                  break;

                case 500:
                  _this14.createErrorComponent({
                    title: {
                      key: 'AbpAccount::500Message',
                      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title
                    },
                    details: {
                      key: 'AbpAccount::InternalServerErrorMessage',
                      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details
                    },
                    status: 500
                  });

                  break;

                case 0:
                  if (
                  /** @type {?} */
                  err.statusText === 'Unknown Error') {
                    _this14.createErrorComponent({
                      title: {
                        key: 'AbpAccount::DefaultErrorMessage',
                        defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title
                      }
                    });
                  }

                  break;

                default:
                  _this14.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);

                  break;
              }
            }
          } else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterError"] && Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
          /**
          * @return {?}
          */
          function () {
            return res.event.error.indexOf('Cannot match') > -1;
          }, false)) {
            _this14.show404Page();
          } else if (res instanceof _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterDataResolved"] && _this14.componentRef) {
            _this14.componentRef.destroy();

            _this14.componentRef = null;
          }
        });
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(ErrorHandler, [{
        key: "show401Page",
        value: function show401Page() {
          this.createErrorComponent({
            title: {
              key: 'AbpAccount::401Message',
              defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title
            },
            status: 401
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "show404Page",
        value: function show404Page() {
          this.createErrorComponent({
            title: {
              key: 'AbpAccount::404Message',
              defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title
            },
            status: 404
          });
        }
        /**
         * @private
         * @param {?=} message
         * @param {?=} title
         * @param {?=} body
         * @return {?}
         */

      }, {
        key: "showError",
        value: function showError(message, title, body) {
          if (body) {
            if (body.details) {
              message = body.details;
              title = body.message;
            } else {
              message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
            }
          }

          return this.confirmationService.error(message, title, {
            hideCancelBtn: true,
            yesText: 'AbpAccount::Close'
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["Navigate"](['/account/login'], null, {
            state: {
              redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_14__["RouterState"].url)
            }
          }));
        }
        /**
         * @param {?} instance
         * @return {?}
         */

      }, {
        key: "createErrorComponent",
        value: function createErrorComponent(instance) {
          var _this15 = this;

          /** @type {?} */
          var renderer = this.rendererFactory.createRenderer(null, null);
          /** @type {?} */

          var host = renderer.selectRootElement(document.body, true);
          this.componentRef = this.cfRes.resolveComponentFactory(HttpErrorWrapperComponent).create(this.injector);

          for (var key in this.componentRef.instance) {
            if (this.componentRef.instance.hasOwnProperty(key)) {
              this.componentRef.instance[key] = instance[key];
            }
          }

          this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;

          if (this.canCreateCustomError(
          /** @type {?} */
          instance.status)) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
          }

          this.appRef.attachView(this.componentRef.hostView);
          renderer.appendChild(host,
          /** @type {?} */
          this.componentRef.hostView.rootNodes[0]);
          /** @type {?} */

          var destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          this.componentRef.instance.destroy$ = destroy$;
          destroy$.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15.componentRef.destroy();

            _this15.componentRef = null;
          });
        }
        /**
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "canCreateCustomError",
        value: function canCreateCustomError(status) {
          var _this16 = this;

          return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(
          /**
          * @return {?}
          */
          function () {
            return _this16.httpErrorConfig.errorScreen.component && _this16.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
          });
        }
      }]);

      return ErrorHandler;
    }();

    ErrorHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ErrorHandler.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }, {
        type: ConfirmationService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ['HTTP_ERROR_CONFIG']
        }]
      }];
    };
    /** @nocollapse */


    ErrorHandler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ErrorHandler_Factory() {
        return new ErrorHandler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Actions"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ConfirmationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])("HTTP_ERROR_CONFIG"));
      },
      token: ErrorHandler,
      providedIn: "root"
    });

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


    function httpErrorConfigFactory() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
      /** @type {?} */
      {};

      if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
      }

      return (
        /** @type {?} */
        Object.assign({
          errorScreen: {}
        }, config)
      );
    }
    /** @type {?} */


    var HTTP_ERROR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_ERROR_CONFIG');
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
        return "0".concat(value).slice(-2);
      } else {
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
      return parseInt("".concat(value), 10);
    }

    var DateParserFormatter =
    /*#__PURE__*/
    function (_ng_bootstrap_ng_boot) {
      _inherits(DateParserFormatter, _ng_bootstrap_ng_boot);

      /**
       * @param {?} datePipe
       */
      function DateParserFormatter(datePipe) {
        var _this17;

        _classCallCheck(this, DateParserFormatter);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(DateParserFormatter).call(this));
        _this17.datePipe = datePipe;
        return _this17;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(DateParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');

            if (dateParts.length === 1 && isNumber(dateParts[0])) {
              return {
                year: toInteger(dateParts[0]),
                month: null,
                day: null
              };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
              return {
                year: toInteger(dateParts[0]),
                month: toInteger(dateParts[1]),
                day: null
              };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
              return {
                year: toInteger(dateParts[0]),
                month: toInteger(dateParts[1]),
                day: toInteger(dateParts[2])
              };
            }
          }

          return null;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date) {
          if (date && this.datePipe) {
            return this.datePipe.transform(new Date(date.year, date.month, date.day), 'shortDate');
          } else {
            return date ? "".concat(date.year, "-").concat(isNumber(date.month) ? padNumber(date.month) : '', "-").concat(isNumber(date.day) ? padNumber(date.day) : '') : '';
          }
        }
      }]);

      return DateParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"]);

    DateParserFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }];
    /** @nocollapse */

    DateParserFormatter.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

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
      var fn =
      /**
      * @return {?}
      */
      function fn() {
        __webpack_require__.e(
        /*! import() | chart-js */
        "chart-js").then(__webpack_require__.t.bind(null,
        /*! chart.js */
        "../../node_modules/chart.js/dist/Chart.js", 7)).then(
        /**
        * @return {?}
        */
        function () {
          return chartJsLoaded$.next(true);
        });
        /** @type {?} */


        var lazyLoadService = injector.get(_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["LazyLoadService"]);
        return lazyLoadService.load(null, 'style', styles, 'head', 'beforeend').toPromise();
      };

      return fn;
    }

    var ThemeSharedModule =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} errorHandler
       */
      function ThemeSharedModule(errorHandler) {
        _classCallCheck(this, ThemeSharedModule);

        this.errorHandler = errorHandler;
      }
      /**
       * @param {?=} options
       * @return {?}
       */


      _createClass(ThemeSharedModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
          /** @type {?} */
          {};
          return {
            ngModule: ThemeSharedModule,
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
              multi: true,
              deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
              useFactory: appendScript
            }, {
              provide: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
              useClass: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
            }, {
              provide: HTTP_ERROR_CONFIG,
              useValue: options.httpErrorConfig
            }, {
              provide: 'HTTP_ERROR_CONFIG',
              useFactory: httpErrorConfigFactory,
              deps: [HTTP_ERROR_CONFIG]
            }, {
              provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbDateParserFormatter"],
              useClass: DateParserFormatter
            }]
          };
        }
      }]);

      return ThemeSharedModule;
    }();

    ThemeSharedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_4__["ToastModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["NgxValidateCoreModule"]],
        declarations: [BreadcrumbComponent, ButtonComponent, ChartComponent, ConfirmationComponent, HttpErrorWrapperComponent, LoaderBarComponent, ModalComponent, TableEmptyMessageComponent, ToastComponent, SortOrderIconComponent, TableSortDirective],
        exports: [BreadcrumbComponent, ButtonComponent, ChartComponent, ConfirmationComponent, LoaderBarComponent, ModalComponent, TableEmptyMessageComponent, ToastComponent, SortOrderIconComponent, TableSortDirective],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]],
        entryComponents: [HttpErrorWrapperComponent]
      }]
    }];
    /** @nocollapse */

    ThemeSharedModule.ctorParameters = function () {
      return [{
        type: ErrorHandler
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/bounce.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var bounceIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      display: '{{ display }}'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time}} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} scale(0.0)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '0',
      transform: '{{ transform }} scale(0.8)',
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      transform: '{{ transform }} scale(1.0)',
      offset: 1
    })]))], {
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

    var collapseY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '*',
      overflow: 'hidden',
      'box-sizing': 'border-box'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '0',
      padding: '0px'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var collapseYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '0'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '-100%'
    }))], {
      params: {
        time: '500ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var collapseX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      width: '*',
      overflow: 'hidden',
      'box-sizing': 'border-box'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      width: '0',
      padding: '0px'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var expandY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '0',
      overflow: 'hidden',
      'box-sizing': 'border-box'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '*',
      padding: '*'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var expandYWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '-100%'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '0'
    }))], {
      params: {
        time: '500ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var expandX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animation"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      width: '0',
      overflow: 'hidden',
      'box-sizing': 'border-box'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('{{ time }} {{ easing }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      width: '*',
      padding: '*'
    }))], {
      params: {
        time: '350ms',
        easing: 'ease'
      }
    });
    /** @type {?} */

    var collapse = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '0',
      overflow: 'hidden'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      height: '*',
      overflow: 'hidden'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseY)), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandY))]);
    /** @type {?} */

    var collapseWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseWithMargin', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '-100%'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '0'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin), {
      params: {
        time: '400ms',
        easing: 'linear'
      }
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin))]);
    /** @type {?} */

    var collapseLinearWithMargin = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('collapseLinearWithMargin', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '-100%'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '0'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(collapseYWithMargin, {
      params: {
        time: '200ms',
        easing: 'linear'
      }
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["useAnimation"])(expandYWithMargin, {
      params: {
        time: '250ms',
        easing: 'linear'
      }
    }))]);
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/animations/slide.animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var slideFromBottom = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('slideFromBottom', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      'margin-top': '20px',
      opacity: '0'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
      opacity: '1',
      'margin-top': '0px'
    }))])]);
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

    function RootParams() {}

    if (false) {}
    /**
     * @record
     */


    function HttpErrorConfig() {}

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
      function Options() {}

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


    function SettingTab() {}

    if (false) {}
    /** @type {?} */


    var SETTING_TABS =
    /** @type {?} */
    [];
    /**
     * @param {?} tab
     * @return {?}
     */

    function addSettingTab(tab) {
      if (!Array.isArray(tab)) {
        tab = [tab];
      }

      SETTING_TABS.push.apply(SETTING_TABS, _toConsumableArray(tab));
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
      function Response() {}

      Statistics.Response = Response;

      if (false) {}
      /**
       * @record
       */


      function Data() {}

      Statistics.Data = Data;
      /**
       * @record
       */

      function Filter() {}

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
      function Options() {}

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


    var ToasterService =
    /*#__PURE__*/
    function (_AbstractToaster2) {
      _inherits(ToasterService, _AbstractToaster2);

      /**
       * @param {?} messageService
       */
      function ToasterService(messageService) {
        var _this18;

        _classCallCheck(this, ToasterService);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(ToasterService).call(this, messageService));
        _this18.messageService = messageService;
        return _this18;
      }
      /**
       * @param {?} messages
       * @return {?}
       */


      _createClass(ToasterService, [{
        key: "addAll",
        value: function addAll(messages) {
          var _this19 = this;

          this.messageService.addAll(messages.map(
          /**
          * @param {?} message
          * @return {?}
          */
          function (message) {
            return Object.assign({
              key: _this19.key
            }, message);
          }));
        }
      }]);

      return ToasterService;
    }(AbstractToaster);

    ToasterService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ToasterService.ctorParameters = function () {
      return [{
        type: primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }];
    };
    /** @nocollapse */


    ToasterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ToasterService_Factory() {
        return new ToasterService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
      },
      token: ToasterService,
      providedIn: "root"
    });

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

    /***/

  },

  /***/
  "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$":
  /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@angular/common/locales lazy ^\.\/.*\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$ namespace object ***!
    \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularCommonLocalesLazyRecursiveJs$IncludeAfAmArSAAsAzLatnBeBgBnBDBnINBsCaCaESVALENCIACsCyDaDeDeElEnGBEnEsEnEsUSEsMXEtEuFaFiEnFrFrFrCAGaGdGlGuHaHeHiHrHuHyIdIgIsItItJaKaKkKmKnKoKokEnEnLbLtLvEnMkMlMnMrMsMtNbNeNlNlBENnEnOrPaPaArabPlEnPtPtPTEnEnRoRuRwPaArabSiSkSlSqSrCyrlBASrCyrlSrLatnSvSwTaTeTgThTiTkTnTrTtUgUkUrUzLatnViWoXhYoZhHansZhHantZuJs$(module, exports, __webpack_require__) {
    var map = {
      "./af.js": ["../../node_modules/@angular/common/locales/af.js", 0],
      "./am.js": ["../../node_modules/@angular/common/locales/am.js", 1],
      "./ar-SA.js": ["../../node_modules/@angular/common/locales/ar-SA.js", 2],
      "./as.js": ["../../node_modules/@angular/common/locales/as.js", 3],
      "./az-Latn.js": ["../../node_modules/@angular/common/locales/az-Latn.js", 4],
      "./bas.js": ["../../node_modules/@angular/common/locales/bas.js", 5],
      "./be.js": ["../../node_modules/@angular/common/locales/be.js", 6],
      "./bg.js": ["../../node_modules/@angular/common/locales/bg.js", 7],
      "./bn-IN.js": ["../../node_modules/@angular/common/locales/bn-IN.js", 8],
      "./bs-Latn.js": ["../../node_modules/@angular/common/locales/bs-Latn.js", 9],
      "./bs.js": ["../../node_modules/@angular/common/locales/bs.js", 10],
      "./ca-ES-VALENCIA.js": ["../../node_modules/@angular/common/locales/ca-ES-VALENCIA.js", 11],
      "./ca.js": ["../../node_modules/@angular/common/locales/ca.js", 12],
      "./chr.js": ["../../node_modules/@angular/common/locales/chr.js", 13],
      "./cs.js": ["../../node_modules/@angular/common/locales/cs.js", 14],
      "./cy.js": ["../../node_modules/@angular/common/locales/cy.js", 15],
      "./da.js": ["../../node_modules/@angular/common/locales/da.js", 16],
      "./de.js": ["../../node_modules/@angular/common/locales/de.js", 17],
      "./dyo.js": ["../../node_modules/@angular/common/locales/dyo.js", 18],
      "./el.js": ["../../node_modules/@angular/common/locales/el.js", 19],
      "./en-GB.js": ["../../node_modules/@angular/common/locales/en-GB.js", 20],
      "./en.js": ["../../node_modules/@angular/common/locales/en.js", 21],
      "./es-MX.js": ["../../node_modules/@angular/common/locales/es-MX.js", 22],
      "./es-US.js": ["../../node_modules/@angular/common/locales/es-US.js", 23],
      "./es.js": ["../../node_modules/@angular/common/locales/es.js", 24],
      "./et.js": ["../../node_modules/@angular/common/locales/et.js", 25],
      "./eu.js": ["../../node_modules/@angular/common/locales/eu.js", 26],
      "./ewo.js": ["../../node_modules/@angular/common/locales/ewo.js", 27],
      "./extra/af.js": ["../../node_modules/@angular/common/locales/extra/af.js", 28],
      "./extra/am.js": ["../../node_modules/@angular/common/locales/extra/am.js", 29],
      "./extra/ar-SA.js": ["../../node_modules/@angular/common/locales/extra/ar-SA.js", 30],
      "./extra/as.js": ["../../node_modules/@angular/common/locales/extra/as.js", 31],
      "./extra/az-Latn.js": ["../../node_modules/@angular/common/locales/extra/az-Latn.js", 32],
      "./extra/bas.js": ["../../node_modules/@angular/common/locales/extra/bas.js", 33],
      "./extra/be.js": ["../../node_modules/@angular/common/locales/extra/be.js", 34],
      "./extra/bg.js": ["../../node_modules/@angular/common/locales/extra/bg.js", 35],
      "./extra/bn-IN.js": ["../../node_modules/@angular/common/locales/extra/bn-IN.js", 36],
      "./extra/bs-Latn.js": ["../../node_modules/@angular/common/locales/extra/bs-Latn.js", 37],
      "./extra/bs.js": ["../../node_modules/@angular/common/locales/extra/bs.js", 38],
      "./extra/ca-ES-VALENCIA.js": ["../../node_modules/@angular/common/locales/extra/ca-ES-VALENCIA.js", 39],
      "./extra/ca.js": ["../../node_modules/@angular/common/locales/extra/ca.js", 40],
      "./extra/chr.js": ["../../node_modules/@angular/common/locales/extra/chr.js", 41],
      "./extra/cs.js": ["../../node_modules/@angular/common/locales/extra/cs.js", 42],
      "./extra/cy.js": ["../../node_modules/@angular/common/locales/extra/cy.js", 43],
      "./extra/da.js": ["../../node_modules/@angular/common/locales/extra/da.js", 44],
      "./extra/de.js": ["../../node_modules/@angular/common/locales/extra/de.js", 45],
      "./extra/dyo.js": ["../../node_modules/@angular/common/locales/extra/dyo.js", 46],
      "./extra/el.js": ["../../node_modules/@angular/common/locales/extra/el.js", 47],
      "./extra/en-GB.js": ["../../node_modules/@angular/common/locales/extra/en-GB.js", 48],
      "./extra/en.js": ["../../node_modules/@angular/common/locales/extra/en.js", 49],
      "./extra/es-MX.js": ["../../node_modules/@angular/common/locales/extra/es-MX.js", 50],
      "./extra/es-US.js": ["../../node_modules/@angular/common/locales/extra/es-US.js", 51],
      "./extra/es.js": ["../../node_modules/@angular/common/locales/extra/es.js", 52],
      "./extra/et.js": ["../../node_modules/@angular/common/locales/extra/et.js", 53],
      "./extra/eu.js": ["../../node_modules/@angular/common/locales/extra/eu.js", 54],
      "./extra/ewo.js": ["../../node_modules/@angular/common/locales/extra/ewo.js", 55],
      "./extra/fa.js": ["../../node_modules/@angular/common/locales/extra/fa.js", 56],
      "./extra/fi.js": ["../../node_modules/@angular/common/locales/extra/fi.js", 57],
      "./extra/fr-CA.js": ["../../node_modules/@angular/common/locales/extra/fr-CA.js", 58],
      "./extra/fr.js": ["../../node_modules/@angular/common/locales/extra/fr.js", 59],
      "./extra/fur.js": ["../../node_modules/@angular/common/locales/extra/fur.js", 60],
      "./extra/ga.js": ["../../node_modules/@angular/common/locales/extra/ga.js", 61],
      "./extra/gd.js": ["../../node_modules/@angular/common/locales/extra/gd.js", 62],
      "./extra/gl.js": ["../../node_modules/@angular/common/locales/extra/gl.js", 63],
      "./extra/gsw.js": ["../../node_modules/@angular/common/locales/extra/gsw.js", 64],
      "./extra/gu.js": ["../../node_modules/@angular/common/locales/extra/gu.js", 65],
      "./extra/ha.js": ["../../node_modules/@angular/common/locales/extra/ha.js", 66],
      "./extra/he.js": ["../../node_modules/@angular/common/locales/extra/he.js", 67],
      "./extra/hi.js": ["../../node_modules/@angular/common/locales/extra/hi.js", 68],
      "./extra/hr.js": ["../../node_modules/@angular/common/locales/extra/hr.js", 69],
      "./extra/hu.js": ["../../node_modules/@angular/common/locales/extra/hu.js", 70],
      "./extra/hy.js": ["../../node_modules/@angular/common/locales/extra/hy.js", 71],
      "./extra/id.js": ["../../node_modules/@angular/common/locales/extra/id.js", 72],
      "./extra/ig.js": ["../../node_modules/@angular/common/locales/extra/ig.js", 73],
      "./extra/is.js": ["../../node_modules/@angular/common/locales/extra/is.js", 74],
      "./extra/it.js": ["../../node_modules/@angular/common/locales/extra/it.js", 75],
      "./extra/ja.js": ["../../node_modules/@angular/common/locales/extra/ja.js", 76],
      "./extra/ka.js": ["../../node_modules/@angular/common/locales/extra/ka.js", 77],
      "./extra/kam.js": ["../../node_modules/@angular/common/locales/extra/kam.js", 78],
      "./extra/kde.js": ["../../node_modules/@angular/common/locales/extra/kde.js", 79],
      "./extra/kk.js": ["../../node_modules/@angular/common/locales/extra/kk.js", 80],
      "./extra/km.js": ["../../node_modules/@angular/common/locales/extra/km.js", 81],
      "./extra/kn.js": ["../../node_modules/@angular/common/locales/extra/kn.js", 82],
      "./extra/ko.js": ["../../node_modules/@angular/common/locales/extra/ko.js", 83],
      "./extra/kok.js": ["../../node_modules/@angular/common/locales/extra/kok.js", 84],
      "./extra/lb.js": ["../../node_modules/@angular/common/locales/extra/lb.js", 85],
      "./extra/lt.js": ["../../node_modules/@angular/common/locales/extra/lt.js", 86],
      "./extra/lv.js": ["../../node_modules/@angular/common/locales/extra/lv.js", 87],
      "./extra/mas.js": ["../../node_modules/@angular/common/locales/extra/mas.js", 88],
      "./extra/mk.js": ["../../node_modules/@angular/common/locales/extra/mk.js", 89],
      "./extra/ml.js": ["../../node_modules/@angular/common/locales/extra/ml.js", 90],
      "./extra/mn.js": ["../../node_modules/@angular/common/locales/extra/mn.js", 91],
      "./extra/mr.js": ["../../node_modules/@angular/common/locales/extra/mr.js", 92],
      "./extra/ms.js": ["../../node_modules/@angular/common/locales/extra/ms.js", 93],
      "./extra/mt.js": ["../../node_modules/@angular/common/locales/extra/mt.js", 94],
      "./extra/nb.js": ["../../node_modules/@angular/common/locales/extra/nb.js", 95],
      "./extra/ne.js": ["../../node_modules/@angular/common/locales/extra/ne.js", 96],
      "./extra/nl-BE.js": ["../../node_modules/@angular/common/locales/extra/nl-BE.js", 97],
      "./extra/nl.js": ["../../node_modules/@angular/common/locales/extra/nl.js", 98],
      "./extra/nn.js": ["../../node_modules/@angular/common/locales/extra/nn.js", 99],
      "./extra/or.js": ["../../node_modules/@angular/common/locales/extra/or.js", 100],
      "./extra/pa-Arab.js": ["../../node_modules/@angular/common/locales/extra/pa-Arab.js", 101],
      "./extra/pa-Guru.js": ["../../node_modules/@angular/common/locales/extra/pa-Guru.js", 102],
      "./extra/pa.js": ["../../node_modules/@angular/common/locales/extra/pa.js", 103],
      "./extra/pl.js": ["../../node_modules/@angular/common/locales/extra/pl.js", 104],
      "./extra/pt-PT.js": ["../../node_modules/@angular/common/locales/extra/pt-PT.js", 105],
      "./extra/pt.js": ["../../node_modules/@angular/common/locales/extra/pt.js", 106],
      "./extra/ro.js": ["../../node_modules/@angular/common/locales/extra/ro.js", 107],
      "./extra/ru.js": ["../../node_modules/@angular/common/locales/extra/ru.js", 108],
      "./extra/rw.js": ["../../node_modules/@angular/common/locales/extra/rw.js", 109],
      "./extra/ses.js": ["../../node_modules/@angular/common/locales/extra/ses.js", 110],
      "./extra/shi-Latn.js": ["../../node_modules/@angular/common/locales/extra/shi-Latn.js", 111],
      "./extra/shi.js": ["../../node_modules/@angular/common/locales/extra/shi.js", 112],
      "./extra/si.js": ["../../node_modules/@angular/common/locales/extra/si.js", 113],
      "./extra/sk.js": ["../../node_modules/@angular/common/locales/extra/sk.js", 114],
      "./extra/sl.js": ["../../node_modules/@angular/common/locales/extra/sl.js", 115],
      "./extra/smn.js": ["../../node_modules/@angular/common/locales/extra/smn.js", 116],
      "./extra/sq.js": ["../../node_modules/@angular/common/locales/extra/sq.js", 117],
      "./extra/sr-Cyrl-BA.js": ["../../node_modules/@angular/common/locales/extra/sr-Cyrl-BA.js", 118],
      "./extra/sr-Cyrl.js": ["../../node_modules/@angular/common/locales/extra/sr-Cyrl.js", 119],
      "./extra/sr-Latn.js": ["../../node_modules/@angular/common/locales/extra/sr-Latn.js", 120],
      "./extra/sv.js": ["../../node_modules/@angular/common/locales/extra/sv.js", 121],
      "./extra/sw.js": ["../../node_modules/@angular/common/locales/extra/sw.js", 122],
      "./extra/ta.js": ["../../node_modules/@angular/common/locales/extra/ta.js", 123],
      "./extra/te.js": ["../../node_modules/@angular/common/locales/extra/te.js", 124],
      "./extra/tg.js": ["../../node_modules/@angular/common/locales/extra/tg.js", 125],
      "./extra/th.js": ["../../node_modules/@angular/common/locales/extra/th.js", 126],
      "./extra/ti.js": ["../../node_modules/@angular/common/locales/extra/ti.js", 127],
      "./extra/tk.js": ["../../node_modules/@angular/common/locales/extra/tk.js", 128],
      "./extra/tr.js": ["../../node_modules/@angular/common/locales/extra/tr.js", 129],
      "./extra/tt.js": ["../../node_modules/@angular/common/locales/extra/tt.js", 130],
      "./extra/ug.js": ["../../node_modules/@angular/common/locales/extra/ug.js", 131],
      "./extra/uk.js": ["../../node_modules/@angular/common/locales/extra/uk.js", 132],
      "./extra/ur.js": ["../../node_modules/@angular/common/locales/extra/ur.js", 133],
      "./extra/uz-Latn.js": ["../../node_modules/@angular/common/locales/extra/uz-Latn.js", 134],
      "./extra/vai-Latn.js": ["../../node_modules/@angular/common/locales/extra/vai-Latn.js", 135],
      "./extra/vi.js": ["../../node_modules/@angular/common/locales/extra/vi.js", 136],
      "./extra/wo.js": ["../../node_modules/@angular/common/locales/extra/wo.js", 137],
      "./extra/yo.js": ["../../node_modules/@angular/common/locales/extra/yo.js", 138],
      "./extra/zh-Hans.js": ["../../node_modules/@angular/common/locales/extra/zh-Hans.js", 139],
      "./extra/zh-Hant.js": ["../../node_modules/@angular/common/locales/extra/zh-Hant.js", 140],
      "./extra/zu.js": ["../../node_modules/@angular/common/locales/extra/zu.js", 141],
      "./fa.js": ["../../node_modules/@angular/common/locales/fa.js", 142],
      "./fi.js": ["../../node_modules/@angular/common/locales/fi.js", 143],
      "./fr-CA.js": ["../../node_modules/@angular/common/locales/fr-CA.js", 144],
      "./fr.js": ["../../node_modules/@angular/common/locales/fr.js", 145],
      "./fur.js": ["../../node_modules/@angular/common/locales/fur.js", 146],
      "./ga.js": ["../../node_modules/@angular/common/locales/ga.js", 147],
      "./gd.js": ["../../node_modules/@angular/common/locales/gd.js", 148],
      "./gl.js": ["../../node_modules/@angular/common/locales/gl.js", 149],
      "./gsw.js": ["../../node_modules/@angular/common/locales/gsw.js", 150],
      "./gu.js": ["../../node_modules/@angular/common/locales/gu.js", 151],
      "./ha.js": ["../../node_modules/@angular/common/locales/ha.js", 152],
      "./he.js": ["../../node_modules/@angular/common/locales/he.js", 153],
      "./hi.js": ["../../node_modules/@angular/common/locales/hi.js", 154],
      "./hr.js": ["../../node_modules/@angular/common/locales/hr.js", 155],
      "./hu.js": ["../../node_modules/@angular/common/locales/hu.js", 156],
      "./hy.js": ["../../node_modules/@angular/common/locales/hy.js", 157],
      "./id.js": ["../../node_modules/@angular/common/locales/id.js", 158],
      "./ig.js": ["../../node_modules/@angular/common/locales/ig.js", 159],
      "./is.js": ["../../node_modules/@angular/common/locales/is.js", 160],
      "./it.js": ["../../node_modules/@angular/common/locales/it.js", 161],
      "./ja.js": ["../../node_modules/@angular/common/locales/ja.js", 162],
      "./ka.js": ["../../node_modules/@angular/common/locales/ka.js", 163],
      "./kam.js": ["../../node_modules/@angular/common/locales/kam.js", 164],
      "./kde.js": ["../../node_modules/@angular/common/locales/kde.js", 165],
      "./kk.js": ["../../node_modules/@angular/common/locales/kk.js", 166],
      "./km.js": ["../../node_modules/@angular/common/locales/km.js", 167],
      "./kn.js": ["../../node_modules/@angular/common/locales/kn.js", 168],
      "./ko.js": ["../../node_modules/@angular/common/locales/ko.js", 169],
      "./kok.js": ["../../node_modules/@angular/common/locales/kok.js", 170],
      "./lb.js": ["../../node_modules/@angular/common/locales/lb.js", 171],
      "./lt.js": ["../../node_modules/@angular/common/locales/lt.js", 172],
      "./lv.js": ["../../node_modules/@angular/common/locales/lv.js", 173],
      "./mas.js": ["../../node_modules/@angular/common/locales/mas.js", 174],
      "./mk.js": ["../../node_modules/@angular/common/locales/mk.js", 175],
      "./ml.js": ["../../node_modules/@angular/common/locales/ml.js", 176],
      "./mn.js": ["../../node_modules/@angular/common/locales/mn.js", 177],
      "./mr.js": ["../../node_modules/@angular/common/locales/mr.js", 178],
      "./ms.js": ["../../node_modules/@angular/common/locales/ms.js", 179],
      "./mt.js": ["../../node_modules/@angular/common/locales/mt.js", 180],
      "./nb.js": ["../../node_modules/@angular/common/locales/nb.js", 181],
      "./ne.js": ["../../node_modules/@angular/common/locales/ne.js", 182],
      "./nl-BE.js": ["../../node_modules/@angular/common/locales/nl-BE.js", 183],
      "./nl.js": ["../../node_modules/@angular/common/locales/nl.js", 184],
      "./nn.js": ["../../node_modules/@angular/common/locales/nn.js", 185],
      "./or.js": ["../../node_modules/@angular/common/locales/or.js", 186],
      "./pa-Arab.js": ["../../node_modules/@angular/common/locales/pa-Arab.js", 187],
      "./pa-Guru.js": ["../../node_modules/@angular/common/locales/pa-Guru.js", 188],
      "./pa.js": ["../../node_modules/@angular/common/locales/pa.js", 189],
      "./pl.js": ["../../node_modules/@angular/common/locales/pl.js", 190],
      "./pt-PT.js": ["../../node_modules/@angular/common/locales/pt-PT.js", 191],
      "./pt.js": ["../../node_modules/@angular/common/locales/pt.js", 192],
      "./ro.js": ["../../node_modules/@angular/common/locales/ro.js", 193],
      "./ru.js": ["../../node_modules/@angular/common/locales/ru.js", 194],
      "./rw.js": ["../../node_modules/@angular/common/locales/rw.js", 195],
      "./ses.js": ["../../node_modules/@angular/common/locales/ses.js", 196],
      "./shi-Latn.js": ["../../node_modules/@angular/common/locales/shi-Latn.js", 197],
      "./shi.js": ["../../node_modules/@angular/common/locales/shi.js", 198],
      "./si.js": ["../../node_modules/@angular/common/locales/si.js", 199],
      "./sk.js": ["../../node_modules/@angular/common/locales/sk.js", 200],
      "./sl.js": ["../../node_modules/@angular/common/locales/sl.js", 201],
      "./smn.js": ["../../node_modules/@angular/common/locales/smn.js", 202],
      "./sq.js": ["../../node_modules/@angular/common/locales/sq.js", 203],
      "./sr-Cyrl-BA.js": ["../../node_modules/@angular/common/locales/sr-Cyrl-BA.js", 204],
      "./sr-Cyrl.js": ["../../node_modules/@angular/common/locales/sr-Cyrl.js", 205],
      "./sr-Latn.js": ["../../node_modules/@angular/common/locales/sr-Latn.js", 206],
      "./sv.js": ["../../node_modules/@angular/common/locales/sv.js", 207],
      "./sw.js": ["../../node_modules/@angular/common/locales/sw.js", 208],
      "./ta.js": ["../../node_modules/@angular/common/locales/ta.js", 209],
      "./te.js": ["../../node_modules/@angular/common/locales/te.js", 210],
      "./tg.js": ["../../node_modules/@angular/common/locales/tg.js", 211],
      "./th.js": ["../../node_modules/@angular/common/locales/th.js", 212],
      "./ti.js": ["../../node_modules/@angular/common/locales/ti.js", 213],
      "./tk.js": ["../../node_modules/@angular/common/locales/tk.js", 214],
      "./tr.js": ["../../node_modules/@angular/common/locales/tr.js", 215],
      "./tt.js": ["../../node_modules/@angular/common/locales/tt.js", 216],
      "./ug.js": ["../../node_modules/@angular/common/locales/ug.js", 217],
      "./uk.js": ["../../node_modules/@angular/common/locales/uk.js", 218],
      "./ur.js": ["../../node_modules/@angular/common/locales/ur.js", 219],
      "./uz-Latn.js": ["../../node_modules/@angular/common/locales/uz-Latn.js", 220],
      "./vai-Latn.js": ["../../node_modules/@angular/common/locales/vai-Latn.js", 221],
      "./vi.js": ["../../node_modules/@angular/common/locales/vi.js", 222],
      "./wo.js": ["../../node_modules/@angular/common/locales/wo.js", 223],
      "./yo.js": ["../../node_modules/@angular/common/locales/yo.js", 224],
      "./zh-Hans.js": ["../../node_modules/@angular/common/locales/zh-Hans.js", 225],
      "./zh-Hant.js": ["../../node_modules/@angular/common/locales/zh-Hant.js", 226],
      "./zu.js": ["../../node_modules/@angular/common/locales/zu.js", 227]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__.t(id, 7);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html":
  /*!****************************************************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.html ***!
    \****************************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsPackagesThemeBasicSrcLibComponentsApplicationLayoutApplicationLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav\r\n  class=\"navbar navbar-expand-md navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container \">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <ng-container\r\n            *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n            [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n          >\r\n          </ng-container>\r\n\r\n          <ng-template #defaultLink let-route>\r\n            <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n              <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n                ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownLink let-route>\r\n            <li\r\n              #navbarRootDropdown\r\n              *abpPermission=\"route.requiredPolicy\"\r\n              [abpVisibility]=\"routeContainer\"\r\n              class=\"nav-item dropdown\"\r\n              display=\"static\"\r\n              (click)=\"\r\n                navbarRootDropdown.expand ? (navbarRootDropdown.expand = false) : (navbarRootDropdown.expand = true)\r\n              \"\r\n            >\r\n              <a\r\n                class=\"nav-link dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i> {{ route.name | abpLocalization }}\r\n              </a>\r\n              <div\r\n                #routeContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && navbarRootDropdown.expand\"\r\n              >\r\n                <ng-template\r\n                  #forTemplate\r\n                  ngFor\r\n                  [ngForOf]=\"route.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #childWrapper let-child>\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n            ></ng-template>\r\n          </ng-template>\r\n\r\n          <ng-template #defaultChild let-child>\r\n            <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n                <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                {{ child.name | abpLocalization }}</a\r\n              >\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownChild let-child>\r\n            <div\r\n              [abpVisibility]=\"childrenContainer\"\r\n              class=\"dropdown-submenu\"\r\n              ngbDropdown\r\n              #dropdownSubmenu=\"ngbDropdown\"\r\n              [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n              placement=\"right-top\"\r\n              [autoClose]=\"true\"\r\n              *abpPermission=\"child.requiredPolicy\"\r\n              (openChange)=\"openChange($event, childrenContainer)\"\r\n            >\r\n              <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n                <a\r\n                  abpEllipsis=\"210px\"\r\n                  [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n                  role=\"button\"\r\n                  class=\"btn d-block text-left dropdown-toggle\"\r\n                >\r\n                  <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                  {{ child.name | abpLocalization }}\r\n                </a>\r\n              </div>\r\n              <div\r\n                #childrenContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                [class.abp-collapsed-height]=\"smallScreen\"\r\n                [class.d-block]=\"smallScreen\"\r\n                [class.abp-mh-25]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n              >\r\n                <ng-template\r\n                  ngFor\r\n                  [ngForOf]=\"child.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav\">\r\n          <ng-container\r\n            *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n            [ngTemplateOutlet]=\"element\"\r\n          ></ng-container>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div [@slideFromBottom]=\"outlet && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\" class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast></abp-toast>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n\r\n<ng-template #language>\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li *ngIf=\"(currentUser$ | async)?.isAuthenticated\" class=\"nav-item\">\r\n    <div ngbDropdown class=\"dropdown\" #currentUserDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.abp-collapsed-height]=\"smallScreen\"\r\n        [class.d-block]=\"smallScreen\"\r\n        [class.abp-mh-25]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"><i class=\"fa fa-cog mr-1\"></i>{{\r\n          'AbpAccount::ManageYourProfile' | abpLocalization\r\n        }}</a>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"fa fa-power-off mr-1\"></i>{{\r\n          'AbpUi::Logout' | abpLocalization\r\n        }}</a>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!***************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/tslib/tslib.es6.js ***!
    \***************************************************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "../../packages/account-config/src/lib/account-config.module.ts":
  /*!****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/account-config.module.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */

  /***/
  function packagesAccountConfigSrcLibAccountConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function () {
      return accountOptionsFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function () {
      return ACCOUNT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function () {
      return AccountConfigModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_account_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/account-config.service */
    "../../packages/account-config/src/lib/services/account-config.service.ts");

    var AccountConfigModule_1;

    function accountOptionsFactory(options) {
      return Object.assign({
        redirectUrl: '/'
      }, options);
    }

    var ACCOUNT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ACCOUNT_OPTIONS');

    var AccountConfigModule = AccountConfigModule_1 =
    /*#__PURE__*/
    function () {
      function AccountConfigModule() {
        _classCallCheck(this, AccountConfigModule);
      }

      _createClass(AccountConfigModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: AccountConfigModule_1,
            providers: [{
              provide: ACCOUNT_OPTIONS,
              useValue: options
            }, {
              provide: 'ACCOUNT_OPTIONS',
              useFactory: accountOptionsFactory,
              deps: [ACCOUNT_OPTIONS]
            }]
          };
        }
      }]);

      return AccountConfigModule;
    }();

    AccountConfigModule = AccountConfigModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"]],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
        multi: true,
        deps: [_services_account_config_service__WEBPACK_IMPORTED_MODULE_4__["AccountConfigService"]],
        useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"]
      }]
    })], AccountConfigModule);
    /***/
  },

  /***/
  "../../packages/account-config/src/lib/services/account-config.service.ts":
  /*!**************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/lib/services/account-config.service.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: AccountConfigService */

  /***/
  function packagesAccountConfigSrcLibServicesAccountConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountConfigService", function () {
      return AccountConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var AccountConfigService = function AccountConfigService(router, restService) {
      _classCallCheck(this, AccountConfigService);

      this.router = router;
      this.restService = restService;
      Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])({
        name: 'AbpAccount::Menu:Account',
        path: 'account',
        invisible: true,
        layout: "application"
        /* application */
        ,
        children: [{
          path: 'login',
          name: 'AbpAccount::Login',
          order: 1
        }, {
          path: 'register',
          name: 'AbpAccount::Register',
          order: 2
        }, {
          path: 'manage-profile',
          name: 'AbpAccount::ManageYourProfile',
          order: 3
        }]
      });
    };

    AccountConfigService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
      }];
    };

    AccountConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])], AccountConfigService);
    /***/
  },

  /***/
  "../../packages/account-config/src/public-api.ts":
  /*!*************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/account-config/src/public-api.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AccountConfigService, accountOptionsFactory, ACCOUNT_OPTIONS, AccountConfigModule */

  /***/
  function packagesAccountConfigSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/services/account-config.service */
    "../../packages/account-config/src/lib/services/account-config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountConfigService", function () {
      return _lib_services_account_config_service__WEBPACK_IMPORTED_MODULE_1__["AccountConfigService"];
    });
    /* harmony import */


    var _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/account-config.module */
    "../../packages/account-config/src/lib/account-config.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "accountOptionsFactory", function () {
      return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["accountOptionsFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ACCOUNT_OPTIONS", function () {
      return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountConfigModule", function () {
      return _lib_account_config_module__WEBPACK_IMPORTED_MODULE_2__["AccountConfigModule"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/abstracts/index.ts":
  /*!************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/abstracts/index.ts ***!
    \************************************************************************************************/

  /*! exports provided: AbstractNgModelComponent */

  /***/
  function packagesCoreSrcLibAbstractsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ng_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ng-model.component */
    "../../packages/core/src/lib/abstracts/ng-model.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function () {
      return _ng_model_component__WEBPACK_IMPORTED_MODULE_1__["AbstractNgModelComponent"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/abstracts/ng-model.component.ts":
  /*!*************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/abstracts/ng-model.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: AbstractNgModelComponent */

  /***/
  function packagesCoreSrcLibAbstractsNgModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function () {
      return AbstractNgModelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AbstractNgModelComponent =
    /*#__PURE__*/
    function () {
      function AbstractNgModelComponent(injector) {
        _classCallCheck(this, AbstractNgModelComponent);

        this.injector = injector;
        this.cdRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]);
      }

      _createClass(AbstractNgModelComponent, [{
        key: "notifyValueChange",
        value: function notifyValueChange() {
          if (this.onChange) {
            this.onChange(this.value);
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this20 = this;

          this._value = value;
          setTimeout(function () {
            return _this20.cdRef.detectChanges();
          }, 0);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "value",
        set: function set(value) {
          this._value = value;
          this.notifyValueChange();
        },
        get: function get() {
          return this._value;
        }
      }]);

      return AbstractNgModelComponent;
    }();

    AbstractNgModelComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], AbstractNgModelComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])], AbstractNgModelComponent.prototype, "value", null);
    AbstractNgModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-abstract-ng-model',
      template: ''
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])], AbstractNgModelComponent);
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/config.actions.ts":
  /*!*******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/config.actions.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: PatchRouteByName, GetAppConfiguration, AddRoute */

  /***/
  function packagesCoreSrcLibActionsConfigActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function () {
      return PatchRouteByName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function () {
      return GetAppConfiguration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoute", function () {
      return AddRoute;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var PatchRouteByName = function PatchRouteByName(name, newValue) {
      _classCallCheck(this, PatchRouteByName);

      this.name = name;
      this.newValue = newValue;
    };

    PatchRouteByName.type = '[Config] Patch Route By Name';

    var GetAppConfiguration = function GetAppConfiguration() {
      _classCallCheck(this, GetAppConfiguration);
    };

    GetAppConfiguration.type = '[Config] Get App Configuration';
    /**
     * @see usage: https://github.com/abpframework/abp/pull/2425#issue-355018812
     */

    var AddRoute = function AddRoute(payload) {
      _classCallCheck(this, AddRoute);

      this.payload = payload;
    };

    AddRoute.type = '[Config] Add Route';
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/index.ts":
  /*!**********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/index.ts ***!
    \**********************************************************************************************/

  /*! exports provided: PatchRouteByName, GetAppConfiguration, AddRoute, StartLoader, StopLoader, GetProfile, UpdateProfile, ChangePassword, AddReplaceableComponent, RestOccurError, SetLanguage, SetTenant */

  /***/
  function packagesCoreSrcLibActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config.actions */
    "../../packages/core/src/lib/actions/config.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function () {
      return _config_actions__WEBPACK_IMPORTED_MODULE_1__["PatchRouteByName"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function () {
      return _config_actions__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddRoute", function () {
      return _config_actions__WEBPACK_IMPORTED_MODULE_1__["AddRoute"];
    });
    /* harmony import */


    var _loader_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loader.actions */
    "../../packages/core/src/lib/actions/loader.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StartLoader", function () {
      return _loader_actions__WEBPACK_IMPORTED_MODULE_2__["StartLoader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StopLoader", function () {
      return _loader_actions__WEBPACK_IMPORTED_MODULE_2__["StopLoader"];
    });
    /* harmony import */


    var _profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.actions */
    "../../packages/core/src/lib/actions/profile.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetProfile", function () {
      return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfile", function () {
      return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChangePassword", function () {
      return _profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"];
    });
    /* harmony import */


    var _replaceable_components_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./replaceable-components.actions */
    "../../packages/core/src/lib/actions/replaceable-components.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddReplaceableComponent", function () {
      return _replaceable_components_actions__WEBPACK_IMPORTED_MODULE_4__["AddReplaceableComponent"];
    });
    /* harmony import */


    var _rest_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rest.actions */
    "../../packages/core/src/lib/actions/rest.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RestOccurError", function () {
      return _rest_actions__WEBPACK_IMPORTED_MODULE_5__["RestOccurError"];
    });
    /* harmony import */


    var _session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session.actions */
    "../../packages/core/src/lib/actions/session.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SetLanguage", function () {
      return _session_actions__WEBPACK_IMPORTED_MODULE_6__["SetLanguage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SetTenant", function () {
      return _session_actions__WEBPACK_IMPORTED_MODULE_6__["SetTenant"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/actions/loader.actions.ts":
  /*!*******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/loader.actions.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: StartLoader, StopLoader */

  /***/
  function packagesCoreSrcLibActionsLoaderActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartLoader", function () {
      return StartLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopLoader", function () {
      return StopLoader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var StartLoader = function StartLoader(payload) {
      _classCallCheck(this, StartLoader);

      this.payload = payload;
    };

    StartLoader.type = '[Loader] Start';

    var StopLoader = function StopLoader(payload) {
      _classCallCheck(this, StopLoader);

      this.payload = payload;
    };

    StopLoader.type = '[Loader] Stop';
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/profile.actions.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/profile.actions.ts ***!
    \********************************************************************************************************/

  /*! exports provided: GetProfile, UpdateProfile, ChangePassword */

  /***/
  function packagesCoreSrcLibActionsProfileActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetProfile", function () {
      return GetProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfile", function () {
      return UpdateProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePassword", function () {
      return ChangePassword;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var GetProfile = function GetProfile() {
      _classCallCheck(this, GetProfile);
    };

    GetProfile.type = '[Profile] Get';

    var UpdateProfile = function UpdateProfile(payload) {
      _classCallCheck(this, UpdateProfile);

      this.payload = payload;
    };

    UpdateProfile.type = '[Profile] Update';

    var ChangePassword = function ChangePassword(payload) {
      _classCallCheck(this, ChangePassword);

      this.payload = payload;
    };

    ChangePassword.type = '[Profile] Change Password';
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/replaceable-components.actions.ts":
  /*!***********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/replaceable-components.actions.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: AddReplaceableComponent */

  /***/
  function packagesCoreSrcLibActionsReplaceableComponentsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddReplaceableComponent", function () {
      return AddReplaceableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var AddReplaceableComponent = function AddReplaceableComponent(payload) {
      _classCallCheck(this, AddReplaceableComponent);

      this.payload = payload;
    };

    AddReplaceableComponent.type = '[ReplaceableComponents] Add';
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/rest.actions.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/rest.actions.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: RestOccurError */

  /***/
  function packagesCoreSrcLibActionsRestActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestOccurError", function () {
      return RestOccurError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var RestOccurError = function RestOccurError(payload) {
      _classCallCheck(this, RestOccurError);

      this.payload = payload;
    };

    RestOccurError.type = '[Rest] Error';
    /***/
  },

  /***/
  "../../packages/core/src/lib/actions/session.actions.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/actions/session.actions.ts ***!
    \********************************************************************************************************/

  /*! exports provided: SetLanguage, SetTenant */

  /***/
  function packagesCoreSrcLibActionsSessionActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetLanguage", function () {
      return SetLanguage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetTenant", function () {
      return SetTenant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var SetLanguage = function SetLanguage(payload) {
      _classCallCheck(this, SetLanguage);

      this.payload = payload;
    };

    SetLanguage.type = '[Session] Set Language';

    var SetTenant = function SetTenant(payload) {
      _classCallCheck(this, SetTenant);

      this.payload = payload;
    };

    SetTenant.type = '[Session] Set Tenant';
    /***/
  },

  /***/
  "../../packages/core/src/lib/components/dynamic-layout.component.ts":
  /*!********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/dynamic-layout.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: DynamicLayoutComponent */

  /***/
  function packagesCoreSrcLibComponentsDynamicLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function () {
      return DynamicLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _states_config_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../states/config.state */
    "../../packages/core/src/lib/states/config.state.ts");
    /* harmony import */


    var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../utils/rxjs-utils */
    "../../packages/core/src/lib/utils/rxjs-utils.ts");

    var DynamicLayoutComponent =
    /*#__PURE__*/
    function () {
      function DynamicLayoutComponent(router, route, store) {
        var _this21 = this;

        _classCallCheck(this, DynamicLayoutComponent);

        this.router = router;
        this.route = route;
        this.store = store;

        var _this$store$selectSna = this.store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getAll),
            layouts = _this$store$selectSna.requirements.layouts,
            routes = _this$store$selectSna.routes;

        if ((this.route.snapshot.data || {}).layout) {
          this.layout = layouts.filter(function (l) {
            return !!l;
          }).find(function (l) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
              return l.type.toLowerCase().indexOf(_this21.route.snapshot.data.layout);
            }, -1) > -1;
          });
        }

        this.router.events.pipe(Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_7__["takeUntilDestroy"])(this)).subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            var segments = _this21.router.parseUrl(event.url).root.children.primary.segments;

            var layout = (_this21.route.snapshot.data || {}).layout || findLayout(segments, routes);
            _this21.layout = layouts.filter(function (l) {
              return !!l;
            }).find(function (l) {
              return Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
                return l.type.toLowerCase().indexOf(layout);
              }, -1) > -1;
            });
          }
        });
      }

      _createClass(DynamicLayoutComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return DynamicLayoutComponent;
    }();

    DynamicLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_states_config_state__WEBPACK_IMPORTED_MODULE_6__["ConfigState"].getOne('requirements')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])], DynamicLayoutComponent.prototype, "requirements$", void 0);
    DynamicLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-dynamic-layout',
      template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet><ng-container *ngComponentOutlet=\"layout\"></ng-container></ng-template>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], DynamicLayoutComponent);

    function findLayout(segments, routes) {
      var layout = "empty"
      /* empty */
      ;
      var route = routes.reduce(function (acc, val) {
        return val.wrapper ? [].concat(_toConsumableArray(acc), _toConsumableArray(val.children)) : [].concat(_toConsumableArray(acc), [val]);
      }, []).find(function (r) {
        return r.path === segments[0].path;
      });

      if (route) {
        if (route.layout) {
          layout = route.layout;
        }

        if (route.children && route.children.length && segments.length > 1) {
          var child = route.children.find(function (c) {
            return c.path === segments[1].path;
          });

          if (child && child.layout) {
            layout = child.layout;
          }
        }
      }

      return layout;
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/components/index.ts":
  /*!*************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/index.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DynamicLayoutComponent, ReplaceableRouteContainerComponent, RouterOutletComponent */

  /***/
  function packagesCoreSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dynamic-layout.component */
    "../../packages/core/src/lib/components/dynamic-layout.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function () {
      return _dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"];
    });
    /* harmony import */


    var _replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./replaceable-route-container.component */
    "../../packages/core/src/lib/components/replaceable-route-container.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableRouteContainerComponent", function () {
      return _replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_2__["ReplaceableRouteContainerComponent"];
    });
    /* harmony import */


    var _router_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./router-outlet.component */
    "../../packages/core/src/lib/components/router-outlet.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function () {
      return _router_outlet_component__WEBPACK_IMPORTED_MODULE_3__["RouterOutletComponent"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/components/replaceable-route-container.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/replaceable-route-container.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: ReplaceableRouteContainerComponent */

  /***/
  function packagesCoreSrcLibComponentsReplaceableRouteContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableRouteContainerComponent", function () {
      return ReplaceableRouteContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../states/replaceable-components.state */
    "../../packages/core/src/lib/states/replaceable-components.state.ts");
    /* harmony import */


    var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utils/rxjs-utils */
    "../../packages/core/src/lib/utils/rxjs-utils.ts");

    var ReplaceableRouteContainerComponent =
    /*#__PURE__*/
    function () {
      function ReplaceableRouteContainerComponent(route, store) {
        _classCallCheck(this, ReplaceableRouteContainerComponent);

        this.route = route;
        this.store = store;
      }

      _createClass(ReplaceableRouteContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.defaultComponent = this.route.snapshot.data.replaceableComponent.defaultComponent;
          this.componentKey = this.route.snapshot.data.replaceableComponent.key;
          this.store.select(_states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_5__["ReplaceableComponentsState"].getComponent(this.componentKey)).pipe(Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_6__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function () {
            var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _this22.externalComponent = res.component;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ReplaceableRouteContainerComponent;
    }();

    ReplaceableRouteContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    ReplaceableRouteContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-replaceable-route-container',
      template: "\n    <ng-container *ngComponentOutlet=\"externalComponent || defaultComponent\"></ng-container>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], ReplaceableRouteContainerComponent);
    /***/
  },

  /***/
  "../../packages/core/src/lib/components/router-outlet.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/components/router-outlet.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: RouterOutletComponent */

  /***/
  function packagesCoreSrcLibComponentsRouterOutletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function () {
      return RouterOutletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var RouterOutletComponent = function RouterOutletComponent() {
      _classCallCheck(this, RouterOutletComponent);
    };

    RouterOutletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-router-outlet',
      template: "\n    <router-outlet></router-outlet>\n  "
    })], RouterOutletComponent);
    /***/
  },

  /***/
  "../../packages/core/src/lib/constants/different-locales.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/constants/different-locales.ts ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function packagesCoreSrcLibConstantsDifferentLocalesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // Different locales from .NET
    // Key is .NET locale, value is Angular locale

    /* harmony default export */


    __webpack_exports__["default"] = {
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
      'yo-Latn': 'yo'
    };
    /***/
  },

  /***/
  "../../packages/core/src/lib/core.module.ts":
  /*!********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/core.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: CoreModule */

  /***/
  function packagesCoreSrcLibCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/storage-plugin */
    "../../node_modules/@ngxs/storage-plugin/fesm2015/ngxs-storage-plugin.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./abstracts/ng-model.component */
    "../../packages/core/src/lib/abstracts/ng-model.component.ts");
    /* harmony import */


    var _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dynamic-layout.component */
    "../../packages/core/src/lib/components/dynamic-layout.component.ts");
    /* harmony import */


    var _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/router-outlet.component */
    "../../packages/core/src/lib/components/router-outlet.component.ts");
    /* harmony import */


    var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./directives/autofocus.directive */
    "../../packages/core/src/lib/directives/autofocus.directive.ts");
    /* harmony import */


    var _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/debounce.directive */
    "../../packages/core/src/lib/directives/debounce.directive.ts");
    /* harmony import */


    var _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/ellipsis.directive */
    "../../packages/core/src/lib/directives/ellipsis.directive.ts");
    /* harmony import */


    var _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./directives/for.directive */
    "../../packages/core/src/lib/directives/for.directive.ts");
    /* harmony import */


    var _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./directives/form-submit.directive */
    "../../packages/core/src/lib/directives/form-submit.directive.ts");
    /* harmony import */


    var _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./directives/permission.directive */
    "../../packages/core/src/lib/directives/permission.directive.ts");
    /* harmony import */


    var _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./directives/stop-propagation.directive */
    "../../packages/core/src/lib/directives/stop-propagation.directive.ts");
    /* harmony import */


    var _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./directives/visibility.directive */
    "../../packages/core/src/lib/directives/visibility.directive.ts");
    /* harmony import */


    var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./interceptors/api.interceptor */
    "../../packages/core/src/lib/interceptors/api.interceptor.ts");
    /* harmony import */


    var _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/localization.pipe */
    "../../packages/core/src/lib/pipes/localization.pipe.ts");
    /* harmony import */


    var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pipes/sort.pipe */
    "../../packages/core/src/lib/pipes/sort.pipe.ts");
    /* harmony import */


    var _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./plugins/config.plugin */
    "../../packages/core/src/lib/plugins/config.plugin.ts");
    /* harmony import */


    var _providers_locale_provider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./providers/locale.provider */
    "../../packages/core/src/lib/providers/locale.provider.ts");
    /* harmony import */


    var _states_config_state__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./states/config.state */
    "../../packages/core/src/lib/states/config.state.ts");
    /* harmony import */


    var _states_profile_state__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./states/profile.state */
    "../../packages/core/src/lib/states/profile.state.ts");
    /* harmony import */


    var _states_session_state__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./states/session.state */
    "../../packages/core/src/lib/states/session.state.ts");
    /* harmony import */


    var _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./utils/initial-utils */
    "../../packages/core/src/lib/utils/initial-utils.ts");
    /* harmony import */


    var _utils_date_extensions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./utils/date-extensions */
    "../../packages/core/src/lib/utils/date-extensions.ts");
    /* harmony import */


    var _components_replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/replaceable-route-container.component */
    "../../packages/core/src/lib/components/replaceable-route-container.component.ts");
    /* harmony import */


    var _states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./states/replaceable-components.state */
    "../../packages/core/src/lib/states/replaceable-components.state.ts");
    /* harmony import */


    var _directives_init_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./directives/init.directive */
    "../../packages/core/src/lib/directives/init.directive.ts");
    /* harmony import */


    var _directives_replaceable_template_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./directives/replaceable-template.directive */
    "../../packages/core/src/lib/directives/replaceable-template.directive.ts");

    var CoreModule_1;

    var CoreModule = CoreModule_1 =
    /*#__PURE__*/
    function () {
      function CoreModule() {
        _classCallCheck(this, CoreModule);
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: CoreModule_1,
            providers: [_providers_locale_provider__WEBPACK_IMPORTED_MODULE_25__["LocaleProvider"], {
              provide: _ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NGXS_PLUGINS"],
              useClass: _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__["ConfigPlugin"],
              multi: true
            }, {
              provide: _plugins_config_plugin__WEBPACK_IMPORTED_MODULE_24__["NGXS_CONFIG_PLUGIN_OPTIONS"],
              useValue: options
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_21__["ApiInterceptor"],
              multi: true
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
              multi: true,
              deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
              useFactory: _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__["getInitialData"]
            }, {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
              multi: true,
              deps: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
              useFactory: _utils_initial_utils__WEBPACK_IMPORTED_MODULE_29__["localeInitializer"]
            }]
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule = CoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["NgxsModule"].forFeature([_states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_32__["ReplaceableComponentsState"], _states_profile_state__WEBPACK_IMPORTED_MODULE_27__["ProfileState"], _states_session_state__WEBPACK_IMPORTED_MODULE_28__["SessionState"], _states_config_state__WEBPACK_IMPORTED_MODULE_26__["ConfigState"]]), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsRouterPluginModule"].forRoot(), _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsStoragePluginModule"].forRoot({
        key: ['SessionState']
      }), angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_9__["OAuthModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      declarations: [_components_replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_31__["ReplaceableRouteContainerComponent"], _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"], _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"], _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"], _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__["EllipsisDirective"], _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__["ForDirective"], _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__["FormSubmitDirective"], _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__["SortPipe"], _directives_init_directive__WEBPACK_IMPORTED_MODULE_33__["InitDirective"], _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__["PermissionDirective"], _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__["VisibilityDirective"], _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__["InputEventDebounceDirective"], _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"], _directives_replaceable_template_directive__WEBPACK_IMPORTED_MODULE_34__["ReplaceableTemplateDirective"], _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__["AbstractNgModelComponent"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"], _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"], _abstracts_ng_model_component__WEBPACK_IMPORTED_MODULE_10__["AbstractNgModelComponent"], _components_replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_31__["ReplaceableRouteContainerComponent"], _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_13__["AutofocusDirective"], _directives_ellipsis_directive__WEBPACK_IMPORTED_MODULE_15__["EllipsisDirective"], _directives_for_directive__WEBPACK_IMPORTED_MODULE_16__["ForDirective"], _directives_form_submit_directive__WEBPACK_IMPORTED_MODULE_17__["FormSubmitDirective"], _directives_init_directive__WEBPACK_IMPORTED_MODULE_33__["InitDirective"], _directives_permission_directive__WEBPACK_IMPORTED_MODULE_18__["PermissionDirective"], _directives_visibility_directive__WEBPACK_IMPORTED_MODULE_20__["VisibilityDirective"], _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_14__["InputEventDebounceDirective"], _directives_replaceable_template_directive__WEBPACK_IMPORTED_MODULE_34__["ReplaceableTemplateDirective"], _directives_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"], _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_23__["SortPipe"], _pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"]],
      providers: [_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_22__["LocalizationPipe"]],
      entryComponents: [_components_router_outlet_component__WEBPACK_IMPORTED_MODULE_12__["RouterOutletComponent"], _components_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_11__["DynamicLayoutComponent"], _components_replaceable_route_container_component__WEBPACK_IMPORTED_MODULE_31__["ReplaceableRouteContainerComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/autofocus.directive.ts":
  /*!***************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/autofocus.directive.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: AutofocusDirective */

  /***/
  function packagesCoreSrcLibDirectivesAutofocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
      return AutofocusDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AutofocusDirective =
    /*#__PURE__*/
    function () {
      function AutofocusDirective(elRef) {
        _classCallCheck(this, AutofocusDirective);

        this.elRef = elRef;
        this.delay = 0;
      }

      _createClass(AutofocusDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this23 = this;

          setTimeout(function () {
            return _this23.elRef.nativeElement.focus();
          }, this.delay);
        }
      }]);

      return AutofocusDirective;
    }();

    AutofocusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('autofocus'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AutofocusDirective.prototype, "delay", void 0);
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[autofocus]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AutofocusDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/debounce.directive.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/debounce.directive.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: InputEventDebounceDirective */

  /***/
  function packagesCoreSrcLibDirectivesDebounceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputEventDebounceDirective", function () {
      return InputEventDebounceDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var InputEventDebounceDirective =
    /*#__PURE__*/
    function () {
      function InputEventDebounceDirective(el) {
        _classCallCheck(this, InputEventDebounceDirective);

        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(InputEventDebounceDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.el.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.debounce), Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["takeUntilDestroy"])(this)).subscribe(function (event) {
            _this24.debounceEvent.emit(event);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return InputEventDebounceDirective;
    }();

    InputEventDebounceDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InputEventDebounceDirective.prototype, "debounce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('input.debounce'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InputEventDebounceDirective.prototype, "debounceEvent", void 0);
    InputEventDebounceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[input.debounce]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], InputEventDebounceDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/ellipsis.directive.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/ellipsis.directive.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: EllipsisDirective */

  /***/
  function packagesCoreSrcLibDirectivesEllipsisDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function () {
      return EllipsisDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var EllipsisDirective =
    /*#__PURE__*/
    function () {
      function EllipsisDirective(cdRef, elRef) {
        _classCallCheck(this, EllipsisDirective);

        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
      }

      _createClass(EllipsisDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.title = this.title || this.elRef.nativeElement.innerText;
          this.cdRef.detectChanges();
        }
      }, {
        key: "inlineClass",
        get: function get() {
          return this.enabled && this.width;
        }
      }, {
        key: "class",
        get: function get() {
          return this.enabled && !this.width;
        }
      }, {
        key: "maxWidth",
        get: function get() {
          return this.enabled && this.width ? this.width || '170px' : undefined;
        }
      }]);

      return EllipsisDirective;
    }();

    EllipsisDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpEllipsis'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], EllipsisDirective.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('title'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], EllipsisDirective.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpEllipsisEnabled'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EllipsisDirective.prototype, "enabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.abp-ellipsis-inline'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EllipsisDirective.prototype, "inlineClass", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.abp-ellipsis'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EllipsisDirective.prototype, "class", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.max-width'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EllipsisDirective.prototype, "maxWidth", null);
    EllipsisDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpEllipsis]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], EllipsisDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/for.directive.ts":
  /*!*********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/for.directive.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ForDirective */

  /***/
  function packagesCoreSrcLibDirectivesForDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForDirective", function () {
      return ForDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! just-compare */
    "../../node_modules/just-compare/index.js");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! just-clone */
    "../../node_modules/just-clone/index.js");
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_3__);

    var AbpForContext = function AbpForContext($implicit, index, count, list) {
      _classCallCheck(this, AbpForContext);

      this.$implicit = $implicit;
      this.index = index;
      this.count = count;
      this.list = list;
    };

    var RecordView = function RecordView(record, view) {
      _classCallCheck(this, RecordView);

      this.record = record;
      this.view = view;
    };

    var ForDirective =
    /*#__PURE__*/
    function () {
      function ForDirective(tempRef, vcRef, differs) {
        _classCallCheck(this, ForDirective);

        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
      }

      _createClass(ForDirective, [{
        key: "iterateOverAppliedOperations",
        value: function iterateOverAppliedOperations(changes) {
          var _this25 = this;

          var rw = [];
          changes.forEachOperation(function (record, previousIndex, currentIndex) {
            if (record.previousIndex == null) {
              var view = _this25.vcRef.createEmbeddedView(_this25.tempRef, new AbpForContext(null, -1, -1, _this25.items), currentIndex);

              rw.push(new RecordView(record, view));
            } else if (currentIndex == null) {
              _this25.vcRef.remove(previousIndex);
            } else {
              var _view = _this25.vcRef.get(previousIndex);

              _this25.vcRef.move(_view, currentIndex);

              rw.push(new RecordView(record, _view));
            }
          });

          for (var i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
          }
        }
      }, {
        key: "iterateOverAttachedViews",
        value: function iterateOverAttachedViews(changes) {
          var _this26 = this;

          for (var i = 0, l = this.vcRef.length; i < l; i++) {
            var viewRef = this.vcRef.get(i);
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
          }

          changes.forEachIdentityChange(function (record) {
            var viewRef = _this26.vcRef.get(record.currentIndex);

            viewRef.context.$implicit = record.item;
          });
        }
      }, {
        key: "projectItems",
        value: function projectItems(items) {
          if (!items.length && this.emptyRef) {
            this.vcRef.clear(); // tslint:disable-next-line: no-unused-expression

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
            var changes = this.differ.diff(items);

            if (changes) {
              this.iterateOverAppliedOperations(changes);
              this.iterateOverAttachedViews(changes);
            }
          }
        }
      }, {
        key: "sortItems",
        value: function sortItems(items) {
          var _this27 = this;

          if (this.orderBy) {
            items.sort(function (a, b) {
              return a[_this27.orderBy] > b[_this27.orderBy] ? 1 : a[_this27.orderBy] < b[_this27.orderBy] ? -1 : 0;
            });
          } else {
            items.sort();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this28 = this;

          var items = just_clone__WEBPACK_IMPORTED_MODULE_3___default()(this.items);
          if (!Array.isArray(items)) return;
          var compareFn = this.compareFn;

          if (typeof this.filterBy !== 'undefined' && typeof this.filterVal !== 'undefined' && this.filterVal !== '') {
            items = items.filter(function (item) {
              return compareFn(item[_this28.filterBy], _this28.filterVal);
            });
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
      }, {
        key: "compareFn",
        get: function get() {
          return this.compareBy || just_compare__WEBPACK_IMPORTED_MODULE_2___default.a;
        }
      }, {
        key: "trackByFn",
        get: function get() {
          return this.trackBy || function (index, item) {
            return item.id || index;
          };
        }
      }]);

      return ForDirective;
    }();

    ForDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOf'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], ForDirective.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOrderBy'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ForDirective.prototype, "orderBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForOrderDir'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ForDirective.prototype, "orderDir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForFilterBy'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ForDirective.prototype, "filterBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForFilterVal'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ForDirective.prototype, "filterVal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForTrackBy'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ForDirective.prototype, "trackBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForCompareBy'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)], ForDirective.prototype, "compareBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpForEmptyRef'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ForDirective.prototype, "emptyRef", void 0);
    ForDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpFor]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]])], ForDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/form-submit.directive.ts":
  /*!*****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/form-submit.directive.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: FormSubmitDirective */

  /***/
  function packagesCoreSrcLibDirectivesFormSubmitDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function () {
      return FormSubmitDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils */
    "../../packages/core/src/lib/utils/index.ts");

    var FormSubmitDirective =
    /*#__PURE__*/
    function () {
      function FormSubmitDirective(formGroupDirective, host, cdRef) {
        _classCallCheck(this, FormSubmitDirective);

        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.debounce = 200;
        this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.executedNgSubmit = false;
      }

      _createClass(FormSubmitDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.formGroupDirective.ngSubmit.pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"])(this)).subscribe(function () {
            _this29.markAsDirty();

            _this29.executedNgSubmit = true;
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.host.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.debounce), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (key) {
            return key && key.key === 'Enter';
          }), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"])(this)).subscribe(function () {
            if (!_this29.executedNgSubmit) {
              _this29.host.nativeElement.dispatchEvent(new Event('submit', {
                bubbles: true,
                cancelable: true
              }));
            }

            _this29.executedNgSubmit = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var form = this.formGroupDirective.form;
          setDirty(form.controls);
          form.markAsDirty();
          this.cdRef.detectChanges();
        }
      }]);

      return FormSubmitDirective;
    }();

    FormSubmitDirective.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormSubmitDirective.prototype, "debounce", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormSubmitDirective.prototype, "notValidateOnSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], FormSubmitDirective.prototype, "ngSubmit", void 0);
    FormSubmitDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: 'form[ngSubmit][formGroup]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], FormSubmitDirective);

    function setDirty(controls) {
      if (Array.isArray(controls)) {
        controls.forEach(function (group) {
          setDirty(group.controls);
        });
        return;
      }

      Object.keys(controls).forEach(function (key) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
      });
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/directives/index.ts":
  /*!*************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/index.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AutofocusDirective, EllipsisDirective, ForDirective, FormSubmitDirective, InitDirective, PermissionDirective, ReplaceableTemplateDirective, VisibilityDirective */

  /***/
  function packagesCoreSrcLibDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _autofocus_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./autofocus.directive */
    "../../packages/core/src/lib/directives/autofocus.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
      return _autofocus_directive__WEBPACK_IMPORTED_MODULE_1__["AutofocusDirective"];
    });
    /* harmony import */


    var _ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ellipsis.directive */
    "../../packages/core/src/lib/directives/ellipsis.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function () {
      return _ellipsis_directive__WEBPACK_IMPORTED_MODULE_2__["EllipsisDirective"];
    });
    /* harmony import */


    var _for_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./for.directive */
    "../../packages/core/src/lib/directives/for.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ForDirective", function () {
      return _for_directive__WEBPACK_IMPORTED_MODULE_3__["ForDirective"];
    });
    /* harmony import */


    var _form_submit_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./form-submit.directive */
    "../../packages/core/src/lib/directives/form-submit.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function () {
      return _form_submit_directive__WEBPACK_IMPORTED_MODULE_4__["FormSubmitDirective"];
    });
    /* harmony import */


    var _init_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./init.directive */
    "../../packages/core/src/lib/directives/init.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InitDirective", function () {
      return _init_directive__WEBPACK_IMPORTED_MODULE_5__["InitDirective"];
    });
    /* harmony import */


    var _permission_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./permission.directive */
    "../../packages/core/src/lib/directives/permission.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionDirective", function () {
      return _permission_directive__WEBPACK_IMPORTED_MODULE_6__["PermissionDirective"];
    });
    /* harmony import */


    var _replaceable_template_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./replaceable-template.directive */
    "../../packages/core/src/lib/directives/replaceable-template.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableTemplateDirective", function () {
      return _replaceable_template_directive__WEBPACK_IMPORTED_MODULE_7__["ReplaceableTemplateDirective"];
    });
    /* harmony import */


    var _visibility_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./visibility.directive */
    "../../packages/core/src/lib/directives/visibility.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
      return _visibility_directive__WEBPACK_IMPORTED_MODULE_8__["VisibilityDirective"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/directives/init.directive.ts":
  /*!**********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/init.directive.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: InitDirective */

  /***/
  function packagesCoreSrcLibDirectivesInitDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitDirective", function () {
      return InitDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var InitDirective =
    /*#__PURE__*/
    function () {
      function InitDirective(elRef) {
        _classCallCheck(this, InitDirective);

        this.elRef = elRef;
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(InitDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.init.emit(this.elRef);
        }
      }]);

      return InitDirective;
    }();

    InitDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('abpInit'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InitDirective.prototype, "init", void 0);
    InitDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpInit]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], InitDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/permission.directive.ts":
  /*!****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/permission.directive.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: PermissionDirective */

  /***/
  function packagesCoreSrcLibDirectivesPermissionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionDirective", function () {
      return PermissionDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../utils */
    "../../packages/core/src/lib/utils/index.ts");

    var PermissionDirective =
    /*#__PURE__*/
    function () {
      function PermissionDirective(elRef, renderer, store, templateRef, vcRef) {
        _classCallCheck(this, PermissionDirective);

        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.templateRef = templateRef;
        this.vcRef = vcRef;
      }

      _createClass(PermissionDirective, [{
        key: "check",
        value: function check() {
          var _this30 = this;

          if (this.subscription) {
            this.subscription.unsubscribe();
          }

          this.subscription = this.store.select(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getGrantedPolicy(this.condition)).pipe(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["takeUntilDestroy"])(this)).subscribe(function (isGranted) {
            if (_this30.templateRef && isGranted) {
              _this30.vcRef.clear();

              _this30.vcRef.createEmbeddedView(_this30.templateRef);
            } else if (_this30.templateRef && !isGranted) {
              _this30.vcRef.clear();
            } else if (!isGranted && !_this30.templateRef) {
              _this30.renderer.removeChild(_this30.elRef.nativeElement.parentElement, _this30.elRef.nativeElement);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.templateRef && !this.condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref2) {
          var condition = _ref2.condition;

          if ((condition || {
            currentValue: null
          }).currentValue) {
            this.check();
          }
        }
      }]);

      return PermissionDirective;
    }();

    PermissionDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpPermission'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], PermissionDirective.prototype, "condition", void 0);
    PermissionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpPermission]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])], PermissionDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/replaceable-template.directive.ts":
  /*!**************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/replaceable-template.directive.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: ReplaceableTemplateDirective */

  /***/
  function packagesCoreSrcLibDirectivesReplaceableTemplateDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableTemplateDirective", function () {
      return ReplaceableTemplateDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../states/replaceable-components.state */
    "../../packages/core/src/lib/states/replaceable-components.state.ts");
    /* harmony import */


    var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/rxjs-utils */
    "../../packages/core/src/lib/utils/rxjs-utils.ts");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! just-compare */
    "../../node_modules/just-compare/index.js");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");

    var ReplaceableTemplateDirective =
    /*#__PURE__*/
    function () {
      function ReplaceableTemplateDirective(injector, templateRef, cfRes, vcRef, store) {
        var _this31 = this;

        _classCallCheck(this, ReplaceableTemplateDirective);

        this.injector = injector;
        this.templateRef = templateRef;
        this.cfRes = cfRes;
        this.vcRef = vcRef;
        this.store = store;
        this.providedData = {
          inputs: {},
          outputs: {}
        };
        this.context = {};
        this.defaultComponentSubscriptions = {};
        this.initialized = false;
        this.context = {
          initTemplate: function initTemplate(ref) {
            _this31.resetDefaultComponent();

            _this31.defaultComponentRef = ref;

            _this31.setDefaultComponentInputs();
          }
        };
      }

      _createClass(ReplaceableTemplateDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.store.select(_states_replaceable_components_state__WEBPACK_IMPORTED_MODULE_4__["ReplaceableComponentsState"].getComponent(this.data.componentKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
            var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return !_this32.initialized || !just_compare__WEBPACK_IMPORTED_MODULE_6___default()(res.component, _this32.externalComponent);
          }), Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"])(this)).subscribe(function () {
            var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this32.vcRef.clear();

            _this32.externalComponent = res.component;

            if (_this32.defaultComponentRef) {
              _this32.resetDefaultComponent();
            }

            if (res.component) {
              _this32.setProvidedData();

              var customInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
                providers: [{
                  provide: 'REPLACEABLE_DATA',
                  useValue: _this32.providedData
                }],
                parent: _this32.injector
              });

              _this32.vcRef.createComponent(_this32.cfRes.resolveComponentFactory(res.component), 0, customInjector);
            } else {
              _this32.vcRef.createEmbeddedView(_this32.templateRef, _this32.context);
            }

            _this32.initialized = true;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (Object(snq__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
            return changes.data.currentValue.inputs;
          }) && this.defaultComponentRef) {
            this.setDefaultComponentInputs();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "setDefaultComponentInputs",
        value: function setDefaultComponentInputs() {
          var _this33 = this;

          if (!this.defaultComponentRef || !this.data.inputs && !this.data.outputs) return;

          if (this.data.inputs) {
            for (var key in this.data.inputs) {
              if (this.data.inputs.hasOwnProperty(key)) {
                if (!just_compare__WEBPACK_IMPORTED_MODULE_6___default()(this.defaultComponentRef[key], this.data.inputs[key].value)) {
                  this.defaultComponentRef[key] = this.data.inputs[key].value;
                }
              }
            }
          }

          if (this.data.outputs) {
            var _loop2 = function _loop2(_key) {
              if (_this33.data.outputs.hasOwnProperty(_key)) {
                if (!_this33.defaultComponentSubscriptions[_key]) {
                  _this33.defaultComponentSubscriptions[_key] = _this33.defaultComponentRef[_key].subscribe(function (value) {
                    _this33.data.outputs[_key](value);
                  });
                }
              }
            };

            for (var _key in this.data.outputs) {
              _loop2(_key);
            }
          }
        }
      }, {
        key: "setProvidedData",
        value: function setProvidedData() {
          var _this34 = this;

          this.providedData = Object.assign({}, this.data, {
            inputs: {}
          });
          if (!this.data.inputs) return;
          Object.defineProperties(this.providedData.inputs, Object.assign({}, Object.keys(this.data.inputs).reduce(function (acc, key) {
            return Object.assign({}, acc, _defineProperty({}, key, Object.assign({
              enumerable: true,
              configurable: true,
              get: function get() {
                return _this34.data.inputs[key].value;
              }
            }, _this34.data.inputs[key].twoWay && {
              set: function set(newValue) {
                _this34.data.inputs[key].value = newValue;

                _this34.data.outputs["".concat(key, "Change")](newValue);
              }
            })));
          }, {})));
        }
      }, {
        key: "resetDefaultComponent",
        value: function resetDefaultComponent() {
          var _this35 = this;

          Object.keys(this.defaultComponentSubscriptions).forEach(function (key) {
            _this35.defaultComponentSubscriptions[key].unsubscribe();
          });
          this.defaultComponentSubscriptions = {};
          this.defaultComponentRef = null;
        }
      }]);

      return ReplaceableTemplateDirective;
    }();

    ReplaceableTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpReplaceableTemplate'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ReplaceableTemplateDirective.prototype, "data", void 0);
    ReplaceableTemplateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpReplaceableTemplate]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], ReplaceableTemplateDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/stop-propagation.directive.ts":
  /*!**********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/stop-propagation.directive.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: StopPropagationDirective */

  /***/
  function packagesCoreSrcLibDirectivesStopPropagationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopPropagationDirective", function () {
      return StopPropagationDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils/rxjs-utils */
    "../../packages/core/src/lib/utils/rxjs-utils.ts");

    var StopPropagationDirective =
    /*#__PURE__*/
    function () {
      function StopPropagationDirective(el) {
        _classCallCheck(this, StopPropagationDirective);

        this.el = el;
        this.stopPropEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StopPropagationDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.el.nativeElement, 'click').pipe(Object(_utils_rxjs_utils__WEBPACK_IMPORTED_MODULE_3__["takeUntilDestroy"])(this)).subscribe(function (event) {
            event.stopPropagation();

            _this36.stopPropEvent.emit(event);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return StopPropagationDirective;
    }();

    StopPropagationDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('click.stop'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], StopPropagationDirective.prototype, "stopPropEvent", void 0);
    StopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[click.stop]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], StopPropagationDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/directives/visibility.directive.ts":
  /*!****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/directives/visibility.directive.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: VisibilityDirective */

  /***/
  function packagesCoreSrcLibDirectivesVisibilityDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
      return VisibilityDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");

    var VisibilityDirective =
    /*#__PURE__*/
    function () {
      function VisibilityDirective(elRef, renderer) {
        _classCallCheck(this, VisibilityDirective);

        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(VisibilityDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this37 = this;

          if (!this.focusedElement && this.elRef) {
            this.focusedElement = this.elRef.nativeElement;
          }

          var observer;
          observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              if (!mutation.target) return;
              var htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
                return Array.from(mutation.target.childNodes).filter(function (node) {
                  return node instanceof HTMLElement;
                });
              }, []);

              if (!htmlNodes.length) {
                _this37.removeFromDOM();
              }
            });
          });
          observer.observe(this.focusedElement, {
            childList: true
          });
          setTimeout(function () {
            var htmlNodes = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
              return Array.from(_this37.focusedElement.childNodes).filter(function (node) {
                return node instanceof HTMLElement;
              });
            }, []);
            if (!htmlNodes.length) _this37.removeFromDOM();
          }, 0);
          this.completed$.subscribe(function () {
            return observer.disconnect();
          });
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          this.completed$.next();
          this.completed$.complete();
        }
      }, {
        key: "removeFromDOM",
        value: function removeFromDOM() {
          if (!this.elRef.nativeElement) return;
          this.renderer.removeChild(this.elRef.nativeElement.parentElement, this.elRef.nativeElement);
          this.disconnect();
        }
      }]);

      return VisibilityDirective;
    }();

    VisibilityDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('abpVisibility'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", HTMLElement)], VisibilityDirective.prototype, "focusedElement", void 0);
    VisibilityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[abpVisibility]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], VisibilityDirective);
    /***/
  },

  /***/
  "../../packages/core/src/lib/enums/common.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/enums/common.ts ***!
    \*********************************************************************************************/

  /*! no exports provided */

  /***/
  function packagesCoreSrcLibEnumsCommonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /***/

  },

  /***/
  "../../packages/core/src/lib/enums/index.ts":
  /*!********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/enums/index.ts ***!
    \********************************************************************************************/

  /*! no exports provided */

  /***/
  function packagesCoreSrcLibEnumsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common */
    "../../packages/core/src/lib/enums/common.ts");
    /* empty/unused harmony star reexport */

    /***/

  },

  /***/
  "../../packages/core/src/lib/guards/auth.guard.ts":
  /*!**************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/auth.guard.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function packagesCoreSrcLibGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(oauthService, router) {
        _classCallCheck(this, AuthGuard);

        this.oauthService = oauthService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(_, state) {
          var hasValidAccessToken = this.oauthService.hasValidAccessToken();

          if (hasValidAccessToken) {
            return hasValidAccessToken;
          }

          return this.router.createUrlTree(['/account/login'], {
            state: {
              redirectUrl: state.url
            }
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "../../packages/core/src/lib/guards/index.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/index.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AuthGuard, PermissionGuard */

  /***/
  function packagesCoreSrcLibGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "../../packages/core/src/lib/guards/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /* harmony import */


    var _permission_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./permission.guard */
    "../../packages/core/src/lib/guards/permission.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
      return _permission_guard__WEBPACK_IMPORTED_MODULE_2__["PermissionGuard"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/guards/permission.guard.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/guards/permission.guard.ts ***!
    \********************************************************************************************************/

  /*! exports provided: PermissionGuard */

  /***/
  function packagesCoreSrcLibGuardsPermissionGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
      return PermissionGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions */
    "../../packages/core/src/lib/actions/index.ts");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");

    var PermissionGuard =
    /*#__PURE__*/
    function () {
      function PermissionGuard(store) {
        _classCallCheck(this, PermissionGuard);

        this.store = store;
      }

      _createClass(PermissionGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this38 = this;

          var resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
            return route.data.routes.requiredPolicy;
          }) || Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
            return route.data.requiredPolicy;
          });

          if (!resource) {
            resource = Object(snq__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
              return route.routeConfig.children.find(function (child) {
                return state.url.indexOf(child.path) > -1;
              }).data.requiredPolicy;
            });

            if (!resource) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
            }
          }

          return this.store.select(_states__WEBPACK_IMPORTED_MODULE_7__["ConfigState"].getGrantedPolicy(resource)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (access) {
            if (!access) {
              _this38.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_6__["RestOccurError"]({
                status: 403
              }));
            }
          }));
        }
      }]);

      return PermissionGuard;
    }();

    PermissionGuard.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    PermissionGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], PermissionGuard);
    /***/
  },

  /***/
  "../../packages/core/src/lib/interceptors/api.interceptor.ts":
  /*!*************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/interceptors/api.interceptor.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ApiInterceptor */

  /***/
  function packagesCoreSrcLibInterceptorsApiInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return ApiInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony import */


    var _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/loader.actions */
    "../../packages/core/src/lib/actions/loader.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var ApiInterceptor =
    /*#__PURE__*/
    function () {
      function ApiInterceptor(oAuthService, store) {
        _classCallCheck(this, ApiInterceptor);

        this.oAuthService = oAuthService;
        this.store = store;
      }

      _createClass(ApiInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this39 = this;

          this.store.dispatch(new _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__["StartLoader"](request));
          var headers = {};
          var token = this.oAuthService.getAccessToken();

          if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = "Bearer ".concat(token);
          }

          var lang = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_4__["SessionState"].getLanguage);

          if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
          }

          var tenant = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_4__["SessionState"].getTenant);

          if (!request.headers.has('__tenant') && tenant) {
            headers['__tenant'] = tenant.id;
          }

          return next.handle(request.clone({
            setHeaders: headers
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            return _this39.store.dispatch(new _actions_loader_actions__WEBPACK_IMPORTED_MODULE_5__["StopLoader"](request));
          }));
        }
      }]);

      return ApiInterceptor;
    }();

    ApiInterceptor.ctorParameters = function () {
      return [{
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    ApiInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], ApiInterceptor);
    /***/
  },

  /***/
  "../../packages/core/src/lib/interceptors/index.ts":
  /*!***************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/interceptors/index.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ApiInterceptor */

  /***/
  function packagesCoreSrcLibInterceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _api_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api.interceptor */
    "../../packages/core/src/lib/interceptors/api.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return _api_interceptor__WEBPACK_IMPORTED_MODULE_1__["ApiInterceptor"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/models/index.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/models/index.ts ***!
    \*********************************************************************************************/

  /*! no exports provided */

  /***/
  function packagesCoreSrcLibModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rest */
    "../../packages/core/src/lib/models/rest.ts");
    /* empty/unused harmony star reexport */

    /***/

  },

  /***/
  "../../packages/core/src/lib/models/rest.ts":
  /*!********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/models/rest.ts ***!
    \********************************************************************************************/

  /*! no exports provided */

  /***/
  function packagesCoreSrcLibModelsRestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /***/

  },

  /***/
  "../../packages/core/src/lib/pipes/index.ts":
  /*!********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/index.ts ***!
    \********************************************************************************************/

  /*! exports provided: LocalizationPipe, SortPipe */

  /***/
  function packagesCoreSrcLibPipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _localization_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./localization.pipe */
    "../../packages/core/src/lib/pipes/localization.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function () {
      return _localization_pipe__WEBPACK_IMPORTED_MODULE_1__["LocalizationPipe"];
    });
    /* harmony import */


    var _sort_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sort.pipe */
    "../../packages/core/src/lib/pipes/sort.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return _sort_pipe__WEBPACK_IMPORTED_MODULE_2__["SortPipe"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/pipes/localization.pipe.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/localization.pipe.ts ***!
    \********************************************************************************************************/

  /*! exports provided: LocalizationPipe */

  /***/
  function packagesCoreSrcLibPipesLocalizationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function () {
      return LocalizationPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");

    var LocalizationPipe =
    /*#__PURE__*/
    function () {
      function LocalizationPipe(store) {
        _classCallCheck(this, LocalizationPipe);

        this.store = store;
      }

      _createClass(LocalizationPipe, [{
        key: "transform",
        value: function transform() {
          var _states__WEBPACK_IMPO;

          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          for (var _len = arguments.length, interpolateParams = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
            interpolateParams[_key2 - 1] = arguments[_key2];
          }

          return this.store.selectSnapshot((_states__WEBPACK_IMPO = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getLocalization.apply(_states__WEBPACK_IMPO, [value].concat(_toConsumableArray(interpolateParams.reduce(function (acc, val) {
            return Array.isArray(val) ? [].concat(_toConsumableArray(acc), _toConsumableArray(val)) : [].concat(_toConsumableArray(acc), [val]);
          }, [])))));
        }
      }]);

      return LocalizationPipe;
    }();

    LocalizationPipe.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    LocalizationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'abpLocalization'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], LocalizationPipe);
    /***/
  },

  /***/
  "../../packages/core/src/lib/pipes/sort.pipe.ts":
  /*!************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/pipes/sort.pipe.ts ***!
    \************************************************************************************************/

  /*! exports provided: SortPipe */

  /***/
  function packagesCoreSrcLibPipesSortPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return SortPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var SortPipe =
    /*#__PURE__*/
    function () {
      function SortPipe() {
        _classCallCheck(this, SortPipe);
      }

      _createClass(SortPipe, [{
        key: "transform",
        value: function transform(value) {
          var sortOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
          var sortKey = arguments.length > 2 ? arguments[2] : undefined;
          sortOrder = sortOrder && sortOrder.toLowerCase();
          if (!value || sortOrder !== 'asc' && sortOrder !== 'desc') return value;
          var numberArray = [];
          var stringArray = [];

          if (!sortKey) {
            numberArray = value.filter(function (item) {
              return typeof item === 'number';
            }).sort();
            stringArray = value.filter(function (item) {
              return typeof item === 'string';
            }).sort();
          } else {
            numberArray = value.filter(function (item) {
              return typeof item[sortKey] === 'number';
            }).sort(function (a, b) {
              return a[sortKey] - b[sortKey];
            });
            stringArray = value.filter(function (item) {
              return typeof item[sortKey] === 'string';
            }).sort(function (a, b) {
              if (a[sortKey] < b[sortKey]) return -1;else if (a[sortKey] > b[sortKey]) return 1;else return 0;
            });
          }

          var sorted = [].concat(_toConsumableArray(numberArray), _toConsumableArray(stringArray), _toConsumableArray(value.filter(function (item) {
            return typeof (sortKey ? item[sortKey] : item) !== 'number' && typeof (sortKey ? item[sortKey] : item) !== 'string';
          })));
          return sortOrder === 'asc' ? sorted : sorted.reverse();
        }
      }]);

      return SortPipe;
    }();

    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'abpSort'
    })], SortPipe);
    /***/
  },

  /***/
  "../../packages/core/src/lib/plugins/config.plugin.ts":
  /*!******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/plugins/config.plugin.ts ***!
    \******************************************************************************************************/

  /*! exports provided: NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin */

  /***/
  function packagesCoreSrcLibPluginsConfigPluginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function () {
      return NGXS_CONFIG_PLUGIN_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function () {
      return ConfigPlugin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _utils_route_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/route-utils */
    "../../packages/core/src/lib/utils/route-utils.ts");
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! just-clone */
    "../../node_modules/just-clone/index.js");
    /* harmony import */


    var just_clone__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(just_clone__WEBPACK_IMPORTED_MODULE_6__);

    var NGXS_CONFIG_PLUGIN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NGXS_CONFIG_PLUGIN_OPTIONS');

    var ConfigPlugin =
    /*#__PURE__*/
    function () {
      function ConfigPlugin(options, router) {
        _classCallCheck(this, ConfigPlugin);

        this.options = options;
        this.router = router;
        this.initialized = false;
      }

      _createClass(ConfigPlugin, [{
        key: "handle",
        value: function handle(state, event, next) {
          var matches = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["actionMatcher"])(event);
          var isInitAction = matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["InitState"]) || matches(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["UpdateState"]);

          if (isInitAction && !this.initialized) {
            var transformedRoutes = transformRoutes(this.router.config);
            var routes = transformedRoutes.routes;
            var wrappers = transformedRoutes.wrappers;
            routes = Object(_utils_route_utils__WEBPACK_IMPORTED_MODULE_5__["organizeRoutes"])(routes, wrappers);
            var flattedRoutes = flatRoutes(just_clone__WEBPACK_IMPORTED_MODULE_6___default()(routes));
            state = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["setValue"])(state, 'ConfigState', Object.assign({}, state.ConfigState && Object.assign({}, state.ConfigState), this.options, {
              routes: routes,
              flattedRoutes: flattedRoutes
            }));
            this.initialized = true;
          }

          return next(state, event);
        }
      }]);

      return ConfigPlugin;
    }();

    ConfigPlugin.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [NGXS_CONFIG_PLUGIN_OPTIONS]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ConfigPlugin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NGXS_CONFIG_PLUGIN_OPTIONS)), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ConfigPlugin);

    function transformRoutes() {
      var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var wrappers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var abpRoutes = _toConsumableArray(Object(_utils_route_utils__WEBPACK_IMPORTED_MODULE_5__["getAbpRoutes"])());

      wrappers = abpRoutes.filter(function (ar) {
        return ar.wrapper;
      });
      var transformed = [];
      routes.filter(function (route) {
        return route.component || route.loadChildren;
      }).forEach(function (route) {
        var abpPackage = abpRoutes.find(function (abp) {
          return abp.path.toLowerCase() === route.path.toLowerCase() && !abp.wrapper;
        });
        var length = transformed.length;

        if (abpPackage) {
          transformed.push(abpPackage);
        }

        if (transformed.length === length && (route.data || {}).routes) {
          transformed.push(Object.assign({}, route.data.routes, {
            path: route.path,
            name: Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
              return route.data.routes.name;
            }, route.path),
            children: route.data.routes.children || []
          }));
        }
      });
      return {
        routes: setUrls(transformed),
        wrappers: wrappers
      };
    }

    function setUrls(routes, parentUrl) {
      if (parentUrl) {
        // recursive block
        return routes.map(function (route) {
          return Object.assign({}, route, {
            url: "".concat(parentUrl, "/").concat(route.path)
          }, route.children && route.children.length && {
            children: setUrls(route.children, "".concat(parentUrl, "/").concat(route.path))
          });
        });
      }

      return routes.map(function (route) {
        return Object.assign({}, route, {
          url: "/".concat(route.path)
        }, route.children && route.children.length && {
          children: setUrls(route.children, "/".concat(route.path))
        });
      });
    }

    function flatRoutes(routes) {
      var flat = function flat(r) {
        return r.reduce(function (acc, val) {
          var value = [val];

          if (val.children) {
            val.children = val.children.map(function (child) {
              return Object.assign({}, child, {
                parentName: val.name
              });
            });
            value = [val].concat(_toConsumableArray(flat(val.children)));
          }

          return [].concat(_toConsumableArray(acc), _toConsumableArray(value));
        }, []);
      };

      return flat(routes);
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/plugins/index.ts":
  /*!**********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/plugins/index.ts ***!
    \**********************************************************************************************/

  /*! exports provided: NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin */

  /***/
  function packagesCoreSrcLibPluginsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config.plugin */
    "../../packages/core/src/lib/plugins/config.plugin.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function () {
      return _config_plugin__WEBPACK_IMPORTED_MODULE_1__["NGXS_CONFIG_PLUGIN_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function () {
      return _config_plugin__WEBPACK_IMPORTED_MODULE_1__["ConfigPlugin"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/providers/locale.provider.ts":
  /*!**********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/providers/locale.provider.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: LocaleId, LocaleProvider */

  /***/
  function packagesCoreSrcLibProvidersLocaleProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleId", function () {
      return LocaleId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocaleProvider", function () {
      return LocaleProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constants_different_locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/different-locales */
    "../../packages/core/src/lib/constants/different-locales.ts");
    /* harmony import */


    var _services_localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/localization.service */
    "../../packages/core/src/lib/services/localization.service.ts");

    var LocaleId =
    /*#__PURE__*/
    function (_String) {
      _inherits(LocaleId, _String);

      function LocaleId(localizationService) {
        var _this40;

        _classCallCheck(this, LocaleId);

        _this40 = _possibleConstructorReturn(this, _getPrototypeOf(LocaleId).call(this));
        _this40.localizationService = localizationService;
        return _this40;
      }

      _createClass(LocaleId, [{
        key: "toString",
        value: function toString() {
          var currentLang = this.localizationService.currentLang;
          return _constants_different_locales__WEBPACK_IMPORTED_MODULE_2__["default"][currentLang] || currentLang;
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          return this.toString();
        }
      }]);

      return LocaleId;
    }(_wrapNativeSuper(String));

    var LocaleProvider = {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
      useClass: LocaleId,
      deps: [_services_localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"]]
    };
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/application-configuration.service.ts":
  /*!***************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/application-configuration.service.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: ApplicationConfigurationService */

  /***/
  function packagesCoreSrcLibServicesApplicationConfigurationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function () {
      return ApplicationConfigurationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rest.service */
    "../../packages/core/src/lib/services/rest.service.ts");

    var ApplicationConfigurationService =
    /*#__PURE__*/
    function () {
      function ApplicationConfigurationService(rest) {
        _classCallCheck(this, ApplicationConfigurationService);

        this.rest = rest;
      }

      _createClass(ApplicationConfigurationService, [{
        key: "getConfiguration",
        value: function getConfiguration() {
          var request = {
            method: 'GET',
            url: '/api/abp/application-configuration'
          };
          return this.rest.request(request);
        }
      }]);

      return ApplicationConfigurationService;
    }();

    ApplicationConfigurationService.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    ApplicationConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], ApplicationConfigurationService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/config-state.service.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/config-state.service.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ConfigStateService */

  /***/
  function packagesCoreSrcLibServicesConfigStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigStateService", function () {
      return ConfigStateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/config.actions */
    "../../packages/core/src/lib/actions/config.actions.ts");

    var ConfigStateService =
    /*#__PURE__*/
    function () {
      function ConfigStateService(store) {
        _classCallCheck(this, ConfigStateService);

        this.store = store;
      }

      _createClass(ConfigStateService, [{
        key: "getAll",
        value: function getAll() {
          return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getAll);
        }
      }, {
        key: "getApplicationInfo",
        value: function getApplicationInfo() {
          return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"].getApplicationInfo);
        }
      }, {
        key: "getOne",
        value: function getOne() {
          var _states__WEBPACK_IMPO2;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO2 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getOne.apply(_states__WEBPACK_IMPO2, arguments));
        }
      }, {
        key: "getDeep",
        value: function getDeep() {
          var _states__WEBPACK_IMPO3;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO3 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getDeep.apply(_states__WEBPACK_IMPO3, arguments));
        }
      }, {
        key: "getRoute",
        value: function getRoute() {
          var _states__WEBPACK_IMPO4;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO4 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getRoute.apply(_states__WEBPACK_IMPO4, arguments));
        }
      }, {
        key: "getApiUrl",
        value: function getApiUrl() {
          var _states__WEBPACK_IMPO5;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO5 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getApiUrl.apply(_states__WEBPACK_IMPO5, arguments));
        }
      }, {
        key: "getSetting",
        value: function getSetting() {
          var _states__WEBPACK_IMPO6;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO6 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getSetting.apply(_states__WEBPACK_IMPO6, arguments));
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          var _states__WEBPACK_IMPO7;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO7 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getSettings.apply(_states__WEBPACK_IMPO7, arguments));
        }
      }, {
        key: "getGrantedPolicy",
        value: function getGrantedPolicy() {
          var _states__WEBPACK_IMPO8;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO8 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getGrantedPolicy.apply(_states__WEBPACK_IMPO8, arguments));
        }
      }, {
        key: "getLocalization",
        value: function getLocalization() {
          var _states__WEBPACK_IMPO9;

          return this.store.selectSnapshot((_states__WEBPACK_IMPO9 = _states__WEBPACK_IMPORTED_MODULE_3__["ConfigState"]).getLocalization.apply(_states__WEBPACK_IMPO9, arguments));
        }
      }, {
        key: "dispatchGetAppConfiguration",
        value: function dispatchGetAppConfiguration() {
          return this.store.dispatch(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__["GetAppConfiguration"]());
        }
      }, {
        key: "dispatchPatchRouteByName",
        value: function dispatchPatchRouteByName() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return this.store.dispatch(_construct(_actions_config_actions__WEBPACK_IMPORTED_MODULE_4__["PatchRouteByName"], args));
        }
      }, {
        key: "dispatchAddRoute",
        value: function dispatchAddRoute() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return this.store.dispatch(_construct(_actions_config_actions__WEBPACK_IMPORTED_MODULE_4__["AddRoute"], args));
        }
      }]);

      return ConfigStateService;
    }();

    ConfigStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ConfigStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], ConfigStateService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/index.ts":
  /*!***********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/index.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ApplicationConfigurationService, LocalizationService, ProfileService, RestService, ConfigStateService, LazyLoadService, ProfileStateService, SessionStateService */

  /***/
  function packagesCoreSrcLibServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _application_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./application-configuration.service */
    "../../packages/core/src/lib/services/application-configuration.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function () {
      return _application_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationConfigurationService"];
    });
    /* harmony import */


    var _config_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config-state.service */
    "../../packages/core/src/lib/services/config-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigStateService", function () {
      return _config_state_service__WEBPACK_IMPORTED_MODULE_2__["ConfigStateService"];
    });
    /* harmony import */


    var _lazy_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lazy-load.service */
    "../../packages/core/src/lib/services/lazy-load.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadService", function () {
      return _lazy_load_service__WEBPACK_IMPORTED_MODULE_3__["LazyLoadService"];
    });
    /* harmony import */


    var _localization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./localization.service */
    "../../packages/core/src/lib/services/localization.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalizationService", function () {
      return _localization_service__WEBPACK_IMPORTED_MODULE_4__["LocalizationService"];
    });
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.service */
    "../../packages/core/src/lib/services/profile.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"];
    });
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rest.service */
    "../../packages/core/src/lib/services/rest.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"];
    });
    /* harmony import */


    var _profile_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-state.service */
    "../../packages/core/src/lib/services/profile-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileStateService", function () {
      return _profile_state_service__WEBPACK_IMPORTED_MODULE_7__["ProfileStateService"];
    });
    /* harmony import */


    var _session_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./session-state.service */
    "../../packages/core/src/lib/services/session-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionStateService", function () {
      return _session_state_service__WEBPACK_IMPORTED_MODULE_8__["SessionStateService"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/services/lazy-load.service.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/lazy-load.service.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: LazyLoadService */

  /***/
  function packagesCoreSrcLibServicesLazyLoadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadService", function () {
      return LazyLoadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils */
    "../../packages/core/src/lib/utils/index.ts");

    var LazyLoadService =
    /*#__PURE__*/
    function () {
      function LazyLoadService() {
        _classCallCheck(this, LazyLoadService);

        this.loadedLibraries = {};
      }

      _createClass(LazyLoadService, [{
        key: "load",
        value: function load(urlOrUrls, type) {
          var _this41 = this;

          var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var targetQuery = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
          var position = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'beforeend';

          if (!urlOrUrls && !content) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Should pass url or content');
          } else if (!urlOrUrls && content) {
            urlOrUrls = [null];
          }

          if (!Array.isArray(urlOrUrls)) {
            urlOrUrls = [urlOrUrls];
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            urlOrUrls.forEach(function (url, index) {
              var key = url ? url.slice(url.lastIndexOf('/') + 1) : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])();

              if (_this41.loadedLibraries[key]) {
                subscriber.next();
                subscriber.complete();
                return;
              }

              _this41.loadedLibraries[key] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
              var library;

              if (type === 'script') {
                library = document.createElement('script');
                library.type = 'text/javascript';

                if (url) {
                  library.src = url;
                }

                library.text = content;
              } else if (url) {
                library = document.createElement('link');
                library.type = 'text/css';
                library.rel = 'stylesheet';

                if (url) {
                  library.href = url;
                }
              } else {
                library = document.createElement('style');
                library.textContent = content;
              }

              library.onload = function () {
                _this41.loadedLibraries[key].next();

                _this41.loadedLibraries[key].complete();

                if (index === urlOrUrls.length - 1) {
                  subscriber.next();
                  subscriber.complete();
                }
              };

              document.querySelector(targetQuery).insertAdjacentElement(position, library);
            });
          });
        }
      }]);

      return LazyLoadService;
    }();

    LazyLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LazyLoadService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/localization.service.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/localization.service.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: LocalizationService */

  /***/
  function packagesCoreSrcLibServicesLocalizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizationService", function () {
      return LocalizationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _states_config_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../states/config.state */
    "../../packages/core/src/lib/states/config.state.ts");
    /* harmony import */


    var _utils_initial_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../utils/initial-utils */
    "../../packages/core/src/lib/utils/initial-utils.ts");

    var LocalizationService =
    /*#__PURE__*/
    function () {
      function LocalizationService(store, router, ngZone, otherInstance) {
        _classCallCheck(this, LocalizationService);

        this.store = store;
        this.router = router;
        this.ngZone = ngZone;
        if (otherInstance) throw new Error('LocalizationService should have only one instance.');
      }

      _createClass(LocalizationService, [{
        key: "setRouteReuse",
        value: function setRouteReuse(reuse) {
          this.router.routeReuseStrategy.shouldReuseRoute = reuse;
        }
      }, {
        key: "registerLocale",
        value: function registerLocale(locale) {
          var _this42 = this;

          var shouldReuseRoute = this.router.routeReuseStrategy.shouldReuseRoute;
          this.setRouteReuse(function () {
            return false;
          });
          this.router.navigated = false;
          return Object(_utils_initial_utils__WEBPACK_IMPORTED_MODULE_6__["registerLocale"])(locale).then(function () {
            _this42.ngZone.run(function () {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this42, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.router.navigateByUrl(this.router.url)["catch"](rxjs__WEBPACK_IMPORTED_MODULE_4__["noop"]);

                      case 2:
                        this.setRouteReuse(shouldReuseRoute);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          });
        }
      }, {
        key: "get",
        value: function get(key) {
          var _states_config_state_;

          for (var _len4 = arguments.length, interpolateParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key5 = 1; _key5 < _len4; _key5++) {
            interpolateParams[_key5 - 1] = arguments[_key5];
          }

          return this.store.select((_states_config_state_ = _states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"]).getLocalization.apply(_states_config_state_, [key].concat(interpolateParams)));
        }
      }, {
        key: "instant",
        value: function instant(key) {
          var _states_config_state_2;

          for (var _len5 = arguments.length, interpolateParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key6 = 1; _key6 < _len5; _key6++) {
            interpolateParams[_key6 - 1] = arguments[_key6];
          }

          return this.store.selectSnapshot((_states_config_state_2 = _states_config_state__WEBPACK_IMPORTED_MODULE_5__["ConfigState"]).getLocalization.apply(_states_config_state_2, [key].concat(interpolateParams)));
        }
      }, {
        key: "currentLang",
        get: function get() {
          return this.store.selectSnapshot(function (state) {
            return state.SessionState.language;
          });
        }
      }]);

      return LocalizationService;
    }();

    LocalizationService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: LocalizationService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }];
    };

    LocalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], LocalizationService])], LocalizationService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/profile-state.service.ts":
  /*!***************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/profile-state.service.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: ProfileStateService */

  /***/
  function packagesCoreSrcLibServicesProfileStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStateService", function () {
      return ProfileStateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "../../packages/core/src/lib/actions/index.ts");

    var ProfileStateService =
    /*#__PURE__*/
    function () {
      function ProfileStateService(store) {
        _classCallCheck(this, ProfileStateService);

        this.store = store;
      }

      _createClass(ProfileStateService, [{
        key: "getProfile",
        value: function getProfile() {
          return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["ProfileState"].getProfile);
        }
      }, {
        key: "dispatchGetProfile",
        value: function dispatchGetProfile() {
          return this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_4__["GetProfile"]());
        }
      }, {
        key: "dispatchUpdateProfile",
        value: function dispatchUpdateProfile() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateProfile"], args));
        }
      }, {
        key: "dispatchChangePassword",
        value: function dispatchChangePassword() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
            args[_key8] = arguments[_key8];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["ChangePassword"], args));
        }
      }]);

      return ProfileStateService;
    }();

    ProfileStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ProfileStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], ProfileStateService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/profile.service.ts":
  /*!*********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/profile.service.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ProfileService */

  /***/
  function packagesCoreSrcLibServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rest.service */
    "../../packages/core/src/lib/services/rest.service.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(rest) {
        _classCallCheck(this, ProfileService);

        this.rest = rest;
      }

      _createClass(ProfileService, [{
        key: "get",
        value: function get() {
          var request = {
            method: 'GET',
            url: '/api/identity/my-profile'
          };
          return this.rest.request(request);
        }
      }, {
        key: "update",
        value: function update(body) {
          var request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: body
          };
          return this.rest.request(request);
        }
      }, {
        key: "changePassword",
        value: function changePassword(body) {
          var skipHandleError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: body
          };
          return this.rest.request(request, {
            skipHandleError: skipHandleError
          });
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])], ProfileService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/rest.service.ts":
  /*!******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/rest.service.ts ***!
    \******************************************************************************************************/

  /*! exports provided: RestService */

  /***/
  function packagesCoreSrcLibServicesRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_rest_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/rest.actions */
    "../../packages/core/src/lib/actions/rest.actions.ts");
    /* harmony import */


    var _states_config_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../states/config.state */
    "../../packages/core/src/lib/states/config.state.ts");

    var RestService =
    /*#__PURE__*/
    function () {
      function RestService(http, store) {
        _classCallCheck(this, RestService);

        this.http = http;
        this.store = store;
      }

      _createClass(RestService, [{
        key: "handleError",
        value: function handleError(err) {
          this.store.dispatch(new _actions_rest_actions__WEBPACK_IMPORTED_MODULE_6__["RestOccurError"](err));
          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }
      }, {
        key: "request",
        value: function request(_request, config, api) {
          var _this43 = this;

          config = config || {};
          var _config = config,
              _config$observe = _config.observe,
              observe = _config$observe === void 0 ? "body" : _config$observe,
              skipHandleError = _config.skipHandleError;

          var url = (api || this.store.selectSnapshot(_states_config_state__WEBPACK_IMPORTED_MODULE_7__["ConfigState"].getApiUrl())) + _request.url;

          var method = _request.method,
              params = _request.params,
              options = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_request, ["method", "params"]);
          return this.http.request(method, url, Object.assign({
            observe: observe
          }, params && {
            params: Object.keys(params).reduce(function (acc, key) {
              return Object.assign({}, acc, typeof params[key] !== 'undefined' && params[key] !== '' && _defineProperty({}, key, params[key]));
            }, {})
          }, options)).pipe(observe === "body"
          /* Body */
          ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            if (skipHandleError) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }

            return _this43.handleError(err);
          }));
        }
      }]);

      return RestService;
    }();

    RestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])], RestService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/services/session-state.service.ts":
  /*!***************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/services/session-state.service.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: SessionStateService */

  /***/
  function packagesCoreSrcLibServicesSessionStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionStateService", function () {
      return SessionStateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "../../packages/core/src/lib/actions/index.ts");

    var SessionStateService =
    /*#__PURE__*/
    function () {
      function SessionStateService(store) {
        _classCallCheck(this, SessionStateService);

        this.store = store;
      }

      _createClass(SessionStateService, [{
        key: "getLanguage",
        value: function getLanguage() {
          return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getLanguage);
        }
      }, {
        key: "getTenant",
        value: function getTenant() {
          return this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_3__["SessionState"].getTenant);
        }
      }, {
        key: "dispatchSetLanguage",
        value: function dispatchSetLanguage() {
          for (var _len8 = arguments.length, args = new Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
            args[_key9] = arguments[_key9];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["SetLanguage"], args));
        }
      }, {
        key: "dispatchSetTenant",
        value: function dispatchSetTenant() {
          for (var _len9 = arguments.length, args = new Array(_len9), _key10 = 0; _key10 < _len9; _key10++) {
            args[_key10] = arguments[_key10];
          }

          return this.store.dispatch(_construct(_actions__WEBPACK_IMPORTED_MODULE_4__["SetTenant"], args));
        }
      }]);

      return SessionStateService;
    }();

    SessionStateService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    SessionStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], SessionStateService);
    /***/
  },

  /***/
  "../../packages/core/src/lib/states/config.state.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/config.state.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ConfigState */

  /***/
  function packagesCoreSrcLibStatesConfigStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigState", function () {
      return ConfigState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/config.actions */
    "../../packages/core/src/lib/actions/config.actions.ts");
    /* harmony import */


    var _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/session.actions */
    "../../packages/core/src/lib/actions/session.actions.ts");
    /* harmony import */


    var _services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/application-configuration.service */
    "../../packages/core/src/lib/services/application-configuration.service.ts");
    /* harmony import */


    var _utils_route_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../utils/route-utils */
    "../../packages/core/src/lib/utils/route-utils.ts");
    /* harmony import */


    var _session_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./session.state */
    "../../packages/core/src/lib/states/session.state.ts");

    var ConfigState_1;

    var ConfigState = ConfigState_1 =
    /*#__PURE__*/
    function () {
      function ConfigState(appConfigurationService, store) {
        _classCallCheck(this, ConfigState);

        this.appConfigurationService = appConfigurationService;
        this.store = store;
      }

      _createClass(ConfigState, [{
        key: "addData",
        value: function addData(_ref4) {
          var _this44 = this;

          var patchState = _ref4.patchState,
              dispatch = _ref4.dispatch;
          return this.appConfigurationService.getConfiguration().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (configuration) {
            return patchState(Object.assign({}, configuration));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (configuration) {
            var defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];

            if (defaultLang.includes(';')) {
              defaultLang = defaultLang.split(';')[0];
            }

            return _this44.store.selectSnapshot(_session_state__WEBPACK_IMPORTED_MODULE_9__["SessionState"].getLanguage) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null) : dispatch(new _actions_session_actions__WEBPACK_IMPORTED_MODULE_6__["SetLanguage"](defaultLang));
          }));
        }
      }, {
        key: "patchRoute",
        value: function patchRoute(_ref5, _ref6) {
          var patchState = _ref5.patchState,
              getState = _ref5.getState;
          var name = _ref6.name,
              newValue = _ref6.newValue;
          var routes = getState().routes;
          routes = patchRouteDeep(routes, name, newValue);
          var flattedRoutes = getState().flattedRoutes;
          var index = flattedRoutes.findIndex(function (route) {
            return route.name === name;
          });

          if (index > -1) {
            flattedRoutes[index] = Object.assign({}, flattedRoutes[index], newValue);
          }

          return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes
          });
        }
      }, {
        key: "addRoute",
        value: function addRoute(_ref7, _ref8) {
          var patchState = _ref7.patchState,
              getState = _ref7.getState;
          var payload = _ref8.payload;
          var routes = getState().routes;
          var flattedRoutes = getState().flattedRoutes;
          var route = Object.assign({}, payload);

          if (route.parentName) {
            var _ret = function () {
              var index = flattedRoutes.findIndex(function (r) {
                return r.name === route.parentName;
              });
              if (index < 0) return {
                v: void 0
              };
              var parent = flattedRoutes[index];

              if (parent.url.replace('/', '')) {
                route.url = "".concat(parent.url, "/").concat(route.path);
              } else {
                route.url = "/".concat(route.path);
              }

              route.order = route.order || route.order === 0 ? route.order : parent.children.length;
              parent.children = [].concat(_toConsumableArray(parent.children || []), [route]).sort(function (a, b) {
                return a.order - b.order;
              });
              flattedRoutes[index] = parent;
              flattedRoutes.push(route);
              var parentName = parent.name;
              var parentNameArr = [parentName];

              while (parentName) {
                parentName = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
                  return flattedRoutes.find(function (r) {
                    return r.name === parentName;
                  }).parentName;
                });

                if (parentName) {
                  parentNameArr.unshift(parentName);
                }
              }

              routes = updateRouteDeep(routes, parentNameArr, parent);
            }();

            if (typeof _ret === "object") return _ret.v;
          } else {
            route.url = "/".concat(route.path);

            if (route.order || route.order === 0) {
              routes = [].concat(_toConsumableArray(routes), [route]).sort(function (a, b) {
                return a.order - b.order;
              });
            } else {
              route.order = routes.length;
              routes = [].concat(_toConsumableArray(routes), [route]);
            }

            flattedRoutes.push(route);
          }

          return patchState({
            routes: routes,
            flattedRoutes: flattedRoutes
          });
        }
      }], [{
        key: "getAll",
        value: function getAll(state) {
          return state;
        }
      }, {
        key: "getApplicationInfo",
        value: function getApplicationInfo(state) {
          return state.environment.application || {};
        }
      }, {
        key: "getOne",
        value: function getOne(key) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            return state[key];
          });
          return selector;
        }
      }, {
        key: "getDeep",
        value: function getDeep(keys) {
          if (typeof keys === 'string') {
            keys = keys.split('.');
          }

          if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
          }

          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            return keys.reduce(function (acc, val) {
              if (acc) {
                return acc[val];
              }

              return undefined;
            }, state);
          });
          return selector;
        }
      }, {
        key: "getRoute",
        value: function getRoute(path, name, url) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            var flattedRoutes = state.flattedRoutes;
            return flattedRoutes.find(function (route) {
              if (path && route.path === path) {
                return route;
              } else if (name && route.name === name) {
                return route;
              } else if (url && route.url === url) {
                return route;
              }
            });
          });
          return selector;
        }
      }, {
        key: "getApiUrl",
        value: function getApiUrl(key) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            return state.environment.apis[key || 'default'].url;
          });
          return selector;
        }
      }, {
        key: "getSetting",
        value: function getSetting(key) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
              return state.setting.values[key];
            });
          });
          return selector;
        }
      }, {
        key: "getSettings",
        value: function getSettings(keyword) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            if (keyword) {
              var keys = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
                return Object.keys(state.setting.values).filter(function (key) {
                  return key.indexOf(keyword) > -1;
                });
              }, []);

              if (keys.length) {
                return keys.reduce(function (acc, key) {
                  return Object.assign({}, acc, _defineProperty({}, key, state.setting.values[key]));
                }, {});
              }
            }

            return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
              return state.setting.values;
            }, {});
          });
          return selector;
        }
      }, {
        key: "getGrantedPolicy",
        value: function getGrantedPolicy(key) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            if (!key) return true;

            var getPolicy = function getPolicy(k) {
              return Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
                return state.auth.grantedPolicies[k];
              }, false);
            };

            var orRegexp = /\|\|/g;
            var andRegexp = /&&/g;

            if (orRegexp.test(key)) {
              var keys = key.split('||').filter(function (k) {
                return !!k;
              });
              if (keys.length !== 2) return false;
              return getPolicy(keys[0].trim()) || getPolicy(keys[1].trim());
            } else if (andRegexp.test(key)) {
              var _keys = key.split('&&').filter(function (k) {
                return !!k;
              });

              if (_keys.length !== 2) return false;
              return getPolicy(_keys[0].trim()) && getPolicy(_keys[1].trim());
            }

            return getPolicy(key);
          });
          return selector;
        }
      }, {
        key: "getLocalization",
        value: function getLocalization(key) {
          for (var _len10 = arguments.length, interpolateParams = new Array(_len10 > 1 ? _len10 - 1 : 0), _key11 = 1; _key11 < _len10; _key11++) {
            interpolateParams[_key11 - 1] = arguments[_key11];
          }

          var defaultValue;

          if (typeof key !== 'string') {
            defaultValue = key.defaultValue;
            key = key.key;
          }

          if (!key) key = '';
          var keys = key.split('::');
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ConfigState_1], function (state) {
            if (!state.localization) return defaultValue || key;
            var defaultResourceName = state.environment.localization.defaultResourceName;

            if (keys[0] === '') {
              if (!defaultResourceName) {
                throw new Error("Please check your environment. May you forget set defaultResourceName?\n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
              }

              keys[0] = Object(snq__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
                return defaultResourceName;
              });
            }

            var localization = keys.reduce(function (acc, val) {
              if (acc) {
                return acc[val];
              }

              return undefined;
            }, state.localization.values);
            interpolateParams = interpolateParams.filter(function (params) {
              return params != null;
            });

            if (localization && interpolateParams && interpolateParams.length) {
              interpolateParams.forEach(function (param) {
                localization = localization.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
              });
            }

            if (typeof localization !== 'string') localization = '';
            return localization || defaultValue || key;
          });
          return selector;
        }
      }]);

      return ConfigState;
    }();

    ConfigState.ctorParameters = function () {
      return [{
        type: _services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationConfigurationService"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["GetAppConfiguration"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ConfigState.prototype, "addData", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["PatchRouteByName"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["PatchRouteByName"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ConfigState.prototype, "patchRoute", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["AddRoute"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_config_actions__WEBPACK_IMPORTED_MODULE_5__["AddRoute"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ConfigState.prototype, "addRoute", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ConfigState, "getAll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)], ConfigState, "getApplicationInfo", null);
    ConfigState = ConfigState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'ConfigState',
      defaults: {}
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationConfigurationService"], _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])], ConfigState);

    function patchRouteDeep(routes, name, newValue) {
      var parentUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      routes = routes.map(function (route) {
        if (route.name === name) {
          newValue.url = "".concat(parentUrl, "/").concat((!newValue.path && newValue.path === '' ? route.path : newValue.path) || '');

          if (newValue.children && newValue.children.length) {
            newValue.children = newValue.children.map(function (child) {
              return Object.assign({}, child, {
                url: "".concat(newValue.url, "/").concat(child.path).replace('//', '/')
              });
            });
          }

          return Object.assign({}, route, newValue);
        } else if (route.children && route.children.length) {
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

    function updateRouteDeep(routes, parentNameArr, newValue) {
      var parentIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var index = routes.findIndex(function (route) {
        return route.name === parentNameArr[parentIndex];
      });

      if (parentIndex === parentNameArr.length - 1) {
        routes[index] = newValue;
      } else {
        routes[index].children = updateRouteDeep(routes[index].children, parentNameArr, newValue, parentIndex + 1);
      }

      return routes;
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/states/index.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/index.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ReplaceableComponentsState, ConfigState, ProfileState, SessionState */

  /***/
  function packagesCoreSrcLibStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _replaceable_components_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./replaceable-components.state */
    "../../packages/core/src/lib/states/replaceable-components.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableComponentsState", function () {
      return _replaceable_components_state__WEBPACK_IMPORTED_MODULE_1__["ReplaceableComponentsState"];
    });
    /* harmony import */


    var _config_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./config.state */
    "../../packages/core/src/lib/states/config.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigState", function () {
      return _config_state__WEBPACK_IMPORTED_MODULE_2__["ConfigState"];
    });
    /* harmony import */


    var _profile_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.state */
    "../../packages/core/src/lib/states/profile.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileState", function () {
      return _profile_state__WEBPACK_IMPORTED_MODULE_3__["ProfileState"];
    });
    /* harmony import */


    var _session_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session.state */
    "../../packages/core/src/lib/states/session.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionState", function () {
      return _session_state__WEBPACK_IMPORTED_MODULE_4__["SessionState"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/states/profile.state.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/profile.state.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ProfileState */

  /***/
  function packagesCoreSrcLibStatesProfileStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileState", function () {
      return ProfileState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/profile.actions */
    "../../packages/core/src/lib/actions/profile.actions.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/profile.service */
    "../../packages/core/src/lib/services/profile.service.ts");

    var ProfileState =
    /*#__PURE__*/
    function () {
      function ProfileState(profileService) {
        _classCallCheck(this, ProfileState);

        this.profileService = profileService;
      }

      _createClass(ProfileState, [{
        key: "getProfile",
        value: function getProfile(_ref9) {
          var patchState = _ref9.patchState;
          return this.profileService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (profile) {
            return patchState({
              profile: profile
            });
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(_ref10, _ref11) {
          var patchState = _ref10.patchState;
          var payload = _ref11.payload;
          return this.profileService.update(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (profile) {
            return patchState({
              profile: profile
            });
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword(_, _ref12) {
          var payload = _ref12.payload;
          return this.profileService.changePassword(payload, true);
        }
      }], [{
        key: "getProfile",
        value: function getProfile(_ref13) {
          var profile = _ref13.profile;
          return profile;
        }
      }]);

      return ProfileState;
    }();

    ProfileState.ctorParameters = function () {
      return [{
        type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["GetProfile"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProfileState.prototype, "getProfile", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProfileState.prototype, "updateProfile", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["ChangePassword"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ProfileState.prototype, "changePassword", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)], ProfileState, "getProfile", null);
    ProfileState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'ProfileState',
      defaults: {}
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])], ProfileState);
    /***/
  },

  /***/
  "../../packages/core/src/lib/states/replaceable-components.state.ts":
  /*!********************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/replaceable-components.state.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: ReplaceableComponentsState */

  /***/
  function packagesCoreSrcLibStatesReplaceableComponentsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableComponentsState", function () {
      return ReplaceableComponentsState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_replaceable_components_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/replaceable-components.actions */
    "../../packages/core/src/lib/actions/replaceable-components.actions.ts");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");

    var ReplaceableComponentsState_1;

    var ReplaceableComponentsState = ReplaceableComponentsState_1 =
    /*#__PURE__*/
    function () {
      function ReplaceableComponentsState() {
        _classCallCheck(this, ReplaceableComponentsState);
      }

      _createClass(ReplaceableComponentsState, [{
        key: "replaceableComponentsAction",
        value: function replaceableComponentsAction(_ref14, _ref15) {
          var getState = _ref14.getState,
              patchState = _ref14.patchState;
          var payload = _ref15.payload;

          var _getState = getState(),
              replaceableComponents = _getState.replaceableComponents;

          var index = Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
            return replaceableComponents.findIndex(function (component) {
              return component.key === payload.key;
            });
          }, -1);

          if (index > -1) {
            replaceableComponents[index] = payload;
          } else {
            replaceableComponents = [].concat(_toConsumableArray(replaceableComponents), [payload]);
          }

          patchState({
            replaceableComponents: replaceableComponents
          });
        }
      }], [{
        key: "getAll",
        value: function getAll(_ref16) {
          var replaceableComponents = _ref16.replaceableComponents;
          return replaceableComponents || [];
        }
      }, {
        key: "getComponent",
        value: function getComponent(key) {
          var selector = Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ReplaceableComponentsState_1], function (state) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
              return state.replaceableComponents.find(function (component) {
                return component.key === key;
              });
            });
          });
          return selector;
        }
      }]);

      return ReplaceableComponentsState;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_replaceable_components_actions__WEBPACK_IMPORTED_MODULE_2__["AddReplaceableComponent"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_replaceable_components_actions__WEBPACK_IMPORTED_MODULE_2__["AddReplaceableComponent"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], ReplaceableComponentsState.prototype, "replaceableComponentsAction", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], ReplaceableComponentsState, "getAll", null);
    ReplaceableComponentsState = ReplaceableComponentsState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'ReplaceableComponentsState',
      defaults: {
        replaceableComponents: []
      }
    })], ReplaceableComponentsState);
    /***/
  },

  /***/
  "../../packages/core/src/lib/states/session.state.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/states/session.state.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SessionState */

  /***/
  function packagesCoreSrcLibStatesSessionStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionState", function () {
      return SessionState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/config.actions */
    "../../packages/core/src/lib/actions/config.actions.ts");
    /* harmony import */


    var _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/session.actions */
    "../../packages/core/src/lib/actions/session.actions.ts");
    /* harmony import */


    var _services_localization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/localization.service */
    "../../packages/core/src/lib/services/localization.service.ts");

    var SessionState =
    /*#__PURE__*/
    function () {
      function SessionState(localizationService) {
        _classCallCheck(this, SessionState);

        this.localizationService = localizationService;
      }

      _createClass(SessionState, [{
        key: "setLanguage",
        value: function setLanguage(_ref17, _ref18) {
          var _this45 = this;

          var patchState = _ref17.patchState,
              dispatch = _ref17.dispatch;
          var payload = _ref18.payload;
          patchState({
            language: payload
          });
          return dispatch(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_4__["GetAppConfiguration"]()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(_this45.localizationService.registerLocale(payload));
          }));
        }
      }, {
        key: "setTenant",
        value: function setTenant(_ref19, _ref20) {
          var patchState = _ref19.patchState;
          var payload = _ref20.payload;
          patchState({
            tenant: payload
          });
        }
      }], [{
        key: "getLanguage",
        value: function getLanguage(_ref21) {
          var language = _ref21.language;
          return language;
        }
      }, {
        key: "getTenant",
        value: function getTenant(_ref22) {
          var tenant = _ref22.tenant;
          return tenant;
        }
      }]);

      return SessionState;
    }();

    SessionState.ctorParameters = function () {
      return [{
        type: _services_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguage"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetLanguage"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], SessionState.prototype, "setLanguage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetTenant"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_session_actions__WEBPACK_IMPORTED_MODULE_5__["SetTenant"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], SessionState.prototype, "setTenant", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)], SessionState, "getLanguage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)], SessionState, "getTenant", null);
    SessionState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'SessionState',
      defaults: {}
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_localization_service__WEBPACK_IMPORTED_MODULE_6__["LocalizationService"]])], SessionState);
    /***/
  },

  /***/
  "../../packages/core/src/lib/tokens/common.token.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/tokens/common.token.ts ***!
    \****************************************************************************************************/

  /*! exports provided: environmentFactory, configFactory, ENVIRONMENT, CONFIG */

  /***/
  function packagesCoreSrcLibTokensCommonTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environmentFactory", function () {
      return environmentFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configFactory", function () {
      return configFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function () {
      return ENVIRONMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONFIG", function () {
      return CONFIG;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    function environmentFactory(environment) {
      return Object.assign({}, environment);
    }

    function configFactory(config) {
      return Object.assign({}, config);
    }

    var ENVIRONMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ENVIRONMENT');
    var CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CONFIG');
    /***/
  },

  /***/
  "../../packages/core/src/lib/tokens/index.ts":
  /*!*********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/tokens/index.ts ***!
    \*********************************************************************************************/

  /*! exports provided: environmentFactory, configFactory, ENVIRONMENT, CONFIG */

  /***/
  function packagesCoreSrcLibTokensIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _common_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common.token */
    "../../packages/core/src/lib/tokens/common.token.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "environmentFactory", function () {
      return _common_token__WEBPACK_IMPORTED_MODULE_1__["environmentFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "configFactory", function () {
      return _common_token__WEBPACK_IMPORTED_MODULE_1__["configFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function () {
      return _common_token__WEBPACK_IMPORTED_MODULE_1__["ENVIRONMENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CONFIG", function () {
      return _common_token__WEBPACK_IMPORTED_MODULE_1__["CONFIG"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/common-utils.ts":
  /*!***************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/common-utils.ts ***!
    \***************************************************************************************************/

  /*! exports provided: noop */

  /***/
  function packagesCoreSrcLibUtilsCommonUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noop", function () {
      return noop;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    function noop() {
      // tslint:disable-next-line: only-arrow-functions
      var fn = function fn() {};

      return fn;
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/date-extensions.ts":
  /*!******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/date-extensions.ts ***!
    \******************************************************************************************************/

  /*! no exports provided */

  /***/
  function packagesCoreSrcLibUtilsDateExtensionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    Date.prototype.toLocalISOString = function () {
      var timezoneOffset = this.getTimezoneOffset();
      return new Date(this.getTime() - timezoneOffset * 60000).toISOString();
    };
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/generator-utils.ts":
  /*!******************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/generator-utils.ts ***!
    \******************************************************************************************************/

  /*! exports provided: uuid */

  /***/
  function packagesCoreSrcLibUtilsGeneratorUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return uuid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    function uuid(a) {
      return a ? // tslint:disable-next-line: no-bitwise
      (a ^ Math.random() * 16 >> a / 4).toString(16) : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/index.ts":
  /*!********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/index.ts ***!
    \********************************************************************************************/

  /*! exports provided: noop, uuid, getInitialData, localeInitializer, registerLocale, organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes, takeUntilDestroy */

  /***/
  function packagesCoreSrcLibUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./common-utils */
    "../../packages/core/src/lib/utils/common-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "noop", function () {
      return _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"];
    });
    /* harmony import */


    var _generator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./generator-utils */
    "../../packages/core/src/lib/utils/generator-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return _generator_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"];
    });
    /* harmony import */


    var _initial_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./initial-utils */
    "../../packages/core/src/lib/utils/initial-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getInitialData", function () {
      return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["getInitialData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "localeInitializer", function () {
      return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["localeInitializer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerLocale", function () {
      return _initial_utils__WEBPACK_IMPORTED_MODULE_3__["registerLocale"];
    });
    /* harmony import */


    var _route_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./route-utils */
    "../../packages/core/src/lib/utils/route-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "organizeRoutes", function () {
      return _route_utils__WEBPACK_IMPORTED_MODULE_4__["organizeRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setChildRoute", function () {
      return _route_utils__WEBPACK_IMPORTED_MODULE_4__["setChildRoute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortRoutes", function () {
      return _route_utils__WEBPACK_IMPORTED_MODULE_4__["sortRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function () {
      return _route_utils__WEBPACK_IMPORTED_MODULE_4__["addAbpRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function () {
      return _route_utils__WEBPACK_IMPORTED_MODULE_4__["getAbpRoutes"];
    });
    /* harmony import */


    var _rxjs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rxjs-utils */
    "../../packages/core/src/lib/utils/rxjs-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function () {
      return _rxjs_utils__WEBPACK_IMPORTED_MODULE_5__["takeUntilDestroy"];
    });
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/initial-utils.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/initial-utils.ts ***!
    \****************************************************************************************************/

  /*! exports provided: getInitialData, localeInitializer, registerLocale */

  /***/
  function packagesCoreSrcLibUtilsInitialUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getInitialData", function () {
      return getInitialData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localeInitializer", function () {
      return localeInitializer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerLocale", function () {
      return registerLocale;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _actions_config_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/config.actions */
    "../../packages/core/src/lib/actions/config.actions.ts");
    /* harmony import */


    var _constants_different_locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../constants/different-locales */
    "../../packages/core/src/lib/constants/different-locales.ts");

    function getInitialData(injector) {
      var fn = function fn() {
        var store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]);
        return store.dispatch(new _actions_config_actions__WEBPACK_IMPORTED_MODULE_3__["GetAppConfiguration"]()).toPromise();
      };

      return fn;
    }

    function localeInitializer(injector) {
      var fn = function fn() {
        var store = injector.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]);
        var lang = store.selectSnapshot(function (state) {
          return state.SessionState.language;
        }) || 'en';
        return new Promise(function (resolve, reject) {
          registerLocale(lang).then(function () {
            return resolve('resolved');
          }, reject);
        });
      };

      return fn;
    }

    function registerLocale(locale) {
      return __webpack_require__("../../node_modules/@angular/common/locales lazy recursive ^\\.\\/.*\\.js$ include: (af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\\.js$")("./".concat(_constants_different_locales__WEBPACK_IMPORTED_MODULE_4__["default"][locale] || locale, ".js")).then(function (module) {
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(module["default"]);
      });
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/route-utils.ts":
  /*!**************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/route-utils.ts ***!
    \**************************************************************************************************/

  /*! exports provided: organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes */

  /***/
  function packagesCoreSrcLibUtilsRouteUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "organizeRoutes", function () {
      return organizeRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setChildRoute", function () {
      return setChildRoute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortRoutes", function () {
      return sortRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function () {
      return addAbpRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function () {
      return getAbpRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    function organizeRoutes(routes) {
      var wrappers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var parentNameArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var parentName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var filter = function filter(route) {
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

      var filteredRoutes = routes.filter(filter);

      if (parentNameArr.length) {
        return sortRoutes(setChildRoute([].concat(_toConsumableArray(filteredRoutes), _toConsumableArray(wrappers)), parentNameArr));
      }

      return filteredRoutes;
    }

    function setChildRoute(routes, parentNameArr) {
      return routes.map(function (route) {
        if (route.children && route.children.length) {
          route.children = setChildRoute(route.children, parentNameArr);
        }

        var foundedChildren = parentNameArr.filter(function (parent) {
          return parent.parentName === route.name;
        });

        if (foundedChildren && foundedChildren.length) {
          route.children = [].concat(_toConsumableArray(route.children || []), _toConsumableArray(foundedChildren));
        }

        return route;
      });
    }

    function sortRoutes() {
      var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (!routes.length) return [];
      return routes.map(function (route, index) {
        return Object.assign({}, route, {
          order: typeof route.order === 'undefined' ? index + 1 : route.order
        });
      }).sort(function (a, b) {
        return a.order - b.order;
      }).map(function (route) {
        if (route.children && route.children.length) {
          route.children = sortRoutes(route.children);
        }

        return route;
      });
    }

    var ABP_ROUTES = [];

    function addAbpRoutes(routes) {
      if (!Array.isArray(routes)) {
        routes = [routes];
      }

      ABP_ROUTES.push.apply(ABP_ROUTES, _toConsumableArray(routes));
    }

    function getAbpRoutes() {
      return ABP_ROUTES;
    }
    /***/

  },

  /***/
  "../../packages/core/src/lib/utils/rxjs-utils.ts":
  /*!*************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/lib/utils/rxjs-utils.ts ***!
    \*************************************************************************************************/

  /*! exports provided: takeUntilDestroy */

  /***/
  function packagesCoreSrcLibUtilsRxjsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function () {
      return takeUntilDestroy;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    function isFunction(value) {
      return typeof value === 'function';
    }

    var takeUntilDestroy = function takeUntilDestroy(componentInstance) {
      var destroyMethodName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ngOnDestroy';
      return function (source) {
        var originalDestroy = componentInstance[destroyMethodName];

        if (isFunction(originalDestroy) === false) {
          throw new Error("".concat(componentInstance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
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
    };
    /***/

  },

  /***/
  "../../packages/core/src/public-api.ts":
  /*!***************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/core/src/public-api.ts ***!
    \***************************************************************************************/

  /*! exports provided: AbstractNgModelComponent, PatchRouteByName, GetAppConfiguration, AddRoute, StartLoader, StopLoader, GetProfile, UpdateProfile, ChangePassword, AddReplaceableComponent, RestOccurError, SetLanguage, SetTenant, DynamicLayoutComponent, ReplaceableRouteContainerComponent, RouterOutletComponent, AutofocusDirective, EllipsisDirective, ForDirective, FormSubmitDirective, InitDirective, PermissionDirective, ReplaceableTemplateDirective, VisibilityDirective, ApiInterceptor, LocalizationPipe, SortPipe, NGXS_CONFIG_PLUGIN_OPTIONS, ConfigPlugin, ApplicationConfigurationService, LocalizationService, ProfileService, RestService, CoreModule, AuthGuard, PermissionGuard, ConfigStateService, LazyLoadService, ProfileStateService, SessionStateService, ReplaceableComponentsState, ConfigState, ProfileState, SessionState, environmentFactory, configFactory, ENVIRONMENT, CONFIG, noop, uuid, getInitialData, localeInitializer, registerLocale, organizeRoutes, setChildRoute, sortRoutes, addAbpRoutes, getAbpRoutes, takeUntilDestroy */

  /***/
  function packagesCoreSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/abstracts */
    "../../packages/core/src/lib/abstracts/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AbstractNgModelComponent", function () {
      return _lib_abstracts__WEBPACK_IMPORTED_MODULE_1__["AbstractNgModelComponent"];
    });
    /* harmony import */


    var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/actions */
    "../../packages/core/src/lib/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PatchRouteByName", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["PatchRouteByName"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetAppConfiguration", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetAppConfiguration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddRoute", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["AddRoute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StartLoader", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["StartLoader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StopLoader", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["StopLoader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GetProfile", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfile", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateProfile"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChangePassword", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["ChangePassword"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddReplaceableComponent", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["AddReplaceableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RestOccurError", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["RestOccurError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SetLanguage", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["SetLanguage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SetTenant", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["SetTenant"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/core/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["DynamicLayoutComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableRouteContainerComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ReplaceableRouteContainerComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouterOutletComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["RouterOutletComponent"];
    });
    /* harmony import */


    var _lib_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/directives */
    "../../packages/core/src/lib/directives/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["AutofocusDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EllipsisDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["EllipsisDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ForDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["ForDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["FormSubmitDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InitDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["InitDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["PermissionDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableTemplateDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["ReplaceableTemplateDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
      return _lib_directives__WEBPACK_IMPORTED_MODULE_4__["VisibilityDirective"];
    });
    /* harmony import */


    var _lib_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/enums */
    "../../packages/core/src/lib/enums/index.ts");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _lib_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/guards */
    "../../packages/core/src/lib/guards/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _lib_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PermissionGuard", function () {
      return _lib_guards__WEBPACK_IMPORTED_MODULE_6__["PermissionGuard"];
    });
    /* harmony import */


    var _lib_interceptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/interceptors */
    "../../packages/core/src/lib/interceptors/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return _lib_interceptors__WEBPACK_IMPORTED_MODULE_7__["ApiInterceptor"];
    });
    /* harmony import */


    var _lib_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lib/models */
    "../../packages/core/src/lib/models/index.ts");
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _lib_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lib/pipes */
    "../../packages/core/src/lib/pipes/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalizationPipe", function () {
      return _lib_pipes__WEBPACK_IMPORTED_MODULE_9__["LocalizationPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return _lib_pipes__WEBPACK_IMPORTED_MODULE_9__["SortPipe"];
    });
    /* harmony import */


    var _lib_plugins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lib/plugins */
    "../../packages/core/src/lib/plugins/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NGXS_CONFIG_PLUGIN_OPTIONS", function () {
      return _lib_plugins__WEBPACK_IMPORTED_MODULE_10__["NGXS_CONFIG_PLUGIN_OPTIONS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigPlugin", function () {
      return _lib_plugins__WEBPACK_IMPORTED_MODULE_10__["ConfigPlugin"];
    });
    /* harmony import */


    var _lib_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lib/services */
    "../../packages/core/src/lib/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationConfigurationService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ApplicationConfigurationService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocalizationService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["LocalizationService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ProfileService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["RestService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ConfigStateService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LazyLoadService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["LazyLoadService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["ProfileStateService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionStateService", function () {
      return _lib_services__WEBPACK_IMPORTED_MODULE_11__["SessionStateService"];
    });
    /* harmony import */


    var _lib_states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./lib/states */
    "../../packages/core/src/lib/states/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReplaceableComponentsState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_12__["ReplaceableComponentsState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_12__["ConfigState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_12__["ProfileState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_12__["SessionState"];
    });
    /* harmony import */


    var _lib_tokens__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./lib/tokens */
    "../../packages/core/src/lib/tokens/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "environmentFactory", function () {
      return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["environmentFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "configFactory", function () {
      return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["configFactory"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ENVIRONMENT", function () {
      return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["ENVIRONMENT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CONFIG", function () {
      return _lib_tokens__WEBPACK_IMPORTED_MODULE_13__["CONFIG"];
    });
    /* harmony import */


    var _lib_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./lib/utils */
    "../../packages/core/src/lib/utils/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "noop", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["noop"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "uuid", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["uuid"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getInitialData", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["getInitialData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "localeInitializer", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["localeInitializer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "registerLocale", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["registerLocale"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "organizeRoutes", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["organizeRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "setChildRoute", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["setChildRoute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortRoutes", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["sortRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addAbpRoutes", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["addAbpRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAbpRoutes", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["getAbpRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "takeUntilDestroy", function () {
      return _lib_utils__WEBPACK_IMPORTED_MODULE_14__["takeUntilDestroy"];
    });
    /* harmony import */


    var _lib_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./lib/core.module */
    "../../packages/core/src/lib/core.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _lib_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"];
    });
    /*
     * Public API Surface of core
     */
    // export * from './lib/handlers';

    /***/

  },

  /***/
  "../../packages/identity-config/src/lib/identity-config.module.ts":
  /*!******************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/identity-config.module.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: IdentityConfigModule */

  /***/
  function packagesIdentityConfigSrcLibIdentityConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function () {
      return IdentityConfigModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/identity-config.service */
    "../../packages/identity-config/src/lib/services/identity-config.service.ts");

    var IdentityConfigModule = function IdentityConfigModule() {
      _classCallCheck(this, IdentityConfigModule);
    };

    IdentityConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
        deps: [_services_identity_config_service__WEBPACK_IMPORTED_MODULE_3__["IdentityConfigService"]],
        useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["noop"],
        multi: true
      }]
    })], IdentityConfigModule);
    /***/
  },

  /***/
  "../../packages/identity-config/src/lib/services/identity-config.service.ts":
  /*!****************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/lib/services/identity-config.service.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: IdentityConfigService */

  /***/
  function packagesIdentityConfigSrcLibServicesIdentityConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function () {
      return IdentityConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var IdentityConfigService = function IdentityConfigService(router, restService) {
      _classCallCheck(this, IdentityConfigService);

      this.router = router;
      this.restService = restService;
      Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["addAbpRoutes"])([{
        name: 'AbpUiNavigation::Menu:Administration',
        path: '',
        order: 1,
        wrapper: true,
        iconClass: 'fa fa-wrench'
      }, {
        name: 'AbpIdentity::Menu:IdentityManagement',
        path: 'identity',
        order: 1,
        parentName: 'AbpUiNavigation::Menu:Administration',
        layout: "application"
        /* application */
        ,
        iconClass: 'fa fa-id-card-o',
        children: [{
          path: 'roles',
          name: 'AbpIdentity::Roles',
          order: 1,
          requiredPolicy: 'AbpIdentity.Roles'
        }, {
          path: 'users',
          name: 'AbpIdentity::Users',
          order: 2,
          requiredPolicy: 'AbpIdentity.Users'
        }]
      }]);
    };

    IdentityConfigService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]
      }];
    };

    IdentityConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["RestService"]])], IdentityConfigService);
    /***/
  },

  /***/
  "../../packages/identity-config/src/public-api.ts":
  /*!**************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity-config/src/public-api.ts ***!
    \**************************************************************************************************/

  /*! exports provided: IdentityConfigService, IdentityConfigModule */

  /***/
  function packagesIdentityConfigSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/services/identity-config.service */
    "../../packages/identity-config/src/lib/services/identity-config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityConfigService", function () {
      return _lib_services_identity_config_service__WEBPACK_IMPORTED_MODULE_1__["IdentityConfigService"];
    });
    /* harmony import */


    var _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/identity-config.module */
    "../../packages/identity-config/src/lib/identity-config.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IdentityConfigModule", function () {
      return _lib_identity_config_module__WEBPACK_IMPORTED_MODULE_2__["IdentityConfigModule"];
    });
    /***/

  },

  /***/
  "../../packages/setting-management-config/src/lib/services/setting-management-config.service.ts":
  /*!************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/lib/services/setting-management-config.service.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: SettingManagementConfigService */

  /***/
  function packagesSettingManagementConfigSrcLibServicesSettingManagementConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementConfigService", function () {
      return SettingManagementConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");

    var SettingManagementConfigService = function SettingManagementConfigService(store) {
      var _this46 = this;

      _classCallCheck(this, SettingManagementConfigService);

      this.store = store;
      var route = {
        name: 'AbpSettingManagement::Settings',
        path: 'setting-management',
        parentName: 'AbpUiNavigation::Menu:Administration',
        requiredPolicy: 'AbpAccount.SettingManagement',
        layout: "application"
        /* application */
        ,
        order: 6,
        iconClass: 'fa fa-cog'
      };
      Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])(route);
      setTimeout(function () {
        var tabs = Object(_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_3__["getSettingTabs"])();

        if (!tabs || !tabs.length) {
          _this46.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["PatchRouteByName"]('AbpSettingManagement::Settings', Object.assign({}, route, {
            invisible: true
          })));
        }
      });
    };

    SettingManagementConfigService.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    SettingManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])], SettingManagementConfigService);
    /***/
  },

  /***/
  "../../packages/setting-management-config/src/lib/setting-management-config.module.ts":
  /*!**************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/lib/setting-management-config.module.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: SettingManagementConfigModule */

  /***/
  function packagesSettingManagementConfigSrcLibSettingManagementConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function () {
      return SettingManagementConfigModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/setting-management-config.service */
    "../../packages/setting-management-config/src/lib/services/setting-management-config.service.ts");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");

    var SettingManagementConfigModule = function SettingManagementConfigModule() {
      _classCallCheck(this, SettingManagementConfigModule);
    };

    SettingManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        deps: [_services_setting_management_config_service__WEBPACK_IMPORTED_MODULE_2__["SettingManagementConfigService"]],
        useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"],
        multi: true
      }]
    })], SettingManagementConfigModule);
    /***/
  },

  /***/
  "../../packages/setting-management-config/src/public-api.ts":
  /*!************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/setting-management-config/src/public-api.ts ***!
    \************************************************************************************************************/

  /*! exports provided: SettingManagementConfigModule */

  /***/
  function packagesSettingManagementConfigSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/setting-management-config.module */
    "../../packages/setting-management-config/src/lib/setting-management-config.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingManagementConfigModule", function () {
      return _lib_setting_management_config_module__WEBPACK_IMPORTED_MODULE_1__["SettingManagementConfigModule"];
    });
    /***/

  },

  /***/
  "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: TenantManagementConfigService */

  /***/
  function packagesTenantManagementConfigSrcLibServicesTenantManagementConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function () {
      return TenantManagementConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");

    var TenantManagementConfigService = function TenantManagementConfigService() {
      _classCallCheck(this, TenantManagementConfigService);

      Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["addAbpRoutes"])({
        name: 'AbpTenantManagement::Menu:TenantManagement',
        path: 'tenant-management',
        parentName: 'AbpUiNavigation::Menu:Administration',
        layout: "application"
        /* application */
        ,
        iconClass: 'fa fa-users',
        children: [{
          path: 'tenants',
          name: 'AbpTenantManagement::Tenants',
          order: 1,
          requiredPolicy: 'AbpTenantManagement.Tenants'
        }]
      });
    };

    TenantManagementConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TenantManagementConfigService);
    /***/
  },

  /***/
  "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts":
  /*!************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/lib/tenant-management-config.module.ts ***!
    \************************************************************************************************************************************/

  /*! exports provided: TenantManagementConfigModule */

  /***/
  function packagesTenantManagementConfigSrcLibTenantManagementConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function () {
      return TenantManagementConfigModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/tenant-management-config.service */
    "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");

    var TenantManagementConfigModule = function TenantManagementConfigModule() {
      _classCallCheck(this, TenantManagementConfigModule);
    };

    TenantManagementConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        deps: [_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigService"]],
        useFactory: _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["noop"],
        multi: true
      }]
    })], TenantManagementConfigModule);
    /***/
  },

  /***/
  "../../packages/tenant-management-config/src/public-api.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/tenant-management-config/src/public-api.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: TenantManagementConfigService, TenantManagementConfigModule */

  /***/
  function packagesTenantManagementConfigSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/services/tenant-management-config.service */
    "../../packages/tenant-management-config/src/lib/services/tenant-management-config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementConfigService", function () {
      return _lib_services_tenant_management_config_service__WEBPACK_IMPORTED_MODULE_1__["TenantManagementConfigService"];
    });
    /* harmony import */


    var _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/tenant-management-config.module */
    "../../packages/tenant-management-config/src/lib/tenant-management-config.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TenantManagementConfigModule", function () {
      return _lib_tenant_management_config_module__WEBPACK_IMPORTED_MODULE_2__["TenantManagementConfigModule"];
    });
    /***/

  },

  /***/
  "../../packages/theme-basic/src/lib/actions/index.ts":
  /*!*****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/index.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: AddNavigationElement, RemoveNavigationElementByName */

  /***/
  function packagesThemeBasicSrcLibActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout.actions */
    "../../packages/theme-basic/src/lib/actions/layout.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function () {
      return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["AddNavigationElement"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function () {
      return _layout_actions__WEBPACK_IMPORTED_MODULE_1__["RemoveNavigationElementByName"];
    });
    /***/

  },

  /***/
  "../../packages/theme-basic/src/lib/actions/layout.actions.ts":
  /*!**************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/actions/layout.actions.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: AddNavigationElement, RemoveNavigationElementByName */

  /***/
  function packagesThemeBasicSrcLibActionsLayoutActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function () {
      return AddNavigationElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function () {
      return RemoveNavigationElementByName;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var AddNavigationElement = function AddNavigationElement(payload) {
      _classCallCheck(this, AddNavigationElement);

      this.payload = payload;
    };

    AddNavigationElement.type = '[Layout] Add Navigation Element';

    var RemoveNavigationElementByName = function RemoveNavigationElementByName(name) {
      _classCallCheck(this, RemoveNavigationElementByName);

      this.name = name;
    };

    RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts":
  /*!******************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts ***!
    \******************************************************************************************************************************************/

  /*! exports provided: AccountLayoutComponent */

  /***/
  function packagesThemeBasicSrcLibComponentsAccountLayoutAccountLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function () {
      return AccountLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AccountLayoutComponent = function AccountLayoutComponent() {
      _classCallCheck(this, AccountLayoutComponent);
    }; // required for dynamic component


    AccountLayoutComponent.type = "account"
    /* account */
    ;
    AccountLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-layout-account',
      template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  "
    })], AccountLayoutComponent);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts":
  /*!**************************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: ApplicationLayoutComponent */

  /***/
  function packagesThemeBasicSrcLibComponentsApplicationLayoutApplicationLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function () {
      return ApplicationLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "../../node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-oauth2-oidc */
    "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! just-compare */
    "../../node_modules/just-compare/index.js");
    /* harmony import */


    var just_compare__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(just_compare__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../actions */
    "../../packages/theme-basic/src/lib/actions/index.ts");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../states */
    "../../packages/theme-basic/src/lib/states/index.ts");

    var ApplicationLayoutComponent =
    /*#__PURE__*/
    function () {
      function ApplicationLayoutComponent(store, oauthService, renderer) {
        _classCallCheck(this, ApplicationLayoutComponent);

        this.store = store;
        this.oauthService = oauthService;
        this.renderer = renderer;
        this.isCollapsed = true;
        this.rightPartElements = [];

        this.trackByFn = function (_, item) {
          return item.name;
        };

        this.trackElementByFn = function (_, element) {
          return element;
        };
      }

      _createClass(ApplicationLayoutComponent, [{
        key: "checkWindowWidth",
        value: function checkWindowWidth() {
          var _this47 = this;

          setTimeout(function () {
            if (window.innerWidth < 768) {
              _this47.isDropdownChildDynamic = false;

              if (_this47.smallScreen === false) {
                _this47.isCollapsed = false;
                setTimeout(function () {
                  _this47.isCollapsed = true;
                }, 100);
              }

              _this47.smallScreen = true;
            } else {
              _this47.isDropdownChildDynamic = true;
              _this47.smallScreen = false;
            }
          }, 0);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this48 = this;

          var navigations = this.store.selectSnapshot(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements).map(function (_ref23) {
            var name = _ref23.name;
            return name;
          });

          if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new _actions__WEBPACK_IMPORTED_MODULE_11__["AddNavigationElement"]([{
              element: this.languageRef,
              order: 4,
              name: 'LanguageRef'
            }, {
              element: this.currentUserRef,
              order: 5,
              name: 'CurrentUserRef'
            }]));
          }

          this.navElements$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (elements) {
            return elements.map(function (_ref24) {
              var element = _ref24.element;
              return element;
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (elements) {
            return !just_compare__WEBPACK_IMPORTED_MODULE_7___default()(elements, _this48.rightPartElements);
          }), Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this)).subscribe(function (elements) {
            setTimeout(function () {
              return _this48.rightPartElements = elements;
            }, 0);
          });
          this.checkWindowWidth();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'resize').pipe(Object(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroy"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(150)).subscribe(function () {
            _this48.checkWindowWidth();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "onChangeLang",
        value: function onChangeLang(cultureName) {
          this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SetLanguage"](cultureName));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.oauthService.logOut();
          this.store.dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["Navigate"](['/'], null, {
            state: {
              redirectUrl: this.store.selectSnapshot(_ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["RouterState"]).state.url
            }
          }));
          this.store.dispatch(new _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["GetAppConfiguration"]());
        }
      }, {
        key: "openChange",
        value: function openChange(event, childrenContainer) {
          var _this49 = this;

          if (!event) {
            Object.keys(childrenContainer.style).filter(function (key) {
              return Number.isInteger(+key);
            }).forEach(function (key) {
              _this49.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            });
            this.renderer.removeStyle(childrenContainer, 'left');
          }
        }
      }, {
        key: "appInfo",
        get: function get() {
          return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getApplicationInfo);
        }
      }, {
        key: "visibleRoutes$",
        get: function get() {
          return this.routes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (routes) {
            return getVisibleRoutes(routes);
          }));
        }
      }, {
        key: "defaultLanguage$",
        get: function get() {
          var _this50 = this;

          return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (languages) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
              return languages.find(function (lang) {
                return lang.cultureName === _this50.selectedLangCulture;
              }).displayName;
            });
          }, ''));
        }
      }, {
        key: "dropdownLanguages$",
        get: function get() {
          var _this51 = this;

          return this.languages$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (languages) {
            return Object(snq__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
              return languages.filter(function (lang) {
                return lang.cultureName !== _this51.selectedLangCulture;
              });
            });
          }, []));
        }
      }, {
        key: "selectedLangCulture",
        get: function get() {
          return this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["SessionState"].getLanguage);
        }
      }]);

      return ApplicationLayoutComponent;
    }(); // required for dynamic component


    ApplicationLayoutComponent.type = "application"
    /* application */
    ;

    ApplicationLayoutComponent.ctorParameters = function () {
      return [{
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('routes')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], ApplicationLayoutComponent.prototype, "routes$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getOne('currentUser')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getDeep('localization.languages')), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], ApplicationLayoutComponent.prototype, "languages$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_states__WEBPACK_IMPORTED_MODULE_12__["LayoutState"].getNavigationElements), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"])], ApplicationLayoutComponent.prototype, "navElements$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('currentUser', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], ApplicationLayoutComponent.prototype, "currentUserRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('language', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])], ApplicationLayoutComponent.prototype, "languageRef", void 0);
    ApplicationLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'abp-layout-application',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./application-layout.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.html"))["default"],
      animations: [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["slideFromBottom"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["collapseWithMargin"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])], ApplicationLayoutComponent);

    function getVisibleRoutes(routes) {
      return routes.reduce(function (acc, val) {
        if (val.invisible) return acc;

        if (val.children && val.children.length) {
          val.children = getVisibleRoutes(val.children);
        }

        return [].concat(_toConsumableArray(acc), [val]);
      }, []);
    }
    /***/

  },

  /***/
  "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts":
  /*!**************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: EmptyLayoutComponent */

  /***/
  function packagesThemeBasicSrcLibComponentsEmptyLayoutEmptyLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function () {
      return EmptyLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var EmptyLayoutComponent = function EmptyLayoutComponent() {
      _classCallCheck(this, EmptyLayoutComponent);
    };

    EmptyLayoutComponent.type = "empty"
    /* empty */
    ;
    EmptyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-layout-empty',
      template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast></abp-toast>\n  "
    })], EmptyLayoutComponent);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/components/index.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/index.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ValidationErrorComponent, AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent */

  /***/
  function packagesThemeBasicSrcLibComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./account-layout/account-layout.component */
    "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function () {
      return _account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_1__["AccountLayoutComponent"];
    });
    /* harmony import */


    var _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./application-layout/application-layout.component */
    "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function () {
      return _application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationLayoutComponent"];
    });
    /* harmony import */


    var _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./empty-layout/empty-layout.component */
    "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function () {
      return _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"];
    });
    /* harmony import */


    var _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./validation-error/validation-error.component */
    "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function () {
      return _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__["ValidationErrorComponent"];
    });
    /***/

  },

  /***/
  "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: ValidationErrorComponent */

  /***/
  function packagesThemeBasicSrcLibComponentsValidationErrorValidationErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function () {
      return ValidationErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");

    var ValidationErrorComponent =
    /*#__PURE__*/
    function (_ngx_validate_core__W) {
      _inherits(ValidationErrorComponent, _ngx_validate_core__W);

      function ValidationErrorComponent() {
        _classCallCheck(this, ValidationErrorComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(ValidationErrorComponent).apply(this, arguments));
      }

      _createClass(ValidationErrorComponent, [{
        key: "abpErrors",
        get: function get() {
          if (!this.errors || !this.errors.length) return [];
          return this.errors.map(function (error) {
            if (!error.message) return error;
            var index = error.message.indexOf('[');

            if (index > -1) {
              return Object.assign({}, error, {
                message: error.message.slice(0, index),
                interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',')
              });
            }

            return error;
          });
        }
      }]);

      return ValidationErrorComponent;
    }(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_2__["ValidationErrorComponent"]);

    ValidationErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'abp-validation-error',
      template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })], ValidationErrorComponent);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/constants/styles.ts":
  /*!********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/constants/styles.ts ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function packagesThemeBasicSrcLibConstantsStylesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony default export */


    __webpack_exports__["default"] = "\n.content-header-title {\n    font-size: 24px;\n}\n\n.entry-row {\n    margin-bottom: 15px;\n}\n\n#main-navbar-tools a.dropdown-toggle {\n    text-decoration: none;\n    color: #fff;\n}\n\n.navbar .dropdown-submenu {\n    position: relative;\n}\n.navbar .dropdown-menu {\n    margin: 0;\n    padding: 0;\n}\n    .navbar .dropdown-menu a {\n        font-size: .9em;\n        padding: 10px 15px;\n        display: block;\n        min-width: 210px;\n        text-align: left;\n        border-radius: 0.25rem;\n        min-height: 44px;\n    }\n.navbar .dropdown-submenu a::after {\n    transform: rotate(-90deg);\n    position: absolute;\n    right: 16px;\n    top: 18px;\n}\n.navbar .dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n}\n\n.card-header .btn {\n    padding: 2px 6px;\n}\n.card-header h5 {\n    margin: 0;\n}\n.container > .card {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.abp-confirm .abp-confirm-footer {\n    background-color: #f4f4f7 !important;\n}\n.abp-confirm .ui-toast-message-content {\n    background-color: #fff !important;\n}\n\n@media screen and (min-width: 768px) {\n    .navbar .dropdown:hover > .dropdown-menu {\n        display: block;\n    }\n\n    .navbar .dropdown-submenu:hover > .dropdown-menu {\n        display: block;\n    }\n}\n.input-validation-error {\n    border-color: #dc3545;\n}\n.field-validation-error {\n    font-size: 0.8em;\n}\n";
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/services/initial.service.ts":
  /*!****************************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/services/initial.service.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: InitialService */

  /***/
  function packagesThemeBasicSrcLibServicesInitialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialService", function () {
      return InitialService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _constants_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/styles */
    "../../packages/theme-basic/src/lib/constants/styles.ts");

    var InitialService =
    /*#__PURE__*/
    function () {
      function InitialService(lazyLoadService) {
        _classCallCheck(this, InitialService);

        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
      }

      _createClass(InitialService, [{
        key: "appendStyle",
        value: function appendStyle() {
          return this.lazyLoadService.load(null, 'style', _constants_styles__WEBPACK_IMPORTED_MODULE_3__["default"], 'head', 'beforeend');
        }
      }]);

      return InitialService;
    }();

    InitialService.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"]
      }];
    };

    InitialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["LazyLoadService"]])], InitialService);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/states/index.ts":
  /*!****************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/index.ts ***!
    \****************************************************************************************************/

  /*! exports provided: LayoutState */

  /***/
  function packagesThemeBasicSrcLibStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _layout_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout.state */
    "../../packages/theme-basic/src/lib/states/layout.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutState", function () {
      return _layout_state__WEBPACK_IMPORTED_MODULE_1__["LayoutState"];
    });
    /***/

  },

  /***/
  "../../packages/theme-basic/src/lib/states/layout.state.ts":
  /*!***********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/states/layout.state.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: LayoutState */

  /***/
  function packagesThemeBasicSrcLibStatesLayoutStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutState", function () {
      return LayoutState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var snq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! snq */
    "../../node_modules/snq/dist/snq.es5.js");
    /* harmony import */


    var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/layout.actions */
    "../../packages/theme-basic/src/lib/actions/layout.actions.ts");

    var LayoutState =
    /*#__PURE__*/
    function () {
      function LayoutState() {
        _classCallCheck(this, LayoutState);
      }

      _createClass(LayoutState, [{
        key: "layoutAddAction",
        value: function layoutAddAction(_ref25, _ref26) {
          var getState = _ref25.getState,
              patchState = _ref25.patchState;
          var _ref26$payload = _ref26.payload,
              payload = _ref26$payload === void 0 ? [] : _ref26$payload;

          var _getState2 = getState(),
              navigationElements = _getState2.navigationElements;

          if (!Array.isArray(payload)) {
            payload = [payload];
          }

          if (navigationElements.length) {
            payload = Object(snq__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
              return payload.filter(function (_ref27) {
                var name = _ref27.name;
                return navigationElements.findIndex(function (nav) {
                  return nav.name === name;
                }) < 0;
              });
            }, []);
          }

          if (!payload.length) return;
          navigationElements = [].concat(_toConsumableArray(navigationElements), _toConsumableArray(payload)).map(function (element) {
            return Object.assign({}, element, {
              order: element.order || 99
            });
          }).sort(function (a, b) {
            return a.order - b.order;
          });
          return patchState({
            navigationElements: navigationElements
          });
        }
      }, {
        key: "layoutRemoveAction",
        value: function layoutRemoveAction(_ref28, _ref29) {
          var getState = _ref28.getState,
              patchState = _ref28.patchState;
          var name = _ref29.name;

          var _getState3 = getState(),
              navigationElements = _getState3.navigationElements;

          var index = navigationElements.findIndex(function (element) {
            return element.name === name;
          });

          if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
          }

          return patchState({
            navigationElements: navigationElements
          });
        }
      }], [{
        key: "getNavigationElements",
        value: function getNavigationElements(_ref30) {
          var navigationElements = _ref30.navigationElements;
          return navigationElements;
        }
      }]);

      return LayoutState;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["AddNavigationElement"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["AddNavigationElement"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LayoutState.prototype, "layoutAddAction", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveNavigationElementByName"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveNavigationElementByName"]]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], LayoutState.prototype, "layoutRemoveAction", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)], LayoutState, "getNavigationElements", null);
    LayoutState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'LayoutState',
      defaults: {
        navigationElements: []
      }
    })], LayoutState);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/lib/theme-basic.module.ts":
  /*!**********************************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/lib/theme-basic.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: LAYOUTS, ThemeBasicModule */

  /***/
  function packagesThemeBasicSrcLibThemeBasicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAYOUTS", function () {
      return LAYOUTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function () {
      return ThemeBasicModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-validate/core */
    "../../node_modules/@ngx-validate/core/fesm2015/ngx-validate-core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/toast */
    "../../node_modules/primeng/toast.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/account-layout/account-layout.component */
    "../../packages/theme-basic/src/lib/components/account-layout/account-layout.component.ts");
    /* harmony import */


    var _components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/application-layout/application-layout.component */
    "../../packages/theme-basic/src/lib/components/application-layout/application-layout.component.ts");
    /* harmony import */


    var _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/empty-layout/empty-layout.component */
    "../../packages/theme-basic/src/lib/components/empty-layout/empty-layout.component.ts");
    /* harmony import */


    var _states_layout_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./states/layout.state */
    "../../packages/theme-basic/src/lib/states/layout.state.ts");
    /* harmony import */


    var _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/validation-error/validation-error.component */
    "../../packages/theme-basic/src/lib/components/validation-error/validation-error.component.ts");
    /* harmony import */


    var _services_initial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/initial.service */
    "../../packages/theme-basic/src/lib/services/initial.service.ts");

    var LAYOUTS = [_components_application_layout_application_layout_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationLayoutComponent"], _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_8__["AccountLayoutComponent"], _components_empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_10__["EmptyLayoutComponent"]];

    var ThemeBasicModule = function ThemeBasicModule(initialService) {
      _classCallCheck(this, ThemeBasicModule);

      this.initialService = initialService;
    };

    ThemeBasicModule.ctorParameters = function () {
      return [{
        type: _services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"]
      }];
    };

    ThemeBasicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [].concat(LAYOUTS, [_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]]),
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_7__["ToastModule"], _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_states_layout_state__WEBPACK_IMPORTED_MODULE_11__["LayoutState"]]), _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["NgxValidateCoreModule"].forRoot({
        targetSelector: '.form-group',
        blueprints: {
          email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
          max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
          maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthoOf{0}[{{ requiredLength }}]',
          min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
          minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
          required: 'AbpAccount::ThisFieldIsRequired.',
          passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed'
        },
        errorTemplate: _components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]
      })],
      exports: [].concat(LAYOUTS),
      entryComponents: [].concat(LAYOUTS, [_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__["ValidationErrorComponent"]])
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_initial_service__WEBPACK_IMPORTED_MODULE_13__["InitialService"]])], ThemeBasicModule);
    /***/
  },

  /***/
  "../../packages/theme-basic/src/public-api.ts":
  /*!**********************************************************************************************!*\
    !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/theme-basic/src/public-api.ts ***!
    \**********************************************************************************************/

  /*! exports provided: LAYOUTS, ThemeBasicModule, ValidationErrorComponent, LayoutState, AddNavigationElement, RemoveNavigationElementByName, AccountLayoutComponent, ApplicationLayoutComponent, EmptyLayoutComponent */

  /***/
  function packagesThemeBasicSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/theme-basic.module */
    "../../packages/theme-basic/src/lib/theme-basic.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LAYOUTS", function () {
      return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["LAYOUTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThemeBasicModule", function () {
      return _lib_theme_basic_module__WEBPACK_IMPORTED_MODULE_1__["ThemeBasicModule"];
    });
    /* harmony import */


    var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/actions */
    "../../packages/theme-basic/src/lib/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddNavigationElement", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["AddNavigationElement"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RemoveNavigationElementByName", function () {
      return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveNavigationElementByName"];
    });
    /* harmony import */


    var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/components */
    "../../packages/theme-basic/src/lib/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ValidationErrorComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ValidationErrorComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountLayoutComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["AccountLayoutComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationLayoutComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["ApplicationLayoutComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function () {
      return _lib_components__WEBPACK_IMPORTED_MODULE_3__["EmptyLayoutComponent"];
    });
    /* harmony import */


    var _lib_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/states */
    "../../packages/theme-basic/src/lib/states/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutState", function () {
      return _lib_states__WEBPACK_IMPORTED_MODULE_4__["LayoutState"];
    });
    /*
     * Public API Surface of theme-basic
     */

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      },
      data: {
        routes: {
          name: '::Menu:Home'
        }
      }
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lazy-libs-account-wrapper-module */
        "lazy-libs-account-wrapper-module").then(__webpack_require__.bind(null,
        /*! ./lazy-libs/account-wrapper.module */
        "./src/app/lazy-libs/account-wrapper.module.ts")).then(function (m) {
          return m.AccountWrapperModule;
        });
      }
    }, {
      path: 'identity',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lazy-libs-identity-wrapper-module */
        "lazy-libs-identity-wrapper-module").then(__webpack_require__.bind(null,
        /*! ./lazy-libs/identity-wrapper.module */
        "./src/app/lazy-libs/identity-wrapper.module.ts")).then(function (m) {
          return m.IdentityWrapperModule;
        });
      }
    }, {
      path: 'tenant-management',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lazy-libs-tenant-management-wrapper-module */
        "lazy-libs-tenant-management-wrapper-module").then(__webpack_require__.bind(null,
        /*! ./lazy-libs/tenant-management-wrapper.module */
        "./src/app/lazy-libs/tenant-management-wrapper.module.ts")).then(function (m) {
          return m.TenantManagementWrapperModule;
        });
      }
    }, {
      path: 'setting-management',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | lazy-libs-setting-management-wrapper-module */
        "lazy-libs-setting-management-wrapper-module").then(__webpack_require__.bind(null,
        /*! ./lazy-libs/setting-management-wrapper.module */
        "./src/app/lazy-libs/setting-management-wrapper.module.ts")).then(function (m) {
          return m.SettingManagementWrapperModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(lazyLoadService) {
        _classCallCheck(this, AppComponent);

        this.lazyLoadService = lazyLoadService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lazyLoadService.load(['primeng.min.css', 'primeicons.css', 'primeng-nova-light-theme.css', 'font-awesome.min.css'], 'style', null, 'head').subscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyLoadService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: "\n    <abp-loader-bar></abp-loader-bar>\n    <router-outlet></router-outlet>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["LazyLoadService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @abp/ng.theme.basic */
    "../../packages/theme-basic/src/public-api.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngxs/logger-plugin */
    "../../node_modules/@ngxs/logger-plugin/fesm2015/ngxs-logger-plugin.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/store */
    "../../node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @abp/ng.account.config */
    "../../packages/account-config/src/public-api.ts");
    /* harmony import */


    var _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @abp/ng.identity.config */
    "../../packages/identity-config/src/public-api.ts");
    /* harmony import */


    var _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @abp/ng.tenant-management.config */
    "../../packages/tenant-management-config/src/public-api.ts");
    /* harmony import */


    var _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @abp/ng.setting-management.config */
    "../../packages/setting-management-config/src/public-api.ts");

    var LOGGERS = [_ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsLoggerPluginModule"].forRoot({
      disabled: false
    })];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"].forRoot({
        environment: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"],
        requirements: {
          layouts: _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_2__["LAYOUTS"]
        }
      }), _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_12__["ThemeSharedModule"].forRoot(), _abp_ng_account_config__WEBPACK_IMPORTED_MODULE_13__["AccountConfigModule"].forRoot({
        redirectUrl: '/'
      }), _abp_ng_identity_config__WEBPACK_IMPORTED_MODULE_14__["IdentityConfigModule"], _abp_ng_tenant_management_config__WEBPACK_IMPORTED_MODULE_15__["TenantManagementConfigModule"], _abp_ng_setting_management_config__WEBPACK_IMPORTED_MODULE_16__["SettingManagementConfigModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]].concat(_toConsumableArray(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production ? [] : LOGGERS)),
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @abp/ng.core */
    "../../packages/core/src/public-api.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @abp/ng.theme.basic */
    "../../packages/theme-basic/src/public-api.ts");
    /* harmony import */


    var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @abp/ng.theme.shared */
    "../../dist/theme-shared/fesm2015/abp-ng.theme.shared.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/table */
    "../../node_modules/primeng/table.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [],
      imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__["ThemeBasicModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]],
      exports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_5__["ThemeSharedModule"], _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__["ThemeBasicModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"]],
      providers: []
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      hmr: false,
      application: {
        name: 'MyProjectName',
        logoUrl: ''
      },
      oAuthConfig: {
        issuer: 'https://localhost:44305',
        clientId: 'MyProjectName_App',
        dummyClientSecret: '1q2w3e*',
        scope: 'MyProjectName',
        showDebugInformation: true,
        oidc: false,
        requireHttps: true
      },
      apis: {
        "default": {
          url: 'https://localhost:44305'
        }
      },
      localization: {
        defaultResourceName: 'MyProjectName'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\YinChang\Documents\Works\GitHub\abp.ng\apps\dev-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map