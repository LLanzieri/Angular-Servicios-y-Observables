import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Alumno } from '../../interfaces/alumno';
import { ServicioAlumnosService } from 'src/app/services/servicio-alumnos.service';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent implements OnInit {

  constructor(private _alumnosService: ServicioAlumnosService) { }

  listaAlumnos$!: Observable<Alumno[]>;

  ngOnInit(): void {

    // Busco y seteo el observable
    this.listaAlumnos$ = this._alumnosService.obtenerAlumnosObservable();
  }

}
