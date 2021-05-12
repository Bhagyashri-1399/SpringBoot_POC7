import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  /* transform(items: any, searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase.includes(searchText);
    });
  }
 */
  transform(teachers: User[], searchText: string) {
    return teachers.filter(teacher => teacher.firstName.indexOf(searchText) !== -1 || teacher.city.indexOf(searchText) !==-1);
  }
 

}
