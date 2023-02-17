import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, from, map, of } from 'rxjs';

import { AgregarAlumnoDialogComponent } from '../agregar-alumno-dialog/agregar-alumno-dialog.component';
import { Alumno } from '../../interfaces/alumno';
import { EditarAlumnoDialogComponent } from '../editar-alumno-dialog/editar-alumno-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table'
import { OpcionesDesplegable } from 'src/app/interfaces/opcionesDesplegable';
import { ServicioAlumnosService } from '../../services/servicio-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit, OnDestroy {

  listaAlumnos!: Alumno[];
  suscripcion!: Subscription;

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

  columnas: string[] = ['DNI', 'Alumno', 'Edad', 'Estado', 'Acciones'];

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _alumnosService: ServicioAlumnosService) { }

  async ngOnInit(): Promise<void> {

    await this._alumnosService.obtenerAlumnosPromise().then(
      (alumnosRecibidos: Alumno[]) => {

        // Asigno la lista del servicio cuando retorna el promise
        this.listaAlumnos = alumnosRecibidos;
      }
    ).catch(
      (error: any) => {
        console.log("ERROR EN PROMISE", error);
      }
    )

    // Refresco la tabla con la lista obtenida
    this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);

    // Al cargar el componente linkeo el Observable - Cada vez que mande next se ejecuta esto
    this.suscripcion = this._alumnosService.obtenerAlumnosObservable().subscribe(
      (listaAlumnoServicio: Alumno[]) => {

        // Asigno lo que me envian a la propiedad
        this.listaAlumnos = listaAlumnoServicio;

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
      }
    )

  }

  ngOnDestroy(): void {

    // Saco la suscripción al observable
    this.suscripcion.unsubscribe();
  }

  editarAlumno(item: Alumno) {
    const dialogRef = this.dialog.open(EditarAlumnoDialogComponent, {
      data: item
    });

    // Agarro el objeto modificado
    dialogRef.afterClosed().subscribe(result => {

      this._alumnosService.actualizarListaAlumnos(result);

      this._snackBar.open('Información actualizada', 'Cerrar', {
        duration: 2000
      });

    });

  }

  eliminarAlumno(DNIEnviado: number) {

    // Envío el dni que quiero eliminar
    this._alumnosService.eliminarAlumno(DNIEnviado);

    this._snackBar.open('Alumno eliminado', 'Cerrar', {
      duration: 2000
    });

  }

  agregarAlumno() {
    const dialogRef = this.dialog.open(AgregarAlumnoDialogComponent, {

    });

    // Agarro el objeto modificado
    dialogRef.afterClosed().subscribe(result => {

      let existeDNI: boolean = false;

      // Si el modal mando algo, me fijo si no existe ya el DNI que quiero agregar
      if (result) {

        existeDNI = this.listaAlumnos.some(element => {
          if (element.dni == result.dni) {
            return true;
          }

          return false;
        });
      }

      // Si el dialog mando algo y EXISTE EL DNI - DNI DUPLICADO
      if (result && existeDNI) {
        this._snackBar.open('DNI duplicado', 'Cerrar', {
          duration: 2000
        });
      }

      // Si el dialog mando algo y NO EXISTE EL DNI - AGREGO
      if (result && !existeDNI) {

        this._alumnosService.agregarAlumno(result);

        this._snackBar.open('Alumno agregado', 'Cerrar', {
          duration: 2000
        });

      }

    });
  }

  mostrarAprobados(valor: boolean) {

    if (valor) {
      of(this.listaAlumnos).pipe(
        map((alumnos: Alumno[]) => {
          return alumnos.filter((item: Alumno) => item.cursoAprobado == true)
        })
      ).subscribe((resultado) => {

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(resultado);
      });
    }
    else
      // Refresco la tabla con la lista obtenida
      this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);

  }

  mostrarDesaprobados(valor: boolean) {

    if (valor) {
      of(this.listaAlumnos).pipe(
        map((alumnos: Alumno[]) => {
          return alumnos.filter((item: Alumno) => item.cursoAprobado == false)
        })
      ).subscribe((resultado) => {

        // Refresco la tabla con la lista obtenida
        this.dataSource = new MatTableDataSource<Alumno>(resultado);
      });
    }
    else
      // Refresco la tabla con la lista obtenida
      this.dataSource = new MatTableDataSource<Alumno>(this.listaAlumnos);
  }

}