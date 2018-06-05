import { TestBed, inject } from '@angular/core/testing';

import { LayerserviceService } from './layerservice.service';

describe('LayerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayerserviceService]
    });
  });

  it('should be created', inject([LayerserviceService], (service: LayerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
