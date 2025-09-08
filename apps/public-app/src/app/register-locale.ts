import { registerLocaleData } from '@angular/common';

export function registerLocaleForEsBuild() {
  return async (locale: string): Promise<unknown> => {
    if (locale === 'zh-Hant') {
      const module = await import('@angular/common/locales/zh-Hant');
      registerLocaleData(module.default, 'zh-Hant');
      return module;
    }

    if (locale === 'en') {
      const module = await import('@angular/common/locales/en');
      registerLocaleData(module.default, 'en');
      return module;
    }

    // 預設載入 zh-Hant
    const module = await import('@angular/common/locales/zh-Hant');
    registerLocaleData(module.default, 'zh-Hant');
    return module;
  };
}
