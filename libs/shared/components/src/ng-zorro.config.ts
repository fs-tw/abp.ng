// ==================== ng-zorro Configuration ====================
// 統一管理 ng-zorro 的國際化和圖示配置

import { zh_TW, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { LOCALE_ID } from '@angular/core';

// ng-zorro 圖示導入 - shared lib 使用的圖示
import {
  // Split View 組件圖示
  SearchOutline,
  FilterOutline,
  MoreOutline,
  DeleteOutline,
  EditOutline,
  PlusOutline,

  // Entity Selector 組件圖示
  DownOutline,
  CheckOutline,
  CloseOutline,

  // Tab / Navigation 圖示
  LeftOutline,
  RightOutline,
  HomeOutline,

  // 狀態圖示
  LoadingOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  InfoCircleOutline,
  CloseCircleOutline,

  // 常用操作圖示
  SaveOutline,
  ReloadOutline,
  SettingOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

// Angular locale 註冊
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// 註冊繁體中文 locale
registerLocaleData(zh, 'zh-TW');

/**
 * shared lib 預設註冊的圖示
 * 包含 split-view, entity-selector, tab 等組件用到的圖示
 */
const SHARED_ICONS = [
  // Split View 組件圖示
  SearchOutline,
  FilterOutline,
  MoreOutline,
  DeleteOutline,
  EditOutline,
  PlusOutline,

  // Entity Selector 組件圖示
  DownOutline,
  CheckOutline,
  CloseOutline,

  // Tab / Navigation 圖示
  LeftOutline,
  RightOutline,
  HomeOutline,

  // 狀態圖示
  LoadingOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  InfoCircleOutline,
  CloseCircleOutline,

  // 常用操作圖示
  SaveOutline,
  ReloadOutline,
  SettingOutline,
  UserOutline,
];

/**
 * 提供 ng-zorro 完整配置的 provider 陣列
 * 包含國際化、圖示和 Angular locale 設定
 *
 * @example
 * ```typescript
 * // app.config.ts
 * import { NG_ZORRO_PROVIDERS } from '@fs-tw/ng.shared';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     ...NG_ZORRO_PROVIDERS,
 *     // 其他 providers...
 *   ],
 * };
 * ```
 */
export const NG_ZORRO_PROVIDERS = [
  // ng-zorro 國際化設定
  provideNzI18n(zh_TW),

  // ng-zorro 圖示配置 (shared lib 預設圖示)
  provideNzIcons(SHARED_ICONS),

  // Angular locale 設定
  { provide: LOCALE_ID, useValue: 'zh-TW' },
];

/**
 * 建立自訂 ng-zorro providers
 * 可以額外註冊應用程式需要的圖示
 *
 * @param additionalIcons - 額外的圖示陣列
 * @returns Provider 陣列
 *
 * @example
 * ```typescript
 * // app.config.ts
 * import { createNzProviders } from '@fs-tw/ng.shared';
 * import { HeartOutline, StarOutline } from '@ant-design/icons-angular/icons';
 *
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     ...createNzProviders([HeartOutline, StarOutline]),
 *     // 其他 providers...
 *   ],
 * };
 * ```
 */
export function createNzProviders(additionalIcons: any[] = []) {
  return [
    provideNzI18n(zh_TW),
    provideNzIcons([...SHARED_ICONS, ...additionalIcons]),
    { provide: LOCALE_ID, useValue: 'zh-TW' },
  ];
}

/**
 * shared lib 預設註冊的圖示名稱列表 (用於開發參考)
 */
export const SHARED_ICON_NAMES = {
  // Split View 組件圖示
  search: 'search',
  filter: 'filter',
  more: 'more',
  delete: 'delete',
  edit: 'edit',
  plus: 'plus',

  // Entity Selector 組件圖示
  down: 'down',
  check: 'check',
  close: 'close',

  // Tab / Navigation 圖示
  left: 'left',
  right: 'right',
  home: 'home',

  // 狀態圖示
  loading: 'loading',
  'check-circle': 'check-circle',
  'exclamation-circle': 'exclamation-circle',
  'info-circle': 'info-circle',
  'close-circle': 'close-circle',

  // 常用操作圖示
  save: 'save',
  reload: 'reload',
  setting: 'setting',
  user: 'user',
} as const;

export type SharedIconType = typeof SHARED_ICON_NAMES[keyof typeof SHARED_ICON_NAMES];
