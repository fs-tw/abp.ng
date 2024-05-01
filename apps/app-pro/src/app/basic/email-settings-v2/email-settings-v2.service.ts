import type {
  EmailSettingsDto,
  SendTestEmailInput,
  UpdateEmailSettingsDto,
} from './email-settings-v2.model';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailSettingsV2Service {
  apiName = 'SettingManagement';

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmailSettingsDto>(
      {
        method: 'GET',
        url: '/api/setting-management/emailing',
      },
      { apiName: this.apiName, ...config }
    );

  sendTestEmail = (input: SendTestEmailInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'POST',
        url: '/api/setting-management/emailing/send-test-email',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  update = (input: UpdateEmailSettingsDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'POST',
        url: '/api/setting-management/emailing',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  constructor(private restService: RestService) {}
}
