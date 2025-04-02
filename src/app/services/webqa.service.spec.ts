import { TestBed } from '@angular/core/testing';

import { WebQAService } from './webqa.service';

describe('WebqaService', () => {
  let service: WebQAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebQAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
