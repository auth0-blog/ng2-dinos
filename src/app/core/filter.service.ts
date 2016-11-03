import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  search(array: any[], query: string) {
    let lQuery = query.toLowerCase();

    if (!query) {
      return array;
    } else if (array) {
      let filteredArray = array.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string') && (item[key].toLowerCase().indexOf(lQuery) !== -1)) {
            return true;
          }
        }
      });
      return filteredArray;
    }
  }

}
