import { SettingNameAndKeyDto } from './Dtos/setting-name-and-key-dto';

export class UpdateSettingsInput extends SettingNameAndKeyDto {
    forceToSet?: boolean;
    data: any;

    constructor(initialValues: Partial<UpdateSettingsInput> = {}) {
        super(initialValues);
    }
}
