import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodesWithSettingsOutput } from '../Coding/codes-with-settings';
import { CreateDefinitionsInput } from './create-definitions';
import { PatchDefinitionsInput } from './patch-definitions';

@Injectable({providedIn: 'root'})
/**
 * 勿直接使用Service，需透過ThemeCoreService
 */
export class DefinitionSettingAppService {
  constructor(private restService: RestService) {}

  getDefinitions(): Observable<Array<CodesWithSettingsOutput>> {
    return this.restService.request({ url: '/api/CodingManagement/definitionSetting/definitions', method: 'GET' });
  }

  postPatchDefinitions(body: PatchDefinitionsInput): Observable<void> {
    return this.restService.request({ url: '/api/CodingManagement/definitionSetting/patchDefinitions', method: 'POST', body });
  }

  postCreateDefinitions(body: CreateDefinitionsInput): Observable<void> {
    return this.restService.request({ url: '/api/CodingManagement/definitionSetting/createDefinitions', method: 'POST', body });
  }
}
