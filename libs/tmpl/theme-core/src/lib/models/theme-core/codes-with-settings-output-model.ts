import { ABP } from '@abp/ng.core';
import { CodesWithSettingsOutput } from '../../services/Coding/codes-with-settings';

export class CodesWithSettingsOutputModel extends CodesWithSettingsOutput {
  settingDatas: ABP.Dictionary<string>;
  constructor(initialValues: Partial<CodesWithSettingsOutputModel> = {}) {
    super(initialValues);
  }
}