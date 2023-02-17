import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlumnoDialogComponent } from './agregar-alumno-dialog.component';

describe('AgregarAlumnoDialogComponent', () => {
  let component: AgregarAlumnoDialogComponent;
  let fixture: ComponentFixture<AgregarAlumnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlumnoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
