import { TestBed } from '@angular/core/testing';

import { TwitterInterceptor } from './twitter.interceptor';

describe('TwitterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TwitterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TwitterInterceptor = TestBed.inject(TwitterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
