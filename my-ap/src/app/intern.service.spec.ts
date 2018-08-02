import { TestBed, inject } from '@angular/core/testing';

import { InternService } from './intern.service';

describe('InternService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternService]
    });
  });

  it('should be created', inject([InternService], (service: InternService) => {
    expect(service).toBeTruthy();
  }));
});
