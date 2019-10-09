import { TestBed } from '@angular/core/testing';

import { AssistenteService } from './assistente.service';

describe('AssistenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssistenteService = TestBed.get(AssistenteService);
    expect(service).toBeTruthy();
  });
});
