import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NzTreeNode, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import * as _ from 'lodash';

@Component({
  selector: 'fs-ng-alain-tree',
  templateUrl: './fs-ng-alain-tree.component.html',
  styleUrls: ['./fs-ng-alain-tree.component.less']
})
export class FsNgAlainTreeComponent implements OnInit {

  /** 佔據一行(藍底) */
  @Input()
  public blockNode: boolean = true;

  /** 顯示節點狀態
   * 0: 不顯示
   * 1: 顯示子節點數
   * 2: 顯示子節點總數
   * 3: 顯示此節點物件數
   * 4: 顯示此節點及所有子節點物件數
   */
  @Input()
  public showCountType: number = 0;

  /** 欲轉為樹狀的陣列
   * Array<any> = [{
   *   id: id 傳回值,
   *   displayName: 節點顯示文字,
   *   parentId: 父節點id (根節點設為null),
   *   code: 樹結構代碼
   * }]
   */
  @Input()
  public tree: Array<any> = [];

  /** 樹物件
   * 僅計算節點數
   */
  @Input()
  public treeItem: Array<any> = [];

  /** 節點全部展開 */
  @Input()
  public nzDefaultExpandAll: boolean = false;

  /** 預設展開之節點 
   * Key Array
   */
  @Input()
  public defaultExpandedKeys: Array<any> = [];

  /** 顯示連結線 */
  @Input()
  public nzShowLine: boolean = false;

  /** 預設選取(藍底) 
   * Key Array
   */
  @Input()
  public defaultSelectedKeys: Array<any> = [];

  /** 是否可勾選 */
  @Input()
  public nzCheckable: boolean = false;

  /** 預設勾選 
   * Key Array
   */
  @Input()
  public defaultCheckedKeys: Array<any> = [];

  /** 是否產生全選框 */
  @Input()
  public showCheckAll: boolean = false;

  /** 全選框文字 */
  @Input()
  public checkAllText: string = "全部";

  /** 拖拽 */
  @Input()
  public nzDraggable: boolean = false;

  /** 葉節點
   * 最後一層節點設為葉節點，不可拖拽至葉節點內，不顯示子節點數量
   */
  @Input()
  public leafNodes: boolean = false;

  /** 右鍵功能 自訂樹節點格式 ng-template
   * 啟用此功能將導致拖拽失效
   */
  @Input()
  public nzTreeTemplate: TemplateRef<{}>;

  /** 預設搜尋框 */
  @Input()
  public nzDefaultSearch: boolean = false;

  /** 搜尋字串 */
  @Input()
  public searchValue: string = "";

  /** 是否展開時讀取 
   * 讀取後，顯示的節點數不會更新
   */
  @Input()
  public nzAsyncData: boolean = false;

  /** 拖拽後傳回 */
  @Output()
  private onDropAction: EventEmitter<any> = new EventEmitter();

  /** 點擊 */
  @Output()
  private onNodeClick: EventEmitter<any> = new EventEmitter();

  /** 雙擊 */
  @Output()
  private onNodeDblClick: EventEmitter<any> = new EventEmitter();

  /** CheckBox 狀態變更 */
  @Output()
  private onCheckBoxChange: EventEmitter<any> = new EventEmitter();

  /** 搜尋後 */
  @Output()
  private onSearch: EventEmitter<any> = new EventEmitter();

  /** 展開狀態改變 */
  @Output()
  private onExpandChange: EventEmitter<any> = new EventEmitter();

  
  /** 樹狀陣列 */
  public treeOptions: NzTreeNode[] = [];

  constructor() { }

  ngOnInit() {
    this.init();
  }

  /** 初始化參數 */
  public init(){
    var tree = this.initTreeDatas(_.cloneDeep(this.tree));
    var treeItem = this.initTreeDatas(_.cloneDeep(this.treeItem));
    
    if(this.showCheckAll)
      tree = this.createCheckAll(tree);

    if(this.leafNodes)
      tree = this.setLeaf(tree);
    
    tree = this.calcNodeNum(tree);
    var option = this.array2Nodes(tree);

    if(this.showCountType != 0)
      option = this.showCount(option);

    this.treeOptions = [];
    option.forEach(item => {
        this.treeOptions.push(
            new NzTreeNode(item)
        );
    });
  }

  /** 初始化 Tree 所需要的資料 */
  private initTreeDatas(tree){
    tree = tree.map(function(x){
      x.title = x.displayName;
      x.key = x.id;
      delete x.children;
      return x;
    });
    return tree;
  }

  /** 產生全選框 */
  private createCheckAll(datas: any[]){
    datas = datas.map(function(x){
      if(x.parentId == null)
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
  private calcNodeNum(datas: any[]): any[]{
    var vm = this;
    switch(this.showCountType){
      case 1:
        datas = datas.map(function(x, i, arr){
          x.childNum = arr.filter(y => x.id == y.parentId && x.id != y.id).length;
          return x;
        });
        break;
      case 2:
        datas = datas.map(function(x, i, arr){
          x.childNum = arr.filter(y => y.code.startsWith(x.code) && x.id != y.id).length;
          return x;
        });
        break;
      case 3:
        datas = datas.map(function(x){
          x.childNum = vm.treeItem.filter(y => y.parentId == x.id).length;
          return x;
        });
        break;
      case 4:
        datas = datas.map(function(x){
          // x.childNum = vm.treeItem.filter(y => "0." + y.code.startsWith(x.code) && x.id != y.id).length;
          x.childNum = vm.treeItem.filter(function(y){
            var code = "0." + y.code;
            return code.startsWith(x.code)
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
  private setLeaf(datas: any[]): any[]{
    datas = datas.map(function(x, i, arr){
      if(arr.findIndex(y => y.parentId == x.id) == -1)
        x.isLeaf = true;
      
      return x;
    });
    return datas;
  }

  /** 顯示節點數字 */
  private showCount(nodes: any[]){
    nodes.forEach(node => {
      if(node.children)
        node.children = this.showCount(node.children);

      if(!node.isLeaf || this.showCountType > 2)
        node.title += `(${node.childNum})`;
    });

    return nodes;
  }

  /** 點擊節點 */
  public nodeClick(data: NzFormatEmitEvent) {
    // this.treeStatusChange("isSelected");
    // data.node.isSelected = true;
    this.onNodeClick.emit(data);
  }

  /** 展開狀態改變 */
  expandChange(event: Required<NzFormatEmitEvent>){
    this.onExpandChange.emit(event);
  }

  /** 雙擊節點 */
  public nodeDblClick(data: NzTreeNode | NzFormatEmitEvent){
    //展開/收合 節點
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      data.node.isExpanded = !data.node.isExpanded;
    }

    this.onNodeDblClick.emit(data);
  }

  /** CheckBox 狀態變更 */
  public nodeCheckBoxChange(data: NzFormatEmitEvent){
    this.onCheckBoxChange.emit(data);
  }

  /** 取得勾選的節點
   * type: 欄位名稱, 預設 'id'
   * type == '*all', 傳回完整物件
   */
  public getChecked(type: string = 'id') {
    var checkedDatas = this.nodes2Array(_.cloneDeep(this.treeOptions))
                      .filter(x => x.isChecked && x.key != 0)
                      .map(x => x.key);
    
    var checkedTreeDatas = _.cloneDeep(this.tree).filter(x => checkedDatas.includes(x.id));

    if(type.toLowerCase() == '*all') return checkedTreeDatas;

    return checkedTreeDatas.map(x => x[type]);
  }

  /** 樹狀態修改，預設關閉
   * type == isSelected(選擇狀態，藍底)
   * type == isChecked(勾選狀態)
   * type == isExpanded(折疊狀態)
   * type == isLeaf(葉節點狀態)
   */
  public treeStatusChange(type: string, status: boolean = false){
    this.statusChange(this.treeOptions, type, status);
  }
  private statusChange(nodes, type, status: boolean = false) {
    var childKey = "children";
    if (nodes instanceof Array) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            nodes[i][type] = status;
            if(type == 'isChecked' && status == false) nodes[i]['isHalfChecked'] = false;
            if (nodes[i][childKey])
                this.statusChange(nodes[i][childKey], type, status);
        }
    } else {
        nodes[type] = status;
        if(type == 'isChecked' && status == false) nodes['isHalfChecked'] = false;
        if (nodes[childKey])
            this.statusChange(nodes[childKey], type, status);
    }
  }

  /** 拖曳後動作 */
  public dropAction(event: any) {
    var drag = {
      node: event.dragNode.key,
      parent: 0
    }

    if(event.dragNode.parentNode && event.dragNode.parentNode.key)
      drag.parent = event.dragNode.parentNode.key
    
    event.dragNode.origin.parentId = drag.parent;

    var datas = this.nodes2Array(_.cloneDeep(this.treeOptions))
                .filter(x => x.origin.id)
                .map(function(x, i, arr){
                  var parentId = x.origin.parentId ? x.origin.parentId : null;
                  var order = arr.filter(y => y.origin.parentId == x.origin.parentId)
                                 .findIndex(y => y.key == x.key);
                  var temp = {
                    id: x.origin.id,
                    parentId: parentId,
                    order: order
                  }
                  return temp;
                });


    this.onDropAction.emit({
      drag: drag,
      datas: datas
    });
  }

  /** 搜尋樹 */
  public nzOnSearch(event: any){
    this.onSearch.emit(event);
  }

  /**  陣列轉樹狀 */
  private array2Nodes(nodesArray) {
    var i, l,
        key = "id",
        parentKey = "parentId",
        childKey = "children";
    if (!key || key == "" || !nodesArray) return [];

    if (nodesArray instanceof Array) {
        var r = [];
        var tmpMap: any = {};
        for (i = 0, l = nodesArray.length; i < l; i++) {
            tmpMap[nodesArray[i][key]] = nodesArray[i];
        }

        for (i = 0, l = nodesArray.length; i < l; i++) {
            if (tmpMap[nodesArray[i][parentKey]] && nodesArray[i][key] != nodesArray[i][parentKey]) {
                if (!tmpMap[nodesArray[i][parentKey]][childKey])
                    tmpMap[nodesArray[i][parentKey]][childKey] = [];

                tmpMap[nodesArray[i][parentKey]][childKey].push(nodesArray[i]);
            } else {
                r.push(nodesArray[i]);
            }
        }
        return r;
    } else {
        return [nodesArray];
    }
  }

  /** 樹狀轉陣列 */
  private nodes2Array(nodes) {
    if (!nodes) return [];
    var childKey = "children",
        r = [];
    if (nodes instanceof Array) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            r.push(nodes[i]);
            if (nodes[i][childKey])
                r = r.concat(this.nodes2Array(nodes[i][childKey]));
        }
    } else {
        r.push(nodes);
        if (nodes[childKey])
            r = r.concat(this.nodes2Array(nodes[childKey]));
    }
    return r;
  }
}
