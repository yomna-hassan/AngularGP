import { TestBed, inject } from '@angular/core/testing';

import { TicketserviceService } from './ticketservice.service';

describe('TicketserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketserviceService]
    });
  });

  it('should be created', inject([TicketserviceService], (service: TicketserviceService) => {
    expect(service).toBeTruthy();
  }));
});
