import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   */
   transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined' && property) {
      return value.filter((e) => {
        return e[property] != null && e[property].toLowerCase().indexOf(searchString?.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
