import { TestBed } from '@angular/core/testing';

import { LiverService } from './liver.service';

describe('LiverService', () => {
  let service: LiverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
