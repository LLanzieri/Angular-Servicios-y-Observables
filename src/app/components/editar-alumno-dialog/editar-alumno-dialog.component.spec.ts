import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnoDialogComponent } from './editar-alumno-dialog.component';

describe('EditarAlumnoDialogComponent', () => {
  let component: EditarAlumnoDialogComponent;
  let fixture: ComponentFixture<EditarAlumnoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
