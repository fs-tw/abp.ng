import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingNameAndKey } from '../models/setting-dto/setting-name-and-key-dto';
import { CodingWithSettingsDto } from '../models/coding-with-setting-dto/coding-with-settings-dto';
import { GetCodingSettingsInput } from '../models/coding-with-setting-dto/get-coding-settings-input';
import { CodingChildrenSettingsDto } from '../models/coding-with-setting-dto/coding-children-settings-dto';
import { SettingDto } from '../models/setting-dto/setting-dto';
import { SettingUpdateInput } from '../models/setting-dto/setting-update-input';

@Injectable({providedIn: 'root'})
export class CodingWithSettingService {
  constructor(private restService: RestService) {}

  getDefinitions(): Observable<Array<CodingWithSettingsDto>> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/definitions', method: 'GET' });
  }
  postGetChildrenByDefinitionNos(body: GetCodingSettingsInput): Observable<CodingChildrenSettingsDto> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/getByDefinitionNos', method: 'POST', body });
  }

  getAvailableSettingsGroups(): Observable<Array<string>> {
    return this.restService.request({ url: '/api/SettingManagement/setting/availableSettingsGroups', method: 'GET' });
  }

  postPatchCodeSettingsByInputs(body: any): Observable<any> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/patch', method: 'POST', body });
  }

  getSettingByNameAndKey(params: SettingNameAndKey): Observable<SettingDto[]> {
    return this.restService.request({ url: '/api/SettingManagement/setting', method: 'GET', params });
  }

  updateSettingsByProviderName(params: SettingUpdateInput): Observable<any> {
    let body = params.data;
    delete params.data;
    return this.restService.request({ url: '/api/SettingManagement/setting', method: 'PUT', params, body });
  }
}


