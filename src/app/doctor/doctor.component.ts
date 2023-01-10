import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../home/doctor';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent {
  buttonClick:boolean = true;
  isShown:boolean = true;
  @Input()doctor: Doctor;
  appNumber:number = 0;
  @Output() appointmentMade = new EventEmitter<number>();
  @Output() appointmentCanceled = new EventEmitter<number>();
  isAppointmentPage: boolean;
  startingNUmber: number;

  constructor(private router:Router, private appointmentService:AppointmentService){
    // if(this.router.url === '/appointment')
    // this.isAppointmentPage = true;
  }
  
  ngOnInit(): void{
    this.startingNUmber = this.doctor.appointmentCount;

    if(this.router.url === '/appointment')
    this.isAppointmentPage = true;
    else
    this.isAppointmentPage = false;
  }

  onAddAppointment(){
    if(this.doctor.available == true){
      this.doctor.available = false;
      this.appNumber++;
    
      this.appointmentMade.emit(this.appNumber);
      alert("Pregled uspesno zakazan.")
    }
    else{
      alert("Neuspesno zakazivanje. Doktor nije dostupan.")
    }
  }

  onRemoveAppointment(){
    if(this.doctor.available == false){
      this.doctor.available = true;
      if(this.appNumber > 0){
      this.appNumber--;
      }
      
      
      this.appointmentService.removeDoctor(this.doctor);
      alert("Pregled uspesno otkazan.")
      
    }else{
      alert("Nema zakazanog pregleda.")
    }
  }
}
