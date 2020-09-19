import { CodesDictionaryModel } from './codes-dictionary-model';
import { SettingDefinitionDto } from '../../services/Setting/Dtos/setting-definition-dto';

export namespace ThemeCore {
    export interface State {
        codingsByDefinition: CodesDictionaryModel;
        settingsGroups: string[];
        settingsByProviderName: SettingDefinitionDto[];
    }
}