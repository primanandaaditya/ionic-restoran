import { TestBed } from '@angular/core/testing';

import { GetwilayahService } from './getwilayah.service';

describe('GetwilayahService', () => {
  let service: GetwilayahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetwilayahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
