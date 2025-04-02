// summary-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
})
export class SummaryCardComponent {
  @Input() title: string = '';
  @Input() summary: string = '';
  @Input() icon: string = '';
  @Input() color: string = 'blue';
}
