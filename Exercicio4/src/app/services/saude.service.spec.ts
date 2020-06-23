import { TestBed } from '@angular/core/testing';

import { SaudeService } from './saude.service';

describe('SaudeService', () => {
  let service: SaudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
