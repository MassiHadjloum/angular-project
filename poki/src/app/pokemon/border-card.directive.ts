import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private dafaultHeight: number = 440;

  constructor(private el:ElementRef) {
    this.setHeight(this.dafaultHeight);
    this.setBorder(this.initColor);
  }

  @Input('appBorderCard') borderColor: string;


  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.cursor = 'pointer';
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `5px solid ${color}`
  }

}
