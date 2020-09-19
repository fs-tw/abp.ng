import { CodesDto } from './Dtos/codes-dto';

export class CodesWithSettingsOutput {
  codes: CodesDto;
  settingValues: [
      {
          name: string,
          value: string
      }
  ];
  availableSettingsDefinitions: [
    {
        name: string,
        displayName: string,
        description: string,
        defaultValue: string,
        isVisibleToClients: boolean,
        isInherited: boolean,
        providers: string[],
        isEncrypted: boolean,
        value: string,
        properties: {}
    }
  ]

  constructor(initialValues: Partial<CodesWithSettingsOutput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
  