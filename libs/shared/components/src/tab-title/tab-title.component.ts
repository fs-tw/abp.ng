import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fs-tab-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span>
      {{ title() }}
      @if (isDirty()) {
        <span class="dirty-indicator">*</span>
      }
    </span>
  `,
  styles: [
    `
      .dirty-indicator {
        color: #ff4d4f;
        margin-left: 4px;
      }
    `,
  ],
})
export class TabTitleComponent {
  title = input.required<string>();
  isDirty = input<boolean>(false);
}
