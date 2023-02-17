import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoAtexto'
})
export class BooleanoAtextoPipe implements PipeTransform {

  transform(valor: boolean): string {
    return valor ? "Aprobado" : "Desaprobado";
  }

}
