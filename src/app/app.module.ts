import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Layout1Component } from './layout1/layout1.component';
import { GridbasicsComponent } from './gridbasics/gridbasics.component';

@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    GridbasicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
