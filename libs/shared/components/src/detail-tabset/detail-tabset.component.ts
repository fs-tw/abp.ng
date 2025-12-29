import {
  Component,
  input,
  signal,
  computed,
  TemplateRef,
  contentChildren,
  viewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { TabTitleComponent } from '../tab-title';

/** Signal 或函式，回傳 boolean */
export type BooleanGetter = () => boolean;

/**
 * Tab 內容 Component
 * 用於定義單個 Tab 的配置和內容
 *
 * 使用方式：
 * <fs-detail-tab title="Members::BasicInfo" [isDirty]="store.tab1IsDirty" (save)="saveTab1()">
 *   <app-member-form />
 * </fs-detail-tab>
 */
@Component({
  selector: 'fs-detail-tab',
  standalone: true,
  template: `
    <ng-template #contentTpl>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class DetailTabComponent {
  /** Tab 標題 (localization key) */
  title = input.required<string>();
  /** 是否有未儲存變更 */
  isDirty = input<BooleanGetter>();
  /** 是否正在儲存 */
  saving = input<BooleanGetter>();
  /** 是否正在載入 */
  loading = input<BooleanGetter>();
  /** 額外按鈕模板 */
  extraActions = input<TemplateRef<void>>();

  /** 儲存事件 (有提供則顯示儲存按鈕) */
  @Output() save = new EventEmitter<void>();

  /** 內容模板 */
  contentTpl = viewChild.required<TemplateRef<void>>('contentTpl');

  /** 是否有 save handler */
  get hasSaveHandler(): boolean {
    return this.save.observed;
  }
}

@Component({
  selector: 'fs-detail-tabset',
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    NzTabsModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
    TabTitleComponent,
  ],
  template: `
    <nz-tabset
      [nzSelectedIndex]="selectedIndex()"
      (nzSelectedIndexChange)="onTabChange($event)"
      [nzTabBarExtraContent]="tabBarExtra"
    >
      <ng-template #tabBarExtra>
        <div class="tab-bar-actions">
          <!-- 額外按鈕 -->
          @if (currentTab()?.extraActions?.()) {
            <ng-container *ngTemplateOutlet="currentTab()!.extraActions()!" />
          }

          <!-- 儲存按鈕 (只在有 save handler 時顯示) -->
          @if (currentTab()?.hasSaveHandler) {
            <button
              nz-button
              nzType="primary"
              nzSize="small"
              [disabled]="!currentIsDirty()"
              [nzLoading]="currentSaving()"
              (click)="currentTab()!.save.emit()"
            >
              <span nz-icon nzType="save"></span>
              {{ 'AbpUi::Save' | abpLocalization }}
            </button>
          }
        </div>
      </ng-template>

      <!-- 動態產生 Tab -->
      @for (tab of tabs(); track $index) {
        <nz-tab [nzTitle]="tabTitleTpl">
          <ng-template #tabTitleTpl>
            <fs-tab-title
              [title]="tab.title() | abpLocalization"
              [isDirty]="tab.isDirty?.()?.() ?? false"
            />
          </ng-template>

          <nz-spin [nzSpinning]="tab.loading?.()?.() ?? false">
            <ng-container *ngTemplateOutlet="tab.contentTpl()" />
          </nz-spin>
        </nz-tab>
      }
    </nz-tabset>
  `,
  styles: [`
    .tab-bar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `],
})
export class DetailTabsetComponent {
  /** 透過 content projection 取得所有 Tab */
  tabs = contentChildren(DetailTabComponent);

  /** 當前選中的 Tab 索引 (內部管理) */
  selectedIndex = signal<number>(0);

  /** Tab 切換事件 */
  @Output() tabChange = new EventEmitter<number>();

  /** 當前選中的 Tab */
  currentTab = computed(() => this.tabs()[this.selectedIndex()]);

  /** 當前 Tab 的 isDirty 值 */
  currentIsDirty = computed(() => this.currentTab()?.isDirty?.()?.() ?? false);

  /** 當前 Tab 的 saving 值 */
  currentSaving = computed(() => this.currentTab()?.saving?.()?.() ?? false);

  /** 處理 Tab 切換 */
  onTabChange(index: number): void {
    this.selectedIndex.set(index);
    this.tabChange.emit(index);
  }
}
