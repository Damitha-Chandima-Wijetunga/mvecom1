import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material-module';

import { HomeMasterPageComponent } from './master-pages/home-master-page/home-master-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMasterPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'mvecom1' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
