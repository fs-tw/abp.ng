import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';

const routes: Routes = [
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [{ path: '', component: HomeComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
