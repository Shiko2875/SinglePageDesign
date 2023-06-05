import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  prevFunc(){
    var element = this.el.nativeElement.parentElement.parentElement.children[1].children[0];
    var slide = element.getElementsByClassName("slide")
    element.prepend(slide[slide.length - 1]);
  }
}
