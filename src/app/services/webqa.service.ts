import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WebQAService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  analyze(url: string) {
    return this.http
      .post<any>(`${this.apiUrl}/analyze`, { url })
      .pipe(map((response) => this.normalizeResponse(response)));
  }

  private normalizeResponse(response: any) {
    const sections = ['ux', 'seo', 'html', 'accessibility'];
    const result: any = { url: response.url };

    sections.forEach((section) => {
      const key = `${section}_analysis`;
      const data = response[key] || { score: 0, issues: [], summary: '' };

      result[key] = {
        score: data.score,
        summary: data.summary || '',
        issues: (data.issues || []).map((issue: any) => ({
          ...issue,
          status: this.getStatus(issue.severity),
          statusColor: this.getStatusColor(issue.severity),
          statusIcon: this.getStatusIcon(issue.severity),
          title: issue.description,
          recommendation: issue.recommendation,
        })),
      };
    });

    return result;
  }

  private getStatus(severity = 'medium') {
    const statusMap: Record<string, string> = {
      high: 'error',
      medium: 'warning',
      low: 'good',
    };
    return statusMap[severity.toLowerCase()] || 'good';
  }

  public getStatusColor(severity = 'medium') {
    const colorMap: Record<string, string> = {
      high: 'text-red-500',
      medium: 'text-yellow-500',
      low: 'text-green-500',
    };
    return colorMap[severity.toLowerCase()] || 'text-gray-500';
  }

  public getStatusIcon(severity = 'medium') {
    const iconMap: Record<string, string> = {
      high: 'error',
      medium: 'warning',
      low: 'info',
    };
    return iconMap[severity.toLowerCase()] || 'help';
  }
}
