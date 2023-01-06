import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Doctor } from '../home/doctor';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit{
  appointmentArray: Doctor[] =[];
  isEmpty: boolean = true;

  constructor(private appointmentService:AppointmentService){}

  ngOnInit(): void {
    this.appointmentArray = this.appointmentService.appointmentArray;
  }

  add(item:Doctor){
    this.appointmentService.addDoctor(item);
  }
  subtract(item:Doctor){
    this.appointmentService.removeDoctor(item);
  }
}
