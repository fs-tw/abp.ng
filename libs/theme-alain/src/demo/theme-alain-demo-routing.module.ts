import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './components/select.component';
import { IdentityExtensionsGuard,IdentityModule } from '@abp/ng.identity';
//import { IdentityExtensionsGuard } from '@abp/ng.identity/config';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'select',
  },
  // {
  //   path: 'page-demo',
  //   component: PageDemoComponent,
  //   canActivate: [IdentityExtensionsGuard],
  // },
  // { path: '', component: EntityBaseComponent },
  //{ path: 'entity-base', component: EntityBaseComponent,canActivate:[IdentityExtensionsGuard] },
  { path: 'select', component: SelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeAlainDemoRoutingModule {}
