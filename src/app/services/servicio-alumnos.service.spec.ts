import { TestBed } from '@angular/core/testing';

import { ServicioAlumnosService } from './servicio-alumnos.service';

describe('ServicioAlumnosService', () => {
  let service: ServicioAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
