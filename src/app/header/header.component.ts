import { Component, Input } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() appointments: number = 0;

  constructor(private appointmentService:AppointmentService){
    appointmentService.arrayLength.subscribe(length=> (this.appointments = length));
  }
}
