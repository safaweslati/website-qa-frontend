import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSectionComponent } from './analysis-section.component';

describe('AnalysisSectionComponent', () => {
  let component: AnalysisSectionComponent;
  let fixture: ComponentFixture<AnalysisSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisSectionComponent]
    });
    fixture = TestBed.createComponent(AnalysisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
