import { TestBed } from '@angular/core/testing';

import { FindProjectsResolverService } from './find-projects-resolver.service';

describe('FindProjectsResolverService', () => {
  let service: FindProjectsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindProjectsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
