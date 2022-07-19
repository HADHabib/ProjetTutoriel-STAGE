import { TestBed } from '@angular/core/testing';

import { SharedHomepageService } from './shared-homepage.service';

describe('SharedHomepageService', () => {
  let service: SharedHomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedHomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
