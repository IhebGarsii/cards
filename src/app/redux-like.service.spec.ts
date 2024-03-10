import { TestBed } from '@angular/core/testing';

import { ReduxLikeService } from './redux-like.service';

describe('ReduxLikeService', () => {
  let service: ReduxLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReduxLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
