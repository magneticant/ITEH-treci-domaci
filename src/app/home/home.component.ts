import { Component } from '@angular/core';
import { Doctor } from './doctor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  heading: string = 'Prijava pregleda';

  products: Doctor[] = [
    {
      name:'Marija Stekic',
      room: 403,
      description:
        'Marija Stekic je jedna od nasih najboljih doktorki, ima desetogodisnje iskustvo u radu sa onima kojima je neophodna intenzivna nega.',
      picture:'../../assets/images/doctor2.jpg',
      department:'Intenzivna nega',
    },
    {
      name:'Marko Jovic',
      room: 100,
      description:
        'Marko Jovic je nas vrsni diplomirani radiolog. Svoju diplomu je dobio na fakultetu medicine, univerzitet u Beogradu.',
      picture:'../../assets/images/doctor3.jpg',
      department:'Radiologija',
    },
    {
      name:'Petar Petrovic',
      room: 93,
      description:
        'Petar Petrovic je logoped, strucan za rad sa decom koje imaju govorne mane.',
      picture:'../../assets/images/doctor4.jpg',
      department:'Logopedija',
    },
    {
      name:'Ana Marinovic',
      room: 133,
      description:
        'Ana Marinovic je nas hirurg sa torakalnog odeljenja.',
      picture:'../../assets/images/doctor5.jpg',
      department:'Torakalno',
    },
    {
      name:'Pavle Jokic',
      room: 13,
      description:
        'Pavle Jokic je nas oftalmolog. Bavi se neintruzivnim lecenjem miopije i drugih ocnih problema.',
      picture:'../../assets/images/doctor6.jpg',
      department:'Oftalmologija',
    },
  ];

  numbers:number[] = [1,2,3,4,5,6]
  

}
