(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.permission-management'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@ngx-validate/core'), require('@ngxs/store'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('snq'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.identity', ['exports', '@abp/ng.core', '@abp/ng.permission-management', '@abp/ng.theme.shared', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@ngx-validate/core', '@ngxs/store', '@angular/forms', 'rxjs', 'rxjs/operators', 'snq', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.identity = {}), global.i1, global.ng_permissionManagement, global.ng_theme_shared, global.ng.core, global.ngBootstrap, global.core, global.i1$1, global.ng.forms, global.rxjs, global.rxjs.operators, global.snq, global.ng.router));
}(this, (function (exports, i1, ng_permissionManagement, ng_theme_shared, i0, ngBootstrap, core, i1$1, forms, rxjs, operators, snq, router) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var snq__default = /*#__PURE__*/_interopDefaultLegacy(snq);

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
                if (Object.prototype.hasOwnProperty.call(b, p))
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
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
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    var GetRoles = /** @class */ (function () {
        function GetRoles(payload) {
            this.payload = payload;
        }
        return GetRoles;
    }());
    GetRoles.type = '[Identity] Get Roles';
    var GetRoleById = /** @class */ (function () {
        function GetRoleById(payload) {
            this.payload = payload;
        }
        return GetRoleById;
    }());
    GetRoleById.type = '[Identity] Get Role By Id';
    var DeleteRole = /** @class */ (function () {
        function DeleteRole(payload) {
            this.payload = payload;
        }
        return DeleteRole;
    }());
    DeleteRole.type = '[Identity] Delete Role';
    var CreateRole = /** @class */ (function () {
        function CreateRole(payload) {
            this.payload = payload;
        }
        return CreateRole;
    }());
    CreateRole.type = '[Identity] Create Role';
    var UpdateRole = /** @class */ (function () {
        function UpdateRole(payload) {
            this.payload = payload;
        }
        return UpdateRole;
    }());
    UpdateRole.type = '[Identity] Update Role';
    var GetUsers = /** @class */ (function () {
        function GetUsers(payload) {
            this.payload = payload;
        }
        return GetUsers;
    }());
    GetUsers.type = '[Identity] Get Users';
    var GetUserById = /** @class */ (function () {
        function GetUserById(payload) {
            this.payload = payload;
        }
        return GetUserById;
    }());
    GetUserById.type = '[Identity] Get User By Id';
    var DeleteUser = /** @class */ (function () {
        function DeleteUser(payload) {
            this.payload = payload;
        }
        return DeleteUser;
    }());
    DeleteUser.type = '[Identity] Delete User';
    var CreateUser = /** @class */ (function () {
        function CreateUser(payload) {
            this.payload = payload;
        }
        return CreateUser;
    }());
    CreateUser.type = '[Identity] Create User';
    var UpdateUser = /** @class */ (function () {
        function UpdateUser(payload) {
            this.payload = payload;
        }
        return UpdateUser;
    }());
    UpdateUser.type = '[Identity] Update User';
    var GetUserRoles = /** @class */ (function () {
        function GetUserRoles(payload) {
            this.payload = payload;
        }
        return GetUserRoles;
    }());
    GetUserRoles.type = '[Identity] Get User Roles';

    var IdentityRoleService = /** @class */ (function () {
        function IdentityRoleService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'AbpIdentity';
            this.create = function (input) { return _this.restService.request({
                method: 'POST',
                url: '/api/identity/roles',
                body: input,
            }, { apiName: _this.apiName }); };
            this.delete = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/identity/roles/" + id,
            }, { apiName: _this.apiName }); };
            this.get = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/roles/" + id,
            }, { apiName: _this.apiName }); };
            this.getAllList = function () { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/roles/all',
            }, { apiName: _this.apiName }); };
            this.getList = function (input) { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/roles',
                params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.update = function (id, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/identity/roles/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return IdentityRoleService;
    }());
    IdentityRoleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IdentityRoleService_Factory() { return new IdentityRoleService(i0.ɵɵinject(i1.RestService)); }, token: IdentityRoleService, providedIn: "root" });
    IdentityRoleService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    IdentityRoleService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var IdentityUserService = /** @class */ (function () {
        function IdentityUserService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'AbpIdentity';
            this.create = function (input) { return _this.restService.request({
                method: 'POST',
                url: '/api/identity/users',
                body: input,
            }, { apiName: _this.apiName }); };
            this.delete = function (id) { return _this.restService.request({
                method: 'DELETE',
                url: "/api/identity/users/" + id,
            }, { apiName: _this.apiName }); };
            this.findByEmail = function (email) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/users/by-email/" + email,
            }, { apiName: _this.apiName }); };
            this.findByUsername = function (username) { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/users/by-username/{userName}',
            }, { apiName: _this.apiName }); };
            this.get = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/users/" + id,
            }, { apiName: _this.apiName }); };
            this.getAssignableRoles = function () { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/users/assignable-roles',
            }, { apiName: _this.apiName }); };
            this.getList = function (input) { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/users',
                params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
            }, { apiName: _this.apiName }); };
            this.getRoles = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/users/" + id + "/roles",
            }, { apiName: _this.apiName }); };
            this.update = function (id, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/identity/users/" + id,
                body: input,
            }, { apiName: _this.apiName }); };
            this.updateRoles = function (id, input) { return _this.restService.request({
                method: 'PUT',
                url: "/api/identity/users/" + id + "/roles",
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return IdentityUserService;
    }());
    IdentityUserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IdentityUserService_Factory() { return new IdentityUserService(i0.ɵɵinject(i1.RestService)); }, token: IdentityUserService, providedIn: "root" });
    IdentityUserService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    IdentityUserService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    exports.IdentityState = /** @class */ (function () {
        function IdentityState(identityUserService, identityRoleService) {
            this.identityUserService = identityUserService;
            this.identityRoleService = identityRoleService;
        }
        IdentityState.getRoles = function (_a) {
            var roles = _a.roles;
            return roles.items || [];
        };
        IdentityState.getRolesTotalCount = function (_a) {
            var roles = _a.roles;
            return roles.totalCount || 0;
        };
        IdentityState.getUsers = function (_a) {
            var users = _a.users;
            return users.items || [];
        };
        IdentityState.getUsersTotalCount = function (_a) {
            var users = _a.users;
            return users.totalCount || 0;
        };
        IdentityState.prototype.getRoles = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.identityRoleService.getList(payload).pipe(operators.tap(function (roles) { return patchState({
                roles: roles,
            }); }));
        };
        IdentityState.prototype.getRole = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.identityRoleService.get(payload).pipe(operators.tap(function (selectedRole) { return patchState({
                selectedRole: selectedRole,
            }); }));
        };
        IdentityState.prototype.deleteRole = function (_, _a) {
            var payload = _a.payload;
            return this.identityRoleService.delete(payload);
        };
        IdentityState.prototype.addRole = function (_, _a) {
            var payload = _a.payload;
            return this.identityRoleService.create(payload);
        };
        IdentityState.prototype.updateRole = function (_a, _b) {
            var getState = _a.getState;
            var payload = _b.payload;
            return this.identityRoleService.update(payload.id, Object.assign(Object.assign({}, getState().selectedRole), payload));
        };
        IdentityState.prototype.getUsers = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.identityUserService.getList(payload).pipe(operators.tap(function (users) { return patchState({
                users: users,
            }); }));
        };
        IdentityState.prototype.getUser = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.identityUserService.get(payload).pipe(operators.tap(function (selectedUser) { return patchState({
                selectedUser: selectedUser,
            }); }));
        };
        IdentityState.prototype.deleteUser = function (_, _a) {
            var payload = _a.payload;
            return this.identityUserService.delete(payload);
        };
        IdentityState.prototype.addUser = function (_, _a) {
            var payload = _a.payload;
            return this.identityUserService.create(payload);
        };
        IdentityState.prototype.updateUser = function (_a, _b) {
            var getState = _a.getState;
            var payload = _b.payload;
            return this.identityUserService.update(payload.id, Object.assign(Object.assign({}, getState().selectedUser), payload));
        };
        IdentityState.prototype.getUserRoles = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.identityUserService.getRoles(payload).pipe(operators.pluck('items'), operators.tap(function (selectedUserRoles) { return patchState({
                selectedUserRoles: selectedUserRoles,
            }); }));
        };
        return IdentityState;
    }());
    exports.IdentityState.decorators = [
        { type: i0.Injectable }
    ];
    exports.IdentityState.ctorParameters = function () { return [
        { type: IdentityUserService },
        { type: IdentityRoleService }
    ]; };
    __decorate([
        i1$1.Action(GetRoles),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetRoles]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "getRoles", null);
    __decorate([
        i1$1.Action(GetRoleById),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetRoleById]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "getRole", null);
    __decorate([
        i1$1.Action(DeleteRole),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetRoleById]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "deleteRole", null);
    __decorate([
        i1$1.Action(CreateRole),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, CreateRole]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "addRole", null);
    __decorate([
        i1$1.Action(UpdateRole),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateRole]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "updateRole", null);
    __decorate([
        i1$1.Action(GetUsers),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetUsers]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "getUsers", null);
    __decorate([
        i1$1.Action(GetUserById),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetUserById]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "getUser", null);
    __decorate([
        i1$1.Action(DeleteUser),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetUserById]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "deleteUser", null);
    __decorate([
        i1$1.Action(CreateUser),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, CreateUser]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "addUser", null);
    __decorate([
        i1$1.Action(UpdateUser),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateUser]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "updateUser", null);
    __decorate([
        i1$1.Action(GetUserRoles),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetUserRoles]),
        __metadata("design:returntype", void 0)
    ], exports.IdentityState.prototype, "getUserRoles", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], exports.IdentityState, "getRoles", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], exports.IdentityState, "getRolesTotalCount", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], exports.IdentityState, "getUsers", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Number)
    ], exports.IdentityState, "getUsersTotalCount", null);
    exports.IdentityState = __decorate([
        i1$1.State({
            name: 'IdentityState',
            defaults: { roles: {}, selectedRole: {}, users: {}, selectedUser: {} },
        }),
        __metadata("design:paramtypes", [IdentityUserService,
            IdentityRoleService])
    ], exports.IdentityState);

    var RolesComponent = /** @class */ (function () {
        function RolesComponent(list, confirmationService, fb, store) {
            var _this = this;
            this.list = list;
            this.confirmationService = confirmationService;
            this.fb = fb;
            this.store = store;
            this.visiblePermissions = false;
            this.modalBusy = false;
            this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
            this.onVisiblePermissionChange = function (event) {
                _this.visiblePermissions = event;
            };
        }
        RolesComponent.prototype.ngOnInit = function () {
            this.hookToQuery();
        };
        RolesComponent.prototype.buildForm = function () {
            this.form = this.fb.group({
                name: new forms.FormControl({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                    forms.Validators.required,
                    forms.Validators.maxLength(256),
                ]),
                isDefault: [this.selected.isDefault || false],
                isPublic: [this.selected.isPublic || false],
            });
        };
        RolesComponent.prototype.openModal = function () {
            this.buildForm();
            this.isModalVisible = true;
        };
        RolesComponent.prototype.add = function () {
            this.selected = {};
            this.openModal();
        };
        RolesComponent.prototype.edit = function (id) {
            var _this = this;
            this.store
                .dispatch(new GetRoleById(id))
                .pipe(operators.pluck('IdentityState', 'selectedRole'))
                .subscribe(function (selectedRole) {
                _this.selected = selectedRole;
                _this.openModal();
            });
        };
        RolesComponent.prototype.save = function () {
            var _this = this;
            if (!this.form.valid)
                return;
            this.modalBusy = true;
            this.store
                .dispatch(this.selected.id
                ? new UpdateRole(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id }))
                : new CreateRole(this.form.value))
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.isModalVisible = false;
                _this.list.get();
            });
        };
        RolesComponent.prototype.delete = function (id, name) {
            var _this = this;
            this.confirmationService
                .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
                messageLocalizationParams: [name],
            })
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    _this.store.dispatch(new DeleteRole(id)).subscribe(function () { return _this.list.get(); });
                }
            });
        };
        RolesComponent.prototype.hookToQuery = function () {
            var _this = this;
            this.list.hookToQuery(function (query) { return _this.store.dispatch(new GetRoles(query)); }).subscribe();
        };
        RolesComponent.prototype.onClickSaveButton = function () {
            this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        };
        RolesComponent.prototype.openPermissionsModal = function (providerKey) {
            var _this = this;
            this.providerKey = providerKey;
            setTimeout(function () {
                _this.visiblePermissions = true;
            }, 0);
        };
        RolesComponent.prototype.sort = function (data) {
            var _a = data.sorts[0], prop = _a.prop, dir = _a.dir;
            this.list.sortKey = prop;
            this.list.sortOrder = dir;
        };
        return RolesComponent;
    }());
    RolesComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-roles',
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"edit(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                ngbDropdownItem\r\n                (click)=\"openPermissionsModal(row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *ngIf=\"!row.isStatic\"\r\n                [abpPermission]=\"'AbpIdentity.Roles.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.name)\"\r\n              >\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column [name]=\"'AbpIdentity::RoleName' | abpLocalization\" prop=\"name\">\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{ row.name }}\r\n          <span *ngIf=\"row.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n            'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n          }}</span>\r\n          <span *ngIf=\"row.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n            'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n          }}</span>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n",
                    providers: [i1.ListService]
                },] }
    ];
    RolesComponent.ctorParameters = function () { return [
        { type: i1.ListService },
        { type: ng_theme_shared.ConfirmationService },
        { type: forms.FormBuilder },
        { type: i1$1.Store }
    ]; };
    RolesComponent.propDecorators = {
        formRef: [{ type: i0.ViewChild, args: ['formRef', { static: false, read: i0.ElementRef },] }]
    };
    __decorate([
        i1$1.Select(exports.IdentityState.getRoles),
        __metadata("design:type", rxjs.Observable)
    ], RolesComponent.prototype, "data$", void 0);
    __decorate([
        i1$1.Select(exports.IdentityState.getRolesTotalCount),
        __metadata("design:type", rxjs.Observable)
    ], RolesComponent.prototype, "totalCount$", void 0);

    var IdentityService = /** @class */ (function () {
        function IdentityService(rest) {
            this.rest = rest;
            this.apiName = 'AbpIdentity';
        }
        IdentityService.prototype.getRoles = function (params) {
            if (params === void 0) { params = {}; }
            var request = {
                method: 'GET',
                url: '/api/identity/roles',
                params: params,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.getAllRoles = function () {
            var request = {
                method: 'GET',
                url: '/api/identity/roles/all',
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.getRoleById = function (id) {
            var request = {
                method: 'GET',
                url: "/api/identity/roles/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.deleteRole = function (id) {
            var request = {
                method: 'DELETE',
                url: "/api/identity/roles/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.createRole = function (body) {
            var request = {
                method: 'POST',
                url: '/api/identity/roles',
                body: body,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        IdentityService.prototype.updateRole = function (body) {
            var url = "/api/identity/roles/" + body.id;
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
        IdentityService.prototype.getUsers = function (params) {
            if (params === void 0) { params = {}; }
            var request = {
                method: 'GET',
                url: '/api/identity/users',
                params: params,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.getUserById = function (id) {
            var request = {
                method: 'GET',
                url: "/api/identity/users/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.getUserRoles = function (id) {
            var request = {
                method: 'GET',
                url: "/api/identity/users/" + id + "/roles",
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.getUserAssingableRoles = function () {
            var request = {
                method: 'GET',
                url: '/api/identity/users/assignable-roles',
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.deleteUser = function (id) {
            var request = {
                method: 'DELETE',
                url: "/api/identity/users/" + id,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        IdentityService.prototype.createUser = function (body) {
            var request = {
                method: 'POST',
                url: '/api/identity/users',
                body: body,
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        IdentityService.prototype.updateUser = function (body) {
            var url = "/api/identity/users/" + body.id;
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
        return IdentityService;
    }());
    IdentityService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.ɵɵinject(i1.RestService)); }, token: IdentityService, providedIn: "root" });
    IdentityService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    IdentityService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var UsersComponent = /** @class */ (function () {
        function UsersComponent(list, confirmationService, fb, store, identityService, identityUserService) {
            var _this = this;
            this.list = list;
            this.confirmationService = confirmationService;
            this.fb = fb;
            this.store = store;
            this.identityService = identityService;
            this.identityUserService = identityUserService;
            this.visiblePermissions = false;
            this.modalBusy = false;
            this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent" /* PermissionManagement */;
            this.trackByFn = function (index, item) { return Object.keys(item)[0] || index; };
            this.onVisiblePermissionChange = function (event) {
                _this.visiblePermissions = event;
            };
        }
        Object.defineProperty(UsersComponent.prototype, "roleGroups", {
            get: function () {
                var _this = this;
                return snq__default['default'](function () { return _this.form.get('roleNames').controls; }, []);
            },
            enumerable: false,
            configurable: true
        });
        UsersComponent.prototype.ngOnInit = function () {
            this.hookToQuery();
        };
        UsersComponent.prototype.buildForm = function () {
            var _this = this;
            this.identityUserService.getAssignableRoles().subscribe(function (_a) {
                var items = _a.items;
                _this.roles = items;
                _this.form = _this.fb.group({
                    userName: [_this.selected.userName || '', [forms.Validators.required, forms.Validators.maxLength(256)]],
                    email: [
                        _this.selected.email || '',
                        [forms.Validators.required, forms.Validators.email, forms.Validators.maxLength(256)],
                    ],
                    name: [_this.selected.name || '', [forms.Validators.maxLength(64)]],
                    surname: [_this.selected.surname || '', [forms.Validators.maxLength(64)]],
                    phoneNumber: [_this.selected.phoneNumber || '', [forms.Validators.maxLength(16)]],
                    lockoutEnabled: [_this.selected.id ? _this.selected.lockoutEnabled : true],
                    roleNames: _this.fb.array(_this.roles.map(function (role) {
                        var _a;
                        return _this.fb.group((_a = {},
                            _a[role.name] = [
                                _this.selected.id
                                    ? !!snq__default['default'](function () { return _this.selectedUserRoles.find(function (userRole) { return userRole.id === role.id; }); })
                                    : role.isDefault,
                            ],
                            _a));
                    })),
                });
                var passwordValidators = ng_theme_shared.getPasswordValidators(_this.store);
                _this.form.addControl('password', new forms.FormControl('', __spread(passwordValidators)));
                if (!_this.selected.userName) {
                    _this.form.get('password').setValidators(__spread(passwordValidators, [forms.Validators.required]));
                    _this.form.get('password').updateValueAndValidity();
                }
            });
        };
        UsersComponent.prototype.openModal = function () {
            this.buildForm();
            this.isModalVisible = true;
        };
        UsersComponent.prototype.add = function () {
            this.selected = {};
            this.selectedUserRoles = [];
            this.openModal();
        };
        UsersComponent.prototype.edit = function (id) {
            var _this = this;
            this.store
                .dispatch(new GetUserById(id))
                .pipe(operators.switchMap(function () { return _this.store.dispatch(new GetUserRoles(id)); }), operators.pluck('IdentityState'), operators.take(1))
                .subscribe(function (state) {
                _this.selected = state.selectedUser;
                _this.selectedUserRoles = state.selectedUserRoles || [];
                _this.openModal();
            });
        };
        UsersComponent.prototype.save = function () {
            var _this = this;
            if (!this.form.valid || this.modalBusy)
                return;
            this.modalBusy = true;
            var roleNames = this.form.value.roleNames;
            var mappedRoleNames = snq__default['default'](function () { return roleNames.filter(function (role) { return !!role[Object.keys(role)[0]]; }).map(function (role) { return Object.keys(role)[0]; }); }, []);
            this.store
                .dispatch(this.selected.id
                ? new UpdateUser(Object.assign(Object.assign(Object.assign({}, this.selected), this.form.value), { id: this.selected.id, roleNames: mappedRoleNames }))
                : new CreateUser(Object.assign(Object.assign({}, this.form.value), { roleNames: mappedRoleNames })))
                .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.isModalVisible = false;
                _this.list.get();
            });
        };
        UsersComponent.prototype.delete = function (id, userName) {
            var _this = this;
            this.confirmationService
                .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
                messageLocalizationParams: [userName],
            })
                .subscribe(function (status) {
                if (status === ng_theme_shared.Confirmation.Status.confirm) {
                    _this.store.dispatch(new DeleteUser(id)).subscribe(function () { return _this.list.get(); });
                }
            });
        };
        UsersComponent.prototype.sort = function (data) {
            var _a = data.sorts[0], prop = _a.prop, dir = _a.dir;
            this.list.sortKey = prop;
            this.list.sortOrder = dir;
        };
        UsersComponent.prototype.hookToQuery = function () {
            var _this = this;
            this.list.hookToQuery(function (query) { return _this.store.dispatch(new GetUsers(query)); }).subscribe();
        };
        UsersComponent.prototype.openPermissionsModal = function (providerKey) {
            var _this = this;
            this.providerKey = providerKey;
            setTimeout(function () {
                _this.visiblePermissions = true;
            }, 0);
        };
        return UsersComponent;
    }());
    UsersComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'abp-users',
                    template: "<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          type=\"search\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          [(ngModel)]=\"list.filter\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable [rows]=\"data$ | async\" [count]=\"totalCount$ | async\" [list]=\"list\" default>\r\n      <ngx-datatable-column\r\n        [name]=\"'AbpIdentity::Actions' | abpLocalization\"\r\n        [maxWidth]=\"150\"\r\n        [sortable]=\"false\"\r\n      >\r\n        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n            <button\r\n              class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              ngbDropdownToggle\r\n            >\r\n              <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            </button>\r\n            <div ngbDropdownMenu>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                ngbDropdownItem\r\n                (click)=\"edit(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                ngbDropdownItem\r\n                (click)=\"openPermissionsModal(row.id)\"\r\n              >\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n              </button>\r\n              <button\r\n                *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                ngbDropdownItem\r\n                (click)=\"delete(row.id, row.userName)\"\r\n              >\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::UserName' | abpLocalization\"\r\n        prop=\"userName\"\r\n      ></ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::EmailAddress' | abpLocalization\"\r\n        prop=\"email\"\r\n      ></ngx-datatable-column>\r\n      <ngx-datatable-column\r\n        [width]=\"200\"\r\n        [name]=\"'AbpIdentity::PhoneNumber' | abpLocalization\"\r\n        prop=\"phoneNumber\"\r\n      ></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\r\n        <li ngbNavItem>\r\n          <a ngbNavLink>{{ 'AbpIdentity::UserInformations' | abpLocalization }}</a>\r\n          <ng-template ngbNavContent>\r\n            <div class=\"form-group\">\r\n              <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n              ><span> * </span>\r\n              <input\r\n                type=\"text\"\r\n                id=\"user-name\"\r\n                class=\"form-control\"\r\n                formControlName=\"userName\"\r\n                autofocus\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n              <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"surname\">{{\r\n                'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n              }}</label>\r\n              <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n              ><span *ngIf=\"!selected.userName\"> * </span>\r\n              <input\r\n                type=\"password\"\r\n                id=\"password\"\r\n                autocomplete=\"new-password\"\r\n                class=\"form-control\"\r\n                formControlName=\"password\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n              ><span> * </span>\r\n              <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"phone-number\"\r\n                class=\"form-control\"\r\n                formControlName=\"phoneNumber\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"lockout-checkbox\"\r\n                class=\"custom-control-input\"\r\n                formControlName=\"lockoutEnabled\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n          </ng-template>\r\n        </li>\r\n\r\n        <li ngbNavItem>\r\n          <a ngbNavLink>{{ 'AbpIdentity::Roles' | abpLocalization }}</a>\r\n          <ng-template ngbNavContent>\r\n            <div\r\n              *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                [attr.id]=\"'roles-' + i\"\r\n                [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n              />\r\n              <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                roles[i].name\r\n              }}</label>\r\n            </div>\r\n          </ng-template>\r\n        </li>\r\n      </ul>\r\n\r\n      <div class=\"mt-2 fade-in-top\" [ngbNavOutlet]=\"nav\"></div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: permissionManagementKey\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n",
                    providers: [i1.ListService]
                },] }
    ];
    UsersComponent.ctorParameters = function () { return [
        { type: i1.ListService },
        { type: ng_theme_shared.ConfirmationService },
        { type: forms.FormBuilder },
        { type: i1$1.Store },
        { type: IdentityService },
        { type: IdentityUserService }
    ]; };
    UsersComponent.propDecorators = {
        modalContent: [{ type: i0.ViewChild, args: ['modalContent', { static: false },] }]
    };
    __decorate([
        i1$1.Select(exports.IdentityState.getUsers),
        __metadata("design:type", rxjs.Observable)
    ], UsersComponent.prototype, "data$", void 0);
    __decorate([
        i1$1.Select(exports.IdentityState.getUsersTotalCount),
        __metadata("design:type", rxjs.Observable)
    ], UsersComponent.prototype, "totalCount$", void 0);

    var ɵ0 = {
        requiredPolicy: 'AbpIdentity.Roles',
        replaceableComponent: {
            key: "Identity.RolesComponent" /* Roles */,
            defaultComponent: RolesComponent,
        },
    }, ɵ1 = {
        requiredPolicy: 'AbpIdentity.Users',
        replaceableComponent: {
            key: "Identity.UsersComponent" /* Users */,
            defaultComponent: UsersComponent,
        },
    };
    var routes = [
        { path: '', redirectTo: 'roles', pathMatch: 'full' },
        {
            path: '',
            component: i1.DynamicLayoutComponent,
            canActivate: [i1.AuthGuard, i1.PermissionGuard],
            children: [
                {
                    path: 'roles',
                    component: i1.ReplaceableRouteContainerComponent,
                    data: ɵ0,
                },
                {
                    path: 'users',
                    component: i1.ReplaceableRouteContainerComponent,
                    data: ɵ1,
                },
            ],
        },
    ];
    var IdentityRoutingModule = /** @class */ (function () {
        function IdentityRoutingModule() {
        }
        return IdentityRoutingModule;
    }());
    IdentityRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule],
                },] }
    ];

    var IdentityModule = /** @class */ (function () {
        function IdentityModule() {
        }
        IdentityModule.forChild = function () {
            return {
                ngModule: IdentityModule,
                providers: [],
            };
        };
        IdentityModule.forLazy = function () {
            return new i1.LazyModuleFactory(IdentityModule.forChild());
        };
        return IdentityModule;
    }());
    IdentityModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [RolesComponent, UsersComponent],
                    exports: [RolesComponent, UsersComponent],
                    imports: [
                        i1$1.NgxsModule.forFeature([exports.IdentityState]),
                        i1.CoreModule,
                        IdentityRoutingModule,
                        ngBootstrap.NgbNavModule,
                        ng_theme_shared.ThemeSharedModule,
                        ngBootstrap.NgbDropdownModule,
                        ng_permissionManagement.PermissionManagementModule,
                        core.NgxValidateCoreModule,
                    ],
                },] }
    ];

    var IdentityStateService = /** @class */ (function () {
        function IdentityStateService(store) {
            this.store = store;
        }
        IdentityStateService.prototype.getRoles = function () {
            return this.store.selectSnapshot(exports.IdentityState.getRoles);
        };
        IdentityStateService.prototype.getRolesTotalCount = function () {
            return this.store.selectSnapshot(exports.IdentityState.getRolesTotalCount);
        };
        IdentityStateService.prototype.getUsers = function () {
            return this.store.selectSnapshot(exports.IdentityState.getUsers);
        };
        IdentityStateService.prototype.getUsersTotalCount = function () {
            return this.store.selectSnapshot(exports.IdentityState.getUsersTotalCount);
        };
        IdentityStateService.prototype.dispatchGetRoles = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetRoles.bind.apply(GetRoles, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchGetRoleById = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetRoleById.bind.apply(GetRoleById, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchDeleteRole = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (DeleteRole.bind.apply(DeleteRole, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchCreateRole = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (CreateRole.bind.apply(CreateRole, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchUpdateRole = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (UpdateRole.bind.apply(UpdateRole, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchGetUsers = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetUsers.bind.apply(GetUsers, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchGetUserById = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetUserById.bind.apply(GetUserById, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchDeleteUser = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (DeleteUser.bind.apply(DeleteUser, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchCreateUser = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (CreateUser.bind.apply(CreateUser, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchUpdateUser = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (UpdateUser.bind.apply(UpdateUser, __spread([void 0], args)))());
        };
        IdentityStateService.prototype.dispatchGetUserRoles = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetUserRoles.bind.apply(GetUserRoles, __spread([void 0], args)))());
        };
        return IdentityStateService;
    }());
    IdentityStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IdentityStateService_Factory() { return new IdentityStateService(i0.ɵɵinject(i1$1.Store)); }, token: IdentityStateService, providedIn: "root" });
    IdentityStateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    IdentityStateService.ctorParameters = function () { return [
        { type: i1$1.Store }
    ]; };

    var IdentityUserLookupService = /** @class */ (function () {
        function IdentityUserLookupService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'AbpIdentity';
            this.findById = function (id) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/users/lookup/" + id,
            }, { apiName: _this.apiName }); };
            this.findByUserName = function (userName) { return _this.restService.request({
                method: 'GET',
                url: "/api/identity/users/lookup/by-username/" + userName,
            }, { apiName: _this.apiName }); };
            this.getCount = function (input) { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/users/lookup/count',
                params: { filter: input.filter },
            }, { apiName: _this.apiName }); };
            this.search = function (input) { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/users/lookup/search',
                params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
            }, { apiName: _this.apiName }); };
        }
        return IdentityUserLookupService;
    }());
    IdentityUserLookupService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IdentityUserLookupService_Factory() { return new IdentityUserLookupService(i0.ɵɵinject(i1.RestService)); }, token: IdentityUserLookupService, providedIn: "root" });
    IdentityUserLookupService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    IdentityUserLookupService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var ProfileService = /** @class */ (function () {
        function ProfileService(restService) {
            var _this = this;
            this.restService = restService;
            this.apiName = 'AbpIdentity';
            this.changePassword = function (input) { return _this.restService.request({
                method: 'POST',
                url: '/api/identity/my-profile/change-password',
                body: input,
            }, { apiName: _this.apiName }); };
            this.get = function () { return _this.restService.request({
                method: 'GET',
                url: '/api/identity/my-profile',
            }, { apiName: _this.apiName }); };
            this.update = function (input) { return _this.restService.request({
                method: 'PUT',
                url: '/api/identity/my-profile',
                body: input,
            }, { apiName: _this.apiName }); };
        }
        return ProfileService;
    }());
    ProfileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(i0.ɵɵinject(i1.RestService)); }, token: ProfileService, providedIn: "root" });
    ProfileService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ProfileService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    /*
     * Public API Surface of identity
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CreateRole = CreateRole;
    exports.CreateUser = CreateUser;
    exports.DeleteRole = DeleteRole;
    exports.DeleteUser = DeleteUser;
    exports.GetRoleById = GetRoleById;
    exports.GetRoles = GetRoles;
    exports.GetUserById = GetUserById;
    exports.GetUserRoles = GetUserRoles;
    exports.GetUsers = GetUsers;
    exports.IdentityModule = IdentityModule;
    exports.IdentityRoleService = IdentityRoleService;
    exports.IdentityService = IdentityService;
    exports.IdentityStateService = IdentityStateService;
    exports.IdentityUserLookupService = IdentityUserLookupService;
    exports.IdentityUserService = IdentityUserService;
    exports.ProfileService = ProfileService;
    exports.RolesComponent = RolesComponent;
    exports.UpdateRole = UpdateRole;
    exports.UpdateUser = UpdateUser;
    exports.UsersComponent = UsersComponent;
    exports.ɵa = RolesComponent;
    exports.ɵb = IdentityUserService;
    exports.ɵc = IdentityRoleService;
    exports.ɵg = UsersComponent;
    exports.ɵh = IdentityService;
    exports.ɵi = IdentityRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.identity.umd.js.map
