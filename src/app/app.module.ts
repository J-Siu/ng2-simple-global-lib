import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';

import { SimpleGlobal } from 'ng2-simple-global';

@NgModule({
  declarations: [
    AppComponent,
		Com1Component,
		Com2Component
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
	providers: [SimpleGlobal],
  bootstrap: [AppComponent]
})
export class AppModule { }
