import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TestpageComponent } from './testpage/testpage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TestpageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: "", component: TestpageComponent
      }
    ])
  ]
})
export class TestModule { }
