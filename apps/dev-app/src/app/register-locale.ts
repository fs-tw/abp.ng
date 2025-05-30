import { differentLocales } from '@abp/ng.core';
import {
  RegisterLocaleData,
  defaultLocalErrorHandlerFn,
} from '@abp/ng.core/locale';

let localeMap = {} as { [key: string]: string };

export function registerLocale(
  {
    cultureNameLocaleFileMap = {},
    errorHandlerFn = defaultLocalErrorHandlerFn,
  } = {} as RegisterLocaleData
) {
  return (locale: string): Promise<any> => {
    localeMap = { ...differentLocales, ...cultureNameLocaleFileMap };
    return new Promise((resolve, reject) => {
      return import(
        `../../../../node_modules/@angular/common/locales/${
          localeMap[locale] || locale
        }.js`
      )
        .then((val) => {
          let module = val;
          while (module.default) {
            module = module.default;
          }
          resolve({ default: module });
        })
        .catch((error) => {
          errorHandlerFn({
            resolve,
            reject,
            error,
            locale,
          });
        });
    });
  };
}
