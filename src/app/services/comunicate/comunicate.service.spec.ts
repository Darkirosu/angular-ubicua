import { TestBed } from '@angular/core/testing';

import { ComunicateService } from './comunicate.service';

describe('ComunicateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicateService = TestBed.get(ComunicateService);
    expect(service).toBeTruthy();
  });
});
