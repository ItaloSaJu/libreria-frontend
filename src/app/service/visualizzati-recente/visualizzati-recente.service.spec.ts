import { TestBed } from '@angular/core/testing';

import { VisualizzatiRecenteService } from './visualizzati-recente.service';

describe('VisualizzatiRecenteService', () => {
  let service: VisualizzatiRecenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizzatiRecenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
