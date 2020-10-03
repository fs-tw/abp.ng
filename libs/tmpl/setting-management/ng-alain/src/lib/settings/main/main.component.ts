import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ThemeCoreState, SettingDefinitionDto, SettingValueModel, GetSettingByNameAndKey, ThemeCoreStateService } from '@fs/theme.core';
import { Observable, Subject } from 'rxjs';
import { ToasterService } from '@abp/ng.theme.shared';
import { finalize, takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'fs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Select(ThemeCoreState.getSettingsByProviderName)
  settingdata$: Observable<Array<SettingDefinitionDto>>;

  @Select(ThemeCoreState.getSettingsGroups)
  settingGroupdata$: Observable<Array<string>>;
  
  providerNameList = [
    {
      tag: "D",
      displayName: "DefaultValue"
    },
    {
      tag: "C",
      displayName: "Configuration"
    },
    {
      tag: "G",
      displayName: "Global"
    },
    {
      tag: "T",
      displayName: "Tenant"
    },
    {
      tag: "U",
      displayName: "User"
    }
  ];

  settingGroups: Array<string> = null;
  selectedSettingData: Array<SettingValueModel> = null;
  loading: boolean = false;
  visible: boolean = false;
  providerName: string = null;
  providerKey: string = null;
  constructor(
    private store: Store,
    private toasterService: ToasterService,
    private themeCoreStateService: ThemeCoreStateService
  ) {
  }

  destroy$ = new Subject<void>();
  ngOnInit() {
    this.settingdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
      if(x && this.visible && this.selectedSettingData){
        this.selectedSettingData = x.map(y => {
          return {
            name: y.name,
            value: y.value,
            displayName: y.displayName,
            properties: y.properties
          }
        });
      }
    });
    
    this.settingGroupdata$.pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.settingGroups = null;
      if(x){
        let settingGroup = _.uniq(x);
        this.settingGroups = settingGroup.filter((x, i, arr) => {
          return arr.filter((y, j) => i != j && _.startsWith(x, y + ".")).length == 0;
      })
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  editManageAction(item?){
    this.loading = true;
    let input = {
      providerName: item,
      providerKey: undefined
    }
    this.store.dispatch(new GetSettingByNameAndKey(input))
      .pipe(finalize(() => this.loading = false))
      .subscribe(() => {
        this.setting(true, input);
      }, (error) => {
        this.toasterService.error("查詢失敗");
    });
  }

  setting(visible?, provider?){
    this.visible = visible;
    this.providerName = provider.providerName;
    this.providerKey = provider.providerKey;
    let data = this.themeCoreStateService.getSettingsByProviderName();
    this.selectedSettingData = data.map(x => {
      return {
        name: x.name,
        value: x.value,
        displayName: x.displayName,
        properties: x.properties
      }
    });
  }
}
