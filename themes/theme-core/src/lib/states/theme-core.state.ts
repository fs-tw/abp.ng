import {
  Action,
  State,
  StateContext,
  createSelector,
  Selector,
} from '@ngxs/store';
import { ThemeCore } from '../models/theme-core/theme-core.models';
import {
  GetChildrenByNos,
  GetAllDefinitions,
  GetSettingsGroups,
  PatchCodeSettingsByInputs,
  GetSettingByNameAndKey,
  UpdateSettingsByProviderName,
  UploadFileByNameAndBase64,
  UploadFileByFormData,
  DeleteFileByName,
  GetSettingByList, PatchDefinitionSettingsByInputs, CreateCodeSettingsByInputs, CreateDefinitionSettingsByInputs
} from '../actions/theme-core.actions';
import { switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { SettingDefinitionDto } from '../services/Setting/Dtos/setting-definition-dto';
import { CodesModel } from '../models/theme-core/codes-model';
import { PatchCodesInput } from '../services/CodeSetting/patch-codes';
import { CodesDictionaryModel } from '../models/theme-core/codes-dictionary-model';
import { CodeSettingAppService } from '../services/CodeSetting/CodeSettingApp.service';
import { SettingAppService } from '../services/Setting/SettingApp.service';
import { FileAppService } from '../services/Files/FileApp.service';
import { DefinitionSettingAppService } from '../services/DefinitionSetting/DefinitionSettingApp.service';
import { PatchDefinitionsInput } from '../services/DefinitionSetting/patch-definitions';
import { CreateCodesInput } from '../services/CodeSetting/create-codes';
import { CreateDefinitionsInput } from '../services/DefinitionSetting/create-definitions';

@Injectable({
  providedIn: 'root',
})
@State<ThemeCore.State>({
  name: 'ThemeCoreState',
  defaults: { codingsByDefinition: {}, settingsGroups: [] } as ThemeCore.State,
})
export class ThemeCoreState {
  static getAllDefinitionChildren() {
    let fun = (state: ThemeCore.State): CodesDictionaryModel => {
      return state.codingsByDefinition;
    };
    return createSelector([ThemeCoreState], fun);
  }

  static getSingleDefinitionChildren(no: string) {
    let fun = (state: ThemeCore.State): CodesModel => {
      if(!state.codingsByDefinition[no]) { 
        console.error("%c找不到 " + no + " 這筆資料", "color:red; font-size:30px;");
        throw `無法讀取`;
      }
      return state.codingsByDefinition[no];
    };
    return createSelector([ThemeCoreState], fun);
  }

  // private
  @Selector()
  static getSettingsGroups({ settingsGroups }: ThemeCore.State): string[] {
    return settingsGroups;
  }

  // private
  @Selector()
  static getSettingsByProviderName({
    settingsByProviderName,
  }: ThemeCore.State): SettingDefinitionDto[] {
    return settingsByProviderName;
  }

  constructor(
    private codeSettingAppService: CodeSettingAppService,
    private definitionSettingAppService: DefinitionSettingAppService,
    private settingAppService: SettingAppService,
    private fileAppService: FileAppService
  ) {}

  // private
  @Action(GetAllDefinitions)
  getAllDefinitions(
    { dispatch, patchState, getState }: StateContext<ThemeCore.State>,
    {}: GetAllDefinitions
  ) {
    return this.definitionSettingAppService.getDefinitions().pipe(
      switchMap((allDefinitions) => {
        let datas = getState().codingsByDefinition;
        let codingsByDefinition: CodesDictionaryModel = {};
        allDefinitions.forEach((x) => {
          let key = x.codes.no;
          let rawDatas = datas[key] ? datas[key].rawDatas : [];
          codingsByDefinition[key] = new CodesModel(rawDatas, x);
        });
        patchState({
          codingsByDefinition,
        });
        return dispatch(
          new GetChildrenByNos({
            definitionNos: Object.keys(codingsByDefinition),
          })
        );
      })
    );
  }

  // private
  @Action(GetChildrenByNos)
  getChildrenByNos(
    { patchState, getState }: StateContext<ThemeCore.State>,
    { payload }: GetChildrenByNos
  ) {
    return this.codeSettingAppService
      .postListBy(payload)
      .pipe(
        tap((x) => {
          let codingsByDefinition = { ...getState().codingsByDefinition };

          Object.keys(x).forEach((key) => {
            codingsByDefinition[key] = new CodesModel(
              x[key],
              codingsByDefinition[key].definition
            );
          });

          return patchState({
            codingsByDefinition,
          });
        })
      );
  }

  // 自動同步到最新資料
  @Action(PatchCodeSettingsByInputs)
  patchCodeSettingsByInputs(
    { dispatch, getState }: StateContext<ThemeCore.State>,
    { payload }: PatchCodeSettingsByInputs
  ) {
    let definitions = getState().codingsByDefinition;
    let loadDefinitions: string[] = [];
    let isGetAllDefinition: boolean = false;
    payload.editItems = payload.editItems.map((x) => {
      if(!isGetAllDefinition) {
        let res = Object.keys(definitions).filter(y => { return definitions[y].definition.codes.id === x.definitionId });
        if(res.length > 0) loadDefinitions = _.concat(loadDefinitions, res); else isGetAllDefinition = true;
      }
      
      let settingValues = [];
      x.settingValues.some((y) => {
        let keys =  Object.keys(y);
        let isNameAndValue = keys.filter(v => v == 'name' || v == 'value');
        if(keys.length == 2 && isNameAndValue.length >= 2) {
          settingValues.push(y);
        } else if(keys.length > 0 && isNameAndValue.length <= 0) {
          let v = Object.keys(y).map(z => { return { name: z, value: y[z] }; });
          settingValues = settingValues.concat(v);
        } else {
          console.error("%cID " + x.id + " 的Setting資料格式錯誤", "color:red; font-size:30px;");
          throw `無法修改`;
        }
      })
      x.settingValues = _.uniqBy(settingValues, 'name');
      return x;
    });

    if (!isGetAllDefinition) {
      payload.deleteItemIds.some((x) => {
        let res = Object.keys(definitions).filter(y => { return definitions[y].rawDatas.filter((z) => z.codes.id === x).length > 0; });
        if(res.length > 0) {
          loadDefinitions = _.concat(loadDefinitions, res);
        } else {
          isGetAllDefinition = true;
          return;
        }
      });
    }

    if (!isGetAllDefinition) {
      payload.addItems = payload.addItems.map((x) => {
        if(!isGetAllDefinition) {
          let res = Object.keys(definitions).filter(y => { return definitions[y].definition.codes.id === x.definitionId });
          if(res.length > 0) loadDefinitions = _.concat(loadDefinitions, res); else isGetAllDefinition = true;
        }
        
        let settingValues = [];
        x.settingValues.some((y) => {
          let keys =  Object.keys(y);
          let isNameAndValue = keys.filter(v => v == 'name' || v == 'value');
          if(keys.length == 2 && isNameAndValue.length >= 2) {
            settingValues.push(y);
          } else if(keys.length > 0 && isNameAndValue.length <= 0) {
            let v = Object.keys(y).map(z => { return { name: z, value: y[z] }; });
            settingValues = settingValues.concat(v);
          } else {
            console.error("%cNo " + x.no + " 的Setting資料格式錯誤", "color:red; font-size:30px;");
            throw `無法修改`;
          }
        })
        x.settingValues = _.uniqBy(settingValues, 'name');
        return x;
      });
    }

    let input: PatchCodesInput = new PatchCodesInput(payload);
    let definitionNos = { definitionNos: (!isGetAllDefinition) ? _.uniqBy(loadDefinitions) : [] };
    return this.codeSettingAppService
    .postPatchCodes(input)
    .pipe(
      switchMap(() =>
        isGetAllDefinition
          ? dispatch(new GetAllDefinitions())
          : dispatch(new GetChildrenByNos(definitionNos))
      )
    );
  }

  // 自動同步到最新資料
  @Action(CreateCodeSettingsByInputs)
  createCodeSettingsByInputs(
    { dispatch, getState }: StateContext<ThemeCore.State>,
    { payload }: CreateCodeSettingsByInputs
  ) {
    let definitions = getState().codingsByDefinition;
    let loadDefinitions: string[] = [];
    let isGetAllDefinition: boolean = false;
    let findDefinition = Object.keys(definitions).filter(y => { return definitions[y].definition.codes.id === payload.parentId });
    if(findDefinition.length > 0) loadDefinitions = _.concat(loadDefinitions, findDefinition); else isGetAllDefinition = true;
    
    let input: CreateCodesInput = new CreateCodesInput(payload);
    let definitionNos = { definitionNos: (!isGetAllDefinition) ? _.uniqBy(loadDefinitions) : [] };
    return this.codeSettingAppService
    .postCreateCodes(input)
    .pipe(
      switchMap(() =>
        isGetAllDefinition
          ? dispatch(new GetAllDefinitions())
          : dispatch(new GetChildrenByNos(definitionNos))
      )
    );
  }

  // 自動同步到最新資料
  @Action(PatchDefinitionSettingsByInputs)
  patchDefinitionSettingsByInputs(
    { dispatch }: StateContext<ThemeCore.State>,
    { payload }: PatchDefinitionSettingsByInputs
  ) {
    payload.editItems = payload.editItems.map((x) => {
      let settingValues = [];
      x.settingValues.some((y) => {
        let keys =  Object.keys(y);
        let isNameAndValue = keys.filter(v => v == 'name' || v == 'value');
        if(keys.length == 2 && isNameAndValue.length >= 2) {
          settingValues.push(y);
        } else if(keys.length > 0 && isNameAndValue.length <= 0) {
          let v = Object.keys(y).map(z => { return { name: z, value: y[z] }; });
          settingValues = settingValues.concat(v);
        } else {
          console.error("%cID " + x.id + " 的Setting資料格式錯誤", "color:red; font-size:30px;");
          throw `無法修改`;
        }
      })
      x.settingValues = _.uniqBy(settingValues, 'name');
      return x;
    });

    let input: PatchDefinitionsInput = new PatchDefinitionsInput(payload);
    return this.definitionSettingAppService
    .postPatchDefinitions(input)
    .pipe(
      switchMap(() =>
        dispatch(new GetAllDefinitions())
      )
    );
  }

  // 自動同步到最新資料
  @Action(CreateDefinitionSettingsByInputs)
  createDefinitionSettingsByInputs(
    { dispatch }: StateContext<ThemeCore.State>,
    { payload }: CreateDefinitionSettingsByInputs
  ) {
    let input: CreateDefinitionsInput = new CreateDefinitionsInput(payload);
    return this.definitionSettingAppService
    .postCreateDefinitions(input)
    .pipe(
      switchMap(() =>
        dispatch(new GetAllDefinitions())
      )
    );
  }

  @Action(GetSettingsGroups)
  getSettingsGroups(
    { patchState }: StateContext<ThemeCore.State>,
    {}: GetSettingsGroups
  ) {
    return this.settingAppService
    .getAvailableSettingsGroups()
    .pipe(tap((settingsGroups) => {
      return patchState({
        settingsGroups,
      });
    }));
  }

  @Action(GetSettingByNameAndKey)
  getSettingByNameAndKey(
    { patchState }: StateContext<ThemeCore.State>,
    { payload }: GetSettingByNameAndKey
  ) {
    return this.settingAppService.getSettingByNameAndKey(payload).pipe(
      tap((settingsByProviderName) =>
        patchState({
          settingsByProviderName,
        })
      )
    );
  }

  @Action(GetSettingByList)
  getSettingByList(
    { patchState }: StateContext<ThemeCore.State>,
    { payload }: GetSettingByList
  ) {
    return this.settingAppService.getSettingByList(payload).pipe(
      tap((settingsByProviderName) =>
        patchState({
          settingsByProviderName,
        })
      )
    );
  }

  @Action(UpdateSettingsByProviderName)
  updateSettingsByProviderName(
    { dispatch }: StateContext<ThemeCore.State>,
    { payload }: UpdateSettingsByProviderName
  ) {
    return this.settingAppService
    .updateSettingsByProviderName(payload)
    .pipe(
      switchMap(
        () => (
          delete payload.forceToSet,
          delete payload.data,
          dispatch(new GetSettingByNameAndKey(payload))
        )
      )
    );
  }

  @Action(UploadFileByNameAndBase64)
  uploadFileByNameAndBase64(
    {  }: StateContext<ThemeCore.State>,
    { name, body }: UploadFileByNameAndBase64
  ) {
    name = _.join(_.split(name,'%5C'),'\\');
    return this.fileAppService
      .uploadFileByNameAndBase64(name, body)
      .pipe();
  }

  @Action(UploadFileByFormData)
  uploadFileByFormData(
    {  }: StateContext<ThemeCore.State>,
    { body }: UploadFileByFormData
  ) {
    
    return this.fileAppService
      .uploadFileByFormData(body)
      .pipe();
  }

  @Action(DeleteFileByName)
  deleteFileByName(
    {  }: StateContext<ThemeCore.State>,
    { name }: DeleteFileByName
  ) {
    name = _.join(_.split(name, '\\'), '%5C');
    return this.fileAppService
      .deleteFileByName(name)
      .pipe();
  }
}
