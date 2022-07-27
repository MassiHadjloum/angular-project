import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celFrh'
})
export class CelFrhPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return !value ? '' :  (value * 1.8) + 32.00
  }

}
