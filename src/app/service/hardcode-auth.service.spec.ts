import { TestBed } from '@angular/core/testing';

import { HardcodeAuthService } from './hardcode-auth.service';

describe('HardcodeAuthService', () => {
  let service: HardcodeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
