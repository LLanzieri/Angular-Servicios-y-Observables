import { Pipe, PipeTransform } from '@angular/core';

import { Alumno } from '../interfaces/alumno';

@Pipe({
  name: 'formatearNombreApellido'
})
export class FormatearNombreApellidoPipe implements PipeTransform {

  transform(alumno: Alumno, ...args: string[]): string {
    return args[0] + ", " + args[1];
  }

}
