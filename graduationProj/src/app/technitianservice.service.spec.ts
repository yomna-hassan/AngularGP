import { TestBed, inject } from '@angular/core/testing';

import { TechnitianserviceService } from './technitianservice.service';

describe('TechnitianserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnitianserviceService]
    });
  });

  it('should be created', inject([TechnitianserviceService], (service: TechnitianserviceService) => {
    expect(service).toBeTruthy();
  }));
});
