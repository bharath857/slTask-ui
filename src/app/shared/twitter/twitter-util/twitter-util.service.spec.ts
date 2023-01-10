import { TestBed } from '@angular/core/testing';

import { TwitterUtilService } from './twitter-util.service';

describe('TwitterUtilService', () => {
  let service: TwitterUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
