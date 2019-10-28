/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
        //ThemeModule.forRoot(),

        //NbSidebarModule.forRoot(),
        //NbMenuModule.forRoot(),
        //NbDatepickerModule.forRoot(),
        //NbDialogModule.forRoot(),
        //NbWindowModule.forRoot(),
        //NbToastrModule.forRoot(),
        //NbChatModule.forRoot({
        //  messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
        //}),
        //CoreModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
