import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CoreModule } from '@abp/ng.core';
import { SelectedStore } from './unlimited-select.store';


@Component({
  selector: 'app-unlimited-select',
  standalone: true,
  imports: [CoreModule, CommonModule, FormsModule, NzSelectModule],
  templateUrl: './unlimited-select.component.html',
  providers: [SelectedStore],
})
export class UnlimitedSelectComponent {

  selectedStore = inject(SelectedStore);

  nzFilterOption = (): boolean => true;

  //請換成有效的id
  testId = '54390af2-281e-a583-8183-3a127c9009eb';

  constructor() {
    this.selectedStore.get(this.testId);
  }
}
