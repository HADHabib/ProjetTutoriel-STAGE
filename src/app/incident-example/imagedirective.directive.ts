import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImagedirective]'
})
export class ImagedirectiveDirective {
  @Input() imgUrl:string | undefined;
  constructor(private el: ElementRef) {
   }
   ngOnInit(){
    this.el.nativeElement.style.background=`linear-gradient(rgba(85, 85, 85, 0.7), rgba(85, 85, 85, 0.7)),url(${this.imgUrl})`;
   }

}
