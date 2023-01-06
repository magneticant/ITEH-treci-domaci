import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // {path: 'appointment', component:AppointmentComponent},
  {path: 'appointment', children:[
    {path: 'add', component:DoctorComponent},
    {path: '', component:AppointmentComponent},
  ]},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'doctor/:id', component:DoctorComponent},
  {path: '**', component:NotFoundComponent}, //wildcard putanja
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
