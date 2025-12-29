import {
  Component,
  ContentChild,
  EventEmitter,
  Output,
  input,
  inject,
  Injector,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@abp/ng.core';
import {
  EXTENSIONS_IDENTIFIER,
  ExtensionsService,
  EntityAction,
} from '@abp/ng.components/extensible';

// ng-zorro
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';

// CDK
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataSource } from '@angular/cdk/collections';

// Types
import { SplitViewListItemConfig, DetailHeaderConfig } from './split-view.types';
import { SplitViewFilterDirective } from './split-view.directives';

@Component({
  selector: 'fs-split-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    // ng-zorro
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
    NzEmptyModule,
    NzBadgeModule,
    NzPopoverModule,
    NzDividerModule,
    NzToolTipModule,
    NzDropDownModule,
    NzMenuModule,
    // CDK
    ScrollingModule,
  ],
  template: `
    <div class="split-view-container" [style.--left-panel-width]="leftPanelWidth() + 'px'">
      <!-- Left Panel -->
      <div class="left-panel">
        <!-- Header Area -->
        <div class="panel-header">
          <!-- Search Row -->
          <div class="search-row">
            <nz-input-group [nzPrefix]="prefixIconSearch" class="search-input">
              <input
                type="text"
                nz-input
                [placeholder]="'AbpUi::PagerSearch' | abpLocalization"
                [ngModel]="searchText()"
                (ngModelChange)="onSearchTextChange($event)"
              />
            </nz-input-group>
            <ng-template #prefixIconSearch>
              <span nz-icon nzType="search"></span>
            </ng-template>

            <!-- Filter Button -->
            @if (hasFilter() && filterDirective) {
              <button
                nz-button
                nz-popover
                nzPopoverTrigger="click"
                [nzPopoverContent]="filterPopoverContent"
                nzPopoverPlacement="bottomRight"
                [(nzPopoverVisible)]="isFilterPopoverVisible"
                class="filter-btn"
              >
                <span nz-icon nzType="filter"></span>
                @if (filterBadgeCount() > 0) {
                  <nz-badge [nzCount]="filterBadgeCount()" nzSize="small"></nz-badge>
                }
              </button>
              <ng-template #filterPopoverContent>
                <ng-container *ngTemplateOutlet="filterDirective.templateRef"></ng-container>
              </ng-template>
            }
          </div>

          <!-- Actions Area -->
          <ng-content select="[fsSplitViewActions]"></ng-content>
        </div>

        <!-- List Area -->
        <div class="list-section">
          <cdk-virtual-scroll-viewport
            [itemSize]="itemSize()"
            class="virtual-scroll-viewport"
          >
            <div
              *cdkVirtualFor="let item of dataSource(); trackBy: trackByFn"
              class="list-item"
              [class.selected]="selectedId() === getItemId(item)"
              (click)="item && onItemClick(item)"
            >
              @if (item) {
                <!-- Default Template: use listItemConfig -->
                <div class="item-content">
                  <div class="item-title">{{ getItemTitle(item) }}</div>
                  @if (getItemSubtitle(item); as subtitle) {
                    <div class="item-subtitle">{{ subtitle }}</div>
                  }
                </div>
                @if (getItemBadge(item); as badge) {
                  <nz-badge [nzCount]="badge" [nzStyle]="{ backgroundColor: '#f5222d' }"></nz-badge>
                }
                <!-- Entity Actions -->
                <div class="item-actions">
                  @if (getVisibleActionsForItem(item).length <= maxVisibleActions()) {
                    <!-- Show all actions as buttons -->
                    @for (action of getVisibleActionsForItem(item); track action.text) {
                      <button
                        nz-button
                        nzType="text"
                        nzSize="small"
                        [nzDanger]="action.icon === 'delete'"
                        nz-tooltip
                        [nzTooltipTitle]="action.text | abpLocalization"
                        (click)="executeActionForItem(action, item, $event)"
                      >
                        <span nz-icon [nzType]="action.icon"></span>
                      </button>
                    }
                  } @else {
                    <!-- Show dropdown menu for many actions -->
                    <button
                      nz-button
                      nzType="text"
                      nzSize="small"
                      nz-dropdown
                      [nzDropdownMenu]="actionsMenu"
                      nzTrigger="click"
                      (click)="$event.stopPropagation()"
                    >
                      <span nz-icon nzType="more"></span>
                    </button>
                    <nz-dropdown-menu #actionsMenu="nzDropdownMenu">
                      <ul nz-menu>
                        @for (action of getVisibleActionsForItem(item); track action.text) {
                          <li
                            nz-menu-item
                            [nzDanger]="action.icon === 'delete'"
                            (click)="executeActionForItem(action, item, $event)"
                          >
                            <span nz-icon [nzType]="action.icon" class="action-icon"></span>
                            <span>{{ action.text | abpLocalization }}</span>
                          </li>
                        }
                      </ul>
                    </nz-dropdown-menu>
                  }
                </div>
              } @else {
                <!-- Placeholder -->
                <div class="item-placeholder">
                  <nz-spin nzSimple nzSize="small"></nz-spin>
                </div>
              }
            </div>
          </cdk-virtual-scroll-viewport>

          <!-- Loading -->
          @if (loading() && dataSourceLength() === 0) {
            <div class="loading-indicator">
              <nz-spin nzSimple></nz-spin>
            </div>
          }

          <!-- No Data -->
          @if (!loading() && dataSourceLength() === 0) {
            <nz-empty [nzNotFoundContent]="'AbpUi::NoDataAvailable' | abpLocalization"></nz-empty>
          }
        </div>
      </div>

      <!-- Right Panel -->
      <div class="right-panel">
        @if (selectedId()) {
          <div class="detail-container">
            <!-- Detail Content -->
            <ng-content select="[fsSplitViewDetail]"></ng-content>
          </div>
        } @else {
          <div class="no-selection">
            <nz-empty [nzNotFoundContent]="noSelectionText()"></nz-empty>
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./split-view.component.scss'],
})
export class SplitViewComponent<T> {
  // ===== Injected Services =====
  readonly #injector = inject(Injector);
  readonly #extensions = inject(ExtensionsService, { optional: true });
  readonly #extensionsIdentifier = inject(EXTENSIONS_IDENTIFIER, { optional: true });

  // ===== Inputs =====
  /** DataSource for virtual scroll */
  dataSource = input.required<DataSource<T | null>>();

  /** Currently selected ID */
  selectedId = input<string | null>(null);

  /** Search text */
  searchText = input<string>('');

  /** Loading state */
  loading = input<boolean>(false);

  /** DataSource length */
  dataSourceLength = input<number>(0);

  /** List item configuration (using function resolver) */
  listItemConfig = input<SplitViewListItemConfig<T> | null>(null);

  /** Item height */
  itemSize = input<number>(48);

  /** Left panel width */
  leftPanelWidth = input<number>(350);

  /** ID field name */
  idField = input<string>('id');

  /** Filter badge count */
  filterBadgeCount = input<number>(0);

  /** Has filter */
  hasFilter = input<boolean>(true);

  /** No selection text */
  noSelectionText = input<string>('Please select an item');

  /** Detail Header configuration */
  detailHeaderConfig = input<DetailHeaderConfig<T> | null>(null);

  /** Selected item (for detail header) */
  selectedItem = input<T | null>(null);

  /** Max visible actions before showing dropdown (default: 3) */
  maxVisibleActions = input<number>(3);

  // ===== Outputs =====
  @Output() itemSelect = new EventEmitter<T>();
  @Output() searchChange = new EventEmitter<string>();

  // ===== Content Children =====
  @ContentChild(SplitViewFilterDirective) filterDirective?: SplitViewFilterDirective;

  // ===== Local State =====
  isFilterPopoverVisible = false;

  // ===== Methods =====
  onSearchTextChange(text: string) {
    this.searchChange.emit(text);
  }

  onItemClick(item: T) {
    this.itemSelect.emit(item);
  }

  getItemId(item: T | null): string | null {
    if (!item) return null;
    return (item as any)[this.idField()] ?? null;
  }

  getItemTitle(item: T): string {
    const config = this.listItemConfig();
    if (config?.title) {
      return config.title(item);
    }
    return '';
  }

  getItemSubtitle(item: T): string | undefined {
    const config = this.listItemConfig();
    if (config?.subtitle) {
      return config.subtitle(item);
    }
    return undefined;
  }

  getItemBadge(item: T): string | null | undefined {
    const config = this.listItemConfig();
    if (config?.badge) {
      return config.badge(item);
    }
    return undefined;
  }

  trackByFn = (index: number, item: T | null): string => {
    if (!item) return `placeholder-${index}`;
    return this.getItemId(item) ?? `item-${index}`;
  };

  // ===== Detail Header Methods =====
  getDetailTitle(): string {
    const config = this.detailHeaderConfig();
    const item = this.selectedItem();
    if (config?.title && item) {
      return config.title(item);
    }
    return '';
  }

  // ===== Entity Actions Methods =====
  /** Get visible actions for specified item */
  getVisibleActionsForItem(item: T): EntityAction<T>[] {
    if (!this.#extensions || !this.#extensionsIdentifier) return [];

    const actionList = (this.#extensions as any)['entityActions'].get(this.#extensionsIdentifier);
    if (!actionList?.actions) return [];

    return actionList.actions.toArray().filter((action: EntityAction<T>) => {
      if (!action.visible) return true;
      return action.visible({ record: item, getInjected: this.#getInjected });
    });
  }

  /** Execute action for specified item */
  executeActionForItem(action: EntityAction<T>, item: T, event: Event): void {
    event.stopPropagation(); // Prevent item click
    if (!action.action) return;
    action.action({ record: item, getInjected: this.#getInjected });
  }

  /** Helper: get injected service */
  #getInjected = <S>(token: any): S => this.#injector.get(token);
}
