import { RestService, ConfigStateService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilePutInput } from './Dtos/file-put-input';

@Injectable({providedIn: 'root'})
export class FileAppService {
  apiName = 'Default';

  constructor(
    private restService: RestService,
    private configStateService: ConfigStateService
  ) {}

  uploadFileByNameAndBase64(name: string, body: FilePutInput): Observable<void> {
    return this.restService.request({ url: `/api/themes/file/${name}`, method: 'PUT', body },{ apiName: this.apiName });
  }

  uploadFileByFormData(body: FormData): Observable<void> {
    return this.restService.request({ url: `/api/themes/file`, method: 'PUT', body },{ apiName: this.apiName });
  }

  deleteFileByName(name: string): Observable<void> {
    return this.restService.request({ url: `/api/themes/file/${name}`, method: 'DELETE' }, { apiName: this.apiName });
  }

  getFileByName(name: string): string {
    return this.configStateService.getApiUrl() + `/api/themes/file/${name}`;
  }
}
