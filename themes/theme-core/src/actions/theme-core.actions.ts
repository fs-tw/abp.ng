import { GetCodingSettingsInput } from '../models/coding-with-setting-dto/get-coding-settings-input';
import { PatchCodeSettingsInput } from '../models/coding-with-setting-dto/patch-code-settings-input';
import { SettingNameAndKey } from '../models/setting-dto/setting-name-and-key-dto';
import { SettingUpdateInput } from '../models/setting-dto/setting-update-input';

export class GetChildrenByNos{
    static readonly type = '[ThemeCore Api] Get Definition By Nos';
    constructor(public payload?: GetCodingSettingsInput) {}
}

export class GetAllDefinitions{
    static readonly type = '[ThemeCore Api] Get All Definitions';
    constructor() {}
}

export class GetSettingsGroups{
    static readonly type = '[ThemeCore Api] Get Settings Groups';
    constructor() {}
}

export class PatchCodeSettingsByInputs{
    static readonly type = '[ThemeCore Api] Patch CodeSettings By Inputs';
    constructor(public payload?: PatchCodeSettingsInput) {}
}

export class GetSettingByNameAndKey{
    static readonly type = '[ThemeCore Api] Get Setting By Name And Key';
    constructor(public payload?: SettingNameAndKey) {}
}

export class UpdateSettingsByProviderName {
    static readonly type = '[ThemeCore Api] Update Settings By ProviderName';
    constructor(public payload: SettingUpdateInput) {}
}