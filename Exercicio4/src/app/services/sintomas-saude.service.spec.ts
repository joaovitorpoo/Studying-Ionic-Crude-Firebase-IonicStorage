import { TestBed } from '@angular/core/testing';

import { SintomasSaudeService } from './sintomas-saude.service';

describe('SintomasSaudeService', () => {
  let service: SintomasSaudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SintomasSaudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
