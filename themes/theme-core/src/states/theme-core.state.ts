import { Action, State, StateContext, createSelector, Selector, Store } from '@ngxs/store';
import { ThemeCore } from '../models/theme-core.models';
import { CodingsByDefinitionModel } from '../models/coding-tree-model';
import { CodingWithSettingService } from '../services/coding-with-setting.service';
import { GetChildrenByNos, GetAllDefinitions, GetSettingsGroups, PatchCodeSettingsByInputs, GetSettingByNameAndKey, UpdateSettingsByProviderName } from '../actions/theme-core.actions';
import { switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';
import { SettingDto } from '../models/setting-dto/setting-dto';
import { Injectable } from '@angular/core';

@State<ThemeCore.State>({
    name: 'ThemeCoreState',
    defaults: { codingsByDefinition: new CodingsByDefinitionModel({}) } as ThemeCore.State,
})
@Injectable()
export class ThemeCoreState {
    static getSettingsGroups() {
        const selector = createSelector([ThemeCoreState], (state: ThemeCore.State) => {
            return state.settingsGroups;
        });
        return selector;
    }

    static getAllDefinitions() {
        const selector = createSelector([ThemeCoreState], (state: ThemeCore.State) => {
            return state.allDefinitions;
        });
        return selector;
    }

    @Selector()
    static getAllChildren({ codingsByDefinition }: ThemeCore.State): CodingsByDefinitionModel {
        return codingsByDefinition;
    }

    @Selector()
    static getSettingsByProviderName({ settingsByProviderName }: ThemeCore.State): SettingDto[] {
        return settingsByProviderName;
    }

    constructor(
        private store: Store,
        private codingWithSettingService: CodingWithSettingService
    ) { }

    @Action(GetSettingsGroups)
    getSettingsGroups({ patchState }: StateContext<ThemeCore.State>, {}: GetSettingsGroups) {
        this.codingWithSettingService.getAvailableSettingsGroups().subscribe(settingsGroups => {
            return patchState({
                settingsGroups
            })
        })
    }

    @Action(GetAllDefinitions)
    getAllDefinitions({ patchState }: StateContext<ThemeCore.State>, {}: GetAllDefinitions) {
        this.codingWithSettingService.getDefinitions().subscribe(allDefinitions => {
            return patchState({
                allDefinitions
            })
        })
    }

    @Action(GetChildrenByNos)
    getChildrenByNos({ patchState, getState }: StateContext<ThemeCore.State>, { payload }: GetChildrenByNos) {
        this.codingWithSettingService.postGetChildrenByDefinitionNos(payload).subscribe(x => {
            let datas = getState().codingsByDefinition;
            datas.addKeys(x);
            let codingsByDefinition = new CodingsByDefinitionModel(datas.rawDatas);
            return patchState({
                codingsByDefinition
            })
        })
    }

    @Action(PatchCodeSettingsByInputs)
    patchCodeSettingsByInputs({ dispatch }: StateContext<ThemeCore.State>, { payload }: PatchCodeSettingsByInputs) {
        let Nos = (payload.definitionNos) ? { definitionNos: payload.definitionNos} : null;
        delete payload.definitionNos;
        payload.editItems.forEach((x, i) => {
            payload.editItems[i].settings = x.settings.map(y => {
                let key =  _.findKey(y, function(o) { return o !== undefined; });
                return {
                    "name": key,
                    "value": y[key]
                }
            });
        });
        return this.codingWithSettingService.postPatchCodeSettingsByInputs(payload)
                   .pipe(switchMap(() =>
                        (Nos) ? dispatch(new GetChildrenByNos(Nos)) :  dispatch(new GetAllDefinitions())
                ));
    }
    
    @Action(GetSettingByNameAndKey)
    getSettingByNameAndKey({ patchState }: StateContext<ThemeCore.State>, { payload }: GetSettingByNameAndKey) {
        return this.codingWithSettingService.getSettingByNameAndKey(payload).pipe(
            tap(settingsByProviderName =>
                patchState({
                    settingsByProviderName
                })
            )
        );
    }

    @Action(UpdateSettingsByProviderName)
    updateSettingsByProviderName({ dispatch }: StateContext<ThemeCore.State>, { payload }: UpdateSettingsByProviderName) {
        return this.codingWithSettingService
            .updateSettingsByProviderName( payload )
            .pipe(switchMap(() => (
                delete payload.forceToSet,
                delete payload.data,
                dispatch(new GetSettingByNameAndKey(payload)
            ))));
    }
}