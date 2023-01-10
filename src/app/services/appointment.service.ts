import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from '../home/doctor';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointmentArray: Doctor[] = [];
  arrayLength = new BehaviorSubject<number>(0);
  constructor() { }

  addDoctor(doctor:Doctor){
    // alert(doctor.name);
    const existingDoctor = this.appointmentArray.find(d=> d.name == doctor.name);

    if(!existingDoctor){
      // doctor.appointmentCount++;
      this.appointmentArray.push(doctor);
    }
    doctor.appointmentCount++;

    this.arrayLength.next(this.appointmentArray.reduce((a,b)=>a+b.appointmentCount,0));
   
  }

  removeDoctor(doctor:Doctor){
  const index = this.appointmentArray.findIndex(d=> d.name == doctor.name);
  // alert("nadjen je doktor sa ovim indseksom.");
    if(index <0) return;

    this.appointmentArray[index].appointmentCount--;
    
  this.appointmentArray.splice(index,1);
      

      
    
  }
}
