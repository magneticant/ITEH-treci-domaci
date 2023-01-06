import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from './doctor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  heading: string = 'Prijava pregleda';

  constructor(private doctorService:DoctorService, private appointmentService:AppointmentService) {

  }

  numbers:number[] = [1,2,3,4,5,6]
  search = "";
  
  @Output() appointmentMade = new EventEmitter<number>();
  @Output() appointmentCanceled = new EventEmitter<number>();
  @Input() doctors: Doctor[];

  ngOnInit(): void {
    this.doctors = this.doctorService.doctors;
  }

  onAddAppointment(){
    this.appointmentMade.emit();
  }

  onRemoveAppointment(){
    this.appointmentCanceled.emit();
  }

  addDoctor(doctor:Doctor){
    this.appointmentService.addDoctor(doctor);
  }

  removeDoctor(doctor:Doctor){
    this.appointmentService.removeDoctor(doctor);
  }
}
