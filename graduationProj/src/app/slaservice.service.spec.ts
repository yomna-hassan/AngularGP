import { TestBed, inject } from '@angular/core/testing';

import { SlaserviceService } from './slaservice.service';

describe('SlaserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlaserviceService]
    });
  });

  it('should be created', inject([SlaserviceService], (service: SlaserviceService) => {
    expect(service).toBeTruthy();
  }));
});
