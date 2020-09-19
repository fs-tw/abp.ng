import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingDefinitionDto } from './Dtos/setting-definition-dto';
import { SettingNameAndKeyDto } from './Dtos/setting-name-and-key-dto';
import { UpdateSettingsInput } from './update-settings';
import { SettingInput } from './setting';

@Injectable({ providedIn: 'root' })
/**
 * 勿直接使用Service，需透過ThemeCoreService
 */
export class SettingAppService {
  constructor(private restService: RestService) {}

  getAvailableSettingsGroups(): Observable<Array<string>> {
    return this.restService.request({ url: '/api/SettingManagement/setting/availableSettingsGroups', method: 'GET' });
  }

  getSettingByNameAndKey(params: SettingNameAndKeyDto): Observable<Array<SettingDefinitionDto>> {
    return this.restService.request({ url: '/api/SettingManagement/setting', method: 'GET', params });
  }

  getSettingByList(body: Array<SettingInput>): Observable<Array<SettingDefinitionDto>> {
    return this.restService.request({ url: '/api/SettingManagement/setting/getByList', method: 'POST', body });
  }

  updateSettingsByProviderName(params: UpdateSettingsInput): Observable<any> {
    let body = params.data;
    delete params.data;
    return this.restService.request({ url: '/api/SettingManagement/setting', method: 'PUT', params, body });
  }
}
