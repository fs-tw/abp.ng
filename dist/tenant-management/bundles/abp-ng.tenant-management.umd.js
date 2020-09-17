(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.feature-management'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@ngxs/store'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.tenant-management', ['exports', '@abp/ng.core', '@abp/ng.feature-management', '@abp/ng.theme.shared', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@ngxs/store', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['tenant-management'] = {}), global.i1, global.ng_featureManagement, global.ng_theme_shared, global.ng.core, global.ngBootstrap, global.core, global.i1$1, global.ng.forms, global.rxjs, global.rxjs.operators, global.ng.router));
}(this, (function (exports, i1, ng_featureManagement, ng_theme_shared, i0, ngBootstrap, core, i1$1, forms, rxjs, operators, router) { 'use strict';

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

    var GetTenants = /** @class */ (function () {
        function GetTenants(payload) {
            this.payload = payload;
        }
        return GetTenants;
    }());
    GetTenants.type = '[TenantManagement] Get Tenant';
    var GetTenantById = /** @class */ (function () {
        function GetTenantById(payload) {
            this.payload = payload;
        }
        return GetTenantById;
    }());
    GetTenantById.type = '[TenantManagement] Get Tenant By Id';
    var CreateTenant = /** @class */ (function () {
        function CreateTenant(payload) {
            this.payload = payload;
        }
        return CreateTenant;
    }());
    CreateTenant.type = '[TenantManagement] Create Tenant';
    var UpdateTenant = /** @class */ (function () {
        function UpdateTenant(payload) {
            this.payload = payload;
        }
        return UpdateTenant;
    }());
    UpdateTenant.type = '[TenantManagement] Update Tenant';
    var DeleteTenant = /** @class */ (function () {
        function DeleteTenant(payload) {
            this.payload = payload;
        }
        return DeleteTenant;
    }());
    DeleteTenant.type = '[TenantManagement] Delete Tenant';

    exports.ɵc = /** @class */ (function () {
        function TenantManagementService(rest) {
            this.rest = rest;
            this.apiName = 'AbpTenantManagement';
        }
        TenantManagementService.prototype.getTenant = function (params) {
            if (params === void 0) { params = {}; }
            var request = {
                method: 'GET',
                url: '/api/multi-tenancy/tenants',
                params: params,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        TenantManagementService.prototype.getTenantById = function (id) {
            var request = {
                method: 'GET',
                url: "/api/multi-tenancy/tenants/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        TenantManagementService.prototype.deleteTenant = function (id) {
            var request = {
                method: 'DELETE',
                url: "/api/multi-tenancy/tenants/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        TenantManagementService.prototype.createTenant = function (body) {
            var request = {
                method: 'POST',
                url: '/api/multi-tenancy/tenants',
                body: body,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        TenantManagementService.prototype.updateTenant = function (body) {
            var url = "/api/multi-tenancy/tenants/" + body.id;
            delete body.id;
            var request = {
                method: 'PUT',
                url: url,
                body: body,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        TenantManagementService.prototype.getDefaultConnectionString = function (id) {
            var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
            var request = {
                method: 'GET',
                responseType: "text" /* Text */,
                url: url,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        TenantManagementService.prototype.updateDefaultConnectionString = function (payload) {
            var url = "/api/multi-tenancy/tenants/" + payload.id + "/default-connection-string";
            var request = {
                method: 'PUT',
                url: url,
                params: { defaultConnectionString: payload.defaultConnectionString },
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        TenantManagementService.prototype.deleteDefaultConnectionString = function (id) {
            var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
            var request = {
                method: 'DELETE',
                url: url,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        return TenantManagementService;
    }());
    exports.ɵc.ɵprov = i0.ɵɵdefineInjectable({ factory: function TenantManagementService_Factory() { return new exports.ɵc(i0.ɵɵinject(i1.RestService)); }, token: exports.ɵc, providedIn: "root" });
    exports.ɵc = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1.RestService])
    ], exports.ɵc);

    exports.ɵb = /** @class */ (function () {
        function TenantManagementState(tenantManagementService) {
            this.tenantManagementService = tenantManagementService;
        }
        TenantManagementState.get = function (_a) {
            var result = _a.result;
            return result.items || [];
        };
        TenantManagementState.getTenantsTotalCount = function (_a) {
            var result = _a.result;
            return result.totalCount;
        };
        TenantManagementState.prototype.get = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.tenantManagementService.getTenant(payload).pipe(operators.tap(function (result) { return patchState({
                result: result,
            }); }));
        };
        TenantManagementState.prototype.getById = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.tenantManagementService.getTenantById(payload).pipe(operators.tap(function (selectedItem) { return patchState({
                selectedItem: selectedItem,
            }); }));
        };
        TenantManagementState.prototype.delete = function (_, _a) {
            var payload = _a.payload;
            return this.tenantManagementService.deleteTenant(payload);
        };
        TenantManagementState.prototype.add = function (_, _a) {
            var payload = _a.payload;
            return this.tenantManagementService.createTenant(payload);
        };
        TenantManagementState.prototype.update = function (_a, _b) {
            var getState = _a.getState;
            var payload = _b.payload;
            return this.tenantManagementService.updateTenant(Object.assign(Object.assign({}, getState().selectedItem), payload));
        };
        return TenantManagementState;
    }());
    __decorate([
        i1$1.Action(GetTenants),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetTenants]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "get", null);
    __decorate([
        i1$1.Action(GetTenantById),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetTenantById]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "getById", null);
    __decorate([
        i1$1.Action(DeleteTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, DeleteTenant]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "delete", null);
    __decorate([
        i1$1.Action(CreateTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, CreateTenant]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "add", null);
    __decorate([
        i1$1.Action(UpdateTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateTenant]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "update", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], exports.ɵb, "get", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], exports.ɵb, "getTenantsTotalCount", null);
    exports.ɵb = __decorate([
        i1$1.State({
            name: 'TenantManagementState',
            defaults: { result: {}, selectedItem: {} },
        }),
        i0.Injectable(),
        __metadata("design:paramtypes", [exports.ɵc])
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
        function TenantsComponent(list, confirmationService, tenantService, fb, store) {
            var _this = this;
            this.list = list;
            this.confirmationService = confirmationService;
            this.tenantService = tenantService;
            this.fb = fb;
            this.store = store;
            this.selectedModalContent = {};
            this.visibleFeatures = false;
            this.modalBusy = false;
            this.featureManagementKey = "FeatureManagement.FeatureManagementComponent" /* FeatureManagement */;
            this.onVisibleFeaturesChange = function (value) {
                _this.visibleFeatures = value;
            };
        }
        Object.defineProperty(TenantsComponent.prototype, "hasSelectedTenant", {
            get: function () {
                return Boolean(this.selected.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TenantsComponent.prototype, "useSharedDatabase", {
            get: function () {
                return this.defaultConnectionStringForm.get('useSharedDatabase').value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TenantsComponent.prototype, "connectionString", {
            get: function () {
                return this.defaultConnectionStringForm.get('defaultConnectionString').value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TenantsComponent.prototype, "isDisabledSaveButton", {
            get: function () {
                if (!this.selectedModalContent)
                    return false;
                if (this.selectedModalContent.type === 'saveConnStr' &&
                    this.defaultConnectionStringForm &&
                    this.defaultConnectionStringForm.invalid) {
                    return true;
                }
                else if (this.selectedModalContent.type === 'saveTenant' &&
                    this.tenantForm &&
                    this.tenantForm.invalid) {
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        TenantsComponent.prototype.ngOnInit = function () {
            this.hookToQuery();
        };
        TenantsComponent.prototype.createTenantForm = function () {
            var tenantForm = this.fb.group({
                name: [this.selected.name || '', [forms.Validators.required, forms.Validators.maxLength(256)]],
                adminEmailAddress: [null, [forms.Validators.required, forms.Validators.maxLength(256), forms.Validators.email]],
                adminPassword: [null, __spread([forms.Validators.required], ng_theme_shared.getPasswordValidators(this.store))],
            });
            if (this.hasSelectedTenant) {
                tenantForm.removeControl('adminEmailAddress');
                tenantForm.removeControl('adminPassword');
            }
            this.tenantForm = tenantForm;
        };
        TenantsComponent.prototype.createDefaultConnectionStringForm = function () {
            this.defaultConnectionStringForm = this.fb.group({
                useSharedDatabase: this._useSharedDatabase,
                defaultConnectionString: [this.defaultConnectionString || ''],
            });
        };
        TenantsComponent.prototype.openModal = function (title, template, type) {
            this.selectedModalContent = {
                title: title,
                template: template,
                type: type,
            };
            this.isModalVisible = true;
        };
        TenantsComponent.prototype.onEditConnectionString = function (id) {
            var _this = this;
            this.store
                .dispatch(new GetTenantById(id))
                .pipe(operators.pluck('TenantManagementState', 'selectedItem'), operators.switchMap(function (selected) {
                _this.selected = selected;
                return _this.tenantService.getDefaultConnectionString(id);
            }))
                .subscribe(function (fetchedConnectionString) {
                _this._useSharedDatabase = fetchedConnectionString ? false : true;
                _this.defaultConnectionString = fetchedConnectionString ? fetchedConnectionString : '';
                _this.createDefaultConnectionStringForm();
                _this.openModal('AbpTenantManagement::ConnectionStrings', _this.connectionStringModalTemplate, 'saveConnStr');
            });
        };
        TenantsComponent.prototype.addTenant = function () {
            this.selected = {};
            this.createTenantForm();
            this.openModal('AbpTenantManagement::NewTenant', this.tenantModalTemplate, 'saveTenant');
        };
        TenantsComponent.prototype.editTenant = function (id) {
            var _this = this;
            this.store
                .dispatch(new GetTenantById(id))
                .pipe(operators.pluck('TenantManagementState', 'selectedItem'))
                .subscribe(function (selected) {
                _this.selected = selected;
                _this.createTenantForm();
                _this.openModal('AbpTenantManagement::Edit', _this.tenantModalTemplate, 'saveTenant');
            });
        };
        TenantsComponent.prototype.save = function () {
            var type = this.selectedModalContent.type;
            if (!type)
                return;
            if (type === 'saveTenant')
                this.saveTenant();
            else if (type === 'saveConnStr')
                this.saveConnectionString();
        };
        TenantsComponent.prototype.saveConnectionString = function () {
            var _this = this;
            if (this.modalBusy)
                return;
            this.modalBusy = true;
            if (this.useSharedDatabase || (!this.useSharedDatabase && !this.connectionString)) {
                this.tenantService
                    .deleteDefaultConnectionString(this.selected.id)
                    .pipe(operators.take(1), operators.finalize(function () { return (_this.modalBusy = false); }))
                    .subscribe(function () {
                    _this.isModalVisible = false;
                });
            }
            else {
                this.tenantService
                    .updateDefaultConnectionString({
                    id: this.selected.id,
                    defaultConnectionString: this.connectionString,
                })
                    .pipe(operators.take(1), operators.finalize(function () { return (_this.modalBusy = false); }))
                    .subscribe(function () {
                    _this.isModalVisible = false;
                });
            }
        };
        TenantsComponent.prototype.saveTenant = function () {
            var _this = this;
            if (!this.tenantForm.valid || this.modalBusy)
                return;
            this.modalBusy = true;
            this.store
                .dispatch(this.selected.id
                ? new UpdateTenant(Object.assign(Object.assign(Object.assign({}, this.selected), this.tenantForm.value), { id: this.selected.id }))
                : new CreateTenant(this.tenantForm.value))
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.isModalVisible = false;
                _this.list.get();
            });
        };
        TenantsComponent.prototype.delete = function (id, name) {
            var _this = this;
            this.confirmationService
                .warn('AbpTenantManagement::TenantDeletionConfirmationMessage', 'AbpTenantManagement::AreYouSure', {
                messageLocalizationParams: [name],
            })
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    _this.store.dispatch(new DeleteTenant(id)).subscribe(function () { return _this.list.get(); });
                }
            });
        };
        TenantsComponent.prototype.hookToQuery = function () {
            var _this = this;
            this.list.hookToQuery(function (query) { return _this.store.dispatch(new GetTenants(query)); }).subscribe();
        };
        TenantsComponent.prototype.onSharedDatabaseChange = function (value) {
            if (!value) {
                setTimeout(function () {
                    var defaultConnectionString = document.getElementById('defaultConnectionString');
                    if (defaultConnectionString) {
                        defaultConnectionString.focus();
                    }
                }, 0);
            }
        };
        TenantsComponent.prototype.openFeaturesModal = function (providerKey) {
            var _this = this;
            this.providerKey = providerKey;
            setTimeout(function () {
                _this.visibleFeatures = true;
            }, 0);
        };
        TenantsComponent.prototype.sort = function (data) {
            var _a = data.sorts[0], prop = _a.prop, dir = _a.dir;
            this.list.sortKey = prop;
            this.list.sortOrder = dir;
        };
        return TenantsComponent;
    }());
    __decorate([
        i1$1.Select(exports.ɵb.get),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "data$", void 0);
    __decorate([
        i1$1.Select(exports.ɵb.getTenantsTotalCount),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "totalCount$", void 0);
    __decorate([
        i0.ViewChild('tenantModalTemplate'),
        __metadata("design:type", i0.TemplateRef)
    ], exports.ɵa.prototype, "tenantModalTemplate", void 0);
    __decorate([
        i0.ViewChild('connectionStringModalTemplate'),
        __metadata("design:type", i0.TemplateRef)
    ], exports.ɵa.prototype, "connectionStringModalTemplate", void 0);
    exports.ɵa = __decorate([
        i0.Component({
            selector: 'abp-tenants',
            template: "<div id=\"wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpTenantManagement::Tenants' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpTenantManagement.Tenants.Create'\"\r\n          id=\"create-tenants\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"addTenant()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          type=\"search\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          [(ngModel)]=\"list.filter\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"editTenant(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                ngbDropdownItem\r\n                (click)=\"onEditConnectionString(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                ngbDropdownItem\r\n                (click)=\"openFeaturesModal(row.id)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpTenantManagement::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpTenantManagement::TenantName' | abpLocalization\"\r\n        prop=\"name\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ selectedModalContent.title | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"isDisabledSaveButton\">{{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<ng-template #tenantModalTemplate>\r\n  <form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"mt-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpTenantManagement::TenantName' | abpLocalization }}</label>\r\n        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" autofocus />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"email\"\r\n          type=\"email\"\r\n          id=\"admin-email-address\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminEmailAddress\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"tenantForm.controls.adminPassword\">\r\n        <label for=\"name\">{{\r\n          'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization\r\n        }}</label>\r\n        <input\r\n          autocomplete=\"new-password\"\r\n          type=\"password\"\r\n          id=\"admin-password\"\r\n          class=\"form-control\"\r\n          formControlName=\"adminPassword\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n  <form [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n    <div class=\"form-group\">\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          id=\"useSharedDatabase\"\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"useSharedDatabase\"\r\n          autofocus\r\n          (ngModelChange)=\"onSharedDatabaseChange($event)\"\r\n        />\r\n        <label for=\"useSharedDatabase\" class=\"custom-control-label\">{{\r\n          'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!useSharedDatabase\">\r\n      <label for=\"defaultConnectionString\">{{\r\n        'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"defaultConnectionString\"\r\n        class=\"form-control\"\r\n        formControlName=\"defaultConnectionString\"\r\n      />\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<abp-feature-management\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'T' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visibleFeatures, twoWay: true }\r\n    },\r\n    outputs: { visibleChange: onVisibleFeaturesChange },\r\n    componentKey: featureManagementKey\r\n  }\"\r\n  [(visible)]=\"visibleFeatures\"\r\n  providerName=\"T\"\r\n  [providerKey]=\"providerKey\"\r\n>\r\n</abp-feature-management>\r\n",
            providers: [i1.ListService]
        }),
        __metadata("design:paramtypes", [i1.ListService,
            ng_theme_shared.ConfirmationService,
            exports.ɵc,
            forms.FormBuilder,
            i1$1.Store])
    ], exports.ɵa);

    var ɵ0 = {
        requiredPolicy: 'AbpTenantManagement.Tenants',
        replaceableComponent: {
            key: "TenantManagement.TenantsComponent" /* Tenants */,
            defaultComponent: exports.ɵa,
        },
    };
    var routes = [
        { path: '', redirectTo: 'tenants', pathMatch: 'full' },
        {
            path: '',
            component: i1.DynamicLayoutComponent,
            canActivate: [i1.AuthGuard, i1.PermissionGuard],
            children: [
                {
                    path: 'tenants',
                    component: i1.ReplaceableRouteContainerComponent,
                    data: ɵ0,
                },
            ],
        },
    ];
    exports.ɵj = /** @class */ (function () {
        function TenantManagementRoutingModule() {
        }
        return TenantManagementRoutingModule;
    }());
    exports.ɵj = __decorate([
        i0.NgModule({
            imports: [router.RouterModule.forChild(routes)],
            exports: [router.RouterModule],
        })
    ], exports.ɵj);

    var TenantManagementModule_1;
    exports.TenantManagementModule = TenantManagementModule_1 = /** @class */ (function () {
        function TenantManagementModule() {
        }
        TenantManagementModule.forChild = function () {
            return {
                ngModule: TenantManagementModule_1,
                providers: [],
            };
        };
        TenantManagementModule.forLazy = function () {
            return new i1.LazyModuleFactory(TenantManagementModule_1.forChild());
        };
        return TenantManagementModule;
    }());
    exports.TenantManagementModule = TenantManagementModule_1 = __decorate([
        i0.NgModule({
            declarations: [exports.ɵa],
            exports: [exports.ɵa],
            imports: [
                exports.ɵj,
                i1$1.NgxsModule.forFeature([exports.ɵb]),
                core.NgxValidateCoreModule,
                i1.CoreModule,
                ng_theme_shared.ThemeSharedModule,
                ngBootstrap.NgbDropdownModule,
                ng_featureManagement.FeatureManagementModule,
            ],
        })
    ], exports.TenantManagementModule);

    exports.TenantManagementStateService = /** @class */ (function () {
        function TenantManagementStateService(store) {
            this.store = store;
        }
        TenantManagementStateService.prototype.get = function () {
            return this.store.selectSnapshot(exports.ɵb.get);
        };
        TenantManagementStateService.prototype.getTenantsTotalCount = function () {
            return this.store.selectSnapshot(exports.ɵb.getTenantsTotalCount);
        };
        TenantManagementStateService.prototype.dispatchGetTenants = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetTenants.bind.apply(GetTenants, __spread([void 0], args)))());
        };
        TenantManagementStateService.prototype.dispatchGetTenantById = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetTenantById.bind.apply(GetTenantById, __spread([void 0], args)))());
        };
        TenantManagementStateService.prototype.dispatchCreateTenant = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (CreateTenant.bind.apply(CreateTenant, __spread([void 0], args)))());
        };
        TenantManagementStateService.prototype.dispatchUpdateTenant = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (UpdateTenant.bind.apply(UpdateTenant, __spread([void 0], args)))());
        };
        TenantManagementStateService.prototype.dispatchDeleteTenant = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (DeleteTenant.bind.apply(DeleteTenant, __spread([void 0], args)))());
        };
        return TenantManagementStateService;
    }());
    exports.TenantManagementStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TenantManagementStateService_Factory() { return new exports.TenantManagementStateService(i0.ɵɵinject(i1$1.Store)); }, token: exports.TenantManagementStateService, providedIn: "root" });
    exports.TenantManagementStateService = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1$1.Store])
    ], exports.TenantManagementStateService);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CreateTenant = CreateTenant;
    exports.DeleteTenant = DeleteTenant;
    exports.GetTenantById = GetTenantById;
    exports.GetTenants = GetTenants;
    exports.TenantManagementService = exports.ɵc;
    exports.TenantManagementState = exports.ɵb;
    exports.TenantsComponent = exports.ɵa;
    exports.UpdateTenant = UpdateTenant;
    exports.ɵd = GetTenants;
    exports.ɵe = GetTenantById;
    exports.ɵf = CreateTenant;
    exports.ɵg = UpdateTenant;
    exports.ɵh = DeleteTenant;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.tenant-management.umd.js.map
