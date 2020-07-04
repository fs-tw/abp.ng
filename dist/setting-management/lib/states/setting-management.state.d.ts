import { StateContext } from '@ngxs/store';
import { SetSelectedSettingTab } from '../actions/setting-management.actions';
import { SettingManagement } from '../models/setting-management';
export declare class SettingManagementState {
    static getSelectedTab({ selectedTab }: SettingManagement.State): import("../../../../../dist/core/public-api").ABP.Tab;
    settingManagementAction({ patchState }: StateContext<SettingManagement.State>, { payload }: SetSelectedSettingTab): void;
}
