import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mlKm'
})
export class MlKmPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if(!value){
      return '';
    }
    switch(args[0]){
      case 'km':
        return   value * 1.609344;
      case 'm':
        return   value * 1.609344 * 1000;
      case 'cm':
        return value * 1.609344 * 1000 * 100;
      default:
        throw new Error('Target unit not supported');
    }

  }

}
