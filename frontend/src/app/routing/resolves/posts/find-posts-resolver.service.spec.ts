import { TestBed } from '@angular/core/testing';

import { FindPostsResolverService } from './find-posts-resolver.service';

describe('FindPostsResolverService', () => {
  let service: FindPostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
