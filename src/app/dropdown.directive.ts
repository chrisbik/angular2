import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened() {
    return this.isOpened;
  }

  //Directive for openning the dropdownbox on the right side in navbar
  @HostListener('mouseenter') open() {
    this.isOpened = true;
  }
  
  //Directive for closing the dropdownbox on the right side in navbar
  @HostListener('mouseleave') close() {
    this.isOpened = false;
  }
private isOpened = false;
}
