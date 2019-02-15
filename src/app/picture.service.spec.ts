import { TestBed } from '@angular/core/testing';

import { PICTUREService } from './picture.service';

describe('PICTUREService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PICTUREService = TestBed.get(PICTUREService);
    expect(service).toBeTruthy();
  });
});
