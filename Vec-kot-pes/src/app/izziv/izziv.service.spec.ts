import { TestBed, inject } from '@angular/core/testing';

import { IzzivService } from './izziv.service';

describe('IzzivService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IzzivService]
    });
  });

  it('should be created', inject([IzzivService], (service: IzzivService) => {
    expect(service).toBeTruthy();
  }));
});
