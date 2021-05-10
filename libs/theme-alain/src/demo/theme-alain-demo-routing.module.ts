import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityBaseComponent } from './components/entity-base.component';
import { SelectComponent } from './components/select.component';
import { IdentityExtensionsGuard } from '@abp/ng.identity';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'entity-base'
  },
  { path: '', component: SelectComponent },
  { path: 'entity-base', component: EntityBaseComponent,canActivate:[IdentityExtensionsGuard] },
  { path: 'select', component: SelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[IdentityExtensionsGuard]
})
export class ThemeAlainDemoRoutingModule {}
