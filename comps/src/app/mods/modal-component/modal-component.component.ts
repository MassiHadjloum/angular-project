import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
})
export class ModalComponentComponent implements OnInit {
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) {}


  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }



}
