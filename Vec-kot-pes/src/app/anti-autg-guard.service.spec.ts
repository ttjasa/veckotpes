import { TestBed, inject } from '@angular/core/testing';

import { AntiAutgGuardService } from './anti-autg-guard.service';

describe('AntiAutgGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntiAutgGuardService]
    });
  });

  it('should be created', inject([AntiAutgGuardService], (service: AntiAutgGuardService) => {
    expect(service).toBeTruthy();
  }));
});
