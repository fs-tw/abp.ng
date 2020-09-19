import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListByInput, ListByOutput } from './list-by';
import { PatchCodesInput } from './patch-codes';
import { CreateCodesInput } from './create-codes';

@Injectable({providedIn: 'root'})
/**
 * 勿直接使用Service，需透過ThemeCoreService
 */
export class CodeSettingAppService {
  constructor(private restService: RestService) {}

  postListBy(body: ListByInput): Observable<ListByOutput> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/listBy', method: 'POST', body });
  }

  postPatchCodes(body: PatchCodesInput): Observable<void> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/patchCodes', method: 'POST', body });
  }

  postCreateCodes(body: CreateCodesInput): Observable<void> {
    return this.restService.request({ url: '/api/CodingManagement/codeSetting/createCodes', method: 'POST', body });
  }
}
