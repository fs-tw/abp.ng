import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },//default
  { path: 'test',
    component: LayoutDefaultComponent,
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  }
];
@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

  ]
})
export class MainModule { }
