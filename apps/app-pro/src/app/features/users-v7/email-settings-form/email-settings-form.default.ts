import { FormControl, Validators } from '@angular/forms';
import { ePropType, FormProp } from '@abp/ng.components/extensible';
import { eEmailSettingsFormNames, U } from './email-settings-form.types';

const resourceName = eEmailSettingsFormNames.DefaultsResourceName;

const CREATE_FORM_PROPS_TOP = FormProp.createMany<U>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    //validators: () => [Validators.required],
  },
  {
    id: 'defaultFromDisplayName',
    name: 'defaultFromDisplayName',
    type: ePropType.String,
    displayName: `${resourceName}::DefaultFromDisplayName`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'defaultFromAddress',
    name: 'defaultFromAddress',
    type: ePropType.String,
    displayName: `${resourceName}::DefaultFromAddress`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'smtpHost',
    name: 'smtpHost',
    type: ePropType.String,
    displayName: `${resourceName}::SmtpHost`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'smtpPort',
    name: 'smtpPort',
    type: ePropType.Number,
    displayName: `${resourceName}::SmtpPort`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'smtpEnableSsl',
    name: 'smtpEnableSsl',
    type: ePropType.Boolean,
    displayName: `${resourceName}::SmtpEnableSsl`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'smtpUseDefaultCredentials',
    name: 'smtpUseDefaultCredentials',
    type: ePropType.Boolean,
    displayName: `${resourceName}::SmtpUseDefaultCredentials`,
    defaultValue: false,
    validators: () => [],
  }
]);

const CREATE_FORM_PROPS_BOTTOM = FormProp.createMany<U>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    //validators: () => [Validators.required],
  },
  {
    id: 'smtpDomain',
    name: 'smtpDomain',
    type: ePropType.String,
    displayName: `${resourceName}::SmtpDomain`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'smtpUserName',
    name: 'smtpUserName',
    type: ePropType.String,
    displayName: `${resourceName}::SmtpUserName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'smtpPassword',
    name: 'smtpPassword',
    type: ePropType.String,
    displayName: `${resourceName}::SmtpPassword`,
    defaultValue: undefined,
    validators: () => [],
  }
]);

const CREATE_FORM_CONTROLS = {
  smtpHost: new FormControl('', { nonNullable: true }),
  smtpPort: new FormControl(0, { nonNullable: true }),
  smtpUserName: new FormControl('', { nonNullable: true }),
  smtpPassword: new FormControl('', { nonNullable: true }),
  smtpDomain: new FormControl('', { nonNullable: true }),
  smtpEnableSsl: new FormControl(false, { nonNullable: true }),
  defaultFromAddress: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  defaultFromDisplayName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  smtpUseDefaultCredentials: new FormControl(false, { nonNullable: true }),
}

export const emailSettingsFormDefaults = {
  createFormPropsTop: CREATE_FORM_PROPS_TOP,
  createFormPropsBotton: CREATE_FORM_PROPS_BOTTOM
};

export const emailSettingsFormControls = {
  createFormProps: CREATE_FORM_CONTROLS
}
