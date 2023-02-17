import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ModuloPersonalizadoModule } from './modulo-personalizado.module';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormatoTituloDirective } from './directives/formato-titulo.directive';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { FormatearNombreApellidoPipe } from './pipes/formatear-nombre-apellido.pipe';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { AgregarAlumnoDialogComponent } from './components/agregar-alumno-dialog/agregar-alumno-dialog.component';
import { BooleanoAtextoPipe } from './pipes/booleano-atexto.pipe';
import { ListaCardsComponent } from './components/lista-cards/lista-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FormatoTituloDirective,
    ListaAlumnosComponent,
    FormatearNombreApellidoPipe,
    EditarAlumnoDialogComponent,
    AgregarAlumnoDialogComponent,
    BooleanoAtextoPipe,
    ListaCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModuloPersonalizadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
