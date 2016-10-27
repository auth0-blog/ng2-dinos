import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  constructor() { }

  search(array: any[], query: string) {
    let lQuery = query.toLowerCase();

    if (!query) {
      return array;
    } else if (array) {
      let filteredArray = array.filter(item => {
        for (let key in item) {
          let value = item[key];

          if ((typeof value === 'string') && (value.toLowerCase().indexOf(lQuery) !== -1)) {
            return true;
          }
        }
      });
      return filteredArray;
    }
  }

}
