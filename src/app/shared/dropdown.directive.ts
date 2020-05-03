import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  parentNode: HTMLElement;
  siblingNode: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    this.siblingNode = this.renderer.nextSibling(this.elementRef.nativeElement);
  }

  @HostListener('click', ['$event']) click(e: Event) {
    e.preventDefault();
    this.parentNode.className = (this.parentNode.className === 'dropdown') ? 'dropdown show' : 'dropdown';
    this.siblingNode.className = (this.siblingNode.className === 'dropdown-menu') ? 'dropdown-menu show' : 'dropdown-menu';
  }
}