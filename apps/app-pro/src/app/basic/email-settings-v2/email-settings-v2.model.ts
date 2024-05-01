export const enum eEmailSettingsV2PolicyNames {
  EmailSettingsV2 = '',
}
export const enum eEmailSettingsV2Names {
  EmailSettingsV2 = 'Basic::Menu:EmailSettingsV2',
}
export interface EmailSettingsDto {
  smtpHost?: string;
  smtpPort: number;
  smtpUserName?: string;
  smtpPassword?: string;
  smtpDomain?: string;
  smtpEnableSsl: boolean;
  smtpUseDefaultCredentials: boolean;
  defaultFromAddress?: string;
  defaultFromDisplayName?: string;
}
export interface SendTestEmailInput {
  senderEmailAddress: string;
  targetEmailAddress: string;
  subject: string;
  body?: string;
}

export interface UpdateEmailSettingsDto {
  smtpHost?: string;
  smtpPort: number;
  smtpUserName?: string;
  smtpPassword?: string;
  smtpDomain?: string;
  smtpEnableSsl: boolean;
  smtpUseDefaultCredentials: boolean;
  defaultFromAddress: string;
  defaultFromDisplayName: string;
}
