import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBrownEl]'
})
export class BrownElDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) {

   }

ngOnInit(): void {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'sandybrown');
  this.renderer.setStyle(this.elRef.nativeElement, 'font-family', 'Trebuchet MS');
  this.renderer.setStyle(this.elRef.nativeElement, 'font-size', 'large');
  this.renderer.setStyle(this.elRef.nativeElement, 'border-radius' , '5px');
  this.renderer.setStyle(this.elRef.nativeElement, 'padding' , '5px');
}

}
