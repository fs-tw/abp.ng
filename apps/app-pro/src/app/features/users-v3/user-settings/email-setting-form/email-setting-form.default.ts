import { FormControl, Validators } from '@angular/forms';
import { ePropType, FormProp } from '@abp/ng.components/extensible';
import { eEmailSettingFormNames, C, U } from './email-setting-form.types';
import { Controls } from '../../../../shared/types';

const resourceName = eEmailSettingFormNames.DefaultsResourceName;

export const CREATE_FORM_PROPS = FormProp.createMany<C>([
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
    id: 'defaultFromDisplayName',
    name: 'defaultFromDisplayName',
    type: ePropType.String,
    displayName: `${resourceName}::DefaultFromDisplayName`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
]);

export const EDIT_FORM_PROPS = FormProp.createMany<U>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    //validators: () => [Validators.required],
  },
]);

const CREATE_FORM_CONTROLS: Controls<C> = {
  smtpHost: new FormControl('',[Validators.required]),
  smtpPort: new FormControl(0,[Validators.required]),
  smtpUserName: new FormControl(''),
  smtpPassword: new FormControl(''),
  smtpDomain: new FormControl(''),
  smtpEnableSsl: new FormControl(false),
  smtpUseDefaultCredentials: new FormControl(false),
  defaultFromAddress: new FormControl(''),
  defaultFromDisplayName: new FormControl(''),
};

export const emailSettingFormDefaults = {
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};

export const emailSettingFormControls = {
  createFormProps: CREATE_FORM_CONTROLS,
};
