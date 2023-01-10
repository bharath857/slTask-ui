import { TestBed } from '@angular/core/testing';

import { IndividualInfoService } from './individual-info.service';

describe('IndividualInfoService', () => {
  let service: IndividualInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
