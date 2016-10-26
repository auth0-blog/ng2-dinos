import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(array: any[], args: string) {
    let lArgs = args.toLowerCase();

    if (!args[0]) {
      return array;
    } else if (array) {
      let filteredArray = array.filter(item => {
        for (let key in item) {
          let value = item[key];

          if ((typeof value === 'string' || value instanceof String) && (value.toLowerCase().indexOf(lArgs) !== -1)) {
            return true;
          }
        }
      });
      return filteredArray;
    }
  }
}
