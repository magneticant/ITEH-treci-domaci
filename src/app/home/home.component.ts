import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doctor } from './doctor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {
  heading: string = 'Prijava pregleda';

  

  numbers:number[] = [1,2,3,4,5,6]
  search = "";
  
  @Output() appointmentMade = new EventEmitter<number>();
  @Output() appointmentCanceled = new EventEmitter<number>();
  @Input() doctors: Doctor[];
  ngOnInit(): void {
    this.doctors = this.doctors;
  }

  onAddAppointment(){
    this.appointmentMade.emit();
  }

  onRemoveAppointment(){
    this.appointmentCanceled.emit();
  }
}
