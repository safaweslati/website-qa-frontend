// analysis-section.component.ts
import { Component, Input } from '@angular/core';
import { WebQAService } from '../services/webqa.service';

@Component({
  selector: 'app-analysis-section',
  templateUrl: './analysis-section.component.html',
  styleUrls: ['./analysis-section.component.scss'],
})
export class AnalysisSectionComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() items: any[] = [];
  @Input() score?: number;
  @Input() headerClasses: string = '';
  constructor(public webQA: WebQAService) {}
}
