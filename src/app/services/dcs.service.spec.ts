import { TestBed, inject } from '@angular/core/testing';

import { DcsService } from './dcs.service';

describe('DcsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DcsService]
    });
  });

  it('should be created', inject([DcsService], (service: DcsService) => {
    expect(service).toBeTruthy();
  }));
});
