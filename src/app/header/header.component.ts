import { Component, Input } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() appointments: number = 0;
  isAppointmentPage: boolean = true;

  ngOnInit(): void{
  

    if(this.router.url === '/appointment')
    this.isAppointmentPage = true;
    else
    this.isAppointmentPage = false;
  }
  constructor(private router:Router,private appointmentService:AppointmentService){
    this.router.events.subscribe((event: Event) => {
      
      if (event instanceof NavigationEnd) {
          
          if(this.router.url === '/appointment')
              this.isAppointmentPage = true;
           else
              this.isAppointmentPage = false;
      }

     
  });
    appointmentService.arrayLength.subscribe(length=> (this.appointments = length));
  }
}
