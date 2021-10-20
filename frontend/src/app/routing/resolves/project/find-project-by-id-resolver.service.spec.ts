import { TestBed } from '@angular/core/testing';

import { FindProjectByIdResolverService } from './find-project-by-id-resolver.service';

describe('FindProjectByIdResolverService', () => {
  let service: FindProjectByIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindProjectByIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
