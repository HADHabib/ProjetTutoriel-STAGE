import { TestBed } from '@angular/core/testing';

import { MessagestorageService } from './messagestorage.service';

describe('MessagestorageService', () => {
  let service: MessagestorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagestorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
