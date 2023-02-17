import { Alumno } from './../../interfaces/alumno';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { OpcionesDesplegable } from '../../interfaces/opcionesDesplegable';

@Component({
  selector: 'app-editar-alumno-dialog',
  templateUrl: './editar-alumno-dialog.component.html',
  styleUrls: ['./editar-alumno-dialog.component.css']
})
export class EditarAlumnoDialogComponent {

  formularioEditarAlumno!: FormGroup;

  alumnoEditado!: Alumno;

  opciones: OpcionesDesplegable[] = [
    { valor: true, textoDesplegado: 'Aprobado' },
    { valor: false, textoDesplegado: 'Desaprobado' }

  ];

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {

    // Agarro el alumno elegido
    this.alumnoEditado = data;

    this.formularioEditarAlumno = new FormGroup({

      nombre: new FormControl(data.nombre, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      apellido: new FormControl(data.apellido, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      edad: new FormControl(data.edad, [Validators.required, Validators.pattern('^[0-9]{2}$')]),
      cursoAprobado: new FormControl(data.cursoAprobado, [Validators.required])

    })

  }

  editarAlumno() {

    if (this.formularioEditarAlumno.controls['nombre'].valid && this.formularioEditarAlumno.controls['apellido'].valid && this.formularioEditarAlumno.controls['edad'].valid && this.formularioEditarAlumno.controls['cursoAprobado'].valid) {
      this.alumnoEditado.nombre = this.formularioEditarAlumno.controls['nombre'].value;
      this.alumnoEditado.apellido = this.formularioEditarAlumno.controls['apellido'].value;
      this.alumnoEditado.edad = this.formularioEditarAlumno.controls['edad'].value;
      this.alumnoEditado.cursoAprobado = this.formularioEditarAlumno.controls['cursoAprobado'].value;

      this.dialogRef.close(this.alumnoEditado);
    }
  }

  cerrarDialog() {
    this.dialogRef.close(this.alumnoEditado);
  }

}
