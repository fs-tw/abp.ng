import { SettingNameAndKey } from './setting-name-and-key-dto';

export class SettingUpdateInput extends SettingNameAndKey {
    forceToSet: boolean;
    data: any;

    constructor(initialValues: Partial<SettingUpdateInput> = {}) {
        super(initialValues);
    }
}
  