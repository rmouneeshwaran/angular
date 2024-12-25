import { TestBed } from '@angular/core/testing';

import { SeekerRegisterService } from './seeker-register.service';

describe('SeekerRegisterService', () => {
  let service: SeekerRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeekerRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
