import { Component, Input } from '@angular/core';
import { Doctor } from '../home/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent {
  buttonClick:boolean = true;
  isShown:boolean = false;
  @Input()doctors: Doctor;

}
