import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    SearchuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
