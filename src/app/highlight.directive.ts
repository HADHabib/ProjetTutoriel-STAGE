import { Renderer2, Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() data:any;
    letters = '0123456789ABCDEF';
    color = '#';
    constructor(private el: ElementRef, private renderer: Renderer2) {
  
  }
  ngOnInit(){

    this.data.color=this.getColor(this.data.temp_celcius);
    this.highlight(this.data.color);
  }
  getRandomColor() {
    this.color = "#";
    for (var i = 0; i < 6; i++) {

      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }
  getColor(data : number){
    this.color = "#";
    let tempValue = Number(data);

      if(tempValue<-10){
          this.color+="353AE7";

      }
      else if( tempValue>=-10 && tempValue <5){
        this.color+="B3FDFB";
    
      }
      else if (tempValue>=5 && tempValue <15){
        this.color+="EF9290";

      }
      else if (tempValue>=15 && tempValue <25){
        this.color+="FFAC2B";
     
      }
      else if (tempValue>=25){
        this.color+="FFE000";

      }
      else{
        this.color+="000000";
      
      }

  
    return this.color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.getRandomColor());
    this.renderer.setStyle(this.el.nativeElement,'border',"5px outset black")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.data.color);
    this.renderer.setStyle(this.el.nativeElement,'border',"0px")
  }

  private highlight(color : string) {

    this.renderer.setStyle(this.el.nativeElement, 'background', color); 
  }
}
