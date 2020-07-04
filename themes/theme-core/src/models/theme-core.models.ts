import { CodingWithSettingsDto } from './coding-with-setting-dto/coding-with-settings-dto';
import { CodingsByDefinitionModel } from './coding-tree-model';
import { SettingDto } from './setting-dto/setting-dto';

export namespace ThemeCore {
    export interface State {
        codingsByDefinition: CodingsByDefinitionModel;
        allDefinitions: Array<CodingWithSettingsDto>;
        settingsGroups: string[];
        settingsByProviderName: SettingDto[];
    }
}