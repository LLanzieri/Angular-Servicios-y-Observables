import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() estadoMenuTool!: boolean;
  @Output() eventoCambioEstadoMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this.estadoMenuTool = !this.estadoMenuTool;
    this.eventoCambioEstadoMenu.emit(this.estadoMenuTool);
  }

}
