(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@abp/utils'), require('@abp/ng.core'), require('rxjs'), require('rxjs/operators'), require('@abp/ng.theme.shared'), require('@ngx-validate/core'), require('@ngxs/store')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.theme.shared/extensions', ['exports', '@angular/core', '@angular/common', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@abp/utils', '@abp/ng.core', 'rxjs', 'rxjs/operators', '@abp/ng.theme.shared', '@ngx-validate/core', '@ngxs/store'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.theme = global.abp.ng.theme || {}, global.abp.ng.theme.shared = global.abp.ng.theme.shared || {}, global.abp.ng.theme.shared.extensions = {}), global.ng.core, global.ng.common, global.ngBootstrap, global.ng.forms, global.utils, global.ng_core, global.rxjs, global.rxjs.operators, global.abp.ng.theme.shared, global.core, global.store));
}(this, (function (exports, i0, common, ngBootstrap, forms, utils, ng_core, rxjs, operators, ng_theme_shared, core, store) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    exports.DateTimeAdapter = /** @class */ (function () {
        function DateTimeAdapter() {
        }
        DateTimeAdapter.prototype.fromModel = function (value) {
            if (!value)
                return null;
            var date = new Date(value);
            if (isNaN(date))
                return null;
            this.value = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            };
            return this.value;
        };
        DateTimeAdapter.prototype.toModel = function (value) {
            if (!value)
                return '';
            var now = new Date();
            value = Object.assign(Object.assign({ year: now.getUTCFullYear(), month: now.getMonth() + 1, day: now.getDate(), hour: 0, minute: 0, second: 0 }, this.value), value);
            var date = new Date(value.year, value.month - 1, value.day, value.hour, value.minute, value.second);
            return new Date(date).toISOString();
        };
        return DateTimeAdapter;
    }());
    exports.DateTimeAdapter = __decorate([
        i0.Injectable()
    ], exports.DateTimeAdapter);

    exports.DateAdapter = /** @class */ (function (_super) {
        __extends(DateAdapter, _super);
        function DateAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DateAdapter.prototype.fromModel = function (value) {
            if (!value)
                return null;
            var date = new Date(value);
            if (isNaN(date))
                return null;
            return {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
            };
        };
        DateAdapter.prototype.toModel = function (value) {
            if (!value)
                return '';
            var date = new Date(value.year, value.month - 1, value.day);
            var formattedDate = common.formatDate(date, 'yyyy-MM-dd', 'en');
            return formattedDate;
        };
        return DateAdapter;
    }(ngBootstrap.NgbDateAdapter));
    exports.DateAdapter = __decorate([
        i0.Injectable()
    ], exports.DateAdapter);

    exports.TimeAdapter = /** @class */ (function (_super) {
        __extends(TimeAdapter, _super);
        function TimeAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeAdapter.prototype.fromModel = function (value) {
            if (!value)
                return null;
            var date = isTimeStr(value)
                ? new (Date.bind.apply(Date, __spread([void 0, 0, 0, 1], value.split(':').map(Number))))() : new Date(value);
            if (isNaN(date))
                return null;
            return {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            };
        };
        TimeAdapter.prototype.toModel = function (value) {
            if (!value)
                return '';
            var date = new Date(0, 0, 1, value.hour, value.minute, value.second);
            var formattedDate = common.formatDate(date, 'HH:mm', 'en');
            return formattedDate;
        };
        return TimeAdapter;
    }(ngBootstrap.NgbTimeAdapter));
    exports.TimeAdapter = __decorate([
        i0.Injectable()
    ], exports.TimeAdapter);
    function isTimeStr(value) {
        return /^((2[123])|[01][0-9])(\:[0-5][0-9]){1,2}$/.test(String(value));
    }

    var PropList = /** @class */ (function (_super) {
        __extends(PropList, _super);
        function PropList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PropList;
    }(utils.LinkedList));
    var PropData = /** @class */ (function () {
        function PropData() {
        }
        Object.defineProperty(PropData.prototype, "data", {
            get: function () {
                return {
                    getInjected: this.getInjected,
                    index: this.index,
                    record: this.record,
                };
            },
            enumerable: true,
            configurable: true
        });
        return PropData;
    }());
    var Prop = /** @class */ (function () {
        function Prop(type, name, displayName, permission, visible, isExtra) {
            if (visible === void 0) { visible = function (_) { return true; }; }
            if (isExtra === void 0) { isExtra = false; }
            this.type = type;
            this.name = name;
            this.displayName = displayName;
            this.permission = permission;
            this.visible = visible;
            this.isExtra = isExtra;
            this.displayName = this.displayName || this.name;
        }
        return Prop;
    }());
    var PropsFactory = /** @class */ (function () {
        function PropsFactory() {
            this.contributorCallbacks = {};
        }
        PropsFactory.prototype.get = function (name) {
            this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
            return new this._ctor(this.contributorCallbacks[name]);
        };
        return PropsFactory;
    }());
    var Props = /** @class */ (function () {
        function Props(callbackList) {
            this.callbackList = callbackList;
        }
        Object.defineProperty(Props.prototype, "props", {
            get: function () {
                var propList = new this._ctor();
                this.callbackList.forEach(function (callback) { return callback(propList); });
                return propList;
            },
            enumerable: true,
            configurable: true
        });
        Props.prototype.addContributor = function (contributeCallback) {
            this.callbackList.push(contributeCallback);
        };
        Props.prototype.clearContributors = function () {
            while (this.callbackList.length)
                this.callbackList.pop();
        };
        return Props;
    }());

    var FormPropList = /** @class */ (function (_super) {
        __extends(FormPropList, _super);
        function FormPropList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FormPropList;
    }(PropList));
    var FormProps = /** @class */ (function (_super) {
        __extends(FormProps, _super);
        function FormProps() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = FormPropList;
            return _this;
        }
        return FormProps;
    }(Props));
    var CreateFormPropsFactory = /** @class */ (function (_super) {
        __extends(CreateFormPropsFactory, _super);
        function CreateFormPropsFactory() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = FormProps;
            return _this;
        }
        return CreateFormPropsFactory;
    }(PropsFactory));
    var EditFormPropsFactory = /** @class */ (function (_super) {
        __extends(EditFormPropsFactory, _super);
        function EditFormPropsFactory() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = FormProps;
            return _this;
        }
        return EditFormPropsFactory;
    }(PropsFactory));
    var FormProp = /** @class */ (function (_super) {
        __extends(FormProp, _super);
        function FormProp(options) {
            var _this = _super.call(this, options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra) || this;
            _this.asyncValidators = options.asyncValidators || (function (_) { return []; });
            _this.validators = options.validators || (function (_) { return []; });
            _this.disabled = options.disabled || (function (_) { return false; });
            _this.readonly = options.readonly || (function (_) { return false; });
            _this.autocomplete = options.autocomplete || 'off';
            _this.options = options.options;
            _this.id = options.id || options.name;
            var defaultValue = options.defaultValue;
            _this.defaultValue = isFalsyValue(defaultValue) ? defaultValue : defaultValue || null;
            return _this;
        }
        FormProp.create = function (options) {
            return new FormProp(options);
        };
        FormProp.createMany = function (arrayOfOptions) {
            return arrayOfOptions.map(FormProp.create);
        };
        return FormProp;
    }(Prop));
    var FormPropData = /** @class */ (function (_super) {
        __extends(FormPropData, _super);
        function FormPropData(injector, record) {
            var _this = _super.call(this) || this;
            _this.record = record;
            // tslint:disable-next-line
            _this.getInjected = injector.get.bind(injector);
            return _this;
        }
        return FormPropData;
    }(PropData));
    function isFalsyValue(defaultValue) {
        return [0, '', false].indexOf(defaultValue) > -1;
    }

    function selfFactory(dependency) {
        return dependency;
    }

    var ɵ0 = selfFactory;
    exports.DateTimePickerComponent = /** @class */ (function () {
        function DateTimePickerComponent(cdRef) {
            this.cdRef = cdRef;
        }
        DateTimePickerComponent.prototype.setDate = function (datestr) {
            this.date.writeValue(datestr);
        };
        DateTimePickerComponent.prototype.setTime = function (datestr) {
            this.time.writeValue(datestr);
        };
        return DateTimePickerComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", FormProp)
    ], exports.DateTimePickerComponent.prototype, "prop", void 0);
    __decorate([
        i0.ViewChild(ngBootstrap.NgbInputDatepicker),
        __metadata("design:type", ngBootstrap.NgbInputDatepicker)
    ], exports.DateTimePickerComponent.prototype, "date", void 0);
    __decorate([
        i0.ViewChild(ngBootstrap.NgbTimepicker),
        __metadata("design:type", ngBootstrap.NgbTimepicker)
    ], exports.DateTimePickerComponent.prototype, "time", void 0);
    exports.DateTimePickerComponent = __decorate([
        i0.Component({
            exportAs: 'abpDateTimePicker',
            selector: 'abp-date-time-picker',
            template: "\n    <input\n      [id]=\"prop.id\"\n      [formControlName]=\"prop.name\"\n      (ngModelChange)=\"setTime($event)\"\n      (click)=\"datepicker.open()\"\n      (keyup.space)=\"datepicker.open()\"\n      ngbDatepicker\n      #datepicker=\"ngbDatepicker\"\n      type=\"text\"\n      class=\"form-control\"\n    />\n    <ngb-timepicker\n      #timepicker\n      [formControlName]=\"prop.name\"\n      (ngModelChange)=\"setDate($event)\"\n    ></ngb-timepicker>\n  ",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            viewProviders: [
                {
                    provide: forms.ControlContainer,
                    useFactory: ɵ0,
                    deps: [[new i0.Optional(), new i0.SkipSelf(), forms.ControlContainer]],
                },
                {
                    provide: ngBootstrap.NgbDateAdapter,
                    useClass: exports.DateTimeAdapter,
                },
                {
                    provide: ngBootstrap.NgbTimeAdapter,
                    useClass: exports.DateTimeAdapter,
                },
            ]
        }),
        __metadata("design:paramtypes", [i0.ChangeDetectorRef])
    ], exports.DateTimePickerComponent);

    var ɵ0$1 = selfFactory;
    exports.ExtensibleFormPropComponent = /** @class */ (function () {
        function ExtensibleFormPropComponent(cdRef, track) {
            this.cdRef = cdRef;
            this.track = track;
        }
        ExtensibleFormPropComponent.prototype.getAsterisk = function (prop, data) {
            return prop.validators(data).some(function (validator) { return validator === forms.Validators.required; }) ? '*' : '';
        };
        ExtensibleFormPropComponent.prototype.getComponent = function (prop) {
            if (prop.options)
                return 'select';
            switch (prop.type) {
                case "boolean" /* Boolean */:
                    return 'checkbox';
                case "date" /* Date */:
                    return 'date';
                case "dateTime" /* DateTime */:
                    return 'dateTime';
                case "text" /* Text */:
                    return 'textarea';
                case "time" /* Time */:
                    return 'time';
                default:
                    return 'input';
            }
        };
        ExtensibleFormPropComponent.prototype.getType = function (prop) {
            switch (prop.type) {
                case "date" /* Date */:
                case "string" /* String */:
                    return 'text';
                case "boolean" /* Boolean */:
                    return 'checkbox';
                case "number" /* Number */:
                    return 'number';
                case "email" /* Email */:
                    return 'email';
                case "password" /* Password */:
                    return 'password';
                default:
                    return 'hidden';
            }
        };
        return ExtensibleFormPropComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", PropData)
    ], exports.ExtensibleFormPropComponent.prototype, "data", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", FormProp)
    ], exports.ExtensibleFormPropComponent.prototype, "prop", void 0);
    exports.ExtensibleFormPropComponent = __decorate([
        i0.Component({
            selector: 'abp-extensible-form-prop',
            template: "<div class=\"form-group\" [abpPermission]=\"prop.permission\" [ngSwitch]=\"getComponent(prop)\">\r\n  <ng-template ngSwitchCase=\"input\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [autocomplete]=\"prop.autocomplete\"\r\n      [type]=\"getType(prop)\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      [readonly]=\"prop.readonly(data)\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"checkbox\">\r\n    <div class=\"custom-checkbox custom-control\" validationTarget>\r\n      <input\r\n        [id]=\"prop.id\"\r\n        [formControlName]=\"prop.name\"\r\n        [abpDisabled]=\"prop.disabled(data)\"\r\n        type=\"checkbox\"\r\n        class=\"custom-control-input\"\r\n      />\r\n      <label [htmlFor]=\"prop.id\" class=\"custom-control-label\"\r\n        >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"select\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <select\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      class=\"custom-select form-control\"\r\n    >\r\n      <option\r\n        *ngFor=\"let option of prop.options(data) | async; trackBy: track.by('value')\"\r\n        [ngValue]=\"option.value\"\r\n        >{{ option.key }}</option\r\n      >\r\n    </select>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"date\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <input\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      (click)=\"datepicker.open()\"\r\n      (keyup.space)=\"datepicker.open()\"\r\n      ngbDatepicker\r\n      #datepicker=\"ngbDatepicker\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n    />\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"time\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <ngb-timepicker [formControlName]=\"prop.name\"></ngb-timepicker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"dateTime\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <abp-date-time-picker [prop]=\"prop\"></abp-date-time-picker>\r\n  </ng-template>\r\n\r\n  <ng-template ngSwitchCase=\"textarea\">\r\n    <label [htmlFor]=\"prop.id\"\r\n      >{{ prop.displayName | abpLocalization }} {{ getAsterisk(prop, data) }}</label\r\n    >\r\n    <textarea\r\n      [id]=\"prop.id\"\r\n      [formControlName]=\"prop.name\"\r\n      [abpDisabled]=\"prop.disabled(data)\"\r\n      [readonly]=\"prop.readonly(data)\"\r\n      class=\"form-control\"\r\n    ></textarea>\r\n  </ng-template>\r\n</div>\r\n",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            viewProviders: [
                {
                    provide: forms.ControlContainer,
                    useFactory: ɵ0$1,
                    deps: [[new i0.Optional(), new i0.SkipSelf(), forms.ControlContainer]],
                },
                { provide: ngBootstrap.NgbDateAdapter, useClass: exports.DateAdapter },
                { provide: ngBootstrap.NgbTimeAdapter, useClass: exports.TimeAdapter },
            ]
        }),
        __metadata("design:paramtypes", [i0.ChangeDetectorRef, ng_core.TrackByService])
    ], exports.ExtensibleFormPropComponent);

    var EXTRA_PROPERTIES_KEY = 'extraProperties';

    var ActionList = /** @class */ (function (_super) {
        __extends(ActionList, _super);
        function ActionList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ActionList;
    }(utils.LinkedList));
    var ActionData = /** @class */ (function () {
        function ActionData() {
        }
        Object.defineProperty(ActionData.prototype, "data", {
            get: function () {
                return {
                    getInjected: this.getInjected,
                    index: this.index,
                    record: this.record,
                };
            },
            enumerable: true,
            configurable: true
        });
        return ActionData;
    }());
    var Action = /** @class */ (function () {
        function Action(permission, visible, action) {
            if (visible === void 0) { visible = function (_) { return true; }; }
            if (action === void 0) { action = function (_) { }; }
            this.permission = permission;
            this.visible = visible;
            this.action = action;
        }
        return Action;
    }());
    var ActionsFactory = /** @class */ (function () {
        function ActionsFactory() {
            this.contributorCallbacks = {};
        }
        ActionsFactory.prototype.get = function (name) {
            this.contributorCallbacks[name] = this.contributorCallbacks[name] || [];
            return new this._ctor(this.contributorCallbacks[name]);
        };
        return ActionsFactory;
    }());
    var Actions = /** @class */ (function () {
        function Actions(callbackList) {
            this.callbackList = callbackList;
        }
        Object.defineProperty(Actions.prototype, "actions", {
            get: function () {
                var actionList = new this._ctor();
                this.callbackList.forEach(function (callback) { return callback(actionList); });
                return actionList;
            },
            enumerable: true,
            configurable: true
        });
        Actions.prototype.addContributor = function (contributeCallback) {
            this.callbackList.push(contributeCallback);
        };
        Actions.prototype.clearContributors = function () {
            while (this.callbackList.length)
                this.callbackList.pop();
        };
        return Actions;
    }());

    var EntityActionList = /** @class */ (function (_super) {
        __extends(EntityActionList, _super);
        function EntityActionList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityActionList;
    }(ActionList));
    var EntityActions = /** @class */ (function (_super) {
        __extends(EntityActions, _super);
        function EntityActions() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = EntityActionList;
            return _this;
        }
        return EntityActions;
    }(Actions));
    var EntityActionsFactory = /** @class */ (function (_super) {
        __extends(EntityActionsFactory, _super);
        function EntityActionsFactory() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = EntityActions;
            return _this;
        }
        return EntityActionsFactory;
    }(ActionsFactory));
    var EntityAction = /** @class */ (function (_super) {
        __extends(EntityAction, _super);
        function EntityAction(options) {
            var _this = _super.call(this, options.permission, options.visible, options.action) || this;
            _this.text = options.text;
            _this.icon = options.icon || '';
            return _this;
        }
        EntityAction.create = function (options) {
            return new EntityAction(options);
        };
        EntityAction.createMany = function (arrayOfOptions) {
            return arrayOfOptions.map(EntityAction.create);
        };
        return EntityAction;
    }(Action));

    var EntityPropList = /** @class */ (function (_super) {
        __extends(EntityPropList, _super);
        function EntityPropList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityPropList;
    }(PropList));
    var EntityProps = /** @class */ (function (_super) {
        __extends(EntityProps, _super);
        function EntityProps() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = EntityPropList;
            return _this;
        }
        return EntityProps;
    }(Props));
    var EntityPropsFactory = /** @class */ (function (_super) {
        __extends(EntityPropsFactory, _super);
        function EntityPropsFactory() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = EntityProps;
            return _this;
        }
        return EntityPropsFactory;
    }(PropsFactory));
    var EntityProp = /** @class */ (function (_super) {
        __extends(EntityProp, _super);
        function EntityProp(options) {
            var _this = _super.call(this, options.type, options.name, options.displayName, options.permission, options.visible, options.isExtra) || this;
            _this.columnWidth = options.columnWidth;
            _this.sortable = options.sortable || false;
            _this.valueResolver = options.valueResolver || (function (data) { return rxjs.of(data.record[_this.name]); });
            return _this;
        }
        EntityProp.create = function (options) {
            return new EntityProp(options);
        };
        EntityProp.createMany = function (arrayOfOptions) {
            return arrayOfOptions.map(EntityProp.create);
        };
        return EntityProp;
    }(Prop));

    var ToolbarActionList = /** @class */ (function (_super) {
        __extends(ToolbarActionList, _super);
        function ToolbarActionList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ToolbarActionList;
    }(ActionList));
    var ToolbarActions = /** @class */ (function (_super) {
        __extends(ToolbarActions, _super);
        function ToolbarActions() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = ToolbarActionList;
            return _this;
        }
        return ToolbarActions;
    }(Actions));
    var ToolbarActionsFactory = /** @class */ (function (_super) {
        __extends(ToolbarActionsFactory, _super);
        function ToolbarActionsFactory() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            _this._ctor = ToolbarActions;
            return _this;
        }
        return ToolbarActionsFactory;
    }(ActionsFactory));
    var ToolbarAction = /** @class */ (function (_super) {
        __extends(ToolbarAction, _super);
        function ToolbarAction(options) {
            var _this = _super.call(this, options.permission, options.visible, options.action) || this;
            _this.text = options.text;
            _this.icon = options.icon || '';
            return _this;
        }
        ToolbarAction.create = function (options) {
            return new ToolbarAction(options);
        };
        ToolbarAction.createMany = function (arrayOfOptions) {
            return arrayOfOptions.map(ToolbarAction.create);
        };
        return ToolbarAction;
    }(Action));
    var ToolbarComponent = /** @class */ (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(options) {
            var _this = _super.call(this, options.permission, options.visible, options.action) || this;
            _this.component = options.component;
            return _this;
        }
        ToolbarComponent.create = function (options) {
            return new ToolbarComponent(options);
        };
        ToolbarComponent.createMany = function (arrayOfOptions) {
            return arrayOfOptions.map(ToolbarComponent.create);
        };
        return ToolbarComponent;
    }(Action));

    exports.ExtensionsService = /** @class */ (function () {
        function ExtensionsService() {
            this.entityActions = new EntityActionsFactory();
            this.toolbarActions = new ToolbarActionsFactory();
            this.entityProps = new EntityPropsFactory();
            this.createFormProps = new CreateFormPropsFactory();
            this.editFormProps = new EditFormPropsFactory();
        }
        return ExtensionsService;
    }());
    exports.ExtensionsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExtensionsService_Factory() { return new exports.ExtensionsService(); }, token: exports.ExtensionsService, providedIn: "root" });
    exports.ExtensionsService = __decorate([
        i0.Injectable({
            providedIn: 'root',
        })
    ], exports.ExtensionsService);

    var EXTENSIONS_IDENTIFIER = new i0.InjectionToken('EXTENSIONS_IDENTIFIER');
    var EXTENSIONS_ACTION_TYPE = new i0.InjectionToken('EXTENSIONS_ACTION_TYPE');
    var EXTENSIONS_ACTION_DATA = new i0.InjectionToken('EXTENSIONS_ACTION_DATA');
    var EXTENSIONS_ACTION_CALLBACK = new i0.InjectionToken('EXTENSIONS_ACTION_DATA');

    var ɵ0$2 = selfFactory;
    exports.ExtensibleFormComponent = /** @class */ (function () {
        function ExtensibleFormComponent(cdRef, track, container, extensions, identifier) {
            this.cdRef = cdRef;
            this.track = track;
            this.container = container;
            this.extensions = extensions;
            this.identifier = identifier;
            this.subscription = new rxjs.Subscription();
            this.extraPropertiesKey = EXTRA_PROPERTIES_KEY;
        }
        Object.defineProperty(ExtensibleFormComponent.prototype, "selectedRecord", {
            set: function (record) {
                var type = !record || JSON.stringify(record) === '{}' ? 'create' : 'edit';
                this.propList = this.extensions[type + "FormProps"].get(this.identifier).props;
                this.record = record;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtensibleFormComponent.prototype, "form", {
            get: function () {
                return (this.container ? this.container.control : { controls: {} });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtensibleFormComponent.prototype, "extraProperties", {
            get: function () {
                return (this.form.controls.extraProperties || { controls: {} });
            },
            enumerable: true,
            configurable: true
        });
        ExtensibleFormComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.subscription.add(this.form.statusChanges.pipe(operators.debounceTime(0)).subscribe(function () {
                _this.formProps.forEach(function (prop) { return prop.cdRef.markForCheck(); });
                _this.cdRef.detectChanges();
            }));
        };
        ExtensibleFormComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        return ExtensibleFormComponent;
    }());
    __decorate([
        i0.ViewChildren(exports.ExtensibleFormPropComponent),
        __metadata("design:type", i0.QueryList)
    ], exports.ExtensibleFormComponent.prototype, "formProps", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], exports.ExtensibleFormComponent.prototype, "selectedRecord", null);
    exports.ExtensibleFormComponent = __decorate([
        i0.Component({
            exportAs: 'abpExtensibleForm',
            selector: 'abp-extensible-form',
            template: "<ng-container *ngIf=\"form\">\r\n  <ng-container *abpPropData=\"let data; fromList: propList; withRecord: record\">\r\n    <ng-container *ngFor=\"let prop of propList; trackBy: track.by('name')\">\r\n      <ng-container *ngIf=\"prop.visible(data)\">\r\n        <ng-container\r\n          [formGroupName]=\"extraPropertiesKey\"\r\n          *ngIf=\"extraProperties.controls[prop.name]; else tempDefault\"\r\n        >\r\n          <abp-extensible-form-prop [prop]=\"prop\" [data]=\"data\"></abp-extensible-form-prop>\r\n        </ng-container>\r\n\r\n        <ng-template #tempDefault>\r\n          <abp-extensible-form-prop\r\n            *ngIf=\"form.get(prop.name)\"\r\n            [prop]=\"prop\"\r\n            [data]=\"data\"\r\n          ></abp-extensible-form-prop>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-container>\r\n",
            changeDetection: i0.ChangeDetectionStrategy.OnPush,
            viewProviders: [
                {
                    provide: forms.ControlContainer,
                    useFactory: ɵ0$2,
                    deps: [[new i0.Optional(), new i0.SkipSelf(), forms.ControlContainer]],
                },
            ]
        }),
        __param(4, i0.Inject(EXTENSIONS_IDENTIFIER)),
        __metadata("design:paramtypes", [i0.ChangeDetectorRef,
            ng_core.TrackByService,
            forms.ControlContainer,
            exports.ExtensionsService, String])
    ], exports.ExtensibleFormComponent);

    var DEFAULT_ACTIONS_COLUMN_WIDTH = 150;
    exports.ExtensibleTableComponent = /** @class */ (function () {
        function ExtensibleTableComponent(locale, injector) {
            this.locale = locale;
            this.trackByFn = function (_, item) { return item.name; };
            var extensions = injector.get(exports.ExtensionsService);
            var name = injector.get(EXTENSIONS_IDENTIFIER);
            this.propList = extensions.entityProps.get(name).props;
            this.setColumnWidths(DEFAULT_ACTIONS_COLUMN_WIDTH);
        }
        Object.defineProperty(ExtensibleTableComponent.prototype, "actionsColumnWidth", {
            set: function (width) {
                this.setColumnWidths(width ? Number(width) : undefined);
            },
            enumerable: true,
            configurable: true
        });
        ExtensibleTableComponent.prototype.setColumnWidths = function (actionsColumn) {
            var widths = [actionsColumn];
            this.propList.forEach(function (_a) {
                var prop = _a.value;
                widths.push(prop.columnWidth);
            });
            this.columnWidths = widths;
        };
        ExtensibleTableComponent.prototype.getDate = function (value, format) {
            return value ? common.formatDate(value, format, this.locale) : '';
        };
        ExtensibleTableComponent.prototype.getIcon = function (value) {
            return value
                ? '<div class="text-center text-success"><i class="fa fa-check"></i></div>'
                : '<div class="text-center text-danger"><i class="fa fa-times"></i></div>';
        };
        ExtensibleTableComponent.prototype.getContent = function (prop, data) {
            var _this = this;
            return prop.valueResolver(data).pipe(operators.map(function (value) {
                switch (prop.type) {
                    case "boolean" /* Boolean */:
                        return _this.getIcon(value);
                    case "date" /* Date */:
                        return _this.getDate(value, 'yyyy-MM-dd');
                    case "time" /* Time */:
                        return _this.getDate(value, 'HH:mm');
                    case "dateTime" /* DateTime */:
                        return _this.getDate(value, 'yyyy-MM-dd HH:mm:ss Z');
                    default:
                        return value;
                    // More types can be handled in the future
                }
            }));
        };
        return ExtensibleTableComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", String)
    ], exports.ExtensibleTableComponent.prototype, "actionsText", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Array)
    ], exports.ExtensibleTableComponent.prototype, "data", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", ng_core.ListService)
    ], exports.ExtensibleTableComponent.prototype, "list", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Number)
    ], exports.ExtensibleTableComponent.prototype, "recordsTotal", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], exports.ExtensibleTableComponent.prototype, "actionsColumnWidth", null);
    __decorate([
        i0.Input(),
        __metadata("design:type", i0.TemplateRef)
    ], exports.ExtensibleTableComponent.prototype, "actionsTemplate", void 0);
    exports.ExtensibleTableComponent = __decorate([
        i0.Component({
            exportAs: 'abpExtensibleTable',
            selector: 'abp-extensible-table',
            template: "<ngx-datatable default [rows]=\"data\" [count]=\"recordsTotal\" [list]=\"list\">\r\n  <ngx-datatable-column\r\n    [name]=\"actionsText | abpLocalization\"\r\n    [maxWidth]=\"columnWidths[0]\"\r\n    [width]=\"columnWidths[0]\"\r\n    [sortable]=\"false\"\r\n  >\r\n    <ng-template let-row=\"row\" let-i=\"rowIndex\" ngx-datatable-cell-template>\r\n      <ng-container\r\n        *ngTemplateOutlet=\"actionsTemplate || gridActions; context: { $implicit: row, index: i }\"\r\n      ></ng-container>\r\n      <ng-template #gridActions>\r\n        <abp-grid-actions\r\n          [index]=\"i\"\r\n          [record]=\"row\"\r\n          text=\"LanguageManagement::Actions\"\r\n        ></abp-grid-actions>\r\n      </ng-template>\r\n    </ng-template>\r\n  </ngx-datatable-column>\r\n\r\n  <ng-container *ngFor=\"let prop of propList; let i = index; trackBy: trackByFn\">\r\n    <ngx-datatable-column\r\n      [width]=\"columnWidths[i + 1] || 200\"\r\n      [name]=\"prop.displayName | abpLocalization\"\r\n      [prop]=\"prop.name\"\r\n      [sortable]=\"prop.sortable\"\r\n    >\r\n      <ng-template let-row=\"row\" let-i=\"index\" ngx-datatable-cell-template>\r\n        <ng-container\r\n          *abpPropData=\"let data; fromList: propList; withRecord: row; atIndex: i\"\r\n          [abpPermission]=\"prop.permission\"\r\n        >\r\n          <div *ngIf=\"prop.visible(data)\" [innerHTML]=\"getContent(prop, data) | async\"></div>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ng-container>\r\n</ngx-datatable>\r\n",
            changeDetection: i0.ChangeDetectionStrategy.OnPush
        }),
        __param(0, i0.Inject(i0.LOCALE_ID)),
        __metadata("design:paramtypes", [String, i0.Injector])
    ], exports.ExtensibleTableComponent);

    // tslint:disable: directive-class-suffix
    // Fix for https://github.com/angular/angular/issues/23904
    // @dynamic
    exports.ɵj = /** @class */ (function (_super) {
        __extends(AbstractActionsComponent, _super);
        function AbstractActionsComponent(injector) {
            var _this = _super.call(this) || this;
            // tslint:disable-next-line
            _this.getInjected = injector.get.bind(injector);
            var extensions = injector.get(exports.ExtensionsService);
            var name = injector.get(EXTENSIONS_IDENTIFIER);
            var type = injector.get(EXTENSIONS_ACTION_TYPE);
            _this.actionList = extensions[type].get(name).actions;
            return _this;
        }
        return AbstractActionsComponent;
    }(ActionData));
    __decorate([
        i0.Input(),
        __metadata("design:type", Object)
    ], exports.ɵj.prototype, "record", void 0);
    exports.ɵj = __decorate([
        i0.Directive(),
        __metadata("design:paramtypes", [i0.Injector])
    ], exports.ɵj);

    exports.GridActionsComponent = /** @class */ (function (_super) {
        __extends(GridActionsComponent, _super);
        function GridActionsComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.icon = 'fa fa-cog';
            _this.text = '';
            _this.trackByFn = function (_, item) { return item.text; };
            return _this;
        }
        return GridActionsComponent;
    }(exports.ɵj));
    __decorate([
        i0.Input(),
        __metadata("design:type", Object)
    ], exports.GridActionsComponent.prototype, "icon", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Number)
    ], exports.GridActionsComponent.prototype, "index", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Object)
    ], exports.GridActionsComponent.prototype, "text", void 0);
    exports.GridActionsComponent = __decorate([
        i0.Component({
            exportAs: 'abpGridActions',
            selector: 'abp-grid-actions',
            template: "<div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n  <button\r\n    class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n    data-toggle=\"dropdown\"\r\n    aria-haspopup=\"true\"\r\n    ngbDropdownToggle\r\n  >\r\n    <i [ngClass]=\"icon\" [class.mr-1]=\"icon\"></i>{{ text | abpLocalization }}\r\n  </button>\r\n  <div ngbDropdownMenu>\r\n    <ng-container *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n      <button\r\n        *ngIf=\"action.visible(data)\"\r\n        ngbDropdownItem\r\n        [abpPermission]=\"action.permission\"\r\n        (click)=\"action.action(data)\"\r\n        type=\"button\"\r\n      >\r\n        <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n        {{ action.text | abpLocalization }}\r\n      </button>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
            providers: [
                {
                    provide: EXTENSIONS_ACTION_TYPE,
                    useValue: 'entityActions',
                },
            ],
            changeDetection: i0.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [i0.Injector])
    ], exports.GridActionsComponent);

    exports.PageToolbarComponent = /** @class */ (function (_super) {
        __extends(PageToolbarComponent, _super);
        function PageToolbarComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.trackByFn = function (_, item) { return item.action || item.component; };
            return _this;
        }
        PageToolbarComponent.prototype.createInjector = function (action) {
            var _this = this;
            var get = function (token, notFoundValue, flags) {
                return token === EXTENSIONS_ACTION_DATA
                    ? _this.data
                    : token === EXTENSIONS_ACTION_CALLBACK
                        ? function (data) {
                            if (data === void 0) { data = _this.data; }
                            return action.action(data);
                        }
                        : _this.getInjected.call(_this.injector, token, notFoundValue, flags);
            };
            return { get: get };
        };
        return PageToolbarComponent;
    }(exports.ɵj));
    exports.PageToolbarComponent = __decorate([
        i0.Component({
            exportAs: 'abpPageToolbar',
            selector: 'abp-page-toolbar',
            template: "<div class=\"row justify-content-end mx-n1\" id=\"AbpContentToolbar\">\r\n  <div class=\"col-auto px-1 pt-2\" *ngFor=\"let action of actionList; trackBy: trackByFn\">\r\n    <ng-container *ngIf=\"action.visible(data)\" [abpPermission]=\"action.permission\">\r\n      <ng-container *ngIf=\"action.component as component; else button\">\r\n        <ng-container\r\n          *ngComponentOutlet=\"component; injector: createInjector(action)\"\r\n        ></ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #button>\r\n        <button (click)=\"action.action(data)\" type=\"button\" class=\"btn btn-primary btn-sm\">\r\n          <i [ngClass]=\"action.icon\" [class.mr-1]=\"action.icon\"></i>\r\n          {{ action.text | abpLocalization }}\r\n        </button>\r\n      </ng-template>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n",
            providers: [
                {
                    provide: EXTENSIONS_ACTION_TYPE,
                    useValue: 'toolbarActions',
                },
            ],
            changeDetection: i0.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [i0.Injector])
    ], exports.PageToolbarComponent);

    exports.DisabledDirective = /** @class */ (function () {
        function DisabledDirective(ngControl) {
            this.ngControl = ngControl;
        }
        // Related issue: https://github.com/angular/angular/issues/35330
        DisabledDirective.prototype.ngOnChanges = function (_a) {
            var abpDisabled = _a.abpDisabled;
            if (this.ngControl.control && abpDisabled) {
                this.ngControl.control[abpDisabled.currentValue ? 'disable' : 'enable']();
            }
        };
        return DisabledDirective;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", Boolean)
    ], exports.DisabledDirective.prototype, "abpDisabled", void 0);
    exports.DisabledDirective = __decorate([
        i0.Directive({
            selector: '[abpDisabled]',
        }),
        __param(0, i0.Host()),
        __metadata("design:paramtypes", [forms.NgControl])
    ], exports.DisabledDirective);

    exports.PropDataDirective = /** @class */ (function (_super) {
        __extends(PropDataDirective, _super);
        function PropDataDirective(tempRef, vcRef, injector) {
            var _this = _super.call(this) || this;
            _this.tempRef = tempRef;
            _this.vcRef = vcRef;
            // tslint:disable-next-line
            _this.getInjected = injector.get.bind(injector);
            return _this;
        }
        PropDataDirective.prototype.ngOnChanges = function () {
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.tempRef, {
                $implicit: this.data,
                index: 0,
            });
        };
        PropDataDirective.prototype.ngOnDestroy = function () {
            this.vcRef.clear();
        };
        return PropDataDirective;
    }(PropData));
    __decorate([
        i0.Input('abpPropDataFromList'),
        __metadata("design:type", Object)
    ], exports.PropDataDirective.prototype, "propList", void 0);
    __decorate([
        i0.Input('abpPropDataWithRecord'),
        __metadata("design:type", Object)
    ], exports.PropDataDirective.prototype, "record", void 0);
    __decorate([
        i0.Input('abpPropDataAtIndex'),
        __metadata("design:type", Number)
    ], exports.PropDataDirective.prototype, "index", void 0);
    exports.PropDataDirective = __decorate([
        i0.Directive({
            exportAs: 'abpPropData',
            selector: '[abpPropData]',
        }),
        __metadata("design:paramtypes", [i0.TemplateRef,
            i0.ViewContainerRef,
            i0.Injector])
    ], exports.PropDataDirective);

    var objectExtensions = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    exports.UiExtensionsModule = /** @class */ (function () {
        function UiExtensionsModule() {
        }
        return UiExtensionsModule;
    }());
    exports.UiExtensionsModule = __decorate([
        i0.NgModule({
            exports: [
                exports.DateTimePickerComponent,
                exports.PageToolbarComponent,
                exports.GridActionsComponent,
                exports.ExtensibleFormComponent,
                exports.ExtensibleTableComponent,
                exports.PropDataDirective,
                exports.DisabledDirective,
            ],
            declarations: [
                exports.DateTimePickerComponent,
                exports.PageToolbarComponent,
                exports.GridActionsComponent,
                exports.ExtensibleFormPropComponent,
                exports.ExtensibleFormComponent,
                exports.ExtensibleTableComponent,
                exports.PropDataDirective,
                exports.DisabledDirective,
            ],
            imports: [
                ng_core.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                core.NgxValidateCoreModule,
                ngBootstrap.NgbDatepickerModule,
                ngBootstrap.NgbDropdownModule,
                ngBootstrap.NgbTimepickerModule,
            ],
        })
    ], exports.UiExtensionsModule);

    function mergeWithDefaultActions(extension, defaultActions) {
        var contributors = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            contributors[_i - 2] = arguments[_i];
        }
        Object.keys(defaultActions).forEach(function (name) {
            var actions = extension.get(name);
            actions.clearContributors();
            actions.addContributor(function (actionList) { return actionList.addManyTail(defaultActions[name]); });
            contributors.forEach(function (contributor) { return (contributor[name] || []).forEach(function (callback) { return actions.addContributor(callback); }); });
        });
    }

    function generateFormFromProps(data) {
        var extensions = data.getInjected(exports.ExtensionsService);
        var identifier = data.getInjected(EXTENSIONS_IDENTIFIER);
        var form = new forms.FormGroup({});
        var extraForm = new forms.FormGroup({});
        form.addControl(EXTRA_PROPERTIES_KEY, extraForm);
        var record = data.record || {};
        var type = JSON.stringify(record) === '{}' ? 'create' : 'edit';
        var props = extensions[type + "FormProps"].get(identifier).props;
        var extraProperties = record[EXTRA_PROPERTIES_KEY] || {};
        props.forEach(function (_a) {
            var prop = _a.value;
            var name = prop.name;
            var isExtraProperty = prop.isExtra || name in extraProperties;
            var value = isExtraProperty ? extraProperties[name] : name in record ? record[name] : undefined;
            if (typeof value === 'undefined')
                value = prop.defaultValue;
            if (value) {
                var adapter = void 0;
                switch (prop.type) {
                    case "date" /* Date */:
                        adapter = new exports.DateAdapter();
                        value = adapter.toModel(adapter.fromModel(value));
                        break;
                    case "time" /* Time */:
                        adapter = new exports.TimeAdapter();
                        value = adapter.toModel(adapter.fromModel(value));
                        break;
                    case "dateTime" /* DateTime */:
                        adapter = new exports.DateTimeAdapter();
                        value = adapter.toModel(adapter.fromModel(value));
                        break;
                    default:
                        break;
                }
            }
            var formControl = new forms.FormControl(value, {
                asyncValidators: prop.asyncValidators(data),
                validators: prop.validators(data),
            });
            (isExtraProperty ? extraForm : form).addControl(name, formControl);
        });
        return form;
    }

    function createExtraPropertyValueResolver(name) {
        return function (data) { return rxjs.of(data.record[EXTRA_PROPERTIES_KEY][name]); };
    }
    function mergeWithDefaultProps(extension, defaultProps) {
        var contributors = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            contributors[_i - 2] = arguments[_i];
        }
        Object.keys(defaultProps).forEach(function (name) {
            var props = extension.get(name);
            props.clearContributors();
            props.addContributor(function (propList) { return propList.addManyTail(defaultProps[name]); });
            contributors.forEach(function (contributor) { return (contributor[name] || []).forEach(function (callback) { return props.addContributor(callback); }); });
        });
    }

    function createEnum(members) {
        var enumObject = {};
        members.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            enumObject[(enumObject[name] = value)] = name;
        });
        return enumObject;
    }
    function createEnumValueResolver(enumType, lookupEnum, propName) {
        return function (data) {
            var value = data.record[EXTRA_PROPERTIES_KEY][propName];
            var key = lookupEnum.transformed[value];
            var l10n = data.getInjected(ng_core.LocalizationService);
            var localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
            return createLocalizationStream(l10n, localizeEnum(key));
        };
    }
    function createEnumOptions(enumType, lookupEnum) {
        return function (data) {
            var l10n = data.getInjected(ng_core.LocalizationService);
            var localizeEnum = createEnumLocalizer(l10n, enumType, lookupEnum);
            return createLocalizationStream(l10n, lookupEnum.fields.map(function (_a) {
                var name = _a.name, value = _a.value;
                return ({
                    key: localizeEnum(name),
                    value: value,
                });
            }));
        };
    }
    function createLocalizationStream(l10n, mapTarget) {
        return rxjs.merge(rxjs.of(null), l10n.languageChange).pipe(operators.map(function () { return mapTarget; }));
    }
    function createEnumLocalizer(l10n, enumType, lookupEnum) {
        var resource = lookupEnum.localizationResource;
        var shortType = getShortEnumType(enumType);
        return function (key) { return l10n.localizeWithFallbackSync([resource], ['Enum:' + shortType + '.' + key, shortType + '.' + key, key], key); };
    }
    function getShortEnumType(enumType) {
        return enumType.split('.').pop();
    }

    function createDisplayNameLocalizationPipeKeyGenerator(localization) {
        var generateLocalizationPipeKey = ng_core.createLocalizationPipeKeyGenerator(localization);
        return function (displayName, fallback) {
            if (displayName && displayName.name)
                return generateLocalizationPipeKey([displayName.resource], [displayName.name], displayName.name);
            var key = generateLocalizationPipeKey([fallback.resource], ['DisplayName:' + fallback.name], undefined);
            if (key)
                return key;
            return generateLocalizationPipeKey([fallback.resource], [fallback.name], fallback.name);
        };
    }

    function getValidatorsFromProperty(property) {
        var validators = [];
        property.attributes.forEach(function (attr) {
            if (attr.typeSimple in ng_core.AbpValidators)
                validators.push(ng_core.AbpValidators[attr.typeSimple](attr.config));
        });
        return validators;
    }

    var selectConfig = function (state) { return state.ConfigState; };
    var ɵ0$3 = selectConfig;
    var ɵ1 = function (config) { return config.objectExtensions; };
    var selectObjectExtensions = store.createSelector([selectConfig], ɵ1);
    var ɵ2 = function (config) { return config.localization; };
    var selectLocalization = store.createSelector([selectConfig], ɵ2);
    var ɵ3 = function (extensions) { return Object.keys(extensions.enums).reduce(function (acc, key) {
        var _a = extensions.enums[key], fields = _a.fields, localizationResource = _a.localizationResource;
        acc[key] = {
            fields: fields,
            localizationResource: localizationResource,
            transformed: createEnum(fields),
        };
        return acc;
    }, {}); };
    var selectEnums = store.createSelector([selectObjectExtensions, selectLocalization], ɵ3);
    var createObjectExtensionEntitiesSelector = function (moduleKey) { return store.createSelector([selectObjectExtensions], function (extensions) {
        if (!extensions)
            return null;
        return (extensions.modules[moduleKey] || {}).entities;
    }); };
    var ɵ4 = createObjectExtensionEntitiesSelector;
    function getObjectExtensionEntitiesFromStore(store, moduleKey) {
        return store.select(createObjectExtensionEntitiesSelector(moduleKey)).pipe(operators.map(function (entities) { return (isUndefined(entities) ? {} : entities); }), operators.filter(Boolean), operators.take(1));
    }
    function mapEntitiesToContributors(store, resource) {
        return rxjs.pipe(operators.switchMap(function (entities) { return rxjs.zip(store.select(selectLocalization), store.select(selectEnums)).pipe(operators.map(function (_a) {
            var _b = __read(_a, 2), localization = _b[0], enums = _b[1];
            var generateDisplayName = createDisplayNameLocalizationPipeKeyGenerator(localization);
            return Object.keys(entities).reduce(function (acc, key) {
                acc.prop[key] = [];
                acc.createForm[key] = [];
                acc.editForm[key] = [];
                var entity = entities[key];
                if (!entity)
                    return acc;
                var properties = entity.properties;
                if (!properties)
                    return acc;
                var mapPropertiesToContributors = createPropertiesToContributorsMapper(generateDisplayName, resource, enums);
                return mapPropertiesToContributors(properties, acc, key);
            }, {
                prop: {},
                createForm: {},
                editForm: {},
            });
        })); }), operators.take(1));
    }
    function createPropertiesToContributorsMapper(generateDisplayName, resource, enums) {
        return function (properties, contributors, key) {
            var isExtra = true;
            Object.keys(properties).forEach(function (name) {
                var property = properties[name];
                var type = getTypeFromProperty(property);
                var displayName = generateDisplayName(property.displayName, { name: name, resource: resource });
                if (property.ui.onTable.isVisible) {
                    var sortable = Boolean(property.ui.onTable.isSortable);
                    var columnWidth = type === "boolean" /* Boolean */ ? 150 : 250;
                    var valueResolver = type === "enum" /* Enum */
                        ? createEnumValueResolver(property.type, enums[property.type], name)
                        : createExtraPropertyValueResolver(name);
                    var entityProp_1 = new EntityProp({
                        type: type,
                        name: name,
                        displayName: displayName,
                        sortable: sortable,
                        columnWidth: columnWidth,
                        valueResolver: valueResolver,
                        isExtra: isExtra,
                    });
                    var contributor = function (propList) { return propList.addTail(entityProp_1); };
                    contributors.prop[key].push(contributor);
                }
                var isOnCreateForm = property.ui.onCreateForm.isVisible;
                var isOnEditForm = property.ui.onEditForm.isVisible;
                if (isOnCreateForm || isOnEditForm) {
                    var defaultValue = property.defaultValue;
                    var validators = function () { return getValidatorsFromProperty(property); };
                    var options = void 0;
                    if (type === "enum" /* Enum */)
                        options = createEnumOptions(name, enums[property.type]);
                    var formProp_1 = new FormProp({
                        type: type,
                        name: name,
                        displayName: displayName,
                        options: options,
                        defaultValue: defaultValue,
                        validators: validators,
                        isExtra: isExtra,
                    });
                    var formContributor = function (propList) { return propList.addTail(formProp_1); };
                    if (isOnCreateForm)
                        contributors.createForm[key].push(formContributor);
                    if (isOnEditForm)
                        contributors.editForm[key].push(formContributor);
                }
            });
            return contributors;
        };
    }
    function getTypeFromProperty(property) {
        return property.typeSimple.replace(/\?$/, '');
    }
    function isUndefined(obj) {
        return typeof obj === 'undefined';
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionList = ActionList;
    exports.CreateFormPropsFactory = CreateFormPropsFactory;
    exports.EXTENSIONS_ACTION_CALLBACK = EXTENSIONS_ACTION_CALLBACK;
    exports.EXTENSIONS_ACTION_DATA = EXTENSIONS_ACTION_DATA;
    exports.EXTENSIONS_ACTION_TYPE = EXTENSIONS_ACTION_TYPE;
    exports.EXTENSIONS_IDENTIFIER = EXTENSIONS_IDENTIFIER;
    exports.EXTRA_PROPERTIES_KEY = EXTRA_PROPERTIES_KEY;
    exports.EditFormPropsFactory = EditFormPropsFactory;
    exports.EntityAction = EntityAction;
    exports.EntityActionList = EntityActionList;
    exports.EntityActions = EntityActions;
    exports.EntityActionsFactory = EntityActionsFactory;
    exports.EntityProp = EntityProp;
    exports.EntityPropList = EntityPropList;
    exports.EntityProps = EntityProps;
    exports.EntityPropsFactory = EntityPropsFactory;
    exports.FormProp = FormProp;
    exports.FormPropData = FormPropData;
    exports.FormPropList = FormPropList;
    exports.FormProps = FormProps;
    exports.ObjectExtensions = objectExtensions;
    exports.PropList = PropList;
    exports.ToolbarAction = ToolbarAction;
    exports.ToolbarActionList = ToolbarActionList;
    exports.ToolbarActions = ToolbarActions;
    exports.ToolbarActionsFactory = ToolbarActionsFactory;
    exports.ToolbarComponent = ToolbarComponent;
    exports.createExtraPropertyValueResolver = createExtraPropertyValueResolver;
    exports.generateFormFromProps = generateFormFromProps;
    exports.getObjectExtensionEntitiesFromStore = getObjectExtensionEntitiesFromStore;
    exports.mapEntitiesToContributors = mapEntitiesToContributors;
    exports.mergeWithDefaultActions = mergeWithDefaultActions;
    exports.mergeWithDefaultProps = mergeWithDefaultProps;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;
    exports.ɵ2 = ɵ2;
    exports.ɵ3 = ɵ3;
    exports.ɵ4 = ɵ4;
    exports.ɵa = ActionData;
    exports.ɵb = Action;
    exports.ɵc = ActionsFactory;
    exports.ɵd = Actions;
    exports.ɵe = PropData;
    exports.ɵf = Prop;
    exports.ɵg = PropsFactory;
    exports.ɵh = Props;
    exports.ɵi = selfFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.theme.shared-extensions.umd.js.map
