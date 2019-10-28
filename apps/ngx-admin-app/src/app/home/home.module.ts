import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
//import { ApplicationLayoutComponent } from './application-layout/application-layout.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule { }
