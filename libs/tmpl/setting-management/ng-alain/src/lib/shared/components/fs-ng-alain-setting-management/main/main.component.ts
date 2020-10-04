import { Component, OnInit, Input ,OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
import { SettingDefinitionDto } from '@fs/theme.core';

@Component({
  selector: 'fs-ng-alain-setting-management-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit, OnDestroy  {
  @Input()
  providerName: string = undefined;

  @Input()
  providerKey: string = undefined;

  @Input()
  rawData: Array<SettingDefinitionDto> = null;

  @Input()
  settingGroups: Array<string> = null;

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
      this.editedData = {};
      this.settingValue = null;
      this.loading = false;
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

  editedData = {};
  settingValue = null;
  loading: boolean = false;
  constructor(
    private store: Store,
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    if(this.visible && this.rawData){
      this.loadData();
    }
  }

  loadData() {
    this.loading = true;
    this.editedData = {};
    this.settingValue = {};
    this.settingGroups.forEach((x, i) => {
      let value = this.rawData.filter(y => _.startsWith(y.name, x));
      if(value.length > 0){
        this.settingValue[x] = {
          group: x,
          settingData: value
        }
      } else {
        this.settingGroups[i] = null;
      }
    });
    this.settingGroups = this.settingGroups.filter(z => z != null);
    this.loading = false;
  }

  setTextColor(item){
    if(this.editedData === {}) return false;
    for(let key in this.editedData) {
      if(_.startsWith(key, item)) {
        return true;
      }
    }
    return false;
  }

  ngOnDestroy(): void {}
}
