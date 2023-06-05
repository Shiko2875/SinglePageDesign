import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) { 
  }
  
  @HostListener('click')
  nextFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1].children[0];
    var slide = element.getElementsByClassName("slide")
    element.append(slide[0]);
  }
}
