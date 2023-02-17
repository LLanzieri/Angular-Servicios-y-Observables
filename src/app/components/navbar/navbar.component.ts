import { Component, Input, OnInit } from '@angular/core';

import { AgregarAlumnoDialogComponent } from '../agregar-alumno-dialog/agregar-alumno-dialog.component';
import { Alumno } from '../../interfaces/alumno';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() estadoMenuNav!: boolean;

}
