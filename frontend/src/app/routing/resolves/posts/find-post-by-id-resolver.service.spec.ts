import { TestBed } from '@angular/core/testing';

import { FindPostByIdResolverService } from './find-post-by-id-resolver.service';

describe('FindPostByIdResolverService', () => {
  let service: FindPostByIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPostByIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
