import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  search(array: any[], query: string) {
    const lQuery = query.toLowerCase();

    if (!query) {
      return array;
    } else if (array) {
      const filteredArray = array.filter(item => {
        for (const key in item) {
          if ((typeof item[key] === 'string') && (item[key].toLowerCase().indexOf(lQuery) !== -1)) {
            return true;
          }
        }
      });
      return filteredArray;
    }
  }

}
