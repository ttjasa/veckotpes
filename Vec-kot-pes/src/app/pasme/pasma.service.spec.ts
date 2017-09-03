import { TestBed, inject } from '@angular/core/testing';

import { PasmaService } from './pasma.service';

describe('PasmaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasmaService]
    });
  });

  it('should be created', inject([PasmaService], (service: PasmaService) => {
    expect(service).toBeTruthy();
  }));
});
