import { TestBed } from '@angular/core/testing';

import { ItensLocacaoService } from './itens-locacao.service';

describe('ItensLocacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItensLocacaoService = TestBed.get(ItensLocacaoService);
    expect(service).toBeTruthy();
  });
});
