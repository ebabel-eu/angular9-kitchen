import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.addClass(this.elementRef.nativeElement, 'show');
  }

  ngOnInit() {}

  @HostListener('click', ['$event']) click(e: Event) {
    e.preventDefault();
    this.elementRef.nativeElement.parentNode.className = (this.elementRef.nativeElement.parentNode.className === 'dropdown') ? 'dropdown show' : 'dropdown';
    this.elementRef.nativeElement.nextSibling.className = (this.elementRef.nativeElement.nextSibling.className === 'dropdown-menu') ? 'dropdown-menu show' : 'dropdown-menu';
  }
}