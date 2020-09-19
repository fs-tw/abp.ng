import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';
import { Select } from '@ngxs/store';
import { ThemeCoreState, CodesWithSettingsOutput, SettingValueModel, ThemeCoreStateService } from '@fs/theme.core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'fs-ng-alain-setting-management',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

export class ModalComponent implements OnInit {
  @Select(ThemeCoreState.getSettingsGroups)
  settingdata$: Observable<Array<string>>;
  
  @Input()
  providerName: string = undefined;

  @Input()
  providerKey: string = undefined;

  @Input()
  rawData: CodesWithSettingsOutput = null;

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

  settingGroups: Array<string> = null;
  settingValue: Array<SettingValueModel> = null;
  loading: boolean = false;
  constructor(
    private themeCoreStateService: ThemeCoreStateService
  ) { }

  destroy$ = new Subject<void>();
  ngOnInit() {
    this.settingdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
      if(x){
        this.loadSettingGroups(x);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnChanges() {
    if(this.visible && this.rawData){
      this.loadSettingGroups(this.themeCoreStateService.getSettingsGroups());
      this.loadData();
    }
  }

  loadSettingGroups(data: string[]) {
    this.settingGroups = null;
    let settingGroup = _.uniq(data);
    this.settingGroups = settingGroup.filter((x, i, arr) => {
      return arr.filter((y, j) => i != j && _.startsWith(x, y + ".")).length == 0;
    });
  }

  loadData() {
    this.loading = true;
    this.settingValue = [];
    let data = this.rawData.settingValues;
    this.rawData.availableSettingsDefinitions.forEach(x => {
        let index = _.findIndex(data, function(o) { return o.name === x.name; });
        if(index != -1) {
          this.settingValue.push({
            name: x.name,
            value: data[index].value,
            displayName: x.displayName,
            properties: x.properties
          });
        } else {
          this.settingValue.push({
            name: x.name,
            value: x.defaultValue,
            displayName: x.displayName,
            properties: x.properties
          });
        }
    });
    this.loading = false;
  }

  close(): void {
    this.visible = false;
  }
}
