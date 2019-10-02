import { TestBed } from '@angular/core/testing';

import { MateriaisService } from './materiais.service';

describe('MateriaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MateriaisService = TestBed.get(MateriaisService);
    expect(service).toBeTruthy();
  });
});
