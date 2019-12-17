import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // children: [
    //   {
    //     path: '',
    //     component: MainComponent,
    //     data: { requiredPolicy: 'AbpIdentity.Roles' },
    //   }
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
