
export interface UserData {
  id?: string;
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
  isActive: boolean;
  email?: string;
  emailConfirmed: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  extraProperties: Record<string, object>;
}
