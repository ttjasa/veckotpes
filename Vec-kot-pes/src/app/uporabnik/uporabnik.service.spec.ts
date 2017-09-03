import { TestBed, inject } from '@angular/core/testing';

import { UporabnikService } from './uporabnik.service';

describe('UporabnikService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UporabnikService]
    });
  });

  it('should be created', inject([UporabnikService], (service: UporabnikService) => {
    expect(service).toBeTruthy();
  }));
});
