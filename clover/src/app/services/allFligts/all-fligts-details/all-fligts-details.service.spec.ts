import { TestBed } from '@angular/core/testing';

import { AllFligtsDetailsService } from './all-fligts-details.service';

describe('AllFligtsDetailsService', () => {
  let service: AllFligtsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFligtsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
