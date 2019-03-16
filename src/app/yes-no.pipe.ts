import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(value) {
    if(value) {
      return 'Yes';
    }
    return 'No';
  }

}
