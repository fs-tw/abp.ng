(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-v-data-v-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/data-v/relation/relation.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/routes/data-v/relation/relation.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'asdf'\"></page-header>\r\n<quick-menu>\r\n  <nz-list [nzBordered]=\"false\" [nzSplit]=\"false\">\r\n    <nz-list-item><a href=\"#\">Link1</a></nz-list-item>\r\n    <nz-list-item><a href=\"#\">Link2</a></nz-list-item>\r\n    <nz-list-item><a href=\"#\">Link3</a></nz-list-item>\r\n    <nz-list-item><a href=\"#\">Link4</a></nz-list-item>\r\n    <nz-list-item><a href=\"#\">Link5</a></nz-list-item>\r\n  </nz-list>\r\n</quick-menu>\r\n");

/***/ }),

/***/ "./src/app/routes/data-v/data-v-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/data-v/data-v-routing.module.ts ***!
  \********************************************************/
/*! exports provided: DataVRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVRoutingModule", function() { return DataVRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relation/relation.component */ "./src/app/routes/data-v/relation/relation.component.ts");




var routes = [{ path: 'relation', component: _relation_relation_component__WEBPACK_IMPORTED_MODULE_3__["RelationComponent"] }];
var DataVRoutingModule = /** @class */ (function () {
    function DataVRoutingModule() {
    }
    DataVRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataVRoutingModule);
    return DataVRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/data-v/data-v.module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/data-v/data-v.module.ts ***!
  \************************************************/
/*! exports provided: DataVModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVModule", function() { return DataVModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _data_v_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-v-routing.module */ "./src/app/routes/data-v/data-v-routing.module.ts");
/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation/relation.component */ "./src/app/routes/data-v/relation/relation.component.ts");





var COMPONENTS = [_relation_relation_component__WEBPACK_IMPORTED_MODULE_4__["RelationComponent"]];
var COMPONENTS_NOROUNT = [];
var DataVModule = /** @class */ (function () {
    function DataVModule() {
    }
    DataVModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _data_v_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataVRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], DataVModule);
    return DataVModule;
}());



/***/ }),

/***/ "./src/app/routes/data-v/relation/relation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/data-v/relation/relation.component.ts ***!
  \**************************************************************/
/*! exports provided: RelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return RelationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "../../node_modules/@delon/theme/fesm5/theme.js");



var RelationComponent = /** @class */ (function () {
    function RelationComponent(http) {
        this.http = http;
        this.options = {
            title: {
                text: 'User Releaction',
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 60,
                    focusNodeAdjacency: true,
                    roam: true,
                    categories: [
                        {
                            name: 'User',
                        },
                    ],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12,
                            },
                        },
                    },
                    force: {
                        repulsion: 2000,
                        gravity: 0.3,
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    draggable: true,
                    tooltip: {
                        triggerOn: 'click',
                        formatter: function (item) {
                            if (item.dataType === 'node')
                                return item.data.name + "\uFF1A" + item.data.arg;
                            return item.name;
                        },
                    },
                    data: Array(20)
                        .fill({})
                        .map(function (v, i) {
                        return {
                            name: 'User' + i,
                            arg: i + 10,
                            category: 0,
                        };
                    }),
                    links: [
                        {
                            source: 'User0',
                            target: 'User1',
                        },
                        {
                            source: 'User0',
                            target: 'User2',
                        },
                        {
                            source: 'User0',
                            target: 'User3',
                        },
                        {
                            source: 'User1',
                            target: 'User4',
                        },
                        {
                            source: 'User2',
                            target: 'User5',
                        },
                        {
                            source: 'User3',
                            target: 'User6',
                        },
                        {
                            source: 'User4',
                            target: 'User7',
                        },
                        {
                            source: 'User5',
                            target: 'User8',
                        },
                        {
                            source: 'User6',
                            target: 'User9',
                        },
                        {
                            source: 'User1',
                            target: 'User10',
                        },
                        {
                            source: 'User1',
                            target: 'User11',
                        },
                        {
                            source: 'User11',
                            target: 'User12',
                        },
                        {
                            source: 'User11',
                            target: 'User13',
                        },
                        {
                            source: 'User11',
                            target: 'User14',
                        },
                        {
                            source: 'User11',
                            target: 'User15',
                        },
                        {
                            source: 'User11',
                            target: 'User16',
                        },
                        {
                            source: 'User11',
                            target: 'User17',
                        },
                        {
                            source: 'User11',
                            target: 'User18',
                        },
                        {
                            source: 'User11',
                            target: 'User19',
                        },
                    ],
                    lineStyle: {
                        normal: {
                            opacity: 0.7,
                            width: 1,
                            curveness: 0.1,
                        },
                    },
                },
            ],
        };
    }
    RelationComponent.prototype.chartInit = function (ec) {
        this.ecIntance = ec;
    };
    RelationComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('resize', function () { return _this.resize; });
    };
    RelationComponent.prototype.resize = function () {
        if (this.ecIntance)
            this.ecIntance.resize();
    };
    RelationComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        window.removeEventListener('resize', function () { return _this.resize; });
    };
    RelationComponent.ctorParameters = function () { return [
        { type: _delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"] }
    ]; };
    RelationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-v-relation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./relation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/routes/data-v/relation/relation.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])
    ], RelationComponent);
    return RelationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data-v-data-v-module.js.map