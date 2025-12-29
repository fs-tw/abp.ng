import {
  Component,
  input,
  model,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

export interface EntitySelectorItem {
  id: string;
  displayName: string;
}

/**
 * Entity Selector Component
 *
 * Generic entity selector:
 * - Accepts any entity list implementing EntitySelectorItem interface
 * - Uses model for two-way binding
 * - Built-in search and clear functionality
 * - Customizable placeholder and disabled state
 */
@Component({
  selector: 'fs-entity-selector',
  standalone: true,
  imports: [FormsModule, NzSelectModule, NzSpinModule, NzEmptyModule],
  template: `
    <nz-spin [nzSpinning]="loading()">
      <nz-select
        [ngModel]="selectedId()"
        (ngModelChange)="selectedId.set($event)"
        [nzPlaceHolder]="placeholder()"
        [nzAllowClear]="allowClear()"
        [nzShowSearch]="showSearch()"
        [nzFilterOption]="filterOption"
        [nzNotFoundContent]="notFoundTemplate"
        [nzDisabled]="disabled() || loading()"
        [nzSize]="size()"
        style="width: 100%"
        [ngModelOptions]="{standalone: true}"
      >
        @for (entity of entities(); track entity.id) {
        <nz-option [nzLabel]="entity.displayName" [nzValue]="entity.id">
        </nz-option>
        }
      </nz-select>
    </nz-spin>

    <ng-template #notFoundTemplate>
      <nz-empty [nzNotFoundImage]="'simple'" [nzNotFoundContent]="emptyText()">
      </nz-empty>
    </ng-template>
  `,
  styles: [],
})
export class EntitySelectorComponent {
  // Data inputs
  entities = input<EntitySelectorItem[]>([]);

  // Two-way binding for selected value
  selectedId = model<string | null>(null);

  // UI configuration inputs
  placeholder = input<string>('Please select');
  allowClear = input<boolean>(true);
  showSearch = input<boolean>(true);
  size = input<'large' | 'default' | 'small'>('default');
  emptyText = input<string>('No data available');

  // State inputs
  loading = input<boolean>(false);
  disabled = input<boolean>(false);

  /**
   * Filter option function
   */
  filterOption = (input: string, option: { nzValue: string }): boolean => {
    if (!input) return true;
    const entity = this.entities().find(e => e.id === option.nzValue);
    return entity?.displayName?.toLowerCase().includes(input.toLowerCase()) || false;
  };
}
