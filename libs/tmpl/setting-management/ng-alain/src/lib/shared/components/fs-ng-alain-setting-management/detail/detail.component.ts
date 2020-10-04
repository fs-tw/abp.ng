import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { ToasterService } from '@abp/ng.theme.shared';
import { NzContextMenuService } from 'ng-zorro-antd';
import { FsNgAlainTreeComponent } from '@fs/theme.ng-alain/basic';
import { UpdateSettingsByProviderName } from '@fs/theme.core';

@Component({
  selector: 'fs-ng-alain-setting-management-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  @ViewChild(FsNgAlainTreeComponent, {static: false}) fsNgAlainTreeComponent: FsNgAlainTreeComponent;

  @Input()
  providerName: string = undefined;

  @Input()
  providerKey: string = undefined;

  @Input()
  rawData = null;

  protected _visible: boolean = false;

  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    if (value === this._visible) return;
    this._visible = (value) ? true : false;
    if (value) {
      this.visibleChange.emit(value);
    } else {
      this.rawData = null;
      this.treeData = [];
      this.editedData = {};
      this.loading = false;
      this.isExpanded = true;
      this.seletedNode = "";
      this.visibleChange.emit(false);
    }
  }

  @Output() readonly visibleChange = new EventEmitter<boolean>();

  protected _isEdited: boolean = false;

  @Input()
  get isEdited(): boolean {
    return this._isEdited;
  }

  set isEdited(value: boolean) {
    if (value === this._isEdited) return;
    this._isEdited = (value) ? true : false;
    if (value) {
      this.isEditedChange.emit(value);
    } else {
      this.isEditedChange.emit(false);
    }
  }

  @Output() readonly isEditedChange = new EventEmitter<boolean>();

  protected _editedData = {};

  @Input()
  get editedData(): object {
    return this._editedData;
  }

  set editedData(value: object) {
    if (value === this._editedData) return;
    if (value != {}) {
      this._editedData = value;
      this.editedDataChange.emit(value);
    } else {
      this._editedData = {};
      this.editedDataChange.emit({});
    }
  }

  @Output() readonly editedDataChange = new EventEmitter<object>();

  form: FormGroup;
  treeData = [];
  loading: boolean = false;
  isExpanded: boolean = true;
  seletedNode: string = "";
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private toasterService: ToasterService,
    private nzContextMenuService: NzContextMenuService,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.visible && this.rawData){
      this.form = new FormGroup({});
      this.loading = true;
      this.treeData = this.loadData(this.rawData);

      this.buildForm();
      this.init();
      this.treeStatusChange('isExpanded', this.isExpanded);
    }
  }

  init(){
    this.changeDetectorRef.detectChanges();
    this.fsNgAlainTreeComponent.init();
  }

  loadData(data?) {
    let result = [];
    let len = data.group.split('.').length;
    data.settingData.forEach(x => {
      result = result.concat(this.splitName(len, x));
    })
    return _.uniqBy(result, 'id');
  }

  splitName(len?, data?){
    let result = [];
    let code = _.drop(_.dropRight(data.name.split('.')), len);
    code.forEach((y, i) => {
      result.push({
        id: (i === 0) ? y : result[i - 1].id + "." + y,
        parentId: (i === 0) ? null : result[i - 1].id,
        displayName: (i === 0) ? y : result[i - 1].displayName + "." + y
      });
    });
    data.id = data.name;
    data.parentId = (code.length > 0) ? _.last(result).id : null;
    result.push(data);
    return result;
  }

  buildForm() {
    let value = {};
    this.rawData.settingData.forEach((element, index) => {
      if(element.value === null) {
        element.value = '';
        this.rawData.settingData[index].value = '';
      } else {
        try {
          element.value = JSON.parse(_.toLower(element.value));
          switch(typeof (element.value)) {
            case 'boolean':
              this.rawData.settingData[index].properties.Type = 'Boolean';
              break;
            case 'number':
              this.rawData.settingData[index].properties.Type = 'Decimal';
              break;
          }
        } catch(e) {
          if(!element.properties.Type) {
            this.rawData.settingData[index].properties.Type = 'String';
          } else if(element.properties.Type === "Boolean") {
            element.value = false;
          }
        }
      }
      value[element.name] = [element.value, []];
    });
    this.form = this.fb.group(value);
    this.form.valueChanges.subscribe(x => {
      let key = this.seletedNode;
      let rawData = _.head(this.rawData.settingData.filter(x => x.name === key));
      rawData.value = (typeof (rawData.value) != "string") ? JSON.stringify(rawData.value) : rawData.value;
      let data = (typeof (x[key]) != "string") ? JSON.stringify(x[key]) : x[key];
      if(rawData.value !== data){
        this.editedData[key] = data;
      } else {
        delete this.editedData[key];
      }
      this.changeDetectorRef.detectChanges();
    });
    this.loading = false;
  }

  save() {
    this.loading = true;
    let input = {
      providerName: this.providerName,
      providerKey: this.providerKey,
      forceToSet: false,
      data: this.editedData
    };
    this.store.dispatch(
      new UpdateSettingsByProviderName(input)
    )
    .pipe(finalize(() => this.loading = false))
    .subscribe((x) => {
      if(this.providerKey) {
        this.isEdited = true;
        this.visible = false;
      }
      this.toasterService.success("資料更新成功");
    }, (error) => {
      this.toasterService.error("資料更新失敗");
    });
  }

  clickItem(node){
    this.nzContextMenuService.close();
    if(node.isLeaf){
      if(this.seletedNode === node.key){
        this.seletedNode = "";
      } else {
        this.seletedNode = node.key;
      }
    }
  }

  searchColor(node){
    if(!this.fsNgAlainTreeComponent || !this.fsNgAlainTreeComponent.searchValue) return node.title;
    var regStr = "";
    var extraText = "~!@#$%^&*()_+=-|\\?/.,<>'\";:[]{}";
    var searchArr = this.fsNgAlainTreeComponent.searchValue.split("");
    searchArr.forEach(x => {
      if(extraText.includes(x)){
        regStr += "\\" + x;
      }else{
        regStr += x;
      }
    });
    var reg = new RegExp(regStr);
    var addClass = "<span class='font-highlight'>" + this.fsNgAlainTreeComponent.searchValue + "</span>";
    var newTitle = node.title.replace(reg, addClass);
    return newTitle;
  }

  treeStatusChange(type: string, status: boolean = false){
    this.isExpanded = status;
    this.fsNgAlainTreeComponent.treeStatusChange(type, status);
  }

  reLoadData() {
    this.editedData = {};
    this.buildForm();
    this.init();
    this.treeStatusChange('isExpanded', this.isExpanded);
  }
}
