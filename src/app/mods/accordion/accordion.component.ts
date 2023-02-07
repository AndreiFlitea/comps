import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() accordionArray: any;

  currentIndex: number = 0;

  onClick(index: number) {
    if (this.currentIndex !== index) this.currentIndex = index;
    else this.currentIndex = -1;
  }
}
