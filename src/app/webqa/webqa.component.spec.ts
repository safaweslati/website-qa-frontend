import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebqaComponent } from './webqa.component';

describe('WebqaComponent', () => {
  let component: WebqaComponent;
  let fixture: ComponentFixture<WebqaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebqaComponent]
    });
    fixture = TestBed.createComponent(WebqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
