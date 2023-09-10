import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[changedColor]'
})
export class ChangeBackgroundDirective {

  constructor(private _ElementRef: ElementRef) {
    _ElementRef.nativeElement.style.backgroundColor = '#d1a1a1';
  }

}
