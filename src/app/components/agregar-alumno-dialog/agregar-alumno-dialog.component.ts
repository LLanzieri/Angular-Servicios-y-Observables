import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Alumno } from 'src/app/interfaces/alumno';
import { OpcionesDesplegable } from 'src/app/interfaces/opcionesDesplegable';

@Component({
  selector: 'app-agregar-alumno-dialog',
  templateUrl: './agregar-alumno-dialog.component.html',
  styleUrls: ['./agregar-alumno-dialog.component.css']
})
export class AgregarAlumnoDialogComponent {

  formularioAgregarAlumno!: FormGroup;

  nuevoAlumno!: Alumno;

  opciones: OpcionesDesplegable[] = [
    { valor: true, textoDesplegado: 'Aprobado' },
    { valor: false, textoDesplegado: 'Desaprobado' }

  ];

  constructor(
    private dialogRef: MatDialogRef<AgregarAlumnoDialogComponent>

  ) {

    this.formularioAgregarAlumno = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}$')]),
      cursoAprobado: new FormControl(false, [Validators.required])

    })

  }

  agregarAlumno() {

    if (this.formularioAgregarAlumno.controls['dni'].valid && this.formularioAgregarAlumno.controls['nombre'].valid && this.formularioAgregarAlumno.controls['apellido'].valid && this.formularioAgregarAlumno.controls['edad'].valid && this.formularioAgregarAlumno.controls['cursoAprobado'].valid) {
      let alumno: Alumno = {
        dni: this.formularioAgregarAlumno.controls['dni'].value,
        nombre: this.formularioAgregarAlumno.controls['nombre'].value,
        apellido: this.formularioAgregarAlumno.controls['apellido'].value,
        edad: this.formularioAgregarAlumno.controls['edad'].value,
        cursoAprobado: this.formularioAgregarAlumno.controls['cursoAprobado'].value,
        urlFoto: "../../../assets/incognito.png"
      }

      this.dialogRef.close(alumno);
    }
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

}
