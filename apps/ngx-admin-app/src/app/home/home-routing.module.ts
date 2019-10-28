import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApplicationLayoutComponent } from '@fs/ngx-admin/basic';

const routes: Routes = [
    {
        component: ApplicationLayoutComponent,
        path: '',
        children: [{ path: '', component: HomeComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
