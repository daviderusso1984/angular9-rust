import { TestBed } from '@angular/core/testing';

import { WasmProvaService } from './wasm-prova.service';

describe('WasmProvaService', () => {
  let service: WasmProvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasmProvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
