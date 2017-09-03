import { TestBed, inject } from '@angular/core/testing';

import { ObjavaService } from './objava.service';

describe('ObjavaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjavaService]
    });
  });

  it('should be created', inject([ObjavaService], (service: ObjavaService) => {
    expect(service).toBeTruthy();
  }));
});
