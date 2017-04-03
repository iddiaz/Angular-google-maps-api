import { TestBed, inject } from '@angular/core/testing';
import { MapasService } from './mapas.service';

describe('MapasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapasService]
    });
  });

  it('should ...', inject([MapasService], (service: MapasService) => {
    expect(service).toBeTruthy();
  }));
});
