import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuDesplegado: boolean = false;

  actualizarMenu(estado: boolean) {

    this.menuDesplegado = estado;
  }
}
