import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  isOpen: boolean = false;

  parentNode: HTMLElement;
  siblingNode: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    this.siblingNode = this.renderer.nextSibling(this.elementRef.nativeElement);

    this.parentNode.className = 'dropdown';
    this.siblingNode.className = 'dropdown-menu';
  }

  @HostListener('click', ['$event']) click(e: Event) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    this.parentNode.className = this.isOpen ? 'dropdown show' : 'dropdown';
    this.siblingNode.className = this.isOpen ? 'dropdown-menu show' : 'dropdown-menu';
  }

  @HostListener('blur', ['$event']) blur(e: Event) {
    this.isOpen = false;
    this.parentNode.className = 'dropdown';
    this.siblingNode.className = 'dropdown-menu';
  }
}