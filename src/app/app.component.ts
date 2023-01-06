import { Component, EventEmitter, Output } from '@angular/core';
import { Doctor } from './home/doctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITEH-treci-domaci';
  @Output() appointmentMade = new EventEmitter<number>();
  @Output() appointmentCanceled = new EventEmitter<number>();
  appNumber: number = 0;

  // doctors: Doctor[] = [
  //   {
  //     name:'Marija Stekic',
  //     room: 403,
  //     description:
  //       'Marija Stekic je jedna od nasih najboljih doktorki, ima desetogodisnje iskustvo u radu sa onima kojima je neophodna intenzivna nega.',
  //     picture:'../../assets/images/doctor2.jpg',
  //     department:'Intenzivna nega',
  //     available:false,
  //   },
  //   {
  //     name:'Marko Jovic',
  //     room: 100,
  //     description:
  //       'Marko Jovic je nas vrsni diplomirani radiolog. Svoju diplomu je dobio na fakultetu medicine, univerzitet u Beogradu.',
  //     picture:'../../assets/images/doctor3.jpg',
  //     department:'Radiologija',
  //     available:false,
  //   },
  //   {
  //     name:'Petar Petrovic',
  //     room: 93,
  //     description:
  //       'Petar Petrovic je logoped, strucan za rad sa decom koje imaju govorne mane.',
  //     picture:'../../assets/images/doctor4.jpg',
  //     department:'Logopedija',
  //     available:true,
  //   },
  //   {
  //     name:'Ana Marinovic',
  //     room: 133,
  //     description:
  //       'Ana Marinovic je nas hirurg sa torakalnog odeljenja.',
  //     picture:'../../assets/images/doctor5.jpg',
  //     department:'Torakalno',
  //     available:true,
  //   },
  //   {
  //     name:'Pavle Jokic',
  //     room: 13,
  //     description:
  //       'Pavle Jokic je nas oftalmolog. Bavi se neintruzivnim lecenjem miopije i drugih ocnih problema.',
  //     picture:'../../assets/images/doctor6.jpg',
  //     department:'Oftalmologija',
  //     available:true,
  //   },
  // ];

  onAddAppointment() {
    this.appointmentMade.emit();
    this.appNumber++;
    // alert("COMPONENT: app number je " + this.appNumber)
  }

  onRemoveAppointment() {
    this.appointmentCanceled.emit();
    if (this.appNumber>0) this.appNumber--;
    // alert("COMPONENT: app number je " + this.appNumber)
  }

}
