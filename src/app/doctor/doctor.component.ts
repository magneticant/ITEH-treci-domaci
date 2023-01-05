import { Component, Input } from '@angular/core';
import { Doctor } from '../home/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent {
  buttonClick:boolean = true;
  isShown:boolean = true;
  @Input()doctor: Doctor;

  onAddAppointment(){
    if(this.doctor.available == true){
      this.doctor.available = false;
      alert("Pregled uspesno zakazan.")
    }
    else{
      alert("Neuspesno zakazivanje. Doktor nije dostupan.")
    }
  }

  onRemoveAppointment(){
    if(this.doctor.available == false){
      this.doctor.available = true;
      alert("Pregled uspesno otkazan.")
    }else{
      alert("Nema zakazanog pregleda.")
    }
  }
}
