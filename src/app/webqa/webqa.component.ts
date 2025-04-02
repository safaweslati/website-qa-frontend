import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize } from 'rxjs/operators';
import { WebQAService } from '../services/webqa.service';

interface AnalysisSection {
  score: number;
  issues: any[];
  summary: string;
}

interface AnalysisResult {
  url: string;
  ux_analysis: AnalysisSection;
  seo_analysis: AnalysisSection;
  html_analysis: AnalysisSection;
  accessibility_analysis: AnalysisSection;
}

@Component({
  selector: 'app-webqa',
  templateUrl: './webqa.component.html',
})
export class WebqaComponent {
  analysisForm: FormGroup;
  analysisResult: AnalysisResult | null = null;
  isLoading = false;
  errorMessage?: string;

  constructor(private fb: FormBuilder, private webQA: WebQAService) {
    this.analysisForm = this.fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
          ),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.analysisForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = undefined;
    this.analysisResult = null;

    this.webQA
      .analyze(this.analysisForm.value.url!)
      .pipe(
        catchError((err) => {
          this.errorMessage =
            err.error?.detail || 'Analysis failed. Please try again.';
          return [];
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((response) => {
        this.analysisResult = {
          url: response.url || '',
          ux_analysis: this.normalizeSection(response.ux_analysis),
          seo_analysis: this.normalizeSection(response.seo_analysis),
          html_analysis: this.normalizeSection(response.html_analysis),
          accessibility_analysis: this.normalizeSection(
            response.accessibility_analysis
          ),
        };
      });
  }

  private normalizeSection(section?: any): AnalysisSection {
    return {
      score: section?.score || 0,
      issues: section?.issues || [],
      summary: section?.summary || '',
    };
  }

  getScore(section: AnalysisSection): number {
    return section.score;
  }

  getAnalysisItems(section: AnalysisSection): any[] {
    return section.issues;
  }
}
