(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fs/ng-alain/shared'), require('@fs/ng-alain/layout'), require('@angular/core'), require('@abp/ng.core'), require('@ngxs/store'), require('ng-zorro-antd'), require('lodash'), require('@fs/theme.core')) :
    typeof define === 'function' && define.amd ? define('@fs/ng-alain/basic', ['exports', '@fs/ng-alain/shared', '@fs/ng-alain/layout', '@angular/core', '@abp/ng.core', '@ngxs/store', 'ng-zorro-antd', 'lodash', '@fs/theme.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.fs = global.fs || {}, global.fs['ng-alain'] = global.fs['ng-alain'] || {}, global.fs['ng-alain'].basic = {}), global.fs['ng-alain'].shared, global.fs['ng-alain'].layout, global.ng.core, global.ng_core, global.store, global.ngZorroAntd, global._, global.theme_core));
}(this, (function (exports, shared, layout, core, ng_core, store, ngZorroAntd, _, theme_core) { 'use strict';

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

    var BASIC_THEME_STYLES_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [store.Store],
            multi: true,
        },
    ];
    function configureStyles(store) {
        return function () {
            //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
            initLayouts(store);
        };
    }
    function initLayouts(store) {
        store.dispatch([
            new ng_core.AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: layout.LayoutDefaultComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: layout.LayoutPassportComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: layout.LayoutFullScreenComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "ThemeCore.PageBarComponent" /* PageBar */,
                component: layout.PageBarComponent,
            }),
        ]);
    }

    exports.FsNgAlainTreeComponent = /** @class */ (function () {
        function FsNgAlainTreeComponent() {
            /** 佔據一行(藍底) */
            this.blockNode = true;
            /** 顯示節點狀態
             * 0: 不顯示
             * 1: 顯示子節點數
             * 2: 顯示子節點總數
             * 3: 顯示此節點物件數
             * 4: 顯示此節點及所有子節點物件數
             */
            this.showCountType = 0;
            /** 欲轉為樹狀的陣列
             * Array<any> = [{
             *   id: id 傳回值,
             *   displayName: 節點顯示文字,
             *   parentId: 父節點id (根節點設為null),
             *   code: 樹結構代碼
             * }]
             */
            this.tree = [];
            /** 樹物件
             * 僅計算節點數
             */
            this.treeItem = [];
            /** 節點全部展開 */
            this.nzDefaultExpandAll = false;
            /** 預設展開之節點
             * Key Array
             */
            this.defaultExpandedKeys = [];
            /** 顯示連結線 */
            this.nzShowLine = false;
            /** 預設選取(藍底)
             * Key Array
             */
            this.defaultSelectedKeys = [];
            /** 是否可勾選 */
            this.nzCheckable = false;
            /** 預設勾選
             * Key Array
             */
            this.defaultCheckedKeys = [];
            /** 是否產生全選框 */
            this.showCheckAll = false;
            /** 全選框文字 */
            this.checkAllText = "全部";
            /** 拖拽 */
            this.nzDraggable = false;
            /** 葉節點
             * 最後一層節點設為葉節點，不可拖拽至葉節點內，不顯示子節點數量
             */
            this.leafNodes = false;
            /** 預設搜尋框 */
            this.nzDefaultSearch = false;
            /** 搜尋字串 */
            this.searchValue = "";
            /** 是否展開時讀取
             * 讀取後，顯示的節點數不會更新
             */
            this.nzAsyncData = false;
            /** 拖拽後傳回 */
            this.onDropAction = new core.EventEmitter();
            /** 點擊 */
            this.onNodeClick = new core.EventEmitter();
            /** 雙擊 */
            this.onNodeDblClick = new core.EventEmitter();
            /** CheckBox 狀態變更 */
            this.onCheckBoxChange = new core.EventEmitter();
            /** 搜尋後 */
            this.onSearch = new core.EventEmitter();
            /** 展開狀態改變 */
            this.onExpandChange = new core.EventEmitter();
            /** 樹狀陣列 */
            this.treeOptions = [];
        }
        FsNgAlainTreeComponent.prototype.ngOnInit = function () {
            this.init();
        };
        /** 初始化參數 */
        FsNgAlainTreeComponent.prototype.init = function () {
            var _this = this;
            var tree = this.initTreeDatas(_.cloneDeep(this.tree));
            var treeItem = this.initTreeDatas(_.cloneDeep(this.treeItem));
            if (this.showCheckAll)
                tree = this.createCheckAll(tree);
            if (this.leafNodes)
                tree = this.setLeaf(tree);
            tree = this.calcNodeNum(tree);
            var option = this.array2Nodes(tree);
            if (this.showCountType != 0)
                option = this.showCount(option);
            this.treeOptions = [];
            option.forEach(function (item) {
                _this.treeOptions.push(new ngZorroAntd.NzTreeNode(item));
            });
        };
        /** 初始化 Tree 所需要的資料 */
        FsNgAlainTreeComponent.prototype.initTreeDatas = function (tree) {
            tree = tree.map(function (x) {
                x.title = x.displayName;
                x.key = x.id;
                delete x.children;
                return x;
            });
            return tree;
        };
        /** 產生全選框 */
        FsNgAlainTreeComponent.prototype.createCheckAll = function (datas) {
            datas = datas.map(function (x) {
                if (x.parentId == null)
                    x.parentId = 0;
                x.code = "0." + x.code;
                return x;
            });
            datas.push({
                id: 0, key: 0, parentId: null, title: this.checkAllText, code: "0"
            });
            return datas;
        };
        /** 計算節點顯示數字 */
        FsNgAlainTreeComponent.prototype.calcNodeNum = function (datas) {
            var vm = this;
            switch (this.showCountType) {
                case 1:
                    datas = datas.map(function (x, i, arr) {
                        x.childNum = arr.filter(function (y) { return x.id == y.parentId && x.id != y.id; }).length;
                        return x;
                    });
                    break;
                case 2:
                    datas = datas.map(function (x, i, arr) {
                        x.childNum = arr.filter(function (y) { return y.code.startsWith(x.code) && x.id != y.id; }).length;
                        return x;
                    });
                    break;
                case 3:
                    datas = datas.map(function (x) {
                        x.childNum = vm.treeItem.filter(function (y) { return y.parentId == x.id; }).length;
                        return x;
                    });
                    break;
                case 4:
                    datas = datas.map(function (x) {
                        // x.childNum = vm.treeItem.filter(y => "0." + y.code.startsWith(x.code) && x.id != y.id).length;
                        x.childNum = vm.treeItem.filter(function (y) {
                            var code = "0." + y.code;
                            return code.startsWith(x.code);
                        }).length;
                        return x;
                    });
                    break;
            }
            return datas;
        };
        /** 設置節點為葉節點
         * 葉節點無法拖拽、不顯示展開按鈕
         */
        FsNgAlainTreeComponent.prototype.setLeaf = function (datas) {
            datas = datas.map(function (x, i, arr) {
                if (arr.findIndex(function (y) { return y.parentId == x.id; }) == -1)
                    x.isLeaf = true;
                return x;
            });
            return datas;
        };
        /** 顯示節點數字 */
        FsNgAlainTreeComponent.prototype.showCount = function (nodes) {
            var _this = this;
            nodes.forEach(function (node) {
                if (node.children)
                    node.children = _this.showCount(node.children);
                if (!node.isLeaf || _this.showCountType > 2)
                    node.title += "(" + node.childNum + ")";
            });
            return nodes;
        };
        /** 點擊節點 */
        FsNgAlainTreeComponent.prototype.nodeClick = function (data) {
            // this.treeStatusChange("isSelected");
            // data.node.isSelected = true;
            this.onNodeClick.emit(data);
        };
        /** 展開狀態改變 */
        FsNgAlainTreeComponent.prototype.expandChange = function (event) {
            this.onExpandChange.emit(event);
        };
        /** 雙擊節點 */
        FsNgAlainTreeComponent.prototype.nodeDblClick = function (data) {
            //展開/收合 節點
            if (data instanceof ngZorroAntd.NzTreeNode) {
                data.isExpanded = !data.isExpanded;
            }
            else {
                data.node.isExpanded = !data.node.isExpanded;
            }
            this.onNodeDblClick.emit(data);
        };
        /** CheckBox 狀態變更 */
        FsNgAlainTreeComponent.prototype.nodeCheckBoxChange = function (data) {
            this.onCheckBoxChange.emit(data);
        };
        /** 取得勾選的節點
         * type: 欄位名稱, 預設 'id'
         * type == '*all', 傳回完整物件
         */
        FsNgAlainTreeComponent.prototype.getChecked = function (type) {
            if (type === void 0) { type = 'id'; }
            var checkedDatas = this.nodes2Array(_.cloneDeep(this.treeOptions))
                .filter(function (x) { return x.isChecked && x.key != 0; })
                .map(function (x) { return x.key; });
            var checkedTreeDatas = _.cloneDeep(this.tree).filter(function (x) { return checkedDatas.includes(x.id); });
            if (type.toLowerCase() == '*all')
                return checkedTreeDatas;
            return checkedTreeDatas.map(function (x) { return x[type]; });
        };
        /** 樹狀態修改，預設關閉
         * type == isSelected(選擇狀態，藍底)
         * type == isChecked(勾選狀態)
         * type == isExpanded(折疊狀態)
         * type == isLeaf(葉節點狀態)
         */
        FsNgAlainTreeComponent.prototype.treeStatusChange = function (type, status) {
            if (status === void 0) { status = false; }
            this.statusChange(this.treeOptions, type, status);
        };
        FsNgAlainTreeComponent.prototype.statusChange = function (nodes, type, status) {
            if (status === void 0) { status = false; }
            var childKey = "children";
            if (nodes instanceof Array) {
                for (var i = 0, l = nodes.length; i < l; i++) {
                    nodes[i][type] = status;
                    if (type == 'isChecked' && status == false)
                        nodes[i]['isHalfChecked'] = false;
                    if (nodes[i][childKey])
                        this.statusChange(nodes[i][childKey], type, status);
                }
            }
            else {
                nodes[type] = status;
                if (type == 'isChecked' && status == false)
                    nodes['isHalfChecked'] = false;
                if (nodes[childKey])
                    this.statusChange(nodes[childKey], type, status);
            }
        };
        /** 拖曳後動作 */
        FsNgAlainTreeComponent.prototype.dropAction = function (event) {
            var drag = {
                node: event.dragNode.key,
                parent: 0
            };
            if (event.dragNode.parentNode && event.dragNode.parentNode.key)
                drag.parent = event.dragNode.parentNode.key;
            event.dragNode.origin.parentId = drag.parent;
            var datas = this.nodes2Array(_.cloneDeep(this.treeOptions))
                .filter(function (x) { return x.origin.id; })
                .map(function (x, i, arr) {
                var parentId = x.origin.parentId ? x.origin.parentId : null;
                var order = arr.filter(function (y) { return y.origin.parentId == x.origin.parentId; })
                    .findIndex(function (y) { return y.key == x.key; });
                var temp = {
                    id: x.origin.id,
                    parentId: parentId,
                    order: order
                };
                return temp;
            });
            this.onDropAction.emit({
                drag: drag,
                datas: datas
            });
        };
        /** 搜尋樹 */
        FsNgAlainTreeComponent.prototype.nzOnSearch = function (event) {
            this.onSearch.emit(event);
        };
        /**  陣列轉樹狀 */
        FsNgAlainTreeComponent.prototype.array2Nodes = function (nodesArray) {
            var i, l, key = "id", parentKey = "parentId", childKey = "children";
            if (!key || key == "" || !nodesArray)
                return [];
            if (nodesArray instanceof Array) {
                var r = [];
                var tmpMap = {};
                for (i = 0, l = nodesArray.length; i < l; i++) {
                    tmpMap[nodesArray[i][key]] = nodesArray[i];
                }
                for (i = 0, l = nodesArray.length; i < l; i++) {
                    if (tmpMap[nodesArray[i][parentKey]] && nodesArray[i][key] != nodesArray[i][parentKey]) {
                        if (!tmpMap[nodesArray[i][parentKey]][childKey])
                            tmpMap[nodesArray[i][parentKey]][childKey] = [];
                        tmpMap[nodesArray[i][parentKey]][childKey].push(nodesArray[i]);
                    }
                    else {
                        r.push(nodesArray[i]);
                    }
                }
                return r;
            }
            else {
                return [nodesArray];
            }
        };
        /** 樹狀轉陣列 */
        FsNgAlainTreeComponent.prototype.nodes2Array = function (nodes) {
            if (!nodes)
                return [];
            var childKey = "children", r = [];
            if (nodes instanceof Array) {
                for (var i = 0, l = nodes.length; i < l; i++) {
                    r.push(nodes[i]);
                    if (nodes[i][childKey])
                        r = r.concat(this.nodes2Array(nodes[i][childKey]));
                }
            }
            else {
                r.push(nodes);
                if (nodes[childKey])
                    r = r.concat(this.nodes2Array(nodes[childKey]));
            }
            return r;
        };
        return FsNgAlainTreeComponent;
    }());
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "blockNode", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Number)
    ], exports.FsNgAlainTreeComponent.prototype, "showCountType", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.FsNgAlainTreeComponent.prototype, "tree", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.FsNgAlainTreeComponent.prototype, "treeItem", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzDefaultExpandAll", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.FsNgAlainTreeComponent.prototype, "defaultExpandedKeys", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzShowLine", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.FsNgAlainTreeComponent.prototype, "defaultSelectedKeys", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzCheckable", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Array)
    ], exports.FsNgAlainTreeComponent.prototype, "defaultCheckedKeys", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "showCheckAll", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.FsNgAlainTreeComponent.prototype, "checkAllText", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzDraggable", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "leafNodes", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", core.TemplateRef)
    ], exports.FsNgAlainTreeComponent.prototype, "nzTreeTemplate", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzDefaultSearch", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", String)
    ], exports.FsNgAlainTreeComponent.prototype, "searchValue", void 0);
    __decorate([
        core.Input(),
        __metadata("design:type", Boolean)
    ], exports.FsNgAlainTreeComponent.prototype, "nzAsyncData", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onDropAction", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onNodeClick", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onNodeDblClick", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onCheckBoxChange", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onSearch", void 0);
    __decorate([
        core.Output(),
        __metadata("design:type", core.EventEmitter)
    ], exports.FsNgAlainTreeComponent.prototype, "onExpandChange", void 0);
    exports.FsNgAlainTreeComponent = __decorate([
        core.Component({
            selector: 'fs-ng-alain-tree',
            template: "<nz-input-group [nzSuffix]=\"suffixIcon\" *ngIf=\"nzDefaultSearch\">\r\n    <input type=\"text\" nz-input placeholder=\"Search\" [(ngModel)]=\"searchValue\" />\r\n</nz-input-group>\r\n<ng-template #suffixIcon>\r\n    <i nz-icon nzType=\"search\"></i>\r\n</ng-template>\r\n<nz-tree\r\n    [nzBlockNode]=\"blockNode\"\r\n    [nzData]=\"treeOptions\"\r\n    [nzExpandAll]=\"nzDefaultExpandAll\"\r\n    [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n    [nzShowLine]=\"nzShowLine\"\r\n    [nzSelectedKeys]=\"defaultSelectedKeys\"\r\n    [nzCheckable]=\"nzCheckable\"\r\n    [nzCheckedKeys]=\"defaultCheckedKeys\"\r\n    [nzDraggable]=\"nzDraggable\"\r\n    (nzOnDrop)=\"dropAction($event)\"\r\n    (nzClick)=\"nodeClick($event)\"\r\n    (nzDblClick)=\"nodeDblClick($event)\"\r\n    (nzCheckBoxChange)=\"nodeCheckBoxChange($event)\"\r\n    [nzTreeTemplate]=\"nzTreeTemplate\"\r\n    [nzSearchValue]=\"searchValue\"\r\n    (nzSearchValueChange)=\"nzOnSearch($event)\"\r\n    [nzAsyncData]=\"nzAsyncData\"\r\n    (nzExpandChange)=\"expandChange($event)\">\r\n</nz-tree>\r\n",
            styles: ["::ng-deep .ant-tree-node-content-wrapper{width:100%}::ng-deep .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:#f5f5f5}"]
        }),
        __metadata("design:paramtypes", [])
    ], exports.FsNgAlainTreeComponent);

    var NgAlainBasicModule_1;
    exports.NgAlainBasicModule = NgAlainBasicModule_1 = /** @class */ (function () {
        function NgAlainBasicModule() {
        }
        NgAlainBasicModule.forRoot = function () {
            return {
                ngModule: NgAlainBasicModule_1,
                providers: [BASIC_THEME_STYLES_PROVIDERS],
            };
        };
        return NgAlainBasicModule;
    }());
    exports.NgAlainBasicModule = NgAlainBasicModule_1 = __decorate([
        core.NgModule({
            declarations: [
                exports.FsNgAlainTreeComponent
            ],
            imports: [
                theme_core.ThemeCoreModule,
                shared.NgAlainSharedModule,
                layout.LayoutModule
            ],
            exports: [
                theme_core.ThemeCoreModule,
                shared.NgAlainSharedModule,
                exports.FsNgAlainTreeComponent
            ]
        })
    ], exports.NgAlainBasicModule);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵa = BASIC_THEME_STYLES_PROVIDERS;
    exports.ɵb = configureStyles;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-ng-alain-basic.umd.js.map
