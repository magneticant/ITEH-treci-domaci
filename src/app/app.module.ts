import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BrownElDirective } from './directives/brown-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    BrownElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
