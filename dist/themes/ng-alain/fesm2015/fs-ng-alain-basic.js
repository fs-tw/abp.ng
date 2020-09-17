import { __decorate, __metadata } from 'tslib';
import { NgAlainSharedModule } from '@fs/ng-alain/shared';
import { LayoutDefaultComponent, LayoutPassportComponent, LayoutFullScreenComponent, PageBarComponent, LayoutModule } from '@fs/ng-alain/layout';
import { APP_INITIALIZER, EventEmitter, Input, TemplateRef, Output, Component, NgModule } from '@angular/core';
import { AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { NzTreeNode } from 'ng-zorro-antd';
import { cloneDeep } from 'lodash';
import { ThemeCoreModule } from '@fs/theme.core';

const BASIC_THEME_STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
function configureStyles(store) {
    return () => {
        //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
            component: LayoutDefaultComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.AccountLayoutComponent" /* AccountLayout */,
            component: LayoutPassportComponent,
        }),
        new AddReplaceableComponent({
            key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
            component: LayoutFullScreenComponent,
        }),
        new AddReplaceableComponent({
            key: "ThemeCore.PageBarComponent" /* PageBar */,
            component: PageBarComponent,
        }),
    ]);
}

let FsNgAlainTreeComponent = class FsNgAlainTreeComponent {
    constructor() {
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
        this.onDropAction = new EventEmitter();
        /** 點擊 */
        this.onNodeClick = new EventEmitter();
        /** 雙擊 */
        this.onNodeDblClick = new EventEmitter();
        /** CheckBox 狀態變更 */
        this.onCheckBoxChange = new EventEmitter();
        /** 搜尋後 */
        this.onSearch = new EventEmitter();
        /** 展開狀態改變 */
        this.onExpandChange = new EventEmitter();
        /** 樹狀陣列 */
        this.treeOptions = [];
    }
    ngOnInit() {
        this.init();
    }
    /** 初始化參數 */
    init() {
        var tree = this.initTreeDatas(cloneDeep(this.tree));
        var treeItem = this.initTreeDatas(cloneDeep(this.treeItem));
        if (this.showCheckAll)
            tree = this.createCheckAll(tree);
        if (this.leafNodes)
            tree = this.setLeaf(tree);
        tree = this.calcNodeNum(tree);
        var option = this.array2Nodes(tree);
        if (this.showCountType != 0)
            option = this.showCount(option);
        this.treeOptions = [];
        option.forEach(item => {
            this.treeOptions.push(new NzTreeNode(item));
        });
    }
    /** 初始化 Tree 所需要的資料 */
    initTreeDatas(tree) {
        tree = tree.map(function (x) {
            x.title = x.displayName;
            x.key = x.id;
            delete x.children;
            return x;
        });
        return tree;
    }
    /** 產生全選框 */
    createCheckAll(datas) {
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
    }
    /** 計算節點顯示數字 */
    calcNodeNum(datas) {
        var vm = this;
        switch (this.showCountType) {
            case 1:
                datas = datas.map(function (x, i, arr) {
                    x.childNum = arr.filter(y => x.id == y.parentId && x.id != y.id).length;
                    return x;
                });
                break;
            case 2:
                datas = datas.map(function (x, i, arr) {
                    x.childNum = arr.filter(y => y.code.startsWith(x.code) && x.id != y.id).length;
                    return x;
                });
                break;
            case 3:
                datas = datas.map(function (x) {
                    x.childNum = vm.treeItem.filter(y => y.parentId == x.id).length;
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
    }
    /** 設置節點為葉節點
     * 葉節點無法拖拽、不顯示展開按鈕
     */
    setLeaf(datas) {
        datas = datas.map(function (x, i, arr) {
            if (arr.findIndex(y => y.parentId == x.id) == -1)
                x.isLeaf = true;
            return x;
        });
        return datas;
    }
    /** 顯示節點數字 */
    showCount(nodes) {
        nodes.forEach(node => {
            if (node.children)
                node.children = this.showCount(node.children);
            if (!node.isLeaf || this.showCountType > 2)
                node.title += `(${node.childNum})`;
        });
        return nodes;
    }
    /** 點擊節點 */
    nodeClick(data) {
        // this.treeStatusChange("isSelected");
        // data.node.isSelected = true;
        this.onNodeClick.emit(data);
    }
    /** 展開狀態改變 */
    expandChange(event) {
        this.onExpandChange.emit(event);
    }
    /** 雙擊節點 */
    nodeDblClick(data) {
        //展開/收合 節點
        if (data instanceof NzTreeNode) {
            data.isExpanded = !data.isExpanded;
        }
        else {
            data.node.isExpanded = !data.node.isExpanded;
        }
        this.onNodeDblClick.emit(data);
    }
    /** CheckBox 狀態變更 */
    nodeCheckBoxChange(data) {
        this.onCheckBoxChange.emit(data);
    }
    /** 取得勾選的節點
     * type: 欄位名稱, 預設 'id'
     * type == '*all', 傳回完整物件
     */
    getChecked(type = 'id') {
        var checkedDatas = this.nodes2Array(cloneDeep(this.treeOptions))
            .filter(x => x.isChecked && x.key != 0)
            .map(x => x.key);
        var checkedTreeDatas = cloneDeep(this.tree).filter(x => checkedDatas.includes(x.id));
        if (type.toLowerCase() == '*all')
            return checkedTreeDatas;
        return checkedTreeDatas.map(x => x[type]);
    }
    /** 樹狀態修改，預設關閉
     * type == isSelected(選擇狀態，藍底)
     * type == isChecked(勾選狀態)
     * type == isExpanded(折疊狀態)
     * type == isLeaf(葉節點狀態)
     */
    treeStatusChange(type, status = false) {
        this.statusChange(this.treeOptions, type, status);
    }
    statusChange(nodes, type, status = false) {
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
    }
    /** 拖曳後動作 */
    dropAction(event) {
        var drag = {
            node: event.dragNode.key,
            parent: 0
        };
        if (event.dragNode.parentNode && event.dragNode.parentNode.key)
            drag.parent = event.dragNode.parentNode.key;
        event.dragNode.origin.parentId = drag.parent;
        var datas = this.nodes2Array(cloneDeep(this.treeOptions))
            .filter(x => x.origin.id)
            .map(function (x, i, arr) {
            var parentId = x.origin.parentId ? x.origin.parentId : null;
            var order = arr.filter(y => y.origin.parentId == x.origin.parentId)
                .findIndex(y => y.key == x.key);
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
    }
    /** 搜尋樹 */
    nzOnSearch(event) {
        this.onSearch.emit(event);
    }
    /**  陣列轉樹狀 */
    array2Nodes(nodesArray) {
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
    }
    /** 樹狀轉陣列 */
    nodes2Array(nodes) {
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
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "blockNode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FsNgAlainTreeComponent.prototype, "showCountType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FsNgAlainTreeComponent.prototype, "tree", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FsNgAlainTreeComponent.prototype, "treeItem", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzDefaultExpandAll", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FsNgAlainTreeComponent.prototype, "defaultExpandedKeys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzShowLine", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FsNgAlainTreeComponent.prototype, "defaultSelectedKeys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzCheckable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FsNgAlainTreeComponent.prototype, "defaultCheckedKeys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "showCheckAll", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FsNgAlainTreeComponent.prototype, "checkAllText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzDraggable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "leafNodes", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], FsNgAlainTreeComponent.prototype, "nzTreeTemplate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzDefaultSearch", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FsNgAlainTreeComponent.prototype, "searchValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FsNgAlainTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onDropAction", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onNodeClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onNodeDblClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onCheckBoxChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onSearch", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FsNgAlainTreeComponent.prototype, "onExpandChange", void 0);
FsNgAlainTreeComponent = __decorate([
    Component({
        selector: 'fs-ng-alain-tree',
        template: "<nz-input-group [nzSuffix]=\"suffixIcon\" *ngIf=\"nzDefaultSearch\">\r\n    <input type=\"text\" nz-input placeholder=\"Search\" [(ngModel)]=\"searchValue\" />\r\n</nz-input-group>\r\n<ng-template #suffixIcon>\r\n    <i nz-icon nzType=\"search\"></i>\r\n</ng-template>\r\n<nz-tree\r\n    [nzBlockNode]=\"blockNode\"\r\n    [nzData]=\"treeOptions\"\r\n    [nzExpandAll]=\"nzDefaultExpandAll\"\r\n    [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n    [nzShowLine]=\"nzShowLine\"\r\n    [nzSelectedKeys]=\"defaultSelectedKeys\"\r\n    [nzCheckable]=\"nzCheckable\"\r\n    [nzCheckedKeys]=\"defaultCheckedKeys\"\r\n    [nzDraggable]=\"nzDraggable\"\r\n    (nzOnDrop)=\"dropAction($event)\"\r\n    (nzClick)=\"nodeClick($event)\"\r\n    (nzDblClick)=\"nodeDblClick($event)\"\r\n    (nzCheckBoxChange)=\"nodeCheckBoxChange($event)\"\r\n    [nzTreeTemplate]=\"nzTreeTemplate\"\r\n    [nzSearchValue]=\"searchValue\"\r\n    (nzSearchValueChange)=\"nzOnSearch($event)\"\r\n    [nzAsyncData]=\"nzAsyncData\"\r\n    (nzExpandChange)=\"expandChange($event)\">\r\n</nz-tree>\r\n",
        styles: ["::ng-deep .ant-tree-node-content-wrapper{width:100%}::ng-deep .ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:#f5f5f5}"]
    }),
    __metadata("design:paramtypes", [])
], FsNgAlainTreeComponent);

var NgAlainBasicModule_1;
let NgAlainBasicModule = NgAlainBasicModule_1 = class NgAlainBasicModule {
    static forRoot() {
        return {
            ngModule: NgAlainBasicModule_1,
            providers: [BASIC_THEME_STYLES_PROVIDERS],
        };
    }
};
NgAlainBasicModule = NgAlainBasicModule_1 = __decorate([
    NgModule({
        declarations: [
            FsNgAlainTreeComponent
        ],
        imports: [
            ThemeCoreModule,
            NgAlainSharedModule,
            LayoutModule
        ],
        exports: [
            ThemeCoreModule,
            NgAlainSharedModule,
            FsNgAlainTreeComponent
        ]
    })
], NgAlainBasicModule);

/**
 * Generated bundle index. Do not edit.
 */

export { FsNgAlainTreeComponent, NgAlainBasicModule, BASIC_THEME_STYLES_PROVIDERS as ɵa, configureStyles as ɵb };
//# sourceMappingURL=fs-ng-alain-basic.js.map
